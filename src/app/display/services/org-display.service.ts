import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrgDisplayService {

  constructor() { }

 setOrgDisplay(item,locationAndContext){

  if (item[0].claims.P8 !==undefined){  //part of
    item[1].splice(item[1].indexOf("P8"),1);
  locationAndContext.push(item[0].claims.P8); 
  }
  if (item[0].claims.P83 !==undefined){
    item[1].splice(item[1].indexOf("P83"),1);
      locationAndContext.push(item[0].claims.P83); 
  }  
 /* if (item[0].claims.P208 !==undefined){  //address  
    item[1].splice(item[1].indexOf("P208"),1);
    locationAndContext.push(item[0].claims.P208); 
  }*/
  if (item[0].claims.P49 !==undefined){  //begin date     
    item[1].splice(item[1].indexOf("P49"),1);
    locationAndContext.push(item[0].claims.P49); 
  }
  if (item[0].claims.P6 !==undefined){  //continuation of
    item[1].splice(item[1].indexOf("P6"),1);
    locationAndContext.push(item[0].claims.P6); 
  }
 if (item[0].claims.P50 !==undefined){  //end date 
    item[1].splice(item[1].indexOf("P50"),1);
    locationAndContext.push(item[0].claims.P50); 
  }
  if (item[0].claims.P7 !==undefined){  //continued by
    item[1].splice(item[1].indexOf("P7"),1);
    locationAndContext.push(item[0].claims.P7); 
  }
  if (item[0].claims.P449 !==undefined){  //partner organizations
    item[1].splice(item[1].indexOf("P449"),1);
    locationAndContext.push(item[0].claims.P449); 
  }
  if (item[0].claims.P428 !==undefined){  //next higher hierarchy level
    item[1].splice(item[1].indexOf("P428"),1);
    locationAndContext.push(item[0].claims.P428); 
  }
  
  if (item[0].claims.P14 !==undefined){  //in leading positions
    item[1].splice(item[1].indexOf("P14"),1);
    locationAndContext.push(item[0].claims.P14); 
  }
  if (item[0].claims.P465 !==undefined){  //capital
    item[1].splice(item[1].indexOf("P465"),1);
    locationAndContext.push(item[0].claims.P465); 
  }
  if (item[0].claims.P297 !==undefined){  //territorial affiliation
    item[1].splice(item[1].indexOf("P297"),1);
    locationAndContext.push(item[0].claims.P297); 
  }
  if (item[0].claims.P9 !==undefined){  //includes
    item[1].splice(item[1].indexOf("P9"),1);
    locationAndContext.push(item[0].claims.P9); 
  }
  if (item[0].claims.P268 !==undefined){  //founded by
    item[1].splice(item[1].indexOf("P268"),1);
    locationAndContext.push(item[0].claims.P268); 
  }
  if (item[0].claims.P327 !==undefined){  //documented list of members
    item[1].splice(item[1].indexOf("P327"),1);
    locationAndContext.push(item[0].claims.P327); 
  }
  if (item[0].claims.P137 !==undefined){  //history
    item[1].splice(item[1].indexOf("P137"),1);
    locationAndContext.push(item[0].claims.P137); 
  }
  if (item[0].claims.P34 !==undefined){  //name history
    item[1].splice(item[1].indexOf("P34"),1);
    locationAndContext.push(item[0].claims.P34); 
  }
  if (item[0].claims.P521 !==undefined){  //system adhered to
    item[1].splice(item[1].indexOf("P521"),1);
    locationAndContext.push(item[0].claims.P521); 
  }
/*  if (item[0].claims.P320 !==undefined){  //FactGrid list of members     
    item[1].splice(item[1].indexOf("P320"),1);
    locationAndContext.push(item[0].claims.P320); 
  } */

  if (item[0].claims.P338 !==undefined){  //founding members     
    item[1].splice(item[1].indexOf("P338"),1);
    locationAndContext.push(item[0].claims.P338); 
  }
  if (item[0].claims.P342 !==undefined){  //worshipful master (masonic lodge)   
    item[1].splice(item[1].indexOf("P342"),1);
    locationAndContext.push(item[0].claims.P342); 
  }
  if (item[0].claims.P319 !==undefined){  //organisational roof  
    item[1].splice(item[1].indexOf("P319"),1);
    locationAndContext.push(item[0].claims.P319); 
  }
  if (item[0].claims.P267 !==undefined){  //organisational context  
    item[1].splice(item[1].indexOf("P267"),1);
    locationAndContext.push(item[0].claims.P267); 
  }
  if (item[0].claims.P430 !==undefined){  //grand lodge (masonic lodge)   
    item[1].splice(item[1].indexOf("P430"),1);
    locationAndContext.push(item[0].claims.P430); 
  }
  if (item[0].claims.P422 !==undefined){  //subclass   
    item[1].splice(item[1].indexOf("P422"),1);
    locationAndContext.push(item[0].claims.P422); 
  }

  return locationAndContext
 } 
}
