import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IframesDisplayService {

  constructor(private sanitizer: DomSanitizer) { }
  

setIframesDisplay(item, iframes){

  if (item[0].claims.P309 !==undefined){  //FactGrid table of contents     
    item[1].splice(item[1].indexOf("P309"),1);
    item[0].claims.P309[0].mainsnak.datatype=item[0].claims.P309[0].mainsnak.datavalue.value;
    item[0].claims.P309.iframe= item[0].claims.P309[0].mainsnak.datavalue.value ;
    iframes.push(item[0].claims.P309);
  }

  if (item[0].claims.P320 !==undefined){  //FactGrid list of members     
      item[1].splice(item[1].indexOf("P320"),1);
      item[0].claims.P320[0].mainsnak.datatype=item[0].claims.P320[0].mainsnak.datavalue.value;
      item[0].claims.P320.iframe= item[0].claims.P320[0].mainsnak.datavalue.value ;
      iframes.push(item[0].claims.P320);
    }
    
    if (item[0].claims.P679 !==undefined){ //house numbers
      item[1].splice(item[1].indexOf("P679"),1);
      item[0].claims.P679[0].mainsnak.datatype=item[0].claims.P679[0].mainsnak.datavalue.value;
      item[0].claims.P679.iframe= item[0].claims.P679[0].mainsnak.datavalue.value ;
      iframes.push(item[0].claims.P679);
    }
    
   if (item[0].claims.P693 !==undefined){ //FactGrid map visualisation
      item[1].splice(item[1].indexOf("P693"),1);    
      item[0].claims.P693[0].mainsnak.datatype=item[0].claims.P693[0].mainsnak.datavalue.value;
      item[0].claims.P693.iframe= item[0].claims.P693[0].mainsnak.datavalue.value ;
      iframes.push(item[0].claims.P693);
    } 
    }
  }
 

