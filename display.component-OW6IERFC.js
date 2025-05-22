import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenavModule,
  require_leaflet_src
} from "./chunk-MDS35RUA.js";
import {
  ArrayToCsvService
} from "./chunk-2LW4LXL2.js";
import {
  SetLanguageService
} from "./chunk-PIPSZIBZ.js";
import {
  CdkPortal,
  CdkPortalOutlet,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  TemplatePortal
} from "./chunk-CHHSWJ3S.js";
import {
  ANIMATION_MODULE_TYPE,
  ActivatedRoute,
  AsyncPipe,
  Attribute,
  BehaviorSubject,
  BreakpointObserver,
  Breakpoints,
  CdkMonitorFocus,
  CdkObserveContent,
  CdkScrollable,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ComponentFactoryResolver$1,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directionality,
  Directive,
  DomSanitizer,
  EMPTY,
  ENTER,
  ElementRef,
  EventEmitter,
  FocusKeyManager,
  FocusMonitor,
  FormsModule,
  HttpClient,
  HttpParams,
  Inject,
  InjectionToken,
  Injector,
  Input,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardImage,
  MatCardModule,
  MatCommonModule,
  MatFormField,
  MatFormFieldModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatInput,
  MatInputModule,
  MatRipple,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgZone,
  Observable,
  Optional,
  Output,
  Platform,
  QueryList,
  RequestService,
  Router,
  RouterLink,
  RouterOutlet,
  SPACE,
  SelectedLangService,
  SharedResizeObserver,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  ViewportRuler,
  __spreadProps,
  __spreadValues,
  __toESM,
  afterNextRender,
  animate,
  booleanAttribute,
  debounceTime,
  distinctUntilChanged,
  filter,
  forkJoin,
  forwardRef,
  fromEvent,
  hasModifierKey,
  inject,
  input,
  map,
  merge,
  normalizePassiveListenerOptions,
  numberAttribute,
  of,
  setClassMetadata,
  skip,
  startWith,
  state,
  style,
  switchMap,
  takeUntil,
  throwError,
  timer,
  transition,
  trigger,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtrustConstantResourceUrl,
  ɵɵviewQuery
} from "./chunk-BY5FKXJT.js";

// src/app/services/back-list-details.service.ts
var BackListDetailsService = class _BackListDetailsService {
  constructor() {
  }
  setBackList(list) {
    let backList = [];
    for (let i = 0; i < list.length; i++) {
      backList[i] = { id: "", label: "" };
      let u = list[i]["title"];
      backList[i].id = u.substring(5);
      if (list[i]["entityterms"] === void 0) {
        continue;
      }
      ;
      backList[i].label = list[i]["entityterms"]["label"][0];
    }
    return backList;
  }
  static {
    this.\u0275fac = function BackListDetailsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BackListDetailsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BackListDetailsService, factory: _BackListDetailsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/item-sparql.service.ts
var ItemSparqlService = class _ItemSparqlService {
  constructor() {
    this.request = inject(RequestService);
    this.lang = inject(SelectedLangService);
    this.langService = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22" + this.lang.selectedLang + "%22%2C%22en%22.%20%7D%0A%7D%0A";
  }
  itemSparql(item) {
    console.log(item);
    let a = false;
    this.Q16200Test = this.Q16200TestGet(item);
    this.Q24499Test = this.Q24499TestGet(item);
    this.Q77457Test = this.Q77457TestGet(item);
    this.GOVTest = this.GOVTestGet(item);
    this.Q8Test = this.sparqlAsk(this.subclassTest(item.id, "Q8")).pipe(startWith(false));
    this.Q12Test = this.sparqlAsk(this.Q12TestGet(item.id)).pipe(startWith(false));
    this.Q37073Test = this.sparqlAsk(this.subclassTest(item.id, "Q37073")).pipe(startWith(false));
    this.Q456376Test = this.activitiesTest(item)[0];
    this.Q140759Test = this.activitiesTest(item)[1];
    this.masterTest = this.activitiesTest(item)[2];
    this.listTest = this.sparqlAsk(this.keywordTest(item.id, "Q945294")).pipe(startWith(false));
    this.setTest = this.sparqlAsk(this.keywordTest(item.id, "Q945258")).pipe(startWith(false));
    this.superclassTest = this.sparqlAsk(this.keywordTest(item.id, "Q945280")).pipe(startWith(false));
    this.superclass1Test = this.sparqlAsk(this.keywordTest(item.id, "Q960698")).pipe(startWith(false));
    this.sparql0$ = forkJoin([this.superclassTest, this.superclass1Test]).pipe(switchMap(([test1, test2]) => this.selectSparql0(test1, test2, item)), startWith([void 0, void 0]));
    this.sparql1$ = forkJoin([this.Q12Test, this.Q37073Test, this.Q456376Test, this.Q24499Test, this.Q16200Test, this.Q77457Test]).pipe(switchMap(([test1, test2, test3, test4, test5, test6]) => this.selectSparql1(test1, test2, test3, test4, test5, test6, item)), startWith([void 0, void 0]));
    this.sparql2$ = forkJoin([this.Q140759Test, this.Q16200Test]).pipe(switchMap(([test1, test2]) => this.selectSparql2(test1, test2, item)), startWith([void 0, void 0]));
    this.sparql3$ = forkJoin([this.masterTest, this.listTest, this.setTest, this.Q16200Test]).pipe(switchMap(([test1, test2, test3, test4]) => this.selectSparql3(test1, test2, test3, test4, item)), startWith([void 0, void 0]));
    this.sparql4$ = forkJoin([this.Q8Test, this.GOVTest]).pipe(switchMap(([test1, test2]) => this.selectSparql4(test1, test2, item)), startWith([void 0, void 0]));
    item.sparql = forkJoin([this.sparql0$, this.sparql1$, this.sparql2$, this.sparql3$, this.sparql4$]);
  }
  /*-------------------------------------------------------- select the sparql query depending on the test --------------------------------------------------------------------------*/
  // on selectSparql0 and selectSparql1 list and set don't work.
  selectSparql0(test1, test2, item) {
    let result;
    if (test1 === true) {
      result = this.superclassSparql(test1, item);
    } else {
      if (test2 === true) {
        result = this.superclass1Sparql(test2, item);
      } else
        result = this.noResult();
    }
    return result;
  }
  selectSparql1(test1, test2, test3, test4, test5, test6, item) {
    console.log(test1, test2, test3, test4, test5, test6);
    let result;
    if (test5 === true) {
      result = this.Q16200Sparql(item);
    } else {
      if (test1 === true) {
        result = this.Q12Sparql(test1, item);
      } else {
        if (test2 === true) {
          result = this.Q37073Sparql(test2, item);
        } else {
          if (test3 === true) {
            result = this.Q456376Sparql(test3, item);
          } else {
            if (test4 === true) {
              result = this.Q24499Sparql(item);
            } else {
              if (test6 === true) {
                result = this.Q77457Sparql(item);
              } else
                result = this.noResult();
            }
          }
        }
      }
    }
    return result;
  }
  selectSparql2(test1, test2, item) {
    console.log(test1, test2);
    let result;
    if (test1 === true) {
      result = this.Q140759Sparql(test1, item);
    } else {
      if (test2 === true) {
        result = this.noResult();
      } else
        result = this.noResult();
    }
    return result;
  }
  selectSparql3(test1, test2, test3, test4, item) {
    console.log(test1, test2, test3, test4);
    let result;
    if (test1 === true) {
      result = this.masterSparql(test1, item);
    } else {
      if (test2 === true) {
        result = this.listSparql(test2, item);
      } else {
        if (test3 === true) {
          result = this.setSparql(test3, item);
        } else {
          if (test4 === true) {
            result = this.currentAddress(item);
          } else
            result = this.noResult();
        }
      }
    }
    return result;
  }
  selectSparql4(test1, test2, item) {
    let result;
    if (test1 === true) {
      result = this.Q8Sparql(item);
    } else {
      if (test2 === true) {
        result = this.GOVSparql(item);
      } else
        result = this.noResult();
    }
    return result;
  }
  /**  tests **/
  Q24499TestGet(item) {
    let test = false;
    if (item.claims.P2[0].mainsnak.datavalue.value.id == "Q24499") {
      test = true;
    }
    return of(test);
  }
  Q8TestGet(item) {
    let test = false;
    if (item.claims.P2[0].mainsnak.datavalue.value.id == "Q8") {
      test = true;
    }
    ;
    return of(test);
  }
  Q16200TestGet(item) {
    let test = false;
    if (item.claims.P2[0].mainsnak.datavalue.value.id == "Q16200") {
      test = true;
    }
    ;
    return of(test);
  }
  Q172192TestGet(item) {
    let test = false;
    if (item.claims.P2[0].mainsnak.datavalue.value.id == "Q172192") {
      test = true;
    }
    ;
    return of(test);
  }
  Q77457TestGet(item) {
    let test = false;
    if (item.claims.P2[0].mainsnak.datavalue.value.id == "Q77457") {
      test = true;
    }
    ;
    console.log(test);
    return of(test);
  }
  GOVTestGet(item) {
    let test = false;
    if (item.claims.P2[0].mainsnak.datavalue.value.id == "Q780657") {
      test = true;
    }
    ;
    return of(test);
  }
  /********************************* queries with specific tests  **********************************************************/
  Q12Sparql(test, res) {
    if (test === true) {
      let prefix1 = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3FfLabel%20WHERE%20%7B%20%0A%7B%20%3Fitem%20p%3AP165%20%5Bps%3AP165%20%3Factivity%3B%20pq%3AP267%20wd%3A";
      let prefix2 = "%5D%20.%20%7D%20UNION%20%20%20%7B%20%3Fitem%20wdt%3AP91%20wd%3A";
      let prefix3 = "%20.%7D%20UNION%20%7B%20%3Fu%20%5Ewdt%3AP165%20%3Fitem%3B%20%20wdt%3AP267%20wd%3A";
      let prefix4 = "%20%7D%20UNION%20%7B%20%3Fitem%20wdt%3AP315%20wd%3A";
      let suffix = "%20.%20%7D%0A%3Fitem%20wdt%3AP247%20%3Ff";
      let u = prefix1 + res.id + prefix2 + res.id + prefix3 + res.id + prefix4 + res.id + suffix + this.langService + "ORDER%20BY%20%3FfLabel";
      console.log(u);
      return this.sparqlQuery(u).pipe(map((res2) => ["Q12", this.listFromSparql(res2).results.bindings]));
    }
  }
  Q37073Sparql(test, res) {
    if (test === true) {
      let prefix1 = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3FfamilyNameLabel%20WHERE%20%7B%20%0A%20%7B%20%3Fitem%20wdt%3AP165%2Fwdt%3AP3%2a%20wd%3A";
      let prefix2 = "%20%7D%20UNION%20%7B%20%3Fitem%20p%3AP165%20%5Bpq%3AP122%20wd%3A";
      let suffix = "%5D%20%7D%0A%20%20%20%20%20%20%20OPTIONAL%20%7B%20%3Fitem%20wdt%3AP247%20%3FfamilyName%20%7D";
      let u = prefix1 + res.id + prefix2 + res.id + suffix + this.langService + "ORDER%20by%20%3FfamilyNameLabel%20%0ALIMIT%2010000";
      console.log(u);
      return this.sparqlQuery(u).pipe(map((res2) => ["Q37073", this.listFromSparql(res2).results.bindings]));
    }
  }
  Q456376Sparql(test, res) {
    if (test === true) {
      let prefix1 = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3Fyear%0AWHERE%20%7B%20%3Fitem%20%28wdt%3AP21%20%7C%20wdt%3AP552%29%20wd%3A";
      let prefix2 = "%20.%0A%20%20OPTIONAL%20%7B%3Fitem%20wdt%3AP222%20%3Fdate%20.%20BIND%28YEAR%28%3Fdate%29%20AS%20%3Fyear%29%20.%7D%0A%20";
      let u = prefix1 + res.id + prefix2 + this.langService + "ORDER%20BY%20%3Fyear";
      return this.sparqlQuery(u).pipe(map((res2) => ["Q456376", this.listFromSparql(res2).results.bindings]));
    }
  }
  Q140759Sparql(test, res) {
    if (test === true) {
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3FfamilyNameLabel%20WHERE%20%7B%20%3Fitem%20wdt%3AP247%20%3FfamilyName%3B%20wdt%3AP512%20wd%3A";
      let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FfamilyNameLabel";
      return this.sparqlQuery(u).pipe(map((res2) => ["Q140759", this.listFromSparql(res2).results.bindings]));
    }
  }
  masterSparql(test, res) {
    if (test === true) {
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%3FfamilyNameLabel%20WHERE%20%7B%20%3Fitem%20wdt%3AP247%20%3FfamilyName%3B%20wdt%3AP161%20wd%3A";
      let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FfamilyNameLabel";
      return this.sparqlQuery(u).pipe(map((res2) => ["master", this.listFromSparql(res2).results.bindings]));
    }
  }
  listSparql(test, res) {
    if (test === true) {
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP2%2Fwdt%3AP3%2a%20%7C%20wdt%3AP626%2Fwdt%3AP3%2a%20%7C%20wdt%3AP1007%2Fwdt%3AP3%2a%20wd%3A";
      let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FitemLabel";
      return this.sparqlQuery(u).pipe(map((res2) => ["Q172192", this.listFromSparql(res2).results.bindings]));
    }
  }
  setSparql(test, res) {
    if (test === true) {
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP8%20%7C%20wdt%3AP319%20%20wd%3A";
      let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FitemLabel";
      return this.sparqlQuery(u).pipe(map((res2) => ["Q945258", this.listFromSparql(res2).results.bindings]));
    }
  }
  superclassSparql(test, res) {
    if (test === true) {
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP3%2B%20wd%3A";
      let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FitemLabel";
      return this.sparqlQuery(u).pipe(map((res2) => ["Q945280", this.listFromSparql(res2).results.bindings]));
    }
  }
  superclass1Sparql(test, res) {
    if (test === true) {
      let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP3%20wd%3A";
      let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FitemLabel";
      return this.sparqlQuery(u).pipe(map((res2) => ["Q960698", this.listFromSparql(res2).results.bindings]));
    }
  }
  Q24499Sparql(res) {
    let u = "";
    let suffix = "ORDER%20by%20%3FitemLabel";
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%20WHERE%20%7B%20%20%3Fitem%20wdt%3AP247%2Fwdt%3AP3%2a%20wd%3A";
    u = prefix + res.id + this.langService + suffix;
    console.log(u);
    return this.sparqlQuery(u).pipe(map((res2) => ["Q24499", this.listFromSparql(res2).results.bindings]));
  }
  Q8Sparql(res) {
    let u = "";
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%0A%7B%3Fitem%20wdt%3AP2%2Fwdt%3AP3%2a%20wd%3AQ160381%3B%20wdt%3AP83%20%7C%20wdt%3AP47%20wd%3A";
    let suffix = "ORDER%20by%20%3FitemLabel";
    u = prefix + res.id + this.langService + suffix;
    console.log(u);
    return this.sparqlQuery(u).pipe(map((res2) => ["Q8", this.listFromSparql(res2).results.bindings]));
  }
  GOVSparql(res) {
    console.log(res.id);
    let u = "";
    let prefix = "https://database.factgrid.de/query/#SELECT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%20WHERE%20%7B%3Fitem%20wdt%3AP1075%20wd%3A";
    let suffix = "ORDER%20by%20%3FitemLabel";
    u = prefix + res.id + this.langService + suffix;
    console.log(u);
    return this.sparqlQuery(u).pipe(map((res2) => ["GOV", this.listFromSparql(res2).results.bindings]));
  }
  Q16200Sparql(res) {
    let u = "";
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%0AWHERE%20%0A%7B%0A%20%20%3Fitem%20wdt%3AP208%20wd%3A";
    u = prefix + res.id + this.langService + "ORDER%20BY%20%3FfitemLabel";
    console.log(u);
    return this.sparqlQuery(u).pipe(map((res2) => ["Q16200", this.listFromSparql(res2).results.bindings]));
  }
  Q77457Sparql(res) {
    let prefix = "https://database.factgrid.de/query/#SELECT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fitem%20wdt%3AP8%20wd%3A";
    let u = prefix + res.id + this.langService + "ORDER%20BY%20%3FitemLabel";
    console.log(u);
    let v = this.sparqlQuery(u).pipe(map((res2) => ["Q77457", this.listFromSparql(res2).results.bindings]));
    return v;
  }
  /*----------------------------------------- special queries --------------------------------------------*/
  sparqlQuery(sparql) {
    sparql = this.newSparqlAdress(sparql);
    return this.request.getList(sparql).pipe(map((res) => this.listFromSparql(res)));
  }
  sparqlAsk(sparql) {
    let u = "";
    let sparqlResult;
    let selectedSparql = this.newSparqlAdress(sparql);
    sparqlResult = this.request.getAsk(selectedSparql).pipe(map((res) => res.boolean));
    return sparqlResult;
  }
  currentAddress(item) {
    let u = "";
    let lat;
    let lon;
    let sparqlResult;
    if (item.claims.P48) {
      lat = item.claims.P48[0].mainsnak.datavalue.value.latitude;
      lon = item.claims.P48[0].mainsnak.datavalue.value.longitude;
      u = "https://nominatim.openstreetmap.org/reverse?lat=" + lat + "&lon=" + lon + "&format=json";
      sparqlResult = this.request.getItem(u);
      return sparqlResult;
    }
  }
  /*-------------------------------------- Tests ----------------------------------------------------*/
  Q12TestGet(a) {
    let u = "https://database.factgrid.de/query/#ASK%20%7Bwd%3A" + a + "%20wdt%3AP2%2Fwdt%3AP3%2a%20wd%3AQ12.%20FILTER%28NOT%20EXISTS%20%7Bwd%3A" + a + "%20wdt%3AP2%2Fwdt%3AP3%2a%20wd%3AQ8%7D%29%20%7D%0A%20";
    return u;
  }
  subclassTest(a, type) {
    let u = "https://database.factgrid.de/query/#ASK%20%7Bwd%3A" + a + "%20wdt%3AP2%2Fwdt%3AP3%2a%20wd%3A" + type + ".%7D%0A%20";
    console.log(u);
    return u;
  }
  classTest(a, type) {
    let u = "https://database.factgrid.de/query/#ASK%20%7Bwd%3A" + a + "%20wdt%3AP3%2a%20wd%3A" + type + ".%7D%0A%20";
    return u;
  }
  keywordTest(a, type) {
    let u = "https://database.factgrid.de/query/#ASK%7Bwd%3A" + a + "%20wdt%3AP1132%20wd%3A" + type + "%7D";
    return u;
  }
  masterSubclassTest(a) {
    let u = "https://database.factgrid.de/query/#ASK%7BVALUES%3Fsuperclass%7Bwd%3AQ456376%20wd%3AQ140743%20wd%3AQ36765%7Dwd%3A" + a + "%20wdt%3AP3%2a%3Fsuperclass.%7D";
    return u;
  }
  activitiesTest(item) {
    console.log(item);
    let Q456376Tests = [];
    let Q140759Tests = [];
    let masterTests = [];
    let b = false;
    if (item.claims.P165 !== void 0) {
      for (let i = 0; i < item.claims.P165.length; i++) {
        Q456376Tests.push(this.sparqlAsk(this.classTest(item.claims.P165[i].mainsnak.datavalue.value.id, "Q456376")).pipe(startWith(false)));
        Q140759Tests.push(this.sparqlAsk(this.classTest(item.claims.P165[i].mainsnak.datavalue.value.id, "Q140759")).pipe(startWith(false)));
        masterTests.push(this.sparqlAsk(this.masterSubclassTest(item.claims.P165[i].mainsnak.datavalue.value.id)).pipe(startWith(false)));
      }
    } else {
      Q456376Tests.push(of(b));
      Q140759Tests.push(of(b)), masterTests.push(of(b));
    }
    ;
    let u0 = forkJoin(Q456376Tests).pipe(switchMap((res) => this.testArrayGet(res)));
    let u1 = forkJoin(Q140759Tests).pipe(switchMap((res) => this.testArrayGet(res)));
    let u2 = forkJoin(masterTests).pipe(switchMap((res) => this.testArrayGet(res)));
    return [u0, u1, u2];
  }
  /*----------------------------------------------- handlers --------------------------------------------------------*/
  testArrayGet(res) {
    let result;
    for (let i = 0; i < res.length; i++) {
      if (res[i] === true) {
        result = res[i];
        break;
      } else {
        result = false;
      }
    }
    return of(result);
  }
  newSparqlAdress(address) {
    const newPrefix = "https://database.factgrid.de/sparql?query=";
    let oldPrefix = "https://database.factgrid.de/query/#";
    if (address.includes("embed.html")) {
      oldPrefix = "https://database.factgrid.de/query/embed.html#";
    }
    ;
    if (address !== void 0)
      address = address.replace(oldPrefix, newPrefix);
    return address;
  }
  listFromSparql(res) {
    if (res !== void 0) {
      if (res.results !== void 0) {
        for (let i = 0; i < res.results.bindings.length; i++) {
          res.results.bindings[i]["item"].id = res.results.bindings[i]["item"].value.replace("https://database.factgrid.de/entity/", "");
          res.results.bindings[i]["item"].id.startsWith("P") ? res.results.bindings[i]["item"].entity = "property" : res.results.bindings[i]["item"].entity = "item";
          ;
        }
      }
      ;
    } else {
      res = { head: { vars: ["item", "itemLabel", "itemDescription", "fLabel", "activityLabel"] }, results: { bindings: [] } };
    }
    ;
    return res;
  }
  noResult() {
    let u = "";
    return this.sparqlQuery(u);
  }
  static {
    this.\u0275fac = function ItemSparqlService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ItemSparqlService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ItemSparqlService, factory: _ItemSparqlService.\u0275fac, providedIn: "root" });
  }
};

// src/app/display/services/header-display.service.ts
var HeaderDisplayService = class _HeaderDisplayService {
  constructor() {
  }
  setHeaderDisplay(item, header) {
    if (item[0].claims.P2 !== void 0) {
      item[1].splice(item[1].indexOf("P2"), 1);
      header.push(item[0].claims.P2);
    }
    if (item[0].claims.P3 !== void 0) {
      item[1].splice(item[1].indexOf("P3"), 1);
      header.push(item[0].claims.P3);
    }
    if (item[0].claims.P8 !== void 0) {
      item[1].splice(item[1].indexOf("P8"), 1);
      header.push(item[0].claims.P8);
    }
    if (item[0].claims.P97 !== void 0) {
      item[1].splice(item[1].indexOf("P97"), 1);
      header.push(item[0].claims.P97);
    }
    if (item[0].claims.P131 !== void 0) {
      item[1].splice(item[1].indexOf("P131"), 1);
      header.push(item[0].claims.P131);
    }
    return header;
  }
  static {
    this.\u0275fac = function HeaderDisplayService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderDisplayService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HeaderDisplayService, factory: _HeaderDisplayService.\u0275fac, providedIn: "root" });
  }
};

// src/app/display/services/map.service.ts
var Leaflet = __toESM(require_leaflet_src());
var MapService = class _MapService {
  constructor() {
  }
  displayMap(coords) {
    console.log(coords);
    let lat = coords.datavalue.value.latitude;
    let lng = coords.datavalue.value.longitude;
    const itemLocation = {
      coords: new Leaflet.LatLng(lat, lng),
      zoom: 12
    };
    return [lat, lng, coords, itemLocation];
  }
  static {
    this.\u0275fac = function MapService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MapService, factory: _MapService.\u0275fac, providedIn: "root" });
  }
};

// src/app/display/services/place-display.service.ts
var PlaceDisplayService = class _PlaceDisplayService {
  constructor() {
    this.mapDisplay = inject(MapService);
  }
  ///place
  setPlaceDisplay(item, locationAndSituation) {
    if (item[0].claims.P48 !== void 0) {
      item[1].splice(item[1].indexOf("P48"), 1);
      locationAndSituation.push(item[0].claims.P48);
    }
    if (item[0].claims.P58 !== void 0) {
      item[1].splice(item[1].indexOf("P58"), 1);
      locationAndSituation.push(item[0].claims.P58);
    }
    if (item[0].claims.P297 !== void 0) {
      item[1].splice(item[1].indexOf("P297"), 1);
      locationAndSituation.push(item[0].claims.P297);
    }
    if (item[0].claims.P466 !== void 0) {
      item[1].splice(item[1].indexOf("P466"), 1);
      locationAndSituation.push(item[0].claims.P466);
    }
    if (item[0].claims.P538 !== void 0) {
      item[1].splice(item[1].indexOf("P538"), 1);
      locationAndSituation.push(item[0].claims.P538);
    }
    if (item[0].claims.P461 !== void 0) {
      item[1].splice(item[1].indexOf("P461"), 1);
      locationAndSituation.push(item[0].claims.P461);
    }
    if (item[0].claims.P140 !== void 0) {
      item[1].splice(item[1].indexOf("P140"), 1);
      locationAndSituation.push(item[0].claims.P140);
    }
    if (item[0].claims.P139 !== void 0) {
      item[1].splice(item[1].indexOf("P139"), 1);
      locationAndSituation.push(item[0].claims.P139);
    }
    if (item[0].claims.P267 !== void 0) {
      item[1].splice(item[1].indexOf("P267"), 1);
      locationAndSituation.push(item[0].claims.P267);
    }
    return locationAndSituation;
  }
  static {
    this.\u0275fac = function PlaceDisplayService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceDisplayService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlaceDisplayService, factory: _PlaceDisplayService.\u0275fac, providedIn: "root" });
  }
};

// src/app/display/services/org-display.service.ts
var OrgDisplayService = class _OrgDisplayService {
  constructor() {
  }
  setOrgDisplay(item, locationAndContext) {
    if (item[0].claims.P8 !== void 0) {
      item[1].splice(item[1].indexOf("P8"), 1);
      locationAndContext.push(item[0].claims.P8);
    }
    if (item[0].claims.P83 !== void 0) {
      item[1].splice(item[1].indexOf("P83"), 1);
      locationAndContext.push(item[0].claims.P83);
    }
    if (item[0].claims.P49 !== void 0) {
      item[1].splice(item[1].indexOf("P49"), 1);
      locationAndContext.push(item[0].claims.P49);
    }
    if (item[0].claims.P6 !== void 0) {
      item[1].splice(item[1].indexOf("P6"), 1);
      locationAndContext.push(item[0].claims.P6);
    }
    if (item[0].claims.P50 !== void 0) {
      item[1].splice(item[1].indexOf("P50"), 1);
      locationAndContext.push(item[0].claims.P50);
    }
    if (item[0].claims.P7 !== void 0) {
      item[1].splice(item[1].indexOf("P7"), 1);
      locationAndContext.push(item[0].claims.P7);
    }
    if (item[0].claims.P449 !== void 0) {
      item[1].splice(item[1].indexOf("P449"), 1);
      locationAndContext.push(item[0].claims.P449);
    }
    if (item[0].claims.P428 !== void 0) {
      item[1].splice(item[1].indexOf("P428"), 1);
      locationAndContext.push(item[0].claims.P428);
    }
    if (item[0].claims.P14 !== void 0) {
      item[1].splice(item[1].indexOf("P14"), 1);
      locationAndContext.push(item[0].claims.P14);
    }
    if (item[0].claims.P465 !== void 0) {
      item[1].splice(item[1].indexOf("P465"), 1);
      locationAndContext.push(item[0].claims.P465);
    }
    if (item[0].claims.P297 !== void 0) {
      item[1].splice(item[1].indexOf("P297"), 1);
      locationAndContext.push(item[0].claims.P297);
    }
    if (item[0].claims.P9 !== void 0) {
      item[1].splice(item[1].indexOf("P9"), 1);
      locationAndContext.push(item[0].claims.P9);
    }
    if (item[0].claims.P268 !== void 0) {
      item[1].splice(item[1].indexOf("P268"), 1);
      locationAndContext.push(item[0].claims.P268);
    }
    if (item[0].claims.P327 !== void 0) {
      item[1].splice(item[1].indexOf("P327"), 1);
      locationAndContext.push(item[0].claims.P327);
    }
    if (item[0].claims.P137 !== void 0) {
      item[1].splice(item[1].indexOf("P137"), 1);
      locationAndContext.push(item[0].claims.P137);
    }
    if (item[0].claims.P34 !== void 0) {
      item[1].splice(item[1].indexOf("P34"), 1);
      locationAndContext.push(item[0].claims.P34);
    }
    if (item[0].claims.P521 !== void 0) {
      item[1].splice(item[1].indexOf("P521"), 1);
      locationAndContext.push(item[0].claims.P521);
    }
    if (item[0].claims.P338 !== void 0) {
      item[1].splice(item[1].indexOf("P338"), 1);
      locationAndContext.push(item[0].claims.P338);
    }
    if (item[0].claims.P342 !== void 0) {
      item[1].splice(item[1].indexOf("P342"), 1);
      locationAndContext.push(item[0].claims.P342);
    }
    if (item[0].claims.P319 !== void 0) {
      item[1].splice(item[1].indexOf("P319"), 1);
      locationAndContext.push(item[0].claims.P319);
    }
    if (item[0].claims.P267 !== void 0) {
      item[1].splice(item[1].indexOf("P267"), 1);
      locationAndContext.push(item[0].claims.P267);
    }
    if (item[0].claims.P430 !== void 0) {
      item[1].splice(item[1].indexOf("P430"), 1);
      locationAndContext.push(item[0].claims.P430);
    }
    if (item[0].claims.P422 !== void 0) {
      item[1].splice(item[1].indexOf("P422"), 1);
      locationAndContext.push(item[0].claims.P422);
    }
    return locationAndContext;
  }
  static {
    this.\u0275fac = function OrgDisplayService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrgDisplayService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrgDisplayService, factory: _OrgDisplayService.\u0275fac, providedIn: "root" });
  }
};

// src/app/display/services/document-display.service.ts
var DocumentDisplayService = class _DocumentDisplayService {
  constructor() {
  }
  setDocumentDisplay(item, documentDetail) {
    if (item[0].claims.P21 !== void 0) {
      item[1].splice(item[1].indexOf("P21"), 1);
      documentDetail.push(item[0].claims.P21);
    }
    if (item[0].claims.P20 !== void 0) {
      item[1].splice(item[1].indexOf("P20"), 1);
      documentDetail.push(item[0].claims.P20);
    }
    if (item[0].claims.P561 !== void 0) {
      item[1].splice(item[1].indexOf("P561"), 1);
      documentDetail.push(item[0].claims.P561);
    }
    if (item[0].claims.P24 !== void 0) {
      item[1].splice(item[1].indexOf("P24"), 1);
      documentDetail.push(item[0].claims.P24);
    }
    if (item[0].claims.P583 !== void 0) {
      item[1].splice(item[1].indexOf("P583"), 1);
      documentDetail.push(item[0].claims.P583);
    }
    if (item[0].claims.P584 !== void 0) {
      item[1].splice(item[1].indexOf("P584"), 1);
      documentDetail.push(item[0].claims.P584);
    }
    if (item[0].claims.P25 !== void 0) {
      item[1].splice(item[1].indexOf("P25"), 1);
      documentDetail.push(item[0].claims.P25);
    }
    if (item[0].claims.P11 !== void 0) {
      item[1].splice(item[1].indexOf("P11"), 1);
      documentDetail.push(item[0].claims.P11);
    }
    if (item[0].claims.P5 !== void 0) {
      item[1].splice(item[1].indexOf("P5"), 1);
      documentDetail.push(item[0].claims.P5);
    }
    if (item[0].claims.P572 !== void 0) {
      item[1].splice(item[1].indexOf("P572"), 1);
      documentDetail.push(item[0].claims.P572);
    }
    if (item[0].claims.P39 !== void 0) {
      item[1].splice(item[1].indexOf("P39"), 1);
      documentDetail.push(item[0].claims.P39);
    }
    if (item[0].claims.P106 !== void 0) {
      item[1].splice(item[1].indexOf("P106"), 1);
      documentDetail.push(item[0].claims.P106);
    }
    if (item[0].claims.P15 !== void 0) {
      item[1].splice(item[1].indexOf("P15"), 1);
      documentDetail.push(item[0].claims.P15);
    }
    if (item[0].claims.P121 !== void 0) {
      item[1].splice(item[1].indexOf("P121"), 1);
      documentDetail.push(item[0].claims.P121);
    }
    if (item[0].claims.P107 !== void 0) {
      item[1].splice(item[1].indexOf("P107"), 1);
      documentDetail.push(item[0].claims.P107);
    }
    if (item[0].claims.P93 !== void 0) {
      item[1].splice(item[1].indexOf("P93"), 1);
      documentDetail.push(item[0].claims.P93);
    }
    if (item[0].claims.P95 !== void 0) {
      item[1].splice(item[1].indexOf("P95"), 1);
      documentDetail.push(item[0].claims.P95);
    }
    if (item[0].claims.P28 !== void 0) {
      item[1].splice(item[1].indexOf("P28"), 1);
      documentDetail.push(item[0].claims.P28);
    }
    if (item[0].claims.P410 !== void 0) {
      item[1].splice(item[1].indexOf("P410"), 1);
      documentDetail.push(item[0].claims.P410);
    }
    if (item[0].claims.P33 !== void 0) {
      item[1].splice(item[1].indexOf("P33"), 1);
      documentDetail.push(item[0].claims.P33);
    }
    if (item[0].claims.P306 !== void 0) {
      item[1].splice(item[1].indexOf("P306"), 1);
      documentDetail.push(item[0].claims.P306);
    }
    if (item[0].claims.P72 !== void 0) {
      item[1].splice(item[1].indexOf("P72"), 1);
      documentDetail.push(item[0].claims.P72);
    }
    if (item[0].claims.P204 !== void 0) {
      item[1].splice(item[1].indexOf("P204"), 1);
      documentDetail.push(item[0].claims.P204);
    }
    if (item[0].claims.P144 !== void 0) {
      item[1].splice(item[1].indexOf("P144"), 1);
      documentDetail.push(item[0].claims.P144);
    }
    if (item[0].claims.P115 !== void 0) {
      item[1].splice(item[1].indexOf("P115"), 1);
      documentDetail.push(item[0].claims.P115);
    }
    if (item[0].claims.P578 !== void 0) {
      item[1].splice(item[1].indexOf("P578"), 1);
      documentDetail.push(item[0].claims.P578);
    }
    if (item[0].claims.P233 !== void 0) {
      item[1].splice(item[1].indexOf("P233"), 1);
      documentDetail.push(item[0].claims.P233);
    }
    if (item[0].claims.P222 !== void 0) {
      item[1].splice(item[1].indexOf("P222"), 1);
      documentDetail.push(item[0].claims.P222);
    }
    if (item[0].claims.P241 !== void 0) {
      item[1].splice(item[1].indexOf("P241"), 1);
      documentDetail.push(item[0].claims.P241);
    }
    if (item[0].claims.P240 !== void 0) {
      item[1].splice(item[1].indexOf("P240"), 1);
      documentDetail.push(item[0].claims.P240);
    }
    if (item[0].claims.P122 !== void 0) {
      item[1].splice(item[1].indexOf("P122"), 1);
      documentDetail.push(item[0].claims.P122);
    }
    if (item[0].claims.P576 !== void 0) {
      item[1].splice(item[1].indexOf("P576"), 1);
      documentDetail.push(item[0].claims.P576);
    }
    if (item[0].claims.P568 !== void 0) {
      item[1].splice(item[1].indexOf("P568"), 1);
      documentDetail.push(item[0].claims.P568);
    }
    if (item[0].claims.P565 !== void 0) {
      item[1].splice(item[1].indexOf("P565"), 1);
      documentDetail.push(item[0].claims.P565);
    }
    if (item[0].claims.P18 !== void 0) {
      item[1].splice(item[1].indexOf("P18"), 1);
      documentDetail.push(item[0].claims.P18);
    }
    if (item[0].claims.P126 !== void 0) {
      item[1].splice(item[1].indexOf("P126"), 1);
      documentDetail.push(item[0].claims.P126);
    }
    if (item[0].claims.P47 !== void 0) {
      item[1].splice(item[1].indexOf("P47"), 1);
      documentDetail.push(item[0].claims.P47);
    }
    if (item[0].claims.P329 !== void 0) {
      item[1].splice(item[1].indexOf("P329"), 1);
      documentDetail.push(item[0].claims.P329);
    }
    if (item[0].claims.P323 !== void 0) {
      item[1].splice(item[1].indexOf("P323"), 1);
      documentDetail.push(item[0].claims.P323);
    }
    if (item[0].claims.P101 !== void 0) {
      item[1].splice(item[1].indexOf("P101"), 1);
      documentDetail.push(item[0].claims.P101);
    }
    if (item[0].claims.P30 !== void 0) {
      item[1].splice(item[1].indexOf("P30"), 1);
      documentDetail.push(item[0].claims.P30);
    }
    if (item[0].claims.P125 !== void 0) {
      item[1].splice(item[1].indexOf("P125"), 1);
      documentDetail.push(item[0].claims.P125);
    }
    if (item[0].claims.P229 !== void 0) {
      item[1].splice(item[1].indexOf("P229"), 1);
      documentDetail.push(item[0].claims.P229);
    }
    if (item[0].claims.P136 !== void 0) {
      item[1].splice(item[1].indexOf("P136"), 1);
      documentDetail.push(item[0].claims.P136);
    }
    if (item[0].claims.P64 !== void 0) {
      item[1].splice(item[1].indexOf("P64"), 1);
      documentDetail.push(item[0].claims.P64);
    }
    if (item[0].claims.P124 !== void 0) {
      item[1].splice(item[1].indexOf("P124"), 1);
      documentDetail.push(item[0].claims.P124);
    }
    if (item[0].claims.P251 !== void 0) {
      item[1].splice(item[1].indexOf("P251"), 1);
      documentDetail.push(item[0].claims.P251);
    }
    if (item[0].claims.P226 !== void 0) {
      item[1].splice(item[1].indexOf("P226"), 1);
      documentDetail.push(item[0].claims.P226);
    }
    if (item[0].claims.P138 !== void 0) {
      item[1].splice(item[1].indexOf("P138"), 1);
      documentDetail.push(item[0].claims.P138);
    }
    ;
    return documentDetail;
  }
  static {
    this.\u0275fac = function DocumentDisplayService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DocumentDisplayService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DocumentDisplayService, factory: _DocumentDisplayService.\u0275fac, providedIn: "root" });
  }
};

// src/app/display/services/activity-display.service.ts
var ActivityDisplayService = class _ActivityDisplayService {
  constructor() {
  }
  setActivityDisplay(item, activityDetail) {
    if (item[0].claims.P267 !== void 0) {
      item[1].splice(item[1].indexOf("P267"), 1);
      activityDetail.push(item[0].claims.P267);
    }
    return activityDetail;
  }
  static {
    this.\u0275fac = function ActivityDisplayService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActivityDisplayService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ActivityDisplayService, factory: _ActivityDisplayService.\u0275fac, providedIn: "root" });
  }
};

// src/app/display/services/education-display.service.ts
var EducationDisplayService = class _EducationDisplayService {
  constructor() {
  }
  setEducationDisplay(item, education) {
    if (item[0].claims.P160 !== void 0) {
      item[1].splice(item[1].indexOf("P160"), 1);
      education.push(item[0].claims.P160);
    }
    if (item[0].claims.P304 !== void 0) {
      item[1].splice(item[1].indexOf("P304"), 1);
      education.push(item[0].claims.P304);
    }
    if (item[0].claims.P170 !== void 0) {
      item[1].splice(item[1].indexOf("P170"), 1);
      education.push(item[0].claims.P170);
    }
    if (item[0].claims.P161 !== void 0) {
      item[1].splice(item[1].indexOf("P161"), 1);
      education.push(item[0].claims.P161);
    }
    return education;
  }
  static {
    this.\u0275fac = function EducationDisplayService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EducationDisplayService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EducationDisplayService, factory: _EducationDisplayService.\u0275fac, providedIn: "root" });
  }
};

// src/app/display/services/person-display.service.ts
var PersonDisplayService = class _PersonDisplayService {
  constructor() {
  }
  setPersonDisplay(item, lifeAndFamily) {
    if (item[0].claims.P154 !== void 0) {
      item[1].splice(item[1].indexOf("P154"), 1);
      lifeAndFamily.push(item[0].claims.P154);
    }
    if (item[0].claims.P247 !== void 0) {
      item[1].splice(item[1].indexOf("P247"), 1);
      lifeAndFamily.push(item[0].claims.P247);
    }
    if (item[0].claims.P248 !== void 0) {
      item[1].splice(item[1].indexOf("P248"), 1);
      lifeAndFamily.push(item[0].claims.P248);
    }
    if (item[0].claims.P140 !== void 0) {
      item[1].splice(item[1].indexOf("P140"), 1);
      lifeAndFamily.push(item[0].claims.P140);
    }
    if (item[0].claims.P139 !== void 0) {
      item[1].splice(item[1].indexOf("P139"), 1);
      lifeAndFamily.push(item[0].claims.P139);
    }
    if (item[0].claims.P363 !== void 0) {
      item[1].splice(item[1].indexOf("P363"), 1);
      lifeAndFamily.push(item[0].claims.P363);
    }
    if (item[0].claims.P148 !== void 0) {
      item[1].splice(item[1].indexOf("P148"), 1);
      lifeAndFamily.push(item[0].claims.P148);
    }
    if (item[0].claims.P530 !== void 0) {
      item[1].splice(item[1].indexOf("P530"), 1);
      lifeAndFamily.push(item[0].claims.P530);
    }
    if (item[0].claims.P354 !== void 0) {
      item[1].splice(item[1].indexOf("P354"), 1);
      lifeAndFamily.push(item[0].claims.P354);
    }
    if (item[0].claims.P77 !== void 0) {
      item[1].splice(item[1].indexOf("P77"), 1);
      lifeAndFamily.push(item[0].claims.P77);
    }
    if (item[0].claims.P37 !== void 0) {
      item[1].splice(item[1].indexOf("P37"), 1);
      lifeAndFamily.push(item[0].claims.P37);
    }
    if (item[0].claims.P82 !== void 0) {
      item[1].splice(item[1].indexOf("P82"), 1);
      lifeAndFamily.push(item[0].claims.P82);
    }
    if (item[0].claims.P290 !== void 0) {
      item[1].splice(item[1].indexOf("P290"), 1);
      lifeAndFamily.push(item[0].claims.P290);
    }
    if (item[0].claims.P186 !== void 0) {
      item[1].splice(item[1].indexOf("P186"), 1);
      lifeAndFamily.push(item[0].claims.P186);
    }
    if (item[0].claims.P1267 !== void 0) {
      item[1].splice(item[1].indexOf("P1267"), 1);
      lifeAndFamily.push(item[0].claims.P1267);
    }
    if (item[0].claims.P580 !== void 0) {
      item[1].splice(item[1].indexOf("P580"), 1);
      lifeAndFamily.push(item[0].claims.P580);
    }
    if (item[0].claims.P38 !== void 0) {
      item[1].splice(item[1].indexOf("P38"), 1);
      lifeAndFamily.push(item[0].claims.P38);
    }
    if (item[0].claims.P168 !== void 0) {
      item[1].splice(item[1].indexOf("P168"), 1);
      lifeAndFamily.push(item[0].claims.P168);
    }
    if (item[0].claims.P162 !== void 0) {
      item[1].splice(item[1].indexOf("P162"), 1);
      lifeAndFamily.push(item[0].claims.P162);
    }
    if (item[0].claims.P40 !== void 0) {
      item[1].splice(item[1].indexOf("P40"), 1);
      lifeAndFamily.push(item[0].claims.P40);
    }
    if (item[0].claims.P79 !== void 0) {
      item[1].splice(item[1].indexOf("P79"), 1);
      lifeAndFamily.push(item[0].claims.P79);
    }
    if (item[0].claims.P141 !== void 0) {
      item[1].splice(item[1].indexOf("P141"), 1);
      lifeAndFamily.push(item[0].claims.P141);
    }
    if (item[0].claims.P142 !== void 0) {
      item[1].splice(item[1].indexOf("P142"), 1);
      lifeAndFamily.push(item[0].claims.P142);
    }
    if (item[0].claims.P203 !== void 0) {
      item[1].splice(item[1].indexOf("P203"), 1);
      lifeAndFamily.push(item[0].claims.P203);
    }
    if (item[0].claims.P84 !== void 0) {
      item[1].splice(item[1].indexOf("P84"), 1);
      lifeAndFamily.push(item[0].claims.P84);
    }
    if (item[0].claims.P200 !== void 0) {
      item[1].splice(item[1].indexOf("P200"), 1);
      lifeAndFamily.push(item[0].claims.P200);
    }
    if (item[0].claims.P150 !== void 0) {
      item[1].splice(item[1].indexOf("P150"), 1);
      lifeAndFamily.push(item[0].claims.P150);
    }
    if (item[0].claims.P172 !== void 0) {
      item[1].splice(item[1].indexOf("P172"), 1);
      lifeAndFamily.push(item[0].claims.P172);
    }
    if (item[0].claims.P83 !== void 0) {
      item[1].splice(item[1].indexOf("P83"), 1);
      lifeAndFamily.push(item[0].claims.P83);
    }
    if (item[0].claims.P296 !== void 0) {
      item[1].splice(item[1].indexOf("P296"), 1);
      lifeAndFamily.push(item[0].claims.P296);
    }
    if (item[0].claims.P208 !== void 0) {
      item[1].splice(item[1].indexOf("P208"), 1);
      lifeAndFamily.push(item[0].claims.P208);
    }
    return lifeAndFamily;
  }
  static {
    this.\u0275fac = function PersonDisplayService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PersonDisplayService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PersonDisplayService, factory: _PersonDisplayService.\u0275fac, providedIn: "root" });
  }
};

// src/app/display/services/career-display.service.ts
var CareerDisplayService = class _CareerDisplayService {
  constructor() {
  }
  setCareerDisplay(item, careerAndActivities) {
    if (item[0].claims.P164 !== void 0) {
      item[1].splice(item[1].indexOf("P164"), 1);
      careerAndActivities.push(item[0].claims.P164);
    }
    if (item[0].claims.P165 !== void 0) {
      item[1].splice(item[1].indexOf("P165"), 1);
      careerAndActivities.push(item[0].claims.P165);
    }
    if (item[0].claims.P865) {
      item[1].splice(item[1].indexOf("P865"), 1);
      careerAndActivities.push(item[0].claims.P865);
    }
    if (item[0].claims.P315 !== void 0) {
      item[1].splice(item[1].indexOf("P315"), 1);
      careerAndActivities.push(item[0].claims.P315);
    }
    if (item[0].claims.P242 !== void 0) {
      item[1].splice(item[1].indexOf("P242"), 1);
      careerAndActivities.push(item[0].claims.P242);
    }
    if (item[0].claims.P119 !== void 0) {
      item[1].splice(item[1].indexOf("P119"), 1);
      careerAndActivities.push(item[0].claims.P119);
    }
    if (item[0].claims.P776 !== void 0) {
      item[1].splice(item[1].indexOf("P776"), 1);
      careerAndActivities.push(item[0].claims.P776);
    }
    return careerAndActivities;
  }
  static {
    this.\u0275fac = function CareerDisplayService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CareerDisplayService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CareerDisplayService, factory: _CareerDisplayService.\u0275fac, providedIn: "root" });
  }
};

// src/app/display/services/sociability-display.service.ts
var SociabilityDisplayService = class _SociabilityDisplayService {
  constructor() {
  }
  setSociabilityDisplay(item, sociabilityAndCulture) {
    if (item[0].claims.P91 !== void 0) {
      item[1].splice(item[1].indexOf("P91"), 1);
      sociabilityAndCulture.push(item[0].claims.P91);
    }
    if (item[0].claims.P454 !== void 0) {
      item[1].splice(item[1].indexOf("P454"), 1);
      sociabilityAndCulture.push(item[0].claims.P454);
    }
    if (item[0].claims.P192 !== void 0) {
      item[1].splice(item[1].indexOf("P192"), 1);
      sociabilityAndCulture.push(item[0].claims.P192);
    }
    if (item[0].claims.P447 !== void 0) {
      item[1].splice(item[1].indexOf("P447"), 1);
      sociabilityAndCulture.push(item[0].claims.P447);
    }
    if (item[0].claims.P497 !== void 0) {
      item[1].splice(item[1].indexOf("P497"), 1);
      sociabilityAndCulture.push(item[0].claims.P497);
    }
    if (item[0].claims.P167 !== void 0) {
      item[1].splice(item[1].indexOf("P167"), 1);
      sociabilityAndCulture.push(item[0].claims.P167);
    }
    if (item[0].claims.P278 !== void 0) {
      item[1].splice(item[1].indexOf("P278"), 1);
      sociabilityAndCulture.push(item[0].claims.P278);
    }
    return sociabilityAndCulture;
  }
  static {
    this.\u0275fac = function SociabilityDisplayService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SociabilityDisplayService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SociabilityDisplayService, factory: _SociabilityDisplayService.\u0275fac, providedIn: "root" });
  }
};

// src/app/display/services/sources-display.service.ts
var SourcesDisplayService = class _SourcesDisplayService {
  constructor() {
  }
  setSourcesDisplay(item, sourcesList) {
    if (item[0].claims.P12 !== void 0) {
      item[1].splice(item[1].indexOf("P12"), 1);
      sourcesList.push(item[0].claims.P12);
    }
    if (item[0].claims.P51 !== void 0) {
      item[1].splice(item[1].indexOf("P51"), 1);
      sourcesList.push(item[0].claims.P51);
    }
    if (item[0].claims.P143 !== void 0) {
      item[1].splice(item[1].indexOf("P143"), 1);
      sourcesList.push(item[0].claims.P143);
    }
    if (item[0].claims.P185 !== void 0) {
      item[1].splice(item[1].indexOf("P185"), 1);
      sourcesList.push(item[0].claims.P185);
    }
    if (item[0].claims.P146 !== void 0) {
      item[1].splice(item[1].indexOf("P146"), 1);
      sourcesList.push(item[0].claims.P146);
    }
    return sourcesList;
  }
  static {
    this.\u0275fac = function SourcesDisplayService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SourcesDisplayService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SourcesDisplayService, factory: _SourcesDisplayService.\u0275fac, providedIn: "root" });
  }
};

// src/app/display/services/technicalities-display.service.ts
var TechnicalitiesDisplayService = class _TechnicalitiesDisplayService {
  constructor() {
  }
  setTechnicalitiesDisplay(item, technicalities) {
    if (item[0].claims.P994 !== void 0) {
      item[1].splice(item[1].indexOf("P994"), 1);
      technicalities.push(item[0].claims.P994);
    }
    if (item[0].claims.P1132 !== void 0) {
      item[1].splice(item[1].indexOf("P1132"), 1);
      technicalities.push(item[0].claims.P1132);
    }
  }
  static {
    this.\u0275fac = function TechnicalitiesDisplayService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TechnicalitiesDisplayService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TechnicalitiesDisplayService, factory: _TechnicalitiesDisplayService.\u0275fac, providedIn: "root" });
  }
};

// src/app/display/services/event-display.service.ts
var EventDisplayService = class _EventDisplayService {
  constructor() {
  }
  setEventDisplay(item, eventDetail) {
    if (item[0].claims.P47 !== void 0) {
      item[1].splice(item[1].indexOf("P47"), 1);
      eventDetail.push(item[0].claims.P47);
    }
    if (item[0].claims.P106 !== void 0) {
      item[1].splice(item[1].indexOf("P106"), 1);
      eventDetail.push(item[0].claims.P106);
    }
    if (item[0].claims.P66 !== void 0) {
      item[1].splice(item[1].indexOf("P66"), 1);
      eventDetail.push(item[0].claims.P66);
    }
    if (item[0].claims.P133 !== void 0) {
      item[1].splice(item[1].indexOf("P133"), 1);
      eventDetail.push(item[0].claims.P133);
    }
    return eventDetail;
  }
  static {
    this.\u0275fac = function EventDisplayService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventDisplayService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventDisplayService, factory: _EventDisplayService.\u0275fac, providedIn: "root" });
  }
};

// src/app/display/services/external-links-display.service.ts
var ExternalLinksDisplayService = class _ExternalLinksDisplayService {
  constructor() {
  }
  setExternalLinksDisplay(item, externalLinks) {
    let p = Object.keys(item[0].claims);
    for (let i = 0; i < p.length; i++) {
      if (item[0].claims[p[i]].datatype !== "external-id") {
        continue;
      }
      item[1].splice(item[1].indexOf(p[i]), 1);
      this.setUrl(item, p[i]);
      externalLinks.push(item[0].claims[p[i]]);
    }
    return externalLinks;
  }
  setUrl(item, p) {
    if (item[0].claims[p].externalLink !== void 0) {
      item[0].claims[p].url = item[0].claims[p].externalLink.replace("$1", item[0].claims[p][0].mainsnak.datavalue.value);
    }
    if (item[0].claims.P76 !== void 0) {
      item[0].claims.P76.url = "https://explore.gnd.network/gnd/" + item[0].claims.P76[0].mainsnak.datavalue.value;
    }
    ;
    if (item[0].claims.P368 !== void 0) {
      item[0].claims.P368.url = "http://gateway-bayern.de/VD16+" + item[0].claims.P368[0].mainsnak.datavalue.value;
    }
    ;
    if (item[0].claims.P369 !== void 0) {
      item[0].claims.P369.url = "https://kxp.k10plus.de/DB=1.28/CMD?ACT=SRCHA&IKT=8079&TRM=%27:" + item[0].claims.P369[0].mainsnak.datavalue.value + "%27";
    }
    ;
    if (item[0].claims.P370 !== void 0) {
      item[0].claims.P370.url = "https://kxp.k10plus.de/DB=1.65/CMD?ACT=SRCHA&IKT=8080&TRM=VD18" + item[0].claims.P370[0].mainsnak.datavalue.value;
    }
    ;
    if (item[0].claims.P650 !== void 0) {
      let province = item[0].claims.P650[0].mainsnak.datavalue.value.slice(0, 2);
      let municipality = item[0].claims.P650[0].mainsnak.datavalue.value.slice(2, 5);
      let parish = item[0].claims.P650[0].mainsnak.datavalue.value.slice(5, 7);
      let es = item[0].claims.P650[0].mainsnak.datavalue.value.slice(7, 9);
      if (item[0].claims.P650.externalLink !== void 0) {
        item[0].claims.P650.url = item[0].claims.P650.externalLink.replace("$1", province);
        item[0].claims.P650.url = item[0].claims.P650.url.replace("$2", municipality);
        item[0].claims.P650.url = item[0].claims.P650.url.replace("$3", parish);
        item[0].claims.P650.url = item[0].claims.P650.url.replace("$4", es);
        item[0].claims.P650.url = item[0].claims.P650.url.replace("$5", "00");
      }
    }
    ;
    if (item[0].claims.P882 !== void 0) {
      item[0].claims.P882.url = "https://drw-www.adw.uni-heidelberg.de/drw-cgi/zeige?index=lemmata&term=" + item[0].claims.P882[0].mainsnak.datavalue.value + "&darstellung=V";
    }
    ;
  }
  static {
    this.\u0275fac = function ExternalLinksDisplayService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExternalLinksDisplayService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExternalLinksDisplayService, factory: _ExternalLinksDisplayService.\u0275fac, providedIn: "root" });
  }
};

// src/app/display/services/iframes-display.service.ts
var IframesDisplayService = class _IframesDisplayService {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
  }
  setIframesDisplay(item, iframes) {
    if (item[0].claims.P309 !== void 0) {
      console.log(item[0].claims.P309[0].mainsnak.datavalue.value);
      item[1].splice(item[1].indexOf("P309"), 1);
      for (let i = 0; i < item[0].claims.P309[i].length; i++) {
        item[0].claims.P309[i].mainsnak.datatype = item[0].claims.P309[i].mainsnak.datavalue.value;
        item[0].claims.P309.iframe[i] = item[0].claims.P309[i].mainsnak.datavalue.value;
      }
      iframes.push(item[0].claims.P309);
      console.log(iframes);
    }
    if (item[0].claims.P320 !== void 0) {
      item[1].splice(item[1].indexOf("P320"), 1);
      for (let i = 0; i < item[0].claims.P320[i].length; i++) {
        item[0].claims.P320[i].mainsnak.datatype = item[0].claims.P320[i].mainsnak.datavalue.value;
        item[0].claims.P320.iframe[i] = item[0].claims.P320[i].mainsnak.datavalue.value;
      }
      iframes.push(item[0].claims.P320);
    }
    if (item[0].claims.P679 !== void 0) {
      console.log(item[0].claims.P679);
      item[1].splice(item[1].indexOf("P679"), 1);
      for (let i = 0; i < item[0].claims.P679[i].length; i++) {
        item[0].claims.P679[i].mainsnak.datatype = item[0].claims.P679[i].mainsnak.datavalue.value;
        item[0].claims.P679.iframe[i] = item[0].claims.P679[i].mainsnak.datavalue.value;
      }
      iframes.push(item[0].claims.P679);
    }
    if (item[0].claims.P693 !== void 0) {
      item[1].splice(item[1].indexOf("P693"), 1);
      for (let i = 0; i < item[0].claims.P693[i].length; i++) {
        item[0].claims.P693[i].mainsnak.datatype = item[0].claims.P693[i].mainsnak.datavalue.value;
        item[0].claims.P693.iframe[i] = item[0].claims.P693[i].mainsnak.datavalue.value;
      }
      iframes.push(item[0].claims.P693);
    }
    if (item[0].claims.P720 !== void 0) {
      item[1].splice(item[1].indexOf("P720"), 1);
      for (let i = 0; i < item[0].claims.P720[i].length; i++) {
        item[0].claims.P720[i].mainsnak.datatype = item[0].claims.P720[i].mainsnak.datavalue.value;
        item[0].claims.P720.iframe[i] = item[0].claims.P720[i].mainsnak.datavalue.value;
      }
      iframes.push(item[0].claims.P720);
    }
  }
  setHouseNumbersQuery(res) {
    res = res.replace("item%", "viewer%");
    res = res.replace("%7D%7D", `%7D%20BIND%28STRAFTER%28STR%28%3Fitem%29%2C%20STR%28wd%3A%29%29%20AS%20%3FitemId%29%20BIND%28IRI%28CONCAT%28%22https%3A%2F%2Fdatabase.factgrid.de%2Fviewer%2Fitem%2F%22%2C%20%3FitemId%29%29%20AS%20%3Fviewer%29%7D%0A`);
    return res;
  }
  static {
    this.\u0275fac = function IframesDisplayService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IframesDisplayService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IframesDisplayService, factory: _IframesDisplayService.\u0275fac, providedIn: "root" });
  }
};

// src/app/display/services/wiki-display.service.ts
var WikiDisplayService = class _WikiDisplayService {
  constructor() {
    this.url = "";
  }
  setWikiDisplay(item, wikis) {
    if (item[0].sitelinks.commonswiki !== void 0) {
      wikis.push(item[0].sitelinks.commonswiki);
    }
    if (item[0].sitelinks.enwiki !== void 0) {
      wikis.push(item[0].sitelinks.enwiki);
    }
    if (item[0].sitelinks.dewiki !== void 0) {
      wikis.push(item[0].sitelinks.dewiki);
    }
    if (item[0].sitelinks.frwiki !== void 0) {
      wikis.push(item[0].sitelinks.frwiki);
    }
    if (item[0].sitelinks.itwiki !== void 0) {
      wikis.push(item[0].sitelinks.itwiki);
    }
    if (item[0].sitelinks.nlwiki !== void 0) {
      wikis.push(item[0].sitelinks.nlwiki);
    }
    if (item[0].sitelinks.eswiki !== void 0) {
      wikis.push(item[0].sitelinks.eswiki);
    }
    if (item[0].sitelinks.wikidatawiki !== void 0) {
      wikis.push(item[0].sitelinks.wikidatawiki);
    }
    if (item[0].sitelinks.enwikisource !== void 0) {
      this.url = item[0].sitelinks.enwikisource.title.replace(/ /g, "_") + "_";
      this.url = "https://en.wikisource.org/wiki/" + this.url;
      item[0].sitelinks.enwikisource.url = this.url;
      wikis.push(item[0].sitelinks.enwikisource);
    }
    if (item[0].sitelinks.dewikisource !== void 0) {
      this.url = item[0].sitelinks.dewikisource.title.replace(/ /g, "_") + "_";
      this.url = "https://de.wikisource.org/wiki/" + this.url;
      item[0].sitelinks.dewikisource.url = this.url;
      wikis.push(item[0].sitelinks.dewikisource);
    }
    if (item[0].sitelinks.frwikisource !== void 0) {
      this.url = item[0].sitelinks.frwikisource.title.replace(/ /g, "_") + "_";
      this.url = "https://fr.wikisource.org/wiki/" + this.url;
      item[0].sitelinks.frwikisource.url = this.url;
      wikis.push(item[0].sitelinks.frwikisource);
    }
    return wikis;
  }
  static {
    this.\u0275fac = function WikiDisplayService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WikiDisplayService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WikiDisplayService, factory: _WikiDisplayService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/details.service.ts
var DetailsService = class _DetailsService {
  constructor() {
    this.requestService = inject(RequestService);
    this.setLanguage = inject(SetLanguageService);
  }
  /**
   * Retourne la liste unique des propriétés de référence d’une entité.
   */
  getReferenceProperties(u) {
    const referenceProperties = Object.values(u.claims).flatMap((val) => val).flatMap((claim) => claim.references ?? []).flatMap((ref) => ref["snaks-order"] ?? []);
    return this.uniq(referenceProperties);
  }
  /**
   * Crée la liste des propriétés dans les statements, qualifiers et références.
   * Retourne un Observable des propriétés enrichies.
   */
  setPropertiesList(u) {
    const claimsArray = Object.values(u.claims);
    let properties = claimsArray.flatMap((val) => val.map((claim) => claim.mainsnak.property));
    let qualifierProperties = claimsArray.flatMap((val) => val.flatMap((claim) => claim["qualifiers-order"] ?? []));
    let referenceProperties = claimsArray.flatMap((val) => val).flatMap((claim) => claim.references ?? []).flatMap((ref) => ref["snaks-order"] ?? []);
    qualifierProperties = this.uniq(qualifierProperties);
    referenceProperties = this.uniq(referenceProperties);
    properties = this.uniq([...properties, ...qualifierProperties, ...referenceProperties]);
    const propertiesChunks = this.lessThanFifty(properties);
    if (propertiesChunks.length > 8) {
      return throwError(() => new Error("Trop de statements (plus de 8 groupes de 50 propri\xE9t\xE9s)"));
    }
    const propertiesLists = propertiesChunks.map((list) => this.createList(list).slice(1));
    while (propertiesLists.length < 8)
      propertiesLists.push("");
    return this.requestService.requestProperties(propertiesLists).pipe(
      map((res) => this.mergeObjects(res)),
      // <--- cast ici
      map((res) => Object.values(res))
    );
  }
  /**
   * Crée la liste des items dans les statements, qualifiers et références.
   * Retourne un Observable des items enrichis.
   */
  setItemsList(u) {
    const claimsArray = Object.values(u.claims);
    let items = claimsArray.flatMap((val) => val.filter((claim) => claim.mainsnak.datavalue?.value?.id !== void 0).map((claim) => claim.mainsnak.datavalue.value.id));
    let qualifierProperties = claimsArray.flatMap((val) => val.flatMap((claim) => claim["qualifiers-order"] ?? []));
    let referenceProperties = claimsArray.flatMap((val) => val).flatMap((claim) => claim.references ?? []).flatMap((ref) => ref["snaks-order"] ?? []);
    qualifierProperties = this.uniq(qualifierProperties);
    referenceProperties = this.uniq(referenceProperties);
    const qualifierItems = this.setQualifierItems(claimsArray, qualifierProperties).filter(Boolean);
    const referenceItems = this.setReferenceItems(claimsArray, referenceProperties).filter(Boolean);
    items = this.uniq([...items, ...qualifierItems, ...referenceItems]);
    const itemsChunks = this.lessThanFifty(items);
    if (itemsChunks.length > 8) {
      return throwError(() => new Error("Trop de statements (plus de 8 groupes de 50 items)"));
    }
    const itemsLists = itemsChunks.map((list) => this.createList(list).slice(1));
    while (itemsLists.length < 8)
      itemsLists.push("");
    return this.requestService.requestItems(itemsLists).pipe(
      map((res) => this.mergeObjects(res)),
      // <--- cast ici
      map((res) => Object.values(res))
    );
  }
  /**
   * Retourne la liste unique des propriétés dans les qualifiers et références.
   */
  setProperties(arr) {
    return arr.flatMap((obj) => Object.keys(obj));
  }
  /**
   * Fusionne les objets contenus dans un tableau pour créer un seul objet.
   */
  mergeObjects(res) {
    const validObjects = (res ?? []).filter((obj) => obj && obj.entities);
    let u = validObjects.length > 0 ? validObjects[0].entities : {};
    for (const obj of validObjects.slice(1)) {
      u = __spreadValues(__spreadValues({}, u), obj.entities);
    }
    return u;
  }
  /**
   * Retourne la liste des items dans les qualifiers.
   */
  setQualifierItems(values, arr) {
    arr = arr.filter(Boolean);
    const result = [];
    for (const val of values) {
      for (const claim of val) {
        for (const prop of arr) {
          if (claim.qualifiers?.[prop]) {
            for (const snak of claim.qualifiers[prop]) {
              if (snak?.datavalue?.value?.id) {
                result.push(snak.datavalue.value.id);
              }
            }
          }
        }
      }
    }
    return result;
  }
  /**
   * Retourne la liste des items dans les références.
   */
  setReferenceItems(values, arr) {
    arr = arr.filter(Boolean);
    const result = [];
    for (const val of values) {
      for (const claim of val) {
        if (!claim.references)
          continue;
        for (const ref of claim.references) {
          for (const prop of arr) {
            const snaks = ref.snaks[prop];
            if (snaks && snaks[0]?.datatype === "wikibase-item") {
              for (const snak of snaks) {
                if (snak?.datavalue?.value?.id) {
                  result.push(snak.datavalue.value.id);
                }
              }
            }
          }
        }
      }
    }
    return result;
  }
  /**
   * Crée une chaîne de caractères à partir d’un tableau, séparée par '|'.
   */
  createList(arr) {
    return Array.from(new Set(arr)).reduce((list, item) => list + "|" + item, "");
  }
  /**
   * Retourne un tableau sans doublons.
   */
  uniq(a) {
    return Array.from(new Set(a.filter(Boolean)));
  }
  /**
   * Découpe un tableau en sous-tableaux de 50 éléments maximum.
   */
  lessThanFifty(arr) {
    const result = [];
    let u = arr.length;
    let tempArr = arr.slice();
    while (u > 0) {
      result.push(tempArr.slice(0, 50));
      tempArr = tempArr.slice(50);
      u = tempArr.length;
    }
    return result;
  }
  static {
    this.\u0275fac = function DetailsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DetailsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DetailsService, factory: _DetailsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/property-details.service.ts
var PropertyDetailsService = class _PropertyDetailsService {
  constructor() {
  }
  addClaimPropertyDetails(properties, re, itemProperties) {
    for (let i = 0; i < itemProperties.length; i++) {
      for (let j = 0; j < properties.length; j++) {
        if (itemProperties[i] === properties[j].id) {
          re.claims[itemProperties[i]].label = properties[j].label;
          if (properties[j].description !== void 0)
            re.claims[itemProperties[i]].description = properties[j].description;
          if (properties[j].aliases !== void 0)
            re.claims[itemProperties[i]].aliases = properties[j].aliases;
          if (properties[j].externalLink !== void 0)
            re.claims[itemProperties[i]].externalLink = properties[j].externalLink;
        }
      }
    }
    return re;
  }
  addQualifierPropertyDetails(properties, re, itemProperties) {
    let qualifierPropertyArray = [];
    for (let i = 0; i < itemProperties.length; i++) {
      for (let j = 0; j < re.claims[itemProperties[i]].length; j++) {
        if (re.claims[itemProperties[i]][j].qualifiers === void 0) {
          continue;
        }
        qualifierPropertyArray = Object.keys(re.claims[itemProperties[i]][j].qualifiers);
        let qualifiersArray = Object.values(re.claims[itemProperties[i]][j].qualifiers);
        for (let l = 0; l < properties.length; l++) {
          for (let k = 0; k < qualifierPropertyArray.length; k++) {
            let prop = qualifierPropertyArray[k];
            if (qualifiersArray[k][0].property === properties[l].id) {
              re.claims[itemProperties[i]][j].qualifiers[prop].label = properties[l].label;
              if (properties[l].description !== void 0)
                re.claims[itemProperties[i]][j].qualifiers[prop].description = properties[l].description;
              if (properties[l].aliases !== void 0)
                re.claims[itemProperties[i]][j].qualifiers[prop].aliases = properties[l].aliases;
              if (properties[l].externalLink !== void 0)
                re.claims[itemProperties[i]][j].qualifiers[prop].externalLink = properties[l].externalLink;
            }
          }
        }
      }
    }
    return [re, qualifierPropertyArray];
  }
  addQualifier2PropertyDetails(properties, re, itemProperties) {
    let qualifier2PropertyArray = [];
    let qualifier2 = [];
    for (let i = 0; i < itemProperties.length; i++) {
      for (let j = 0; j < re.claims[itemProperties[i]].length; j++) {
        if (re.claims[itemProperties[i]][j].qualifiers !== void 0) {
          re.claims[itemProperties[i]][j].qualifiers2 = [];
          qualifier2PropertyArray = re.claims[itemProperties[i]][j]["qualifiers-order"];
          for (let k = 0; k < qualifier2PropertyArray.length; k++) {
            qualifier2[k] = { id: void 0, label: void 0, description: void 0, aliases: void 0, value: { id: void 0, time: void 0, string: void 0, label: void 0, description: void 0, aliases: void 0 } };
            for (let l = 0; l < properties.length; l++) {
              if (re.claims[itemProperties[i]][j]["qualifiers-order"][k] !== properties[l].id) {
                continue;
              }
              qualifier2[k].id = properties[l].id;
              qualifier2[k].label = properties[l].label;
              if (properties[l].description !== void 0)
                qualifier2[k].description = properties[l].description;
              if (properties[l].aliases !== void 0)
                qualifier2[k].aliases = properties[l].aliases;
              if (properties[l].externalLink !== void 0)
                qualifier2[k].externalLink = properties[l].externalLink;
              re.claims[itemProperties[i]][j].qualifiers2.push(qualifier2[k]);
            }
          }
        }
      }
    }
    return re;
  }
  addReferencePropertyDetails(properties, re, itemProperties) {
    for (let i = 0; i < itemProperties.length; i++) {
      for (let j = 0; j < re.claims[itemProperties[i]].length; j++) {
        if (re.claims[itemProperties[i]][j].references === void 0) {
          continue;
        }
        for (let k = 0; k < re.claims[itemProperties[i]][j].references.length; k++) {
          let props = Object.keys(re.claims[itemProperties[i]][j].references[k].snaks);
          for (let l = 0; l < props.length; l++) {
            for (let m = 0; m < properties.length; m++) {
              if (props[l] === properties[m].id) {
                if (re.claims[itemProperties[i]][j].references[k].snaks[props[l]][0] !== void 0) {
                  re.claims[itemProperties[i]][j].references[k].snaks[props[l]][0].label = properties[m].label;
                  if (properties[m].description !== void 0)
                    re.claims[itemProperties[i]][j].references[k].snaks[props[l]][0].description = properties[m].description;
                  if (properties[m].aliases !== void 0)
                    re.claims[itemProperties[i]][j].references[k].snaks[props[l]][0].aliases = properties[m].aliases;
                  if (properties[m].externalLink !== void 0)
                    re.claims[itemProperties[i]][j].references[k].snaks[props[l]][0].externalLink = properties[m].externalLink;
                }
              }
            }
          }
        }
      }
    }
    return re;
  }
  addReference2PropertyDetails(properties, re, itemProperties) {
    let references2PropertyArray = [];
    let references2 = [];
    for (let i = 0; i < itemProperties.length; i++) {
      for (let j = 0; j < re.claims[itemProperties[i]].length; j++) {
        if (re.claims[itemProperties[i]][j].references === void 0) {
          continue;
        }
        re.claims[itemProperties[i]][j].references2 = [];
        for (let k = 0; k < re.claims[itemProperties[i]][j].references.length; k++) {
          re.claims[itemProperties[i]][j].references2[k] = [];
          references2[k] = [];
          let props = re.claims[itemProperties[i]][j].references[k]["snaks-order"];
          for (let r = 0; r < props.length; r++) {
            let reference = re.claims[itemProperties[i]][j].references[k].snaks[props[r]][0];
            references2[k][r] = { datatype: void 0, id: void 0, label: void 0, description: void 0, aliases: void 0 };
            references2[k][r].datatype = reference.datatype;
            references2[k][r].id = reference.property;
            references2[k][r].label = reference.label;
            if (reference.description !== void 0)
              references2[k][r].description = reference.description;
            if (reference.aliases !== void 0)
              references2[k][r].aliases = reference.aliases;
            if (reference.externalLink !== void 0)
              references2[k][r].externalLink = reference.externalLink;
            re.claims[itemProperties[i]][j].references2[k].push(references2[k][r]);
          }
        }
      }
    }
    return re;
  }
  static {
    this.\u0275fac = function PropertyDetailsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PropertyDetailsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PropertyDetailsService, factory: _PropertyDetailsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/set-item-to-display.service.ts
var SetItemToDisplayService = class _SetItemToDisplayService {
  constructor() {
    this.details = inject(DetailsService);
  }
  setItemToDisplay(u) {
    let values = Object.values(u.claims);
    let mainsnaks = [];
    let mainsnaks2 = [];
    for (const val of values) {
      let i;
      for (i = 0; i < val.length; i++) {
        if (val[0].mainsnak === void 0)
          continue;
        mainsnaks.push(val[i].mainsnak);
      }
    }
    ;
    for (const val of mainsnaks) {
      if (val.datavalue.value.id === void 0)
        continue;
      mainsnaks2.push("{" + val.property + ":" + val.datavalue.value.id + "}");
    }
    ;
    return mainsnaks2;
  }
  addDetails(properties, claims) {
    for (let i = 0; i < properties.length; i++) {
      let p = properties[i];
      claims[i].label = properties[i].label;
    }
    return claims;
  }
  static {
    this.\u0275fac = function SetItemToDisplayService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetItemToDisplayService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SetItemToDisplayService, factory: _SetItemToDisplayService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/set-time.service.ts
var SetTimeService = class _SetTimeService {
  constructor() {
  }
  setDate(time, lang) {
    let era = time.charAt(0);
    let date = time.substring(1);
    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);
    let firstPart = "";
    if (year.charAt(0) == 0) {
      year = year.substring(1);
      if (year.charAt(0) == 0) {
        year = year.substring(1);
        if (year.charAt(0) == 0) {
          year = year.substring(1);
        }
      }
    }
    if (day === "01") {
      if (lang === "en") {
        day = "1st";
      }
      ;
      if (lang === "de" || lang === "es") {
        day = "1";
      }
      ;
      if (lang === "fr") {
        day = "1er";
      }
      ;
    }
    ;
    if (day === "02") {
      day = "2";
    }
    ;
    if (day === "03") {
      day = "3";
    }
    ;
    if (day === "04") {
      day = "4";
    }
    ;
    if (day === "05") {
      day = "5";
    }
    ;
    if (day === "06") {
      day = "6";
    }
    ;
    if (day === "07") {
      day = "7";
    }
    ;
    if (day === "08") {
      day = "8";
    }
    ;
    if (day === "09") {
      day = "9";
    }
    ;
    if (month === "01") {
      if (lang === "en") {
        month = "January ";
      }
      ;
      if (lang === "de") {
        month = "Januar ";
      }
      ;
      if (lang === "fr") {
        month = "janvier ";
      }
      ;
      if (lang === "es") {
        month = "enero ";
      }
      ;
      if (lang === "it") {
        month = "gennaio ";
      }
      ;
    }
    ;
    if (month === "02") {
      if (lang === "en") {
        month = "February ";
      }
      ;
      if (lang === "de") {
        month = "Februar ";
      }
      ;
      if (lang === "fr") {
        month = "f\xE9vrier ";
      }
      ;
      if (lang === "es") {
        month = "febrero ";
      }
      ;
      if (lang === "it") {
        month = "febbraio ";
      }
      ;
    }
    ;
    if (month === "03") {
      if (lang === "en") {
        month = "March ";
      }
      ;
      if (lang === "de") {
        month = "M\xE4rz ";
      }
      ;
      if (lang === "fr") {
        month = "mars ";
      }
      ;
      if (lang === "es") {
        month = "marzo ";
      }
      ;
      if (lang === "it") {
        month = "marzo ";
      }
    }
    ;
    if (month === "04") {
      if (lang === "en") {
        month = "April ";
      }
      ;
      if (lang === "de") {
        month = "April ";
      }
      ;
      if (lang === "fr") {
        month = "avril ";
      }
      ;
      if (lang === "es") {
        month = "abril ";
      }
      ;
      if (lang === "it") {
        month = "aprile ";
      }
      ;
    }
    ;
    if (month === "05") {
      if (lang === "en") {
        month = "May ";
      }
      ;
      if (lang === "de") {
        month = "Mai ";
      }
      ;
      if (lang === "fr") {
        month = "mai ";
      }
      ;
      if (lang === "es") {
        month = "mayo ";
      }
      ;
      if (lang === "it") {
        month = "maggio ";
      }
      ;
    }
    ;
    if (month === "06") {
      if (lang === "en") {
        month = "June ";
      }
      ;
      if (lang === "de") {
        month = "Juni ";
      }
      ;
      if (lang === "fr") {
        month = "juin ";
      }
      ;
      if (lang === "es") {
        month = "junio ";
      }
      ;
      if (lang === "it") {
        month = "giugno ";
      }
      ;
    }
    ;
    if (month === "07") {
      if (lang === "en") {
        month = "July ";
      }
      ;
      if (lang === "de") {
        month = "Juli ";
      }
      ;
      if (lang === "fr") {
        month = "juillet ";
      }
      ;
      if (lang === "es") {
        month = "julio ";
      }
      ;
      if (lang === "it") {
        month = "luglio ";
      }
      ;
    }
    ;
    if (month === "08") {
      if (lang === "en") {
        month = "August ";
      }
      ;
      if (lang === "de") {
        month = "August ";
      }
      ;
      if (lang === "fr") {
        month = "ao\xFBt ";
      }
      ;
      if (lang === "es") {
        month = "agosto ";
      }
      ;
      if (lang === "it") {
        month = "agosto ";
      }
      ;
    }
    ;
    if (month === "09") {
      if (lang === "en") {
        month = "September ";
      }
      ;
      if (lang === "de") {
        month = "September ";
      }
      ;
      if (lang === "fr") {
        month = "septembre ";
      }
      ;
      if (lang === "es") {
        month = "septiembre ";
      }
      ;
      if (lang === "it") {
        month = "settembre ";
      }
      ;
    }
    ;
    if (month === "10") {
      if (lang === "en") {
        month = "October ";
      }
      ;
      if (lang === "de") {
        month = "Oktober ";
      }
      ;
      if (lang === "fr") {
        month = "octobre ";
      }
      ;
      if (lang === "es") {
        month = "octubre ";
      }
      ;
      if (lang === "it") {
        month = "ottobre ";
      }
      ;
    }
    ;
    if (month === "11") {
      if (lang === "en") {
        month = "November ";
      }
      ;
      if (lang === "de") {
        month = "November ";
      }
      ;
      if (lang === "fr") {
        month = "novembre ";
      }
      ;
      if (lang === "es") {
        month = "noviembre ";
      }
      ;
      if (lang === "it") {
        month = "novembre ";
      }
      ;
    }
    ;
    if (month === "12") {
      if (lang === "en") {
        month = "December ";
      }
      ;
      if (lang === "de") {
        month = "Dezember ";
      }
      ;
      if (lang === "fr") {
        month = "d\xE9cembre ";
      }
      ;
      if (lang === "es") {
        month = "diciembre ";
      }
      ;
      if (lang === "it") {
        month = "dicembre ";
      }
      ;
    }
    ;
    if (lang === "en" || lang === "fr" || lang === "it") {
      firstPart = day + " " + month;
    }
    ;
    if (lang === "de") {
      firstPart = day + ". " + month;
    }
    ;
    if (lang === "es") {
      firstPart = day + " de " + month + " de ";
    }
    ;
    if (day === "00") {
      month === "00" ? firstPart = "" : firstPart = month;
    }
    time = firstPart + year;
    if (era === "-") {
      if (lang === "en") {
        time = time + " BCE";
      }
      ;
      if (lang === "de") {
        time = time + " v. d. Z.";
      }
      ;
      if (lang === "fr") {
        time = time + " AEC";
      }
      ;
      if (lang === "es") {
        time = time + " a.e.c.";
      }
      ;
      if (lang === "it") {
        time = time + " a. C.";
      }
      ;
    }
    ;
    if (era === "+" && time < 500) {
      if (lang === "en") {
        time = time + " CE";
      }
      ;
      if (lang === "de") {
        time = time + " n. d. Z.";
      }
      ;
      if (lang === "fr") {
        time = time + " EC";
      }
      ;
      if (lang === "es") {
        time = time + " e.c.";
      }
      ;
      if (lang === "it") {
        time = time + " CE";
      }
      ;
    }
    ;
    return time;
  }
  static {
    this.\u0275fac = function SetTimeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetTimeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SetTimeService, factory: _SetTimeService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/factgrid-subtitles.service.ts
var FactgridSubtitlesService = class _FactgridSubtitlesService {
  constructor() {
    this.lang = inject(SelectedLangService);
  }
  //TODO: pass the lang selection to the SelectedLangService
  setSubtitle1(re, propertyId, lang) {
    if (propertyId === "P320") {
      re.claims[propertyId].sparql = "List of members";
      if (lang === "de") {
        re.claims[propertyId].sparql = "Mitgliederverzeichnis";
      } else if (lang === "fr") {
        re.claims[propertyId].sparql = "Liste des membres";
      } else if (lang === "es") {
        re.claims[propertyId].sparql = "Lista de miembros";
      } else if (lang === "it") {
        re.claims[propertyId].sparql = "Elenco dei membri";
      } else if (lang === "hu") {
        re.claims[propertyId].sparql = "A tagok list\xE1ja";
      }
      ;
    }
    if (lang === "en") {
      re.claims[propertyId].other = "further";
    } else if (lang === "de") {
      re.claims[propertyId].other = "weiteren";
    } else if (lang === "fr") {
      re.claims[propertyId].other = "autres";
    } else if (lang === "es") {
      re.claims[propertyId].other = "m\xE1s";
    } else if (lang === "it") {
      re.claims[propertyId].other = "di pi\xF9";
    } else if (lang === "hu") {
      re.claims[propertyId].other = "tov\xE1bbi";
    }
    ;
    if (lang === "en") {
      re.claims[propertyId].sources = "Sources";
    } else if (lang === "de") {
      re.claims[propertyId].sources = "Quellen";
    } else if (lang === "fr") {
      re.claims[propertyId].sources = "Sources";
    } else if (lang === "es") {
      re.claims[propertyId].sources = "Fuentes";
    } else if (lang === "it") {
      re.claims[propertyId].sources = "Fonti";
    } else if (lang === "hu") {
      re.claims[propertyId].sources = "Forr\xE1sok";
    }
    ;
  }
  setSubtitle2(re, propertyId, number, lang) {
    let j = number;
    if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q7") {
      re.claims[propertyId].person = "person";
      if (lang === "en") {
        re.claims[propertyId].main = "Life and family";
      } else if (lang === "de") {
        re.claims[propertyId].main = "Leben und Familie";
      } else if (lang === "fr") {
        re.claims[propertyId].main = "Vie et famille";
      } else if (lang === "es") {
        re.claims[propertyId].main = "Vida y familia";
      } else if (lang === "it") {
        re.claims[propertyId].main = "Vita e famiglia";
      } else if (lang === "hu") {
        re.claims[propertyId].main = "\xC9let \xE9s csal\xE1d";
      }
      ;
      if (lang === "en") {
        re.claims[propertyId].training = "Education";
      } else if (lang === "de") {
        re.claims[propertyId].training = "Ausbildung";
      } else if (lang === "fr") {
        re.claims[propertyId].training = "\xC9ducation";
      } else if (lang === "es") {
        re.claims[propertyId].training = "Educaci\xF3n";
      } else if (lang === "it") {
        re.claims[propertyId].training = "Educazione";
      } else if (lang === "hu") {
        re.claims[propertyId].training = "Oktat\xE1s";
      }
      ;
      if (lang === "en") {
        re.claims[propertyId].career = "Career and activities";
      } else if (lang === "de") {
        re.claims[propertyId].career = "Beruf und Aktivit\xE4ten";
      } else if (lang === "fr") {
        re.claims[propertyId].career = "Carri\xE8re et activit\xE9s";
      } else if (lang === "es") {
        re.claims[propertyId].career = "Carrera y actividades";
      } else if (lang === "it") {
        re.claims[propertyId].career = "Carriera e attivit\xE0";
      } else if (lang === "hu") {
        re.claims[propertyId].career = "Karrier \xE9s tev\xE9kenys\xE9gek";
      }
      ;
      if (lang === "en") {
        re.claims[propertyId].sociability = "Sociability and culture";
      } else if (lang === "de") {
        re.claims[propertyId].sociability = "Soziabilit\xE4t und Kultur";
      } else if (lang === "fr") {
        re.claims[propertyId].sociability = "Sociabilit\xE9 et culture";
      } else if (lang === "es") {
        re.claims[propertyId].sociability = "Sociabilidad y cultura";
      } else if (lang === "it") {
        re.claims[propertyId].sociability = "Sociabilit\xE0 e cultura";
      } else if (lang === "hu") {
        re.claims[propertyId].sociability = "Szociabilit\xE1s \xE9s kult\xFAra";
      }
      ;
    }
    if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q22") {
      if (lang === "en") {
        re.claims[propertyId].main = "Basic object";
      } else if (lang === "de") {
        re.claims[propertyId].main = "Fundamentalobjekt";
      } else if (lang === "fr") {
        re.claims[propertyId].main = "Objet de base";
      } else if (lang === "es") {
        re.claims[propertyId].main = "Objeto b\xE1sico";
      } else if (lang === "it") {
        re.claims[propertyId].main = "Oggetto di base";
      } else if (lang === "hu") {
        re.claims[propertyId].main = "Alapobjektum";
      }
      ;
    }
    ;
    if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q147829") {
      if (lang === "en") {
        re.claims[propertyId].main = "Database";
      } else if (lang === "de") {
        re.claims[propertyId].main = "Datenbank";
      } else if (lang === "fr") {
        re.claims[propertyId].main = "Base de donn\xE9es";
      } else if (lang === "es") {
        re.claims[propertyId].main = "Base de datos";
      } else if (lang === "it") {
        re.claims[propertyId].main = "Base dati";
      } else if (lang === "hu") {
        re.claims[propertyId].main = "Adatb\xE1zis";
      }
      ;
    }
    ;
    if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q8" || re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q11174" || re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q21925" || re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q164344") {
      re.claims[propertyId].place = "place";
      re.claims[propertyId].main = "Place";
      if (lang === "en") {
        re.claims[propertyId].main = "Place";
      } else if (lang === "de") {
        re.claims[propertyId].main = "Ort";
      } else if (lang === "fr") {
        re.claims[propertyId].main = "Lieu";
      } else if (lang === "es") {
        re.claims[propertyId].main = "Lugar";
      } else if (lang === "it") {
        re.claims[propertyId].main = "Luogo";
      } else if (lang === "hu") {
        re.claims[propertyId].main = "Hely";
      }
      ;
    }
    ;
    if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q9") {
      if (lang === "en") {
        re.claims[propertyId].main = "Event";
      } else if (lang === "de") {
        re.claims[propertyId].main = "Ereignis";
      } else if (lang === "fr") {
        re.claims[propertyId].main = "\xC9v\xE8nement";
      } else if (lang === "es") {
        re.claims[propertyId].main = "Evento";
      } else if (lang === "it") {
        re.claims[propertyId].main = "Evento";
      } else if (lang === "hu") {
        re.claims[propertyId].main = "Esem\xE9ny";
      }
      ;
    }
    if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q12" || //org
    re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q220833" || re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q140806" || re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q11214") {
      re.claims[propertyId].org = "org";
      if (lang === "en") {
        re.claims[propertyId].main = "Organisation";
      } else if (lang === "de") {
        re.claims[propertyId].main = "Organisation";
      } else if (lang === "fr") {
        re.claims[propertyId].main = "Organisation";
      } else if (lang === "es") {
        re.claims[propertyId].main = "Organizaci\xF3n";
      } else if (lang === "it") {
        re.claims[propertyId].main = "Organizzazione";
      } else if (lang === "hu") {
        re.claims[propertyId].main = "Szervezet";
      }
      ;
    }
    if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q20" || re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q257227") {
      re.claims[propertyId].document = "publication";
      if (lang === "en") {
        re.claims[propertyId].main = "Print publication";
      } else if (lang === "de") {
        re.claims[propertyId].main = "Druckpublikation";
      } else if (lang === "fr") {
        re.claims[propertyId].main = "Publication imprim\xE9e";
      } else if (lang === "es") {
        re.claims[propertyId].main = "Publicaci\xF3n impresa";
      } else if (lang === "it") {
        re.claims[propertyId].main = "Pubblicazione stampata";
      } else if (lang === "hu") {
        re.claims[propertyId].main = "Nyomtatott kiadv\xE1ny";
      }
      ;
    }
    if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q146602" || //activity
    re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q21909" || re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q37073") {
      re.claims[propertyId].activity = "activity";
      if (lang === "en") {
        re.claims[propertyId].main = "Activity";
      } else if (lang === "de") {
        re.claims[propertyId].main = "Aktivit\xE4t";
      } else if (lang === "fr") {
        re.claims[propertyId].main = "Activit\xE9";
      } else if (lang === "es") {
        re.claims[propertyId].main = "Activitad";
      } else if (lang === "it") {
        re.claims[propertyId].main = "Attivit\xE0";
      } else if (lang === "hu") {
        re.claims[propertyId].main = "Tev\xE9kenys\xE9g";
      }
      ;
    }
    if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q10671" || //document
    re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q21407") {
      re.claims[propertyId].document = "document";
      if (lang === "en") {
        re.claims[propertyId].main = "Document";
      } else if (lang === "de") {
        re.claims[propertyId].main = "Dokument";
      } else if (lang === "fr") {
        re.claims[propertyId].main = "Document";
      } else if (lang === "es") {
        re.claims[propertyId].main = "Documento";
      } else if (lang === "it") {
        re.claims[propertyId].main = "Documento";
      } else if (lang === "hu") {
        re.claims[propertyId].main = "Dokumentum";
      }
      ;
    }
    if (re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q10671" || //FactGrid query
    re.claims[propertyId][j].mainsnak.datavalue.value.id == "Q21407") {
      re.claims[propertyId].document = "document";
      if (lang === "en") {
        re.claims[propertyId].main = "Document";
      } else if (lang === "de") {
        re.claims[propertyId].main = "Dokument";
      } else if (lang === "fr") {
        re.claims[propertyId].main = "Document";
      } else if (lang === "es") {
        re.claims[propertyId].main = "Documento";
      } else if (lang === "it") {
        re.claims[propertyId].main = "Documento";
      } else if (lang === "hu") {
        re.claims[propertyId].main = "Dokumentum";
      }
      ;
    }
  }
  static {
    this.\u0275fac = function FactgridSubtitlesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FactgridSubtitlesService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FactgridSubtitlesService, factory: _FactgridSubtitlesService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/qualifier-details.service.ts
var QualifierDetailsService = class _QualifierDetailsService {
  constructor() {
  }
  addQualifier2ItemDetails(re, itemProperties) {
    let qualifierPropertyArray = [];
    for (let i = 0; i < itemProperties.length; i++) {
      for (let j = 0; j < re.claims[itemProperties[i]].length; j++) {
        if (re.claims[itemProperties[i]][j].qualifiers === void 0) {
          continue;
        }
        qualifierPropertyArray = Object.keys(re.claims[itemProperties[i]][j].qualifiers);
        let qualifiersArray = Object.values(re.claims[itemProperties[i]][j].qualifiers);
        let qualifierNumbers = [];
        for (let u = 0; u < qualifierPropertyArray.length; u++) {
          let l = qualifiersArray[u].length;
          qualifierNumbers.push(l);
        }
        for (let k = 0; k < qualifierPropertyArray.length; k++) {
          let prop = qualifierPropertyArray[k];
          let qual = qualifiersArray[k];
          if (prop === "P189") {
            re.claims[itemProperties[i]][j].qualifiers2[k].label = "";
          }
          ;
          if (re.claims[itemProperties[i]][j].qualifiers2[k].id !== prop) {
            continue;
          }
          ;
          re.claims[itemProperties[i]][j].qualifiers2[k].display = [];
          for (let l = 0; l < qualifierNumbers[k]; l++) {
            if (qual[l] === void 0) {
              continue;
            }
            let qualifier = {
              datatype: qual[l].datatype,
              id: qual[l].datavalue.value.id,
              label: qual[l].datavalue.value.label,
              description: qual[l].datavalue.value.description,
              unit: qual[l].datavalue.value.unit,
              separator: ", ",
              date: qual[l].datavalue.value.date,
              calendar: qual[l].datavalue.value.calendarmodel,
              amount: qual[l].datavalue.value.amount,
              string: qual[l].datavalue.value,
              link: qual[l].datavalue.link,
              commons: "http://commons.wikimedia.org/wiki/Special:FilePath/" + qualifiersArray[k][0].datavalue.value
            };
            if (qualifier.datatype === "commonsMedia") {
              qualifier.label = "";
            }
            ;
            if (qualifier.description === void 0) {
              qualifier.separator = "";
            }
            ;
            re.claims[itemProperties[i]][j].qualifiers2[k].display.push(qualifier);
          }
          if (re.claims[itemProperties[i]][j].qualifiers2[k].id == "P820") {
            for (let m = 0; m < qualifierPropertyArray.length; m++) {
              if (qualifierPropertyArray[m] === "P277") {
                re.claims[itemProperties[i]][j].qualifiers2[m].remove = "y";
              }
            }
          }
        }
      }
    }
    return re;
  }
  static {
    this.\u0275fac = function QualifierDetailsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QualifierDetailsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QualifierDetailsService, factory: _QualifierDetailsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/typology.service.ts
var TypologyService = class _TypologyService {
  constructor() {
    this.request = inject(RequestService);
  }
  getValue(id) {
    let result = "";
    let result2;
    let prefix = "https://database.factgrid.de/wiki/Special:EntityData/";
    let suffix = ".json";
    let re = prefix + id + suffix;
    this.request.getItem(re).pipe(map((res) => {
      Object.values(res["entities"])[0]["claims"].P2[0].mainsnak.datavalue.value.id;
      ;
    }));
    return result;
  }
  static {
    this.\u0275fac = function TypologyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TypologyService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TypologyService, factory: _TypologyService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/item-info.service.ts
var ItemInfoService = class _ItemInfoService {
  constructor() {
    this.request = inject(RequestService);
    this.lang = inject(SelectedLangService);
    this.langService = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22" + this.lang.selectedLang + "%22%2C%22en%22.%20%7D%0A%7D%0A";
  }
  infoListBuilding(item) {
    let id = item.id;
    let instancesListQuery;
    let subclassesListQuery;
    let classesListQuery;
    let natureOfListQuery;
    let infoList;
    instancesListQuery = this.instancesListBuilding(id);
    subclassesListQuery = this.subclassesListBuilding(id);
    classesListQuery = this.classesListBuilding(id);
    natureOfListQuery = this.natureOfListBuilding(id);
    forkJoin([instancesListQuery, subclassesListQuery, classesListQuery, natureOfListQuery]).subscribe((res) => {
      infoList = res, item.infoList = infoList;
    });
  }
  instancesListBuilding(id) {
    let prefix = "https://database.factgrid.de/query/#SELECT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%0AWHERE%20%7B%20%3Fitem%20wdt%3AP2%20wd%3A";
    let suffix = "ORDER%20by%20%3FitemLabel";
    let suffix2 = "%20%0ALIMIT%20200";
    let u = this.newSparqlAddress(prefix + id + this.langService + suffix + suffix2);
    return this.request.getList(u).pipe(map((res) => this.listFromSparql(res)));
  }
  subclassesListBuilding(id) {
    let prefix = "https://database.factgrid.de/query/#SELECT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%0AWHERE%20%7B%20%3Fitem%20wdt%3AP3%2B%20wd%3A";
    let suffix = "ORDER%20by%20%3FitemLabel";
    let u = this.newSparqlAddress(prefix + id + this.langService + suffix);
    return this.request.getList(u).pipe(map((res) => this.listFromSparql(res)));
    ;
  }
  classesListBuilding(id) {
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%0A%3Fitem%20%5E%28wdt%3AP3%2Fwdt%3AP3%2a%29%20wd%3A";
    let suffix = "ORDER%20by%20%3FitemLabel";
    let u = this.newSparqlAddress(prefix + id + this.langService + suffix);
    return this.request.getList(u).pipe(map((res) => this.listFromSparql(res)));
    ;
  }
  natureOfListBuilding(id) {
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20WHERE%20%7B%20%3Fobject%20wdt%3AP3%2a%20%3Fitem%3B%20%5Ewdt%3AP2%20wd%3A";
    let u = this.newSparqlAddress(prefix + id + this.langService);
    return this.request.getList(u).pipe(map((res) => this.listFromSparql(res)));
    ;
  }
  listFromSparql(res) {
    if (res !== void 0) {
      if (res.results !== void 0) {
        for (let i = 0; i < res.results.bindings.length; i++) {
          res.results.bindings[i]["item"].id = res.results.bindings[i]["item"].value.replace("https://database.factgrid.de/entity/", "");
        }
        ;
      }
    }
    return res.results.bindings;
  }
  newSparqlAddress(address) {
    const newPrefix = "https://database.factgrid.de/sparql?query=";
    let oldPrefix = "https://database.factgrid.de/query/#";
    if (address.includes("embed.html")) {
      oldPrefix = "https://database.factgrid.de/query/embed.html#";
    }
    ;
    if (address !== void 0)
      address = address.replace(oldPrefix, newPrefix);
    return address;
  }
  static {
    this.\u0275fac = function ItemInfoService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ItemInfoService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ItemInfoService, factory: _ItemInfoService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/longest-word.service.ts
var LongestWordService = class _LongestWordService {
  constructor() {
  }
  findLongestWord(str) {
    var longestWord = str.split(" ").reduce(function(longest, currentWord) {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord.length;
  }
  static {
    this.\u0275fac = function LongestWordService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LongestWordService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LongestWordService, factory: _LongestWordService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/item-details.service.ts
var ItemDetailsService = class _ItemDetailsService {
  constructor() {
    this.setDate = inject(SetTimeService);
    this.factgrid = inject(FactgridSubtitlesService);
    this.qualifier = inject(QualifierDetailsService);
    this.typology = inject(TypologyService);
    this.itemInfo = inject(ItemInfoService);
    this.longestLength = inject(LongestWordService);
    this.baseWikimediaURL = "http://commons.wikimedia.org/wiki/Special:FilePath/";
  }
  addLongestWordLength(re) {
    re.longestWordLength = this.longestLength.findLongestWord(re.label);
  }
  addClaimItemDetails(items, re, itemProperties, lang) {
    for (let i = 0; i < itemProperties.length; i++) {
      let timeOrder = 23e6;
      re.claims[itemProperties[i]].datatype = re.claims[itemProperties[i]][0].mainsnak.datatype;
      for (let j = 0; j < re.claims[itemProperties[i]].length; j++) {
        re.claims[itemProperties[i]][j].mainsnak.timeOrder = timeOrder;
        if (re.claims[itemProperties[i]][j].mainsnak.datatype === "time") {
          let value = re.claims[itemProperties[i]][j].mainsnak.datavalue.value.time;
          value = value.substring(0, value.length - 10);
          re.claims[itemProperties[i]][j].mainsnak.datavalue.value.date = this.setDate.setDate(value, lang);
        }
        if (itemProperties[i] === "P189" || itemProperties[i] === "P556" || itemProperties[i] === "P181" || itemProperties[i] === "P1267") {
          re.claims[itemProperties[i]][j].picture = this.baseWikimediaURL + re.claims[itemProperties[i]][j].mainsnak.datavalue.value;
        }
        if (itemProperties[i] === "P188") {
          let u = re.claims[itemProperties[i]][j].mainsnak.datavalue.value.substring(0, 5);
          if (u !== "http:") {
            re.claims[itemProperties[i]][j].picture = re.claims[itemProperties[i]][j].mainsnak.datavalue.value;
          }
        }
        if (itemProperties[i] === "P320") {
          re.claims[itemProperties[i]][j].mainsnak.datatype = "sparql";
        }
        ;
        this.factgrid.setSubtitle1(re, itemProperties[i], lang);
        if (re.claims[itemProperties[i]][j].mainsnak.datatype !== "wikibase-item") {
          continue;
        }
        let number = j;
        this.factgrid.setSubtitle2(re, itemProperties[i], number, lang);
        for (let k = 0; k < items.length; k++) {
          if (re.claims[itemProperties[i]][j].mainsnak.datavalue.value.id === items[k].id) {
            re.claims[itemProperties[i]][j].mainsnak.label = items[k].label;
            if (items[k].description !== void 0)
              re.claims[itemProperties[i]][j].mainsnak.description = items[k].description;
            items[k].description ? re.claims[itemProperties[i]][j].mainsnak.separator = ", " : re.claims[itemProperties[i]][j].mainsnak.separator = "";
            if (items[k].aliases !== void 0)
              re.claims[itemProperties[i]][j].mainsnak.aliases = items[k].aliases;
          }
        }
      }
    }
    return re;
  }
  addQualifierItemDetails(items, re, itemProperties, lang) {
    for (let i = 0; i < itemProperties.length; i++) {
      for (let j = 0; j < re.claims[itemProperties[i]].length; j++) {
        if (itemProperties[i] == "P2") {
          re.claims[itemProperties[i]][j].mainsnak.timeOrder = "0";
        }
        ;
        if (re.claims[itemProperties[i]][j].qualifiers === void 0) {
          continue;
        }
        let props = Object.keys(re.claims[itemProperties[i]][j].qualifiers);
        for (let k = 0; k < props.length; k++) {
          for (let l = 0; l < props[k].length; l++) {
            if (re.claims[itemProperties[i]][j].qualifiers[props[k]][l] === void 0) {
              continue;
            }
            ;
            if (re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datatype === "time") {
              let value = re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.time;
              value = value.substring(0, value.length - 10);
              re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.date = this.setDate.setDate(value, lang);
            }
            if (re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datatype === "external-id") {
              this.setUrl(re.claims[itemProperties[i]][j].qualifiers[props[k]][l], props[k]);
            }
            for (let m = 0; m < items.length; m++) {
              if (re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.id !== items[m].id) {
                continue;
              }
              if (re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datatype === "wikibase-item") {
                re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.label = items[m].label;
                re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.description = items[m].description;
                re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.aliases = items[m].aliases;
              }
              if (re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datatype === "commonsMedia") {
                re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.label = items[m].label;
                re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.description = items[m].description;
                re.claims[itemProperties[i]][j].qualifiers[props[k]][l].datavalue.value.aliases = items[m].aliases;
              }
            }
          }
        }
        for (let k = 0; k < props.length; k++) {
          if (re.claims[itemProperties[i]][j].qualifiers === void 0) {
            continue;
          }
          ;
          if (re.claims[itemProperties[i]][j].qualifiers[props[k]] === void 0) {
            continue;
          }
          ;
          if (re.claims[itemProperties[i]][j].qualifiers[props[k]][0].datatype === "time") {
            re.claims[itemProperties[i]][j].mainsnak.timeOrder = re.claims[itemProperties[i]][j].qualifiers[props[k]][0].datavalue.value.time;
            let era = re.claims[itemProperties[i]][j].mainsnak.timeOrder.charAt(0);
            re.claims[itemProperties[i]][j].mainsnak.timeOrder = Number(re.claims[itemProperties[i]][j].mainsnak.timeOrder.replace(/\-/g, "").replace(/\+/g, "").substring(0, 8));
            if (era != "+") {
              re.claims[itemProperties[i]][j].mainsnak.timeOrder = -Math.abs(re.claims[itemProperties[i]][j].mainsnak.timeOrder);
            }
            ;
            re.claims[itemProperties[i]].sort(function(a, b) {
              if (a.mainsnak.timeOrder < b.mainsnak.timeOrder)
                return -1;
              if (a.mainsnak.timeOrder > b.mainsnak.timeOrder)
                return 1;
              return 0;
            });
          }
        }
      }
    }
    this.qualifier.addQualifier2ItemDetails(re, itemProperties);
    return re;
  }
  addReferenceItemDetails(items, re, itemProperties, lang) {
    for (let i = 0; i < itemProperties.length; i++) {
      for (let j = 0; j < re.claims[itemProperties[i]].length; j++) {
        if (re.claims[itemProperties[i]][j].references === void 0) {
          continue;
        }
        for (let k = 0; k < re.claims[itemProperties[i]][j].references.length; k++) {
          let props = Object.keys(re.claims[itemProperties[i]][j].references[k].snaks);
          for (let l = 0; l < items.length; l++) {
            for (let a = 0; a < props.length; a++) {
              for (let b = 0; b < re.claims[itemProperties[i]][j].references[k].snaks[props[a]].length; b++) {
                if (re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datatype === "time") {
                  let value = re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datavalue.value.time;
                  value = value.substring(0, value.length - 10);
                  re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datavalue.value.date = this.setDate.setDate(value, lang);
                }
                if (re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datatype === "external-id") {
                  this.setUrl(re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b], props[a]);
                }
                if (re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datatype !== "wikibase-item") {
                  continue;
                }
                if (re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datavalue.value.id === items[l].id) {
                  if (re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b] !== void 0) {
                    re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datavalue.value.label = items[l].label;
                    if (items[l].description !== void 0)
                      re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datavalue.value.description = items[l].description;
                    items[l].description ? re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datavalue.value.separator = ", " : re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datavalue.value.separator = "";
                    if (items[l].aliases !== void 0)
                      re.claims[itemProperties[i]][j].references[k].snaks[props[a]][b].datavalue.value.aliases = items[l].aliases;
                  }
                }
              }
            }
          }
        }
      }
    }
    return re;
  }
  addReference2ItemDetails(items, re, itemProperties) {
    for (let i = 0; i < itemProperties.length; i++) {
      for (let j = 0; j < re.claims[itemProperties[i]].length; j++) {
        if (re.claims[itemProperties[i]][j].references2 === void 0) {
          continue;
        }
        for (let k = 0; k < re.claims[itemProperties[i]][j].references2.length; k++) {
          for (let l = 0; l < re.claims[itemProperties[i]][j].references.length; l++) {
            let props = Object.keys(re.claims[itemProperties[i]][j].references[l].snaks);
            let referencesArray = Object.values(re.claims[itemProperties[i]][j].references[l].snaks);
            for (let m = 0; m < props.length; m++) {
              if (re.claims[itemProperties[i]][j].references2[k][m] === void 0) {
                continue;
              }
              ;
              let display = [];
              for (let n = 0; n < re.claims[itemProperties[i]][j].references[l].snaks[props[m]].length; n++) {
                if (re.claims[itemProperties[i]][j].references2[k][m].id === props[m]) {
                  if (re.claims[itemProperties[i]][j].references[l].snaks[props[m]][n].datavalue.value) {
                    if (re.claims[itemProperties[i]][j].references[l].snaks[props[m]][n].datatype === "external-id") {
                      display.push(re.claims[itemProperties[i]][j].references[l].snaks[props[m]][n].datavalue);
                    } else if (re.claims[itemProperties[i]][j].references[l].snaks[props[m]][n].datatype === "time") {
                      display.push(re.claims[itemProperties[i]][j].references[l].snaks[props[m]][n].datavalue.value.date);
                    } else {
                      display.push(re.claims[itemProperties[i]][j].references[l].snaks[props[m]][n].datavalue.value);
                    }
                  }
                  re.claims[itemProperties[i]][j].references2[k][m].display = display;
                }
              }
            }
          }
        }
      }
    }
    return re;
  }
  addSitelinksDetails(re) {
    if (re.sitelinks.commonswiki !== void 0) {
      let url = re.sitelinks.commonswiki.title.replace(" ", "_");
      re.sitelinks.commonswiki.url = "https://commons.wikimedia.org/wiki/" + url;
    }
    if (re.sitelinks.enwiki !== void 0) {
      let url = re.sitelinks.enwiki.title.replace(" ", "_");
      re.sitelinks.enwiki.url = "https://en.wikipedia.org/wiki/" + url;
    }
    if (re.sitelinks.dewiki !== void 0) {
      let url = re.sitelinks.dewiki.title.replace(" ", "_");
      re.sitelinks.dewiki.url = "https://de.wikipedia.org/wiki/" + url;
    }
    if (re.sitelinks.frwiki !== void 0) {
      let url = re.sitelinks.frwiki.title.replace(" ", "_");
      re.sitelinks.frwiki.url = "https://fr.wikipedia.org/wiki/" + url;
    }
    if (re.sitelinks.wikidatawiki !== void 0) {
      re.sitelinks.wikidatawiki.url = "https://www.wikidata.org/wiki/" + re.sitelinks.wikidatawiki.title;
    }
  }
  addItemInfo(re) {
  }
  setUrl(u, p) {
    if (u.externalLink !== void 0) {
      u.datavalue.link = u.externalLink.replace("$1", u.datavalue.value);
    }
    if (p === "P76") {
      u.datavalue.link = "https://explore.gnd.network/gnd/" + u.datavalue.value;
    }
    ;
    if (p === "P368") {
      u.datavalue.link = "http://gateway-bayern.de/VD16+" + u.datavalue.value;
    }
    ;
    if (p === "P369") {
      u.datavalue.link = "https://kxp.k10plus.de/DB=1.28/CMD?ACT=SRCHA&IKT=8079&TRM=%27:" + u.datavalue.value + "%27";
    }
    ;
    if (p === "P370") {
      u.datavalue.link = "https://kxp.k10plus.de/DB=1.65/CMD?ACT=SRCHA&IKT=8080&TRM=VD18" + u.datavalue.value;
    }
    ;
    if (p === "P650") {
      let province = u.datavalue.value.slice(0, 2);
      let municipality = u.datavalue.value.slice(2, 5);
      let parish = u.datavalue.value.slice(5, 7);
      let es = u.datavalue.value.slice(7, 9);
      u.datavalue.link = u.externalLink.replace("$1", province);
      u.datavalue.link = u.datavalue.link.replace("$2", municipality);
      u.datavalue.link = u.datavalue.link.replace("$3", parish);
      u.datavalue.link = u.datavalue.link.replace("$4", es);
      u.datavalue.link = u.datavalue.link.replace("$5", "00");
    }
    ;
    if (p === "P882") {
      u.datavalue.link = "https://drw-www.adw.uni-heidelberg.de/drw-cgi/zeige?index=lemmata&term=" + u.datavalue.value + "&darstellung=V";
    }
    ;
  }
  static {
    this.\u0275fac = function ItemDetailsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ItemDetailsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ItemDetailsService, factory: _ItemDetailsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/role-of-object-rendering.service.ts
var RoleOfObjectRenderingService = class _RoleOfObjectRenderingService {
  constructor() {
  }
  roleOfObject(re) {
    let claims = Object.values(re.claims);
    console.log(re.claims);
    for (const claim of claims) {
      for (const snak of claim) {
        if (snak.mainsnak.property == "P247" || snak.mainsnak.property == "P208") {
          if (snak.qualifiers2) {
            for (const qualif2 of snak.qualifiers2) {
              if (qualif2.id == "P820") {
                for (let j = 0; j < qualif2.display.length; j++) {
                  let u = { key: { mainsnak: { property: qualif2.display[j].id, datatype: snak.mainsnak.datatype, label: snak.mainsnak.label, description: snak.mainsnak.description, datavalue: { value: { id: snak.mainsnak.datavalue.value.id } } } } };
                  let v = Object.values(u);
                  if (v[0].mainsnak.property === "Q448941") {
                    re.claims.Q448941 = v;
                    re.claims.Q448941.label = qualif2.display[j].label;
                    qualif2.display.splice(j, 1);
                  }
                  if (v[0].mainsnak.property === "Q28006") {
                    re.claims.Q28006 = v;
                    re.claims.Q28006.label = qualif2.display[j].label;
                    qualif2.display.splice(j, 1);
                  }
                  if (v[0].mainsnak.property === "Q468366") {
                    re.claims.Q468366 = v;
                    re.claims.Q468366.label = qualif2.display[j].label;
                    qualif2.display.splice(j, 1);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  static {
    this.\u0275fac = function RoleOfObjectRenderingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoleOfObjectRenderingService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoleOfObjectRenderingService, factory: _RoleOfObjectRenderingService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/back-list.service.ts
var BackListService = class _BackListService {
  constructor() {
    this.requestService = inject(RequestService);
    this.backListDetails = inject(BackListDetailsService);
  }
  backList(item, lang) {
    let u = this.requestService.getBackList(item, lang);
    return u;
  }
  static {
    this.\u0275fac = function BackListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BackListService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BackListService, factory: _BackListService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/create-item-to-display.service.ts
var CreateItemToDisplayService = class _CreateItemToDisplayService {
  constructor() {
    this.setLanguage = inject(SetLanguageService);
    this.details = inject(DetailsService);
    this.setItem = inject(SetItemToDisplayService);
    this.addPropertyDetails = inject(PropertyDetailsService);
    this.addItemDetails = inject(ItemDetailsService);
    this.itemSparql = inject(ItemSparqlService);
    this.roleOfObject = inject(RoleOfObjectRenderingService);
    this.backList = inject(BackListService);
    this.typology = inject(TypologyService);
  }
  createItemToDisplay(re, selectedLang) {
    let itemProperties = Object.keys(re.claims);
    let observedItem = forkJoin({
      properties: this.details.setPropertiesList(re),
      items: this.details.setItemsList(re)
    }).pipe(map((res) => {
      let propertiesDetails = this.setLanguage.item2(res.properties, selectedLang);
      let qualifierProperties = this.addPropertyDetails.addQualifierPropertyDetails(propertiesDetails, re, itemProperties)[1];
      let referenceProperties = this.details.getReferenceProperties(re);
      this.addItemDetails.addSitelinksDetails(re);
      this.addPropertyDetails.addClaimPropertyDetails(propertiesDetails, re, itemProperties);
      this.addPropertyDetails.addQualifier2PropertyDetails(propertiesDetails, re, itemProperties)[1];
      this.addPropertyDetails.addReferencePropertyDetails(propertiesDetails, re, itemProperties);
      this.addPropertyDetails.addReference2PropertyDetails(propertiesDetails, re, itemProperties);
      let itemsDetails = this.setLanguage.item2(res.items, selectedLang);
      this.addItemDetails.addClaimItemDetails(itemsDetails, re, itemProperties, selectedLang);
      this.addItemDetails.addQualifierItemDetails(itemsDetails, re, itemProperties, selectedLang);
      this.addItemDetails.addReferenceItemDetails(itemsDetails, re, itemProperties, selectedLang);
      let item = this.addItemDetails.addReference2ItemDetails(itemsDetails, re, itemProperties);
      return [item, itemProperties, qualifierProperties, referenceProperties];
    }));
    return observedItem;
  }
  static {
    this.\u0275fac = function CreateItemToDisplayService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreateItemToDisplayService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CreateItemToDisplayService, factory: _CreateItemToDisplayService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/create-complete-item.service.ts
var CreateCompleteItemService = class _CreateCompleteItemService {
  constructor() {
    this.createItem = inject(CreateItemToDisplayService);
    this.itemInfo = inject(ItemInfoService);
    this.itemSparql = inject(ItemSparqlService);
    this.setLanguage = inject(SetLanguageService);
    this.lang = inject(SelectedLangService);
  }
  completeItem(res) {
    let u = this.createItem.createItemToDisplay(res = this.setLanguage.item(res, this.lang.selectedLang)[0], this.lang.selectedLang);
    this.itemInfo.infoListBuilding(res);
    this.itemSparql.itemSparql(res);
    return u;
  }
  static {
    this.\u0275fac = function CreateCompleteItemService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreateCompleteItemService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CreateCompleteItemService, factory: _CreateCompleteItemService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/set-data.service.ts
var SetDataService = class _SetDataService {
  constructor() {
    this.createItem = inject(CreateItemToDisplayService);
    this.createCompleteItem = inject(CreateCompleteItemService);
    this.setLanguage = inject(SetLanguageService);
    this.request = inject(RequestService);
    this.lang = inject(SelectedLangService);
    this.sparqlResult = new Subject();
    this.selectedLang = localStorage["selectedLang"] === void 0 ? "en" : localStorage["selectedLang"];
    this.baseGetURL = "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=";
    this.getUrlSuffix = "&format=json&origin=*";
  }
  itemToDisplay(id) {
    let labelLength = 0;
    let url = this.baseGetURL + id + this.getUrlSuffix;
    let completeItem = this.request.getItem(url).pipe(
      // get the item
      map((res) => res = Object.values(res.entities)),
      switchMap((res) => completeItem = this.createCompleteItem.completeItem(res))
    );
    return completeItem;
  }
  sparqlAsk(sparql) {
    let u = "";
    let sparqlResult;
    let selectedSparql = this.newSparqlAdress(sparql);
    sparqlResult = this.request.getAsk(selectedSparql);
    sparqlResult.subscribe((re) => {
      u = re.boolean;
      return u;
    });
    return sparqlResult;
  }
  sparqlToDisplay(sparql) {
    let sparqlResult;
    if (sparql.includes("item")) {
      let selectedSparql = this.newSparqlAdress(sparql);
      sparqlResult = this.request.getList(selectedSparql);
    }
    return sparqlResult;
  }
  sparqlToDownload(sparql) {
    let selectedSparql = this.newSparqlAdress(sparql);
    this.request.downLoadList(selectedSparql);
  }
  newSparqlAdress(address) {
    const newPrefix = "https://database.factgrid.de/sparql?query=";
    let oldPrefix = "https://database.factgrid.de/query/#";
    if (address.includes("embed.html")) {
      oldPrefix = "https://database.factgrid.de/query/embed.html#";
    }
    ;
    if (address !== void 0)
      address = address.replace(oldPrefix, newPrefix);
    return address;
  }
  static {
    this.\u0275fac = function SetDataService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetDataService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SetDataService, factory: _SetDataService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/transcript-display.service.ts
var TranscriptDisplayService = class _TranscriptDisplayService {
  constructor() {
    this.request = inject(RequestService);
  }
  transcript(u) {
    let txt;
    console.log(u);
    let v = u.replace("https://database.factgrid.de/wiki/", "");
    v = v.replace("#Transcript", "");
    v = this.request.getTranscript(v);
    return v;
    return v;
  }
  static {
    this.\u0275fac = function TranscriptDisplayService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TranscriptDisplayService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TranscriptDisplayService, factory: _TranscriptDisplayService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/set-selected-items-list.service.ts
var SetSelectedItemsListService = class _SetSelectedItemsListService {
  constructor() {
  }
  addToSelectedItemsList(item) {
    let u = { value: { id: item.id }, label: item.label };
    let selectedItemsList = JSON.parse(localStorage.getItem("selectedItems"));
    if (selectedItemsList !== void 0) {
      for (let i = 0; i < selectedItemsList.length; i++) {
        if (selectedItemsList[i] !== null) {
          if (selectedItemsList[i].value.id === u.value.id) {
            selectedItemsList.splice(i, 1);
            break;
          }
        }
      }
    }
    selectedItemsList.unshift(u);
    if (selectedItemsList.length = 51) {
      selectedItemsList.pop();
    }
    ;
    localStorage.setItem("selectedItems", JSON.stringify(selectedItemsList));
    return localStorage;
  }
  static {
    this.\u0275fac = function SetSelectedItemsListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetSelectedItemsListService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SetSelectedItemsListService, factory: _SetSelectedItemsListService.\u0275fac, providedIn: "root" });
  }
};

// src/app/display/services/transcription.service.ts
var TranscriptionService = class _TranscriptionService {
  constructor() {
  }
  cleaning(u) {
    let v = "";
    let u2;
    let regex2 = /<\s*s[^>]*>/g;
    u2 = u.replace(regex2, "");
    let regex = /<\s*a[^>]*>/g;
    u2 = u2.replace(regex, "");
    let regex1 = /<\s*![^>]*>/g;
    u2 = u2.replace(regex1, "");
    u2 = u2.replaceAll("span>edit", "");
    u2 = u2.replaceAll("modifier", "");
    u2 = u2.replaceAll(">[<", "");
    u2 = u2.replaceAll(">]<", "");
    u2 = u2.replaceAll("mw-healine", "property2");
    u2 = u2.replaceAll(" (talk</a>)", "");
    v = u2.replaceAll("</p><p>", "");
    return v;
  }
  static {
    this.\u0275fac = function TranscriptionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TranscriptionService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TranscriptionService, factory: _TranscriptionService.\u0275fac, providedIn: "root" });
  }
};

// src/app/join.pipe.ts
var JoinPipe = class _JoinPipe {
  transform(input2, sep = " | ") {
    if (input2 !== void 0) {
      return input2.join(sep);
    }
    ;
  }
  static {
    this.\u0275fac = function JoinPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JoinPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "join", type: _JoinPipe, pure: true, standalone: true });
  }
};

// src/app/unit.pipe.ts
var UnitPipe = class _UnitPipe {
  constructor() {
    this.http = inject(HttpClient);
    this.unit = null;
  }
  transform(value) {
    let lang = localStorage["selectedLang"];
    let unit = "Unit: ";
    if (lang === "de") {
      unit = "Einheit: ";
    }
    ;
    if (lang === "fr") {
      unit = "Unit\xE9: ";
    }
    ;
    if (lang === "es") {
      unit = "Unidad: ";
    }
    ;
    if (lang === "hu") {
      unit = "Egys\xE9g: ";
    }
    ;
    if (lang === "it") {
      unit = "Unit\xE0: ";
    }
    ;
    value = value.replace("https://database.factgrid.de/entity/", "");
    let params = new HttpParams().set("action", "wbgetentities").set("languages", lang).set("props", "labels").set("ids", value).set("format", "json").set("origin", "*");
    let response = this.http.get("https://database.factgrid.de//w/api.php", { params }).pipe(map((res) => unit + Object.values(Object.values(Object.values(Object.values(Object.values(res)[0])[0])[2])[0])[1]));
    return response;
  }
  static {
    this.\u0275fac = function UnitPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "unit", type: _UnitPipe, pure: true, standalone: true });
  }
};

// src/app/display/item-info/item-info.component.ts
var _c0 = () => ["/item", "Q220486"];
var _c1 = () => ["/item", "Q505980"];
var _c2 = (a0) => ["/item", a0];
function ItemInfoComponent_For_6_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, " greg. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 14)(3, "mat-icon", 15);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, " jul. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 14)(3, "mat-icon", 15);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ItemInfoComponent_For_6_For_5_Conditional_2_Conditional_2_Template, 6, 3, "span", 13)(3, ItemInfoComponent_For_6_For_5_Conditional_2_Conditional_3_Template, 6, 3, "span", 13);
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value.date);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datavalue.value.calendarmodel === "http://www.wikidata.org/entity/Q1985727" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datavalue.value.calendarmodel === "http://www.wikidata.org/entity/Q1985786" ? 3 : -1);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", M_r1.mainsnak.datavalue.value.text, ", ", M_r1.mainsnak.datavalue.value.language, "");
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10)(1, "a", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", M_r1.mainsnak.datavalue.value, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("latitude: ", M_r1.mainsnak.datavalue.value.latitude, ", longitude: ", M_r1.mainsnak.datavalue.value.longitude, "");
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "span")(2, "img", 17);
    \u0275\u0275listener("click", function ItemInfoComponent_For_6_For_5_Conditional_9_Template_img_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const M_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openImage(M_r1.picture));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", M_r1.picture, \u0275\u0275sanitizeUrl);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 14)(3, "mat-icon", 15);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, " \xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", M_r1.mainsnak.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c2, M_r1.mainsnak.datavalue.value.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", M_r1.mainsnak.separator, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", M_r1.mainsnak.description, "\xA0");
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xA0(", M_r1.rank, ")");
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, " greg. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 14)(3, "mat-icon", 15);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, " jul. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 14)(3, "mat-icon", 15);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_2_Template, 6, 3, "span", 13)(3, ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_3_Template, 6, 3, "span", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.date, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.calendar === "http://www.wikidata.org/entity/Q1985727" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.calendar === "http://www.wikidata.org/entity/Q1985786" ? 3 : -1);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_2_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_106_r6 = ctx_r4.$index;
    const \u0275$count_106_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.string, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_106_r6 === \u0275$count_106_r7 - 1) ? 2 : -1);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_3_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_106_r6 = ctx_r4.$index;
    const \u0275$count_106_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.string.text, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_106_r6 === \u0275$count_106_r7 - 1) ? 2 : -1);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "em");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "unit");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\xA0");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xA0(", \u0275\u0275pipeBind1(4, 3, \u0275\u0275pipeBind1(3, 1, D_r4.unit)), ")");
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_7_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_106_r6 = ctx_r4.$index;
    const \u0275$count_106_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", D_r4.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(D_r4.string);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_106_r6 === \u0275$count_106_r7 - 1) ? 3 : -1);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10)(1, "a", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_8_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_106_r6 = ctx_r4.$index;
    const \u0275$count_106_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", D_r4.string, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(D_r4.string);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_106_r6 === \u0275$count_106_r7 - 1) ? 3 : -1);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xA0\xA0\xA0");
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 14)(3, "mat-icon", 15);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_9_Conditional_5_Template, 1, 0);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c2, D_r4.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(D_r4.description ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.separator, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(D_r4.description);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "span")(2, "img", 20);
    \u0275\u0275listener("click", function ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_10_Template_img_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const D_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.openImage(D_r4.commons));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", D_r4.commons, \u0275\u0275sanitizeUrl);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_1_Template, 4, 3, "span")(2, ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_2_Template, 3, 2, "span")(3, ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_3_Template, 3, 2, "span");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_6_Template, 6, 5, "span")(7, ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_7_Template, 4, 3)(8, ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_8_Template, 4, 3)(9, ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_9_Template, 9, 8, "span")(10, ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_10_Template, 3, 1, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_11_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const D_r4 = ctx.$implicit;
    const \u0275$index_106_r6 = ctx.$index;
    const \u0275$count_106_r7 = ctx.$count;
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "time" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "string" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "monolingualtext" ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(D_r4.amount);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.unit ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "external-id" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "url" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "wikibase-item" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "commonsMedia" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_106_r6 === \u0275$count_106_r7 - 1) ? 11 : -1);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 19)(2, "em");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, ItemInfoComponent_For_6_For_5_Conditional_13_For_2_For_5_Template, 12, 10, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const Q_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", Q_r9.label, ":\xA0");
    \u0275\u0275advance();
    \u0275\u0275repeater(Q_r9.display);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275repeaterCreate(1, ItemInfoComponent_For_6_For_5_Conditional_13_For_2_Template, 6, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(M_r1.qualifiers2);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 14)(3, "mat-icon", 15);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Conditional_9_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_219_r12 = ctx_r9.$index;
    const \u0275$count_219_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", P_r11.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c2, P_r11.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", P_r11.separator, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(P_r11.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_219_r12 === \u0275$count_219_r13 - 1) ? 9 : -1);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_219_r12 = ctx_r9.$index;
    const \u0275$count_219_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", P_r11, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_219_r12 === \u0275$count_219_r13 - 1) ? 2 : -1);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_219_r12 = ctx_r9.$index;
    const \u0275$count_219_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", P_r11, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_219_r12 === \u0275$count_219_r13 - 1) ? 2 : -1);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10)(1, "a", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_219_r12 = ctx_r9.$index;
    const \u0275$count_219_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", P_r11, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(P_r11);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_219_r12 === \u0275$count_219_r13 - 1) ? 3 : -1);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_219_r12 = ctx_r9.$index;
    const \u0275$count_219_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", P_r11.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(P_r11.value);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_219_r12 === \u0275$count_219_r13 - 1) ? 3 : -1);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Template, 10, 8)(1, ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Template, 3, 2, "span")(2, ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Template, 3, 2, "span")(3, ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Template, 4, 3)(4, ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Template, 4, 3);
  }
  if (rf & 2) {
    const N_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(N_r14.datatype === "wikibase-item" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "time" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "string" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "url" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "external-id" ? 4 : -1);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275repeaterCreate(4, ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Template, 5, 5, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_Conditional_6_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const N_r14 = ctx.$implicit;
    const \u0275$index_211_r15 = ctx.$index;
    const \u0275$count_211_r16 = ctx.$count;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", N_r14.label, ": ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(N_r14.display);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(\u0275$index_211_r15 === \u0275$count_211_r16 - 1) ? 6 : -1);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_14_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275repeaterCreate(1, ItemInfoComponent_For_6_For_5_Conditional_14_For_1_For_2_Template, 7, 2, "div", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const Ma_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(Ma_r17);
  }
}
function ItemInfoComponent_For_6_For_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ItemInfoComponent_For_6_For_5_Conditional_14_For_1_Template, 3, 0, "div", 21, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(M_r1["references2"]);
  }
}
function ItemInfoComponent_For_6_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div");
    \u0275\u0275template(2, ItemInfoComponent_For_6_For_5_Conditional_2_Template, 4, 3)(3, ItemInfoComponent_For_6_For_5_Conditional_3_Template, 2, 2, "span")(4, ItemInfoComponent_For_6_For_5_Conditional_4_Template, 2, 1, "span", 10)(5, ItemInfoComponent_For_6_For_5_Conditional_5_Template, 3, 2, "span", 10);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ItemInfoComponent_For_6_For_5_Conditional_8_Template, 2, 2, "span")(9, ItemInfoComponent_For_6_For_5_Conditional_9_Template, 3, 1, "div")(10, ItemInfoComponent_For_6_For_5_Conditional_10_Template, 9, 7)(11, ItemInfoComponent_For_6_For_5_Conditional_11_Template, 2, 1, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 12);
    \u0275\u0275template(13, ItemInfoComponent_For_6_For_5_Conditional_13_Template, 3, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ItemInfoComponent_For_6_For_5_Conditional_14_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "time" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "monolingualtext" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "string" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "url" ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value.amount);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "globe-coordinate" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "commonsMedia" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "wikibase-item" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.rank == "deprecated" ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(M_r1["qualifiers-order"] ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1["references2"] ? 14 : -1);
  }
}
function ItemInfoComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, ItemInfoComponent_For_6_For_5_Template, 15, 11, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const P_r18 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", P_r18.label, ":");
    \u0275\u0275advance();
    \u0275\u0275repeater(P_r18);
  }
}
function ItemInfoComponent_For_15_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r19 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", L_r19.itemDescription.value, ")");
  }
}
function ItemInfoComponent_For_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275template(2, ItemInfoComponent_For_15_Conditional_2_Conditional_2_Template, 2, 1, "span", 18);
    \u0275\u0275elementStart(3, "mat-icon-button", 14)(4, "mat-icon", 15);
    \u0275\u0275text(5, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(6, "\xA0\xA0\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", L_r19.itemLabel.value, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(L_r19.itemDescription ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c2, L_r19.item.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function ItemInfoComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div");
    \u0275\u0275template(2, ItemInfoComponent_For_15_Conditional_2_Template, 7, 6, "label");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "hr");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r19 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(L_r19.itemLabel.value ? 2 : -1);
  }
}
function ItemInfoComponent_For_22_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r20 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", L_r20.itemDescription.value, ")");
  }
}
function ItemInfoComponent_For_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275template(2, ItemInfoComponent_For_22_Conditional_2_Conditional_2_Template, 2, 1, "span", 18);
    \u0275\u0275elementStart(3, "mat-icon-button", 14)(4, "mat-icon", 15);
    \u0275\u0275text(5, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(6, "\xA0\xA0\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", L_r20.itemLabel.value, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(L_r20.itemDescription ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c2, L_r20.item.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function ItemInfoComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div");
    \u0275\u0275template(2, ItemInfoComponent_For_22_Conditional_2_Template, 7, 6, "label");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "hr");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r20 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(L_r20.itemLabel.value ? 2 : -1);
  }
}
function ItemInfoComponent_For_29_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r21 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", L_r21.itemDescription.value, ")");
  }
}
function ItemInfoComponent_For_29_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275template(2, ItemInfoComponent_For_29_Conditional_2_Conditional_2_Template, 2, 1, "span", 18);
    \u0275\u0275elementStart(3, "mat-icon-button", 14)(4, "mat-icon", 15);
    \u0275\u0275text(5, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(6, "\xA0\xA0\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", L_r21.itemLabel.value, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(L_r21.itemDescription ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c2, L_r21.item.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function ItemInfoComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div");
    \u0275\u0275template(2, ItemInfoComponent_For_29_Conditional_2_Template, 7, 6, "label");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "hr");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r21 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(L_r21.itemLabel.value ? 2 : -1);
  }
}
function ItemInfoComponent_For_36_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r22 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", L_r22.itemDescription.value, ")");
  }
}
function ItemInfoComponent_For_36_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275template(2, ItemInfoComponent_For_36_Conditional_2_Conditional_2_Template, 2, 1, "span", 18);
    \u0275\u0275elementStart(3, "mat-icon-button", 14)(4, "mat-icon", 15);
    \u0275\u0275text(5, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(6, "\xA0\xA0\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", L_r22.itemLabel.value, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(L_r22.itemDescription ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c2, L_r22.item.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function ItemInfoComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 24);
    \u0275\u0275template(2, ItemInfoComponent_For_36_Conditional_2_Template, 7, 6, "label");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "hr");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r22 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(L_r22.itemLabel.value ? 2 : -1);
  }
}
var ItemInfoComponent = class _ItemInfoComponent {
  constructor() {
    this.lang = inject(SelectedLangService);
    this.selectedLang = localStorage["selectedLang"] === void 0 ? "en" : localStorage["selectedLang"];
    this.list1 = [];
    this.list2 = [];
    this.list3 = [];
    this.list4 = [];
    this.isList1 = false;
    this.isList2 = false;
    this.isList3 = false;
    this.isList4 = false;
    this.isInfo = false;
    this.instancesListTitle = "instances of the Q-item:";
    this.subclassesListTitle = "subclasses of the Q-item:";
    this.subInfoTitle = "Information on the Q-item";
    this.classesListTitle = "classes of the Q-item:";
    this.natureOfListTitle = "instance of";
    this.prefix1 = "class hierarchy: class depending on ";
    this.prefix2 = "class hierarchy: class with ";
    this.suffix1 = "classes:";
  }
  openImage(image) {
    window.open(image);
  }
  ngOnChanges(changes) {
    this.instancesListTitle = this.lang.instancesListTitle(this.instancesListTitle);
    this.subclassesListTitle = this.lang.subclassesListTitle(this.subclassesListTitle);
    this.classesListTitle = this.lang.classesListTitle(this.classesListTitle);
    this.natureOfListTitle = this.lang.natureOfListTitle(this.natureOfListTitle);
    this.subInfoTitle = this.lang.subInfoTitle(this.subInfoTitle);
    this.prefix1 = this.lang.prefix1(this.prefix1);
    this.prefix2 = this.lang.prefix2(this.prefix2);
    this.suffix1 = this.lang.suffix1(this.suffix1);
    if (changes.subclassesList && changes.subclassesList.currentValue) {
      this.list1 = this.subclassesList;
    }
    if (changes.instancesList && changes.instancesList.currentValue) {
      this.list2 = this.instancesList;
    }
    if (changes.classesList && changes.classesList.currentValue) {
      this.list3 = this.classesList;
    }
    if (changes.natureOfList && changes.natureOfList.currentValue) {
      this.list4 = this.natureOfList;
    }
    this.list1Number = this.list1.length;
    this.list2Number = this.list2.length;
    this.list3Number = this.list3.length;
    this.list4Number = this.list4.length;
    if (this.list1Number + this.list2Number + this.list3Number + this.list4Number > 0) {
      this.isInfo = true;
    }
    if (this.list1[0] !== void 0) {
      this.isList1 = true;
    }
    ;
    if (this.list1[0] === void 0) {
      this.isList1 = false;
    }
    ;
    if (this.list2[0] !== void 0) {
      this.isList2 = true;
    }
    ;
    if (this.list2[0] === void 0) {
      this.isList2 = false;
    }
    ;
    if (this.list3[0] !== void 0) {
      this.isList3 = true;
    }
    ;
    if (this.list3[0] === void 0) {
      this.isList3 = false;
    }
    ;
    if (this.list4[0] !== void 0) {
      this.isList4 = true;
    }
    ;
    if (this.list4[0] === void 0) {
      this.isList4 = false;
    }
    ;
  }
  static {
    this.\u0275fac = function ItemInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ItemInfoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemInfoComponent, selectors: [["app-item-info"]], inputs: { instancesList: "instancesList", subclassesList: "subclassesList", natureOfList: "natureOfList", classesList: "classesList", technicalities: "technicalities" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 37, vars: 17, consts: [[3, "ngClass"], ["appearance", "outlined", 1, "itemInformation-mat-card"], [1, "cardBackground"], [1, "subdivisionTitle"], [1, "listStyle"], [1, "labelTitlePadding"], [1, "propertyStyle"], [1, "details"], [1, "property2"], [1, "statementStyle"], [1, "displayLayout"], [1, "warningDeprecated"], [1, "qualifierStyle"], [1, "calendarStyle"], [1, "internalLink", 3, "routerLink"], ["color", "primary", 3, "inline"], ["target", "_blank", 3, "href"], [1, "cover", 3, "click", "src"], [1, "description-text"], [1, "qualifierProperty"], [3, "click", "src"], [1, "referenceStyle"], [1, "inlineStyle"], [1, "referenceProperty"], ["flex-shrink", "", "flex-basis", "auto"]], template: function ItemInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-content", 2)(3, "div", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(5, ItemInfoComponent_For_6_Template, 6, 1, "div", 4, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 0)(8, "mat-card-content", 2)(9, "div", 4)(10, "div", 5)(11, "div", 6);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(13, "hr");
        \u0275\u0275repeaterCreate(14, ItemInfoComponent_For_15_Template, 4, 1, "div", 7, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 0)(17, "mat-card-content", 2)(18, "div", 8);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "hr");
        \u0275\u0275repeaterCreate(21, ItemInfoComponent_For_22_Template, 4, 1, "div", 7, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 0)(24, "mat-card-content")(25, "div", 8);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "hr");
        \u0275\u0275repeaterCreate(28, ItemInfoComponent_For_29_Template, 4, 1, "div", 7, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 0)(31, "mat-card-content")(32, "div", 8);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd();
        \u0275\u0275element(34, "hr");
        \u0275\u0275repeaterCreate(35, ItemInfoComponent_For_36_Template, 4, 1, "div", 7, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.isInfo ? "show-division" : "hide-division");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.subInfoTitle);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.technicalities);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.isList4 ? "show-division" : "hide-division");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate3("", ctx.natureOfListTitle, " ", ctx.list4Number, " ", ctx.suffix1, " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.list4);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.isList3 ? "show-division" : "hide-division");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3("", ctx.prefix1, " ", ctx.list3Number, " ", ctx.classesListTitle, "");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.list3);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.isList1 ? "show-division" : "hide-division");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3("", ctx.prefix2, " ", ctx.list1Number, " ", ctx.subclassesListTitle, "");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.list1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.isList2 ? "show-division" : "hide-division");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("", ctx.list2Number, " ", ctx.instancesListTitle, "");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.list2);
      }
    }, dependencies: [CommonModule, NgClass, AsyncPipe, MatCardModule, MatCard, MatCardContent, RouterLink, MatIconModule, MatIcon, UnitPipe], styles: ["\n\n.property2[_ngcontent-%COMP%] {\n  color: #3F51B5;\n  font-weight: 550;\n}\n.hide-division[_ngcontent-%COMP%] {\n  display: none;\n}\n.show-division[_ngcontent-%COMP%] {\n  display: block;\n}\n.subdivision-title[_ngcontent-%COMP%] {\n  color: #AD1457;\n  font-size: 20px !important;\n  font-weight: 360;\n  padding: 5 px;\n  margin-left: auto;\n  margin-bottom: 10px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n.itemInformation-mat-card[_ngcontent-%COMP%] {\n  height: fit-content;\n  background-color: #f6f8f9 !important;\n  margin-bottom: 2px;\n  margin-right: 2px;\n  margin-left: 2px;\n}\n/*# sourceMappingURL=item-info.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemInfoComponent, { className: "ItemInfoComponent", filePath: "src\\app\\display\\item-info\\item-info.component.ts", lineNumber: 20 });
})();

// src/app/display/header-display/header-display.component.ts
var _c02 = (a0) => ["/item", a0];
var _c12 = () => ["/item", "Q505980"];
function HeaderDisplayComponent_For_2_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 5)(3, "mat-icon", 6);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", M_r1.mainsnak.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c02, M_r1.mainsnak.datavalue.value.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, " jul. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 5)(3, "mat-icon", 6);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c12));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_1_Conditional_2_Template, 6, 3, "span", 9)(3, HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_1_Conditional_3_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const D_r3 = ctx_r1.$implicit;
    const \u0275$index_35_r4 = ctx_r1.$index;
    const \u0275$count_35_r5 = ctx_r1.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r3.date, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r3.calendar === "http://www.wikidata.org/entity/Q1985786" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_35_r4 === \u0275$count_35_r5 - 1) ? 3 : -1);
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_2_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const D_r3 = ctx_r1.$implicit;
    const \u0275$index_35_r4 = ctx_r1.$index;
    const \u0275$count_35_r5 = ctx_r1.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r3.string, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_35_r4 === \u0275$count_35_r5 - 1) ? 2 : -1);
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_3_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const D_r3 = ctx_r1.$implicit;
    const \u0275$index_35_r4 = ctx_r1.$index;
    const \u0275$count_35_r5 = ctx_r1.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r3.string.text, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_35_r4 === \u0275$count_35_r5 - 1) ? 2 : -1);
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "em");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "unit");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\xA0");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const D_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xA0(", \u0275\u0275pipeBind1(4, 3, \u0275\u0275pipeBind1(3, 1, D_r3.unit)), ")");
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_7_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const D_r3 = ctx_r1.$implicit;
    const \u0275$index_35_r4 = ctx_r1.$index;
    const \u0275$count_35_r5 = ctx_r1.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", D_r3.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(D_r3.string);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_35_r4 === \u0275$count_35_r5 - 1) ? 3 : -1);
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11)(1, "a", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_8_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const D_r3 = ctx_r1.$implicit;
    const \u0275$index_35_r4 = ctx_r1.$index;
    const \u0275$count_35_r5 = ctx_r1.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", D_r3.string, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(D_r3.string);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_35_r4 === \u0275$count_35_r5 - 1) ? 3 : -1);
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xA0\xA0\xA0");
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 5)(3, "mat-icon", 6);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_9_Conditional_5_Template, 1, 0);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 12);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const D_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r3.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c02, D_r3.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(D_r3.description ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r3.separator, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(D_r3.description);
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 13);
    \u0275\u0275element(2, "img", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const D_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", D_r3.commons, \u0275\u0275sanitizeUrl);
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_1_Template, 4, 3, "span")(2, HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_2_Template, 3, 2, "span")(3, HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_3_Template, 3, 2, "span");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_6_Template, 6, 5, "span")(7, HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_7_Template, 4, 3)(8, HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_8_Template, 4, 3)(9, HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_9_Template, 9, 8, "span")(10, HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_10_Template, 3, 1, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Conditional_11_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const D_r3 = ctx.$implicit;
    const \u0275$index_35_r4 = ctx.$index;
    const \u0275$count_35_r5 = ctx.$count;
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r3.datatype === "time" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r3.datatype === "string" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r3.datatype === "monolingualtext" ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(D_r3.amount);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r3.unit ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r3.datatype === "external-id" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r3.datatype === "url" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r3.datatype === "wikibase-item" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r3.datatype === "commonsMedia" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_35_r4 === \u0275$count_35_r5 - 1) ? 11 : -1);
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 7)(2, "em");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_For_5_Template, 12, 10, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const Q_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", Q_r6.label, ":\xA0");
    \u0275\u0275advance();
    \u0275\u0275repeater(Q_r6.display);
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275repeaterCreate(1, HeaderDisplayComponent_For_2_For_4_Conditional_3_For_2_Template, 6, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(M_r1.qualifiers2);
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 5)(3, "mat-icon", 6);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 12);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Conditional_0_Conditional_9_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    const P_r8 = ctx_r6.$implicit;
    const \u0275$index_142_r9 = ctx_r6.$index;
    const \u0275$count_142_r10 = ctx_r6.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", P_r8.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c02, P_r8.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", P_r8.separator, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(P_r8.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_142_r9 === \u0275$count_142_r10 - 1) ? 9 : -1);
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Conditional_1_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    const P_r8 = ctx_r6.$implicit;
    const \u0275$index_142_r9 = ctx_r6.$index;
    const \u0275$count_142_r10 = ctx_r6.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", P_r8, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_142_r9 === \u0275$count_142_r10 - 1) ? 2 : -1);
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Conditional_2_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    const P_r8 = ctx_r6.$implicit;
    const \u0275$index_142_r9 = ctx_r6.$index;
    const \u0275$count_142_r10 = ctx_r6.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", P_r8, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_142_r9 === \u0275$count_142_r10 - 1) ? 2 : -1);
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11)(1, "a", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Conditional_3_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    const P_r8 = ctx_r6.$implicit;
    const \u0275$index_142_r9 = ctx_r6.$index;
    const \u0275$count_142_r10 = ctx_r6.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", P_r8, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(P_r8);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_142_r9 === \u0275$count_142_r10 - 1) ? 3 : -1);
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Conditional_4_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    const P_r8 = ctx_r6.$implicit;
    const \u0275$index_142_r9 = ctx_r6.$index;
    const \u0275$count_142_r10 = ctx_r6.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", P_r8.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(P_r8.value);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_142_r9 === \u0275$count_142_r10 - 1) ? 3 : -1);
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Conditional_0_Template, 10, 8)(1, HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Conditional_1_Template, 3, 2, "span")(2, HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Conditional_2_Template, 3, 2, "span")(3, HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Conditional_3_Template, 4, 3)(4, HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Conditional_4_Template, 4, 3);
  }
  if (rf & 2) {
    const N_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(N_r11.datatype === "wikibase-item" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r11.datatype === "time" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r11.datatype === "string" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r11.datatype === "url" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r11.datatype === "external-id" ? 4 : -1);
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275repeaterCreate(4, HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_For_5_Template, 5, 5, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_Conditional_6_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const N_r11 = ctx.$implicit;
    const \u0275$index_134_r12 = ctx.$index;
    const \u0275$count_134_r13 = ctx.$count;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", N_r11.label, ": ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(N_r11.display);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(\u0275$index_134_r12 === \u0275$count_134_r13 - 1) ? 6 : -1);
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_For_2_Template, 7, 2, "div", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const Ma_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(Ma_r14);
  }
}
function HeaderDisplayComponent_For_2_For_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, HeaderDisplayComponent_For_2_For_4_Conditional_4_For_1_Template, 3, 0, "div", 15, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(M_r1["references2"]);
  }
}
function HeaderDisplayComponent_For_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, HeaderDisplayComponent_For_2_For_4_Conditional_1_Template, 6, 5, "span");
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275template(3, HeaderDisplayComponent_For_2_For_4_Conditional_3_Template, 3, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, HeaderDisplayComponent_For_2_For_4_Conditional_4_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "wikibase-item" ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(M_r1["qualifiers-order"] ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1["references2"] ? 4 : -1);
  }
}
function HeaderDisplayComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(3, HeaderDisplayComponent_For_2_For_4_Template, 5, 3, "div", 3, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const P_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", P_r15.label, ":");
    \u0275\u0275advance();
    \u0275\u0275repeater(P_r15);
  }
}
var HeaderDisplayComponent = class _HeaderDisplayComponent {
  static {
    this.\u0275fac = function HeaderDisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderDisplayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderDisplayComponent, selectors: [["app-header-display"]], inputs: { headerDetail: "headerDetail" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 0, consts: [[1, "cardBackground"], [1, "labelTitlePadding"], [1, "propertyStyle"], [1, "statementStyle"], [1, "qualifierStyle"], [1, "internalLink", 3, "routerLink"], ["color", "primary", 3, "inline"], [1, "qualifierProperty"], [1, "details3"], [1, "calendarStyle"], ["target", "_blank", 3, "href"], [1, "displayLayout"], [1, "description-text"], [1, ""], [3, "src"], [1, "referenceStyle"], [1, "inlineStyle"], [1, "referenceProperty"]], template: function HeaderDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-card-content", 0);
        \u0275\u0275repeaterCreate(1, HeaderDisplayComponent_For_2_Template, 5, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.headerDetail);
      }
    }, dependencies: [CommonModule, AsyncPipe, MatIconModule, MatIcon, MatCardModule, MatCardContent, RouterLink, UnitPipe] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderDisplayComponent, { className: "HeaderDisplayComponent", filePath: "src\\app\\display\\header-display\\header-display.component.ts", lineNumber: 16 });
})();

// src/app/display/career-display/career-display.component.ts
var _c03 = (a0) => ({ "background-color": a0 });
var _c13 = () => ["/item", "Q220486"];
var _c22 = () => ["/item", "Q505980"];
var _c3 = (a0) => ["/item", a0];
function CareerDisplayComponent_For_4_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, " greg. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c13));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, " jul. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c22));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, CareerDisplayComponent_For_4_For_5_Conditional_2_Conditional_2_Template, 6, 3, "span", 10)(3, CareerDisplayComponent_For_4_For_5_Conditional_2_Conditional_3_Template, 6, 3, "span", 10);
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value.date);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datavalue.value.calendarmodel === "http://www.wikidata.org/entity/Q1985727" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datavalue.value.calendarmodel === "http://www.wikidata.org/entity/Q1985786" ? 3 : -1);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", M_r1.mainsnak.datavalue.value.text, ", ", M_r1.mainsnak.datavalue.value.language, "");
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7)(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", M_r1.mainsnak.datavalue.value, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("latitude: ", M_r1.mainsnak.datavalue.value.latitude, ", longitude: ", M_r1.mainsnak.datavalue.value.longitude, "");
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "span")(2, "img", 14);
    \u0275\u0275listener("click", function CareerDisplayComponent_For_4_For_5_Conditional_9_Template_img_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const M_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openImage(M_r1.picture));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", M_r1.picture, \u0275\u0275sanitizeUrl);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, " \xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", M_r1.mainsnak.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c3, M_r1.mainsnak.datavalue.value.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", M_r1.mainsnak.separator, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", M_r1.mainsnak.description, "\xA0");
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xA0(", M_r1.rank, ")");
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, " greg. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c13));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, " jul. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c22));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_2_Template, 6, 3, "span", 10)(3, CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_3_Template, 6, 3, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.date, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.calendar === "http://www.wikidata.org/entity/Q1985727" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.calendar === "http://www.wikidata.org/entity/Q1985786" ? 3 : -1);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_2_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_102_r6 = ctx_r4.$index;
    const \u0275$count_102_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.string, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 2 : -1);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_3_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_102_r6 = ctx_r4.$index;
    const \u0275$count_102_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.string.text, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 2 : -1);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "em");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "unit");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\xA0");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xA0(", \u0275\u0275pipeBind1(4, 3, \u0275\u0275pipeBind1(3, 1, D_r4.unit)), ")");
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_7_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_102_r6 = ctx_r4.$index;
    const \u0275$count_102_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", D_r4.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(D_r4.string);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 3 : -1);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7)(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_8_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_102_r6 = ctx_r4.$index;
    const \u0275$count_102_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", D_r4.string, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(D_r4.string);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 3 : -1);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xA0\xA0\xA0");
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_9_Conditional_5_Template, 1, 0);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c3, D_r4.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(D_r4.description ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.separator, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(D_r4.description);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "span")(2, "img", 17);
    \u0275\u0275listener("click", function CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_10_Template_img_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const D_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.openImage(D_r4.commons));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", D_r4.commons, \u0275\u0275sanitizeUrl);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Template, 4, 3, "span")(2, CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_2_Template, 3, 2, "span")(3, CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_3_Template, 3, 2, "span");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_6_Template, 6, 5, "span")(7, CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_7_Template, 4, 3)(8, CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_8_Template, 4, 3)(9, CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_9_Template, 9, 8, "span")(10, CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_10_Template, 3, 1, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_11_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const D_r4 = ctx.$implicit;
    const \u0275$index_102_r6 = ctx.$index;
    const \u0275$count_102_r7 = ctx.$count;
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "time" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "string" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "monolingualtext" ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(D_r4.amount);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.unit ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "external-id" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "url" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "wikibase-item" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "commonsMedia" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 11 : -1);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 16)(2, "em");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Template, 12, 10, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const Q_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", Q_r9.label, ":\xA0");
    \u0275\u0275advance();
    \u0275\u0275repeater(Q_r9.display);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275repeaterCreate(1, CareerDisplayComponent_For_4_For_5_Conditional_13_For_2_Template, 6, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(M_r1.qualifiers2);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Conditional_9_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_215_r12 = ctx_r9.$index;
    const \u0275$count_215_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", P_r11.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c3, P_r11.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", P_r11.separator, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(P_r11.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_215_r12 === \u0275$count_215_r13 - 1) ? 9 : -1);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_215_r12 = ctx_r9.$index;
    const \u0275$count_215_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", P_r11, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_215_r12 === \u0275$count_215_r13 - 1) ? 2 : -1);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_215_r12 = ctx_r9.$index;
    const \u0275$count_215_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", P_r11, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_215_r12 === \u0275$count_215_r13 - 1) ? 2 : -1);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7)(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_215_r12 = ctx_r9.$index;
    const \u0275$count_215_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", P_r11, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(P_r11);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_215_r12 === \u0275$count_215_r13 - 1) ? 3 : -1);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_215_r12 = ctx_r9.$index;
    const \u0275$count_215_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", P_r11.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(P_r11.value);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_215_r12 === \u0275$count_215_r13 - 1) ? 3 : -1);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Template, 10, 8)(1, CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Template, 3, 2, "span")(2, CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Template, 3, 2, "span")(3, CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Template, 4, 3)(4, CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Template, 4, 3);
  }
  if (rf & 2) {
    const N_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(N_r14.datatype === "wikibase-item" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "time" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "string" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "url" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "external-id" ? 4 : -1);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275repeaterCreate(4, CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Template, 5, 5, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_Conditional_6_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const N_r14 = ctx.$implicit;
    const \u0275$index_207_r15 = ctx.$index;
    const \u0275$count_207_r16 = ctx.$count;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", N_r14.label, ": ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(N_r14.display);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(\u0275$index_207_r15 === \u0275$count_207_r16 - 1) ? 6 : -1);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_Template, 7, 2, "div", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const Ma_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(Ma_r17);
  }
}
function CareerDisplayComponent_For_4_For_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CareerDisplayComponent_For_4_For_5_Conditional_14_For_1_Template, 3, 0, "div", 18, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(M_r1["references2"]);
  }
}
function CareerDisplayComponent_For_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275template(2, CareerDisplayComponent_For_4_For_5_Conditional_2_Template, 4, 3)(3, CareerDisplayComponent_For_4_For_5_Conditional_3_Template, 2, 2, "span")(4, CareerDisplayComponent_For_4_For_5_Conditional_4_Template, 2, 1, "span", 7)(5, CareerDisplayComponent_For_4_For_5_Conditional_5_Template, 3, 2, "span", 7);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CareerDisplayComponent_For_4_For_5_Conditional_8_Template, 2, 2, "span")(9, CareerDisplayComponent_For_4_For_5_Conditional_9_Template, 3, 1, "div")(10, CareerDisplayComponent_For_4_For_5_Conditional_10_Template, 9, 7)(11, CareerDisplayComponent_For_4_For_5_Conditional_11_Template, 2, 1, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 9);
    \u0275\u0275template(13, CareerDisplayComponent_For_4_For_5_Conditional_13_Template, 3, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CareerDisplayComponent_For_4_For_5_Conditional_14_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(12, _c03, M_r1.rank == "deprecated" ? "#f1f1f1" : "#ffffff"));
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "time" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "monolingualtext" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "string" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "url" ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value.amount);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "globe-coordinate" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "commonsMedia" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "wikibase-item" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.rank == "deprecated" ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(M_r1["qualifiers-order"] ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1["references2"] ? 14 : -1);
  }
}
function CareerDisplayComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, CareerDisplayComponent_For_4_For_5_Template, 15, 14, "div", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const P_r18 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", P_r18.label, ":");
    \u0275\u0275advance();
    \u0275\u0275repeater(P_r18);
  }
}
var CareerDisplayComponent = class _CareerDisplayComponent {
  openImage(image) {
    window.open(image);
  }
  static {
    this.\u0275fac = function CareerDisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CareerDisplayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CareerDisplayComponent, selectors: [["app-career-display"]], inputs: { careerAndActivities: "careerAndActivities", career: "career" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "cardBackground"], [1, "subdivisionTitle"], [1, "listStyle"], [1, "labelTitlePadding"], [1, "propertyStyle"], [1, "statementStyle"], [3, "ngStyle"], [1, "displayLayout"], [1, "warningDeprecated"], [1, "qualifierStyle"], [1, "calendarStyle"], [1, "internalLink", 3, "routerLink"], ["color", "primary", 3, "inline"], ["target", "_blank", 3, "href"], [1, "cover", 3, "click", "src"], [1, "description-text"], [1, "qualifierProperty"], [3, "click", "src"], [1, "referenceStyle"], [1, "inlineStyle"], [1, "referenceProperty"]], template: function CareerDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-card-content", 0)(1, "div", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(3, CareerDisplayComponent_For_4_Template, 6, 1, "div", 2, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.career);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.careerAndActivities);
      }
    }, dependencies: [CommonModule, NgStyle, AsyncPipe, MatIconModule, MatIcon, MatCardModule, MatCardContent, RouterLink, UnitPipe], styles: ["\n\nimg[_ngcontent-%COMP%] {\n  width: 50%;\n  height: auto;\n}\n@media (min-width: 959.98px) {\n  img[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n/*# sourceMappingURL=career-display.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CareerDisplayComponent, { className: "CareerDisplayComponent", filePath: "src\\app\\display\\career-display\\career-display.component.ts", lineNumber: 17 });
})();

// src/app/display/main-display/main-display.component.ts
var _c04 = (a0) => ({ "background-color": a0 });
var _c14 = () => ["/item", "Q220486"];
var _c23 = () => ["/item", "Q505980"];
var _c32 = (a0) => ["/item", a0];
function MainDisplayComponent_For_6_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, " greg. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 12)(3, "mat-icon", 13);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c14));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, " jul. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 12)(3, "mat-icon", 13);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c23));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, MainDisplayComponent_For_6_For_5_Conditional_2_Conditional_2_Template, 6, 3, "span", 11)(3, MainDisplayComponent_For_6_For_5_Conditional_2_Conditional_3_Template, 6, 3, "span", 11);
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value.date);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datavalue.value.calendarmodel === "http://www.wikidata.org/entity/Q1985727" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datavalue.value.calendarmodel === "http://www.wikidata.org/entity/Q1985786" ? 3 : -1);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", M_r1.mainsnak.datavalue.value.text, ", ", M_r1.mainsnak.datavalue.value.language, "");
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8)(1, "a", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", M_r1.mainsnak.datavalue.value, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("latitude: ", M_r1.mainsnak.datavalue.value.latitude, ", longitude: ", M_r1.mainsnak.datavalue.value.longitude, "");
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "span")(2, "img", 15);
    \u0275\u0275listener("click", function MainDisplayComponent_For_6_For_5_Conditional_9_Template_img_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const M_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openImage(M_r1.picture));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", M_r1.picture, \u0275\u0275sanitizeUrl);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 12)(3, "mat-icon", 13);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, " \xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", M_r1.mainsnak.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c32, M_r1.mainsnak.datavalue.value.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", M_r1.mainsnak.separator, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", M_r1.mainsnak.description, "\xA0");
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xA0(", M_r1.rank, ")");
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, " greg. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 12)(3, "mat-icon", 13);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c14));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, " jul. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 12)(3, "mat-icon", 13);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c23));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_2_Template, 6, 3, "span", 11)(3, MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_3_Template, 6, 3, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.date, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.calendar === "http://www.wikidata.org/entity/Q1985727" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.calendar === "http://www.wikidata.org/entity/Q1985786" ? 3 : -1);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_2_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_106_r6 = ctx_r4.$index;
    const \u0275$count_106_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.string, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_106_r6 === \u0275$count_106_r7 - 1) ? 2 : -1);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_3_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_106_r6 = ctx_r4.$index;
    const \u0275$count_106_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.string.text, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_106_r6 === \u0275$count_106_r7 - 1) ? 2 : -1);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "em");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "unit");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\xA0");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xA0(", \u0275\u0275pipeBind1(4, 3, \u0275\u0275pipeBind1(3, 1, D_r4.unit)), ")");
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_7_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_106_r6 = ctx_r4.$index;
    const \u0275$count_106_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", D_r4.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(D_r4.string);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_106_r6 === \u0275$count_106_r7 - 1) ? 3 : -1);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8)(1, "a", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_8_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_106_r6 = ctx_r4.$index;
    const \u0275$count_106_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", D_r4.string, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(D_r4.string);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_106_r6 === \u0275$count_106_r7 - 1) ? 3 : -1);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xA0\xA0\xA0");
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 12)(3, "mat-icon", 13);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_9_Conditional_5_Template, 1, 0);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c32, D_r4.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(D_r4.description ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.separator, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(D_r4.description);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "span")(2, "img", 18);
    \u0275\u0275listener("click", function MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_10_Template_img_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const D_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.openImage(D_r4.commons));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", D_r4.commons, \u0275\u0275sanitizeUrl);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_1_Template, 4, 3, "span")(2, MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_2_Template, 3, 2, "span")(3, MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_3_Template, 3, 2, "span");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_6_Template, 6, 5, "span")(7, MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_7_Template, 4, 3)(8, MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_8_Template, 4, 3)(9, MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_9_Template, 9, 8, "span")(10, MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_10_Template, 3, 1, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Conditional_11_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const D_r4 = ctx.$implicit;
    const \u0275$index_106_r6 = ctx.$index;
    const \u0275$count_106_r7 = ctx.$count;
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "time" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "string" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "monolingualtext" ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(D_r4.amount);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.unit ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "external-id" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "url" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "wikibase-item" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "commonsMedia" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_106_r6 === \u0275$count_106_r7 - 1) ? 11 : -1);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 17)(2, "em");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, MainDisplayComponent_For_6_For_5_Conditional_13_For_2_For_5_Template, 12, 10, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const Q_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", Q_r9.label, ":\xA0");
    \u0275\u0275advance();
    \u0275\u0275repeater(Q_r9.display);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275repeaterCreate(1, MainDisplayComponent_For_6_For_5_Conditional_13_For_2_Template, 6, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(M_r1.qualifiers2);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 12)(3, "mat-icon", 13);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Conditional_9_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_219_r12 = ctx_r9.$index;
    const \u0275$count_219_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", P_r11.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c32, P_r11.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", P_r11.separator, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(P_r11.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_219_r12 === \u0275$count_219_r13 - 1) ? 9 : -1);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Conditional_2_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_219_r12 = ctx_r9.$index;
    const \u0275$count_219_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", P_r11, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_219_r12 === \u0275$count_219_r13 - 1) ? 2 : -1);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Conditional_2_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_219_r12 = ctx_r9.$index;
    const \u0275$count_219_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", P_r11, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_219_r12 === \u0275$count_219_r13 - 1) ? 2 : -1);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8)(1, "a", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_219_r12 = ctx_r9.$index;
    const \u0275$count_219_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", P_r11, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(P_r11);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_219_r12 === \u0275$count_219_r13 - 1) ? 3 : -1);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_219_r12 = ctx_r9.$index;
    const \u0275$count_219_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", P_r11.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(P_r11.value);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_219_r12 === \u0275$count_219_r13 - 1) ? 3 : -1);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Template, 10, 8)(1, MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Template, 3, 2)(2, MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Template, 3, 2)(3, MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Template, 4, 3)(4, MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Template, 4, 3);
  }
  if (rf & 2) {
    const N_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(N_r14.datatype === "wikibase-item" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "time" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "string" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "url" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "external-id" ? 4 : -1);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275repeaterCreate(4, MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_For_5_Template, 5, 5, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_Conditional_6_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const N_r14 = ctx.$implicit;
    const \u0275$index_211_r15 = ctx.$index;
    const \u0275$count_211_r16 = ctx.$count;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", N_r14.label, ": ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(N_r14.display);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(\u0275$index_211_r15 === \u0275$count_211_r16 - 1) ? 6 : -1);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_14_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275repeaterCreate(1, MainDisplayComponent_For_6_For_5_Conditional_14_For_1_For_2_Template, 7, 2, "div", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const Ma_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(Ma_r17);
  }
}
function MainDisplayComponent_For_6_For_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MainDisplayComponent_For_6_For_5_Conditional_14_For_1_Template, 3, 0, "div", 19, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(M_r1["references2"]);
  }
}
function MainDisplayComponent_For_6_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275template(2, MainDisplayComponent_For_6_For_5_Conditional_2_Template, 4, 3)(3, MainDisplayComponent_For_6_For_5_Conditional_3_Template, 2, 2, "span")(4, MainDisplayComponent_For_6_For_5_Conditional_4_Template, 2, 1, "span", 8)(5, MainDisplayComponent_For_6_For_5_Conditional_5_Template, 3, 2, "span", 8);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, MainDisplayComponent_For_6_For_5_Conditional_8_Template, 2, 2, "span")(9, MainDisplayComponent_For_6_For_5_Conditional_9_Template, 3, 1, "div")(10, MainDisplayComponent_For_6_For_5_Conditional_10_Template, 9, 7)(11, MainDisplayComponent_For_6_For_5_Conditional_11_Template, 2, 1, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10);
    \u0275\u0275template(13, MainDisplayComponent_For_6_For_5_Conditional_13_Template, 3, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, MainDisplayComponent_For_6_For_5_Conditional_14_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(12, _c04, M_r1.rank == "deprecated" ? "#f1f1f1" : "#ffffff"));
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "time" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "monolingualtext" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "string" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "url" ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value.amount);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "globe-coordinate" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "commonsMedia" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "wikibase-item" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.rank == "deprecated" ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(M_r1["qualifiers-order"] ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1["references2"] ? 14 : -1);
  }
}
function MainDisplayComponent_For_6_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", M_r18, " ");
  }
}
function MainDisplayComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "span", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, MainDisplayComponent_For_6_For_5_Template, 15, 14, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, MainDisplayComponent_For_6_For_7_Template, 2, 1, "div", 6, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const P_r19 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", P_r19.label, ":");
    \u0275\u0275advance();
    \u0275\u0275repeater(P_r19);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.list);
  }
}
var MainDisplayComponent = class _MainDisplayComponent {
  openImage(image) {
    window.open(image);
  }
  static {
    this.\u0275fac = function MainDisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MainDisplayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainDisplayComponent, selectors: [["app-main-display"]], inputs: { mainList: "mainList", mainTitle: "mainTitle", list: "list" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [[1, "cardBackground"], [1, "subTitlePadding"], [1, "divisionTitle"], [1, "listStyle"], [1, "labelTitlePadding"], [1, "propertyStyle"], [1, "statementStyle"], [3, "ngStyle"], [1, "displayLayout"], [1, "warningDeprecated"], [1, "qualifierStyle"], [1, "calendarStyle"], [1, "internalLink", 3, "routerLink"], ["color", "primary", 3, "inline"], ["target", "_blank", 3, "href"], [1, "cover", 3, "click", "src"], [1, "description-text"], [1, "qualifierProperty"], [3, "click", "src"], [1, "referenceStyle"], [1, "inlineStyle"], [1, "referenceProperty"]], template: function MainDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-card-content", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(4, "router-outlet");
        \u0275\u0275repeaterCreate(5, MainDisplayComponent_For_6_Template, 8, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.mainTitle);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.mainList);
      }
    }, dependencies: [CommonModule, NgStyle, AsyncPipe, MatIconModule, MatIcon, MatCardModule, MatCardContent, RouterLink, RouterOutlet, UnitPipe], styles: ["\n\nimg[_ngcontent-%COMP%] {\n  width: 50%;\n  height: auto;\n}\n@media (min-width: 959.98px) {\n  img[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n}\n/*# sourceMappingURL=main-display.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainDisplayComponent, { className: "MainDisplayComponent", filePath: "src\\app\\display\\main-display\\main-display.component.ts", lineNumber: 15 });
})();

// src/app/display/education-display/education-display.component.ts
var _c05 = (a0) => ({ "background-color": a0 });
var _c15 = () => ["/item", "Q220486"];
var _c24 = () => ["/item", "Q505980"];
var _c33 = (a0) => ["/item", a0];
function EducationDisplayComponent_For_4_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, " greg. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c15));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, " jul. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c24));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, EducationDisplayComponent_For_4_For_5_Conditional_2_Conditional_2_Template, 6, 3, "span", 10)(3, EducationDisplayComponent_For_4_For_5_Conditional_2_Conditional_3_Template, 6, 3, "span", 10);
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value.date);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datavalue.value.calendarmodel === "http://www.wikidata.org/entity/Q1985727" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datavalue.value.calendarmodel === "http://www.wikidata.org/entity/Q1985786" ? 3 : -1);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", M_r1.mainsnak.datavalue.value.text, ", ", M_r1.mainsnak.datavalue.value.language, "");
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7)(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", M_r1.mainsnak.datavalue.value, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("latitude: ", M_r1.mainsnak.datavalue.value.latitude, ", longitude: ", M_r1.mainsnak.datavalue.value.longitude, "");
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "span")(2, "img", 14);
    \u0275\u0275listener("click", function EducationDisplayComponent_For_4_For_5_Conditional_9_Template_img_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const M_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openImage(M_r1.picture));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", M_r1.picture, \u0275\u0275sanitizeUrl);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, " \xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", M_r1.mainsnak.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c33, M_r1.mainsnak.datavalue.value.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", M_r1.mainsnak.separator, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", M_r1.mainsnak.description, "\xA0");
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xA0(", M_r1.rank, ")");
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, " greg. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c15));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, " jul. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c24));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_2_Template, 6, 3, "span", 10)(3, EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_3_Template, 6, 3, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.date, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.calendar === "http://www.wikidata.org/entity/Q1985727" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.calendar === "http://www.wikidata.org/entity/Q1985786" ? 3 : -1);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_2_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_102_r6 = ctx_r4.$index;
    const \u0275$count_102_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.string, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 2 : -1);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_3_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_102_r6 = ctx_r4.$index;
    const \u0275$count_102_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.string, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 2 : -1);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_4_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_102_r6 = ctx_r4.$index;
    const \u0275$count_102_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.string.text, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 2 : -1);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "em");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "unit");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\xA0");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xA0(", \u0275\u0275pipeBind1(4, 3, \u0275\u0275pipeBind1(3, 1, D_r4.unit)), ")");
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_8_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_102_r6 = ctx_r4.$index;
    const \u0275$count_102_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", D_r4.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(D_r4.string);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 3 : -1);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7)(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_9_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_102_r6 = ctx_r4.$index;
    const \u0275$count_102_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", D_r4.string, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(D_r4.string);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 3 : -1);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xA0\xA0\xA0");
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_10_Conditional_5_Template, 1, 0);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c33, D_r4.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(D_r4.description ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.separator, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(D_r4.description);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "span")(2, "img", 17);
    \u0275\u0275listener("click", function EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_11_Template_img_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const D_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.openImage(D_r4.commons));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", D_r4.commons, \u0275\u0275sanitizeUrl);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Template, 4, 3, "span")(2, EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_2_Template, 3, 2, "span")(3, EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_3_Template, 3, 2, "span")(4, EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_4_Template, 3, 2, "span");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_7_Template, 6, 5, "span")(8, EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_8_Template, 4, 3)(9, EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_9_Template, 4, 3)(10, EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_10_Template, 9, 8, "span")(11, EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_11_Template, 3, 1, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_12_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const D_r4 = ctx.$implicit;
    const \u0275$index_102_r6 = ctx.$index;
    const \u0275$count_102_r7 = ctx.$count;
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "time" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "string" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "string" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "monolingualtext" ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(D_r4.amount);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.unit ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "external-id" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "url" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "wikibase-item" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "commonsMedia" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 12 : -1);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 16)(2, "em");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Template, 13, 11, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const Q_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", Q_r9.label, ":\xA0");
    \u0275\u0275advance();
    \u0275\u0275repeater(Q_r9.display);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275repeaterCreate(1, EducationDisplayComponent_For_4_For_5_Conditional_13_For_2_Template, 6, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(M_r1.qualifiers2);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Conditional_9_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_223_r12 = ctx_r9.$index;
    const \u0275$count_223_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", P_r11.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c33, P_r11.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", P_r11.separator, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(P_r11.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_223_r12 === \u0275$count_223_r13 - 1) ? 9 : -1);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_223_r12 = ctx_r9.$index;
    const \u0275$count_223_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", P_r11, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_223_r12 === \u0275$count_223_r13 - 1) ? 2 : -1);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_223_r12 = ctx_r9.$index;
    const \u0275$count_223_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", P_r11, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_223_r12 === \u0275$count_223_r13 - 1) ? 2 : -1);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7)(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_223_r12 = ctx_r9.$index;
    const \u0275$count_223_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", P_r11, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(P_r11);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_223_r12 === \u0275$count_223_r13 - 1) ? 3 : -1);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_223_r12 = ctx_r9.$index;
    const \u0275$count_223_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", P_r11.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(P_r11.value);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_223_r12 === \u0275$count_223_r13 - 1) ? 3 : -1);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Template, 10, 8)(1, EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Template, 3, 2, "span")(2, EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Template, 3, 2, "span")(3, EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Template, 4, 3)(4, EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Template, 4, 3);
  }
  if (rf & 2) {
    const N_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(N_r14.datatype === "wikibase-item" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "time" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "string" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "url" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "external-id" ? 4 : -1);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275repeaterCreate(4, EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Template, 5, 5, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_Conditional_6_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const N_r14 = ctx.$implicit;
    const \u0275$index_215_r15 = ctx.$index;
    const \u0275$count_215_r16 = ctx.$count;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", N_r14.label, ": ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(N_r14.display);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(\u0275$index_215_r15 === \u0275$count_215_r16 - 1) ? 6 : -1);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_Template, 7, 2, "div", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const Ma_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(Ma_r17);
  }
}
function EducationDisplayComponent_For_4_For_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EducationDisplayComponent_For_4_For_5_Conditional_14_For_1_Template, 3, 0, "div", 18, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(M_r1["references2"]);
  }
}
function EducationDisplayComponent_For_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275template(2, EducationDisplayComponent_For_4_For_5_Conditional_2_Template, 4, 3)(3, EducationDisplayComponent_For_4_For_5_Conditional_3_Template, 2, 2, "span")(4, EducationDisplayComponent_For_4_For_5_Conditional_4_Template, 2, 1, "span", 7)(5, EducationDisplayComponent_For_4_For_5_Conditional_5_Template, 3, 2, "span", 7);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, EducationDisplayComponent_For_4_For_5_Conditional_8_Template, 2, 2, "span")(9, EducationDisplayComponent_For_4_For_5_Conditional_9_Template, 3, 1, "div")(10, EducationDisplayComponent_For_4_For_5_Conditional_10_Template, 9, 7)(11, EducationDisplayComponent_For_4_For_5_Conditional_11_Template, 2, 1, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 9);
    \u0275\u0275template(13, EducationDisplayComponent_For_4_For_5_Conditional_13_Template, 3, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, EducationDisplayComponent_For_4_For_5_Conditional_14_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(12, _c05, M_r1.rank == "deprecated" ? "#f1f1f1" : "#ffffff"));
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "time" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "monolingualtext" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "string" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "url" ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value.amount);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "globe-coordinate" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "commonsMedia" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "wikibase-item" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.rank == "deprecated" ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(M_r1["qualifiers-order"] ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1["references2"] ? 14 : -1);
  }
}
function EducationDisplayComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, EducationDisplayComponent_For_4_For_5_Template, 15, 14, "div", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const P_r18 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", P_r18.label, ":");
    \u0275\u0275advance();
    \u0275\u0275repeater(P_r18);
  }
}
var EducationDisplayComponent = class _EducationDisplayComponent {
  openImage(image) {
    window.open(image);
  }
  static {
    this.\u0275fac = function EducationDisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EducationDisplayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EducationDisplayComponent, selectors: [["app-education-display"]], inputs: { education: "education", training: "training" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "cardBackground"], [1, "subdivisionTitle"], [1, "listStyle"], [1, "labelTitlePadding"], [1, "propertyStyle"], [1, "statementStyle"], [3, "ngStyle"], [1, "displayLayout"], [1, "warningDeprecated"], [1, "qualifierStyle"], [1, "calendarStyle"], [1, "internalLink", 3, "routerLink"], ["color", "primary", 3, "inline"], ["target", "_blank", 3, "href"], [1, "cover", 3, "click", "src"], [1, "description-text"], [1, "qualifierProperty"], [3, "click", "src"], [1, "referenceStyle"], [1, "inlineStyle"], [1, "referenceProperty"]], template: function EducationDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-card-content", 0)(1, "div", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(3, EducationDisplayComponent_For_4_Template, 6, 1, "div", 2, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.training);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.education);
      }
    }, dependencies: [CommonModule, NgStyle, AsyncPipe, MatIconModule, MatIcon, MatCardModule, MatCardContent, RouterLink, UnitPipe], styles: ["\n\nimg[_ngcontent-%COMP%] {\n  width: 50%;\n  height: auto;\n}\n@media (min-width: 959.98px) {\n  img[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n/*# sourceMappingURL=education-display.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EducationDisplayComponent, { className: "EducationDisplayComponent", filePath: "src\\app\\display\\education-display\\education-display.component.ts", lineNumber: 15 });
})();

// src/app/display/sociability-display/sociability-display.component.ts
var _c06 = (a0) => ({ "background-color": a0 });
var _c16 = () => ["/item", "Q220486"];
var _c25 = () => ["/item", "Q505980"];
var _c34 = (a0) => ["/item", a0];
function SociabilityDisplayComponent_For_4_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, " greg. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c16));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, " jul. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c25));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, SociabilityDisplayComponent_For_4_For_5_Conditional_2_Conditional_2_Template, 6, 3, "span", 10)(3, SociabilityDisplayComponent_For_4_For_5_Conditional_2_Conditional_3_Template, 6, 3, "span", 10);
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value.date);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datavalue.value.calendarmodel === "http://www.wikidata.org/entity/Q1985727" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datavalue.value.calendarmodel === "http://www.wikidata.org/entity/Q1985786" ? 3 : -1);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", M_r1.mainsnak.datavalue.value.text, ", ", M_r1.mainsnak.datavalue.value.language, "");
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7)(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", M_r1.mainsnak.datavalue.value, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("latitude: ", M_r1.mainsnak.datavalue.value.latitude, ", longitude: ", M_r1.mainsnak.datavalue.value.longitude, "");
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "span")(2, "img", 14);
    \u0275\u0275listener("click", function SociabilityDisplayComponent_For_4_For_5_Conditional_9_Template_img_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const M_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openImage(M_r1.picture));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", M_r1.picture, \u0275\u0275sanitizeUrl);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, " \xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", M_r1.mainsnak.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c34, M_r1.mainsnak.datavalue.value.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", M_r1.mainsnak.separator, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", M_r1.mainsnak.description, "\xA0");
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xA0(", M_r1.rank, ")");
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, " greg. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c16));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, " jul. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c25));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_2_Template, 6, 3, "span", 10)(3, SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_3_Template, 6, 3, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.date, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.calendar === "http://www.wikidata.org/entity/Q1985727" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.calendar === "http://www.wikidata.org/entity/Q1985786" ? 3 : -1);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_2_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_102_r6 = ctx_r4.$index;
    const \u0275$count_102_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.string, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 2 : -1);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_3_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_102_r6 = ctx_r4.$index;
    const \u0275$count_102_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.string, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 2 : -1);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_4_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_102_r6 = ctx_r4.$index;
    const \u0275$count_102_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.string.text, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 2 : -1);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "em");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "unit");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\xA0");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xA0(", \u0275\u0275pipeBind1(4, 3, \u0275\u0275pipeBind1(3, 1, D_r4.unit)), ")");
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_8_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_102_r6 = ctx_r4.$index;
    const \u0275$count_102_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", D_r4.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(D_r4.string);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 3 : -1);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7)(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_9_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_102_r6 = ctx_r4.$index;
    const \u0275$count_102_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", D_r4.string, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(D_r4.string);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 3 : -1);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xA0\xA0\xA0");
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_10_Conditional_5_Template, 1, 0);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c34, D_r4.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(D_r4.description ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.separator, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", D_r4.description, "\xA0");
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "span")(2, "img", 17);
    \u0275\u0275listener("click", function SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_11_Template_img_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const D_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.openImage(D_r4.commons));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", D_r4.commons, \u0275\u0275sanitizeUrl);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Template, 4, 3, "span")(2, SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_2_Template, 3, 2, "span")(3, SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_3_Template, 3, 2, "span")(4, SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_4_Template, 3, 2, "span");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_7_Template, 6, 5, "span")(8, SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_8_Template, 4, 3)(9, SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_9_Template, 4, 3)(10, SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_10_Template, 10, 8, "span")(11, SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_11_Template, 3, 1, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_12_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const D_r4 = ctx.$implicit;
    const \u0275$index_102_r6 = ctx.$index;
    const \u0275$count_102_r7 = ctx.$count;
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "time" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "string" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "string" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "monolingualtext" ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(D_r4.amount);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.unit ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "external-id" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "url" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "wikibase-item" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "commonsMedia" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 12 : -1);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 16)(2, "em");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Template, 13, 11, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const Q_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", Q_r9.label, ":\xA0");
    \u0275\u0275advance();
    \u0275\u0275repeater(Q_r9.display);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275repeaterCreate(1, SociabilityDisplayComponent_For_4_For_5_Conditional_13_For_2_Template, 6, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(M_r1.qualifiers2);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Conditional_9_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_224_r12 = ctx_r9.$index;
    const \u0275$count_224_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", P_r11.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c34, P_r11.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", P_r11.separator, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(P_r11.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_224_r12 === \u0275$count_224_r13 - 1) ? 9 : -1);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_224_r12 = ctx_r9.$index;
    const \u0275$count_224_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", P_r11, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_224_r12 === \u0275$count_224_r13 - 1) ? 2 : -1);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_224_r12 = ctx_r9.$index;
    const \u0275$count_224_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", P_r11, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_224_r12 === \u0275$count_224_r13 - 1) ? 2 : -1);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7)(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_224_r12 = ctx_r9.$index;
    const \u0275$count_224_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", P_r11, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(P_r11);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_224_r12 === \u0275$count_224_r13 - 1) ? 3 : -1);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_224_r12 = ctx_r9.$index;
    const \u0275$count_224_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", P_r11.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(P_r11.value);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_224_r12 === \u0275$count_224_r13 - 1) ? 3 : -1);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Template, 10, 8)(1, SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Template, 3, 2, "span")(2, SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Template, 3, 2, "span")(3, SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Template, 4, 3)(4, SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Template, 4, 3);
  }
  if (rf & 2) {
    const N_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(N_r14.datatype === "wikibase-item" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "time" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "string" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "url" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "external-id" ? 4 : -1);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275repeaterCreate(4, SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Template, 5, 5, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_Conditional_6_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const N_r14 = ctx.$implicit;
    const \u0275$index_216_r15 = ctx.$index;
    const \u0275$count_216_r16 = ctx.$count;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", N_r14.label, ": ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(N_r14.display);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(\u0275$index_216_r15 === \u0275$count_216_r16 - 1) ? 6 : -1);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_Template, 7, 2, "div", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const Ma_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(Ma_r17);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SociabilityDisplayComponent_For_4_For_5_Conditional_14_For_1_Template, 3, 0, "div", 18, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(M_r1["references2"]);
  }
}
function SociabilityDisplayComponent_For_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275template(2, SociabilityDisplayComponent_For_4_For_5_Conditional_2_Template, 4, 3)(3, SociabilityDisplayComponent_For_4_For_5_Conditional_3_Template, 2, 2, "span")(4, SociabilityDisplayComponent_For_4_For_5_Conditional_4_Template, 2, 1, "span", 7)(5, SociabilityDisplayComponent_For_4_For_5_Conditional_5_Template, 3, 2, "span", 7);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SociabilityDisplayComponent_For_4_For_5_Conditional_8_Template, 2, 2, "span")(9, SociabilityDisplayComponent_For_4_For_5_Conditional_9_Template, 3, 1, "div")(10, SociabilityDisplayComponent_For_4_For_5_Conditional_10_Template, 9, 7)(11, SociabilityDisplayComponent_For_4_For_5_Conditional_11_Template, 2, 1, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 9);
    \u0275\u0275template(13, SociabilityDisplayComponent_For_4_For_5_Conditional_13_Template, 3, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, SociabilityDisplayComponent_For_4_For_5_Conditional_14_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(12, _c06, M_r1.rank == "deprecated" ? "#f1f1f1" : "#ffffff"));
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "time" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "monolingualtext" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "string" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "url" ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value.amount);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "globe-coordinate" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "commonsMedia" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "wikibase-item" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.rank == "deprecated" ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(M_r1["qualifiers-order"] ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1["references2"] ? 14 : -1);
  }
}
function SociabilityDisplayComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, SociabilityDisplayComponent_For_4_For_5_Template, 15, 14, "div", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const P_r18 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", P_r18.label, ":");
    \u0275\u0275advance();
    \u0275\u0275repeater(P_r18);
  }
}
var SociabilityDisplayComponent = class _SociabilityDisplayComponent {
  openImage(image) {
    window.open(image);
  }
  static {
    this.\u0275fac = function SociabilityDisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SociabilityDisplayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SociabilityDisplayComponent, selectors: [["app-sociability-display"]], inputs: { sociabilityAndCulture: "sociabilityAndCulture", sociability: "sociability" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "cardBackground"], [1, "subdivisionTitle"], [1, "listStyle"], [1, "labelTitlePadding"], [1, "propertyStyle"], [1, "statementStyle"], [3, "ngStyle"], [1, "displayLayout"], [1, "warningDeprecated"], [1, "qualifierStyle"], [1, "calendarStyle"], [1, "internalLink", 3, "routerLink"], ["color", "primary", 3, "inline"], ["target", "_blank", 3, "href"], [1, "cover", 3, "click", "src"], [1, "description-text"], [1, "qualifierProperty"], [3, "click", "src"], [1, "referenceStyle"], [1, "inlineStyle"], [1, "referenceProperty"]], template: function SociabilityDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-card-content", 0)(1, "div", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(3, SociabilityDisplayComponent_For_4_Template, 6, 1, "div", 2, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.sociability);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.sociabilityAndCulture);
      }
    }, dependencies: [CommonModule, NgStyle, AsyncPipe, MatIconModule, MatIcon, MatCardModule, MatCardContent, RouterLink, UnitPipe], styles: ["\n\nimg[_ngcontent-%COMP%] {\n  width: 50%;\n  height: auto;\n}\n@media (min-width: 959.98px) {\n  img[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n/*# sourceMappingURL=sociability-display.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SociabilityDisplayComponent, { className: "SociabilityDisplayComponent", filePath: "src\\app\\display\\sociability-display\\sociability-display.component.ts", lineNumber: 15 });
})();

// src/app/display/sources-display/sources-display.component.ts
var _c07 = (a0) => ({ "background-color": a0 });
var _c17 = () => ["/item", "Q220486"];
var _c26 = () => ["/item", "Q505980"];
var _c35 = (a0) => ["/item", a0];
function SourcesDisplayComponent_For_4_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, " greg. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c17));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, " jul. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c26));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, SourcesDisplayComponent_For_4_For_5_Conditional_2_Conditional_2_Template, 6, 3, "span", 10)(3, SourcesDisplayComponent_For_4_For_5_Conditional_2_Conditional_3_Template, 6, 3, "span", 10);
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value.date);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datavalue.value.calendarmodel === "http://www.wikidata.org/entity/Q1985727" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datavalue.value.calendarmodel === "http://www.wikidata.org/entity/Q1985786" ? 3 : -1);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", M_r1.mainsnak.datavalue.value.text, ", ", M_r1.mainsnak.datavalue.value.language, "");
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7)(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", M_r1.mainsnak.datavalue.value, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("latitude: ", M_r1.mainsnak.datavalue.value.latitude, ", longitude: ", M_r1.mainsnak.datavalue.value.longitude, "");
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "span")(2, "img", 14);
    \u0275\u0275listener("click", function SourcesDisplayComponent_For_4_For_5_Conditional_9_Template_img_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const M_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openImage(M_r1.picture));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", M_r1.picture, \u0275\u0275sanitizeUrl);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, " \xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", M_r1.mainsnak.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c35, M_r1.mainsnak.datavalue.value.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", M_r1.mainsnak.separator, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", M_r1.mainsnak.description, "\xA0");
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xA0(", M_r1.rank, ")");
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, " greg. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c17));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, " jul. ");
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c26));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_2_Template, 6, 3, "span", 10)(3, SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Conditional_3_Template, 6, 3, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.date, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.calendar === "http://www.wikidata.org/entity/Q1985727" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.calendar === "http://www.wikidata.org/entity/Q1985786" ? 3 : -1);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_2_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_102_r6 = ctx_r4.$index;
    const \u0275$count_102_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.string, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 2 : -1);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_3_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_102_r6 = ctx_r4.$index;
    const \u0275$count_102_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.string.text, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 2 : -1);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "em");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "unit");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\xA0");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xA0(", \u0275\u0275pipeBind1(4, 3, \u0275\u0275pipeBind1(3, 1, D_r4.unit)), ")");
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_7_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_102_r6 = ctx_r4.$index;
    const \u0275$count_102_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", D_r4.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(D_r4.string);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 3 : -1);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7)(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_8_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const D_r4 = ctx_r4.$implicit;
    const \u0275$index_102_r6 = ctx_r4.$index;
    const \u0275$count_102_r7 = ctx_r4.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", D_r4.string, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(D_r4.string);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 3 : -1);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xA0\xA0\xA0");
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_9_Conditional_5_Template, 1, 0);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c35, D_r4.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(D_r4.description ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", D_r4.separator, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(D_r4.description);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "span")(2, "img", 17);
    \u0275\u0275listener("click", function SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_10_Template_img_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const D_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.openImage(D_r4.commons));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const D_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", D_r4.commons, \u0275\u0275sanitizeUrl);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_1_Template, 4, 3, "span")(2, SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_2_Template, 3, 2, "span")(3, SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_3_Template, 3, 2, "span");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_6_Template, 6, 5, "span")(7, SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_7_Template, 4, 3)(8, SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_8_Template, 4, 3)(9, SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_9_Template, 9, 8, "span")(10, SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_10_Template, 3, 1, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Conditional_11_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const D_r4 = ctx.$implicit;
    const \u0275$index_102_r6 = ctx.$index;
    const \u0275$count_102_r7 = ctx.$count;
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "time" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "string" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "monolingualtext" ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(D_r4.amount);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.unit ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "external-id" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "url" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "wikibase-item" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(D_r4.datatype === "commonsMedia" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_102_r6 === \u0275$count_102_r7 - 1) ? 11 : -1);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 16)(2, "em");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_For_5_Template, 12, 10, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const Q_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", Q_r9.label, ":\xA0");
    \u0275\u0275advance();
    \u0275\u0275repeater(Q_r9.display);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275repeaterCreate(1, SourcesDisplayComponent_For_4_For_5_Conditional_13_For_2_Template, 6, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(M_r1.qualifiers2);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 12);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Conditional_9_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_215_r12 = ctx_r9.$index;
    const \u0275$count_215_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", P_r11.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c35, P_r11.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", P_r11.separator, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(P_r11.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_215_r12 === \u0275$count_215_r13 - 1) ? 9 : -1);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_215_r12 = ctx_r9.$index;
    const \u0275$count_215_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", P_r11, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_215_r12 === \u0275$count_215_r13 - 1) ? 2 : -1);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_215_r12 = ctx_r9.$index;
    const \u0275$count_215_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", P_r11, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_215_r12 === \u0275$count_215_r13 - 1) ? 2 : -1);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7)(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_215_r12 = ctx_r9.$index;
    const \u0275$count_215_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", P_r11, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(P_r11);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_215_r12 === \u0275$count_215_r13 - 1) ? 3 : -1);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Conditional_3_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const P_r11 = ctx_r9.$implicit;
    const \u0275$index_215_r12 = ctx_r9.$index;
    const \u0275$count_215_r13 = ctx_r9.$count;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", P_r11.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(P_r11.value);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_215_r12 === \u0275$count_215_r13 - 1) ? 3 : -1);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_0_Template, 10, 8)(1, SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_1_Template, 3, 2, "span")(2, SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_2_Template, 3, 2, "span")(3, SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_3_Template, 4, 3)(4, SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Conditional_4_Template, 4, 3);
  }
  if (rf & 2) {
    const N_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(N_r14.datatype === "wikibase-item" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "time" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "string" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "url" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(N_r14.datatype === "external-id" ? 4 : -1);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ",\xA0");
    \u0275\u0275elementEnd();
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275repeaterCreate(4, SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_For_5_Template, 5, 5, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_Conditional_6_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const N_r14 = ctx.$implicit;
    const \u0275$index_207_r15 = ctx.$index;
    const \u0275$count_207_r16 = ctx.$count;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", N_r14.label, ": ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(N_r14.display);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(\u0275$index_207_r15 === \u0275$count_207_r16 - 1) ? 6 : -1);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_For_2_Template, 7, 2, "div", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const Ma_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(Ma_r17);
  }
}
function SourcesDisplayComponent_For_4_For_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SourcesDisplayComponent_For_4_For_5_Conditional_14_For_1_Template, 3, 0, "div", 18, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const M_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(M_r1["references2"]);
  }
}
function SourcesDisplayComponent_For_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275template(2, SourcesDisplayComponent_For_4_For_5_Conditional_2_Template, 4, 3)(3, SourcesDisplayComponent_For_4_For_5_Conditional_3_Template, 2, 2, "span")(4, SourcesDisplayComponent_For_4_For_5_Conditional_4_Template, 2, 1, "span", 7)(5, SourcesDisplayComponent_For_4_For_5_Conditional_5_Template, 3, 2, "span", 7);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SourcesDisplayComponent_For_4_For_5_Conditional_8_Template, 2, 2, "span")(9, SourcesDisplayComponent_For_4_For_5_Conditional_9_Template, 3, 1, "div")(10, SourcesDisplayComponent_For_4_For_5_Conditional_10_Template, 9, 7)(11, SourcesDisplayComponent_For_4_For_5_Conditional_11_Template, 2, 1, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 9);
    \u0275\u0275template(13, SourcesDisplayComponent_For_4_For_5_Conditional_13_Template, 3, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, SourcesDisplayComponent_For_4_For_5_Conditional_14_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const M_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(12, _c07, M_r1.rank == "deprecated" ? "#f1f1f1" : "#ffffff"));
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "time" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "monolingualtext" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "string" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "url" ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(M_r1.mainsnak.datavalue.value.amount);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "globe-coordinate" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "commonsMedia" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.mainsnak.datatype === "wikibase-item" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1.rank == "deprecated" ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(M_r1["qualifiers-order"] ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(M_r1["references2"] ? 14 : -1);
  }
}
function SourcesDisplayComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, SourcesDisplayComponent_For_4_For_5_Template, 15, 14, "div", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const P_r18 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", P_r18.label, ":");
    \u0275\u0275advance();
    \u0275\u0275repeater(P_r18);
  }
}
var SourcesDisplayComponent = class _SourcesDisplayComponent {
  openImage(image) {
    window.open(image);
  }
  static {
    this.\u0275fac = function SourcesDisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SourcesDisplayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SourcesDisplayComponent, selectors: [["app-sources-display"]], inputs: { sourcesList: "sourcesList", sources: "sources" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "cardBackground"], [1, "subdivisionTitle"], [1, "listStyle"], [1, "labelTitlePadding"], [1, "propertyStyle"], [1, "statementStyle"], [3, "ngStyle"], [1, "displayLayout"], [1, "warningDeprecated"], [1, "qualifierStyle"], [1, "calendarStyle"], [1, "internalLink", 3, "routerLink"], ["color", "primary", 3, "inline"], ["target", "_blank", 3, "href"], [1, "cover", 3, "click", "src"], [1, "description-text"], [1, "qualifierProperty"], [3, "click", "src"], [1, "referenceStyle"], [1, "inlineStyle"], [1, "referenceProperty"]], template: function SourcesDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-card-content", 0)(1, "div", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(3, SourcesDisplayComponent_For_4_Template, 6, 1, "div", 2, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.sources);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.sourcesList);
      }
    }, dependencies: [CommonModule, NgStyle, AsyncPipe, MatIconModule, MatIcon, MatCardModule, MatCardContent, RouterLink, UnitPipe], styles: ["\n\nimg[_ngcontent-%COMP%] {\n  width: 50%;\n  height: auto;\n}\n@media (min-width: 959.98px) {\n  img[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n/*# sourceMappingURL=sources-display.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SourcesDisplayComponent, { className: "SourcesDisplayComponent", filePath: "src\\app\\display\\sources-display\\sources-display.component.ts", lineNumber: 16 });
})();

// src/app/display/sparql0-display/sparql0-display.component.ts
var _c08 = (a0) => ["/item", a0];
function Sparql0DisplayComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "mat-form-field", 7)(2, "input", 8);
    \u0275\u0275listener("keyup", function Sparql0DisplayComponent_Conditional_5_Template_input_keyup_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyFilter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \xA0\xA0\xA0", ctx_r2.list.length, " ");
  }
}
function Sparql0DisplayComponent_For_7_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", L_r4.itemDescription.value, "");
  }
}
function Sparql0DisplayComponent_For_7_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", L_r4.year.value, "");
  }
}
function Sparql0DisplayComponent_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 10)(3, "mat-icon", 6);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275template(6, Sparql0DisplayComponent_For_7_Conditional_1_Conditional_6_Template, 2, 1, "span")(7, Sparql0DisplayComponent_For_7_Conditional_1_Conditional_7_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", L_r4.itemLabel.value, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c08, L_r4.item.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(L_r4.itemDescription ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(L_r4.year ? 7 : -1);
  }
}
function Sparql0DisplayComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, Sparql0DisplayComponent_For_7_Conditional_1_Template, 8, 7, "label");
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "hr");
  }
  if (rf & 2) {
    const L_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(L_r4.itemLabel ? 1 : -1);
  }
}
var Sparql0DisplayComponent = class _Sparql0DisplayComponent {
  constructor() {
    this.lang = inject(SelectedLangService);
    this.csv = inject(ArrayToCsvService);
    this.list = [];
    this.isList = false;
    this.isSearch = false;
    this.subTitle = "";
    this.instancesListTitle_50 = "Instances (limit: 50):";
    this.subclassesListTitle = "Subclasses:";
    this.isWorks = false;
  }
  ngOnChanges(changes) {
    this.query = "";
    this.isWorks = false;
    this.isList = false;
    this.isSearch = false;
    if (changes.sparqlData && changes.sparqlData.currentValue) {
      if (this.sparqlData[0] !== void 0) {
        this.isList = true;
      }
      ;
      changes.sparqlData.currentValue.forEach(function(el) {
        if (el.itemDescription === void 0) {
          el.itemText = el.itemLabel.value;
        } else
          el.itemText = el.itemLabel.value + el.itemDescription.value;
      });
      this.listWithoutDuplicate = [...new Map(changes.sparqlData.currentValue.reverse().map((v) => [JSON.stringify([v.itemText]), v])).values()].reverse();
      this.list = this.listWithoutDuplicate;
      if (this.list.length > 15)
        this.isSearch = true;
    }
    if (changes.sparqlSubject && changes.sparqlSubject.currentValue) {
      this.subTitle = this.sparqlSubject;
      if (this.subTitle == "Q945280" || this.subTitle == "Q960698") {
        this.isWorks = true;
        this.subTitle = this.lang.subclassesListTitle(this.subclassesListTitle);
      } else {
        this.subTitle = "";
        this.list = [];
      }
    }
  }
  applyFilter(event) {
    this.query = event.target.value.trim().toLowerCase();
    this.list = this.filterItem(this.listWithoutDuplicate, this.query);
  }
  filterItem(arr, query) {
    return arr.filter((el) => el.itemText.toLowerCase().includes(this.query.toLowerCase()));
  }
  onClick(query) {
    let u = query;
    u = this.databaseToDownload(query);
    let v = this.csv.arrayToCsv(u);
    this.csv.downloadBlob(v, "factGrid", "text/csv;charset=utf-8;");
  }
  databaseToDownload(data) {
    let dataToDownload = [["item.id", "item.label", "item.description"]];
    for (let i = 0; i < data.length; i++) {
      dataToDownload[i + 1] = [data[i].item.id, data[i].itemLabel.value, data[i].itemDescription.value];
    }
    return dataToDownload;
  }
  ngOnDestroy() {
    this.sparqlSubject = "";
    this.sparqlData = "";
    this.list = [];
    this.query = "";
    this.isSearch = false;
    this.isList = false;
  }
  static {
    this.\u0275fac = function Sparql0DisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Sparql0DisplayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Sparql0DisplayComponent, selectors: [["app-sparql0-display"]], inputs: { sparqlSubject: "sparqlSubject", sparqlData: "sparqlData" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 13, vars: 5, consts: [["content", ""], [3, "ngClass"], ["appearance", "outlined", 1, "mat-elevation-z12"], [1, "cardBackground"], [1, "searchFormPadding"], ["mat-icon-button", "", "color", "primary", 1, "internalLink", 3, "click"], ["color", "primary", 3, "inline"], ["appearance", "outline"], ["matInput", "", "placeholder", "Search", 3, "keyup"], [1, "sparql-div", "statementStyle"], [1, "internalLink", 3, "routerLink"]], template: function Sparql0DisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "mat-card", 2)(2, "mat-card-content", 3)(3, "div", 1);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, Sparql0DisplayComponent_Conditional_5_Template, 5, 1, "div", 4);
        \u0275\u0275repeaterCreate(6, Sparql0DisplayComponent_For_7_Template, 3, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(8, "button", 5, 0);
        \u0275\u0275listener("click", function Sparql0DisplayComponent_Template_button_click_8_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onClick(ctx.list));
        });
        \u0275\u0275elementStart(10, "mat-icon", 6);
        \u0275\u0275text(11, "download");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(12, "\xA0\xA0\xA0\xA0\xA0\xA0 ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.isList ? "show-division" : "hide-division");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", ctx.isWorks ? "subdivisionTitle" : "propertyStyle");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.subTitle, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isSearch === true ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.list);
        \u0275\u0275advance(4);
        \u0275\u0275property("inline", true);
      }
    }, dependencies: [MatCardModule, MatCard, MatCardContent, NgClass, RouterLink, MatIconModule, MatIcon, MatFormFieldModule, MatFormField, MatInputModule, MatInput, FormsModule, MatButtonModule, MatIconButton], styles: ["\n\n.property2[_ngcontent-%COMP%] {\n  color: #3F51B5;\n  font-weight: 550;\n}\n.hide-division[_ngcontent-%COMP%] {\n  display: none;\n}\n.show-division[_ngcontent-%COMP%] {\n  display: block;\n}\n.sparql-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n}\n.sparql-div[_ngcontent-%COMP%]   .sparql-div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 2px;\n}\n/*# sourceMappingURL=sparql0-display.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Sparql0DisplayComponent, { className: "Sparql0DisplayComponent", filePath: "src\\app\\display\\sparql0-display\\sparql0-display.component.ts", lineNumber: 22 });
})();

// src/app/display/sparql1-display/sparql1-display.component.ts
var _forTrack0 = ($index, $item) => $item.item;
var _c09 = (a0) => ["/item", a0];
function Sparql1DisplayComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "mat-form-field", 8)(2, "input", 9);
    \u0275\u0275listener("keyup", function Sparql1DisplayComponent_Conditional_5_Template_input_keyup_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyFilter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \xA0\xA0\xA0", ctx_r2.list.length, " ");
  }
}
function Sparql1DisplayComponent_For_7_Conditional_2_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", L_r4.itemDescription.value, "");
  }
}
function Sparql1DisplayComponent_For_7_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, Sparql1DisplayComponent_For_7_Conditional_2_Conditional_1_Conditional_4_Template, 2, 1, "span");
  }
  if (rf & 2) {
    const L_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", L_r4.item.value, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", L_r4.item.id, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" : ", L_r4.itemLabel.value, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(L_r4.itemDescription ? 4 : -1);
  }
}
function Sparql1DisplayComponent_For_7_Conditional_2_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", L_r4.itemDescription.value, "");
  }
}
function Sparql1DisplayComponent_For_7_Conditional_2_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", L_r4.year.value, "");
  }
}
function Sparql1DisplayComponent_For_7_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275elementStart(1, "mat-icon-button", 11)(2, "mat-icon", 7);
    \u0275\u0275text(3, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(4, "\xA0\xA0\xA0 ");
    \u0275\u0275template(5, Sparql1DisplayComponent_For_7_Conditional_2_Conditional_2_Conditional_5_Template, 2, 1, "span")(6, Sparql1DisplayComponent_For_7_Conditional_2_Conditional_2_Conditional_6_Template, 2, 1, "span");
  }
  if (rf & 2) {
    const L_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", L_r4.itemLabel.value, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c09, L_r4.item.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(L_r4.itemDescription ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(L_r4.year ? 6 : -1);
  }
}
function Sparql1DisplayComponent_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275template(1, Sparql1DisplayComponent_For_7_Conditional_2_Conditional_1_Template, 5, 4)(2, Sparql1DisplayComponent_For_7_Conditional_2_Conditional_2_Template, 7, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(L_r4.item.entity === "property" ? 1 : 2);
  }
}
function Sparql1DisplayComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, ". ");
    \u0275\u0275template(2, Sparql1DisplayComponent_For_7_Conditional_2_Template, 3, 1, "label");
    \u0275\u0275element(3, "hr");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(L_r4.itemLabel ? 2 : -1);
  }
}
var Sparql1DisplayComponent = class _Sparql1DisplayComponent {
  constructor() {
    this.lang = inject(SelectedLangService);
    this.csv = inject(ArrayToCsvService);
    this.list = [];
    this.isList = false;
    this.isSearch = false;
    this.subTitle = "";
    this.instancesListTitle_50 = "Instances (limit: 50):";
    this.subclassesListTitle = "Subclasses:";
    this.isWorks = false;
    this.buildingTitle = "Buildings and monuments:";
    this.familyNameTitle = "Bearing this family name:";
    this.contextTitle = "Present in this context:";
    this.organisationTitle = "Members:";
    this.activityTitle = "With this activity:";
    this.addressTitle = "Domiciled at this address:";
    this.workTitle = "Works";
    this.pupilTitle = "Pupils and disciples";
    this.listTitle = "List";
  }
  ngOnChanges(changes) {
    this.query = "";
    this.isWorks = false;
    this.isList = false;
    if (changes.sparqlData && changes.sparqlData.currentValue) {
      if (this.sparqlData[0] !== void 0) {
        this.isList = true;
      }
      ;
      changes.sparqlData.currentValue.forEach(function(el) {
        if (el.itemDescription === void 0) {
          el.itemText = el.itemLabel.value;
        } else
          el.itemText = el.itemLabel.value + el.itemDescription.value;
      });
      this.listWithoutDuplicate = [...new Map(changes.sparqlData.currentValue.reverse().map((v) => [JSON.stringify([v.itemText]), v])).values()].reverse();
      this.list = this.listWithoutDuplicate;
      if (this.list.length > 15)
        this.isSearch = true;
    }
    if (changes.sparqlSubject && changes.sparqlSubject.currentValue) {
      this.subTitle = this.sparqlSubject;
      if (this.subTitle == "Q8") {
        this.isWorks = true;
        this.subTitle = this.lang.buildingTitle(this.buildingTitle);
      } else {
        if (this.subTitle == "Q24499") {
          this.isWorks = false;
          this.subTitle = this.lang.familyNameTitle(this.familyNameTitle);
        } else {
          if (this.subTitle == "Q12") {
            this.isWorks = false;
            if (this.list[0] && this.list[0].activity) {
              this.subTitle = this.lang.activityTitle(this.activityTitle);
            } else {
              this.isWorks = true;
              this.subTitle = this.lang.organisationTitle(this.organisationTitle);
            }
          } else {
            if (this.subTitle == "Q37073") {
              this.isWorks = true;
              this.subTitle = this.lang.activityTitle(this.activityTitle);
            } else {
              if (this.subTitle == "Q16200") {
                this.isWorks = true;
                this.subTitle = this.lang.addressTitle(this.addressTitle);
              } else {
                if (this.subTitle == "Q456376") {
                  this.isWorks = true;
                  this.subTitle = this.lang.workTitle(this.workTitle);
                } else {
                  if (this.subTitle = "Q172192") {
                    this.isWorks = true;
                    this.subTitle = this.lang.listTitle(this.listTitle);
                  } else {
                    this.subTitle = "";
                    this.list = [];
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  applyFilter(event) {
    this.query = event.target.value.trim().toLowerCase();
    this.list = this.filterItem(this.listWithoutDuplicate, this.query);
  }
  filterItem(arr, query) {
    return arr.filter((el) => el.itemText.toLowerCase().includes(this.query.toLowerCase()));
  }
  onClick(query) {
    let u = query;
    u = this.databaseToDownload(query);
    let v = this.csv.arrayToCsv(u);
    this.csv.downloadBlob(v, "factGrid", "text/csv;charset=utf-8;");
  }
  databaseToDownload(data) {
    let dataToDownload = [["item.id", "item.label", "item.description"]];
    for (let i = 0; i < data.length; i++) {
      dataToDownload[i + 1] = [data[i].item.id, data[i].itemLabel.value, data[i].itemDescription.value];
    }
    return dataToDownload;
  }
  ngOnDestroy() {
    this.sparqlSubject = "";
    this.sparqlData = "";
    this.list = [];
    this.query = "";
    this.isSearch = false;
    this.isList = false;
  }
  static {
    this.\u0275fac = function Sparql1DisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Sparql1DisplayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Sparql1DisplayComponent, selectors: [["app-sparql1-display"]], inputs: { sparqlSubject: "sparqlSubject", sparqlData: "sparqlData" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 14, vars: 5, consts: [["content", ""], [3, "ngClass"], ["appearance", "outlined", 1, "mat-elevation-z12"], [1, "cardBackground"], [1, "searchFormPadding"], [1, "sparql-div", "statementStyle"], ["mat-icon-button", "", "color", "primary", 1, "internalLink", 3, "click"], ["color", "primary", 3, "inline"], ["appearance", "outline"], ["matInput", "", "placeholder", "Search", 3, "keyup"], ["target", "_blank", 3, "href"], [1, "internalLink", 3, "routerLink"]], template: function Sparql1DisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "mat-card", 2)(2, "mat-card-content", 3)(3, "div", 1);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, Sparql1DisplayComponent_Conditional_5_Template, 5, 1, "div", 4);
        \u0275\u0275repeaterCreate(6, Sparql1DisplayComponent_For_7_Template, 4, 1, "div", 5, _forTrack0);
        \u0275\u0275elementStart(8, "span")(9, "button", 6, 0);
        \u0275\u0275listener("click", function Sparql1DisplayComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onClick(ctx.list));
        });
        \u0275\u0275elementStart(11, "mat-icon", 7);
        \u0275\u0275text(12, "download");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(13, "\xA0\xA0\xA0\xA0\xA0\xA0 ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.isList ? "show-division" : "hide-division");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", ctx.isWorks ? "subdivisionTitle" : "propertyStyle");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.subTitle, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isSearch === true ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.list);
        \u0275\u0275advance(5);
        \u0275\u0275property("inline", true);
      }
    }, dependencies: [MatCardModule, MatCard, MatCardContent, NgClass, RouterLink, MatIconModule, MatIcon, MatFormFieldModule, MatFormField, MatInputModule, MatInput, FormsModule, MatButtonModule, MatIconButton], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Sparql1DisplayComponent, { className: "Sparql1DisplayComponent", filePath: "src\\app\\display\\sparql1-display\\sparql1-display.component.ts", lineNumber: 22 });
})();

// src/app/display/sparql2-display/sparql2-display.component.ts
var _c010 = (a0) => ["/item", a0];
function Sparql2DisplayComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "mat-form-field", 8)(2, "input", 9);
    \u0275\u0275listener("keyup", function Sparql2DisplayComponent_Conditional_5_Template_input_keyup_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyFilter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \xA0\xA0\xA0", ctx_r2.list.length, " ");
  }
}
function Sparql2DisplayComponent_For_7_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", L_r4.itemDescription.value, "");
  }
}
function Sparql2DisplayComponent_For_7_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", L_r4.year.value, "");
  }
}
function Sparql2DisplayComponent_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 10)(3, "mat-icon", 7);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275template(6, Sparql2DisplayComponent_For_7_Conditional_1_Conditional_6_Template, 2, 1, "span")(7, Sparql2DisplayComponent_For_7_Conditional_1_Conditional_7_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", L_r4.itemLabel.value, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c010, L_r4.item.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(L_r4.itemDescription ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(L_r4.year ? 7 : -1);
  }
}
function Sparql2DisplayComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, Sparql2DisplayComponent_For_7_Conditional_1_Template, 8, 7, "label");
    \u0275\u0275element(2, "hr");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(L_r4.itemLabel.value ? 1 : -1);
  }
}
var Sparql2DisplayComponent = class _Sparql2DisplayComponent {
  constructor() {
    this.lang = inject(SelectedLangService);
    this.csv = inject(ArrayToCsvService);
    this.list = [];
    this.isList = false;
    this.isSearch = false;
    this.subTitle = "";
    this.isWorks = false;
    this.patientsTitle = "Patients";
    this.listTitle = "List";
  }
  ngOnChanges(changes) {
    this.query = "";
    this.isWorks = false;
    this.isList = false;
    this.isSearch = false;
    if (changes.sparqlData && changes.sparqlData.currentValue) {
      if (this.sparqlData[0] !== void 0) {
        this.isList = true;
      }
      ;
      changes.sparqlData.currentValue.forEach(function(el) {
        if (el.itemDescription === void 0) {
          el.itemText = el.itemLabel.value;
        } else
          el.itemText = el.itemLabel.value + el.itemDescription.value;
      });
      this.listWithoutDuplicate = [...new Map(changes.sparqlData.currentValue.reverse().map((v) => [JSON.stringify([v.itemText]), v])).values()].reverse();
      this.list = this.listWithoutDuplicate;
      if (this.list.length > 15)
        this.isSearch = true;
    }
    if (changes.sparqlSubject && changes.sparqlSubject.currentValue) {
      this.subTitle = this.sparqlSubject;
      if (this.subTitle == "Q140759") {
        this.isWorks = true;
        this.subTitle = this.lang.patientsTitle(this.patientsTitle);
      } else {
        this.subTitle = "";
        this.list = [];
      }
    }
  }
  applyFilter(event) {
    this.query = event.target.value.trim().toLowerCase();
    this.list = this.filterItem(this.listWithoutDuplicate, this.query);
  }
  filterItem(arr, query) {
    return arr.filter((el) => el.itemText.toLowerCase().includes(this.query.toLowerCase()));
  }
  onClick(query) {
    let u = query;
    u = this.databaseToDownload(query);
    let v = this.csv.arrayToCsv(u);
    this.csv.downloadBlob(v, "factGrid", "text/csv;charset=utf-8;");
  }
  databaseToDownload(data) {
    let dataToDownload = [["item.id", "item.label", "item.description"]];
    for (let i = 0; i < data.length; i++) {
      dataToDownload[i + 1] = [data[i].item.value, data[i].itemLabel.value, data[i].itemDescription.value];
    }
    return dataToDownload;
  }
  ngOnDestroy() {
    this.sparqlSubject = "";
    this.sparqlData = "";
    this.list = [];
    this.query = "";
    this.isSearch = false;
    this.isList = false;
  }
  static {
    this.\u0275fac = function Sparql2DisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Sparql2DisplayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Sparql2DisplayComponent, selectors: [["app-sparql2-display"]], inputs: { sparqlSubject: "sparqlSubject", sparqlData: "sparqlData" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 14, vars: 5, consts: [["content", ""], [3, "ngClass"], ["appearance", "outlined", 1, "mat-elevation-z12"], [1, "cardBackground"], [1, "searchFormPadding"], [1, "sparql-div", "statementStyle"], ["mat-icon-button", "", "color", "primary", 1, "internalLink", 3, "click"], ["color", "primary", 3, "inline"], ["appearance", "outline"], ["matInput", "", "placeholder", "Search", 3, "keyup"], [1, "internalLink", 3, "routerLink"]], template: function Sparql2DisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "mat-card", 2)(2, "mat-card-content", 3)(3, "div", 1);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, Sparql2DisplayComponent_Conditional_5_Template, 5, 1, "div", 4);
        \u0275\u0275repeaterCreate(6, Sparql2DisplayComponent_For_7_Template, 3, 1, "div", 5, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(8, "span")(9, "button", 6, 0);
        \u0275\u0275listener("click", function Sparql2DisplayComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onClick(ctx.list));
        });
        \u0275\u0275elementStart(11, "mat-icon", 7);
        \u0275\u0275text(12, "download");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(13, "\xA0\xA0\xA0\xA0\xA0\xA0 ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.isList ? "show-division" : "hide-division");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", ctx.isWorks ? "subdivisionTitle" : "propertyStyle");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.subTitle);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isSearch === true ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.list);
        \u0275\u0275advance(5);
        \u0275\u0275property("inline", true);
      }
    }, dependencies: [MatCardModule, MatCard, MatCardContent, NgClass, RouterLink, MatIconModule, MatIcon, MatFormFieldModule, MatFormField, MatInputModule, MatInput, MatButtonModule, MatIconButton, FormsModule], styles: ["\n\n.property2[_ngcontent-%COMP%] {\n  color: #3F51B5;\n  font-weight: 550;\n}\n.hide-division[_ngcontent-%COMP%] {\n  display: none;\n}\n.show-division[_ngcontent-%COMP%] {\n  display: block;\n}\n.sparql-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n}\n.sparql-div[_ngcontent-%COMP%]   .sparql-div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 2px;\n}\n/*# sourceMappingURL=sparql2-display.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Sparql2DisplayComponent, { className: "Sparql2DisplayComponent", filePath: "src\\app\\display\\sparql2-display\\sparql2-display.component.ts", lineNumber: 22 });
})();

// src/app/display/sparql3-display/sparql3-display.component.ts
var _c011 = (a0) => ["/item", a0];
function Sparql3DisplayComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "mat-form-field", 8)(2, "input", 9);
    \u0275\u0275listener("keyup", function Sparql3DisplayComponent_Conditional_5_Template_input_keyup_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyFilter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \xA0\xA0\xA0", ctx_r2.list.length, " ");
  }
}
function Sparql3DisplayComponent_For_7_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", L_r4.itemDescription.value, "");
  }
}
function Sparql3DisplayComponent_For_7_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", L_r4.year.value, "");
  }
}
function Sparql3DisplayComponent_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 10)(3, "mat-icon", 7);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275template(6, Sparql3DisplayComponent_For_7_Conditional_1_Conditional_6_Template, 2, 1, "span")(7, Sparql3DisplayComponent_For_7_Conditional_1_Conditional_7_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", L_r4.itemLabel.value, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c011, L_r4.item.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(L_r4.itemDescription ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(L_r4.year ? 7 : -1);
  }
}
function Sparql3DisplayComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, Sparql3DisplayComponent_For_7_Conditional_1_Template, 8, 7, "label");
    \u0275\u0275element(2, "hr");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(L_r4.itemLabel.value ? 1 : -1);
  }
}
var Sparql3DisplayComponent = class _Sparql3DisplayComponent {
  constructor() {
    this.lang = inject(SelectedLangService);
    this.csv = inject(ArrayToCsvService);
    this.sparqlSubject = input();
    this.sparqlData = input();
    this.list = [];
    this.isList = false;
    this.isSearch = false;
    this.subTitle = "";
    this.isWorks = false;
    this.pupilTitle = "Pupils and disciples";
    this.currentAddress = "Current address";
    this.listTitle = "List";
    this.setTitle = "Include:";
  }
  ngOnChanges(changes) {
    this.query = "";
    this.isWorks = false;
    this.isList = false;
    this.isSearch = false;
    console.log(changes.sparqlData);
    console.log(changes.sparqlSubject);
    if (changes.sparqlData && changes.sparqlData.currentValue) {
      if (this.sparqlData()[0] !== void 0) {
        this.isList = true;
      }
      ;
      changes.sparqlData.currentValue.forEach(function(el) {
        if (el.itemDescription === void 0) {
          el.itemText = el.itemLabel.value;
        } else
          el.itemText = el.itemLabel.value + el.itemDescription.value;
      });
      this.listWithoutDuplicate = [...new Map(changes.sparqlData.currentValue.reverse().map((v) => [JSON.stringify([v.itemText]), v])).values()].reverse();
      this.list = this.listWithoutDuplicate;
      if (this.list.length > 15)
        this.isSearch = true;
    }
    if (changes.sparqlSubject && changes.sparqlSubject.currentValue) {
      this.subTitle = this.sparqlSubject();
      console.log(this.subTitle);
      if (this.subTitle == "master") {
        this.isWorks = true;
        this.subTitle = this.lang.pupilTitle(this.pupilTitle);
      } else {
        if (this.subTitle == "Q945258") {
          this.isWorks = true;
          this.subTitle = this.lang.setTitle(this.setTitle);
        } else {
          if (this.subTitle == "Q172192") {
            this.isWorks = true;
            this.subTitle = this.lang.listTitle(this.listTitle);
          } else {
            if (this.subTitle == "current address:") {
              this.isWorks = false;
              this.subTitle = this.lang.currentAddress(this.currentAddress);
              console.log(this.subTitle);
            } else {
              this.subTitle = "";
              this.list = [];
            }
          }
        }
      }
    }
  }
  applyFilter(event) {
    this.query = event.target.value.trim().toLowerCase();
    this.list = this.filterItem(this.listWithoutDuplicate, this.query);
  }
  filterItem(arr, query) {
    return arr.filter((el) => el.itemText.toLowerCase().includes(this.query.toLowerCase()));
  }
  onClick(query) {
    let u = query;
    u = this.databaseToDownload(query);
    let v = this.csv.arrayToCsv(u);
    this.csv.downloadBlob(v, "factGrid", "text/csv;charset=utf-8;");
  }
  databaseToDownload(data) {
    let dataToDownload = [["item.id", "item.label", "item.description"]];
    for (let i = 0; i < data.length; i++) {
      dataToDownload[i + 1] = [data[i].item.value, data[i].itemLabel.value, data[i].itemDescription.value];
    }
    return dataToDownload;
  }
  ngOnDestroy() {
    this.list = [];
    this.query = "";
    this.isSearch = false;
    this.isList = false;
  }
  static {
    this.\u0275fac = function Sparql3DisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Sparql3DisplayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Sparql3DisplayComponent, selectors: [["app-sparql3-display"]], inputs: { sparqlSubject: [1, "sparqlSubject"], sparqlData: [1, "sparqlData"] }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 14, vars: 5, consts: [["content", ""], [3, "ngClass"], ["appearance", "outlined", 1, "mat-elevation-z12"], [1, "cardBackground"], [1, "searchFormPadding"], [1, "sparql-div", "statementStyle"], ["mat-icon-button", "", "color", "primary", 1, "internalLink", 3, "click"], ["color", "primary", 3, "inline"], ["appearance", "outline"], ["matInput", "", "placeholder", "Search", 3, "keyup"], [1, "internalLink", 3, "routerLink"]], template: function Sparql3DisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "mat-card", 2)(2, "mat-card-content", 3)(3, "div", 1);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, Sparql3DisplayComponent_Conditional_5_Template, 5, 1, "div", 4);
        \u0275\u0275repeaterCreate(6, Sparql3DisplayComponent_For_7_Template, 3, 1, "div", 5, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(8, "span")(9, "button", 6, 0);
        \u0275\u0275listener("click", function Sparql3DisplayComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onClick(ctx.list));
        });
        \u0275\u0275elementStart(11, "mat-icon", 7);
        \u0275\u0275text(12, "download");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(13, "\xA0\xA0\xA0\xA0\xA0\xA0 ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.isList ? "show-division" : "hide-division");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", ctx.isWorks ? "subdivisionTitle" : "propertyStyle");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.subTitle);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isSearch === true ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.list);
        \u0275\u0275advance(5);
        \u0275\u0275property("inline", true);
      }
    }, dependencies: [MatCardModule, MatCard, MatCardContent, NgClass, RouterLink, MatIconModule, MatIcon, MatFormFieldModule, MatFormField, MatInputModule, MatInput, MatButtonModule, MatIconButton, FormsModule], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Sparql3DisplayComponent, { className: "Sparql3DisplayComponent", filePath: "src\\app\\display\\sparql3-display\\sparql3-display.component.ts", lineNumber: 23 });
})();

// src/app/display/sparql4-display/sparql4-display.component.ts
var _c012 = (a0) => ["/item", a0];
function Sparql4DisplayComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "mat-form-field", 9)(2, "input", 10);
    \u0275\u0275listener("keyup", function Sparql4DisplayComponent_Conditional_5_Template_input_keyup_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyFilter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \xA0\xA0\xA0", ctx_r2.list.length, " ");
  }
}
function Sparql4DisplayComponent_For_7_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", L_r4.itemDescription.value, "");
  }
}
function Sparql4DisplayComponent_For_7_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", L_r4.year.value, "");
  }
}
function Sparql4DisplayComponent_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 11)(3, "mat-icon", 8);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0 ");
    \u0275\u0275template(6, Sparql4DisplayComponent_For_7_Conditional_1_Conditional_6_Template, 2, 1, "span")(7, Sparql4DisplayComponent_For_7_Conditional_1_Conditional_7_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", L_r4.itemLabel.value, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c012, L_r4.item.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(L_r4.itemDescription ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(L_r4.year ? 7 : -1);
  }
}
function Sparql4DisplayComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, Sparql4DisplayComponent_For_7_Conditional_1_Template, 8, 7, "label");
    \u0275\u0275element(2, "hr");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const L_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(L_r4.itemLabel.value ? 1 : -1);
  }
}
var Sparql4DisplayComponent = class _Sparql4DisplayComponent {
  constructor() {
    this.lang = inject(SelectedLangService);
    this.csv = inject(ArrayToCsvService);
    this.sparqlSubject = input();
    this.sparqlData = input();
    this.list = [];
    this.isList = false;
    this.isSearch = false;
    this.subTitle = "";
    this.isWorks = false;
    this.buildingTitle = "Buildings and monuments:";
    this.listTitle = "List";
  }
  ngOnChanges(changes) {
    this.query = "";
    this.isWorks = false;
    this.isList = false;
    this.isSearch = false;
    if (changes.sparqlData && changes.sparqlData.currentValue) {
      if (this.sparqlData()[0] !== void 0) {
        this.isList = true;
        console.log(this.sparqlData());
      }
      ;
      changes.sparqlData.currentValue.forEach(function(el) {
        if (el.itemDescription === void 0) {
          el.itemText = el.itemLabel.value;
        } else
          el.itemText = el.itemLabel.value + el.itemDescription.value;
      });
      this.listWithoutDuplicate = [...new Map(changes.sparqlData.currentValue.reverse().map((v) => [JSON.stringify([v.itemText]), v])).values()].reverse();
      this.list = this.listWithoutDuplicate;
      if (this.list.length > 15)
        this.isSearch = true;
    }
    if (changes.sparqlSubject && changes.sparqlSubject.currentValue) {
      this.subTitle = this.sparqlSubject();
      if (this.subTitle == "Q8") {
        this.isWorks = true;
        this.subTitle = this.lang.buildingTitle(this.buildingTitle);
      } else {
        if (this.subTitle == "GOV") {
          this.isWorks = true;
          this.subTitle = this.lang.listTitle(this.listTitle);
        } else {
          this.subTitle = "";
          this.list = [];
        }
      }
    }
  }
  applyFilter(event) {
    this.query = event.target.value.trim().toLowerCase();
    this.list = this.filterItem(this.listWithoutDuplicate, this.query);
  }
  filterItem(arr, query) {
    return arr.filter((el) => el.itemText.toLowerCase().includes(this.query.toLowerCase()));
  }
  onClick(query) {
    let u = query;
    u = this.databaseToDownload(query);
    let v = this.csv.arrayToCsv(u);
    this.csv.downloadBlob(v, "factGrid", "text/csv;charset=utf-8;");
  }
  databaseToDownload(data) {
    let dataToDownload = [["item.id", "item.label", "item.description"]];
    for (let i = 0; i < data.length; i++) {
      dataToDownload[i + 1] = [data[i].item.value, data[i].itemLabel.value, data[i].itemDescription.value];
    }
    return dataToDownload;
  }
  ngOnDestroy() {
    this.list = [];
    this.query = "";
    this.isSearch = false;
    this.isList = false;
  }
  static {
    this.\u0275fac = function Sparql4DisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Sparql4DisplayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Sparql4DisplayComponent, selectors: [["app-sparql4-display"]], inputs: { sparqlSubject: [1, "sparqlSubject"], sparqlData: [1, "sparqlData"] }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 14, vars: 5, consts: [["content", ""], [3, "ngClass"], ["appearance", "outlined", 1, "mat-elevation-z12"], [1, "cardBackground"], [1, "subTitlePadding", 3, "ngClass"], [1, "searchFormPadding"], [1, "sparql-div", "statementStyle"], ["mat-icon-button", "", "color", "primary", 1, "internalLink", 3, "click"], ["color", "primary", 3, "inline"], ["appearance", "outline"], ["matInput", "", "placeholder", "Search", 3, "keyup"], [1, "internalLink", 3, "routerLink"]], template: function Sparql4DisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "mat-card", 2)(2, "mat-card-content", 3)(3, "div", 4);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, Sparql4DisplayComponent_Conditional_5_Template, 5, 1, "div", 5);
        \u0275\u0275repeaterCreate(6, Sparql4DisplayComponent_For_7_Template, 3, 1, "div", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(8, "span")(9, "button", 7, 0);
        \u0275\u0275listener("click", function Sparql4DisplayComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onClick(ctx.list));
        });
        \u0275\u0275elementStart(11, "mat-icon", 8);
        \u0275\u0275text(12, "download");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(13, "\xA0\xA0\xA0\xA0\xA0\xA0 ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.isList ? "show-division" : "hide-division");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", ctx.isWorks ? "subdivisionTitle" : "propertyStyle");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.subTitle);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isSearch === true ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.list);
        \u0275\u0275advance(5);
        \u0275\u0275property("inline", true);
      }
    }, dependencies: [MatCardModule, MatCard, MatCardContent, NgClass, RouterLink, MatIconModule, MatIcon, MatFormFieldModule, MatFormField, MatInputModule, MatInput, MatButtonModule, MatIconButton, FormsModule], styles: ["\n\n/*# sourceMappingURL=sparql4-display.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Sparql4DisplayComponent, { className: "Sparql4DisplayComponent", filePath: "src\\app\\display\\sparql4-display\\sparql4-display.component.ts", lineNumber: 22 });
})();

// src/app/display/iframes-display/iframes-display.component.ts
function IframesDisplayComponent_Conditional_1_Conditional_4_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.claims.P309[0].qualifiers2[0].value.label);
  }
}
function IframesDisplayComponent_Conditional_1_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_1_Conditional_4_Conditional_1_Conditional_1_Template, 3, 1, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P309[0].qualifiers2[0].value.label ? 1 : -1);
  }
}
function IframesDisplayComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_1_Conditional_4_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275element(2, "iframe", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P309[0].qualifiers2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.urlSafe1, \u0275\u0275sanitizeResourceUrl);
  }
}
function IframesDisplayComponent_Conditional_1_Conditional_5_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.claims.P309[1].qualifiers2[0].value.label);
  }
}
function IframesDisplayComponent_Conditional_1_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_1_Conditional_5_Conditional_1_Conditional_1_Template, 3, 1, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P309[1].qualifiers2[0].value.label ? 1 : -1);
  }
}
function IframesDisplayComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_1_Conditional_5_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275element(2, "iframe", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P309[1].qualifiers2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.urlSafe2, \u0275\u0275sanitizeResourceUrl);
  }
}
function IframesDisplayComponent_Conditional_1_Conditional_6_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.claims.P309[2].qualifiers2[0].value.label);
  }
}
function IframesDisplayComponent_Conditional_1_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_1_Conditional_6_Conditional_1_Conditional_1_Template, 3, 1, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P309[2].qualifiers2[0].value.label ? 1 : -1);
  }
}
function IframesDisplayComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_1_Conditional_6_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275element(2, "iframe", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P309[2].qualifiers2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.urlSafe3, \u0275\u0275sanitizeResourceUrl);
  }
}
function IframesDisplayComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 1)(2, "span", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, IframesDisplayComponent_Conditional_1_Conditional_4_Template, 3, 2, "div")(5, IframesDisplayComponent_Conditional_1_Conditional_5_Template, 3, 2, "div")(6, IframesDisplayComponent_Conditional_1_Conditional_6_Template, 3, 2, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.claims.P309.label, ":");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P309[0] ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P309[1] ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P309[2] ? 6 : -1);
  }
}
function IframesDisplayComponent_Conditional_2_Conditional_4_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.claims.P679[0].qualifiers2[0].value.label);
  }
}
function IframesDisplayComponent_Conditional_2_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_2_Conditional_4_Conditional_1_Conditional_1_Template, 3, 1, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P320[0].qualifiers2[0].value.label ? 1 : -1);
  }
}
function IframesDisplayComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_2_Conditional_4_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275element(2, "iframe", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P320[0].qualifiers2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.urlSafe4, \u0275\u0275sanitizeResourceUrl);
  }
}
function IframesDisplayComponent_Conditional_2_Conditional_5_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.claims.P679[0].qualifiers2[0].value.label);
  }
}
function IframesDisplayComponent_Conditional_2_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_2_Conditional_5_Conditional_1_Conditional_1_Template, 3, 1, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P320[1].qualifiers2[0].value.label ? 1 : -1);
  }
}
function IframesDisplayComponent_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_2_Conditional_5_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275element(2, "iframe", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P320[1].qualifiers2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.urlSafe5, \u0275\u0275sanitizeResourceUrl);
  }
}
function IframesDisplayComponent_Conditional_2_Conditional_6_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.claims.P679[0].qualifiers2[0].value.label);
  }
}
function IframesDisplayComponent_Conditional_2_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_2_Conditional_6_Conditional_1_Conditional_1_Template, 3, 1, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P320[2].qualifiers2[0].value.label ? 1 : -1);
  }
}
function IframesDisplayComponent_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_2_Conditional_6_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275element(2, "iframe", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P320[2].qualifiers2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.urlSafe6, \u0275\u0275sanitizeResourceUrl);
  }
}
function IframesDisplayComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 1)(2, "span", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, IframesDisplayComponent_Conditional_2_Conditional_4_Template, 3, 2, "div")(5, IframesDisplayComponent_Conditional_2_Conditional_5_Template, 3, 2, "div")(6, IframesDisplayComponent_Conditional_2_Conditional_6_Template, 3, 2, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.claims.P320.label, ":");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P320[0] ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P320[1] ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P320[2] ? 6 : -1);
  }
}
function IframesDisplayComponent_Conditional_3_Conditional_3_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.claims.P679[0].qualifiers2[0].value.label);
  }
}
function IframesDisplayComponent_Conditional_3_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_3_Conditional_3_Conditional_1_Conditional_1_Template, 3, 1, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P679[0].qualifiers2[0].value.label ? 1 : -1);
  }
}
function IframesDisplayComponent_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_3_Conditional_3_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275element(2, "iframe", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P679[0].qualifiers2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.urlSafe7, \u0275\u0275sanitizeResourceUrl);
  }
}
function IframesDisplayComponent_Conditional_3_Conditional_4_Conditional_1_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.claims.P679[1].qualifiers2[0].value.label);
  }
}
function IframesDisplayComponent_Conditional_3_Conditional_4_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_3_Conditional_4_Conditional_1_Conditional_1_Conditional_1_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P679[1].qualifiers2 ? 1 : -1);
  }
}
function IframesDisplayComponent_Conditional_3_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_3_Conditional_4_Conditional_1_Conditional_1_Template, 2, 1, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P679[1].qualifiers2[0].value.label ? 1 : -1);
  }
}
function IframesDisplayComponent_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_3_Conditional_4_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275element(2, "iframe", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P679[1].qualifiers2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.urlSafe8, \u0275\u0275sanitizeResourceUrl);
  }
}
function IframesDisplayComponent_Conditional_3_Conditional_5_Conditional_1_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.claims.P679[2].qualifiers2[0].value.label);
  }
}
function IframesDisplayComponent_Conditional_3_Conditional_5_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_3_Conditional_5_Conditional_1_Conditional_1_Conditional_1_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P679[2].qualifiers2 ? 1 : -1);
  }
}
function IframesDisplayComponent_Conditional_3_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_3_Conditional_5_Conditional_1_Conditional_1_Template, 2, 1, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P679[2].qualifiers2[0].value.label ? 1 : -1);
  }
}
function IframesDisplayComponent_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_3_Conditional_5_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275element(2, "iframe", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P679[2].qualifiers2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.urlSafe9, \u0275\u0275sanitizeResourceUrl);
  }
}
function IframesDisplayComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, IframesDisplayComponent_Conditional_3_Conditional_3_Template, 3, 2, "div")(4, IframesDisplayComponent_Conditional_3_Conditional_4_Template, 3, 2, "div")(5, IframesDisplayComponent_Conditional_3_Conditional_5_Template, 3, 2, "div");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.claims.P679.label, ":");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P679[0] ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P679[1] ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P679[2] ? 5 : -1);
  }
}
function IframesDisplayComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.claims.P693[0].qualifiers2[0].value.label);
  }
}
function IframesDisplayComponent_Conditional_4_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_1_Template, 3, 1, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P693[0].qualifiers2[0].value.label ? 1 : -1);
  }
}
function IframesDisplayComponent_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_4_Conditional_4_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275element(2, "iframe", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P693[0].qualifiers2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.urlSafe10, \u0275\u0275sanitizeResourceUrl);
  }
}
function IframesDisplayComponent_Conditional_4_Conditional_5_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.claims.P693[1].qualifiers2[0].value.label);
  }
}
function IframesDisplayComponent_Conditional_4_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_4_Conditional_5_Conditional_1_Conditional_1_Template, 3, 1, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P693[1].qualifiers2[0].value.label ? 1 : -1);
  }
}
function IframesDisplayComponent_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_4_Conditional_5_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275element(2, "iframe", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P693[1].qualifiers2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.urlSafe11, \u0275\u0275sanitizeResourceUrl);
  }
}
function IframesDisplayComponent_Conditional_4_Conditional_6_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.claims.P693[2].qualifiers2[0].value.label);
  }
}
function IframesDisplayComponent_Conditional_4_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_4_Conditional_6_Conditional_1_Conditional_1_Template, 3, 1, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P693[2].qualifiers2[0].value.label ? 1 : -1);
  }
}
function IframesDisplayComponent_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_4_Conditional_6_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275element(2, "iframe", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P693[2].qualifiers2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.urlSafe12, \u0275\u0275sanitizeResourceUrl);
  }
}
function IframesDisplayComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 1)(2, "span", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, IframesDisplayComponent_Conditional_4_Conditional_4_Template, 3, 2, "div")(5, IframesDisplayComponent_Conditional_4_Conditional_5_Template, 3, 2, "div")(6, IframesDisplayComponent_Conditional_4_Conditional_6_Template, 3, 2, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.claims.P693.label, ":");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P693[0] ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P693[1] ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P693[2] ? 6 : -1);
  }
}
function IframesDisplayComponent_Conditional_5_Conditional_4_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.claims.P720[0].qualifiers2[0].value.label);
  }
}
function IframesDisplayComponent_Conditional_5_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_5_Conditional_4_Conditional_1_Conditional_1_Template, 3, 1, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P720[0].qualifiers2[0].value.label ? 1 : -1);
  }
}
function IframesDisplayComponent_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_5_Conditional_4_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275element(2, "iframe", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P720[0].qualifiers2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.urlSafe13, \u0275\u0275sanitizeResourceUrl);
  }
}
function IframesDisplayComponent_Conditional_5_Conditional_5_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.claims.P720[1].qualifiers2[0].value.label);
  }
}
function IframesDisplayComponent_Conditional_5_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_5_Conditional_5_Conditional_1_Conditional_1_Template, 3, 1, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P720[1].qualifiers2[0].value.label ? 1 : -1);
  }
}
function IframesDisplayComponent_Conditional_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_5_Conditional_5_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275element(2, "iframe", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P720[1].qualifiers2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.urlSafe14, \u0275\u0275sanitizeResourceUrl);
  }
}
function IframesDisplayComponent_Conditional_5_Conditional_6_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.claims.P720[2].qualifiers2[0].value.label);
  }
}
function IframesDisplayComponent_Conditional_5_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_5_Conditional_6_Conditional_1_Conditional_1_Template, 3, 1, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P720[2].qualifiers2[0].value.label ? 1 : -1);
  }
}
function IframesDisplayComponent_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IframesDisplayComponent_Conditional_5_Conditional_6_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275element(2, "iframe", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P720[2].qualifiers2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.urlSafe15, \u0275\u0275sanitizeResourceUrl);
  }
}
function IframesDisplayComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 1)(2, "span", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, IframesDisplayComponent_Conditional_5_Conditional_4_Template, 3, 2, "div")(5, IframesDisplayComponent_Conditional_5_Conditional_5_Template, 3, 2, "div")(6, IframesDisplayComponent_Conditional_5_Conditional_6_Template, 3, 2, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.claims.P720.label, ":");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P720[0] ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P720[1] ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.claims.P720[2] ? 6 : -1);
  }
}
var IframesDisplayComponent = class _IframesDisplayComponent {
  static {
    this.\u0275fac = function IframesDisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IframesDisplayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IframesDisplayComponent, selectors: [["app-iframes-display"]], inputs: { claims: "claims", urlSafe1: "urlSafe1", urlSafe2: "urlSafe2", urlSafe3: "urlSafe3", urlSafe4: "urlSafe4", urlSafe5: "urlSafe5", urlSafe6: "urlSafe6", urlSafe7: "urlSafe7", urlSafe8: "urlSafe8", urlSafe9: "urlSafe9", urlSafe10: "urlSafe10", urlSafe11: "urlSafe11", urlSafe12: "urlSafe12", urlSafe13: "urlSafe13", urlSafe14: "urlSafe14", urlSafe15: "urlSafe15" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 5, consts: [[1, "cardBackground"], [1, "iframeTitlePadding"], [1, "propertyStyle"], [2, "width", "100%", "height", "100vh", "border", "none", 3, "src"], [1, "iFrameComment"]], template: function IframesDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-card-content", 0);
        \u0275\u0275template(1, IframesDisplayComponent_Conditional_1_Template, 7, 4, "div")(2, IframesDisplayComponent_Conditional_2_Template, 7, 4, "div")(3, IframesDisplayComponent_Conditional_3_Template, 6, 4)(4, IframesDisplayComponent_Conditional_4_Template, 7, 4, "div")(5, IframesDisplayComponent_Conditional_5_Template, 7, 4, "div");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.claims.P309 ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.claims.P320 ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.claims.P679 ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.claims.P693 ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.claims.P720 ? 5 : -1);
      }
    }, dependencies: [CommonModule, MatIconModule, MatCardModule, MatCardContent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IframesDisplayComponent, { className: "IframesDisplayComponent", filePath: "src\\app\\display\\iframes-display\\iframes-display.component.ts", lineNumber: 15 });
})();

// src/app/display/text-display/text-display.component.ts
var TextDisplayComponent = class _TextDisplayComponent {
  constructor() {
    this.changeDetector = inject(ChangeDetectorRef);
    this.selectedLang = localStorage["selectedLang"] === void 0 ? "en" : localStorage["selectedLang"];
    this.text = "";
    this.isTrans = false;
  }
  ngOnChanges(changes) {
    this.transcription = "Transcription";
    if (this.selectedLang === "de") {
      this.transcription = "Transkription";
    }
    ;
    if (this.selectedLang === "fr") {
      this.transcription = "Transcription";
    }
    ;
    if (this.selectedLang === "es") {
      this.transcription = "Transcripci\xF3n";
    }
    ;
    if (this.trans === void 0) {
      this.isTrans = false;
    }
    ;
    const currentTrans = changes.trans;
    this.text = currentTrans.currentValue;
    if (this.text !== void 0) {
      this.isTrans = true;
    }
    ;
    if (this.text == "") {
      this.isTrans = false;
    }
    ;
    console.log(this.text);
    console.log(this.isTrans);
  }
  static {
    this.\u0275fac = function TextDisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TextDisplayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TextDisplayComponent, selectors: [["app-text-display"]], inputs: { trans: "trans" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 5, vars: 3, consts: [[3, "ngClass"], [1, "cardBackground"], [1, "subdivision-title"], [3, "innerHtml"]], template: function TextDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card-content", 1)(2, "div", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "div", 3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.isTrans ? "show-division" : "hide-division");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.transcription);
        \u0275\u0275advance();
        \u0275\u0275property("innerHtml", ctx.text, \u0275\u0275sanitizeHtml);
      }
    }, dependencies: [NgClass, MatCardModule, MatCardContent], styles: ["\n\n.subdivision-title[_ngcontent-%COMP%] {\n  color: #AD1457;\n  font-size: 20px !important;\n  font-weight: 360;\n  padding: 5 px;\n  margin-left: auto;\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=text-display.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TextDisplayComponent, { className: "TextDisplayComponent", filePath: "src\\app\\display\\text-display\\text-display.component.ts", lineNumber: 13 });
})();

// node_modules/@angular/material/fesm2022/tabs.mjs
var _c013 = ["*"];
function MatTab_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var _c18 = ["tabListContainer"];
var _c27 = ["tabList"];
var _c36 = ["tabListInner"];
var _c4 = ["nextPaginator"];
var _c5 = ["previousPaginator"];
var _c6 = (a0) => ({
  animationDuration: a0
});
var _c7 = (a0, a1) => ({
  value: a0,
  params: a1
});
function MatTabBody_ng_template_2_Template(rf, ctx) {
}
var _c8 = ["tabBodyWrapper"];
var _c9 = ["tabHeader"];
function MatTabGroup_For_3_Conditional_6_ng_template_0_Template(rf, ctx) {
}
function MatTabGroup_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatTabGroup_For_3_Conditional_6_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("cdkPortalOutlet", tab_r4.templateLabel);
  }
}
function MatTabGroup_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(tab_r4.textLabel);
  }
}
function MatTabGroup_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7, 2);
    \u0275\u0275listener("click", function MatTabGroup_For_3_Template_div_click_0_listener() {
      const ctx_r2 = \u0275\u0275restoreView(_r2);
      const tab_r4 = ctx_r2.$implicit;
      const \u0275$index_3_r5 = ctx_r2.$index;
      const ctx_r5 = \u0275\u0275nextContext();
      const tabHeader_r7 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(ctx_r5._handleClick(tab_r4, tabHeader_r7, \u0275$index_3_r5));
    })("cdkFocusChange", function MatTabGroup_For_3_Template_div_cdkFocusChange_0_listener($event) {
      const \u0275$index_3_r5 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5._tabFocusChanged($event, \u0275$index_3_r5));
    });
    \u0275\u0275element(2, "span", 8)(3, "div", 9);
    \u0275\u0275elementStart(4, "span", 10)(5, "span", 11);
    \u0275\u0275template(6, MatTabGroup_For_3_Conditional_6_Template, 1, 1, null, 12)(7, MatTabGroup_For_3_Conditional_7_Template, 1, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const \u0275$index_3_r5 = ctx.$index;
    const tabNode_r8 = \u0275\u0275reference(1);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classMap(tab_r4.labelClass);
    \u0275\u0275classProp("mdc-tab--active", ctx_r5.selectedIndex === \u0275$index_3_r5);
    \u0275\u0275property("id", ctx_r5._getTabLabelId(\u0275$index_3_r5))("disabled", tab_r4.disabled)("fitInkBarToContent", ctx_r5.fitInkBarToContent);
    \u0275\u0275attribute("tabIndex", ctx_r5._getTabIndex(\u0275$index_3_r5))("aria-posinset", \u0275$index_3_r5 + 1)("aria-setsize", ctx_r5._tabs.length)("aria-controls", ctx_r5._getTabContentId(\u0275$index_3_r5))("aria-selected", ctx_r5.selectedIndex === \u0275$index_3_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);
    \u0275\u0275advance(3);
    \u0275\u0275property("matRippleTrigger", tabNode_r8)("matRippleDisabled", tab_r4.disabled || ctx_r5.disableRipple);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(tab_r4.templateLabel ? 6 : 7);
  }
}
function MatTabGroup_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function MatTabGroup_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-tab-body", 13);
    \u0275\u0275listener("_onCentered", function MatTabGroup_For_8_Template_mat_tab_body__onCentered_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5._removeTabBodyWrapperHeight());
    })("_onCentering", function MatTabGroup_For_8_Template_mat_tab_body__onCentering_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5._setTabBodyWrapperHeight($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r10 = ctx.$implicit;
    const \u0275$index_23_r11 = ctx.$index;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classMap(tab_r10.bodyClass);
    \u0275\u0275classProp("mat-mdc-tab-body-active", ctx_r5.selectedIndex === \u0275$index_23_r11);
    \u0275\u0275property("id", ctx_r5._getTabContentId(\u0275$index_23_r11))("content", tab_r10.content)("position", tab_r10.position)("origin", tab_r10.origin)("animationDuration", ctx_r5.animationDuration)("preserveContent", ctx_r5.preserveContent);
    \u0275\u0275attribute("tabindex", ctx_r5.contentTabIndex != null && ctx_r5.selectedIndex === \u0275$index_23_r11 ? ctx_r5.contentTabIndex : null)("aria-labelledby", ctx_r5._getTabLabelId(\u0275$index_23_r11))("aria-hidden", ctx_r5.selectedIndex !== \u0275$index_23_r11);
  }
}
var _c10 = ["mat-tab-nav-bar", ""];
var _c11 = ["mat-tab-link", ""];
var MAT_TAB_CONTENT = new InjectionToken("MatTabContent");
var MatTabContent = class _MatTabContent {
  constructor(template) {
    this.template = template;
  }
  static {
    this.\u0275fac = function MatTabContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatTabContent)(\u0275\u0275directiveInject(TemplateRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatTabContent,
      selectors: [["", "matTabContent", ""]],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: MAT_TAB_CONTENT,
        useExisting: _MatTabContent
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabContent, [{
    type: Directive,
    args: [{
      selector: "[matTabContent]",
      providers: [{
        provide: MAT_TAB_CONTENT,
        useExisting: MatTabContent
      }],
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var MAT_TAB_LABEL = new InjectionToken("MatTabLabel");
var MAT_TAB = new InjectionToken("MAT_TAB");
var MatTabLabel = class _MatTabLabel extends CdkPortal {
  constructor(templateRef, viewContainerRef, _closestTab) {
    super(templateRef, viewContainerRef);
    this._closestTab = _closestTab;
  }
  static {
    this.\u0275fac = function MatTabLabel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatTabLabel)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(MAT_TAB, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatTabLabel,
      selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: MAT_TAB_LABEL,
        useExisting: _MatTabLabel
      }]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLabel, [{
    type: Directive,
    args: [{
      selector: "[mat-tab-label], [matTabLabel]",
      providers: [{
        provide: MAT_TAB_LABEL,
        useExisting: MatTabLabel
      }],
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_TAB]
    }, {
      type: Optional
    }]
  }], null);
})();
var MAT_TAB_GROUP = new InjectionToken("MAT_TAB_GROUP");
var MatTab = class _MatTab {
  /** Content for the tab label given by `<ng-template mat-tab-label>`. */
  get templateLabel() {
    return this._templateLabel;
  }
  set templateLabel(value) {
    this._setTemplateLabelInput(value);
  }
  /** @docs-private */
  get content() {
    return this._contentPortal;
  }
  constructor(_viewContainerRef, _closestTabGroup) {
    this._viewContainerRef = _viewContainerRef;
    this._closestTabGroup = _closestTabGroup;
    this.disabled = false;
    this._explicitContent = void 0;
    this.textLabel = "";
    this._contentPortal = null;
    this._stateChanges = new Subject();
    this.position = null;
    this.origin = null;
    this.isActive = false;
  }
  ngOnChanges(changes) {
    if (changes.hasOwnProperty("textLabel") || changes.hasOwnProperty("disabled")) {
      this._stateChanges.next();
    }
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
  ngOnInit() {
    this._contentPortal = new TemplatePortal(this._explicitContent || this._implicitContent, this._viewContainerRef);
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setTemplateLabelInput(value) {
    if (value && value._closestTab === this) {
      this._templateLabel = value;
    }
  }
  static {
    this.\u0275fac = function MatTab_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatTab)(\u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(MAT_TAB_GROUP, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatTab,
      selectors: [["mat-tab"]],
      contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, MatTabLabel, 5);
          \u0275\u0275contentQuery(dirIndex, MatTabContent, 7, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateLabel = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._explicitContent = _t.first);
        }
      },
      viewQuery: function MatTab_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(TemplateRef, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._implicitContent = _t.first);
        }
      },
      hostAttrs: ["hidden", ""],
      inputs: {
        disabled: [2, "disabled", "disabled", booleanAttribute],
        textLabel: [0, "label", "textLabel"],
        ariaLabel: [0, "aria-label", "ariaLabel"],
        ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
        labelClass: "labelClass",
        bodyClass: "bodyClass"
      },
      exportAs: ["matTab"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: MAT_TAB,
        useExisting: _MatTab
      }]), \u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c013,
      decls: 1,
      vars: 0,
      template: function MatTab_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275template(0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTab, [{
    type: Component,
    args: [{
      selector: "mat-tab",
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matTab",
      providers: [{
        provide: MAT_TAB,
        useExisting: MatTab
      }],
      standalone: true,
      host: {
        // This element will be rendered on the server in order to support hydration.
        // Hide it so it doesn't cause a layout shift when it's removed on the client.
        "hidden": ""
      },
      template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n"
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_TAB_GROUP]
    }, {
      type: Optional
    }]
  }], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    templateLabel: [{
      type: ContentChild,
      args: [MatTabLabel]
    }],
    _explicitContent: [{
      type: ContentChild,
      args: [MatTabContent, {
        read: TemplateRef,
        static: true
      }]
    }],
    _implicitContent: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    textLabel: [{
      type: Input,
      args: ["label"]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    labelClass: [{
      type: Input
    }],
    bodyClass: [{
      type: Input
    }]
  });
})();
var ACTIVE_CLASS = "mdc-tab-indicator--active";
var NO_TRANSITION_CLASS = "mdc-tab-indicator--no-transition";
var MatInkBar = class {
  constructor(_items) {
    this._items = _items;
  }
  /** Hides the ink bar. */
  hide() {
    this._items.forEach((item) => item.deactivateInkBar());
  }
  /** Aligns the ink bar to a DOM node. */
  alignToElement(element) {
    const correspondingItem = this._items.find((item) => item.elementRef.nativeElement === element);
    const currentItem = this._currentItem;
    if (correspondingItem === currentItem) {
      return;
    }
    currentItem?.deactivateInkBar();
    if (correspondingItem) {
      const domRect = currentItem?.elementRef.nativeElement.getBoundingClientRect?.();
      correspondingItem.activateInkBar(domRect);
      this._currentItem = correspondingItem;
    }
  }
};
var InkBarItem = class _InkBarItem {
  constructor() {
    this._elementRef = inject(ElementRef);
    this._fitToContent = false;
  }
  /** Whether the ink bar should fit to the entire tab or just its content. */
  get fitInkBarToContent() {
    return this._fitToContent;
  }
  set fitInkBarToContent(newValue) {
    if (this._fitToContent !== newValue) {
      this._fitToContent = newValue;
      if (this._inkBarElement) {
        this._appendInkBarElement();
      }
    }
  }
  /** Aligns the ink bar to the current item. */
  activateInkBar(previousIndicatorClientRect) {
    const element = this._elementRef.nativeElement;
    if (!previousIndicatorClientRect || !element.getBoundingClientRect || !this._inkBarContentElement) {
      element.classList.add(ACTIVE_CLASS);
      return;
    }
    const currentClientRect = element.getBoundingClientRect();
    const widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
    const xPosition = previousIndicatorClientRect.left - currentClientRect.left;
    element.classList.add(NO_TRANSITION_CLASS);
    this._inkBarContentElement.style.setProperty("transform", `translateX(${xPosition}px) scaleX(${widthDelta})`);
    element.getBoundingClientRect();
    element.classList.remove(NO_TRANSITION_CLASS);
    element.classList.add(ACTIVE_CLASS);
    this._inkBarContentElement.style.setProperty("transform", "");
  }
  /** Removes the ink bar from the current item. */
  deactivateInkBar() {
    this._elementRef.nativeElement.classList.remove(ACTIVE_CLASS);
  }
  /** Initializes the foundation. */
  ngOnInit() {
    this._createInkBarElement();
  }
  /** Destroys the foundation. */
  ngOnDestroy() {
    this._inkBarElement?.remove();
    this._inkBarElement = this._inkBarContentElement = null;
  }
  /** Creates and appends the ink bar element. */
  _createInkBarElement() {
    const documentNode = this._elementRef.nativeElement.ownerDocument || document;
    const inkBarElement = this._inkBarElement = documentNode.createElement("span");
    const inkBarContentElement = this._inkBarContentElement = documentNode.createElement("span");
    inkBarElement.className = "mdc-tab-indicator";
    inkBarContentElement.className = "mdc-tab-indicator__content mdc-tab-indicator__content--underline";
    inkBarElement.appendChild(this._inkBarContentElement);
    this._appendInkBarElement();
  }
  /**
   * Appends the ink bar to the tab host element or content, depending on whether
   * the ink bar should fit to content.
   */
  _appendInkBarElement() {
    if (!this._inkBarElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Ink bar element has not been created and cannot be appended");
    }
    const parentElement = this._fitToContent ? this._elementRef.nativeElement.querySelector(".mdc-tab__content") : this._elementRef.nativeElement;
    if (!parentElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Missing element to host the ink bar");
    }
    parentElement.appendChild(this._inkBarElement);
  }
  static {
    this.\u0275fac = function InkBarItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InkBarItem)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _InkBarItem,
      inputs: {
        fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", booleanAttribute]
      },
      features: [\u0275\u0275InputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InkBarItem, [{
    type: Directive
  }], null, {
    fitInkBarToContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
function _MAT_INK_BAR_POSITIONER_FACTORY() {
  const method = (element) => ({
    left: element ? (element.offsetLeft || 0) + "px" : "0",
    width: element ? (element.offsetWidth || 0) + "px" : "0"
  });
  return method;
}
var _MAT_INK_BAR_POSITIONER = new InjectionToken("MatInkBarPositioner", {
  providedIn: "root",
  factory: _MAT_INK_BAR_POSITIONER_FACTORY
});
var MatTabLabelWrapper = class _MatTabLabelWrapper extends InkBarItem {
  constructor(elementRef) {
    super();
    this.elementRef = elementRef;
    this.disabled = false;
  }
  /** Sets focus on the wrapper element */
  focus() {
    this.elementRef.nativeElement.focus();
  }
  getOffsetLeft() {
    return this.elementRef.nativeElement.offsetLeft;
  }
  getOffsetWidth() {
    return this.elementRef.nativeElement.offsetWidth;
  }
  static {
    this.\u0275fac = function MatTabLabelWrapper_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatTabLabelWrapper)(\u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatTabLabelWrapper,
      selectors: [["", "matTabLabelWrapper", ""]],
      hostVars: 3,
      hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("aria-disabled", !!ctx.disabled);
          \u0275\u0275classProp("mat-mdc-tab-disabled", ctx.disabled);
        }
      },
      inputs: {
        disabled: [2, "disabled", "disabled", booleanAttribute]
      },
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLabelWrapper, [{
    type: Directive,
    args: [{
      selector: "[matTabLabelWrapper]",
      host: {
        "[class.mat-mdc-tab-disabled]": "disabled",
        "[attr.aria-disabled]": "!!disabled"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var passiveEventListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var HEADER_SCROLL_DELAY = 650;
var HEADER_SCROLL_INTERVAL = 100;
var MatPaginatedTabHeader = class _MatPaginatedTabHeader {
  /** The index of the active tab. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(v) {
    const value = isNaN(v) ? 0 : v;
    if (this._selectedIndex != value) {
      this._selectedIndexChanged = true;
      this._selectedIndex = value;
      if (this._keyManager) {
        this._keyManager.updateActiveItem(value);
      }
    }
  }
  constructor(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, _platform, _animationMode) {
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._viewportRuler = _viewportRuler;
    this._dir = _dir;
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._animationMode = _animationMode;
    this._scrollDistance = 0;
    this._selectedIndexChanged = false;
    this._destroyed = new Subject();
    this._showPaginationControls = false;
    this._disableScrollAfter = true;
    this._disableScrollBefore = true;
    this._stopScrolling = new Subject();
    this.disablePagination = false;
    this._selectedIndex = 0;
    this.selectFocusedIndex = new EventEmitter();
    this.indexFocused = new EventEmitter();
    this._sharedResizeObserver = inject(SharedResizeObserver);
    this._injector = inject(Injector);
    _ngZone.runOutsideAngular(() => {
      fromEvent(_elementRef.nativeElement, "mouseleave").pipe(takeUntil(this._destroyed)).subscribe(() => {
        this._stopInterval();
      });
    });
  }
  ngAfterViewInit() {
    fromEvent(this._previousPaginator.nativeElement, "touchstart", passiveEventListenerOptions).pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._handlePaginatorPress("before");
    });
    fromEvent(this._nextPaginator.nativeElement, "touchstart", passiveEventListenerOptions).pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._handlePaginatorPress("after");
    });
  }
  ngAfterContentInit() {
    const dirChange = this._dir ? this._dir.change : of("ltr");
    const resize = this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(debounceTime(32), takeUntil(this._destroyed));
    const viewportResize = this._viewportRuler.change(150).pipe(takeUntil(this._destroyed));
    const realign = () => {
      this.updatePagination();
      this._alignInkBarToSelectedTab();
    };
    this._keyManager = new FocusKeyManager(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(() => false);
    this._keyManager.updateActiveItem(this._selectedIndex);
    afterNextRender(realign, {
      injector: this._injector
    });
    merge(dirChange, viewportResize, resize, this._items.changes, this._itemsResized()).pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._ngZone.run(() => {
        Promise.resolve().then(() => {
          this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), this._scrollDistance));
          realign();
        });
      });
      this._keyManager.withHorizontalOrientation(this._getLayoutDirection());
    });
    this._keyManager.change.subscribe((newFocusIndex) => {
      this.indexFocused.emit(newFocusIndex);
      this._setTabFocus(newFocusIndex);
    });
  }
  /** Sends any changes that could affect the layout of the items. */
  _itemsResized() {
    if (typeof ResizeObserver !== "function") {
      return EMPTY;
    }
    return this._items.changes.pipe(
      startWith(this._items),
      switchMap((tabItems) => new Observable((observer) => this._ngZone.runOutsideAngular(() => {
        const resizeObserver = new ResizeObserver((entries) => observer.next(entries));
        tabItems.forEach((item) => resizeObserver.observe(item.elementRef.nativeElement));
        return () => {
          resizeObserver.disconnect();
        };
      }))),
      // Skip the first emit since the resize observer emits when an item
      // is observed for new items when the tab is already inserted
      skip(1),
      // Skip emissions where all the elements are invisible since we don't want
      // the header to try and re-render with invalid measurements. See #25574.
      filter((entries) => entries.some((e) => e.contentRect.width > 0 && e.contentRect.height > 0))
    );
  }
  ngAfterContentChecked() {
    if (this._tabLabelCount != this._items.length) {
      this.updatePagination();
      this._tabLabelCount = this._items.length;
      this._changeDetectorRef.markForCheck();
    }
    if (this._selectedIndexChanged) {
      this._scrollToLabel(this._selectedIndex);
      this._checkScrollingControls();
      this._alignInkBarToSelectedTab();
      this._selectedIndexChanged = false;
      this._changeDetectorRef.markForCheck();
    }
    if (this._scrollDistanceChanged) {
      this._updateTabScrollPosition();
      this._scrollDistanceChanged = false;
      this._changeDetectorRef.markForCheck();
    }
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this._stopScrolling.complete();
  }
  /** Handles keyboard events on the header. */
  _handleKeydown(event) {
    if (hasModifierKey(event)) {
      return;
    }
    switch (event.keyCode) {
      case ENTER:
      case SPACE:
        if (this.focusIndex !== this.selectedIndex) {
          const item = this._items.get(this.focusIndex);
          if (item && !item.disabled) {
            this.selectFocusedIndex.emit(this.focusIndex);
            this._itemSelected(event);
          }
        }
        break;
      default:
        this._keyManager.onKeydown(event);
    }
  }
  /**
   * Callback for when the MutationObserver detects that the content has changed.
   */
  _onContentChanges() {
    const textContent = this._elementRef.nativeElement.textContent;
    if (textContent !== this._currentTextContent) {
      this._currentTextContent = textContent || "";
      this._ngZone.run(() => {
        this.updatePagination();
        this._alignInkBarToSelectedTab();
        this._changeDetectorRef.markForCheck();
      });
    }
  }
  /**
   * Updates the view whether pagination should be enabled or not.
   *
   * WARNING: Calling this method can be very costly in terms of performance. It should be called
   * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
   * page.
   */
  updatePagination() {
    this._checkPaginationEnabled();
    this._checkScrollingControls();
    this._updateTabScrollPosition();
  }
  /** Tracks which element has focus; used for keyboard navigation */
  get focusIndex() {
    return this._keyManager ? this._keyManager.activeItemIndex : 0;
  }
  /** When the focus index is set, we must manually send focus to the correct label */
  set focusIndex(value) {
    if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
      return;
    }
    this._keyManager.setActiveItem(value);
  }
  /**
   * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
   * providing a valid index and return true.
   */
  _isValidIndex(index) {
    return this._items ? !!this._items.toArray()[index] : true;
  }
  /**
   * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
   * scrolling is enabled.
   */
  _setTabFocus(tabIndex) {
    if (this._showPaginationControls) {
      this._scrollToLabel(tabIndex);
    }
    if (this._items && this._items.length) {
      this._items.toArray()[tabIndex].focus();
      const containerEl = this._tabListContainer.nativeElement;
      const dir = this._getLayoutDirection();
      if (dir == "ltr") {
        containerEl.scrollLeft = 0;
      } else {
        containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
      }
    }
  }
  /** The layout direction of the containing app. */
  _getLayoutDirection() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Performs the CSS transformation on the tab list that will cause the list to scroll. */
  _updateTabScrollPosition() {
    if (this.disablePagination) {
      return;
    }
    const scrollDistance = this.scrollDistance;
    const translateX = this._getLayoutDirection() === "ltr" ? -scrollDistance : scrollDistance;
    this._tabList.nativeElement.style.transform = `translateX(${Math.round(translateX)}px)`;
    if (this._platform.TRIDENT || this._platform.EDGE) {
      this._tabListContainer.nativeElement.scrollLeft = 0;
    }
  }
  /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
  get scrollDistance() {
    return this._scrollDistance;
  }
  set scrollDistance(value) {
    this._scrollTo(value);
  }
  /**
   * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
   * the end of the list, respectively). The distance to scroll is computed to be a third of the
   * length of the tab list view window.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _scrollHeader(direction) {
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    const scrollAmount = (direction == "before" ? -1 : 1) * viewLength / 3;
    return this._scrollTo(this._scrollDistance + scrollAmount);
  }
  /** Handles click events on the pagination arrows. */
  _handlePaginatorClick(direction) {
    this._stopInterval();
    this._scrollHeader(direction);
  }
  /**
   * Moves the tab list such that the desired tab label (marked by index) is moved into view.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _scrollToLabel(labelIndex) {
    if (this.disablePagination) {
      return;
    }
    const selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;
    if (!selectedLabel) {
      return;
    }
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    const {
      offsetLeft,
      offsetWidth
    } = selectedLabel.elementRef.nativeElement;
    let labelBeforePos, labelAfterPos;
    if (this._getLayoutDirection() == "ltr") {
      labelBeforePos = offsetLeft;
      labelAfterPos = labelBeforePos + offsetWidth;
    } else {
      labelAfterPos = this._tabListInner.nativeElement.offsetWidth - offsetLeft;
      labelBeforePos = labelAfterPos - offsetWidth;
    }
    const beforeVisiblePos = this.scrollDistance;
    const afterVisiblePos = this.scrollDistance + viewLength;
    if (labelBeforePos < beforeVisiblePos) {
      this.scrollDistance -= beforeVisiblePos - labelBeforePos;
    } else if (labelAfterPos > afterVisiblePos) {
      this.scrollDistance += Math.min(labelAfterPos - afterVisiblePos, labelBeforePos - beforeVisiblePos);
    }
  }
  /**
   * Evaluate whether the pagination controls should be displayed. If the scroll width of the
   * tab list is wider than the size of the header container, then the pagination controls should
   * be shown.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _checkPaginationEnabled() {
    if (this.disablePagination) {
      this._showPaginationControls = false;
    } else {
      const scrollWidth = this._tabListInner.nativeElement.scrollWidth;
      const containerWidth = this._elementRef.nativeElement.offsetWidth;
      const isEnabled = scrollWidth - containerWidth >= 5;
      if (!isEnabled) {
        this.scrollDistance = 0;
      }
      if (isEnabled !== this._showPaginationControls) {
        this._showPaginationControls = isEnabled;
        this._changeDetectorRef.markForCheck();
      }
    }
  }
  /**
   * Evaluate whether the before and after controls should be enabled or disabled.
   * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
   * before button. If the header is at the end of the list (scroll distance is equal to the
   * maximum distance we can scroll), then disable the after button.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _checkScrollingControls() {
    if (this.disablePagination) {
      this._disableScrollAfter = this._disableScrollBefore = true;
    } else {
      this._disableScrollBefore = this.scrollDistance == 0;
      this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Determines what is the maximum length in pixels that can be set for the scroll distance. This
   * is equal to the difference in width between the tab list container and tab header container.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _getMaxScrollDistance() {
    const lengthOfTabList = this._tabListInner.nativeElement.scrollWidth;
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    return lengthOfTabList - viewLength || 0;
  }
  /** Tells the ink-bar to align itself to the current label wrapper */
  _alignInkBarToSelectedTab() {
    const selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
    const selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;
    if (selectedLabelWrapper) {
      this._inkBar.alignToElement(selectedLabelWrapper);
    } else {
      this._inkBar.hide();
    }
  }
  /** Stops the currently-running paginator interval.  */
  _stopInterval() {
    this._stopScrolling.next();
  }
  /**
   * Handles the user pressing down on one of the paginators.
   * Starts scrolling the header after a certain amount of time.
   * @param direction In which direction the paginator should be scrolled.
   */
  _handlePaginatorPress(direction, mouseEvent) {
    if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
      return;
    }
    this._stopInterval();
    timer(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL).pipe(takeUntil(merge(this._stopScrolling, this._destroyed))).subscribe(() => {
      const {
        maxScrollDistance,
        distance
      } = this._scrollHeader(direction);
      if (distance === 0 || distance >= maxScrollDistance) {
        this._stopInterval();
      }
    });
  }
  /**
   * Scrolls the header to a given position.
   * @param position Position to which to scroll.
   * @returns Information on the current scroll distance and the maximum.
   */
  _scrollTo(position) {
    if (this.disablePagination) {
      return {
        maxScrollDistance: 0,
        distance: 0
      };
    }
    const maxScrollDistance = this._getMaxScrollDistance();
    this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position));
    this._scrollDistanceChanged = true;
    this._checkScrollingControls();
    return {
      maxScrollDistance,
      distance: this._scrollDistance
    };
  }
  static {
    this.\u0275fac = function MatPaginatedTabHeader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatPaginatedTabHeader)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ViewportRuler), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatPaginatedTabHeader,
      inputs: {
        disablePagination: [2, "disablePagination", "disablePagination", booleanAttribute],
        selectedIndex: [2, "selectedIndex", "selectedIndex", numberAttribute]
      },
      outputs: {
        selectFocusedIndex: "selectFocusedIndex",
        indexFocused: "indexFocused"
      },
      features: [\u0275\u0275InputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatedTabHeader, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: ViewportRuler
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    disablePagination: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    selectFocusedIndex: [{
      type: Output
    }],
    indexFocused: [{
      type: Output
    }]
  });
})();
var MatTabHeader = class _MatTabHeader extends MatPaginatedTabHeader {
  constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
    super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    this.disableRipple = false;
  }
  ngAfterContentInit() {
    this._inkBar = new MatInkBar(this._items);
    super.ngAfterContentInit();
  }
  _itemSelected(event) {
    event.preventDefault();
  }
  static {
    this.\u0275fac = function MatTabHeader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatTabHeader)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ViewportRuler), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatTabHeader,
      selectors: [["mat-tab-header"]],
      contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, MatTabLabelWrapper, 4);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._items = _t);
        }
      },
      viewQuery: function MatTabHeader_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c18, 7);
          \u0275\u0275viewQuery(_c27, 7);
          \u0275\u0275viewQuery(_c36, 7);
          \u0275\u0275viewQuery(_c4, 5);
          \u0275\u0275viewQuery(_c5, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListContainer = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabList = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListInner = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._nextPaginator = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._previousPaginator = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-tab-header"],
      hostVars: 4,
      hostBindings: function MatTabHeader_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
        }
      },
      inputs: {
        ariaLabel: [0, "aria-label", "ariaLabel"],
        ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
        disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute]
      },
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c013,
      decls: 13,
      vars: 10,
      consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-label-container", 3, "keydown"], ["role", "tablist", 1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-labels"], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled"]],
      template: function MatTabHeader_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div", 5, 0);
          \u0275\u0275listener("click", function MatTabHeader_Template_div_click_0_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._handlePaginatorClick("before"));
          })("mousedown", function MatTabHeader_Template_div_mousedown_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._handlePaginatorPress("before", $event));
          })("touchend", function MatTabHeader_Template_div_touchend_0_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._stopInterval());
          });
          \u0275\u0275element(2, "div", 6);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(3, "div", 7, 1);
          \u0275\u0275listener("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._handleKeydown($event));
          });
          \u0275\u0275elementStart(5, "div", 8, 2);
          \u0275\u0275listener("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onContentChanges());
          });
          \u0275\u0275elementStart(7, "div", 9, 3);
          \u0275\u0275projection(9);
          \u0275\u0275elementEnd()()();
          \u0275\u0275elementStart(10, "div", 10, 4);
          \u0275\u0275listener("mousedown", function MatTabHeader_Template_div_mousedown_10_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._handlePaginatorPress("after", $event));
          })("click", function MatTabHeader_Template_div_click_10_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._handlePaginatorClick("after"));
          })("touchend", function MatTabHeader_Template_div_touchend_10_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._stopInterval());
          });
          \u0275\u0275element(12, "div", 6);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
          \u0275\u0275property("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
          \u0275\u0275advance(3);
          \u0275\u0275classProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          \u0275\u0275advance(2);
          \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby || null);
          \u0275\u0275advance(5);
          \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
          \u0275\u0275property("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
        }
      },
      dependencies: [MatRipple, CdkObserveContent],
      styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-header-divider-height);border-top-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab::before{margin:5px}.cdk-high-contrast-active .mat-mdc-tab[aria-disabled=true]{color:GrayText}"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabHeader, [{
    type: Component,
    args: [{
      selector: "mat-tab-header",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      host: {
        "class": "mat-mdc-tab-header",
        "[class.mat-mdc-tab-header-pagination-controls-enabled]": "_showPaginationControls",
        "[class.mat-mdc-tab-header-rtl]": "_getLayoutDirection() == 'rtl'"
      },
      standalone: true,
      imports: [MatRipple, CdkObserveContent],
      template: `<!--
 Note that this intentionally uses a \`div\` instead of a \`button\`, because it's not part of
 the regular tabs flow and is only here to support mouse users. It should also not be focusable.
-->
<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before"
     #previousPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollBefore || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollBefore"
     (click)="_handlePaginatorClick('before')"
     (mousedown)="_handlePaginatorPress('before', $event)"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>

<div
  class="mat-mdc-tab-label-container"
  #tabListContainer
  (keydown)="_handleKeydown($event)"
  [class._mat-animation-noopable]="_animationMode === 'NoopAnimations'">
  <div
    #tabList
    class="mat-mdc-tab-list"
    role="tablist"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    (cdkObserveContent)="_onContentChanges()">
    <div class="mat-mdc-tab-labels" #tabListInner>
      <ng-content></ng-content>
    </div>
  </div>
</div>

<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after"
     #nextPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollAfter || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollAfter"
     (mousedown)="_handlePaginatorPress('after', $event)"
     (click)="_handlePaginatorClick('after')"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>
`,
      styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-header-divider-height);border-top-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab::before{margin:5px}.cdk-high-contrast-active .mat-mdc-tab[aria-disabled=true]{color:GrayText}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: ViewportRuler
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    _items: [{
      type: ContentChildren,
      args: [MatTabLabelWrapper, {
        descendants: false
      }]
    }],
    _tabListContainer: [{
      type: ViewChild,
      args: ["tabListContainer", {
        static: true
      }]
    }],
    _tabList: [{
      type: ViewChild,
      args: ["tabList", {
        static: true
      }]
    }],
    _tabListInner: [{
      type: ViewChild,
      args: ["tabListInner", {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: ViewChild,
      args: ["nextPaginator"]
    }],
    _previousPaginator: [{
      type: ViewChild,
      args: ["previousPaginator"]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MAT_TABS_CONFIG = new InjectionToken("MAT_TABS_CONFIG");
var matTabsAnimations = {
  /** Animation translates a tab along the X axis. */
  translateTab: trigger("translateTab", [
    // Transitions to `none` instead of 0, because some browsers might blur the content.
    state("center, void, left-origin-center, right-origin-center", style({
      transform: "none",
      visibility: "visible"
    })),
    // If the tab is either on the left or right, we additionally add a `min-height` of 1px
    // in order to ensure that the element has a height before its state changes. This is
    // necessary because Chrome does seem to skip the transition in RTL mode if the element does
    // not have a static height and is not rendered. See related issue: #9465
    state("left", style({
      transform: "translate3d(-100%, 0, 0)",
      minHeight: "1px",
      // Normally this is redundant since we detach the content from the DOM, but if the user
      // opted into keeping the content in the DOM, we have to hide it so it isn't focusable.
      visibility: "hidden"
    })),
    state("right", style({
      transform: "translate3d(100%, 0, 0)",
      minHeight: "1px",
      visibility: "hidden"
    })),
    transition("* => left, * => right, left => center, right => center", animate("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")),
    transition("void => left-origin-center", [style({
      transform: "translate3d(-100%, 0, 0)",
      visibility: "hidden"
    }), animate("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")]),
    transition("void => right-origin-center", [style({
      transform: "translate3d(100%, 0, 0)",
      visibility: "hidden"
    }), animate("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")])
  ])
};
var MatTabBodyPortal = class _MatTabBodyPortal extends CdkPortalOutlet {
  constructor(componentFactoryResolver, viewContainerRef, _host, _document) {
    super(componentFactoryResolver, viewContainerRef, _document);
    this._host = _host;
    this._centeringSub = Subscription.EMPTY;
    this._leavingSub = Subscription.EMPTY;
  }
  /** Set initial visibility or set up subscription for changing visibility. */
  ngOnInit() {
    super.ngOnInit();
    this._centeringSub = this._host._beforeCentering.pipe(startWith(this._host._isCenterPosition(this._host._position))).subscribe((isCentering) => {
      if (this._host._content && isCentering && !this.hasAttached()) {
        this.attach(this._host._content);
      }
    });
    this._leavingSub = this._host._afterLeavingCenter.subscribe(() => {
      if (!this._host.preserveContent) {
        this.detach();
      }
    });
  }
  /** Clean up centering subscription. */
  ngOnDestroy() {
    super.ngOnDestroy();
    this._centeringSub.unsubscribe();
    this._leavingSub.unsubscribe();
  }
  static {
    this.\u0275fac = function MatTabBodyPortal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatTabBodyPortal)(\u0275\u0275directiveInject(ComponentFactoryResolver$1), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(forwardRef(() => MatTabBody)), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatTabBodyPortal,
      selectors: [["", "matTabBodyHost", ""]],
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabBodyPortal, [{
    type: Directive,
    args: [{
      selector: "[matTabBodyHost]",
      standalone: true
    }]
  }], () => [{
    type: ComponentFactoryResolver$1
  }, {
    type: ViewContainerRef
  }, {
    type: MatTabBody,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => MatTabBody)]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var MatTabBody = class _MatTabBody {
  /** The shifted index position of the tab body, where zero represents the active center tab. */
  set position(position) {
    this._positionIndex = position;
    this._computePositionAnimationState();
  }
  constructor(_elementRef, _dir, changeDetectorRef) {
    this._elementRef = _elementRef;
    this._dir = _dir;
    this._dirChangeSubscription = Subscription.EMPTY;
    this._translateTabComplete = new Subject();
    this._onCentering = new EventEmitter();
    this._beforeCentering = new EventEmitter();
    this._afterLeavingCenter = new EventEmitter();
    this._onCentered = new EventEmitter(true);
    this.animationDuration = "500ms";
    this.preserveContent = false;
    if (_dir) {
      this._dirChangeSubscription = _dir.change.subscribe((dir) => {
        this._computePositionAnimationState(dir);
        changeDetectorRef.markForCheck();
      });
    }
    this._translateTabComplete.pipe(distinctUntilChanged((x, y) => {
      return x.fromState === y.fromState && x.toState === y.toState;
    })).subscribe((event) => {
      if (this._isCenterPosition(event.toState) && this._isCenterPosition(this._position)) {
        this._onCentered.emit();
      }
      if (this._isCenterPosition(event.fromState) && !this._isCenterPosition(this._position)) {
        this._afterLeavingCenter.emit();
      }
    });
  }
  /**
   * After initialized, check if the content is centered and has an origin. If so, set the
   * special position states that transition the tab from the left or right before centering.
   */
  ngOnInit() {
    if (this._position == "center" && this.origin != null) {
      this._position = this._computePositionFromOrigin(this.origin);
    }
  }
  ngOnDestroy() {
    this._dirChangeSubscription.unsubscribe();
    this._translateTabComplete.complete();
  }
  _onTranslateTabStarted(event) {
    const isCentering = this._isCenterPosition(event.toState);
    this._beforeCentering.emit(isCentering);
    if (isCentering) {
      this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
    }
  }
  /** The text direction of the containing app. */
  _getLayoutDirection() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Whether the provided position state is considered center, regardless of origin. */
  _isCenterPosition(position) {
    return position == "center" || position == "left-origin-center" || position == "right-origin-center";
  }
  /** Computes the position state that will be used for the tab-body animation trigger. */
  _computePositionAnimationState(dir = this._getLayoutDirection()) {
    if (this._positionIndex < 0) {
      this._position = dir == "ltr" ? "left" : "right";
    } else if (this._positionIndex > 0) {
      this._position = dir == "ltr" ? "right" : "left";
    } else {
      this._position = "center";
    }
  }
  /**
   * Computes the position state based on the specified origin position. This is used if the
   * tab is becoming visible immediately after creation.
   */
  _computePositionFromOrigin(origin) {
    const dir = this._getLayoutDirection();
    if (dir == "ltr" && origin <= 0 || dir == "rtl" && origin > 0) {
      return "left-origin-center";
    }
    return "right-origin-center";
  }
  static {
    this.\u0275fac = function MatTabBody_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatTabBody)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatTabBody,
      selectors: [["mat-tab-body"]],
      viewQuery: function MatTabBody_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(CdkPortalOutlet, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._portalHost = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-tab-body"],
      inputs: {
        _content: [0, "content", "_content"],
        origin: "origin",
        animationDuration: "animationDuration",
        preserveContent: "preserveContent",
        position: "position"
      },
      outputs: {
        _onCentering: "_onCentering",
        _beforeCentering: "_beforeCentering",
        _afterLeavingCenter: "_afterLeavingCenter",
        _onCentered: "_onCentered"
      },
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 3,
      vars: 6,
      consts: [["content", ""], ["cdkScrollable", "", 1, "mat-mdc-tab-body-content"], ["matTabBodyHost", ""]],
      template: function MatTabBody_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275elementStart(0, "div", 1, 0);
          \u0275\u0275listener("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onTranslateTabStarted($event));
          })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._translateTabComplete.next($event));
          });
          \u0275\u0275template(2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275property("@translateTab", \u0275\u0275pureFunction2(3, _c7, ctx._position, \u0275\u0275pureFunction1(1, _c6, ctx.animationDuration)));
        }
      },
      dependencies: [MatTabBodyPortal, CdkScrollable],
      styles: ['.mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-mdc-tab-body-content[style*="visibility: hidden"]{display:none}'],
      encapsulation: 2,
      data: {
        animation: [matTabsAnimations.translateTab]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabBody, [{
    type: Component,
    args: [{
      selector: "mat-tab-body",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      animations: [matTabsAnimations.translateTab],
      host: {
        "class": "mat-mdc-tab-body"
      },
      standalone: true,
      imports: [MatTabBodyPortal, CdkScrollable],
      template: '<div class="mat-mdc-tab-body-content" #content\n     [@translateTab]="{\n        value: _position,\n        params: {animationDuration: animationDuration}\n     }"\n     (@translateTab.start)="_onTranslateTabStarted($event)"\n     (@translateTab.done)="_translateTabComplete.next($event)"\n     cdkScrollable>\n  <ng-template matTabBodyHost></ng-template>\n</div>\n',
      styles: ['.mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-mdc-tab-body-content[style*="visibility: hidden"]{display:none}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ChangeDetectorRef
  }], {
    _onCentering: [{
      type: Output
    }],
    _beforeCentering: [{
      type: Output
    }],
    _afterLeavingCenter: [{
      type: Output
    }],
    _onCentered: [{
      type: Output
    }],
    _portalHost: [{
      type: ViewChild,
      args: [CdkPortalOutlet]
    }],
    _content: [{
      type: Input,
      args: ["content"]
    }],
    origin: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    preserveContent: [{
      type: Input
    }],
    position: [{
      type: Input
    }]
  });
})();
var nextId = 0;
var ENABLE_BACKGROUND_INPUT = true;
var MatTabGroup = class _MatTabGroup {
  /** Whether the ink bar should fit its width to the size of the tab label content. */
  get fitInkBarToContent() {
    return this._fitInkBarToContent;
  }
  set fitInkBarToContent(value) {
    this._fitInkBarToContent = value;
    this._changeDetectorRef.markForCheck();
  }
  /** The index of the active tab. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(value) {
    this._indexToSelect = isNaN(value) ? null : value;
  }
  /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    const stringValue = value + "";
    this._animationDuration = /^\d+$/.test(stringValue) ? value + "ms" : stringValue;
  }
  /**
   * `tabindex` to be set on the inner element that wraps the tab content. Can be used for improved
   * accessibility when the tab does not have focusable elements or if it has scrollable content.
   * The `tabindex` will be removed automatically for inactive tabs.
   * Read more at https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html
   */
  get contentTabIndex() {
    return this._contentTabIndex;
  }
  set contentTabIndex(value) {
    this._contentTabIndex = isNaN(value) ? null : value;
  }
  /**
   * Theme color of the background of the tab group. This API is supported in M2 themes only, it
   * has no effect in M3 themes.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/theming#using-component-color-variants.
   *
   * @deprecated The background color should be customized through Sass theming APIs.
   * @breaking-change 20.0.0 Remove this input
   */
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    if (!ENABLE_BACKGROUND_INPUT) {
      throw new Error(`mat-tab-group background color must be set through the Sass theming API`);
    }
    const classList = this._elementRef.nativeElement.classList;
    classList.remove("mat-tabs-with-background", `mat-background-${this.backgroundColor}`);
    if (value) {
      classList.add("mat-tabs-with-background", `mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  constructor(_elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    this._tabs = new QueryList();
    this._indexToSelect = 0;
    this._lastFocusedTabIndex = null;
    this._tabBodyWrapperHeight = 0;
    this._tabsSubscription = Subscription.EMPTY;
    this._tabLabelSubscription = Subscription.EMPTY;
    this._fitInkBarToContent = false;
    this.stretchTabs = true;
    this.dynamicHeight = false;
    this._selectedIndex = null;
    this.headerPosition = "above";
    this.disablePagination = false;
    this.disableRipple = false;
    this.preserveContent = false;
    this.selectedIndexChange = new EventEmitter();
    this.focusChange = new EventEmitter();
    this.animationDone = new EventEmitter();
    this.selectedTabChange = new EventEmitter(true);
    this._isServer = !inject(Platform).isBrowser;
    this._groupId = nextId++;
    this.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : "500ms";
    this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    this.dynamicHeight = defaultConfig && defaultConfig.dynamicHeight != null ? defaultConfig.dynamicHeight : false;
    if (defaultConfig?.contentTabIndex != null) {
      this.contentTabIndex = defaultConfig.contentTabIndex;
    }
    this.preserveContent = !!defaultConfig?.preserveContent;
    this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
    this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
  }
  /**
   * After the content is checked, this component knows what tabs have been defined
   * and what the selected index should be. This is where we can know exactly what position
   * each tab should be in according to the new selected index, and additionally we know how
   * a new selected tab should transition in (from the left or right).
   */
  ngAfterContentChecked() {
    const indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect);
    if (this._selectedIndex != indexToSelect) {
      const isFirstRun = this._selectedIndex == null;
      if (!isFirstRun) {
        this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
        const wrapper = this._tabBodyWrapper.nativeElement;
        wrapper.style.minHeight = wrapper.clientHeight + "px";
      }
      Promise.resolve().then(() => {
        this._tabs.forEach((tab, index) => tab.isActive = index === indexToSelect);
        if (!isFirstRun) {
          this.selectedIndexChange.emit(indexToSelect);
          this._tabBodyWrapper.nativeElement.style.minHeight = "";
        }
      });
    }
    this._tabs.forEach((tab, index) => {
      tab.position = index - indexToSelect;
      if (this._selectedIndex != null && tab.position == 0 && !tab.origin) {
        tab.origin = indexToSelect - this._selectedIndex;
      }
    });
    if (this._selectedIndex !== indexToSelect) {
      this._selectedIndex = indexToSelect;
      this._lastFocusedTabIndex = null;
      this._changeDetectorRef.markForCheck();
    }
  }
  ngAfterContentInit() {
    this._subscribeToAllTabChanges();
    this._subscribeToTabLabels();
    this._tabsSubscription = this._tabs.changes.subscribe(() => {
      const indexToSelect = this._clampTabIndex(this._indexToSelect);
      if (indexToSelect === this._selectedIndex) {
        const tabs = this._tabs.toArray();
        let selectedTab;
        for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].isActive) {
            this._indexToSelect = this._selectedIndex = i;
            this._lastFocusedTabIndex = null;
            selectedTab = tabs[i];
            break;
          }
        }
        if (!selectedTab && tabs[indexToSelect]) {
          Promise.resolve().then(() => {
            tabs[indexToSelect].isActive = true;
            this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
          });
        }
      }
      this._changeDetectorRef.markForCheck();
    });
  }
  /** Listens to changes in all of the tabs. */
  _subscribeToAllTabChanges() {
    this._allTabs.changes.pipe(startWith(this._allTabs)).subscribe((tabs) => {
      this._tabs.reset(tabs.filter((tab) => {
        return tab._closestTabGroup === this || !tab._closestTabGroup;
      }));
      this._tabs.notifyOnChanges();
    });
  }
  ngOnDestroy() {
    this._tabs.destroy();
    this._tabsSubscription.unsubscribe();
    this._tabLabelSubscription.unsubscribe();
  }
  /** Re-aligns the ink bar to the selected tab element. */
  realignInkBar() {
    if (this._tabHeader) {
      this._tabHeader._alignInkBarToSelectedTab();
    }
  }
  /**
   * Recalculates the tab group's pagination dimensions.
   *
   * WARNING: Calling this method can be very costly in terms of performance. It should be called
   * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
   * page.
   */
  updatePagination() {
    if (this._tabHeader) {
      this._tabHeader.updatePagination();
    }
  }
  /**
   * Sets focus to a particular tab.
   * @param index Index of the tab to be focused.
   */
  focusTab(index) {
    const header = this._tabHeader;
    if (header) {
      header.focusIndex = index;
    }
  }
  _focusChanged(index) {
    this._lastFocusedTabIndex = index;
    this.focusChange.emit(this._createChangeEvent(index));
  }
  _createChangeEvent(index) {
    const event = new MatTabChangeEvent();
    event.index = index;
    if (this._tabs && this._tabs.length) {
      event.tab = this._tabs.toArray()[index];
    }
    return event;
  }
  /**
   * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
   * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
   * binding to be updated, we need to subscribe to changes in it and trigger change detection
   * manually.
   */
  _subscribeToTabLabels() {
    if (this._tabLabelSubscription) {
      this._tabLabelSubscription.unsubscribe();
    }
    this._tabLabelSubscription = merge(...this._tabs.map((tab) => tab._stateChanges)).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  /** Clamps the given index to the bounds of 0 and the tabs length. */
  _clampTabIndex(index) {
    return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
  }
  /** Returns a unique id for each tab label element */
  _getTabLabelId(i) {
    return `mat-tab-label-${this._groupId}-${i}`;
  }
  /** Returns a unique id for each tab content element */
  _getTabContentId(i) {
    return `mat-tab-content-${this._groupId}-${i}`;
  }
  /**
   * Sets the height of the body wrapper to the height of the activating tab if dynamic
   * height property is true.
   */
  _setTabBodyWrapperHeight(tabHeight) {
    if (!this.dynamicHeight || !this._tabBodyWrapperHeight) {
      return;
    }
    const wrapper = this._tabBodyWrapper.nativeElement;
    wrapper.style.height = this._tabBodyWrapperHeight + "px";
    if (this._tabBodyWrapper.nativeElement.offsetHeight) {
      wrapper.style.height = tabHeight + "px";
    }
  }
  /** Removes the height of the tab body wrapper. */
  _removeTabBodyWrapperHeight() {
    const wrapper = this._tabBodyWrapper.nativeElement;
    this._tabBodyWrapperHeight = wrapper.clientHeight;
    wrapper.style.height = "";
    this.animationDone.emit();
  }
  /** Handle click events, setting new selected index if appropriate. */
  _handleClick(tab, tabHeader, index) {
    tabHeader.focusIndex = index;
    if (!tab.disabled) {
      this.selectedIndex = index;
    }
  }
  /** Retrieves the tabindex for the tab. */
  _getTabIndex(index) {
    const targetIndex = this._lastFocusedTabIndex ?? this.selectedIndex;
    return index === targetIndex ? 0 : -1;
  }
  /** Callback for when the focused state of a tab has changed. */
  _tabFocusChanged(focusOrigin, index) {
    if (focusOrigin && focusOrigin !== "mouse" && focusOrigin !== "touch") {
      this._tabHeader.focusIndex = index;
    }
  }
  static {
    this.\u0275fac = function MatTabGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatTabGroup)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MAT_TABS_CONFIG, 8), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatTabGroup,
      selectors: [["mat-tab-group"]],
      contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, MatTab, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allTabs = _t);
        }
      },
      viewQuery: function MatTabGroup_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c8, 5);
          \u0275\u0275viewQuery(_c9, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabBodyWrapper = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabHeader = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-tab-group"],
      hostVars: 10,
      hostBindings: function MatTabGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
          \u0275\u0275styleProp("--mat-tab-animation-duration", ctx.animationDuration);
          \u0275\u0275classProp("mat-mdc-tab-group-dynamic-height", ctx.dynamicHeight)("mat-mdc-tab-group-inverted-header", ctx.headerPosition === "below")("mat-mdc-tab-group-stretch-tabs", ctx.stretchTabs);
        }
      },
      inputs: {
        color: "color",
        fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", booleanAttribute],
        stretchTabs: [2, "mat-stretch-tabs", "stretchTabs", booleanAttribute],
        dynamicHeight: [2, "dynamicHeight", "dynamicHeight", booleanAttribute],
        selectedIndex: [2, "selectedIndex", "selectedIndex", numberAttribute],
        headerPosition: "headerPosition",
        animationDuration: "animationDuration",
        contentTabIndex: [2, "contentTabIndex", "contentTabIndex", numberAttribute],
        disablePagination: [2, "disablePagination", "disablePagination", booleanAttribute],
        disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
        preserveContent: [2, "preserveContent", "preserveContent", booleanAttribute],
        backgroundColor: "backgroundColor",
        ariaLabel: [0, "aria-label", "ariaLabel"],
        ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"]
      },
      outputs: {
        selectedIndexChange: "selectedIndexChange",
        focusChange: "focusChange",
        animationDone: "animationDone",
        selectedTabChange: "selectedTabChange"
      },
      exportAs: ["matTabGroup"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: MAT_TAB_GROUP,
        useExisting: _MatTabGroup
      }]), \u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c013,
      decls: 9,
      vars: 8,
      consts: [["tabHeader", ""], ["tabBodyWrapper", ""], ["tabNode", ""], [3, "indexFocused", "selectFocusedIndex", "selectedIndex", "disableRipple", "disablePagination", "aria-label", "aria-labelledby"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-mdc-focus-indicator", 3, "id", "mdc-tab--active", "class", "disabled", "fitInkBarToContent"], [1, "mat-mdc-tab-body-wrapper"], ["role", "tabpanel", 3, "id", "mat-mdc-tab-body-active", "class", "content", "position", "origin", "animationDuration", "preserveContent"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-mdc-focus-indicator", 3, "click", "cdkFocusChange", "id", "disabled", "fitInkBarToContent"], [1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "_onCentered", "_onCentering", "id", "content", "position", "origin", "animationDuration", "preserveContent"]],
      template: function MatTabGroup_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "mat-tab-header", 3, 0);
          \u0275\u0275listener("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._focusChanged($event));
          })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.selectedIndex = $event);
          });
          \u0275\u0275repeaterCreate(2, MatTabGroup_For_3_Template, 8, 17, "div", 4, \u0275\u0275repeaterTrackByIdentity);
          \u0275\u0275elementEnd();
          \u0275\u0275template(4, MatTabGroup_Conditional_4_Template, 1, 0);
          \u0275\u0275elementStart(5, "div", 5, 1);
          \u0275\u0275repeaterCreate(7, MatTabGroup_For_8_Template, 1, 13, "mat-tab-body", 6, \u0275\u0275repeaterTrackByIdentity);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275property("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
          \u0275\u0275advance(2);
          \u0275\u0275repeater(ctx._tabs);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx._isServer ? 4 : -1);
          \u0275\u0275advance();
          \u0275\u0275classProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          \u0275\u0275advance(2);
          \u0275\u0275repeater(ctx._tabs);
        }
      },
      dependencies: [MatTabHeader, MatTabLabelWrapper, CdkMonitorFocus, MatRipple, CdkPortalOutlet, MatTabBody],
      styles: ['.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height);font-family:var(--mat-tab-header-label-text-font, var(--mat-app-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-app-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-app-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height);border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-app-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-app-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-app-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabGroup, [{
    type: Component,
    args: [{
      selector: "mat-tab-group",
      exportAs: "matTabGroup",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [{
        provide: MAT_TAB_GROUP,
        useExisting: MatTabGroup
      }],
      host: {
        "class": "mat-mdc-tab-group",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mat-mdc-tab-group-dynamic-height]": "dynamicHeight",
        "[class.mat-mdc-tab-group-inverted-header]": 'headerPosition === "below"',
        "[class.mat-mdc-tab-group-stretch-tabs]": "stretchTabs",
        "[style.--mat-tab-animation-duration]": "animationDuration"
      },
      standalone: true,
      imports: [MatTabHeader, MatTabLabelWrapper, CdkMonitorFocus, MatRipple, CdkPortalOutlet, MatTabBody],
      template: '<mat-tab-header #tabHeader\n                [selectedIndex]="selectedIndex || 0"\n                [disableRipple]="disableRipple"\n                [disablePagination]="disablePagination"\n                [aria-label]="ariaLabel"\n                [aria-labelledby]="ariaLabelledby"\n                (indexFocused)="_focusChanged($event)"\n                (selectFocusedIndex)="selectedIndex = $event">\n\n  @for (tab of _tabs; track tab; let i = $index) {\n    <div class="mdc-tab mat-mdc-tab mat-mdc-focus-indicator"\n        #tabNode\n        role="tab"\n        matTabLabelWrapper\n        cdkMonitorElementFocus\n        [id]="_getTabLabelId(i)"\n        [attr.tabIndex]="_getTabIndex(i)"\n        [attr.aria-posinset]="i + 1"\n        [attr.aria-setsize]="_tabs.length"\n        [attr.aria-controls]="_getTabContentId(i)"\n        [attr.aria-selected]="selectedIndex === i"\n        [attr.aria-label]="tab.ariaLabel || null"\n        [attr.aria-labelledby]="(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null"\n        [class.mdc-tab--active]="selectedIndex === i"\n        [class]="tab.labelClass"\n        [disabled]="tab.disabled"\n        [fitInkBarToContent]="fitInkBarToContent"\n        (click)="_handleClick(tab, tabHeader, i)"\n        (cdkFocusChange)="_tabFocusChanged($event, i)">\n      <span class="mdc-tab__ripple"></span>\n\n      <!-- Needs to be a separate element, because we can\'t put\n          `overflow: hidden` on tab due to the ink bar. -->\n      <div\n        class="mat-mdc-tab-ripple"\n        mat-ripple\n        [matRippleTrigger]="tabNode"\n        [matRippleDisabled]="tab.disabled || disableRipple"></div>\n\n      <span class="mdc-tab__content">\n        <span class="mdc-tab__text-label">\n          <!--\n            If there is a label template, use it, otherwise fall back to the text label.\n            Note that we don\'t have indentation around the text label, because it adds\n            whitespace around the text which breaks some internal tests.\n          -->\n          @if (tab.templateLabel) {\n            <ng-template [cdkPortalOutlet]="tab.templateLabel"></ng-template>\n          } @else {{{tab.textLabel}}}\n        </span>\n      </span>\n    </div>\n  }\n</mat-tab-header>\n\n<!--\n  We need to project the content somewhere to avoid hydration errors. Some observations:\n  1. This is only necessary on the server.\n  2. We get a hydration error if there aren\'t any nodes after the `ng-content`.\n  3. We get a hydration error if `ng-content` is wrapped in another element.\n-->\n@if (_isServer) {\n  <ng-content/>\n}\n\n<div\n  class="mat-mdc-tab-body-wrapper"\n  [class._mat-animation-noopable]="_animationMode === \'NoopAnimations\'"\n  #tabBodyWrapper>\n  @for (tab of _tabs; track tab; let i = $index) {\n    <mat-tab-body role="tabpanel"\n                 [id]="_getTabContentId(i)"\n                 [attr.tabindex]="(contentTabIndex != null && selectedIndex === i) ? contentTabIndex : null"\n                 [attr.aria-labelledby]="_getTabLabelId(i)"\n                 [attr.aria-hidden]="selectedIndex !== i"\n                 [class.mat-mdc-tab-body-active]="selectedIndex === i"\n                 [class]="tab.bodyClass"\n                 [content]="tab.content!"\n                 [position]="tab.position!"\n                 [origin]="tab.origin"\n                 [animationDuration]="animationDuration"\n                 [preserveContent]="preserveContent"\n                 (_onCentered)="_removeTabBodyWrapperHeight()"\n                 (_onCentering)="_setTabBodyWrapperHeight($event)">\n    </mat-tab-body>\n  }\n</div>\n',
      styles: ['.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height);font-family:var(--mat-tab-header-label-text-font, var(--mat-app-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-app-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-app-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height);border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-app-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-app-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-app-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_TABS_CONFIG]
    }, {
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    _allTabs: [{
      type: ContentChildren,
      args: [MatTab, {
        descendants: true
      }]
    }],
    _tabBodyWrapper: [{
      type: ViewChild,
      args: ["tabBodyWrapper"]
    }],
    _tabHeader: [{
      type: ViewChild,
      args: ["tabHeader"]
    }],
    color: [{
      type: Input
    }],
    fitInkBarToContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stretchTabs: [{
      type: Input,
      args: [{
        alias: "mat-stretch-tabs",
        transform: booleanAttribute
      }]
    }],
    dynamicHeight: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    headerPosition: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    contentTabIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    disablePagination: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preserveContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    backgroundColor: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    selectedIndexChange: [{
      type: Output
    }],
    focusChange: [{
      type: Output
    }],
    animationDone: [{
      type: Output
    }],
    selectedTabChange: [{
      type: Output
    }]
  });
})();
var MatTabChangeEvent = class {
};
var nextUniqueId = 0;
var MatTabNav = class _MatTabNav extends MatPaginatedTabHeader {
  /** Whether the ink bar should fit its width to the size of the tab label content. */
  get fitInkBarToContent() {
    return this._fitInkBarToContent.value;
  }
  set fitInkBarToContent(value) {
    this._fitInkBarToContent.next(value);
    this._changeDetectorRef.markForCheck();
  }
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    const stringValue = value + "";
    this._animationDuration = /^\d+$/.test(stringValue) ? value + "ms" : stringValue;
  }
  /**
   * Theme color of the background of the tab nav. This API is supported in M2 themes only, it
   * has no effect in M3 themes.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/theming#using-component-color-variants.
   */
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove("mat-tabs-with-background", `mat-background-${this.backgroundColor}`);
    if (value) {
      classList.add("mat-tabs-with-background", `mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  constructor(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode, defaultConfig) {
    super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    this._fitInkBarToContent = new BehaviorSubject(false);
    this.stretchTabs = true;
    this.disableRipple = false;
    this.color = "primary";
    this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
    this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
  }
  _itemSelected() {
  }
  ngAfterContentInit() {
    this._inkBar = new MatInkBar(this._items);
    this._items.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => {
      this.updateActiveLink();
    });
    super.ngAfterContentInit();
  }
  ngAfterViewInit() {
    if (!this.tabPanel && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new Error("A mat-tab-nav-panel must be specified via [tabPanel].");
    }
    super.ngAfterViewInit();
  }
  /** Notifies the component that the active link has been changed. */
  updateActiveLink() {
    if (!this._items) {
      return;
    }
    const items = this._items.toArray();
    for (let i = 0; i < items.length; i++) {
      if (items[i].active) {
        this.selectedIndex = i;
        this._changeDetectorRef.markForCheck();
        if (this.tabPanel) {
          this.tabPanel._activeTabId = items[i].id;
        }
        return;
      }
    }
    this.selectedIndex = -1;
    this._inkBar.hide();
  }
  _getRole() {
    return this.tabPanel ? "tablist" : this._elementRef.nativeElement.getAttribute("role");
  }
  static {
    this.\u0275fac = function MatTabNav_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatTabNav)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ViewportRuler), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8), \u0275\u0275directiveInject(MAT_TABS_CONFIG, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatTabNav,
      selectors: [["", "mat-tab-nav-bar", ""]],
      contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, MatTabLink, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._items = _t);
        }
      },
      viewQuery: function MatTabNav_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c18, 7);
          \u0275\u0275viewQuery(_c27, 7);
          \u0275\u0275viewQuery(_c36, 7);
          \u0275\u0275viewQuery(_c4, 5);
          \u0275\u0275viewQuery(_c5, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListContainer = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabList = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListInner = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._nextPaginator = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._previousPaginator = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-tab-nav-bar", "mat-mdc-tab-header"],
      hostVars: 17,
      hostBindings: function MatTabNav_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("role", ctx._getRole());
          \u0275\u0275styleProp("--mat-tab-animation-duration", ctx.animationDuration);
          \u0275\u0275classProp("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-mdc-tab-nav-bar-stretch-tabs", ctx.stretchTabs)("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", booleanAttribute],
        stretchTabs: [2, "mat-stretch-tabs", "stretchTabs", booleanAttribute],
        animationDuration: "animationDuration",
        backgroundColor: "backgroundColor",
        disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
        color: "color",
        tabPanel: "tabPanel"
      },
      exportAs: ["matTabNavBar", "matTabNav"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      attrs: _c10,
      ngContentSelectors: _c013,
      decls: 13,
      vars: 6,
      consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-link-container", 3, "keydown"], [1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-links"], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled"]],
      template: function MatTabNav_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div", 5, 0);
          \u0275\u0275listener("click", function MatTabNav_Template_div_click_0_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._handlePaginatorClick("before"));
          })("mousedown", function MatTabNav_Template_div_mousedown_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._handlePaginatorPress("before", $event));
          })("touchend", function MatTabNav_Template_div_touchend_0_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._stopInterval());
          });
          \u0275\u0275element(2, "div", 6);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(3, "div", 7, 1);
          \u0275\u0275listener("keydown", function MatTabNav_Template_div_keydown_3_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._handleKeydown($event));
          });
          \u0275\u0275elementStart(5, "div", 8, 2);
          \u0275\u0275listener("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onContentChanges());
          });
          \u0275\u0275elementStart(7, "div", 9, 3);
          \u0275\u0275projection(9);
          \u0275\u0275elementEnd()()();
          \u0275\u0275elementStart(10, "div", 10, 4);
          \u0275\u0275listener("mousedown", function MatTabNav_Template_div_mousedown_10_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._handlePaginatorPress("after", $event));
          })("click", function MatTabNav_Template_div_click_10_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._handlePaginatorClick("after"));
          })("touchend", function MatTabNav_Template_div_touchend_10_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._stopInterval());
          });
          \u0275\u0275element(12, "div", 6);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
          \u0275\u0275property("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
          \u0275\u0275advance(10);
          \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
          \u0275\u0275property("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
        }
      },
      dependencies: [MatRipple, CdkObserveContent],
      styles: [".mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-links,.mat-mdc-tab-links.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-focus-indicator::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabNav, [{
    type: Component,
    args: [{
      selector: "[mat-tab-nav-bar]",
      exportAs: "matTabNavBar, matTabNav",
      host: {
        "[attr.role]": "_getRole()",
        "class": "mat-mdc-tab-nav-bar mat-mdc-tab-header",
        "[class.mat-mdc-tab-header-pagination-controls-enabled]": "_showPaginationControls",
        "[class.mat-mdc-tab-header-rtl]": "_getLayoutDirection() == 'rtl'",
        "[class.mat-mdc-tab-nav-bar-stretch-tabs]": "stretchTabs",
        "[class.mat-primary]": 'color !== "warn" && color !== "accent"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class._mat-animation-noopable]": '_animationMode === "NoopAnimations"',
        "[style.--mat-tab-animation-duration]": "animationDuration"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [MatRipple, CdkObserveContent],
      template: `<!--
 Note that this intentionally uses a \`div\` instead of a \`button\`, because it's not part of
 the regular tabs flow and is only here to support mouse users. It should also not be focusable.
-->
<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before"
     #previousPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollBefore || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollBefore"
     (click)="_handlePaginatorClick('before')"
     (mousedown)="_handlePaginatorPress('before', $event)"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>

<div class="mat-mdc-tab-link-container" #tabListContainer (keydown)="_handleKeydown($event)">
  <div class="mat-mdc-tab-list" #tabList (cdkObserveContent)="_onContentChanges()">
    <div class="mat-mdc-tab-links" #tabListInner>
      <ng-content></ng-content>
    </div>
  </div>
</div>

<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after"
     #nextPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollAfter || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollAfter"
     (mousedown)="_handlePaginatorPress('after', $event)"
     (click)="_handlePaginatorClick('after')"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>
`,
      styles: [".mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-links,.mat-mdc-tab-links.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-focus-indicator::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: ViewportRuler
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_TABS_CONFIG]
    }]
  }], {
    fitInkBarToContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stretchTabs: [{
      type: Input,
      args: [{
        alias: "mat-stretch-tabs",
        transform: booleanAttribute
      }]
    }],
    animationDuration: [{
      type: Input
    }],
    _items: [{
      type: ContentChildren,
      args: [forwardRef(() => MatTabLink), {
        descendants: true
      }]
    }],
    backgroundColor: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    tabPanel: [{
      type: Input
    }],
    _tabListContainer: [{
      type: ViewChild,
      args: ["tabListContainer", {
        static: true
      }]
    }],
    _tabList: [{
      type: ViewChild,
      args: ["tabList", {
        static: true
      }]
    }],
    _tabListInner: [{
      type: ViewChild,
      args: ["tabListInner", {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: ViewChild,
      args: ["nextPaginator"]
    }],
    _previousPaginator: [{
      type: ViewChild,
      args: ["previousPaginator"]
    }]
  });
})();
var MatTabLink = class _MatTabLink extends InkBarItem {
  /** Whether the link is active. */
  get active() {
    return this._isActive;
  }
  set active(value) {
    if (value !== this._isActive) {
      this._isActive = value;
      this._tabNavBar.updateActiveLink();
    }
  }
  /**
   * Whether ripples are disabled on interaction.
   * @docs-private
   */
  get rippleDisabled() {
    return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
  }
  constructor(_tabNavBar, elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
    super();
    this._tabNavBar = _tabNavBar;
    this.elementRef = elementRef;
    this._focusMonitor = _focusMonitor;
    this._destroyed = new Subject();
    this._isActive = false;
    this.disabled = false;
    this.disableRipple = false;
    this.tabIndex = 0;
    this.id = `mat-tab-link-${nextUniqueId++}`;
    this.rippleConfig = globalRippleOptions || {};
    this.tabIndex = parseInt(tabIndex) || 0;
    if (animationMode === "NoopAnimations") {
      this.rippleConfig.animation = {
        enterDuration: 0,
        exitDuration: 0
      };
    }
    _tabNavBar._fitInkBarToContent.pipe(takeUntil(this._destroyed)).subscribe((fitInkBarToContent) => {
      this.fitInkBarToContent = fitInkBarToContent;
    });
  }
  /** Focuses the tab link. */
  focus() {
    this.elementRef.nativeElement.focus();
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this.elementRef);
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
    super.ngOnDestroy();
    this._focusMonitor.stopMonitoring(this.elementRef);
  }
  _handleFocus() {
    this._tabNavBar.focusIndex = this._tabNavBar._items.toArray().indexOf(this);
  }
  _handleKeydown(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this.disabled) {
        event.preventDefault();
      } else if (this._tabNavBar.tabPanel) {
        if (event.keyCode === SPACE) {
          event.preventDefault();
        }
        this.elementRef.nativeElement.click();
      }
    }
  }
  _getAriaControls() {
    return this._tabNavBar.tabPanel ? this._tabNavBar.tabPanel?.id : this.elementRef.nativeElement.getAttribute("aria-controls");
  }
  _getAriaSelected() {
    if (this._tabNavBar.tabPanel) {
      return this.active ? "true" : "false";
    } else {
      return this.elementRef.nativeElement.getAttribute("aria-selected");
    }
  }
  _getAriaCurrent() {
    return this.active && !this._tabNavBar.tabPanel ? "page" : null;
  }
  _getRole() {
    return this._tabNavBar.tabPanel ? "tab" : this.elementRef.nativeElement.getAttribute("role");
  }
  _getTabIndex() {
    if (this._tabNavBar.tabPanel) {
      return this._isActive && !this.disabled ? 0 : -1;
    } else {
      return this.disabled ? -1 : this.tabIndex;
    }
  }
  static {
    this.\u0275fac = function MatTabLink_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatTabLink)(\u0275\u0275directiveInject(MatTabNav), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(MAT_RIPPLE_GLOBAL_OPTIONS, 8), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275directiveInject(FocusMonitor), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatTabLink,
      selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]],
      hostAttrs: [1, "mdc-tab", "mat-mdc-tab-link", "mat-mdc-focus-indicator"],
      hostVars: 11,
      hostBindings: function MatTabLink_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("focus", function MatTabLink_focus_HostBindingHandler() {
            return ctx._handleFocus();
          })("keydown", function MatTabLink_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("aria-controls", ctx._getAriaControls())("aria-current", ctx._getAriaCurrent())("aria-disabled", ctx.disabled)("aria-selected", ctx._getAriaSelected())("id", ctx.id)("tabIndex", ctx._getTabIndex())("role", ctx._getRole());
          \u0275\u0275classProp("mat-mdc-tab-disabled", ctx.disabled)("mdc-tab--active", ctx.active);
        }
      },
      inputs: {
        active: [2, "active", "active", booleanAttribute],
        disabled: [2, "disabled", "disabled", booleanAttribute],
        disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
        tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
        id: "id"
      },
      exportAs: ["matTabLink"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      attrs: _c11,
      ngContentSelectors: _c013,
      decls: 5,
      vars: 2,
      consts: [[1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"]],
      template: function MatTabLink_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275element(0, "span", 0)(1, "div", 1);
          \u0275\u0275elementStart(2, "span", 2)(3, "span", 3);
          \u0275\u0275projection(4);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275advance();
          \u0275\u0275property("matRippleTrigger", ctx.elementRef.nativeElement)("matRippleDisabled", ctx.rippleDisabled);
        }
      },
      dependencies: [MatRipple],
      styles: ['.mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height);font-family:var(--mat-tab-header-label-text-font, var(--mat-app-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-app-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-app-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-tab-link.mdc-tab{flex-grow:0}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height);border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab-link:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-app-primary))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-app-primary))}.mat-mdc-tab-link.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab-link .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-app-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLink, [{
    type: Component,
    args: [{
      selector: "[mat-tab-link], [matTabLink]",
      exportAs: "matTabLink",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "class": "mdc-tab mat-mdc-tab-link mat-mdc-focus-indicator",
        "[attr.aria-controls]": "_getAriaControls()",
        "[attr.aria-current]": "_getAriaCurrent()",
        "[attr.aria-disabled]": "disabled",
        "[attr.aria-selected]": "_getAriaSelected()",
        "[attr.id]": "id",
        "[attr.tabIndex]": "_getTabIndex()",
        "[attr.role]": "_getRole()",
        "[class.mat-mdc-tab-disabled]": "disabled",
        "[class.mdc-tab--active]": "active",
        "(focus)": "_handleFocus()",
        "(keydown)": "_handleKeydown($event)"
      },
      standalone: true,
      imports: [MatRipple],
      template: '<span class="mdc-tab__ripple"></span>\n\n<div\n  class="mat-mdc-tab-ripple"\n  mat-ripple\n  [matRippleTrigger]="elementRef.nativeElement"\n  [matRippleDisabled]="rippleDisabled"></div>\n\n<span class="mdc-tab__content">\n  <span class="mdc-tab__text-label">\n    <ng-content></ng-content>\n  </span>\n</span>\n\n',
      styles: ['.mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height);font-family:var(--mat-tab-header-label-text-font, var(--mat-app-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-app-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-app-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-tab-link.mdc-tab{flex-grow:0}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height);border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab-link:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-app-primary))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-app-primary))}.mat-mdc-tab-link.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab-link .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-app-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}']
    }]
  }], () => [{
    type: MatTabNav
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RIPPLE_GLOBAL_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: FocusMonitor
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    active: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    id: [{
      type: Input
    }]
  });
})();
var MatTabNavPanel = class _MatTabNavPanel {
  constructor() {
    this.id = `mat-tab-nav-panel-${nextUniqueId++}`;
  }
  static {
    this.\u0275fac = function MatTabNavPanel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatTabNavPanel)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatTabNavPanel,
      selectors: [["mat-tab-nav-panel"]],
      hostAttrs: ["role", "tabpanel", 1, "mat-mdc-tab-nav-panel"],
      hostVars: 2,
      hostBindings: function MatTabNavPanel_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("aria-labelledby", ctx._activeTabId)("id", ctx.id);
        }
      },
      inputs: {
        id: "id"
      },
      exportAs: ["matTabNavPanel"],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      ngContentSelectors: _c013,
      decls: 1,
      vars: 0,
      template: function MatTabNavPanel_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275projection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabNavPanel, [{
    type: Component,
    args: [{
      selector: "mat-tab-nav-panel",
      exportAs: "matTabNavPanel",
      template: "<ng-content></ng-content>",
      host: {
        "[attr.aria-labelledby]": "_activeTabId",
        "[attr.id]": "id",
        "class": "mat-mdc-tab-nav-panel",
        "role": "tabpanel"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], null, {
    id: [{
      type: Input
    }]
  });
})();
var MatTabsModule = class _MatTabsModule {
  static {
    this.\u0275fac = function MatTabsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatTabsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatTabsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCommonModule, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabsModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink],
      exports: [MatCommonModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink]
    }]
  }], null, null);
})();

// src/app/display/display.component.ts
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.picture;
var _forTrack2 = ($index, $item) => $item.uniqueKey;
var _forTrack3 = ($index, $item) => $item.label;
var _forTrack4 = ($index, $item) => $item.url;
var _c014 = (a0) => ["/item", a0];
function DisplayComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 6);
  }
}
function DisplayComponent_Conditional_9_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.linkedPagesTitle);
  }
}
function DisplayComponent_Conditional_9_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "mat-icon-button", 54)(4, "mat-icon", 55);
    \u0275\u0275text(5, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(6, "\xA0\xA0\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "hr");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" \xA0\xA0", item_r4.label, ", ", item_r4.id, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c014, item_r4.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function DisplayComponent_Conditional_9_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26)(1, "a", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("href", "https://database.factgrid.de/wiki/Item:", ctx_r2.id, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.id);
  }
}
function DisplayComponent_Conditional_9_For_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 57)(2, "img", 58);
    \u0275\u0275listener("error", function DisplayComponent_Conditional_9_For_46_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onImageError($event));
    })("click", function DisplayComponent_Conditional_9_For_46_Template_img_click_2_listener() {
      const picture_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openImage(picture_r6.picture));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const picture_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.isTopPicture ? "show-division" : "hide-division");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", picture_r6.thumbnail, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("data-src", picture_r6.full);
  }
}
function DisplayComponent_Conditional_9_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-text-display", 31);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("trans", ctx_r2.trans);
  }
}
function DisplayComponent_Conditional_9_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "button", 59);
    \u0275\u0275listener("click", function DisplayComponent_Conditional_9_Conditional_82_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onClick4());
    });
    \u0275\u0275elementStart(2, "mat-icon", 60);
    \u0275\u0275text(3, "expand_less");
    \u0275\u0275elementEnd()()();
  }
}
function DisplayComponent_Conditional_9_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "button", 61);
    \u0275\u0275listener("click", function DisplayComponent_Conditional_9_Conditional_83_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onClick5());
    });
    \u0275\u0275elementStart(2, "mat-icon", 62);
    \u0275\u0275text(3, "expand_more");
    \u0275\u0275elementEnd()()();
  }
}
function DisplayComponent_Conditional_9_For_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "img", 63);
    \u0275\u0275listener("load", function DisplayComponent_Conditional_9_For_90_Template_img_load_1_listener() {
      const picture_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onThumbnailLoad(picture_r10));
    })("error", function DisplayComponent_Conditional_9_For_90_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onImageError($event));
    })("click", function DisplayComponent_Conditional_9_For_90_Template_img_click_1_listener() {
      const picture_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openImage(picture_r10.picture));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const picture_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", picture_r10.thumbnail, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("data-src", picture_r10.full);
  }
}
function DisplayComponent_Conditional_9_For_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 64);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "\xA0\xA0");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const externalLink_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", externalLink_r11.label, ": ");
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", externalLink_r11.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", externalLink_r11[0].mainsnak.datavalue.value, " ");
  }
}
function DisplayComponent_Conditional_9_For_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 64);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "\xA0\xA0");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const wiki_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", wiki_r12.site, ": ");
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", wiki_r12.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(wiki_r12.title);
  }
}
function DisplayComponent_Conditional_9_div_113_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 54)(3, "mat-icon", 67);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const selectedItem_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", selectedItem_r13.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c014, selectedItem_r13.value.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function DisplayComponent_Conditional_9_div_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div");
    \u0275\u0275template(2, DisplayComponent_Conditional_9_div_113_span_2_Template, 6, 5, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "br");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const selectedItem_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", selectedItem_r13);
  }
}
function DisplayComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "mat-drawer-container", 7)(2, "mat-drawer", 8, 0)(4, "div", 9)(5, "div", 10)(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 12);
    \u0275\u0275listener("click", function DisplayComponent_Conditional_9_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const drawer_r2 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(drawer_r2.toggle());
    });
    \u0275\u0275elementStart(9, "mat-icon", 11);
    \u0275\u0275text(10, "chevron_right");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div")(12, "mat-card", 13)(13, "mat-card-content", 14)(14, "div", 15);
    \u0275\u0275template(15, DisplayComponent_Conditional_9_Conditional_15_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, DisplayComponent_Conditional_9_For_17_Template, 8, 6, "div", null, _forTrack02);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "mat-drawer-content", 17)(19, "div", 18)(20, "div", 10)(21, "button", 12);
    \u0275\u0275listener("click", function DisplayComponent_Conditional_9_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const drawer_r2 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(drawer_r2.toggle());
    });
    \u0275\u0275elementStart(22, "mat-icon", 11);
    \u0275\u0275text(23, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "span", 11);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 19)(27, "div", 20)(28, "div", 21)(29, "mat-card", 13)(30, "div", 14)(31, "mat-card-content")(32, "div", 22)(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 23);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "join");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 24);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "br");
    \u0275\u0275elementStart(41, "div")(42, "span", 25);
    \u0275\u0275text(43, "FactGrid ID:\xA0\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, DisplayComponent_Conditional_9_Conditional_44_Template, 3, 3, "span", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(45, DisplayComponent_Conditional_9_For_46_Template, 3, 3, "div", 27, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "app-header-display", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(48, "div");
    \u0275\u0275elementStart(49, "div", 29)(50, "mat-card", 13);
    \u0275\u0275element(51, "app-main-display", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(52, DisplayComponent_Conditional_9_Conditional_52_Template, 1, 1, "app-text-display", 31);
    \u0275\u0275elementStart(53, "div", 29)(54, "mat-card", 13);
    \u0275\u0275element(55, "app-education-display", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 29)(57, "mat-card", 13);
    \u0275\u0275element(58, "app-career-display", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 29)(60, "mat-card", 13);
    \u0275\u0275element(61, "app-sociability-display", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 29)(63, "mat-card", 13);
    \u0275\u0275element(64, "app-iframes-display", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 27);
    \u0275\u0275element(66, "app-sparql0-display", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 27);
    \u0275\u0275element(68, "app-sparql3-display", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 27)(70, "mat-card", 13);
    \u0275\u0275element(71, "app-sparql1-display", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 27);
    \u0275\u0275element(73, "app-sparql2-display", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 27);
    \u0275\u0275element(75, "app-sparql4-display", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 27)(77, "mat-card", 13);
    \u0275\u0275element(78, "app-sources-display", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "mat-card", 13)(80, "div")(81, "div", 38);
    \u0275\u0275template(82, DisplayComponent_Conditional_9_Conditional_82_Template, 4, 0, "div", 39)(83, DisplayComponent_Conditional_9_Conditional_83_Template, 4, 0, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 40);
    \u0275\u0275element(85, "app-item-info", 41);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(86, "div", 42)(87, "mat-card", 43)(88, "div", 44);
    \u0275\u0275repeaterCreate(89, DisplayComponent_Conditional_9_For_90_Template, 2, 2, "div", null, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "mat-card", 45)(92, "mat-card-content", 27)(93, "div", 46)(94, "div", 47);
    \u0275\u0275text(95);
    \u0275\u0275elementEnd();
    \u0275\u0275element(96, "hr");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(97, DisplayComponent_Conditional_9_For_98_Template, 7, 3, "div", 48, _forTrack3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "mat-card-content", 49)(100, "div", 46)(101, "div", 47);
    \u0275\u0275text(102, "Wikis");
    \u0275\u0275elementEnd();
    \u0275\u0275element(103, "hr");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(104, DisplayComponent_Conditional_9_For_105_Template, 7, 3, "div", 48, _forTrack4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "mat-card", 50)(107, "div", 51)(108, "mat-card-content")(109, "div", 52);
    \u0275\u0275text(110);
    \u0275\u0275elementEnd();
    \u0275\u0275element(111, "br");
    \u0275\u0275elementStart(112, "div");
    \u0275\u0275template(113, DisplayComponent_Conditional_9_div_113_Template, 4, 1, "div", 53);
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.mainPage);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(true ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.linkedItems);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.linkedPagesTitle);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.isAliases ? "hide-division" : "show-division");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 72, ctx_r2.aliases), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.description, " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.id ? 44 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.pictures);
    \u0275\u0275advance(2);
    \u0275\u0275property("headerDetail", ctx_r2.headerDetail);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.isMain ? "show-division" : "hide-division");
    \u0275\u0275advance(2);
    \u0275\u0275property("mainList", ctx_r2.mainList)("mainTitle", ctx_r2.mainTitle)("list", ctx_r2.list);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.trans !== "" ? 52 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.isTraining ? "show-division" : "hide-division");
    \u0275\u0275advance(2);
    \u0275\u0275property("education", ctx_r2.education)("training", ctx_r2.training);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.isCareer ? "show-division" : "hide-division");
    \u0275\u0275advance(2);
    \u0275\u0275property("careerAndActivities", ctx_r2.careerAndActivities)("career", ctx_r2.career);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.isSociability ? "show-division" : "hide-division");
    \u0275\u0275advance(2);
    \u0275\u0275property("sociabilityAndCulture", ctx_r2.sociabilityAndCulture)("sociability", ctx_r2.sociability);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.isIframes ? "show-division" : "hide-division");
    \u0275\u0275advance(2);
    \u0275\u0275property("claims", ctx_r2.claims)("urlSafe1", ctx_r2.urlSafe1)("urlSafe2", ctx_r2.urlSafe2)("urlSafe3", ctx_r2.urlSafe3)("urlSafe4", ctx_r2.urlSafe4)("urlSafe5", ctx_r2.urlSafe5)("urlSafe6", ctx_r2.urlSafe6)("urlSafe7", ctx_r2.urlSafe7)("urlSafe8", ctx_r2.urlSafe8)("urlSafe9", ctx_r2.urlSafe9)("urlSafe10", ctx_r2.urlSafe10)("urlSafe11", ctx_r2.urlSafe11)("urlSafe12", ctx_r2.urlSafe12)("urlSafe13", ctx_r2.urlSafe13)("urlSafe14", ctx_r2.urlSafe14)("urlSafe15", ctx_r2.urlSafe15);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.isSparql0 ? "show-division" : "hide-division");
    \u0275\u0275advance();
    \u0275\u0275property("sparqlData", ctx_r2.sparqlData0)("sparqlSubject", ctx_r2.sparqlSubject0);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.isSparql3 ? "show-division" : "hide-division");
    \u0275\u0275advance();
    \u0275\u0275property("sparqlData", ctx_r2.sparqlData3)("sparqlSubject", ctx_r2.sparqlSubject3);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.isSparql1 ? "show-division" : "hide-division");
    \u0275\u0275advance(2);
    \u0275\u0275property("sparqlData", ctx_r2.sparqlData1)("sparqlSubject", ctx_r2.sparqlSubject1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.isSparql2 ? "show-division" : "hide-division");
    \u0275\u0275advance();
    \u0275\u0275property("sparqlData", ctx_r2.sparqlData2)("sparqlSubject", ctx_r2.sparqlSubject2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.isSparql4 ? "show-division" : "hide-division");
    \u0275\u0275advance();
    \u0275\u0275property("sparqlData", ctx_r2.sparqlData4)("sparqlSubject", ctx_r2.sparqlSubject4);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.isSources ? "show-division" : "hide-division");
    \u0275\u0275advance(2);
    \u0275\u0275property("sourcesList", ctx_r2.sourcesList)("sources", ctx_r2.sources);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.isInfo === false ? 82 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isInfo === true ? 83 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.isInfo ? "hide-division" : "show-division");
    \u0275\u0275advance();
    \u0275\u0275property("technicalities", ctx_r2.technicalities)("classesList", ctx_r2.classesList)("instancesList", ctx_r2.instancesList)("subclassesList", ctx_r2.subclassesList)("natureOfList", ctx_r2.natureOfList);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.isPicture ? "show-division" : "hide-division");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.pictures);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.isExternalLinks ? "show-division" : "hide-division");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.externalLinksTitle);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.externalLinks);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.isWikis ? "show-division" : "hide-division");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.wikis);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.formerVisitsTitle);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.selectedItemsList);
  }
}
var DisplayComponent = class _DisplayComponent {
  constructor() {
    this.lang = inject(SelectedLangService);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.setData = inject(SetDataService);
    this.request = inject(RequestService);
    this.setList = inject(SetSelectedItemsListService);
    this.changeDetector = inject(ChangeDetectorRef);
    this.backList = inject(BackListService);
    this.backList2 = inject(BackListService);
    this.backListDetails = inject(BackListDetailsService);
    this.itemSparql = inject(ItemSparqlService);
    this.headerDisplay = inject(HeaderDisplayService);
    this.placeDisplay = inject(PlaceDisplayService);
    this.orgDisplay = inject(OrgDisplayService);
    this.documentDisplay = inject(DocumentDisplayService);
    this.activityDisplay = inject(ActivityDisplayService);
    this.personDisplay = inject(PersonDisplayService);
    this.educationDisplay = inject(EducationDisplayService);
    this.careerDisplay = inject(CareerDisplayService);
    this.sociabilityDisplay = inject(SociabilityDisplayService);
    this.sourcesDisplay = inject(SourcesDisplayService);
    this.technicalitiesDisplay = inject(TechnicalitiesDisplayService);
    this.eventDisplay = inject(EventDisplayService);
    this.changeTranscript = inject(TranscriptionService);
    this.transcript = inject(TranscriptDisplayService);
    this.externalLinksDisplay = inject(ExternalLinksDisplayService);
    this.iframesDisplay = inject(IframesDisplayService);
    this.wikiDisplay = inject(WikiDisplayService);
    this.sanitizer = inject(DomSanitizer);
    this.observer = inject(BreakpointObserver);
    this.placeType = "";
    this.isSpinner = false;
    this.clickedArray = ["", "", ""];
    this.newSearch = "new search";
    this.linkedPagesTitle = "linked pages";
    this.mainPage = "main page";
    this.externalLinksTitle = "External links";
    this.formerVisitsTitle = "you have visited:";
    this.factGridQuery = "FactGrid query";
    this.clickToDisplay = "click to display";
    this.clickToDownload = "click to download";
    this.stemma = "stemma";
    this.factGridLogo = "https://upload.wikimedia.org/wikipedia/commons/b/b6/FactGrid-Logo4.png";
    this.id = "";
    this.natureOf = "";
    this.classId = "";
    this.coords = void 0;
    this.list = [];
    this.isMain = false;
    this.isExternalLinks = false;
    this.isWikis = false;
    this.isPicture = false;
    this.isTopPicture = false;
    this.isTraining = false;
    this.isCareer = false;
    this.isSociability = false;
    this.isOther = false;
    this.isSources = false;
    this.isActivity = false;
    this.isEvent = false;
    this.isList = false;
    this.isPlace = false;
    this.isIframes = false;
    this.isStemma = false;
    this.isFamilyTree = false;
    this.isSparql0 = false;
    this.isSparql1 = false;
    this.isSparql2 = false;
    this.isSparql3 = false;
    this.isSparql4 = false;
    this.isTranscription = false;
    this.isInfo = false;
    this.isMobile = false;
    this.isAliases = false;
  }
  onClick2(query) {
    query = this.request.getList(query).pipe(map((res) => this.listFromSparql(res)));
    if (query.includes("item")) {
      query.subscribe((res) => {
        if (res !== void 0) {
          if (res.results !== void 0) {
            this.list = res.results.bindings;
            for (let i = 0; i < this.list.length; i++) {
              this.list[i]["item"].id = this.list[i]["item"].value.replace("https://database.factgrid.de/entity/", "");
              if (this.list[i]["itemDescription"] === void 0)
                this.list[i]["itemDescription"] = { value: "" };
            }
            this.isList = true;
          }
        }
        this.isList = true;
      });
    }
  }
  onClick3(query) {
    query = this.newSparqlAddress(query);
    this.request.downLoadList(query);
  }
  onClick4() {
    this.isInfo = true;
    ;
  }
  onClick5() {
    this.isInfo = false;
    ;
  }
  openImage(image) {
    window.open(image);
  }
  setItemId(event) {
    this.itemObject = event;
  }
  ngOnInit() {
    this.isSpinner = true;
    this.list = [];
    this.isList = false;
    this.sparqlQuery = [];
    this.sparqlData0 = [];
    this.sparqlData1 = [];
    this.sparqlData2 = [];
    this.sparqlData3 = [];
    this.sparqlData4 = [];
    this.sparqlSubject0 = "";
    this.sparqlSubject1 = "";
    this.sparqlSubject2 = "";
    this.sparqlSubject3 = "";
    this.sparqlSubject4 = "";
    this.trans = "";
    this.instancesList = [];
    this.subclassesList = [];
    this.classesList = [];
    this.natureOfList = [];
    this.superClass = "";
    this.newSearch = this.lang.newSearch(this.newSearch);
    this.linkedPagesTitle = this.lang.linkedPagesTitle(this.linkedPagesTitle);
    this.mainPage = this.lang.mainPage(this.mainPage);
    this.factGridQuery = this.lang.factGridQuery(this.factGridQuery);
    this.externalLinksTitle = this.lang.externalLinksTitle(this.externalLinksTitle);
    this.formerVisitsTitle = this.lang.formerVisitsTitle(this.formerVisitsTitle);
    this.clickToDownload = this.lang.clickToDownload(this.clickToDownload);
    this.clickToDisplay = this.lang.clickToDisplay(this.clickToDisplay);
    this.stemma = this.lang.stemma(this.stemma);
    this.subscription0 = this.route.paramMap.subscribe((params) => {
      this.itemId = params.get("id"), this.subscription1 = this.backList.backList(this.itemId, this.lang.selectedLang).pipe(map((res) => {
        if (res[0].query !== void 0) {
          this.linkedItems = this.backListDetails.setBackList(res[0].query.pages);
        }
        if (res[0].query === void 0) {
          if (this.lang.selectedLang === "de") {
            this.linkedItems = [{ id: "Q21898", label: "keine" }];
          }
          ;
          if (this.lang.selectedLang === "fr") {
            this.linkedItems = [{ id: "Q21898", label: "aucune" }];
          }
          ;
          if (this.lang.selectedLang === "en") {
            this.linkedItems = [{ id: "Q21898", label: "none" }];
          }
          ;
          if (this.lang.selectedLang === "es") {
            this.linkedItems = [{ id: "Q21898", label: "ninguno" }];
          }
          ;
          if (this.lang.selectedLang === "hu") {
            this.linkedItems = [{ id: "Q21898", label: "nincs" }];
          }
          ;
          if (this.lang.selectedLang === "it") {
            this.linkedItems = [{ id: "Q21898", label: "nessuno" }];
          }
          ;
        }
      })).subscribe((res) => {
        this.linkedItems;
      }), this.subscription2 = this.backList.backList(this.itemId, this.lang.selectedLang).pipe(map((res) => {
        if (res[1].query !== void 0) {
          this.linkedItems2 = this.backListDetails.setBackList(res[1].query.pages);
          if (this.linkedItems !== void 0) {
            for (let i = 0; i < this.linkedItems.length; i++) {
              if (this.linkedItems[i].label === "") {
                this.linkedItems[i].label = this.linkedItems2[i].label;
              }
            }
          }
        }
      })).subscribe((res) => {
        this.linkedItems;
      });
      this.data = this.setData.itemToDisplay(this.itemId);
      this.subscription2 = this.data.subscribe((item) => {
        console.log(item);
        this.isMain = false;
        this.isOther = false;
        this.isPicture = false;
        this.isSources = false;
        this.isTraining = false;
        this.isCareer = false;
        this.isFamilyTree = false;
        this.isSociability = false;
        this.isIframes = false;
        this.isActivity = false;
        this.isWikis = false;
        this.isExternalLinks = false;
        this.isInfo = false;
        if (item !== void 0) {
          this.item = item;
          this.claims = item[0].claims;
          console.log(item);
          this.setList.addToSelectedItemsList(item[0]);
          if (this.claims.P2 === void 0) {
            alert("property P2 undefined");
          }
          ;
          if (this.claims.P320 === void 0) {
            this.hideList();
          }
          ;
          this.superClass = "";
          this.natureOf = this.claims.P2[0].mainsnak.datavalue.value.id;
          this.event = this.claims.P2.event;
          this.listTitle = this.claims.P2.listTitle;
          this.main = this.claims.P2.main;
          if (this.mainTitle == "Humain") {
            this.mainTitle = "Personne";
          }
          ;
          if (this.claims.P2[0].mainsnak.datavalue.value.id === "Q37073" || this.claims.P2[0].mainsnak.datavalue.value.id === "Q257052") {
            this.mainTitle = this.lang.activity(this.mainTitle);
          }
          ;
          this.urlId = this.factGridUrl + this.id;
          if (this.claims.P48 !== void 0) {
            this.zoom = 12;
            let xy = this.claims.P2[0].mainsnak.datavalue.value.id;
            if (xy == "Q176131") {
              this.zoom = 3;
            }
            ;
            if (xy == "Q21925") {
              this.zoom = 4;
            }
            ;
            if (xy == "Q21876") {
              this.zoom = 6;
            }
            if (xy == "Q16200") {
              this.zoom = 18;
            }
            ;
            if (xy == "Q266101" || xy == "Q469609" || xy == "Q172249" || xy == "Q36239" || xy == "Q164328" || xy == "Q36251" || xy == "Q141472" || xy == "Q395380" || xy == "Q375357") {
              this.zoom = 16;
            }
            this.coords = this.claims.P48[0].mainsnak.datavalue.value;
            this.latitude = this.claims.P48[0].mainsnak.datavalue.value.latitude;
            this.longitude = this.claims.P48[0].mainsnak.datavalue.value.longitude;
            this.router.navigate([this.latitude, this.longitude, this.zoom], { relativeTo: this.route });
          }
          this.selectedItemsList = JSON.parse(localStorage.getItem("selectedItems"));
          this.item[0].sparql.subscribe((res) => this.sparqlDisplay(res));
          if (this.item[0].infoList !== void 0) {
            this.instancesList = this.item[0].infoList[0];
            this.subclassesList = this.item[0].infoList[1];
            this.classesList = this.item[0].infoList[2];
            this.natureOfList = this.item[0].infoList[3];
          }
          if (this.classesList.length !== void 0 || this.subclassesList.length !== void 0 || this.instancesList.length !== void 0) {
            this.isInfo = true;
          }
          ;
          this.id = this.item[0].id;
          this.label = this.item[0].label;
          this.description = this.item[0].description;
          this.aliases = this.item[0].aliases;
          if (this.aliases) {
            this.isAliases === true;
          }
          ;
          this.headerDetail = [];
          this.headerDisplay.setHeaderDisplay(this.item, this.headerDetail);
          this.locationAndSituation = [];
          if (this.claims.P2.place !== void 0) {
            this.placeDisplay.setPlaceDisplay(this.item, this.locationAndSituation);
          }
          if (this.locationAndSituation.length > 0) {
            this.isPlace = true;
          }
          ;
          this.lifeAndFamily = [];
          if (this.claims.P2.person !== void 0) {
            this.personDisplay.setPersonDisplay(this.item, this.lifeAndFamily);
          }
          this.education = [];
          this.training = "";
          if (this.claims.P2.person !== void 0) {
            this.educationDisplay.setEducationDisplay(this.item, this.education);
            if (this.education.length > 0) {
              this.training = this.claims.P2.training;
              this.isTraining = true;
            }
            ;
          }
          this.careerAndActivities = [];
          this.career = "";
          if (this.claims.P2.person !== void 0) {
            this.careerDisplay.setCareerDisplay(this.item, this.careerAndActivities);
            if (this.careerAndActivities.length > 0) {
              this.career = this.claims.P2.career;
              this.isCareer = true;
            }
            ;
          }
          this.sociabilityAndCulture = [];
          this.sociability = "";
          if (this.claims.P2.person !== void 0) {
            this.sociabilityDisplay.setSociabilityDisplay(this.item, this.sociabilityAndCulture);
            if (this.sociabilityAndCulture.length > 0) {
              this.sociability = this.claims.P2.sociability;
              this.isSociability = true;
            }
          }
          this.pictures = [];
          if (this.claims.P189 !== void 0) {
            this.pictures = this.claims.P189.map((picture) => {
              const imageUrl = picture.picture;
              const thumbnailUrl = `${imageUrl}?width=300`;
              console.log(imageUrl);
              this.preloadImage(thumbnailUrl);
              this.preloadImage(imageUrl);
              return {
                thumbnail: `${imageUrl}?width=300`,
                // Miniature pour affichage rapide
                full: imageUrl
                // URL complète
              };
            });
          }
          this.pictures = this.pictures.map((picture, index) => __spreadProps(__spreadValues({}, picture), {
            uniqueKey: picture.picture || `picture-${index}`
          }));
          if (this.pictures !== void 0) {
            this.isPicture = true;
            this.observer.observe([Breakpoints.HandsetPortrait]).subscribe((result) => {
              const breakpoints = result.breakpoints;
              if (result.matches) {
                this.isMobile = true;
              }
              if (this.isMobile === true) {
                this.isTopPicture = true;
                this.isPicture = false;
              }
            });
          }
          ;
          this.locationAndContext = [];
          if (this.claims.P2.org !== void 0) {
            this.orgDisplay.setOrgDisplay(this.item, this.locationAndContext);
          }
          this.activityDetail = [];
          if (this.claims.P2.activity !== void 0) {
            this.activityDisplay.setActivityDisplay(this.item, this.activityDetail);
            if (this.activityDetail.length > 0) {
              this.isActivity = true;
            }
            ;
          }
          this.eventDetail = [];
          if (this.claims.P2.event !== void 0) {
            this.eventDisplay.setEventDisplay(this.item, this.eventDetail);
            if (this.eventDetail.length > 0) {
              this.isEvent = true;
            }
            ;
          }
          this.documentDetail = [];
          if (this.claims.P2.document !== void 0) {
            this.documentDisplay.setDocumentDisplay(this.item, this.documentDetail);
            ;
          }
          this.sourcesList = [];
          if (this.claims.P2.sources !== void 0) {
            this.sourcesDisplay.setSourcesDisplay(this.item, this.sourcesList);
            if (this.sourcesList.length > 0) {
              this.sources = this.item[0].claims.P2.sources;
              this.isSources = true;
            }
            ;
          }
          this.technicalities = [];
          this.technicalitiesDisplay.setTechnicalitiesDisplay(this.item, this.technicalities);
          this.iframes = [];
          this.iframesDisplay.setIframesDisplay(this.item, this.iframes);
          if (this.iframes.length > 0) {
            this.isIframes = true;
          }
          ;
          if (this.claims.P309 !== void 0) {
            if (this.claims.P309[0] !== void 0) {
              this.urlSafe1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P309[0].mainsnak.datavalue.value);
            }
            if (this.claims.P309[1] !== void 0) {
              this.urlSafe2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P309[1].mainsnak.datavalue.value);
            }
            if (this.claims.P309[2] !== void 0) {
              this.urlSafe3 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P309[2].mainsnak.datavalue.value);
            }
          }
          if (this.claims.P320 !== void 0) {
            if (this.claims.P320[0] !== void 0) {
              this.urlSafe4 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P320[0].mainsnak.datavalue.value);
            }
            if (this.claims.P320[1] !== void 0) {
              this.urlSafe5 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P320[1].mainsnak.datavalue.value);
            }
            if (this.claims.P320[2] !== void 0) {
              this.urlSafe6 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P320[2].mainsnak.datavalue.value);
            }
          }
          if (this.claims.P679 !== void 0) {
            if (this.item[0].claims.P679[0] !== void 0) {
              this.urlSafe7 = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframesDisplay.setHouseNumbersQuery(this.item[0].claims.P679[0].mainsnak.datavalue.value));
            }
            if (this.item[0].claims.P679[1] !== void 0) {
              this.urlSafe8 = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframesDisplay.setHouseNumbersQuery(this.item[0].claims.P679[1].mainsnak.datavalue.value));
            }
            if (this.item[0].claims.P679[2] !== void 0) {
              this.urlSafe9 = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframesDisplay.setHouseNumbersQuery(this.item[0].claims.P679[2].mainsnak.datavalue.value));
            }
          }
          if (this.claims.P693 !== void 0) {
            if (this.claims.P693[0] !== void 0) {
              this.urlSafe10 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P693[0].mainsnak.datavalue.value);
            }
            if (this.claims.P693[1] !== void 0) {
              this.urlSafe11 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P693[1].mainsnak.datavalue.value);
            }
            if (this.claims.P693[2] !== void 0) {
              this.urlSafe12 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P693[2].mainsnak.datavalue.value);
            }
          }
          if (this.claims.P720 !== void 0) {
            if (this.claims.P720[0] !== void 0) {
              this.urlSafe13 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P720[0].mainsnak.datavalue.value);
            }
            if (this.claims.P720[1] !== void 0) {
              this.urlSafe14 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P720[1].mainsnak.datavalue.value);
            }
            if (this.claims.P720[2] !== void 0) {
              this.urlSafe15 = this.sanitizer.bypassSecurityTrustResourceUrl(this.claims.P720[2].mainsnak.datavalue.value);
            }
          }
          this.externalLinks = [];
          this.externalLinksDisplay.setExternalLinksDisplay(this.item, this.externalLinks);
          if (this.externalLinks.length > 0) {
            this.isExternalLinks = true;
          }
          ;
          this.otherClaims = [];
          for (let i = 0; i < this.item[1].length; i++) {
            let P = this.item[1][i];
            this.otherClaims.push(this.claims[P]);
          }
          if (this.otherClaims.length > 0) {
            this.other = this.item[0].claims.P2.other;
            this.isOther = true;
          }
          ;
          this.mainList = [];
          if (this.claims.P2 === void 0) {
            this.mainList.push(this.claims.P3);
          }
          ;
          if (this.claims.P2 !== void 0) {
            this.mainTitle = this.claims.P2[0].mainsnak.label;
            this.mainList = this.lifeAndFamily.concat(this.locationAndContext, this.locationAndSituation, this.activityDetail, this.eventDetail, this.documentDetail, this.otherClaims);
          }
          if (this.mainList.length > 0) {
            this.isMain = true;
          }
          this.wikis = [];
          this.wikiDisplay.setWikiDisplay(this.item, this.wikis);
          if (this.wikis.length > 0) {
            this.isWikis = true;
          }
          ;
        }
        if (this.claims.P251 !== void 0) {
          if (this.claims.P251[0].mainsnak.datavalue.value !== void 0) {
            let a = this.transcript.transcript(this.claims.P251[0].mainsnak.datavalue.value);
            this.subscription3 = a.subscribe((res) => {
              Object.keys(res)[0] == "error" ? this.trans = "no transcription" : this.trans = res.parse.text;
              this.trans = this.changeTranscript.cleaning(this.trans);
            });
          }
        }
        if (this.claims.P251 === void 0) {
          this.trans = "";
        }
        this.isSpinner = false;
        if (this.claims.P150 || this.claims.P141 || this.claims.P142) {
          this.isFamilyTree = true;
        }
        if (this.claims.P233) {
          this.isStemma = true;
        }
      });
    });
  }
  preloadImage(url) {
    console.log("URL passed to preloadImage:", url);
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = url;
    console.log("Link element created:", link);
    document.head.appendChild(link);
  }
  onThumbnailLoad(picture) {
    console.log("Thumbnail loaded:", picture.thumbnail);
  }
  sparqlDisplay(u) {
    console.log(u);
    if (u) {
      if (u[0]) {
        this.sparqlSubject0 = u[0][0];
        this.sparqlData0 = u[0][1];
        this.isSparql0 = false;
        if (this.sparqlData0 !== void 0) {
          if (this.sparqlData0[0] !== void 0) {
            this.isSparql0 = true;
          }
        }
      }
      if (u[1] !== void 0) {
        this.sparqlSubject1 = u[1][0];
        this.sparqlData1 = u[1][1];
        this.isSparql1 = false;
        if (this.sparqlData1 !== void 0) {
          if (this.sparqlData1[0] !== void 0) {
            this.isSparql1 = true;
          }
        }
      }
      if (u[2] !== void 0) {
        this.sparqlSubject2 = u[2][0];
        this.sparqlData2 = u[2][1];
        this.isSparql2 = false;
        if (this.sparqlData2 !== void 0) {
          if (this.sparqlData2[0] !== void 0) {
            this.isSparql2 = true;
          }
        }
      }
      if (u[3] !== void 0) {
        this.sparqlSubject3 = u[3][0];
        if (u[3].osm_id) {
          this.sparqlSubject3 = "current address:";
          let label = { value: u[3].display_name };
          let osm_id = { id: "Q1188609" };
          let v = { item: osm_id, itemLabel: label };
          this.sparqlData3 = [v];
        } else
          this.sparqlData3 = u[3][1];
        this.isSparql3 = false;
        if (this.sparqlData3 !== void 0) {
          if (this.sparqlData3[0] !== void 0) {
            this.isSparql3 = true;
          }
        }
      }
      if (u[4] !== void 0) {
        this.sparqlSubject4 = u[4][0];
        console.log(this.sparqlSubject4);
        this.sparqlData4 = u[4][1];
        this.isSparql4 = false;
        if (this.sparqlData4 !== void 0) {
          if (this.sparqlData4[0] !== void 0) {
            this.isSparql4 = true;
          }
        }
      }
    }
  }
  qualifiersList(u) {
    for (let i = 0; i < u.length; i++) {
      if (u["'qualifiers-order'"] !== void 0) {
        let v = u["'qualifiers-order'"];
        for (let j = 0; j < v.length; j++) {
          let label = u.qualifiers.u[j][0].label;
          let value = u.qualifiers.u[j][0].datavalue.value;
        }
      }
    }
  }
  hideList() {
    if (document.getElementById("listing") != null) {
      document.getElementById("listing").style.visibility = "hidden";
    }
  }
  newSparqlAddress(address) {
    const newPrefix = "https://database.factgrid.de/sparql?query=";
    let oldPrefix = "https://database.factgrid.de/query/#";
    if (address.includes("embed.html")) {
      oldPrefix = "https://database.factgrid.de/query/embed.html#";
    }
    ;
    if (address !== void 0)
      address = address.replace(oldPrefix, newPrefix);
    return address;
  }
  listFromSparql(res) {
    if (res !== void 0) {
      if (res.results !== void 0) {
        for (let i = 0; i < res.results.bindings.length; i++) {
          res.results.bindings[i]["item"].id = res.results.bindings[i]["item"].value.replace("https://database.factgrid.de/entity/", "");
        }
        ;
      }
    }
    return res.results.bindings;
  }
  getUrl(u) {
    return this.sanitizer.bypassSecurityTrustUrl(u);
  }
  ngAfterViewInit() {
    this.list;
  }
  ngOnDestroy() {
    this.subscription0.unsubscribe();
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    if (this.subscription3 !== void 0) {
      this.subscription3.unsubscribe();
    }
    if (this.subscription4 !== void 0) {
      this.subscription4.unsubscribe();
    }
    if (this.subscription5 !== void 0) {
      this.subscription5.unsubscribe();
    }
    if (this.subscription6 !== void 0) {
      this.subscription6.unsubscribe();
    }
    if (this.subscription7 !== void 0) {
      this.subscription7.unsubscribe();
    }
  }
  static {
    this.\u0275fac = function DisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisplayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisplayComponent, selectors: [["app-display"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 3, consts: [["drawer", ""], ["rel", "stylesheet", "href", \u0275\u0275trustConstantResourceUrl`https://unpkg.com/leaflet@1.7.1/dist/leaflet.css`, "integrity", "sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==", "crossorigin", ""], ["href", \u0275\u0275trustConstantResourceUrl`https://fonts.googleapis.com/icon?family=Material+Icons`, "rel", "stylesheet"], [1, "center"], ["mat-button", "", "color", "primary", "routerLink", "/", 1, "mat-typography"], [1, "spinner"], ["diameter", "50", "mode", "indeterminate"], [1, "drawer-container"], ["mode", "push"], [1, "ground-div0"], [1, "icon", "mat-button", 2, "display", "flex", "align-items", "center"], [1, "blueButton"], ["mat-icon-button", "", 3, "click"], ["appearance", "outlined", 1, "mat-elevation-z12"], [1, "cardBackground"], [1, "listTitleStart"], [1, "subdivisionTitle"], [1, "drawer-background"], [1, "ground-div1"], [1, "parent"], [1, "child1"], [1, "matCardPadding"], [1, "itemTitle"], [1, "aliases", 3, "ngClass"], [1, "itemDescription"], [1, "propertyStyle"], [1, "percent4"], [3, "ngClass"], [3, "headerDetail"], [1, "matCardPadding", 3, "ngClass"], [3, "mainList", "mainTitle", "list"], [3, "trans"], [3, "education", "training"], [3, "careerAndActivities", "career"], [3, "sociabilityAndCulture", "sociability"], [3, "claims", "urlSafe1", "urlSafe2", "urlSafe3", "urlSafe4", "urlSafe5", "urlSafe6", "urlSafe7", "urlSafe8", "urlSafe9", "urlSafe10", "urlSafe11", "urlSafe12", "urlSafe13", "urlSafe14", "urlSafe15"], [3, "sparqlData", "sparqlSubject"], [3, "sourcesList", "sources"], [1, "ground-div2"], [1, "mat-button.mat-small"], [1, "ground-div2", 3, "ngClass"], [3, "technicalities", "classesList", "instancesList", "subclassesList", "natureOfList"], [1, "child2"], ["appearance", "outlined"], [1, "img2", 3, "ngClass"], ["appearance", "outlined", 1, "external-links"], [1, "externalLinksPadding"], [1, "divisionTitle"], [1, "externalLinksText"], [1, "header-spacer", 3, "ngClass"], ["appearance", "outlined", 1, "mat-elevation-z8"], [1, "itemSelected-mat-card"], [1, "selectedListTitle"], [4, "ngFor", "ngForOf"], [1, "internalLink", 3, "routerLink"], ["color", "primary", 3, "inline"], ["target", "_blank", "rel", "noopener", 3, "href"], [1, "img2"], ["mat-card-image", "", "loading", "lazy", "alt", "Image description", 3, "error", "click", "src"], ["mat-icon-button", "", 1, "icon", "whiteText", 3, "click"], [1, "icon", "whiteButton"], ["mat-icon-button", "", 1, "whiteText", 3, "click"], [1, "whiteButton"], ["mat-card-image", "", "loading", "lazy", "alt", "Image description", 3, "load", "error", "click", "src"], ["target", "_blank", 3, "href"], ["class", "selectedItemText", 4, "ngIf"], [1, "selectedItemText"], [3, "inline"]], template: function DisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "head");
        \u0275\u0275element(1, "link", 1)(2, "link", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "body")(4, "div", 3)(5, "button", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275template(8, DisplayComponent_Conditional_8_Template, 1, 0, "mat-spinner", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, DisplayComponent_Conditional_9_Template, 114, 74, "div");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.newSearch);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isSpinner ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.isSpinner ? 9 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      MatTabsModule,
      MatButtonModule,
      MatButton,
      MatIconButton,
      RouterLink,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSidenavModule,
      MatDrawer,
      MatDrawerContainer,
      MatDrawerContent,
      MatIconModule,
      MatIcon,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatCardImage,
      TextDisplayComponent,
      Sparql0DisplayComponent,
      Sparql1DisplayComponent,
      Sparql2DisplayComponent,
      Sparql3DisplayComponent,
      Sparql4DisplayComponent,
      ItemInfoComponent,
      MainDisplayComponent,
      HeaderDisplayComponent,
      SociabilityDisplayComponent,
      SourcesDisplayComponent,
      EducationDisplayComponent,
      CareerDisplayComponent,
      IframesDisplayComponent,
      JoinPipe
    ], styles: ['@charset "UTF-8";\n\n\n\nbody[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.drawer-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  border: 1px solid #555;\n}\n.parent[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media (max-width: 813px) {\n  .parent[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: column;\n  }\n}\n.img2[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-right: 15px;\n}\n.lazy-image[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n.lazy-image.loaded[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.child1[_ngcontent-%COMP%] {\n  flex: 2;\n  background-color: lightgrey !important;\n}\n@media (max-width: 813px) {\n  .child1[_ngcontent-%COMP%] {\n    flex-flow: column;\n    align-items: stretch;\n    background-color: lightgrey !important;\n  }\n}\n@media (min-width: 1280px) {\n  .child1[_ngcontent-%COMP%] {\n    flex: 3;\n    width: 75%;\n  }\n}\n.child2[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-flow: column;\n}\n.ground-div1[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: whitesmoke;\n  justify-content: flex-start;\n}\n.ground-div2[_ngcontent-%COMP%] {\n  background-color: rgb(155, 177, 225);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.itemTitle[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  margin-bottom: 10px;\n  font-size: 50px;\n  color: #283593;\n  line-height: 50px;\n}\n@media (max-width: 959.98px) {\n  .itemTitle[_ngcontent-%COMP%] {\n    font-size: 37px;\n    line-height: 45px;\n  }\n}\n.aliases[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 15px;\n  font-weight: 500;\n}\n.itemDescription[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\nmat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: contain;\n  width: 100%;\n  margin: 5px;\n}\n.itemSelected-mat-card[_ngcontent-%COMP%] {\n  height: fit-content;\n  background-color: rgb(99, 98, 98) !important;\n  margin-bottom: 4px;\n  margin-right: 2px;\n  margin-left: 2px;\n}\n.external-links[_ngcontent-%COMP%] {\n  height: fit-content;\n  background-color: rgb(250, 235, 187);\n  margin-bottom: 4px;\n  margin-right: 2px;\n  margin-left: 2px;\n}\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.map-container[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 30px;\n}\n.map-frame[_ngcontent-%COMP%] {\n  border: 2px solid black;\n  height: 100%;\n}\n.img[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 100px;\n  margin: 10px;\n}\n.hide-division[_ngcontent-%COMP%] {\n  display: none;\n}\n.show-division[_ngcontent-%COMP%] {\n  display: block;\n}\n.mat-list-base.inline-list[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 2 px;\n}\n.blue-text[_ngcontent-%COMP%] {\n  color: #283593;\n}\n.blue-text2[_ngcontent-%COMP%] {\n  color: #283593;\n  font-size: 120%;\n  font-weight: 600;\n}\n.commonsMediaStyle[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 10px;\n  text-overflow: ellipsis;\n  word-break: normal;\n}\n.details[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  overflow-wrap: break-word;\n  padding: 0px;\n}\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width[_ngcontent-%COMP%] {\n  width: 20%;\n}\nul.inline[_ngcontent-%COMP%] {\n  display: inline;\n}\n.percent[_ngcontent-%COMP%] {\n  font-size: 60%;\n}\n.percent3[_ngcontent-%COMP%] {\n  padding: 15px;\n  font-size: 150%;\n  font-weight: 321;\n}\n.percent4[_ngcontent-%COMP%] {\n  color: #3F51B5;\n  margin-bottom: 2px;\n  font-size: 140%;\n  font-weight: 400;\n}\n.mw-headline[_ngcontent-%COMP%] {\n  color: #3F51B5;\n  font-weight: 550;\n}\n.referenceProperty[_ngcontent-%COMP%] {\n  color: #AD1457;\n}\n#leaflet-map[_ngcontent-%COMP%] {\n  flex: 5;\n  height: 100%;\n  width: 100%;\n}\nbutton[_ngcontent-%COMP%] {\n  font-size: 10px;\n  height: auto;\n  width: 170px;\n  line-height: 16px !important;\n  padding: 2px 2px 2px 10px !important;\n  margin-right: 5px;\n}\nbutton-content[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 30px !important;\n}\n  .mat-button-focus-overlay {\n  background-color: transparent !important;\n}\n.mat-mdc-button.mat-small[_ngcontent-%COMP%] {\n  min-width: 10px !important;\n  max-width: 20px !important;\n}\n.example-additional-selection[_ngcontent-%COMP%] {\n  font-size: 0.5em;\n}\n/*# sourceMappingURL=display.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisplayComponent, { className: "DisplayComponent", filePath: "src\\app\\display\\display.component.ts", lineNumber: 68 });
})();
export {
  DisplayComponent
};
//# sourceMappingURL=display.component-OW6IERFC.js.map
