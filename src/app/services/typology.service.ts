import { Injectable, inject } from '@angular/core';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TypologyService {
  private request = inject(RequestService);


getValue(id){
  let result = "";
  let result2;
  let prefix="https://database.factgrid.de/wiki/Special:EntityData/";
  let suffix=".json"; 
  let re=prefix+id+suffix;
  this.request.getItem(re)
  .pipe(map(res => { 
      Object.values(res["entities"])[0]["claims"].P2[0].mainsnak.datavalue.value.id ;
       ;
    }
  ))
 //  .subscribe(res => {   console.log(res) }
 //  )
   return result
  } 
  

//  console.log(result)
 
//    u = Object.values(res["entities"])[0]["claims"].P2;
 // for (let i=0; i<u.length; i++){

 // res.subscribe (res =>console.log(res));
}
  

/*  for (let i=0; i<re.claims.P2.length; i++){
   let res = this.request.getItem(prefix+re.claims.P2[i].mainsnak.datavalue.value.id+suffix)
  let u= res.pipe(map(res =>res= Object.values(res.entities)[0]["claims"].P2[0].mainsnak.datavalue.value.id));//.pipe(map(res => res["claims"]))
   u.subscribe(res=>{ result.push(res) });
  }*/
  //return result


  /*  u = Object.values(res["entities"])[0]["claims"].P2 ;
   for (let i=0; i<u.length; i++){
     result.push(u[i].mainsnak.datavalue.value.id)
   }; 
   res = result} 
   )) */

