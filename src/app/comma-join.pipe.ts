import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaJoin'
})
export class CommaJoinPipe implements PipeTransform {

  transform(input: Array<any>, sep = ', '):string { if (input !==undefined) 
    return input.join(sep);
  }

}
