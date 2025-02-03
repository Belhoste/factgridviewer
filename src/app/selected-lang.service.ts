import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedLangService {

  constructor() { }

    selectedLang: string = (localStorage['selectedLang']===undefined)? "en": localStorage['selectedLang'];

    formerVisitsTitle(u) {
    if(this.selectedLang === "de") {u = "Sie haben besucht:"};
    if(this.selectedLang === "fr") {u = "vous avez visité :"};
    if(this.selectedLang === "es") {u = "has visitado :"};
    if(this.selectedLang === "it") {u = "hai visitato :"};
    return u
    }
   
     subtitle(u) {
    if (this.selectedLang === "de") { u = "eine Databank für Historiker*innen" }
    if (this.selectedLang === "fr") { u = "une base de données pour historien.nes"}
    if (this.selectedLang === "es") { u = "una base de datos para historiadores"}
    if (this.selectedLang === "it") { u = "un database per gli storici"}
    return u
     }

    advanced_search(u) {
    if (this.selectedLang === "de") { u = "erweiterte Suche" }
    if (this.selectedLang === "fr") { u = "recherche avancée"}
    if (this.selectedLang === "es") { u = "búsqueda avanzada"}
    if (this.selectedLang === "it") { u = "ricerca avanzata"}
     return u
     }

    projects(u){
    if (this.selectedLang === "de") { u = "Forschungsprojekten" }
    if (this.selectedLang === "fr") { u = "projets de recherche"}
    if (this.selectedLang === "es") { u = "proyectos de investigación"}
    if (this.selectedLang === "it") { u = "progetti di ricerca"}
     return u
     }

    fields(u){
    if (this.selectedLang === "de") { u = "Forschungsfelder" }
    if (this.selectedLang === "fr") { u = "domaines de recherche"}
     if (this.selectedLang === "es") { u = "campos de investigación"}
    if (this.selectedLang === "it") { u = "aree di ricerca"}
    return u
    }

    biblioHU(u){   //page harmonia_universalis
    if (this.selectedLang === "de") { u = "Bibliografie Harmonia Universalis" }
    if (this.selectedLang === "fr") { u = "Bibliographie Harmonia Universalis"}
     if (this.selectedLang === "es") { u = "Bibliografía Harmonia Universalis"}
    if (this.selectedLang === "it") { u = "Bibliografia Harmonia Universalis"}
    return u
    }

    authorHeader(u){ //page harmonia_universalis
    if (this.selectedLang === "de") {u = "Autor" };
    if (this.selectedLang === "fr") {u = "Auteur" };
    if (this.selectedLang === "es") {u = "Autor" };
    if (this.selectedLang === "hu") {u = "Szerző" };
    if (this.selectedLang === "it") {u = "Autore" };
    return u
    }

  titleHeader(u)  {  //page harmonia_universalis
    if (this.selectedLang === "de") { u = "Titel" };
    if (this.selectedLang === "fr") { u = "Titre" };
    if (this.selectedLang === "es") { u = "Título" };
    if (this.selectedLang === "hu") { u = "Cím" };
    if (this.selectedLang === "it") { u = "Titolo" };
      return u
    }

  locationHeader(u) { //page harmonia_universalis
    if (this.selectedLang === "de") { u = "Ort" };
    if (this.selectedLang === "fr") { u = "Lieu" };
    if (this.selectedLang === "es") { u = "Lugar" };
    if (this.selectedLang === "hu") { u = "Közzététel helye" };
    if (this.selectedLang === "it") { u = "Luogo" };
      return u
    }

 dateHeader(u) {  //page harmonia_universalis
    if (this.selectedLang === "de") { u = "Datum" };
    if (this.selectedLang === "fr") { u = "Date" };
    if (this.selectedLang === "es") { u = "Fecha" };
    if (this.selectedLang === "hu") { u = "Dátuma" };
    if (this.selectedLang === "it") { u = "Data" };
      return u
    }

 newSearch(u) {  //display component
    if (this.selectedLang === "de") { u = "neue Suche" };
    if (this.selectedLang === "fr") { u = "nouvelle recherche" };
    if (this.selectedLang === "es") { u = "nueva búsqueda" };
    if (this.selectedLang === "hu") { u = "új keresés" };
    if (this.selectedLang === "it") { u = "nuova ricerca" };
        return u
    }


 linkedPagesTitle(u) {  //display component
    if (this.selectedLang === "de") { u = "verlinkte Seiten" };
    if (this.selectedLang === "fr") { u = "pages liées" };
    if (this.selectedLang === "es") { u = "páginas enlazadas" };
    if (this.selectedLang === "hu") { u = "kapcsolódó oldalak" };
    if (this.selectedLang === "it") { u = "pagine collegate" };
        return u
    }


  mainPage(u)  {  //component display
    if (this.selectedLang === "de") { u = "HauptSeite" };
    if (this.selectedLang === "fr") { u = "page principale" };
    if (this.selectedLang === "es") { u = "página principal" };
    if (this.selectedLang === "hu") { u = "főoldal" };
    if (this.selectedLang === "it") { u = "pagina principale" };
        return u
    }


  factGridQuery(u)  {  //display component
    if (this.selectedLang === "de") { u = "FactGrid Abfrage" };
    if (this.selectedLang === "fr") { u = "Requête FactGrid" };
    if (this.selectedLang === "es") { u = "Consulta FactGrid" };
    if (this.selectedLang === "hu") { u = "FactGrid lekérdezés" };
    if (this.selectedLang === "it") { u = "Interrogazione FactGrid" };
        return u
    }


  externalLinksTitle(u)  {  //display component
    if (this.selectedLang === "de") { u = "Externe Links" };
    if (this.selectedLang === "fr") { u = "Liens externes" };
    if (this.selectedLang === "es") { u = "Enlaces externos" };
    if (this.selectedLang === "hu") { u = "Külső hivatkozások" };
    if (this.selectedLang === "it") { u = "Collegamenti esterni" };
        return u
    }

  clickToDisplay(u)  {  //display component
    if (this.selectedLang === "de") { u = "Klicken Sie zum Anzeigen" };
    if (this.selectedLang === "fr") { u = "cliquez pour afficher" };
    if (this.selectedLang === "es") { u = "haga clic para mostrar" };
    if (this.selectedLang === "hu") { u = "kattintson a megtekintéshezr" };
    if (this.selectedLang === "it") { u = "fare clic per visualizzare" };
        return u
    }


  clickToDownload(u)  {  //display component
    if (this.selectedLang === "de") { u = "Klicken Sie zum Download" };
    if (this.selectedLang === "fr") { u = "cliquez pour télécharger" };
    if (this.selectedLang === "es") { u = "haga clic para descargarlo" };
    if (this.selectedLang === "hu") { u = "kattintson a letöltéshez" };
    if (this.selectedLang === "it") { u = "fare clic per scaricare" };
        return u
    }


  stemma(u) {  //display component
    if (this.selectedLang === "de") { u = "Stemma_aufwärts" };
    if (this.selectedLang === "fr") { u = "Précédent_dans_le_stemma" };
    if (this.selectedLang === "es") { u = "Precedente_en_el_stemma" };
    if (this.selectedLang === "hu") { u = "Preceding_in_stemma" };
    if (this.selectedLang === "it") { u = "Precedente_in_stemma" };
        return u
    }

 activity(u) { // display component
          if (this.selectedLang === "en") { u = "Activity" };
         if (this.selectedLang === "de") { u = "Aktivität" };
         if (this.selectedLang === "fr") { u = "Activité" };
         if (this.selectedLang === "es") { u = "Actividad" };
         if (this.selectedLang === "it") { u = "Attività" };
         if (this.selectedLang === "hu") { u = "Aktivitással" };
        return u
   }


 instancesListTitle(u) {  // component info
    if (this.selectedLang === "de") { u = "Instanzen (Limit: 200):"; };
    if (this.selectedLang === "fr") { u = "Instances (limite: 200):" };
    if (this.selectedLang === "es") { u = "Entidades (limite: 200):" };
    if (this.selectedLang === "it") { u = "Entità (limite: 200):" };
    if (this.selectedLang === "hu") { u = "Entitások (korlát: 200):" };
       return u
    }



instancesListTitle_50(u) {  // sparql-display 
    if (this.selectedLang === "de") { u = "Instanzen (Limit: 50):"; };
    if (this.selectedLang === "fr") { u = "Instances (limite: 50):" };
    if (this.selectedLang === "es") { u = "Entidades (limite: 50):" };
    if (this.selectedLang === "it") { u = "Entità (limite: 50):" };
    if (this.selectedLang === "hu") { u = "Entitások (korlát: 50):" };
       return u
    }

  subclassesListTitle(u) {  // component info
    if (this.selectedLang === "de") { u = "Unterklassen:" };
    if (this.selectedLang === "fr") { u = "Sous-classes:" };
    if (this.selectedLang === "es") { u = "Subclases:" };
    if (this.selectedLang === "hu") { u = "Alosztályok:" };
    if (this.selectedLang === "it") { u = "Sottoclassi:" };
       return u
    }


  classesListTitle(u) {  // component info
    if (this.selectedLang === "de") { u = "SuperKlassen:" };
    if (this.selectedLang === "fr") { u = "Superclasses:" };
    if (this.selectedLang === "es") { u = "Superclases:" };
    if (this.selectedLang === "it") { u = "Superclassi:" };
    if (this.selectedLang === "hu") { u = "Szuperosztályok:" };
       return u
    }

  
  natureOfListTitle(u) {  // component info
    if (this.selectedLang === "de") { u = "Instanz von " };
    if (this.selectedLang === "fr") { u = "Instance de " };
    if (this.selectedLang === "es") { u = "Instancia de " }; 
    if (this.selectedLang === "it") { u = "Istanza de " };
    if (this.selectedLang === "hu") { u = "Példánya a " };
       return u
    }

  
  subInfoTitle(u) {  // component info
    if (this.selectedLang === "de") { u = "Q-Item Information" };
    if (this.selectedLang === "fr") { u = "Information sur l'élément" };
    if (this.selectedLang === "es") { u = "Información sobre el elemento" };
    if (this.selectedLang === "it") { u = "Informazioni sull'elemento" };
    if (this.selectedLang === "hu") { u = "Az elemre vonatkozó információk" };
       return u
    }

  prefix1(u) {  // component info
    if (this.selectedLang === "de") { u = "Klassenhierarchie: abhängige Klasse von " };
    if (this.selectedLang === "fr") { u = "hiérarchie des classes: classe dépendante de " };
    if (this.selectedLang === "es") { u = "jerarquía de clases: clase dependiente de " };
    if (this.selectedLang === "it") { u = "gerarchia delle classe: classe dipendente da " };
    if (this.selectedLang === "hu") { u = "osztályhierarchia: osztály függő " };
       return u
    }

  prefix2(u) {  // component info
    if (this.selectedLang === "de") { u = "Klassenhierarchie: Klasse mit" };
    if (this.selectedLang === "fr") { u = "hiérarchie des classes: classe dotée de " };
    if (this.selectedLang === "es") { u = "jerarquía de clases: clase con " };
    if (this.selectedLang === "it") { u = "gerarchia delle classe: classe con " };
    if (this.selectedLang === "hu") { u = "osztályhierarchia: osztály a " };
       return u
    }

  suffix1(u) {  // component info
     if (this.selectedLang === "de") { u = "Klassen:" };
    if (this.selectedLang === "fr") { u = "classes:" };
    if (this.selectedLang === "es") { u = "clases:" };
    if (this.selectedLang === "it") { u = "classi:" };
    if (this.selectedLang === "hu") { u = "osztályok:" };
       return u
    }

   buildingTitle(u) { // sparql-display component
      if (this.selectedLang === "de") { u = "Gebäude und Denkmäler:" };
      if (this.selectedLang === "fr") { u = "Edifices et monuments:" };
      if (this.selectedLang === "es") { u = "Edificios y monumentos:" };
      if (this.selectedLang === "it") { u = "Edifici e monumenti:" };
      if (this.selectedLang === "hu") { u = "Épületek és emlékmű:" };
      return u
   }

   familyNameTitle(u) { // sparql-display component
          if (this.selectedLang === "de") { u = "Mit diesem Familiennamen:" };
          if (this.selectedLang === "fr") { u = "Portant ce nom de famille:" };
          if (this.selectedLang === "es") { u = "Llevando este apellido:" };
          if (this.selectedLang === "it") { u = "Portando questo cognome:" };
          if (this.selectedLang === "hu") { u = "Ezt a vezetéknevet viselve:" };
          return u
   }

   contextTitle(u) { // sparql-display component
           if (this.selectedLang === "de") { u = "In diesem Kontext anwesend:" };
           if (this.selectedLang === "fr") { u = "Présents dans ce contexte:" };
           if (this.selectedLang === "es") { u = "Presentes en este contexto:" };
           if (this.selectedLang === "it") { u = "Presente in questo contesto:" };
           if (this.selectedLang === "hu") { u = "Ebben az összefüggésben jelen van:" };
          return u
   }

   organisationTitle(u) { // sparql-display component
         if (this.selectedLang === "de") { u = "Mitglieder:" };
         if (this.selectedLang === "fr") { u = "Membres:" };
         if (this.selectedLang === "es") { u = "Membres:" };
         if (this.selectedLang === "it") { u = "Membri:" };
         if (this.selectedLang === "hu") { u = "Tagok:" };
         return u
   }

   activityTitle(u) { // sparql-display component
         if (this.selectedLang === "de") { u = "Mit dieser Aktivität:" };
         if (this.selectedLang === "fr") { u = "Ayant cette activité:" };
         if (this.selectedLang === "es") { u = "Con esta actividad:" };
         if (this.selectedLang === "it") { u = "Con questa attività:" };
         if (this.selectedLang === "hu") { u = "Ezzel az aktivitással:" };
        return u
   }

   addressTitle(u) { // sparql-display component
         if (this.selectedLang === "de") { u = "An dieser Adresse wohnhaft:" };
         if (this.selectedLang === "fr") { u = "Domicilié.e.s à cette adresse:" };
         if (this.selectedLang === "es") { u = "Residente en esta dirección:" };
         if (this.selectedLang === "it") { u = "Residente a questo indirizzo:" };  
         if (this.selectedLang === "hu") { u = "Ezen a címen lakó személyd:" };  
       return u
   }

   workTitle(u) {  // sparql-display component
        if (this.selectedLang === "de") { u = "Werke" };
        if (this.selectedLang === "fr") { u = "Œuvres" };
        if (this.selectedLang === "es") { u = "Obras" };
        if (this.selectedLang === "it") { u = "Opere" };  
        if (this.selectedLang === "hu") { u = "Müvek" };
       return u
  }

  pupilTitle(u) {  // sparql-display component
    if (this.selectedLang === "de") { u = "Schüler/innen" };
    if (this.selectedLang === "fr") { u = "Élèves et disciples" };
    if (this.selectedLang === "es") { u = "Alumnos y discípulos" };
    if (this.selectedLang === "it") { u = "Studenti e discepoli" };
    if (this.selectedLang === "hu") { u = "Müvek" };
    return u
  }

  patientsTitle(u) {  // sparql1-display component
    if (this.selectedLang === "de") { u = "Patienten/innen" };
    if (this.selectedLang === "fr") { u = "Patient.e.s" };
    if (this.selectedLang === "es") { u = "Pacientes" };
    if (this.selectedLang === "it") { u = "Pazienti" };
    if (this.selectedLang === "hu") { u = "Páciensek" };
    return u
  }

  listTitle(u) {  // sparql1-display component
    if (this.selectedLang === "de") { u = "Liste" };
    if (this.selectedLang === "fr") { u = "Liste" };
    if (this.selectedLang === "es") { u = "Lista" };
    if (this.selectedLang === "it") { u = "Lista" };
    if (this.selectedLang === "hu") { u = "Lista" };
    return u
  }

  setTitle(u) {  // sparql1-display component
    if (this.selectedLang === "de") { u = "Erhalten:" };
    if (this.selectedLang === "fr") { u = "Inclus :" };
    if (this.selectedLang === "es") { u = "Incluye:" };
    if (this.selectedLang === "it") { u = "Include:" };
    if (this.selectedLang === "hu") { u = "Tartalmazza:" };
    return u
  }
  
  currentAddress(u) {  // sparql1-display component
    if (this.selectedLang === "de") { u = "Aktuelle Adresse:" };
    if (this.selectedLang === "fr") { u = "Adresse actuelle :" };
    if (this.selectedLang === "es") { u = "Dirección actual:" };
    if (this.selectedLang === "it") { u = "Indirizzo attuale:" };
    if (this.selectedLang === "hu") { u = "Jelenlegi cím:" };
    return u
  }



/*
this.instancesListTitle = "Instanzen (Limit: 200):"; 
                                      this.subclassesListTitle = "Unterklassen:";
                                      this.classesListTitle = "SuperKlassen:";
                                      this.natureOfListTitle = "Instanz von "
                                      this.subTitle = "Q-Item Information";
                                      this.prefix1 ="abhängige Klasse von ";
                                      this.prefix2= "Klasse mit";
                                      this.suffix1 = "Klassen:"
                                    }
    if (this.selectedLang === "fr") { this.instancesListTitle = "instances (limite: 200):" 
                                      this.subclassesListTitle = "sous-classes:";
                                      this.classesListTitle = "superclasses:";
                                      this.natureOfListTitle = "instance de "
                                      this.subTitle = "Information sur l'élément";
                                      this.prefix1 = "classe dépendante de ";
                                      this.prefix2 = "classe dotée de";
                                      this.suffix1 = "classes:"
                                    };
    if (this.selectedLang === "es") { this.instancesListTitle = "entidades (limite: 200):" ;
                                      this.subclassesListTitle = "subclases:";
                                      this.classesListTitle = "superclases";
                                      this.natureOfListTitle = "instancia de";
                                      this.subTitle = "Información sobre el elemento";
                                      this.prefix1 = "clase dependiente de";
                                      this.prefix2 = "clase con ";
                                      this.suffix1 = "clases:" };
    if (this.selectedLang === "it") { this.instancesListTitle = "entità (limite: 200):" ;
                                      this.subclassesListTitle = "sottoclassi:";
                                      this.classesListTitle = "superclassi";
                                      this.natureOfListTitle = "istanza di ";
                                      this.subTitle = "Informazioni sull'elemento";
                                      this.prefix1 = "classe dipendente da ";
                                      this.prefix2 = "classe con ";
                                      this.suffix1 = "classi:" };
    if (this.selectedLang === "hu") { this.instancesListTitle = "entitások (korlát: 200):" ;
                                      this.subclassesListTitle = "alosztályok:";
                                      this.classesListTitle = "szuperosztályok";
                                      this.natureOfListTitle = "példánya a ";
                                      this.subTitle = "Az elemre vonatkozó információk";
                                      this.prefix1 = "osztály függő";
                                      this.prefix2 = "osztály a ";
                                      this.suffix1 = "osztályok:" };
                                      */

}
