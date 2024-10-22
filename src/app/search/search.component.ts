import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, BehaviorSubject, combineLatest} from 'rxjs';
import { map, switchMap, tap, debounceTime, takeWhile, filter } from 'rxjs/operators';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
//import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SetLanguageService } from '../services/set-language.service';
import { RequestService } from '../services/request.service';
import { SelectedLangService } from '../selected-lang.service';





@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})




export class SearchComponent implements OnInit {
 private changeDetector = inject(ChangeDetectorRef);
 private request = inject(RequestService);
 private setLanguage = inject(SetLanguageService);
 private lang = inject(SelectedLangService);


  //  selectedLang: string = (localStorage['selectedLang']===undefined)? "en": localStorage['selectedLang']; //initialization of the storage of the selected language (english)

    title = 'factgrid';
    subtitle:string = "a database for historians";
    advanced_search:string = "advanced search";
    projects:string = "research projects";
    fields: string = "fields of reserach";

 
   

    searchInput = new FormControl();

    public selectedItem:Observable<any>;
    public isDisplay:boolean = false;

    data$ = new Observable<string[]>();
    searchQuery$ = new BehaviorSubject<string>('');
    
    labels
    items = [];
    newItem;
    itemId: string;
    pages: any

    private baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=' ;
    private getUrlSuffix= '&format=json&origin=*' ;

    formerVisitsTitle:string = "you have visited:";
    selectedItemsList: any[] = JSON.parse(localStorage.getItem('selectedItems'));


  
  //  this.request.getStat();


  ngOnInit(): void {

    this.subtitle = this.lang.subtitle(this.subtitle);

    this.advanced_search = this.lang.advanced_search(this.advanced_search);

    this.projects = this.lang.projects(this.projects);

    this.fields = this.lang.fields(this.fields);

    this.formerVisitsTitle = this.lang.formerVisitsTitle(this.formerVisitsTitle)

    this.selectedItemsList = this.selectedItemsList.filter(function (el) { return (el !== null) });

    this.pages = this.request.getStat().pipe(map(res => Object.values(res)[1].statistics.pages));
    //  this.pages.subscribe(res => console.log(res));

    //   this.pages = this.stat();

    //   console.log(this.pages);
    /*
     this.subtitle = "a database for historians"
      if (this.selectedLang === "de") { this.subtitle = "eine Databank für Historiker*innen" }
      if (this.selectedLang === "fr") { this.subtitle = "une base de données pour historien.nes"}
      if (this.selectedLang === "es") { this.subtitle = "una base de datos para historiadores"}
      if (this.selectedLang === "it") { this.subtitle = "un database per gli storici"}
  
      this.advanced_search = "advanced search"
      if (this.selectedLang === "de") { this.advanced_search = "erweiterte Suche" }
      if (this.selectedLang === "fr") { this.advanced_search = "recherche avancée"}
      if (this.selectedLang === "es") { this.advanced_search = "búsqueda avanzada"}
      if (this.selectedLang === "it") { this.advanced_search = "ricerca avanzata"}
  
      this.projects = "research projects"
      if (this.selectedLang === "de") { this.projects = "Forschungsprojekten" }
      if (this.selectedLang === "fr") { this.projects = "projets de recherche"}
      if (this.selectedLang === "es") { this.projects = "proyectos de investigación"}
      if (this.selectedLang === "it") { this.projects = "progetti di ricerca"}
  
      this.fields = "fields of research"
      if (this.selectedLang === "de") { this.fields = "Forschungsfelder" }
      if (this.selectedLang === "fr") { this.fields = "domaines de recherche"}
      if (this.selectedLang === "es") { this.projects = "campos de investigación"}
      if (this.selectedLang === "it") { this.projects = "aree di ricerca"}
        
      this.formerVisitsTitle = "you have visited:"
      if(this.selectedLang === "de") {this.formerVisitsTitle = "Sie haben besucht:"};
      if(this.selectedLang === "fr") {this.formerVisitsTitle = "vous avez visité :"};
      if(this.selectedLang === "es") {this.formerVisitsTitle = "has visitado :"}
      if(this.selectedLang === "it") {this.formerVisitsTitle = "hai visitato :"}
  
      */

    console.log(this.selectedItemsList);


    this.labels = this.searchInput.valueChanges   //search engine
      .pipe(
        debounceTime(400),
        switchMap(label => this.request.searchItem(label, this.lang.selectedLang)),
        map(res => this.createList(res)),
        map(res => res == "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=&format=json&origin=*" ?
          "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=Q220375&format=json&origin=*" : res),
        debounceTime(200),
        switchMap(url => this.request.getItem(url)),
        //  takeWhile (res => res !== undefined),
        filter(res => res !== undefined),
        filter(res => res.entities !== undefined && res.entities !==null),
   // filter (res => res.entities !== null),
        map(res => Object.values(res.entities))
      )
    .subscribe(re => { 
    this.items = this.setLanguage.item(re, this.lang.selectedLang);
  //  this.items = this.filterResearchField(this.items, this.selectedResearchField);
      this.isDisplay = true ;
      if (this.items[0].id == "Q220375") { this.isDisplay = false };
   this.changeDetector.detectChanges();
      })
    }

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

  addParis(re) { // used in Paris-search
     re = "Paris, "+re;
    // return re
  }c

    ngOnDestroy(): void {
       this.labels.unsubscribe()
       }
   
   }
