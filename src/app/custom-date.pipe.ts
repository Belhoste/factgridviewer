import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe} from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'customDate',
  pure: false
})
export class CustomDatePipe implements PipeTransform { //transform FactGrid-date format into ISO-date format in order to use Angular Date Pipe
  
  // constructor(private translateService:TranslateService, private datePipe:DatePipe ) {super('customDate')}

  currentLang= localStorage['selectedLang'];
  
  transform(value: any): any {
    if (value !== undefined){
      if (value.slice(value.length - 13) !== "-00T00:00:00Z" ||
      value.slice(value.length - 15) !== "01-01T00:00:00Z"){
         value = value.substring(1);
        }
  }
 //   return super.transform(value, pattern ='mediumDate', this.translateService.currentLang)
  
    return value
    ;
  }

}