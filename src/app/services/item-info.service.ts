import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, forkJoin, Subscription } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class ItemInfoService {

  infoList:Observable<any> | undefined

  constructor( private request: RequestService ) { }
  selectedLang: string = (localStorage['selectedLang'] === undefined) ? "en" : localStorage['selectedLang'];

  langService:string = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22"+this.selectedLang+"%22%2C%22en%22.%20%7D%0A%7D%0A";

  infoListBuilding(item){
    let id = item.id;
    let instancesListQuery;
    let subclassesListQuery:Observable<any> | undefined ;
    let classesListQuery:Observable<any> | undefined ;
    let natureOfListQuery:Observable<any> | undefined;
    let result;
    let infoList;

    instancesListQuery = this.instancesListBuilding(id);
    subclassesListQuery = this.subclassesListBuilding(id)  ;
    classesListQuery = this.classesListBuilding(id);
    natureOfListQuery = this.natureOfListBuilding(id);
  //  result=classesListQuery;
    result=forkJoin([instancesListQuery,subclassesListQuery,classesListQuery,natureOfListQuery]).
    subscribe(res => {infoList = res, item.infoList = infoList});
    return result 
    } 

  instancesListBuilding(id){
    let prefix = "https://database.factgrid.de/query/#SELECT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%0AWHERE%20%7B%20%3Fitem%20wdt%3AP2%20wd%3A";
    let suffix = "ORDER%20by%20%3FitemLabel";
    let suffix2= "%20%0ALIMIT%20200";
    let u = this.newSparqlAdress(prefix+id+this.langService+suffix+suffix2);
    return this.request.getList(u).pipe(map(res => this.listFromSparql(res)));
        } 

  subclassesListBuilding(id){   
    let prefix = "https://database.factgrid.de/query/#SELECT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%0AWHERE%20%7B%20%3Fitem%20wdt%3AP3%2B%20wd%3A";
    let suffix = "ORDER%20by%20%3FitemLabel";
    let u = this.newSparqlAdress(prefix+id+this.langService+suffix);
    return this.request.getList(u).pipe(map(res => this.listFromSparql(res)));
     } 
     
  classesListBuilding(id){
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%0A%3Fitem%20%5E%28wdt%3AP3%2Fwdt%3AP3%2a%29%20wd%3A";
    let suffix = "ORDER%20by%20%3FitemLabel";
    let u = this.newSparqlAdress(prefix+id+this.langService+suffix);
    return this.request.getList(u).pipe(map(res => this.listFromSparql(res)));
      }

  natureOfListBuilding(id){
        let prefix1 = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7BFILTER%20NOT%20EXISTS%7B%3Fi%20wdt%3AP2%20wd%3A";
        let prefix2 ="%7D%20%3Fobject%20wdt%3AP3%2a%20%3Fitem%3B%20%5Ewdt%3AP2%20wd%3A";
        let suffix = "ORDER%20by%20%3FitemLabel";
        let u = this.newSparqlAdress(prefix1+id+prefix2+id+this.langService+suffix);
        return this.request.getList(u).pipe(map(res => this.listFromSparql(res)));
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

  newSparqlAdress(address:string) : string { 
     
    const newPrefix = "https://database.factgrid.de/sparql?query=";
    let oldPrefix = "https://database.factgrid.de/query/#";
    if (address.includes('embed.html')){oldPrefix ="https://database.factgrid.de/query/embed.html#"};
    if (address !== undefined) address = address.replace(oldPrefix, newPrefix);
    return address
    }
}



