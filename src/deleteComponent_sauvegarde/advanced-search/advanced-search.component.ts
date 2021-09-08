
//this component is deprecated
//utiliser selectionChange voir https://www.concretepage.com/angular-material/angular-material-select-change-event
// ou bien utiliser ngModelChange, mais c'est deprecated  voir https://stackblitz.com/edit/material-select-change-event?file=app%2Fapp.component.html
import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { SetSparqlService } from './services/set-sparql.service';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

interface Class {
  value: string;
  viewValue: string;
}

interface ResearchField {
  value: string;
  viewValue: string;
}

interface GivenName {
  value: string;
  viewValue: string;
}

interface Activity {
  value: string;
  viewValue: string;
}

interface Position {
  value: string;
  viewValue: string;
}

interface Membership {
  value: string;
  viewValue: string;
}

interface PlaceName {
  value: string;
  viewValue: string;
}

interface TerritorialAffiliation {
  value: string;
  viewValue: string;
}

interface OrganisationName {
  value: string;
  viewValue: string;
}

interface TypeOfOrganisation {
  value: string;
  viewValue: string;
}

interface PublicationTitle {
  value: string;
  viewValue: string;
}

interface TypeOfPublication {
  value: string;
  viewValue: string;
}

interface TypeOfWork {
  value: string;
  viewValue: string;
}

interface EventName {
  value: string;
  viewValue: string;
}

interface EventLocation {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdvancedSearchComponent implements OnInit, AfterViewInit, OnDestroy {

  public familyNameMultiCtrl:FormControl = new FormControl();
  public familyNameMultiFilterCtrl: FormControl = new FormControl();
  public filteredFamilyNameMulti = new ReplaySubject;

  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;

  protected _onDestroy = new Subject<void>();

  selectedLang: string = (localStorage['selectedLang']===undefined)? "en": localStorage['selectedLang'];

  placeList:any;
  placeSparql:string;
  placeListSparqlStart: string="https://database.factgrid.de/sparql?query=SELECT%20%3Fitem%20%3FitemLabel%0AWHERE%20%0A%7B%0A%3Fitem%20wdt%3AP2%2Fwdt%3AP3%2a%20wd%3AQ8.%0ASERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22"
  
  familyNameList: any;
  familyNameSparql:string;
  familyNameSparqlStart: string="https://database.factgrid.de/sparql?query=SELECT%20%3Fitem%20%3FitemLabel%0AWHERE%20%0A%7B%0A%3Fitem%20wdt%3AP2%2Fwdt%3AP3%2a%20wd%3AQ24499.%0ASERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22"
  sparqlEnd:string="%2Cen%22.%20%7D%0A%7D&format=json"
  
  filteredFamilyNames:any;
  
  selectedClass:string
  selectedField:string;
  selectedFamilyName:string;
  selectedGivenName:string;
  selectedActivity:string;
  selectedPosition:string;
  selectedPlaceName:string;
  selectedTerritorialAffiliation:string;
  selectedOrganisation:string;
  selectedOrganisationName:string;
  selectedTypeOfOrganisation:string;
  selectedPublicationTitle:string;
  selectedTypeOfPublication:string;
  selectedTypeOfWork:string;
  selectedEventName:string;
  selectedEventLocation:string;

  sparqlParametersArray:any[] = [];
  parametersArray:string[]=[];

