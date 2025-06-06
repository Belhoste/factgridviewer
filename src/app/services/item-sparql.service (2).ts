//nouvel item-sparql.service.ts à tester

import { Injectable, inject } from '@angular/core';
import { map, switchMap, startWith } from 'rxjs/operators';
import { Observable, of, forkJoin, combineLatest } from 'rxjs';
import { RequestService } from './request.service';
import { SelectedLangService } from '../selected-lang.service';

@Injectable({
  providedIn: 'root'
})
export class ItemSparqlService {
  private request = inject(RequestService);
  private lang = inject(SelectedLangService);

  private langService: string = `%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22${this.lang.selectedLang}%22%2C%22en%22.%20%7D%0A%7D%0A`;

  itemSparql(item) {
    const tests = this.initializeTests(item);
    const sparqlObservables = this.initializeSparqlObservables(tests, item);

    item.sparql = forkJoin(sparqlObservables);
  }

  private initializeTests(item) {
    const [Q456376Test, Q140759Test, masterTest] = this.activitiesTest(item);

    return {
      Q16200Test: this.Q16200TestGet(item),
      Q24499Test: this.Q24499TestGet(item),
      Q77457Test: this.Q77457TestGet(item),
      Q8Test: this.sparqlAsk(this.subclassTest(item.id, "Q8")).pipe(startWith(false)),
      Q12Test: this.sparqlAsk(this.subclassTest(item.id, "Q12")).pipe(startWith(false)),
      Q37073Test: this.sparqlAsk(this.subclassTest(item.id, "Q37073")).pipe(startWith(false)),
      Q456376Test,
      Q140759Test,
      masterTest,
      listTest: this.sparqlAsk(this.keywordTest(item.id, "Q945294")).pipe(startWith(false)),
      setTest: this.sparqlAsk(this.keywordTest(item.id, "Q945258")).pipe(startWith(false)),
      superclassTest: this.sparqlAsk(this.keywordTest(item.id, "Q945280")).pipe(startWith(false)),
      superclass1Test: this.sparqlAsk(this.keywordTest(item.id, "Q960698")).pipe(startWith(false))
    };
  }


  private initializeSparqlObservables(tests, item) {
    return {
      sparql0$: combineLatest([tests.superclassTest, tests.superclass1Test]).pipe(
        switchMap(([test1, test2]): Observable<any> => this.selectSparql0(test1, test2, item) ),
        startWith([undefined, undefined])
      ),
      sparql1$: combineLatest([tests.Q12Test, tests.Q37073Test, tests.Q456376Test, tests.Q24499Test, tests.Q16200Test, tests.Q77457Test]).pipe(
        switchMap(([test1, test2, test3, test4, test5, test6]) => this.selectSparql1(test1, test2, test3, test4, test5, test6, item)),
        startWith([undefined, undefined])
      ),
      sparql2$: combineLatest([tests.Q140759Test, tests.Q8Test, tests.Q16200Test]).pipe(
        switchMap(([test1, test2, test3]) => this.selectSparql2(test1, test2, test3, item)),
        startWith([undefined, undefined])
      ),
      sparql3$: combineLatest([tests.masterTest, tests.listTest, tests.setTest, tests.Q16200Test]).pipe(
        switchMap(([test1, test2, test3, test4]) => this.selectSparql3(test1, test2, test3, test4, item)),
        startWith([undefined, undefined])
      ),
      sparql4$: combineLatest([tests.Q8Test]).pipe(
        switchMap(([test1]) => this.selectSparql4(test1, item)),
        startWith([undefined, undefined])
      )
    };
  }

  private selectSparql0(test1, test2, item) {
    if (test1) return this.superclassSparql(test1, item);
    if (test2) return this.superclass1Sparql(test2, item);
    return this.noResult();
  }

