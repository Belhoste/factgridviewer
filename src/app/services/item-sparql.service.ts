import { Injectable, inject } from '@angular/core';
import { map, switchMap, startWith, of, forkJoin } from 'rxjs';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';
import { SelectedLangService } from '../selected-lang.service';

@Injectable({
  providedIn: 'root'
})
export class ItemSparqlService {
  private request = inject(RequestService);
  private lang = inject(SelectedLangService);

  Q12Test: Observable<boolean>;
  Q37073Test: Observable<boolean>;
  Q456376Test: Observable<boolean>;
  Q24499Test: Observable<boolean>;
  Q77457Test: Observable<boolean>;
  GOVTest: Observable<boolean>;
  Q8Test: Observable<boolean>;
  Q16200Test: Observable<boolean>;
  Q140759Test: Observable<boolean>;
  masterTest: Observable<boolean>;
  listTest: Observable<boolean>;
  setTest: Observable<boolean>;
  superclassTest: Observable<boolean>;
  superclass1Test: Observable<boolean>;

  sparql0$: Observable<any>;
  sparql1$: Observable<any>;
  sparql2$: Observable<any>;
  sparql3$: Observable<any>;
  sparql4$: Observable<any[]>;

  langService: string = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22" + this.lang.selectedLang + "%22%2C%22en%22.%20%7D%0A%7D%0A";

  // Batching ASK queries for main boolean tests
  batchAskQuery(itemId: string): Observable<any> {
    const sparql = `
    SELECT ?isLocality ?isOrganisation ?isCareer ?isFamilyName ?isAddress ?isFactGridClass ?isList ?isSet ?isSuperclass ?isSuperclass1 ?isGOV WHERE {
      BIND(EXISTS { wd:${itemId} wdt:P2/wdt:P3* wd:Q8 } AS ?isLocality)
      BIND(EXISTS { wd:${itemId} wdt:P2/wdt:P3* wd:Q12 } AS ?isOrganisation)
      BIND(EXISTS { wd:${itemId} wdt:P2/wdt:P3* wd:Q37073 } AS ?isCareer)
      BIND(EXISTS { wd:${itemId} wdt:P2/wdt:P3* wd:Q24499 } AS ?isFamilyName)
      BIND(EXISTS { wd:${itemId} wdt:P2/wdt:P3* wd:Q16200 } AS ?isAddress)
      BIND(EXISTS { wd:${itemId} wdt:P2/wdt:P3* wd:Q77457 } AS ?isFactGridClass)
      BIND(EXISTS { wd:${itemId} wdt:P1132 wd:Q945294 } AS ?isList)
      BIND(EXISTS { wd:${itemId} wdt:P1132 wd:Q945258 } AS ?isSet)
      BIND(EXISTS { wd:${itemId} wdt:P1132 wd:Q945280 } AS ?isSuperclass)
      BIND(EXISTS { wd:${itemId} wdt:P1132 wd:Q960698 } AS ?isSuperclass1)
      BIND(EXISTS { wd:${itemId} wdt:P1075 wd:Q780657 } AS ?isGOV)
    }
  `;
    const url = this.newSparqlAdress("https://database.factgrid.de/query/#" + encodeURIComponent(sparql));
    return this.request.getList(url).pipe(
      map(res => {
        const b = res.results.bindings[0];
        return {
          Q8Test: b?.isLocality?.value === "true",
          Q12Test: b?.isOrganisation?.value === "true",
          Q37073Test: b?.isCareer?.value === "true",
          Q24499Test: b?.isFamilyName?.value === "true",
          Q16200Test: b?.isAddress?.value === "true",
          Q77457Test: b?.isFactGridClass?.value === "true",
          listTest: b?.isList?.value === "true",
          setTest: b?.isSet?.value === "true",
          superclassTest: b?.isSuperclass?.value === "true",
          superclass1Test: b?.isSuperclass1?.value === "true",
          GOVTest: b?.isGOV?.value === "true"
        };
      })
    );
  }


