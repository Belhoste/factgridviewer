//import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input, ChangeDetectorRef, inject } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import * as Leaflet from 'leaflet';


@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
    standalone: true
})

export class MapComponent implements OnInit {
  private changeDetector = inject(ChangeDetectorRef);
  private route = inject(ActivatedRoute);

  
  latitude:string;
  longitude: string;
  mapZoom: string;
  lat: number;
  lng: number;
  zoom: number;

  ngOnInit(): void {
  
  this.route.params.
  subscribe( 
    params => {
      let latitude = params['lat']; let longitude = params['lng']; let zoom =params['z']; 
    this.lat = Number(latitude);
      this.lng = Number(longitude);
      this.zoom = Number(zoom);
      const itemLocation = { coords: new Leaflet.LatLng(this.lat, this.lng),
      zoom:this.zoom };
                        
       let map = Leaflet.map('map');
  
        Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
        .addTo(map);
  
        Leaflet.marker([this.lat, this.lng]).addTo(map);
   
        map.setView(itemLocation.coords, itemLocation.zoom);

      })
   }

   ngOnDestroy(): void {
    
   }
 
}
