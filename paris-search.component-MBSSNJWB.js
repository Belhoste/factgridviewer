import {
  SetLanguageService
} from "./chunk-G6T4JQVM.js";
import {
  MatTableModule
} from "./chunk-VARWFSSY.js";
import {
  BehaviorSubject,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  Injectable,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardModule,
  MatFormField,
  MatFormFieldModule,
  MatIcon,
  MatIconModule,
  MatInput,
  MatInputModule,
  NgControlStatus,
  Observable,
  ReactiveFormsModule,
  RequestService,
  Router,
  RouterLink,
  RouterModule,
  SelectedLangService,
  debounceTime,
  filter,
  inject,
  map,
  setClassMetadata,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtrustConstantResourceUrl
} from "./chunk-PQMJ5DTB.js";

// src/app/paris-search/services/paris-database.service.ts
var _ParisDatabaseService = class _ParisDatabaseService {
  constructor() {
    this.seed = ["jaw", "jar", "toy", "troy", "hip", "hop"];
    this.data$ = new BehaviorSubject(this.seed);
    this.data = this.data$.asObservable();
  }
  // this.data.subscribe(res =>console.log(res));
  // enable adding, and emitting fresh dataset
  addData(x) {
    const newData = this.data$.getValue().concat(x);
    this.data$.next(newData);
  }
};
_ParisDatabaseService.\u0275fac = function ParisDatabaseService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParisDatabaseService)();
};
_ParisDatabaseService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParisDatabaseService, factory: _ParisDatabaseService.\u0275fac, providedIn: "root" });
var ParisDatabaseService = _ParisDatabaseService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParisDatabaseService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/paris-search/paris-search.component.ts
var _c0 = () => [""];
var _c1 = (a0) => ["/item", a0];
function _forTrack0($index, $item) {
  return this.trackById($item);
}
function ParisSearchComponent_Conditional_12_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", item_r2.description);
  }
}
function ParisSearchComponent_Conditional_12_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-icon-button", 10);
    \u0275\u0275listener("click", function ParisSearchComponent_Conditional_12_For_3_Template_mat_icon_button_click_3_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openItem(item_r2));
    });
    \u0275\u0275elementStart(4, "mat-icon", 11);
    \u0275\u0275text(5, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(6, " \xA0\xA0\xA0 ");
    \u0275\u0275conditionalCreate(7, ParisSearchComponent_Conditional_12_For_3_Conditional_7_Template, 2, 1, "span");
    \u0275\u0275element(8, "hr");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r2.label, "\xA0");
    \u0275\u0275advance(2);
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(item_r2.description ? 7 : -1);
  }
}
function ParisSearchComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275repeaterCreate(2, ParisSearchComponent_Conditional_12_For_3_Template, 9, 3, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.items);
  }
}
function ParisSearchComponent_Conditional_13_For_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 20)(3, "mat-icon", 21);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const selectedItem_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", selectedItem_r4.label, "\xA0 ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c1, selectedItem_r4.value.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function ParisSearchComponent_Conditional_13_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275conditionalCreate(1, ParisSearchComponent_Conditional_13_For_17_Conditional_1_Template, 6, 5, "span", 19);
    \u0275\u0275element(2, "br");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const selectedItem_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(selectedItem_r4 ? 1 : -1);
  }
}
function ParisSearchComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 6)(2, "a", 12);
    \u0275\u0275text(3, " sparql query ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\xA0\xA0|\xA0\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 13);
    \u0275\u0275text(7, "FactGrid");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 14)(9, "mat-card", 15)(10, "div", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 17);
    \u0275\u0275element(13, "hr");
    \u0275\u0275elementStart(14, "mat-card-content")(15, "div");
    \u0275\u0275repeaterCreate(16, ParisSearchComponent_Conditional_13_For_17_Template, 3, 1, "div", 18, _forTrack0, true);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formerVisitsTitle);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.selectedParisItemsList);
  }
}
var _ParisSearchComponent = class _ParisSearchComponent {
  constructor() {
    this.dataService = inject(ParisDatabaseService);
    this.changeDetector = inject(ChangeDetectorRef);
    this.request = inject(RequestService);
    this.setLanguage = inject(SetLanguageService);
    this.lang = inject(SelectedLangService);
    this.router = inject(Router);
    this.searchInput = new FormControl();
    this.isDisplay = false;
    this.data$ = new Observable();
    this.searchQuery$ = new BehaviorSubject("");
    this.items = [];
    this.baseGetURL = "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=";
    this.getUrlSuffix = "&format=json&origin=*";
    this.formerVisitsTitle = "you have visited:";
    this.selectedParisItemsList = (JSON.parse(localStorage.getItem("selectedItems")) || []).filter((item) => item && item.value && item.value.id);
  }
  openItem(item) {
    console.log("openItem called with:", item);
    sessionStorage.setItem("from", "paris-search");
    this.router.navigate(["/item", item.id], { state: { from: "paris-search" } });
  }
  ngOnInit() {
    this.formerVisitsTitle = this.lang.getTranslation("$1", this.lang.selectedLang);
    console.log("selectedParisItemsList:", this.selectedParisItemsList);
    this.labels = this.searchInput.valueChanges.pipe(
      debounceTime(400),
      map((res) => "Paris, " + res),
      tap((res) => console.log(res)),
      //switchMap(label => this.request.searchItem(label, this.selectedLang)),
      switchMap((label) => this.request.searchItem(label, this.lang.selectedLang)),
      map((res) => this.createList(res)),
      map((res) => res == "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=&format=json&origin=*" ? "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=Q220375&format=json&origin=*" : res),
      debounceTime(200),
      switchMap((url) => this.request.getItem(url)),
      //  takeWhile (res => res !== undefined),
      filter((res) => res !== void 0),
      filter((res) => res.entities !== void 0 && res.entities !== null),
      // filter (res => res.entities !== null),
      map((res) => Object.values(res.entities))
    ).subscribe((re) => {
      this.items = this.setLanguage.item(re, this.lang.selectedLang);
      this.isDisplay = true;
      if (this.items[0].id == "Q220375") {
        this.isDisplay = false;
      }
      ;
      this.changeDetector.detectChanges();
    });
  }
  createList(re) {
    let list = "";
    let url = "";
    let arr = re.search;
    if (arr === void 0) {
      arr = [];
    } else {
      arr = arr;
    }
    ;
    for (let i = 0; i < arr.length; i++) {
      list = list + "|" + arr[i].id;
    }
    ;
    list = list.slice(1);
    url = this.baseGetURL + list + this.getUrlSuffix;
    return url;
  }
  addParis(re) {
    re = "Paris, " + re;
  }
  trackById(index, item) {
    return item && item.value ? item.value.id : index;
  }
  ngOnDestroy() {
    this.labels.unsubscribe();
  }
};
_ParisSearchComponent.\u0275fac = function ParisSearchComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParisSearchComponent)();
};
_ParisSearchComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParisSearchComponent, selectors: [["app-paris-search"]], decls: 14, vars: 3, consts: [["href", \u0275\u0275trustConstantResourceUrl`https://fonts.googleapis.com/icon?family=Material+Icons`, "rel", "stylesheet"], [1, "cardBackground"], [1, "bigTitle"], ["appearance", "outlined", 1, "mat-elevation-z12"], [1, "search-center2"], ["matInput", "", "placeholder", "Ex. rue de la Paix", "value", "rue de la Paix", 3, "formControl"], [1, "search-center"], [1, "searchListSize"], [1, "details"], [1, "search-label"], [1, "internalLink", 3, "click"], ["color", "primary", 3, "inline"], ["href", "https://database.factgrid.de/query/#%23model%0A%0ASELECT%20%3Fitem%20%3Fviewer%20%3FitemLabel%20%20WHERE%20%7B%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%20%20%3Fitem%20wdt%3AP2%20wd%3AQ7%3B%0A%20%20%20%20%20%20%20%20wdt%3AP247%20wd%3AQ24708.%0A%20%20BIND%28STRAFTER%28STR%28%3Fitem%29%2C%20STR%28wd%3A%29%29%20AS%20%3FitemId%29%0A%20%20BIND%28IRI%28CONCAT%28%22https%3A%2F%2Fdatabase.factgrid.de%2Fviewer%2Fitem%2F%22%2C%20%3FitemId%29%29%20AS%20%3Fviewer%29%0A%7D%0A"], [3, "routerLink"], [1, "search-itemSelected"], ["appearance", "outlined", 1, "search-itemSelected-mat-card"], [1, "selectedListTitle2"], [1, "selectedItemSize"], [1, "labelTitlePadding"], [1, "selectedItemText"], [1, "internalLink", 3, "routerLink"], [1, "whiteButton", 3, "inline"]], template: function ParisSearchComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "head");
    \u0275\u0275element(1, "link", 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "body")(3, "div", 1)(4, "div", 2);
    \u0275\u0275text(5, "Paris on FactGrid");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-card", 3)(7, "mat-card-content")(8, "div", 4)(9, "mat-form-field");
    \u0275\u0275element(10, "input", 5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 6);
    \u0275\u0275conditionalCreate(12, ParisSearchComponent_Conditional_12_Template, 4, 0, "div", 7);
    \u0275\u0275conditionalCreate(13, ParisSearchComponent_Conditional_13_Template, 18, 3, "div");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275property("formControl", ctx.searchInput);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isDisplay == true ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isDisplay == false ? 13 : -1);
  }
}, dependencies: [
  CommonModule,
  RouterModule,
  RouterLink,
  ReactiveFormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  FormControlDirective,
  FormsModule,
  MatInputModule,
  MatInput,
  MatFormField,
  MatFormFieldModule,
  MatTableModule,
  MatIconModule,
  MatIcon,
  MatButtonModule,
  MatCardModule,
  MatCard,
  MatCardContent
], styles: ["\n\n.example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n.example-header[_ngcontent-%COMP%] {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n.mat-table[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 500px;\n}\n.search-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.search-center2[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n}\n.search-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.search-itemSelected[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.selectedItemSize[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=paris-search.component.css.map */"] });
var ParisSearchComponent = _ParisSearchComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParisSearchComponent, [{
    type: Component,
    args: [{ selector: "app-paris-search", standalone: true, imports: [
      CommonModule,
      RouterModule,
      ReactiveFormsModule,
      FormsModule,
      MatInputModule,
      MatFormFieldModule,
      MatTableModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule
    ], template: `<head>\r
\r
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"\r
        rel="stylesheet">\r
\r
</head>\r
\r
<body>\r
\r
\r
\r
\r
<div class="cardBackground">\r
     <div class="bigTitle">Paris on FactGrid</div>\r
</div>\r
\r
<mat-card appearance="outlined" class=mat-elevation-z12>\r
  <mat-card-content>\r
    <div class="search-center2">\r
      <mat-form-field>\r
        <input matInput placeholder="Ex. rue de la Paix" value="rue de la Paix" [formControl]="searchInput">\r
      </mat-form-field>\r
    </div>\r
  </mat-card-content>\r
\r
  <div class="search-center">\r
    @if (isDisplay == true) {\r
    <div class="searchListSize">\r
      <!--  class="searchListSize" seems to be useless -->\r
      <div class="details">\r
        @for (item of items; track item) {\r
        <div>\r
          <span class="search-label">{{item.label}}&nbsp;</span>\r
          <mat-icon-button class="internalLink" (click)="openItem(item)">\r
            <mat-icon color="primary" [inline]="true">open_in_new</mat-icon>\r
          </mat-icon-button>\r
          &nbsp;&nbsp;&nbsp;\r
          @if (item.description) {\r
          <span>, {{item.description }}</span>\r
          }\r
          <hr>\r
        </div>\r
        }\r
      </div>\r
    </div>\r
    }\r
\r
    @if (isDisplay == false) {\r
    <div>\r
      <div class="search-center">\r
        <a href="https://database.factgrid.de/query/#%23model%0A%0ASELECT%20%3Fitem%20%3Fviewer%20%3FitemLabel%20%20WHERE%20%7B%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%20%20%3Fitem%20wdt%3AP2%20wd%3AQ7%3B%0A%20%20%20%20%20%20%20%20wdt%3AP247%20wd%3AQ24708.%0A%20%20BIND%28STRAFTER%28STR%28%3Fitem%29%2C%20STR%28wd%3A%29%29%20AS%20%3FitemId%29%0A%20%20BIND%28IRI%28CONCAT%28%22https%3A%2F%2Fdatabase.factgrid.de%2Fviewer%2Fitem%2F%22%2C%20%3FitemId%29%29%20AS%20%3Fviewer%29%0A%7D%0A">\r
          sparql query\r
        </a>\r
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>\r
        <a [routerLink]="['']">FactGrid</a>  <!-- new route -->\r
      </div>\r
      <div class="search-itemSelected">\r
        <mat-card appearance="outlined" class="search-itemSelected-mat-card">\r
          <div class="selectedListTitle2">{{formerVisitsTitle}}</div>\r
          <div class="selectedItemSize">\r
            <hr>\r
            <mat-card-content>\r
              <div>\r
                @for (selectedItem of selectedParisItemsList; track trackById(selectedItem)) {\r
                <div class="labelTitlePadding">\r
                  @if (selectedItem) {\r
                  <span class="selectedItemText">\r
                    {{selectedItem.label}}&nbsp;\r
                    <mat-icon-button class="internalLink" [routerLink]="['/item', selectedItem.value.id]"><mat-icon class="whiteButton" [inline]="true">open_in_new</mat-icon></mat-icon-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r
                  </span>\r
                  }\r
                  <br>\r
                </div>\r
                }\r
              </div>\r
            </mat-card-content>\r
          </div>\r
        </mat-card>\r
      </div>\r
    </div>\r
    }\r
  </div>\r
</mat-card>\r
\r
</body>\r
\r
`, styles: ["/* src/app/paris-search/paris-search.component.scss */\n.example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n.search-center {\n  display: flex;\n  justify-content: center;\n}\n.search-center2 {\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n}\n.search-label {\n  font-weight: bold;\n}\n.search-itemSelected {\n  margin-top: 50px;\n}\n.selectedItemSize {\n  font-size: 14px;\n}\n/*# sourceMappingURL=paris-search.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParisSearchComponent, { className: "ParisSearchComponent", filePath: "src/app/paris-search/paris-search.component.ts", lineNumber: 46 });
})();
export {
  ParisSearchComponent
};
//# sourceMappingURL=paris-search.component-MBSSNJWB.js.map
