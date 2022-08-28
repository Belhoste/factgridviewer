

import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms' ;
import { debounceTime, switchMap, tap, map, filter, takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';
//import { HttpClient} from '@angular/common/http';
import { SetLanguageService } from '../services/set-language.service';
import { RequestService } from '../services/request.service';
import { SlideUpAnimation} from '../slide-up-animation';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [SlideUpAnimation]
})

export class SearchComponent implements OnInit, OnDestroy 
{
  selectedLang: string = (localStorage['selectedLang']===undefined)? "en": localStorage['selectedLang']; //initialization of the storage of the selected language (english)
  
  selectedResearchField: string = localStorage['selectedResearchField']; 

  selectedItemsList:any[] = JSON.parse(localStorage.getItem('selectedItems'));

  title = 'factgrid';
  subtitle:string;
  advanced_search:string;
  projects:string;
  fields:string;
  formerVisitsTitle:string;
  
  searchInput = new FormControl();

 public selectedItem:Observable<any>;

// searchToken:string = "on";  //initialization of the token used to hide/display the display component   todo: change into public isDisplay:boolean = "false"
 public isDisplay:boolean = false;
 //animationState = 'in';

 public isDown: boolean = true;
 //state:string = 'down';

  labels
  items = [];
  newItem;
  itemId:string;
 

//private baseSearchURL = 'https://database.factgrid.de//w/api.php?action=wbsearchentities&search=' ;
private baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=' ;
//private searchUrlSuffix = '&language=en&uselang=fr&limit=50&format=json&origin=*' ;
private getUrlSuffix= '&format=json&origin=*' ; 

  constructor( 
  private changeDetector: ChangeDetectorRef, 
//  private http: HttpClient, 
  private request:RequestService, 
  private setLanguage:SetLanguageService) 
  {}

  ngOnInit(): void {
   
    this.subtitle = "a database for historians"
    if (this.selectedLang === "de") { this.subtitle = "eine Databank für Historiker*innen" };
    if (this.selectedLang === "fr") { this.subtitle = "une base de données pour historien.nes"};
    if (this.selectedLang === "es") { this.subtitle = "una base de datos para historiadores"};
    if (this.selectedLang === "hu") { this.subtitle = "adatbázis történészek számára" };
    if (this.selectedLang === "it") { this.subtitle = "un database per gli storici" } ;

    this.advanced_search = "advanced search"
    if (this.selectedLang === "de") { this.advanced_search = "erweiterte Suche" };
    if (this.selectedLang === "fr") { this.advanced_search = "recherche avancée"};
    if (this.selectedLang === "es") { this.advanced_search = "búsqueda avanzada"};
    if (this.selectedLang === "hu") { this.advanced_search = "speciális keresés"};
    if (this.selectedLang === "it") { this.advanced_search = "ricerca avanzata"}



    this.projects = "research projects"
    if (this.selectedLang === "de") { this.projects = "Forschungsprojekten" };
    if (this.selectedLang === "fr") { this.projects = "projets de recherche"};
    if (this.selectedLang === "es") { this.projects = "proyectos de investigación"};
    if (this.selectedLang === "hu") { this.projects = "kutatási projektek"}
    if (this.selectedLang === "it") { this.projects = "progetti di ricerca" };

    this.fields = "fields of research"
    if (this.selectedLang === "de") { this.fields = "Forschungsfelder" };
    if (this.selectedLang === "fr") { this.fields = "domaines de recherche"};
    if (this.selectedLang === "es") { this.fields = "campos de investigación"};
    if (this.selectedLang === "hu") {this.fields = "kutatási területek"};
    if (this.selectedLang === "it") {this.fields = "aree di ricerca"};
      
    this.formerVisitsTitle = "you have visited:"
    if(this.selectedLang === "de") {this.formerVisitsTitle = "Sie haben besucht:"};
    if(this.selectedLang === "fr") {this.formerVisitsTitle = "vous avez visité :"};
    if(this.selectedLang === "es") {this.formerVisitsTitle = "has visitado :"};
    if(this.selectedLang === "hu") {this.formerVisitsTitle = "meglátogatott :"};
    if(this.selectedLang === "it") {this.formerVisitsTitle = "has visitado :"};


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
    map(res => Object.values(res.entities))
   )
    .subscribe(re => { 
    this.items = this.setLanguage.item(re, this.selectedLang);
    this.items = this.filterResearchField(this.items, this.selectedResearchField);  
 //   this.searchToken="on";
    this.isDisplay=true;
    this.changeDetector.detectChanges();
    })

  }

  researchFieldSelect(researchField){
      if (researchField === undefined) {this.selectedResearchField = "all"};
      if (researchField !== undefined) {this.selectedResearchField = researchField.id; };
      localStorage['selectedResearchField'] = this.selectedResearchField;
       }
     
// searchItem(label:string): Observable<any> { return this.http.get(this.baseSearchURL + label + this.searchUrlSuffix)}

//  getItem(url:string): Observable<any> { return this.http.get(url) };

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

 /*   removeDuplicates(data, key){
         return [ ...new Map(
             data.map(x => [key(x), x])
         ).values()
      ]
    }
    */
  
      
     ngOnDestroy(): void {
       this.labels.unsubscribe()
       }
}
