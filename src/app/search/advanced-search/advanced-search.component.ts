import { Component, OnInit, OnDestroy, ChangeDetectorRef, AfterViewInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject, ReplaySubject, BehaviorSubject, merge, combineLatest, of } from 'rxjs';
import { map, switchMap, tap, debounceTime, takeWhile, filter, take, takeUntil, mergeAll } from 'rxjs/operators';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
//import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SetLanguageService } from '../../services/set-language.service';
import { RequestService } from '../../services/request.service';
import { SelectedLangService } from '../../selected-lang.service';
import { ProjectsListService } from '../../services/projects-list.service';
import { PropertiesListService } from '../../services/properties-list.service';
import { ProjectSelectComponent } from './project-select/project-select.component';
//import { StatementSearchComponent } from './statement-search/StatementSearchComponent';
import { StatementSearchComponent } from './statement-search/statement-search.component';
import { Variable, LITERALS, ITEMTYPES, MUTATOR, Selection, Data } from './variable';
import { DataService } from './services/data.service'
import { MutatorService } from './services/mutator.service'


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
        MatSelectModule,
        NgxMatSelectSearchModule,
        ProjectSelectComponent,
        StatementSearchComponent,
    ],
    templateUrl: './advanced-search.component.html',
    styleUrls: ['./advanced-search.component.scss']
})

export class AdvancedSearchComponent implements OnInit, OnDestroy {

  private lang = inject(SelectedLangService);
  private projectList = inject(ProjectsListService);
  private propertyList = inject(PropertiesListService);
  private data = inject(DataService);
  private mutator = inject(MutatorService)


  title = 'factgrid';
  subtitle: string = "a database for historians";
  basic_search: string = "search";
  projects: string = "research projects";
  fields: string = "fields of reserach";
 // datatype: string;
  
  
  public selectedItem: Observable<any>;
  public formerSelectedCol: number;
  public isDisplay: boolean = false;


  lonos: number[][];
  constructor() {
    // Initialiser lonos avec le premier élément étant les valeurs de la propriété order dans ITEMTYPES
    this.lonos = [ITEMTYPES.map(item => item.order)];

  }

  itemTypes: any[] ;
  $currentItemTypes: Observable<string[]>;

  selections: Selection[][] = [];
  statementSelection: Selection[] = [];

  formData: Data[] = [{ statement: 0, types: { options: ITEMTYPES, selections: [] }, values: { options: ITEMTYPES, selections: [] } }]



 // data$ = new Observable<string[]>();
  // searchQuery$ = new BehaviorSubject<string>('');

  protected literals: Variable[] = LITERALS;

  //protected mutator: Variable[][] = MUTATOR;

  itemTypesAfterSelection: Variable[];

  protected literalVariables;
  protected qualifierLiteralVariables;

  projectsList: any[] = [];
  propertiesList: any[] = [];
  selectedStatementList: string[];

  // public filteredItemTypes: ReplaySubject<any> = new ReplaySubject<any>(1);
  public replay: ReplaySubject<any> = new ReplaySubject<any>(1);
 

  ngOnInit(): void {

    this.subtitle = this.lang.subtitle(this.subtitle);

    this.projects = this.lang.projects(this.projects);

    this.fields = this.lang.fields(this.fields);

    this.projectList.projectsListBuilding("Q11295").subscribe(res => this.projectsList = res); // list of projects

    //  this.propertyList.propertiesListBuilding("Q12"); //list of properties;

    //this.data.currentItemTypesAfterSelection.subscribe(res => console.log(res));

   
  }

  selectedItemType(itemType) {
    console.log(itemType);
    let i = itemType[0];

    let u = ITEMTYPES.findIndex(item => item.id === itemType[3]);
    
    let selection = { label: itemType[1], id: itemType[3] };

    console.log(itemType[3]);
  //  this.formData[i].types.selections.push(selection);
   // this.formData[i].values.options.push(selection); 

 //   let newMutator = [];
 //   if (i === 0) {
  //    newMutator = this.mutator.mutator(itemType);  // create the  new mutator;
  //    console.log(newMutator);
 //     this.data.updateMutatorForItemValue(newMutator); // update the mutator for itemValue;
      // this.data.mutator$.subscribe(res => console.log(res));
 //   }
  //  let selection0: Selection = { variable: [itemType[0], itemType[2], 0], label: itemType[1], id: itemType[3] };
  //  if (!this.statementSelection[0]) { this.statementSelection.push(selection0) } else this.statementSelection.splice(0, 1, selection0);
  //  let newItemType: Variable = { label: itemType[1], col: itemType[2], id: itemType[3] };
  //  let currentItemTypes: Variable[];
  //  if (i === 0) { // update the itemTypes1 only for statement 0;
  //    this.data.updateItemTypes1([newItemType]);
  //  };
    this.propertyList.propertiesListBuilding(itemType[3]).subscribe(res => {  // create the list of properties; useless?
 //     this.propertiesList = [itemType[0], this.propertyList.changeList(res)];
      //   console.log(this.propertiesList);
      console.log(res);
      //     this.data.updatePropertiesList([itemType[0], this.propertyList.changeList(res)]);
    })
  }