  itemSparql(item): Observable<any> {
    return this.batchAskQuery(item.id).pipe(
      switchMap(batch => {
        this.Q8Test = of(batch.Q8Test);
        this.Q12Test = of(batch.Q12Test);
        this.Q37073Test = of(batch.Q37073Test);
        this.Q24499Test = of(batch.Q24499Test);
        this.Q16200Test = of(batch.Q16200Test);
        this.Q77457Test = of(batch.Q77457Test);
        this.listTest = of(batch.listTest);
        this.setTest = of(batch.setTest);
        this.superclassTest = of(batch.superclassTest);
        this.superclass1Test = of(batch.superclass1Test);
        this.GOVTest = of(batch.GOVTest);

        this.Q456376Test = this.activitiesTest(item)[0];
        this.Q140759Test = this.activitiesTest(item)[1];
        this.masterTest = this.activitiesTest(item)[2];

        this.sparql0$ = forkJoin([this.superclassTest, this.superclass1Test])
          .pipe(switchMap(([test1, test2]) => this.selectSparql0(test1, test2, item)), startWith([undefined, undefined]));

        this.sparql1$ = forkJoin([this.Q12Test, this.Q37073Test, this.Q456376Test, this.Q24499Test, this.Q16200Test, this.Q77457Test])
          .pipe(switchMap(([test1, test2, test3, test4, test5, test6]) => this.selectSparql1(test1, test2, test3, test4, test5, test6, item)), startWith([undefined, undefined]));

        this.sparql2$ = forkJoin([this.Q140759Test, this.Q16200Test])
          .pipe(switchMap(([test1, test2]) => this.selectSparql2(test1, test2, item)), startWith([undefined, undefined]));

        this.sparql3$ = forkJoin([this.masterTest, this.listTest, this.setTest, this.Q16200Test])
          .pipe(switchMap(([test1, test2, test3, test4]) => this.selectSparql3(test1, test2, test3, test4, item)), startWith([undefined, undefined]));

        this.sparql4$ = forkJoin([this.Q8Test, this.GOVTest])
          .pipe(switchMap(([test1, test2]) => this.selectSparql4(test1, test2, item)), startWith([undefined, undefined]));

        item.sparql = forkJoin([this.sparql0$, this.sparql1$, this.sparql2$, this.sparql3$, this.sparql4$]);
        return of(item);
      })
    );
  }


  // Méthodes utilitaires pour générer des requêtes ASK dynamiques
  keywordTest(a, type) {
    return "https://database.factgrid.de/query/#ASK%7Bwd%3A" + a + "%20wdt%3AP1132%20wd%3A" + type + "%7D";
  }

  classTest(a, type) {
    return "https://database.factgrid.de/query/#ASK%20%7Bwd%3A" + a + "%20wdt%3AP3%2a%20wd%3A" + type + ".%7D%0A%20";
  }

  subclassTest(a, type) {
    return "https://database.factgrid.de/query/#ASK%20%7Bwd%3A" + a + "%20wdt%3AP2%2Fwdt%3AP3%2a%20wd%3A" + type + ".%7D%0A%20";
  }

  masterSubclassTest(a) {
    return "https://database.factgrid.de/query/#ASK%7BVALUES%3Fsuperclass%7Bwd%3AQ456376%20wd%3AQ140743%20wd%3AQ36765%7Dwd%3A"
      + a + "%20wdt%3AP3%2a%3Fsuperclass.%7D";
  }

  Q12TestGet(a) {
    return "https://database.factgrid.de/query/#ASK%20%7Bwd%3A" + a + "%20wdt%3AP2%2Fwdt%3AP3%2a%20wd%3AQ12.%20FILTER%28NOT%20EXISTS%20%7Bwd%3A" + a + "%20wdt%3AP2%2Fwdt%3AP3%2a%20wd%3AQ8%7D%29%20%7D%0A%20";
  }

