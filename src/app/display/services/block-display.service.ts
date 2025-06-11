import { Injectable } from '@angular/core';
import {
  PERSON_DISPLAY_PROPERTIES,
  PLACE_DISPLAY_PROPERTIES,
  CAREER_DISPLAY_PROPERTIES,
  DOCUMENT_DISPLAY_PROPERTIES,
  ACTIVITY_DISPLAY_PROPERTIES,
  EDUCATION_DISPLAY_PROPERTIES,
  EVENT_DISPLAY_PROPERTIES,
  ORG_DISPLAY_PROPERTIES,
  SOCIABILITY_DISPLAY_PROPERTIES,
  HEADER_DISPLAY_PROPERTIES,
  SOURCES_DISPLAY_PROPERTIES,
  EXTERNAL_LINKS_DISPLAY_PROPERTIES,
  EXCLUDED_DISPLAY_PROPERTIES
} from '../../config/dispatcher.config';

@Injectable({
  providedIn: 'root'
})
export class BlockDisplayService {

  /**
   * Méthode générique pour peupler un tableau à partir d'une constante de propriétés.
   */
  private populateDisplay(item: any, targetArray: any[], properties: { property: string }[]): any[] {
    for (const { property } of properties) {
      if (item[0].claims[property] !== undefined) {
        item[1].splice(item[1].indexOf(property), 1);
        targetArray.push(item[0].claims[property]);
      }
    }
    return targetArray;
  }


  setExcludedProperties(item: any, excludedProperties: any[]): any[] {
    return this.populateDisplay(item, excludedProperties, EXCLUDED_DISPLAY_PROPERTIES);
  }

  setHeaderDisplay(item: any, headerDetail: any[]): any[] {
    return this.populateDisplay(item, headerDetail, HEADER_DISPLAY_PROPERTIES);
  }

  setPlaceDisplay(item: any, locationAndSituation: any[]): any[] {
    return this.populateDisplay(item, locationAndSituation, PLACE_DISPLAY_PROPERTIES);
  }

  setPersonDisplay(item: any, lifeAndFamily: any[]): any[] {
    return this.populateDisplay(item, lifeAndFamily, PERSON_DISPLAY_PROPERTIES);
  }

  setCareerDisplay(item: any, careerAndActivities: any[]): any[] {
    return this.populateDisplay(item, careerAndActivities, CAREER_DISPLAY_PROPERTIES);
  }

  setSociabilityDisplay(item: any, sociabilityAndCulture: any[]): any[] {
    return this.populateDisplay(item, sociabilityAndCulture, SOCIABILITY_DISPLAY_PROPERTIES);
  }

  setEducationDisplay(item: any, education: any[]): any[] {
    return this.populateDisplay(item, education, EDUCATION_DISPLAY_PROPERTIES);
  }

  setOrgDisplay(item: any, locationAndContext: any[]): any[] {
    return this.populateDisplay(item, locationAndContext, ORG_DISPLAY_PROPERTIES);
  }

  setActivityDisplay(item: any, activityDetail: any[]): any[] {
    return this.populateDisplay(item, activityDetail, ACTIVITY_DISPLAY_PROPERTIES);
  }

  setEventDisplay(item: any, eventDetail: any[]): any[] {
    return this.populateDisplay(item, eventDetail, EVENT_DISPLAY_PROPERTIES);
  }

  setDocumentDisplay(item: any, documentDetail: any[]): any[] {
    return this.populateDisplay(item, documentDetail, DOCUMENT_DISPLAY_PROPERTIES);
  }

  setSourcesDisplay(item: any, sourcesList: any[]): any[] {
    return this.populateDisplay(item, sourcesList, SOURCES_DISPLAY_PROPERTIES);
  }

 


  setItemInfoDisplay(item: any, target: any): void {
    const infoList = item[0]?.infoList || [];

    target.instancesList = Array.isArray(infoList[0]) ? [...infoList[0]] : [];
    target.subclassesList = Array.isArray(infoList[1]) ? [...infoList[1]] : [];
    target.classesList = Array.isArray(infoList[2]) ? [...infoList[2]] : [];
    target.natureOfList = Array.isArray(infoList[3]) ? [...infoList[3]] : [];

  }



  setExternalLinksDisplay(item: any, externalLinks: any[]): any[] {
    return this.setUrlDisplay(item, externalLinks);
  }

  setUrlDisplay(item: any, externalLinks: any[]): any[] {
    const properties = Object.keys(item[0].claims);
    for (const prop of properties) {
      if (prop === 'P1306' || prop === 'P650') continue; // Exclure les propriétés obsolètes
      const claim = item[0].claims[prop];
      if (!claim || claim.datatype !== "external-id") continue;

      // Retirer la propriété de l'affichage général
      item[1].splice(item[1].indexOf(prop), 1);

      // Générer l'URL selon la logique métier
      this.setUrl(item, prop);

      // Ajouter à la liste des liens externes
      externalLinks.push(claim);
    }
    return externalLinks;
  }

  private setUrl(item: any, p: string): void {
    const claim = item[0].claims[p];
    if (!claim) return;

    if (claim.externalLink !== undefined) {
      claim.url = claim.externalLink.replace("$1", claim[0].mainsnak.datavalue.value);
    }

    if (item[0].claims.P76 !== undefined) {
      item[0].claims.P76.url = "https://explore.gnd.network/gnd/" + item[0].claims.P76[0].mainsnak.datavalue.value;
    }
    if (item[0].claims.P368 !== undefined) {
      item[0].claims.P368.url = 'http://gateway-bayern.de/VD16+' + item[0].claims.P368[0].mainsnak.datavalue.value;
    }
    if (item[0].claims.P369 !== undefined) {
      item[0].claims.P369.url = 'https://kxp.k10plus.de/DB=1.28/CMD?ACT=SRCHA&IKT=8079&TRM=%27:' +
        item[0].claims.P369[0].mainsnak.datavalue.value + "%27";
    }
    if (item[0].claims.P370 !== undefined) {
      item[0].claims.P370.url = 'https://kxp.k10plus.de/DB=1.65/CMD?ACT=SRCHA&IKT=8080&TRM=VD18' +
        item[0].claims.P370[0].mainsnak.datavalue.value;
    }
    if (item[0].claims.P650 !== undefined) {
      let value = item[0].claims.P650[0].mainsnak.datavalue.value;
      let province = value.slice(0, 2);
      let municipality = value.slice(2, 5);
      let parish = value.slice(5, 7);
      let es = value.slice(7, 9);
      if (item[0].claims.P650.externalLink !== undefined) {
        let url = item[0].claims.P650.externalLink.replace("$1", province)
          .replace("$2", municipality)
          .replace("$3", parish)
          .replace("$4", es)
          .replace("$5", "00");
        console.log("URL for P650:", url); // Debug log
        item[0].claims.P650.url = url;
      }
    }
    if (item[0].claims.P882 !== undefined) {
      item[0].claims.P882.url = 'https://drw-www.adw.uni-heidelberg.de/drw-cgi/zeige?index=lemmata&term=' +
        item[0].claims.P882[0].mainsnak.datavalue.value + '&darstellung=V';
    }
  }


}



