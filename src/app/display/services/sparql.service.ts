import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { StringLiteralType } from 'typescript';


@Injectable({
  providedIn: 'root'
})
export class SparqlService {

  constructor( ) { }

  selectedLang: string = (localStorage['selectedLang'] === undefined) ? "en" : localStorage['selectedLang'];

  langService:string = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22"+this.selectedLang+"%22%2C%22en%22.%20%7D%0A%7D%0A";

  sparqlBuilding(id,item){
    let u="";
    let suffix = "ORDER%20by%20%3FitemLabel"; 
    if (id == "Q24499")  {  // familyName 
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%20WHERE%20%7B%20%20%3Fitem%20wdt%3AP247%2Fwdt%3AP3%2a%20wd%3A";
      u = prefix+item+this.langService+suffix;
     }
     else {
      if (id == "Q37073" || id == "Q146602" || id == "Q21909" || id == "Q146410" || id == "Q257052" || id == "Q37131"){ // career statement
      let prefix1 = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3FfamilyNameLabel%0AWHERE%20%7B%20%3Fitem%20wdt%3AP165%2Fwdt%3AP3%2a%20wd%3A";
      let prefix2="%3B%20wdt%3AP247%20%3FfamilyName";
      u = prefix1+item+prefix2+this.langService+"ORDER%20by%20%3FfamilyNameLabel%20";
      }
       else { 
          if (id == "Q12" || id =="Q173005"){ //organisation    
          let prefix1 = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3FfLabel%20%3Factivity%20WHERE%20%7B%20%7B%3Fitem%20wdt%3AP247%20%3Ff%3B%20wdt%3AP165%20%3Factivity.%20%3Factivity%20wdt%3AP267%20wd%3A"
            let prefix2 = "%20.%20%7D%20UNION%20%7B%3Fitem%20wdt%3AP91%20wd%3A";
            let suffix2 = "%20.%7D%20%3Fitem%20p%3AP247%20%3Fwds%20.%20%3Fwds%20ps%3AP247%20%3Ff.%20%0AFILTER%20%28%20NOT%20EXISTS%20%7B%20%3Fwds%20pq%3AP820%20%3Fp%20%7D%29";
            u = prefix1 + item + prefix2 + item + suffix2 + this.langService + "ORDER%20BY%20%3FfitemLabel";
         
        } 
         else {
           if(id == "Q8"){ // place
        let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20WHERE%20%0A%7B%3Fitem%20wdt%3AP2%2Fwdt%3AP3%2a%20wd%3AQ160381%3B%20wdt%3AP83%20%7C%20wdt%3AP47%20wd%3A";
        u = prefix+item+this.langService+suffix;
        } 
         else {
            if(id=="Q16200"){ //address
              let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%0AWHERE%20%0A%7B%0A%20%20%3Fitem%20wdt%3AP208%20wd%3A"
              u = prefix + item + this.langService + "ORDER%20BY%20%3FfitemLabel";
            }
           else {
            if(id=="Q20" || id=="Q14231" || id==""){  // printed document
             }
             else {
                if(id=="Q7"){ // author
               let prefix3="https://database.factgrid.de/query/#SELECT%20%3Fitem%20%3FitemLabel%20%3Fyear%0AWHERE%20%7B%20%3Fitem%20%28wdt%3AP21%20%7C%20wdt%3AP552%29%20wd%3A"
               let prefix4="%20.%0A%20%20OPTIONAL%20%7B%3Fitem%20wdt%3AP222%20%3Fdate%20.%20BIND%28YEAR%28%3Fdate%29%20AS%20%3Fyear%29%20.%7D%0A%20";
                u= prefix3+item+prefix4+this.langService+"ORDER%20BY%20%3Fyear" ;
              }
                else u=undefined;
               }
            }
          }
        }
        
      }
    }
    return u
  }

 listFromSparql(res) { 
  if (res !== undefined){
    if (res.results !== undefined) {
      for (let i = 0; i < res.results.bindings.length; i++) {
       res.results.bindings[i]["item"].id = res.results.bindings[i]["item"].value.replace(
        "https://database.factgrid.de/entity/", "");
        };  
      }
    }
    return res.results.bindings
  }
}

 
