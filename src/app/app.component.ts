import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms' ;
import { debounceTime, switchMap, map, tap, filter, takeWhile, mergeMap, exhaustMap, distinctUntilChanged, startWith } from 'rxjs/operators';
import { Observable, EMPTY, pipe, from, of } from 'rxjs';
import { HttpClient, HttpHeaders, JsonpClientBackend} from '@angular/common/http';
import { SetLanguageService } from './services/set-language.service';
import { RequestService } from './services/request.service';
import { CreateItemToDisplayService} from './services/create-item-to-display.service';
import { AppAndDisplaySharedService} from './services/app-and-display-shared.service';
import { stringify } from '@angular/compiler/src/util';
import { ListDetailsService } from './services/list-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy 
{

  langs = [{name:'English',code:"en"},{name:'German',code:"de"},{name:'French',code:"fr"}, {name:'Spanish',code:"es"}, {name:'Italian',code:"it"}, {name:'Hungarian',code:"hu"}, {name:'Swedish',code:"se"}];

  researchFields:any[] = [{name:'all', id:"all"},{name:'Illuminati',id:"Q10677"}, {name:'student corporations', id:"Q28115"}, {name:'animal magnetism',id:"Q172203"}, {name:'freemasonry', id:"Q10678"},
                     {name:'prose fiction', id:"Q195135"}];

  selectedLang: string = (localStorage['selectedLang']===undefined)? "en": localStorage['selectedLang'];

  selectedItems:any[] = [];

  sparql:string;


  selectedResearchField: string = localStorage['selectedResearchField'];

  title = 'factgrid';
  searchInput = new FormControl();

 public selectedItem:Observable<any>;

 searchToken:string = "on";
  labels
  items = [];
  newItem;

private baseSearchURL = 'https://database.factgrid.de//w/api.php?action=wbsearchentities&search=' ;
private baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=' ;
private searchUrlSuffix = '&language=en&uselang=fr&limit=50&format=json&origin=*' ;
private getUrlSuffix= '&format=json&origin=*' ; 

displayClickedItem: string;

  constructor( private changeDetector: ChangeDetectorRef, public sharedService:AppAndDisplaySharedService, private http: HttpClient, 
    private request:RequestService, private setLanguage:SetLanguageService, private createItemToDisplay:CreateItemToDisplayService, private setList:ListDetailsService) {}

  ngOnInit(): void {

    if (localStorage['selectedItems']===undefined){ 
      localStorage.setItem("selectedItems", JSON.stringify([{ value: {id: "Q152233"}, label:"FactGrid" }]));
    }

    if (localStorage['selectedResearchField']===undefined){ 
      localStorage.setItem("selectedResearchField", "all");
    }
    
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
    this.searchToken="on";
    this.changeDetector.detectChanges();
    })
  }

  onItemSelect(item){ 
  console.log(item);
  this.sharedService.item = this.createItemToDisplay.createItemToDisplay(item,this.selectedLang);
  this.sharedService.item.subscribe(re=>{
    let u = { value: {id: re[0].id}, label: re[0].label }
    console.log(u);
    this.selectedItems = JSON.parse(localStorage.getItem('selectedItems'));
    if (this.selectedItems !== undefined){
      for (let i=0; i<this.selectedItems.length; i++){
        if (this.selectedItems[i] !== null) {
         if (this.selectedItems[i].value.id === u.value.id){
         this.selectedItems.splice(i,1);
         break
         }
        }
      }
    }
    this.selectedItems.unshift(u);
    if (this.selectedItems.length=51) {
       this.selectedItems.pop()};
    localStorage.setItem("selectedItems", JSON.stringify(this.selectedItems));
    });
  this.items = [];
  this.searchToken = "off";
  this.changeDetector.detectChanges();
  this.sharedService.list = of([{item:{}, itemLabel:{}}]);
   return [this.sharedService.item, this.sharedService.list]
     }

  clickedItemHandler(item: any[]){ 
    this.searchToken= "on";
    this.changeDetector.detectChanges();
    let url = this.baseGetURL+item[0]+this.getUrlSuffix;
    if(url!=="https://database.factgrid.de//w/api.php?action=wbgetentities&ids=&format=json&origin=*"){
    this.sharedService.item=this.request.getItem(url).pipe(
    map(res => res=Object.values(res.entities)),
    switchMap(res =>this.sharedService.item= this.createItemToDisplay.createItemToDisplay(this.setLanguage.item(res, this.selectedLang)[0], this.selectedLang))
    );
    };
    this.sharedService.item.subscribe(re=>{
      let u = { value: {id: re[0].id}, label: re[0].label }
      this.selectedItems = JSON.parse(localStorage.getItem('selectedItems'));
      if (this.selectedItems !== undefined){
        for (let i=0; i<this.selectedItems.length; i++){
          if (this.selectedItems[i] !== null) {
           if (this.selectedItems[i].value.id === u.value.id){
           this.selectedItems.splice(i,1);
           break
           }
          }
        }
      }
      this.selectedItems.unshift(u);
      if (this.selectedItems.length=51) {
         this.selectedItems.pop()};
         localStorage.setItem("selectedItems", JSON.stringify(this.selectedItems));
        });
    
  //  if (item[0] === undefined){ 
  //    if (item[1] ==! undefined) {  //handle sparql queries
      this.sparql = this.newSparqlAdress(item[1]);
      this.sharedService.list =this.request.getList(this.sparql);     
  //        }
  //     }
    this.searchToken = "off";
    return [this.sharedService.item, this.sharedService.list]
  };

  researchFieldSelect(researchField){
      if (researchField === undefined) {this.selectedResearchField = "all"};
      if (researchField !== undefined) {this.selectedResearchField = researchField.id; };
      localStorage['selectedResearchField'] = this.selectedResearchField;
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

    newSparqlAdress(address:string) : string { 
      const newPrefix = "https://database.factgrid.de/sparql?query=";
      const oldPrefix = "https://database.factgrid.de/query/#";
      address = address.replace(oldPrefix, newPrefix);
      return address
      }

     ngOnDestroy(): void {
       this.labels.unsubscribe()
       }
}