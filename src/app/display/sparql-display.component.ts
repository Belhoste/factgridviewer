import { Component, Input, OnChanges, ChangeDetectorRef, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-sparql-display',
  templateUrl: 'sparql-display.component.html',
  styleUrls: ['sparql-display.component.scss']
})
export class SparqlDisplayComponent implements OnChanges {
 
  @Input() sparqlSubject;
  @Input() sparqlData ;
//  @Input() instancesList;
//  @Input() subclassesList;
  

  
  selectedLang: string = (localStorage['selectedLang'] === undefined) ? "en" : localStorage['selectedLang'];
  list:any[] = [];
  isList:boolean = false;
  subTitle:string = "";
  instancesListTitle = "Instances (limit: 200):";
  subclassesListTitle = "Subclasses:"

  constructor() {  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.selectedLang === "de") { this.instancesListTitle = "Instanzen (limit: 50):"; 
                                      this.subclassesListTitle = "Unterklassen:"};
    if (this.selectedLang === "fr") { this.instancesListTitle = "Entités (limite: 50):" 
                                      this.subclassesListTitle = "Sous-classes:"};
    if (this.selectedLang === "es") { this.instancesListTitle = "Entidades (limite: 50):" ;
                                     this.subclassesListTitle = "Subclases:"}; 
    if(changes.sparqlData && changes.sparqlData.currentValue){      
      this.list = this.sparqlData;
      }
  
    if(changes.sparqlSubject && changes.sparqlSubject.currentValue){
            this.subTitle=this.sparqlSubject;
          
    if(this.subTitle == "Q8"){
      if (this.selectedLang === "en") { this.subTitle = "Buildings and monuments:" };
      if (this.selectedLang === "de") { this.subTitle = "Gebäude und Denkmäler:" };
      if (this.selectedLang === "fr") { this.subTitle = "Edifices et monuments:" };
      if (this.selectedLang === "es") { this.subTitle = "Edificios y monumentos:" };
      }
      else {
        if(this.subTitle == "Q24499"){
          if (this.selectedLang === "en") { this.subTitle = "Bearing this family name:" };
          if (this.selectedLang === "de") { this.subTitle = "Mit diesem Familiennamen:" };
          if (this.selectedLang === "fr") { this.subTitle = "Portant ce nom de famille:" };
          if (this.selectedLang === "es") { this.subTitle = "Llevando este apellido:" };
          }
          else {
          if (this.sparqlSubject == "Q12") {
              if(this.list[0] && this.list[0].activity){
              if (this.selectedLang === "en") {this.subTitle ="Present in this context:"};
                if (this.selectedLang === "de") { this.subTitle = "In diesem Kontext anwesend:" };
                if (this.selectedLang === "fr") { this.subTitle = "Présents dans ce contexte:" };
                if (this.selectedLang === "es") { this.subTitle = "Presentes en este contexto:" };
              }
              else{
                if (this.selectedLang === "en") {this.subTitle ="Members:"};
                if (this.selectedLang === "de") { this.subTitle = "Mitglieder:" };
                if (this.selectedLang === "fr") { this.subTitle = "Membres:" };
                if (this.selectedLang === "es") { this.subTitle = "Membres:" };
              }
            }
            else { if(this.subTitle == "Q37073" || this.subTitle == "Q146602" || this.subTitle == "Q146410" || this.subTitle =="Q257052"){
              if (this.selectedLang === "en") {this.subTitle ="with this activity:"};
              if (this.selectedLang === "de") { this.subTitle = "mit dieser Aktivität:" };
              if (this.selectedLang === "fr") { this.subTitle = "Ayant cette activité:" };
              if (this.selectedLang === "es") { this.subTitle = "con esta actividad:" };  
              }
              else { if(this.subTitle == "Q16200"){
                if (this.selectedLang === "en") {this.subTitle ="Domiciled at this address:"};
                if (this.selectedLang === "de") { this.subTitle = "An dieser Adresse wohnhaft:" };
                if (this.selectedLang === "fr") { this.subTitle = "Domicilié.e.s à cette adresse:" };
                if (this.selectedLang === "es") { this.subTitle = "con esta actividad:" };  
              }  
      /*        else { if(this.subTitle == ""){
                if (this.selectedLang === "en") {this.subTitle =""};
                if (this.selectedLang === "de") { this.subTitle = "" };
                if (this.selectedLang === "fr") { this.subTitle = "" };
                if (this.selectedLang === "es") { this.subTitle = "" };  
                }
              }  */   
            }
          } 
            }     
          }
        
        if(this.list[0] !==undefined){ this.isList = true };
        if (this.list[0] === undefined) { this.isList = false };

      }

      }
    } 
   