  classes:Class[] = [
    {value:'Q7', viewValue:'human'},
    {value:'Q8', viewValue:'location'},
    {value:'Q12', viewValue:'organisation'},
    {value:'Q9', viewValue:'event'},
    {value:'Q20', viewValue:'publication'},
    {value:'Q14239', viewValue:'work'}
  ];;
  researchFields: ResearchField[];
  familyNames: any[];
  givenNames: GivenName[] ;
  activities: Activity[] ;
  positions: Position[] ;
  organisations: Membership[] ;
  placeNames: PlaceName[];
  territorialAffiliations: TerritorialAffiliation[] ;
  organisationNames:OrganisationName[] ;
  typesOfOrganisation:TypeOfOrganisation[] ;
  publicationTitles:PublicationTitle[] ;
  typesOfPublication:TypeOfPublication[] ;
  typesOfWork:TypeOfWork[];
  eventNames:EventName[];
  eventLocations:EventLocation[];

  
  constructor(private sparql:SetSparqlService) { }

  
  ngOnInit(): void {

    this.placeSparql= this.placeListSparqlStart+this.selectedLang+this.sparqlEnd;
    console.log(this.placeSparql); // correct
    this.familyNameSparql= this.familyNameSparqlStart+this.selectedLang+this.sparqlEnd;
    
    this.placeList = this.sparql.initSearchList(this.placeSparql);
    this.placeList.subscribe(result => console.log(result));

   this.familyNameList = this.sparql.initSearchList(this.familyNameSparql);
    this.familyNameList.subscribe(result => { this.familyNames = result.results.bindings ;
      this.filteredFamilyNames= this.familyNames.slice();
    });

    


 //   this.placeList.subscribe(result => console.log(result));

  

   this.researchFields =[
    {value:'Q10677', viewValue:'illuminati'},
    {value:'Q8', viewValue:'harmonia universalis'},
    {value:'Q12', viewValue:'fiction literature'},
    {value:'Q9', viewValue:'freemasons'},
    {value:'Q20', viewValue:'Bible'},
    {value:'Q14239', viewValue:'Gotha'}
  ];

 /*   this.familyNames = [
    {value:'Q1124', viewValue:'Mesmer'},
    {value:'Q1125', viewValue:'Goethe'},
    {value:'Q1126', viewValue:'Bonaparte'},
  ]
  */

  this.givenNames = [
    {value:'Q1127', viewValue:'John'},
    {value:'Q1128', viewValue:'Michael'},
    {value:'Q1129', viewValue:'Mary'},
  ]
  
  this.activities = [
    {value:'Q10000', viewValue:'emigration'},
    {value:'Q10001', viewValue:'physician'}
  ]

  this.positions = [
    {value:'Q500', viewValue:'councillor'},
  ]

  this.organisations = [
    {value:'Q11000', viewValue:'parliament'},
  ];

  this.placeNames = [
    {value:'Q1124', viewValue:'Paris'},
    {value:'Q1124', viewValue:'Berlin'},
    {value:'Q1124', viewValue:'Germany'},
  ];

  this.territorialAffiliations = [
    {value:'Q1124', viewValue:'Europe'},
    {value:'Q1124', viewValue:'Bas-Rhin'},
    {value:'Q1124', viewValue:'Germany'},
  ]

  this.organisationNames = [
    {value:'Q45', viewValue:'Parlement of Paris'},
    {value:'Q45', viewValue:'Academy of Sciences of Paris'},
    {value:'Q45', viewValue:'Hofkammerrat'},
  ]
  
 this.typesOfOrganisation = [
    {value:'Q45', viewValue:'school'},
  ]

this.publicationTitles = [
    {value:'Q80', viewValue:'Le Rouge et le Noir'},
    {value:'Q234', viewValue:'Les Fleurs du Mal'},
  ]

this.typesOfPublication = [
    {value:'Q80', viewValue:'book'},
    {value:'Q234', viewValue:'journal'},
  ]

this.typesOfWork = [
    {value:'Q1300', viewValue:'novel'},
    {value:'Q2340', viewValue:'painting'},
  ]

this.eventNames = [
    {value:'Q1300', viewValue:'battle of Waterloo'},
    {value:'Q2340', viewValue:'Bastille Day'},
  ]

this.eventLocations = [
    {value:'Q1300', viewValue:'Waterloo'},
    {value:'Q2340', viewValue:'Paris'},
  ]
  
  }

  ngAfterViewInit(){
    this.setInitialValue();
  }
  
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  onClassChange($event) {       //class=parametersArray[0]
    this.parametersArray[0]=$event.value;
  }

  onFamilyNameChange($event) { //family name=parametersArray[1]
    this.parametersArray[1]=$event.value;
  }

  onGivenNameChange($event){  //given name=parametersArray[2]
    this.parametersArray[2]=$event.value;
  }

  onPositionChange($event){ //position=parametersArray[3]
    this.parametersArray[3]=$event.value;
    console.log(this.parametersArray);
  }
  
