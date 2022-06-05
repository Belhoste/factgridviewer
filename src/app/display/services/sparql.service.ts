import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SparqlService {

  constructor() { }

  selectedLang: string = (localStorage['selectedLang'] === undefined) ? "en" : localStorage['selectedLang'];

  langService:string = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22"+this.selectedLang+"%22%2C%22en%22.%20%7D%0A%7D%0A";

  sparqlBuilding(id,item){   
    let u="";
    let suffix = "ORDER%20by%20%3FitemLabel";
    if(id = "Q24499"){ // familyName
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%20WHERE%20%7B%20%20%3Fitem%20wdt%3AP247%2Fwdt%3AP3%2a%20wd%3A";
      u = prefix+item+this.langService+suffix;
      }
    if(id = "Q37073" || "Q146602"){ // career statement
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%0AWHERE%20%7BVALUES%20%3Factivity%20%7Bwd%3A";
      let prefix2="%7D%20%7B%3Fitem%20wdt%3AP165%20%3Factivity.%20%3Factivity%20wdt%3AP267%20%3Fcontext.%7D%20%0AUNION%20%0A%7B%3Fitem%20wdt%3AP3%2B%20%3Factivity.%20%20FILTER%20NOT%20EXISTS%20%7B%3Fitem%20wdt%3AP267%20%3Fcontext%7D%20%7D%0A";
      u = prefix+item+prefix2+this.langService+suffix;
      }
    if(id = "Q8"){ // place
        let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20WHERE%20%0A%7B%3Fitem%20wdt%3AP2%2Fwdt%3AP3%2a%20wd%3AQ160381%3B%20wdt%3AP83%20%7C%20wdt%3AP47%20wd%3A";
        u = prefix+item+this.langService+suffix;
        }   
    return u
  }
  

}
