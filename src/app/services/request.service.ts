import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
//import { SetLanguageService } from './set-language.service';
import { tap, map, catchError } from 'rxjs/operators';
import { saveAs } from 'file-saver-es';

@Injectable({
  providedIn: 'root'
})



export class RequestService {
 private http = inject(HttpClient);


//  private baseSearchURL = 'https://www.wikidata.org//w/api.php?action=wbsearchentities&search='
//private baseGetURL = 'https://www.wikidata.org//w/api.php?action=wbgetentities&ids=' ;


 private baseSearchURL = 'https://database.factgrid.de//w/api.php?action=wbsearchentities&search=' ;
 private baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=' ;
	private searchUrlSuffix = '&language=en&uselang=fr&limit=50&format=json&origin=*' ;
  private getUrlSuffix= '&format=json&origin=*' ;

requestProperties(propertiesList0,propertiesList1, propertiesList2, propertiesList3, propertiesList4, propertiesList5, propertiesList6, propertiesList7)
  {  
    let response0$
    let response1$;
    let response2$;
    let response3$;
    let response4$;
    let response5$;
    let response6$;
    let response7$;
    let result;
   
    if(propertiesList7 === undefined) {
    if (propertiesList6 === undefined) { 
      if (propertiesList5 === undefined) {
        if (propertiesList4 === undefined) { 
          if (propertiesList3 === undefined) {
            if (propertiesList2 === undefined) {
              if (propertiesList1 === undefined) {
                if (propertiesList0 === undefined) {
                  response0$ =undefined, response1$=undefined, response2$=undefined, response3$=undefined, response4$=undefined, response5$=undefined, response6$=undefined, response7$=undefined
                  }
               response0$ = this.http.get(this.baseGetURL+propertiesList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
                response1$=undefined, response2$=undefined, response3$=undefined, response4$=undefined, response5$=undefined, response6$=undefined, response7$=undefined  
                }
              response0$ = this.http.get(this.baseGetURL+propertiesList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
              response1$ = this.http.get(this.baseGetURL+propertiesList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
              response2$=undefined, response3$=undefined, response4$=undefined, response5$=undefined, response6$=undefined, response7$=undefined  
              }
            response0$ = this.http.get(this.baseGetURL+propertiesList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
            response1$ = this.http.get(this.baseGetURL+propertiesList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
            response2$ = this.http.get(this.baseGetURL+propertiesList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
            response3$=undefined, response4$=undefined, response5$=undefined, response6$=undefined, response7$=undefined  
            }
          response0$ = this.http.get(this.baseGetURL+propertiesList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
          response1$ = this.http.get(this.baseGetURL+propertiesList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
          response2$ = this.http.get(this.baseGetURL+propertiesList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
          response3$ = this.http.get(this.baseGetURL+propertiesList3+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),  
          response4$=undefined, response5$=undefined, response6$=undefined, response7$=undefined
          }
        response0$ = this.http.get(this.baseGetURL+propertiesList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
        response1$ = this.http.get(this.baseGetURL+propertiesList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
        response2$ = this.http.get(this.baseGetURL+propertiesList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
        response3$ = this.http.get(this.baseGetURL+propertiesList3+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
        response4$ = this.http.get(this.baseGetURL+propertiesList4+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
        response5$ = undefined, response6$=undefined, response7$=undefined
        }
      response0$ = this.http.get(this.baseGetURL+propertiesList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
      response1$ = this.http.get(this.baseGetURL+propertiesList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
      response2$ = this.http.get(this.baseGetURL+propertiesList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
      response3$ = this.http.get(this.baseGetURL+propertiesList3+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
      response4$ = this.http.get(this.baseGetURL+propertiesList4+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
      response5$ = this.http.get(this.baseGetURL+propertiesList5+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
      response6$ = undefined, response7$ = undefined 
        }
      response0$ = this.http.get(this.baseGetURL+propertiesList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
      response1$ = this.http.get(this.baseGetURL+propertiesList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
      response2$ = this.http.get(this.baseGetURL+propertiesList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
      response3$ = this.http.get(this.baseGetURL+propertiesList3+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
      response4$ = this.http.get(this.baseGetURL+propertiesList4+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
      response5$ = this.http.get(this.baseGetURL+propertiesList5+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
      response6$ = this.http.get(this.baseGetURL+propertiesList6+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
      response7$ = undefined
      }
    else {
    response0$ = this.http.get(this.baseGetURL+propertiesList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
    response1$ = this.http.get(this.baseGetURL+propertiesList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
    response2$ = this.http.get(this.baseGetURL+propertiesList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
    response3$ = this.http.get(this.baseGetURL+propertiesList3+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
    response4$ = this.http.get(this.baseGetURL+propertiesList4+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
    response5$ = this.http.get(this.baseGetURL+propertiesList5+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
    response6$=  this.http.get(this.baseGetURL+propertiesList6+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
    response7$=  this.http.get(this.baseGetURL+propertiesList7+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)}))  
    } 
    
    result=forkJoin([response0$,response1$,response2$,response3$,response4$,response5$,response6$,response7$]);
 
    return result
  
  }
  
requestItems(itemsList0,itemsList1,itemsList2,itemsList3,itemsList4,itemsList5,itemsList6,itemsList7)
{
  let response0$
  let response1$;
  let response2$;
  let response3$;
  let response4$;
  let response5$;
  let response6$;
  let response7$;
  let result;
 
  if (itemsList7 === undefined) { 
  if (itemsList6 === undefined) { 
    if (itemsList5 === undefined) {
      if (itemsList4 === undefined) { 
        if (itemsList3 === undefined) {
          if (itemsList2 === undefined) {
            if (itemsList1 === undefined) {
              response0$ = this.http.get(this.baseGetURL+itemsList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
              response1$=undefined, response2$=undefined, response3$=undefined, response4$=undefined, response5$=undefined, response6$=undefined, response7$=undefined  
              }
            response0$ = this.http.get(this.baseGetURL+itemsList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
            response1$ = this.http.get(this.baseGetURL+itemsList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
            response2$=undefined, response3$=undefined, response4$=undefined, response5$=undefined, response6$=undefined, response7$=undefined
            }
          response0$ = this.http.get(this.baseGetURL+itemsList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
          response1$ = this.http.get(this.baseGetURL+itemsList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
          response2$ = this.http.get(this.baseGetURL+itemsList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
          response3$=undefined, response4$=undefined, response5$=undefined, response6$=undefined, response7$=undefined
          }
        response0$ = this.http.get(this.baseGetURL+itemsList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
        response1$ = this.http.get(this.baseGetURL+itemsList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
        response2$ = this.http.get(this.baseGetURL+itemsList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
        response3$ = this.http.get(this.baseGetURL+itemsList3+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),  
        response4$=undefined, response5$=undefined, response6$=undefined, response7$=undefined
        }
      response0$ = this.http.get(this.baseGetURL+itemsList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
      response1$ = this.http.get(this.baseGetURL+itemsList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
      response2$ = this.http.get(this.baseGetURL+itemsList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
      response3$ = this.http.get(this.baseGetURL+itemsList3+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
      response4$ = this.http.get(this.baseGetURL+itemsList4+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
      response5$ = undefined, response6$=undefined, response7$=undefined
      }
    response0$ = this.http.get(this.baseGetURL+itemsList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
    response1$ = this.http.get(this.baseGetURL+itemsList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
    response2$ = this.http.get(this.baseGetURL+itemsList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
    response3$ = this.http.get(this.baseGetURL+itemsList3+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
    response4$ = this.http.get(this.baseGetURL+itemsList4+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
    response5$ = this.http.get(this.baseGetURL+itemsList5+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
    response6$ = undefined, response7$=undefined
      }
    response0$ = this.http.get(this.baseGetURL+itemsList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
    response1$ = this.http.get(this.baseGetURL+itemsList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
    response2$ = this.http.get(this.baseGetURL+itemsList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
    response3$ = this.http.get(this.baseGetURL+itemsList3+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
    response4$ = this.http.get(this.baseGetURL+itemsList4+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
    response5$ = this.http.get(this.baseGetURL+itemsList5+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
    response6$ = this.http.get(this.baseGetURL+itemsList6+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
    response7$=undefined
    }
  else {
  response0$ = this.http.get(this.baseGetURL+itemsList0+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
  response1$ = this.http.get(this.baseGetURL+itemsList1+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})),
  response2$ = this.http.get(this.baseGetURL+itemsList2+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
  response3$ = this.http.get(this.baseGetURL+itemsList3+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
  response4$ = this.http.get(this.baseGetURL+itemsList4+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
  response5$ = this.http.get(this.baseGetURL+itemsList5+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
  response6$=  this.http.get(this.baseGetURL+itemsList6+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})), 
  response7$=  this.http.get(this.baseGetURL+itemsList7+this.getUrlSuffix).pipe(catchError((err)=> {return of(undefined)})) 
  } 
  result=forkJoin([response0$,response1$,response2$,response3$,response4$,response5$,response6$, response7$]);
  return result
}
  
  searchItem(label, lang) {
   let headers = new HttpHeaders().set('Access-Control-Allow-Origin','*')
    let params = new HttpParams().set('action',"wbsearchentities")
    .set('search',label)
    .set('language',lang)
    .set('uselang',lang)
    .set('limit',"50")
    .set('format',"json")
      .set('origin', "*");
   return this.http.get('https://database.factgrid.de//w/api.php', {
   //  headers: headers, 
     params: params})   
 // return this.http.get('https://www.wikidata.org//w/api.php', {params: params}) 
  }

  searchProperty(label, lang) {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
    let params = new HttpParams().set('action', "wbsearchentities")
      .set('type', "property")
      .set('search', label)
      .set('language', lang)
      .set('uselang', lang)
      .set('limit', "50")
      .set('format', "json")
      .set('origin', "*");
    return this.http.get('https://database.factgrid.de//w/api.php', {
      //  headers: headers, 
      params: params
    })
    // return this.http.get('https://www.wikidata.org//w/api.php', {params: params}) 
  }

  //searchItem(label:string, lang:string): Observable<any> { return this.http.get(this.searchUrl(label,lang))} ;

  getAsk(re): Observable<any> {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
    let params = new HttpParams()
   //  .set('format', "json")
      .set('origin', "*");
    let u = this.http.get(re).pipe(catchError((err) => { return of(false) }));
    return u
  }

  getItem(re): Observable<any> {
    return this.http.get(re).pipe(catchError((err) => { return of(undefined) }));
  };

 // selectUrl(re:string) {  let selectUrl = re => re == "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=&format=json&origin=*"? 
 //    "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=Q10599&format=json&origin=*" : re  };

  
  getList(sparql: string): Observable<any> {
    let u;
    let v;
    if(sparql !== undefined){
    let params = new HttpParams()
       .set('format',"json")
      u= this.http.get(sparql, {
        params: params}).pipe(catchError((err)=> {return of([])})) 
    }
   // u.pipe(tap(v => console.log(v)));
      return u
   }

  downLoadList(sparql:string) {   
    let u
      if (sparql !==undefined){
        let headers = new HttpHeaders().set("Accept", "text/csv")
        let params = new HttpParams()
   //     .set('format', 'csv')
          u= this.http.get(sparql, { headers: headers,
           responseType:'arraybuffer',
            params: params})
   //         .pipe(catchError((err)=> {return of(undefined)}))
            .subscribe(response => this.downLoadFile(response) ) ;    
           }
          }

    getTranscript(id) {
            let headers = new HttpHeaders().set('Access-Control-Allow-Origin','*')
             let params = new HttpParams().set('page',id)
             .set('format',"json")
             .set('prop',"text")
             .set('formatversion',2)
             .set('origin',"*")
            return this.http.get('https://database.factgrid.de//w/api.php?action=parse', {
          //    headers: headers, 
              params: params})   
          // return this.http.get('https://www.wikidata.org//w/api.php', {params: params}) 
  }

  getStat() {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
    let params = new HttpParams()
      .set('format', "json")
      .set('meta', "siteinfo")
      .set('siprop', "statistics")
      .set('origin', "*")
    return this.http.get('https://database.factgrid.de//w/api.php?action=query', {
      //    headers: headers, 
      params: params
    })
    // return this.http.get('https://www.wikidata.org//w/api.php', {params: params}) 
  }
         


 // selectUrl(url:string) {  let selectUrl = re => re == "https://www.wikidata.org/w/api.php?action=wbgetentities&ids=&format=json&origin=*"? 
  //   "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=Q42&format=json&origin=*" : re  };
 
  newSparqlAddress(address) { 
    const newPrefix = "https://database.factgrid.de/sparql?query=";
    const oldPrefix = "https://database.factgrid.de/query/#";
    address = address.replace(oldPrefix, newPrefix);
    }

  downLoadFile(data: any){
    const blob = new Blob([data], { type: 'text/csv'});
    saveAs(blob, "list.csv");
  }

  getExpandedUrl(url){
    if (url !==undefined){
      let headers = new HttpHeaders().set("Accept", "text/csv");
      let params = new HttpParams();
      let  u= this.http.get(url, { headers: headers,
         responseType:'arraybuffer',
          params: params})
 //         .pipe(catchError((err)=> {return of(undefined)}))
          .subscribe(response => this.downLoadFile(response) ) ;    
         }
        }


  getProjectList(re): Observable<any> {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
    let params = new HttpParams()
      //  .set('format', "json")
      .set('origin', "*");
    let u = this.http.get(re).pipe(catchError((err) => { return of(false) }));
    return u
  }



  getBackList(item, lang) : Observable<any> {  
    item="Item:"+item;
    const prefix = `https://database.factgrid.de/w/api.php?`
    const params1 = new HttpParams()
       .set('action',"query")
       .set('format',"json")
       .set('prop',"entityterms")
       .set('generator', "backlinks")
       .set('formatversion',"2")
       .set('wbetterms',"label")
       .set('gbllimit',"500")
       .set('gblnamespace',"120")
       .set('uselang',lang)  //uselang
       .set('gbltitle',item)
       .set('origin',"*")

       const params2 = new HttpParams()
       .set('action',"query")
       .set('format',"json")
       .set('prop',"entityterms")
       .set('generator', "backlinks")
       .set('formatversion',"2")
       .set('wbetterms',"label")
       .set('gbllimit',"500")
       .set('gblnamespace',"120")
       .set('uselang',"en")  //english
       .set('gbltitle',item)
       .set('origin',"*")

      let u1= this.http.get(prefix, {
        params: params1}).pipe(catchError((err)=> {return of(undefined)})); 
      let u2= this.http.get(prefix, {
          params: params2}).pipe(catchError((err)=> {return of(undefined)})) ;
      let result=forkJoin([u1,u2])
      return result
      }

      getBackList2(item) : Observable<any> {  
        item="Item:"+item;
        const prefix = `https://database.factgrid.de/w/api.php?`
        const params = new HttpParams()
           .set('action',"query")
           .set('format',"json")
           .set('prop',"entityterms")
           .set('generator', "backlinks")
           .set('formatversion',"2")
           .set('wbetterms',"label")
           .set('gbllimit',"500")
           .set('gblnamespace',"120")
           .set('uselang',"en")  //uselang
           .set('gbltitle',item)
           .set('origin',"*")
          let u= this.http.get(prefix, {
            params: params}).pipe(catchError((err)=> {return of(undefined)})) 
          return u
          }

}

