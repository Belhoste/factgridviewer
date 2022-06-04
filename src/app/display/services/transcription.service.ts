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
u2=u2.replaceAll(">[<");
u2=u2.replaceAll(">]<");
u2=u2.replaceAll("mw-healine","property2");
u2=u2.replaceAll(" (talk</a>)","");
v=u2.replaceAll("</p><p>","");
//u=u.replaceAll('<span class="mw-editsection"><span class="mw-editsection-bracket">[</span>edit</a><span class="mw-editsection-bracket">]</span></span>',"");

/*let mapObj = {
"mw-healine":"property2",
"talk</a>)":"",
"</p><p>":"",
'<span class="mw-editsection"><span class="mw-editsection-bracket">[</span>edit</a><span class="mw-editsection-bracket">]</span></span>':""
};
u=u.replace(/'<span class="mw-editsection"><span class="mw-editsection-bracket">'|"mw-headline"|"talk<\/a>)"|"<\/p><p>"/, function(matched){return mapObj[matched];}); */

return v
}

}
