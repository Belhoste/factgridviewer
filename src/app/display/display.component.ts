import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewChecked, AfterViewInit, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { Observable, Subscription, Subject, isObservable, BehaviorSubject, from, forkJoin, of, EMPTY, timer, combineLatest, delay } from 'rxjs';
import {  switchMap, tap, takeUntil, take } from 'rxjs/operators';
import { RequestService } from '../services/request.service'
import { map } from 'rxjs/operators';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { BackListDetailsService } from '../services/back-list-details.service';
import { ItemSparqlService } from '../services/item-sparql.service';
import { HeaderDisplayService } from './services/header-display.service';
import { PlaceDisplayService } from './services/place-display.service';
import { OrgDisplayService } from './services/org-display.service';
import { DocumentDisplayService } from './services/document-display.service';
import { ActivityDisplayService } from './services/activity-display.service';
import { EducationDisplayService } from './services/education-display.service';
import { PersonDisplayService } from './services/person-display.service';
import { CareerDisplayService } from './services/career-display.service';
import { SociabilityDisplayService } from './services/sociability-display.service';
import { SourcesDisplayService } from './services/sources-display.service';
import { TechnicalitiesDisplayService } from './services/technicalities-display.service';
import { EventDisplayService } from './services/event-display.service';
import { ExternalLinksDisplayService } from './services/external-links-display.service';
import { IframesDisplayService } from './services/iframes-display.service';
import { WikiDisplayService } from './services/wiki-display.service';
import { SetDataService } from '../services/set-data.service'
import { TranscriptDisplayService } from '../services/transcript-display.service';
import { BackListService } from '../services/back-list.service';
import { SetSelectedItemsListService } from '../services/set-selected-items-list.service';
import { TranscriptionService } from './services/transcription.service'
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { UnitPipe } from '../unit.pipe';
import { JoinPipe } from '../join.pipe';
import { ItemInfoComponent } from './item-info/item-info.component';
import { HeaderDisplayComponent } from './header-display/header-display.component';
import { CareerDisplayComponent } from './career-display/career-display.component';
import { MainDisplayComponent } from './main-display/main-display.component';
import { EducationDisplayComponent } from './education-display/education-display.component';
import { SociabilityDisplayComponent } from './sociability-display/sociability-display.component';
import { SourcesDisplayComponent } from './sources-display/sources-display.component';
import { Sparql0DisplayComponent } from './sparql0-display/sparql0-display.component';
import { Sparql1DisplayComponent } from './sparql1-display/sparql1-display.component';
import { Sparql2DisplayComponent } from './sparql2-display/sparql2-display.component';
import { Sparql3DisplayComponent } from './sparql3-display/sparql3-display.component';
import { IframesDisplayComponent } from './iframes-display/iframes-display.component';
import { TextDisplayComponent } from './text-display/text-display.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf, NgFor, NgClass, NgStyle, AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SelectedLangService } from '../selected-lang.service';
import { MatTabsModule} from '@angular/material/tabs';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-display',
    templateUrl: 'display.component.html',
    styleUrls: ['./display.component.scss'],
 //  changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
  imports: [CommonModule, MatTabsModule, MatButtonModule, RouterLink, NgIf, MatProgressSpinnerModule, MatSidenavModule, MatIconModule, MatCardModule, NgFor, NgClass, RouterOutlet, NgStyle, TextDisplayComponent,
    Sparql0DisplayComponent, Sparql1DisplayComponent, Sparql2DisplayComponent,Sparql3DisplayComponent,
    ItemInfoComponent, MainDisplayComponent, HeaderDisplayComponent, SociabilityDisplayComponent, SourcesDisplayComponent, EducationDisplayComponent, CareerDisplayComponent, IframesDisplayComponent, AsyncPipe, JoinPipe, UnitPipe]      
          
})