  selectSparql0(test1, test2, item) {
    let result: Observable<any[]>;
    if (test1 === true) {
      result = this.superclassSparql(test1, item);
    }
    else {
      if (test2 === true) {
        result = this.superclass1Sparql(test2, item);
      }
      else result = this.noResult();
    }
    return result
  }

  selectSparql1(test1, test2, test3, test4, test5, test6, item) {
    let result: Observable<any[]>;
    if (test5 === true) {
      result = this.Q16200Sparql(item);
    }
    else {
      if (test1 === true) {
        result = this.Q12Sparql(test1, item);
      }
      else {
        if (test2 === true) {
          result = this.Q37073Sparql(test2, item)
        }
        else {
          if (test3 === true) {
            result = this.Q456376Sparql(test3, item)
          }
          else {
            if (test4 === true) {
              result = this.Q24499Sparql(item);
            }
            else {
              if (test6 === true) {
                result = this.Q77457Sparql(item);
              }
              else result = this.noResult()
            }
          }
        }
      }
    }
    return result
  }

  selectSparql2(test1, test2, item) {
    let result: Observable<any[]>;
    if (test1 === true) {
      result = this.Q140759Sparql(test1, item);
    } else {
      if (test2 === true) {
        result = this.noResult();
      }
      else result = this.noResult();
    }
    return result
  }

  selectSparql3(test1, test2, test3, test4, item) {
    let result: Observable<any[]>;
    if (test1 === true) {
      result = this.masterSparql(test1, item);
    }
    else {
      if (test2 === true) {
        result = this.listSparql(test2, item);
      }
      else {
        if (test3 === true) {
          result = this.setSparql(test3, item);
        }
        else {
          if (test4 === true) {
            result = this.currentAddress(item);
          }
          else result = this.noResult();
        }
      }
    }
    return result
  }

  selectSparql4(test1, test2, item) {
    let result: Observable<any[]>;
    if (test1 === true) {
      result = this.Q8Sparql(item);
    }
    else {
      if (test2 === true) {
        result = this.GOVSparql(item);
      }
      else result = this.noResult();
    }
    return result
  }

  Q24499TestGet(item) {
    let test: boolean = false;
    if (
      item &&
      item.claims &&
      item.claims.P2 &&
      Array.isArray(item.claims.P2) &&
      item.claims.P2[0] &&
      item.claims.P2[0].mainsnak &&
      item.claims.P2[0].mainsnak.datavalue &&
      item.claims.P2[0].mainsnak.datavalue.value &&
      item.claims.P2[0].mainsnak.datavalue.value.id === "Q24499"
    ) {
      test = true;
    }
    return of(test);
  }

  Q8TestGet(item) {
    let test: boolean = false;
    if (item.claims.P2[0].mainsnak.datavalue.value.id == "Q8") {
      test = true;
    };
    return of(test)
  }

  Q16200TestGet(item) {
    let test: boolean = false;
    if (
      item &&
      item.claims &&
      item.claims.P2 &&
      Array.isArray(item.claims.P2) &&
      item.claims.P2[0] &&
      item.claims.P2[0].mainsnak &&
      item.claims.P2[0].mainsnak.datavalue &&
      item.claims.P2[0].mainsnak.datavalue.value &&
      item.claims.P2[0].mainsnak.datavalue.value.id === "Q16200"
    ) {
      test = true;
    }
    return of(test);
  }

  Q172192TestGet(item) {
    let test: boolean = false;
    if (item.claims.P2[0].mainsnak.datavalue.value.id == "Q172192") {
      test = true;
    };
    return of(test)
  }

