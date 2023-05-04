import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'changeUndefinedItem',
    standalone: true
})
export class ChangeUndefinedItemPipe implements PipeTransform {

  transform(value: any): any {
    if (value === undefined){value ==="?"}
    console.log(value);
    return value;
  }

}
