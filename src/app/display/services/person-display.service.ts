import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonDisplayService {

  constructor() { }

  setPersonDisplay(item, lifeAndFamily){

    // life and family
    
    if (item[0].claims.P154 !==undefined){ //sex
      item[1].splice(item[1].indexOf("P154"),1);
      lifeAndFamily.push(item[0].claims.P154);
    }
    if (item[0].claims.P247 !==undefined){ //name
      item[1].splice(item[1].indexOf("P247"),1);
      lifeAndFamily.push(item[0].claims.P247);
    }
/*    if (item[0].claims.Q28006 !== undefined){ //marital name
      item[1].splice(item[1].indexOf("Q28006"),1);
      lifeAndFamily.push(item[0].claims.Q28006);
      } 
    if (item[0].claims.Q468366 !== undefined){ //marital name
      item[1].splice(item[1].indexOf("Q468366"),1);
      lifeAndFamily.push(item[0].claims.Q468366);
      }
*/
    if (item[0].claims.P248 !==undefined){ //forenames
      item[1].splice(item[1].indexOf("P248"),1);
      lifeAndFamily.push(item[0].claims.P248);
    }
    if (item[0].claims.P140 !==undefined){ //Illuminati code name
      item[1].splice(item[1].indexOf("P140"),1);
      lifeAndFamily.push(item[0].claims.P140);
    }
    if (item[0].claims.P139 !==undefined){ //Illuminati code name of
      item[1].splice(item[1].indexOf("P139"),1);
      lifeAndFamily.push(item[0].claims.P139);
    }
    if (item[0].claims.P363 !==undefined){ //Strict Observance code name
      item[1].splice(item[1].indexOf("P363"),1);
      lifeAndFamily.push(item[0].claims.P363);
    }
    if (item[0].claims.P148 !==undefined){ //Strict Observance order name of
      item[1].splice(item[1].indexOf("P148"),1);
      lifeAndFamily.push(item[0].claims.P148);
    }
    if (item[0].claims.P530 !==undefined){ //Name with the Asiatic Brethren
      item[1].splice(item[1].indexOf("P530"),1);
      lifeAndFamily.push(item[0].claims.P530);
    }
    if (item[0].claims.P354 !==undefined){ //Rosicrucian code name
      item[1].splice(item[1].indexOf("P354"),1);
      lifeAndFamily.push(item[0].claims.P354);
    }
    if (item[0].claims.P77 !==undefined){ //birthday
      item[1].splice(item[1].indexOf("P77"),1);
      lifeAndFamily.push(item[0].claims.P77);
    }
    if (item[0].claims.P37 !==undefined){ //date of baptism
      item[1].splice(item[1].indexOf("P37"),1);
      lifeAndFamily.push(item[0].claims.P37);
    }
    if (item[0].claims.P82 !==undefined){ //birthplace
      item[1].splice(item[1].indexOf("P82"),1);
      lifeAndFamily.push(item[0].claims.P82);
    }
    if (item[0].claims.P290 !==undefined){ //life span (at least) from
      item[1].splice(item[1].indexOf("P290"),1);
      lifeAndFamily.push(item[0].claims.P290);
    }
    if (item[0].claims.P186 !==undefined){ //medical conditions
      item[1].splice(item[1].indexOf("P186"),1);
      lifeAndFamily.push(item[0].claims.P186);
    }
    if (item[0].claims.P1267 !== undefined) { // signature
      item[1].splice(item[1].indexOf("P1267"), 1);
      lifeAndFamily.push(item[0].claims.P1267);
    }
    if (item[0].claims.P580 !==undefined){ //escape/emigration to
      item[1].splice(item[1].indexOf("P580"),1);
      lifeAndFamily.push(item[0].claims.P580);
    }
    if (item[0].claims.P38 !==undefined){ //deathday
      item[1].splice(item[1].indexOf("P38"),1);
      lifeAndFamily.push(item[0].claims.P38);
    }
    if (item[0].claims.P168 !==undefined){ //deathplace
      item[1].splice(item[1].indexOf("P168"),1);
      lifeAndFamily.push(item[0].claims.P168);
    }
    if (item[0].claims.P162 !==undefined){ //cause of death
      item[1].splice(item[1].indexOf("P162"),1);
      lifeAndFamily.push(item[0].claims.P162);
    }
    if (item[0].claims.P40 !==undefined){ //burialdate
      item[1].splice(item[1].indexOf("P40"),1);
      lifeAndFamily.push(item[0].claims.P40);
    }
    if (item[0].claims.P79 !==undefined){ //grave
      item[1].splice(item[1].indexOf("P79"),1);
      lifeAndFamily.push(item[0].claims.P79);
    }
    if (item[0].claims.P141 !==undefined){ //father
      item[1].splice(item[1].indexOf("P141"),1);
      lifeAndFamily.push(item[0].claims.P141);
    }
    if (item[0].claims.P142 !==undefined){ //mother
      item[1].splice(item[1].indexOf("P142"),1);
      lifeAndFamily.push(item[0].claims.P142);
    }
    if (item[0].claims.P203 !==undefined){ //siblings
      item[1].splice(item[1].indexOf("P203"),1);
      lifeAndFamily.push(item[0].claims.P203);
    }
    if (item[0].claims.P84 !==undefined){ //marriage
      item[1].splice(item[1].indexOf("P84"),1);
      lifeAndFamily.push(item[0].claims.P84);
    }
    if (item[0].claims.P200 !==undefined){ //number of children
      item[1].splice(item[1].indexOf("P200"),1);
      lifeAndFamily.push(item[0].claims.P200);
    }
    if (item[0].claims.P150 !==undefined){  //children
      item[1].splice(item[1].indexOf("P150"),1);
      lifeAndFamily.push(item[0].claims.P150);
    }
    if (item[0].claims.P172 !==undefined){ //religion
      item[1].splice(item[1].indexOf("P172"),1);
      lifeAndFamily.push(item[0].claims.P172);
    }
    if(item[0].claims.P83 !==undefined){ // place (residence)
      item[1].splice(item[1].indexOf("P83"),1);
       lifeAndFamily.push(item[0].claims.P83);
    }
    if (item[0].claims.P296 !==undefined){ //sejour
      item[1].splice(item[1].indexOf("P296"),1);
      lifeAndFamily.push(item[0].claims.P296);
    }
    if (item[0].claims.P208 !==undefined){ //address
      item[1].splice(item[1].indexOf("P208"),1);
      lifeAndFamily.push(item[0].claims.P208);
    }
  return lifeAndFamily

  }
}
