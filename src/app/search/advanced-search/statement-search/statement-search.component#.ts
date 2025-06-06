import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, effect, inject, input, AfterViewInit } from '@angular/core';
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
  implements OnInit, OnDestroy, AfterViewInit {

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


  dropdownOptions: BehaviorSubject<any[]> = new BehaviorSubject(ITEMTYPES);


  itemTypes = input([0, ITEMTYPES]);

  dynamicInfoList: BehaviorSubject<{ itemTypes: number[], itemValues: number[] }[]> = new BehaviorSubject([]);

  previousItemTypes: string[] = []; // propriété stockant les itemTypes précédents
  previousItemValues: string[] = []; // propriété stockant les itemTypes précédents



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

  private isUpdatingDynamicInfoList = false;
 

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

  get lastStatementIndex(): number { return this.statements.length > 0 ? this.statements.length - 1 : 0; }



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

  isPropertiesInvalid(index: number): boolean {
    const statementGroup = this.statements.at(index) as FormGroup;
    const propertiesControl = statementGroup.get('properties') as FormControl;
    return propertiesControl.invalid
//      && (propertiesControl.dirty || propertiesControl.touched);
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

    // Initialiser dynamicInfoList pour la nouvelle déclaration
    const initialDynamicInfo = { itemTypes: Array(ITEMTYPES.length).fill(0), itemValues: Array(ITEMTYPES.length).fill(0) };
    const currentDynamicInfoList = this.dynamicInfoList.getValue();
    currentDynamicInfoList.push(initialDynamicInfo);
    this.dynamicInfoList.next(currentDynamicInfoList);



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
    console.log('Selected itemType:', event.value);
    let i = event.value[0]; // name of the statement "i" in the form array "statements"
    this.controls.propertyValues(this.statements, i).enable();
    this.selectedItemType.emit(event.value); // output to advanced-search-component (see selectedItemType(itemType))
    this.statements.at(i).get('itemType').setValue(event.value, { emitEvent: false }); // Mettre à jour la valeur du contrôle
    console.log('Updated itemType control value:', this.statements.at(i).get('itemType').value);
    this.changeDetector.detectChanges(); // Forcer la détection des changements
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
    console.log(ITEMTYPES);
    this.statements.controls.forEach((statement, index) => {
      this.subscribeToStatementChanges(statement, index);
      // Initialiser dynamicInfoList avec des valeurs par défaut
      const initialDynamicInfo = { itemTypes: Array(ITEMTYPES.length).fill(0), itemValues: Array(ITEMTYPES.length).fill(0) };
      const currentDynamicInfoList = this.dynamicInfoList.getValue();
      currentDynamicInfoList[index] = initialDynamicInfo;
      this.dynamicInfoList.next(currentDynamicInfoList);
    });

    // Initialiser les ITEMTYPES indépendamment
    this.filteredItemValues.next(this.addOrderToItemValues(ITEMTYPES));

    console.log(this.dynamicInfoList);


    this.propertyList.qualifierPropertiesListBuilding.subscribe(res => this.qualifierPropertiesToSelect = res);

    // S'abonner aux changements de dynamicInfoList
    this.dynamicInfoList
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.updateDropdownOptions();
      });


  


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

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterViewInit() {

    console.log('ngAfterViewInit called');

    // Utiliser setTimeout pour différer l'exécution
    setTimeout(() => {
      this.setInitialItemTypeValue();
      this.setInitialPropertyValue();
      this.setInitialValueValue();
      this.setInitialLiteralVariable();
      this.setInitialQualifierPropertyValue();
      this.setInitialQualifierValueValue();
      this.setInitialQualifierLiteralVariable();

      // Réappliquer les valeurs sélectionnées après l'initialisation de la vue
     

      // Forcer la détection des changements
      this.changeDetector.detectChanges();
    }, 0);
  

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


  private addOrderToItemValues(itemValues: any[]): any[] {
    const dynamicInfoListValue = this.dynamicInfoList.getValue();
    if (this.statements.length === 0 || !dynamicInfoListValue[this.lastStatementIndex]) {
      return itemValues;
    }
    return itemValues.map((itemValue, itemIndex) => {
      if (itemValue && dynamicInfoListValue[this.lastStatementIndex].itemValues[itemIndex] !== undefined) {
        const newItemValue = { ...itemValue }; // Cloner l'objet itemValue
        newItemValue.order = dynamicInfoListValue[this.lastStatementIndex].itemValues[itemIndex];
        newItemValue.originalLabel = itemValue.label; // Stocker la valeur originale du label
        newItemValue.label = `${newItemValue.label}${newItemValue.order.toString()}`; // Concaténer le label et l'ordre
        return newItemValue;
      }
      return itemValue;
    });
  }

  private updateDropdownOptions() {
    const dynamicInfoListValue = this.dynamicInfoList.getValue();
    if (this.statements.length === 0 || !dynamicInfoListValue[this.lastStatementIndex]) {
      this.dropdownOptions.next(ITEMTYPES);
      return;
    }
    const updatedItemValues = ITEMTYPES.map((itemValue, itemIndex) => {
      if (itemValue && dynamicInfoListValue[this.lastStatementIndex].itemValues[itemIndex] !== undefined) {
        const newItemValue: Variable = { ...itemValue }; // Cloner l'objet itemValue
        newItemValue.order = dynamicInfoListValue[this.lastStatementIndex].itemValues[itemIndex];
        newItemValue.originalLabel = this.getOriginalItemLabel(itemValue.label); // Utiliser getOriginalItemLabel pour obtenir l'étiquette originale
        newItemValue.label = `${newItemValue.originalLabel}${newItemValue.order.toString()}`; // Concaténer le label et l'ordre
        return newItemValue;
      }
      return itemValue;
    });

    // Mettre à jour itemTypes dans dynamicInfoList
    const updatedItemTypes = ITEMTYPES.map((itemType, itemIndex) => {
      if (itemType && dynamicInfoListValue[this.lastStatementIndex].itemTypes[itemIndex] !== undefined) {
        const newItemType: Variable = { ...itemType }; // Cloner l'objet itemType
        newItemType.order = dynamicInfoListValue[this.lastStatementIndex].itemTypes[itemIndex];
        newItemType.originalLabel = this.getOriginalItemLabel(itemType.label); // Utiliser getOriginalItemLabel pour obtenir l'étiquette originale
        newItemType.label = `${newItemType.originalLabel}${newItemType.order.toString()}`; // Concaténer le label et l'ordre
        return newItemType;
      }
      return itemType;
    });

    // Mettre à jour dynamicInfoList avec les nouvelles valeurs de itemTypes
    dynamicInfoListValue[this.lastStatementIndex].itemTypes = updatedItemTypes.map(item => item.order).filter(order => order !== null);

    this.dropdownOptions.next(updatedItemValues);
  }




  protected filterItemTypes() {
    let search = this.itemTypeFilterCtrl.value;
    const selectedValues = this.statements.controls.map(statement => statement.get('itemType').value); // Conserver les valeurs sélectionnées

    this.dropdownOptions.pipe(takeUntil(this._onDestroy)).subscribe((options) => {
      if (!search) {
        this.filteredItemTypes.next(options);
      } else {
        search = search.toLowerCase();
        this.filteredItemTypes.next(
          options.filter(itemType => itemType.label.toLowerCase().indexOf(search) > -1)
        );
      }

      // Réappliquer les valeurs sélectionnées
      this.statements.controls.forEach((statement, index) => {
        statement.get('itemType').setValue(selectedValues[index], { emitEvent: false });
      });
    });
  }



 
// Fonction utilitaire pour obtenir le label original
  getOriginalItemLabel(itemLabel: string): string {
    if (itemLabel.length > 1) {
      const lastChar = itemLabel.charAt(itemLabel.length - 1);
      const secondLastChar = itemLabel.charAt(itemLabel.length - 2);
      if (!isNaN(parseInt(lastChar)) && !isNaN(parseInt(secondLastChar))) {
        return itemLabel.slice(0, -2); // Supprimer les 2 derniers caractères
      } else if (!isNaN(parseInt(lastChar))) {
        return itemLabel.slice(0, -1); // Supprimer le dernier caractère si c'est un chiffre
      }
    }
    return itemLabel;
  }



  
  protected filterPropertyMulti() {
    this.data.$propertiesList.subscribe(res => {
      this.propertiesToSelect = res[1];
      console.log(this.propertiesToSelect);
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


  protected filterItemValues() {
    let search = this.itemValueFilterCtrl.value;
    if (!search) {
      this.filteredItemValues.next(this.addOrderToItemValues([...ITEMTYPES, ...this.entityValues]));
      return;
    } else {
      search = search.toLowerCase();
      this.itemValueFilterCtrl.valueChanges // moteur de recherche
        .pipe(
          debounceTime(400),
          switchMap(label => this.itemValuesList2(label, this.lang.selectedLang, 20)),
          map(re => {
            this.entityValues = re;
            this.setSeparator(this.entityValues);
            return this.addOrderToItemValues([...ITEMTYPES, ...this.entityValues]).filter(value => value.label.toLowerCase().includes(search));
          })
        ).subscribe(filteredItems => {
          this.filteredItemValues.next(filteredItems);
        });
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

  subscribeToStatementChanges(statement: AbstractControl, index: number): void {
    this.previousItemTypes[index] = statement.get('itemType').value;
    this.previousItemValues[index] = statement.get('value').get('itemValue').value;
  }

  



  isCircular(obj: any): boolean {
  const seenObjects = new WeakSet();

  function detect(obj: any): boolean {
    if (obj && typeof obj === 'object') {
      if (seenObjects.has(obj)) {
        return true;
      }
      seenObjects.add(obj);
      for (const key in obj) {
        if (obj.hasOwnProperty(key) && detect(obj[key])) {
          return true;
        }
      }
    }
    return false;
  }

  return detect(obj);
  }

  safeStringify(obj: any): string {
    const seen = new WeakSet();
    return JSON.stringify(obj, (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return "[Circular]";
        }
        seen.add(value);
      }
      return value;
    });
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


