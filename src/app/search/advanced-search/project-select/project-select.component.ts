import { Component, OnInit, Input, Output, OnDestroy, AfterViewInit, ViewChild, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormsModule, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Subject, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SetLanguageService } from '../../../services/set-language.service';
import { SelectedLangService } from '../../../selected-lang.service';

@Component({

  selector: 'app-project-select',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSelect,
    NgxMatSelectSearchModule,
  ],
  templateUrl: './project-select.component.html',
  styleUrl: './project-select.component.scss',
})

export class ProjectSelectComponent implements OnInit, AfterViewInit, OnDestroy
{
  private setLanguage = inject(SetLanguageService);
  private lang = inject(SelectedLangService);
  private formBuilder = inject(FormBuilder);


  @Input() placeholderLabel = 'Search';

  @Input() set data(data: any[]) {
    this._data = data;
    // load the initial project list
    this.filteredProjectMulti.next(this.data.slice());
  }
  get data(): any[] {
    return this._data;
  }

  private _data: any[];

  public projectSearchInput = new FormControl();

  /** control for the MatSelect filter keyword multi-selection */
  public projectMultiFilterCtrl: FormControl<string> = new FormControl<string>('');

  /** list of projects filtered by search keyword */
  public filteredProjectMulti: ReplaySubject<any> = new ReplaySubject<any>(1);


  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;

  @Output() selectionChange: EventEmitter<MatSelectChange> = new EventEmitter<MatSelectChange>();

  protected _onDestroy = new Subject<void>();

  ngOnInit(): void {

    this.projectMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterProjectMulti();
      });

  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  protected setInitialValue() {
    this.filteredProjectMulti;
  }

  onSelectChange($event): void {
  }
  
  protected filterProjectMulti() {
    if (!this.data) {
      return;
    }
    // get the search keyword
    let search = this.projectMultiFilterCtrl.value;
    if (!search) {
      this.filteredProjectMulti.next(this.data.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the projects
    this.filteredProjectMulti.next(
      this.data.filter(entity => entity.itemLabel.value.toLowerCase().indexOf(search) > -1)
    );
  }

  onSelection(event: MatSelectChange) {
    this.selectionChange.emit(new MatSelectChange(this.multiSelect, event.value));
  }

  ngOnDestroy(): void {
   
  }
}
