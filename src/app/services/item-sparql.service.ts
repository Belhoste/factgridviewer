import { Injectable, inject } from '@angular/core';
import { map, takeWhile, tap, switchMap, take, startWith, mergeMap, defaultIfEmpty } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject, forkJoin, Subscription, merge, mergeAll, combineLatest, concatAll, iif, of, toArray } from 'rxjs';
import { RequestService } from './request.service';
import { SelectedLangService } from '../selected-lang.service';

@Injectable({
  providedIn: 'root'
})

export class ItemSparqlService {
  private request = inject(RequestService);
  private lang = inject(SelectedLangService);


  Q12Test: Observable<boolean>; // test subclasses of organisation
  Q37073Test: Observable<boolean>; // test subclasses of career statement
  Q456376Test: Observable<boolean>;  // test subclasses of creator
  Q24499Test: Observable<boolean>; // test adresses
  Q77457Test: Observable<boolean>; // test class of FactGrid properties
  GOVTest: Observable<boolean>; // test GOV
  Q8Test: Observable<boolean>; // test subclasses of locality
  Q16200Test: Observable<boolean>; // test addresses
  Q140759Test: Observable<boolean>; // test health practitioners
  masterTest: Observable<boolean>; //test masters
  listTest: Observable<boolean>; // test list
  setTest: Observable<boolean>; // test set
  superclassTest: Observable<boolean>; // test superclass
  superclass1Test: Observable<boolean>; // test superclass (1st-order subclasses)


  sparql0$: Observable<any>;    // for component sparql0
  sparql1$: Observable<any>;    // for component sparql1
  sparql2$: Observable<any>;
  sparql3$: Observable<any>;
  sparql4$: Observable<any[]>;
 

  langService: string = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22" + this.lang.selectedLang + "%22%2C%22en%22.%20%7D%0A%7D%0A";

  itemSparql(item) {  // get a list depending of the type of the item
    let a: boolean = false;
    this.Q16200Test = this.Q16200TestGet(item);  //boolean test for addresses
    this.Q24499Test = this.Q24499TestGet(item);  // boolean test for family names
    this.Q77457Test = this.Q77457TestGet(item);  // boolean test for classes of FactGrid properties
    this.GOVTest = this.GOVTestGet(item); //boolean test for GOV
    //   this.Q8Test = this.sparqlAsk(this.subclassTest(item.claims.P2[0].mainsnak.datavalue.value.id, "Q8")).pipe(startWith(false), tap(res => console.log(res)));  // boolean test for Q8 (locality)
    //   this.Q12Test = this.sparqlAsk(this.subclassTest(item.claims.P2[0].mainsnak.datavalue.value.id, "Q12")).pipe(startWith(false), tap(res => console.log(res)));  // boolean test for Q12 (organisation)
    //   this.Q37073Test = this.sparqlAsk(this.subclassTest(item.claims.P2[0].mainsnak.datavalue.value.id, "Q37073")).pipe(startWith(false), tap(res => console.log(res))); // boolean test for Q37073 (career statemnent)

    this.Q8Test = this.sparqlAsk(this.subclassTest(item.id, "Q8")).pipe(startWith(false));  // boolean test for Q8 (locality)
 //   this.Q12Test = this.sparqlAsk(this.subclassTest(item.id, "Q12")).pipe(startWith(false));// boolean test for Q12 (organisation)


    this.Q12Test = this.sparqlAsk(this.Q12TestGet(item.id)).pipe(startWith(false));// boolean test for Q12 (organisation)

    this.Q37073Test = this.sparqlAsk(this.subclassTest(item.id, "Q37073")).pipe(startWith(false)); // boolean test for Q37073 (career statemnent)

    this.Q456376Test = this.activitiesTest(item)[0]; //boolean test for Q456376 (creators)
    this.Q140759Test = this.activitiesTest(item)[1]; // boolean test for Q140759 (health practitioners)
    this.masterTest = this.activitiesTest(item)[2]; // boolean test for masters
    this.listTest = this.sparqlAsk(this.keywordTest(item.id, "Q945294")).pipe(startWith(false));  // boolean test for producing a FactGrid list (Q945294)
    this.setTest = this.sparqlAsk(this.keywordTest(item.id, "Q945258")).pipe(startWith(false));  //booleean test for item as a set (Q945258)
    this.superclassTest = this.sparqlAsk(this.keywordTest(item.id, "Q945280")).pipe(startWith(false)); // boolean test for item as a superclass (Q945280)
    this.superclass1Test = this.sparqlAsk(this.keywordTest(item.id, "Q960698")).pipe(startWith(false)); // boolean test for item as a superclass (1st-order subclasses) (Q945280)

    this.sparql0$ = forkJoin([this.superclassTest, this.superclass1Test]).pipe(switchMap(([test1, test2]) => this.selectSparql0(test1, test2, item)), startWith([undefined, undefined])); // data for the component sparql0: all subclasses of a superclass

    this.sparql1$ = forkJoin([this.Q12Test, this.Q37073Test, this.Q456376Test, this.Q24499Test, this.Q16200Test, this.Q77457Test]) //data for the component sparql1 : organisations, career statements, creators, family names, addressses, classes of FactGrid properties
      .pipe(switchMap(([test1, test2, test3, test4, test5, test6]) => this.selectSparql1(test1, test2, test3, test4, test5, test6, item)), startWith([undefined, undefined]));

    this.sparql2$ = forkJoin([this.Q140759Test, this.Q16200Test]).pipe(switchMap(([test1, test2]) => this.selectSparql2(test1, test2, item)), startWith([undefined, undefined]));  // data for the component sparql2 : health pratictioners, current address

    this.sparql3$ = forkJoin([this.masterTest, this.listTest, this.setTest, this.Q16200Test]).pipe(switchMap(([test1, test2, test3, test4]) => this.selectSparql3(test1, test2, test3, test4, item)), startWith([undefined, undefined]));  // data for the component sparql3 : pupils and students, list of items of a class, parts of a class

    this.sparql4$ = forkJoin([this.Q8Test, this.GOVTest]).pipe(switchMap(([test1, test2]) => this.selectSparql4(test1, test2, item)), startWith([undefined, undefined]));  // data for the component sparql4: locality (buildings, etc.)
  
    item.sparql = forkJoin([this.sparql0$, this.sparql1$, this.sparql2$, this.sparql3$, this.sparql4$])
  }
/*-------------------------------------------------------- select the sparql query depending on the test --------------------------------------------------------------------------*/

