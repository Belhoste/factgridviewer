import { keyframes } from '@angular/animations';
import { DefinitionMap } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { PropertySignature } from 'typescript';
import { PropertyDetailsService } from './property-details.service';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsService {

  

  constructor() { }

  qualifiers2:any[];

   addClaimItemDetails(items,re,propertyIds, lang){ // add labels, descriptions and aliases to the items in the mainsnaks 
    for (let i=0; i<propertyIds.length; i++){
      for (let j=0; j<re.claims[propertyIds[i]].length; j++){
      if (re.claims[propertyIds[i]][j].mainsnak.datatype !== "wikibase-item") {continue}
      if (re.claims[propertyIds[i]][j].mainsnak.datavalue.value.id == "Q7") {
        if ( lang === "en") {re.claims[propertyIds[i]].human = "life and family"}
        else if ( lang === "de") {re.claims[propertyIds[i]].human = "Leben und Familie"}
        else if ( lang === "fr") {re.claims[propertyIds[i]].human = "vie et famille"};
        if ( lang === "en") {re.claims[propertyIds[i]].career = "career and activities"}
        else if ( lang === "de") {re.claims[propertyIds[i]].career = "Beruf und Aktivitäten"}
        else if ( lang === "fr") {re.claims[propertyIds[i]].career = "carrière et activités"};
            }
       for (let k = 0; k< items.length; k++) {   
        if (re.claims[propertyIds[i]][j].mainsnak.datavalue.value.id === items[k].id){
         re.claims[propertyIds[i]][j].mainsnak.label = items[k].label;
          if (items[k].description !== undefined) 
          re.claims[propertyIds[i]][j].mainsnak.description = items[k].description; 
          if (items[k].aliases !== undefined) 
          re.claims[propertyIds[i]][j].mainsnak.aliases = items[k].aliases;
          }
        } 
      }
    }
    return re
  }


      addQualifierItemDetails(items, re, propertyIds){  //add labels, definitions and aliases of items in the qualifiers/* 
        let qualifierPropertyArray = [];
              for (let i=0; i<propertyIds.length; i++){  
                  for (let j=0; j<re.claims[propertyIds[i]].length; j++) {
                      if (re.claims[propertyIds[i]][j].qualifiers === undefined) {continue}
                        qualifierPropertyArray = Object.keys(re.claims[propertyIds[i]][j].qualifiers);
                         let qualifiersArray = Object.values(re.claims[propertyIds[i]][j].qualifiers);
                          for  (let k=0; k<qualifierPropertyArray.length; k++){
                          let prop = qualifierPropertyArray[k]
                           for (let l=0; l<items.length; l++){                                       
                              if (qualifiersArray[k][0].datavalue.value.id === items[l].id){
                                  re.claims[propertyIds[i]][j].qualifiers[prop][0].datavalue.value.label = items[l].label;
                                 if (items[k].description !== undefined)
                                 re.claims[propertyIds[i]][j].qualifiers[prop][0].datavalue.value.description = items[l].description;
                                 if (items[k].aliases !== undefined)
                                 re.claims[propertyIds[i]][j].qualifiers[prop][0].datavalue.value.aliases = items[l].aliases;                            
                             }
                           }
                        }
                    }
                 }
            return re
              }

      addQualifier2ItemDetails(re, propertyIds){ //add the items of the qualifiers to the array qualifiers2
        let qualifierPropertyArray = [];
        for (let i=0; i<propertyIds.length; i++){  
          for (let j=0; j<re.claims[propertyIds[i]].length; j++) {
             if (re.claims[propertyIds[i]][j].qualifiers === undefined) {continue}
                qualifierPropertyArray = Object.keys(re.claims[propertyIds[i]][j].qualifiers);
                let qualifiersArray = Object.values(re.claims[propertyIds[i]][j].qualifiers);
                for  (let k=0; k<qualifierPropertyArray.length; k++){
                 let prop = qualifierPropertyArray[k];
                  for (let l=0; l<re.claims[propertyIds[i]][j].qualifiers2.length;l++){
                    if (re.claims[propertyIds[i]][j].qualifiers2[k].id !== prop){continue}
                    re.claims[propertyIds[i]][j].qualifiers2[k].value.id = qualifiersArray[k][0].datavalue.value.id;
                    re.claims[propertyIds[i]][j].qualifiers2[k].value.time = qualifiersArray[k][0].datavalue.value.time;
                    if (qualifiersArray[k][0].datatype === "string"){
                    re.claims[propertyIds[i]][j].qualifiers2[k].value.string = qualifiersArray[k][0].datavalue.value };
                    re.claims[propertyIds[i]][j].qualifiers2[k].value.label = qualifiersArray[k][0].datavalue.value.label;
                    re.claims[propertyIds[i]][j].qualifiers2[k].value.description = qualifiersArray[k][0].datavalue.value.description;
                    re.claims[propertyIds[i]][j].qualifiers2[k].value.aliases = qualifiersArray[k][0].datavalue.value.aliases;           
                  }
              }
            }
          }
          return re
      }

      addReferenceItemDetails(items, re, propertyIds){  //add labels, definitions and aliases of items in the references
        for (let i=0; i<propertyIds.length; i++){  
          for (let j=0; j<re.claims[propertyIds[i]].length; j++) {           
            if (re.claims[propertyIds[i]][j].references === undefined) {continue}
             for  (let k=0; k<re.claims[propertyIds[i]][j].references.length; k++){
               let props = Object.keys(re.claims[propertyIds[i]][j].references[k].snaks);
                  for(let a=0;a<props.length;a++){
                    for (let l=0; l<items.length; l++){  
                        if (re.claims[propertyIds[i]][j].references[k].snaks[props[a]][0].datatype !== "wikibase-item"){continue}
                        if (re.claims[propertyIds[i]][j].references[k].snaks[props[a]][0].datavalue.value.id === items[l].id ){
                          if (re.claims[propertyIds[i]][j].references[k].snaks[props[a]][0] !==undefined) { 
                           re.claims[propertyIds[i]][j].references[k].snaks[props[a]][0].datavalue.value.label = items[l].label;
                        if (items[l].description !== undefined) 
                           re.claims[propertyIds[i]][j].references[k].snaks[props[a]][0].datavalue.value.description = items[l].description;
                        if (items[l].aliases !== undefined)
                           re.claims[propertyIds[i]][j].references[k].snaks[props[a]][0].datavalue.value.aliases = items[l].aliases;               
                          }                     
                   }      
                 } 
               }                            
              }
           }
        }
        return re
          }


        addReference2ItemDetails(items, re, propertyIds){ //add the items of the qualifiers to the array qualifiers          
            for (let i=0; i<propertyIds.length; i++){  
              for (let j=0; j<re.claims[propertyIds[i]].length; j++) {
                 if (re.claims[propertyIds[i]][j].references === undefined) {continue}
                   for (let k=0; k<re.claims[propertyIds[i]][j].references.length; k++){
                   let props = Object.keys(re.claims[propertyIds[i]][j].references[k].snaks);
                   let referencesArray = Object.values(re.claims[propertyIds[i]][j].references[k].snaks);//l'objet referencesArray est à revoir, il n'a pas la structure qui convient.
                     console.log(referencesArray);
                     console.log(re.claims[propertyIds[i]][j].references2)
                  
                      for (let l=0; l<referencesArray.length; l++){
                        for (let m=0; m<re.claims[propertyIds[i]][j].references2.length;m++){
                          if (re.claims[propertyIds[i]][j].references2[m].value.id === referencesArray[l][0].datavalue.value.id)
                          { re.claims[propertyIds[i]][j].references2[m].value.label === referencesArray[l][0].datavalue.value.label ;
                            re.claims[propertyIds[i]][j].references2[m].value.id === referencesArray[l][0].datavalue.value.id
                            re.claims[propertyIds[i]][j].references2[m].value.time = referencesArray[l][0].datavalue.value.time;
                            if (referencesArray[l][0].datatype === "string"){
                              console.log(referencesArray[l][0].datatype)
                            re.claims[propertyIds[i]][j].references2[m].value.string = referencesArray[l][0].datavalue.value };
          
                            if (referencesArray[l][0].datatype === "url"){
                              re.claims[propertyIds[i]][j].references2[m].value.url = referencesArray[l][0].datavalue.value };
                            re.claims[propertyIds[i]][j].references2[m].value.label = referencesArray[l][0].datavalue.value.label;
                            re.claims[propertyIds[i]][j].references2[m].value.description = referencesArray[l][0].datavalue.value.description;
                            re.claims[propertyIds[i]][j].references2[m].value.aliases = referencesArray[l][0].datavalue.value.aliases;           
                           }
                         }
                        }
                      }    
                    }
                  }
              return re
            }

    addSidelinksDetails(re){
        if (re.sitelinks.commonswiki !==undefined){
          let url= re.sitelinks.commonswiki.title.replace(" ","_");
          re.sitelinks.commonswiki.url = "https://commons.wikimedia.org/wiki/"+url
        }
        if (re.sitelinks.enwiki !==undefined){
          let url= re.sitelinks.enwiki.title.replace(" ","_");
          re.sitelinks.enwiki.url="https://en.wikipedia.org/wiki/"+url
        }
        if (re.sitelinks.dewiki !==undefined){
          let url= re.sitelinks.dewiki.title.replace(" ","_");
          re.sitelinks.dewiki.url="https://de.wikipedia.org/wiki/"+url
        }
        if (re.sitelinks.frwiki !==undefined){
          let url= re.sitelinks.frwiki.title.replace(" ","_");
          re.sitelinks.frwiki.url="https://fr.wikipedia.org/wiki/"+url
        }
        if (re.sitelinks.wikidatawiki !==undefined){
          re.sitelinks.wikidatawiki.url="https://www.wikidata.org/wiki/"+re.sitelinks.wikidatawiki.title
        }
      }

}
