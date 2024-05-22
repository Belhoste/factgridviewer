import { Injectable } from '@angular/core';
import { map, takeWhile, tap, switchMap, take, startWith, mergeMap, defaultIfEmpty } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject, forkJoin, Subscription, merge, mergeAll, combineLatest, concatAll, iif, of, toArray } from 'rxjs';
import { RequestService } from './request.service';
import { SelectedLangService } from '../selected-lang.service';

@Injectable({
  providedIn: 'root'
})

export class ItemSparqlService {

  Q12Test: Observable<boolean>; // test subclasses of organisation
  Q37073Test: Observable<boolean>; // test subclasses of career statement
  Q456376Test: Observable<boolean>;  // test subclasses of creator
  Q24499Test: Observable<boolean>; // test adresses
  Q8Test: Observable<boolean>; // test subclasses of locality
  Q16200Test: Observable<boolean>; // test addresses
  Q140759Test: Observable<boolean>; // test health practitioners
  masterTest: Observable<boolean>; //test masters
  listTest: Observable<boolean>; // test list
  setTest: Observable<boolean>; // test set

  sparql$: Observable<any[]>;
  sparql: any[];
  sparql0$: Observable<any>;    // for component sparql0
  sparql0: any[];
  sparql1$: Observable<any>;    // for component sparql1
  sparql1: any[];
  sparql2$: Observable<any>;    // for component sparql2
  sparql2: any[];
  constructor(private request: RequestService, private lang: SelectedLangService) { }

  langService: string = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22" + this.lang.selectedLang + "%22%2C%22en%22.%20%7D%0A%7D%0A";

  itemSparql(item) {  // get a list depending of the type of the item

    let a: boolean = false;
    this.Q16200Test = this.Q16200TestGet(item);  //boolean test for addresses
    this.Q24499Test = this.Q24499TestGet(item);  // boolean test for family names
    this.Q8Test = this.sparqlAsk(this.subclassTest(item.claims.P2[0].mainsnak.datavalue.value.id, "Q8")).pipe(startWith(false));  // boolean test for Q8 (locality)
    this.Q12Test = this.sparqlAsk(this.subclassTest(item.claims.P2[0].mainsnak.datavalue.value.id, "Q12")).pipe(startWith(false));  // boolean test for Q12 (organisation)
    this.Q37073Test = this.sparqlAsk(this.subclassTest(item.claims.P2[0].mainsnak.datavalue.value.id, "Q37073")).pipe(startWith(false)); // boolean test for Q37073 (career statemnent)
    this.Q456376Test = this.activitiesTest(item)[0]; //boolean test for Q456376 (creators)
    this.Q140759Test = this.activitiesTest(item)[1]; // boolean test for Q140759 (health practitioners)
    this.masterTest = this.activitiesTest(item)[2]; // boolean test for masters
    this.listTest = this.sparqlAsk(this.classTest(item.id, "Q172192")).pipe(startWith(false));  // boolean test for item as a list (Q172192)
    this.setTest = this.sparqlAsk(this.partOfTest(item.id, "Q945258")).pipe(startWith(false));  //booleean test for item as a set (Q945258)

    //console.log(this.partOfTest(item.id, "Q945258"));
    this.setTest.subscribe(res => console.log(res));
    this.listTest.subscribe(res => console.log(res));


    this.sparql0$ = forkJoin([this.Q12Test, this.Q37073Test, this.Q456376Test, this.Q24499Test, this.Q16200Test, this.Q8Test])
      .pipe(switchMap(([res1, res2, res3, res4, res5, res6]) => this.selectSparql0(res1, res2, res3, res4, res5, res6, item)), startWith([undefined, undefined]));   //data for the component sparql0 : organisations, career statements, creators, family names, localities, addresses

    this.sparql1$ = forkJoin([this.Q140759Test]).pipe(switchMap(([res1]) => this.selectSparql1(res1, item)), startWith([undefined, undefined]));  // data for the component sparql1 : health pratictioners

    this.sparql2$ = forkJoin([this.masterTest, this.listTest, this.setTest]).pipe(switchMap(([res1, res2, res3]) => this.selectSparql2(res1, res2, res3, item)), startWith([undefined, undefined]));  // data for the component sparql2 : pupils and students  or class as a list

    item.sparql = forkJoin([this.sparql0$, this.sparql1$, this.sparql2$])
     // .subscribe(res => { this.sparql = res, item.sparql = this.sparql });
  }

  // on selectSparql0 and selectSparql1 list and set don't work.

