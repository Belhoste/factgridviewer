import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CareerDisplayService {

  constructor() { }

  setCareerDisplay(item, careerAndActivities){

    // careerAndAcitivities

    if (item[0].claims.P164 !==undefined){ //position
      item[1].splice(item[1].indexOf("P164"),1);
      careerAndActivities.push(item[0].claims.P164); 
    }  
    if (item[0].claims.P165 !==undefined){ //activities
      item[1].splice(item[1].indexOf("P165"),1);
      careerAndActivities.push(item[0].claims.P165); 
    }  
    if (item[0].claims.P315 !==undefined){ //employer
      item[1].splice(item[1].indexOf("P315"),1);
      careerAndActivities.push(item[0].claims.P315); 
    }  
    if (item[0].claims.P242 !==undefined){ //events witnessed
      item[1].splice(item[1].indexOf("P242"),1);
      careerAndActivities.push(item[0].claims.P242); 
    }  
    if (item[0].claims.P119 !==undefined){ //active participant in
      item[1].splice(item[1].indexOf("P119"),1);
      careerAndActivities.push(item[0].claims.P119); 
    }  
    if (item[0].claims.P776 !==undefined){  //business partner    
      item[1].splice(item[1].indexOf("P776"),1);
      careerAndActivities.push(item[0].claims.P776); 
    }
    if (item[0].claims.P208 !==undefined){     //professional address 
      if(item[0].claims.P208[0].qualifiers.P437 !==undefined){
        console.log(item[0].claims.P208[0].qualifiers.P437[0].datavalue.value.id);
        for (let i=0;i<item[0].claims.P208[0].qualifiers.P437.length;i++){         
          if (item[0].claims.P208[0].qualifiers.P437[i].datavalue.value.id==="Q448941"){
            console.log(item[0].claims.P208[0].qualifiers.P437[i].datavalue.value.id);
            item[1].splice(item[1].indexOf("P208"),1);
            careerAndActivities.push(item[0].claims.P208); 
          }
        }
      }
    }
    return careerAndActivities
  }
}
