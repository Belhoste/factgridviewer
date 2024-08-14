import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SparqlInterceptor implements HttpInterceptor {

    private cache = new Map<string, HttpResponse<any>>();

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.includes("biblio") === true || request.url.includes("statistics") === true ){console.log(request.url);

    const cachedResponse = this.cache.get(request.url);

    if (cachedResponse){
    return of(cachedResponse);

    }

    return next.handle(request).pipe(
        tap((response) => {
        if (response instanceof HttpResponse){
          this.cache.set(request.url, response);
        }
      })
      );
    }
    
    return next.handle(request);
    }

}
