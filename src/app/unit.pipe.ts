import { Pipe, PipeTransform, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Pipe({
    name: 'unit',
    standalone: true,
})
export class UnitPipe implements PipeTransform {
  private http = inject(HttpClient);


  
  unit:any = null;

  transform(value: string): any {
    let lang:string = localStorage['selectedLang'];
    let unit = "Unit: "
    if (lang === "de") { unit = "Einheit: " };
    if (lang === "fr") { unit = "Unité: " };
    if (lang === "es") { unit = "Unidad: " };
    if (lang === "hu") { unit = "Egység: " };
    if (lang === "it") { unit = "Unità: " };
    value=value.replace('https://database.factgrid.de/entity/','');
    let params = new HttpParams().set('action',"wbgetentities")
    .set('languages',lang)
    .set('props','labels')
    .set('ids',value)
    .set('format',"json")
    .set('origin',"*");
  let response= this.http.get('https://database.factgrid.de//w/api.php', { params: params}).
  pipe(
    map(res=>unit + Object.values(Object.values(Object.values(Object.values(Object.values(res)[0])[0])[2])[0])[1]))
  return response
  }

}
