
//ancien app.component.ts

import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { AppAndDisplaySharedService } from '../services/app-and-display-shared.service';
import { CreateItemToDisplayService } from '../services/create-item-to-display.service';
import { SetLanguageService } from '../services/set-language.service';
import { RequestService } from '../services/request.service';
import { SetItemToDisplayService } from '../services/set-item-to-display.service';

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
  career:string;

  P2:any[];// instance of
  P3:any[];// subclass of
  P8:any[];//part of
  P154:any[];//sex
  P247:any[];//name
  P248:any[];//forenames
  P248_qualifiers:any[];//qualifiers of forenames
  P77:any[];//birthday
  P82:any[];//birthplace
  P38:any[];//deathday
  P168:any[];//deathplace
  P40:any[];//burialdate
  P40_qualifiers:any[];
  P79:any[];//grave
  P141:any[];//father
  P141_item:string;
  P142:any[];//mother
  P142_item:string;
  P203:any[];//siblings
  P84:any[];//marriage
  P150:any[];//children
  P151:any; //publications stemming from this research
  P101:string;//place in sequence

  
  
  P164:any[];//position
  P165:any[];//activities

//references
  P311:any[];//text source
  P51:string;//primary source
  P146:string; //online information
  P138:string; //online digitalisation

 //wiki
  commonswiki:any;
  dewiki:any;
  enwiki:any;
  frwiki:any;
  wikidatawiki:any;
  wikis:any[];

  lifeAndFamily:any[];
  careerAndActivities:any[];




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
  item = item.value.id;
  this.clickedItem.emit(item);
}

 ngOnInit(): void {
  this.subscription = this.sharedService.item.subscribe(item=>{
  if (item !==undefined){
    console.log(item);
    this.human = item[0].claims.P2.human;
    this.career = item[0].claims.P2.career;
    this.item = item;
    this.itemContent = item[0];
    this.label = item[0].label;
    this.description = item[0].description;
    this.aliases = item[0].aliases;
    this.id = item[0].id;
    this.urlId = this.factGridUrl+this.id;
   if (item[0].claims.P189 !==undefined) {
     if (item[0].claims.P189[0].references !==undefined){
       if (item[0].claims.P189[0].references[0].snaks.P55 !==undefined) {
     this.picture = item[0].claims.P189[0].references[0].snaks.P55[0].datavalue.value }
      }
    }
    this.P2 = item[0].claims.P2;
    this.P3 = item[0].claims.P3; 
    this.P8 = item[0].claims.P8;
    this.P154 = item[0].claims.P154;                
    this.P247 = item[0].claims.P247;    
    this.P248 = item[0].claims.P248; 
    this.P77 = item[0].claims.P77;  
    this.P82 = item[0].claims.P82; 
    this.P38 = item[0].claims.P38;
    this.P168 = item[0].claims.P168;
    this.P40 = item[0].claims.P40; 
    this.P79 = item[0].claims.P79; 
    this.P141 = item[0].claims.P141;
    this.P142 = item[0].claims.P142; 
    this.P203 = item[0].claims.P203;
    this.P84 = item[0].claims.P84;
    this.P150 = item[0].claims.P150;

    this.P311 = item[0].claims.P311;
    this.P51 = item[0].claims.P51;
    this.P146 = item[0].claims.P146;
    this.P138 = item[0].claims.P138;
   
    this.lifeAndFamily = []
    if (this.P154 !==undefined){
      this.lifeAndFamily.push(this.P154);
    }
    if (this.P247 !==undefined){
      this.lifeAndFamily.push(this.P247);
    }
    if (this.P248 !==undefined){
      this.lifeAndFamily.push(this.P248);
    }
    if (this.P77 !==undefined){
      this.lifeAndFamily.push(this.P77);
    }
    if (this.P82 !==undefined){
      this.lifeAndFamily.push(this.P82);
    }
    if (this.P38 !==undefined){
      this.lifeAndFamily.push(this.P38);
    }
    if (this.P168 !==undefined){
      this.lifeAndFamily.push(this.P168);
    }
    if (this.P40 !==undefined){
      this.lifeAndFamily.push(this.P40);
    }
    if (this.P79 !==undefined){
      this.lifeAndFamily.push(this.P79);
    }
    if (this.P141 !==undefined){
      this.lifeAndFamily.push(this.P141);
    }
    if (this.P142 !==undefined){
      this.lifeAndFamily.push(this.P142);
    }
    if (this.P203 !==undefined){
      this.lifeAndFamily.push(this.P203);
    }
    if (this.P84 !==undefined){
      this.lifeAndFamily.push(this.P84);
    }
    if (this.P150 !==undefined){
      this.lifeAndFamily.push(this.P150);
    }

    
    this.P164 = item[0].claims.P164;
    this.P165 = item[0].claims.P165;

    this.careerAndActivities = [];

    if (this.P164 !==undefined){
      this.careerAndActivities.push(this.P164); 
    }  
    if (this.P165 !==undefined){
      this.careerAndActivities.push(this.P165); 
    }  

  console.log(this.careerAndActivities);

    this.wikis = [];
   if (item[0].sitelinks.commonswiki !==undefined){
      this.wikis.push(item[0].sitelinks.commonswiki);
    }
    if (item[0].sitelinks.enwiki !==undefined){
      this.wikis.push(item[0].sitelinks.enwiki);
    }
    if (item[0].sitelinks.dewiki !==undefined){
      this.wikis.push(item[0].sitelinks.dewiki);
    }
    if (item[0].sitelinks.frwiki !==undefined){
      this.wikis.push(item[0].sitelinks.frwiki); 
    }
    if (item[0].sitelinks.wikidatawiki !==undefined){
        this.wikis.push(item[0].sitelinks.wikidatawiki); 
        }
      }
    
    }
  )
}

qualifiersList(u){
  for (let i=0;i<u.length;i++){
    if (u["'qualifiers-order'"] !== undefined) {
      let v=u["'qualifiers-order'"]
      for (let j=0; j<v.length;j++){
         let label=u.qualifiers.u[j][0].label
         let value=u.qualifiers.u[j][0].datavalue.value
         }
       }
     }
  }



ngOnDestroy(): void {
//this.subscription.unsubscribe()
}

}




  

    
         
                        