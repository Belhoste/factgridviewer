import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, BehaviorSubject, combineLatest} from 'rxjs';
import { map, switchMap, tap, debounceTime, takeWhile, filter } from 'rxjs/operators';
import { ParisDatabaseService } from './services/paris-database.service';
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
  selector: 'app-paris-search',
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
  templateUrl: './paris-search.component.html',
  styleUrls: ['./paris-search.component.scss']
})




export class ParisSearchComponent implements OnInit {
 private dataService = inject(ParisDatabaseService);
 private changeDetector = inject(ChangeDetectorRef);
 private request = inject(RequestService);
 private setLanguage = inject(SetLanguageService);
 private lang = inject(SelectedLangService);


  //  selectedLang: string = (localStorage['selectedLang']===undefined)? "en": localStorage['selectedLang']; //initialization of the storage of the selected language (english)


    searchInput = new FormControl();

    public selectedItem:Observable<any>;
    public isDisplay:boolean = false;

    data$ = new Observable<string[]>();
    searchQuery$ = new BehaviorSubject<string>('');
    
    labels
    items = [];
    newItem;
    itemId:string;

    private baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=' ;
    private getUrlSuffix= '&format=json&origin=*' ;

    formerVisitsTitle:string ="you have visited:";
    selectedParisItemsList:any[] = JSON.parse(localStorage.getItem('selectedItems'));


    ngOnInit(): void {

   /*
    this.formerVisitsTitle = "you have visited:"
    if(this.selectedLang === "de") {this.formerVisitsTitle = "Sie haben besucht:"};
    if(this.selectedLang === "fr") {this.formerVisitsTitle = "vous avez visité :"};
    if(this.selectedLang === "es") {this.formerVisitsTitle = "has visitado :"}
    if(this.selectedLang === "it") {this.formerVisitsTitle = "hai visitato :"}
    */

    this.formerVisitsTitle = this.lang.formerVisitsTitle(this.formerVisitsTitle);

    this.labels = this.searchInput.valueChanges   //search engine
    .pipe(
    debounceTime(400),
    map( res => "Paris, " + res ),
    tap(res => console.log(res)),
    //switchMap(label => this.request.searchItem(label, this.selectedLang)),
     switchMap(label => this.request.searchItem(label, this.lang.selectedLang)),

    map( res => this.createList(res)),
    map(res => res == "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=&format=json&origin=*"? 
   "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=Q220375&format=json&origin=*" : res ),
    debounceTime(200),
    switchMap(url => this.request.getItem(url)),
  //  takeWhile (res => res !== undefined),
    filter (res => res !== undefined),
    filter (res => res.entities !== undefined && res.entities !==null),
   // filter (res => res.entities !== null),
    map(res => Object.values(res.entities))
   )
    .subscribe(re => { 
  //  this.items = this.setLanguage.item(re, this.selectedLang);
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

  addParis(re) {
     re = "Paris, "+re;
    // return re
   }

    ngOnDestroy(): void {
       this.labels.unsubscribe()
       }
   
   }

   

 




