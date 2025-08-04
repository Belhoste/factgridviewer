import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { saveAs } from 'file-saver-es';
import { expand, map, reduce, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private http = inject(HttpClient);

  private baseSearchURL = 'https://database.factgrid.de//w/api.php?action=wbsearchentities&search=';
  private baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=';
  private searchUrlSuffix = '&language=en&uselang=fr&limit=50&format=json&origin=*';
  private getUrlSuffix = '&format=json&origin=*';

  /**
   * Récupère les propriétés via un tableau de listes (max 8).
   */
  requestProperties(propertiesLists: string[]): Observable<any[]> {
    const lists = [...propertiesLists];
    while (lists.length < 8) lists.push(undefined);

    const requests = lists.map(list =>
      list
        ? this.http.get(this.baseGetURL + list + this.getUrlSuffix).pipe(
          catchError(() => of(undefined))
        )
        : of(undefined)
    );

    return forkJoin(requests);
  }

  /**
   * Récupère les items via un tableau de listes (max 8).
   */
  requestItems(itemsLists: string[]): Observable<any[]> {
    const lists = [...itemsLists];
    while (lists.length < 8) lists.push(undefined);

    const requests = lists.map(list =>
      list
        ? this.http.get(this.baseGetURL + list + this.getUrlSuffix).pipe(
          catchError(() => of(undefined))
        )
        : of(undefined)
    );

    return forkJoin(requests);
  }

  searchItem(label: string, lang: string, offset: number = 0, limit: number = 50) {
    const params = new HttpParams()
      .set('action', 'wbsearchentities')
      .set('search', label)
      .set('language', lang)
      .set('uselang', lang)
      .set('limit', limit.toString())
      .set('format', 'json')
      .set('origin', '*')
      .set('offset', offset.toString());
      ;
    return this.http.get('https://database.factgrid.de//w/api.php', { params });
  }

  searchProperty(label: string, lang: string) {
    const params = new HttpParams()
      .set('action', 'wbsearchentities')
      .set('type', 'property')
      .set('search', label)
      .set('language', lang)
      .set('uselang', lang)
      .set('limit', '50')
      .set('format', 'json')
      .set('origin', '*');
    return this.http.get('https://database.factgrid.de//w/api.php', { params });
  }

  getAsk(re: string): Observable<any> {
    return this.http.get(re).pipe(catchError(() => of(false)));
  }

  getItem(re: string): Observable<any> {
    return this.http.get(re).pipe(catchError(() => of(undefined)));
  }

  getList(sparql: string): Observable<any> {
    if (sparql !== undefined) {
      const params = new HttpParams().set('format', 'json');
      return this.http.get(sparql, { params }).pipe(catchError(() => of([])));
    }
    return of([]);
  }

  downLoadList(sparql: string) {
    if (sparql !== undefined) {
      const headers = new HttpHeaders().set('Accept', 'text/csv');
      const params = new HttpParams();
      this.http.get(sparql, { headers, responseType: 'arraybuffer', params })
        .subscribe(response => this.downLoadFile(response));
    }
  }

  getTranscript(id: string) {
    const params = new HttpParams()
      .set('page', id)
      .set('format', 'json')
      .set('prop', 'text')
      .set('formatversion', '2')
      .set('origin', '*');
    return this.http.get('https://database.factgrid.de//w/api.php?action=parse', { params });
  }

  getItemTalkPageHtml(itemId: string): Observable<any> {
    const pageTitle = `Item_talk:${itemId}`;
    const params = new HttpParams()
      .set('action', 'query')
      .set('format', 'json')
      .set('prop', 'revisions')
      .set('titles', pageTitle)
      .set('rvprop', 'content')
      .set('origin', '*');
    const url = 'https://database.factgrid.de/w/api.php';
    return this.http.get(url, { params }).pipe(catchError(() => of(undefined)));
  }

  getStat() {
    const params = new HttpParams()
      .set('format', 'json')
      .set('meta', 'siteinfo')
      .set('siprop', 'statistics')
      .set('origin', '*');
    return this.http.get('https://database.factgrid.de//w/api.php?action=query', { params });
  }

  newSparqlAddress(address: string) {
    const newPrefix = 'https://database.factgrid.de/sparql?query=';
    const oldPrefix = 'https://database.factgrid.de/query/#';
    return address.replace(oldPrefix, newPrefix);
  }

  downLoadFile(data: any) {
    const blob = new Blob([data], { type: 'text/csv' });
    saveAs(blob, 'list.csv');
  }

  getExpandedUrl(url: string) {
    if (url !== undefined) {
      const headers = new HttpHeaders().set('Accept', 'text/csv');
      const params = new HttpParams();
      this.http.get(url, { headers, responseType: 'arraybuffer', params })
        .subscribe(response => this.downLoadFile(response));
    }
  }

  getProjectList(re: string): Observable<any> {
    return this.http.get(re).pipe(catchError(() => of(false)));
  }

  getBackList(item: string, lang: string): Observable<any> {
    item = 'Item:' + item;
    const prefix = `https://database.factgrid.de/w/api.php?`;
    const params1 = new HttpParams()
      .set('action', 'query')
      .set('format', 'json')
      .set('prop', 'entityterms')
      .set('generator', 'backlinks')
      .set('formatversion', '2')
      .set('wbetterms', 'label')
      .set('gbllimit', '500')
      .set('gblnamespace', '120')
      .set('uselang', lang)
      .set('gbltitle', item)
      .set('origin', '*');
    const params2 = params1.set('uselang', 'en');
    const u1 = this.http.get(prefix, { params: params1 }).pipe(catchError(() => of(undefined)));
    const u2 = this.http.get(prefix, { params: params2 }).pipe(catchError(() => of(undefined)));
    return forkJoin([u1, u2]);
  }


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

  getQidsList(search: string): Observable<string[]> {
    const baseParams = new HttpParams()
      .set('action', 'query')
      .set('list', 'search')
      .set('srsearch', search)
      .set('format', 'json')
      .set('srlimit', '5000')
      .set('origin', '*');

    const fetch = (sroffset?: number) => {
      let params = baseParams;
      if (sroffset !== undefined) {
        params = params.set('sroffset', sroffset.toString());
      }
      return this.http.get<any>('https://database.factgrid.de/w/api.php', { params });
    };

    return fetch().pipe(
      expand(response => {
        if (response.continue && response.continue.sroffset !== undefined) {
          return fetch(response.continue.sroffset);
        }
        return of();
      }),
      map(response => response.query?.search.map(item => item.title) ?? []),
      reduce((acc, value) => acc.concat(value), [])
    );
  }
}



