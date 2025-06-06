import { Injectable, inject } from '@angular/core';
import { RequestService } from './request.service';
import { SetLanguageService } from './set-language.service';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

/** Interfaces pour un typage fort */
interface Snak {
  property: string;
  datatype?: string;
  datavalue?: { value: { id: string } };
}

interface Reference {
  'snaks-order': string[];
  snaks: { [key: string]: Snak[] };
}

interface Claim {
  mainsnak: Snak;
  qualifiers?: { [key: string]: Snak[] };
  'qualifiers-order'?: string[];
  references?: Reference[];
}

interface ClaimsObject {
  [property: string]: Claim[];
}

interface Entity {
  claims: ClaimsObject;
}

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private requestService = inject(RequestService);
  private setLanguage = inject(SetLanguageService);

  /**
   * Retourne la liste unique des propriétés de référence d’une entité.
   */
  getReferenceProperties(u: Entity): string[] {
    const referenceProperties = Object.values(u.claims)
      .flatMap(val => val)
      .flatMap(claim => claim.references ?? [])
      .flatMap(ref => ref['snaks-order'] ?? []);
    return this.uniq(referenceProperties);
  }

  /**
   * Crée la liste des propriétés dans les statements, qualifiers et références.
   * Retourne un Observable des propriétés enrichies.
   */
  setPropertiesList(u: Entity): Observable<any[]> {
    const claimsArray = Object.values(u.claims);

    let properties = claimsArray.flatMap(val => val.map(claim => claim.mainsnak.property));
    let qualifierProperties = claimsArray.flatMap(val => val.flatMap(claim => claim['qualifiers-order'] ?? []));
    let referenceProperties = claimsArray
      .flatMap(val => val)
      .flatMap(claim => claim.references ?? [])
      .flatMap(ref => ref['snaks-order'] ?? []);

    qualifierProperties = this.uniq(qualifierProperties);
    referenceProperties = this.uniq(referenceProperties);

    properties = this.uniq([...properties, ...qualifierProperties, ...referenceProperties]);
    const propertiesChunks = this.lessThanFifty(properties);

    if (propertiesChunks.length > 8) {
      return throwError(() => new Error('Trop de statements (plus de 8 groupes de 50 propriétés)'));
    }

    const propertiesLists = propertiesChunks.map(list => this.createList(list).slice(1));
    while (propertiesLists.length < 8) propertiesLists.push('');

    return this.requestService.requestProperties(propertiesLists)
      .pipe(
        map(res => this.mergeObjects(res as any[])), // <--- cast ici
        map(res => Object.values(res))
      );

  }

  /**
   * Crée la liste des items dans les statements, qualifiers et références.
   * Retourne un Observable des items enrichis.
   */
  setItemsList(u: Entity): Observable<any[]> {
    const claimsArray = Object.values(u.claims);

    let items = claimsArray.flatMap(val =>
      val
        .filter(claim => claim.mainsnak.datavalue?.value?.id !== undefined)
        .map(claim => claim.mainsnak.datavalue.value.id)
    );

    let qualifierProperties = claimsArray.flatMap(val => val.flatMap(claim => claim['qualifiers-order'] ?? []));
    let referenceProperties = claimsArray
      .flatMap(val => val)
      .flatMap(claim => claim.references ?? [])
      .flatMap(ref => ref['snaks-order'] ?? []);

    qualifierProperties = this.uniq(qualifierProperties);
    referenceProperties = this.uniq(referenceProperties);

    const qualifierItems = this.setQualifierItems(claimsArray, qualifierProperties).filter(Boolean);
    const referenceItems = this.setReferenceItems(claimsArray, referenceProperties).filter(Boolean);

    items = this.uniq([...items, ...qualifierItems, ...referenceItems]);
    const itemsChunks = this.lessThanFifty(items);

    if (itemsChunks.length > 8) {
      return throwError(() => new Error('Trop de statements (plus de 8 groupes de 50 items)'));
    }

    const itemsLists = itemsChunks.map(list => this.createList(list).slice(1));
    while (itemsLists.length < 8) itemsLists.push('');

    return this.requestService.requestItems(itemsLists)
      .pipe(
        map(res => this.mergeObjects(res as any[])), // <--- cast ici
        map(res => Object.values(res))
      );

  }

  /**
   * Retourne la liste unique des propriétés dans les qualifiers et références.
   */
  setProperties(arr: any[]): string[] {
    return arr.flatMap(obj => Object.keys(obj));
  }

  /**
   * Fusionne les objets contenus dans un tableau pour créer un seul objet.
   */
  mergeObjects(res: any[]): any {
    // Filtrer les objets valides qui possèdent la propriété 'entities'
    const validObjects = (res ?? []).filter(obj => obj && obj.entities);
    let u = validObjects.length > 0 ? validObjects[0].entities : {};
    for (const obj of validObjects.slice(1)) {
      u = { ...u, ...obj.entities };
    }
    return u;
  }


  /**
   * Retourne la liste des items dans les qualifiers.
   */
  setQualifierItems(values: Claim[][], arr: string[]): string[] {
    arr = arr.filter(Boolean);
    const result: string[] = [];
    for (const val of values) {
      for (const claim of val) {
        for (const prop of arr) {
          if (claim.qualifiers?.[prop]) {
            for (const snak of claim.qualifiers[prop]) {
              if (snak?.datavalue?.value?.id) {
                result.push(snak.datavalue.value.id);
              }
            }
          }
        }
      }
    }
    return result;
  }

  /**
   * Retourne la liste des items dans les références.
   */
  setReferenceItems(values: Claim[][], arr: string[]): string[] {
    arr = arr.filter(Boolean);
    const result: string[] = [];
    for (const val of values) {
      for (const claim of val) {
        if (!claim.references) continue;
        for (const ref of claim.references) {
          for (const prop of arr) {
            const snaks = ref.snaks[prop];
            if (snaks && snaks[0]?.datatype === 'wikibase-item') {
              for (const snak of snaks) {
                if (snak?.datavalue?.value?.id) {
                  result.push(snak.datavalue.value.id);
                }
              }
            }
          }
        }
      }
    }
    return result;
  }

  /**
   * Crée une chaîne de caractères à partir d’un tableau, séparée par '|'.
   */
  createList(arr: string[]): string {
    return Array.from(new Set(arr)).reduce((list, item) => list + '|' + item, '');
  }

  /**
   * Retourne un tableau sans doublons.
   */
  uniq<T>(a: T[]): T[] {
    return Array.from(new Set(a.filter(Boolean)));
  }

  /**
   * Découpe un tableau en sous-tableaux de 50 éléments maximum.
   */
  lessThanFifty<T>(arr: T[]): T[][] {
    const result: T[][] = [];
    let u = arr.length;
    let tempArr = arr.slice();
    while (u > 0) {
      result.push(tempArr.slice(0, 50));
      tempArr = tempArr.slice(50);
      u = tempArr.length;
    }
    return result;
  }
}
