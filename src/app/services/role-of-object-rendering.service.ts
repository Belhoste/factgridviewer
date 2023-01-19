// service to change the rendering of some statements with a qualifier "role of object"

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleOfObjectRenderingService {

  constructor() { }
  
  label:string;
  id:string;
  datatype:string;
  mainsnak:any;
  u:any;
  R1:any[];
  R2:any[];
  R3:any[];
  R4:any[];

  roleOfObject(re){
    
    let claims:any[][]= Object.values(re.claims);
    console.log(re.claims);
    for (const claim of claims) { 
     for (const snak of claim) { 
       if(snak.mainsnak.property == "P247" || snak.mainsnak.property == "P208"){
        if(snak.qualifiers2){
          for (const qualif2 of snak.qualifiers2){
            if (qualif2.id == "P820") {  
              for (let j=0; j<qualif2.display.length; j++) { 
                let u= { key:{mainsnak: { property:qualif2.display[j].id, datatype:snak.mainsnak.datatype, label:snak.mainsnak.label, description:snak.mainsnak.description, datavalue:{value:{id:snak.mainsnak.datavalue.value.id}}}}};
                let v= Object.values(u);
                if (v[0].mainsnak.property === "Q448941") {
                  re.claims.Q448941 = v; 
                  re.claims.Q448941.label = qualif2.display[j].label;
                  qualif2.display.splice(j,1);
                 } 
                if (v[0].mainsnak.property === "Q28006") {
                  re.claims.Q28006 = v; 
                  re.claims.Q28006.label = qualif2.display[j].label;
                  qualif2.display.splice(j,1);
                 } 
                if (v[0].mainsnak.property === "Q468366") {
                  re.claims.Q468366 = v; 
                  re.claims.Q468366.label = qualif2.display[j].label;
                  qualif2.display.splice(j,1);
                 } 
                } 
              }
            }     
          }
        }     
      }  
    }
  }
}
    



