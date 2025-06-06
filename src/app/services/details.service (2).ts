//details.service.ts refactorisé à tester
import { Injectable, inject } from '@angular/core';
import { RequestService } from './request.service';
import { SetLanguageService } from './set-language.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private requestService = inject(RequestService);
  private setLanguage = inject(SetLanguageService);

  getReferenceProperties(u: any): any[] {
    const values = Object.values(u.claims);
    let referenceProperties: any[] = [];

    values.forEach(val => {
      val.forEach((u: any) => {
        if (u.references) {
          u.references.forEach((ref: any) => {
            referenceProperties = referenceProperties.concat(ref["snaks-order"]);
          });
        }
      });
    });

    return this.uniq(referenceProperties);
  }

  setPropertiesList(u: any) {
    const values = Object.values(u.claims);
    let properties: any[] = [];
    let qualifierProperties: any[] = [];
    let referenceProperties: any[] = [];

    values.forEach(val => {
      val.forEach((u: any) => {
        properties.push(u.mainsnak.property);
        qualifierProperties = qualifierProperties.concat(u["qualifiers-order"]);
        if (u.references) {
          u.references.forEach((ref: any) => {
            referenceProperties = referenceProperties.concat(ref["snaks-order"]);
          });
        }
      });
    });

    properties = this.uniq(properties.concat(this.uniq(qualifierProperties)).concat(this.uniq(referenceProperties)));
    properties = this.lessThanFifty(properties);

    const propertiesLists = properties.map(this.createList).map(list => list.slice(1));
    if (properties[8] !== undefined) { alert("too many statements"); }

    return this.requestService.requestProperties(...propertiesLists)
      .pipe(
        map(res => this.mergeObjects(res)),
        map(res => Object.values(res))
      );
  }

  setItemsList(u: any) {
    const values = Object.values(u.claims);
    let items: any[] = [];
    let qualifierProperties: any[] = [];
    let referenceProperties: any[] = [];

    values.forEach(val => {
      val.forEach((u: any) => {
        if (u.mainsnak.datavalue.value.id) {
          items.push(u.mainsnak.datavalue.value.id);
        }
        qualifierProperties = qualifierProperties.concat(u["qualifiers-order"]);
        if (u.references) {
          u.references.forEach((ref: any) => {
            referenceProperties = referenceProperties.concat(ref["snaks-order"]);
          });
        }
      });
    });

    items = items.concat(this.setQualifierItems(values, this.uniq(qualifierProperties)))
      .concat(this.setReferenceItems(values, this.uniq(referenceProperties)))
      .filter(Boolean);

    items = this.lessThanFifty(this.uniq(items));

    const itemsLists = items.map(this.createList).map(list => list.slice(1));
    if (items[8] !== undefined) { alert("too many statements"); }

    return this.requestService.requestItems(...itemsLists)
      .pipe(
        map(res => this.mergeObjects(res)),
        map(res => Object.values(res))
      );
  }

  setProperties(arr: any[]): any[] {
    return arr.reduce((result, item) => {
      return result.concat(Object.keys(item));
    }, []);
  }

  mergeObjects(res: any[]): any {
    return res.reduce((acc, curr) => {
      return { ...acc, ...curr.entities };
    }, res[0].entities);
  }

  setQualifierItems(values: any[], arr: any[]): any[] {
    return values.reduce((result, val) => {
      val.forEach((u: any) => {
        arr.forEach((prop: any) => {
          if (u.qualifiers && u.qualifiers[prop]) {
            u.qualifiers[prop].forEach((qualifier: any) => {
              if (qualifier.datavalue.value.id) {
                result.push(qualifier.datavalue.value.id);
              }
            });
          }
        });
      });
      return result;
    }, []);
  }

  setReferenceItems(values: any[], arr: any[]): any[] {
    return values.reduce((result, val) => {
      val.forEach((u: any) => {
        if (u.references) {
          u.references.forEach((ref: any) => {
            arr.forEach((prop: any) => {
              if (ref.snaks[prop] && ref.snaks[prop].datatype === "wikibase-item") {
                ref.snaks[prop].forEach((snak: any) => {
                  if (snak.datavalue.value.id) {
                    result.push(snak.datavalue.value.id);
                  }
                });
              }
            });
          });
        }
      });
      return result;
    }, []);
  }

  createList(arr: any[]): string {
    return arr.filter(Boolean).join('|');
  }

  uniq(arr: any[]): any[] {
    return Array.from(new Set(arr));
  }

  lessThanFifty(arr: string[]): string[][] {
    const result: string[][] = [];
    while (arr.length > 0) {
      result.push(arr.splice(0, 50));
    }
    return result;
  }
}
