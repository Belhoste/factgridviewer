import { Injectable, inject } from '@angular/core';
import { SetTimeService } from './set-time.service';
import { FactgridSubtitlesService } from './factgrid-subtitles.service'
import { TypologyService } from './typology.service';
import { ItemInfoService } from './item-info.service';
import { LongestWordService } from './longest-word.service'

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsService {
  private setDate = inject(SetTimeService);
  private factgrid = inject(FactgridSubtitlesService);
  private typology = inject(TypologyService);
  private itemInfo = inject(ItemInfoService);
  private longestLength = inject(LongestWordService);


  private baseWikimediaURL = 'http://commons.wikimedia.org/wiki/Special:FilePath/';

  qualifiers2: any[];

  addLongestWordLength(re) { re.longestWordLength = this.longestLength.findLongestWord(re.label) };

  addClaimItemDetails(items, re, itemProperties, lang) {
    for (let i = 0; i < itemProperties.length; i++) {
      let timeOrder = 23000000;
      // Vérifie que la propriété existe et est un tableau non vide
      if (!re.claims[itemProperties[i]] || !Array.isArray(re.claims[itemProperties[i]]) || re.claims[itemProperties[i]].length === 0) {
        continue;
      }
      re.claims[itemProperties[i]].datatype = re.claims[itemProperties[i]][0].mainsnak.datatype;
      for (let j = 0; j < re.claims[itemProperties[i]].length; j++) {
        re.claims[itemProperties[i]][j].mainsnak.timeOrder = timeOrder;
        if (re.claims[itemProperties[i]][j].mainsnak.datatype === "time") {
          let value = re.claims[itemProperties[i]][j].mainsnak.datavalue.value.time;
          value = value.substring(0, value.length - 10);
          re.claims[itemProperties[i]][j].mainsnak.datavalue.value.date = this.setDate.setDate(value, lang);
        }
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
            //     re.claims[itemProperties[i]][j].mainsnak.id = items[k].id;
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

  /**
   * Enrichit chaque statement avec qualifiers2 (pour l'affichage)
   * et gère le tri chronologique via timeOrder si un qualifier de type "time" existe.
   */
  /**
  * Enrichit chaque statement avec qualifiers2 (pour l'affichage).
  * Pour chaque qualifier, ajoute dans display un objet enrichi (id, label, description, aliases...).
  * Gère aussi le tri chronologique via timeOrder si un qualifier de type "time" existe.
  */
  addQualifierItemDetails(items, re, itemProperties, lang) {
    for (const prop of itemProperties) {
      if (!re.claims[prop]) continue;
      for (const statement of re.claims[prop]) {
        if (!statement.qualifiers || !statement.qualifiers2) continue;

        // Pour chaque propriété de qualifier
        for (const qualifier2 of statement.qualifiers2) {
          const qualifierProp = qualifier2.id;
          const qualifierValues = statement.qualifiers[qualifierProp];
          if (!Array.isArray(qualifierValues)) continue;

          // Préparation du display enrichi
          const display = [];

          for (const q of qualifierValues) {
            if (!q) continue;
            if (q.datatype === "wikibase-item" && q.datavalue?.value) {
              const val = q.datavalue.value;
              const enriched = items.find(it => it.id === val.id);
              display.push({
                id: val.id,
                label: enriched?.label || val.label || val.id,
                description: enriched?.description || val.description || "",
                aliases: enriched?.aliases || val.aliases || [],
                datatype: "wikibase-item",
                separator: (enriched?.description || val.description) ? ", " : ""
              });
            } else if (q.datatype === "commonsMedia" && q.datavalue?.value) {
              display.push({
                label: q.datavalue.value.label || q.datavalue.value,
                description: q.datavalue.value.description || "",
                aliases: q.datavalue.value.aliases || [],
                datatype: "commonsMedia"
              });
            } else if (q.datatype === "external-id" && q.datavalue?.value) {
              display.push({
                value: q.datavalue.value,
                datatype: "external-id"
              });
            } else if (q.datatype === "time" && q.datavalue?.value) {
              let value = q.datavalue.value.time;
              value = value.substring(0, value.length - 10);
              const date = this.setDate.setDate(value, lang);
              statement.mainsnak.timeOrder = value;
              let era = value.charAt(0);
              statement.mainsnak.timeOrder = Number(value.replace(/\-/g, "").replace(/\+/g, "").substring(0, 8));
              if (era !== "+") {
                statement.mainsnak.timeOrder = -Math.abs(statement.mainsnak.timeOrder);
              }
              display.push({
                value,
                date,
                datatype: "time"
              });
            } else if (q.datatype === "quantity" && q.datavalue?.value) {
              // Gestion du type quantity
              display.push({
                amount: q.datavalue.value.amount,
                unit: q.datavalue.value.unit,
                datatype: "quantity"
              });
            } else if (q.datatype === "string" && q.datavalue?.value) {
              display.push({
                string: q.datavalue.value,
                datatype: "string"
              });
            } else if (q.datatype === "monolingualtext" && q.datavalue?.value) {
              display.push({
                string: q.datavalue.value,
                datatype: "monolingualtext"
              });
            } else if (q.datavalue?.value) {
              display.push({
                value: q.datavalue.value,
                datatype: q.datatype || "unknown"
              });
            }
          }

          // Ajoute le display enrichi à l'objet de qualifiers2
          qualifier2.display = display;
        }

        // Si la propriété est "P2", on force timeOrder à "0"
        if (prop === "P2") {
          statement.mainsnak.timeOrder = "0";
        }
      }

      // Tri chronologique des statements si un timeOrder a été trouvé
      if (re.claims[prop].length > 1 && re.claims[prop][0].mainsnak.timeOrder !== undefined) {
        re.claims[prop].sort((a, b) => {
          if (a.mainsnak.timeOrder < b.mainsnak.timeOrder) return -1;
          if (a.mainsnak.timeOrder > b.mainsnak.timeOrder) return 1;
          return 0;
        });
      }
    }
    return re;
  }




  addReferenceItemDetails(items, re, itemProperties, lang) {
    for (let i = 0; i < itemProperties.length; i++) {
      // Vérifie que la propriété existe et est un tableau non vide
      if (!re.claims[itemProperties[i]] || !Array.isArray(re.claims[itemProperties[i]]) || re.claims[itemProperties[i]].length === 0) {
        continue;
      }
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
    return re;
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