  Q77457TestGet(item) {
    let test: boolean = false;
    if (
      item &&
      item.claims &&
      item.claims.P2 &&
      Array.isArray(item.claims.P2) &&
      item.claims.P2[0] &&
      item.claims.P2[0].mainsnak &&
      item.claims.P2[0].mainsnak.datavalue &&
      item.claims.P2[0].mainsnak.datavalue.value &&
      item.claims.P2[0].mainsnak.datavalue.value.id === "Q77457"
    ) {
      test = true;
    }
    return of(test)
  }

  GOVTestGet(item) {
    let test: boolean = false;
    if (
      item &&
      item.claims &&
      item.claims.P2 &&
      Array.isArray(item.claims.P2) &&
      item.claims.P2[0] &&
      item.claims.P2[0].mainsnak &&
      item.claims.P2[0].mainsnak.datavalue &&
      item.claims.P2[0].mainsnak.datavalue.value &&
      item.claims.P2[0].mainsnak.datavalue.value.id === "Q780657"
    ) {
      test = true;
    }
    return of(test);
  }

  Q12Sparql(test, res) {
    if (test === true) {
      let prefix1 = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3FfLabel%20WHERE%20%7B%20%0A%7B%20%3Fitem%20p%3AP165%20%5Bps%3AP165%20%3Factivity%3B%20pq%3AP267%20wd%3A"
      let prefix2 = "%5D%20.%20%7D%20UNION%20%20%20%7B%20%3Fitem%20wdt%3AP91%20wd%3A";
      let prefix3 = "%20.%7D%20UNION%20%7B%20%3Fu%20%5Ewdt%3AP165%20%3Fitem%3B%20%20wdt%3AP267%20wd%3A";
      let prefix4 = "%20%7D%20UNION%20%7B%20%3Fitem%20wdt%3AP315%20wd%3A";
      let suffix = "%20.%20%7D%0A%3Fitem%20wdt%3AP247%20%3Ff";
      let u = prefix1 + res.id + prefix2 + res.id + prefix3 + res.id + prefix4 + res.id + suffix + this.langService + "ORDER%20BY%20%3FfLabel";
      return this.sparqlQuery(u).pipe(map(res => ["Q12", this.listFromSparql(res).results.bindings]))
    }
  }

  Q37073Sparql(test, res) {
    if (test === true) {
      let prefix1 = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3FfamilyNameLabel%20WHERE%20%7B%20%0A%20%7B%20%3Fitem%20wdt%3AP165%2Fwdt%3AP3%2a%20wd%3A";
      let prefix2 = "%20%7D%20UNION%20%7B%20%3Fitem%20p%3AP165%20%5Bpq%3AP122%20wd%3A";
      let suffix = "%5D%20%7D%0A%20%20%20%20%20%20%20OPTIONAL%20%7B%20%3Fitem%20wdt%3AP247%20%3FfamilyName%20%7D";
      let u = prefix1 + res.id + prefix2 + res.id + suffix +
        this.langService
        + "ORDER%20by%20%3FfamilyNameLabel%20%0ALIMIT%2010000";
      return this.sparqlQuery(u).pipe(map(res => ["Q37073", this.listFromSparql(res).results.bindings]))
    }
  }

  Q456376Sparql(test, res) {
    if (test === true) {
      let prefix1 = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3Fyear%0AWHERE%20%7B%20%3Fitem%20%28wdt%3AP21%20%7C%20wdt%3AP552%29%20wd%3A"
      let prefix2 = "%20.%0A%20%20OPTIONAL%20%7B%3Fitem%20wdt%3AP222%20%3Fdate%20.%20BIND%28YEAR%28%3Fdate%29%20AS%20%3Fyear%29%20.%7D%0A%20";
      let u = prefix1 + res.id + prefix2 + this.langService + "ORDER%20BY%20%3Fyear";
      return this.sparqlQuery(u).pipe(map(res => ["Q456376", this.listFromSparql(res).results.bindings]))
    }
  }

