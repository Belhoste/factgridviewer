import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalLinksDisplayService {  // external links

  constructor() { }

  setExternalLinksDisplay(item, externalLinks){
    if (item[0].claims.P146 !==undefined){  //online information
      item[1].splice(item[1].indexOf("P146"),1);
       externalLinks.push(item[0].claims.P146) };

    if (item[0].claims.P378 !==undefined){ //id viaf
      item[1].splice(item[1].indexOf("P378"),1);
      item[0].claims.P378.url= "https://viaf.org/viaf/"+item[0].claims.P378[0].mainsnak.datavalue.value;
      externalLinks.push(item[0].claims.P378) };

    if (item[0].claims.P76 !==undefined){ // id GND
      item[1].splice(item[1].indexOf("P76"),1);
      item[0].claims.P76.url = "https://d-nb.info/gnd/"+item[0].claims.P76[0].mainsnak.datavalue.value;
     externalLinks.push(item[0].claims.P76) };

    if (item[0].claims.P500 !==undefined){ // id Data BnF
      item[1].splice(item[1].indexOf("P500"),1);
      item[0].claims.P500.url = "https://data.bnf.fr/en/"+item[0].claims.P500[0].mainsnak.datavalue.value;
      externalLinks.push(item[0].claims.P500) };

    if (item[0].claims.P346 !==undefined){ // id PPN
      item[1].splice(item[1].indexOf("P346"),1);
      item[0].claims.P346.url = "https://kxp.k10plus.de/DB=2.1/PPNSET?PPN="+item[0].claims.P346[0].mainsnak.datavalue.value;
        externalLinks.push(item[0].claims.P346) };

    if (item[0].claims.P367 !==undefined){ // id BnF
      item[1].splice(item[1].indexOf("P367"),1);
      item[0].claims.P367.url = "https://catalogue.bnf.fr/ark:/12148/cb"+item[0].claims.P367[0].mainsnak.datavalue.value;
        externalLinks.push(item[0].claims.P367) };

    if (item[0].claims.P366 !==undefined){ //id IRef
      item[1].splice(item[1].indexOf("P366"),1);
      item[0].claims.P366.url = "https://www.idref.fr/"+item[0].claims.P366[0].mainsnak.datavalue.value;
            externalLinks.push(item[0].claims.P366) };
    
    if (item[0].claims.P418 !==undefined){ // id Geonames
      item[1].splice(item[1].indexOf("P418"),1);
      item[0].claims.P418.url = "https://www.geonames.org/"+item[0].claims.P418[0].mainsnak.datavalue.value
                externalLinks.push(item[0].claims.P418) };
            
    if (item[0].claims.P368 !==undefined){ // id VD16
      item[1].splice(item[1].indexOf("P368"),1);
      item[0].claims.P368.url = 'https://opacplus.bib-bvb.de/TouchPoint_touchpoint/start.do?Query=1120%3D%22%5C%22VD16+$1%5C""&SearchProfile=Altbestand&Language=De'
                          +item[0].claims.P368[0].mainsnak.datavalue.value
               externalLinks.push(item[0].claims.P368) };

    if (item[0].claims.P369 !==undefined){ //id VD17
      item[1].splice(item[1].indexOf("P369"),1);
      item[0].claims.P369.url = 'https://kxp.k10plus.de/DB=1.28/CMD?ACT=SRCHA&IKT=8079&TRM=%27$1%27:'
                          +item[0].claims.P369[0].mainsnak.datavalue.value
              externalLinks.push(item[0].claims.P369) };

    if (item[0].claims.P370 !==undefined){//id VD18
      item[1].splice(item[1].indexOf("P370"),1);
      item[0].claims.P370.url = 'https://kxp.k10plus.de/DB=1.65/CMD?ACT=SRCHA&IKT=8080&TRM=VD18'+item[0].claims.P369[0].mainsnak.datavalue.value
           externalLinks.push(item[0].claims.P370) };

    if (item[0].claims.P424 !==undefined){ //id Harmonia Universalis
      item[1].splice(item[1].indexOf("P424"),1);
      item[0].claims.P424.url = 'https://harmoniauniversalis.univ-paris1.fr/#/personne/'+item[0].claims.P424[0].mainsnak.datavalue.value
               externalLinks.push(item[0].claims.P424) };

    if (item[0].claims.P533 !==undefined){ // id Amburger
      item[1].splice(item[1].indexOf("P533"),1);
      item[0].claims.P533.url = 'https://amburger.ios-regensburg.de/index.php?id='+item[0].claims.P533[0].mainsnak.datavalue.value
            externalLinks.push(item[0].claims.P533) };

    if (item[0].claims.P374 !==undefined){ // id Geni.com
      item[1].splice(item[1].indexOf("P374"),1);
      item[0].claims.P374.url = 'https://www.geni.com/profile/index/'+item[0].claims.P374[0].mainsnak.datavalue.value
                  externalLinks.push(item[0].claims.P374) };

    if (item[0].claims.P414 !==undefined){  // INSEE municipality code
      item[1].splice(item[1].indexOf("P414"),1);
      item[0].claims.P414.url = 'https://www.insee.fr/fr/statistiques/2011101?geo=COM-'+item[0].claims.P414[0].mainsnak.datavalue.value
                  externalLinks.push(item[0].claims.P414) };
  return externalLinks
  }

}