  onActivityChange($event){ //activity=parametersArray[4]
    this.parametersArray[4]=$event.value;
    console.log(this.parametersArray);
    console.log($event.value);
    let u = { "activity":$event.value };
    this.sparqlParametersArray.push(u);
    console.log(this.sparqlParametersArray)
  }  
 
  onOrganisationChange($event){ //organisation=parametersArray[5]
    this.parametersArray[5]=$event.value;
    console.log(this.parametersArray);
    console.log($event.value);
    let u = { "organisation":$event.value };
    this.sparqlParametersArray.push(u);
    console.log(this.sparqlParametersArray)
  }

  onPlaceNameChange($event){ //place name=parametersArray[6]
    this.parametersArray[6]=$event.value;
    console.log(this.parametersArray);
    console.log($event.value);
    let u = { "placeName":$event.value };
    this.sparqlParametersArray.push(u);
    console.log(this.sparqlParametersArray)
  }
  
   onTerritorialAffiliationChange($event){ //territorial affiliation=parametersArray[7]
    this.parametersArray[7]=$event.value;
    console.log(this.parametersArray);
    console.log($event.value);
    let u = { "territorialAffiliation":$event.value };
    this.sparqlParametersArray.push(u);
    console.log(this.sparqlParametersArray)
  }
  
   onOrganisationNameChange($event){//name of organisation =parametersArray[8]
    this.parametersArray[8]=$event.value;
    console.log(this.parametersArray);
    console.log($event.value);
    let u = { "organisationName":$event.value };
    this.sparqlParametersArray.push(u);
    console.log(this.sparqlParametersArray)
  }
  
  onTypeOfOrganisationChange($event){ //type of organisation=parametersArray[9]
    this.parametersArray[9]=$event.value;
    console.log(this.parametersArray);
    console.log($event.value);
    let u = { "typeOfOrganisation":$event.value };
    this.sparqlParametersArray.push(u);
    console.log(this.sparqlParametersArray)
  }
 
 onPublicationTitleChange($event){ //publication title=parametersArray[10]
  this.parametersArray[10]=$event.value;
  console.log(this.parametersArray);
    console.log($event.value);
    let u = { "publicationTitle":$event.value };
    this.sparqlParametersArray.push(u);
    console.log(this.sparqlParametersArray)
  }
  
  onTypeOfPublicationChange($event){ //type of publication=parametersArray[11]
    this.parametersArray[11]=$event.value;
    console.log(this.parametersArray);
    console.log($event.value);
    let u = { "typeOfPublication":$event.value };
    this.sparqlParametersArray.push(u);
    console.log(this.sparqlParametersArray)
  }
   onTypeOfWorkChange($event){ //type of work =parametersArray[12]
    this.parametersArray[12]=$event.value;
    console.log(this.parametersArray);
    console.log($event.value);
    let u = { "typeOfWork":$event.value };
    this.sparqlParametersArray.push(u);
    console.log(this.sparqlParametersArray)
  }
  
  onEventNameChange($event){ //event name =parametersArray[13]
    this.parametersArray[13]=$event.value;
    console.log(this.parametersArray);
    console.log($event.value);
    let u = { "eventName":$event.value };
    this.sparqlParametersArray.push(u);
  }
  
   onEventLocationChange($event){ //event location=parametersArray[14]
    this.parametersArray[14]=$event.value;
    console.log(this.parametersArray);
    console.log($event.value);
    let u = { "eventLocation":$event.value };
    this.sparqlParametersArray.push(u);
    console.log(this.sparqlParametersArray)
  }

  public isFiltered(familyName) {
    return this.filteredFamilyNames.find(item => item.id === familyName.itemLabel.value)
  }

  protected setInitialValue(){
    this.filteredFamilyNameMulti.pipe(take(1), takeUntil(this._onDestroy))
    .subscribe(()=>{this.multiSelect.compareWith = (a, b) => a && b && a.id === b.id});
  }

  protected filterFamilyNameMulti(){
    if (!this.familyNames) {
      return;
    }
    let search = this.familyNameMultiFilterCtrl.value;
    if (!search) {
      this.filteredFamilyNameMulti.next(this.familyNames.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredFamilyNameMulti.next( this.familyNames.filter(familyName =>familyName.itemLabel.value.toLowerCase().indexOf(search)>-1))
  }
  


}