  Q140759Sparql(test, res) {
    if (test === true) {
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3FfamilyNameLabel%20WHERE%20%7B%20%3Fitem%20wdt%3AP247%20%3FfamilyName%3B%20wdt%3AP512%20wd%3A"
      let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FfamilyNameLabel";
      return this.sparqlQuery(u).pipe(map(res => ["Q140759", this.listFromSparql(res).results.bindings]));
    }
  }

  masterSparql(test, res) {
    if (test === true) {
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3FfamilyNameLabel%20WHERE%20%7B%20%3Fitem%20wdt%3AP247%20%3FfamilyName%3B%20wdt%3AP161%20wd%3A"
      let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FfamilyNameLabel";
      return this.sparqlQuery(u).pipe(map(res => ["master", this.listFromSparql(res).results.bindings]));
    }
  }

  listSparql(test, res) {
    if (test === true) {
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP2%2Fwdt%3AP3%2a%20%7C%20wdt%3AP626%2Fwdt%3AP3%2a%20%7C%20wdt%3AP1007%2Fwdt%3AP3%2a%20wd%3A"
      let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FitemLabel";
      return this.sparqlQuery(u).pipe(map(res => ["Q172192", this.listFromSparql(res).results.bindings]))
    }
  }

  setSparql(test, res) {
    if (test === true) {
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP8%20%7C%20wdt%3AP319%20%20wd%3A"
      let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FitemLabel";
      return this.sparqlQuery(u).pipe(map(res => ["Q945258", this.listFromSparql(res).results.bindings]))
    }
  }

  superclassSparql(test, res) {
    if (test === true) {
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP3%2B%20wd%3A"
      let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FitemLabel";
      return this.sparqlQuery(u).pipe(map(res => ["Q945280", this.listFromSparql(res).results.bindings]))
    }
  }

  superclass1Sparql(test, res) {
    if (test === true) {
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP3%20wd%3A"
      let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FitemLabel";
      return this.sparqlQuery(u).pipe(map(res => ["Q960698", this.listFromSparql(res).results.bindings]))
    }
  }

  Q24499Sparql(res) {
    let u = "";
    let suffix = "ORDER%20by%20%3FitemLabel";
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%20WHERE%20%7B%20%20%3Fitem%20wdt%3AP247%2Fwdt%3AP3%2a%20wd%3A";
    u = prefix + res.id + this.langService + suffix;
    return this.sparqlQuery(u).pipe(map(res => ["Q24499", this.listFromSparql(res).results.bindings]));
  }

  Q8Sparql(res) {
    let u = "";
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%0A%7B%3Fitem%20wdt%3AP2%2Fwdt%3AP3%2a%20wd%3AQ160381%3B%20wdt%3AP83%20%7C%20wdt%3AP47%20wd%3A";
    let suffix = "ORDER%20by%20%3FitemLabel";
    u = prefix + res.id + this.langService + suffix;
    return this.sparqlQuery(u).pipe(map(res => ["Q8", this.listFromSparql(res).results.bindings]));
  }

  GOVSparql(res) {
    let u = "";
    let prefix = "https://database.factgrid.de/query/#SELECT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%20WHERE%20%7B%3Fitem%20wdt%3AP1075%20wd%3A"
    let suffix = "ORDER%20by%20%3FitemLabel";
    u = prefix + res.id + this.langService + suffix;
    return this.sparqlQuery(u).pipe(map(res => ["GOV", this.listFromSparql(res).results.bindings]));
  }

  Q16200Sparql(res) {
    let u = "";
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%0AWHERE%20%0A%7B%0A%20%20%3Fitem%20wdt%3AP208%20wd%3A"
    u = prefix + res.id + this.langService + "ORDER%20BY%20%3FfitemLabel";
    return this.sparqlQuery(u).pipe(map(res => ["Q16200", this.listFromSparql(res).results.bindings]));
  }

