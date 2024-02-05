import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QualifierDetailsService {

  constructor() { }

  addQualifier2ItemDetails(re, itemProperties){ //add the items of the qualifiers to the array qualifiers2; itemProperties is the array of the properties for the item re
  let qualifierPropertyArray = [];
   
    for (let i=0; i<itemProperties.length; i++){
      for (let j=0; j<re.claims[itemProperties[i]].length; j++) {
         if (re.claims[itemProperties[i]][j].qualifiers === undefined) {continue}
            qualifierPropertyArray = Object.keys(re.claims[itemProperties[i]][j].qualifiers);//array of the properties used as qualifiers used with the property itemProperties[i]
            let qualifiersArray:any[] = Object.values(re.claims[itemProperties[i]][j].qualifiers); //array of the values pour each quelifiers used with the property itemProperties[i]
            let qualifierNumbers = [];
          for (let u=0;u<qualifierPropertyArray.length;u++){            
              let l= qualifiersArray[u].length;
             qualifierNumbers.push(l) }
            for  (let k=0; k<qualifierPropertyArray.length; k++){
              let prop = qualifierPropertyArray[k];
              let qual= qualifiersArray[k];
              if (prop==="P189") {re.claims[itemProperties[i]][j].qualifiers2[k].label=""};
              if (re.claims[itemProperties[i]][j].qualifiers2[k].id !== prop){continue} ;
                re.claims[itemProperties[i]][j].qualifiers2[k].display = [];
                for (let l=0; l<qualifierNumbers[k];l++){
                  if (qual[l] === undefined) {continue}         
                   let qualifier = { datatype:qual[l].datatype, id:qual[l].datavalue.value.id, label:qual[l].datavalue.value.label, description:qual[l].datavalue.value.description, unit:qual[l].datavalue.value.unit, separator:", ",
                   date:qual[l].datavalue.value.date, amount:qual[l].datavalue.value.amount, string:qual[l].datavalue.value, commons:"http://commons.wikimedia.org/wiki/Special:FilePath/"+qualifiersArray[k][0].datavalue.value } 
                 if (qualifier.datatype ==="commonsMedia") { qualifier.label="" };
                 if (qualifier.description === undefined) { qualifier.separator=""};
                  re.claims[itemProperties[i]][j].qualifiers2[k].display.push(qualifier); }
              if(re.claims[itemProperties[i]][j].qualifiers2[k].id == "P820"){   //remove P277 (role of subject) when P820 (role of object) exists
                for (let m=0; m<qualifierPropertyArray.length;m++){
                  if (qualifierPropertyArray[m]==="P277") { re.claims[itemProperties[i]][j].qualifiers2[m].remove="y"
                  }
                }
              }    
            }         
          }
        }
      return re
   }
}
