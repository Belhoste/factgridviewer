import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QualifierDetailsService {

  constructor() { }

  addQualifier2ItemDetails(re, propertyIds){ //add the items of the qualifiers to the array qualifiers2
    let qualifierPropertyArray = [];
    for (let i=0; i<propertyIds.length; i++){  
      for (let j=0; j<re.claims[propertyIds[i]].length; j++) {
         if (re.claims[propertyIds[i]][j].qualifiers === undefined) {continue}
            qualifierPropertyArray = Object.keys(re.claims[propertyIds[i]][j].qualifiers);
            let qualifiersArray = Object.values(re.claims[propertyIds[i]][j].qualifiers);
            for  (let k=0; k<qualifierPropertyArray.length; k++){
             let prop = qualifierPropertyArray[k];
              for (let l=0; l<re.claims[propertyIds[i]][j].qualifiers2.length;l++){
                if (re.claims[propertyIds[i]][j].qualifiers2[k].id !== prop){continue}
                
               re.claims[propertyIds[i]][j].qualifiers2[k].datatype = qualifiersArray[k][0].datatype;
                re.claims[propertyIds[i]][j].qualifiers2[k].value.id = qualifiersArray[k][0].datavalue.value.id;
                re.claims[propertyIds[i]][j].qualifiers2[k].value.time = qualifiersArray[k][0].datavalue.value.time;
                re.claims[propertyIds[i]][j].qualifiers2[k].value.url = qualifiersArray[k][0].datavalue.value.url;   
                re.claims[propertyIds[i]][j].qualifiers2[k].value.date = qualifiersArray[k][0].datavalue.value.date; 
                re.claims[propertyIds[i]][j].qualifiers2[k].value.label = qualifiersArray[k][0].datavalue.value.label;
                re.claims[propertyIds[i]][j].qualifiers2[k].value.description = qualifiersArray[k][0].datavalue.value.description;
                re.claims[propertyIds[i]][j].qualifiers2[k].value.aliases = qualifiersArray[k][0].datavalue.value.aliases;
                re.claims[propertyIds[i]][j].qualifiers2[k].value.unit = qualifiersArray[k][0].datavalue.value.unit;
                // for
                if (qualifiersArray[k][0].datatype === "commonsMedia"){
                  re.claims[propertyIds[i]][j].qualifiers2[k].value.string = "http://commons.wikimedia.org/wiki/Special:FilePath/"+qualifiersArray[k][0].datavalue.value
                 };   
                if (qualifiersArray[k][0].datatype === "string"){
                  re.claims[propertyIds[i]][j].qualifiers2[k].value.string = qualifiersArray[k][0].datavalue.value ;
                  re.claims[propertyIds[i]][j].qualifiers2[k].value.label = qualifiersArray[k][0].datavalue.value
                 };
                if (qualifiersArray[k][0].datatype === "url"){
                  re.claims[propertyIds[i]][j].qualifiers2[k].value.url = qualifiersArray[k][0].datavalue.value
                 };       
                re.claims[propertyIds[i]][j].qualifiers2[k].value.amount = qualifiersArray[k][0].datavalue.value.amount 
                //
    /*          for(let l=0; l<qualifiersArray[k].length;l++){
				re.claims[propertyIds[i]][j].qualifiers2[k][l].datatype = qualifiersArray[k][l].datatype;
                re.claims[propertyIds[i]][j].qualifiers2[k][l].value.id = qualifiersArray[k][l].datavalue.value.id;
                re.claims[propertyIds[i]][j].qualifiers2[k][l].value.time = qualifiersArray[k][l].datavalue.value.time;
                re.claims[propertyIds[i]][j].qualifiers2[k][l].value.url = qualifiersArray[k][l].datavalue.value.url;   
                re.claims[propertyIds[i]][j].qualifiers2[k][l].value.date = qualifiersArray[k][l].datavalue.value.date; 
                re.claims[propertyIds[i]][j].qualifiers2[k][l].value.label = qualifiersArray[k][l].datavalue.value.label;
                re.claims[propertyIds[i]][j].qualifiers2[k][l].value.description = qualifiersArray[k][l].datavalue.value.description;
                re.claims[propertyIds[i]][j].qualifiers2[k][l].value.aliases = qualifiersArray[k][l].datavalue.value.aliases;
                re.claims[propertyIds[i]][j].qualifiers2[k][l].value.unit = qualifiersArray[k][l].datavalue.value.unit;
 
                if (qualifiersArray[k][l].datatype === "commonsMedia"){
                  re.claims[propertyIds[i]][j].qualifiers2[k][l].value.string = "http://commons.wikimedia.org/wiki/Special:FilePath/"+qualifiersArray[k][l].datavalue.value
                 };   
                if (qualifiersArray[k][l].datatype === "string"){
                  re.claims[propertyIds[i]][j].qualifiers2[k][l].value.string = qualifiersArray[k][l].datavalue.value ;
                  re.claims[propertyIds[i]][j].qualifiers2[k][l].value.label = qualifiersArray[k][l].datavalue.value
                 };
                if (qualifiersArray[k][l].datatype === "url"){
                  re.claims[propertyIds[i]][j].qualifiers2[k][l].value.url = qualifiersArray[k][l].datavalue.value
                 };       
                re.claims[propertyIds[i]][j].qualifiers2[k][l].value.amount = qualifiersArray[k][l].datavalue.value.amount
			}
      */
                //
              };                    
            }
        }
      }
      return re
  }


}