  selectSparql0(test1, test2, test3, test4, test5, test6, item) {  // select the right result for the component sparql 0
    let result: Observable<any[]>;
    if (test1 === true) {              // organisations
      result = this.Q12Sparql(test1, item);
    }
    else {
      if (test2 === true) {       // career statements
        result = this.Q37073Sparql(test2, item)
      }
      else {
        if (test3 === true) {   // creators
          result = this.Q456376Sparql(test3, item)
        }
        else {
          if (test4 === true) {  // family names
            result = this.Q24499Sparql(item);
          }
          else {
            if (test5 === true) { // addresses; $: since adddress is a subclass of locality, test for address must be before test for locality
              result = this.Q16200Sparql(item);
            }
            else {
              if (test6 === true) {    // localities
                result = this.Q8Sparql(item);
              }
              else result = this.NoResult()
            }
          }
        }
      }
    }
    return result
  }

  selectSparql1(test1, item) {  // select the right result for sparql1
    let result: Observable<any[]>;
    if (test1 === true) {
      result = this.Q140759Sparql(test1, item);  // health practitioners
    } 
     else result = this.NoResult();
    return result
  }

  selectSparql2(test1, test2, test3,item) {  // select the right result for sparql2
    let result: Observable<any[]>;
    if (test1 === true) {
      result = this.masterSparql(test1, item);  // master
    }
    else {
      if (test2 === true) {
        result = this.listSparql(test2, item);  // list
      }
      else {
        if (test3 === true) {
          result = this.setSparql(test3, item);  // set
        }
        else result = this.NoResult();
      }
    }
    return result
  }


  /**  tests **/


  Q24499TestGet(item) {     // to get the boolean test for Q2449 (family name)
    let test: boolean = false;
    if (item.claims.P2[0].mainsnak.datavalue.value.id == "Q24499") {
      test = true;
    }
    return of(test)
  }

  Q8TestGet(item) {     // to get the boolean test for Q8 (locality); deprecated
    let test: boolean = false;
    if (item.claims.P2[0].mainsnak.datavalue.value.id == "Q8") {
      test = true;
    };
    return of(test)
  }

  Q16200TestGet(item) {     // to get the boolean test for Q16200 (address);
    let test: boolean = false;
    if (item.claims.P2[0].mainsnak.datavalue.value.id == "Q16200") {
      test = true;
    };
    return of(test)
  }

  Q172192TestGet(item) {
    let test: boolean = false;
    if (item.claims.P2[0].mainsnak.datavalue.value.id == "Q16200") {
      test = true;
    };
    return of(test)
  }

  /** tests and queries **/


  Q12Sparql(test, res) {  // query organisation
    if (test === true) {
      let prefix1 = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3FfLabel%20%3FactivityLabel%20WHERE%20%7B%20%0A%7B%20%3Fitem%20p%3AP165%20%5Bps%3AP165%20%3Factivity%3B%20pq%3AP267%20wd%3A"
      let prefix2 = "%5D%20.%20%7D%20UNION%20%20%20%7B%20%3Fitem%20wdt%3AP91%20wd%3A";
      let prefix3 = "%20.%7D%20UNION%20%7B%20%3Fu%20%5Ewdt%3AP165%20%3Fitem%3B%20%20wdt%3AP267%20wd%3A"
      let suffix = "%20%7D%0A%3Fitem%20wdt%3AP247%20%3Ff";
      let u = prefix1 + res.id + prefix2 + res.id + prefix3 + res.id + suffix + this.langService + "ORDER%20BY%20%3FfLabel";
      console.log(u);
      return this.sparqlQuery(u).pipe(map(res => ["Q12", this.listFromSparql(res).results.bindings]))
    }
  }

  Q37073Sparql(test, res) {  // query  career statement
    if (test === true) {
      let prefix1 = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3FfamilyNameLabel%0AWHERE%20%7B%20%3Fitem%20wdt%3AP165%2Fwdt%3AP3%2a%20wd%3A";
      let prefix2 = ".%0A%20%20%20%20%20%20%20OPTIONAL%20%7B%20%3Fitem%20wdt%3AP247%20%3FfamilyName%20%7D";
      let u = prefix1 + res.id + prefix2 + this.langService + "ORDER%20by%20%3FfamilyNameLabel%20%0ALIMIT%2010000";
      console.log(u);
      return this.sparqlQuery(u).pipe(map(res => ["Q37073", this.listFromSparql(res).results.bindings]))
    }
  }

  Q456376Sparql(test, res) {   // query creators
    if (test === true) {
      let prefix1 = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3Fyear%0AWHERE%20%7B%20%3Fitem%20%28wdt%3AP21%20%7C%20wdt%3AP552%29%20wd%3A"
      let prefix2 = "%20.%0A%20%20OPTIONAL%20%7B%3Fitem%20wdt%3AP222%20%3Fdate%20.%20BIND%28YEAR%28%3Fdate%29%20AS%20%3Fyear%29%20.%7D%0A%20";
      let u = prefix1 + res.id + prefix2 + this.langService + "ORDER%20BY%20%3Fyear";
      return this.sparqlQuery(u).pipe(map(res => ["Q456376", this.listFromSparql(res).results.bindings]))
    }
  }

