//shared service used to pass the clicked item from the app component to the display component as an observable 
import { Injectable } from '@angular/core';
import { Observable, Subject, concat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppAndDisplaySharedService {

  item: Observable<any>
  clickedItem:Observable<any>;
  selectedItem:Observable<any>
  private subject:Subject<Object> = new Subject();
  private subject2:Subject<Object> = new Subject();
  private subject3:Subject<Object> = new Subject();

  

  constructor() { this.item = this.subject.asObservable(), this.clickedItem = this.subject2.asObservable(), this.selectedItem = this.subject3.asObservable(), this.item = concat(this.item, this.clickedItem) }

}
