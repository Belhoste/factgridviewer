import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnicalitiesDisplayService {

  constructor() { }

  setTechnicalitiesDisplay(item, technicalities) {

    // technicalities

    if (item[0].claims.P994 !== undefined) { //vocabulary PhiloBiblon-terms
      item[1].splice(item[1].indexOf("P994"), 1);
      technicalities.push(item[0].claims.P994);
    }

    if (item[0].claims.P1132 !== undefined) { //FactGrid keyword
      item[1].splice(item[1].indexOf("P1132"), 1);
      technicalities.push(item[0].claims.P1132);
    }
  }
  }