  private selectSparql1(test1, test2, test3, test4, test5, test6, item) {
    if (test5) return this.Q16200Sparql(item);
    if (test1) return this.Q12Sparql(test1, item);
    if (test2) return this.Q37073Sparql(test2, item);
    if (test3) return this.Q456376Sparql(test3, item);
    if (test4) return this.Q24499Sparql(item);
    if (test6) return this.Q77457Sparql(item);
    return this.noResult();
  }

  private selectSparql2(test1, test2, test3, item) {
    if (test1) return this.Q140759Sparql(test1, item);
    if (test2) return this.Q8Sparql(item);
    if (test3) return this.currentAddress(item);
    return this.noResult();
  }

  private selectSparql3(test1, test2, test3, test4, item) {
    if (test1) return this.masterSparql(test1, item);
    if (test2) return this.listSparql(test2, item);
    if (test3) return this.setSparql(test3, item);
    if (test4) return this.currentAddress(item);
    return this.noResult();
  }

  private selectSparql4(test1, item) {
    if (test1) return this.Q8Sparql(item);
    return this.noResult();
  }

  /**  tests **/

  Q24499TestGet(item) {
    return of(item.claims.P2[0].mainsnak.datavalue.value.id === "Q24499");
  }

  Q8TestGet(item) { // deprecated
    return of(item.claims.P2[0].mainsnak.datavalue.value.id === "Q8");
  }

  Q16200TestGet(item) {
    return of(item.claims.P2[0].mainsnak.datavalue.value.id === "Q16200");
  }

  Q172192TestGet(item) { // deprecated
    return of(item.claims.P2[0].mainsnak.datavalue.value.id === "Q172192");
  }

  Q77457TestGet(item) {
    return of(item.claims.P2[0].mainsnak.datavalue.value.id === "Q77457");
  }

  /********************************* queries with specific tests  **********************************************************/

  createSparqlQuery(prefixes: string[], res: any, suffix: string) {
    const query = prefixes.map(prefix => prefix + res.id).join('') + suffix + this.langService;
    return this.sparqlQuery(query).pipe(map(res => [res.id, this.listFromSparql(res).results.bindings]));
  }

  Q12Sparql(test, res) {
    if (test) {
      const prefixes = [
        "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3FfLabel%20WHERE%20%7B%20%0A%7B%20%3Fitem%20p%3AP165%20%5Bps%3AP165%20%3Factivity%3B%20pq%3AP267%20wd%3A",
        "%5D%20.%20%7D%20UNION%20%20%20%7B%20%3Fitem%20wdt%3AP91%20wd%3A",
        "%20.%7D%20UNION%20%7B%20%3Fu%20%5Ewdt%3AP165%20%3Fitem%3B%20%20wdt%3AP267%20wd%3A",
        "%20%7D%20UNION%20%7B%20%3Fitem%20wdt%3AP315%20wd%3A"
      ];
      const suffix = "%20.%20%7D%0A%3Fitem%20wdt%3AP247%20%3FfORDER%20BY%20%3FfLabel";
      return this.createSparqlQuery(prefixes, res, suffix);
    }
  }

  Q37073Sparql(test, res) {
    if (test) {
      const prefixes = [
        "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3FfamilyNameLabel%20WHERE%20%7B%20%0A%20%7B%20%3Fitem%20wdt%3AP165%2Fwdt%3AP3%2a%20wd%3A",
        "%20%7D%20UNION%20%7B%20%3Fitem%20p%3AP165%20%5Bpq%3AP122%20wd%3A"
      ];
      const suffix = "%5D%20%7D%0A%20%20%20%20%20%20%20OPTIONAL%20%7B%20%3Fitem%20wdt%3AP247%20%3FfamilyName%20%7DORDER%20by%20%3FfamilyNameLabel%20%0ALIMIT%2010000";
      return this.createSparqlQuery(prefixes, res, suffix);
    }
  }

