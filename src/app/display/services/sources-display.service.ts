import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SourcesDisplayService {

  constructor() { }

  setSourcesDisplay(item, sourcesList){

    // sources
    if (item[0].claims.P12 !==undefined){ //literature
      item[1].splice(item[1].indexOf("P12"),1);
      sourcesList.push(item[0].claims.P12);
    }
    if (item[0].claims.P51 !==undefined){ //primary source
      item[1].splice(item[1].indexOf("P51"),1);
      sourcesList.push(item[0].claims.P51);
    }
    if (item[0].claims.P143 !==undefined){ //mentioned in
      item[1].splice(item[1].indexOf("P143"),1);
      sourcesList.push(item[0].claims.P143);
    }
    if (item[0].claims.P185 !==undefined){ //archives at
      item[1].splice(item[1].indexOf("P185"),1);
      sourcesList.push(item[0].claims.P185);
    }
    if (item[0].claims.P146 !== undefined) { //on line information
      item[1].splice(item[1].indexOf("P146"), 1);
      sourcesList.push(item[0].claims.P146);
    }

    return sourcesList
   }
}
