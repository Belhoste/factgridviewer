import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactgridSubtitlesService {

  constructor() { }

  setSubtitle1(re,propertyId,lang){  //to add a subtitle with a condition on the property
  if ( lang === "en") {re.claims[propertyId].other = "further"}
  else if ( lang === "de") {re.claims[propertyId].other = "weiteren"}
  else if ( lang === "fr") {re.claims[propertyId].other = "autres"};
  if ( lang === "en") {re.claims[propertyId].sources = "sources"}
  else if ( lang === "de") {re.claims[propertyId].sources = "Quellen"}
  else if ( lang === "fr") {re.claims[propertyId].sources = "sources"};
  }

setSubtitle2(re,propertyId,number,lang){  //to add a subtitle with a condition on the value of a property (in general the property P2)
let j=number;
 if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q7") { //person
  re.claims[propertyId].person = "person";
  if ( lang === "en") {re.claims[propertyId].main = "life and family"}
  else if ( lang === "de") {re.claims[propertyId].main = "Leben und Familie"}
  else if ( lang === "fr") {re.claims[propertyId].main = "vie et famille"};
  if ( lang === "en") {re.claims[propertyId].training = "education"}
  else if ( lang === "de") {re.claims[propertyId].training = "Ausbildung"}
  else if ( lang === "fr") {re.claims[propertyId].training = "éducation"};
  if ( lang === "en") {re.claims[propertyId].career = "career and activities"}
  else if ( lang === "de") {re.claims[propertyId].career = "Beruf und Aktivitäten"}
  else if ( lang === "fr") {re.claims[propertyId].career = "carrière et activités"};
  if ( lang === "en") {re.claims[propertyId].sociability = "sociability and culture"}
  else if ( lang === "de") {re.claims[propertyId].sociability = "Soziabilität und Kultur"}
  else if ( lang === "fr") {re.claims[propertyId].sociability = "sociabilité et culture"};
      }
 if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q8") { //place
  re.claims[propertyId].place = "place";
  if ( lang === "en") {re.claims[propertyId].main = "location and situation"}
  else if ( lang === "de") {re.claims[propertyId].main = "Standort und Lage"}
  else if ( lang === "fr") {re.claims[propertyId].main = "localisation et situation"};
}
if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q9") { //event
  if ( lang === "en") {re.claims[propertyId].main = "event"}
  else if ( lang === "de") {re.claims[propertyId].main = "Ereignis"}
  else if ( lang === "fr") {re.claims[propertyId].main = "évènement"};
}
if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q12" || //org
    re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q220833" ||  
    re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q140806" ||
    re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q11214" ||
    re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q164344") {
      re.claims[propertyId].org = "org";
      if ( lang === "en") {re.claims[propertyId].main = "organisation"}
      else if ( lang === "de") {re.claims[propertyId].main = "Organisation"}
      else if ( lang === "fr") {re.claims[propertyId].main = "organisation"};
}
if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q20") { //publication
  re.claims[propertyId].document = "publication";
  if ( lang === "en") {re.claims[propertyId].main = "print publication"}
  else if ( lang === "de") {re.claims[propertyId].main = "Druckpublikation"}
  else if ( lang === "fr") {re.claims[propertyId].main = "publication imprimée"};
}
if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q146602" || //activity
    re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q21909" ||
    re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q37073") {
      re.claims[propertyId].activity = "activity";
      if ( lang === "en") {re.claims[propertyId].main = "activity"}
      else if ( lang === "de") {re.claims[propertyId].main = "Aktivität"}
      else if ( lang === "fr") {re.claims[propertyId].main = "activité"};
}
if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q10671" || //document
re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q21407") {
  re.claims[propertyId].document = "document";
  if ( lang === "en") {re.claims[propertyId].main = "document"}
  else if ( lang === "de") {re.claims[propertyId].main = "Dokument"}
  else if ( lang === "fr") {re.claims[propertyId].main = "document"};
   }
}

}