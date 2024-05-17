/*import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnChanges, OnInit, OnDestroy, ViewChild, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { SetDataService } from '../../services/set-data.service';
import { ArrayToCsvService } from '../../services/array-to-csv.service';
import { ItemSparqlService } from '../../services/item-sparql.service';
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { JsonPipe } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import sortingAccessor from '../../sortingAccessor';
import { SelectedLangService } from '../../selected-lang.service';



export interface HU {
  author: { label: string, id: string };
  title: { label: string, id: string };
  location: { label: string, id: string };
  date: { value: string };
}

export interface list  {
  item: { id: string };
  itemLabel: { value: string };
  itemDescription: { value: string };
}


@Component({
  selector: 'app-sparql3-display',
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
  templateUrl: './sparql3-display.component.html',
  styleUrl: './sparql3-display.component.scss'
})

export class Sparql3DisplayComponent implements OnInit, AfterViewInit {



  public readonly displayedColumns: string[] = ['label','description'];

  dataSource: MatTableDataSource<list> = new MatTableDataSource;
  dataSource$: Observable<any>;

  filtered;


  behavior$ = new BehaviorSubject<string>('');

  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [10, 25, 100, 500, 1000];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent;

  isSpinner: boolean = false;

  //selectedLang: string = (localStorage['selectedLang'] === undefined) ? "en" : localStorage['selectedLang'];
  myLang: string = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22" + this.lang.selectedLang + "%22%2C%22en%22.%20%7D%0A%7D%0A";


  constructor(private _liveAnnouncer: LiveAnnouncer, private csv: ArrayToCsvService, private lang: SelectedLangService,
    private itemSparql: ItemSparqlService ) {

    this.dataSource.sortingDataAccessor = (data, sortHeaderId) => { return sortingAccessor.nestedCaseInsensitive(data, sortHeaderId); }
    this.dataSource.filterPredicate = (data, filter: string) => {
      return data.itemLabel.value.toLocaleLowerCase().includes(filter)    }
     };

  @ViewChild(MatSort)
  sort: MatSort;

  @ViewChild("paginator")
  paginator;
  @Input() item;
 // @Input() $sparqlData: Observable<any>[];
 // @Input() $sparqlList: Observable<[]>;

  ngOnInit() {

   // let v = this.$sparqlData[1];
   //let u = this.$sparqlList
    // u.subscribe(u => console.log(u));
    

    let v = this.itemSparql.itemSparql(this.item[0])[0].pipe(map(res => res[1]));

   // v.subscribe(res => console.log(res));

    this.dataSource$ = combineLatest([this.behavior$, v]).pipe(map(([res0,res1]) => {
      this.dataSource.filter = res0; this.dataSource.data = res1;
      return this.dataSource
    }));

    this.dataSource$.subscribe(res => { console.log(res.filteredData[0]) });

  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    //console.log(this.dataSource.filteredData)

  }

  onClick(query) { //handling click for downlooding the filtered data
    //console.log( query );
    let u = query;
    u = this.databaseToDownload(query);
    console.log(u);//setData: setDataService
    let v = this.csv.arrayToCsv(u);
    console.log(v);
    this.csv.downloadBlob(v, "list", "text/csv;charset=utf-8;")
  }

  applyFilter(event) {
    const filterValue = event.target.value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
    this.dataSource.filteredData;
    console.log(this.dataSource.filteredData[0].itemLabel.value);
  
    this.filtered = this.dataSource.filteredData[0].itemLabel.value;
    // title: this.dataSource.filteredData[0].title.label }
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

  databaseToDownload(data) {
    let dataToDownload: any[][] = [["item", "idem.id"]];
    for (let i = 0; i < data.length; i++) { dataToDownload[i + 1] = [data[i].itemLabel.value, data[i].item.id] };
    console.log(dataToDownload);
    return dataToDownload
  }
}  
*/
