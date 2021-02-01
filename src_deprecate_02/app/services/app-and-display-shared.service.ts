//shared service used to pass the clicked item from the app component to the display component as an observable 
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppAndDisplaySharedService {

  item: Observable<any>;
  clickedItem:Observable<any>;
  private subject:Subject<Object> = new Subject();
  private subject2:Subject<Object> = new Subject();


  constructor() { this.item = this.subject.asObservable(), this.clickedItem = this.subject2.asObservable() }

}
