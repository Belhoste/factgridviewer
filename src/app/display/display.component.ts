
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
  training:string;
  sex:string;
  name:string;
  career:string;
  sociability:string;
  place:string;
  sources:string;

  P2:any[];// instance of
  P3:any[];// subclass of
  P8:any[];//part of
  P97:any[];//field of research

  //life and family

  P154:any[];//sex
  P247:any[];//name
  P248:any[];//forenames
  P140:any[];//Illuminati code name
  P248_qualifiers:any[];//qualifiers of forenames
  P77:any[];//birthday
  P82:any[];//birthplace
  P290:any[];//life span (at least) from
  P186:any[];//medical conditions
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
  P200 //number of children
  P150:any[];//children
  P172:any;// religion
  P83:any[];//place (residence)
  P296:any[]; //séjour

  //education
  P160:any; //educating institution
  P161:any;//teacher(s)
  
  
  P151:any; //publications stemming from this research
  P101:string;//place in sequence

  //career and activities
  
  P164:any[];//position
  P165:any[];//activities
  P315:any[];//employer
  P242;//events witnessed
  P119:any[];//active participant in


//sociability and culture
  P91:any[]; // member of
  P454:any[]; // proposed to become a member of
  P192:any[];//friendship
  P447:any[];//masonic degrees
  P497:any[];//interested in
  P167:any[];//contributor to


//place
  P48:any //geographic coordinates
  P58:any// number of inhabitants
  P297:any // territorial affiliation
  P466:any // capital of

//sources
  P12:any[];//literature


//references
  P311:any[];//text source
  P51:string;//primary source
  P146:string; //online information
  P138:string; //online digitalisation
  url:string;


//external links
P378 ;// identifiant viaf url;
P76 ;// identifiant GND
P500 ;// identifiant Data BnF
P346 ;// identifiant PPN
P367 ; //identifiant BnF
P366 ;// identifiant IRef
P418 ;// identifiant GeoNames subfix:.html
P368 ;// identifiant VD16
P369 ;// identifiant VD17
P370 ;// identifiant VD18
P424 ;// identifiant Harmonia Universalis
P533 ;// identifiant Amburger
P374 ; // identifiant Geni.com
P414; // 	INSEE municipality code

