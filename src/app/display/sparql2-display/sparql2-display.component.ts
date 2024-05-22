import { Component, Input, OnChanges, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SelectedLangService } from '../../selected-lang.service';
import { ArrayToCsvService} from '../../services/array-to-csv.service';



@Component({
  selector: 'app-sparql2-display',
  standalone: true,
  imports: [MatCardModule, NgClass, NgFor, NgIf, RouterLink, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './sparql2-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './sparql2-display.component.scss'
})
export class Sparql2DisplayComponent implements OnChanges, OnDestroy {

  @Input() sparqlSubject;
  @Input() sparqlData;

  list: any[] = [];
  isList: boolean = false;
  isSearch:boolean = false;
  subTitle: string = "";
  isWorks: boolean = false;
  pupilTitle: string = "Pupils and disciples";
  listTitle: string = "List";
  setTitle: string = "Include:";
  query:string;
  listWithoutDuplicate:any[];

  constructor(private lang: SelectedLangService, private csv: ArrayToCsvService) { }

  ngOnChanges(changes: SimpleChanges): void {
  
   this.query = "";
   this.isWorks = false;
   this.isList = false;

    if (changes.sparqlData && changes.sparqlData.currentValue) {
      if (this.sparqlData[0] !== undefined) { this.isList = true };
    
       changes.sparqlData.currentValue.forEach( function (el) {
         if(el.itemDescription === undefined) { el.itemText = el.itemLabel.value }
         else el.itemText = el.itemLabel.value + el.itemDescription.value
       })

      this.listWithoutDuplicate = [...new Map(changes.sparqlData.currentValue.reverse().map(v => [JSON.stringify([v.itemText]), v])).values()].reverse();  // remove the duplicates 

      this.list=this.listWithoutDuplicate;

      if(this.list.length > 15) this.isSearch = true;
     
    }
    if (changes.sparqlSubject && changes.sparqlSubject.currentValue) {
      this.subTitle = this.sparqlSubject;
      console.log(this.subTitle);


      if (this.subTitle == "master") {  //pupils and disciples
        this.isWorks = true;
        this.subTitle = this.lang.pupilTitle(this.pupilTitle);
      } else {
        if (this.subTitle == "Q945258") { //set
          console.log(this.subTitle);
          this.isWorks = true;
          this.subTitle = this.lang.setTitle(this.setTitle);
        } else {
          if (this.subTitle == "Q172192") { //list
            console.log(this.subTitle);
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

   applyFilter(event) {
    this.query = event.target.value.trim().toLowerCase();
    this.list = this.filterItem(this.listWithoutDuplicate, this.query)   ;
    }

  filterItem(arr:any[], query) { 
    return arr.filter((el) => el.itemText.toLowerCase().includes(this.query.toLowerCase()))
    }

  onClick(query){ //handling click for downlooding the filtered data
    let u= query;
     u = this.databaseToDownload(query);
    let v= this.csv.arrayToCsv(u);
    this.csv.downloadBlob(v, "factGrid", "text/csv;charset=utf-8;")
    }

  databaseToDownload(data){
      let dataToDownload:any[][] = [ ["item.id","item.label","item.description"] ];
      for (let i=0; i<data.length; i++){ dataToDownload[i+1] = [data[i].item.value, data[i].itemLabel.value, data[i].itemDescription.value] } 
      return dataToDownload
     }

  ngOnDestroy(): void {
    this.sparqlSubject = "";
    this.sparqlData = "";
    this.list = [];
    this.query ="";
  }

} 
