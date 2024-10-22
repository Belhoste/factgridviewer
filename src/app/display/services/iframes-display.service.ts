import { Injectable, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IframesDisplayService {
  private sanitizer = inject(DomSanitizer);

  

setIframesDisplay(item, iframes){

  if (item[0].claims.P309 !==undefined){  //FactGrid table of contents     
    console.log(item[0].claims.P309[0].mainsnak.datavalue.value);
    item[1].splice(item[1].indexOf("P309"),1);
    for (let i=0; i<item[0].claims.P309[i].length; i++){
      item[0].claims.P309[i].mainsnak.datatype=item[0].claims.P309[i].mainsnak.datavalue.value;
      item[0].claims.P309.iframe[i]= item[0].claims.P309[i].mainsnak.datavalue.value ;}
      iframes.push(item[0].claims.P309);
      console.log(iframes);
  }

  if (item[0].claims.P320 !==undefined){  //FactGrid list of members     
    item[1].splice(item[1].indexOf("P320"),1);
    for (let i=0; i<item[0].claims.P320[i].length; i++){
      item[0].claims.P320[i].mainsnak.datatype=item[0].claims.P320[i].mainsnak.datavalue.value;
      item[0].claims.P320.iframe[i]= item[0].claims.P320[i].mainsnak.datavalue.value ;}
      iframes.push(item[0].claims.P320);
    }
  
    
  if (item[0].claims.P679 !==undefined){ //house numbers
    console.log(item[0].claims.P679);
    item[1].splice(item[1].indexOf("P679"),1);
    for (let i=0; i<item[0].claims.P679[i].length; i++){
      item[0].claims.P679[i].mainsnak.datatype=item[0].claims.P679[i].mainsnak.datavalue.value;
      item[0].claims.P679.iframe[i]= item[0].claims.P679[i].mainsnak.datavalue.value ;}
      iframes.push(item[0].claims.P679);
    }
    
  if (item[0].claims.P693 !==undefined){ //FactGrid map visualisation
    item[1].splice(item[1].indexOf("P693"),1); 
    for (let i=0; i<item[0].claims.P693[i].length; i++){   
      item[0].claims.P693[i].mainsnak.datatype=item[0].claims.P693[i].mainsnak.datavalue.value;
      item[0].claims.P693.iframe[i]= item[0].claims.P693[i].mainsnak.datavalue.value ;}
      iframes.push(item[0].claims.P693);
    } 

  if (item[0].claims.P720 !==undefined){ //FactGrid list
    item[1].splice(item[1].indexOf("P720"),1);    
    for (let i=0; i<item[0].claims.P720[i].length; i++){
      item[0].claims.P720[i].mainsnak.datatype=item[0].claims.P720[i].mainsnak.datavalue.value;
      item[0].claims.P720.iframe[i]= item[0].claims.P720[i].mainsnak.datavalue.value ;}
      iframes.push(item[0].claims.P720);
    } 
    }

    setHouseNumbersQuery(res){
      res = res.replace("item%","viewer%");
      res = res.replace("%7D%7D",`%7D%20BIND%28STRAFTER%28STR%28%3Fitem%29%2C%20STR%28wd%3A%29%29%20AS%20%3FitemId%29%20BIND%28IRI%28CONCAT%28%22https%3A%2F%2Fdatabase.factgrid.de%2Fviewer%2Fitem%2F%22%2C%20%3FitemId%29%29%20AS%20%3Fviewer%29%7D%0A`);
      return res
    }
  }
