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

/*addQualifierPropertyDetails(properties, re, propertyIds){  //add labels, definitions and aliases of properties in the qualifiers/*
  for (let i=0; i<propertyIds.length; i++){
    for (let j=0; j<properties.length; j++){ 
        if (propertyIds[i] === properties[j].id){ //  les groupes de statements ayant même propriété)   
              for (let k=0; k<re.claims[propertyIds[i]].length; k++) {
                if (re.claims[propertyIds[i]][k].qualifiers === undefined) {continue}
                console.log(JSON.stringify(re.claims[propertyIds[i]][k].qualifiers))
               re.claims[propertyIds[i]][k].qualifiers = this.subAddQualifierPropertyDetails(re, re.claims[propertyIds[i]][k].qualifiers, propertyIds[i], properties)  

    //           console.log(JSON.stringify(re.claims[propertyIds[i]][k].qualifiers))        ;    
       }
   }
  }
 }
//console.log(JSON.stringify(re)) 
 return re
}
*/

  addQualifierPropertyDetails(properties, re, propertyIds){  //add labels, definitions and aliases of properties in the qualifiers/* 
    let qualifierPropertyArray = [];
       for (let i=0; i<propertyIds.length; i++){  
              for (let j=0; j<re.claims[propertyIds[i]].length; j++) {
                if (re.claims[propertyIds[i]][j].qualifiers === undefined) {continue}
                qualifierPropertyArray = Object.keys(re.claims[propertyIds[i]][j].qualifiers);
                 let qualifiersArray = Object.values(re.claims[propertyIds[i]][j].qualifiers);
  //               console.log(qualifiersArray);
                  for  (let k=0; k<qualifierPropertyArray.length; k++){
                  let prop = qualifierPropertyArray[k]
 //                 console.log(prop);
                   for (let l=0; l<properties.length; l++){                                       
                      if (qualifiersArray[k][0].property === properties[l].id){
 //                          console.log(re.claims[propertyIds[i]][j].qualifiers[prop]);
                          re.claims[propertyIds[i]][j].qualifiers[prop].label = properties[l].label;
  //                        console.log(JSON.stringify(re.claims[propertyIds[i]][j].qualifiers[prop].label));
                         if (properties[k].description !== undefined)
                         re.claims[propertyIds[i]][j].qualifiers[prop].description = properties[l].description;
                         if (properties[k].aliases !== undefined)
                         re.claims[propertyIds[i]][j].qualifiers[prop].aliases = properties[l].aliases;                            
                     }
                   }
                }
            }
         }
    return [re, qualifierPropertyArray]
      }

      
addReferencePropertyDetails(properties, re, propertyIds){  //add labels, definitions and aliases of properties in the references
    for (let i=0; i<propertyIds.length; i++){  
 //     console.log(re.claims[propertyIds[i]]);
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

/*
      subAddReferencePropertyDetails(obj, properties) {  // used in addReferencePropertyDetails               
//    console.log(obj) ; 
    let referenceArray =[]
        for (let i=0;i<obj.length;i++) {         
          referenceArray[i] = Object.values(obj[i].snaks) ;//définit l'array des valeurs des références pour un statement donné
 //         console.log(referenceArray[i]);
          for (let j=0; j<properties.length; j++){                                              
                    if (referenceArray[i][0][0].property === properties[j].id)
                         { referenceArray[i][0][0].label = properties[j].label;
                    if (properties[j].description !== undefined)
                          referenceArray[i][0][0].description = properties[j].description;
                    if (properties[j].aliases !== undefined)
                          referenceArray[i][0][0].aliases = properties[j].aliases;          
                        }
                      }                          
                  }  
                return obj            
          }  
*/

}
