import { Component, Input, OnChanges, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, SimpleChanges, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SelectedLangService } from '../../selected-lang.service';
import { ArrayToCsvService } from '../../services/array-to-csv.service';


@Component({
  selector: 'app-sparql1-display',
  templateUrl: 'sparql1-display.component.html',
  styleUrls: ['sparql1-display.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, NgClass, NgFor, NgIf, RouterLink, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule]
})
export class Sparql1DisplayComponent implements OnChanges, OnDestroy {
  private lang = inject(SelectedLangService);
  private csv = inject(ArrayToCsvService);


  @Input() sparqlSubject;
  @Input() sparqlData;

  list: any[] = [];
  isList: boolean = false;
  isSearch: boolean = false;
  subTitle: string = "";
  instancesListTitle_50 = "Instances (limit: 50):";
  subclassesListTitle = "Subclasses:";
  isWorks: boolean = false;
  buildingTitle: string = "Buildings and monuments:";
  familyNameTitle: string = "Bearing this family name:";
  contextTitle: string = "Present in this context:";
  organisationTitle: string = "Members:";
  activityTitle: string = "With this activity:";
  addressTitle: string = "Domiciled at this address:";
  workTitle: string = "Works";
  pupilTitle: string = "Pupils and disciples";
  listTitle: string = "List";
  query: string;
  listWithoutDuplicate: any[];

  ngOnChanges(changes: SimpleChanges): void {

    this.query = "";
    this.isWorks = false;
    this.isList = false;

    if (changes.sparqlData && changes.sparqlData.currentValue) {
      if (this.sparqlData[0] !== undefined) { this.isList = true };
      changes.sparqlData.currentValue.forEach(function (el) {
        if (el.itemDescription === undefined) { el.itemText = el.itemLabel.value }
        else el.itemText = el.itemLabel.value + el.itemDescription.value
      })

      this.listWithoutDuplicate = [...new Map(changes.sparqlData.currentValue.reverse().map(v => [JSON.stringify([v.itemText]), v])).values()].reverse();  // remove the duplicates 

      this.list = this.listWithoutDuplicate;

      if (this.list.length > 15) this.isSearch = true;

    }

    if (changes.sparqlSubject && changes.sparqlSubject.currentValue) {
      this.subTitle = this.sparqlSubject;

      if (this.subTitle == "Q8") {  //location
        this.isWorks = true;
        this.subTitle = this.lang.buildingTitle(this.buildingTitle);
      }
      else {
        if (this.subTitle == "Q24499") { //family name
          this.isWorks = false;
          this.subTitle = this.lang.familyNameTitle(this.familyNameTitle);
        }
        else {
          if (this.subTitle == "Q12") { //organisation
            this.isWorks = false;
            if (this.list[0] && this.list[0].activity) {  // people active in this organisation
              this.subTitle = this.lang.activityTitle(this.activityTitle);
            }
            else {   //people members of this organisation
              this.isWorks = true;
              this.subTitle = this.lang.organisationTitle(this.organisationTitle);
            }
          }
          else {
            if (this.subTitle == "Q37073") { //activity
              this.isWorks = true;
              this.subTitle = this.lang.activityTitle(this.activityTitle);
            }
            else {
              if (this.subTitle == "Q16200") {  //address
                this.isWorks = true;
                this.subTitle = this.lang.addressTitle(this.addressTitle);
              }
              else {
                if (this.subTitle == "Q456376") { //author
                  this.isWorks = true;
                  this.subTitle = this.lang.workTitle(this.workTitle);
                }
                else {
                  if (this.subTitle = "Q172192") { //list
                    this.isWorks = true;
                    this.subTitle = this.lang.listTitle(this.listTitle);
                  }
                  else {
                    this.subTitle = "";
                    this.list = [];
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  applyFilter(event) {
    this.query = event.target.value.trim().toLowerCase();
    this.list = this.filterItem(this.listWithoutDuplicate, this.query);
  }

  filterItem(arr: any[], query) {
    return arr.filter((el) => el.itemText.toLowerCase().includes(this.query.toLowerCase()))
  }

  onClick(query) { //handling click for downlooding the filtered data
    let u = query;
    u = this.databaseToDownload(query);
    let v = this.csv.arrayToCsv(u);
    this.csv.downloadBlob(v, "factGrid", "text/csv;charset=utf-8;")
  }


  databaseToDownload(data) {
    let dataToDownload: any[][] = [["item.id", "item.label", "item.description"]];
    for (let i = 0; i < data.length; i++) { dataToDownload[i + 1] = [data[i].item.id, data[i].itemLabel.value, data[i].itemDescription.value] }
    return dataToDownload
  }


  ngOnDestroy(): void {
    this.sparqlSubject = "";
    this.sparqlData = "";
    this.list = [];
    this.query = "";
    this.isSearch = false;
    this.isList = false;
  }
}




