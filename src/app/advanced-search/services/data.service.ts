import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CreateSparqlService } from './create-sparql.service';

export interface Class {
    value:string;
    viewValue:string;
}

export interface ExampleList {

}

@Injectable({
  providedIn: 'root'
})

export class DataService {

    selectedLang: string = (localStorage['selectedLang']===undefined)? "en": localStorage['selectedLang'];
    sparqlStart:string="https://database.factgrid.de/sparql?query=";
    sparqlEnd:string="&format=json";
    sparqlLanguageService:string="%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2C"+this.selectedLang+"%22.%20%7D%7D%20";
    sparqlSimpleSelect:string="SELECT%20%3Fitem%20%3FitemLabel%20";
    sparqlDescriptionSelect:string="SELECT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20";//label + description of the items
    sparqlDistinctSimpleSelect:string="SELECT%20%3FDISTINCT%20%3Fitem%20%3FitemLabel%20";
    sparqlOrderbyItemLabel:string="%20ORDER%20BY%20%3FitemLabel";
  //  placeListSparqlStart: string="https://database.factgrid.de/sparql?query=SELECT%20%3Fitem%20%3FitemLabel%20WHERE%20%7B%3Fitem%20wdt%3AP2%20wd%3AQ8.%20%3Fitem%20wdt%3AP297%20wd%3AQ77184.%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2C";
    
    sparqlClauseResearchFields:string = "WHERE%20%7B%3Fitem%20wdt%3AP2%20wd%3AQ272613." 
    sparqlResearchFields = this.sparqlStart+this.sparqlDescriptionSelect+this.sparqlClauseResearchFields+this.sparqlLanguageService+this.sparqlEnd; //sparql query all research fields

    sparqlClauseLocations: string ="WHERE%20%7B%3Fitem%20wdt%3AP2%20wd%3AQ8."  
    sparqlLocations = this.sparqlStart+this.sparqlDescriptionSelect+this.sparqlClauseLocations+this.sparqlLanguageService+this.sparqlEnd; //sparql query all locations

    sparqlClauseFamilyNames:string ="WHERE%20%7B%3Fitem%20wdt%3AP2%20wd%3AQ24499." 
    sparqlFamilyNames:string =this.sparqlStart+this.sparqlSimpleSelect+this.sparqlClauseFamilyNames+this.sparqlLanguageService+this.sparqlEnd; //sparql query all locations

    sparqlClauseGivenNames:string ="WHERE%20%7B%3Fitem%20wdt%3AP2%20wd%3AQ31776." 
    sparqlGivenNames:string =this.sparqlStart+this.sparqlSimpleSelect+this.sparqlClauseGivenNames+this.sparqlLanguageService+this.sparqlEnd; //sparql query all locations

    sparqlClauseActivities:string ="WHERE%20%7B%3Fitem%20wdt%3AP2%20wd%3AQ37073." 
    sparqlActivities:string =this.sparqlStart+this.sparqlDistinctSimpleSelect+this.sparqlClauseActivities+this.sparqlLanguageService+this.sparqlOrderbyItemLabel+this.sparqlEnd; //sparql query all locations

    sparqlClauseOrganisations:string ="WHERE%20%7BVALUES%20%3Forg%20%7B%20wd%3AQ12%20wd%3AQ140806%20%7D.%20%3Fitem%20wdt%3AP2%20%3Forg."
    sparqlOrganisations:string =this.sparqlStart+this.sparqlDistinctSimpleSelect+this.sparqlClauseOrganisations+this.sparqlLanguageService+this.sparqlEnd; //sparql query all locations

  /*    sparqlPersonsByNamesandGivenNames:string=sparqlStart+sparqlDescriptionSelect+"
  "
  */
    
  exampleSparqlStart:string="https://database.factgrid.de/sparql?query=SELECT%20%3Flieu%20%3FlieuLabel%20%0AWHERE%20%0A%7B%0A%20%20%3Fitem%20wdt%3AP2%20wd%3AQ153501.%0A%20%20%3Fitem%20wdt%3AP83%20%3Flieu.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2C";
    exampleSparql = this.exampleSparqlStart+this.selectedLang+this.sparqlEnd;
    
    constructor(private http: HttpClient, private sparql:CreateSparqlService ) {
    }

    getExampleList() {
        return this.sparql.initSearchList(this.exampleSparql);
    }

    getResearchFields() {
        return this.sparql.initSearchList(this.sparqlResearchFields);
    }

    getLocations() {
        return this.sparql.initSearchList(this.sparqlLocations);
    }

    getFamilyNames() {
        return this.sparql.initSearchList(this.sparqlFamilyNames);
    }

    getGivenNames() {
        return this.sparql.initSearchList(this.sparqlGivenNames);
    }

    getActivities() {
        return this.sparql.initSearchList(this.sparqlActivities);
    }

    getOrganisations() {
        return this.sparql.initSearchList(this.sparqlOrganisations);
    }

    getClass(){ return [
                {
                    value: 'Q7',
                    viewValue: "human"
                },
                {
                    value: 'Q8',
                    viewValue: "location"
                },
                {
                    value:'Q12', 
                    viewValue:'organisation'
                },
                {
                    value:'Q9', 
                    viewValue:'event'
                },
                {
                    value:'Q20', 
                    viewValue:'publication'
                },
                {
                    value:'Q14239', 
                    viewValue:'work'
                }
            ]
        }
    }