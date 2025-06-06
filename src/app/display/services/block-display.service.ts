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
  EXTERNAL_LINKS_DISPLAY_PROPERTIES
} from './properties-display.config';

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
  //      console.log(`Property ${property} found and added to targetArray.`); // Debug log
  //      console.log(`Current targetArray:`, targetArray); // Debug log
      }
    }
    return targetArray;
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
    console.log('>>> setEducationDisplay called');
    console.log('Setting education display with item:', item);
    console.log('Education array before population:', education);
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

  setExternalLinksDisplay(item: any, externalLinks: any[]): any[] {
    return this.populateDisplay(item, externalLinks, EXTERNAL_LINKS_DISPLAY_PROPERTIES);
  }
}

