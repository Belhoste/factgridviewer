import { Injectable, signal, computed } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap, combineLatest } from 'rxjs';
import { Variable, ITEMTYPES, LITERALS, MUTATOR } from './../variable';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  mutator:BehaviorSubject<Variable[][]> = new BehaviorSubject(MUTATOR);

  mutator$:Observable<Variable[][]> = this.mutator.asObservable();

  mutatorForItemValue:BehaviorSubject<Variable[][]> = new BehaviorSubject(MUTATOR);

  $mutatorForItemValue:Observable<Variable[][]> = this.mutatorForItemValue.asObservable();


  updateMutator(mutator:Variable[][]) { this.mutator.next(mutator) };

  updateMutatorForItemValue(mutator: Variable[][]) { this.mutatorForItemValue.next(mutator) };

  //  itemTypes: BehaviorSubject<Variable[][]> = new BehaviorSubject([ITEMTYPES]);

  //  $currentItemTypes: Observable<Variable[][]> = this.itemTypes.asObservable();

  subjectOptions: BehaviorSubject<Variable[]> = new BehaviorSubject(ITEMTYPES);

  subjectOptions$: Observable<Variable[]> = this.subjectOptions.asObservable();

  updateSujectOptions(item) { this.subjectOptions.next(item) };


  objectOptions: BehaviorSubject<Variable[]> = new BehaviorSubject([]);

  objectOptions$: Observable<Variable[]> = this.objectOptions.asObservable();

  updateObjectOptions(item) { this.objectOptions.next(item) };


  newOptions: BehaviorSubject<Variable[]> = new BehaviorSubject([]);

  newOptions$: Observable<Variable[]> = this.newOptions.asObservable();

  updateNewOptions(item) { this.newOptions.next(item) };


  updateFormerItemTypes(itemTypes) { this.formerItemTypes.next(itemTypes) };

  formerItemTypes: BehaviorSubject<Variable[][]> = new BehaviorSubject([ITEMTYPES]);

  formerItemTypes$: Observable<Variable[][]> = this.formerItemTypes.asObservable();

 

  lastItemTypes$(u$:Observable<Variable[][]>) {
    return u$.pipe(map(res => res[res.length - 1]))
  }


  

  propertiesList:BehaviorSubject<any[]> = new BehaviorSubject([]);

  $propertiesList = this.propertiesList.asObservable();

  updatePropertiesList(list) { this.propertiesList.next(list) }

  currentStatement: BehaviorSubject<number> = new BehaviorSubject(0);

  $currentStatement: Observable<number> = this.currentStatement.asObservable();

  updateCurrentStatement(i) { this.currentStatement.next(i) };

}
