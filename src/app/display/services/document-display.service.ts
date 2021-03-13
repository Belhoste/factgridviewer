import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentDisplayService {

  constructor() { }

setDocumentDisplay(item, documentDetail){

  if (item[0].claims.P21 !==undefined){ //author
    item[1].splice(item[1].indexOf("P21"),1);
    documentDetail.push(item[0].claims.P21);
  }
  if (item[0].claims.P20 !==undefined){ //author as (misleadingly) stated
    item[1].splice(item[1].indexOf("P20"),1);
    documentDetail.push(item[0].claims.P20);
  }
  if (item[0].claims.P25 !==undefined){ //handwritten by
    item[1].splice(item[1].indexOf("P25"),1);
    documentDetail.push(item[0].claims.P25);
  }
  if (item[0].claims.P11 !==undefined){ //title
    item[1].splice(item[1].indexOf("P11"),1);
    documentDetail.push(item[0].claims.P11);
  }
  if (item[0].claims.P5 !==undefined){ //title page transcript
    item[1].splice(item[1].indexOf("P5"),1);
    documentDetail.push(item[0].claims.P5);
  }
  if (item[0].claims.P39 !==undefined){ //begin of composition
    item[1].splice(item[1].indexOf("P39"),1);
    documentDetail.push(item[0].claims.P39);
  }
  if (item[0].claims.P106 !==undefined){ //date
    item[1].splice(item[1].indexOf("P106"),1);
    documentDetail.push(item[0].claims.P106);
  }
  if (item[0].claims.P15 !==undefined){ //media type
    item[1].splice(item[1].indexOf("P15"),1);
    documentDetail.push(item[0].claims.P15);
  }
  if (item[0].claims.P121 !==undefined){ //type of work (standardised)
    item[1].splice(item[1].indexOf("P121"),1);
    documentDetail.push(item[0].claims.P121);
  }
  if (item[0].claims.P107 !==undefined){ //number of pages/ leafs/ sheets
    item[1].splice(item[1].indexOf("P107"),1);
    documentDetail.push(item[0].claims.P107);
  }
  if (item[0].claims.P93 !==undefined){ //format
    item[1].splice(item[1].indexOf("P93"),1);
    documentDetail.push(item[0].claims.P93);
  }
  if (item[0].claims.P95 !==undefined){ //place of origin
    item[1].splice(item[1].indexOf("P95"),1);
    documentDetail.push(item[0].claims.P95);
  }
  if (item[0].claims.P28 !==undefined){ //recipient
    item[1].splice(item[1].indexOf("P28"),1);
    documentDetail.push(item[0].claims.P28);
  }
  if (item[0].claims.P33 !==undefined){ //persons mentioned
    item[1].splice(item[1].indexOf("P33"),1);
    documentDetail.push(item[0].claims.P33);
  }
  if (item[0].claims.P306 !==undefined){ //quoting
    item[1].splice(item[1].indexOf("P306"),1);
    documentDetail.push(item[0].claims.P306);
  }
  if (item[0].claims.P72 !==undefined){ // digest in German
    item[1].splice(item[1].indexOf("P72"),1);
    documentDetail.push(item[0].claims.P72);
  }
   if (item[0].claims.P144 !==undefined){ //literature
    item[1].splice(item[1].indexOf("P144"),1);
    documentDetail.push(item[0].claims.P144);
  }
  if (item[0].claims.P115 !==undefined){ //originality of the item
    item[1].splice(item[1].indexOf("P115"),1);
    documentDetail.push(item[0].claims.P115);
  }
  if (item[0].claims.P222 !==undefined){ //date of publication according to imprint
    item[1].splice(item[1].indexOf("P222"),1);
    documentDetail.push(item[0].claims.P222);
  }
  if (item[0].claims.P241 !==undefined){ //place of publication (without fictitious information)
    item[1].splice(item[1].indexOf("P241"),1);
    documentDetail.push(item[0].claims.P222);
  }

  if (item[0].claims.P240 !==undefined){ //place of publication as misleadingly stated
    item[1].splice(item[1].indexOf("P240"),1);
    documentDetail.push(item[0].claims.P240);
  }
  if (item[0].claims.P122 !==undefined){ //wider field of genres
    item[1].splice(item[1].indexOf("P122"),1);
    documentDetail.push(item[0].claims.P122);
  }
  if (item[0].claims.P18 !==undefined){ //language
    item[1].splice(item[1].indexOf("P18"),1);
    documentDetail.push(item[0].claims.P18);
  }
  if (item[0].claims.P126 !==undefined){ //owner
    item[1].splice(item[1].indexOf("P126"),1);
    documentDetail.push(item[0].claims.P126);
  }
  if (item[0].claims.P329 !==undefined){ //holding institution
    item[1].splice(item[1].indexOf("P329"),1);
    documentDetail.push(item[0].claims.P329);
  }
  if (item[0].claims.P323 !==undefined){ //next higher archival level
    item[1].splice(item[1].indexOf("P323"),1);
    documentDetail.push(item[0].claims.P323);
  }
  if (item[0].claims.P101 !==undefined){ //position in sequence <string>
    item[1].splice(item[1].indexOf("P101"),1);
    documentDetail.push(item[0].claims.P101);
  }
  if (item[0].claims.P125 !==undefined){ //document accessibility
    item[1].splice(item[1].indexOf("P125"),1);
    documentDetail.push(item[0].claims.P125);
  }
  if (item[0].claims.P229 !==undefined){ //provenance
    item[1].splice(item[1].indexOf("P229"),1);
    documentDetail.push(item[0].claims.P229);
  }
  if (item[0].claims.P136 !==undefined){ //history of provenance
    item[1].splice(item[1].indexOf("P136"),1);
    documentDetail.push(item[0].claims.P136);
  }
  if (item[0].claims.P64 !==undefined){ //published in
    item[1].splice(item[1].indexOf("P64"),1);
    documentDetail.push(item[0].claims.P64);
  }
  if (item[0].claims.P124 !==undefined){ //published in
    item[1].splice(item[1].indexOf("P124"),1);
    documentDetail.push(item[0].claims.P124);
  }
  if (item[0].claims.P138 !==undefined){ //online digitalisation
    item[1].splice(item[1].indexOf("P138"),1);
    documentDetail.push(item[0].claims.P138);
  }
  if (item[0].claims.P251 !==undefined){ //FactGrid transcript
    item[1].splice(item[1].indexOf("P251"),1);
    documentDetail.push(item[0].claims.P251);
  }
  if (item[0].claims.P226 !==undefined){ //FactGrid transcript
    item[1].splice(item[1].indexOf("P226"),1);
    documentDetail.push(item[0].claims.P226);
  }

  return documentDetail

}

}