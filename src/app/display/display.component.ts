
//ancien app.component.ts

import { Component, OnInit, OnDestroy, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription, Subject, from } from 'rxjs';
import { AppAndDisplaySharedService } from '../services/app-and-display-shared.service';
import { CreateItemToDisplayService } from '../services/create-item-to-display.service';
import { SetLanguageService } from '../services/set-language.service';
import { RequestService } from '../services/request.service';
import {map} from 'rxjs/operators';
import { BackListDetailsService } from '../services/back-list-details.service';

@Component({
  selector: 'display-component',
  templateUrl: 'display.component.html',
  styleUrls: ['./display.component.css'],
})

export class DisplayComponent implements OnInit, OnDestroy {

  @Output() clickedItem = new EventEmitter<any>();
  
  constructor(private changeDetector:ChangeDetectorRef, private request:RequestService, private sharedService:AppAndDisplaySharedService, private setLanguage:SetLanguageService, private createItemToDisplay:CreateItemToDisplayService, private backListDetails:BackListDetailsService){}

  isSpinner:boolean = false;
  clickedArray:string[]=["",""];
  
  selectedItem:Observable<any>;
  subscription1:Subscription;
  subscription2:Subscription;
  subscription3:Subscription;

  selectedLang: string = (localStorage['selectedLang']===undefined)? "en": localStorage['selectedLang'];

  selectedItems: any[];


  private baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=' ;
  private getUrlSuffix= '&format=json' ; 

  factGridLogo:string = 'https://upload.wikimedia.org/wikipedia/commons/b/b6/FactGrid-Logo4.png';

  langs =[{lang:"en"}, {lang:"de"}, {lang:"fr"}, {lang:"  "}]

  item:any[];
  linkedItems:any[]; //backList
  linkedItem:any //backList
  id:string = "";
  factGridUrl:string;
  urlId:string;
  label:string;
  description:string;
  aliases:string[];
  picture:string ;
  //="https://upload.wikimedia.org/wikipedia/commons/b/b6/FactGrid-Logo4.png";
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
  list:any[];

 
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

  //display the elements
  isMain:boolean = false;
  isExternalLinks:boolean = false;
  isWikis:boolean = false;
  isPicture:boolean = false;
  isTraining:boolean = false;
  isCareer:boolean = false;
  isSociability:boolean = false;
  isOther:boolean = false;
  isSources:boolean = false;
  isActivity:boolean = false;
  isEvent:boolean = false;
  isList:boolean = false;

 onClick(item){ //handling click
    if(item.value !== undefined){
      item = item.value.id; };
    this.isList=true;
    this.clickedArray[0] = item;
    this.clickedItem.emit(this.clickedArray);
  }

onClick2(sparqlList){ //handling click for sparql query
  this.clickedArray[1]=sparqlList;
  this.clickedItem.emit(this.clickedArray);
  }

