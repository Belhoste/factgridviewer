import { Injectable } from '@angular/core';
import { CreateItemToDisplayService } from './create-item-to-display.service';
import { SetLanguageService } from './set-language.service';
import { RequestService } from './request.service';
import { switchMap, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SetDataService {

  constructor(private createItem:CreateItemToDisplayService, private setLanguage:SetLanguageService, private request:RequestService) { }


selectedLang: string = (localStorage['selectedLang']===undefined)? "en": localStorage['selectedLang']; //initialization of the storage of the selected language (english)
baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=' ;
getUrlSuffix= '&format=json&origin=*' ; 
	
itemToDisplay(id){
	let url = this.baseGetURL+id+this.getUrlSuffix;
 //       { url == 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=&format=json&origin=*' };
  //    if(url === 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=&format=json&origin=*'){
  //    url = baseGetURL+formerItem+getUrlSuffix; id=formerItem } 
      let itemToDisplay=this.request.getItem(url).pipe(
                      map(res => res=Object.values(res.entities)),
                      switchMap(res =>  itemToDisplay= this.createItem.createItemToDisplay(this.setLanguage.item(res, this.selectedLang)[0], this.selectedLang))
                       );

    
       return itemToDisplay
    }

sparqlToDisplay(sparql){
    let selectedSparql = this.newSparqlAdress(sparql,this.selectedLang); //handle sparql queries 1. create the address
    let downloadSparql = this.newSparqlAdress(sparql, this.selectedLang);
    sparql = this.request.getList(selectedSparql);     //handle sparql queries 2. list ready to display  
   // this.request.downLoadList(downloadSparql);
    console.log(sparql);
    return sparql
  }

    newSparqlAdress(address:string, lang) : string { 
      const newPrefix = "https://database.factgrid.de/sparql?query=";
      const oldPrefix = "https://database.factgrid.de/query/#";
      if (address !== undefined) address = address.replace(oldPrefix, newPrefix);
      return address
      }
  }