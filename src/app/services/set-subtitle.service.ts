import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetSubtitleService {

  private lang:string = localStorage['selectedLang'];

  show(lang);

  show(){x =>console.log(x)};



  constructor() { }
}
