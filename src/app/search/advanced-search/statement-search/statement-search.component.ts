import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, effect, inject, input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOption } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { Observable, ReplaySubject, Subject, BehaviorSubject, map, tap, takeUntil, switchMap, debounceTime, combineLatest, forkJoin, filter, iif, of, delay, startWith } from 'rxjs';
//import { takeUntil } from 'rxjs/operators';
import { SelectedLangService } from '../../../selected-lang.service';
import { PropertiesListService } from '../../../services/properties-list.service';
import { RequestService } from '../../../services/request.service';
import { SearchEngineService } from '../../../services/search-engine.service';
import { SetLanguageService } from '../../../services/set-language.service';
import { DataService } from '../services/data.service';
import { StatementsControlsService } from '../services/statements-controls.service';
import { ITEMTYPES, MUTATOR, QUALIFIERTYPES, Selection, Variable } from '../variable';

export interface Statement {
  itemType: FormControl<string>,
  properties: FormControl<string[]>,
  value?: FormGroup,
  optional: FormControl<boolean>,
  qualifiers?: FormArray<FormGroup>
}

export interface Qualifier {
  qualifierProperty: FormControl<string>,
  value?: FormGroup
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
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    MatSelect,
    MatCheckboxModule,
    MatOption,
    MatSlideToggleModule,
  ],
  templateUrl: './statement-search.component.html',
  styleUrl: './statement-search.component.scss'
})

