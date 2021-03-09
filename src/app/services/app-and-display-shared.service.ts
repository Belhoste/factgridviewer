//shared service used to pass the clicked item from the app component to the display component as an observable 
import { Injectable } from '@angular/core';
import { Observable, Subject, concat, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppAndDisplaySharedService {

  data: Observable<any>
  list: Observable<any>
  backList: Observable<any>
 // clickedItem:Observable<any>;
 // selectedItem:Observable<any>
  private subject:Subject<Object> = new Subject();
  private subject2:Subject<Object> = new Subject();
  private subject3:Subject<Object> = new Subject();
 // private sharedService:Subject<Object> = new Subject();
 // private subject3:Subject<Object> = new Subject();
  

  //set item(value:Observable<any>) { this.sharedService.next(value)};
 // get item(): Observable<any> { return this.sharedService.asObservable()};

  constructor() { this.data = this.subject.asObservable(), this.list = this.subject2.asObservable(), this.backList = this.subject3.asObservable()
 }

}
