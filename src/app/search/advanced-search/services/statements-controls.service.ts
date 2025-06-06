import { Injectable } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule, FormGroup, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StatementsControlsService {

  constructor() { }

  itemType(statements: FormArray, i: number) {
    if (statements && statements.length > i) {
      return statements.at(i).get('value.itemType');
    }
    return null;
  }


  itemValue(statements, i: number) { return statements.at(i).get('value.itemValue') };

  propertyValues(statements, i: number) { return statements.at(i).get('properties') as FormControl };

  literalValue(statements, i: number) { return statements.at(i).get('value.literalValue') };

  literalString(statements, i: number) { return statements.at(i).get('value.literalString') };

  qualifiers(statements, i: number) { return statements.at(i).get('qualifiers') as FormArray };

  qualifierProperty(qualifiers, j: number) { return qualifiers.at(j).get('qualifierProperty') }

  qualifierValue(qualifiers, j) {  return qualifiers.at(j).controls["value"].get('qualifierValue') };

  qualifierLiteralValue(qualifiers, j) {  return qualifiers.at(j).controls["value"].get('qualifierLiteralValue') };

  qualifierLiteralString(qualifiers, j: number) { return qualifiers.at(j).controls["value"].get('qualifierLiteralString') };

  patchQualifierValue(value, qualifiers, j) { let control = this.qualifierValue(qualifiers, j); return control.patchValue("value") };

}  


