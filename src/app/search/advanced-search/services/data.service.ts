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

  mutator$: Observable<Variable[][]> = this.mutator.asObservable();

  mutatorForItemValue: BehaviorSubject<Variable[][]> = new BehaviorSubject(MUTATOR);

  mutatorForItemValue$: Observable<Variable[][]> = this.mutator.asObservable();

  mutatorForNextStatement:BehaviorSubject<Variable[][]> = new BehaviorSubject(MUTATOR);

  mutatorForNextStatement$:Observable<Variable[][]> = this.mutatorForNextStatement.asObservable();


  updateMutator(mutator: Variable[][]) { this.mutator.next(mutator) };

  updateMutatorForItemValue(mutator: Variable[][]) { this.mutatorForItemValue.next(mutator) }

  updateMutatorForNextStatement(mutator: Variable[][]) { this.mutatorForNextStatement.next(mutator) };

  //  itemTypes: BehaviorSubject<Variable[][]> = new BehaviorSubject([ITEMTYPES]);

  //  $currentItemTypes: Observable<Variable[][]> = this.itemTypes.asObservable();

  itemTypes: BehaviorSubject<Variable[]> = new BehaviorSubject(ITEMTYPES);

  itemTypes$:Observable<Variable[]> = this.itemTypes.asObservable();

  itemTypes1: BehaviorSubject<Variable[]> = new BehaviorSubject([]);

  itemTypes1$: Observable<Variable[]> = this.itemTypes1.asObservable();

  itemTypes2: BehaviorSubject<Variable[]> = new BehaviorSubject([]);

  itemTypes2$: Observable<Variable[]> = this.itemTypes2.asObservable();

  formerItemTypes: BehaviorSubject<Variable[][]> = new BehaviorSubject([ITEMTYPES]);

  formerItemTypes$: Observable<Variable[][]> = this.formerItemTypes.asObservable();

 

  lastItemTypes$(u$:Observable<Variable[][]>) {
    return u$.pipe(map(res => res[res.length - 1]))
  }


  updateItemTypes(item) { this.itemTypes.next(item) };

  updateItemTypes1(item) { this.itemTypes1.next(item) };

  updateItemTypes2(item) { this.itemTypes2.next(item) };

  updateFormerItemTypes(itemTypes) { this.formerItemTypes.next(itemTypes) };

  propertiesList:BehaviorSubject<any[]> = new BehaviorSubject([]);

  propertiesList$ = this.propertiesList.asObservable();

  updatePropertiesList(list) { this.propertiesList.next(list) }

  currentStatement: BehaviorSubject<number> = new BehaviorSubject(0);

  currentStatement$: Observable<number> = this.currentStatement.asObservable();

  updateCurrentStatement(i) { this.currentStatement.next(i) };

}
