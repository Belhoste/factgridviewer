import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackListDetailsService {

  constructor() { }

setBackList(list:any[]) {
  let backList:any[]=[];
  for (let i=0;i<list.length;i++){
  backList[i]={id:"", label:""};
  let u = list[i]['title'];
  backList[i].id=u.substring(5);
  if(list[i]['entityterms']===undefined){continue};
  backList[i].label=list[i]['entityterms']['label'][0];
  }
  return backList
}

}
