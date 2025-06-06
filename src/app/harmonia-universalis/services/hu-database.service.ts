import { Injectable, inject } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { switchMap, map, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HuDatabaseService {
  private request = inject(RequestService);



 sparqlBuilding(lang){   // this is the sparql query
   let u = "https://database.factgrid.de/query/#%23biblio%0ASELECT%20DISTINCT%20%3Ftitle%20%3FtitleLabel%20%3Fauthor%20%3FauthorLabel%20%3Fdate%20%3Flocation%20%3FlocationLabel%20%3F" +
     "country%20%3FcountryLabel%0AWHERE%20%0A%7B%20VALUES%20%3Fc%20%7B%20wd%3AQ21925%20wd%3AQ11317%20%7D%0A%20%20%3Ftitle%20wdt%3AP2%20wd%3AQ20%3B%0A%20%20%20%20%20%20%20%20wdt%3AP243%20wd%3AQ172203%3B%0A%20%20%20%20%20%20%20%20wdt%3AP21%20%3F" +
     "author%3B%0A%20%20%20%20%20%20%20%20wdt%3AP222%20%3Fdate%3B%0A%20%20%20%20%20%20%20%20wdt%3AP241%20%3Flocation%20.%0A%20%20%3Fcountry%20%5Ewdt%3AP297%20%3Flocation%3B%0A%20%20%20%20%20%20%20%20%20%20wdt%3AP2%20%20%20%3Fc%20%20" + lang;
    return u
  }

  listFromSparql(res) {  // create the qid in the results.bindings
  if (res !== undefined){
    if (res.results !== undefined) {
     for (let i = 0; i < res.results.bindings.length; i++) {
      res.results.bindings[i]["author"].id = res.results.bindings[i]["author"].value.replace(
         "https://database.factgrid.de/entity/", "");
      res.results.bindings[i]["author"].label = res.results.bindings[i]["authorLabel"].value;
      res.results.bindings[i]["title"].id = res.results.bindings[i]["title"].value.replace(
         "https://database.factgrid.de/entity/", "");
      res.results.bindings[i]["title"].label = res.results.bindings[i]["titleLabel"].value;
      res.results.bindings[i]["location"].id = res.results.bindings[i]["location"].value.replace(
         "https://database.factgrid.de/entity/", "");
      res.results.bindings[i]["location"].label = res.results.bindings[i]["locationLabel"].value;
      res.results.bindings[i]["country"].id = res.results.bindings[i]["country"].value.replace(
         "https://database.factgrid.de/entity/", "");
      res.results.bindings[i]["country"].label = res.results.bindings[i]["countryLabel"].value;
      res.results.bindings[i]["date"].value = res.results.bindings[i]["date"].value.slice(0,4);
        };  
      };
    }
    return res.results.bindings
  }

  databaseToDisplay(sparql){
     let sparqlResult:Observable<any> | undefined;
//   if(sparql.includes("item")) {
    let selectedSparql = this.newSparqlAdress(sparql); // this.newSparqlAdress(sparql,this.selectedLang); //handle sparql queries 1. create the address 
    sparqlResult = this.request.getList(selectedSparql); 
      //handle sparql queries 2. list ready to display  
//  };
    return sparqlResult    
  }

  newSparqlAdress(address:string) : string {  // create a query of the API
      const newPrefix = "https://database.factgrid.de/sparql?query=";
      let oldPrefix = "https://database.factgrid.de/query/#";
      if (address.includes('embed.html')){oldPrefix ="https://database.factgrid.de/query/embed.html#"};
      if (address !== undefined) address = address.replace(oldPrefix, newPrefix);
      return address
      }

  databaseToDownload(data){
      let dataToDownload:any[][] = [ ["author","author.id","title","title.id","location","location.id","country","country.id","date" ] ];
      for (let i=0; i<data.length; i++){ dataToDownload[i+1] = [data[i].author.label, data[i].author.id, data[i].title.label, data[i].author.id, data[i].location.label, data[i].location.id, data[i].country.label, data[i].country.id, data[i].date.value] } 
       console.log(dataToDownload);
      return dataToDownload
     } 
  }

  

  



