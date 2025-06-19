import { Component, OnInit, OnDestroy, AfterViewInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { BackListDetailsService } from '../services/back-list-details.service';
import { IframesDisplayService } from './services/iframes-display.service';
import { SetDataService } from '../services/set-data.service';
import { TranscriptDisplayService } from '../services/transcript-display.service';
import { BackListService } from '../services/back-list.service';
import { SetSelectedItemsListService } from '../services/set-selected-items-list.service';
import { TranscriptionService } from './services/transcription.service';
import { DomSanitizer } from '@angular/platform-browser';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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
import { Sparql4DisplayComponent } from './sparql4-display/sparql4-display.component';
import { IframesDisplayComponent } from './iframes-display/iframes-display.component';
import { TextDisplayComponent } from './text-display/text-display.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SelectedLangService } from '../selected-lang.service';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { ItemDisplayDispatcherService } from './services/item-display-dispatcher.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: 'display.component.html',
  styleUrls: ['./display.component.scss'],
  standalone: true,
  imports: [
    CommonModule, MatTabsModule, MatButtonModule, RouterModule, NgIf, MatProgressSpinnerModule, MatSidenavModule,
    MatIconModule, MatCardModule, NgFor, NgClass, TextDisplayComponent, Sparql0DisplayComponent,
    Sparql1DisplayComponent, Sparql2DisplayComponent, Sparql3DisplayComponent, Sparql4DisplayComponent,
    ItemInfoComponent, MainDisplayComponent, HeaderDisplayComponent, SociabilityDisplayComponent,
    SourcesDisplayComponent, EducationDisplayComponent, CareerDisplayComponent, IframesDisplayComponent, JoinPipe
  ]
})
export class DisplayComponent implements OnInit, AfterViewInit, OnDestroy {

  public from: string;

