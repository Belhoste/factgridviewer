import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QualifierDetailsService {

  constructor() { }

  addQualifier2ItemDetails(re, propertyIds){ //add the items of the qualifiers to the array qualifiers2; propertyIds is the array of the properties for the item re
  let qualifierPropertyArray = [];
   
    for (let i=0; i<propertyIds.length; i++){
      for (let j=0; j<re.claims[propertyIds[i]].length; j++) {
         if (re.claims[propertyIds[i]][j].qualifiers === undefined) {continue}
            qualifierPropertyArray = Object.keys(re.claims[propertyIds[i]][j].qualifiers);//array of the properties used as qualifiers used with the property propertyIds[i]
            let qualifiersArray:any[] = Object.values(re.claims[propertyIds[i]][j].qualifiers); //array of the values pour each quelifiers used with the property propertyIds[i]
            let qualifierNumbers = [];
          for (let u=0;u<qualifierPropertyArray.length;u++){            
              let l= qualifiersArray[u].length;
              console.log(l);
             qualifierNumbers.push(l)
              }
            for  (let k=0; k<qualifierPropertyArray.length; k++){
              let prop = qualifierPropertyArray[k];
              let qual= qualifiersArray[k];
         
              if (re.claims[propertyIds[i]][j].qualifiers2[k].id !== prop){continue} ;
                re.claims[propertyIds[i]][j].qualifiers2[k].display = [];
                for (let l=0; l<qualifierNumbers[k];l++){
                  if (qual[l] === undefined) {continue}
                   let qualifier = { datatype:qual[l].datatype, id:qual[l].datavalue.value.id, label:qual[l].datavalue.value.label, description:qual[l].datavalue.value.description, unit:qual[l].datavalue.value.unit,
                   date:qual[l].datavalue.value.date, amount:qual[l].datavalue.value.amount, string:qual[l].datavalue.value, commons:"http://commons.wikimedia.org/wiki/Special:FilePath/"+qualifiersArray[k][0].datavalue.value } 
        //           , amount:qual[l].datavalue.value.amount,
        //           commons: "http://commons.wikimedia.org/wiki/Special:FilePath/"+qual[l].datavalue.value, url:qual[l].datavalue.value }
                  re.claims[propertyIds[i]][j].qualifiers2[k].display.push(qualifier); }
                  
          //   console.log(qualifier);}
             

  //           let re.claims[propertyIds[i]][j].qualifiers2.display = [
        
              
          //   
           //   console.log(re.claims[propertyIds[i]][j].qualifiers2);
          
              //.push(qual[0].datatype,qual[0].datavalue.value.id);

        //      qual = Object.values(qualifiersArray[k])
        //     console.log(qual);
        //     console.log(qual);
        //     console.log(qual.length);
        /*      for (let l=0; l<re.claims[propertyIds[i]][j].qualifiers2.length;l++){
                if (re.claims[propertyIds[i]][j].qualifiers2[k].id !== prop){continue}
               
                 for (let m=0; m<qual.length;m++){
         //        re.claims[propertyIds[i]][j].qualifiers2[k].push(qual[m].datatype,qual[m].datavalue.value.id);
                
                 console.log(re.claims[propertyIds[i]][j].qualifiers2[k]);
              re.claims[propertyIds[i]][j].qualifiers2[k].datatype = qualifiersArray[k][0].datatype;
                re.claims[propertyIds[i]][j].qualifiers2[k].value.id = qualifiersArray[k][0].datavalue.value.id;
                re.claims[propertyIds[i]][j].qualifiers2[k].value.time = qualifiersArray[k][0].datavalue.value.time;
                re.claims[propertyIds[i]][j].qualifiers2[k].value.url = qualifiersArray[k][0].datavalue.value.url;   
                re.claims[propertyIds[i]][j].qualifiers2[k].value.date = qualifiersArray[k][0].datavalue.value.date; 
                re.claims[propertyIds[i]][j].qualifiers2[k].label = qualifiersArray[k][0].datavalue.value.label;
                re.claims[propertyIds[i]][j].qualifiers2[k].value.description = qualifiersArray[k][0].datavalue.value.description;
                re.claims[propertyIds[i]][j].qualifiers2[k].value.aliases = qualifiersArray[k][0].datavalue.value.aliases;
                re.claims[propertyIds[i]][j].qualifiers2[k].value.unit = qualifiersArray[k][0].datavalue.value.unit;
                // for
                if (qualifiersArray[k][0].datatype === "commonsMedia"){
                  re.claims[propertyIds[i]][j].qualifiers2[k].value.string = "http://commons.wikimedia.org/wiki/Special:FilePath/"+qualifiersArray[k][0].datavalue.value };   
                if (qualifiersArray[k][0].datatype === "string"){
                  re.claims[propertyIds[i]][j].qualifiers2[k].value.string = qualifiersArray[k][0].datavalue.value ;
                  re.claims[propertyIds[i]][j].qualifiers2[k].value.label = qualifiersArray[k][0].datavalue.value
                };
                   
                if (qualifiersArray[k][0].datatype === "url"){
                  re.claims[propertyIds[i]][j].qualifiers2[k].value.url = qualifiersArray[k][0].datavalue.value };       
                re.claims[propertyIds[i]][j].qualifiers2[k].value.amount = qualifiersArray[k][0].datavalue.value.amount  };
         */
      
      
           }
        }
      }
      return re
  }
}