  // on selectSparql0 and selectSparql1 list and set don't work.

  selectSparql0(test1, test2, item) {  // select the right result for sparql0
    let result: Observable<any[]>;
    if (test1 === true) {
      result = this.superclassSparql(test1, item);  // all-orders subclasses
    }
    else {
      if (test2 === true) { 
        result = this.superclass1Sparql(test2, item);   // 1st-order subclasses
      }
      else result = this.noResult();
    }
    return result
  }

  selectSparql1(test1, test2, test3, test4, test5, test6, item) {  // select the right result for the component sparql1
    let result: Observable<any[]>;
    if (test5 === true) {  // addresses
      result = this.Q16200Sparql(item);
    }
    else {
      if (test1 === true) {              // members of organisations
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
                if (test6 === true) {    // properties of a class of Factgrid properties
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

  selectSparql2(test1, test2, item) {  // select the right result for sparql2
    let result: Observable<any[]>;
    if (test1 === true) {
      result = this.Q140759Sparql(test1, item);  // health practitioners
    } else {
      if (test2 === true) {    // current address for an old address
   //     result = this.currentAddress(item);
        result = this.noResult();
      }
        else result = this.noResult();
    }
    
    return result
  }

  selectSparql3(test1, test2, test3, test4, item) {  // select the right result for sparql3
    let result: Observable<any[]>;
    if (test1 === true) {
      result = this.masterSparql(test1, item);  // master
    }
    else {
      if (test2 === true) {
        result = this.listSparql(test2, item);  // FactGrid list
      }
      else {
        if (test3 === true) {
          result = this.setSparql(test3, item);  // set
        }
        else {
          if (test4 === true) {
           result = this.currentAddress(item);
    //        result = this.noResult();
          }
          else result = this.noResult();
        }
       }
      }
    return result
  }

  selectSparql4(test1, test2, item) {
    let result: Observable<any[]>;
    if (test1 === true) {           // locality
      result = this.Q8Sparql(item);
    }
    else {
      if (test2 === true) { // GOV 
        result = this.GOVSparql(item);
      }
      else result = this.noResult();
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

  Q172192TestGet(item) {  // to get the boolean test for Q172192 (list); deprecated
    let test: boolean = false;
    if (item.claims.P2[0].mainsnak.datavalue.value.id == "Q172192") {
      test = true;
    };
    return of(test)
  }

  Q77457TestGet(item) {  // to get the boolean test for Q77457 (class of FactGrid properties)
    let test: boolean = false;
    if (item.claims.P2[0].mainsnak.datavalue.value.id == "Q77457") {
      test = true;
    };
    return of(test)
  }

  GOVTestGet(item) {
    let test: boolean = false;
    if (item.claims.P2[0].mainsnak.datavalue.value.id == "Q780657") {
      test = true
    };
    return of(test);
  }

  

  /********************************* queries with specific tests  **********************************************************/

  Q12Sparql(test, res) {  // query organisation
    if (test === true) {
      let prefix1 = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3FfLabel%20WHERE%20%7B%20%0A%7B%20%3Fitem%20p%3AP165%20%5Bps%3AP165%20%3Factivity%3B%20pq%3AP267%20wd%3A"
      let prefix2 = "%5D%20.%20%7D%20UNION%20%20%20%7B%20%3Fitem%20wdt%3AP91%20wd%3A";
      let prefix3 = "%20.%7D%20UNION%20%7B%20%3Fu%20%5Ewdt%3AP165%20%3Fitem%3B%20%20wdt%3AP267%20wd%3A";
      let prefix4 = "%20%7D%20UNION%20%7B%20%3Fitem%20wdt%3AP315%20wd%3A";
      let suffix = "%20.%20%7D%0A%3Fitem%20wdt%3AP247%20%3Ff";
      let u = prefix1 + res.id + prefix2 + res.id + prefix3 + res.id + prefix4 + res.id + suffix + this.langService + "ORDER%20BY%20%3FfLabel";
      console.log(u);
      return this.sparqlQuery(u).pipe(map(res => ["Q12", this.listFromSparql(res).results.bindings]))
    }
  }

  Q37073Sparql(test, res) {  // query  career statement
    if (test === true) {
     let prefix1 = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3FfamilyNameLabel%20WHERE%20%7B%20%0A%20%7B%20%3Fitem%20wdt%3AP165%2Fwdt%3AP3%2a%20wd%3A";
     let prefix2 = "%20%7D%20UNION%20%7B%20%3Fitem%20p%3AP165%20%5Bpq%3AP122%20wd%3A";
     let suffix = "%5D%20%7D%0A%20%20%20%20%20%20%20OPTIONAL%20%7B%20%3Fitem%20wdt%3AP247%20%3FfamilyName%20%7D";
//    let prefix1 = "https://database.factgrid.de/query/#SELECT%20%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3FfamilyNameLabel%0A%20%20WITH%20%7B%20SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%7B%0A%20%7B%20%3Fitem%20wdt%3AP165%2Fwdt%3AP3%2a%20wd%3A";
//    let prefix2 = "%20%7D%20%20UNION%20%7B%20%3Fitem%20p%3AP165%20%5Bpq%3AP122%20wd%3A";
 //   let suffix = "%5D%20%7D%20%20%0A%20%20%20%20OPTIONAL%20%7B%20%3Fitem%20wdt%3AP247%20%3FfamilyName%20%7D%20.%0A%7D%7D%20AS%20%25results%0AWHERE%20%7B%0A%20include%20%25results";
      let u = prefix1 + res.id + prefix2 + res.id + suffix +
        this.langService
        + "ORDER%20by%20%3FfamilyNameLabel%20%0ALIMIT%2010000";
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
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP2%2Fwdt%3AP3%2a%20%7C%20wdt%3AP626%2Fwdt%3AP3%2a%20%7C%20wdt%3AP1007%2Fwdt%3AP3%2a%20wd%3A"
      let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FitemLabel";
      return this.sparqlQuery(u).pipe(map(res => ["Q172192", this.listFromSparql(res).results.bindings]))
    }
  }

  setSparql(test, res) {  // query parts of item as set
    if (test === true) {
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP8%20%7C%20wdt%3AP319%20%20wd%3A"
      let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FitemLabel";
      return this.sparqlQuery(u).pipe(map(res => ["Q945258", this.listFromSparql(res).results.bindings]))
      
    }
  }

  superclassSparql(test, res) {  // query subclasses of item
    if (test === true) {
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP3%2B%20wd%3A"
      let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FitemLabel";
      return this.sparqlQuery(u).pipe(map(res => ["Q945280", this.listFromSparql(res).results.bindings]))
    }
  }

  superclass1Sparql(test, res) {  // query 1st-order subclasses of item
    if (test === true) {
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP3%20wd%3A"
      let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FitemLabel";
      return this.sparqlQuery(u).pipe(map(res => ["Q960698", this.listFromSparql(res).results.bindings]))
    }
  }

  Q24499Sparql(res) {  // query family name Q24499
    let u = "";
    let suffix = "ORDER%20by%20%3FitemLabel";
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%20WHERE%20%7B%20%20%3Fitem%20wdt%3AP247%2Fwdt%3AP3%2a%20wd%3A";
    u = prefix + res.id + this.langService + suffix;
    console.log(u);
    return this.sparqlQuery(u).pipe(map(res => ["Q24499", this.listFromSparql(res).results.bindings]));
  }

  Q8Sparql(res) {  // query locality
    let u = "";
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%0A%7B%3Fitem%20wdt%3AP2%2Fwdt%3AP3%2a%20wd%3AQ160381%3B%20wdt%3AP83%20%7C%20wdt%3AP47%20wd%3A";
    let suffix = "ORDER%20by%20%3FitemLabel";
    u = prefix + res.id + this.langService + suffix;
    console.log(u);
    return this.sparqlQuery(u).pipe(map(res => ["Q8", this.listFromSparql(res).results.bindings]));
  }

  GOVSparql(res) {  //query GOV
    console.log(res.id);
    let u = "";
    let prefix = "https://database.factgrid.de/query/#SELECT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%20WHERE%20%7B%3Fitem%20wdt%3AP1075%20wd%3A"
    let suffix = "ORDER%20by%20%3FitemLabel";
    u = prefix + res.id + this.langService + suffix;
    console.log(u);
    return this.sparqlQuery(u).pipe(map(res => ["GOV", this.listFromSparql(res).results.bindings]));
  }

  Q16200Sparql(res) { // query address
    let u = "";
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%0AWHERE%20%0A%7B%0A%20%20%3Fitem%20wdt%3AP208%20wd%3A"
    u = prefix + res.id + this.langService + "ORDER%20BY%20%3FfitemLabel";
    console.log(u);
    return this.sparqlQuery(u).pipe(map(res => ["Q16200", this.listFromSparql(res).results.bindings]));
  }


  Q77457Sparql(res) {  //  // query class of FactGrid properties: the list of the properties belonging to the class
      let prefix = "https://database.factgrid.de/query/#SELECT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP8%20wd%3A"
    let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FitemLabel";
    console.log(u);
      let v = this.sparqlQuery(u).pipe(map(res => ["Q77457", this.listFromSparql(res).results.bindings]));
      return v
  }

 

  /*----------------------------------------- special queries --------------------------------------------*/

  sparqlQuery(sparql) {
    // sparql query to get a list to display : used in Q8Test(), etc...
    sparql = this.newSparqlAdress(sparql);
    return this.request.getList(sparql).pipe(
    map(res => this.listFromSparql(res)));
  }

  sparqlAsk(sparql) {    // sparql query for a boolean test;
    let u = "";
    let sparqlResult: Observable<any> | undefined;
    let selectedSparql = this.newSparqlAdress(sparql);
    sparqlResult = this.request.getAsk(selectedSparql).pipe(map(res => res.boolean));
    return sparqlResult;
  }

  currentAddress(item) {
    let u = "";
    let lat;
    let lon;
    let sparqlResult: Observable<any> | undefined;
    if (item.claims.P48) {
      lat = item.claims.P48[0].mainsnak.datavalue.value.latitude;
      lon = item.claims.P48[0].mainsnak.datavalue.value.longitude;
      u = "https://nominatim.openstreetmap.org/reverse?lat=" + lat + "&lon=" + lon + "&format=json";
      sparqlResult = this.request.getItem(u);
      return sparqlResult
    }
  }

/*-------------------------------------- Tests ----------------------------------------------------*/

  Q12TestGet(a) {
    let u =  "https://database.factgrid.de/query/#ASK%20%7Bwd%3A" + a + "%20wdt%3AP2%2Fwdt%3AP3%2a%20wd%3AQ12.%20FILTER%28NOT%20EXISTS%20%7Bwd%3A" + a +"%20wdt%3AP2%2Fwdt%3AP3%2a%20wd%3AQ8%7D%29%20%7D%0A%20"
    return u
  }


  subclassTest(a, type) {  // to test to check whether the class of an item is the subclass of a given superclass (in the hierarchy of classes)
    //  let u = "https://database.factgrid.de/query/#ASK%20%7Bwd%3A" + a + "%20wdt%3AP3%2a%20wd%3A" + type + ".%7D%0A%20";
    let u = "https://database.factgrid.de/query/#ASK%20%7Bwd%3A" + a + "%20wdt%3AP2%2Fwdt%3AP3%2a%20wd%3A" + type + ".%7D%0A%20";
    return u
  }

  classTest(a, type) {  // to test to check whether t item is the subclass of a given superclass (in the hierarchy of classes)
    //  let u = "https://database.factgrid.de/query/#ASK%20%7Bwd%3A" + a + "%20wdt%3AP3%2a%20wd%3A" + type + ".%7D%0A%20";
    let u = "https://database.factgrid.de/query/#ASK%20%7Bwd%3A" + a + "%20wdt%3AP3%2a%20wd%3A" + type + ".%7D%0A%20";
    return u
  }

  keywordTest(a, type) {  // to test to check whether the item is the subclass of a given superclass (in the hierarchy of classes) or of category OhdAB
    let u = "https://database.factgrid.de/query/#ASK%7Bwd%3A" + a + "%20wdt%3AP1132%20wd%3A" + type + "%7D";
    return u
  }

  masterSubclassTest(a) { // to check whether an item belongs to a subclass of painter/health care practioners/professors 
    let u = "https://database.factgrid.de/query/#ASK%7BVALUES%3Fsuperclass%7Bwd%3AQ456376%20wd%3AQ140743%20wd%3AQ36765%7Dwd%3A"
      + a + "%20wdt%3AP3%2a%3Fsuperclass.%7D";
    return u
  }

  activitiesTest(item) {   // extract boolean test out of the array of activities for the right activity, used in 
    let Q456376Tests = [];  // test for activity of creator
    let Q140759Tests = [] // test for activity of health care practioner 
    let masterTests = [];  // test for activity of master (professor, painter, physician)
    let b: boolean = false; // in case item.claims.P165 is undefined;
    if (item.claims.P165 !== undefined) {   // to fill the array Q456376Tests
      for (let i = 0; i < item.claims.P165.length; i++) {
        Q456376Tests.push(this.sparqlAsk(this.classTest(item.claims.P165[i].mainsnak.datavalue.value.id, "Q456376")).pipe(startWith(false))); //array of boolean tests for the activiy of creator (Q456376)
        Q140759Tests.push(this.sparqlAsk(this.classTest(item.claims.P165[i].mainsnak.datavalue.value.id, "Q140759")).pipe(startWith(false))); //array of boolean tests for the activity of health care practitioner (Q140759)
        masterTests.push(this.sparqlAsk(this.masterSubclassTest(item.claims.P165[i].mainsnak.datavalue.value.id)).pipe(startWith(false))); //array of boolean tests for the activiy of master
      }
    } else { Q456376Tests.push(of(b));  Q140759Tests.push(of(b)), masterTests.push(of(b)) };
    let u0 = forkJoin(Q456376Tests).pipe(switchMap(res => this.testArrayGet(res)));  //boolean test for Q456376 (creators)
    let u1 = forkJoin(Q140759Tests).pipe(switchMap(res => this.testArrayGet(res)));  //boolean test for Q140759 (health care practitioner);
    let u2 = forkJoin(masterTests).pipe(switchMap(res => this.testArrayGet(res)));  //booelean test for master
    return [u0, u1, u2]
  }

 /*----------------------------------------------- handlers --------------------------------------------------------*/

  testArrayGet(res) {   // get the boolean test in the array of boolean tests, used in activitiesTest
    let result
    for (let i = 0; i < res.length; i++) {
      if (res[i] === true) {
        result = res[i];
        break
      } else { result = false }
    }
    return of(result)
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
          res.results.bindings[i]["item"].id.startsWith("P") ? res.results.bindings[i]["item"].entity = "property" : res.results.bindings[i]["item"].entity = "item";
          ;  
        }
      };
    }
    else {
      res = { head: { vars: ['item', 'itemLabel', 'itemDescription', 'fLabel', 'activityLabel'] }, results: { bindings: [] } }
    };
    return res
  }

 

  noResult() {   // query in case there is no test
    let u = "";
    return this.sparqlQuery(u);
  }
}