//list of all the above properties
remainingPropertiesList:any[] = [];


 //wiki
  commonswiki:any;
  dewiki:any;
  enwiki:any;
  frwiki:any;
  wikidatawiki:any;
  wikis:any[];

  lifeAndFamily:any[];
  education:any[];
  careerAndActivities:any[];
  sociabilityAndCulture:any[];
  locationAndSituation:any[];
  sourcesList:any[];
  externalLinks:any[];
  otherClaims:any[];

  total



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
    this.training = item[0].claims.P2.training;
    this.career = item[0].claims.P2.career;
    this.place = item[0].claims.P2.place;
    this.sociability = item[0].claims.P2.sociability;
    this.sources = item[0].claims.P2.sources;
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

    //header

    this.P2 = item[0].claims.P2;
    this.P3 = item[0].claims.P3; 
    this.P8 = item[0].claims.P8;
    this.P97 = item[0].claims.P97;

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

    //person

    //person: life and family

    this.P154 = item[0].claims.P154;                
    this.P247 = item[0].claims.P247;    
    this.P248 = item[0].claims.P248; 
    this.P140 = item[0].claims.P140;
    this.P77 = item[0].claims.P77;  
    this.P82 = item[0].claims.P82; 
    this.P290 = item[0].claims.P290;
    this.P186 = item[0].claims.P186;
    this.P38 = item[0].claims.P38;
    this.P168 = item[0].claims.P168;
    this.P40 = item[0].claims.P40; 
    this.P79 = item[0].claims.P79; 
    this.P141 = item[0].claims.P141;
    this.P142 = item[0].claims.P142; 
    this.P203 = item[0].claims.P203;
    this.P84 = item[0].claims.P84;
    this.P200 = item[0].claims.P200;
    this.P150 = item[0].claims.P150;

    this.P311 = item[0].claims.P311;
    this.P51 = item[0].claims.P51;
    this.P146 = item[0].claims.P146;
    this.P138 = item[0].claims.P138;

    this.P172 = item[0].claims.P172;
    this.P83 = item [0].claims.P83;
    this.P296 = item [0].claims.P296;

    
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
    if (item[0].claims.P77 !==undefined){ //birthday
      item[1].splice(item[1].indexOf("P77"),1);
      this.lifeAndFamily.push(this.item[0].claims.P77);
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
    if (item[0].claims.P40 !==undefined){ //burialdate
      item[1].splice(item[1].indexOf("P40"),1);
      this.lifeAndFamily.push(this.item[0].claims.P40);
    }
    if (item[0].claims.P79 !==undefined){ //grave
      item[1].splice(item[1].indexOf("P79"),1);
      this.lifeAndFamily.push(this.item[0].claims.P79);
    }
    if (this.P141 !==undefined){ //father
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
    if (item[0].claims.P83 !==undefined){ // place (residence)
      item[1].splice(item[1].indexOf("P83"),1);
      this.lifeAndFamily.push(this.item[0].claims.P83);
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

   if(item[0].claims.P161 !==undefined){ //teachers
    item[1].splice(item[1].indexOf("P161"),1);
    this.education.push(this.item[0].claims.P161);
   }

  /* if (this.P160 !==undefined){
    this.education.push(this.P160); 
  } 
  if (this.P161 !==undefined){
    this.education.push(this.P161); 
  } 
 */ 
    //person:career and activities
    
    this.P164 = item[0].claims.P164;
    this.P165 = item[0].claims.P165;
    this.P315 = item[0].claims.P315;
    this.P242 = item[0].claims.P242;
    this.P119 = item[0].claims.P119;

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
  
    //person: sociability and culture

  this.P91 = item[0].claims.P91;
  this.P454 = item[0].claims.P454;
  this.P192 = item[0].claims.P192;
  this.P447 = item[0].claims.P447;
  this.P497 = item[0].claims.P497;
  this.P167 = item[0].claims.P167;

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

  console.log(this.sociabilityAndCulture)


  //place

  this.P48 = item[0].claims.P48;
  this.P58 = item[0].claims.P58;
  this.P297 = item[0].claims.P297;
  this.P466 = item[0].claims.P466;
    
    this.locationAndSituation =[];
    
    if (item[0].claims.P48 !==undefined){ //geographic coordinates
      item[1].splice(item[1].indexOf("P48"),1);
      this.locationAndSituation.push(item[0].claims.P48);
    
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
    }  

  //sources

  this.P12 = item[0].claims.P12;
    
    this.sourcesList =[];
    
    if (item[0].claims.P12 !==undefined){ //literature
      item[1].splice(item[1].indexOf("P12"),1);
      this.sourcesList.push(item[0].claims.P12);
    }

    console.log(this.sourcesList);

  //externalLinks

    this.P378=item[0].claims.P378;
    this.P76=item[0].claims.P76;
    this.P500=item[0].claims.P500;
    this.P346=item[0].claims.P346
    this.P367=item[0].claims.P367
    this.P366=item[0].claims.P366
    this.P146=item[0].claims.P146
    this.P418=item[0].claims.P418
    this.P369=item[0].claims.P369
    this.P368=item[0].claims.P368
    this.P370=item[0].claims.P370
    this.P424=item[0].claims.P424
    this.P533=item[0].claims.P533
    this.P374=item[0].claims.P374
    this.P414=item[0].claims.P414

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
            this.externalLinks.push(this.P366) };
    
    if (item[0].claims.P418 !==undefined){ // id Geonames
      item[1].splice(item[1].indexOf("P418"),1);
      item[0].claims.P418.url = "https://www.geonames.org/"+this.P418[0].mainsnak.datavalue.value
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
               this.externalLinks.push(this.P424) };

    if (item[0].claims.P533 !==undefined){ // id Amburger
      item[1].splice(item[1].indexOf("P533"),1);
      item[0].claims.P533.url = 'https://amburger.ios-regensburg.de/index.php?id='+item[0].claims.P533[0].mainsnak.datavalue.value
            this.externalLinks.push(item[0].claims.P533) };

    if (item[0].claims.P374 !==undefined){ // id Geni.com
      item[1].splice(item[1].indexOf("P374"),1);
      item[0].claims.P374.url = 'https://www.geni.com/profile/index/'+item[0].claims.P533[0].mainsnak.datavalue.value
                  this.externalLinks.push(this.P374) };

    if (item[0].claims.P414 !==undefined){  // INSEE municipality code
      item[1].splice(item[1].indexOf("P414"),1);
      item[0].claims.P414.url = 'https://www.insee.fr/fr/statistiques/2011101?geo=COM-'+item[0].claims.P414[0].mainsnak.datavalue.value
                  this.externalLinks.push(this.P414) };


    this.otherClaims = [];
      
    for (let i=0; i<this.item[1].length; i++){
        let P:string = this.item[1][i];
        this.otherClaims.push(item[0].claims[P]); 
      }

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


setExternalLinks(u){

  u= u.url


}



ngOnDestroy(): void {
//this.subscription.unsubscribe()
}

}




  

    
         
                        