  Q140759Sparql(test, res) {  //  // query health practioners: the list of their patients
    if (test === true) {
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3FfamilyNameLabel%20WHERE%20%7B%20%3Fitem%20wdt%3AP247%20%3FfamilyName%3B%20wdt%3AP512%20wd%3A"
      let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FfamilyNameLabel";
      return this.sparqlQuery(u).pipe(map(res => ["Q140759", this.listFromSparql(res).results.bindings]));
    }
  }

  masterSparql(test, res) {  //  // query master: the list of their students and disciplines
    if (test === true) {
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3FfamilyNameLabel%20WHERE%20%7B%20%3Fitem%20wdt%3AP247%20%3FfamilyName%3B%20wdt%3AP161%20wd%3A"
      let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FfamilyNameLabel";
      return this.sparqlQuery(u).pipe(map(res => ["master", this.listFromSparql(res).results.bindings]));
    }
  }

  listSparql(test, res) {  //  // query list of class as list
    if (test === true) {
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP2%2Fwdt%3AP3%2a%20%7C%20wdt%3AP1007%2Fwdt%3AP3%2a%20wd%3A"
      let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FitemLabel";
      return this.sparqlQuery(u).pipe(map(res => ["Q172192", this.listFromSparql(res).results.bindings]))
    }
  }

  setSparql(test, res) {  // query parts of item as set
    console.log(test);
    if (test === true) {
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP8%20wd%3A"
      let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FitemLabel";
      console.log(u);
      return this.sparqlQuery(u).pipe(map(res => ["Q945258", this.listFromSparql(res).results.bindings]))
    }
  }

  /*** sparql queries ***/

  Q24499Sparql(res) {  // query family name Q24499
    let u = "";
    let suffix = "ORDER%20by%20%3FitemLabel";
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%20WHERE%20%7B%20%20%3Fitem%20wdt%3AP247%2Fwdt%3AP3%2a%20wd%3A";
    u = prefix + res.id + this.langService + suffix;
    return this.sparqlQuery(u).pipe(map(res => ["Q24499", this.listFromSparql(res).results.bindings]));
  }

  Q8Sparql(res) {  // query locality
    let u = "";
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%0A%7B%3Fitem%20wdt%3AP2%2Fwdt%3AP3%2a%20wd%3AQ160381%3B%20wdt%3AP83%20%7C%20wdt%3AP47%20wd%3A";
    let suffix = "ORDER%20by%20%3FitemLabel";
    u = prefix + res.id + this.langService + suffix;
    return this.sparqlQuery(u).pipe(map(res => ["Q8", this.listFromSparql(res).results.bindings]));
  }

  Q16200Sparql(res) { // query address
    let u = "";
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%0AWHERE%20%0A%7B%0A%20%20%3Fitem%20wdt%3AP208%20wd%3A"
    u = prefix + res.id + this.langService + "ORDER%20BY%20%3FfitemLabel";
    return this.sparqlQuery(u).pipe(map(res => ["Q16200", this.listFromSparql(res).results.bindings]));
  }

  natureOfsTest(item) {   // extract boolean test out of the array of nature of (P2) statement for the right nature of, used in 
    let listTests = [];  // test for a list
    let b: boolean = false; // in case item.claims.P2 is undefined;
    if (item.claims.P2 !== undefined) {   // to fill the array Q456376Tests
      //     for (let i = 0; i < item.claims.P2.length; i++) {
      listTests
        .push(this.sparqlAsk(this.classTest(item.id, "Q172192")).pipe(startWith(false))); //array of boolean tests for the activiy of creator (Q456376)
      //      }
    } else { listTests.push(of(b)) };
    let u0 = forkJoin(listTests).pipe(switchMap(res => this.testArrayGet(res)));  //boolean test for Q456376 (creators)
    //booelean test for master

    return [u0]
  }


