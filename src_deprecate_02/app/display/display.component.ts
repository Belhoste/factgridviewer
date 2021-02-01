
//ancien app.component.ts

import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, Subscription, merge, from, concat } from 'rxjs';
import { map, filter, tap, switchMap } from 'rxjs/operators';
import { AppAndDisplaySharedService} from '../services/app-and-display-shared.service';
import { CreateItemToDisplayService} from '../services/create-item-to-display.service';
import { SetLanguageService } from '../services/set-language.service';
import { RequestService } from '../services/request.service';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'display-component',
  templateUrl: 'display.component.html',
  styleUrls: ['./display.component.css'],
})

export class DisplayComponent implements OnInit, OnDestroy {

  //@Input() item:Observable<any>
  
  constructor(private request:RequestService, private sharedService:AppAndDisplaySharedService, private setLanguage:SetLanguageService, private createItemToDisplay:CreateItemToDisplayService){}

  selectedItem:Observable<any>;
  subscription:Subscription

  selectedLang: string = (localStorage['selectedLang']===undefined)? "en": localStorage['selectedLang'];

  private baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=' ;
  private getUrlSuffix= '&format=json' ; 
  
  
  

  mainsnak:any;
  id:string = "";
  factGridUrl:string="https://database.factgrid.de/wiki/Item";
  urlId:string
  label:string;
  description:string;
  aliases:string[];
  claims: any[];
  picture:string;
  P2_label:string;

  //P2ItemsDescription:string;
  item:any[];
  itemContent:any
  P2_items: any;
  P3_label: string;
  P3_items: any;
  P2:any[]
  P3:any[]




 clickedObject: any;
  
  onClick(item){
    console.log(item);
    item=item.datavalue.value.id;
    this.sharedService.item = this.request.getItem(this.baseGetURL+item+this.getUrlSuffix).pipe(
    map(res => res = Object.values(res.entities))),
    map(res => { this.clickedObject= this.setLanguage.item(res, this.selectedLang)[0],
                 this.createItemToDisplay.createItemToDisplay(this.clickedObject, this.selectedLang)// à reprendre. la nature de l'observable n'est pas claire)
  } )
  return this.sharedService.item
}


 ngOnInit(): void {

  console.log(this.sharedService.item);

/*this.sharedService.clickedItem = this.createItemToDisplay.createItemToDisplay(this.clickedObject, this.selectedLang),// à reprendre. la nature de l'observable n'est pas claire)

this.sharedService.item.subscribe(x=>console.log(x));
this.sharedService.clickedItem.subscribe(x=>console.log(x));*/
//this.selectedItem = concat(this.sharedService.item);
//this.selectedItem.subscribe(x=>console.log(x));
//this.clickedItem.subscribe(x=>console.log(x));
this.subscription = this.sharedService.item.subscribe(item=>{
  if (item !==undefined){
  this.item = item;
  this.itemContent = item[0];
  console.log(this.item);
  console.log(this.itemContent.label);
  this.label = item[0].label;
  this.description = item[0].description;
  this.aliases = item[0].aliases;
  this.id = item[0].id;
  this.urlId = this.factGridUrl+this.id;
  if (item[0].claims.P189 !==undefined) this.picture = "https://commons.wikimedia.org/wiki/File:"+item[0].claims.P189[0].mainsnak.datavalue.value
  this.P2 = item[0].claims.P2;
  
  this.P2_items = item[0].claims.P2;
  if (this.P2 !== undefined){
    this.P2_label = this.P2[0].label;
    for (let i=0;i<this.P2.length; i++){
      this.P2_items[i]=item[0].claims.P2[i].mainsnak
      }
  this.P3 = item[0].claims.P3; 
  this.P3_items = item[0].claims.P3;
  if (this.P3 !== undefined) {
    this.P3_label = this.P3[0].label;
    for (let i=0;i<this.P3.length; i++){
        this.P3_items[i]=item[0].claims.P3[i].mainsnak ;
        console.log(item[0].claims.P3[i].mainsnak.label)
            }
         } 
       }
      }
    }
    );
  }

  

ngOnDestroy(): void {
this.subscription.unsubscribe()
}

}




  

    
         
                        