import { Component, Input, OnChanges, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SelectedLangService } from '../selected-lang.service';


@Component({
    selector: 'app-sparql-display',
    templateUrl: 'sparql-display.component.html',
    styleUrls: ['sparql-display.component.scss'],
    standalone: true,
    imports: [MatCardModule, NgClass, NgFor, NgIf, RouterLink, MatIconModule]
})
export class SparqlDisplayComponent implements OnChanges {
 
  @Input() sparqlSubject;
  @Input() sparqlData ;
//  @Input() instancesList;
//  @Input() subclassesList;
  

  
 // selectedLang: string = (localStorage['selectedLang'] === undefined) ? "en" : localStorage['selectedLang'];
  list:any[] = [];
  isList:boolean = false;
  subTitle:string = "";
  instancesListTitle_50 = "Instances (limit: 50):";
  subclassesListTitle = "Subclasses:";
  isWorks:boolean=false ;
  buildingTitle:string = "Buildings and monuments:" ;
  familyNameTitle:string = "Bearing this family name:" ;
  contextTitle:string = "Present in this context:" ;
  organisationTitle:string = "Members:" ;
  activityTitle:string = "with this activity:" ;
  addressTitle:string ="Domiciled at this addreess:" ;
  workTitle:string = "Works:"



   
  constructor( private lang: SelectedLangService ) {  }

