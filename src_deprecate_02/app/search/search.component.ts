import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms' ;
import { debounceTime, switchMap, map, tap, filter, distinctUntilChanged, startWith } from 'rxjs/operators';
import { Observable, pipe, from } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { SetLanguageService } from '../services/set-language.service';
import { RequestService } from '../services/request.service';
import { CreateItemToDisplayService} from '../services/create-item-to-display.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

@Input() selectedLang : string;
@Input() selectedProject : string;

@Output() selectedItem = new EventEmitter<Object>()

  title = 'factgrid';
  searchInput = new FormControl();

  labels
  items = [];
  newItem;
  
//private baseSearchURL = 'https://www.wikidata.org//w/api.php?action=wbsearchentities&search='
private baseSearchURL = 'https://database.factgrid.de//w/api.php?action=wbsearchentities&search=' ;
//private baseGetURL = 'https://www.wikidata.org//w/api.php?action=wbgetentities&ids=' ;
private baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=' ;
private searchUrlSuffix = '&language=en&uselang=fr&limit=50&format=json' ;
private getUrlSuffix= '&format=json' ; 

  constructor(private http: HttpClient, private request:RequestService, private setLanguage:SetLanguageService, private createItemToDisplay:CreateItemToDisplayService) { }

  ngOnInit(): void {

    this.labels = this.searchInput.valueChanges
    .pipe(
    debounceTime(400), 
    switchMap(label => this.request.searchItem(label, this.selectedLang)), 
    //map( res => res[search]),
    map( res => this.createList(res)),
    //map(res => res == "https://www.wikidata.org//w/api.php?action=wbgetentities&ids=&format=json"? 
   // "https://www.wikidata.org//w/api.php?action=wbgetentities&ids=Q42&format=json" : res ),
    map(res => res == "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=&format=json"? 
   "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=Q10599&format=json" : res ),
    debounceTime(200), 
    switchMap(url => this.request.getItem(url)),
    map(res => Object.values(res.entities)),
    filter(res => res !== undefined),
    filter(res => res != null),
   )
    .subscribe(re => { this.items = this.setLanguage.item(re, this.selectedLang); 
    this.items = this.filterProject(this.items, this.selectedProject);
    })
  
  
  }

  /*
  onItemSelect(item){
     this.selectedItem.emit(item);
     this.items = [];
  }
  */


 onItemSelect(item){item = this.createItemToDisplay.createItemToDisplay(item,this.selectedLang);
 item.subscribe(x=>console.log(x));
this.selectedItem.emit(item);
this.items = [];}


  searchItem(label:string): Observable<any> { return this.http.get(this.baseSearchURL + label + this.searchUrlSuffix)}

  getItem(url:string): Observable<any> { return this.http.get(url)};

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
  
  filterProject(arr, project){
      let selectedItems = []
      for (let i=0; i<arr.length; i++){
         if (arr[i].claims.P131 !== undefined){
          if (arr[i].claims.P131[0].mainsnak.datavalue.value.id === project){
            selectedItems.push(arr[i]);
            }
          }
          
        }
      if (project != "") {arr = selectedItems};
      this.selectedProject = project;
       return arr
      }

}
