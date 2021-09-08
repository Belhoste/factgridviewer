import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueriesService {

  constructor() { }

selectionGenerator(values:string[]){
  let simpleSelection="SELECT%3F";
  let completeSelection="SELECT%3F" 
  for (let i=0;i<values.length;i++){ 
    let valueLabel:string=values[i]+"Label"; 
    let valueDescription:string=values[i]+"Description";
    simpleSelection=simpleSelection+values[i]+"%3F"+valueLabel+"%3F"+valueDescription; 
    completeSelection=completeSelection+values[i]+"%3F"+valueLabel+"%3F"+valueDescription
    }
    return [simpleSelection, completeSelection]
  }

valueGenerator(value:string,items:string[]){ 
  let list="";
  for (let i=0;i<items.length;i++){ list=list+"%20wd%3A"+items[i] };
  let u = "VALUES%3F"+value+"%7B"+list+"%7D."
  return u
}

clauseGenerator(subject, predicate, object){ let clause:string = "%3F"+subject+"%20wdt%3A"+predicate+"%3F"+object;
  return clause

}
  

}
