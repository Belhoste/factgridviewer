import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
//import { SetLanguageService } from './set-language.service';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

//  private baseSearchURL = 'https://www.wikidata.org//w/api.php?action=wbsearchentities&search='
//private baseGetURL = 'https://www.wikidata.org//w/api.php?action=wbgetentities&ids=' ;


 private baseSearchURL = 'https://database.factgrid.de//w/api.php?action=wbsearchentities&search=' ;
 private baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=' ;
	private searchUrlSuffix = '&language=en&uselang=fr&limit=50&format=json' ;
  private getUrlSuffix= '&format=json' ; 
 // private res:string;

  constructor(private http: HttpClient) { }

requestProperties(propertiesList0,propertiesList1, propertiesList2, propertiesList3, propertiesList4, propertiesList5, propertiesList6)
  {  
    let response0$
    let response1$;
    let response2$;
    let response3$;
    let response4$;
    let response5$;
    let response6$;
    let result;
   
    if (propertiesList6 === undefined) { 
      if (propertiesList5 === undefined) {
        if (propertiesList4 === undefined) { 
          if (propertiesList3 === undefined) {
            if (propertiesList2 === undefined) {
              if (propertiesList1 === undefined) {
                if (propertiesList0 === undefined) {
                  response0$ =undefined, response1$=undefined, response2$=undefined, response3$=undefined, response4$=undefined, response5$=undefined, response6$=undefined
                  }
               response0$ = this.http.get(this.baseGetURL+propertiesList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
                response1$=undefined, response2$=undefined, response3$=undefined, response4$=undefined, response5$=undefined, response6$=undefined  
                }
              response0$ = this.http.get(this.baseGetURL+propertiesList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
              response1$ = this.http.get(this.baseGetURL+propertiesList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
              response2$=undefined, response3$=undefined, response4$=undefined, response5$=undefined, response6$=undefined  
              }
            response0$ = this.http.get(this.baseGetURL+propertiesList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
            response1$ = this.http.get(this.baseGetURL+propertiesList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
            response2$ = this.http.get(this.baseGetURL+propertiesList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
            response3$=undefined, response4$=undefined, response5$=undefined, response6$=undefined  
            }
          response0$ = this.http.get(this.baseGetURL+propertiesList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
          response1$ = this.http.get(this.baseGetURL+propertiesList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
          response2$ = this.http.get(this.baseGetURL+propertiesList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
          response3$ = this.http.get(this.baseGetURL+propertiesList3+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),  
          response4$=undefined, response5$=undefined, response6$=undefined
          }
        response0$ = this.http.get(this.baseGetURL+propertiesList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
        response1$ = this.http.get(this.baseGetURL+propertiesList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
        response2$ = this.http.get(this.baseGetURL+propertiesList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
        response3$ = this.http.get(this.baseGetURL+propertiesList3+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
        response4$ = this.http.get(this.baseGetURL+propertiesList4+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
        response5$ = undefined, response6$=undefined
        }
      response0$ = this.http.get(this.baseGetURL+propertiesList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
      response1$ = this.http.get(this.baseGetURL+propertiesList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
      response2$ = this.http.get(this.baseGetURL+propertiesList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
      response3$ = this.http.get(this.baseGetURL+propertiesList3+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
      response4$ = this.http.get(this.baseGetURL+propertiesList4+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
      response5$ = this.http.get(this.baseGetURL+propertiesList5+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
      response6$ = undefined 
        }
    else {
    response0$ = this.http.get(this.baseGetURL+propertiesList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
    response1$ = this.http.get(this.baseGetURL+propertiesList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
    response2$ = this.http.get(this.baseGetURL+propertiesList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
    response3$ = this.http.get(this.baseGetURL+propertiesList3+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
    response4$ = this.http.get(this.baseGetURL+propertiesList4+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
    response5$ = this.http.get(this.baseGetURL+propertiesList5+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
    response6$=  this.http.get(this.baseGetURL+propertiesList6+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})) 
    } 
    
    result=forkJoin([response0$,response1$,response2$,response3$,response4$,response5$,response6$])
    return result
  
  }
  
requestItems(itemsList0,itemsList1,itemsList2,itemsList3,itemsList4,itemsList5,itemsList6)
{
  let response0$
  let response1$;
  let response2$;
  let response3$;
  let response4$;
  let response5$;
  let response6$;
  let result;
 
  if (itemsList6 === undefined) { 
    if (itemsList5 === undefined) {
      if (itemsList4 === undefined) { 
        if (itemsList3 === undefined) {
          if (itemsList2 === undefined) {
            if (itemsList1 === undefined) {
              response0$ = this.http.get(this.baseGetURL+itemsList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
              response1$=undefined, response2$=undefined, response3$=undefined, response4$=undefined, response5$=undefined, response6$=undefined  
              }
            response0$ = this.http.get(this.baseGetURL+itemsList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
            response1$ = this.http.get(this.baseGetURL+itemsList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
            response2$=undefined, response3$=undefined, response4$=undefined, response5$=undefined, response6$=undefined  
            }
          response0$ = this.http.get(this.baseGetURL+itemsList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
          response1$ = this.http.get(this.baseGetURL+itemsList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
          response2$ = this.http.get(this.baseGetURL+itemsList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
          response3$=undefined, response4$=undefined, response5$=undefined, response6$=undefined  
          }
        response0$ = this.http.get(this.baseGetURL+itemsList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
        response1$ = this.http.get(this.baseGetURL+itemsList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
        response2$ = this.http.get(this.baseGetURL+itemsList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
        response3$ = this.http.get(this.baseGetURL+itemsList3+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),  
        response4$=undefined, response5$=undefined, response6$=undefined
        }
      response0$ = this.http.get(this.baseGetURL+itemsList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
      response1$ = this.http.get(this.baseGetURL+itemsList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
      response2$ = this.http.get(this.baseGetURL+itemsList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
      response3$ = this.http.get(this.baseGetURL+itemsList3+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
      response4$ = this.http.get(this.baseGetURL+itemsList4+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
      response5$ = undefined, response6$=undefined
      }
    response0$ = this.http.get(this.baseGetURL+itemsList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
    response1$ = this.http.get(this.baseGetURL+itemsList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
    response2$ = this.http.get(this.baseGetURL+itemsList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
    response3$ = this.http.get(this.baseGetURL+itemsList3+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
    response4$ = this.http.get(this.baseGetURL+itemsList4+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
    response5$ = this.http.get(this.baseGetURL+itemsList5+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
    response6$ = undefined 
      }
  else {
  response0$ = this.http.get(this.baseGetURL+itemsList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
  response1$ = this.http.get(this.baseGetURL+itemsList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
  response2$ = this.http.get(this.baseGetURL+itemsList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
  response3$ = this.http.get(this.baseGetURL+itemsList3+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
  response4$ = this.http.get(this.baseGetURL+itemsList4+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
  response5$ = this.http.get(this.baseGetURL+itemsList5+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
  response6$=  this.http.get(this.baseGetURL+itemsList6+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})) 
  } 
  result=forkJoin([response0$,response1$,response2$,response3$,response4$,response5$,response6$])
  return result
}
  
  searchItem(label, lang) {
   let headers = new HttpHeaders().set('Access-Control-Allow-Origin','https://sleepy-ridge-62412.herokuapp.com')
    let params = new HttpParams().set('action',"wbsearchentities")
    .set('search',label)
    .set('language',lang)
    .set('uselang',lang)
    .set('limit',"50")
    .set('format',"json"); 
   return this.http.get('https://database.factgrid.de//w/api.php', {
     headers: headers, 
     params: params})   
 // return this.http.get('https://www.wikidata.org//w/api.php', {params: params}) 
    }

  //searchItem(label:string, lang:string): Observable<any> { return this.http.get(this.searchUrl(label,lang))} ;

  getItem(re): Observable<any> { return this.http.get(re) };

  selectUrl(url:string) {  let selectUrl = re => re == "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=&format=json"? 
     "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=Q10599&format=json" : re  };

 // selectUrl(url:string) {  let selectUrl = re => re == "https://www.wikidata.org/w/api.php?action=wbgetentities&ids=&format=json"? 
  //   "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=Q42&format=json" : re  };
 
  }