export class DisplayComponent implements OnInit, AfterViewInit, OnDestroy {
  private lang = inject(SelectedLangService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private setData = inject(SetDataService);
  private request = inject(RequestService);
  private setList = inject(SetSelectedItemsListService);
  private changeDetector = inject(ChangeDetectorRef);
  private backList = inject(BackListService);
  private backList2 = inject(BackListService);
  private backListDetails = inject(BackListDetailsService);
  private itemSparql = inject(ItemSparqlService);
  private headerDisplay = inject(HeaderDisplayService);
  private placeDisplay = inject(PlaceDisplayService);
  private orgDisplay = inject(OrgDisplayService);
  private documentDisplay = inject(DocumentDisplayService);
  private activityDisplay = inject(ActivityDisplayService);
  private personDisplay = inject(PersonDisplayService);
  private educationDisplay = inject(EducationDisplayService);
  private careerDisplay = inject(CareerDisplayService);
  private sociabilityDisplay = inject(SociabilityDisplayService);
  private sourcesDisplay = inject(SourcesDisplayService);
  private technicalitiesDisplay = inject(TechnicalitiesDisplayService);
  private eventDisplay = inject(EventDisplayService);
  private changeTranscript = inject(TranscriptionService);
  private transcript = inject(TranscriptDisplayService);
  private externalLinksDisplay = inject(ExternalLinksDisplayService);
  private iframesDisplay = inject(IframesDisplayService);
  private wikiDisplay = inject(WikiDisplayService);
  private sanitizer = inject(DomSanitizer);
  private observer = inject(BreakpointObserver);


    //iframe
  urlSafe1: SafeResourceUrl;
  urlSafe2: SafeResourceUrl;
  urlSafe3: SafeResourceUrl;
  urlSafe4: SafeResourceUrl;
  urlSafe5: SafeResourceUrl;
  urlSafe6: SafeResourceUrl;
  urlSafe7: SafeResourceUrl;
  urlSafe8: SafeResourceUrl;
  urlSafe9: SafeResourceUrl;
  urlSafe10: SafeResourceUrl;
  urlSafe11:SafeResourceUrl;
  urlSafe12:SafeResourceUrl;
  urlSafe13:SafeResourceUrl;
  urlSafe14:SafeResourceUrl;
  urlSafe15:SafeResourceUrl;


 //vdisplayedColumns: string[] = ['property', 'statement'];
  

  // transcription

  transcription;
  trans;
  

  //tree
  stemma_url: SafeResourceUrl;
  familyTree_url: SafeResourceUrl;

  unsafeUrls: any[][];
  iframesNumber: any;


  instancesList:any[]; // for info
  subclassesList: any[]; // for info
  classesList: any[]; // for info
  natureOfList: any[]; // for info and sparql
  classIds: any[]; // for info

  placeType: string = "";

  sparqlQuery: any[];

  sparqlList: Observable<any>[];
  sparqlEssay: Observable<[]>;

  sparqlData: any[]; //data from a sparql query
  sparqlData0: any[]; //data from a sparql query
  sparqlData1: any[]//data from a sparql query
  sparqlData2: any[] // data from a sparql query
  sparqlData3: any[] // data from a sparql query

  sparqlSubject: string; //id of the property to which the sparql is related
  sparqlSubject0: string; //id of the property to which the sparql is related
  sparqlSubject1: string; //id of the property to which the sparql is related
  sparqlSubject2: string; //id of the property to which the sparql is related
  sparqlSubject3: string; //id of the property to which the sparql is related

  zoom: number //define the zoom for the map
  
  query1: Observable<any> | undefined; //sparql query
  query2: Observable<any> | undefined; //sparql query
  subclassesListQuery:Observable<any> | undefined; //sparql query for list of subclasses
  instancesListQuery:Observable<any> | undefined; //sparql query for list of instances
  classesListQuery:Observable<any> | undefined; // sparql query for list of classes
  infoList:Observable<any>

  data: Observable<any>; //for routing
  itemId; //for routing
  itemObject;//for routing

  isSpinner: boolean = false;
  clickedArray: string[] = ["", "", ""];

  selectedItemsList: Observable<any>;

  subscription0: Subscription;
  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription | undefined;
  subscription4: Subscription | undefined;
  subscription5: Subscription | undefined;
  subscription6: Subscription | undefined;
  subscription7: Subscription | undefined;

  //selectedLang: string = (localStorage['selectedLang'] === undefined) ? "en" : localStorage['selectedLang'];

  newSearch: string = "new search";
  linkedPagesTitle: string = "linked pages";
  mainPage: string = "main page";
  externalLinksTitle: string = "External links";
  formerVisitsTitle: string = "you have visited:";
  factGridQuery: string = "FactGrid query";
  clickToDisplay: string = "click to display";
  clickToDownload: string = "click to download";
  stemma: string = "stemma";

  bearingFamilyName: string;

  selectedItems: any[] 

  factGridLogo: string = 'https://upload.wikimedia.org/wikipedia/commons/b/b6/FactGrid-Logo4.png';

  item: any[];
  claims:any //claims of the item
  linkedItems: any[]; //backList
  linkedItems2: any[];//backList2 (english)
  linkedItem: any //backList
  id: string = "";
  factGridUrl: string;
  urlId: string;
  label: string;
  description: string;
  aliases: string[];
  natureOf: string ="";
  classId:string="";

  //="https://upload.wikimedia.org/wikipedia/commons/b/b6/FactGrid-Logo4.png";
  map: any;
  coords: any = undefined;
  latitude: number;
  longitude: number;
  // lat:string;
  // lng:string;
  main: string;
  training: string;
  career: string;
  sociability: string;
  place: string;
  org: string;
  activity: string;
  event: string;
  sources: string;
  other: string;
  publication: string;
  mainTitle:string;
  listTitle: string;
  list: any[] = [];
//  sparqlList:any[];
  superClass:string;

  //wiki

  commonswiki: any;
  dewiki: any;
  enwiki: any;
  frwiki: any;
  eswiki: any;
  nlwiki: any;
  itwiki: any;
  wikidatawiki: any;
  wikis: any[];

  wikiCommons: string;

  // arrays to display the properties
  headerDetail: any[];//for header
  lifeAndFamily: any[];//for persons
  education: any[];
  careerAndActivities: any[];
  sociabilityAndCulture: any[];
  locationAndSituation: any[]; // for places
  technicalities: any[]; // for technicalities
  activityDetail: any[]; //for activities
  eventDetail: any[]; //for events
  documentDetail: any[];//for print publications
  sourcesList: any[]; //for sources
  externalLinks: any[];
  iframes: any[];
  otherClaims: any[];
  locationAndContext: any[]; //for organisations, societies and institutions
  mainList: any[]; //main list for persons, places, organisations
  pictures: any[];//for pictures
  info:any[]; //for info

  //display the elements
  isMain: boolean = false;
  isExternalLinks: boolean = false;
  isWikis: boolean = false;
  isPicture: boolean = false;
  isTopPicture: boolean = false;
  isTraining: boolean = false;
  isCareer: boolean = false;
  isSociability: boolean = false;
  isOther: boolean = false;
  isSources: boolean = false;
  isActivity: boolean = false;
  isEvent: boolean = false;
  isList: boolean = false;
  isPlace: boolean = false;
  isIframes: boolean = false;
  isStemma: boolean = false;
  isFamilyTree: boolean = false;
  isSparql0: boolean = false;
  isSparql1: boolean = false;
  isSparql2: boolean = false;
  isSparql3: boolean = false;
  isTranscription:boolean = false;
  isInfo: boolean = false;
  isMobile: boolean = false;
  isAliases: boolean = false;

  onClick2(query) { //handling click for sparql query (it is not used for the moment)
    query = this.request.getList(query).pipe(map(res => this.listFromSparql(res)));
    if(query.includes("item")){
    query.subscribe(res => {
      if (res !== undefined) {
        if (res.results !== undefined) {
          this.list = res.results.bindings;
          for (let i = 0; i < this.list.length; i++) {
            this.list[i]["item"].id = this.list[i]["item"].value.replace(
              "https://database.factgrid.de/entity/", "")
            if (this.list[i]["itemDescription"] === undefined) this.list[i]["itemDescription"] = { value: "" }
          }
          this.isList = true
        }
      }
      
      this.isList = true;
    }
   )
  }
  }

  onClick3(query) { //handling click for sparql query (download)
    query = this.newSparqlAddress(query);
    this.request.downLoadList(query)
  }

  onClick4() { 
    
    this.isInfo = true;    //handling click for info (unfold)
    ;
  }

  onClick5() { 
    
    this.isInfo = false;    //handling click for info (fold)
    ;
  }

  openImage(image){ //handling click for picture (open in new tab) 
    window.open(image);
  }

  setItemId(event) {
    this.itemObject = event
  }



  ngOnInit(): void {

    this.isSpinner = true ;

    this.list = [];
    this.isList = false;
    this.sparqlQuery = [];
    this.sparqlData0 = [];
    this.sparqlData1 = [];
    this.sparqlData2 = [];
    this.sparqlData3 = [];
    this.sparqlSubject0 = "";
    this.sparqlSubject1 = "";
    this.sparqlSubject2 = "";
    this.sparqlSubject3 = "";
    this.trans = "";
    
    this.instancesList = [];
    this.subclassesList = [];
    this.classesList = [];
    this.natureOfList = [];
    this.superClass = "";

    this.newSearch = this.lang.newSearch(this.newSearch);
    this.linkedPagesTitle = this.lang.linkedPagesTitle(this.linkedPagesTitle);
    this.mainPage = this.lang.mainPage(this.mainPage);
    this.factGridQuery = this.lang.factGridQuery(this.factGridQuery);
    this.externalLinksTitle = this.lang.externalLinksTitle(this.externalLinksTitle);
    this.formerVisitsTitle = this.lang.formerVisitsTitle(this.formerVisitsTitle);
    this.clickToDownload = this.lang.clickToDownload(this.clickToDownload);
    this.clickToDisplay = this.lang.clickToDisplay(this.clickToDisplay);
    this.stemma = this.lang.stemma(this.stemma);
  
    this.subscription0 = this.route.paramMap.subscribe(
      params => {
        this.itemId = params.get('id'),
        this.subscription1 = this.backList.backList(this.itemId, this.lang.selectedLang). //handle backList
          pipe(
            map(res => {
              if (res[0].query !== undefined) {
                this.linkedItems = this.backListDetails.setBackList(res[0].query.pages)
              }
              if (res[0].query === undefined) {
                if (this.lang.selectedLang === "de") {
                  this.linkedItems = [{ id: "Q21898", label: "keine" }]
                };
                if (this.lang.selectedLang === "fr") {
                  this.linkedItems = [{ id: "Q21898", label: "aucune" }]
                };
                if (this.lang.selectedLang === "en") {
                  this.linkedItems = [{ id: "Q21898", label: "none" }]
                };
                if (this.lang.selectedLang === "es") {
                  this.linkedItems = [{ id: "Q21898", label: "ninguno" }]
                };
                if (this.lang.selectedLang === "hu") {
                  this.linkedItems = [{ id: "Q21898", label: "nincs" }]
                };
                if (this.lang.selectedLang === "it") {
                  this.linkedItems = [{ id: "Q21898", label: "nessuno" }]
                };
              }
            })).
          subscribe(res => { this.linkedItems }
          ),
        this.subscription2 = this.backList.backList(this.itemId, this.lang.selectedLang). //labels in English in the backList
          pipe(
            map(res => {
              if (res[1].query !== undefined) {
                this.linkedItems2 = this.backListDetails.setBackList(res[1].query.pages);
                if (this.linkedItems !== undefined) {
                  for (let i = 0; i < this.linkedItems.length; i++) {
                    if (this.linkedItems[i].label === "") {
                      this.linkedItems[i].label = this.linkedItems2[i].label
                    }
                  }
                }
              }
            }
            )).
          subscribe(res => { this.linkedItems }
          );
        this.data = this.setData.itemToDisplay(this.itemId); //handle item
        this.subscription2 = this.data.subscribe(item => {

          this.isMain = false;
          this.isOther = false;
          this.isPicture = false;
          this.isSparql1 = false;
          this.isSparql2 = false;
          this.isSparql0 = false;
          this.isSources = false;
          this.isTraining = false;
          this.isCareer = false;
          this.isFamilyTree = false;
          this.isSociability = false;
          this.isIframes = false;
          this.isActivity = false;
          this.isWikis = false;
          this.isExternalLinks = false;
          this.isInfo = false;
          if (item !== undefined) {
            this.item = item;
            this.claims = item[0].claims;
            console.log(item)
            this.setList.addToSelectedItemsList(item[0]);  //handle list of selected items
            if (this.claims.P2 === undefined) { alert("property P2 undefined") };
            if (this.claims.P320 === undefined) { this.hideList() };
            this.superClass = "";
            this.natureOf = this.claims.P2[0].mainsnak.datavalue.value.id;
            this.event = this.claims.P2.event;
            this.listTitle = this.claims.P2.listTitle;
            this.main = this.claims.P2.main;
            if (this.mainTitle == "Humain") { this.mainTitle = "Personne" };
            if (this.claims.P2[0].mainsnak.datavalue.value.id === "Q37073" ||
              this.claims.P2[0].mainsnak.datavalue.value.id === "Q257052") { this.mainTitle = this.lang.activity(this.mainTitle) };
            this.urlId = this.factGridUrl + this.id;

      // ************************************************** map ************************************

            if (this.claims.P48 !== undefined) {
              this.zoom = 12;
              let xy = this.claims.P2[0].mainsnak.datavalue.value.id;
              if (xy == "Q176131") { this.zoom = 3 };
              if (xy == "Q21925") { this.zoom = 4 };
              if (xy == "Q21876") { this.zoom = 6 }
              if (xy == "Q16200") { this.zoom = 18 };
              if (xy == "Q266101" || xy == "Q469609" || xy == "Q172249" || xy == "Q36239" || xy == "Q164328" || xy == "Q36251" || xy == "Q141472" || xy == "Q395380" || xy == "Q375357") { this.zoom = 16 }
              this.coords = this.claims.P48[0].mainsnak.datavalue.value;
              this.latitude = this.claims.P48[0].mainsnak.datavalue.value.latitude;
              this.longitude = this.claims.P48[0].mainsnak.datavalue.value.longitude;
              this.router.navigate([this.latitude, this.longitude, this.zoom], { relativeTo: this.route });
            }

            // ******************************** end of map *******************************

            this.selectedItemsList = JSON.parse(localStorage.getItem('selectedItems'));


            /************************************** sparql ********************************************************************** */
       

              this.item[0].sparql.subscribe(res => this.sparqlDisplay(res));



            //  ****************************info lists *********************************************

            if (this.item[0].infoList !== undefined) {

              this.instancesList = this.item[0].infoList[0];
              this.subclassesList = this.item[0].infoList[1];
              this.classesList = this.item[0].infoList[2];
              this.natureOfList = this.item[0].infoList[3];
            }

            if (this.classesList.length !== undefined || this.subclassesList.length !== undefined || this.instancesList.length !== undefined) { this.isInfo = true };

            /************************************** header ********************************************************************** */
            ///header

            this.id = this.item[0].id;
            this.label = this.item[0].label;
            this.description = this.item[0].description;
            this.aliases = this.item[0].aliases;
            if (this.aliases) { this.isAliases === true };
            this.headerDetail = [];

            this.headerDisplay.setHeaderDisplay(this.item, this.headerDetail);

            //  if (this.item[0].claims.P2 !== undefined) {

            ///place

            this.locationAndSituation = [];

            if (this.claims.P2.place !== undefined) {
              this.placeDisplay.setPlaceDisplay(this.item, this.locationAndSituation);
            }

            if (this.locationAndSituation.length > 0) { this.isPlace = true };

            //person: life and family

            this.lifeAndFamily = []

            if (this.claims.P2.person !== undefined) {
              this.personDisplay.setPersonDisplay(this.item, this.lifeAndFamily);
            }

            //person:education

            this.education = [];
            this.training = "";

            if (this.claims.P2.person !== undefined) {
              this.educationDisplay.setEducationDisplay(this.item, this.education);
              if (this.education.length > 0) { this.training = this.claims.P2.training; this.isTraining = true };
            }

            //person:career and activities

            this.careerAndActivities = [];
            this.career = "";
            if (this.claims.P2.person !== undefined) {
              this.careerDisplay.setCareerDisplay(this.item, this.careerAndActivities);
              if (this.careerAndActivities.length > 0) {
                this.career = this.claims.P2.career;
                this.isCareer = true
              };
            }

            //person: sociability and culture

            this.sociabilityAndCulture = [];
            this.sociability = "";
            if (this.claims.P2.person !== undefined) {
              this.sociabilityDisplay.setSociabilityDisplay(this.item, this.sociabilityAndCulture);
              if (this.sociabilityAndCulture.length > 0) {
                this.sociability = this.claims.P2.sociability;
                this.isSociability = true
              }
            }
               
        ///pictures

            this.pictures = [];

            if (this.item[0].claims.P189 !== undefined) { //pictures media commons
              this.item[1].splice(this.item[1].indexOf("P189"), 1);
              this.pictures = this.claims.P189
            }

            if (this.pictures !== undefined) {
              this.isPicture = true;

              this.observer.observe([Breakpoints.HandsetPortrait]).subscribe(result => { //breakpoint
                const breakpoints = result.breakpoints;
                if (result.matches) { this.isMobile = true }
                if (this.isMobile === true) { this.isTopPicture = true; this.isPicture = false; }
              });
            };
             
            ///org

            this.locationAndContext = [];

            if (this.claims.P2.org !== undefined) {
              this.orgDisplay.setOrgDisplay(this.item, this.locationAndContext);
            }

            ///activity

            this.activityDetail = [];

            if (this.claims.P2.activity !== undefined) {
              this.activityDisplay.setActivityDisplay(this.item, this.activityDetail);
              if (this.activityDetail.length > 0) { this.isActivity = true };
            }

            ///event

            this.eventDetail = [];

            if (this.claims.P2.event !== undefined) {
              this.eventDisplay.setEventDisplay(this.item, this.eventDetail);
              if (this.eventDetail.length > 0) { this.isEvent = true };

            }

            ///print publication or document

            this.documentDetail = [];

            if (this.claims.P2.document !== undefined) {
              this.documentDisplay.setDocumentDisplay(this.item, this.documentDetail);
              ;
            }        

            ///sources

            this.sourcesList = [];

            if (this.claims.P2.sources !== undefined) {
              this.sourcesDisplay.setSourcesDisplay(this.item, this.sourcesList);
              if (this.sourcesList.length > 0) {
                this.sources = this.item[0].claims.P2.sources;
                this.isSources = true };
            }

            ///technicalities

            this.technicalities = [];
         
              this.technicalitiesDisplay.setTechnicalitiesDisplay(this.item, this.technicalities);

            ///iframes


            this.iframes = []; //list of iframes

            this.iframesDisplay.setIframesDisplay(this.item, this.iframes); // to prevent display of the sparql queries and to populate the array iframe

            if (this.iframes.length > 0) { this.isIframes = true };

            if (this.claims.P309 !== undefined) {
              if (this.claims.P309[0] !== undefined) {  this.urlSafe1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P309[0].mainsnak.datavalue.value);}            
              if (this.claims.P309[1] !== undefined) {  this.urlSafe2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P309[1].mainsnak.datavalue.value); }
              if (this.claims.P309[2] !== undefined) { this.urlSafe3 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P309[2].mainsnak.datavalue.value);}
            }

            if (this.claims.P320 !== undefined) {
              if (this.claims.P320[0] !== undefined) {  this.urlSafe4 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P320[0].mainsnak.datavalue.value);}
              if (this.claims.P320[1] !== undefined) { this.urlSafe5 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P320[1].mainsnak.datavalue.value);}
              if (this.claims.P320[2] !== undefined) { this.urlSafe6 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P320[2].mainsnak.datavalue.value); }
            }

            if (this.claims.P679 !== undefined) {
              if (this.item[0].claims.P679[0] !== undefined) { this.urlSafe7 = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframesDisplay.setHouseNumbersQuery(this.item[0].claims.P679[0].mainsnak.datavalue.value));}
              if (this.item[0].claims.P679[1] !== undefined) { this.urlSafe8 = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframesDisplay.setHouseNumbersQuery(this.item[0].claims.P679[1].mainsnak.datavalue.value)); }
              if (this.item[0].claims.P679[2] !== undefined) { this.urlSafe9 = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframesDisplay.setHouseNumbersQuery(this.item[0].claims.P679[2].mainsnak.datavalue.value)); }
            }

            if (this.claims.P693 !== undefined) {
              if (this.claims.P693[0] !== undefined){ this.urlSafe10 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P693[0].mainsnak.datavalue.value);}
              if (this.claims.P693[1] !== undefined){ this.urlSafe11 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P693[1].mainsnak.datavalue.value);}
              if (this.claims.P693[2] !== undefined){ this.urlSafe12 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P693[2].mainsnak.datavalue.value);}
            }

            if (this.claims.P720 !== undefined) {
              if (this.claims.P720[0] !== undefined) {  this.urlSafe13 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P720[0].mainsnak.datavalue.value);}
              if (this.claims.P720[1] !== undefined) { this.urlSafe14 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P720[1].mainsnak.datavalue.value);}
              if (this.claims.P720[2] !== undefined) { this.urlSafe15 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P720[2].mainsnak.datavalue.value); }
            }

            ///externalLinks

            this.externalLinks = [];

            this.externalLinksDisplay.setExternalLinksDisplay(this.item, this.externalLinks);

            if (this.externalLinks.length > 0) { this.isExternalLinks = true };

            //others

            this.otherClaims = [];

            for (let i = 0; i < this.item[1].length; i++) {
              let P: string = this.item[1][i];
              this.otherClaims.push(this.claims[P]);
            }

            if (this.otherClaims.length > 0) {
              this.other = this.item[0].claims.P2.other;
              this.isOther = true
            };

            //mainList   : list containing the main data

            this.mainList = [];

            if (this.claims.P2 === undefined) {  // no definition of instance
              this.mainList.push(this.claims.P3)
            };

            if (this.claims.P2 !== undefined) {
              this.mainTitle = this.claims.P2[0].mainsnak.label;
              this.mainList = this.lifeAndFamily.concat(this.locationAndContext, this.locationAndSituation, this.activityDetail,
                this.eventDetail, this.documentDetail, this.otherClaims
              );
            }

            if (this.mainList.length > 0) {
              this.isMain = true;
           }

            //wikis

            this.wikis = [];

            this.wikiDisplay.setWikiDisplay(this.item, this.wikis);
            if (this.wikis.length > 0) { this.isWikis = true };
          }

          // transcription
          
         if (this.claims.P251 !== undefined) { 
            if(this.claims.P251[0].mainsnak.datavalue.value !== undefined){
            let a = this.transcript.transcript(this.claims.P251[0].mainsnak.datavalue.value);
            this.subscription3 = a.subscribe(res =>{ 
             Object.keys(res)[0]=="error"? this.trans="no transcription":
             this.trans=res.parse.text;
              this.trans = this.changeTranscript.cleaning(this.trans); 
              }
            )
          }  
        }


        if (this.claims.P251 === undefined) { 
            this.trans="";
        }

          //spinner

          this.isSpinner = false;

          //trees

          //this.stemma_url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.entitree.com/factgrid/" + this.selectedLang + "/" + this.stemma + "/" + item[0].id);
          // this.familyTree_url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.entitree.com/factgrid/" + this.selectedLang + "/1/" + item[0].id);

          if (this.claims.P150 || this.claims.P141 || this.claims.P142) {
            this.isFamilyTree = true;
          }

          if (this.claims.P233) {
            this.isStemma = true;
          }
        }
        )
  
      }
     )
   }

  sparqlDisplay(u) {
       if (u){
         if (u[0]) {
            this.sparqlSubject0 = u[0][0];
           this.sparqlData0 = u[0][1];
            this.isSparql0 = false;
                if (this.sparqlData0 !== undefined) {
                  if(this.sparqlData0[0] !== undefined) {
                      this.isSparql0 = true ;
                  }
               }
        }

         if (u[1] !== undefined) {

           this.sparqlSubject1 = u[1][0];
           this.sparqlData1 = u[1][1];
           console.log(this.sparqlData1);
           this.isSparql1 = false;
               if (this.sparqlData1 !== undefined) {
                  if(this.sparqlData1[0] !== undefined) {
                      this.isSparql1 = true ;
                  }
               }    
        }

        if (u[2] !== undefined) {
           this.sparqlSubject2 = u[2][0];
          this.sparqlData2 = u[2][1];
          this.isSparql2 = false;
          if (this.sparqlData2 !== undefined) {
             if(this.sparqlData2[0] !== undefined) {
                this.isSparql2 = true;
             }
          }          
        }

         if (u[3] !== undefined) {
           this.sparqlSubject3 = u[3][0];
           this.sparqlData3 = u[3][1];
           this.isSparql3 = false
           if (this.sparqlData3 !== undefined) {
             if (this.sparqlData3[0] !== undefined) {
               this.isSparql3 = true;
             }
           }
         } 
    }
   }


  qualifiersList(u) { //setting the list of qualifiers for a mainsnak
    for (let i = 0; i < u.length; i++) {
      if (u["'qualifiers-order'"] !== undefined) {
        let v = u["'qualifiers-order'"]
        for (let j = 0; j < v.length; j++) {
          let label = u.qualifiers.u[j][0].label
          let value = u.qualifiers.u[j][0].datavalue.value
        }
      }
    }
  }

  hideList() {
    if (document.getElementById("listing") != null) {
      document.getElementById("listing").style.visibility = 'hidden';
    }
  }

  newSparqlAddress(address: string): string {

    const newPrefix = "https://database.factgrid.de/sparql?query=";
    let oldPrefix = "https://database.factgrid.de/query/#";
    if (address.includes('embed.html')) { oldPrefix = "https://database.factgrid.de/query/embed.html#" };
    if (address !== undefined) address = address.replace(oldPrefix, newPrefix);
    return address
  }

  listFromSparql(res) {
    if (res !== undefined) {
      if (res.results !== undefined) {
        for (let i = 0; i < res.results.bindings.length; i++) {
          res.results.bindings[i]["item"].id = res.results.bindings[i]["item"].value.replace(
            "https://database.factgrid.de/entity/", "");
        };
      }
    }
    return res.results.bindings
  }

  getUrl(u) { return this.sanitizer.bypassSecurityTrustUrl(u) }

  ngAfterViewInit(): void {
    this.list
  }
  
  ngOnDestroy(): void {
   
    this.subscription0.unsubscribe();
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    if(this.subscription3 !==undefined){this.subscription3.unsubscribe();}
    if (this.subscription4 !== undefined) { this.subscription4.unsubscribe(); }
    if(this.subscription5 !==undefined){this.subscription5.unsubscribe();}
    if(this.subscription6 !==undefined){this.subscription6.unsubscribe();}
    if (this.subscription7 !== undefined) { this.subscription7.unsubscribe(); }
  }
}
