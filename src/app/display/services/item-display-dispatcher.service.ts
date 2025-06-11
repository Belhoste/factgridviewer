import { Injectable, inject } from '@angular/core';
import { BlockDisplayService } from './block-display.service';
//import { IframesDisplayService } from './iframes-display.service';
import { TechnicalitiesDisplayService } from './technicalities-display.service';
import { WikiDisplayService } from './wiki-display.service';


export interface DisplayFlags {
  isPlace: boolean;
  isCareer: boolean;
  isSociability: boolean;
  isTraining: boolean;
  isOrg: boolean;
  isActivity: boolean;
  isEvent: boolean;
  isSource: boolean;
  isDocument: boolean;
  isOther: boolean;
  isMain: boolean;
  isWikis: boolean;
  isInfoList: boolean;
  isFrames: boolean;
  isExternalLinks: boolean;
}

@Injectable({ providedIn: 'root' })
export class ItemDisplayDispatcherService {
  
  private blockDisplay = inject(BlockDisplayService);
  private wikiDisplay = inject(WikiDisplayService);
 // private iframesDisplay = inject(IframesDisplayService);
  private technicalitiesDisplay = inject(TechnicalitiesDisplayService);

  dispatch(item: any, target: any): DisplayFlags {
    const claims = item[0].claims;

    //Excluded properties
    target.excludedProperties = [];
    this.blockDisplay.setExcludedProperties(item, target.excludedProperties);

    // Header
    target.headerDetail = [];
    this.blockDisplay.setHeaderDisplay(item, target.headerDetail);

    // Place
    target.locationAndSituation = [];
    let isPlace = false;
    if (claims.P2?.place !== undefined) {
      this.blockDisplay.setPlaceDisplay(item, target.locationAndSituation);
      isPlace = target.locationAndSituation.length > 0;
    }

    // Person
    target.lifeAndFamily = [];
    let isCareer = false;
    let isSociability = false;
    let isTraining = false;
    if (claims.P2?.person !== undefined) {
      this.blockDisplay.setPersonDisplay(item, target.lifeAndFamily);

      // Career
      target.careerAndActivities = [];
      this.blockDisplay.setCareerDisplay(item, target.careerAndActivities);
      isCareer = target.careerAndActivities.length > 0;
      if (isCareer && claims.P2?.career !== undefined) {
        target.career = claims.P2.career;
      }

      // Sociability
      target.sociabilityAndCulture = [];
      this.blockDisplay.setSociabilityDisplay(item, target.sociabilityAndCulture);
      isSociability = target.sociabilityAndCulture.length > 0;
      if (isSociability && claims.P2?.sociability !== undefined) {
        target.sociability = claims.P2.sociability;
      }

      // Education
      target.education = [];
      this.blockDisplay.setEducationDisplay(item, target.education);
      isTraining = target.education.length > 0;
      if (isTraining && claims.P2?.training !== undefined) {
        target.training = claims.P2.training;
      }
    }

    // Organization
    target.locationAndContext = [];
    let isOrg = false;
    if (claims.P2?.org !== undefined) {
      this.blockDisplay.setOrgDisplay(item, target.locationAndContext);
      isOrg = target.locationAndContext.length > 0;
    }

    // Activity
    target.activityDetail = [];
    let isActivity = false;
    if (claims.P2?.activity !== undefined) {
      this.blockDisplay.setActivityDisplay(item, target.activityDetail);
      isActivity = target.activityDetail.length > 0;
    }

    // Event
    target.eventDetail = [];
    let isEvent = false;
    if (claims.P2?.event !== undefined) {
      this.blockDisplay.setEventDisplay(item, target.eventDetail);
      isEvent = target.eventDetail.length > 0;
    }

    // Document
    target.documentDetail = [];
    let isDocument = false;
    if (claims.P2?.document !== undefined) {
      this.blockDisplay.setDocumentDisplay(item, target.documentDetail);
      isDocument = target.documentDetail.length > 0;
    }

    // Sources
    target.sourcesList = [];
    let isSource = false;
    this.blockDisplay.setSourcesDisplay(item, target.sourcesList);
    isSource = target.sourcesList.length > 0;
    target.sources = claims.P2?.sources;

    // External links
    target.externalLinks = [];
    let isExternalLinks = false;
    this.blockDisplay.setExternalLinksDisplay(item, target.externalLinks);
    isExternalLinks = target.externalLinks.length > 0;

    // Others
    target.otherClaims = [];
    let isOther = false;
    if (item[1] && Array.isArray(item[1])) {
      for (let i = 0; i < item[1].length; i++) {
        const P: string = item[1][i];
        if (claims[P] !== undefined) {
          target.otherClaims.push(claims[P]);
        }
      }
      if (claims.P2?.other !== undefined) {
        target.other = claims.P2.other;
      }
      isOther = target.otherClaims.length > 0;
    }

    // Item info



    // MainList
    target.mainList = [];
    let isMain = false;

    if (claims.P2 === undefined) {
      if (claims.P3 !== undefined) {
        target.mainList.push(claims.P3);
      }
    } else {
      target.mainList = []
        .concat(
          target.lifeAndFamily || [],
          target.locationAndContext || [],
          target.locationAndSituation || [],
          target.activityDetail || [],
          target.eventDetail || [],
          target.documentDetail || [],
          target.otherClaims || []
      );

 /*     Object.keys(claims).forEach(key => {
        if (key.startsWith('Q') && Array.isArray(claims[key])) {
          // Par exemple, pour les ajouter à mainList :
          target.mainList.push(claims[key]);
        }
      });
      */

    }
    isMain = target.mainList.length > 0;
    if (claims.P2 !== undefined && claims.P2[0]?.mainsnak?.label !== undefined) {
      target.mainTitle = claims.P2[0].mainsnak.label;
    }

    // ... après la construction de target.mainList



    let isFrames = false;

    /* iframes
    target.iframes = [];
    
    this.iframesDisplay.setIframesDisplay(item, target.iframes);
    isFrames = target.iframes.length > 0;
    */

    // InfoList
   
    this.blockDisplay.setItemInfoDisplay(item, target);

    let technicalities: any[] = [];
    this.technicalitiesDisplay.setTechnicalitiesDisplay(item, technicalities);

    target.infoList = {
      instancesList: target.instancesList,
      subclassesList: target.subclassesList,
      classesList: target.classesList,
      natureOfList: target.natureOfList,
      technicalities: technicalities
    };

    // Flag unique pour l'affichage
    let isInfoList =
      (target.infoList.instancesList && target.infoList.instancesList.length > 0) ||
      (target.infoList.subclassesList && target.infoList.subclassesList.length > 0) ||
      (target.infoList.classesList && target.infoList.classesList.length > 0) ||
      (target.infoList.natureOfList && target.infoList.natureOfList.length > 0) ||
      (target.infoList.technicalities && target.infoList.technicalities.length > 0);


    // Wikis
    target.wikis = [];
    let isWikis = false;
    this.wikiDisplay.setWikiDisplay(item, target.wikis);
    isWikis = target.wikis.length > 0;


    // ... (autres propriétés comme dans votre code)


    // Retourne les flags utiles
    return {
      isPlace,
      isCareer,
      isSociability,
      isTraining,
      isActivity,
      isDocument,
      isEvent,
      isSource,
      isOrg,
      isOther,
      isInfoList,
      isMain,
      isWikis,
      isFrames,
      isExternalLinks
    };
  }
}
