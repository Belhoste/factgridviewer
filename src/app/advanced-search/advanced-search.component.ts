import { Component, OnInit } from '@angular/core';

interface Class {
  value: string;
  viewValue: string;
}

interface ResearchField {
  value: string;
  viewValue: string;
}

interface FamilyName {
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
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {
  selectedClass :string;
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

  classes: Class[] =[
    {value:'Q7', viewValue:'human'},
    {value:'Q8', viewValue:'location'},
    {value:'Q12', viewValue:'organisation'},
    {value:'Q9', viewValue:'event'},
    {value:'Q20', viewValue:'publication'},
    {value:'Q14239', viewValue:'work'}
  ];

   researchFields: ResearchField[] =[
    {value:'Q10677', viewValue:'illuminati'},
    {value:'Q8', viewValue:'harmonia universalis'},
    {value:'Q12', viewValue:'fiction literature'},
    {value:'Q9', viewValue:'freemasons'},
    {value:'Q20', viewValue:'Bible'},
    {value:'Q14239', viewValue:'Gotha'}
  ];

  familyNames: FamilyName[] = [
    {value:'Q1124', viewValue:'Mesmer'},
    {value:'Q1124', viewValue:'Goethe'},
    {value:'Q1124', viewValue:'Bonaparte'},
  ]

  firstNames: GivenName[] = [
    {value:'Q1124', viewValue:'John'},
    {value:'Q1124', viewValue:'Michael'},
    {value:'Q1124', viewValue:'Mary'},
  ]
  
  activities: Activity[] = [
    {value:'Q10000', viewValue:'emigration'},
  ]

  positions: Position[] = [
    {value:'Q500', viewValue:'councillor'},
  ]

  organisations: Membership[] = [
    {value:'Q11000', viewValue:'parliament'},
  ]

  placeNames: PlaceName[] = [
    {value:'Q1124', viewValue:'Paris'},
    {value:'Q1124', viewValue:'Berlin'},
    {value:'Q1124', viewValue:'Germany'},
  ]

  territorialAffiliations: TerritorialAffiliation[] = [
    {value:'Q1124', viewValue:'Europe'},
    {value:'Q1124', viewValue:'Bas-Rhin'},
    {value:'Q1124', viewValue:'Germany'},
  ]

  organisationNames:OrganisationName[] = [
    {value:'Q45', viewValue:'Parlement of Paris'},
    {value:'Q45', viewValue:'Academy of Sciences of Paris'},
    {value:'Q45', viewValue:'Hofkammerrat'},
  ]
  
  typesOfOrganisation:TypeOfOrganisation[] = [
    {value:'Q45', viewValue:'school'},
  ]

  publicationTitles:PublicationTitle[] = [
    {value:'Q80', viewValue:'Le Rouge et le Noir'},
    {value:'Q234', viewValue:'Les Fleurs du Mal'},
  ]

  typesOfPublication:TypeOfPublication[] = [
    {value:'Q80', viewValue:'book'},
    {value:'Q234', viewValue:'journal'},
  ]

  typesOfWork:TypeOfWork[]= [
    {value:'Q1300', viewValue:'novel'},
    {value:'Q2340', viewValue:'painting'},
  ]

  eventNames:EventName[]= [
    {value:'Q1300', viewValue:'battle of Waterloo'},
    {value:'Q2340', viewValue:'Bastille Day'},
  ]

  eventLocations:EventLocation[]= [
    {value:'Q1300', viewValue:'Waterloo'},
    {value:'Q2340', viewValue:'Paris'},
  ]



  constructor() { }

  
  ngOnInit(): void {

    console.log(this.selectedClass);
    console.log(this.selectedTypeOfPublication);
    console.log(this.selectedTypeOfOrganisation);
  }

}
