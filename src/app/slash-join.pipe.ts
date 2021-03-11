import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slashJoin'
})

export class SlashJoinPipe implements PipeTransform {
  transform(input: Array<any>, sep = '/'):string { if (input !==undefined)
  { console.log(input);
    return input.join(sep) };
  }

}
