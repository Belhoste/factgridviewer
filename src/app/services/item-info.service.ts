import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { RequestService } from './request.service';
import { SelectedLangService } from '../selected-lang.service';



@Injectable({
  providedIn: 'root'
})
export class ItemInfoService {
  private request = inject(RequestService);
  private lang = inject(SelectedLangService);


 // selectedLang: string = (localStorage['selectedLang'] === undefined) ? "en" : localStorage['selectedLang'];

  langService:string = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22"+this.lang.selectedLang+"%22%2C%22en%22.%20%7D%0A%7D%0A";

  infoListBuilding(item) {
    let id = item.id;
    let instancesListQuery;
    let subclassesListQuery:Observable<any> | undefined ;
    let classesListQuery:Observable<any> | undefined ;
    let natureOfListQuery:Observable<any> | undefined;
    let infoList:any[];

    instancesListQuery = this.instancesListBuilding(id);
    subclassesListQuery = this.subclassesListBuilding(id)  ;
    classesListQuery = this.classesListBuilding(id);
    natureOfListQuery = this.natureOfListBuilding(id);
  //  result=classesListQuery;
   forkJoin([instancesListQuery,subclassesListQuery,classesListQuery,natureOfListQuery])
  .subscribe(res => {infoList = res, item.infoList = infoList}); //ici on pourrait mettre un behaviorSubject pour l'infolist'
   //item.infolist = result; // I made this change; to be checked .
    //  return result  // the return does'nt seem to be necessary
    
    } 

  instancesListBuilding(id){
    let prefix = "https://database.factgrid.de/query/#SELECT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%0AWHERE%20%7B%20%3Fitem%20wdt%3AP2%20wd%3A";
    let suffix = "ORDER%20by%20%3FitemLabel";
    let suffix2 = "%20%0ALIMIT%20200";
    let u = this.newSparqlAddress(prefix+id+this.langService+suffix+suffix2);
//    return this.request.getList(u).pipe(map(res => this.listFromSparql(res)));
 //     let u = prefix + id + this.langService + suffix + suffix2;
    return this.request.getList(u).pipe(map(res => this.listFromSparql(res)));
        } 

  subclassesListBuilding(id){   
    let prefix = "https://database.factgrid.de/query/#SELECT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%0AWHERE%20%7B%20%3Fitem%20wdt%3AP3%2B%20wd%3A";
    let suffix = "ORDER%20by%20%3FitemLabel";
    let u = this.newSparqlAddress(prefix+id+this.langService+suffix);
  //  return this.request.getList(u).pipe(map(res => this.listFromSparql(res)));
 //   let u = prefix + id + this.langService + suffix;
    return this.request.getList(u).pipe(map(res => this.listFromSparql(res)));;
     } 
     
  classesListBuilding(id){
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%0A%3Fitem%20%5E%28wdt%3AP3%2Fwdt%3AP3%2a%29%20wd%3A";
    let suffix = "ORDER%20by%20%3FitemLabel";
    let u = this.newSparqlAddress(prefix+id+this.langService+suffix);
 //   return this.request.getList(u).pipe(map(res => this.listFromSparql(res)));
 //   let u = prefix + id + this.langService + suffix;
    return this.request.getList(u).pipe(map(res => this.listFromSparql(res)));;
      }

  natureOfListBuilding(id){
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fobject%20wdt%3AP3%2a%20%3Fitem%3B%20%5Ewdt%3AP2%20wd%3A"
    let u = this.newSparqlAddress(prefix+id+this.langService);
 //   return this.request.getList(u).pipe(map(res => this.listFromSparql(res)));
 //   let u = prefix + id + this.langService;
    return this.request.getList(u).pipe(map(res => this.listFromSparql(res)));;
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

 newSparqlAddress(address:string) : string { 
     
    const newPrefix = "https://database.factgrid.de/sparql?query=";
    let oldPrefix = "https://database.factgrid.de/query/#";
    if (address.includes('embed.html')){oldPrefix ="https://database.factgrid.de/query/embed.html#"};
    if (address !== undefined) address = address.replace(oldPrefix, newPrefix);
    return address
    }
   
}



