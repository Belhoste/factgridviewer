//service to set the subtitles of the FactGrid queries. It is used in the item-details.service.ts

import { Injectable, inject } from '@angular/core';
import { SelectedLangService } from '../selected-lang.service';

@Injectable({
  providedIn: 'root'
})
export class FactgridSubtitlesService {
  private lang = inject(SelectedLangService);


  //TODO: pass the lang selection to the SelectedLangService

  setSubtitle1(re,propertyId,lang){  //to add a subtitle with a condition on the property
  if (propertyId === "P320"){
   re.claims[propertyId].sparql = "List of members";
   if ( lang === "de") {re.claims[propertyId].sparql = "Mitgliederverzeichnis"}
   else if ( lang === "fr") {re.claims[propertyId].sparql = "Liste des membres"}
   else if ( lang === "es") {re.claims[propertyId].sparql = "Lista de miembros"}
   else if (lang === "it") {re.claims[propertyId].sparql = "Elenco dei membri"}
    else if (lang === "hu") {re.claims[propertyId].sparql = "A tagok listája"};
  }
  if ( lang === "en") {re.claims[propertyId].other = "further"}
  else if ( lang === "de") {re.claims[propertyId].other = "weiteren"}
  else if ( lang === "fr") {re.claims[propertyId].other = "autres"}
  else if ( lang === "es") {re.claims[propertyId].other = "más"}
   else if ( lang === "it") {re.claims[propertyId].other = "di più"}
   else if ( lang === "hu") {re.claims[propertyId].other = "további"};
 // if ( lang === "en") {re.claims[propertyId].place = "place"}
 // else if ( lang === "de") {re.claims[propertyId].place = "Ort"}
 // else if ( lang === "fr") {re.claims[propertyId].place = "lieu"};
  if ( lang === "en") {re.claims[propertyId].sources = "Sources"}
  else if ( lang === "de") {re.claims[propertyId].sources = "Quellen"}
  else if ( lang === "fr") {re.claims[propertyId].sources = "Sources"}
  else if ( lang === "es") {re.claims[propertyId].sources = "Fuentes"}
  else if ( lang === "it") {re.claims[propertyId].sources = "Fonti"}
  else if ( lang === "hu") {re.claims[propertyId].sources = "Források"};
  }

setSubtitle2(re,propertyId,number,lang){  //to add a subtitle with a condition on the value of a property (in general the property P2)
  let j = number;
  if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q7") { //person
    re.claims[propertyId].person = "person";
    if ( lang === "en") {re.claims[propertyId].main = "Life and family"}
    else if ( lang === "de") {re.claims[propertyId].main = "Leben und Familie"}
    else if ( lang === "fr") {re.claims[propertyId].main = "Vie et famille"}
    else if ( lang === "es") {re.claims[propertyId].main = "Vida y familia"}
    else if ( lang === "it") {re.claims[propertyId].main = "Vita e famiglia"}
    else if ( lang === "hu") {re.claims[propertyId].main = "Élet és család"};

    if ( lang === "en") {re.claims[propertyId].training = "Education"}
    else if ( lang === "de") {re.claims[propertyId].training = "Ausbildung"}
    else if ( lang === "fr") {re.claims[propertyId].training = "Éducation"}
    else if ( lang === "es") {re.claims[propertyId].training = "Educación"}
    else if ( lang === "it") {re.claims[propertyId].training = "Educazione"}
    else if ( lang === "hu") {re.claims[propertyId].training = "Oktatás"};

    if ( lang === "en") {re.claims[propertyId].career = "Career and activities"}
    else if ( lang === "de") {re.claims[propertyId].career = "Beruf und Aktivitäten"}
    else if ( lang === "fr") {re.claims[propertyId].career = "Carrière et activités"}
    else if ( lang === "es") {re.claims[propertyId].career = "Carrera y actividades"}
    else if ( lang === "it") {re.claims[propertyId].career = "Carriera e attività"}
    else if ( lang === "hu") {re.claims[propertyId].career = "Karrier és tevékenységek"};


    if ( lang === "en") {re.claims[propertyId].sociability = "Sociability and culture"}
    else if ( lang === "de") {re.claims[propertyId].sociability = "Soziabilität und Kultur"}
    else if ( lang === "fr") {re.claims[propertyId].sociability = "Sociabilité et culture"}
    else if ( lang === "es") {re.claims[propertyId].sociability = "Sociabilidad y cultura"}
    else if ( lang === "it") {re.claims[propertyId].sociability = "Sociabilità e cultura"}
    else if ( lang === "hu") {re.claims[propertyId].sociability = "Szociabilitás és kultúra"};
      }
 /*   if (re.claims[propertyId][j].mainsnak.datavalue.value.id !== "Q7") { //person
      re.claims[propertyId].person = undefined;
      re.claims[propertyId].training = undefined;
      re.claims[propertyId].career = undefined;
      re.claims[propertyId].sociability = undefined;
       } ;
*/

