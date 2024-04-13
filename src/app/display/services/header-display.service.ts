import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderDisplayService {

  constructor() { }



  setHeaderDisplay(item, header){

    //header


  
    if (item[0].claims.P2 !==undefined){ //instance of
      item[1].splice(item[1].indexOf("P2"),1);
      header.push(item[0].claims.P2)
    }
    if (item[0].claims.P3 !==undefined){ //subclass of
      item[1].splice(item[1].indexOf("P3"),1);
      header.push(item[0].claims.P3);
    }
    if (item[0].claims.P8 !==undefined){ //part of
      item[1].splice(item[1].indexOf("P8"),1);
      header.push(item[0].claims.P8);
    }
    if (item[0].claims.P97 !==undefined){ //field of research
      item[1].splice(item[1].indexOf("P97"),1);
      header.push(item[0].claims.P97);
    }
    if (item[0].claims.P131 !==undefined){ //research projects that contributed to this data set
      item[1].splice(item[1].indexOf("P131"),1);
      header.push(item[0].claims.P131); 
    }
  return header
  }

  

}
