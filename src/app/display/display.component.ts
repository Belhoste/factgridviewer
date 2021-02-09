
//ancien app.component.ts

import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { AppAndDisplaySharedService } from '../services/app-and-display-shared.service';
import { CreateItemToDisplayService } from '../services/create-item-to-display.service';
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
  

  item:any[];
  itemContent:any;

  human:string;
  sex:string;
  name:string;

  P2:any[];
  P3:any[];
  P154:any[];//sex
  P247:any[];//name
  P248:any[];//forenames
  P77:any[];//birthday
  P82:any[];//birthplace
  P38:any[];//deathday
  P168:any[];//deathplace
  P40:any[];//burialdate
  P79:any[];//grave



  foreNames:string[];
  birthday:string;
  birthPlace:string;
  deathDay:string;
  deathPlace:string;
  deathCause:string;
  father:any;
  mother:any;
  brotherhood:string[];
  marriage:string[];

 clickedObject: Subject<any>
 clickedObject2:any;
 object
 
  
 onClick(item){
  item=item[0].mainsnak.datavalue.value.id;
  this.clickedItem.emit(item);
}


 ngOnInit(): void {
 // this.sharedService.item.subscribe(x=>console.log(JSON.stringify(x)));
  this.subscription = this.sharedService.item.subscribe(item=>{
  if (item !==undefined){
  console.log(item);
  this.human = item[0].claims.P2.human;
  this.item = item;
  this.itemContent = item[0];
  this.label = item[0].label;
  this.description = item[0].description;
  this.aliases = item[0].aliases;
  this.id = item[0].id;
  this.urlId = this.factGridUrl+this.id;
   if (item[0].claims.P189 !==undefined) {
     if (item[0].claims.P189[0].references[0].snaks.P55 !==undefined) {
     this.picture = item[0].claims.P189[0].references[0].snaks.P55[0].datavalue.value }
      }
  this.P2 = item[0].claims.P2;
  console.log(this.P2);
  this.P3 = item[0].claims.P3; 
  this.P154 = item[0].claims.P154;                
  this.P247 = item[0].claims.P247;    
  console.log(this.P247);
  this.P248 = item[0].claims.P248; 
  console.log(this.P248);
  this.P77 = item[0].claims.P77;  
      this.P82 = item[0].claims.P82; 
      this.P38 = item[0].claims.P38;
      this.P168 = item[0].claims.P168;
      this.P40 = item[0].claims.P40; 
      this.P79 = item[0].claims.P79; 
      }
    }
  )
}


ngOnDestroy(): void {
//this.subscription.unsubscribe()
}

}




  

    
         
                        