  Q456376Sparql(test, res) {
    if (test) {
      const prefixes = [
        "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3Fyear%0AWHERE%20%7B%20%3Fitem%20%28wdt%3AP21%20%7C%20wdt%3AP552%29%20wd%3A",
        "%20.%0A%20%20OPTIONAL%20%7B%3Fitem%20wdt%3AP222%20%3Fdate%20.%20BIND%28YEAR%28%3Fdate%29%20AS%20%3Fyear%29%20.%7D%0A%20"
      ];
      const suffix = "ORDER%20BY%20%3Fyear";
      return this.createSparqlQuery(prefixes, res, suffix);
    }
  }

  Q140759Sparql(test, res) {
    if (test) {
      const prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3FfamilyNameLabel%20WHERE%20%7B%20%3Fitem%20wdt%3AP247%20%3FfamilyName%3B%20wdt%3AP512%20wd%3A";
      const suffix = "ORDER%20BY%20%3FfamilyNameLabel";
      return this.createSparqlQuery([prefix], res, suffix);
    }
  }

  masterSparql(test, res) {
    if (test) {
      const prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3FfamilyNameLabel%20WHERE%20%7B%20%3Fitem%20wdt%3AP247%20%3FfamilyName%3B%20wdt%3AP161%20wd%3A";
      const suffix = "ORDER%20BY%20%3FfamilyNameLabel";
      return this.createSparqlQuery([prefix], res, suffix);
    }
  }

  listSparql(test, res) {
    if (test) {
      const prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP2%2Fwdt%3AP3%2a%20%7C%20wdt%3AP626%2Fwdt%3AP3%2a%20%7C%20wdt%3AP1007%2Fwdt%3AP3%2a%20wd%3A";
      const suffix = "ORDER%20BY%20%3FitemLabel";
      return this.createSparqlQuery([prefix], res, suffix);
    }
  }

  setSparql(test, res) {
    if (test) {
      const prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP8%20%7C%20wdt%3AP319%20%20wd%3A";
      const suffix = "ORDER%20BY%20%3FitemLabel";
      return this.createSparqlQuery([prefix], res, suffix);
    }
  }

  superclassSparql(test, res) {
    if (test) {
      const prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP3%2B%20wd%3A";
      const suffix = "ORDER%20BY%20%3FitemLabel";
      return this.createSparqlQuery([prefix], res, suffix);
    }
  }

  superclass1Sparql(test, res) {
    if (test) {
      const prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP3%20wd%3A";
      const suffix = "ORDER%20BY%20%3FitemLabel";
      return this.createSparqlQuery([prefix], res, suffix);
    }
  }

  Q24499Sparql(res) {
    const prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%20WHERE%20%7B%20%20%3Fitem%20wdt%3AP247%2Fwdt%3AP3%2a%20wd%3A";
    const suffix = "ORDER%20by%20%3FitemLabel";
    return this.createSparqlQuery([prefix], res, suffix);
  }

  Q8Sparql(res) {
    const prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%0A%7B%3Fitem%20wdt%3AP2%2Fwdt%3AP3%2a%20wd%3AQ160381%3B%20wdt%3AP83%20%7C%20wdt%3AP47%20wd%3A";
    const suffix = "ORDER%20by%20%3FitemLabel";
    return this.createSparqlQuery([prefix], res, suffix);
  }

  Q16200Sparql(res) {
    const prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%0AWHERE%20%0A%7B%0A%20%20%3Fitem%20wdt%3AP208%20wd%3A";
    const suffix = "ORDER%20BY%20%3FfitemLabel";
    return this.createSparqlQuery([prefix], res, suffix);
  }

  Q77457Sparql(res) {
    const prefix = "https://database.factgrid.de/query/#SELECT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP8%20wd%3A";
    const suffix = "ORDER%20BY%20%3FitemLabel";
    return this.createSparqlQuery([prefix], res, suffix);
  }

  /*----------------------------------------- special queries --------------------------------------------*/

  sparqlQuery(sparql) {
    sparql = this.newSparqlAdress(sparql);
    return this.request.getList(sparql).pipe(map(res => this.listFromSparql(res)));
  }

  sparqlAsk(sparql) {
    const selectedSparql = this.newSparqlAdress(sparql);
    return this.request.getAsk(selectedSparql).pipe(map(res => res.boolean));
  }

