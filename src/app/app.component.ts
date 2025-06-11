import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { SlideUpAnimation } from './slide-up-animation';
import { RouterModule, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    FooterComponent,
    MatTooltipModule
  ]
})
export class AppComponent implements OnInit {
  private router = inject(Router);

  langs: Lang[] = [
    { name: 'English', code: 'en' },
    { name: 'German', code: 'de' },
    { name: 'French', code: 'fr' },
    { name: 'Spanish', code: 'es' },
    { name: 'Italian', code: 'it' },
    { name: 'Hungarian', code: 'hu' },
    { name: 'Swedish', code: 'se' }
  ];

  specialPages = [
    { name: 'Harmonia Universalis', address: 'harmonia_universalis' },
    { name: 'Paris', address: 'paris' }
  ];

  researchFields: any[] = [
    { name: 'all', id: 'all' },
    { name: 'Illuminati', id: 'Q10677' },
    { name: 'student corporations', id: 'Q28115' },
    { name: 'animal magnetism', id: 'Q172203' },
    { name: 'freemasonry', id: 'Q10678' },
    { name: 'prose fiction', id: 'Q195135' },
    { name: 'Paris', id: 'Q10441' },
    { name: 'Harmonia Universalis', id: 'Q99677' }
  ];

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
  }

  get researchFieldsSorted() {
    // "all" toujours en tête
    const all = this.researchFields.find(f => f.id === 'all');
    // Champ sélectionné (hors "all")
    const selected = this.researchFields.find(f => f.id === this.selectedResearchField && f.id !== 'all');
    // Paris et Harmonia Universalis (hors sélection)
    const specials = this.researchFields.filter(f =>
      (f.name === 'Paris' || f.name === 'Harmonia Universalis') &&
      f.id !== (selected?.id)
    );
    // Les autres (hors all, specials, sélectionné)
    const others = this.researchFields.filter(f =>
      f.id !== 'all' &&
      f.id !== (selected?.id) &&
      f.name !== 'Paris' &&
      f.name !== 'Harmonia Universalis'
    );
    // Construction de la liste
    return [
      all,
      ...(selected && selected.id !== 'all' ? [selected] : []),
      ...specials,
      ...others
    ].filter(Boolean);
  }

  isResearchFieldEnabled(researchField: any): boolean {
    // Seuls Paris et Harmonia Universalis sont opérationnels, ainsi que "all"
    return (
      researchField.id === 'all' ||
      researchField.name === 'Paris' ||
      researchField.name === 'Harmonia Universalis'
    );
  }

  langSetting(lang) {
    if (lang !== undefined) {
      this.selectedLang = lang.code;
    }
    localStorage['selectedLang'] = this.selectedLang;
    window.location.reload();
  }

  researchFieldSelect(researchField) {
    if (!researchField) {
      this.selectedResearchField = 'all';
    } else {
      this.selectedResearchField = researchField.id;
      // Toujours mettre à jour le localStorage avant de naviguer
      localStorage['selectedResearchField'] = this.selectedResearchField;

      // Navigation spécifique pour Paris et Harmonia Universalis
      if (researchField.name === 'Paris') {
        this.router.navigate(['/paris']);
        return;
      }
      if (researchField.name === 'Harmonia Universalis') {
        this.router.navigate(['/harmonia_universalis']);
        return;
      }
    }
    // Pour le cas où researchField est null
    if (!researchField) {
      localStorage['selectedResearchField'] = this.selectedResearchField;
    }
  }


  linking() {
    window.open('https://database.factgrid.de/wiki/Main_Page', '_blank');
  }
}
