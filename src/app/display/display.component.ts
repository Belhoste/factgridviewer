
import { Component, OnInit, OnDestroy, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription, Subject, from } from 'rxjs';
import { AppAndDisplaySharedService } from '../services/app-and-display-shared.service';
import { CreateItemToDisplayService } from '../services/create-item-to-display.service';
import { SetLanguageService } from '../services/set-language.service';
import { RequestService } from '../services/request.service';
import {map} from 'rxjs/operators';
import { BackListDetailsService } from '../services/back-list-details.service';
import { PlaceDisplayService} from './services/place-display.service';
import { OrgDisplayService} from './services/org-display.service';
import { DocumentDisplayService } from './services/document-display.service';
import { ActivityDisplayService} from './services/activity-display.service';
import { EducationDisplayService } from './services/education-display.service';
import { PersonDisplayService } from './services/person-display.service';
import { CareerDisplayService } from './services/career-display.service';
import { SociabilityDisplayService} from './services/sociability-display.service';
import { SourcesDisplayService} from './services/sources-display.service';
import { EventDisplayService} from './services/event-display.service';
import { ExternalLinksDisplayService} from './services/external-links-display.service';
import { WikiDisplayService} from './services/wiki-display.service';

@Component({
  selector: 'display-component',
  templateUrl: 'display.component.html',
  styleUrls: ['./display.component.css'],
})

export class DisplayComponent implements OnInit, OnDestroy {

  @Output() clickedItem = new EventEmitter<any>();
  
  constructor(private changeDetector:ChangeDetectorRef, private request:RequestService, private sharedService:AppAndDisplaySharedService, private setLanguage:SetLanguageService, private createItemToDisplay:CreateItemToDisplayService, 
    private backListDetails:BackListDetailsService, private placeDisplay:PlaceDisplayService, private orgDisplay:OrgDisplayService,private documentDisplay:DocumentDisplayService,private activityDisplay:ActivityDisplayService,
    private personDisplay:PersonDisplayService, private educationDisplay:EducationDisplayService, private careerDisplay:CareerDisplayService, private sociabilityDisplay:SociabilityDisplayService,
    private sourcesDisplay:SourcesDisplayService, private eventDisplay:EventDisplayService, private externalLinksDisplay:ExternalLinksDisplayService, private wikiDisplay:WikiDisplayService){}

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
  publication:string;
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
  documentDetail:any[];//for print publications
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
    //this.place = this.item[0].claims.P2.place;
   // this.org = this.item[0].claims.P2.org;
    this.event =  this.item[0].claims.P2.event;
    this.sources = this.item[0].claims.P2.sources;
    this.main = this.item[0].claims.P2.main;

    this.urlId = this.factGridUrl+this.id;

    console.log(this.item);
  
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
    
     if(this.item[0].claims.P2.place !== undefined) {
     this.placeDisplay.setPlaceDisplay(this.item,this.locationAndSituation); }

    ///person

    //person: life and family
    
    this.lifeAndFamily = []

    if(this.item[0].claims.P2.person !== undefined) {
      this.personDisplay.setPersonDisplay(this.item,this.lifeAndFamily);
          }

    //person:education

   this.education = [];

   if(this.item[0].claims.P2.person !== undefined) {
    this.educationDisplay.setEducationDisplay(this.item,this.education);
   if (this.education.length > 0) { this.training = this.item[0].claims.P2.training ; this.isTraining = true }
   }

    //person:career and activities
    
    this.careerAndActivities = [];

    if(this.item[0].claims.P2.person !== undefined) {
      this.careerDisplay.setCareerDisplay(this.item,this.careerAndActivities);
      if (this.careerAndActivities.length > 0) {  this.career = this.item[0].claims.P2.career ; this.isCareer = true };
     }

    //person: sociability and culture

  this.sociabilityAndCulture = [];

  if(this.item[0].claims.P2.person !== undefined) {
    this.sociabilityDisplay.setSociabilityDisplay(this.item,this.sociabilityAndCulture);
   if (this.sociabilityAndCulture.length > 0) {  this.sociability = this.item[0].claims.P2.sociability ; 
    this.isSociability = true}
   }

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

if(this.item[0].claims.P2.org !== undefined) {
  this.orgDisplay.setOrgDisplay(this.item,this.locationAndContext); 
  console.log(this.orgDisplay.setOrgDisplay(this.item,this.locationAndContext));
}
  
  ///activity

  this.activityDetail = [];
  
  if(this.item[0].claims.P2.activity !== undefined) {
    this.activityDisplay.setActivityDisplay(this.item,this.activityDetail); 
    if (this.activityDetail.length > 0) {  this.isActivity = true};
  }

  ///event

  this.eventDetail = [];

  if(this.item[0].claims.P2.event !== undefined) {
    this.eventDisplay.setEventDisplay(this.item,this.eventDetail); 
    if (this.eventDetail.length > 0) { this.isEvent = true };
  
  }

///print publication or document
   
   this.documentDetail = [];

  if(this.item[0].claims.P2.document !== undefined) {
    this.documentDisplay.setDocumentDisplay(this.item,this.documentDetail); 
    ;
  }
  
  ///sources
    
    this.sourcesList =[];
    
    if(this.item[0].claims.P2.sources !== undefined) {
      this.sourcesDisplay.setSourcesDisplay(this.item,this.sourcesList); 
       if (this.sourcesList.length > 0) {  this.isSources = true };
    }

  ///externalLinks

    this.externalLinks = [];
     
    this.externalLinksDisplay.setExternalLinksDisplay(this.item,this.sourcesList); 
                     
    if (this.externalLinks.length > 0) {  this.isExternalLinks = true };  
    
    //mainList
    
    this.mainList= [];
    
    if (this.item[0].claims.P2 ===undefined){  // no definition of instance
      this.mainList.push(this.item[0].claims.P2) };

    this.mainList= this.lifeAndFamily.concat(this.locationAndContext, this.locationAndSituation, this.activityDetail, this.eventDetail, this.documentDetail);
    
    if (this.mainList.length > 0) { 
           this.isMain = true ;
      }

    //others

    this.otherClaims = [];
      
    for (let i=0; i<this.item[1].length; i++){
        let P:string = this.item[1][i];
        this.otherClaims.push(this.item[0].claims[P]); 
      }

    if (this.otherClaims.length > 0) {  this.other = this.item[0].claims.P2.other ; 
                                        this.isOther = true };

    //wikis

    this.wikis = [];

     this.wikiDisplay.setWikiDisplay(this.item,this.wikis); 
       if (this.wikis.length > 0) {   this.isWikis = true };

        
    //spinner
        this.isSpinner = false;

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




  

    
         
                        