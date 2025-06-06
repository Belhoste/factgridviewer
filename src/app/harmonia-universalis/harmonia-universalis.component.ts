import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { SetDataService } from '../services/set-data.service';
import { ArrayToCsvService} from '../services/array-to-csv.service';
import { HuDatabaseService } from './services/hu-database.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, switchMap, tap, startWith } from 'rxjs/operators';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { JsonPipe } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import sortingAccessor from '../sortingAccessor';
import { SelectedLangService } from '../selected-lang.service';



export interface HU {
  author:{ label:string, id:string };
  title:{ label:string, id:string  };
  location:{ label:string, id:string };
  date:{ value:string };
}


@Component({
  selector: 'app-harmonia-universalis',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './harmonia-universalis.component.html',
  styleUrl: './harmonia-universalis.component.scss'
})

export class HarmoniaUniversalisComponent implements OnInit, AfterViewInit {
  private database = inject(HuDatabaseService);
  private _liveAnnouncer = inject(LiveAnnouncer);
  private csv = inject(ArrayToCsvService);
  private lang = inject(SelectedLangService);


  //sessionStorage['selectedPage'] = JSON.stringify([{name:'Harmonia Universalis', address:"harmonia_universalis"}]);


  public readonly displayedColumns:string[] = ['author','title','place','date'];

  dataSource: MatTableDataSource<HU> = new MatTableDataSource;
  dataSource$: Observable<any>;

  filtered;

  biblioHU:string = "Bibliography Harmonia Universalis";

  authorHeader:string ="Author";
  titleHeader:string = "Title";
  locationHeader:string ="Place";
  dateHeader:string ="Date";

  behavior$ = new BehaviorSubject<string>('');

  length = 50;
  pageSize = 25;
  pageIndex = 0;
  pageSizeOptions = [10, 25, 50, 100, 500, 1000];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent:PageEvent;

  isSpinner: boolean = false;

  //selectedLang: string = (localStorage['selectedLang'] === undefined) ? "en" : localStorage['selectedLang'];
  myLang:string = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22"+this.lang.selectedLang+"%22%2C%22en%22.%20%7D%0A%7D%0A";


  constructor() {

    this.dataSource.sortingDataAccessor = (data, sortHeaderId) => { return sortingAccessor.nestedCaseInsensitive(data, sortHeaderId); }
    this.dataSource.filterPredicate = (data, filter: string) => {
      return data.author.label.toLocaleLowerCase().includes(filter) ||
         //    data.author.id.toLocaleLowerCase().includes(filter) ||
             data.title.label.toLocaleLowerCase().includes(filter) ||
        //    data.title.id.toLocaleLowerCase().includes(filter)||
           data.location.label.toLocaleLowerCase().includes(filter) ||
        //     data.location.id.toLocaleLowerCase().includes(filter) ||
            data.date.value.toLocaleLowerCase().includes(filter)
    }    
    };

@ViewChild(MatSort)
sort: MatSort;

@ViewChild("paginator")
paginator ;

ngOnInit() {

  this.biblioHU = this.lang.biblioHU(this.biblioHU);

  this.authorHeader = this.lang.authorHeader(this.authorHeader);
  this.titleHeader = this.lang.titleHeader(this.titleHeader);
  this.locationHeader = this.lang.locationHeader(this.locationHeader);
  this.dateHeader = this.lang.dateHeader(this.dateHeader);
  

//this.isSpinner = true;

 // this.myLang = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22"+this.lang.selectedLang+"%22%2C%22en%22.%20%7D%0A%7D%0A";

  let u =this.database.sparqlBuilding(this.myLang);
  let dataService = this.database.databaseToDisplay(u);
  let v$ = dataService.pipe(map(res => this.database.listFromSparql(res)));

  this.dataSource$ = combineLatest([this.behavior$, v$]).pipe(map(res => {
                     this.dataSource.filter = res[0]; this.dataSource.data = res[1];
                     return this.dataSource })); 
}

ngAfterViewInit() {

this.dataSource.sort=this.sort;
this.dataSource.paginator=this.paginator;

}

onClick(query){ //handling click for downlooding the filtered data
 let u= query;
 u = this.database.databaseToDownload(query);
 let v= this.csv.arrayToCsv(u);
 this.csv.downloadBlob(v, "biblio_harmonia_universalis", "text/csv;charset=utf-8;")
    }

applyFilter(event) {
 const filterValue = event.target.value.trim().toLowerCase();
 this.dataSource.filter = filterValue;
 this.dataSource.filteredData;
 this.filtered = this.dataSource.filteredData[0].author.label
}

handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}  
