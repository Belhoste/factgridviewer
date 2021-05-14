import { Component, OnInit } from '@angular/core';

interface InstanceOf {
  value: string;
  viewValue: string;
}

interface ResearchField {
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

  instanceOfs: InstanceOf[] =[
    {value:'Q7', viewValue:'Human'},
    {value:'Q8', viewValue:'Location'},
    {value:'Q12', viewValue:'Organisation'},
    {value:'Q9', viewValue:'Event'},
    {value:'Q20', viewValue:'Publication'},
    {value:'Q14239', viewValue:'Work'}
  ];

   researchFields: ResearchField[] =[
    {value:'Q10677', viewValue:'Illuminati'},
    {value:'Q8', viewValue:'Harmonia Universalis'},
    {value:'Q12', viewValue:'Fiction Literature'},
    {value:'Q9', viewValue:'Event'},
    {value:'Q20', viewValue:'Publication'},
    {value:'Q14239', viewValue:'Work'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
