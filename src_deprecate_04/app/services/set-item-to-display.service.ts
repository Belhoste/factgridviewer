import { Injectable } from '@angular/core';
import { DetailsService } from './details.service';

@Injectable({
  providedIn: 'root'
})
export class SetItemToDisplayService {

  constructor(private details: DetailsService) { }

  setItemToDisplay(u) {

    let values: any[] = Object.values(u.claims) ;
    let mainsnaks = [];
    let mainsnaks2 = [];
  
    const baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=' ;
    const getUrlSuffix= '&props=labels|descriptions&format=json' ;
  
    console.log(u.claims);
    console.log(values);
    
    for (const val of values) { //mainsnaks
      let i:number;
      for (i=0; i<val.length; i++)
       { if (val[0].mainsnak === undefined) continue; mainsnaks.push( val[i].mainsnak) }
       }
     ;
  
  for (const val of mainsnaks) { //array of objects {P:Q}
    if (val.datavalue.value.id === undefined) continue; mainsnaks2.push("{"+val.property+":"+val.datavalue.value.id+"}")
  };
  
    //console.log(mainsnaks);
  
    //console.log(mainsnaks2);

    return mainsnaks2

  }

  addDetails(properties,claims){
    for (let i = 0; i < properties.length; i++) {
    let p=properties[i];
    claims[i].label = properties[i].label;
    }
    return claims
    }

  

}
