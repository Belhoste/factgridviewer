import { Injectable } from '@angular/core';
import { RequestService } from './request.service'  ;

@Injectable({
  providedIn: 'root'
})
export class BackListService {

  constructor(private requestService:RequestService) { }

  backList(item:string) { 
    let list = this.requestService.getBackList(item).subscribe(re=>console.log(re))
    return list
    }
}
