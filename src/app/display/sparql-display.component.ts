import { Component, Input, OnChanges, ChangeDetectorRef, SimpleChanges, SimpleChange } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SparqlService } from './services/sparql.service';
import { SetDataService } from '../services/set-data.service'

@Component({
  selector: 'app-sparql-display',
  templateUrl: 'sparql-display.component.html',
  styleUrls: ['sparql-display.component.scss']
})
export class SparqlDisplayComponent implements OnChanges {

  @Input() sparqlData ;
  
  selectedLang: string = (localStorage['selectedLang'] === undefined) ? "en" : localStorage['selectedLang'];
  list: any[] = [];
  isList:boolean = false;
  bearingFamilyName: string;
  query:Observable <any>
  subscription:Subscription;


  constructor(private setData:SetDataService, private sparql:SparqlService, private changeDetector:ChangeDetectorRef) {  }

  ngOnChanges(changes: SimpleChanges): void {

    this.bearingFamilyName = "Bearing this family name:"
    if (this.selectedLang === "de") { this.bearingFamilyName = "Mit diesem Familiennamen:" };
    if (this.selectedLang === "fr") { this.bearingFamilyName = "Portant ce nom de famille:" };
    if (this.selectedLang === "es") { this.bearingFamilyName = "Llevando este apellido:" };

   const currentSparqlData:SimpleChange = changes.sparqlData;
   this.list = currentSparqlData.currentValue;
   if(this.list[0] !== undefined){ this.isList = true };
   if(this.list[0] ===undefined) {this.isList = false};
        
            }
   
  } 



