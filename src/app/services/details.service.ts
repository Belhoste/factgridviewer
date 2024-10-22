import { Injectable, inject } from '@angular/core';
import { RequestService } from './request.service'  ;
import { SetLanguageService} from './set-language.service';
import { map, tap } from 'rxjs/operators';
import { SelectedItemListService } from './selected-item-list.service';

@Injectable({
  providedIn: 'root'
})

export class DetailsService {
  private requestService = inject(RequestService);
  private setLanguage = inject(SetLanguageService);


getReferenceProperties(u) {
  let values: any[] = Object.values(u.claims) ;
  let referenceProperties = [];

  for (const val of values){
    for (const u of val) {
    if (u.references === undefined) {continue}
     for (const ref of u.references ){
    referenceProperties = referenceProperties.concat(ref["snaks-order"]);

     }
    }
   }

  referenceProperties =this.uniq(referenceProperties);
  return referenceProperties
}

setPropertiesList(u) { //create the list of properties in the statements
  let values: any[] = Object.values(u.claims) ;
  let properties = [];
  let qualifierProperties =[];
  let referenceProperties = [];
  
  for (const val of values) { //properties P in the mainsnaks
    for (const u  of val )
      properties.push(u.mainsnak.property) 
  } 

  for (const val of values) {
    for (const u of val )
      qualifierProperties=qualifierProperties.concat(u["qualifiers-order"]);
  }

  for (const val of values){
    for (const u of val) {
    if (u.references === undefined) {continue}
     for (const ref of u.references ){
    referenceProperties = referenceProperties.concat(ref["snaks-order"]);
     }
    }
   }
 
 qualifierProperties =this.uniq(qualifierProperties);

 referenceProperties =this.uniq(referenceProperties);
 
 properties = properties.concat(qualifierProperties).concat(referenceProperties) // get items in the statements
 properties = this.uniq(properties); // remove the duplicates
 properties = this.lessThanFifty(properties); //create several arrays of at most fifty properties

let propertiesList0 = this.createList(properties[0]).slice(1); // create a array of string lists of properties and remove the first |
let propertiesList1 = this.createList(properties[1]).slice(1); // create a array of string lists of properties and remove the first |
let propertiesList2 = this.createList(properties[2]).slice(1); // id
let propertiesList3 = this.createList(properties[3]).slice(1); // create a array of string lists of properties and remove the first |
let propertiesList4 = this.createList(properties[4]).slice(1); // id
let propertiesList5 = this.createList(properties[5]).slice(1); // id
let propertiesList6 = this.createList(properties[6]).slice(1); // id
let propertiesList7 = this.createList(properties[7]).slice(1); // id
if ( properties[8] !== undefined) { alert("too many statements") };

let result = this.requestService.requestProperties(propertiesList0,propertiesList1,propertiesList2,propertiesList3,propertiesList4,propertiesList5,propertiesList6,propertiesList7)
.pipe
(
map(res => this.mergeObjects(res)),
map(res => Object.values(res))
);

return result
}


setItemsList(u) {  //create the list of items in the statements
  let values: any[] = Object.values(u.claims) ;
  let items = [];
  let qualifierProperties =[];
  let referenceProperties = [];
  for (const val of values) { //items Q in the mainsnaks
       for (const u of val) {
        if (u.mainsnak.datavalue.value.id === undefined) continue;
      items.push(u.mainsnak.datavalue.value.id)
    }
   }

   
  
  for (const val of values) {
     for(const u of val) {
    qualifierProperties=qualifierProperties.concat(u["qualifiers-order"]);
     }
  }
 
 for (const val of values){
   for (const u of val) {
   if (u.references === undefined) {continue}
    for (const ref of u.references ){
      for (const prop of ref["snaks-order"]) {
       referenceProperties.push(prop);
         }
       }
      }
    }

  qualifierProperties =this.uniq(qualifierProperties);
  referenceProperties =this.uniq(referenceProperties);

let qualifierItems = this.setQualifierItems(values,qualifierProperties).filter(function( element ) {  //get items in the qualifiers, remove the undefined
    return element !== undefined; 
});


 let referenceItems = this.setReferenceItems(values,referenceProperties).filter(function( element ) { //get items in the references, remove the undefined
    return element !== undefined;
 });
 
 items = items.concat(qualifierItems).concat(referenceItems)  // get items in the statements
 items = this.uniq(items) // remove the duplicates
 items = this.lessThanFifty(items); //create several arrays of at most fifty items

let itemsList0 = this.createList(items[0]).slice(1); //create an arrray of  string lists of items
let itemsList1 = this.createList(items[1]).slice(1); //create an arrray of  string lists of items
let itemsList2 = this.createList(items[2]).slice(1); //create an arrray of  string lists of items
let itemsList3 = this.createList(items[3]).slice(1); //create an arrray of  string lists of items
let itemsList4 = this.createList(items[4]).slice(1); //create an arrray of  string lists of items
let itemsList5 = this.createList(items[5]).slice(1); //create an arrray of  string lists of items
let itemsList6 = this.createList(items[6]).slice(1); //create an arrray of  string lists of items
let itemsList7 = this.createList(items[7]).slice(1); //create an arrray of  string lists of items
if ( items[8] !== undefined) { alert("too many statements") };

let result = this.requestService.requestItems(itemsList0,itemsList1,itemsList2,itemsList3,itemsList4,itemsList5,itemsList6,itemsList7)
.pipe(map(res => this.mergeObjects(res)),
map(res =>Object.values(res))
);
   return result
}

