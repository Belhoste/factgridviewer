import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ParisDatabaseService {

  constructor() { }

   // seed data
    private seed = ['jaw', 'jar', 'toy', 'troy', 'hip', 'hop'];
    private data$ = new BehaviorSubject(this.seed);

    // expose Observable
    data = this.data$.asObservable();

  // this.data.subscribe(res =>console.log(res));

    // enable adding, and emitting fresh dataset
    addData(x: string) {
        const newData = this.data$.getValue().concat(x);
        this.data$.next(newData);
    }

}
