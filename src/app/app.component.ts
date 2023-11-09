//this component 

import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms' ;
import { debounceTime, switchMap, map, filter, takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { SetLanguageService } from './services/set-language.service';
import { RequestService } from './services/request.service';
import { SlideUpAnimation } from './slide-up-animation';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [SlideUpAnimation],
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, NgFor, NgIf, RouterOutlet]
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
 
/*private baseSearchURL = 'https://database.factgrid.de//w/api.php?action=wbsearchentities&search=' ;
private baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=' ;
private searchUrlSuffix = '&language=en&uselang=fr&limit=50&format=json&origin=*' ;
private getUrlSuffix= '&format=json&origin=*' ; 

  constructor( 
  private changeDetector: ChangeDetectorRef, 
  private http: HttpClient, 
  private request:RequestService, 
  private setLanguage:SetLanguageService) 
  {}*/

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
  }
  
  langSetting(lang){
    if (lang !== undefined) {
    this.selectedLang = lang.code; }
    localStorage['selectedLang'] = this.selectedLang;
    window.location.reload();
    }

   researchFieldSelect(researchField){
     if (researchField === undefined) {this.selectedResearchField = "all"};
     if (researchField !== undefined) {this.selectedResearchField = researchField.id; };
     localStorage['selectedResearchField'] = this.selectedResearchField;
       }
}
