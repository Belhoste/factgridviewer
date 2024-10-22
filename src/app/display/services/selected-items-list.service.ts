//list of selected Items on black ground
import { Injectable, inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedItemListService {
  private http = inject(HttpClient);

  
  setPropertiesAndValues(u) {
  
  let values: any[] = Object.values(u.claims) ;
  let items = [];
  let properties = [];
  let qualifiers = [];
  let references = [];
  let mainsnaks = [];
  let mainsnaks2 = [];

	const baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=' ;
	const getUrlSuffix= '&props=labels|descriptions&format=json' ;

  console.log(values);
  
  for (const val of values) { //mainsnaks
    let i:number;
    for (i=0; i<val.length; i++)
     { if (val[0].mainsnak === undefined) continue; mainsnaks.push( val[i].mainsnak) }
     }
   ;

for (const val of mainsnaks) { //array of objects {P:Q}
  if (val.datavalue.value.id === undefined) continue; mainsnaks2.push("{"+val.property+":"+val.datavalue.value.id+"}")
};
  
  for (const val of values) { //properties P in the mainsnaks
    properties.push( val[0].mainsnak.property) 
  } 

  for (const val of values) { //items Q in the mainsnaks
    { if (val[0].mainsnak.datavalue.value.id === undefined) continue; items.push( val[0].mainsnak.datavalue.value.id) }
   }


  
  for (const val of values) {   // qualifiers qal in the claims 
    let i: number;
    for (i=0; i < val.length; i++) {
   { if (val[i].qualifiers === undefined) continue; 
       qualifiers.push(val[i].qualifiers) } 
      }
  }
  
  for (const val of values) { // references in the claims
    let i: number;
    for (i=0; i < val.length; i++) {
   { if (val[i].references === undefined) continue; 
       references.push(val[i].references[0].snaks) } 
      }
  }
  
  let qualifierItems = this.setItems(qualifiers).filter(function( element ) {  //get items in the qualifiers, remove the undefined
     return element !== undefined;
  });
  let referenceItems = this.setItems(qualifiers).filter(function( element ) { //get items in the references, remove the undefined
     return element !== undefined;
  });
  let qualifierProperties = this.setProperties(qualifiers); //get properties in the qualifiers
  let referenceProperties = this.setProperties(references); //get properties in the references
  
  items = items.concat(qualifierItems).concat(referenceItems)  // get items in the statements
  properties = properties.concat(qualifierProperties).concat(referenceProperties) // get items in the statements
  
  items = this.uniq(items) // remove the duplicates
  properties = this.uniq(properties); // remove the duplicates
  
  let itemsList= this.createList(items).slice(1); //create a string list of items
  let propertiesList = this.createList(properties).slice(1); // create a string list of properties and remove the first |
  //let totalList = propertiesList + itemsList;  // create the string list of all the items and properties 
  
 /* let valuesUrl = baseGetURL+itemsList+getUrlSuffix;
  let propertiesUrl = baseGetURL+propertiesList+getUrlSuffix;
  */

//  let result =this.requestItems(valuesUrl, propertiesUrl) ;
  
 // return result
}
   
  //getItem(url:string): Observable<any> { return this.http.get(url) };

  requestItems(valuesUrl:string, propertiesUrl:string): Observable<any[]> {
    let response1 = this.http.get(valuesUrl);
    let response2 = this.http.get(propertiesUrl);
    return forkJoin([response1, response2]);
  }

  setProperties = function setProperties(arr){ // create an array of the properties in the qualifiers and references
  let result = [];
  arr.forEach(x => result.push(Object.values(x)[0][0].property));
  return result }
  
  setItems(arr){ // create an array of the items in the qualifiers and references
  let result = [];
  arr.forEach(x => result.push(Object.values(x)[0][0].datavalue.value.id));
  return result }
  
  createList(arr){  //create a string whith the elements of an array
    arr = [...new Set(arr)];
    let list = "";
    for (let i = 0; i < arr.length; i++) {
     list = list+"|"+arr[i] }
    return list;
    }
    
   uniq(a){  //remove duplicates in an array
      var seen = {};
      return a.filter(function(item) {
          return seen.hasOwnProperty(item) ? false : (seen[item] = true);
      });
  }


}