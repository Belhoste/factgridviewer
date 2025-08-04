import { Injectable, inject } from '@angular/core';
import { SetLanguageService } from './set-language.service';
import { DetailsService } from './details.service';
import { PropertyDetailsService } from './property-details.service';
import { ItemDetailsService } from './item-details.service';
import { RoleOfObjectRenderingService } from './role-of-object-rendering.service'; 
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateItemToDisplayService {
  private setLanguage = inject(SetLanguageService);
  private details = inject(DetailsService);
  private addPropertyDetails = inject(PropertyDetailsService);
  private addItemDetails = inject(ItemDetailsService);
  private roleOfObjectRendering = inject(RoleOfObjectRenderingService);

  createItemToDisplay(re, selectedLang) {
    const itemProperties = Object.keys(re.claims);

    return forkJoin({
      properties: this.details.setPropertiesList(re),
      items: this.details.setItemsList(re)
    }).pipe(
      map(res => {
        // Prepare property and item metadata in the selected language
        const propertiesDetails = this.setLanguage.item2(res.properties, selectedLang);
        const itemsDetails = this.setLanguage.item2(res.items, selectedLang);

        // Enrich the claims with all necessary details
        this.enrichClaims(re, propertiesDetails, itemsDetails, itemProperties, selectedLang);

        // Applique la transformation avancée des rôles d'objet
        this.roleOfObjectRendering.transformProperties(re);

        // Apply the P820 label transformation
        this.transformClaimsWithP820(re);
        const updatedItemProperties = Object.keys(re.claims);

        // Retrieve qualifier and reference property lists
        const qualifierProperties = this.addPropertyDetails.addQualifierPropertyDetails(propertiesDetails, re, updatedItemProperties)[1];
        const referenceProperties = this.details.getReferenceProperties(re);

        // Build the final item structure
        const item = this.addItemDetails.addReference2ItemDetails(itemsDetails, re, updatedItemProperties);

        return [item, updatedItemProperties, qualifierProperties, referenceProperties];
      })
    );
  }

  /** Groups all claim enrichment steps for clarity */
  private enrichClaims(re, propertiesDetails, itemsDetails,
    itemProperties, selectedLang) {
    const updatedItemProperties = Object.keys(re.claims);
    this.addItemDetails.addSitelinksDetails(re);
    this.addPropertyDetails.addClaimPropertyDetails(propertiesDetails, re, itemProperties);
    this.addPropertyDetails.addQualifierPropertyDetails(propertiesDetails, re, itemProperties);
    this.addPropertyDetails.addQualifier2PropertyDetails(propertiesDetails, re, itemProperties);
    this.addPropertyDetails.addReferencePropertyDetails(propertiesDetails, re, itemProperties);
    this.addPropertyDetails.addReference2PropertyDetails(propertiesDetails, re, itemProperties);

    this.addItemDetails.addClaimItemDetails(itemsDetails, re, itemProperties, selectedLang);
    this.addItemDetails.addQualifierItemDetails(itemsDetails, re, itemProperties, selectedLang);
    this.addItemDetails.addReferenceItemDetails(itemsDetails, re, itemProperties, selectedLang);
  }

  /** Appends the P820 label (lowercase) in parentheses to the statement label and removes the qualifier */
  private transformClaimsWithP820(item: any) {
    let claims = item.claims;
    if (!claims) return;

    // 1. Suppression des qualifiers P820 et des statements sans qualifiers
    for (const prop of Object.keys(claims)) {
      // On boucle à l'envers pour pouvoir supprimer des éléments
      for (let i = claims[prop].length - 1; i >= 0; i--) {
        const statement = claims[prop][i];
        if (!statement.qualifiers2 || !statement.qualifiers) continue;

        const p820Qualifier2 = statement.qualifiers2.find(q => q.id === 'P820');
        if (p820Qualifier2 && p820Qualifier2.display && p820Qualifier2.display.length > 0) {
          // Ajout du label du rôle
          const roleLabels = p820Qualifier2.display
            .map(d => d.label ? d.label.charAt(0).toLowerCase() + d.label.slice(1) : '')
            .filter(label => !!label)
            .join(', ');

          if (roleLabels && statement.mainsnak.label) {
            statement.mainsnak.label += ` (${roleLabels})`;
          } else if (roleLabels) {
            statement.mainsnak.label = `(${roleLabels})`;
          }
        }
      }
    }

    // 2. Suppression des propriétés dont le tableau est vide
    for (const prop of Object.keys(claims)) {
      if (Array.isArray(claims[prop]) && claims[prop].length === 0) {
        delete claims[prop];
      }
    }
  }

}
