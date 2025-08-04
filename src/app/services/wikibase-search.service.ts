import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestService } from './request.service';
import { SelectedLangService } from '../selected-lang.service';
import { WikibaseEntity } from '../models/wikibase-entity.model';

@Injectable({ providedIn: 'root' })
export class WikibaseSearchService {
  constructor(
    private request: RequestService,
    private lang: SelectedLangService
  ) { }

  /**
   * Fetch all entity IDs from a CirrusSearch query (up to 2000 results)
   */
  fetchAllIds(searchUrl: string): Observable<string[]> {
    const offsets = [0, 500, 1000, 1500];
    const extractQids = (res: any) =>
      (res.query?.search ?? [])
        .map((item: any) => {
          const match = item.title.match(/Q\d+/);
          return match ? match[0] : null;
        })
        .filter((qid: string | null) => !!qid);

    const requests = offsets.map(offset =>
      this.request.getItem(`${searchUrl}&sroffset=${offset}`).pipe(
        map(extractQids)
      )
    );

    return forkJoin(requests).pipe(
      map(results => Array.from(new Set(results.flat())))
    );
  }

  /**
   * Fetch entities for autocompletion using wbsearchentities API
   */
  fetchAutocompleteEntities(searchTerm: string): Observable<WikibaseEntity[]> {
    const url = 'https://database.factgrid.de/w/api.php' +
      '?action=wbsearchentities' +
      `&search=${encodeURIComponent(searchTerm)}` +
      `&language=${this.lang.selectedLang}` +
      '&type=item' +
      '&limit=500' +
      '&format=json' +
      '&origin=*';

    return this.request.getItem(url).pipe(
      map((res: any) => (res.search || []).map((e: any) => ({
        id: e.id,
        label: e.label,
        aliases: e.aliases || [],
        description: e.description || ''
      })))
    );
  }

  /**
   * Fetch detailed Wikibase entities by IDs
   */
  fetchEntities(ids: string[]): Observable<WikibaseEntity[]> {
    if (ids.length === 0) return of([]);
    const chunkArray = <T>(array: T[], chunkSize: number): T[][] => {
      const results: T[][] = [];
      for (let i = 0; i < array.length; i += chunkSize) {
        results.push(array.slice(i, i + chunkSize));
      }
      return results;
    };
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
    return requests.length > 0 ? forkJoin(requests).pipe(map(results => results.flat())) : of([]);
  }

  /**
   * Adapt raw API entities to WikibaseEntity interface
   */
  adaptEntities(entities: any[], lang: string): WikibaseEntity[] {
    return entities.map(e => ({
      id: e.id,
      label: e.labels?.[lang]?.value || '',
      aliases: e.aliases?.[lang]?.map((a: any) => a.value) || [],
      description: e.descriptions?.[lang]?.value || ''
    }));
  }

  /**
   * Build a CirrusSearch URL for the API
   */
  buildSearchUrl(searchQuery: string): string {
    return 'https://database.factgrid.de/w/api.php' +
      '?action=query' +
      '&list=search' +
      '&format=json' +
      '&origin=*' +
      `&srsearch=${encodeURIComponent(searchQuery)}` +
      '&srnamespace=120' +
      '&srlimit=500';
  }
}
