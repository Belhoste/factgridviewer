import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranscriptDisplayService {

  constructor( private request:RequestService ) { }

  transcript(u){
    let txt;
    console.log(u);
    let v= u.replace("https://database.factgrid.de/wiki/","");
    v=v.replace("#Transcript","");
    console.log(v);
    v=this.request.getTranscript(v);
    v.subscribe(res =>console.log(res))
    v.pipe(map(res=>console.log(res)));
   return v
    
    //.pipe(
 //     map(res =>res.subscribe(res=>console.log(res)),
//     map(res =>{ console.log(res.parse) }));
  //  )
   // this.request.subscribe(res => console.log(res));
    return v
  }
}
