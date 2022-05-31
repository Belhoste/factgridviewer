import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SparqlService {

  constructor() { }

  selectedLang: string = (localStorage['selectedLang'] === undefined) ? "en" : localStorage['selectedLang'];

  langService:string = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22"+this.selectedLang+"%22%2C%22en%22.%20%7D%0A%7D%0A";

  bearingName(item){
  
   let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%20WHERE%20%7B%20%20%3Fitem%20wdt%3AP247%2Fwdt%3AP3%2a%20wd%3A";
   let suffix="ORDER%20by%20%3FitemLabel";
   let u = prefix+item+this.langService+suffix;
   return u
  }
  

}
