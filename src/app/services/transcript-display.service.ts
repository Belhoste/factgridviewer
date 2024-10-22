import { Injectable, inject } from '@angular/core';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranscriptDisplayService {
  private request = inject(RequestService);


  transcript(u){
    let txt;
    console.log(u);
    let v= u.replace("https://database.factgrid.de/wiki/","");
    v=v.replace("#Transcript","");
    v=this.request.getTranscript(v);
   return v
    
    //.pipe(
 //     map(res =>res.subscribe(res=>console.log(res)),
//     map(res =>{ console.log(res.parse) }));
  //  )
   // this.request.subscribe(res => console.log(res));
    return v
  }
}
