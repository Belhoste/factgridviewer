import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//    console.log(req.url.includes("https://kurzelinks.de"));
//    if (req.url.includes("https://kurzelinks.de")===false){console.log(req.url)};
    return next.handle(req);
    }

}
