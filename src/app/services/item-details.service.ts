import { Injectable } from '@angular/core';
import { SetTimeService} from './set-time.service';
import { FactgridSubtitlesService } from './factgrid-subtitles.service'
import { QualifierDetailsService } from './qualifier-details.service';
import { TypologyService} from './typology.service';
import { ItemInfoService } from './item-info.service';
import { LongestWordService } from './longest-word.service'

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsService {

  private baseWikimediaURL ='http://commons.wikimedia.org/wiki/Special:FilePath/';

  constructor(private setDate:SetTimeService, private factgrid:FactgridSubtitlesService, private qualifier:QualifierDetailsService, private typology:TypologyService, private itemInfo:ItemInfoService, private longestLength:LongestWordService) { }

  qualifiers2:any[];

  addLongestWordLength(re) { re.longestWordLength = this.longestLength.findLongestWord(re.label) };

   addClaimItemDetails(items,re,itemProperties, lang){ // add labels, descriptions and aliases to the items in the mainsnaks   
    for (let i=0; i<itemProperties.length; i++){
      let timeOrder = 23000000;
      re.claims[itemProperties[i]].datatype = re.claims[itemProperties[i]][0].mainsnak.datatype;
  //     if(re.claims[itemProperties[i]][0].mainsnak.datatype =="external-id"){re.claims[itemProperties[i]].external ="1"}; // add external = "1" if external link property
      for (let j=0; j<re.claims[itemProperties[i]].length; j++){
        re.claims[itemProperties[i]][j].mainsnak.timeOrder=timeOrder;
        if(re.claims[itemProperties[i]][j].mainsnak.datatype === "time"){
          let value= re.claims[itemProperties[i]][j].mainsnak.datavalue.value.time;
          value = value.substring(0,value.length-10);
          re.claims[itemProperties[i]][j].mainsnak.datavalue.value.date = this.setDate.setDate(value,lang);
        }
    //add typology, that is the nature of the item    
  /*  if(itemProperties[i] === "P2"){
      let u ="";
     re.claims[itemProperties[i]][j].typology = this.typology.getValue(re.claims[itemProperties[i]][j].mainsnak.datavalue.value.id);
   
    }*/
    
        if(itemProperties[i] === "P189" || itemProperties[i] === "P556" || itemProperties[i] === "P181"){
          re.claims[itemProperties[i]][j].picture = this.baseWikimediaURL+re.claims[itemProperties[i]][j].mainsnak.datavalue.value
        }
        if(itemProperties[i] === "P188"){
          let u= re.claims[itemProperties[i]][j].mainsnak.datavalue.value.substring(0,5);
          if(u !== "http:") {
            re.claims[itemProperties[i]][j].picture = re.claims[itemProperties[i]][j].mainsnak.datavalue.value 
          }
        }
        if ( itemProperties[i] === "P320")
        { re.claims[itemProperties[i]][j].mainsnak.datatype = "sparql";
     //   if(re.claims[itemProperties[i]][j].mainsnak.datavalue.value.includes("item")===false){ re.claims[itemProperties[i]][j].mainsnak.datavalue.value="undefined"};
    //    if(re.claims[itemProperties[i]][j].mainsnak.datavalue.includes("item")) {console.log(re.claims[itemProperties[i]][j].mainsnak)};
      };
       
      this.factgrid.setSubtitle1(re,itemProperties[i],lang); // to set a subtitle

      if (re.claims[itemProperties[i]][j].mainsnak.datatype !== "wikibase-item") {continue}
      let number:number = j;
      this.factgrid.setSubtitle2(re,itemProperties[i],number,lang)     
       for (let k = 0; k< items.length; k++) {   
        if (re.claims[itemProperties[i]][j].mainsnak.datavalue.value.id === items[k].id){
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

  addQualifierItemDetails(items, re, itemProperties, lang){//add labels, definitions and aliases of items in the qualifiers/*
 //   console.log(items);
    for (let i=0; i<itemProperties.length; i++){ 
        for (let j=0; j<re.claims[itemProperties[i]].length; j++) {
          if(itemProperties[i] =="P2"){ re.claims[itemProperties[i]][j].mainsnak.timeOrder = "0" } ;
          if (re.claims[itemProperties[i]][j].qualifiers === undefined) {continue}
          let props = Object.keys(re.claims[itemProperties[i]][j].qualifiers);
             for  (let k=0; k<props.length; k++){
               for (let l=0; l<props[k].length; l++) {
                 if(re.claims[itemProperties[i]][j].qualifiers[props[k]][l] === undefined){continue};
                  if(re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datatype === "time"){
           //         console.log(re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.time)
          //          if(re.claims[itemProperties[i]][j].qualifiers[props[k]][l] !== undefined) {
                       let value =re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.time
                      value = value.substring(0,value.length-10);
                       re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.date = this.setDate.setDate(value,lang);
         //          }
                       }
                  for (let m=0; m<items.length; m++){
              
                     if (re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.id !== items[m].id){ continue }
                       if (re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datatype === "wikibase-item"){
                         re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.label = items[m].label;
               //         if (items[k].description !== undefined)
                        re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.description = items[m].description;
                //       if (items[m].aliases !== undefined) {
                        re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.aliases = items[m].aliases;  
              //          this.roleOfObjectRendering(re.claims[itemProperties[i]][j].qualifiers[props[k]][l]);
                        
                      }
                    if (re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datatype === "commonsMedia"){
                      re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.label = items[m].label;
             //        if (items[k].description !== undefined)
                     re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.description = items[m].description;
              //       if (items[k].aliases !== undefined)
                    re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.aliases = items[m].aliases;                            
                    }
                 }
               }
             }
             for  (let k=0; k<props.length; k++){ //to chronologically order the list of values for a given property           
            if(re.claims[itemProperties[i]][j].qualifiers === undefined) {continue};
            if(re.claims[itemProperties[i]][j].qualifiers[props[k]] === undefined) {continue};    
            if (re.claims[itemProperties[i]][j].qualifiers[props[k]][0].datatype === "time") { 
              re.claims[itemProperties[i]][j].mainsnak.timeOrder = re.claims[itemProperties[i]][j].qualifiers[props[k]][0].datavalue.value.time
              let era=re.claims[itemProperties[i]][j].mainsnak.timeOrder.charAt(0);
              re.claims[itemProperties[i]][j].mainsnak.timeOrder = Number(re.claims[itemProperties[i]][j].mainsnak.timeOrder.replace(/\-/g,"").replace(/\+/g,"").substring(0,8)); 
  
              if (era != "+"){ re.claims[itemProperties[i]][j].mainsnak.timeOrder = -Math.abs(re.claims[itemProperties[i]][j].mainsnak.timeOrder)};
                re.claims[itemProperties[i]].sort(function(a,b){
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
  this.qualifier.addQualifier2ItemDetails(re,itemProperties)
  return re
    }

  addReferenceItemDetails(items, re, itemProperties, lang){  //add labels, definitions and aliases of items in the references
    for (let i=0; i<itemProperties.length; i++){  
          for (let j=0; j<re.claims[itemProperties[i]].length; j++) {           
            if (re.claims[itemProperties[i]][j].references === undefined) {continue}
             for  (let k=0; k<re.claims[itemProperties[i]][j].references.length; k++){
               let props = Object.keys(re.claims[itemProperties[i]][j].references[k].snaks);
                  for(let a=0;a<props.length;a++){
                    for (let l=0; l<items.length; l++){  
                      if(re.claims[itemProperties[i]][j].references[k].snaks[props[a]][0].datatype === "time"){
                        let value = re.claims[itemProperties[i]][j].references[k].snaks[props[a]][0].datavalue.value.time;
                        value = value.substring(0,value.length-10);
                        re.claims[itemProperties[i]][j].references[k].snaks[props[a]][0].datavalue.value.date = this.setDate.setDate(value,lang);
                      }
                      if (re.claims[itemProperties[i]][j].references[k].snaks[props[a]][0].datatype !== "wikibase-item"){continue}
                      if (re.claims[itemProperties[i]][j].references[k].snaks[props[a]][0].datavalue.value.id === items[l].id ){
                          if (re.claims[itemProperties[i]][j].references[k].snaks[props[a]][0] !==undefined) { 
                           re.claims[itemProperties[i]][j].references[k].snaks[props[a]][0].datavalue.value.label = items[l].label;
                        if (items[l].description !== undefined) 
                           re.claims[itemProperties[i]][j].references[k].snaks[props[a]][0].datavalue.value.description = items[l].description;
                        if (items[l].aliases !== undefined)
                           re.claims[itemProperties[i]][j].references[k].snaks[props[a]][0].datavalue.value.aliases = items[l].aliases;               
                          }                     
                        }      
                      } 
                    }                            
                  }
                }
              }
        return re
          }


    addReference2ItemDetails(items, re, itemProperties){ //add the items of the qualifiers to the array qualifiers          
            for (let i=0; i<itemProperties.length; i++){  
              for (let j=0; j<re.claims[itemProperties[i]].length; j++) {
                 if (re.claims[itemProperties[i]][j].references === undefined) {continue}
                   for (let k=0; k<re.claims[itemProperties[i]][j].references.length; k++){
                   let props = Object.keys(re.claims[itemProperties[i]][j].references[k].snaks);
                   let referencesArray = Object.values(re.claims[itemProperties[i]][j].references[k].snaks);//l'objet referencesArray est à revoir, il n'a pas la structure qui convient.                 
                      for (let l=0; l<referencesArray.length; l++){
                        for (let m=0; m<re.claims[itemProperties[i]][j].references2.length;m++){
                          if (re.claims[itemProperties[i]][j].references2[m].value.id === referencesArray[l][0].datavalue.value.id)
                          { re.claims[itemProperties[i]][j].references2[m].value.label === referencesArray[l][0].datavalue.value.label ;
                            re.claims[itemProperties[i]][j].references2[m].value.id === referencesArray[l][0].datavalue.value.id
                            re.claims[itemProperties[i]][j].references2[m].value.time = referencesArray[l][0].datavalue.value.time;
                            re.claims[itemProperties[i]][j].references2[m].value.date = referencesArray[l][0].datavalue.value.date; 
                            re.claims[itemProperties[i]][j].references2[m].value.month = referencesArray[l][0].datavalue.value.month; 
                            if (referencesArray[l][0].datatype === "string"){
                            re.claims[itemProperties[i]][j].references2[m].value.string = referencesArray[l][0].datavalue.value };
                            if (referencesArray[l][0].datatype === "url"){
                              re.claims[itemProperties[i]][j].references2[m].value.url = referencesArray[l][0].datavalue.value };
                            re.claims[itemProperties[i]][j].references2[m].value.label = referencesArray[l][0].datavalue.value.label;
                            re.claims[itemProperties[i]][j].references2[m].value.description = referencesArray[l][0].datavalue.value.description;
                            re.claims[itemProperties[i]][j].references2[m].value.aliases = referencesArray[l][0].datavalue.value.aliases;           
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
