import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaceDisplayService {

  constructor() { }

  ///place
  item:any;
  locationAndSituation:any[] =[];
    
  if (this.item[0].claims.P48 !==undefined){ //geographic coordinates
    this.item[1].splice(this.item[1].indexOf("P48"),1);
    this.locationAndSituation.push(this.item[0].claims.P48);}
  
  if (item[0].claims.P58 !==undefined){ //number of inhabitants
    item[1].splice(item[1].indexOf("P58"),1);
    this.locationAndSituation.push(item[0].claims.P58); 
    }  
  
  if (item[0].claims.P297 !==undefined){ //territorial affiliation
    item[1].splice(item[1].indexOf("P297"),1);
    this.locationAndSituation.push(item[0].claims.P297); 
    }  
  
  if (item[0].claims.P466 !==undefined){  //capital of
    item[1].splice(item[1].indexOf("P466"),1);
    this.locationAndSituation.push(item[0].claims.P466); 
    }   
  
  if (item[0].claims.P538 !==undefined){  //historical county
    item[1].splice(item[1].indexOf("P538"),1);
    this.locationAndSituation.push(item[0].claims.P538); 
    } 
  
    if (item[0].claims.P461 !==undefined){  //named after
    item[1].splice(item[1].indexOf("P461"),1);
      this.locationAndSituation.push(item[0].claims.P461); 
    }  

}