  Q77457Sparql(res) {
    let prefix = "https://database.factgrid.de/query/#SELECT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP8%20wd%3A"
    let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FitemLabel";
    let v = this.sparqlQuery(u).pipe(map(res => ["Q77457", this.listFromSparql(res).results.bindings]));
    return v
  }

  sparqlQuery(sparql) {
    sparql = this.newSparqlAdress(sparql);
    return this.request.getList(sparql).pipe(
      map(res => this.listFromSparql(res)));
  }

  sparqlAsk(sparql) {
    let selectedSparql = this.newSparqlAdress(sparql);
    return this.request.getAsk(selectedSparql).pipe(map(res => res.boolean));
  }

  currentAddress(item) {
    let lat;
    let lon;
    let sparqlResult: Observable<any> | undefined;
    if (item.claims.P48) {
      lat = item.claims.P48[0].mainsnak.datavalue.value.latitude;
      lon = item.claims.P48[0].mainsnak.datavalue.value.longitude;
      let u = "https://nominatim.openstreetmap.org/reverse?lat=" + lat + "&lon=" + lon + "&format=json";
      sparqlResult = this.request.getItem(u);
      return sparqlResult
    }
  }

  activitiesTest(item) {
    let Q456376Tests = [];
    let Q140759Tests = []
    let masterTests = [];
    let b: boolean = false;
    if (item &&
      item.claims &&
      item.claims.P165 &&
      Array.isArray(item.claims.P165) &&
      item.claims.P165.length > 0) {
      for (let i = 0; i < item.claims.P165.length; i++) {
        Q456376Tests.push(this.sparqlAsk(this.classTest(item.claims.P165[i].mainsnak.datavalue.value.id, "Q456376")).pipe(startWith(false)));
        Q140759Tests.push(this.sparqlAsk(this.classTest(item.claims.P165[i].mainsnak.datavalue.value.id, "Q140759")).pipe(startWith(false)));
        masterTests.push(this.sparqlAsk(this.masterSubclassTest(item.claims.P165[i].mainsnak.datavalue.value.id)).pipe(startWith(false)));
      }
    } else { Q456376Tests.push(of(b)); Q140759Tests.push(of(b)), masterTests.push(of(b)) };
    let u0 = forkJoin(Q456376Tests).pipe(switchMap(res => this.testArrayGet(res)));
    let u1 = forkJoin(Q140759Tests).pipe(switchMap(res => this.testArrayGet(res)));
    let u2 = forkJoin(masterTests).pipe(switchMap(res => this.testArrayGet(res)));
    return [u0, u1, u2]
  }

  testArrayGet(res) {
    let result
    for (let i = 0; i < res.length; i++) {
      if (res[i] === true) {
        result = res[i];
        break
      } else { result = false }
    }
    return of(result)
  }

  newSparqlAdress(address: string): string {
    const newPrefix = "https://database.factgrid.de/sparql?query=";
    let oldPrefix = "https://database.factgrid.de/query/#";
    if (address.includes('embed.html')) { oldPrefix = "https://database.factgrid.de/query/embed.html#" };
    if (address !== undefined) address = address.replace(oldPrefix, newPrefix);
    return address
  }

  listFromSparql(res) {
    if (res !== undefined) {
      if (res.results !== undefined) {
        for (let i = 0; i < res.results.bindings.length; i++) {
          res.results.bindings[i]["item"].id = res.results.bindings[i]["item"].value.replace(
            "https://database.factgrid.de/entity/", "");
          res.results.bindings[i]["item"].id.startsWith("P") ? res.results.bindings[i]["item"].entity = "property" : res.results.bindings[i]["item"].entity = "item";
        }
      };
    }
    else {
      res = { head: { vars: ['item', 'itemLabel', 'itemDescription', 'fLabel', 'activityLabel'] }, results: { bindings: [] } }
    };
    return res
  }

  noResult() {
    let u = "";
    return this.sparqlQuery(u);
  }
}
