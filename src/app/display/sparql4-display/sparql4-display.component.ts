import { Component, OnChanges, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, SimpleChanges, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SelectedLangService } from '../../selected-lang.service';
import { ArrayToCsvService } from '../../services/array-to-csv.service';


@Component({
  selector: 'app-sparql4-display',
  standalone: true,
    imports: [MatCardModule, NgClass, RouterLink, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
    templateUrl: './sparql4-display.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './sparql4-display.component.scss'
})
export class Sparql4DisplayComponent implements OnChanges, OnDestroy {
  private lang = inject(SelectedLangService);
  private csv = inject(ArrayToCsvService);


  sparqlSubject = input<string>();
  sparqlData = input();

  list: any[] = [];
  isList: boolean = false;
  isSearch: boolean = false;
  subTitle: string = "";
  isWorks: boolean = false;
  buildingTitle: string = "Buildings and monuments:";
  query: string;
  listWithoutDuplicate: any[];
  listTitle: string = "List";

  ngOnChanges(changes: SimpleChanges): void {

    this.query = "";
    this.isWorks = false;
    this.isList = false;
    this.isSearch = false;

    if (changes.sparqlData && changes.sparqlData.currentValue) {
      if (this.sparqlData()[0] !== undefined) { this.isList = true; console.log(this.sparqlData())};

      changes.sparqlData.currentValue.forEach(function (el) {
        if (el.itemDescription === undefined) { el.itemText = el.itemLabel.value }
        else el.itemText = el.itemLabel.value + el.itemDescription.value
      })

      this.listWithoutDuplicate = [...new Map(changes.sparqlData.currentValue.reverse().map(v => [JSON.stringify([v.itemText]), v])).values()].reverse();  // remove the duplicates 

      this.list = this.listWithoutDuplicate;

      if (this.list.length > 15) this.isSearch = true;

    }

    if (changes.sparqlSubject && changes.sparqlSubject.currentValue) {
      this.subTitle = this.sparqlSubject();


      if (this.subTitle == "Q8") {  //location
        this.isWorks = true;
        this.subTitle = this.lang.getTranslation('buildingTitle', this.lang.selectedLang);
      }
      else {

        if (this.subTitle == "GOV") {  //GOV
          this.isWorks = true;
          this.subTitle = this.lang.getTranslation('listTitle', this.lang.selectedLang);
        }

        else {
          this.subTitle = "";
          this.list = [];
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
    for (let i = 0; i < data.length; i++) { dataToDownload[i + 1] = [data[i].item.value, data[i].itemLabel.value, data[i].itemDescription.value] }
    return dataToDownload
  }

  ngOnDestroy(): void {
 //   this.sparqlSubject() = "";
 //   this.sparqlData() = "";
    this.list = [];
    this.query = "";
    this.isSearch = false;
    this.isList = false;
  }
} 
