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

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {
  selectedClass :string = 'Q7';
  selectedField:string;
  selectedActivity:string;
  selectedPosition:string;
  selectedOrganisation:string;
  selectedType:string;

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
    {value:'Q11000', viewValue:'Court'},
  ]

  types:Type[] = [
    {value:'Q45', viewValue:'School'},
    {value:'Q123', viewValue:'Novel'},
  ]

  


  constructor() { }

  
  ngOnInit(): void {

    console.log(this.selectedClass)
  }

}
