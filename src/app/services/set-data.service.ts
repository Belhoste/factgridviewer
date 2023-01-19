//service preparing data for display

import { Injectable } from '@angular/core';
import { SetLanguageService } from './set-language.service';
import { RequestService } from './request.service';
import { switchMap, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CreateCompleteItemService } from './create-complete-item.service';

@Injectable({
  providedIn: 'root'
})
export class SetDataService {

  constructor(private createCompleteItem:CreateCompleteItemService, private setLanguage:SetLanguageService, private request:RequestService) { }

selectedLang: string = (localStorage['selectedLang']===undefined)? "en": localStorage['selectedLang']; //initialization of the storage of the selected language (english)
baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=' ;
getUrlSuffix= '&format=json&origin=*' ; 
	
itemToDisplay(id){

	let url = this.baseGetURL+id+this.getUrlSuffix;
  let itemToDisplay = this.request.getItem(url).pipe( // get the item
                      map(res => res=Object.values(res.entities)),
                      switchMap(res => itemToDisplay = this.createCompleteItem.createCompleteItem(res)));                   
      return itemToDisplay
    }

sparqlToDisplay(sparql){
  let sparqlResult:Observable<any> | undefined;
   if(sparql.includes("item")){
    let selectedSparql = this.newSparqlAdress(sparql,this.selectedLang); //handle sparql queries 1. create the address 
   sparqlResult = this.request.getList(selectedSparql); 
      //handle sparql queries 2. list ready to display  
  }
    return sparqlResult
  }

  sparqlToDownload(sparql){
    let selectedSparql = this.newSparqlAdress(sparql, this.selectedLang);//handle sparql queries 1. create the address
    this.request.downLoadList(selectedSparql);     //handle sparql queries 2. list ready to download  
  }

    newSparqlAdress(address:string, lang) : string { 
     
      const newPrefix = "https://database.factgrid.de/sparql?query=";
      let oldPrefix = "https://database.factgrid.de/query/#";
      if (address.includes('embed.html')){oldPrefix ="https://database.factgrid.de/query/embed.html#"};
      if (address !== undefined) address = address.replace(oldPrefix, newPrefix);
      return address
      }
  }