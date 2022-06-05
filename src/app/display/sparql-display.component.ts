import { Component, Input, OnChanges, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SparqlService } from './services/sparql.service';
import { SetDataService } from '../services/set-data.service'

@Component({
  selector: 'app-sparql-display',
  templateUrl: 'sparql-display.component.html',
  styleUrls: ['sparql-display.component.scss']
})
export class SparqlDisplayComponent implements OnChanges {
 
  @Input() sparqlSubject;
  @Input() sparqlData ;
  
  selectedLang: string = (localStorage['selectedLang'] === undefined) ? "en" : localStorage['selectedLang'];
  list: any[] = [];
  isList:boolean = false;
  subTitle:string = "";

  constructor() {  }

  ngOnChanges(changes: SimpleChanges): void {
        if(changes.sparqlData && changes.sparqlData.currentValue){
            this.list=this.sparqlData;
        }
        if(changes.sparqlSubject && changes.sparqlSubject.currentValue){
            this.subTitle=this.sparqlSubject;
        }
        if(this.subTitle = "Q24499"){
            if (this.selectedLang === "en") { this.subTitle = "Bearing this family name:" };
            if (this.selectedLang === "de") { this.subTitle = "Mit diesem Familiennamen:" };
            if (this.selectedLang === "fr") { this.subTitle = "Portant ce nom de famille:" };
            if (this.selectedLang === "es") { this.subTitle = "Llevando este apellido:" };
        }

        if(this.subTitle = "Q37073"){ this.subTitle ="Liste"};

        if(this.subTitle = "Q8"){
          if (this.selectedLang === "en") { this.subTitle = "Buildings and monuments:" };
          if (this.selectedLang === "de") { this.subTitle = "Gebäude und Denkmäler:" };
          if (this.selectedLang === "fr") { this.subTitle = "Edifices et monuments:" };
          if (this.selectedLang === "es") { this.subTitle = "Edificios y monumentos:" };
      }

        if(this.list[0] !== undefined){ this.isList = true };
        if(this.list[0] ===undefined) {this.isList = false};       
      }
    } 



