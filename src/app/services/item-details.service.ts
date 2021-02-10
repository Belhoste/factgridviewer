import { keyframes } from '@angular/animations';
import { DefinitionMap } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { PropertyDetailsService } from './property-details.service';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsService {

  constructor() { }

   addClaimItemDetails(items,re,propertyIds, lang){ // add labels, descriptions and aliases to the items in the mainsnaks 
    for (let i=0; i<propertyIds.length; i++){
      for (let j=0; j<re.claims[propertyIds[i]].length; j++){
      if (re.claims[propertyIds[i]][j].mainsnak.datatype !== "wikibase-item") {continue}
      if (re.claims[propertyIds[i]][j].mainsnak.datavalue.value.id == "Q7") {
        if ( lang === "en") {re.claims[propertyIds[i]].human = "Life and family"}
        else if ( lang === "de") {re.claims[propertyIds[i]].human = "Leben und Familie"}
        else if ( lang === "fr") {re.claims[propertyIds[i]].human = "Vie et famille"};
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

      addReferenceItemDetails(items, re, propertyIds){  //add labels, definitions and aliases of items in the references
        console.log(items);
        for (let i=0; i<propertyIds.length; i++){  
          for (let j=0; j<re.claims[propertyIds[i]].length; j++) {           
            if (re.claims[propertyIds[i]][j].references === undefined) {continue}
             for  (let k=0; k<re.claims[propertyIds[i]][j].references.length; k++){
              let prop = Object.keys(re.claims[propertyIds[i]][j].references[k].snaks)[0];
              for (let l=0; l<items.length; l++){  
               if (re.claims[propertyIds[i]][j].references[k].snaks[prop][0].datatype !== "wikibase-item"){continue}
                if (re.claims[propertyIds[i]][j].references[k].snaks[prop][0].datavalue.value.id === items[l].id ){
                  if (re.claims[propertyIds[i]][j].references[k].snaks[prop][0] !==undefined) { 
                   re.claims[propertyIds[i]][j].references[k].snaks[prop][0].datavalue.value.label = items[l].label;
                  if (items[l].description !== undefined) 
                    re.claims[propertyIds[i]][j].references[k].snaks[prop][0].datavalue.value.description = items[l].description;
                   if (items[l].aliases !== undefined)
                  re.claims[propertyIds[i]][j].references[k].snaks[prop][0].datavalue.value.aliases = items[l].aliases; 
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