  propertyDatatype(u) { //  
    this.literalVariables = this.literals.filter((literal) => ( literal.type === u[1] || literal.type === "Any" ) && literal.col === u[0]);
    return this.literalVariables
  }

  qualifierPropertyDatatype(u) { //
    this.qualifierLiteralVariables = this.literals.filter((literal) => (literal.type === u[2] || literal.type === "Any") && literal.col === u[0]);
    return this.qualifierLiteralVariables
  }

  selectedProjects(projects) {
    console.log(projects.value);
  }

  selectedValue(value) {
    console.log(value);
    this.data.itemTypes1$.subscribe(res => console.log(res));
    let i = value[0];
    let selection1: Selection = { variable: [value[0], this.updateValue(this.statementSelection[0].variable[2],value[2]), 1], label: value[1], id: value[3] }; //TODO: value[2], which is the order of the unknown, must be updated in a function to take in account value[2] in selection1
    if (!this.statementSelection[1]) { this.statementSelection.push(selection1) } else this.statementSelection.splice(1, 1, selection1);
    this.selections.push(this.statementSelection); // maybe not here;
 //   if (value[1] === "?string" || value[1] === "?date") { value[1] = "" };
    let currentItemTypes: any[];
    let newItemType = { label: value[1], col: value[2], id: value[3] };
    let $newItemType = of(newItemType);
      $newItemType.subscribe(res => console.log(res));
      combineLatest([$newItemType, this.data.itemTypes1$]).subscribe(([res1, res2]) => { res2.push(res1); currentItemTypes = res2 });
      this.data.updateItemTypes2(currentItemTypes);
 //     this.data.itemTypes2$.subscribe(res => console.log(res));
    //   this.data.itemTypes1$.subscribe(res => console.log(res));
 //this.data.updateMutator()
   let newMutator = this.mutator.mutator(value);
    this.data.updateMutatorForNextStatement(newMutator); 

  
    
   /* this.data.itemTypes1$.subscribe(res => {  // get the current itemTypes from the data service
      currentItemTypes = res
    });It:
    console.log(currentItemTypes);
    let newItemType: Variable = { label: value[1], col: value[2], id: value[3] };
    currentItemTypes.push(newItemType);
    console.log(currentItemTypes);
    this.data.updateItemTypes2(currentItemTypes);
    this.data.itemTypes1$.subscribe(res => console.log(res))*/
  }

  selectedQualifierValue(itemType) {
    let i = itemType[0];
    let qualifierItemType = [itemType[1], itemType[2], itemType[3], ""];
    let newMutator = this.mutator.mutator(qualifierItemType);
    console.log(newMutator);
    let newItemType: Variable = { label: itemType[1], id: itemType[2], col: itemType[3] };
    let currentItem: any[];
    this.data.itemTypes$.subscribe(res => {
      currentItem = res;
      if (i === 0) { currentItem = [newItemType] };
      //  if (!currentItem[i + 1]) { currentItem.push(u); } else currentItem.splice(i+1, 1, u);
    });
    this.data.updateItemTypes(currentItem);
    this.data.updateMutator(newMutator);
    this.data.mutator$.subscribe(res => console.log(res));
  }

  updateValue(value0, value1) {
    let u;
    if (value0 = value1) { 
      u = value1 + 1
    } else u = value1;
  return u
  }

 findIndexById(a, id) {
  return a.findIndex(item => item.id === id);
  }

  incrementElement(a, b) {
    if (a.length !== b.length) {
        throw new Error("Les listes a et b doivent avoir la même longueur");
    }

    let c = [...b]; // Crée une copie de la liste b
    for (let i = 0; i < a.length; i++) {
        if (a[i] === 1) {
            c[i] = b[i] + 1; // Incrémente l'élément i-ème de b
            break; // Sort de la boucle après avoir trouvé l'élément égal à 1
        }
    }

    return c;
}





  ngOnDestroy(): void {

  }
 
 
}

