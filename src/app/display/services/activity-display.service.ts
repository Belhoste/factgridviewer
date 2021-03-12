import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityDisplayService {   //activities

  constructor() { }

  setActivityDisplay(item, activityDetail){

    if (item[0].claims.P267 !==undefined){  //organisational context     
      item[1].splice(item[1].indexOf("P267"),1);
      activityDetail.push(item[0].claims.P267); 
    }
    return activityDetail
   }
}