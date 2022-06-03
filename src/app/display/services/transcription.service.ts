import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranscriptionService {

  constructor() { }

cleaning(u){
let regex = /<\s*a[^>]*>/g
u=u.replace(regex,"");
let regex1 = /<\s*![^>]*>/g
u=u.replace(regex1,"");
u=u.replaceAll("mw-healine","property2");
u=u.replaceAll(" (talk</a>)","");
u=u.replaceAll("</p><p>","");
u=u.replaceAll('<span class="mw-editsection"><span class="mw-editsection-bracket">[</span>edit</a><span class="mw-editsection-bracket">]</span></span>',"");
u=u.replaceAll("","");

//if(u.error !==undefined){ u = "no"}
console.log(u);

/*let mapObj = {
"mw-healine":"property2",
"talk</a>)":"",
"</p><p>":"",
'<span class="mw-editsection"><span class="mw-editsection-bracket">[</span>edit</a><span class="mw-editsection-bracket">]</span></span>':""
};
u=u.replace(/'<span class="mw-editsection"><span class="mw-editsection-bracket">'|"mw-headline"|"talk<\/a>)"|"<\/p><p>"/, function(matched){return mapObj[matched];}); */

return u
}

}
