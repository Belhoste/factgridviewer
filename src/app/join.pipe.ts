import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'join',
    standalone: true
})
export class JoinPipe implements PipeTransform {
  transform(input: Array<any>, sep = ' | '):string { if (input !==undefined)
  { return input.join(sep) };
  }

}
