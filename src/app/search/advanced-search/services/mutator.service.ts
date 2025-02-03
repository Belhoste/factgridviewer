import { Injectable, inject } from '@angular/core';
import { Variable, LITERALS, MUTATOR } from './../variable';
import { DataService } from '../services/data.service'

@Injectable({
  providedIn: 'root'
})
export class MutatorService {
  constructor() { }

 // protected mutator: Variable[][] = MUTATOR;

  //  transposeMutator = this.transpose(MUTATOR);

  private data = inject(DataService);


  mutator(itemType) {
    console.log(itemType);
    let mutator = [];
    this.data.mutator$.subscribe(res => { mutator = res });
    let transposeMutator = this.transpose(mutator); // transpose of the  mutator
  //  let i = itemType[0]; // statement name (in the formArray "statements"); 
    let selectedItemType = itemType[1]; // name of the selectedItemType
    let selectedItemId = itemType[3]; // id of the selected ItemTuype
    let selectedCol = itemType[2];  // column of the selectedItemType in the mutator
    let array = transposeMutator[selectedCol]; // list of names for the selected itemType ;
    let permutedArray = this.circularPermutation(array);
    transposeMutator[selectedCol] = permutedArray; // permuted list of names for the selected itemType
    let newMutator = this.transpose(transposeMutator);  // mutator after the selection of the itemType;
   // this.data.updateMutator(newMutator);
    console.log(newMutator);
    return newMutator

  }


 transpose(arr) {
    let newArr = arr[0].map((_, colIndex) => arr.map(row => row[colIndex]));
    return newArr
  }

  circularPermutation(arr) {
    let newArr = [];
    let u = arr[0];
    for (let i = 0; i < arr.length - 1; i++) { newArr[i] = arr[i + 1] };
    newArr[5] = u;
    return newArr
 }


  circularInversePermutation(arr) {  // useless
    let u = arr[5];
    for (let i = 0; i < arr.length - 1; i++) { arr[5 - i] = arr[5 - (i + 1)] }
    arr[0] = u;
    return arr;
  }


}

