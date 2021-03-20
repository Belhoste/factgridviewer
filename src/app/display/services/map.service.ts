import { Injectable } from '@angular/core';
import * as Leaflet from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  displayMap(coords) { 

    console.log(coords);
 
    let lat=coords.datavalue.value.latitude;
    let lng=coords.datavalue.value.longitude;
     const itemLocation = { coords: new Leaflet.LatLng(lat, lng),
       zoom:12 };

        
 /*    let map = Leaflet.map('map');
   
         Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
         .addTo(map);
   
         Leaflet.marker([lat, lng]).addTo(map);
    
         map.setView(itemLocation.coords, itemLocation.zoom);
  */

         return [lat, lng, coords, itemLocation]
    
      }

}
