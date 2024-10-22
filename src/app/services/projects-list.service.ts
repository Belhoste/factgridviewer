import { Injectable, inject } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { RequestService } from './request.service';
import { SelectedLangService } from '../selected-lang.service';


@Injectable({
  providedIn: 'root'
})
export class ProjectsListService {
  private request = inject(RequestService);
  private lang = inject(SelectedLangService);


  langService: string = "%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22" + this.lang.selectedLang + "%22%2C%22en%22.%20%7D%0A";

  projectsListBuilding(id) {
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20WHERE%20%7B";
    let suffix = "%3Fitem%20wdt%3AP2%20wd%3A";
    let suffix2 = ".%7D%0A";
    let u = this.newSparqlAddress(prefix + this.langService + suffix + id + suffix2);
    return this.request.getList(u).pipe(map(res => this.listFromSparql(res)));
  }

  listFromSparql(res) {
    if (res !== undefined) {
      if (res.results !== undefined) {
        let v = res.results.bindings;
        for (let i = 0; i < v.length; i++) {
          v[i]["item"].id = v[i]["item"].value.replace(
            "https://database.factgrid.de/entity/", "");
        };
   
      v.sort((a, b) => {
          if(a.itemLabel.value.toUpperCase()<b.itemLabel.value.toUpperCase()) { return -1; }
           if(b.itemLabel.value.toUpperCase()>b.itemLabel.value.toUpperCase()) { return 1; }
          return 0;
        });
  
      }
    }
    return res.results.bindings
  }

  newSparqlAddress(address: string): string {
    const newPrefix = "https://database.factgrid.de/sparql?query=";
    let oldPrefix = "https://database.factgrid.de/query/#";
    if (address.includes('embed.html')) { oldPrefix = "https://database.factgrid.de/query/embed.html#" };
    if (address !== undefined) address = address.replace(oldPrefix, newPrefix);
    return address
  }
}
