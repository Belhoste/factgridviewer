import { Component, OnInit, OnDestroy, ChangeDetectorRef, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Observable, Subscription, BehaviorSubject, map, switchMap, tap, debounceTime,
  combineLatest, filter, startWith, forkJoin, of
} from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { SetLanguageService } from '../services/set-language.service';
import { RequestService } from '../services/request.service';
import { SelectedLangService } from '../selected-lang.service';
import { SelectedResearchFieldService } from '../services/selected-research-field.service';
import { WikibaseSearchService } from '../services/wikibase-search.service';
import { SearchFilterService } from '../services/search-filter.service';
import { SearchCacheService } from '../services/search-cache.service';

import { WikibaseEntity } from '../models/wikibase-entity.model';
import { ResearchField } from '../models/research-field.model';

function normalizeString(s: string | undefined | null): string {
  if (!s) return '';
  return s.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

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
    MatTooltipModule,
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
  // ========== SERVICES ==========
  private readonly changeDetector = inject(ChangeDetectorRef);
  private readonly request = inject(RequestService);
  private readonly setLanguage = inject(SetLanguageService);
  private readonly lang = inject(SelectedLangService);
  private readonly selectedResearchField = inject(SelectedResearchFieldService);
  private readonly wikibaseSearch = inject(WikibaseSearchService);
  private readonly searchFilter = inject(SearchFilterService);
  private readonly searchCache = inject(SearchCacheService);
  private readonly router = inject(Router);

  // ========== UI TEXTS ==========
  title = 'factgrid';
  subtitle = '';
  advanced_search = '';
  projects = '';
  fields = '';
  dataOptions = '';
  projectsInput = '';
  itemsInput = '';
  filterResults = '';
  formerVisitsTitle = '';
  filterPeopleActivate = '';
  filterPeopleDeactivate = '';
  filterPublicationActivate = '';
  filterPublicationDeactivate = '';

  // ========== COMPONENT STATE ==========
  showResearchField = false;
  showInDescription = false;
  isSearching = false;

  // ========== FORM CONTROLS ==========
  searchResearchField = new FormControl('');
  searchInput = new FormControl();
  filterInput = new FormControl('');

  // ========== LINKS ==========
  clickedItemId: string | null = null;

  // ========== DATA SOURCES ==========
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
  selectedResearchField$ = this.selectedResearchField.selectedResearchField$;

  // ========== SUBSCRIPTIONS ==========
  private subscriptions: Subscription[] = [];

  // ========== SUBJECTS ==========
  showInDescriptionSubject = new BehaviorSubject<boolean>(false);

  // ========== PAGINATION ==========
  pageSize = 20;
  currentPage = 0;
  totalResults = 0;
  maxApiResults = 100; // Nombre maximum d'items récupérables via l'API (1 ou 2 requêtes de 50)

  // ========== API ENDPOINTS ==========
  private readonly baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=';
  private readonly getUrlSuffix = '&format=json&origin=*';

  // ========== FILTERS ==========
  filterPeople: 'people' | null = null;
  filterPublication: 'publication' | null = null;

  // ========== CACHING MECHANISM ==========
  private termCache: { [term: string]: WikibaseEntity[] } = {};
  private broadCacheInput: string = '';
  private broadCacheItems: WikibaseEntity[] = [];
  private broadCacheComplete: boolean = false;

  goToPage(page: number) {
    this.currentPage = page;
    this.searchInput.setValue(this.searchInput.value || '', { emitEvent: true });
  }

  setPageSize(size: number) {
    this.pageSize = size;
    this.currentPage = 0;
    this.searchInput.setValue(this.searchInput.value || '', { emitEvent: true });
  }

  togglePeopleFilter() {
    if (this.filterPeople === 'people') {
      this.filterPeople = null;
    } else {
      this.filterPeople = 'people';
      this.filterPublication = null;
    }
    this.searchInput.setValue(this.searchInput.value || '');
  }

  togglePublicationFilter() {
    if (this.filterPublication === 'publication') {
      this.filterPublication = null;
    } else {
      this.filterPublication = 'publication';
      this.filterPeople = null;
    }
    this.searchInput.setValue(this.searchInput.value || '');
  }

  ngOnInit(): void {
    this.initTranslations();
    this.initSelectedItemsList();
    this.initShowResearchFieldSync();
    this.initResearchFields();
    this.initSearchResults();
    this.initFilteredItems();
    this.initHintValue();

    this.pageSize = 100;
    this.currentPage = 0;

    this.searchInput.valueChanges.subscribe(() => {
      this.filterInput.setValue('', { emitEvent: false });
    });

  }

  onItemRowClick(itemId: string) {
    this.clickedItemId = itemId;
    // Changement de couleur temporaire (par exemple 200ms)
    setTimeout(() => {
      this.clickedItemId = null;
      this.router.navigate(['/item', itemId]);
    }, 200);
  }


  private initResearchFields() {
    const sub = this.selectedResearchField.selectedResearchField$.subscribe(() => {
      this.searchInput.setValue('');
      this.items = [];
      this.items$.next([]);
      this.changeDetector.markForCheck();
    });
    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.items = [];
    this.items$.next([]);
    this.termCache = {};
    this.broadCacheItems = [];
  }

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
    this.filterPeopleActivate = this.lang.getTranslation('filterPeopleActivate', lang);
    this.filterPeopleDeactivate = this.lang.getTranslation('filterPeopleDeactivate', lang);
    this.filterPublicationActivate = this.lang.getTranslation('filterPublicationActivate', lang);
    this.filterPublicationDeactivate = this.lang.getTranslation('filterPublicationDeactivate', lang);
    this.dataOptions = this.lang.getTranslation('results', lang);
  }

  private initSelectedItemsList() {
    const stored = localStorage.getItem('selectedItems');
    this.selectedItemsList = stored ? JSON.parse(stored).filter((el: any) => el !== null) : [];
  }

  private initShowResearchFieldSync() {
    const sub = this.selectedResearchField.showResearchField$.subscribe(show => {
      this.showResearchField = show;
      this.changeDetector.markForCheck();
    });
    this.subscriptions.push(sub);
  }

  /**
   * Récupère jusqu'à 50 items 
   */
  private fetchAutocompleteEntities(
    searchTerm: string,
    lang: string,
    maxResults: number = 50
  ): Observable<{ items: WikibaseEntity[], total: number }> {
    return this.request.searchItem(searchTerm, lang, 0, maxResults).pipe(
      map((res: any) => {
        const total = res.searchinfo?.totalhits ?? (res.search?.length ?? 0);
        const items = (res.search || []).map((e: any) => ({
          id: e.id,
          label: e.label,
          aliases: (e.aliases || []).filter((a: any) => a.language === lang).map((a: any) => a.value),
          description: e.description || ''
        }));
        return { items, total };
      })
    );
  }


  /**
   * Initialisation de la recherche principale avec pagination UI
   */
  private initSearchResults() {
    this.searchResults$ = combineLatest([
      this.searchInput.valueChanges.pipe(startWith('')),
      this.showInDescriptionSubject,
      this.selectedResearchField.selectedResearchField$
    ]).pipe(
      tap(([label]) => {
        this.isSearching = !!label && label.length > 0;
      }),
      debounceTime(250),
      switchMap(([label, showInDescription, selectedResearchField]) => {
        const searchTerm = normalizeString(label);
        const selectedId = selectedResearchField?.id || 'all';

        if (!searchTerm) {
          this.searchCache.invalidateCache();
          this.resetSearchState();
          return of([]);
        }

        // Recherche globale paginée (max 100 résultats)
        if (!selectedId || selectedId === 'all' || selectedId === '-' || selectedId === 'Q0') {
          // On récupère jusqu'à 100 résultats, puis on découpe la page courante
          const offset = this.currentPage * this.pageSize;
          const maxResults = Math.min(this.maxApiResults, offset + this.pageSize);
          return this.fetchAutocompleteEntities(searchTerm, this.lang.selectedLang, maxResults).pipe(
            map(({ items, total }) => {
              const pagedItems = items.slice(offset, offset + this.pageSize);
              this.totalResults = total;
              this.updateItemsList(pagedItems);
              return pagedItems;
            })
          );
        }

        // Recherche filtrée (CirrusSearch) : pas de pagination ici
        const firstWord = searchTerm.split(' ')[0];
        const filters = this.searchFilter.buildSearchFilters(
          firstWord,
          selectedId,
          this.filterPeople === 'people',
          this.filterPublication === 'publication'
        );
        const searchQuery = filters.join(' ');
        const searchUrl = this.wikibaseSearch.buildSearchUrl(searchQuery);

        return this.wikibaseSearch.fetchAllIds(searchUrl).pipe(
          tap(ids => {
            const isComplete = ids.length < 2000;
            this.searchCache.setCacheComplete(isComplete);
          }),
          switchMap(ids => this.wikibaseSearch.fetchEntities(ids)),
          map(entities => this.searchFilter.filterResultsLocally(
            entities,
            searchTerm,
            showInDescription,
          )),
          tap(items => {
            this.totalResults = items.length;
            if (this.searchCache.isComplete()) {
              this.searchCache.cacheItems(searchTerm, items);
            }
            this.updateItemsList(items);
          })
        );
      })
    );
  }

  private resetSearchState(): void {
    this.items = [];
    this.items$.next([]);
    this.updateHintValue();
    this.changeDetector.markForCheck();
    this.termCache = {};
    this.broadCacheInput = '';
    this.broadCacheItems = [];
    this.broadCacheComplete = false;
    this.totalResults = 0;
    this.currentPage = 0;
  }

  private buildSearchFilters(selectedId: string, searchTerm: string): string[] {
    const filters: string[] = [];
    if (this.filterPeople === 'people') {
      filters.push('haswbstatement:P2=Q7');
    }
    if (this.filterPublication === 'publication') {
      filters.push('haswbstatement:P2=Q20');
    }
    if (selectedId && selectedId !== '-' && selectedId !== 'Q0' && selectedId !== 'all') {
      filters.push(`haswbstatement:P131=${selectedId}`);
    }
    filters.push(`${searchTerm}*`);
    return filters;
  }

  private buildSearchUrl(searchQuery: string): string {
    return 'https://database.factgrid.de/w/api.php' +
      '?action=query' +
      '&list=search' +
      '&format=json' +
      '&origin=*' +
      `&srsearch=${encodeURIComponent(searchQuery)}` +
      '&srnamespace=120' +
      '&srlimit=500';
  }

  private fetchEntities(ids: string[]): Observable<WikibaseEntity[]> {
    if (ids.length === 0) return of([]);
    const chunks = chunkArray(ids, 50);
    const requests = chunks.map(chunk => {
      const idsParam = chunk.join('|');
      const getEntitiesUrl =
        `https://database.factgrid.de/w/api.php?action=wbgetentities` +
        `&ids=${idsParam}` +
        `&format=json` +
        `&languages=${this.lang.selectedLang}` +
        `&origin=*`;
      return this.request.getItem(getEntitiesUrl).pipe(
        map((res: any) => {
          if (!res.entities) return [];
          return this.adaptEntities(Object.values(res.entities), this.lang.selectedLang);
        })
      );
    });
    return requests.length > 0 ?
      forkJoin(requests).pipe(map(results => results.flat())) :
      of([]);
  }

  private filterResultsLocally(
    entities: WikibaseEntity[],
    searchTerm: string,
    showInDescription: boolean
  ): WikibaseEntity[] {
    if (!this.broadCacheComplete && this.broadCacheItems.length > 0) {
      return this.broadCacheItems.filter(item =>
        this.matchesSearchCriteria(item, searchTerm, showInDescription)
      );
    }
    return entities.filter(item =>
      this.matchesSearchCriteria(item, searchTerm, showInDescription)
    );
  }

  private matchesSearchCriteria(
    item: WikibaseEntity,
    searchTerm: string,
    showInDescription: boolean
  ): boolean {
    const normalizedLabel = normalizeString(item.label);
    const normalizedAliases = (item.aliases || []).map(normalizeString);
    const normalizedDesc = normalizeString(item.description);
    if (normalizedLabel.includes(searchTerm)) return true;
    if (normalizedAliases.some(alias => alias.includes(searchTerm))) return true;
    if (showInDescription && normalizedDesc.includes(searchTerm)) return true;
    return false;
  }

  private updateItemsList(items: WikibaseEntity[]): void {
    this.items = items;
    this.items$.next(items);
    this.updateHintValue();
    this.changeDetector.markForCheck();
  }

  private initFilteredItems() {
    this.filteredItems$ = combineLatest([
      this.items$,
      this.filterInput.valueChanges.pipe(startWith(''))
    ]).pipe(
      map(([items, filterValue]) => {
        const filter = normalizeString(filterValue || '');
        if (!filter) return items;
        return items.filter(item =>
          normalizeString(item.label).includes(filter) ||
          normalizeString(item.description).includes(filter)
        );
      })
    );
    const sub = this.filteredItems$.subscribe();
    this.subscriptions.push(sub);
  }

  private initHintValue() {
    this.hintValue$ = of(0);
  }

  updateHintValue() {
    const selectedResearchField = this.selectedResearchField.getSelectedResearchField();
    this.hintValue$ = this.items.length > 0
      ? of(this.items.length)
      : (!selectedResearchField || selectedResearchField.id === 'Q0')
        ? this.pages
        : of(0);
  }

  isArray(val: any): boolean {
    return Array.isArray(val);
  }

  createList(re: any): string {
    let arr = re.search ?? [];
    let list = arr.map((item: any) => item.id).join('|');
    return this.baseGetURL + list + this.getUrlSuffix;
  }

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

  private adaptEntities(entities: any[], lang: string): WikibaseEntity[] {
    return entities.map(e => ({
      id: e.id,
      label: e.labels?.[lang]?.value || '',
      aliases: e.aliases?.[lang]?.map((a: any) => a.value) || [],
      description: e.descriptions?.[lang]?.value || ''
    }));
  }

  researchFieldSelect(researchField: any) {
    if (!researchField) {
      this.selectedResearchField.setSelectedResearchField({ id: 'all', name: 'all', description: '' });
    } else {
      this.selectedResearchField.setSelectedResearchField({
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

  public displayResearchField(researchField: any): string {
    if (typeof researchField === 'string') {
      return researchField;
    }
    return researchField && researchField.name ? researchField.name : '';
  }

  clearProjectSearch() {
    this.searchResearchField.setValue('');
    this.selectedResearchField.setSelectedResearchField({ id: 'all', name: 'all', description: '' });
    this.selectedResearchField.setShowResearchField(false);
    this.updateHintValue();
  }

  clearItemSearch() {
    this.searchInput.setValue('', { emitEvent: false });
    this.items = [];
    this.items$.next([]);
    this.changeDetector.detectChanges();
  }

  onShowInDescriptionChange(checked: boolean) {
    this.showInDescription = checked;
    this.showInDescriptionSubject.next(checked);
  }

  searchInputValue$: Observable<string> = this.searchInput.valueChanges.pipe(
    startWith(this.searchInput.value || '')
  );
}