 setProperties(arr){ // create an array of the properties in the qualifiers and references. It is used in setPropertiesList
    let result = []; 
    let a =[];
 for (let i=0; i<arr.length; i++){
    let a =Object.keys(arr[i]);
    for (let j=0; j<a.length; j++){
       result.push(a[j])
    }
  }
  return result;
}    

mergeObjects(res){ // merge the objects contained in the forkjoint arrays to create a single object
  let u=res[0].entities;
  for (let i=0;i<res.length;i++){
  if (res[i].entities===undefined){continue}
  u = { ...u, ... res[i].entities };
  }
return u
  }

setQualifierItems(values,arr){ // create an array of the items in the qualifiers and references. It is used in setItemsList
      arr = arr.filter(Boolean);
      let result = [];
          for (const val of values){ 
            for (const u of val){
              for (let j=0; j<arr.length;j++) {  
                 if (u.qualifiers === undefined){ continue }
                 if (u.qualifiers[arr[j]] !== undefined) {
                 for (let k=0; k<arr[j].length;k++) { 
                   if (u.qualifiers[arr[j]][k] === undefined) { continue }
                     result.push(u.qualifiers[arr[j]][k].datavalue.value.id);  }         
           }
          } 
        }
      }
    return result 
  };

  setReferenceItems(values,arr){ // create an array of the items in the qualifiers and references. It is used in setItemsList
    arr = arr.filter(Boolean);
    let result = [];
      for (const val of values){ 
        for (const u of val){ 
             if (u.references === undefined){ continue }
              for (let i=0; i<u.references.length; i++) {
                for (let j=0; j<arr.length; j++) {
                 if (u.references[i] !== undefined) {
                   if (u.references[i].snaks[arr[j]] !== undefined) {
                   if (u.references[i].snaks[arr[j]].datatype ="wikibase-item")
                     for (let k=0; k<arr[j].length; k++) {
                        if (u.references[i].snaks[arr[j]][k] !==undefined){
                        result.push(u.references[i].snaks[arr[j]][k].datavalue.value.id)
                        }
                       }
                     }
                  }  
                }               
             }
          }
        }
      return result 
    };
  
  createList(arr){  //create a string whith the elements of an array. It is used in setPropertiesList and setItemsList
    arr = [...new Set(arr)];
    let list = "";
    for (let i = 0; i < arr.length; i++) {
     list = list+"|"+arr[i] }
    return list;
    };
    
   uniq(a){  //remove duplicates in an array / it is used in setPropertiesList and setItemsList
      var seen = {};
      a = a.filter(Boolean);
      return a.filter(function(item) {
          return seen.hasOwnProperty(item) ? false : (seen[item] = true);
      });
  }

  addDetails(properties,claims){ //is it useful?
    for (let i = 0; i < properties.length; i++) {
    let p=properties[i];
    claims[i].label = properties[i].label;
    }
    return claims
    }

  lessThanFifty(arr:string[]){ //split the array in subarrays of 50 items. It is used in setPropertiesList and setItemsList
      let result = []
      let u = arr.length
      if (u<50 && u>0) result.push(arr); //push the items if the length of the array is less than 50;
      while (u>49) {
      result.push(arr.slice(0,50));
      arr= arr.slice(50,u);
      u = arr.length;
      if (u<50 && u>0) result.push(arr); //push the remaining items
      }
      return result
    }

}
 


