import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranscriptionService {

  constructor() { }

cleaning(u){
let v="";
let u2;
let regex2 = /<\s*s[^>]*>/g;
u2=u.replace(regex2,"");
let regex = /<\s*a[^>]*>/g
u2=u2.replace(regex,"");
let regex1 = /<\s*![^>]*>/g
u2=u2.replace(regex1,"");
u2=u2.replaceAll("span>edit","");
u2=u2.replaceAll("modifier","");
u2=u2.replaceAll(">[<","");
u2=u2.replaceAll(">]<","");
u2=u2.replaceAll("mw-healine","property2");
u2=u2.replaceAll(" (talk</a>)","");
v=u2.replaceAll("</p><p>","");


return v
}

}
