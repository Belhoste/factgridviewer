import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { SelectedLangService } from '../../selected-lang.service';





@Component({
    selector: 'app-item-info',
    templateUrl: './item-info.component.html',
    styleUrls: ['./item-info.component.scss'],
    standalone: true,
    imports: [CommonModule, NgClass, MatCardModule, NgFor, NgIf, RouterLink, MatIconModule]
})
export class ItemInfoComponent implements OnChanges {
  private lang = inject(SelectedLangService);


  @Input() infoList;
  

  
  selectedLang: string = (localStorage['selectedLang'] === undefined) ? "en" : localStorage['selectedLang'];
  list1:any[] = [];
  list2:any[] = [];
  list3:any[] = [];
  list4: any[] = [];
  technicalities: any[] = [];
  list1Number;
  list2Number;
  list3Number;
  list4Number;
  technicalitiesNumber;
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

    this.instancesListTitle = this.lang.getTranslation('$1', this.lang.selectedLang);
    this.subclassesListTitle = this.lang.getTranslation('$1', this.lang.selectedLang);
    this.classesListTitle = this.lang.getTranslation('$1', this.lang.selectedLang);
    this.natureOfListTitle = this.lang.getTranslation('$1', this.lang.selectedLang);
    this.subInfoTitle = this.lang.getTranslation('$1', this.lang.selectedLang);
    this.prefix1 = this.lang.getTranslation('$1', this.lang.selectedLang);
    this.prefix2 = this.lang.getTranslation('$1', this.lang.selectedLang);
    this.suffix1 = this.lang.getTranslation('$1', this.lang.selectedLang);

    // Utilisation des listes depuis infoList
    this.list1 = this.infoList?.subclassesList ?? [];
    this.list2 = this.infoList?.instancesList ?? [];
    this.list3 = this.infoList?.classesList ?? [];
    this.list4 = this.infoList?.natureOfList ?? [];
    this.technicalities = this.infoList?.technicalities ?? [];

    this.list1Number = this.list1.length;
    this.list2Number = this.list2.length;
    this.list3Number = this.list3.length;
    this.list4Number = this.list4.length;
    this.technicalitiesNumber = this.technicalities.length;

    this.isInfo =
      this.list1Number + this.list2Number + this.list3Number + this.list4Number + this.technicalitiesNumber > 0;

    this.isList1 = this.list1.length > 0;
    this.isList2 = this.list2.length > 0;
    this.isList3 = this.list3.length > 0;
    this.isList4 = this.list4.length > 0;
  }

    } 





  


