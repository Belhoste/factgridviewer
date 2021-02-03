import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms' ;
import { debounceTime, switchMap, map, tap, filter, mergeMap, exhaustMap, distinctUntilChanged, startWith } from 'rxjs/operators';
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
export class AppComponent implements OnInit
, OnDestroy 
{

langs = [{name:'English',code:"en"},{name:'German',code:"de"},{name:'French',code:"fr"}, {name:'Spanish',code:"es"}, {name:'Italian',code:"it"}, {name:'Hungarian',code:"hu"}, {name:'Swedish',code:"se"}];

projects = [{name:'All', id:"all"},{name:'Illuminati',id:"Q31770"},{name:'Harmonia Universalis',id:"Q99677"},{name:'Formation of German student corporations',id:"Q28114"}];

  selectedLang: string = (localStorage['selectedLang']===undefined)? "en": localStorage['selectedLang'];

  selectedProject: string = localStorage['selectedProject'];

  title = 'factgrid';
  searchInput = new FormControl();

 public selectedItem:Observable<any>;

 searchToken:string = "off";
  labels
  items = [];
  newItem;

private baseSearchURL = 'https://database.factgrid.de//w/api.php?action=wbsearchentities&search=' ;
private baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=' ;
private searchUrlSuffix = '&language=en&uselang=fr&limit=50&format=json' ;
private getUrlSuffix= '&format=json' ; 

displayClickedItem: string;

  constructor(private changeDetector: ChangeDetectorRef, public sharedService:AppAndDisplaySharedService, private http: HttpClient, private request:RequestService, private setLanguage:SetLanguageService, private createItemToDisplay:CreateItemToDisplayService) { }

  ngOnInit(): void {

    this.labels = this.searchInput.valueChanges
    .pipe(
    debounceTime(400),
    switchMap(label => this.request.searchItem(label, this.selectedLang) ), 
    map( res => this.createList(res)),
    //map(res => res == "https://www.wikidata.org//w/api.php?action=wbgetentities&ids=&format=json"? 
   // "https://www.wikidata.org//w/api.php?action=wbgetentities&ids=Q42&format=json" : res ),
    map(res => res == "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=&format=json"? 
   "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=Q10599&format=json" : res ),
    debounceTime(200), 
    switchMap(url => this.request.getItem(url)),
    map(res => Object.values(res.entities)),
    filter(res => res !== undefined),
    filter(res => res != null)
   )
    .subscribe(re => { 
      this.items = this.setLanguage.item(re, this.selectedLang);
      console.log(this.items);
      console.log(this.selectedProject);
    this.items = this.filterProject(this.items, this.selectedProject);  
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

  selectProject(project){
      if (project === undefined) {this.selectedProject = "all"};
      if (project !== undefined) {this.selectedProject = project.id; };
      console.log(this.selectedProject);
      localStorage['selectedProject'] = this.selectedProject;
       }
     
  langSetting(lang){
     if (lang !== undefined) {
     this.selectedLang = lang.code; }
     localStorage['selectedLang'] = this.selectedLang;
     console.log(localStorage['selectedLang'])
     }

  searchItem(label:string): Observable<any> { return this.http.get(this.baseSearchURL + label + this.searchUrlSuffix
  //  , { headers : { 'Access-Control-Allow-Origin':"https://sleepy-ridge-62412.herokuapp.com"}}
    )}

  getItem(url:string): Observable<any> { return this.http.get(url
 //  , { headers : { 'Access-Control-Allow-Origin':'https://sleepy-ridge-62412.herokuapp.com'}}
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
  
  filterProject(arr, project){        //to only get items of the selectedProject (=selectedItems)
    let selectedItems = []
      for (let i=0; i<arr.length; i++){
       if (arr[i].claims.P131!==undefined){
         let id = arr[i].claims.P131[0].mainsnak.datavalue.value.id;
           if (project == "all") { selectedItems = arr };
           if (project == id){
            selectedItems.push(arr[i]);
          }
        }
        if (project == "all" ){ selectedItems = arr};
      }
       return selectedItems
    }


     ngOnDestroy(): void {
       this.labels.unsubscribe()
       }

}

                        