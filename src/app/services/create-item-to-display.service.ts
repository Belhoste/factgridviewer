import { Injectable } from '@angular/core';
import { SetLanguageService } from './set-language.service';
import { DetailsService } from  './details.service';
import { PropertyDetailsService } from './property-details.service';
import { SetItemToDisplayService } from './set-item-to-display.service';
import { ItemDetailsService } from './item-details.service';
import { forkJoin, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CreateItemToDisplayService {

  private subject : BehaviorSubject <any> = new BehaviorSubject(null);

  constructor(private setLanguage:SetLanguageService, private details:DetailsService, private setItem:SetItemToDisplayService, 
    private addPropertyDetails:PropertyDetailsService, private addItemDetails:ItemDetailsService) { }

    createItemToDisplay(re, selectedLang) {
      let values = Object.values(re.claims);
      let propertyIds = Object.keys(re.claims);
      let u;
      let observedItem = forkJoin({
        properties: this.details.setPropertiesList(re),
        items: this.details.setItemsList(re) } ).pipe(
          map(res =>{     
          let qualifierProperties=[];
          let propertiesDetails = this.setLanguage.item2(res.properties,selectedLang); 
          this.addItemDetails.addSidelinksDetails(re);
          let referenceProperties = this.details.getReferenceProperties(re);
          this.addPropertyDetails.addClaimPropertyDetails(propertiesDetails,re, propertyIds);
          this.addPropertyDetails.addQualifierPropertyDetails(propertiesDetails,re, propertyIds)[0];
          qualifierProperties = this.addPropertyDetails.addQualifierPropertyDetails(propertiesDetails,re, propertyIds)[1];
          this.addPropertyDetails.addQualifier2PropertyDetails(propertiesDetails,re, propertyIds)[1];
          this.addPropertyDetails.addReferencePropertyDetails(propertiesDetails, re, propertyIds);
          this.addPropertyDetails.addReference2PropertyDetails(propertiesDetails, re, propertyIds)
          let itemsDetails = this.setLanguage.item2(res.items,selectedLang) ;
          this.addItemDetails.addClaimItemDetails(itemsDetails, re, propertyIds, selectedLang);// selected item with all the properties and items (with their labels and descriptions) of the mainsnaks
          this.addItemDetails.addQualifierItemDetails(itemsDetails, re, propertyIds);
          this.addItemDetails.addQualifier2ItemDetails(re, propertyIds);
          this.addItemDetails.addReferenceItemDetails(itemsDetails, re, propertyIds); // selected item with all the properties (with their labels and descriptions) of the mainsnaks
  u=      this.addItemDetails.addReference2ItemDetails(itemsDetails, re, propertyIds);
          
          return [u, qualifierProperties, referenceProperties]
           }) 
        )
        return observedItem
    }
}
  

 
  