  activitiesTest(item) {   // extract boolean test out of the array of activities for the right activity, used in 
    let Q456376Tests = [];  // test for activity of creator
    let Q140759Tests = [] // test for activity of health care practioner 
    let masterTests = [];  // test for activity of master (professor, painter, physician)
    let b: boolean = false; // in case item.claims.P165 is undefined;
    if (item.claims.P165 !== undefined) {   // to fill the array Q456376Tests
      for (let i = 0; i < item.claims.P165.length; i++) {
        Q456376Tests.push(this.sparqlAsk(this.subclassTest(item.claims.P165[i].mainsnak.datavalue.value.id, "Q456376")).pipe(startWith(false))); //array of boolean tests for the activiy of creator (Q456376)
        Q140759Tests.push(this.sparqlAsk(this.subclassTest(item.claims.P165[i].mainsnak.datavalue.value.id, "Q140759")).pipe(startWith(false))); //array of boolean tests for the activity of health care practitioner (Q140759)
        masterTests.push(this.sparqlAsk(this.masterSubclassTest(item.claims.P165[i].mainsnak.datavalue.value.id)).pipe(startWith(false))); //array of boolean tests for the activiy of master
      }
    } else { Q456376Tests.push(of(b)); masterTests.push(of(b)); masterTests.push(of(b)) };
    let u0 = forkJoin(Q456376Tests).pipe(switchMap(res => this.testArrayGet(res)));  //boolean test for Q456376 (creators)
    let u1 = forkJoin(Q140759Tests).pipe(switchMap(res => this.testArrayGet(res)));  //boolean test for Q140759 (health care practitioner);
    let u2 = forkJoin(masterTests).pipe(switchMap(res => this.testArrayGet(res)));  //booelean test for master

    return [u0, u1, u2]
  }

  testArrayGet(res) {


    // get the boolean test in the array of boolean tests
    let result
    for (let i = 0; i < res.length; i++) {
      if (res[i] === true) {
        result = res[i];
        break
      }
    }
    return of(result)
  }

  sparqlAsk(sparql) {    // sparql query for a boolean test;
   // console.log(sparql);
    let u = "";
    let sparqlResult: Observable<any> | undefined;
    let selectedSparql = this.newSparqlAdress(sparql);
    sparqlResult = this.request.getAsk(selectedSparql).pipe(map(res => res.boolean));
    return sparqlResult;
  }

  sparqlQuery(sparql) {    // sparql query to get a list to display : used in Q8Test(), etc...
    sparql = this.newSparqlAdress(sparql);
    return this.request.getList(sparql).pipe(
      map(res => this.listFromSparql(res)));
  }

  subclassTest(a, type) {  // to test to check whether the class of an item is the subclass of a given superclass (in the hierarchy of classes)
    let u = "https://database.factgrid.de/query/#ASK%20%7Bwd%3A" + a + "%20wdt%3AP3%2a%20wd%3A" + type + ".%7D%0A%20";
    return u
  }

  classTest(a, type) {  // to test to check whether  item is the subclass of a given superclass (in the hierarchy of classes) or of category OhdAB
    let u = "https://database.factgrid.de/query/#ASK%7Bwd%3A" + a + "%20wdt%3AP2%2Fwdt%3AP3%2a%20%7C%20wdt%3AP1007%2Fwdt%3AP3%2a%20wd%3A" + type + "%7D";
    return u
  }

  partOfTest(a, set) { // to check whether the item is a set with at least one part
    let u = "https://database.factgrid.de/query/#ASK%7Bwd%3A" + a + "%20%5Ewdt%3AP8%20%3Fitem%3Bwdt%3AP2%20wd%3A" + set + "%3B%7D";
    console.log(u);
    return u
  }

  masterSubclassTest(a) { // to test to check whether an item belongs to a subclass of painter/health care practioners/professors 
    let u = "https://database.factgrid.de/query/#ASK%7BVALUES%3Fsuperclass%7Bwd%3AQ456376%20wd%3AQ140743%20wd%3AQ36765%7Dwd%3A"
      + a + "%20wdt%3AP3%2a%3Fsuperclass.%7D";
    return u
  }

  newSparqlAdress(address: string): string {   // to create the right address for sparql query
    const newPrefix = "https://database.factgrid.de/sparql?query=";
    let oldPrefix = "https://database.factgrid.de/query/#";
    if (address.includes('embed.html')) { oldPrefix = "https://database.factgrid.de/query/embed.html#" };
    if (address !== undefined) address = address.replace(oldPrefix, newPrefix);
    return address
  }

  listFromSparql(res) {  // to transform the sparql response into a list to display (used in sparqlQuery())
    if (res !== undefined) {
      if (res.results !== undefined) {
        for (let i = 0; i < res.results.bindings.length; i++) {
          //      let itemDescription = { value: ""};
          //       if(res.results.bindings[i]["itemDescription"] === 0) {  res.results.bindings[i].itemDescription = itemDescription }
          //    res.results.bindings[i]["itemLabel"].item = res.results.bindings[i]["itemLabel"].value + ", " + res.results.bindings[i]["itemDescription"].value
          res.results.bindings[i]["item"].id = res.results.bindings[i]["item"].value.replace(
            "https://database.factgrid.de/entity/", "");
        }
      };
    }
    else {
      res = { head: { vars: ['item', 'itemLabel', 'itemDescription', 'fLabel', 'activityLabel'] }, results: { bindings: [] } }
    };
    return res
  }

  NoResult() {   // query in case there is no test
    let u = "";
    return this.sparqlQuery(u);
  }
}