 ngOnInit(): void {
  
  this.langs;
  this.isSpinner = true;

  this.subscription1 = this.sharedService.data.
    pipe(map(res=> { 
    if (res.backList.query !== undefined) {
    this.linkedItems= this.backListDetails.setBackList(res.backList.query.pages) }
    if ( res.backList.query === undefined ) {
      this.linkedItems = [{id:"Q220375", label:"none"}]
    }
    })).
    subscribe(res =>{ this.linkedItems ; }
      );
       
  this.subscription2 = this.sharedService.data.subscribe(data => {  
    if (data.sparql !== undefined){
      if(data.sparql.results !== undefined){
          this.list=data.sparql.results.bindings;  
            for(let i=0;i<this.list.length;i++){
               this.list[i]["item"].id = this.list[i]["item"].value.replace(	
              "https://database.factgrid.de/entity/", "")
          }
        }
      }
       this.delayDisplayList();
       this.isList = true;
    }
  );

  this.subscription3 = this.sharedService.data.subscribe(data=>{
    if (data.itemToDisplay !==undefined){
    this.item = data.itemToDisplay;
    this.place = this.item[0].claims.P2.place;
    this.org = this.item[0].claims.P2.org;
    this.event =  this.item[0].claims.P2.event;
    this.sources = this.item[0].claims.P2.sources;
    this.main = this.item[0].claims.P2.main;

    this.urlId = this.factGridUrl+this.id;
   
  
    if (this.item[0].claims.P48 !== undefined) {
    this.coords = this.item[0].claims.P48[0].mainsnak;
    }
    
    this.selectedItems = JSON.parse(localStorage.getItem('selectedItems'));
   
    ///header

    this.id = this.item[0].id;
    this.label = this.item[0].label;
    this.description = this.item[0].description;
    this.aliases = this.item[0].aliases;

    this.P2 = this.item[0].claims.P2;
    this.P3 = this.item[0].claims.P3; 
    this.P8 = this.item[0].claims.P8;
    this.P97 = this.item[0].claims.P97;
    this.P131 = this.item[0].claims.P131;

    if (this.item[0].claims.P2 !==undefined){ //instance of
      this.item[1].splice(this.item[1].indexOf("P2"),1);
    }
    if (this.item[0].claims.P3 !==undefined){ //subclass of
      this.item[1].splice(this.item[1].indexOf("P3"),1);
    }
    if (this.item[0].claims.P8 !==undefined){ //part of
      this.item[1].splice(this.item[1].indexOf("P8"),1);
    }
    if (this.item[0].claims.P97 !==undefined){ //field of research
      this.item[1].splice(this.item[1].indexOf("P97"),1);
    }
    if (this.item[0].claims.P131 !==undefined){ //research projects that contributed to this data set
      this.item[1].splice(this.item[1].indexOf("P131"),1); 
    }

    ///place

    this.locationAndSituation =[];
    
    if (this.item[0].claims.P48 !==undefined){ //geographic coordinates
      this.item[1].splice(this.item[1].indexOf("P48"),1);
      this.locationAndSituation.push(this.item[0].claims.P48);}
    
    if (this.item[0].claims.P58 !==undefined){ //number of inhabitants
      this.item[1].splice(this.item[1].indexOf("P58"),1);
      this.locationAndSituation.push(this.item[0].claims.P58); 
      }  
    
    if (this.item[0].claims.P297 !==undefined){ //territorial affiliation
      this.item[1].splice(this.item[1].indexOf("P297"),1);
      this.locationAndSituation.push(this.item[0].claims.P297); 
      }  
    
    if (this.item[0].claims.P466 !==undefined){  //capital of
      this.item[1].splice(this.item[1].indexOf("P466"),1);
      this.locationAndSituation.push(this.item[0].claims.P466); 
      }   
    
    if (this.item[0].claims.P538 !==undefined){  //historical county
      this.item[1].splice(this.item[1].indexOf("P538"),1);
      this.locationAndSituation.push(this.item[0].claims.P538); 
      } 
    
      if (this.item[0].claims.P461 !==undefined){  //named after
        this.item[1].splice(this.item[1].indexOf("P461"),1);
        this.locationAndSituation.push(this.item[0].claims.P461); 
      }  

    ///person

    //person: life and family
    
    this.lifeAndFamily = []

    if (this.item[0].claims.P154 !==undefined){ //sex
      this.item[1].splice(this.item[1].indexOf("P154"),1);
      this.lifeAndFamily.push(this.item[0].claims.P154);
    }
    if (this.item[0].claims.P247 !==undefined){ //name
      this.item[1].splice(this.item[1].indexOf("P247"),1);
      this.lifeAndFamily.push(this.item[0].claims.P247);
    }
    if (this.item[0].claims.P248 !==undefined){ //forenames
      this.item[1].splice(this.item[1].indexOf("P248"),1);
      this.lifeAndFamily.push(this.item[0].claims.P248);
    }
    if (this.item[0].claims.P140 !==undefined){ //Illuminati code name
      this.item[1].splice(this.item[1].indexOf("P140"),1);
      this.lifeAndFamily.push(this.item[0].claims.P140);
    }
    if (this.item[0].claims.P139 !==undefined){ //Illuminati code name of
      this.item[1].splice(this.item[1].indexOf("P139"),1);
      this.lifeAndFamily.push(this.item[0].claims.P139);
    }
    if (this.item[0].claims.P363 !==undefined){ //Strict Observance code name
      this.item[1].splice(this.item[1].indexOf("P363"),1);
      this.lifeAndFamily.push(this.item[0].claims.P363);
    }
    if (this.item[0].claims.P530 !==undefined){ //Name with the Asiatic Brethren
      this.item[1].splice(this.item[1].indexOf("P530"),1);
      this.lifeAndFamily.push(this.item[0].claims.P530);
    }
    if (this.item[0].claims.P354 !==undefined){ //Rosicrucian code name
      this.item[1].splice(this.item[1].indexOf("P354"),1);
      this.lifeAndFamily.push(this.item[0].claims.P354);
    }

    if (this.item[0].claims.P77 !==undefined){ //birthday
      this.item[1].splice(this.item[1].indexOf("P77"),1);
      this.lifeAndFamily.push(this.item[0].claims.P77);
    }
    if (this.item[0].claims.P37 !==undefined){ //date of baptism
      this.item[1].splice(this.item[1].indexOf("P37"),1);
      this.lifeAndFamily.push(this.item[0].claims.P37);
    }
    if (this.item[0].claims.P82 !==undefined){ //birthplace
      this.item[1].splice(this.item[1].indexOf("P82"),1);
      this.lifeAndFamily.push(this.item[0].claims.P82);
    }
    if (this.item[0].claims.P290 !==undefined){ //life span (at least) from
      this.item[1].splice(this.item[1].indexOf("P290"),1);
      this.lifeAndFamily.push(this.item[0].claims.P290);
    }
    if (this.item[0].claims.P186 !==undefined){ //medical conditions
      this.item[1].splice(this.item[1].indexOf("P186"),1);
      this.lifeAndFamily.push(this.item[0].claims.P186);
    }
    if (this.item[0].claims.P38 !==undefined){ //deathday
      this.item[1].splice(this.item[1].indexOf("P38"),1);
      this.lifeAndFamily.push(this.item[0].claims.P38);
    }
    if (this.item[0].claims.P168 !==undefined){ //deathplace
      this.item[1].splice(this.item[1].indexOf("P168"),1);
      this.lifeAndFamily.push(this.item[0].claims.P168);
    }
    if (this.item[0].claims.P162 !==undefined){ //cause of death
      this.item[1].splice(this.item[1].indexOf("P162"),1);
      this.lifeAndFamily.push(this.item[0].claims.P162);
    }
    if (this.item[0].claims.P40 !==undefined){ //burialdate
      this.item[1].splice(this.item[1].indexOf("P40"),1);
      this.lifeAndFamily.push(this.item[0].claims.P40);
    }
    if (this.item[0].claims.P79 !==undefined){ //grave
      this.item[1].splice(this.item[1].indexOf("P79"),1);
      this.lifeAndFamily.push(this.item[0].claims.P79);
    }
    if (this.item[0].claims.P141 !==undefined){ //father
      this.item[1].splice(this.item[1].indexOf("P141"),1);
      this.lifeAndFamily.push(this.item[0].claims.P141);
    }
    if (this.item[0].claims.P142 !==undefined){ //mother
      this.item[1].splice(this.item[1].indexOf("P142"),1);
      this.lifeAndFamily.push(this.item[0].claims.P142);
    }
    if (this.item[0].claims.P203 !==undefined){ //siblings
      this.item[1].splice(this.item[1].indexOf("P203"),1);
      this.lifeAndFamily.push(this.item[0].claims.P203);
    }
    if (this.item[0].claims.P84 !==undefined){ //marriage
      this.item[1].splice(this.item[1].indexOf("P84"),1);
      this.lifeAndFamily.push(this.item[0].claims.P84);
    }
    if (this.item[0].claims.P200 !==undefined){ //number of children
      this.item[1].splice(this.item[1].indexOf("P200"),1);
      this.lifeAndFamily.push(this.item[0].claims.P200);
    }
    if (this.item[0].claims.P150 !==undefined){  //children
      this.item[1].splice(this.item[1].indexOf("P150"),1);
      this.lifeAndFamily.push(this.item[0].claims.P150);
    }
    if (this.item[0].claims.P172 !==undefined){ //religion
      this.item[1].splice(this.item[1].indexOf("P172"),1);
      this.lifeAndFamily.push(this.item[0].claims.P172);
    }
    if(this.item[0].claims.P83 !==undefined){ // place (residence)
      if (this.item[0].claims.P2 ==="Q7"){
        this.item[1].splice(this.item[1].indexOf("P83"),1);
       this.lifeAndFamily.push(this.item[0].claims.P83);
       }
    }
    if (this.item[0].claims.P296 !==undefined){ //sejour
      this.item[1].splice(this.item[1].indexOf("P296"),1);
      this.lifeAndFamily.push(this.item[0].claims.P296);
    }

    //person:education

   this.education = [];

   if(this.item[0].claims.P160 !==undefined){ // educating institutions
    this.item[1].splice(this.item[1].indexOf("P160"),1);
    this.education.push(this.item[0].claims.P160) 
   }

   if(this.item[0].claims.P304 !==undefined){ //subjects studied at university
    this.item[1].splice(this.item[1].indexOf("P304"),1);
    this.education.push(this.item[0].claims.P304);
   }

   if(this.item[0].claims.P170 !==undefined){ //academic degree
    this.item[1].splice(this.item[1].indexOf("P170"),1);
    this.education.push(this.item[0].claims.P170);
   }

   if(this.item[0].claims.P161 !==undefined){ //teachers
    this.item[1].splice(this.item[1].indexOf("P161"),1);
    this.education.push(this.item[0].claims.P161);
   }

   if (this.education.length > 0) { this.training = this.item[0].claims.P2.training ; this.isTraining = true }

    //person:career and activities
    
    this.careerAndActivities = [];

    if (this.item[0].claims.P164 !==undefined){ //position
      this.item[1].splice(this.item[1].indexOf("P164"),1);
      this.careerAndActivities.push(this.item[0].claims.P164); 
    }  
    if (this.item[0].claims.P165 !==undefined){ //activities
      this.item[1].splice(this.item[1].indexOf("P165"),1);
      this.careerAndActivities.push(this.item[0].claims.P165); 
    }  
    if (this.item[0].claims.P315 !==undefined){ //employer
      this.item[1].splice(this.item[1].indexOf("P315"),1);
      this.careerAndActivities.push(this.item[0].claims.P315); 
    }  
    if (this.item[0].claims.P242 !==undefined){ //events witnessed
      this.item[1].splice(this.item[1].indexOf("P242"),1);
      this.careerAndActivities.push(this.item[0].claims.P242); 
    }  
    if (this.item[0].claims.P119 !==undefined){ //active participant in
      this.item[1].splice(this.item[1].indexOf("P119"),1);
      this.careerAndActivities.push(this.item[0].claims.P119); 
    }  

    if (this.careerAndActivities.length > 0) {  this.career = this.item[0].claims.P2.career ; this.isCareer = true };

    
  
    //person: sociability and culture

  this.sociabilityAndCulture = [];

  if (this.item[0].claims.P91 !==undefined){ //member of
    this.item[1].splice(this.item[1].indexOf("P91"),1); 
    this.sociabilityAndCulture.push(this.item[0].claims.P91); 
  }
  if (this.item[0].claims.P454 !==undefined){ //proposed to become a member of
    this.item[1].splice(this.item[1].indexOf("P454"),1);
    this.sociabilityAndCulture.push(this.item[0].claims.P454); 
  }
  if (this.item[0].claims.P192 !==undefined){ //friendship
    this.item[1].splice(this.item[1].indexOf("P192"),1);
    this.sociabilityAndCulture.push(this.item[0].claims.P192); 
  }  
  if (this.item[0].claims.P447 !==undefined){ //masonic degree
    this.item[1].splice(this.item[1].indexOf("P447"),1);
    this.sociabilityAndCulture.push(this.item[0].claims.P447); 
  } 
  if (this.item[0].claims.P497 !==undefined){ //interested in
    this.item[1].splice(this.item[1].indexOf("P497"),1);
    this.sociabilityAndCulture.push(this.item[0].claims.P497); 
  }  
  if (this.item[0].claims.P167 !==undefined){ //contributor to
    this.item[1].splice(this.item[1].indexOf("P167"),1);
    this.sociabilityAndCulture.push(this.item[0].claims.P167); 
  }

  if (this.sociabilityAndCulture.length > 0) {  this.sociability = this.item[0].claims.P2.sociability ; 
                                                   this.isSociability = true};

  ///picture
 
  if (this.item[0].claims.P189 !==undefined) {
    if (this.item[0].claims.P189[0].references !==undefined){
     if (this.item[0].claims.P189[0].references[0].snaks.P55 !==undefined)
//      this.picture = 'https://upload.wikimedia.org/wikipedia/commons/b/b6/FactGrid-Logo4.png'
       this.picture = this.item[0].claims.P189[0].references[0].snaks.P55[0].datavalue.value ;
     }
    }
  
  if (this.picture !==undefined) this.isPicture = true;

  ///org

    this.locationAndContext = [];

    if (this.item[0].claims.P8 !==undefined){  //part of
      this.item[1].splice(this.item[1].indexOf("P8"),1);
    this.locationAndContext.push(this.item[0].claims.P8); 
    }
    if (this.item[0].claims.P83 !==undefined){
      this.item[1].splice(this.item[1].indexOf("P83"),1);
        this.locationAndContext.push(this.item[0].claims.P83); 
    }  
    if (this.item[0].claims.P208 !==undefined){  //address  
      this.item[1].splice(this.item[1].indexOf("P208"),1);
      this.locationAndContext.push(this.item[0].claims.P208); 
    }
    if (this.item[0].claims.P49 !==undefined){  //begin date     
      this.item[1].splice(this.item[1].indexOf("P49"),1);
      this.locationAndContext.push(this.item[0].claims.P49); 
    }
    if (this.item[0].claims.P6 !==undefined){  //continuation of
      this.item[1].splice(this.item[1].indexOf("P6"),1);
      this.locationAndContext.push(this.item[0].claims.P6); 
    }
    if (this.item[0].claims.P50 !==undefined){  //end date 
      this.item[1].splice(this.item[1].indexOf("P50"),1);
      this.locationAndContext.push(this.item[0].claims.P50); 
    }
    if (this.item[0].claims.P7 !==undefined){  //continued by
      this.item[1].splice(this.item[1].indexOf("P7"),1);
      this.locationAndContext.push(this.item[0].claims.P7); 
    }
    if (this.item[0].claims.P449 !==undefined){  //partner organizations
      this.item[1].splice(this.item[1].indexOf("P449"),1);
      this.locationAndContext.push(this.item[0].claims.P449); 
    }
    if (this.item[0].claims.P428 !==undefined){  //next higher hierarchy level
      this.item[1].splice(this.item[1].indexOf("P428"),1);
      this.locationAndContext.push(this.item[0].claims.P428); 
    }
    
    if (this.item[0].claims.P14 !==undefined){  //in leading positions
      this.item[1].splice(this.item[1].indexOf("P14"),1);
      this.locationAndContext.push(this.item[0].claims.P14); 
    }
    if (this.item[0].claims.P465 !==undefined){  //capital
      this.item[1].splice(this.item[1].indexOf("P465"),1);
      this.locationAndContext.push(this.item[0].claims.P465); 
    }
    if (this.item[0].claims.P9 !==undefined){  //includes
      this.item[1].splice(this.item[1].indexOf("P9"),1);
      this.locationAndContext.push(this.item[0].claims.P9); 
    }
    if (this.item[0].claims.P268 !==undefined){  //founded by
      this.item[1].splice(this.item[1].indexOf("P268"),1);
      this.locationAndContext.push(this.item[0].claims.P268); 
    }
    if (this.item[0].claims.P327 !==undefined){  //documented list of members
      this.item[1].splice(this.item[1].indexOf("P327"),1);
      this.locationAndContext.push(this.item[0].claims.P327); 
    }
    if (this.item[0].claims.P137 !==undefined){  //history
      this.item[1].splice(this.item[1].indexOf("P137"),1);
      this.locationAndContext.push(this.item[0].claims.P137); 
    }
    if (this.item[0].claims.P34 !==undefined){  //name history
      this.item[1].splice(this.item[1].indexOf("P34"),1);
      this.locationAndContext.push(this.item[0].claims.P34); 
    }
    if (this.item[0].claims.P521 !==undefined){  //system adhered to
      this.item[1].splice(this.item[1].indexOf("P521"),1);
      this.locationAndContext.push(this.item[0].claims.P521); 
    }
    if (this.item[0].claims.P320 !==undefined){  //FactGrid list of members     
      this.item[1].splice(this.item[1].indexOf("P320"),1);
      this.locationAndContext.push(this.item[0].claims.P320); 
    }
    if (this.item[0].claims.P338 !==undefined){  //founding members     
      this.item[1].splice(this.item[1].indexOf("P338"),1);
      this.locationAndContext.push(this.item[0].claims.P338); 
    }
    if (this.item[0].claims.P342 !==undefined){  //worshipful master (masonic lodge)   
      this.item[1].splice(this.item[1].indexOf("P342"),1);
      this.locationAndContext.push(this.item[0].claims.P342); 
    }
    if (this.item[0].claims.P319 !==undefined){  //organisational roof  
      this.item[1].splice(this.item[1].indexOf("P319"),1);
      this.locationAndContext.push(this.item[0].claims.P319); 
    }
    if (this.item[0].claims.P430 !==undefined){  //grand lodge (masonic lodge)   
      this.item[1].splice(this.item[1].indexOf("P430"),1);
      this.locationAndContext.push(this.item[0].claims.P430); 
    }

  ///activity

  this.activityDetail = [];

  if (this.item[0].claims.P267 !==undefined){  //organisational context     
    this.item[1].splice(this.item[1].indexOf("P267"),1);
    this.locationAndContext.push(this.item[0].claims.P267); 
  }

  if (this.activityDetail.length > 0) {  this.isActivity = true};

  ///event

  this.eventDetail = [];

  if (this.item[0].claims.P47 !==undefined){  //localisation
    this.item[1].splice(this.item[1].indexOf("P47"),1);
    this.eventDetail.push(this.item[0].claims.P47); 
  }
  if (this.item[0].claims.P106 !==undefined){  //date
    this.item[1].splice(this.item[1].indexOf("P106"),1);
    this.eventDetail.push(this.item[0].claims.P106); 
  }
  if (this.item[0].claims.P66 !==undefined){  //institution signing responsible
    this.item[1].splice(this.item[1].indexOf("P66"),1);
    this.eventDetail.push(this.item[0].claims.P66); 
  }
  if (this.item[0].claims.P133 !==undefined){  //participants
    this.item[1].splice(this.item[1].indexOf("P133"),1);
    this.eventDetail.push(this.item[0].claims.P133); 
  }

  if (this.eventDetail.length > 0) { this.isEvent = true };

///print publication or document
   
   this.printPublicationDetail = [];

  if (this.item[0].claims.P21 !==undefined){ //author
    this.item[1].splice(this.item[1].indexOf("P21"),1);
    this.printPublicationDetail.push(this.item[0].claims.P21);
  }
  if (this.item[0].claims.P20 !==undefined){ //author as (misleadingly) stated
    this.item[1].splice(this.item[1].indexOf("P20"),1);
    this.printPublicationDetail.push(this.item[0].claims.P20);
  }
  if (this.item[0].claims.P25 !==undefined){ //handwritten by
    this.item[1].splice(this.item[1].indexOf("P25"),1);
    this.printPublicationDetail.push(this.item[0].claims.P25);
  }
  if (this.item[0].claims.P11 !==undefined){ //title
    this.item[1].splice(this.item[1].indexOf("P11"),1);
    this.printPublicationDetail.push(this.item[0].claims.P11);
  }
  if (this.item[0].claims.P5 !==undefined){ //title page transcript
    this.item[1].splice(this.item[1].indexOf("P5"),1);
    this.printPublicationDetail.push(this.item[0].claims.P5);
  }
  if (this.item[0].claims.P39 !==undefined){ //begin of composition
    this.item[1].splice(this.item[1].indexOf("P39"),1);
    this.printPublicationDetail.push(this.item[0].claims.P39);
  }
  if (this.item[0].claims.P15 !==undefined){ //media type
    this.item[1].splice(this.item[1].indexOf("P15"),1);
    this.printPublicationDetail.push(this.item[0].claims.P15);
  }
  if (this.item[0].claims.P121 !==undefined){ //type of work (standardised)
    this.item[1].splice(this.item[1].indexOf("P121"),1);
    this.printPublicationDetail.push(this.item[0].claims.P121);
  }
  if (this.item[0].claims.P107 !==undefined){ //number of pages/ leafs/ sheets
    this.item[1].splice(this.item[1].indexOf("P107"),1);
    this.printPublicationDetail.push(this.item[0].claims.P107);
  }
  if (this.item[0].claims.P93 !==undefined){ //format
    this.item[1].splice(this.item[1].indexOf("P93"),1);
    this.printPublicationDetail.push(this.item[0].claims.P93);
  }
  if (this.item[0].claims.P95 !==undefined){ //place of origin
    this.item[1].splice(this.item[1].indexOf("P95"),1);
    this.printPublicationDetail.push(this.item[0].claims.P95);
  }
  if (this.item[0].claims.P28 !==undefined){ //recipient
    this.item[1].splice(this.item[1].indexOf("P28"),1);
    this.printPublicationDetail.push(this.item[0].claims.P28);
  }
  if (this.item[0].claims.P33 !==undefined){ //persons mentioned
    this.item[1].splice(this.item[1].indexOf("P33"),1);
    this.printPublicationDetail.push(this.item[0].claims.P33);
  }
  if (this.item[0].claims.P306 !==undefined){ //quoting
    this.item[1].splice(this.item[1].indexOf("P306"),1);
    this.printPublicationDetail.push(this.item[0].claims.P306);
  }
  if (this.item[0].claims.P72 !==undefined){ // digest in German
    this.item[1].splice(this.item[1].indexOf("P72"),1);
    this.printPublicationDetail.push(this.item[0].claims.P72);
  }
   if (this.item[0].claims.P144 !==undefined){ //literature
    this.item[1].splice(this.item[1].indexOf("P144"),1);
    this.printPublicationDetail.push(this.item[0].claims.P144);
  }

  if (this.item[0].claims.P115 !==undefined){ //originality of the item
    this.item[1].splice(this.item[1].indexOf("P115"),1);
    this.printPublicationDetail.push(this.item[0].claims.P115);
  }

  if (this.item[0].claims.P222 !==undefined){ //date of publication according to imprint
    this.item[1].splice(this.item[1].indexOf("P222"),1);
    this.printPublicationDetail.push(this.item[0].claims.P222);
  }

  if (this.item[0].claims.P241 !==undefined){ //place of publication (without fictitious information)
    this.item[1].splice(this.item[1].indexOf("P241"),1);
    this.printPublicationDetail.push(this.item[0].claims.P222);
  }

  if (this.item[0].claims.P240 !==undefined){ //place of publication as misleadingly stated
    this.item[1].splice(this.item[1].indexOf("P240"),1);
    this.printPublicationDetail.push(this.item[0].claims.P240);
  }
  if (this.item[0].claims.P122 !==undefined){ //wider field of genres
    this.item[1].splice(this.item[1].indexOf("P122"),1);
    this.printPublicationDetail.push(this.item[0].claims.P122);
  }
  if (this.item[0].claims.P18 !==undefined){ //language
    this.item[1].splice(this.item[1].indexOf("P18"),1);
    this.printPublicationDetail.push(this.item[0].claims.P18);
  }
  if (this.item[0].claims.P126 !==undefined){ //owner
    this.item[1].splice(this.item[1].indexOf("P126"),1);
    this.printPublicationDetail.push(this.item[0].claims.P126);
  }
  if (this.item[0].claims.P329 !==undefined){ //holding institution
    this.item[1].splice(this.item[1].indexOf("P329"),1);
    this.printPublicationDetail.push(this.item[0].claims.P329);
  }
  if (this.item[0].claims.P323 !==undefined){ //next higher archival level
    this.item[1].splice(this.item[1].indexOf("P323"),1);
    this.printPublicationDetail.push(this.item[0].claims.P323);
  }
  if (this.item[0].claims.P125 !==undefined){ //document accessibility
    this.item[1].splice(this.item[1].indexOf("P125"),1);
    this.printPublicationDetail.push(this.item[0].claims.P125);
  }
  if (this.item[0].claims.P229 !==undefined){ //provenance
    this.item[1].splice(this.item[1].indexOf("P229"),1);
    this.printPublicationDetail.push(this.item[0].claims.P229);
  }
  if (this.item[0].claims.P136 !==undefined){ //history of provenance
    this.item[1].splice(this.item[1].indexOf("P136"),1);
    this.printPublicationDetail.push(this.item[0].claims.P136);
  }
  if (this.item[0].claims.P64 !==undefined){ //published in
    this.item[1].splice(this.item[1].indexOf("P64"),1);
    this.printPublicationDetail.push(this.item[0].claims.P64);
  }
  if (this.item[0].claims.P124 !==undefined){ //published in
    this.item[1].splice(this.item[1].indexOf("P124"),1);
    this.printPublicationDetail.push(this.item[0].claims.P124);
  }
  if (this.item[0].claims.P138 !==undefined){ //online digitalisation
    this.item[1].splice(this.item[1].indexOf("P138"),1);
    this.printPublicationDetail.push(this.item[0].claims.P138);
  }
  if (this.item[0].claims.P251 !==undefined){ //FactGrid transcript
    this.item[1].splice(this.item[1].indexOf("P251"),1);
    this.printPublicationDetail.push(this.item[0].claims.P251);
  }
  if (this.item[0].claims.P226 !==undefined){ //FactGrid transcript
    this.item[1].splice(this.item[1].indexOf("P226"),1);
    this.printPublicationDetail.push(this.item[0].claims.P226);
  }
  
  ///sources
    
    this.sourcesList =[];
    
    if (this.item[0].claims.P12 !==undefined){ //literature
      this.item[1].splice(this.item[1].indexOf("P12"),1);
      this.sourcesList.push(this.item[0].claims.P12);
    }
    if (this.item[0].claims.P51 !==undefined){ //primary source
      this.item[1].splice(this.item[1].indexOf("P51"),1);
      this.sourcesList.push(this.item[0].claims.P51);
    }
    if (this.item[0].claims.P143 !==undefined){ //mentioned in
      this.item[1].splice(this.item[1].indexOf("P143"),1);
      this.sourcesList.push(this.item[0].claims.P143);
    }
    if (this.item[0].claims.P185 !==undefined){ //archives at
      this.item[1].splice(this.item[1].indexOf("P185"),1);
      this.sourcesList.push(this.item[0].claims.P185);
    }

    if (this.sourcesList.length > 0) {  this.isSources = true };

  ///externalLinks

    this.externalLinks = [];

    if (this.item[0].claims.P146 !==undefined){  //online information
      this.item[1].splice(this.item[1].indexOf("P146"),1);
       this.externalLinks.push(this.item[0].claims.P146) };

    if (this.item[0].claims.P378 !==undefined){ //id viaf
      this.item[1].splice(this.item[1].indexOf("P378"),1);
      this.item[0].claims.P378.url= "https://viaf.org/viaf/"+this.item[0].claims.P378[0].mainsnak.datavalue.value;
      this.externalLinks.push(this.item[0].claims.P378) };

    if (this.item[0].claims.P76 !==undefined){ // id GND
      this.item[1].splice(this.item[1].indexOf("P76"),1);
      this.item[0].claims.P76.url = "https://d-nb.info/gnd/"+this.item[0].claims.P76[0].mainsnak.datavalue.value;
     this.externalLinks.push(this.item[0].claims.P76) };

    if (this.item[0].claims.P500 !==undefined){ // id Data BnF
      this.item[1].splice(this.item[1].indexOf("P500"),1);
      this.item[0].claims.P500.url = "https://data.bnf.fr/en/"+this.item[0].claims.P500[0].mainsnak.datavalue.value;
      this.externalLinks.push(this.item[0].claims.P500) };

    if (this.item[0].claims.P346 !==undefined){ // id PPN
      this.item[1].splice(this.item[1].indexOf("P346"),1);
      this.item[0].claims.P346.url = "https://kxp.k10plus.de/DB=2.1/PPNSET?PPN="+this.item[0].claims.P346[0].mainsnak.datavalue.value;
        this.externalLinks.push(this.item[0].claims.P346) };

    if (this.item[0].claims.P367 !==undefined){ // id BnF
      this.item[1].splice(this.item[1].indexOf("P367"),1);
      this.item[0].claims.P367.url = "https://catalogue.bnf.fr/ark:/12148/cb"+this.item[0].claims.P367[0].mainsnak.datavalue.value;
        this.externalLinks.push(this.item[0].claims.P367) };

    if (this.item[0].claims.P366 !==undefined){ //id IRef
      this.item[1].splice(this.item[1].indexOf("P366"),1);
      this.item[0].claims.P366.url = "https://www.idref.fr/"+this.item[0].claims.P366[0].mainsnak.datavalue.value;
            this.externalLinks.push(this.item[0].claims.P366) };
    
    if (this.item[0].claims.P418 !==undefined){ // id Geonames
      this.item[1].splice(this.item[1].indexOf("P418"),1);
      this.item[0].claims.P418.url = "https://www.geonames.org/"+this.item[0].claims.P418[0].mainsnak.datavalue.value
                this.externalLinks.push(this.item[0].claims.P418) };
            
    if (this.item[0].claims.P368 !==undefined){ // id VD16
      this.item[1].splice(this.item[1].indexOf("P368"),1);
      this.item[0].claims.P368.url = 'https://opacplus.bib-bvb.de/TouchPoint_touchpoint/start.do?Query=1120%3D%22%5C%22VD16+$1%5C""&SearchProfile=Altbestand&Language=De'
                          +this.item[0].claims.P368[0].mainsnak.datavalue.value
               this.externalLinks.push(this.item[0].claims.P368) };

    if (this.item[0].claims.P369 !==undefined){ //id VD17
      this.item[1].splice(this.item[1].indexOf("P369"),1);
      this.item[0].claims.P369.url = 'https://kxp.k10plus.de/DB=1.28/CMD?ACT=SRCHA&IKT=8079&TRM=%27$1%27:'
                          +this.item[0].claims.P369[0].mainsnak.datavalue.value
              this.externalLinks.push(this.item[0].claims.P369) };

    if (this.item[0].claims.P370 !==undefined){//id VD18
      this.item[1].splice(this.item[1].indexOf("P370"),1);
      this.item[0].claims.P370.url = 'https://kxp.k10plus.de/DB=1.65/CMD?ACT=SRCHA&IKT=8080&TRM=VD18'+this.item[0].claims.P369[0].mainsnak.datavalue.value
           this.externalLinks.push(this.item[0].claims.P370) };

    if (this.item[0].claims.P424 !==undefined){ //id Harmonia Universalis
      this.item[1].splice(this.item[1].indexOf("P424"),1);
      this.item[0].claims.P424.url = 'https://harmoniauniversalis.univ-paris1.fr/#/personne/'+this.item[0].claims.P424[0].mainsnak.datavalue.value
               this.externalLinks.push(this.item[0].claims.P424) };

    if (this.item[0].claims.P533 !==undefined){ // id Amburger
      this.item[1].splice(this.item[1].indexOf("P533"),1);
      this.item[0].claims.P533.url = 'https://amburger.ios-regensburg.de/index.php?id='+this.item[0].claims.P533[0].mainsnak.datavalue.value
            this.externalLinks.push(this.item[0].claims.P533) };

    if (this.item[0].claims.P374 !==undefined){ // id Geni.com
      this.item[1].splice(this.item[1].indexOf("P374"),1);
      this.item[0].claims.P374.url = 'https://www.geni.com/profile/index/'+this.item[0].claims.P374[0].mainsnak.datavalue.value
                  this.externalLinks.push(this.item[0].claims.P374) };

    if (this.item[0].claims.P414 !==undefined){  // INSEE municipality code
      this.item[1].splice(this.item[1].indexOf("P414"),1);
      this.item[0].claims.P414.url = 'https://www.insee.fr/fr/statistiques/2011101?geo=COM-'+this.item[0].claims.P414[0].mainsnak.datavalue.value
                  this.externalLinks.push(this.item[0].claims.P414) };

    if (this.externalLinks.length > 0) {  this.isExternalLinks = true };        
    
    this.mainList= [];
    
    if (this.item[0].claims.P2 ===undefined){  // no definition of instance
      this.mainList.push(this.item[0].claims.P2) };

    this.mainList= this.lifeAndFamily.concat(this.locationAndContext, this.locationAndSituation, this.activityDetail, this.eventDetail, this.printPublicationDetail);
    
    if (this.mainList.length > 0) { 
           this.isMain = true ;
      }

    this.otherClaims = [];
      
    for (let i=0; i<this.item[1].length; i++){
        let P:string = this.item[1][i];
        this.otherClaims.push(this.item[0].claims[P]); 
      }

    if (this.otherClaims.length > 0) {  this.other = this.item[0].claims.P2.other ; 
                                        this.isOther = true };

    
    this.wikis = [];
    
    if (this.item[0].sitelinks.commonswiki !==undefined){
        this.wikis.push(this.item[0].sitelinks.commonswiki);
    }
    if (this.item[0].sitelinks.enwiki !==undefined){
      this.wikis.push(this.item[0].sitelinks.enwiki);
    }
    if (this.item[0].sitelinks.dewiki !==undefined){
      this.wikis.push(this.item[0].sitelinks.dewiki);
    }
    if (this.item[0].sitelinks.frwiki !==undefined){
      this.wikis.push(this.item[0].sitelinks.frwiki); 
    }
    if (this.item[0].sitelinks.wikidatawiki !==undefined){
        this.wikis.push(this.item[0].sitelinks.wikidatawiki); 
        }
    if (this.item[0].sitelinks.enwikisource !==undefined){
       this.wikis.push(this.item[0].sitelinks.enwikisource); 
        }
    if (this.item[0].sitelinks.dewikisource !==undefined){
          this.wikis.push(this.item[0].sitelinks.dewikisource); 
        }
    if (this.item[0].sitelinks.frwikisource !==undefined){
          this.wikis.push(this.item[0].sitelinks.frwikisource); 
        }

     if (this.wikis.length > 0) {   this.isWikis = true };

        }  

        this.isSpinner = false;

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

 delayDisplayList(){
     if (document.getElementById("listing") != null) {  
       document.getElementById("listing").style.visibility = 'hidden';
       setTimeout(function() { 
         document.getElementById("listing").style.visibility = 'visible';}, 1800);
       }
      }

  changeLang(lang:string){
    
  }



  ngOnDestroy(): void {
   this.subscription1.unsubscribe();
   this.subscription2.unsubscribe();
   this.subscription3.unsubscribe();
  }
}




  

    
         
                        