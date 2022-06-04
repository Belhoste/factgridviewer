import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranscriptionService {

  constructor() { }

cleaning(u){
let v="";
let regex = /<\s*a[^>]*>/g
u=u.replace(regex,"");
let regex1 = /<\s*![^>]*>/g
u=u.replace(regex1,"");
let regex2 = /<\s*s[^>]*>/g;
u=u.replace(regex2,"");
u=u.replaceAll("span>edit",""),
u=u.replaceAll(">[<");
u=u.replaceAll(">]<");
u=u.replaceAll("mw-healine","property2");
u=u.replaceAll(" (talk</a>)","");
v=u.replaceAll("</p><p>","");
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
