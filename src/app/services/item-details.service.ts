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
        if ( propertyIds[i] === "P320")
        { re.claims[propertyIds[i]][j].mainsnak.datatype = "sparql",
         console.log(re.claims[propertyIds[i]][j].mainsnak.datatype)};
        if ( lang === "en") {re.claims[propertyIds[i]].other = "further"}
        else if ( lang === "de") {re.claims[propertyIds[i]].other = "weiteren"}
        else if ( lang === "fr") {re.claims[propertyIds[i]].other = "autres"};
        if ( lang === "en") {re.claims[propertyIds[i]].sources = "sources"}
        else if ( lang === "de") {re.claims[propertyIds[i]].sources = "Quellen"}
        else if ( lang === "fr") {re.claims[propertyIds[i]].sources = "sources"};
      if (re.claims[propertyIds[i]][j].mainsnak.datatype !== "wikibase-item") {continue}
      if (re.claims[propertyIds[i]][j].mainsnak.datavalue.value.id == "Q7") {
        if ( lang === "en") {re.claims[propertyIds[i]].main = "life and family"}
        else if ( lang === "de") {re.claims[propertyIds[i]].main = "Leben und Familie"}
        else if ( lang === "fr") {re.claims[propertyIds[i]].main = "vie et famille"};
        if ( lang === "en") {re.claims[propertyIds[i]].training = "education"}
        else if ( lang === "de") {re.claims[propertyIds[i]].training = "Ausbildung"}
        else if ( lang === "fr") {re.claims[propertyIds[i]].training = "éducation"};
        if ( lang === "en") {re.claims[propertyIds[i]].career = "career and activities"}
        else if ( lang === "de") {re.claims[propertyIds[i]].career = "Beruf und Aktivitäten"}
        else if ( lang === "fr") {re.claims[propertyIds[i]].career = "carrière et activités"};
        if ( lang === "en") {re.claims[propertyIds[i]].sociability = "sociability and culture"}
        else if ( lang === "de") {re.claims[propertyIds[i]].sociability = "Soziabilität und Kultur"}
        else if ( lang === "fr") {re.claims[propertyIds[i]].sociability = "sociabilité et culture"};
            }
      if (re.claims[propertyIds[i]][j].mainsnak.datavalue.value.id == "Q8") {
        if ( lang === "en") {re.claims[propertyIds[i]].main = "location and situation"}
        else if ( lang === "de") {re.claims[propertyIds[i]].main = "Standort und Lage"}
        else if ( lang === "fr") {re.claims[propertyIds[i]].main = "localisation et situation"};
      }
      if (re.claims[propertyIds[i]][j].mainsnak.datavalue.value.id == "Q9") {
        if ( lang === "en") {re.claims[propertyIds[i]].main = "event"}
        else if ( lang === "de") {re.claims[propertyIds[i]].main = "Ereignis"}
        else if ( lang === "fr") {re.claims[propertyIds[i]].main = "évènement"};
      }
      if (re.claims[propertyIds[i]][j].mainsnak.datavalue.value.id == "Q12" || 
          re.claims[propertyIds[i]][j].mainsnak.datavalue.value.id == "Q220833" ||  
          re.claims[propertyIds[i]][j].mainsnak.datavalue.value.id == "Q140806" ||
          re.claims[propertyIds[i]][j].mainsnak.datavalue.value.id == "Q11214" ||
          re.claims[propertyIds[i]][j].mainsnak.datavalue.value.id == "Q164344") {
        if ( lang === "en") {re.claims[propertyIds[i]].main = "organisation"}
        else if ( lang === "de") {re.claims[propertyIds[i]].main = "Organisation"}
        else if ( lang === "fr") {re.claims[propertyIds[i]].main = "organisation"};
      }
      if (re.claims[propertyIds[i]][j].mainsnak.datavalue.value.id == "Q20") {
        if ( lang === "en") {re.claims[propertyIds[i]].main = "print publication"}
        else if ( lang === "de") {re.claims[propertyIds[i]].main = "Druckpublikation"}
        else if ( lang === "fr") {re.claims[propertyIds[i]].main = "publication imprimée"};
      }
      if (re.claims[propertyIds[i]][j].mainsnak.datavalue.value.id == "Q146602" ||
          re.claims[propertyIds[i]][j].mainsnak.datavalue.value.id == "Q21909" ||
          re.claims[propertyIds[i]][j].mainsnak.datavalue.value.id == "Q37073") {
        if ( lang === "en") {re.claims[propertyIds[i]].main = "activity"}
        else if ( lang === "de") {re.claims[propertyIds[i]].main = "Aktivität"}
        else if ( lang === "fr") {re.claims[propertyIds[i]].main = "activité"};
      }
      if (re.claims[propertyIds[i]][j].mainsnak.datavalue.value.id == "Q10671") {
        if ( lang === "en") {re.claims[propertyIds[i]].main = "document"}
        else if ( lang === "de") {re.claims[propertyIds[i]].main = "Dokument"}
        else if ( lang === "fr") {re.claims[propertyIds[i]].main = "document"};
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
       for (let i=0; i<propertyIds.length; i++){  
            for (let j=0; j<re.claims[propertyIds[i]].length; j++) {
                if (re.claims[propertyIds[i]][j].qualifiers === undefined) {continue}
                 let props = Object.keys(re.claims[propertyIds[i]][j].qualifiers);
                   for  (let k=0; k<props.length; k++){
                     for (let l=0; l<items.length; l++){      
                        if (re.claims[propertyIds[i]][j].qualifiers[props[k]][0].datavalue.value.id !== items[l].id){ continue }
                          if (re.claims[propertyIds[i]][j].qualifiers[props[k]][0].datatype === "wikibase-item"){
                            re.claims[propertyIds[i]][j].qualifiers[props[k]][0].datavalue.value.label = items[l].label;
                           if (items[k].description !== undefined)
                           re.claims[propertyIds[i]][j].qualifiers[props[k]][0].datavalue.value.description = items[l].description;
                           if (items[k].aliases !== undefined)
                           re.claims[propertyIds[i]][j].qualifiers[props[k]][0].datavalue.value.aliases = items[l].aliases;                            
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
                    re.claims[propertyIds[i]][j].qualifiers2[k].datatype = qualifiersArray[k][0].datatype;
                    re.claims[propertyIds[i]][j].qualifiers2[k].value.id = qualifiersArray[k][0].datavalue.value.id;
                    re.claims[propertyIds[i]][j].qualifiers2[k].value.time = qualifiersArray[k][0].datavalue.value.time;
                    re.claims[propertyIds[i]][j].qualifiers2[k].value.label = qualifiersArray[k][0].datavalue.value.label;
                    re.claims[propertyIds[i]][j].qualifiers2[k].value.description = qualifiersArray[k][0].datavalue.value.description;
                    re.claims[propertyIds[i]][j].qualifiers2[k].value.aliases = qualifiersArray[k][0].datavalue.value.aliases; 
                    if (qualifiersArray[k][0].datatype === "string"){
                      re.claims[propertyIds[i]][j].qualifiers2[k].value.string = qualifiersArray[k][0].datavalue.value };    
                    re.claims[propertyIds[i]][j].qualifiers2[k].value.amount = qualifiersArray[k][0].datavalue.value.amount };                    
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
                      for (let l=0; l<referencesArray.length; l++){
                        for (let m=0; m<re.claims[propertyIds[i]][j].references2.length;m++){
                          if (re.claims[propertyIds[i]][j].references2[m].value.id === referencesArray[l][0].datavalue.value.id)
                          { re.claims[propertyIds[i]][j].references2[m].value.label === referencesArray[l][0].datavalue.value.label ;
                            re.claims[propertyIds[i]][j].references2[m].value.id === referencesArray[l][0].datavalue.value.id
                            re.claims[propertyIds[i]][j].references2[m].value.time = referencesArray[l][0].datavalue.value.time;
                            if (referencesArray[l][0].datatype === "string"){
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