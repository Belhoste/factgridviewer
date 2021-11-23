import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SociabilityDisplayService {

  constructor() { }

  setSociabilityDisplay(item, sociabilityAndCulture){

    if (item[0].claims.P91 !==undefined){ //member of
      item[1].splice(item[1].indexOf("P91"),1); 
      sociabilityAndCulture.push(item[0].claims.P91); 
    }
    if (item[0].claims.P454 !==undefined){ //proposed to become a member of
      item[1].splice(item[1].indexOf("P454"),1);
      sociabilityAndCulture.push(item[0].claims.P454); 
    }
    if (item[0].claims.P192 !==undefined){ //friendship
      item[1].splice(item[1].indexOf("P192"),1);
      sociabilityAndCulture.push(item[0].claims.P192); 
    }  
    if (item[0].claims.P447 !==undefined){ //masonic degree
      item[1].splice(item[1].indexOf("P447"),1);
      sociabilityAndCulture.push(item[0].claims.P447); 
    } 
    if (item[0].claims.P497 !==undefined){ //interested in
      item[1].splice(item[1].indexOf("P497"),1);
      sociabilityAndCulture.push(item[0].claims.P497); 
    }  
    if (item[0].claims.P167 !==undefined){ //contributor to
      item[1].splice(item[1].indexOf("P167"),1);
      sociabilityAndCulture.push(item[0].claims.P167); 
    }
    if (item[0].claims.P278 !==undefined){ //Subscriptions signed
      item[1].splice(item[1].indexOf("P278"),1);
      sociabilityAndCulture.push(item[0].claims.P278); 
    }
  return sociabilityAndCulture
  }
}
