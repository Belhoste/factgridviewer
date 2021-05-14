import { Component, OnInit } from '@angular/core';

interface Class {
  value: string;
  viewValue: string;
}

interface ResearchField {
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

interface TypeOfOrganisation {
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

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {
  selectedClass :string;
  selectedField:string;
  selectedActivity:string;
  selectedPosition:string;
  selectedOrganisation:string;
  selectedTypeOfOrganisation:string;
  selectedTypeOfPublication:string;
  selectedTypeOfWork:string;

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

  activities: Activity[] = [
    {value:'Q10000', viewValue:'emigration'},
  ]

  positions: Position[] = [
    {value:'Q500', viewValue:'councillor'},
  ]

  organisations: Membership[] = [
    {value:'Q11000', viewValue:'parliament'},
  ]

  typesOfOrganisation:TypeOfOrganisation[] = [
    {value:'Q45', viewValue:'school'},
    
  ]

  typesOfPublication:TypeOfPublication[] = [
    {value:'Q80', viewValue:'book'},
    {value:'Q234', viewValue:'journal'},
  ]

  typesOfWork:TypeOfWork[]= [
    {value:'Q1300', viewValue:'novel'},
    {value:'Q2340', viewValue:'painting'},
  ]

  


  constructor() { }

  
  ngOnInit(): void {

    console.log(this.selectedClass);
    console.log(this.selectedTypeOfPublication);
    console.log(this.selectedTypeOfOrganisation);
  }

}