export class StatementSearchComponent
  implements OnInit, OnDestroy {

  private changeDetector = inject(ChangeDetectorRef);
  private request = inject(RequestService);
  private setLanguage = inject(SetLanguageService);
  private lang = inject(SelectedLangService);
  private propertyList = inject(PropertiesListService);
  private fb = inject(FormBuilder);
  private searchEngine = inject(SearchEngineService);
  private data = inject(DataService);
  private controls = inject(StatementsControlsService);
  //  private data = inject(DataService);
  @Output() propertyDatatype: EventEmitter<string[]> = new EventEmitter();

  @Output() selectedItemType: EventEmitter<string[]> = new EventEmitter();

  @Output() selectedValue: EventEmitter<string[]> = new EventEmitter();


  @Output() selectedQualifierValue: EventEmitter<string[]> = new EventEmitter();

  @Output() qualifierPropertyDatatype: EventEmitter<string[]> = new EventEmitter();

  @Output() datatype;



  itemTypes = input([0, ITEMTYPES]);

  // filteredItemTypes = input();

  currentItemTypes: any[];
  statementName: number = 0;

  placeholderForLiteralValue: string = "literal value?"
  placeholderForLiteralString: string = "write string? | date? | number?";

  selections: Selection[][];

  selection: Selection[];

  propertiesValues: any[] = ["property?"];
  subjectsValues: any[] = ["subject?"];

  /*  get propertiesList(): any[] {
      return this._propertiesList;
    }
    */

  @Input() set literalVariables(literalVariables: any[]) {
    this._literalVariables = literalVariables;
    if (this.literalVariables) {
      this.filteredLiteralVariables.next(this.literalVariables.slice())
    }
  }

  @Input() set qualifierLiteralVariables(qualifierLiteralVariables: any[]) {
    this._qualifierLiteralVariables = qualifierLiteralVariables;
    if (this.qualifierLiteralVariables) {
      this.filteredQualifierLiteralVariables.next(this.qualifierLiteralVariables.slice())
    }
  }
  get literalVariables(): any[] {
    return this._literalVariables;
  }

  get qualifierLiteralVariables(): any[] {
    return this._qualifierLiteralVariables;
  }

  private _propertiesList: any[];
  private propertiesToSelect: any[];
  private _literalVariables: any[];
  private _qualifierLiteralVariables: any[];


  private qualifierPropertiesToSelect: any[];

  protected entityValues: any[] = []; //
  protected currentMutator: Variable[][] = MUTATOR;

  protected selectedLiteralVariables: Variable[] = []; // probablement à supprimer

  isWikibaseItemOnStatement: boolean = true;
  isLiteralOnStatement: boolean = false;
  isLiteralStringOnStatement: boolean = false;
 

  isWikibaseItemOnQualifier: boolean = true;
  isLiteralOnQualifier: boolean = false;
  isLiteralStringOnQualifier: boolean = false;

  isLastStatement: boolean = false;
  isAddStatement: boolean = false;
  isRemoveStatement: boolean = false;

  isAddQualifier: boolean = false;
  isRemoveQualifier: boolean = false;
  isQualifier: boolean = false;

  isItemValue: boolean = true;
//  isTimeToggle: boolean = false;
 

  isLiteralVariableSelected: boolean = true;

 // stringToogle: boolean = true;

  selectedItemTypes: any[] = [];

 // unSelectedItemTypes: any[] = [];

 // itemTypesAsItemValues: any[];

  query = this.fb.group({
    statements: this.fb.array([this.statement])
  });

  get statements(): FormArray<FormGroup> { return this.query.get('statements') as FormArray; } // getter for statements as form array


  // on pourrait aussi bien écrire : get statements() { return this.query.controls['statements'] as FormArray; }
  qualifiers(i: number): FormArray<FormGroup> { return this.statements.at(i).get('qualifiers') as FormArray; }

  get lastStatementIndex(): number { return this.statements.length - 1; };

  get statement(): FormGroup<Statement> {
    return this.fb.group<Statement>(
      {
        itemType: new FormControl({ value: "", disabled: false }),
        properties: new FormControl({ value: [], disabled: true }, [Validators.required, this.datatypeValidator]),
        value: this.value,
        optional: new FormControl({ value: false, disabled: false }),
        qualifiers: this.fb.array([this.qualifier])
      }
    );
  }

  get value(): FormGroup {
    return this.fb.group({
      itemValue: new FormControl({ value: "", disabled: true }),
      literalValue: new FormControl({ value: "", disabled: true }),
      literalString: new FormControl({ value: "", disabled: true })
    }
    );
  }

  get qualifier(): FormGroup {
    return this.fb.group({
      qualifierProperty: new FormControl({ value: "", disabled: false }),
      value: this.qualifierValue,
      optional: new FormControl({ value: false, disabled: false }),
    }
    );
  }

  get qualifierValue(): FormGroup {
    return this.fb.group({
      qualifierValue: new FormControl({ value: "", disabled: true }),
      qualifierLiteralValue: new FormControl({ value: "", disabled: true }),
      qualifierLiteralString: new FormControl({ value: "", disabled: true })
    }
    );
  }

  public itemTypeFilterCtrl: FormControl<string | null> = new FormControl<string>('');

 // public filteredItemTypes: ReplaySubject<any> = new ReplaySubject<any>(1);
  public filteredItemTypes: ReplaySubject<any> = new ReplaySubject<any>(1);


  /** control for the MatSelect filter keyword multi-selection */
  public propertytMultiFilterCtrl: FormControl<string> = new FormControl<string>('');

  /** list of properties filtered by search keyword */
  public filteredPropertyMulti: ReplaySubject<any> = new ReplaySubject<any>(1);

  //  public valueSearchInput: FormControl = new FormControl();
  /** control for the MatSelect filter keyword single-selection */
  public itemValueFilterCtrl: FormControl<string> = new FormControl<string>('');

  /** value filtered by search keyword */
  public filteredItemValues: ReplaySubject<any> = new ReplaySubject<any>(1);

  /** control for the MatSelect filter keyword single-selection */
  public literalFilterCtrl: FormControl<string | null> = new FormControl<string>('');

  /** value filtered by search keyword */
  public filteredLiteralVariables: ReplaySubject<any> = new ReplaySubject<any>(1);

  /** control for the MatSelect filter keyword single-selection */
  public qualifierPropertyFilterCtrl: FormControl<string | null> = new FormControl<string>('');

  /** value filtered by search keyword */
  public filteredQualifierProperties: ReplaySubject<any> = new ReplaySubject<any>(1);

  /** control for the MatSelect filter keyword single-selection */
  public qualifierValueFilterCtrl: FormControl<string> = new FormControl<string>('');

  /** value filtered by search keyword */
  public filteredQualifierValues: ReplaySubject<any> = new ReplaySubject<any>(1);

  /** control for the MatSelect filter keyword single-selection */
  public qualifierLiteralFilterCtrl: FormControl<string> = new FormControl<string>('');

  /** value filtered by search keyword */
  public filteredQualifierLiteralVariables: ReplaySubject<any> = new ReplaySubject<any>(1);


  addStatements() {
    let formerItemType: Variable[][] = []
    let itemTypes:Variable[]
    let itemTypesList;
    let mutator;
    this.statements.push(this.statement);
    this.isRemoveStatement = true;
    this.data.itemTypes2$.subscribe(res => { 
      itemTypes = res;
      formerItemType.push(itemTypes);
      this.data.updateItemTypes(itemTypes);
      this.data.updateFormerItemTypes(formerItemType);
    });
    this.data.mutatorForNextStatement$.subscribe(res => {
      mutator = res;
      console.log(mutator);
      this.data.updateMutator(mutator);
      this.data.mutator$.subscribe(res => console.log(res));
    }
    )
  }

  removeStatements(i: number) {
    this.statements.removeAt(i);
    let itemTypes: any[] = [];
    let formerItemTypesList: Variable[][];
    let formerItemTypes: Variable[];
    if (i === 0) { this.data.updateMutator(MUTATOR), this.data.updateItemTypes(ITEMTYPES); };
    this.data.formerItemTypes$.subscribe(res => formerItemTypesList = res);
    this.data.updateFormerItemTypes(formerItemTypesList.slice(-1));
    this.data.formerItemTypes$.subscribe(res => formerItemTypesList = res);
    this.data.updateItemTypes(formerItemTypesList[formerItemTypesList.length -1])
    this.propertiesValues.splice(i, 1); // à voir de quoi il s'agit.
  }

  addQualifiers(i: number) {
    let m = this.qualifiers(i).controls.length -1
    if (this.qualifiers(i).pristine) { this.qualifiers(i).removeAt(m) };
    this.isQualifier = true;
    this.qualifiers(i).push(this.qualifier);
     let qual = this.controls.qualifiers(this.statements, i);
      this.isQualifier = true;
   
  }

  addFirstQualifier(i) {
    this.controls.qualifiers(this.statements, i).enable();
    if (i === 0) { this.isQualifier = true; }
  }

  removeQualifiers(i: number, j: number) {
    this.qualifiers(i).removeAt(j);
  }

  statementControllerDisplay(u, i) {
    if (u === "WikibaseItem") {
      this.isWikibaseItemOnStatement = true;
      this.isLiteralOnStatement = false;
      this.controls.itemValue(this.statements, i).enable();
      this.controls.literalValue(this.statements, i).disable();
      this.controls.literalString(this.statements, i).disable();
    } else {
      if (u === "String" || u === "MonolingualText" || u === "Time" || u === "Quantity") {
        console.log(u);
        this.controls.itemValue(this.statements, i).disable();
        this.controls.literalValue(this.statements, i).enable();
        this.controls.literalString(this.statements, i).enable();
        this.isWikibaseItemOnStatement = false;
        this.isLiteralStringOnStatement = false;
        this.isLiteralOnStatement = true;
      }
    }
  }

  literalControllerDisplay(label, i) {
    if (label === "write literal string" || label === "write date : YYYY-MM-DD" || label === "write number") {
      this.controls.literalValue(this.statements, i).enable(); this.controls.literalString(this.statements, i).enable();
      this.controls.literalValue(this.statements, i).patchValue("");
      this.isLiteralStringOnStatement = true;
      this.placeholderForLiteralValue = "write below";
    }
    else {
        this.controls.literalValue(this.statements, i).enable();
        this.controls.literalString(this.statements, i).disable();
      this.isLiteralStringOnStatement = false;
      this.placeholderForLiteralString = "disabled";
    }
  }

  qualifierControllerDisplay(u, i, j) {
    console.log(u);
    let qual = this.controls.qualifiers(this.statements, i);
    if (u === "WikibaseItem") {
      let value = this.controls.qualifierValue(qual, j);
      console.log(value);
      this.isWikibaseItemOnQualifier = true;
      this.isLiteralOnQualifier = false;
      this.controls.qualifierValue(qual, j).enable();
      this.controls.qualifierLiteralValue(qual, j).disable();
      this.controls.qualifierLiteralString(qual, j).disable();
    //  this.controls.qualifierValue(qual, j).patchvalue(value);
    } else {
      if (u === "String" || u === "MonolingualText" || u === "Time" || u === "Quantity") {
        this.controls.qualifierLiteralValue(qual, j).enable(); 
        this.controls.qualifierLiteralString(qual, j).enable();
        this.isWikibaseItemOnQualifier = false;
        this.isLiteralOnQualifier = true; 
      }
    }
  }

  qualifierLiteralControllerDisplay(label, i, j) {
    let qual = this.controls.qualifiers(this.statements, i);
    if (label === "write literal string" || label === "write date : YYYY-MM-DD" || label === "write number" ) {
      this.controls.qualifierLiteralValue(qual, j).enable(); this.controls.qualifierLiteralString(qual, j).enable();
  //    this.controls.qualifierLiteralValue(qual, j).patchValue("");
      this.isLiteralStringOnQualifier = true;
    }
    else {
      this.controls.literalValue(qual, j).enable();
      this.controls.literalString(qual, j).disable();
      this.isLiteralStringOnQualifier = false;
    }
  }

  onItemTypeSelect(event: MatSelectChange): void {
    let i = event.value[0]; // name of the statement "i" in the form array "statements"
   // this.controls.propertyValues(this.statements, i).reset([]); // to reset the control propertyValues of the statement "i" 
    this.controls.propertyValues(this.statements, i).enable();

   this.selectedItemType.emit(event.value); // output to advanced-search-component (see selectedItemType(itemType))
  }

  onPropertySelect(event: MatSelectChange): void {
  //  this.data.updateItemTypes([]); //test TODO il faut rénitialiser au prochain statement.
    let propertyValue = [];
    if (event.value[0] !== undefined) {
      let i = event.value[0][0];
      this.datatype = event.value[0][2];
      this.statementControllerDisplay(this.datatype, i); // to display the right controls
      this.propertyDatatype.emit([i, this.datatype]);  // output to advanced-search-component (see propertyDatatype(itemType))
      this.controls.itemValue(this.statements, i).enable();
    //  this.controls.propertyValues(this.statements, i).updateValueAndValidity();
    }
  }

  onValueSelect(event: MatSelectChange): void {  // to update the mutator and add the selected value type to the current itemTypes
    let i = event.value[0];
    let label = event.value[1];
    let dataType = event.value[2];
    console.log(event.value);
    if (label.charAt(0) === "?") {
     this.selectedValue.emit(event.value); // output to advanced-search-component (see selectedValue(itemType))
    }
    this.isAddQualifier = true;
    this.isAddStatement = true;
  };

  onLiteralValueSelect(event: MatSelectChange): void {
    let i = event.value[0];
    let label = event.value[1];
    this.placeholderForLiteralString = label;
    this.literalControllerDisplay(label, i); // to display and enable the right controls
    if (label.charAt(0) === "?") {
      console.log(label);
     this.selectedValue.emit(event.value); // output to advanced-search-component (see selectedValueType(itemType)). ?string is not an itemType
    }
    this.isAddStatement = true;
    this.isAddQualifier = true;
  }

  onQualifierPropertySelect(event: MatSelectChange): void {
    console.log(event.value);
    let i = event.value[0];
    let j = event.value[1];
    let datatype = event.value[3];
    this.qualifierPropertyDatatype.emit([i, j, datatype]);
    this.qualifierControllerDisplay(datatype, i, j); // to display the right controls

  }

  onQualifierValueSelect(event: MatSelectChange): void {
    console.log(event.value);
    let i = event.value[0];
    let j = event.value[1];
    let dataType = event.value[2];
    let col = event.value[3];
    let id = event.value[4];
    let u = [ i, dataType, col, id ];
    if (dataType.charAt(0) === "?") {
      this.selectedQualifierValue.emit(u);
    }
    this.isRemoveQualifier = true;
    let qual = this.controls.qualifiers(this.statements, i);
    let value = this.controls.qualifierValue(qual, j);
    console.log(value);
    this.controls.patchQualifierValue(value, qual, j)
  };

  onQualifierLiteralValueSelect(event: MatSelectChange): void {
    console.log(event.value);
    let i = event.value[0];
    let label = event.value[2];
   // let dataType = event.value[2];
    if (label.charAt(0) === "?") {
      this.selectedQualifierValue.emit(event.value);
      this.isLiteralStringOnQualifier = false;
    } else this.isLiteralStringOnQualifier = true;
    this.isRemoveQualifier = true;
  };

  public items = [];

  //  public datatype = "WikibaseItem";
  public isQualifier2Display: boolean = false;
  //propertiesList: any[];
  selectedPropertiesList: string[];

  // private baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=';
  //  private getUrlSuffix = '&format=json&origin=*';
  //  public selectedItemType: Observable<string>;
  // public selectedValue: Observable<string>;
  // public itemTypeSearchInput = new FormControl();
  @ViewChild('matRef') matRef: MatSelect;

  clear() {
    this.matRef.options.forEach((data: MatOption) => data.deselect());
  }
 

  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;

  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;

  //  @Output() typeSelectionChange: EventEmitter<MatSelectChange> = new EventEmitter<MatSelectChange>();
  @Output() selectionChange: EventEmitter<MatSelectChange> = new EventEmitter<MatSelectChange>();

  @Output() propertySelectionChange: EventEmitter<MatSelectChange> = new EventEmitter<MatSelectChange>();

  protected _onDestroy = new Subject<void>();

  ngOnInit(): void {

    this.propertyList.qualifierPropertiesListBuilding.subscribe(res => this.qualifierPropertiesToSelect = res);

    this.itemTypeFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterItemTypes();
      });

    this.propertytMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterPropertyMulti();
      });

    this.itemValueFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterItemValues();
      });

    this.literalFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterLiteralVariables();
      });


    this.qualifierPropertyFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterQualifierProperties();
      });


    this.qualifierValueFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterQualifierValues();
      });

    this.qualifierLiteralFilterCtrl.valueChanges    
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterQualifierValues();
      });


    var propertyValueChanges: Observable<any> = this.query.get('statements').valueChanges
      .pipe(map(res => res[0]["property"]));

    var valueValueChanges: Observable<any> = this.query.get('statements').valueChanges
      .pipe(map(res => res[0]["itemValue"]));

  }

  ngAfterViewInit() {

    this.setInitialItemTypeValue();
    this.setInitialPropertyValue();
    this.setInitialValueValue();
    this.setInitialLiteralVariable();
    this.setInitialQualifierPropertyValue();
    this.setInitialQualifierValueValue();
    this.setInitialQualifierLiteralVariable();

  }

  protected setInitialItemTypeValue() {
  this.data.itemTypes$.subscribe(res => { if (this.lastStatementIndex !== 0) { this.filteredItemTypes.next(res) } });
    this.filteredItemTypes;
  }


  protected setInitialPropertyValue() {
    this.filteredPropertyMulti;
  }

  protected setInitialValueValue() {
    this.filteredItemValues;
  }

  protected setInitialLiteralVariable() {
    this.filteredLiteralVariables;
  }

  protected setInitialQualifierPropertyValue() {
    this.filteredQualifierProperties;
  }

  protected setInitialQualifierValueValue() {
    this.filteredQualifierValues;
  }

  protected setInitialQualifierLiteralVariable() {
    this.filterQualifierLiteralVariables;
  }



 protected filterItemTypes() {
    this.data.itemTypes$.subscribe(res => {
      this.currentItemTypes = res;
  //    if (!this.currentItemTypes) { this.currentItemTypes = ITEMTYPES };
      let search = this.itemTypeFilterCtrl.value;
      if (!search) {
           this.currentItemTypes = this.entityValues;
    //    this.filteredItemTypes.next(this.currentItemTypes.slice());
      } else {
        search = search.toLowerCase();
        // filter the itemTypes
        this.filteredItemTypes.next(
          this.currentItemTypes.filter(itemType => itemType.label.toLowerCase().indexOf(search) > -1));
      }
    }
    );
  }


  
  protected filterPropertyMulti() {
    this.data.$propertiesList.subscribe(res => {
      this.propertiesToSelect = res[1];
      /*   if (!this.propertiesToSelect) {
           return;
         }*/
      let search = this.propertytMultiFilterCtrl.value;
      if (!search) {
        this.filteredPropertyMulti.next(this.propertiesToSelect.slice());
        return;
      } else {
        search = search.toLowerCase();
        // filter the projects
      
          this.filteredPropertyMulti.next(
            this.propertiesToSelect.filter(entity => entity.itemLabel.label.toLowerCase().indexOf(search) > -1));
        
      }
    }
    );
  }

