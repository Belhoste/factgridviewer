//service preparing data for display

import { Injectable, inject } from '@angular/core';
import { SetLanguageService } from './set-language.service';
import { SelectedLangService } from '../selected-lang.service';
import { RequestService } from './request.service';
import { switchMap, map, tap, takeWhile } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { CreateCompleteItemService } from './create-complete-item.service';
import { CreateItemToDisplayService } from './create-item-to-display.service';

@Injectable({
  providedIn: 'root'
})
export class SetDataService {
  private createItem = inject(CreateItemToDisplayService);
  private createCompleteItem = inject(CreateCompleteItemService);
  private setLanguage = inject(SetLanguageService);
  private request = inject(RequestService);
  private lang = inject(SelectedLangService);


sparqlResult = new Subject(); // In  case of BehaviorSubject I have to give an initial value

selectedLang: string = (localStorage['selectedLang']===undefined)? "en": localStorage['selectedLang']; //initialization of the storage of the selected language (english)
baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=' ;
getUrlSuffix= '&format=json&origin=*' ; 
	
  itemToDisplay(id) {

    //let sparql = this.sparql.sparqlToDisplay(id).subscribe(res => console.log(res));

    let labelLength: number = 0
    let url = this.baseGetURL + id + this.getUrlSuffix;
    let completeItem = this.request.getItem(url).pipe( // get the item
      map(res => res = Object.values(res.entities)),
      switchMap(res => completeItem = this.createCompleteItem.completeItem(res)),
    );
      return completeItem
  }

 sparqlAsk(sparql) {
    let u = "";
    let sparqlResult: Observable<any> | undefined;
    let selectedSparql = this.newSparqlAdress(sparql);
    sparqlResult = this.request.getAsk(selectedSparql);
    sparqlResult.subscribe(re => { u = re.boolean ; return u });
    return sparqlResult
  }
   
  sparqlToDisplay(sparql) {
      let sparqlResult:Observable<any> | undefined;
      if(sparql.includes("item")){
    let selectedSparql = this.newSparqlAdress(sparql); //handle sparql queries 1. create the address 
    sparqlResult = this.request.getList(selectedSparql);
      //handle sparql queries 2. list ready to display  
  }
    return sparqlResult
  }

 sparqlToDownload(sparql){
    let selectedSparql = this.newSparqlAdress(sparql);//handle sparql queries 1. create the address
    this.request.downLoadList(selectedSparql);     //handle sparql queries 2. list ready to download  
  }

    newSparqlAdress(address:string) : string { 
     
      const newPrefix = "https://database.factgrid.de/sparql?query=";
      let oldPrefix = "https://database.factgrid.de/query/#";
      if (address.includes('embed.html')){oldPrefix ="https://database.factgrid.de/query/embed.html#"};
      if (address !== undefined) address = address.replace(oldPrefix, newPrefix);
      return address
      } 
  }
