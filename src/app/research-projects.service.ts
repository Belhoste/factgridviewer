import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResearchProjectService {
  constructor(private http: HttpClient) { }

  getResearchProjects(): Observable<any[]> {
    const sparql = `
      SELECT ?item ?itemLabel WHERE {
        ?item wdt:P131 ?project .
        SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
      }
    `;
    const url = 'https://database.factgrid.de/query/sparql?query=' + encodeURIComponent(sparql) + '&format=json';
    return this.http.get<any>(url).pipe(
      map(res => res.results.bindings.map(b => ({
        id: b.item.value.split('/').pop(),
        name: b.itemLabel.value
      })))
    );
  }
}

