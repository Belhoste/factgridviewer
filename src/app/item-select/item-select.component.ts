import { Component, Input, OnInit } from '@angular/core';
import { DetailsService } from  '../services/details.service';
import { PropertyDetailsService } from '../services/property-details.service';
import { SetItemToDisplayService } from '../services/set-item-to-display.service';
import { CreateItemToDisplayService } from '../services/create-item-to-display.service';
//import { SelectedItem } from '../services/item-model.service';
import { ExpressionStatement } from '@angular/compiler';

@Component({
  selector: 'app-item-select',
  templateUrl: './item-select.component.html',
  styleUrls: ['./item-select.component.css']
})
export class ItemSelectComponent implements OnInit {

  @Input() item

  constructor(private createItemToDisplay:CreateItemToDisplayService) { }


  ngOnInit(): void {

    
  this.SeeItem(this.item);
  console.log(this.item);

  }
  
  SeeItem(x){ x => console.log(x)};


}
