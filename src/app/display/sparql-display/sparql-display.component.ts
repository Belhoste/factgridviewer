import { Component, Input, OnChanges, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SelectedLangService } from '../../selected-lang.service';


@Component({
    selector: 'app-sparql-display',
    templateUrl: 'sparql-display.component.html',
    styleUrls: ['sparql-display.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatCardModule, NgClass, NgFor, NgIf, RouterLink, MatIconModule]
})
export class SparqlDisplayComponent implements OnChanges
, OnDestroy
{
 
  @Input() sparqlSubject;
  @Input() sparqlData ;

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
  activityTitle:string = "With this activity:" ;
  addressTitle:string ="Domiciled at this address:" ;
  workTitle:string = "Works:"

   
  constructor( private lang: SelectedLangService ) {  }

  ngOnChanges(changes: SimpleChanges): void {

   this.isList = false;

    this.instancesListTitle_50 = this.lang.instancesListTitle_50(this.instancesListTitle_50);

    this.subclassesListTitle = this.lang.subclassesListTitle(this.subclassesListTitle);


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
      }
      else {
        if(this.subTitle == "Q24499"){ //family name
         this.subTitle = this.lang.familyNameTitle(this.familyNameTitle);
          }
          else { 
             if (this.sparqlSubject == "Q12") {        //organisation
              if(this.list[0] && this.list[0].activity){  // people active in this organisation
                  this.subTitle = this.lang.activityTitle(this.activityTitle);
              }
                else{   //people members of this organisation
                 this.subTitle = this.lang.organisationTitle(this.organisationTitle);
                }
              }
            else { if(this.subTitle == "Q37073" || this.subTitle == "Q146602" || this.subTitle == "Q146410" || this.subTitle =="Q257052" || this.subTitle =="Q37131"){ //activity
                    this.subTitle = this.lang.activityTitle(this.activityTitle);
              }
              else { if(this.subTitle == "Q16200"){  //address
                  this.subTitle = this.lang.addressTitle(this.addressTitle);
                 }  
                  else { if(this.subTitle == "Q7"){ //people

                  this.subTitle = this.lang.workTitle(this.workTitle);
                      }
                 else {
              //     if(this.subTitle == "Q20"){ //people

                      this.subTitle = "";
                      this.list =[]; }
             //         }
                    }   
                  }
                } 
             }     
           }
      
        
        if (this.list !==undefined && this.list[0] !==undefined){ this.isList = true };
        if (this.list !==undefined && this.list[0] === undefined) { this.isList = false };

      }
    }

      ngOnDestroy(): void {
         this.sparqlSubject = "";
         this.sparqlData = "";
         this.list = [];
      }

    } 
   



