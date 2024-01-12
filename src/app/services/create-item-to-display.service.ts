import { Injectable } from '@angular/core';
import { SetLanguageService } from './set-language.service';
import { DetailsService } from  './details.service';
import { PropertyDetailsService } from './property-details.service';
import { SetItemToDisplayService } from './set-item-to-display.service';
import { ItemDetailsService } from './item-details.service';
import { RoleOfObjectRenderingService } from './role-of-object-rendering.service';
import { forkJoin, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BackListService } from './back-list.service';
import { TypologyService } from './typology.service';



@Injectable({
  providedIn: 'root'
})

export class CreateItemToDisplayService {

 // private subject : BehaviorSubject <any> = new BehaviorSubject(null); // useless

  constructor(private setLanguage:SetLanguageService, private details:DetailsService, private setItem:SetItemToDisplayService, 
    private addPropertyDetails:PropertyDetailsService, private addItemDetails:ItemDetailsService, private roleOfObject:RoleOfObjectRenderingService, private backList:BackListService, private typology:TypologyService) { }


    createItemToDisplay(re, selectedLang) {
      let itemProperties = Object.keys(re.claims); // number of properties in the mainsnak
      let observedItem = forkJoin({
        properties: this.details.setPropertiesList(re),
        items: this.details.setItemsList(re) } ).pipe(
        map(res =>{       
          let propertiesDetails = this.setLanguage.item2(res.properties,selectedLang);
          let qualifierProperties = this.addPropertyDetails.addQualifierPropertyDetails(propertiesDetails, re, itemProperties)[1];  // number of properties for the qualifiers
          let referenceProperties = this.details.getReferenceProperties(re);  // number of properties of the references
          this.addItemDetails.addSidelinksDetails(re);  // useless?
          this.addPropertyDetails.addClaimPropertyDetails(propertiesDetails, re, itemProperties);  // add the properties to the statements
 //       this.addPropertyDetails.addQualifierPropertyDetails(propertiesDetails, re, itemProperties)[0];  // useless?
          this.addPropertyDetails.addQualifier2PropertyDetails(propertiesDetails, re, itemProperties)[1];
          this.addPropertyDetails.addReferencePropertyDetails(propertiesDetails, re, itemProperties);
          this.addPropertyDetails.addReference2PropertyDetails(propertiesDetails, re, itemProperties);
          let itemsDetails = this.setLanguage.item2(res.items,selectedLang) ;
    //      this.addItemDetails.addLongestWordLength(re);   // useless?
          this.addItemDetails.addClaimItemDetails(itemsDetails, re, itemProperties, selectedLang);// selected item with all the properties and items (with their labels and descriptions) of the mainsnaks
         
          this.addItemDetails.addQualifierItemDetails(itemsDetails, re, itemProperties, selectedLang);
      //   this.roleOfObject.roleOfObject(re);  //failed
          this.addItemDetails.addReferenceItemDetails(itemsDetails, re, itemProperties, selectedLang); // selected item with all the properties (with their labels and descriptions) of the mainsnaks
          let item = this.addItemDetails.addReference2ItemDetails(itemsDetails, re, itemProperties);
          return [item, itemProperties, qualifierProperties, referenceProperties]     
            }
          )
        )
        return observedItem
     }
}
