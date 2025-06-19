import { Component, OnInit, OnDestroy, ChangeDetectorRef, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription, BehaviorSubject, map, switchMap, tap, debounceTime, combineLatest, filter, startWith, forkJoin, of } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { SetLanguageService } from '../services/set-language.service';
import { RequestService } from '../services/request.service';
import { SelectedLangService } from '../selected-lang.service';
import { SelectedResearchFieldService } from '../services/selected-research-field.service';

export interface WikibaseEntity {
  id: string;
  label?: string;
  aliases?: string[];
  description?: string;
}

export interface ResearchField {
  id: string;
  name: string;
  description: string;
}

// Utility function to chunk an array into smaller arrays
function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const results: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    results.push(array.slice(i, i + chunkSize));
  }
  return results;
}

@Component({
  selector: 'app-search',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    MatAutocompleteModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  // --- Services ---
  private readonly changeDetector = inject(ChangeDetectorRef);
  private readonly request = inject(RequestService);
  private readonly setLanguage = inject(SetLanguageService);
  private readonly lang = inject(SelectedLangService);
  private readonly selectedResearchFieldService = inject(SelectedResearchFieldService);

  // --- UI Texts ---
  title = 'factgrid';
  subtitle = '';
  advanced_search = '';
  projects = '';
  fields = '';
  projectsInput = '';
  itemsInput = '';
  filterResults = '';
  formerVisitsTitle = '';

  // --- State ---
  showResearchField = false;
  showInDescription = false;
  isDisplay = false;
  isSearching = false;

  // --- Form Controls ---
  searchResearchField = new FormControl('');
  searchInput = new FormControl();
  filterInput = new FormControl('');

  // --- Data ---
  researchFields: ResearchField[] = [];
  private researchFields$ = new BehaviorSubject<ResearchField[]>([]);
  filteredResearchFields$: Observable<ResearchField[]>;
  items: WikibaseEntity[] = [];
  private items$ = new BehaviorSubject<WikibaseEntity[]>([]);
  filteredItems$: Observable<WikibaseEntity[]>;
  searchResults$: Observable<WikibaseEntity[]>;
  hintValue$: Observable<number>;
  pages: Observable<number>;
  selectedItemsList: any[] = [];
  selectedResearchField$ = this.selectedResearchFieldService.selectedResearchField$;

  // --- Subscriptions ---
  private subscriptions: Subscription[] = [];

  // --- Subjects ---
  showInDescriptionSubject = new BehaviorSubject<boolean>(false);

  // --- Constants ---
  private readonly baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=';
  private readonly getUrlSuffix = '&format=json&origin=*';

  // --- Lifecycle hooks ---
  ngOnInit(): void {
    this.initTranslations();
    this.initSelectedItemsList();
    this.initShowResearchFieldSync();
    this.initResearchFields();
    this.initFilteredResearchFields();
    this.initSearchResults();
    this.initFilteredItems();
    this.initHintValue();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all manual subscriptions
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  // --- Initialization methods ---

  /** Initialize translations for UI texts */
  private initTranslations() {
    const lang = this.lang.selectedLang;
    this.subtitle = this.lang.getTranslation('subtitle', lang);
    this.advanced_search = this.lang.getTranslation('advanced_search', lang);
    this.projects = this.lang.getTranslation('projects', lang);
    this.fields = this.lang.getTranslation('fields', lang);
    this.projectsInput = this.lang.getTranslation('projectsInput', lang);
    this.itemsInput = this.lang.getTranslation('itemsInput', lang);
    this.formerVisitsTitle = this.lang.getTranslation('formerVisitsTitle', lang);
    this.filterResults = this.lang.getTranslation('filterResults', lang);
  }

  /** Initialize the selected items list from localStorage */
  private initSelectedItemsList() {
    const stored = localStorage.getItem('selectedItems');
    this.selectedItemsList = stored ? JSON.parse(stored).filter((el: any) => el !== null) : [];
  }

  /** Synchronize showResearchField state with the service */
  private initShowResearchFieldSync() {
    const sub = this.selectedResearchFieldService.showResearchField$.subscribe(show => {
      this.showResearchField = show;
      this.changeDetector.markForCheck();
    });
    this.subscriptions.push(sub);
  }

  /** Fetch and prepare the list of research fields */
  private initResearchFields() {
    const lang = this.lang.selectedLang;
    const ResearchFieldQuery = `https://database.factgrid.de/sparql?query=SELECT ?item ?itemLabel ?itemDescription  
      WHERE {
        SERVICE wikibase:label { bd:serviceParam wikibase:language "${lang},en". }
        ?item wdt:P2 wd:Q11295.
      }
      ORDER BY ?itemLabel
    `;

    this.pages = this.request.getStat().pipe(
      map(res => {
        const values = Object.values(res);
        if (values[1] && values[1].statistics && typeof values[1].statistics.pages === 'number') {
          return values[1].statistics.pages;
        }
        return 0;
      })
    );

    this.request.getList(ResearchFieldQuery)
      .pipe(
        map(res => this.listFromSparql(res)),
        map(res => [
          { name: 'all', id: 'Q0', description: '' },
          ...res.results.bindings.map((b: any) => ({
            name: b.itemLabel.value,
            id: b.item.id,
            description: b.itemDescription?.value ?? ''
          }))
        ]),
      )
      .subscribe((projects: ResearchField[]) => {
        this.researchFields = projects;
        this.researchFields$.next(projects);
        this.updateHintValue();
      });
  }

  /** Set up filtered research fields observable */
  private initFilteredResearchFields() {
    this.filteredResearchFields$ = combineLatest([
      this.researchFields$,
      this.searchResearchField.valueChanges.pipe(startWith(''))
    ]).pipe(
      map(([fields, value]) => {
        const search = (value ?? '').toString().toLowerCase();
        return fields.filter(f => f.name.toLowerCase().includes(search));
      })
    );

    // Reset selected research field if input is cleared
    const sub = this.searchResearchField.valueChanges.subscribe(value => {
      if (typeof value === 'string') {
        this.selectedResearchFieldService.setSelectedResearchField({ id: 'all', name: 'all', description: '' });
      }
    });
    this.subscriptions.push(sub);
  }

  /** Set up the main search results observable */
  private initSearchResults() {
    this.searchResults$ = combineLatest([
      this.searchInput.valueChanges.pipe(startWith('')),
      this.showInDescriptionSubject,
      this.selectedResearchFieldService.selectedResearchField$
    ]).pipe(
      tap(([label]) => {
        this.isSearching = !!label && label.length > 0;
      }),
      debounceTime(250),
      switchMap(([label, showInDescription, selectedResearchField]) => {
        if (!label || label.length === 0) {
          this.items = [];
          this.items$.next([]);
          this.isDisplay = false;
          this.updateHintValue();
          this.changeDetector.markForCheck();
          this.isSearching = false;
          return of([]);
        }

        const searchTerm = (label || '').toLowerCase();
        const selectedId = selectedResearchField && selectedResearchField.id ? selectedResearchField.id : 'all';

        let searchQuery = '';
        if (!selectedId || selectedId === 'all' || selectedId === 'Q0') {
          searchQuery = searchTerm ? `${searchTerm}*` : '';
        } else {
          searchQuery = `haswbstatement:P131=${selectedId}${searchTerm ? ' ' + searchTerm + '*' : ''}`;
        }

        const searchUrl = 'https://database.factgrid.de/w/api.php' +
          '?action=query' +
          '&list=search' +
          '&format=json' +
          '&origin=*' +
          `&srsearch=${searchQuery}` +
          '&srnamespace=120' +
          '&srlimit=500';

        return this.request.getItem(searchUrl).pipe(
          map(res => {
            if (!res.query || !res.query.search) return [];
            const ids = res.query.search
              .map((item: any) => {
                const match = item.title.match(/Q\d+/);
                return match ? match[0] : null;
              })
              .filter((qid: string | null) => !!qid);
            return ids;
          }),
          filter((ids: string[]) => ids.length > 0),
          switchMap((ids: string[]) => {
            const chunks = chunkArray(ids, 50);
            const requests = chunks.map(chunk => {
              const idsParam = chunk.join('|');
              const getEntitiesUrl = `https://database.factgrid.de/w/api.php?action=wbgetentities&ids=${idsParam}&format=json&languages=${this.lang.selectedLang}&origin=*`;
              return this.request.getItem(getEntitiesUrl).pipe(
                map((res: any) => res && res.entities ? Object.values(res.entities) as WikibaseEntity[] : [])
              );
            });
            return requests.length > 0 ? forkJoin(requests).pipe(
              map(results => results.flat())
            ) : of([]);
          }),
          map((entities: WikibaseEntity[]) => {
            const lang = this.lang.selectedLang;
            // The setLanguage.item method is assumed to map API entities to {id, label, aliases, description}
            const translated = this.setLanguage.item(entities, lang);
            return translated.filter((item: any) => {
              const label = item.label?.toLowerCase() || '';
              const aliases = (item.aliases || []).map((a: string) => a.toLowerCase());
              const desc = item.description?.toLowerCase() || '';
              if (!searchTerm) return true;
              if (label.includes(searchTerm) || aliases.some(alias => alias.includes(searchTerm))) {
                return true;
              }
              if (showInDescription && desc.includes(searchTerm)) {
                return true;
              }
              return false;
            });
          }),
          tap((items: WikibaseEntity[]) => {
            this.items = items;
            this.items$.next(items);
            this.isDisplay = items.length > 0;
            this.updateHintValue();
            this.changeDetector.markForCheck();
          })
        );
      })
    );
  }

  /** Set up filtered items observable for the UI */
  private initFilteredItems() {
    this.filteredItems$ = combineLatest([
      this.filterInput.valueChanges.pipe(startWith('')),
      this.items$
    ]).pipe(
      map(([filter, items]) => {
        const f = (filter || '').toLowerCase();
        if (!f) return items;
        return items.filter(item =>
          (item.label && item.label.toLowerCase().includes(f)) ||
          (item.description && item.description.toLowerCase().includes(f))
        );
      })
    );
    // Debug log
    const sub = this.filteredItems$.subscribe(items => {
      console.log('filteredItems$', items);
    });
    this.subscriptions.push(sub);
  }

  /** Set up the hint value observable */
  private initHintValue() {
    this.hintValue$ = of(0); // Will be updated by updateHintValue()
  }

  // --- Utility methods ---

  /** Update the hint value (number of items or pages) */
  updateHintValue() {
    const selectedResearchField = this.selectedResearchFieldService.getSelectedResearchField();
    this.hintValue$ = this.items.length > 0
      ? of(this.items.length)
      : (!selectedResearchField || selectedResearchField.id === 'Q0')
        ? this.pages
        : of(0);
  }

  /** Utility: check if a value is an array */
  isArray(val: any): boolean {
    return Array.isArray(val);
  }

  /** Utility: create a list of IDs for API calls */
  createList(re: any): string {
    let arr = re.search ?? [];
    let list = arr.map((item: any) => item.id).join('|');
    return this.baseGetURL + list + this.getUrlSuffix;
  }

  /** Utility: parse SPARQL results */
  listFromSparql(res: any) {
    if (res?.results) {
      for (let i = 0; i < res.results.bindings.length; i++) {
        const binding = res.results.bindings[i];
        binding["item"].id = binding["item"].value.replace("https://database.factgrid.de/entity/", "");
        binding["item"].id.startsWith("P")
          ? binding["item"].entity = "property"
          : binding["item"].entity = "item";
        binding["itemLabel"].value = binding["itemLabel"].value;
        if (binding["itemDescription"]) {
          binding["itemDescription"].value = binding["itemDescription"].value;
        } else {
          binding["itemDescription"] = { value: '' };
        }
      }
    } else {
      res = { head: { vars: ['item', 'itemLabel', 'itemDescription'] }, results: { bindings: [] } };
    }
    return res;
  }

  /** Handle research field selection */
  researchFieldSelect(researchField: any) {
    if (!researchField) {
      this.selectedResearchFieldService.setSelectedResearchField({ id: 'all', name: 'all', description: '' });
    } else {
      this.selectedResearchFieldService.setSelectedResearchField({
        id: researchField.id,
        name: researchField.name,
        description: researchField.description ?? ''
      });
      if (researchField.name === 'Paris' || researchField.name === 'Harmonia Universalis') {
        return;
      }
    }
    this.updateHintValue();
  }

  /** Display function for research field autocomplete */
  public displayResearchField(researchField: any): string {
    if (typeof researchField === 'string') {
      return researchField;
    }
    return researchField && researchField.name ? researchField.name : '';
  }

  /** Clear the project search input */
  clearProjectSearch() {
    this.searchResearchField.setValue('');
    this.selectedResearchFieldService.setSelectedResearchField({ id: 'all', name: 'all', description: '' });
    this.updateHintValue();
  }

  /** Clear the item search input */
  clearItemSearch() {
    this.searchInput.setValue('', { emitEvent: false });
    this.items = [];
    this.items$.next([]);
    this.isDisplay = false;
    this.changeDetector.detectChanges();
  }

  /** Handle checkbox for searching in description */
  onShowInDescriptionChange(checked: boolean) {
    this.showInDescription = checked;
    this.showInDescriptionSubject.next(checked);
  }

  /** Observable for the current value of the search input */
  searchInputValue$: Observable<string> = this.searchInput.valueChanges.pipe(
    startWith(this.searchInput.value || '')
  );
}
