import { Injectable, inject } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { RequestService } from './request.service';
import { SelectedLangService } from '../selected-lang.service';


@Injectable({
  providedIn: 'root'
})
export class PropertiesListService {
  private request = inject(RequestService);
  private lang = inject(SelectedLangService);


  langService: string = "%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22" + this.lang.selectedLang + "%22%2C%22en%22.%20%7D%0A";


  propertiesListBuilding(id) {
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FpropertyType%20WHERE%20%7B";
    let prefix2 = "VALUES%20%3Fproperties%20%7B%20wd%3A";
    let suffix = "%20wd%3AQ1089730%7D%20%3Fitem%20wdt%3AP8%20%3Fproperties%3B%20wikibase%3ApropertyType%20%3FpropertyType%20MINUS%20%7B%20%3Fproperty%20wikibase%3ApropertyType%20wikibase%3AUrl%20%7D%20MINUS%20%7B%20%3Fitem%20wikibase%3ApropertyType%20wikibase%3AExternalId%20%7D%20MINUS%20%7B%20%3Fitem%20wikibase%3ApropertyType%20wikibase%3AUrl%20%7D%20MINUS%20%7B%20%3Fitem%20wikibase%3ApropertyType%20wikibase%3AGlobeCoordinate%20%7D%20MINUS%20%7B%20%3Fitem%20wikibase%3ApropertyType%20wikibase%3AGeoShape%20%7D%20MINUS%20%7B%20%3Fitem%20wikibase%3ApropertyType%20wikibase%3ACommonsMedia%20%7D%20%7D%20ORDER%20BY%20%3FitemLabel%0A";
    let address = prefix + this.langService + prefix2 + id + suffix;
    console.log(address);
    let u = this.newSparqlAddress(address);
    console.log(u);
    return this.request.getList(u).pipe(map(res => this.transformListFromSparql(res)));
  }

  propertiesList2Building(id) {
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20WHERE%20%7B";
    let suffix = "%3Fitem%20wdt%3AP2%20wd%3A";
    let suffix2 = ".%7D%0A";
    console.log(prefix + this.langService + suffix + id + suffix2);
    let u = this.newSparqlAddress(prefix + this.langService + suffix + id + suffix2);
    return this.request.getList(u).pipe(map(res => this.listFromSparql(res)));
  }

  get qualifierPropertiesListBuilding() {
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FpropertyType%20%20WHERE%20%7B%20"
    let suffix = "%20VALUES%20%3Fqualifier%20%7B%20wd%3AQ514317%20wd%3AQ21403%20%7D%0A%20%3Fitem%20wikibase%3ApropertyType%20%3FpropertyType%3B%0A%20%20%20%20%20%20%20%20%20%20%20wdt%3AP8%20%3Fqualifier.%0A%7D%0AORDER%20BY%20%3FitemLabel";
    let v: any[];
    let u = this.newSparqlAddress(prefix + this.langService + suffix);
    //  this.request.getList(u).pipe(map(res => this.listFromSparql(res)), map(res => this.changeList(res))).subscribe(res => console.log(res));
    return this.request.getList(u).pipe(map(res => this.listFromSparql(res)), map(res => this.transformListFromSparql(res)));
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
          if (a.itemLabel.value.toUpperCase() < b.itemLabel.value.toUpperCase()) { return -1; }
          if (b.itemLabel.value.toUpperCase() > b.itemLabel.value.toUpperCase()) { return 1; }
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

  deepNatureOf() {
    let u = "Instance of (deep search)"
    if (this.lang.selectedLang === "de") { u = "Ist ein(e) (vertiefte Suche)" };
    if (this.lang.selectedLang === "fr") { u = "Nature de l'élément (recherche approfondie)" };
    if (this.lang.selectedLang === "es") { u = "Instancia de (investigación en profundidad)" };
    if (this.lang.selectedLang === "it") { u = "È (ricerca approfondita)" };
    return u
  }

  changeList(data) {
    if (data !== undefined) {
      for (let i = 0; i < data.length; i++) {
        let type = this.removeSubstring(data[i]["propertyType"].value, "http://wikiba.se/ontology#");
        data[i]["itemLabel"].label = data[i]["itemLabel"].value + " (" + type + ")"
      };
    }
    return data
  }

  transformListFromSparql(res) {
    if (res !== undefined && res.results !== undefined) {
      let v = res.results.bindings;
      return v.map(item => {
        const value = item.itemLabel.value;
        const type = item.propertyType.value.replace("http://wikiba.se/ontology#", "");
        return {
          value: value,
          id: item.item.value.replace("https://database.factgrid.de/entity/", ""),
          type: type,
          label: `${value} (${type})` // Ajouter la propriété label
        };
      }).sort((a, b) => {
        if (a.value.toUpperCase() < b.value.toUpperCase()) { return -1; }
        if (a.value.toUpperCase() > b.value.toUpperCase()) { return 1; }
        return 0;
      });
    }
    return [];
  }


 removeSubstring(str, substring) {
  const regex = new RegExp(substring, 'g');
  return str.replace(regex, '');
}
}