/*  protected filterItemValues() {
    let search = this.itemValueFilterCtrl.value;
    let firstCharacter = search.charAt(0);
    let searchLength = search.length;
  // this.filteredItemValues.next(this.entityValues);
    if (!search) {
      this.filteredItemValues.next(this.entityValues);
      return;
    } else {
      if (firstCharacter !== "?") {
        search = search.toLowerCase();
        this.itemValueFilterCtrl.valueChanges //search engine
          .pipe(
            filter(res => res !== '?'),
          //  map(res => { if (res.length === 1) { res = firstCharacter } }),
            debounceTime(400),
            switchMap(label => this.request.searchItem(label, this.lang.selectedLang, 20)),
            map(res => this.createList(res)),
            debounceTime(400),
            switchMap(url => this.request.getItem(url)),
           filter(res => res !== undefined && res !== null),
            filter(res => res.entities !== undefined && res.entities !== null),
           map(res => Object.values(res.entities)),
          ).subscribe(re => {
            this.entityValues = this.setLanguage.item(re, this.lang.selectedLang);
            this.setSeparator(this.entityValues);
            this.filteredItemValues.next(this.entityValues.filter(value => value.label.toLowerCase().indexOf(search) > -1));
          }
          );
      }
      else {
        if (search.length === 1) { search = '?*' };
        this.filteredItemValues.next(this.entityValues);
        this.data.mutator$.subscribe(re => {
          this.entityValues = re[0];
          if (search === '?*') {
            this.filteredItemValues.next(this.entityValues);
          } else {
            search = search.slice(1);
            this.filteredItemValues.next(this.entityValues.filter(value => value.label.toLowerCase().indexOf(search) > -1));
          }
        }
        );
      }
    }
  }
  */


  protected filterItemValues() {
    let search = this.itemValueFilterCtrl.value;
    let firstCharacter = search.charAt(0);
    let searchLength = search.length;
 //   this.filteredItemValues.next(this.data.itemTypes$);
    if (!search) {
      this.filteredItemValues.next(this.entityValues);
      return;
    } else {
      search = search.toLowerCase();
      this.itemValueFilterCtrl.valueChanges //search engine
        .pipe(
          debounceTime(400),
          switchMap(label => iif(() => label.charAt(0) === "?", this.data.mutator$.pipe(map(re => re[0])), this.itemValuesList2(label, this.lang.selectedLang, 20)))).
          subscribe(re => {
            this.entityValues = re;
            this.setSeparator(this.entityValues);
            this.filteredItemValues.next(this.entityValues.filter(value => value.label.toLowerCase().indexOf(search) > -1));
          }
        )
     }
  }

  itemValuesList1(label) { 
    return  this.data.mutator$.pipe(map(re => re[0]))
      }


  itemValuesList2(label, lang, number) {
   let entityValues:any[] = [];
    return  this.request.searchItem(label, lang).pipe(
      map(res => this.createList(res)),
      switchMap(url => this.request.getItem(url)),
      filter(res => res !== undefined && res !== null),
      filter(res => res.entities !== undefined && res.entities !== null),
      map(res => Object.values(res.entities)),
      map(res => this.setLanguage.item(res, this.lang.selectedLang))
    )
} 


  protected filterLiteralVariables() {
    if (this.literalVariables === undefined) {
      return;
    }
    // get the search keyword
    let search = this.literalFilterCtrl.value;
    if (!search) {
      this.filteredLiteralVariables.next(this.literalVariables.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredLiteralVariables.next(
      this.literalVariables.filter(variable => variable.label.toLowerCase().indexOf(search) > -1)
    );
  }

  protected filterQualifierProperties() {

    if (!this.qualifierPropertiesToSelect) {
      return;
    }
    let search = this.qualifierPropertyFilterCtrl.value;
    if (!search) {
      this.filteredQualifierProperties.next(this.qualifierPropertiesToSelect.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the 
    this.filteredQualifierProperties.next(
      this.qualifierPropertiesToSelect.filter(entity => entity.itemLabel.label.toLowerCase().indexOf(search) > -1)
    );
  }

  protected filterQualifierValues() {
    let search = this.qualifierValueFilterCtrl.value;
    let firstCharacter = search.charAt(0);
    if (!search) {
      this.filteredQualifierValues.next(this.entityValues.slice());
      return;
    } else {
      if (firstCharacter !== "?") {
        search = search.toLowerCase();
        this.qualifierValueFilterCtrl.valueChanges //search engine
          .pipe(
            debounceTime(400),
            switchMap(label => this.request.searchItem(label, this.lang.selectedLang)),
            map(res => this.createList(res)),
            debounceTime(400),
            switchMap(url => this.request.getItem(url)),
            filter(res => res !== undefined && res !== null),
            filter(res => res.entities !== undefined && res.entities !== null),
            map(res => Object.values(res.entities))
          ).subscribe(re => {
            this.entityValues = this.setLanguage.item(re, this.lang.selectedLang);
            this.setSeparator(this.entityValues);
            this.filteredQualifierValues.next(this.entityValues.filter(value => value.label.toLowerCase().indexOf(search) > -1));
          }
          );
      }
      else {
        this.data.mutator$.subscribe(re => {
          this.entityValues = re[0];
          let qualifierEntityValues = [];
      //    let qualifierTypes: number[] = [1, 5, 6, 8, 10, 13, 16, 17, 19, 20, 21, 23];
          qualifierEntityValues = this.entityValues.filter(entityValue => QUALIFIERTYPES.includes(entityValue.col))  // filter the options for the qualifier values
          if (search === '?*') {
            this.filteredQualifierValues.next(qualifierEntityValues);
          } else {
            search = search.slice(1);
            this.filteredQualifierValues.next(qualifierEntityValues.filter(value => value.label.toLowerCase().indexOf(search) > -1));
          }
        }
        );
      }
    }
  }

  protected filterQualifierLiteralVariables() {
    console.log(this.qualifierLiteralVariables);
    if (this.qualifierLiteralVariables === undefined) {
      return;
    }
    // get the search keyword
    let search = this.qualifierLiteralFilterCtrl.value;
    console.log(search);
    if (!search) {
      console.log(this.qualifierLiteralVariables);
      this.filteredQualifierLiteralVariables.next(this.qualifierLiteralVariables.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredQualifierLiteralVariables.next(
      this.qualifierLiteralVariables.filter(variable => variable.label.toLowerCase().indexOf(search) > -1)
    );
  }



  setSeparator(entityValues: any[]) {
    for (let i = 0; i < entityValues.length; i++) {
      if (entityValues[i].description) { entityValues[i].separator = ", "; };
    };
  }

  selectedProperties(property) {
    this.selectedPropertiesList = property.value;
  }



  datatypeValidator(control: AbstractControl): { [key: string]: boolean; } | null {
    if (control.value) {
      if (control.value[0] !== undefined) {
        let equalDatatype = control.value.every((val: any) => val[2] === control.value[0][2]);
        if (equalDatatype) { return { 'differentDatatype': true }; }
      }
    }
    return null;
  }

  compare(u, v) {
    if (u === undefined) { return v } else return u
}; //TODO: if u = [] then u =v else u = u and return u; (see if its possible to create a method witb filter or something else)

  newQualifier(): FormGroup {
    return this.fb.group({
      qualifierProperty: "",
      qualifierValue: "",
    }
    );
  }


  onVariableSelect(event: MatSelectChange): void {
    console.log(event.value);
  };


  validateItemValues(control) {
    //   console.log(control.value.cb);
    if (!control.value.cb.some((item: any) => item)) {
      return { checkboxSectionValid: true };
    }
    return null;
  }

  notFound(res) {
    res == "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=&format=json&origin=*" ?
      res = "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=Q220375&format=json&origin=*" : res;
    return res;
  }

  createList(re) {
    let baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=';
    let getUrlSuffix = '&format=json&origin=*';
    let list: string = "";
    let url: string = "";
    let arr = re.search;
    if (arr === undefined) { arr = []; }
    else { arr = arr; };
    for (let i = 0; i < arr.length; i++) {
      list = list + "|" + arr[i].id;
    };
    list = list.slice(1);
    url = baseGetURL + list + getUrlSuffix;
    return url;
  }

  resetField(i: number, field: string) {
    let j: number;
    if (j > i && j < this.statements.controls.length) {
      this.statements.controls[j].get(field).reset();
    }
  }

  onQualifierButtonSelect() {
  };

  onPropertyButtonSelect(item) { };



  ngOnDestroy(): void {
    this._onDestroy.next(),
      this._onDestroy.complete();
  }

}


