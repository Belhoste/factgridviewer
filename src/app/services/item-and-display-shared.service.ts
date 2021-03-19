import { Injectable } from '@angular/core';
import { Observable, Subject, concat, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemAndDisplaySharedService {

  item: Observable<any>;

  private subject:Subject<Object> = new Subject();

  constructor() {this.item = this.subject.asObservable(); console.log(this.item) }

   ;

}
