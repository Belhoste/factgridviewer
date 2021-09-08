//this component 

import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms' ;
import { debounceTime, switchMap, map, filter, takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { SetLanguageService } from './services/set-language.service';
import { RequestService } from './services/request.service';
import { SlideUpAnimation} from './slide-up-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [SlideUpAnimation]
})
export class AppComponent implements OnInit
//, OnDestroy 
{

  langs = [{name:'English',code:"en"},{name:'German',code:"de"},{name:'French',code:"fr"}, {name:'Spanish',code:"es"}, 
           {name:'Italian',code:"it"}, {name:'Hungarian',code:"hu"}, {name:'Swedish',code:"se"}];//list of the languages

  researchFields:any[] = [{name:'all', id:"all"},{name:'Illuminati',id:"Q10677"}, {name:'student corporations', id:"Q28115"}, {name:'animal magnetism',id:"Q172203"}, {name:'freemasonry', id:"Q10678"},
                          {name:'prose fiction', id:"Q195135"}]; //list of the research fields

  selectedLang: string = (localStorage['selectedLang']===undefined)? "en": localStorage['selectedLang']; //initialization of the storage of the selected language (english)

  selectedItems:any[] = []; //initialization of the array of selected items

  selectedResearchField: string = localStorage['selectedResearchField']; //storage of the selected research field

  title = 'factgrid';

  subtitle:string;
  
  searchInput = new FormControl();

 public selectedItem:Observable<any>;

 searchToken:string = "on";  //initialization of the token used to hide/display the display component   todo: change into public isDisplay:boolean = "false"

 //animationState = 'in';

 public isDown: boolean = true;
 //state:string = 'down';

  labels
  items = [];
  newItem;
  itemId:string;
 
private baseSearchURL = 'https://database.factgrid.de//w/api.php?action=wbsearchentities&search=' ;
private baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=' ;
private searchUrlSuffix = '&language=en&uselang=fr&limit=50&format=json&origin=*' ;
private getUrlSuffix= '&format=json&origin=*' ; 

  constructor( 
  private changeDetector: ChangeDetectorRef, 
  private http: HttpClient, 
  private request:RequestService, 
  private setLanguage:SetLanguageService) 
  {}

  ngOnInit(): void {

    if (localStorage['selectedLang']===undefined) {
      localStorage.setItem("selectedLang", "en");
    }

    if (localStorage['selectedItems']===undefined){    //initialization of the storage of selected items
      localStorage.setItem("selectedItems", JSON.stringify([{ value: {id: "Q152233"}, label:"FactGrid" }]));
    }

    if (localStorage['selectedResearchField']===undefined){  //initialization of the storage of the research field
      localStorage.setItem("selectedResearchField", "all");
    }
   
  /*  this.subtitle = "a database for historians"
    if (this.selectedLang === "de") { this.subtitle = "eine Databank für Historiker*innen" }
    if (this.selectedLang === "fr") { this.subtitle = "une base de données pour historien.nes"}
    
    
    this.labels = this.searchInput.valueChanges   //search engine
    .pipe(
    debounceTime(400),
    switchMap(label => this.request.searchItem(label, this.selectedLang)), 
    map( res => this.createList(res)),
    //map(res => res == "https://www.wikidata.org//w/api.php?action=wbgetentities&ids=&format=json"? 
   // "https://www.wikidata.org//w/api.php?action=wbgetentities&ids=Q42&format=json&origin=*" : res ),
    map(res => res == "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=&format=json&origin=*"? 
   "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=Q220375&format=json&origin=*" : res ),
    debounceTime(200),
    switchMap(url => this.request.getItem(url)),
    takeWhile (res => res !== undefined),
    filter (res => res.entities !== undefined),
    filter (res => res.entities !== null),
    map(res => Object.values(res.entities)),
   )
    .subscribe(re => { 
    this.items = this.setLanguage.item(re, this.selectedLang);
    this.items = this.filterResearchField(this.items, this.selectedResearchField);  
 //   this.searchToken="on";
    this.changeDetector.detectChanges();
    })
    */

    

  }
  
  langSetting(lang){
    if (lang !== undefined) {
    this.selectedLang = lang.code; }
    localStorage['selectedLang'] = this.selectedLang;
    }
  
    /*
  researchFieldSelect(researchField){
      if (researchField === undefined) {this.selectedResearchField = "all"};
      if (researchField !== undefined) {this.selectedResearchField = researchField.id; };
      localStorage['selectedResearchField'] = this.selectedResearchField;
       }
     
  

  searchItem(label:string): Observable<any> { return this.http.get(this.baseSearchURL + label + this.searchUrlSuffix
//   , { headers : { 'Access-Control-Allow-Origin':'*'}}
    )}

  getItem(url:string): Observable<any> { return this.http.get(url
//   , { headers : { 'Access-Control-Allow-Origin':'*'}}
    ) };

  createList(re) {  //create an url whith the elements of an array
    let list = "";
    let url = "";
    let arr = re.search;
    if ( arr === undefined ) { arr = []}
    else { arr = arr };
    for (let i = 0; i < arr.length; i++) {
      list = list+"|"+arr[i].id;    
    };
    list = list.slice(1) ;
    url = this.baseGetURL+list+this.getUrlSuffix;
    return url
    }

    filterResearchField(items, researchField){        //to only get items of the selectedResearchField (=selectedItems)
      let selectedItems = []
        for (let i=0; i<items.length; i++){
         if (items[i].claims.P97!==undefined){
           for (let j=0; j<items[i].claims.P97.length; j++) {
           let id = items[i].claims.P97[j].mainsnak.datavalue.value.id;
             if (researchField == id){
              selectedItems.push(items[i]);
               }
             }
          }
          if (researchField == "all" ){ selectedItems = items};
        }
         return selectedItems
      }

      uniq(arr){  //remove duplicates in an array / it is used in setPropertiesList and setItemsList
        var seen = {};
        arr = arr.filter(Boolean);
        return arr.filter(function(item) {
            return seen.hasOwnProperty(item) ? false : (seen[item] = true);
        });
    }

    removeDuplicates(data, key){
         return [ ...new Map(
             data.map(x => [key(x), x])
         ).values()
      ]
    }	  
	    
     ngOnDestroy(): void {
       this.labels.unsubscribe()
       }
       */
}