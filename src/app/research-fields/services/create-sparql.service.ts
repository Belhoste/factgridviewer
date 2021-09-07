import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Injectable({
  providedIn: 'root'
})
export class CreateSparqlService {   // create sparql query

  constructor(private request:RequestService) { }

selectedLang: string = (localStorage['selectedLang']===undefined)? "en": localStorage['selectedLang'];


sparqlPrefix:string = "https://database.factgrid.de/sparql?query="; // address of the query service
sparqlSelect:string = "SELECT%20%3Fitem%20%3FitemLabel%0A"; //select items
sparqlDistinctSelect:string = "SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%0A"; // select distinct items
sparqlSelect_en:string = "SELECT%20%3Fitem%20%3Flabel_en%0A"; //lang en
sparqlLangFilter:string=".%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22"+this.selectedLang+"%2Cen%22.%20%7D%0A%20%20%7D"; // filter the selected lang
sparqlJSON:string= "%22%29.%0A%7D&format=json"; // format json
sparqlWhere:string ="WHERE%20%0A%7B%0A%20%20%3"; // clause WHERE
sparqlClassSubclass:string="WHERE%20%0A%7B%0A%20%20%3Fitem%20wdt%3AP2%2Fwdt%3AP3%2a%20wd%3A"; // search items of a class and its subclasses
sparqlClass:string="WHERE%20%0A%7B%0A%20%20%3Fitem%20wdt%3AP2%2a%20wd%3A"; //search items of a class
class:string="";

initSearchList(sparql){ //get list from sparql query
  let result=this.request.getList(sparql);
  return result
}

buildQuery(params:string[]){  // build the sparql query
/*
class=params[0]
family name=params[1]
given name=params[2]
position=params[3]
activity=params[4]
organisation=params[5]
place name=params[6]
territorial affiliation=params[7]
name of organisation =params[8]
type of organisation=params[9]
publication title=params[10]
type of publication=params[11]
type of work =params[12]
event name =params[13]
event location=params[14]
*/
  let classQuery:string;
  let classDeepQuery:string;
  this.class = this.findValue(params,"class");
 // if(this.findValue(params,"class")==!""){ 
   if(params[0] !== undefined){
     if(params[1] !== undefined)
   classQuery = this.sparqlPrefix+this.sparqlSelect+this.sparqlClass
              +params[0]
              +this.sparqlLangFilter+this.sparqlJSON;
    classDeepQuery = this.sparqlPrefix+this.sparqlSelect+this.sparqlClassSubclass
              +params[0]
              +this.sparqlLangFilter+this.sparqlJSON
           }
    return [classQuery, classDeepQuery]
}


findValue(arr,key){  // values from an array of key/value pair objects
  return arr.find(function(o){ return o.key===key }).value;
}


}

