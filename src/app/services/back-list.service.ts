import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Injectable } from '@angular/core';
import { RequestService } from './request.service'  ;
import { map, tap } from 'rxjs/operators';
import { BackListDetailsService} from './back-list-details.service';

@Injectable({
  providedIn: 'root'
})
export class BackListService {

  constructor(private requestService:RequestService, private backListDetails:BackListDetailsService) { }

  backList(item) { 
    let list:any[];
    let u = this.requestService.getBackList(item).pipe(
    map(res=> {if(res.query ==! undefined) {this.backListDetails.setBackList(res.query.pages)}}))
    return u
    }
}
