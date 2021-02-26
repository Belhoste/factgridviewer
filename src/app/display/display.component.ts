
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

  selectedItems: any[];

  private baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=' ;
  private getUrlSuffix= '&format=json' ; 

 
  item:any[];
  id:string = "";
  factGridUrl:string="https://database.factgrid.de/wiki/Item";
  urlId:string
  label:string;
  description:string;
  aliases:string[];
  picture:string;
  map:any;
  coords:any;
  main:string;
  training:string;
  career:string;
  sociability:string;
  place:string;
  org:string;
  activity:string;
  event:string;
  sources:string;
  other:string;
 
 // properties for the header

  P2:any[];// instance of
  P3:any[];// subclass of
  P8:any[];//part of
  P97:any[];//field of research
  P131:any[]; //research projects that contributed to this data set

 //wiki

  commonswiki:any;
  dewiki:any;
  enwiki:any;
  frwiki:any;
  wikidatawiki:any;
  wikis:any[];

  wikiCommons:string;

  // arrays to display the properties

  lifeAndFamily:any[];//for persons
  education:any[];
  careerAndActivities:any[];
  sociabilityAndCulture:any[];
  locationAndSituation:any[]; // for places
  activityDetail:any[]; //for activities
  eventDetail:any[]; //for events
  printPublicationDetail:any[];//for print publications
  sourcesList:any[]; //for sources
  externalLinks:any[];
  otherClaims:any[];
  locationAndContext:any[]; //for organisations, societies and institutions
  mainList:any[]; //main list for persons, places, organisations

 onClick(item){ //handling click
  item = item.value.id;
  this.clickedItem.emit(item);
}

 ngOnInit(): void {

  this.subscription = this.sharedService.item.subscribe(item=>{
  if (item !==undefined){
    console.log(item);
  
    this.item = item;
    this.place = item[0].claims.P2.place;
    this.org = item[0].claims.P2.org;
    this.event =  item[0].claims.P2.event;
    this.sources = item[0].claims.P2.sources;
    this.main = item[0].claims.P2.main;
 
    //this.itemContent = item[0];

    this.urlId = this.factGridUrl+this.id;
   if (item[0].claims.P189 !==undefined) {
     if (item[0].claims.P189[0].references !==undefined){
       if (item[0].claims.P189[0].references[0].snaks.P55 !==undefined) {
     this.picture = item[0].claims.P189[0].references[0].snaks.P55[0].datavalue.value }
      }
    }
    
    if (item[0].claims.P48 !== undefined) {
    this.coords = item[0].claims.P48[0].mainsnak;
    }
    
    this.selectedItems = JSON.parse(localStorage.getItem('selectedItems'));
   
    ///header

    this.id = item[0].id;
    this.label = item[0].label;
    this.description = item[0].description;
    this.aliases = item[0].aliases;

    this.P2 = item[0].claims.P2;
    this.P3 = item[0].claims.P3; 
    this.P8 = item[0].claims.P8;
    this.P97 = item[0].claims.P97;
    this.P131 = item[0].claims.P131;

    if (item[0].claims.P2 !==undefined){ //instance of
      item[1].splice(item[1].indexOf("P2"),1);
    }
    if (item[0].claims.P3 !==undefined){ //subclass of
      item[1].splice(item[1].indexOf("P3"),1);
    }
    if (item[0].claims.P8 !==undefined){ //part of
      item[1].splice(item[1].indexOf("P8"),1);
    }
    if (item[0].claims.P97 !==undefined){ //field of research
      item[1].splice(item[1].indexOf("P97"),1);
    }
    if (item[0].claims.P131 !==undefined){ //research projects that contributed to this data set
      item[1].splice(item[1].indexOf("P131"),1); 
    }

    ///place

    this.locationAndSituation =[];
    
    if (item[0].claims.P48 !==undefined){ //geographic coordinates
      item[1].splice(item[1].indexOf("P48"),1);
      this.locationAndSituation.push(item[0].claims.P48);}
    
    if (item[0].claims.P58 !==undefined){ //number of inhabitants
      item[1].splice(item[1].indexOf("P58"),1);
      this.locationAndSituation.push(item[0].claims.P58); 
      }  
    
    if (item[0].claims.P297 !==undefined){ //territorial affiliation
      item[1].splice(item[1].indexOf("P297"),1);
      this.locationAndSituation.push(item[0].claims.P297); 
      }  
    
    if (item[0].claims.P466 !==undefined){  //capital of
      item[1].splice(item[1].indexOf("P466"),1);
      this.locationAndSituation.push(item[0].claims.P466); 
      }   
    
    if (item[0].claims.P538 !==undefined){  //historical county
      item[1].splice(item[1].indexOf("P538"),1);
      this.locationAndSituation.push(item[0].claims.P538); 
      } 
    
      if (item[0].claims.P461 !==undefined){  //named after
      item[1].splice(item[1].indexOf("P461"),1);
        this.locationAndSituation.push(item[0].claims.P461); 
      }  

    ///person

    //person: life and family
    
    this.lifeAndFamily = []

    if (item[0].claims.P154 !==undefined){ //sex
      item[1].splice(item[1].indexOf("P154"),1);
      this.lifeAndFamily.push(this.item[0].claims.P154);
    }
    if (item[0].claims.P247 !==undefined){ //name
      item[1].splice(item[1].indexOf("P247"),1);
      this.lifeAndFamily.push(this.item[0].claims.P247);
    }
    if (item[0].claims.P248 !==undefined){ //forenames
      item[1].splice(item[1].indexOf("P248"),1);
      this.lifeAndFamily.push(this.item[0].claims.P248);
    }
    if (item[0].claims.P140 !==undefined){ //Illuminati code name
      item[1].splice(item[1].indexOf("P140"),1);
      this.lifeAndFamily.push(this.item[0].claims.P140);
    }
    if (item[0].claims.P139 !==undefined){ //Illuminati code name of
      item[1].splice(item[1].indexOf("P139"),1);
      this.lifeAndFamily.push(this.item[0].claims.P139);
    }
    if (item[0].claims.P363 !==undefined){ //Strict Observance code name
      item[1].splice(item[1].indexOf("P363"),1);
      this.lifeAndFamily.push(this.item[0].claims.P363);
    }
    if (item[0].claims.P530 !==undefined){ //Name with the Asiatic Brethren
      item[1].splice(item[1].indexOf("P530"),1);
      this.lifeAndFamily.push(this.item[0].claims.P530);
    }
    if (item[0].claims.P354 !==undefined){ //Rosicrucian code name
      item[1].splice(item[1].indexOf("P354"),1);
      this.lifeAndFamily.push(this.item[0].claims.P354);
    }

    if (item[0].claims.P77 !==undefined){ //birthday
      item[1].splice(item[1].indexOf("P77"),1);
      this.lifeAndFamily.push(this.item[0].claims.P77);
    }
    if (item[0].claims.P37 !==undefined){ //date of baptism
      item[1].splice(item[1].indexOf("P37"),1);
      this.lifeAndFamily.push(this.item[0].claims.P37);
    }
    if (item[0].claims.P82 !==undefined){ //birthplace
      item[1].splice(item[1].indexOf("P82"),1);
      this.lifeAndFamily.push(this.item[0].claims.P82);
    }
    if (item[0].claims.P290 !==undefined){ //life span (at least) from
      item[1].splice(item[1].indexOf("P290"),1);
      this.lifeAndFamily.push(this.item[0].claims.P290);
    }
    if (item[0].claims.P186 !==undefined){ //medical conditions
      item[1].splice(item[1].indexOf("P186"),1);
      this.lifeAndFamily.push(this.item[0].claims.P186);
    }
    if (item[0].claims.P38 !==undefined){ //deathday
      item[1].splice(item[1].indexOf("P38"),1);
      this.lifeAndFamily.push(this.item[0].claims.P38);
    }
    if (item[0].claims.P168 !==undefined){ //deathplace
      item[1].splice(item[1].indexOf("P168"),1);
      this.lifeAndFamily.push(this.item[0].claims.P168);
    }
    if (item[0].claims.P162 !==undefined){ //cause of death
      item[1].splice(item[1].indexOf("P162"),1);
      this.lifeAndFamily.push(this.item[0].claims.P162);
    }
    if (item[0].claims.P40 !==undefined){ //burialdate
      item[1].splice(item[1].indexOf("P40"),1);
      this.lifeAndFamily.push(this.item[0].claims.P40);
    }
    if (item[0].claims.P79 !==undefined){ //grave
      item[1].splice(item[1].indexOf("P79"),1);
      this.lifeAndFamily.push(this.item[0].claims.P79);
    }
    if (this.item[0].claims.P141 !==undefined){ //father
      item[1].splice(item[1].indexOf("P141"),1);
      this.lifeAndFamily.push(this.item[0].claims.P141);
    }
    if (item[0].claims.P142 !==undefined){ //mother
      item[1].splice(item[1].indexOf("P142"),1);
      this.lifeAndFamily.push(this.item[0].claims.P142);
    }
    if (item[0].claims.P203 !==undefined){ //siblings
      item[1].splice(item[1].indexOf("P203"),1);
      this.lifeAndFamily.push(this.item[0].claims.P203);
    }
    if (item[0].claims.P84 !==undefined){ //marriage
      item[1].splice(item[1].indexOf("P84"),1);
      this.lifeAndFamily.push(this.item[0].claims.P84);
    }
    if (item[0].claims.P200 !==undefined){ //number of children
      item[1].splice(item[1].indexOf("P200"),1);
      this.lifeAndFamily.push(this.item[0].claims.P200);
    }
    if (item[0].claims.P150 !==undefined){  //children
      item[1].splice(item[1].indexOf("P150"),1);
      this.lifeAndFamily.push(this.item[0].claims.P150);
    }
    if (item[0].claims.P172 !==undefined){ //religion
      item[1].splice(item[1].indexOf("P172"),1);
      this.lifeAndFamily.push(this.item[0].claims.P172);
    }
    if(item[0].claims.P83 !==undefined){ // place (residence)
      if (item[0].claims.P2 ==="Q7"){
       item[1].splice(item[1].indexOf("P83"),1);
       this.lifeAndFamily.push(this.item[0].claims.P83);
       }
    }
    if (item[0].claims.P296 !==undefined){ //sejour
      item[1].splice(item[1].indexOf("P296"),1);
      this.lifeAndFamily.push(this.item[0].claims.P296);
    }

    //person:education

   this.education = [];

   if(item[0].claims.P160 !==undefined){ // educating institutions
    item[1].splice(item[1].indexOf("P160"),1);
    this.education.push(this.item[0].claims.P160) 
   }

   if(item[0].claims.P304 !==undefined){ //subjects studied at university
    item[1].splice(item[1].indexOf("P304"),1);
    this.education.push(this.item[0].claims.P304);
   }

   if(item[0].claims.P170 !==undefined){ //academic degree
    item[1].splice(item[1].indexOf("P170"),1);
    this.education.push(this.item[0].claims.P170);
   }

   if(item[0].claims.P161 !==undefined){ //teachers
    item[1].splice(item[1].indexOf("P161"),1);
    this.education.push(this.item[0].claims.P161);
   }

   if (this.education.length > 0) { this.training = item[0].claims.P2.training ; };

    //person:career and activities
    
    this.careerAndActivities = [];

    if (item[0].claims.P164 !==undefined){ //position
      item[1].splice(item[1].indexOf("P164"),1);
      this.careerAndActivities.push(item[0].claims.P164); 
    }  
    if (item[0].claims.P165 !==undefined){ //activities
      item[1].splice(item[1].indexOf("P165"),1);
      this.careerAndActivities.push(item[0].claims.P165); 
    }  
    if (item[0].claims.P315 !==undefined){ //employer
      item[1].splice(item[1].indexOf("P315"),1);
      this.careerAndActivities.push(item[0].claims.P315); 
    }  
    if (item[0].claims.P242 !==undefined){ //events witnessed
      item[1].splice(item[1].indexOf("P242"),1);
      this.careerAndActivities.push(item[0].claims.P242); 
    }  
    if (item[0].claims.P119 !==undefined){ //active participant in
      item[1].splice(item[1].indexOf("P119"),1);
      this.careerAndActivities.push(item[0].claims.P119); 
    }  

    console.log(this.career);

    if (this.careerAndActivities.length > 0) {  this.career = item[0].claims.P2.career ; };

    console.log(this.career);
  
    //person: sociability and culture

  this.sociabilityAndCulture = [];

  if (item[0].claims.P91 !==undefined){ //member of
    item[1].splice(item[1].indexOf("P91"),1); 
    this.sociabilityAndCulture.push(item[0].claims.P91); 
  }
  if (item[0].claims.P454 !==undefined){ //proposed to become a member of
    item[1].splice(item[1].indexOf("P454"),1);
    this.sociabilityAndCulture.push(item[0].claims.P454); 
  }
  if (item[0].claims.P192 !==undefined){ //friendship
    item[1].splice(item[1].indexOf("P192"),1);
    this.sociabilityAndCulture.push(item[0].claims.P192); 
  }  
  if (item[0].claims.P447 !==undefined){ //masonic degree
    item[1].splice(item[1].indexOf("P447"),1);
    this.sociabilityAndCulture.push(item[0].claims.P447); 
  } 
  if (item[0].claims.P497 !==undefined){ //interested in
    item[1].splice(item[1].indexOf("P497"),1);
    this.sociabilityAndCulture.push(item[0].claims.P497); 
  }  
  if (item[0].claims.P167 !==undefined){ //contributor to
    item[1].splice(item[1].indexOf("P167"),1);
    this.sociabilityAndCulture.push(item[0].claims.P167); 
  }

  if (this.sociabilityAndCulture.length > 0) {  this.sociability = item[0].claims.P2.sociability ; };
  
  ///org

    this.locationAndContext = [];

    if (item[0].claims.P8 !==undefined){  //part of
    item[1].splice(item[1].indexOf("P8"),1);
    this.locationAndContext.push(item[0].claims.P8); 
    }
    if (item[0].claims.P83 !==undefined){
        item[1].splice(item[1].indexOf("P83"),1);
        this.locationAndContext.push(item[0].claims.P83); 
    }  
    if (item[0].claims.P208 !==undefined){  //address  
      item[1].splice(item[1].indexOf("P208"),1);
      this.locationAndContext.push(item[0].claims.P208); 
    }
    if (item[0].claims.P49 !==undefined){  //begin date     
      item[1].splice(item[1].indexOf("P49"),1);
      this.locationAndContext.push(item[0].claims.P49); 
    }
    if (item[0].claims.P6 !==undefined){  //continuation of
      item[1].splice(item[1].indexOf("P6"),1);
      this.locationAndContext.push(item[0].claims.P6); 
    }
    if (item[0].claims.P50 !==undefined){  //end date 
      item[1].splice(item[1].indexOf("P50"),1);
      this.locationAndContext.push(item[0].claims.P50); 
    }
    if (item[0].claims.P7 !==undefined){  //continued by
      item[1].splice(item[1].indexOf("P7"),1);
      this.locationAndContext.push(item[0].claims.P7); 
    }
    if (item[0].claims.P449 !==undefined){  //partner organizations
      item[1].splice(item[1].indexOf("P449"),1);
      this.locationAndContext.push(item[0].claims.P449); 
    }
    if (item[0].claims.P428 !==undefined){  //next higher hierarchy level
      item[1].splice(item[1].indexOf("P428"),1);
      this.locationAndContext.push(item[0].claims.P428); 
    }
    
    if (item[0].claims.P14 !==undefined){  //in leading positions
      item[1].splice(item[1].indexOf("P14"),1);
      this.locationAndContext.push(item[0].claims.P14); 
    }
    if (item[0].claims.P465 !==undefined){  //capital
      item[1].splice(item[1].indexOf("P465"),1);
      this.locationAndContext.push(item[0].claims.P465); 
    }
    if (item[0].claims.P9 !==undefined){  //includes
      item[1].splice(item[1].indexOf("P9"),1);
      this.locationAndContext.push(item[0].claims.P9); 
    }
    if (item[0].claims.P268 !==undefined){  //founded by
      item[1].splice(item[1].indexOf("P268"),1);
      this.locationAndContext.push(item[0].claims.P268); 
    }
    if (item[0].claims.P327 !==undefined){  //documented list of members
      item[1].splice(item[1].indexOf("P327"),1);
      this.locationAndContext.push(item[0].claims.P327); 
    }
    if (item[0].claims.P137 !==undefined){  //history
      item[1].splice(item[1].indexOf("P137"),1);
      this.locationAndContext.push(item[0].claims.P137); 
    }
    if (item[0].claims.P34 !==undefined){  //name history
      item[1].splice(item[1].indexOf("P34"),1);
      this.locationAndContext.push(item[0].claims.P34); 
    }
    if (item[0].claims.P521 !==undefined){  //system adhered to
      item[1].splice(item[1].indexOf("P521"),1);
      this.locationAndContext.push(item[0].claims.P521); 
    }
    if (item[0].claims.P320 !==undefined){  //FactGrid list of members     
      item[1].splice(item[1].indexOf("P320"),1);
      this.locationAndContext.push(item[0].claims.P320); 
    }
    if (item[0].claims.P338 !==undefined){  //founding members     
      item[1].splice(item[1].indexOf("P338"),1);
      this.locationAndContext.push(item[0].claims.P338); 
    }
    if (item[0].claims.P342 !==undefined){  //worshipful master (masonic lodge)   
      item[1].splice(item[1].indexOf("P342"),1);
      this.locationAndContext.push(item[0].claims.P342); 
    }
    if (item[0].claims.P319 !==undefined){  //organisational roof  
      item[1].splice(item[1].indexOf("P319"),1);
      this.locationAndContext.push(item[0].claims.P319); 
    }
    if (item[0].claims.P430 !==undefined){  //grand lodge (masonic lodge)   
      item[1].splice(item[1].indexOf("P430"),1);
      this.locationAndContext.push(item[0].claims.P430); 
    }

  ///activity

  this.activityDetail = [];

  if (item[0].claims.P267 !==undefined){  //organisational context     
    item[1].splice(item[1].indexOf("P267"),1);
    this.locationAndContext.push(item[0].claims.P267); 
  }

  ///event

  this.eventDetail = [];

  if (item[0].claims.P47 !==undefined){  //localisation
    item[1].splice(item[1].indexOf("P47"),1);
    this.eventDetail.push(item[0].claims.P47); 
  }
  if (item[0].claims.P106 !==undefined){  //date
    item[1].splice(item[1].indexOf("P106"),1);
    this.eventDetail.push(item[0].claims.P106); 
  }
  if (item[0].claims.P66 !==undefined){  //institution signing responsible
    item[1].splice(item[1].indexOf("P66"),1);
    this.eventDetail.push(item[0].claims.P66); 
  }
  if (item[0].claims.P133 !==undefined){  //participants
    item[1].splice(item[1].indexOf("P133"),1);
    this.eventDetail.push(item[0].claims.P133); 
  }

///print publication or document
   
   this.printPublicationDetail = [];

  if (item[0].claims.P21 !==undefined){ //author
    item[1].splice(item[1].indexOf("P21"),1);
    this.printPublicationDetail.push(item[0].claims.P21);
  }
  if (item[0].claims.P20 !==undefined){ //author as (misleadingly) stated
    item[1].splice(item[1].indexOf("P20"),1);
    this.printPublicationDetail.push(item[0].claims.P20);
  }
  if (item[0].claims.P25 !==undefined){ //handwritten by
    item[1].splice(item[1].indexOf("P25"),1);
    this.printPublicationDetail.push(item[0].claims.P25);
  }
  if (item[0].claims.P11 !==undefined){ //title
    item[1].splice(item[1].indexOf("P11"),1);
    this.printPublicationDetail.push(item[0].claims.P11);
  }
  if (item[0].claims.P5 !==undefined){ //title page transcript
    item[1].splice(item[1].indexOf("P5"),1);
    this.printPublicationDetail.push(item[0].claims.P5);
  }
  if (item[0].claims.P39 !==undefined){ //begin of composition
    item[1].splice(item[1].indexOf("P39"),1);
    this.printPublicationDetail.push(item[0].claims.P39);
  }
  if (item[0].claims.P15 !==undefined){ //media type
    item[1].splice(item[1].indexOf("P15"),1);
    this.printPublicationDetail.push(item[0].claims.P15);
  }
  if (item[0].claims.P121 !==undefined){ //type of work (standardised)
    item[1].splice(item[1].indexOf("P121"),1);
    this.printPublicationDetail.push(item[0].claims.P121);
  }
  if (item[0].claims.P107 !==undefined){ //number of pages/ leafs/ sheets
    item[1].splice(item[1].indexOf("P107"),1);
    this.printPublicationDetail.push(item[0].claims.P107);
  }
  if (item[0].claims.P93 !==undefined){ //format
    item[1].splice(item[1].indexOf("P93"),1);
    this.printPublicationDetail.push(item[0].claims.P93);
  }
  if (item[0].claims.P95 !==undefined){ //place of origin
    item[1].splice(item[1].indexOf("P95"),1);
    this.printPublicationDetail.push(item[0].claims.P95);
  }
  if (item[0].claims.P28 !==undefined){ //recipient
    item[1].splice(item[1].indexOf("P28"),1);
    this.printPublicationDetail.push(item[0].claims.P28);
  }
  if (item[0].claims.P33 !==undefined){ //persons mentioned
    item[1].splice(item[1].indexOf("P33"),1);
    this.printPublicationDetail.push(item[0].claims.P33);
  }
  if (item[0].claims.P306 !==undefined){ //quoting
    item[1].splice(item[1].indexOf("P306"),1);
    this.printPublicationDetail.push(item[0].claims.P306);
  }
  if (item[0].claims.P72 !==undefined){ // digest in German
    item[1].splice(item[1].indexOf("P72"),1);
    this.printPublicationDetail.push(item[0].claims.P72);
  }
   if (item[0].claims.P144 !==undefined){ //literature
    item[1].splice(item[1].indexOf("P144"),1);
    this.printPublicationDetail.push(item[0].claims.P144);
  }

  if (item[0].claims.P115 !==undefined){ //originality of the item
    item[1].splice(item[1].indexOf("P115"),1);
    this.printPublicationDetail.push(item[0].claims.P115);
  }

  if (item[0].claims.P222 !==undefined){ //date of publication according to imprint
    item[1].splice(item[1].indexOf("P222"),1);
    this.printPublicationDetail.push(item[0].claims.P222);
  }

  if (item[0].claims.P241 !==undefined){ //place of publication (without fictitious information)
    item[1].splice(item[1].indexOf("P241"),1);
    this.printPublicationDetail.push(item[0].claims.P222);
  }

  if (item[0].claims.P240 !==undefined){ //place of publication as misleadingly stated
    item[1].splice(item[1].indexOf("P240"),1);
    this.printPublicationDetail.push(item[0].claims.P240);
  }
  if (item[0].claims.P122 !==undefined){ //wider field of genres
    item[1].splice(item[1].indexOf("P122"),1);
    this.printPublicationDetail.push(item[0].claims.P122);
  }
  if (item[0].claims.P18 !==undefined){ //language
    item[1].splice(item[1].indexOf("P18"),1);
    this.printPublicationDetail.push(item[0].claims.P18);
  }
  if (item[0].claims.P126 !==undefined){ //owner
    item[1].splice(item[1].indexOf("P126"),1);
    this.printPublicationDetail.push(item[0].claims.P126);
  }
  if (item[0].claims.P329 !==undefined){ //holding institution
    item[1].splice(item[1].indexOf("P329"),1);
    this.printPublicationDetail.push(item[0].claims.P329);
  }
  if (item[0].claims.P323 !==undefined){ //next higher archival level
    item[1].splice(item[1].indexOf("P323"),1);
    this.printPublicationDetail.push(item[0].claims.P323);
  }
  if (item[0].claims.P125 !==undefined){ //document accessibility
    item[1].splice(item[1].indexOf("P125"),1);
    this.printPublicationDetail.push(item[0].claims.P125);
  }
  if (item[0].claims.P229 !==undefined){ //provenance
    item[1].splice(item[1].indexOf("P229"),1);
    this.printPublicationDetail.push(item[0].claims.P229);
  }
  if (item[0].claims.P136 !==undefined){ //history of provenance
    item[1].splice(item[1].indexOf("P136"),1);
    this.printPublicationDetail.push(item[0].claims.P136);
  }
  if (item[0].claims.P64 !==undefined){ //published in
    item[1].splice(item[1].indexOf("P64"),1);
    this.printPublicationDetail.push(item[0].claims.P64);
  }
  if (item[0].claims.P124 !==undefined){ //published in
    item[1].splice(item[1].indexOf("P124"),1);
    this.printPublicationDetail.push(item[0].claims.P124);
  }
  if (item[0].claims.P138 !==undefined){ //online digitalisation
    item[1].splice(item[1].indexOf("P138"),1);
    this.printPublicationDetail.push(item[0].claims.P138);
  }
  if (item[0].claims.P251 !==undefined){ //FactGrid transcript
    item[1].splice(item[1].indexOf("P251"),1);
    this.printPublicationDetail.push(item[0].claims.P251);
  }
  if (item[0].claims.P226 !==undefined){ //FactGrid transcript
    item[1].splice(item[1].indexOf("P226"),1);
    this.printPublicationDetail.push(item[0].claims.P226);
  }
  
  ///sources
    
    this.sourcesList =[];
    
    if (item[0].claims.P12 !==undefined){ //literature
      item[1].splice(item[1].indexOf("P12"),1);
      this.sourcesList.push(item[0].claims.P12);
    }
    if (item[0].claims.P51 !==undefined){ //primary source
      item[1].splice(item[1].indexOf("P51"),1);
      this.sourcesList.push(item[0].claims.P51);
    }
    if (item[0].claims.P143 !==undefined){ //mentioned in
      item[1].splice(item[1].indexOf("P143"),1);
      this.sourcesList.push(item[0].claims.P143);
    }
    if (item[0].claims.P185 !==undefined){ //archives at
      item[1].splice(item[1].indexOf("P185"),1);
      this.sourcesList.push(item[0].claims.P185);
    }

  ///externalLinks

    this.externalLinks = [];

    if (item[0].claims.P146 !==undefined){  //online information
      item[1].splice(item[1].indexOf("P146"),1);
       this.externalLinks.push(item[0].claims.P146) };

    if (item[0].claims.P378 !==undefined){ //id viaf
      item[1].splice(item[1].indexOf("P378"),1);
      item[0].claims.P378.url= "https://viaf.org/viaf/"+item[0].claims.P378[0].mainsnak.datavalue.value;
      this.externalLinks.push(item[0].claims.P378) };

    if (item[0].claims.P76 !==undefined){ // id GND
      item[1].splice(item[1].indexOf("P76"),1);
      item[0].claims.P76.url = "https://d-nb.info/gnd/"+item[0].claims.P76[0].mainsnak.datavalue.value;
     this.externalLinks.push(item[0].claims.P76) };

    if (item[0].claims.P500 !==undefined){ // id Data BnF
      item[1].splice(item[1].indexOf("P500"),1);
      item[0].claims.P500.url = "https://data.bnf.fr/en/"+item[0].claims.P500[0].mainsnak.datavalue.value;
      this.externalLinks.push(item[0].claims.P500) };

    if (item[0].claims.P346 !==undefined){ // id PPN
      item[1].splice(item[1].indexOf("P346"),1);
      item[0].claims.P346.url = "https://kxp.k10plus.de/DB=2.1/PPNSET?PPN="+item[0].claims.P346[0].mainsnak.datavalue.value;
        this.externalLinks.push(item[0].claims.P346) };

    if (item[0].claims.P367 !==undefined){ // id BnF
      item[1].splice(item[1].indexOf("P367"),1);
      item[0].claims.P367.url = "https://catalogue.bnf.fr/ark:/12148/cb"+item[0].claims.P367[0].mainsnak.datavalue.value;
        this.externalLinks.push(item[0].claims.P367) };

    if (item[0].claims.P366 !==undefined){ //id IRef
      item[1].splice(item[1].indexOf("P366"),1);
      item[0].claims.P366.url = "https://www.idref.fr/"+item[0].claims.P366[0].mainsnak.datavalue.value;
            this.externalLinks.push(item[0].claims.P366) };
    
    if (item[0].claims.P418 !==undefined){ // id Geonames
      item[1].splice(item[1].indexOf("P418"),1);
      item[0].claims.P418.url = "https://www.geonames.org/"+item[0].claims.P418[0].mainsnak.datavalue.value
                this.externalLinks.push(item[0].claims.P418) };
            
    if (item[0].claims.P368 !==undefined){ // id VD16
      item[1].splice(item[1].indexOf("P368"),1);
      item[0].claims.P368.url = 'https://opacplus.bib-bvb.de/TouchPoint_touchpoint/start.do?Query=1120%3D%22%5C%22VD16+$1%5C""&SearchProfile=Altbestand&Language=De'
                          +item[0].claims.P368[0].mainsnak.datavalue.value
               this.externalLinks.push(item[0].claims.P368) };

    if (item[0].claims.P369 !==undefined){ //id VD17
      item[1].splice(item[1].indexOf("P369"),1);
      item[0].claims.P369.url = 'https://kxp.k10plus.de/DB=1.28/CMD?ACT=SRCHA&IKT=8079&TRM=%27$1%27:'
                          +item[0].claims.P369[0].mainsnak.datavalue.value
              this.externalLinks.push(item[0].claims.P369) };

    if (item[0].claims.P370 !==undefined){//id VD18
      item[1].splice(item[1].indexOf("P370"),1);
      item[0].claims.P370.url = 'https://kxp.k10plus.de/DB=1.65/CMD?ACT=SRCHA&IKT=8080&TRM=VD18'+item[0].claims.P369[0].mainsnak.datavalue.value
           this.externalLinks.push(item[0].claims.P370) };

    if (item[0].claims.P424 !==undefined){ //id Harmonia Universalis
      item[1].splice(item[1].indexOf("P424"),1);
      item[0].claims.P424.url = 'https://harmoniauniversalis.univ-paris1.fr/#/personne/'+item[0].claims.P424[0].mainsnak.datavalue.value
               this.externalLinks.push(item[0].claims.P424) };

    if (item[0].claims.P533 !==undefined){ // id Amburger
      item[1].splice(item[1].indexOf("P533"),1);
      item[0].claims.P533.url = 'https://amburger.ios-regensburg.de/index.php?id='+item[0].claims.P533[0].mainsnak.datavalue.value
            this.externalLinks.push(item[0].claims.P533) };

    if (item[0].claims.P374 !==undefined){ // id Geni.com
      item[1].splice(item[1].indexOf("P374"),1);
      item[0].claims.P374.url = 'https://www.geni.com/profile/index/'+item[0].claims.P374[0].mainsnak.datavalue.value
                  this.externalLinks.push(item[0].claims.P374) };

    if (item[0].claims.P414 !==undefined){  // INSEE municipality code
      item[1].splice(item[1].indexOf("P414"),1);
      item[0].claims.P414.url = 'https://www.insee.fr/fr/statistiques/2011101?geo=COM-'+item[0].claims.P414[0].mainsnak.datavalue.value
                  this.externalLinks.push(item[0].claims.P414) };

    this.mainList= [];
    
    if (item[0].claims.P2 ===undefined){  // no definition of instance
      this.mainList.push(item[0].claims.P2) };

    this.mainList= this.lifeAndFamily.concat(this.locationAndContext, this.locationAndSituation, this.activityDetail, this.eventDetail, this.printPublicationDetail);
    
    this.otherClaims = [];
      
    for (let i=0; i<this.item[1].length; i++){
        let P:string = this.item[1][i];
        this.otherClaims.push(item[0].claims[P]); 
      }

    if (this.otherClaims.length > 0) {  this.other = item[0].claims.P2.other ; };

    
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
    if (item[0].sitelinks.enwikisource !==undefined){
       this.wikis.push(item[0].sitelinks.enwikisource); 
        }
    if (item[0].sitelinks.dewikisource !==undefined){
          this.wikis.push(item[0].sitelinks.dewikisource); 
        }
    if (item[0].sitelinks.frwikisource !==undefined){
          this.wikis.push(item[0].sitelinks.frwikisource); 
        }
      }
    
    }
  )
}

qualifiersList(u){ //setting the list of qualifiers for a mainsnak
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
   this.subscription.unsubscribe()
  }
}




  

    
         
                        