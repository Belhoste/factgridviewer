import { Injectable } from '@angular/core';
import { RequestService } from './request.service'  ;
import { BackListDetailsService} from './back-list-details.service'


@Injectable({
  providedIn: 'root'
})
export class BackListService {

  constructor(private requestService:RequestService, private backListDetails:BackListDetailsService) { }

  linkedItems:any[]; //backList

  backList(item, lang) { 
    let u = this.requestService.getBackList(item, lang);
    return u
    }
    
  }
