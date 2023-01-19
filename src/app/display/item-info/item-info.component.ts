import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent implements OnChanges {

  @Input() instancesList;
  @Input() subclassesList;
  @Input() natureOfList;
  @Input() classesList;
  
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
  subTitle:string = "Information on the Q-item";
  classesListTitle:string = "classes of the Q-item:"
  natureOfListTitle:string = "instance of";
  prefix1 = "class depending on ";
  prefix2 = "class with ";
  suffix1 = "classes:"

  constructor() {  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.selectedLang === "de") { this.instancesListTitle = "Instanzen (Limit: 200):"; 
                                      this.subclassesListTitle = "Unterklassen:";
                                      this.classesListTitle = "SuperKlassen:";
                                      this.natureOfListTitle = "Instanz von"
                                      this.subTitle = "Q-Item Information";
                                      this.prefix1 ="abhängige Klasse von";
                                      this.prefix2= "Klasse mit";
                                      this.suffix1 = "Klassen:"
                                    }
    if (this.selectedLang === "fr") { this.instancesListTitle = "instances (limite: 200):" 
                                      this.subclassesListTitle = "sous-classes:";
                                      this.classesListTitle = "superclasses:";
                                      this.natureOfListTitle = "instance de"
                                      this.subTitle = "Information sur l'élément";
                                      this.prefix1 = "classe dépendante de";
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

    if(changes.instancesList && changes.instancesList.currentValue){            
      this.list2=this.instancesList;
      }

    if(changes.subclassesList && changes.subclassesList.currentValue){        
      this.list1 =  this.subclassesList;  
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
      if(this.list1Number + this.list2Number +this.list3Number +this.list4Number > 0) { this.isInfo = true}
      
      
      if (this.list1Number < 2){
        this.subclassesListTitle = "subclass:";
        if (this.selectedLang === "de") { this.subclassesListTitle = "Unterklasse:"};
        if (this.selectedLang === "fr") { this.subclassesListTitle = "sous-classe:"};
        if (this.selectedLang === "es") { this.subclassesListTitle = "subclase:"}; 
      }

      if (this.list3Number < 2){
        this.classesListTitle = "superclass:";
        if (this.selectedLang === "de") { this.classesListTitle = "SuperKlasse:"};
        if (this.selectedLang === "fr") { this.classesListTitle = "superclasse:"};
        if (this.selectedLang === "es") { this.classesListTitle = "superclase:"};
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
      }
  
      if(this.list1[0] !==undefined){ this.isList1 = true };
      if(this.list1[0] ===undefined){ this.isList1 = false };
      if(this.list2[0] !==undefined){ this.isList2 = true };
      if(this.list2[0] ===undefined){ this.isList2 = false };
      if(this.list3[0] !==undefined){ this.isList3 = true };
      if(this.list3[0] ===undefined){ this.isList3 = false };
      if(this.list4[0] !==undefined){ this.isList4 = true };
      if(this.list4[0] ===undefined){ this.isList4 = false };
      
      console.log(this.subTitle);
    
    }
    } 





  