  ngOnChanges(changes: SimpleChanges): void {

    this.instancesListTitle_50 = this.lang.instancesListTitle_50(this.instancesListTitle_50);

    this.subclassesListTitle = this.lang.subclassesListTitle(this.subclassesListTitle);


 /*   if (this.selectedLang === "de") { this.instancesListTitle = "Instanzen (limit: 50):"; 
                                      this.subclassesListTitle = "Unterklassen:"};
    if (this.selectedLang === "fr") { this.instancesListTitle = "Entités (limite: 50):" 
                                      this.subclassesListTitle = "Sous-classes:"};
    if (this.selectedLang === "es") { this.instancesListTitle = "Entidades (limite: 50):" ;
                                     this.subclassesListTitle = "Subclases:"};
    if (this.selectedLang === "it") { this.instancesListTitle = "Entità (limite: 50):" ;
                                     this.subclassesListTitle = "Sottoclassi:"};
    if (this.selectedLang === "hu") { this.instancesListTitle = "Entitások (limit: 50):" ;
                                     this.subclassesListTitle = "Alosztályok:"}; */

    if(changes.sparqlData && changes.sparqlData.currentValue){      
      this.list = this.sparqlData;
      }
  
    if(changes.sparqlSubject && changes.sparqlSubject.currentValue){
         this.subTitle=this.sparqlSubject;

    if(this.subTitle == "Q7"){ //people
       this.isWorks=true; };
          
    if(this.subTitle == "Q8"){  //location
      this.isWorks=true;
      this.subTitle = this.lang.buildingTitle(this.buildingTitle);

  /*    if (this.selectedLang === "en") { this.subTitle = "Buildings and monuments:" };
      if (this.selectedLang === "de") { this.subTitle = "Gebäude und Denkmäler:" };
      if (this.selectedLang === "fr") { this.subTitle = "Edifices et monuments:" };
      if (this.selectedLang === "es") { this.subTitle = "Edificios y monumentos:" };
      if (this.selectedLang === "it") { this.subTitle = "Edifici e monumenti:" };
      if (this.selectedLang === "hu") { this.subTitle = "Épületek és emlékmű:" };*/
      }
      else {
        if(this.subTitle == "Q24499"){ //family name
         this.subTitle = this.lang.familyNameTitle(this.familyNameTitle);
         
  /*        if (this.selectedLang === "en") { this.subTitle = "Bearing this family name:" };
          if (this.selectedLang === "de") { this.subTitle = "Mit diesem Familiennamen:" };
          if (this.selectedLang === "fr") { this.subTitle = "Portant ce nom de famille:" };
          if (this.selectedLang === "es") { this.subTitle = "Llevando este apellido:" };
          if (this.selectedLang === "it") { this.subTitle = "Portando questo cognome:" };
          if (this.selectedLang === "hu") { this.subTitle = "Ezt a vezetéknevet viselve:" }; */

          }
          else { 
             if (this.sparqlSubject == "Q12") {        //organisation
              if(this.list[0] && this.list[0].activity){  // people active in this organisation
                  this.subTitle = this.lang.activityTitle(this.activityTitle);
   /*            if (this.selectedLang === "en") {this.subTitle ="Present in this context:"};
                if (this.selectedLang === "de") { this.subTitle = "In diesem Kontext anwesend:" };
                if (this.selectedLang === "fr") { this.subTitle = "Présents dans ce contexte:" };
                if (this.selectedLang === "es") { this.subTitle = "Presentes en este contexto:" };
                if (this.selectedLang === "it") { this.subTitle = "Presente in questo contesto:" };
                if (this.selectedLang === "hu") { this.subTitle = "Ebben az összefüggésben jelen van:" }; */
              }
                else{   //people members of this organisation
                // this.isWorks=true;
                 this.subTitle = this.lang.organisationTitle(this.organisationTitle);

       /*          if (this.selectedLang === "en") {this.subTitle ="Members:"};
                    if (this.selectedLang === "de") { this.subTitle = "Mitglieder:" };
                    if (this.selectedLang === "fr") { this.subTitle = "Membres:" };
                    if (this.selectedLang === "es") { this.subTitle = "Membres:" };
                    if (this.selectedLang === "it") { this.subTitle = "Membri:" };
                    if (this.selectedLang === "hu") { this.subTitle = "Tagok:" }; */
                }
              }
            else { if(this.subTitle == "Q37073" || this.subTitle == "Q146602" || this.subTitle == "Q146410" || this.subTitle =="Q257052"){ //activity
         //     this.isWorks=false;
                    this.subTitle = this.lang.activityTitle(this.activityTitle);

    /*        if (this.selectedLang === "en") {this.subTitle ="with this activity:"};
              if (this.selectedLang === "de") { this.subTitle = "mit dieser Aktivität:" };
              if (this.selectedLang === "fr") { this.subTitle = "Ayant cette activité:" };
              if (this.selectedLang === "es") { this.subTitle = "con esta actividad:" };
              if (this.selectedLang === "it") { this.subTitle = "con questa attività:" };
              if (this.selectedLang === "hu") { this.subTitle = "ezzel az aktivitással:" } */
              }
              else { if(this.subTitle == "Q16200"){  //address
                  this.subTitle = this.lang.addressTitle(this.addressTitle);
              /*
                if (this.selectedLang === "en") {this.subTitle ="Domiciled at this address:"};
                if (this.selectedLang === "de") { this.subTitle = "An dieser Adresse wohnhaft:" };
                if (this.selectedLang === "fr") { this.subTitle = "Domicilié.e.s à cette adresse:" };
                if (this.selectedLang === "es") { this.subTitle = "Residente en esta dirección:" };
                if (this.selectedLang === "it") { this.subTitle = "Residente a questo indirizzo:" };  
                if (this.selectedLang === "hu") { this.subTitle = "Ezen a címen lakó személyd:" };  */

                 }  
                  else { if(this.subTitle == "Q7"){ //people

                  this.subTitle = this.lang.workTitle(this.workTitle);
       /*                   if (this.selectedLang === "en") {this.subTitle ="Works"};
                          if (this.selectedLang === "de") { this.subTitle = "Werke" };
                          if (this.selectedLang === "fr") { this.subTitle = "Œuvres" };
                          if (this.selectedLang === "es") { this.subTitle = "Obras" };
                          if (this.selectedLang === "it") { this.subTitle = "Opere" };  
                         if (this.selectedLang === "hu") { this.subTitle = "Müvek" };  */
                      }
                    }   
                  }
                } 
             }     
           }
      

  

      console.log(this.list);
      console.log(this.isWorks);
        
        if (this.list[0] !==undefined){ this.isList = true };
        if (this.list[0] === undefined) { this.isList = false };

       console.log(this.isList);

      }

      }
    } 
   



