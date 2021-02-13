import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailsService {

  constructor() { }

addClaimPropertyDetails(properties, re, propertyIds){ // add labels, descriptions and aliases to the properties in the mainsnaks
  for (let i=0; i<propertyIds.length; i++){
       for (let j=0; j<properties.length; j++){ 
         if (propertyIds[i] === properties[j].id){
             re.claims[propertyIds[i]].label = properties[j].label;
         if (properties[j].description !== undefined)  
             re.claims[propertyIds[i]].description = properties[j].description; 
         if (properties[j].aliases !== undefined)
          re.claims[propertyIds[i]].aliases = properties[j].aliases 
         }
       }
      }
   return re
   }

  addQualifierPropertyDetails(properties, re, propertyIds){  //add labels, definitions and aliases of properties in the qualifiers/* 
    let qualifierPropertyArray = [];
       for (let i=0; i<propertyIds.length; i++){  
            for (let j=0; j<re.claims[propertyIds[i]].length; j++) {
              if (re.claims[propertyIds[i]][j].qualifiers === undefined) {continue}
                qualifierPropertyArray = Object.keys(re.claims[propertyIds[i]][j].qualifiers);
                  let qualifiersArray = Object.values(re.claims[propertyIds[i]][j].qualifiers);
                    for (let l=0; l<properties.length; l++){
                       for  (let k=0; k<qualifierPropertyArray.length; k++){
                          let prop = qualifierPropertyArray[k]                        
                            if (qualifiersArray[k][0].property === properties[l].id){
                                re.claims[propertyIds[i]][j].qualifiers[prop].label = properties[l].label;
                            if (properties[l].description !== undefined)
                                re.claims[propertyIds[i]][j].qualifiers[prop].description = properties[l].description;
                            if (properties[l].aliases !== undefined)
                                re.claims[propertyIds[i]][j].qualifiers[prop].aliases = properties[l].aliases;
                            }  
                        }                     
                    }     
              
            }
         }
          return [re, qualifierPropertyArray]
      }

  addQualifier2PropertyDetails(properties, re, propertyIds){  //add id, labels, definitions and aliases of properties tong the new array qualifiers2/* 
      let qualifier2PropertyArray = [];
      let qualifier2:any[] = [];
         for (let i=0; i<propertyIds.length; i++){  
              for (let j=0; j<re.claims[propertyIds[i]].length; j++) {
                if (re.claims[propertyIds[i]][j].qualifiers !==undefined) {
                  re.claims[propertyIds[i]][j].qualifiers2 = [];
                  qualifier2PropertyArray = re.claims[propertyIds[i]][j]["qualifiers-order"];      
                    for (let k=0; k<qualifier2PropertyArray.length; k++){
                       qualifier2[k]={id:undefined, label:undefined, description:undefined, aliases:undefined, value:{id:undefined, time:undefined, string:undefined, label:undefined, description:undefined, aliases:undefined}};
                      for (let l=0; l<properties.length; l++){
                        if (re.claims[propertyIds[i]][j]["qualifiers-order"][k] !== properties[l].id){ continue }
                          qualifier2[k].id = properties[l].id;
                          qualifier2[k].label = properties[l].label
                          if (properties[l].description !== undefined)
                              qualifier2[k].description = properties[l].description;
                          if (properties[l].aliases !== undefined)
                              qualifier2[k].aliases = properties[l].aliases;                  
                        
                        re.claims[propertyIds[i]][j].qualifiers2.push(qualifier2[k])
                      }        
                    }            
                  }
               }
             }
        return re
     }
      
  addReferencePropertyDetails(properties, re, propertyIds){  //add labels, definitions and aliases of properties in the references
    for (let i=0; i<propertyIds.length; i++){  
      for (let j=0; j<re.claims[propertyIds[i]].length; j++) {
        
        if (re.claims[propertyIds[i]][j].references === undefined) {continue}
         for  (let k=0; k<re.claims[propertyIds[i]][j].references.length; k++){
          let prop = Object.keys(re.claims[propertyIds[i]][j].references[k].snaks)[0];
          for (let l=0; l<properties.length; l++){                                       
            if (prop === properties[l].id ){
              if (re.claims[propertyIds[i]][j].references[k].snaks[prop][0] !==undefined) { 
               re.claims[propertyIds[i]][j].references[k].snaks[prop][0].label = properties[l].label;
              if (properties[l].description !== undefined) 
                re.claims[propertyIds[i]][j].references[k].snaks[prop][0].description = properties[l].description;
               if (properties[l].aliases !== undefined)
              re.claims[propertyIds[i]][j].references[k].snaks[prop][0].aliases = properties[l].aliases; 
              }                     
            }         
          }               
        }
      }
    }
    return re
      }

}
