import { Injectable, inject } from '@angular/core';
import { SetTimeService } from './set-time.service';
import { FactgridSubtitlesService } from './factgrid-subtitles.service'
import { QualifierDetailsService } from './qualifier-details.service';
import { TypologyService } from './typology.service';
import { ItemInfoService } from './item-info.service';
import { LongestWordService } from './longest-word.service'

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsService {
  private setDate = inject(SetTimeService);
  private factgrid = inject(FactgridSubtitlesService);
  private qualifier = inject(QualifierDetailsService);
  private typology = inject(TypologyService);
  private itemInfo = inject(ItemInfoService);
  private longestLength = inject(LongestWordService);


  private baseWikimediaURL = 'http://commons.wikimedia.org/wiki/Special:FilePath/';

  qualifiers2: any[];

  addLongestWordLength(re) { re.longestWordLength = this.longestLength.findLongestWord(re.label) };

  addClaimItemDetails(items, re, itemProperties, lang) { // add labels, descriptions and aliases to the items in the mainsnaks   
    for (let i = 0; i < itemProperties.length; i++) {
      let timeOrder = 23000000;
      re.claims[itemProperties[i]].datatype = re.claims[itemProperties[i]][0].mainsnak.datatype;
      //     if(re.claims[itemProperties[i]][0].mainsnak.datatype =="external-id"){re.claims[itemProperties[i]].external ="1"}; // add external = "1" if external link property
      for (let j = 0; j < re.claims[itemProperties[i]].length; j++) {
        re.claims[itemProperties[i]][j].mainsnak.timeOrder = timeOrder;
        if (re.claims[itemProperties[i]][j].mainsnak.datatype === "time") {
          let value = re.claims[itemProperties[i]][j].mainsnak.datavalue.value.time;
          value = value.substring(0, value.length - 10);
          re.claims[itemProperties[i]][j].mainsnak.datavalue.value.date = this.setDate.setDate(value, lang);
        }
        //add typology, that is the nature of the item    
        /*  if(itemProperties[i] === "P2"){
            let u ="";
           re.claims[itemProperties[i]][j].typology = this.typology.getValue(re.claims[itemProperties[i]][j].mainsnak.datavalue.value.id);
         
          }*/

        if (itemProperties[i] === "P189" || itemProperties[i] === "P556" || itemProperties[i] === "P181" || itemProperties[i] === "P1267") {
          re.claims[itemProperties[i]][j].picture = this.baseWikimediaURL + re.claims[itemProperties[i]][j].mainsnak.datavalue.value
        }
        if (itemProperties[i] === "P188") {
          let u = re.claims[itemProperties[i]][j].mainsnak.datavalue.value.substring(0, 5);
          if (u !== "http:") {
            re.claims[itemProperties[i]][j].picture = re.claims[itemProperties[i]][j].mainsnak.datavalue.value
          }
        }
        if (itemProperties[i] === "P320") {
          re.claims[itemProperties[i]][j].mainsnak.datatype = "sparql";
          //   if(re.claims[itemProperties[i]][j].mainsnak.datavalue.value.includes("item")===false){ re.claims[itemProperties[i]][j].mainsnak.datavalue.value="undefined"};
        };

        this.factgrid.setSubtitle1(re, itemProperties[i], lang); // to set a subtitle

        if (re.claims[itemProperties[i]][j].mainsnak.datatype !== "wikibase-item") { continue }
        let number: number = j;
        this.factgrid.setSubtitle2(re, itemProperties[i], number, lang)
        for (let k = 0; k < items.length; k++) {
          if (re.claims[itemProperties[i]][j].mainsnak.datavalue.value.id === items[k].id) {
            re.claims[itemProperties[i]][j].mainsnak.label = items[k].label;
            if (items[k].description !== undefined)
              re.claims[itemProperties[i]][j].mainsnak.description = items[k].description;
            items[k].description ? (re.claims[itemProperties[i]][j].mainsnak.separator = ", ") : (re.claims[itemProperties[i]][j].mainsnak.separator = "");
            if (items[k].aliases !== undefined)
              re.claims[itemProperties[i]][j].mainsnak.aliases = items[k].aliases;
          }
        }
      }
    }
    return re
  }

  addQualifierItemDetails(items, re, itemProperties, lang) {//add labels, definitions and aliases of items in the qualifiers/*
    //   console.log(items);
    for (let i = 0; i < itemProperties.length; i++) {
      for (let j = 0; j < re.claims[itemProperties[i]].length; j++) {
        if (itemProperties[i] == "P2") { re.claims[itemProperties[i]][j].mainsnak.timeOrder = "0" };
        if (re.claims[itemProperties[i]][j].qualifiers === undefined) { continue }
        let props = Object.keys(re.claims[itemProperties[i]][j].qualifiers);
        for (let k = 0; k < props.length; k++) {
          for (let l = 0; l < props[k].length; l++) {
            if (re.claims[itemProperties[i]][j].qualifiers[props[k]][l] === undefined) { continue };
            if (re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datatype === "time") {
              let value = re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.time
              value = value.substring(0, value.length - 10);
              re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.date = this.setDate.setDate(value, lang);
            }
            if (re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datatype === "external-id") {
              this.setUrl(re.claims[itemProperties[i]][j].qualifiers[props[k]][l], props[k]);
            }
            for (let m = 0; m < items.length; m++) {
              if (re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.id !== items[m].id) { continue }
              if (re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datatype === "wikibase-item") {
                re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.label = items[m].label;
                //         if (items[k].description !== undefined)
                re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.description = items[m].description;
                //       if (items[m].aliases !== undefined) {
                re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.aliases = items[m].aliases;
                //          this.roleOfObjectRendering(re.claims[itemProperties[i]][j].qualifiers[props[k]][l]);      
              }
              if (re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datatype === "commonsMedia") {
                re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.label = items[m].label;
                //        if (items[k].description !== undefined)
                re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.description = items[m].description;
                //       if (items[k].aliases !== undefined)
                re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.aliases = items[m].aliases;
              }
            }
          }
        }
        for (let k = 0; k < props.length; k++) { //to chronologically order the list of values for a given property           
          if (re.claims[itemProperties[i]][j].qualifiers === undefined) { continue };
          if (re.claims[itemProperties[i]][j].qualifiers[props[k]] === undefined) { continue };
          if (re.claims[itemProperties[i]][j].qualifiers[props[k]][0].datatype === "time") {
            re.claims[itemProperties[i]][j].mainsnak.timeOrder = re.claims[itemProperties[i]][j].qualifiers[props[k]][0].datavalue.value.time
            let era = re.claims[itemProperties[i]][j].mainsnak.timeOrder.charAt(0);
            re.claims[itemProperties[i]][j].mainsnak.timeOrder = Number(re.claims[itemProperties[i]][j].mainsnak.timeOrder.replace(/\-/g, "").replace(/\+/g, "").substring(0, 8));

            if (era != "+") { re.claims[itemProperties[i]][j].mainsnak.timeOrder = -Math.abs(re.claims[itemProperties[i]][j].mainsnak.timeOrder) };
            re.claims[itemProperties[i]].sort(function (a, b) {
              if (a.mainsnak.timeOrder < b.mainsnak.timeOrder)
                return -1;
              if (a.mainsnak.timeOrder > b.mainsnak.timeOrder)
                return 1;
              return 0
            })
          }
        }
      }
    }
    this.qualifier.addQualifier2ItemDetails(re, itemProperties)
    return re
  }

  addReferenceItemDetails(items, re, itemProperties, lang) {  //add labels, definitions and aliases of items in the references
    for (let i = 0; i < itemProperties.length; i++) {
      for (let j = 0; j < re.claims[itemProperties[i]].length; j++) {
        if (re.claims[itemProperties[i]][j].references === undefined) { continue }
        for (let k = 0; k < re.claims[itemProperties[i]][j].references.length; k++) {
          let props = Object.keys(re.claims[itemProperties[i]][j].references[k].snaks);
          for (let l = 0; l < items.length; l++) {
            for (let a = 0; a < props.length; a++) {
              for (let b = 0; b < re.claims[itemProperties[i]][j].references[k].snaks[props[a]].length; b++) {
                if (re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datatype === "time") {
                  let value = re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datavalue.value.time;
                  value = value.substring(0, value.length - 10);
                  re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datavalue.value.date = this.setDate.setDate(value, lang);
                }
                if (re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datatype === "external-id") {
                  this.setUrl(re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b], props[a]);
                }
                if (re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datatype !== "wikibase-item") { continue }
                if (re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datavalue.value.id === items[l].id) {
                  if (re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b] !== undefined) {
                    re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datavalue.value.label = items[l].label;
                    if (items[l].description !== undefined)
                      re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datavalue.value.description = items[l].description;
                    items[l].description ? re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datavalue.value.separator = ", " : re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datavalue.value.separator = "";
                    if (items[l].aliases !== undefined)
                      re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datavalue.value.aliases = items[l].aliases;
                  }
                }
              }
            }
          }
        }
      }
    }
    return re
  }

  addReference2ItemDetails(items, re, itemProperties) { //add the items of the qualifiers to the array qualifiers     

    for (let i = 0; i < itemProperties.length; i++) {
      for (let j = 0; j < re.claims[itemProperties[i]].length; j++) {
        if (re.claims[itemProperties[i]][j].references2 === undefined) { continue }
        for (let k = 0; k < re.claims[itemProperties[i]][j].references2.length; k++) {
          for (let l = 0; l < re.claims[itemProperties[i]][j].references.length; l++) {
            let props = Object.keys(re.claims[itemProperties[i]][j].references[l].snaks);
            let referencesArray = Object.values(re.claims[itemProperties[i]][j].references[l].snaks);
            for (let m = 0; m < props.length; m++) {
              if (re.claims[itemProperties[i]][j].references2[k][m] === undefined) { continue };
              let display = []
              for (let n = 0; n < re.claims[itemProperties[i]][j].references[l].snaks[props[m]].length; n++) {
                if (re.claims[itemProperties[i]][j].references2[k][m].id === props[m]) {
                  if (re.claims[itemProperties[i]][j].references[l].snaks[props[m]][n].datavalue.value) {
                    if (re.claims[itemProperties[i]][j].references[l].snaks[props[m]][n].datatype === "external-id") {
                      display.push(re.claims[itemProperties[i]][j].references[l].snaks[props[m]][n].datavalue)
                    }
                    else if (re.claims[itemProperties[i]][j].references[l].snaks[props[m]][n].datatype === "time") {
                      display.push(re.claims[itemProperties[i]][j].references[l].snaks[props[m]][n].datavalue.value.date)
                    }
                     else { display.push(re.claims[itemProperties[i]][j].references[l].snaks[props[m]][n].datavalue.value) }
                  }
                  re.claims[itemProperties[i]][j].references2[k][m].display = display
                }
              }
            }
          }
        }
      }
    }
   // console.log(re);
    return re
  }




  addSitelinksDetails(re) {
    if (re.sitelinks.commonswiki !== undefined) {
      let url = re.sitelinks.commonswiki.title.replace(" ", "_");
      re.sitelinks.commonswiki.url = "https://commons.wikimedia.org/wiki/" + url
    }
    if (re.sitelinks.enwiki !== undefined) {
      let url = re.sitelinks.enwiki.title.replace(" ", "_");
      re.sitelinks.enwiki.url = "https://en.wikipedia.org/wiki/" + url
    }
    if (re.sitelinks.dewiki !== undefined) {
      let url = re.sitelinks.dewiki.title.replace(" ", "_");
      re.sitelinks.dewiki.url = "https://de.wikipedia.org/wiki/" + url
    }
    if (re.sitelinks.frwiki !== undefined) {
      let url = re.sitelinks.frwiki.title.replace(" ", "_");
      re.sitelinks.frwiki.url = "https://fr.wikipedia.org/wiki/" + url
    }
    if (re.sitelinks.wikidatawiki !== undefined) {
      re.sitelinks.wikidatawiki.url = "https://www.wikidata.org/wiki/" + re.sitelinks.wikidatawiki.title
    }
  }

  addItemInfo(re) {

    // re.info = this.itemInfo.infoListBuilding(re)

  }

  setUrl(u, p) {

    if (u.externalLink !== undefined) {

      u.datavalue.link = u.externalLink.replace("$1", u.datavalue.value);
    }

    if (p === "P76") { // id GND
      u.datavalue.link = "https://explore.gnd.network/gnd/" + u.datavalue.value;
    };
    if (p === "P368") { // id VD16 +
      u.datavalue.link = 'http://gateway-bayern.de/VD16+' + u.datavalue.value;
    };
    if (p === "P369") { //id VD17
      u.datavalue.link = 'https://kxp.k10plus.de/DB=1.28/CMD?ACT=SRCHA&IKT=8079&TRM=%27:'
        + u.datavalue.value + "%27";
    };
    if (p === "P370") {//id VD18
      u.datavalue.link = 'https://kxp.k10plus.de/DB=1.65/CMD?ACT=SRCHA&IKT=8080&TRM=VD18' + u.datavalue.value
    };
    if (p === "P650") { // INE ID (Spain)
      let province = u.datavalue.value.slice(0, 2);
      let municipality = u.datavalue.value.slice(2, 5);
      let parish = u.datavalue.value.slice(5, 7);
      let es = u.datavalue.value.slice(7, 9);
      u.datavalue.link = u.externalLink.replace("$1", province);
      u.datavalue.link = u.datavalue.link.replace("$2", municipality);
      u.datavalue.link = u.datavalue.link.replace("$3", parish);
      u.datavalue.link = u.datavalue.link.replace("$4", es);
      u.datavalue.link = u.datavalue.link.replace("$5", "00");
    };
    if (p === "P882") { // Deusches Rechtswörterbuch
      u.datavalue.link = 'https://drw-www.adw.uni-heidelberg.de/drw-cgi/zeige?index=lemmata&term=' + u.datavalue.value + '&darstellung=V';
    };
  }


}
