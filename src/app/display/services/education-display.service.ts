import { Injectable } from '@angular/core';
import { resolveTripleslashReference } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class EducationDisplayService {

  constructor() { }

  setEducationDisplay(item, education){

    //education

   if(item[0].claims.P160 !==undefined){ // educating institutions
    item[1].splice(item[1].indexOf("P160"),1);
    education.push(item[0].claims.P160) 
   }

   if(item[0].claims.P304 !==undefined){ //subjects studied at university
    item[1].splice(item[1].indexOf("P304"),1);
    education.push(item[0].claims.P304);
   }

   if(item[0].claims.P170 !==undefined){ //academic degree
    item[1].splice(item[1].indexOf("P170"),1);
    education.push(item[0].claims.P170);
   }

   if(item[0].claims.P161 !==undefined){ //teachers
    item[1].splice(item[1].indexOf("P161"),1);
    education.push(item[0].claims.P161);
   }
  return education

  }
}
