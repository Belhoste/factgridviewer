import { Component, OnInit, OnDestroy, ChangeDetectorRef, AfterViewInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject, ReplaySubject, BehaviorSubject, combineLatest, of } from 'rxjs';
import { map, switchMap, tap, debounceTime, takeWhile, filter, take, takeUntil, mergeAll } from 'rxjs/operators';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSelect } from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
//import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SetLanguageService } from '../../services/set-language.service';
import { RequestService } from '../../services/request.service';
import { SelectedLangService } from '../../selected-lang.service';
import { ProjectsListService } from '../../services/projects-list.service';
import { PropertiesListService } from '../../services/properties-list.service';
import { ProjectSelectComponent } from './project-select/project-select.component';
import { AdvancedSearchListComponent } from './advanced-search-list/advanced-search-list.component';
import { StatementSearchComponent } from './statement-search/statement-search.component';
import { Bank, BANKS } from './bank';




@Component({
  selector: 'app-advanced-search',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSelect,
    MatSelectModule,
    NgxMatSelectSearchModule,
    CdkListbox,
    CdkOption,
    ProjectSelectComponent,
    AdvancedSearchListComponent,
    StatementSearchComponent,
  ],
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})

export class AdvancedSearchComponent implements OnInit, OnDestroy {
  private changeDetector = inject(ChangeDetectorRef);
  private request = inject(RequestService);
  private setLanguage = inject(SetLanguageService);
  private lang = inject(SelectedLangService);
  private list = inject(ProjectsListService);
  private propertyList = inject(PropertiesListService);


  title = 'factgrid';
  subtitle: string = "a database for historians";
  basic_search: string = "search";
  projects: string = "research projects";
  fields: string = "fields of reserach";
  
  public selectedItem: Observable<any>;
  public isDisplay: boolean = false;

 // data$ = new Observable<string[]>();
 // searchQuery$ = new BehaviorSubject<string>('');

 projectsList: any[] = [];
selectedStatementList: string[];
 

  private baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=';
  private getUrlSuffix = '&format=json&origin=*';


  ngOnInit(): void {

    this.subtitle = this.lang.subtitle(this.subtitle);

    this.projects = this.lang.projects(this.projects);

    this.fields = this.lang.fields(this.fields);

    this.list.projectsListBuilding("Q11295").subscribe(res => this.projectsList = res); // list of projects

    this.propertyList.propertiesListBuilding("Q12"); //list of properties

  }


  selectedProjects(projects) {
    console.log(projects.value);
  }

  selectedStatement(statement) {
    if (statement !== undefined) {
      this.selectedStatementList = [statement[0],statement[1]];
    }
  }
 
  createList(re) {  //create an url whith the elements of an array
    let list = "";
    let url = "";
    let arr = re.search;
    if (arr === undefined) { arr = [] }
    else { arr = arr };
    for (let i = 0; i < arr.length; i++) {
      list = list + "|" + arr[i].id;
    };
    list = list.slice(1);
    url = this.baseGetURL + list + this.getUrlSuffix;
    return url
  }

  ngOnDestroy(): void {

  }
 
 
}

