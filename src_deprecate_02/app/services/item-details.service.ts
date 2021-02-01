import { keyframes } from '@angular/animations';
import { DefinitionMap } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { PropertyDetailsService } from './property-details.service';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsService {

  constructor() { }

   addClaimItemDetails(items,re,propertyIds){ // add labels, descriptions and aliases to the items in the mainsnaks 

    for (let i=0; i<propertyIds.length; i++){
//    re.claims.push(claims[propertyIds[i]]);
      for (let j=0; j<re.claims[propertyIds[i]].length; j++){
//        console.log(re.claims[propertyIds[i]][j].mainsnak);
      if (re.claims[propertyIds[i]][j].mainsnak.datatype !== "wikibase-item") {continue}
       for (let k = 0; k< items.length; k++) {   
        if (re.claims[propertyIds[i]][j].mainsnak.datavalue.value.id === items[k].id){
         re.claims[propertyIds[i]][j].mainsnak.label = items[k].label;
  //        let claims[propertyIds[i][j].mainsnak.label = items[k].label];
          if (items[k].description !== undefined) 
          re.claims[propertyIds[i]][j].mainsnak.description = items[k].description; 
          if (items[k].aliases !== undefined) 
          re.claims[propertyIds[i]][j].mainsnak.aliases = items[k].aliases;
          }
        }
      }
    }
    return re
  }

  addQualifierItemDetails(items, re, propertyIds){  //add labels, definitions and aliases of items in the qualifiers/* 
    let qualifierPropertyArray = [];
       for (let i=0; i<propertyIds.length; i++){  
              for (let j=0; j<re.claims[propertyIds[i]].length; j++) {
                if (re.claims[propertyIds[i]][j].qualifiers === undefined) {continue}
                qualifierPropertyArray = Object.keys(re.claims[propertyIds[i]][j].qualifiers);
                 let qualifiersArray = Object.values(re.claims[propertyIds[i]][j].qualifiers);
                  for  (let k=0; k<qualifierPropertyArray.length; k++){
                  let prop = qualifierPropertyArray[k]
                   for (let l=0; l<items.length; l++){                                       
                      if (qualifiersArray[k][0].datavalue.value.id === items[l].id){
                          re.claims[propertyIds[i]][j].qualifiers[prop][0].datavalue.value.label = items[l].label;
                         if (items[k].description !== undefined)
                         re.claims[propertyIds[i]][j].qualifiers[prop][0].datavalue.value.description = items[l].description;
                         if (items[k].aliases !== undefined)
                         re.claims[propertyIds[i]][j].qualifiers[prop][0].datavalue.value.aliases = items[l].aliases;                            
                     }
                   }
                }
            }
         }
    return re
      }

      addReferenceItemDetails(items, re, propertyIds){  //add labels, definitions and aliases of items in the references
        for (let i=0; i<propertyIds.length; i++){  
          for (let j=0; j<re.claims[propertyIds[i]].length; j++) {           
            if (re.claims[propertyIds[i]][j].references === undefined) {continue}
             for  (let k=0; k<re.claims[propertyIds[i]][j].references.length; k++){
              let prop = Object.keys(re.claims[propertyIds[i]][j].references[k].snaks)[0];
              for (let l=0; l<items.length; l++){  
               if (re.claims[propertyIds[i]][j].references[k].snaks[prop][0].datatype !== "wikibase-item"){continue}
                if (re.claims[propertyIds[i]][j].references[k].snaks[prop][0].datavalue.value.id === items[l].id ){
                  if (re.claims[propertyIds[i]][j].references[k].snaks[prop][0] !==undefined) { 
                   re.claims[propertyIds[i]][j].references[k].snaks[prop][0].datavalue.value.label = items[l].label;
                  if (items[l].description !== undefined) 
                    re.claims[propertyIds[i]][j].references[k].snaks[prop][0].datavalue.value.description = items[l].description;
                   if (items[l].aliases !== undefined)
                  re.claims[propertyIds[i]][j].references[k].snaks[prop][0].datavalue.value.aliases = items[l].aliases; 
                  }                     
                }         
              }               
            }
          }
        }
        return re
          }

  /*
  addReferenceItemDetails(items, re, propertyIds){  //add labels, definitions and aliases of items in the references
        let referencePropertyArray=[];
        for (let i=0; i<propertyIds.length; i++){  
          for (let j=0; j<re.claims[propertyIds[i]].length; j++) {
            if (re.claims[propertyIds[i]][j].references === undefined) {continue}
             referencePropertyArray = re.claims[propertyIds[i]][j].references[0]["snaks-order"];
             for  (let k=0; k<referencePropertyArray.length; k++){
              let prop = referencePropertyArray[k];
              console.log(prop);
              for (let l=0; l<items.length; l++){                                       
                if (prop === items[l].id ){
                   re.claims[propertyIds[i]][j].references[0].snaks[prop][0].datavalue.value.label = items[l].label;
                   if (items[k].description !== undefined)
                   re.claims[propertyIds[i]][j].references[0].snaks[prop].datavalue.value.description = items[l].description;
                   if (items[k].aliases !== undefined)
                   re.claims[propertyIds[i]][j].references[0].snaks[prop].datavalue.value.aliases = items[l].aliases;                      
                    }         
              }               
            }
          }
        }
        return re
          }
  */
     
  /*  
  addReferenceItemDetails(items, re){
    let claims = re.claims; 
    let referencePropertyArray=[];
    for (let i=0; i<propertyIds.length; i++){  
      for (let j=0; j<re.claims[propertyIds[i]].length; j++) {
        if (re.claims[propertyIds[i]][j].references === undefined) {continue}
         referencePropertyArray = re.claims[propertyIds[i]][j].references[0]["snaks-order"];
         for  (let k=0; k<referencePropertyArray.length; k++){
          let prop = referencePropertyArray[k];
          for (let l=0; l<properties.length; l++){                                       
            if (prop === properties[l].id ){
               re.claims[propertyIds[i]][j].references[0].snaks[prop].label = properties[l].label;
               if (properties[k].description !== undefined)
               re.claims[propertyIds[i]][j].references[0].snaks[prop].description = properties[l].description;
               if (properties[k].aliases !== undefined)
               re.claims[propertyIds[i]][j].references[0].snaks[prop].aliases = properties[l].aliases;                      
                }         
          }               
        }
      }
    }
    console.log(re);
    return [re, referencePropertyArray]
      }

  }


   
  
  
  
  addReferenceItemDetails(items, claims){          
      for (let i=0; i<claims.length; i++) { //  les groupes de statements ayant même propriété)   
        for (let j=0; j<claims[i].length; j++) {
           if (claims[i][j].references === undefined) {continue}
              claims[i][j].references = this.subAddReferenceItemDetails(claims[i][j].references, items)               
             }
           }
           console.log(claims);
           return claims
         }
            
  subAddReferenceItemDetails(obj, items) {  // used in addQualifierItemDetails
   
  
    let referenceArray =[]
         for (let i=0;i<obj.length;i++) {         
            referenceArray[i] = Object.values(obj[i].snaks) ;//définit l'array des valeurs des références pour un statement donné
                     for (let j=0; j<items.length; j++){                  
                       if (referenceArray[i][0][0].datavalue.value.id === items[j].id)
                         { if (referenceArray[i][0][0].datatype === "wikibase-item") {                          
                           referenceArray[i][0][0].datavalue.value.label = items[j].label;
                          if (items[j].description !== undefined)
                          referenceArray[i][0][0].datavalue.value.description = items[j].description;
                          if (items[j].aliases !== undefined)
                          referenceArray[i][0][0].datavalue.value.aliases = items[j].aliases;          
                        }
                      }
                    }
                  }       
              return obj
             }   
             
*/ 
}
