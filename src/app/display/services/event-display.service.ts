import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventDisplayService {

  constructor() { }

  setEventDisplay(item, eventDetail){
    if (item[0].claims.P47 !==undefined){  //localisation
      item[1].splice(item[1].indexOf("P47"),1);
      eventDetail.push(item[0].claims.P47); 
    }
    if (item[0].claims.P106 !==undefined){  //date
      item[1].splice(item[1].indexOf("P106"),1);
      eventDetail.push(item[0].claims.P106); 
    }
    if (item[0].claims.P66 !==undefined){  //institution signing responsible
      item[1].splice(item[1].indexOf("P66"),1);
      eventDetail.push(item[0].claims.P66); 
    }
    if (item[0].claims.P133 !==undefined){  //participants
      item[1].splice(item[1].indexOf("P133"),1);
      eventDetail.push(item[0].claims.P133); 
    }
  return eventDetail
  }
}
