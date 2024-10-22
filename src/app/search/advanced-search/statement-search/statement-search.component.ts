import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ChangeDetectorRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormsModule, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Observable, Subject,ReplaySubject, combineLatest } from 'rxjs';
import { map, switchMap, tap, debounceTime, takeUntil, filter } from 'rxjs/operators';
import { SetLanguageService } from '../../../services/set-language.service';
import { RequestService } from '../../../services/request.service';
import { SelectedLangService } from '../../../selected-lang.service';
import { PropertiesListService } from '../../../services/properties-list.service';
import { SearchEngineService } from '../../../services/search-engine.service';


export interface QueryData {
  project: any[];
  statements: any[];
}

@Component({

  selector: 'app-statement-search',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    MatSelect,
  ],
  templateUrl: './statement-search.component.html',
  styleUrl: './statement-search.component.scss'
})

export class StatementSearchComponent
  implements OnInit, OnDestroy
{
  private changeDetector = inject(ChangeDetectorRef);
  private request = inject(RequestService);
  private setLanguage = inject(SetLanguageService);
  private lang = inject(SelectedLangService);
  private list = inject(PropertiesListService);
  private formBuilder = inject(FormBuilder);
  private searchEngine = inject(SearchEngineService);


  
  //  searchesArray = new FormArray([new FormControl('Propertty', Validators.required), new FormControl('Value')]);

  @Input() set data(data: any[]) {
    this._data = data;
    // load the initial project list
    this.filteredPropertyMulti.next(this.data.slice());
  }
  get data(): any[] {
    return this._data;
  }

  private _data: any[];

  query = this.formBuilder.group({
    statements: this.formBuilder.array([this.addStatementsFormGroup()])
  })

  public items = [];

  public isEntityToSelectDisplay: boolean = false;
  public isQualifier2Display: boolean = false;
  propertiesList: any[];
  selectedPropertiesList: string[];

  private baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=';
  private getUrlSuffix = '&format=json&origin=*';


  public propertySearchInput = new FormControl();

  /** control for the MatSelect filter keyword multi-selection */
  public propertytMultiFilterCtrl: FormControl<string> = new FormControl<string>('');

  /** list of projects filtered by search keyword */
  public filteredPropertyMulti: ReplaySubject<any> = new ReplaySubject<any>(1);

  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;

  @Output() selectionChange: EventEmitter<MatSelectChange> = new EventEmitter<MatSelectChange>();

  protected _onDestroy = new Subject<void>();


  ngOnInit(): void {

    this.list.propertiesListBuilding("Q11295").subscribe(res => {
      console.log(res);
    this.propertiesList = res;
    });

    this.propertytMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterPropertyMulti();
      });

    const form = this.query.get('statements');

    console.log(form);

    console.log(form.touched);

    console.log(form.events);

    form.events.subscribe(res => console.log(res));

    form.valueChanges.subscribe(res => console.log(res[0]["property"]));

    form.valueChanges.subscribe(res => console.log(res[0]["value"]));

 //   form.events.subscribe(res => console.log(res));
    var propertyValueChanges: Observable<any> =
      this.query.get('statements').valueChanges
        .pipe(map(res => res[0]["property"]));

    var valueValueChanges: Observable<any> =
      this.query.get('statements').valueChanges
        .pipe(map(res => res[0]["value"]));

   propertyValueChanges
      .pipe(
        debounceTime(400),
        switchMap(label => this.request.searchProperty(label, this.lang.selectedLang)),
        map(res => this.createList(res)),
        //     map(res => res == "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=&format=json&origin=*" ?
        //      "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=Q220375&format=json&origin=*" : res),
        map(res => this.notFound(res)),
        debounceTime(200),
        switchMap(url => this.request.getItem(url)),
        filter(res => res !== undefined),
        filter(res => res.entities !== undefined && res.entities !== null),
        map(res => Object.values(res.entities)),
      )
      .subscribe(re => {
        this.items = this.setLanguage.item(re, this.lang.selectedLang);
        this.items[0].id == "Q220375" ? this.isEntityToSelectDisplay = false : this.isEntityToSelectDisplay = true;
        this.changeDetector.detectChanges();
      })

   /*

    this.statement.controls.value.valueChanges   //search engine
      .pipe(
        debounceTime(400),
        switchMap(label => this.request.searchItem(label, this.lang.selectedLang)),
        map(res => this.createList(res)),
        //      map(res => res == "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=&format=json&origin=*" ?
        //             "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=Q220375&format=json&origin=*" : res),
        map(res => this.notFound(res)),
        debounceTime(200),
        switchMap(url => this.request.getItem(url)),
        filter(res => res !== undefined),
        filter(res => res.entities !== undefined && res.entities !== null),
        map(res => Object.values(res.entities)),
      )
      .subscribe(re => {
        this.items = this.setLanguage.item(re, this.lang.selectedLang);
        //  this.items = this.filterResearchField(this.items, this.selectedResearchField);
        //    this.isEntityToSelectDisplay = true;
        //if (this.items[0].id == "Q220375") {  };
        console.log(this.items[0].id);
        this.items[0].id == "Q220375" ? this.isEntityToSelectDisplay = false : this.isEntityToSelectDisplay = true;
        this.changeDetector.detectChanges();
      })
      */

  }

  selectedProperties(property) {
    this.selectedPropertiesList = property.value;
  }

  addStatementsFormGroup():FormGroup {
    return new FormGroup({
      property: new FormControl(''),
      value: new FormControl(''),
      qualifiers: this.formBuilder.array([]),
    });
  }


  addQualifiersFormGroup() {
    return new FormGroup({
      qualifierProperty: new FormControl(''),
      qualifierValue: new FormControl(''),
    });

  }

  protected filterPropertyMulti() {
    if (!this.data) {
      return;
    }
    // get the search keyword
    let search = this.propertytMultiFilterCtrl.value;
    if (!search) {
      this.filteredPropertyMulti.next(this.data.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the projects
    this.filteredPropertyMulti.next(
      this.data.filter(entity => entity.itemLabel.value.toLowerCase().indexOf(search) > -1)
    );
  }

 

  statementsFormArray():FormArray {
    //    return this.query.controls.statements as FormArray;
    return this.query.controls.statements as FormArray;
  }

 qualifiersFormArray(i):FormArray {
    return this.statementsFormArray().at(i).get("qualifiers") as FormArray;
  }

  addStatements() {
    this.statementsFormArray().push(this.addStatementsFormGroup());
  }

  addQualifiers(j) {
    this.qualifiersFormArray(j).push(this.addQualifiersFormGroup())

 //   const qualifiersFormArray = this.query.controls.statements.at(i) as FormArray
 //   qualifiersFormArray.push(this.addQualifiersFormGroup());
  }

  removeStatements () {
  
    this.statementsFormArray().removeAt(this.statementsFormArray.length -1);
  }

/*  removeQualifiers(j) {
    this.qualifiersFormArray(j).remoteA((this.qualifiersFormArray.length - 1);
    }
    */


  newQualifier(): FormGroup {
    return this.formBuilder.group({
      qualifierProperty: "",
      qualifierValue:"",
}
   

    )

  }
  


   
   
     
       
  
/*

  addDetailsFormGroup() {
    return new FormGroup({
      label: new FormControl(''),
      description: new FormControl(''),
    });
  }

  formMain = this.formBuilder.group({
    details: this.formBuilder.array([this.addDetailsFormGroup()]),
  });


 

  get detailsFormArray() {
    return this.formMain.controls.details as FormArray;
  }

  addDetails() {
    this.detailsFormArray.push(this.addDetailsFormGroup());
  }

  */
 



  


  notFound(res) {
    res == "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=&format=json&origin=*" ?
      res = "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=Q220375&format=json&origin=*" : res
    return res
  }

  //addSearch() {
 //   this.advancedSearchForm.push(this.formBuilder.control(''));
  //}


 /* onPropertyFocus() {
    console.log("yes");
    this.statement1.controls.anyProperty = this.statement1.controls.property
  }
  */

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

  /*projectSelect(proj) {
    let u = [];
    this.project.splice(0, 1, proj.value);
    console.log(this.project);
    this.selectedQueryData.splice(0, 1, this.project);
    console.log(this.selectedQueryData);
  }

  onResultButton(result) {
    this.statements.push(result);
    console.log(this.selectedQueryData);
  }
  */

  entitySelect(item) {
/*    if (item !== undefined) {
      this.isEntityToSelectDisplay = true;
      let a = item.id.charAt(0);
      if (a === 'P') {
     //   this.statement1.controls.property.untouched ;
        this.selectedPropertyValue = item.id;
        this.selectedPropertyLabel = item.label;
        this.selectedPropertyDatatype = item.datatype;
        if (item.claims.P236 !== undefined) {
          this.selectedPropertyLink = item.claims.P236[0].mainsnak.datavalue.value;
        };
        this.selectedStatementValue = item.id;
        this.selectedStatementLabel = item.label;
        this.statementType = item.datatype;
        this.isEntityToSelectDisplay! = false;
        if (this.isQualifier3Display == true) {
          console.log(this.isQualifier3Display);
          this.selectedQualifier3.push({ id: item.id, datatype: item.datatype, link: this.selectedPropertyLink });
          console.log(item.datatype);
          console.log(this.selectedQualifier3);
          this.statement1.controls.anyProperty = this.statement1.controls.qal3Property
          
        }
        else {
          if (this.isQualifier2Display == true) {
            console.log(this.isQualifier2Display);
            this.selectedQualifier2.push({ id: item.id, datatype: item.datatype, link: this.selectedPropertyLink });
            console.log(item.datatype);
            console.log(this.selectedQualifier2);
            this.statement1.controls.anyProperty = this.statement1.controls.qal2Property;
          }
          else {
            if (this.isQualifier1Display == true) {
              this.statement1.controls.qal1Property.reset("");
              console.log(this.isQualifier1Display);
              this.selectedQualifier1.push({ id: item.id, datatype: item.datatype, link: this.selectedPropertyLink });
              console.log(item.datatype);
              console.log(this.selectedQualifier1);
              this.statement1.controls.anyProperty = this.statement1.controls.qal1Property;
            } else {
              this.statement1.controls.property;
              this.statement1.controls.anyProperty = this.statement1.controls.property;
              this.selectedStatement.push({ id: item.id, datatype: item.datatype, link: this.selectedPropertyLink });
              console.log(this.selectedStatement);
            }
          }
        }
      }
      if (a === 'Q') {
        this.isDisplay3 = true;
        this.selectedItemValue = item.id;
        this.selectedItemLabel = item.label;
        // this.isDisplay1! = false;
        if (this.isQualifier3Display == true) {
          this.selectedQualifier3.push(this.selectedItemValue);
          console.log(this.selectedQualifier3);
        } else {
          this.selectedQualifier2.push(this.selectedItemValue);
          console.log(this.selectedQualifier2);
          if (this.isQualifier1Display == true) {
            this.selectedQualifier1.push(this.selectedItemValue);
            console.log(this.selectedQualifier1);
          } else {
            this.statement1.controls.value.reset(item.label);
            this.isStatementDiagramDisplay = true;
            this.selectedStatement.push(this.selectedItemValue);
            console.log(item.datatype);
            console.log(this.selectedStatement);
          }
        }
      }
    }
    */
  }

 /*
    getProperty(prop) {
    let property = [];
    let u = "https://database.factgrid.de//w/api.php?action=wbgetentities&format=json&&origin=*&ids=" + prop;
    console.log(u);
    this.request.getItem(u).pipe(map(res => { property = res.entities }));
    return property
  }
  */

  onQualifierButtonSelect() {

    this.isEntityToSelectDisplay = false;
    console.log(this.isQualifier2Display);


/*    if (this.isQualifier2Display == true) {
      this.isQualifier3Display = true;
    } else {
      if (this.isQualifier1Display == true) {
        this.isQualifier2Display = true;
      } else {
 //       this.statement1.controls.property.reset();
       
        this.isQualifier1Display = true;
      }
    }
    */
  

  /*
    if (this.isQualifier1Display == true) {
      if (this.isQualifier2Display == false) {
        this.isQualifier2Display = true;
        console.log(this.isQualifier2Display);
      }
      if (this.isQualifier2Display == true) { this.isQualifier3Display = true }
    }
     else {
      this.isQualifier1Display = true;
    }*/
  }; 

  onPropertyButtonSelect(item) { };

/*  arrowBack($event) {
      this.isArrowForwardDisplay = false;
      this.isArrowBackDisplay = true;
      this.statementDirection = 1;
  };

  arrowForward($event) {
      this.isArrowForwardDisplay = true;
      this.isArrowBackDisplay = false;
      this.statementDirection = 0;
  };
  */

  ngOnDestroy(): void {
//    this.propertyLabelList.unsubscribe();
//    this.itemLabelList.unsubscribe();
  }
  
}