  // Services
  private lang = inject(SelectedLangService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private setData = inject(SetDataService);
  private setList = inject(SetSelectedItemsListService);
  private backList = inject(BackListService);
  private backListDetails = inject(BackListDetailsService);
  private itemDisplayDispatcher = inject(ItemDisplayDispatcherService);
  private changeTranscript = inject(TranscriptionService);
  private transcript = inject(TranscriptDisplayService);
  private iframesDisplay = inject(IframesDisplayService);
  private sanitizer = inject(DomSanitizer);
  private observer = inject(BreakpointObserver);

  // Données principales
  item: any;
  claims: any;
  itemId: string;
  id: string;
  label: string;
  description: string;
  aliases: string[];
  mainTitle: string;
  main: any;
  career: any;
  sociability: any;
  training: any;
  other: any;
  listTitle: string;
  event: any;
  natureOf: any;
  urlId: string;
  linkedItems: any[];
  linkedItems2: any[];
  factGridUrl: string;
  sources: any;
  mainList: any[] = [];
  list: any[] = [];
  selectedItemsList: any;
  wikis: any[] = [];
  pictures: any[] = [];
  sourcesList: any[] = [];
  externalLinks: any[] = [];
  iframes: any[] = [];
  headerDetail: any[] = [];
  education: any[] = [];
  careerAndActivities: any[] = [];
  sociabilityAndCulture: any[] = [];
  locationAndSituation: any[] = [];
  technicalities: any[] = [];
  activityDetail: any[] = [];
  eventDetail: any[] = [];
  documentDetail: any[] = [];
  lifeAndFamily: any[] = [];
  otherClaims: any[] = [];
  locationAndContext: any[] = [];
  info: any[] = [];
  instancesList: any[] = [];
  subclassesList: any[] = [];
  classesList: any[] = [];
  natureOfList: any[] = [];
  selectedItems: any[];
  infoList: any;


  // Affichage
  isSpinner = false;
  isMain = false;
  isExternalLinks = false;
  isWikis = false;
  isPicture = false;
  isTopPicture = false;
  isTraining = false;
  isCareer = false;
  isSociability = false;
  isOther = false;
  isSource = false;
  isActivity = false;
  isDocument = false;
  isEvent = false;
  isList = false;
  isOrg = false;
  isPlace = false;
  isIframes = false;
  isStemma = false;
  isFamilyTree = false;
  isFrames = false;
  isSparql0 = false;
  isSparql1 = false;
  isSparql2 = false;
  isSparql3 = false;
  isSparql4 = false;
  isTechnicality = false;
  isTranscription = false;
  isInfo = false;
  isMobile = false;
  isAliases = false;

  // Divers
  trans: any = '';
  zoom: number;
  latitude: number;
  longitude: number;
  coords: any;
  urlSafe1: string;
  urlSafe2: string;
  urlSafe3: string;
  urlSafe4: string;
  urlSafe5: string;
  urlSafe6: string;
  urlSafe7: string;
  urlSafe8: string;
  urlSafe9: string;
  urlSafe10: string;
  urlSafe11: string;
  urlSafe12: string;
  urlSafe13: string;
  urlSafe14: string;
  urlSafe15: string;

  // SPARQL
  sparqlData0: any[] = [];
  sparqlData1: any[] = [];
  sparqlData2: any[] = [];
  sparqlData3: any[] = [];
  sparqlData4: any[] = [];
  sparqlSubject0: string;
  sparqlSubject1: string;
  sparqlSubject2: string;
  sparqlSubject3: string;
  sparqlSubject4: string;

  // Subscriptions
  subscription0: Subscription;
  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;

  // Textes d’interface
  newSearch: string = "new search";
  linkedPagesTitle: string = "linked pages";
  mainPage: string = "main page";
  externalLinksTitle: string = "External links";
  formerVisitsTitle: string = "you have visited:";
  factGridQuery: string = "FactGrid query";
  clickToDisplay: string = "click to display";
  clickToDownload: string = "click to download";
  stemma: string = "stemma";
  factGridLogo: string = 'https://upload.wikimedia.org/wikipedia/commons/b/b6/FactGrid-Logo4.png';

  ngOnInit(): void {

    const selectedResearchField = localStorage.getItem('selectedResearchField');

    this.from = (selectedResearchField === 'Q10441') ? 'paris' : 'search';

    this.isSpinner = true;
    this.isInfo = false;
    this.newSearch = this.lang.getTranslation('newSearch', this.lang.selectedLang);
    this.linkedPagesTitle = this.lang.getTranslation('linkedPagesTitle', this.lang.selectedLang);
    this.mainPage = this.lang.getTranslation('mainPage', this.lang.selectedLang);
    this.factGridQuery = this.lang.getTranslation('factGridQuery', this.lang.selectedLang);
    this.externalLinksTitle = this.lang.getTranslation('externalLinksTitle', this.lang.selectedLang);
    this.formerVisitsTitle = this.lang.getTranslation('formerVisitsTitle', this.lang.selectedLang);
    this.clickToDownload = this.lang.getTranslation('clickToDownLoad', this.lang.selectedLang);
    this.clickToDisplay = this.lang.getTranslation('clickToDisplay', this.lang.selectedLang);
    this.stemma = this.lang.getTranslation('stemma', this.lang.selectedLang);

    this.subscription0 = this.route.paramMap.subscribe(params => {
      this.itemId = params.get('id');
      this.loadBackList();
      this.loadItem();
    });
  }

  private loadBackList() {
    this.subscription1 = this.backList.backList(this.itemId)
      .pipe(map(res => {
        if (res[0].query !== undefined) {
          this.linkedItems = this.backListDetails.setBackList(res[0].query.pages);
        } else {
          this.linkedItems = [{ id: "Q21898", label: this.lang.getTranslation('$1', this.lang.selectedLang) }];
        }
      }))
      .subscribe();
  }

  private getNoneLabel(lang: string): string {
    switch (lang) {
      case "de": return "keine";
      case "fr": return "aucune";
      case "en": return "none";
      case "es": return "ninguno";
      case "hu": return "nincs";
      case "it": return "nessuno";
      case "zh": return "无";
      default: return "none";
    }
  }

  private loadItem() {
    this.subscription2 = this.setData.itemToDisplay(this.itemId).subscribe(item => {
      this.isMain = this.isOther = this.isPicture = this.isSource = this.isTraining = this.isCareer =
        this.isFamilyTree = this.isSociability = this.isIframes = this.isActivity = this.isWikis =
        this.isExternalLinks = this.isInfo = false;

      if (!item) return;
      this.item = item;
      console.log('Item loaded:', this.item); 
      this.setList.addToSelectedItemsList(item[0]);
      this.claims = item[0].claims;
      this.setList.addToSelectedItemsList(item[0]);
      if (!this.claims.P2) { alert("property P2 undefined"); return; }
      if (!this.claims.P320) { this.hideList(); }
      this.natureOf = this.claims.P2[0].mainsnak.datavalue.value.id;
      this.event = this.claims.P2.event;
      this.listTitle = this.claims.P2.listTitle;
      this.main = this.claims.P2.main;
      if (this.mainTitle == "Humain") { this.mainTitle = "Personne"; }
      if (["Q37073", "Q257052"].includes(this.claims.P2[0].mainsnak.datavalue.value.id)) {
        this.mainTitle = this.lang.getTranslation('$1', this.lang.selectedLang);
      }
      this.urlId = this.factGridUrl + this.id;

      this.id = this.item[0].id;
      this.label = this.item[0].label;
      this.description = this.item[0].description;
      this.aliases = this.item[0].aliases;
      if (this.aliases) { this.isAliases === true; }

      // Flags d'affichage
      const flags = this.itemDisplayDispatcher.dispatch(this.item, this);
      Object.assign(this, flags);

      // Carte
      if (this.claims.P48) {
        this.zoom = 12;
        let xy = this.claims.P2[0].mainsnak.datavalue.value.id;
        if (xy == "Q176131") this.zoom = 3;
        if (xy == "Q21925") this.zoom = 4;
        if (xy == "Q21876") this.zoom = 6;
        if (xy == "Q16200") this.zoom = 18;
        if (["Q266101", "Q469609", "Q172249", "Q36239", "Q164328", "Q36251", "Q141472", "Q395380", "Q375357"].includes(xy)) this.zoom = 16;
        this.coords = this.claims.P48[0].mainsnak.datavalue.value;
        this.latitude = this.coords.latitude;
        this.longitude = this.coords.longitude;
        this.router.navigate([this.latitude, this.longitude, this.zoom], { relativeTo: this.route });
      }

      // Selected Items
      this.selectedItemsList = JSON.parse(localStorage.getItem('selectedItems'));

      // Images
      this.pictures = this.claims.P189
        ? this.claims.P189.map((picture, index) => {
          const imageUrl = picture.picture;
          const thumbnailUrl = `${imageUrl}?width=300`;
          this.preloadImage(thumbnailUrl);
          this.preloadImage(imageUrl);
          return {
            thumbnail: thumbnailUrl,
            full: imageUrl,
            uniqueKey: imageUrl || `picture-${index}`
          };
        })
        : [];
      this.isPicture = this.pictures.length > 0;
      if (this.isPicture) {
        this.observer.observe([Breakpoints.HandsetPortrait]).subscribe(result => {
          if (result.matches) {
            this.isMobile = true;
            this.isTopPicture = true;
            this.isPicture = false;
          }
        });
      }

      // Iframes
      this.iframes = [];
      this.iframesDisplay.setIframesDisplay(this.item, this.iframes);
      this.isIframes = this.iframes.length > 0;

      // Extraction des URLs brutes pour les iframes
      this.urlSafe1 = this.claims.P309?.[0]?.mainsnak?.datavalue?.value || '';
      this.urlSafe2 = this.claims.P309?.[1]?.mainsnak?.datavalue?.value || '';
      this.urlSafe3 = this.claims.P309?.[2]?.mainsnak?.datavalue?.value || '';
      this.urlSafe4 = this.claims.P320?.[0]?.mainsnak?.datavalue?.value || '';
      this.urlSafe5 = this.claims.P320?.[1]?.mainsnak?.datavalue?.value || '';
      this.urlSafe6 = this.claims.P320?.[2]?.mainsnak?.datavalue?.value || '';
      this.urlSafe7 = this.claims.P679?.[0]?.mainsnak?.datavalue?.value || '';
      this.urlSafe8 = this.claims.P679?.[1]?.mainsnak?.datavalue?.value || '';
      this.urlSafe9 = this.claims.P679?.[2]?.mainsnak?.datavalue?.value || '';
      this.urlSafe10 = this.claims.P693?.[0]?.mainsnak?.datavalue?.value || '';
      this.urlSafe11 = this.claims.P693?.[1]?.mainsnak?.datavalue?.value || '';
      this.urlSafe12 = this.claims.P693?.[2]?.mainsnak?.datavalue?.value || '';
      this.urlSafe13 = this.claims.P720?.[0]?.mainsnak?.datavalue?.value || '';
      this.urlSafe14 = this.claims.P720?.[1]?.mainsnak?.datavalue?.value || '';
      this.urlSafe15 = this.claims.P720?.[2]?.mainsnak?.datavalue?.value || '';

      // Transcription
      if (this.claims.P251 && this.claims.P251[0].mainsnak.datavalue.value) {
        let a = this.transcript.transcript(this.claims.P251[0].mainsnak.datavalue.value);
        this.subscription3 = a.subscribe(res => {
          this.trans = Object.keys(res)[0] == "error" ? "no transcription" : res.parse.text;
          this.trans = this.changeTranscript.cleaning(this.trans);
        });
      } else {
        this.trans = "";
      }

      // Info lists
      if (this.item[0].infoList) {
        this.instancesList = this.item[0].infoList[0];
        this.subclassesList = this.item[0].infoList[1];
        this.classesList = this.item[0].infoList[2];
        this.natureOfList = this.item[0].infoList[3];
      }

      // sparql lists
        this.item[0].sparql.subscribe(res => this.sparqlDisplay(res));
 
      // Spinner
      this.isSpinner = false;

      // Trees
      this.isFamilyTree = !!(this.claims.P150 || this.claims.P141 || this.claims.P142);
      this.isStemma = !!this.claims.P233;
    });
  }

  private preloadImage(url: string): void {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  }

  onThumbnailLoad(picture: any): void { }

  sparqlDisplay(u) {
    if (!u) return;
    if (u[0]) {
      this.sparqlSubject0 = u[0][0];
      this.sparqlData0 = u[0][1];
      this.isSparql0 = !!(this.sparqlData0 && this.sparqlData0[0]);
    }
    if (u[1]) {
      this.sparqlSubject1 = u[1][0];
      this.sparqlData1 = u[1][1];
      this.isSparql1 = !!(this.sparqlData1 && this.sparqlData1[0]);
    }
    if (u[2]) {
      this.sparqlSubject2 = u[2][0];
      this.sparqlData2 = u[2][1];
      this.isSparql2 = !!(this.sparqlData2 && this.sparqlData2[0]);
    }
    if (u[3]) {
      this.sparqlSubject3 = u[3][0];
      if (u[3].osm_id) {
        this.sparqlSubject3 = "current address:";
        let label = { value: u[3].display_name };
        let osm_id = { id: "Q1188609" };
        let v = { item: osm_id, itemLabel: label };
        this.sparqlData3 = [v];
      } else {
        this.sparqlData3 = u[3][1];
      }
      this.isSparql3 = !!(this.sparqlData3 && this.sparqlData3[0]);
    }
    if (u[4]) {
      this.sparqlSubject4 = u[4][0];
      this.sparqlData4 = u[4][1];
      this.isSparql4 = !!(this.sparqlData4 && this.sparqlData4[0]);
    }
  }

  openImage(url: string): void {
    console.log(url);
    if (url) {
      window.open(url, '_blank');
    }
  }

  toggleInfo(): void {
    this.isInfo = !this.isInfo;
  }

  hideList() {
    const el = document.getElementById("listing");
    if (el) el.style.visibility = 'hidden';
  }

  getUrl(u) {
    return this.sanitizer.bypassSecurityTrustUrl(u);
  }

  ngAfterViewInit(): void { }

  ngOnDestroy(): void {
    this.subscription0?.unsubscribe();
    this.subscription1?.unsubscribe();
    this.subscription2?.unsubscribe();
    this.subscription3?.unsubscribe();
  }
}
