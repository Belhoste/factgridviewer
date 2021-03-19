
import { Component, OnInit, OnDestroy, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription, Subject, from, forkJoin, of, EMPTY } from 'rxjs';
import { tap } from 'rxjs/operators';
import {SetDataService} from '../services/set-data.service'
import {map } from 'rxjs/operators';
import { ActivatedRoute} from '@angular/router';
import { BackListDetailsService } from '../services/back-list-details.service';
import { HeaderDisplayService} from './services/header-display.service';
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
import { BackListService} from '../services/back-list.service';
import {SetSelectedItemsListService} from '../services/set-selected-items-list.service';
//import { Router } from 

@Component({
  selector: 'display-component',
  templateUrl: 'display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit, OnDestroy {
  
  constructor(private route:ActivatedRoute, private setData:SetDataService, private setList:SetSelectedItemsListService, private changeDetector:ChangeDetectorRef, 
    private backList:BackListService, private backListDetails:BackListDetailsService, private headerDisplay:HeaderDisplayService, private placeDisplay:PlaceDisplayService, private orgDisplay:OrgDisplayService,private documentDisplay:DocumentDisplayService,private activityDisplay:ActivityDisplayService,
    private personDisplay:PersonDisplayService, private educationDisplay:EducationDisplayService, private careerDisplay:CareerDisplayService, private sociabilityDisplay:SociabilityDisplayService,
    private sourcesDisplay:SourcesDisplayService, private eventDisplay:EventDisplayService, private externalLinksDisplay:ExternalLinksDisplayService, private wikiDisplay:WikiDisplayService){}

  sparqlQuery

  data:Observable<any>; //for routing
  itemId; //for routing
  itemObject;//for routing
  
  isSpinner:boolean = false;
  clickedArray:string[]=["","",""];
  
  selectedItemsList:Observable<any>;

  subscription0:Subscription;
  subscription1:Subscription;
  subscription2:Subscription;
  subscription3:Subscription;
  subscription4:Subscription;

  selectedLang: string = (localStorage['selectedLang']===undefined)? "en": localStorage['selectedLang'];

  newSearch:string;
  linkedPagesTitle:string;
  mainPage:string;
  externalLinksTitle:string;
  formerVisitsTitle:string;
  clickToDisplay:string;
  clickToDownload:string;

  selectedItems: any[]; 

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

 //wiki

  commonswiki:any;
  dewiki:any;
  enwiki:any;
  frwiki:any;
  wikidatawiki:any;
  wikis:any[];

  wikiCommons:string;

  // arrays to display the properties

  headerDetail:any[];//for header
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
  pictures:any[] ;//for pictures

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

onClick2(query){ //handling click for sparql query
 query = this.setData.sparqlToDisplay(query);
  console.log(query);
  query.subscribe(res => { if (res !== undefined){
    console.log(res);
    if(res.results !== undefined){
        this.list=res.results.bindings;  
          for(let i=0;i<this.list.length;i++){
             this.list[i]["item"].id = this.list[i]["item"].value.replace(	
            "https://database.factgrid.de/entity/", "")      
        }
        console.log(this.list);
      }
    }
    this.isList = true;
     }
  //   this.delayDisplayList();
  )
}


onClick3(query){ //handling click for sparql query (download)
  this.setData.sparqlToDownload(query);
    }

setItemId(event){
  this.itemObject = event
}


 ngOnInit(): void {

  this.isSpinner = true;

  this.newSearch = "new search"
  if(this.selectedLang === "de") {this.newSearch = "neue Suche"};
  if(this.selectedLang === "fr") {this.newSearch = "nouvelle recherche"}

  this.linkedPagesTitle = "linked pages"
  if(this.selectedLang === "de") {this.linkedPagesTitle = "verlinkte Seiten"};
  if(this.selectedLang === "fr") {this.linkedPagesTitle = "pages liées"}

  this.mainPage = "main page"
  if(this.selectedLang === "de") {this.mainPage = "HauptSeite"};
  if(this.selectedLang === "fr") {this.mainPage = "page principale"}

  this.externalLinksTitle = "external links"
  if(this.selectedLang === "de") {this.externalLinksTitle = "externe Links"};
  if(this.selectedLang === "fr") {this.externalLinksTitle = "liens externes"}

  this.formerVisitsTitle = "you have visited"
  if(this.selectedLang === "de") {this.formerVisitsTitle = "Sie haben besucht"};
  if(this.selectedLang === "fr") {this.formerVisitsTitle = "vous avez visité"};

  this.clickToDisplay = "click to display"
  if(this.selectedLang === "de") {this.clickToDisplay = "Klicken Sie zum Anzeigen"};
  if(this.selectedLang === "fr") {this.clickToDisplay = "cliquez pour afficher"}

  this.clickToDownload = "click to download"
  if(this.selectedLang === "de") {this.clickToDownload = "Klicken Sie zum Download"};
  if(this.selectedLang === "fr") {this.clickToDownload = "cliquez pour télécharger"}


  this.subscription0 = this.route.paramMap.subscribe(
    params => { this.itemId = params.get('id'),
      this.subscription2 = this.backList.backList(this.itemId,this.selectedLang). //handle backList
      pipe(
      tap(res => console.log(res)),
      map(res=> { 
      if (res.query !== undefined) {
      this.linkedItems= this.backListDetails.setBackList(res.query.pages) }
      if ( res.query === undefined ) {
        this.linkedItems = [{id:"Q220375", label:"none"}]
         }})).
      subscribe(res =>{ this.linkedItems ; }
        );
  
  console.log(this.list);

  this.data = this.setData.itemToDisplay(this.itemId)
  this.subscription3= this.data.subscribe(item=>{
    console.log(item);
    if (item !==undefined){
    this.item = item;
    this.setList.addToSelectedItemsList(item[0]);
    this.event =  this.item[0].claims.P2.event;
    this.sources = this.item[0].claims.P2.sources;
    this.main = this.item[0].claims.P2.main;
    this.urlId = this.factGridUrl+this.id;
    if (this.item[0].claims.P48 !== undefined) {
    this.coords = this.item[0].claims.P48[0].mainsnak;
    } 
    this.selectedItemsList = JSON.parse(localStorage.getItem('selectedItems'));
    console.log(this.selectedItemsList)
   
    ///header

    this.id = this.item[0].id;
    this.label = this.item[0].label;
    this.description = this.item[0].description;
    this.aliases = this.item[0].aliases;

    this.headerDetail = [];

    this.headerDisplay.setHeaderDisplay(this.item,this.headerDetail); 

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

  ///pictures

  this.pictures =[];

  if (this.item[0].claims.P189 !==undefined){ //pictures
    this.item[1].splice(this.item[1].indexOf("P189"),1);
    this.pictures = this.item[0].claims.P189
  } 
  
  if (this.pictures !==undefined) this.isPicture = true;

  ///org

  this.locationAndContext = [];

  if(this.item[0].claims.P2.org !== undefined) {
    this.orgDisplay.setOrgDisplay(this.item,this.locationAndContext); 
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
     
    this.externalLinksDisplay.setExternalLinksDisplay(this.item,this.externalLinks); 
                     
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

  ngOnDestroy(): void {
   this.subscription0.unsubscribe();
   this.subscription2.unsubscribe();
   this.subscription3.unsubscribe();
  }
}




  

    
         
                        