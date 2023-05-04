import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'backListId',
    standalone: true
})
export class BackListIdPipe implements PipeTransform {

  transform(id: string): string {
    let newId = id.substring(5);
    return newId;
  }

}