   if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q22") { //basic object
      if ( lang === "en") {re.claims[propertyId].main = "Basic object"}
      else if ( lang === "de") {re.claims[propertyId].main = "Fundamentalobjekt"}
      else if ( lang === "fr") {re.claims[propertyId].main = "Objet de base"}
      else if ( lang === "es") {re.claims[propertyId].main = "Objeto básico"}
      else if ( lang === "it") {re.claims[propertyId].main = "Oggetto di base"}
      else if ( lang === "hu") {re.claims[propertyId].main = "Alapobjektum"};
   };


   if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q147829") { //basic object
    if ( lang === "en") {re.claims[propertyId].main = "Database"}
    else if ( lang === "de") {re.claims[propertyId].main = "Datenbank"}
    else if ( lang === "fr") {re.claims[propertyId].main = "Base de données"}
    else if ( lang === "es") {re.claims[propertyId].main = "Base de datos"}
    else if ( lang === "it") {re.claims[propertyId].main = "Base dati"}
    else if ( lang === "hu") {re.claims[propertyId].main = "Adatbázis"};
   };

    if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q8" || 
    re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q11174" ||
    re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q21925" ||
    re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q164344") { //place
      re.claims[propertyId].place = "place";
      re.claims[propertyId].main = "Place";
      if ( lang === "en") {re.claims[propertyId].main = "Place"}
      else if ( lang === "de") {re.claims[propertyId].main = "Ort"}
      else if ( lang === "fr") {re.claims[propertyId].main = "Lieu"}
      else if ( lang === "es") {re.claims[propertyId].main = "Lugar"}
      else if ( lang === "it") {re.claims[propertyId].main = "Luogo"}
      else if ( lang === "hu") {re.claims[propertyId].main = "Hely"};
        };
 //   if (re.claims[propertyId][j].mainsnak.datavalue.value.id !== "Q8") { //place
 //     re.claims[propertyId].place = undefined; }
    if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q9") { //event
      if ( lang === "en") {re.claims[propertyId].main = "Event"}
      else if ( lang === "de") {re.claims[propertyId].main = "Ereignis"}
      else if ( lang === "fr") {re.claims[propertyId].main = "Évènement"}
      else if ( lang === "es") {re.claims[propertyId].main = "Evento"}
      else if ( lang === "it") {re.claims[propertyId].main = "Evento"}
      else if ( lang === "hu") {re.claims[propertyId].main = "Esemény"};
    }
 //   if (re.claims[propertyId][j].mainsnak.datavalue.value.id !== "Q9") { //event
 //     re.claims[propertyId].event = undefined; }
    if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q12" || //org
      re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q220833" ||  
      re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q140806" ||
      re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q11214" ) {
      re.claims[propertyId].org = "org";
        if ( lang === "en") {re.claims[propertyId].main = "Organisation"}
        else if ( lang === "de") {re.claims[propertyId].main = "Organisation"}
        else if ( lang === "fr") {re.claims[propertyId].main = "Organisation"}
        else if ( lang === "es") {re.claims[propertyId].main = "Organización"}
        else if ( lang === "it") {re.claims[propertyId].main = "Organizzazione"}
        else if ( lang === "hu") {re.claims[propertyId].main = "Szervezet"};
          }
  //  else re.claims[propertyId].org = undefined;
  if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q20" ||
      re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q257227") { //publication
      re.claims[propertyId].document = "publication";
        if ( lang === "en") {re.claims[propertyId].main = "Print publication"}
        else if ( lang === "de") {re.claims[propertyId].main = "Druckpublikation"}
        else if ( lang === "fr") {re.claims[propertyId].main = "Publication imprimée"}
        else if ( lang === "es") {re.claims[propertyId].main = "Publicación impresa"}
        else if ( lang === "it") {re.claims[propertyId].main = "Pubblicazione stampata"}
        else if ( lang === "hu") {re.claims[propertyId].main = "Nyomtatott kiadvány"};
      }
 // if (re.claims[propertyId][j].mainsnak.datavalue.value.id !== "Q20") { //publication
 //     re.claims[propertyId].document = undefined; }
  if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q146602" || //activity
    re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q21909" ||
    re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q37073") {
      re.claims[propertyId].activity = "activity";
        if ( lang === "en") {re.claims[propertyId].main = "Activity"}
        else if ( lang === "de") {re.claims[propertyId].main = "Aktivität"}
        else if ( lang === "fr") {re.claims[propertyId].main = "Activité"}
        else if ( lang === "es") {re.claims[propertyId].main = "Activitad"}
        else if ( lang === "it") {re.claims[propertyId].main = "Attività"}
        else if ( lang === "hu") {re.claims[propertyId].main = "Tevékenység"};
      }
  if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q10671" || //document
      re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q21407") {
      re.claims[propertyId].document = "document";
        if ( lang === "en") {re.claims[propertyId].main = "Document"}
        else if ( lang === "de") {re.claims[propertyId].main = "Dokument"}
        else if ( lang === "fr") {re.claims[propertyId].main = "Document"}
        else if ( lang === "es") {re.claims[propertyId].main = "Documento"}
        else if ( lang === "it") {re.claims[propertyId].main = "Documento"}
        else if ( lang === "hu") {re.claims[propertyId].main = "Dokumentum"};
         }
  if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q10671" || //FactGrid query
      re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q21407") {
      re.claims[propertyId].document = "document";
        if ( lang === "en") {re.claims[propertyId].main = "Document"}
        else if ( lang === "de") {re.claims[propertyId].main = "Dokument"}
        else if ( lang === "fr") {re.claims[propertyId].main = "Document"}
        else if ( lang === "es") {re.claims[propertyId].main = "Documento"}
        else if ( lang === "it") {re.claims[propertyId].main = "Documento"}
        else if ( lang === "hu") {re.claims[propertyId].main = "Dokumentum"};
          }
  //  else re.claims[propertyId].document = undefined;
  }
}

    