  currentAddress(item) {
    if (item.claims.P48) {
      const lat = item.claims.P48[0].mainsnak.datavalue.value.latitude;
      const lon = item.claims.P48[0].mainsnak.datavalue.value.longitude;
      const u = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
      return this.request.getItem(u);
    }
  }

  /*-------------------------------------- Tests ----------------------------------------------------*/

  subclassTest(a, type) {
    return `https://database.factgrid.de/query/#ASK%20%7Bwd%3A${a}%20wdt%3AP2%2Fwdt%3AP3%2a%20wd%3A${type}.%7D%0A%20`;
  }

  classTest(a, type) {
    return `https://database.factgrid.de/query/#ASK%20%7Bwd%3A${a}%20wdt%3AP3%2a%20wd%3A${type}.%7D%0A%20`;
  }

  keywordTest(a, type) {
    return `https://database.factgrid.de/query/#ASK%7Bwd%3A${a}%20wdt%3AP1132%20wd%3A${type}%7D`;
  }

  masterSubclassTest(a) {
    return `https://database.factgrid.de/query/#ASK%7BVALUES%3Fsuperclass%7Bwd%3AQ456376%20wd%3AQ140743%20wd%3AQ36765%7Dwd%3A${a}%20wdt%3AP3%2a%3Fsuperclass.%7D`;
  }

  activitiesTest(item) {   // extract boolean test out of the array of activities for the right activity, used in 
    let Q456376Tests = [];  // test for activity of creator
    let Q140759Tests = []; // test for activity of health care practitioner 
    let masterTests = [];  // test for activity of master (professor, painter, physician)
    let b: boolean = false; // in case item.claims.P165 is undefined;

    if (item.claims.P165 !== undefined) {   // to fill the arrays
      for (let i = 0; i < item.claims.P165.length; i++) {
        const id = item.claims.P165[i].mainsnak.datavalue.value.id;
        Q456376Tests.push(this.sparqlAsk(this.classTest(id, "Q456376")).pipe(startWith(false))); //array of boolean tests for the activity of creator (Q456376)
        Q140759Tests.push(this.sparqlAsk(this.classTest(id, "Q140759")).pipe(startWith(false))); //array of boolean tests for the activity of health care practitioner (Q140759)
        masterTests.push(this.sparqlAsk(this.masterSubclassTest(id)).pipe(startWith(false))); //array of boolean tests for the activity of master
      }
    } else {
      Q456376Tests.push(of(b));
      Q140759Tests.push(of(b));
      masterTests.push(of(b));
    }

    const u0 = forkJoin(Q456376Tests).pipe(map(res => res.some(test => test === true)));  //boolean test for Q456376 (creators)
    const u1 = forkJoin(Q140759Tests).pipe(map(res => res.some(test => test === true)));  //boolean test for Q140759 (health care practitioner);
    const u2 = forkJoin(masterTests).pipe(map(res => res.some(test => test === true)));  //boolean test for master

    return [u0, u1, u2];
  }


  /*----------------------------------------------- handlers --------------------------------------------------------*/


  newSparqlAdress(address: string): string {
    const newPrefix = "https://database.factgrid.de/sparql?query=";
    const oldPrefix = address.includes('embed.html') ? "https://database.factgrid.de/query/embed.html#" : "https://database.factgrid.de/query/#";
    return address.replace(oldPrefix, newPrefix);
  }

  listFromSparql(res) {
    if (res?.results?.bindings) {
      res.results.bindings.forEach(binding => {
        binding.item.id = binding.item.value.replace("https://database.factgrid.de/entity/", "");
        binding.item.entity = binding.item.id.startsWith("P") ? "property" : "item";
      });
    } else {
      res = { head: { vars: ['item', 'itemLabel', 'itemDescription', 'fLabel', 'activityLabel'] }, results: { bindings: [] } };
    }
    return res;
  }

  noResult() {
    return this.sparqlQuery("");
  }
