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
             console.log(prop);
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
                // for
                if (qualifiersArray[k][0].datatype === "commonsMedia"){
                  re.claims[propertyIds[i]][j].qualifiers2[k].value.string = "http://commons.wikimedia.org/wiki/Special:FilePath/"+qualifiersArray[k][0].datavalue.value };   
                if (qualifiersArray[k][0].datatype === "string"){
                  re.claims[propertyIds[i]][j].qualifiers2[k].value.string = qualifiersArray[k][0].datavalue.value }; 
                if (qualifiersArray[k][0].datatype === "url"){
                  re.claims[propertyIds[i]][j].qualifiers2[k].value.url = qualifiersArray[k][0].datavalue.value };       
                re.claims[propertyIds[i]][j].qualifiers2[k].value.amount = qualifiersArray[k][0].datavalue.value.amount };                    
          }
        }
      }
      return re
  }


}
