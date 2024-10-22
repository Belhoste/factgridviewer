import { Injectable, inject } from '@angular/core';
import { MapService} from './map.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceDisplayService {
  private mapDisplay = inject(MapService);


  ///place

  setPlaceDisplay(item,locationAndSituation){
    
  if (item[0].claims.P48 !==undefined){ //geographic coordinates
    item[1].splice(item[1].indexOf("P48"),1);
    locationAndSituation.push(item[0].claims.P48);}
  
  if (item[0].claims.P58 !==undefined){ //number of inhabitants
    item[1].splice(item[1].indexOf("P58"),1);
    locationAndSituation.push(item[0].claims.P58); 
    }  
  
  if (item[0].claims.P297 !==undefined){ //territorial affiliation
    item[1].splice(item[1].indexOf("P297"),1);
    locationAndSituation.push(item[0].claims.P297); 
    }  
  
  if (item[0].claims.P466 !==undefined){  //capital of
    item[1].splice(item[1].indexOf("P466"),1);
    locationAndSituation.push(item[0].claims.P466); 
    }   
  
  if (item[0].claims.P538 !==undefined){  //historical county
    item[1].splice(item[1].indexOf("P538"),1);
    locationAndSituation.push(item[0].claims.P538); 
    } 
  
    if (item[0].claims.P461 !==undefined){  //named after
    item[1].splice(item[1].indexOf("P461"),1);
      locationAndSituation.push(item[0].claims.P461); 
    }  
    if (item[0].claims.P140 !==undefined){ //Illuminati code nameng ser 
      item[1].splice(item[1].indexOf("P140"),1);
      locationAndSituation.push(item[0].claims.P140);
    }
    if (item[0].claims.P139 !==undefined){ //Illuminati code name of 
      item[1].splice(item[1].indexOf("P139"),1);
      locationAndSituation.push(item[0].claims.P139);
    }
    if (item[0].claims.P267 !==undefined){ //organisational context
        item[1].splice(item[1].indexOf("P267"),1);
        locationAndSituation.push(item[0].claims.P267);
      }

    return locationAndSituation
  }
}
