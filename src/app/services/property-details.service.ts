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

  addQualifier2PropertyDetails(properties, re, propertyIds){  //add id, labels, definitions and aliases of properties to the new array qualifiers2/* 
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
          let props = Object.keys(re.claims[propertyIds[i]][j].references[k].snaks);
          for (let l=0; l<re.claims[propertyIds[i]][j].references.length; l++){
          for (let m=0; m<properties.length; m++){                                       
            if (props[l] === properties[m].id ){
              if (re.claims[propertyIds[i]][j].references[k].snaks[props[l]][0] !==undefined) { 
               re.claims[propertyIds[i]][j].references[k].snaks[props[l]][0].label = properties[m].label;
              if (properties[m].description !== undefined) 
                re.claims[propertyIds[i]][j].references[k].snaks[props[l]][0].description = properties[m].description;
               if (properties[m].aliases !== undefined)
              re.claims[propertyIds[i]][j].references[k].snaks[props[l]][0].aliases = properties[m].aliases; 
                } 
              }                    
            }         
          }               
        }
      }
    }
    return re
      }

    addReference2PropertyDetails(properties, re, propertyIds){  //add labels, definitions and aliases of properties to the new array references2
      let references2PropertyArray = [];// à verifier si c'est correct; peut-être plusieurs arrays de propriétés
      let references2:any[] =[];
        for (let i=0; i<propertyIds.length; i++){  
          for (let j=0; j<re.claims[propertyIds[i]].length; j++) {     
            if (re.claims[propertyIds[i]][j].references === undefined) {continue}
               re.claims[propertyIds[i]][j].references2 =[]; 
                for(let k=0; k<re.claims[propertyIds[i]][j].references.length;k++){  //boucle sur les references relatives au claim propertyIds[i][j]
                   let props=re.claims[propertyIds[i]][j].references[k]["snaks-order"] ;
                      for (let r=0; r<props.length;r++){
                        let reference = re.claims[propertyIds[i]][j].references[k].snaks[props[r]][0]; 
                    //    let referenceItem= re.claims[propertyIds[i]][j].references[k].snaks[props[r]][0].datavalue;
                        //ici on sélectionne l'array des propriétés relatives aux références ci-dessus
                         references2[r] = { id:undefined, label:undefined, description:undefined, aliases:undefined, 
                                          value:{id:undefined, time:undefined, string:undefined, url:undefined, 
                                          label:undefined, description:undefined, aliases:undefined}};   //ici on définit l'objet item reference                                                
                          references2[r].id = reference.property;
                          references2[r].label = reference.label
                          if (reference.description !== undefined)
                              references2[r].description = reference.description;
                          if (reference.aliases !== undefined)
                              references2[r].aliases = reference.aliases; 
                          references2[r].value.id = reference.datavalue.value.id;
                     //     references2[r].value.label=referenceItem.value.label;
                     //     console.log(references2[r].value.label);
                          
                    re.claims[propertyIds[i]][j].references2.push(references2[r]); //ici je peuple references2 avec les l items
                    }
                //  re.claims[propertyIds[i]][j].references2.push(references2); //ici je peuple references2 avec les sous-arrays construites précédemment
                    }
                }
              }
              return re
            }
}
