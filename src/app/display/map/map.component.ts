import { Component, OnInit, Input } from '@angular/core';
import * as Leaflet from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

  @Input() coords:any;
  
  lat:number;
  lng:number;
  map

  constructor() { 
  }

  ngOnInit(): void {

  this.lat=this.coords.latitude;
  this.lng=this.coords.longitude;
  const itemLocation = { coords: new Leaflet.LatLng(this.lat, this.lng),
    zoom:12 };
     
  let map = Leaflet.map('map');

      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
      .addTo(map);

      Leaflet.marker([this.lat, this.lng]).addTo(map);
 
      map.setView(itemLocation.coords, itemLocation.zoom);
 
   }

}
