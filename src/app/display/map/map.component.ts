import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import * as Leaflet from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

// @Input() coords:any;
  
  latitude:string;
  longitude:string;
  lat:number;
  lng:number;
  map;

  constructor(private changeDetector:ChangeDetectorRef, private route:ActivatedRoute) { 
  }

  ngOnInit(): void {

  this.route.params.
  subscribe( 
  params => { let latitude = params['lat']; let longitude = params['lng']; 
    this.lat = Number(latitude);
    this.lng = Number(longitude);
    const itemLocation = { coords: new Leaflet.LatLng(this.lat, this.lng),
      zoom:12 };
      console.log(itemLocation);
       
    let map = Leaflet.map('map');
  
        Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
        .addTo(map);
  
        Leaflet.marker([this.lat, this.lng]).addTo(map);
   
        map.setView(itemLocation.coords, itemLocation.zoom);})
   }

   ngOnDestroy(): void {
    
   }
  
 
 
 
 
 
}
