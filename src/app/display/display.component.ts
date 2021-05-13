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
import { Router }   from '@angular/router';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'display-component',
  templateUrl: 'display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit, OnDestroy {
  
  constructor(private router:Router, private route:ActivatedRoute, private setData:SetDataService, private setList:SetSelectedItemsListService, private changeDetector:ChangeDetectorRef, 
    private backList:BackListService, private backList2:BackListService, private backListDetails:BackListDetailsService, private headerDisplay:HeaderDisplayService, private placeDisplay:PlaceDisplayService, private orgDisplay:OrgDisplayService,private documentDisplay:DocumentDisplayService,private activityDisplay:ActivityDisplayService,
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
  linkedItems2:any[];//backList2 (english)
  linkedItem:any //backList
  id:string = "";
  factGridUrl:string;
  urlId:string;
  label:string;
  description:string;
  aliases:string[];
  
  //="https://upload.wikimedia.org/wikipedia/commons/b/b6/FactGrid-Logo4.png";
  map:any;
  coords:any = undefined;
  latitude:number;
  longitude:number;
 // lat:string;
 // lng:string;
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
  listTitle:string;
  
  list:any[]=[];

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
  isPlace:boolean = false;

onClick2(query){ //handling click for sparql query
 query = this.setData.sparqlToDisplay(query);
  console.log(query);
  query.subscribe(res => { if (res !== undefined){
    if(res.results !== undefined){
        this.list=res.results.bindings;  
          for(let i=0;i<this.list.length;i++){
             this.list[i]["item"].id = this.list[i]["item"].value.replace(	
            "https://database.factgrid.de/entity/", "")      
        }
        console.log(this.list);
        this.isList = true
        console.log(this.isList);
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
  this.list=[];
  this.isList = false;
  
  if(this.list !== []){ this.isList = true };

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
  if(this.selectedLang === "fr") {this.clickToDownload = "cliquez pour télécharger"};

  this.subscription0 = this.route.paramMap.subscribe(   
    params => { this.itemId = params.get('id'),
      this.subscription1 = this.backList.backList(this.itemId,this.selectedLang). //handle backList
      pipe(
      map(res=> { 
      if (res[0].query !== undefined) {
      this.linkedItems= this.backListDetails.setBackList(res[0].query.pages) }
      if ( res[0].query === undefined ) {
        if (this.selectedLang === "de"){
        this.linkedItems = [{id:"Q21898", label:"keine"}]};
        if (this.selectedLang === "fr"){
          this.linkedItems = [{id:"Q21898", label:"aucune"}]};
        if (this.selectedLang === "en"){
            this.linkedItems = [{id:"Q21898", label:"none"}]};
         }})).
      subscribe(res =>{ this.linkedItems }
        ),
      this.subscription2 = this.backList.backList(this.itemId,this.selectedLang). //labels in English in the backList
        pipe(
        map(res=> { 
        if (res[1].query !== undefined) {
        this.linkedItems2= this.backListDetails.setBackList(res[1].query.pages);
        for (let i=0; i < this.linkedItems.length; i++){
          if(this.linkedItems[i].label ===""){ this.linkedItems[i].label= this.linkedItems2[i].label
            } 
           }
          }
         }
        )).
        subscribe(res =>{ this.linkedItems }
          );

  this.data = this.setData.itemToDisplay(this.itemId)   //handle item
  this.subscription3= this.data.subscribe(item=>{
    this.isMain=false;
    this.isOther=false;
    if (item !==undefined){
    this.item = item;
    this.setList.addToSelectedItemsList(item[0]);  //handle list of selected items
    if(this.item[0].claims.P2 === undefined){ alert("property P2 undefined")};
    if(this.item[0].claims.P320 === undefined) { this.hideList()};
 //   if (this.item[0].claims.P2 !== undefined) {
    this.event =  this.item[0].claims.P2.event;
    this.sources = this.item[0].claims.P2.sources;
    this.listTitle = this.item[0].claims.P2.listTitle;
    this.main = this.item[0].claims.P2.main;
 // }
    this.urlId = this.factGridUrl+this.id;
    if (this.item[0].claims.P48 !== undefined) {
    this.coords = this.item[0].claims.P48[0].mainsnak.datavalue.value;
   //map 
    this.latitude= this.item[0].claims.P48[0].mainsnak.datavalue.value.latitude;
    this.longitude =this.item[0].claims.P48[0].mainsnak.datavalue.value.longitude;
    let lat = this.latitude.toString(); let lng = this.longitude;
    this.router.navigate([lat, lng], { relativeTo:this.route });
    }
    
    this.selectedItemsList = JSON.parse(localStorage.getItem('selectedItems'));
   
    ///header

    this.id = this.item[0].id;
    this.label = this.item[0].label;
    this.description = this.item[0].description;
    this.aliases = this.item[0].aliases;

    this.headerDetail = [];

    this.headerDisplay.setHeaderDisplay(this.item,this.headerDetail); 

 //  if (this.item[0].claims.P2 !== undefined) {
   
    ///place

    this.locationAndSituation =[];
    
     if(this.item[0].claims.P2.place !== undefined) {
     this.placeDisplay.setPlaceDisplay(this.item,this.locationAndSituation); }

     if (this.locationAndSituation.length > 0) {  this.isPlace = true};

    ///person

    //person: life and family
    
    this.lifeAndFamily = []

    if(this.item[0].claims.P2.person !== undefined) {
      this.personDisplay.setPersonDisplay(this.item,this.lifeAndFamily);
          }

    //person:education

   this.education = [];
   this.training= "";

   if(this.item[0].claims.P2.person !== undefined) {
    this.educationDisplay.setEducationDisplay(this.item,this.education);
   if (this.education.length > 0) { this.training = this.item[0].claims.P2.training ; this.isTraining = true }
   }

    //person:career and activities
    
    this.careerAndActivities = [];
    this.career = "";

    if(this.item[0].claims.P2.person !== undefined) {
      this.careerDisplay.setCareerDisplay(this.item,this.careerAndActivities);
      if (this.careerAndActivities.length > 0) {  this.career = this.item[0].claims.P2.career ; this.isCareer = true };
     }

    //person: sociability and culture

  this.sociabilityAndCulture = [];
  this.sociability = "";

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
 //   if (this.locationAndContext.length > 0) {  this.isOrg = true};
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

//  }

  ///externalLinks

    this.externalLinks = [];
     
    this.externalLinksDisplay.setExternalLinksDisplay(this.item,this.externalLinks); 
                     
    if (this.externalLinks.length > 0) {  this.isExternalLinks = true };  

  //others

    this.otherClaims = [];

       console.log(this.item[1]);
      
       for (let i=0; i<this.item[1].length; i++){
           let P:string = this.item[1][i];
           this.otherClaims.push(this.item[0].claims[P]); 
         }
       
      console.log(this.otherClaims);
   
       if (this.otherClaims.length > 0) {  this.other = this.item[0].claims.P2.other ; 
                                           this.isOther = true
                                              };

       console.log(this.other);
       console.log(this.isOther);

    
    //mainList
    
    this.mainList= [];
    
    if (this.item[0].claims.P2 ===undefined){  // no definition of instance
      this.mainList.push(this.item[0].claims.P3) };

    if (this.item[0].claims.P2 !== undefined){
    this.mainList= this.lifeAndFamily.concat(this.locationAndContext, this.locationAndSituation, this.activityDetail, 
      this.eventDetail, this.documentDetail
      , this.otherClaims
      ); }

    console.log(this.mainList.length);
    
    if (this.mainList.length > 0) { 
           this.isMain = true ;
      }

    console.log(this.mainList);

    //wikis

    this.wikis = [];

     this.wikiDisplay.setWikiDisplay(this.item,this.wikis); 
       if (this.wikis.length > 0) {   this.isWikis = true };
                                          }
    //spinner
        this.isSpinner = false;
         }
   //     }
   
       
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

 hideList(){
     if (document.getElementById("listing") != null) {  
       document.getElementById("listing").style.visibility = 'hidden';
      }
    }
 
  ngOnDestroy(): void {
   this.subscription0.unsubscribe();
   this.subscription1.unsubscribe();
 //  this.subscription2.unsubscribe();
   this.subscription3.unsubscribe();
  }
}
