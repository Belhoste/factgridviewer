import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DataService, Class, ExampleList } from './services/data.service';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {

  selectedResearchFields;
  selectedClassValue;
  selectedExampleListValue;
  selectedLocations=[];
  selectedFamilyNames=[];
  selectedGivenNames=[];
  selectedActivities=[];
  selectedOrganisations=[];

  researchFields;
  class:Class[];
  locations;
  familyNames;
  givenNames;
  activities;
  organisations;

  exampleList$;
  exampleList1$;
  researchFieldsBuffer;
  locationsBuffer;
  familyNamesBuffer;
  givenNamesBuffer;
  activitiesBuffer;
  organisationsBuffer;
  bufferSize= 100;
  numberOfItemsFromEndBeforeFetchingMore = 20;
 
  researchFieldsLoading=false;
  locationsLoading=false;
  familyNamesLoading=false;
  givenNamesLoading=false;
  activitiesLoading=false;
  organisationsLoading=false;

  subscription0:Subscription;
  subscription1:Subscription;
  subscription2:Subscription;
  subscription3:Subscription;
  subscription4:Subscription;
  subscription5:Subscription;



  constructor(private dataService: DataService) {
  }

  ngOnInit() {
      this.class = this.dataService.getClass();
      this.exampleList$ = this.dataService.getExampleList();

      this.subscription0=this.dataService.getResearchFields().pipe(map(res=> Object.values(res.results.bindings)),
      ).subscribe(x=>{ this.researchFields = x, this.researchFieldsBuffer= x.slice(0,this.bufferSize), console.log(this.familyNames)});
     this.subscription1=this.dataService.getLocations().pipe(map(res=>res = Object.values(res.results.bindings))
     )
   //   ,map(res=> res= Object.values(Object.values(res)[1])[0])
      .subscribe(x=>{ 
      this.locations=x;  
      this.locationsBuffer= this.locations.slice(0,this.bufferSize); console.log(this.locations[0].itemLabel)});

      this.subscription2=this.dataService.getFamilyNames().pipe(map(res=> Object.values(res.results.bindings)),
      ).subscribe(x=>{ this.familyNames = x, this.familyNamesBuffer= x.slice(0,this.bufferSize), console.log(this.familyNames)});
     
      this.subscription3=this.dataService.getGivenNames().pipe(map(res=> Object.values(Object.values(res)[1])[0]),
      ).subscribe(x=>{ this.givenNames = x, this.givenNamesBuffer= x.slice(0,this.bufferSize)}); 

      this.subscription4=this.dataService.getActivities().pipe(map(res=> Object.values(Object.values(res)[1])[0]),
      ).subscribe(x=>{ this.activities = x, this.activitiesBuffer= x.slice(0,this.bufferSize), console.log(this.activities)});

      this.subscription5=this.dataService.getOrganisations().pipe(map(res=> Object.values(Object.values(res)[1])[0]),
      ).subscribe(x=>{ this.organisations = x, this.organisationsBuffer= x.slice(0,this.bufferSize), console.log(this.organisations)});

  
    }


  clearModel() {
    this.researchFields = [];
    this.selectedLocations = [];
    this.selectedFamilyNames = [];
    this.selectedGivenNames = [];
    this.selectedActivities = [];
    this.selectedOrganisations = [];
}

  onScrollToEnd() {
    this.fetchMore();
} 

onScroll({ end }) {

  if (this.researchFieldsLoading || this.researchFields.length <= this.researchFieldsBuffer.length) {
    return;
  }

  if (this.locationsLoading || this.locations.length <= this.locationsBuffer.length) {
      return;
  }

  if (this.familyNamesLoading || this.familyNames.length <= this.familyNamesBuffer.length) {
    return;
}

if (this.givenNamesLoading || this.givenNames.length <= this.givenNamesBuffer.length) {
  return;
}

if (this.activitiesLoading || this.activities.length <= this.activitiesBuffer.length) {
  return;
}

if (this.organisationsLoading || this.organisations.length <= this.organisationsBuffer.length) {
  return;
}


if (end + this.numberOfItemsFromEndBeforeFetchingMore >= this.researchFieldsBuffer.length) {
  this.fetchMore();
}

if (end + this.numberOfItemsFromEndBeforeFetchingMore >= this.locationsBuffer.length) {
      this.fetchMore();
  }

if (end + this.numberOfItemsFromEndBeforeFetchingMore >= this.familyNamesBuffer.length) {
    this.fetchMore();
}

if (end + this.numberOfItemsFromEndBeforeFetchingMore >= this.givenNamesBuffer.length) {
  this.fetchMore();
}

if (end + this.numberOfItemsFromEndBeforeFetchingMore >= this.activitiesBuffer.length) {
this.fetchMore();
}

if (end + this.numberOfItemsFromEndBeforeFetchingMore >= this.organisationsBuffer.length) {
  this.fetchMore();
}

}


private fetchMore() {
  const researchFieldsLen = this.researchFieldsBuffer.length;
  const locationsLen = this.locationsBuffer.length;
  const familyNamesLen = this.familyNamesBuffer.length;
  const givenNamesLen = this.givenNamesBuffer.length;
  const activitiesLen = this.activitiesBuffer.length;
  const organisationsLen= this.organisationsBuffer.length;

  const locationsMore = this.locations.slice(locationsLen, this.bufferSize + locationsLen);
  const familyNamesMore = this.familyNames.slice(familyNamesLen, this.bufferSize + familyNamesLen);
  const givenNamesMore = this.givenNames.slice(givenNamesLen, this.bufferSize + givenNamesLen);
  const activitiesMore = this.activities.slice(activitiesLen, this.bufferSize + activitiesLen);
  const organisationsMore = this.organisations.slice(organisationsLen, this.bufferSize + organisationsLen);

  this.researchFieldsLoading = true;
  this.locationsLoading = true;
  this.familyNamesLoading=true;
  this.givenNamesLoading=true;
  this.activitiesLoading=true;
  this.organisationsLoading=true;

}


  simplifySelectedItem(selectedArray){
    for (let i=0; i<selectedArray.length;i++) {
      selectedArray[i]= selectedArray[i].splice(36);
    }
    return selectedArray
  }

  //   using timeout here to simulate backend API delay
 /* setTimeout(() => {
      this.locationsLoading = false;
      this.familyNamesLoading = false;
      this.givenNamesLoading = false;
      this.activitiesLoading = false;
      this.organisationsLoading = false;

      this.locationsBuffer = this.locationsBuffer.concat(locationsMore);
      this.familyNamesBuffer = this.familyNamesBuffer.concat(familyNamesMore);
      this.givenNamesBuffer = this.givenNamesBuffer.concat(givenNamesMore);
      this.activitiesBuffer = this.activitiesBuffer.concat(activitiesMore);
      this.organisationsBuffer = this.organisationsBuffer.concat(organisationsMore);

 }, 200)*/


ngOnDestroy(): void {
  if (this.subscription0 != undefined) this.subscription0.unsubscribe() ;
  if (this.subscription1 != undefined) this.subscription1.unsubscribe();
  if (this.subscription2 != undefined) this.subscription2.unsubscribe();
  if (this.subscription3 != undefined) this.subscription3.unsubscribe();
  if (this.subscription4 != undefined) this.subscription4.unsubscribe();
  if (this.subscription5 != undefined) this.subscription5.unsubscribe();
 }

}
