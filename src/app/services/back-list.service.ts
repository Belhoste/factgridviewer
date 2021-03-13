import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Injectable } from '@angular/core';
import { RequestService } from './request.service'  ;
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BackListService {

  constructor(private requestService:RequestService) { }

  backList(item, lang) { 
    let u = this.requestService.getBackList(item, lang)
    return u
    }
}
