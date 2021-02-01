import { Injectable } from '@angular/core';
import { Observable, Subject, concat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplaySharedService {

  chosenItem: Observable<any>
  
  private subject:Subject<Object> = new Subject();
  

  constructor() { this.chosenItem = this.subject.asObservable()}
}
