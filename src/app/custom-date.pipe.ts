import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe} from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe extends DatePipe implements PipeTransform { //transform FactGrid-date format into ISO-date format in order to use Angular Date Pipe
  transform(value: any): any {
    if (value !== undefined)
    value = value.substring(1);
    return super.transform(value);
    ;
  }

}
