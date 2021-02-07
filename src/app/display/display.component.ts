
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

  P2:any[];
  P2_label:string;
  P2_items: any;

  P3:any[];
  P3_label: string;
  P3_items: any;
  
  human:string;
  
  sex:string;
  P154:any[];//sex
  P154_label:string;//sex
  P154_items:any;//sex

  name:string;
  P247:any[];//name
  P247_label:string;//name
  P247_items:any;//name

  P248:any[];//forenames
  P248_label:string;//forenames
  P248_items:any;//forenames

  P77:any[];//birthday
  P77_label:string;//birthday
  P77_time:string;//birthday
  P77_items:any;//birthday

  P82:any[];//birthplace
  P82_label:string;//birthplace
  P82_items:any;//birthplace

  P40:any[];//burialdate
  P40_label:string;//burialdata
  P40_items:any;//burialdate

  P79:any[];//grave
  P79_label:string;//grave
  P79_items:any;//grave


  //name:string;
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
  item=item.datavalue.value.id;
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
 // if (item[0].claims.P189 !==undefined) this.picture = "https://commons.wikimedia.org/wiki/File:"+item[0].claims.P189[0].mainsnak.datavalue.value
   if (item[0].claims.P189 !==undefined) {
     if (item[0].claims.P189[0].references[0].snaks.P55 !==undefined) {
     this.picture = item[0].claims.P189[0].references[0].snaks.P55[0].datavalue.value }
   }
  this.P2 = item[0].claims.P2;
  this.P2_items = item[0].claims.P2;
  if (this.P2 !== undefined){
    this.P2_label = this.P2[0].label;
    for (let i=0;i<this.P2.length; i++){
      this.P2_items[i]=item[0].claims.P2[i].mainsnak
    }
  }

  this.P3 = item[0].claims.P3; 
  this.P3_items = item[0].claims.P3;
  if (this.P3 !== undefined) {
    this.P3_label = this.P3[1];
    for (let i=0;i<this.P3.length; i++){
        this.P3_items[i]=item[0].claims.P3[i].mainsnak ;
            }
         } 

  this.P154 = item[0].claims.P154; 
  this.P154_items = item[0].claims.P154;
  if (this.P154 !== undefined) {
     this.P154_label = this.P154[1];
     for (let i=0;i<this.P154.length; i++){
      this.P154_items[i]=item[0].claims.P154[i].mainsnak ;
          }
       }            
       
  this.P247 = item[0].claims.P247; 
  this.P247_items = item[0].claims.P247;
    if (this.P247 !== undefined) {
       this.P247_label = this.P247[1];
        for (let i=0;i<this.P247.length; i++){
          this.P247_items[i]=item[0].claims.P247[i].mainsnak ;
               }
            }   
            
  this.P248 = item[0].claims.P248; 
  this.P248_items = item[0].claims.P248;
    if (this.P248 !== undefined) {
      this.P248_label = this.P248[1];
        for (let i=0;i<this.P248.length; i++){
          this.P248_items[i]=item[0].claims.P248[i].mainsnak ;
               }
           }   

  this.P77 = item[0].claims.P77; 
    this.P77_items = item[0].claims.P77;
      if (this.P77 !== undefined) {
        this.P77_label = this.P77[1];
        for (let i=0;i<this.P77.length; i++){
          this.P77_items[i]=item[0].claims.P77[i].mainsnak ;            
          this.P77_time = this.P77_items[i].datavalue.value.time;}
           }   
        }  

  this.P82 = item[0].claims.P82; 
    this.P82_items = item[0].claims.P82;
          if (this.P82 !== undefined) {
             this.P82_label = this.P82[1];
              for (let i=0;i<this.P82.length; i++){
                this.P82_items[i]=item[0].claims.P82[i].mainsnak ;
                     }
                  }  

  this.P40 = item[0].claims.P40; 
  this.P40_items = item[0].claims.P40;
         if (this.P40 !== undefined) {
                this.P40_label = this.P40[1];
                for (let i=0;i<this.P40.length; i++){
                    this.P40_items[i]=item[0].claims.P40[i].mainsnak ;
                   }
           }

  this.P79 = item[0].claims.P79; 
  this.P79_items = item[0].claims.P79;
         if (this.P79 !== undefined) {
                 this.P79_label = this.P79[1];
                  for (let i=0;i<this.P79.length; i++){
                    this.P79_items[i]=item[0].claims.P79[i].mainsnak ;
                }
  }
    


      }
    );
  }


ngOnDestroy(): void {
//this.subscription.unsubscribe()
}

}




  

    
         
                        