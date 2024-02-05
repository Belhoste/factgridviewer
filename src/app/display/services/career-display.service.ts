import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CareerDisplayService {

  constructor() { }

  setCareerDisplay(item, careerAndActivities){

    // careerAndActivities

    if (item[0].claims.P164 !==undefined){ //position
      item[1].splice(item[1].indexOf("P164"),1);
      careerAndActivities.push(item[0].claims.P164); 
    }  
    if (item[0].claims.P165 !==undefined){ //activities
      item[1].splice(item[1].indexOf("P165"),1);
      careerAndActivities.push(item[0].claims.P165); 
    }  
    if (item[0].claims.P865){ //professional address
      item[1].splice(item[1].indexOf("P865"),1);
      careerAndActivities.push(item[0].claims.P865); 
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
    return careerAndActivities
  }
}

