import { Injectable, inject } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, switchMap, tap, debounceTime, takeWhile, filter } from 'rxjs/operators';
import { RequestService } from '../services/request.service';
import { SelectedLangService } from '../selected-lang.service';


@Injectable({
  providedIn: 'root'
})
export class SearchEngineService {
  private request = inject(RequestService);
  private lang = inject(SelectedLangService);


 

  private baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=';
  private getUrlSuffix = '&format=json&origin=*';

  input(de:Observable<any>) {   //search engine
   de.pipe(
    debounceTime(400),
    switchMap(label => this.request.searchItem(label, this.lang.selectedLang)),
    map(res => this.createList(res)),
    map(res => res == "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=&format=json&origin=*" ?
      "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=Q220375&format=json&origin=*" : res),
    debounceTime(200),
    switchMap(url => this.request.getItem(url)),
    // tap(res => console.log(res)),
    //  takeWhile (res => res !== undefined),
    filter(res => res !== undefined),
  )
  }


  createList(re) {  //create an url whith the elements of an array
    let list = "";
    let url = "";
    let arr = re.search;
    if (arr === undefined) { arr = [] }
    else { arr = arr };
    for (let i = 0; i < arr.length; i++) {
      list = list + "|" + arr[i].id;
    };
    list = list.slice(1);
    url = this.baseGetURL + list + this.getUrlSuffix;
    return url
  }

}
