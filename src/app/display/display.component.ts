
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
  place:string;

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

//place
  P48:any //geographic coordinates
  P58:any// number of inhabitants
  P297:any // territorial affiliation
  P466:any // capital of

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

 //wiki
  commonswiki:any;
  dewiki:any;
  enwiki:any;
  frwiki:any;
  wikidatawiki:any;
  wikis:any[];

  lifeAndFamily:any[];
  careerAndActivities:any[];
  locationAndSituation:any[];
  externalLinks:any[];


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
    this.place = item[0].claims.P2.place;
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

    //person

    //person: life and family

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
  
    //person:career and activities
    
    this.P164 = item[0].claims.P164;
    this.P165 = item[0].claims.P165;

    this.careerAndActivities = [];

    if (this.P164 !==undefined){
      this.careerAndActivities.push(this.P164); 
    }  
    if (this.P165 !==undefined){
      this.careerAndActivities.push(this.P165); 
    }  

  //place

  this.P48 = item[0].claims.P48;
  this.P58 = item[0].claims.P58;
  this.P297 = item[0].claims.P297;
  this.P466 = item[0].claims.P466;
    
    this.locationAndSituation =[];
    
    if (this.P48 !==undefined){
      this.locationAndSituation.push(this.P48);
    
    if (this.P58 !==undefined){
      this.locationAndSituation.push(this.P58); 
      }  
    
    if (this.P297 !==undefined){
      this.locationAndSituation.push(this.P297); 
      }  
    
    if (this.P466 !==undefined){
      this.locationAndSituation.push(this.P466); 
      }   
    }  

    console.log(this.locationAndSituation);

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

    if (this.P378 !==undefined){
     this.P378.url= "https://viaf.org/viaf/"+this.P378[0].mainsnak.datavalue.value;
      this.externalLinks.push(this.P378) };

    if (this.P76 !==undefined){
    this.P76.url = "https://d-nb.info/gnd/"+this.P76[0].mainsnak.datavalue.value;
     this.externalLinks.push(this.P76) };

    if (this.P500 !==undefined){
      this.P500.url = "https://data.bnf.fr/en/"+this.P500[0].mainsnak.datavalue.value;
      this.externalLinks.push(this.P500) };

    if (this.P346 !==undefined){
       this.P346.url = "https://kxp.k10plus.de/DB=2.1/PPNSET?PPN="+this.P346[0].mainsnak.datavalue.value;
        this.externalLinks.push(this.P346) };

    if (this.P367 !==undefined){
       this.P367.url = "https://catalogue.bnf.fr/ark:/12148/cb"+this.P367[0].mainsnak.datavalue.value;
        this.externalLinks.push(this.P367) };

    if (this.P366 !==undefined){
          this.P366.url = "https://www.idref.fr/"+this.P366[0].mainsnak.datavalue.value;
            this.externalLinks.push(this.P366) };
    
    if (this.P418 !==undefined){
          this.P418.url = "https://www.geonames.org/"+this.P418[0].mainsnak.datavalue.value
                this.externalLinks.push(this.P418) };
            
    if (this.P368 !==undefined){
          this.P368.url = 'https://opacplus.bib-bvb.de/TouchPoint_touchpoint/start.do?Query=1120%3D%22%5C%22VD16+$1%5C""&SearchProfile=Altbestand&Language=De'+this.P368[0].mainsnak.datavalue.value
               this.externalLinks.push(this.P368) };

    if (this.P369 !==undefined){
          this.P369.url = 'https://kxp.k10plus.de/DB=1.28/CMD?ACT=SRCHA&IKT=8079&TRM=%27$1%27:'+this.P369[0].mainsnak.datavalue.value
              this.externalLinks.push(this.P369) };

    if (this.P370 !==undefined){
        this.P370.url = 'https://kxp.k10plus.de/DB=1.65/CMD?ACT=SRCHA&IKT=8080&TRM=VD18'+this.P369[0].mainsnak.datavalue.value
           this.externalLinks.push(this.P370) };

    if (this.P424 !==undefined){
            this.P424.url = 'https://harmoniauniversalis.univ-paris1.fr/#/personne/'+this.P424[0].mainsnak.datavalue.value
               this.externalLinks.push(this.P424) };

    if (this.P533 !==undefined){
        this.P533.url = 'https://amburger.ios-regensburg.de/index.php?id='+this.P533[0].mainsnak.datavalue.value
            this.externalLinks.push(this.P533) };

    if (this.P374 !==undefined){
              this.P374.url = 'https://www.geni.com/profile/index/'+this.P533[0].mainsnak.datavalue.value
                  this.externalLinks.push(this.P374) };

    if (this.P414 !==undefined){
            this.P414.url = 'https://www.insee.fr/fr/statistiques/2011101?geo=COM-'+this.P414[0].mainsnak.datavalue.value
                        this.externalLinks.push(this.P414) };


   


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




  

    
         
                        