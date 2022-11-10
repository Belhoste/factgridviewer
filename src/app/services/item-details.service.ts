import { Injectable } from '@angular/core';
import { SetTimeService} from './set-time.service';
import {FactgridSubtitlesService} from './factgrid-subtitles.service'
import { QualifierDetailsService } from './qualifier-details.service';
import { TypologyService} from './typology.service';
import { ItemInfoService } from './item-info.service';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsService {

  private baseWikimediaURL ='http://commons.wikimedia.org/wiki/Special:FilePath/';

  constructor(private setDate:SetTimeService, private factgrid:FactgridSubtitlesService, private qualifier:QualifierDetailsService, private typology:TypologyService, private itemInfo:ItemInfoService) { }

  qualifiers2:any[];

   addClaimItemDetails(items,re,propertyIds, lang){ // add labels, descriptions and aliases to the items in the mainsnaks   
    for (let i=0; i<propertyIds.length; i++){
      let timeOrder = 23000000;
      for (let j=0; j<re.claims[propertyIds[i]].length; j++){
    
        re.claims[propertyIds[i]][j].mainsnak.timeOrder=timeOrder;
        if(re.claims[propertyIds[i]][j].mainsnak.datatype === "time"){
          let value= re.claims[propertyIds[i]][j].mainsnak.datavalue.value.time;
          value = value.substring(0,value.length-10);
          re.claims[propertyIds[i]][j].mainsnak.datavalue.value.date = this.setDate.setDate(value,lang);
        }
    //add typology, that is the nature of the nature of the item    
    if(propertyIds[i] === "P2"){
      let u ="";
     re.claims[propertyIds[i]][j].typology = this.typology.getValue(re.claims[propertyIds[i]][j].mainsnak.datavalue.value.id);
   
    }
    
        if(propertyIds[i] === "P189"){
          re.claims[propertyIds[i]][j].picture = this.baseWikimediaURL+re.claims[propertyIds[i]][j].mainsnak.datavalue.value
        }
        if(propertyIds[i] === "P188"){
          let u= re.claims[propertyIds[i]][j].mainsnak.datavalue.value.substring(0,5);
          if(u !== "http:") {
            re.claims[propertyIds[i]][j].picture = re.claims[propertyIds[i]][j].mainsnak.datavalue.value 
          }
        }
        if ( propertyIds[i] === "P320")
        { re.claims[propertyIds[i]][j].mainsnak.datatype = "sparql";
     //   if(re.claims[propertyIds[i]][j].mainsnak.datavalue.value.includes("item")===false){ re.claims[propertyIds[i]][j].mainsnak.datavalue.value="undefined"};
    //    if(re.claims[propertyIds[i]][j].mainsnak.datavalue.includes("item")) {console.log(re.claims[propertyIds[i]][j].mainsnak)};
      };
       
      this.factgrid.setSubtitle1(re,propertyIds[i],lang);

      if (re.claims[propertyIds[i]][j].mainsnak.datatype !== "wikibase-item") {continue}
      let number:number = j;
      this.factgrid.setSubtitle2(re,propertyIds[i],number,lang)     
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

  addQualifierItemDetails(items, re, propertyIds, lang){//add labels, definitions and aliases of items in the qualifiers/*
    for (let i=0; i<propertyIds.length; i++){ 
        for (let j=0; j<re.claims[propertyIds[i]].length; j++) {
          if(propertyIds[i] =="P2"){ re.claims[propertyIds[i]][j].mainsnak.timeOrder = "0" } ;
          if (re.claims[propertyIds[i]][j].qualifiers === undefined) {continue}
          let props = Object.keys(re.claims[propertyIds[i]][j].qualifiers);
             for  (let k=0; k<props.length; k++){
               for (let m=0; m<props[k].length; m++) {
                 if(re.claims[propertyIds[i]][j].qualifiers[props[k]][m] === undefined){continue};
                  if(re.claims[propertyIds[i]][j].qualifiers[props[k]][m].datatype === "time"){
                       let value =re.claims[propertyIds[i]][j].qualifiers[props[k]][m].datavalue.value.time
                       value = value.substring(0,value.length-10);
                        re.claims[propertyIds[i]][j].qualifiers[props[k]][m].datavalue.value.date = this.setDate.setDate(value,lang);
                       }
                  for (let l=0; l<items.length; l++){
                     if (re.claims[propertyIds[i]][j].qualifiers[props[k]][m].datavalue.value.id !== items[l].id){ continue }
                       if (re.claims[propertyIds[i]][j].qualifiers[props[k]][m].datatype === "wikibase-item"){
                         re.claims[propertyIds[i]][j].qualifiers[props[k]][m].datavalue.value.label = items[l].label;
               //         if (items[k].description !== undefined)
                        re.claims[propertyIds[i]][j].qualifiers[props[k]][m].datavalue.value.description = items[l].description;
              //          if (items[k].aliases !== undefined)
                        re.claims[propertyIds[i]][j].qualifiers[props[k]][m].datavalue.value.aliases = items[l].aliases;                            
                    }
                    if (re.claims[propertyIds[i]][j].qualifiers[props[k]][m].datatype === "commonsMedia"){
                      re.claims[propertyIds[i]][j].qualifiers[props[k]][m].datavalue.value.label = items[l].label;
             //        if (items[k].description !== undefined)
                     re.claims[propertyIds[i]][j].qualifiers[props[k]][m].datavalue.value.description = items[l].description;
              //       if (items[k].aliases !== undefined)
                     re.claims[propertyIds[i]][j].qualifiers[props[k]][m].datavalue.value.aliases = items[l].aliases;                            
                    }
                 }
               }
             }
             for  (let k=0; k<props.length; k++){ //to chronologically order the list of values for a given property           
            if(re.claims[propertyIds[i]][j].qualifiers === undefined) {continue};
            if(re.claims[propertyIds[i]][j].qualifiers[props[k]] === undefined) {continue};    
            if (re.claims[propertyIds[i]][j].qualifiers[props[k]][0].datatype === "time") { 
              re.claims[propertyIds[i]][j].mainsnak.timeOrder = re.claims[propertyIds[i]][j].qualifiers[props[k]][0].datavalue.value.time
              let era=re.claims[propertyIds[i]][j].mainsnak.timeOrder.charAt(0);
              re.claims[propertyIds[i]][j].mainsnak.timeOrder = Number(re.claims[propertyIds[i]][j].mainsnak.timeOrder.replace(/\-/g,"").replace(/\+/g,"").substring(0,8)); 
  
              if (era != "+"){ re.claims[propertyIds[i]][j].mainsnak.timeOrder = -Math.abs(re.claims[propertyIds[i]][j].mainsnak.timeOrder)};
                re.claims[propertyIds[i]].sort(function(a,b){
                  if (a.mainsnak.timeOrder<b.mainsnak.timeOrder)
                  return -1;
                  if (a.mainsnak.timeOrder>b.mainsnak.timeOrder)
                  return 1;
                  return 0
                })
              }
           }
          }
      }
  this.qualifier.addQualifier2ItemDetails(re,propertyIds)
  return re
    }

  addReferenceItemDetails(items, re, propertyIds, lang){  //add labels, definitions and aliases of items in the references
    for (let i=0; i<propertyIds.length; i++){  
          for (let j=0; j<re.claims[propertyIds[i]].length; j++) {           
            if (re.claims[propertyIds[i]][j].references === undefined) {continue}
             for  (let k=0; k<re.claims[propertyIds[i]][j].references.length; k++){
               let props = Object.keys(re.claims[propertyIds[i]][j].references[k].snaks);
                  for(let a=0;a<props.length;a++){
                    for (let l=0; l<items.length; l++){  
                      if(re.claims[propertyIds[i]][j].references[k].snaks[props[a]][0].datatype === "time"){
                        let value = re.claims[propertyIds[i]][j].references[k].snaks[props[a]][0].datavalue.value.time;
                        value = value.substring(0,value.length-10);
                        re.claims[propertyIds[i]][j].references[k].snaks[props[a]][0].datavalue.value.date = this.setDate.setDate(value,lang);
                      }
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
                            re.claims[propertyIds[i]][j].references2[m].value.date = referencesArray[l][0].datavalue.value.date; 
                            re.claims[propertyIds[i]][j].references2[m].value.month = referencesArray[l][0].datavalue.value.month; 
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

    addItemInfo(re){ 
    
 // re.info = this.itemInfo.infoListBuilding(re)

    }

}
