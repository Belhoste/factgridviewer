import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms' ;
import { debounceTime, switchMap, map, tap, filter, takeWhile, mergeMap, exhaustMap, distinctUntilChanged, startWith } from 'rxjs/operators';
import { Observable, pipe, from, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { SetLanguageService } from './services/set-language.service';
import { RequestService } from './services/request.service';
import { CreateItemToDisplayService} from './services/create-item-to-display.service';
import { AppAndDisplaySharedService} from './services/app-and-display-shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy 
{

  langs = [{name:'English',code:"en"},{name:'German',code:"de"},{name:'French',code:"fr"}, {name:'Spanish',code:"es"}, {name:'Italian',code:"it"}, {name:'Hungarian',code:"hu"}, {name:'Swedish',code:"se"}];

  researchFields = [{name:'all', id:"all"},{name:'Illuminati',id:"Q10677"}, {name:'student corporations', id:"Q28115"}, {name:'animal magnetism',id:"Q172203"}, {name:'freemasonry', id:"Q10678"},
                     {name:'prose fiction', id:"Q195135"}];

  selectedLang: string = (localStorage['selectedLang']===undefined)? "en": localStorage['selectedLang'];

  selectedResearchField: string = localStorage['selectedResearchField'];

  title = 'factgrid';
  searchInput = new FormControl();

 public selectedItem:Observable<any>;

 searchToken:string = "off";
  labels
  items = [];
  newItem;

private baseSearchURL = 'https://database.factgrid.de//w/api.php?action=wbsearchentities&search=' ;
private baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=' ;
private searchUrlSuffix = '&language=en&uselang=fr&limit=50&format=json&origin=*' ;
private getUrlSuffix= '&format=json&origin=*' ; 

displayClickedItem: string;

  constructor( private changeDetector: ChangeDetectorRef, public sharedService:AppAndDisplaySharedService, private http: HttpClient, 
    private request:RequestService, private setLanguage:SetLanguageService, private createItemToDisplay:CreateItemToDisplayService) {}

  ngOnInit(): void {

    //if (localStorage['selectedProject'] === undefined) localStorage.setItem('selectedProject','all');
    
    this.labels = this.searchInput.valueChanges
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
    console.log(this.selectedResearchField);
    console.log(this.items);
    this.searchToken="on";
    this.changeDetector.detectChanges();
    })
  }

  onItemSelect(item){ 
  this.sharedService.item = this.createItemToDisplay.createItemToDisplay(item,this.selectedLang);
  this.items = [];
  this.searchToken = "off";
  this.changeDetector.detectChanges();
   return this.sharedService.item
     }

  clickedItemHandler(item: any){ 
    this.searchToken= "on";
    this.changeDetector.detectChanges();
    this.sharedService.item=this.request.getItem(this.baseGetURL+item+this.getUrlSuffix).pipe(
    map(res => res=Object.values(res.entities)),
    switchMap(res =>this.sharedService.item= this.createItemToDisplay.createItemToDisplay(this.setLanguage.item(res, this.selectedLang)[0], this.selectedLang))
   );
   this.searchToken = "off";
    return this.sharedService.item
  };

  researchFieldSelect(researchField){
      if (researchField === undefined) {this.selectedResearchField = "all"};
      if (researchField !== undefined) {this.selectedResearchField = researchField.id; };
      localStorage['selectedResearchField'] = this.selectedResearchField;
      console.log(localStorage['selectedResearchField']);
       }
     
  langSetting(lang){
     if (lang !== undefined) {
     this.selectedLang = lang.code; }
     localStorage['selectedLang'] = this.selectedLang;
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
  //           if (project == "all") { selectedItems = items };
             if (researchField == id){
              selectedItems.push(items[i]);
               }
             }
          }
          if (researchField == "all" ){ selectedItems = items};
        }
         return selectedItems
      }
      


     ngOnDestroy(): void {
       this.labels.unsubscribe()
       }
}