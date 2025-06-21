import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, map, startWith, combineLatest } from 'rxjs';
import { SlideUpAnimation } from './slide-up-animation';
import { RouterModule, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { FooterComponent } from './footer/footer.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RequestService } from './services/request.service';
import { SelectedResearchFieldService } from './services/selected-research-field.service'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SelectedLangService } from './selected-lang.service';

export interface Lang {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [SlideUpAnimation],
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    FooterComponent,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDividerModule
  ]
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private request = inject(RequestService);
  private selectedResearchFieldService = inject(SelectedResearchFieldService);
  private lang = inject(SelectedLangService);

  langs: Lang[] = [
    { name: 'English', code: 'en' },
    { name: 'Deutsch', code: 'de' },
    { name: 'Français', code: 'fr' },
    { name: 'Español', code: 'es' },
    { name: '中文', code: 'zh' },
    { name: 'Italiano', code: 'it' },
    { name: 'Magyar', code: 'hu' },
    { name: 'Svenska', code: 'se' }
  ];

  specialPages = [
    { name: 'Harmonia Universalis', address: 'harmonia_universalis' },
    { name: 'Paris', address: 'paris' }
  ];

  researchFields: any[] = [];
  private researchFields$ = new BehaviorSubject<any[]>([]);
  searchResearchField = new FormControl('');
  filteredResearchFields$: Observable<any[]>;

  selectedLang: string = (localStorage['selectedLang'] === undefined) ? 'en' : localStorage['selectedLang'];
  selectedPage = (sessionStorage['selectedPage'] === undefined)
    ? JSON.stringify([{ name: 'FactGrid', address: '' }])
    : sessionStorage['selectedPage'];
  selectedItems: any[] = [];
  selectedParisItems: any[] = [];
  selectedResearchField: string = localStorage['selectedResearchField'];
  title = 'factgrid';
  subtitle: string;
  searchInput = new FormControl();
  public selectedItem: Observable<any>;
  searchToken: string = 'on';
  public isDown: boolean = true;
  u: string;
  labels;
  items = [];
  newItem;
  itemId: string;

  showResearchField = false;

  projectSearch: string = "Search a project";
  projectName: string = "Project name";

  ResearchFieldQuery = `https://database.factgrid.de/sparql?query=SELECT ?item ?itemLabel ?itemDescription  
   WHERE {
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
  ?item wdt:P2 wd:Q11295.
   }`;

  filterPeople: 'people' | 'all' = 'all';

  filterPublication: 'publication' | 'all' = 'all';

  togglePeopleFilter() {
    this.filterPeople = this.filterPeople === 'people' ? 'all' : 'people';
    // ... logique de filtrage
  }

  togglePublicationFilter() {
    this.filterPublication = this.filterPublication === 'publication' ? 'all' : 'publication';
  }
  constructor() { }

  ngOnInit(): void {
    if (localStorage['selectedLang'] === undefined) {
      localStorage.setItem('selectedLang', 'en');
    }
    if (localStorage['selectedItems'] === undefined) {
      localStorage.setItem('selectedItems', JSON.stringify([{ value: { id: 'Q152233' }, label: 'FactGrid' }]));
    }
    if (localStorage['selectedResearchField'] === undefined) {
      localStorage.setItem('selectedResearchField', 'all');
    }
    if (localStorage['selectedParisItems'] === undefined) {
      localStorage.setItem('selectedParisItems', JSON.stringify([{ value: { id: 'Q152233' }, label: 'FactGrid' }]));
    }

    this.projectSearch = this.lang.getTranslation('projectSearch', this.lang.selectedLang);
    this.projectName = this.lang.getTranslation('projectName', this.lang.selectedLang);

    // Initialisation de l'observable filtré, toujours prêt
    this.filteredResearchFields$ = combineLatest([
      this.researchFields$,
      this.searchResearchField.valueChanges.pipe(startWith(''))
    ]).pipe(
      map(([fields, value]) => {
        const search = (typeof value === 'string' ? value : '').toLowerCase();
        return fields.filter(f => f.name.toLowerCase().includes(search));
      })
    );

    // Récupération des projets depuis le backend
    this.request.getList(this.ResearchFieldQuery)
      .pipe(
        map(res => this.listFromSparql(res)),
        map(res => [
          { name: '-', id: '-' },
          ...res.results.bindings.map(b => ({
            name: b.itemLabel.value,
            id: b.item.id,
            description: b.itemDescription?.value ?? ''
          }))
        ])
      )
      .subscribe(projects => {
        projects.sort((a, b) => a.name.localeCompare(b.name));
        this.researchFields = projects;
        this.researchFields$.next(projects); // met à jour le BehaviorSubject
      });
  }


  langSetting(lang) {
    if (lang !== undefined) {
      this.selectedLang = lang.code;
    }
    localStorage['selectedLang'] = this.selectedLang;
    window.location.reload();
  }

  researchFieldSelect(researchField) {
    this.selectedResearchFieldService.setSelectedResearchField({
      id: researchField.id,
      name: researchField.name,
      description: researchField.description ?? ''
    });

  }
  

  linking() {
    window.open('https://database.factgrid.de/wiki/Main_Page', '_blank');
  }

  listFromSparql(res) {
    if (res !== undefined) {
      if (res.results !== undefined) {
        for (let i = 0; i < res.results.bindings.length; i++) {
          res.results.bindings[i]["item"].id = res.results.bindings[i]["item"].value.replace(
            "https://database.factgrid.de/entity/", "");
          res.results.bindings[i]["item"].id.startsWith("P") ? res.results.bindings[i]["item"].entity = "property" : res.results.bindings[i]["item"].entity = "item";
        }
      }
    }
    else {
      res = { head: { vars: ['item', 'itemLabel', 'itemDescription', 'fLabel', 'activityLabel'] }, results: { bindings: [] } }
    }
    return res
  }

  displayResearchField(researchField: any): string {
    return researchField && researchField.name ? researchField.name : '';
  }

  toggleResearchField() {
    this.showResearchField = !this.showResearchField;
    this.selectedResearchFieldService.setShowResearchField(this.showResearchField);
  }
}
