
//ancien app.component.ts

import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { AppAndDisplaySharedService} from '../services/app-and-display-shared.service';
import { CreateItemToDisplayService} from '../services/create-item-to-display.service';
import { SetLanguageService } from '../services/set-language.service';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'display-component',
  templateUrl: 'display.component.html',
  styleUrls: ['./display.component.css'],
})

export class DisplayComponent implements OnInit, OnDestroy {

  @Output() clickedItem = new EventEmitter<any>();
  
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

  item:any[];
  itemContent:any
  P2_items: any;
  P3_label: string;
  P3_items: any;
  P2:any[]
  P3:any[]


 clickedObject: Subject<any>
 clickedObject2:any;
 object
 
  
 onClick(item){
  item=item.datavalue.value.id;
  this.clickedItem.emit(item);
}


 ngOnInit(): void {
 // this.sharedService.item.subscribe(x=>console.log(JSON.stringify(x)));
  this.subscription = this.sharedService.item.subscribe(item=>{
  if (item !==undefined){
  this.item = item;
  this.itemContent = item[0];
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
            }
         } 
       }
      }
    }
    );
  }


ngOnDestroy(): void {
//this.subscription.unsubscribe()
}

}




  

    
         
                        