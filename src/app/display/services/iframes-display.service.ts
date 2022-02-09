import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IframesDisplayService {

  constructor(private sanitizer: DomSanitizer) { }
  

  setIframesDisplay(item, iframes){

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
