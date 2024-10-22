import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { SelectedLangService } from '../../selected-lang.service';
import { UnitPipe } from '../../unit.pipe';




@Component({
    selector: 'app-item-info',
    templateUrl: './item-info.component.html',
    styleUrls: ['./item-info.component.scss'],
    standalone: true,
    imports: [CommonModule, NgClass, MatCardModule, NgFor, NgIf, RouterLink, MatIconModule, UnitPipe]
})
export class ItemInfoComponent implements OnChanges {
  private lang = inject(SelectedLangService);


  @Input() instancesList;
  @Input() subclassesList;
  @Input() natureOfList;
  @Input() classesList;
  @Input() technicalities;

  
  selectedLang: string = (localStorage['selectedLang'] === undefined) ? "en" : localStorage['selectedLang'];
  list1:any[] = [];
  list2:any[] = [];
  list3:any[] = [];
  list4:any[] = [];
  list1Number;
  list2Number;
  list3Number;
  list4Number;
  isList1:boolean = false;
  isList2:boolean = false;
  isList3:boolean = false;
  isList4:boolean = false;
  isInfo:boolean = false;
  instancesListTitle = "instances of the Q-item:";
  subclassesListTitle = "subclasses of the Q-item:"
  subInfoTitle:string = "Information on the Q-item";
  classesListTitle:string = "classes of the Q-item:"
  natureOfListTitle:string = "instance of";
  prefix1:string = "class hierarchy: class depending on ";
  prefix2:string = "class hierarchy: class with ";
  suffix1: string = "classes:";

  openImage(image) { //handling click for picture (open in new tab) 
    window.open(image);
  }

  ngOnChanges(changes: SimpleChanges): void {

   

  
  this.instancesListTitle = this.lang.instancesListTitle(this.instancesListTitle);
  this.subclassesListTitle = this.lang.subclassesListTitle(this.subclassesListTitle);
   this.classesListTitle = this.lang.classesListTitle(this.classesListTitle);
    this.natureOfListTitle = this.lang.natureOfListTitle(this.natureOfListTitle);
     this.subInfoTitle = this.lang.subInfoTitle(this.subInfoTitle);
      this.prefix1 = this.lang.prefix1(this.prefix1);
       this.prefix2 = this.lang.prefix2(this.prefix2);
      this.suffix1 = this.lang.suffix1(this.suffix1);

      
  
      /*

    if (this.selectedLang === "de") { this.instancesListTitle = "Instanzen (Limit: 200):"; 
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

     

    if(changes.subclassesList && changes.subclassesList.currentValue){        
      this.list1 =  this.subclassesList;
      }

    if(changes.instancesList && changes.instancesList.currentValue){            
      this.list2 = this.instancesList;
      }

    if(changes.classesList && changes.classesList.currentValue){            
        this.list3=this.classesList;
        }

    if(changes.natureOfList && changes.natureOfList.currentValue){            
        this.list4=this.natureOfList;
       }

      this.list1Number=this.list1.length;
      this.list2Number=this.list2.length;
      this.list3Number=this.list3.length;
      this.list4Number=this.list4.length
      if(this.list1Number + this.list2Number +this.list3Number +this.list4Number > 0) { this.isInfo = true }

      
      
    /*   if (this.list1Number < 2){


       this.subclassesListTitle = "subclass:";
        if (this.selectedLang === "de") { this.subclassesListTitle = "Unterklasse:"};
        if (this.selectedLang === "fr") { this.subclassesListTitle = "sous-classe:"};
        if (this.selectedLang === "es") { this.subclassesListTitle = "subclase:"};
        if (this.selectedLang === "it") { this.subclassesListTitle = "sottoclasse:"};
        if (this.selectedLang === "hu") { this.subclassesListTitle = "alosztály:"}; 
      }

      if (this.list3Number < 2){
        this.classesListTitle = "superclass:";
        if (this.selectedLang === "de") { this.classesListTitle = "SuperKlasse:"};
        if (this.selectedLang === "fr") { this.classesListTitle = "superclasse:"};
        if (this.selectedLang === "es") { this.classesListTitle = "superclase:"};
        if (this.selectedLang === "it") { this.classesListTitle = "superclasse:"};
        if (this.selectedLang === "hu") { this.classesListTitle = "szuperosztály:"};
      }

      if (this.list4Number < 2){
        this.natureOfListTitle = "is an instance of the class:"; 
        this.suffix1 = "class:"
        if (this.selectedLang === "de") { this.natureOfListTitle = "ist eine Instanz:";
                                          this.suffix1 = "Klasse:"};
        if (this.selectedLang === "fr") { this.natureOfListTitle = "est une instance:";
                                          this.suffix1 = "classe:"};
        if (this.selectedLang === "es") { this.natureOfListTitle = "es una instancia:"
                                          this.suffix1 = "clase:" };
        if (this.selectedLang === "it") { this.natureOfListTitle = "è un'istanza:"
                                          this.suffix1 = "clase:" };
        if (this.selectedLang === "hu") { this.natureOfListTitle = "egy példány :"
                                          this.suffix1 = "clase:" };
      } */
  
      if(this.list1[0] !==undefined){ this.isList1 = true };
      if(this.list1[0] ===undefined){ this.isList1 = false };
      if(this.list2[0] !==undefined){ this.isList2 = true };
      if(this.list2[0] ===undefined){ this.isList2 = false };
      if(this.list3[0] !==undefined){ this.isList3 = true };
      if(this.list3[0] ===undefined){ this.isList3 = false };
      if(this.list4[0] !==undefined){ this.isList4 = true };
      if(this.list4[0] ===undefined){ this.isList4 = false };
      
    
    }
    } 





  


