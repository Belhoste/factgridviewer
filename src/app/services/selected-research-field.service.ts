import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ResearchField {
  id: string;
  name: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class SelectedResearchFieldService {
  private subject: BehaviorSubject<ResearchField>;
  public selectedResearchField$: Observable<ResearchField>;

  private showResearchFieldSubject = new BehaviorSubject<boolean>(false);
  public showResearchField$: Observable<boolean> = this.showResearchFieldSubject.asObservable();
  constructor() {
    const stored = localStorage['selectedResearchField'];
    let initial: ResearchField = { id: 'all', name: 'all', description: '' };
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        initial = {
          id: parsed.id,
          name: parsed.name,
          description: parsed.description ?? ''
        };
      } catch {
        // fallback
      }
    }
    this.subject = new BehaviorSubject<ResearchField>(initial);
    this.selectedResearchField$ = this.subject.asObservable();
  }

  setSelectedResearchField(field: ResearchField) {
    const safeField: ResearchField = {
      id: field.id,
      name: field.name,
      description: field.description ?? ''
    };
    localStorage['selectedResearchField'] = JSON.stringify(safeField);
    this.subject.next(safeField);
  }

  getSelectedResearchField(): ResearchField {
    return this.subject.getValue();
  }

  setShowResearchField(show: boolean) {
    this.showResearchFieldSubject.next(show);
  }

  getShowResearchField(): boolean {
    return this.showResearchFieldSubject.getValue();
  }
}

