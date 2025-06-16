import {
  ArrayToCsvService
} from "./chunk-V2H42VZO.js";
import {
  MatSlideToggleModule
} from "./chunk-TTUJAYGQ.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-EQ7WBX6U.js";
import {
  MatProgressSpinnerModule,
  MatTooltip,
  MatTooltipModule
} from "./chunk-S5XWBLUX.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "./chunk-VARWFSSY.js";
import {
  AriaDescriber,
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  Directive,
  ENTER,
  ElementRef,
  EventEmitter,
  FocusMonitor,
  FormsModule,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  LiveAnnouncer,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardModule,
  MatCommonModule,
  MatFormField,
  MatFormFieldModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatInput,
  MatInputModule,
  NgModule,
  Optional,
  Output,
  ReactiveFormsModule,
  ReplaySubject,
  RequestService,
  RouterLink,
  RouterModule,
  SPACE,
  SelectedLangService,
  SkipSelf,
  Subject,
  ViewChild,
  ViewEncapsulation,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  _animationsDisabled,
  booleanAttribute,
  combineLatest,
  inject,
  map,
  merge,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtrustConstantResourceUrl,
  ɵɵviewQuery
} from "./chunk-PQMJ5DTB.js";

// src/app/harmonia-universalis/services/hu-database.service.ts
var _HuDatabaseService = class _HuDatabaseService {
  constructor() {
    this.request = inject(RequestService);
  }
  sparqlBuilding(lang) {
    let u = "https://database.factgrid.de/query/#%23biblio%0ASELECT%20DISTINCT%20%3Ftitle%20%3FtitleLabel%20%3Fauthor%20%3FauthorLabel%20%3Fdate%20%3Flocation%20%3FlocationLabel%20%3Fcountry%20%3FcountryLabel%0AWHERE%20%0A%7B%20VALUES%20%3Fc%20%7B%20wd%3AQ21925%20wd%3AQ11317%20%7D%0A%20%20%3Ftitle%20wdt%3AP2%20wd%3AQ20%3B%0A%20%20%20%20%20%20%20%20wdt%3AP243%20wd%3AQ172203%3B%0A%20%20%20%20%20%20%20%20wdt%3AP21%20%3Fauthor%3B%0A%20%20%20%20%20%20%20%20wdt%3AP222%20%3Fdate%3B%0A%20%20%20%20%20%20%20%20wdt%3AP241%20%3Flocation%20.%0A%20%20%3Fcountry%20%5Ewdt%3AP297%20%3Flocation%3B%0A%20%20%20%20%20%20%20%20%20%20wdt%3AP2%20%20%20%3Fc%20%20" + lang;
    return u;
  }
  listFromSparql(res) {
    if (res !== void 0) {
      if (res.results !== void 0) {
        for (let i = 0; i < res.results.bindings.length; i++) {
          res.results.bindings[i]["author"].id = res.results.bindings[i]["author"].value.replace("https://database.factgrid.de/entity/", "");
          res.results.bindings[i]["author"].label = res.results.bindings[i]["authorLabel"].value;
          res.results.bindings[i]["title"].id = res.results.bindings[i]["title"].value.replace("https://database.factgrid.de/entity/", "");
          res.results.bindings[i]["title"].label = res.results.bindings[i]["titleLabel"].value;
          res.results.bindings[i]["location"].id = res.results.bindings[i]["location"].value.replace("https://database.factgrid.de/entity/", "");
          res.results.bindings[i]["location"].label = res.results.bindings[i]["locationLabel"].value;
          res.results.bindings[i]["country"].id = res.results.bindings[i]["country"].value.replace("https://database.factgrid.de/entity/", "");
          res.results.bindings[i]["country"].label = res.results.bindings[i]["countryLabel"].value;
          res.results.bindings[i]["date"].value = res.results.bindings[i]["date"].value.slice(0, 4);
        }
        ;
      }
      ;
    }
    return res.results.bindings;
  }
  databaseToDisplay(sparql) {
    let sparqlResult;
    let selectedSparql = this.newSparqlAdress(sparql);
    sparqlResult = this.request.getList(selectedSparql);
    return sparqlResult;
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
  databaseToDownload(data) {
    let dataToDownload = [["author", "author.id", "title", "title.id", "location", "location.id", "country", "country.id", "date"]];
    for (let i = 0; i < data.length; i++) {
      dataToDownload[i + 1] = [data[i].author.label, data[i].author.id, data[i].title.label, data[i].author.id, data[i].location.label, data[i].location.id, data[i].country.label, data[i].country.id, data[i].date.value];
    }
    console.log(dataToDownload);
    return dataToDownload;
  }
};
_HuDatabaseService.\u0275fac = function HuDatabaseService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HuDatabaseService)();
};
_HuDatabaseService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HuDatabaseService, factory: _HuDatabaseService.\u0275fac, providedIn: "root" });
var HuDatabaseService = _HuDatabaseService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HuDatabaseService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/sort.mjs
var _c0 = ["mat-sort-header", ""];
var _c1 = ["*"];
function MatSortHeader_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 3);
    \u0275\u0275element(2, "path", 4);
    \u0275\u0275elementEnd()();
  }
}
function getSortDuplicateSortableIdError(id) {
  return Error(`Cannot have two MatSortables with the same id (${id}).`);
}
function getSortHeaderNotContainedWithinSortError() {
  return Error(`MatSortHeader must be placed within a parent element with the MatSort directive.`);
}
function getSortHeaderMissingIdError() {
  return Error(`MatSortHeader must be provided with a unique id.`);
}
function getSortInvalidDirectionError(direction) {
  return Error(`${direction} is not a valid sort direction ('asc' or 'desc').`);
}
var MAT_SORT_DEFAULT_OPTIONS = new InjectionToken("MAT_SORT_DEFAULT_OPTIONS");
var MatSort = class _MatSort {
  _defaultOptions;
  _initializedStream = new ReplaySubject(1);
  /** Collection of all registered sortables that this directive manages. */
  sortables = /* @__PURE__ */ new Map();
  /** Used to notify any child components listening to state changes. */
  _stateChanges = new Subject();
  /** The id of the most recently sorted MatSortable. */
  active;
  /**
   * The direction to set when an MatSortable is initially sorted.
   * May be overridden by the MatSortable's sort start.
   */
  start = "asc";
  /** The sort direction of the currently active MatSortable. */
  get direction() {
    return this._direction;
  }
  set direction(direction) {
    if (direction && direction !== "asc" && direction !== "desc" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getSortInvalidDirectionError(direction);
    }
    this._direction = direction;
  }
  _direction = "";
  /**
   * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
   * May be overridden by the MatSortable's disable clear input.
   */
  disableClear;
  /** Whether the sortable is disabled. */
  disabled = false;
  /** Event emitted when the user changes either the active sort or sort direction. */
  sortChange = new EventEmitter();
  /** Emits when the paginator is initialized. */
  initialized = this._initializedStream;
  constructor(_defaultOptions) {
    this._defaultOptions = _defaultOptions;
  }
  /**
   * Register function to be used by the contained MatSortables. Adds the MatSortable to the
   * collection of MatSortables.
   */
  register(sortable) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!sortable.id) {
        throw getSortHeaderMissingIdError();
      }
      if (this.sortables.has(sortable.id)) {
        throw getSortDuplicateSortableIdError(sortable.id);
      }
    }
    this.sortables.set(sortable.id, sortable);
  }
  /**
   * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
   * collection of contained MatSortables.
   */
  deregister(sortable) {
    this.sortables.delete(sortable.id);
  }
  /** Sets the active sort id and determines the new sort direction. */
  sort(sortable) {
    if (this.active != sortable.id) {
      this.active = sortable.id;
      this.direction = sortable.start ? sortable.start : this.start;
    } else {
      this.direction = this.getNextSortDirection(sortable);
    }
    this.sortChange.emit({
      active: this.active,
      direction: this.direction
    });
  }
  /** Returns the next sort direction of the active sortable, checking for potential overrides. */
  getNextSortDirection(sortable) {
    if (!sortable) {
      return "";
    }
    const disableClear = sortable?.disableClear ?? this.disableClear ?? !!this._defaultOptions?.disableClear;
    let sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);
    let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
    if (nextDirectionIndex >= sortDirectionCycle.length) {
      nextDirectionIndex = 0;
    }
    return sortDirectionCycle[nextDirectionIndex];
  }
  ngOnInit() {
    this._initializedStream.next();
  }
  ngOnChanges() {
    this._stateChanges.next();
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._initializedStream.complete();
  }
  static \u0275fac = function MatSort_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSort)(\u0275\u0275directiveInject(MAT_SORT_DEFAULT_OPTIONS, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSort,
    selectors: [["", "matSort", ""]],
    hostAttrs: [1, "mat-sort"],
    inputs: {
      active: [0, "matSortActive", "active"],
      start: [0, "matSortStart", "start"],
      direction: [0, "matSortDirection", "direction"],
      disableClear: [2, "matSortDisableClear", "disableClear", booleanAttribute],
      disabled: [2, "matSortDisabled", "disabled", booleanAttribute]
    },
    outputs: {
      sortChange: "matSortChange"
    },
    exportAs: ["matSort"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSort, [{
    type: Directive,
    args: [{
      selector: "[matSort]",
      exportAs: "matSort",
      host: {
        "class": "mat-sort"
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_SORT_DEFAULT_OPTIONS]
    }]
  }], {
    active: [{
      type: Input,
      args: ["matSortActive"]
    }],
    start: [{
      type: Input,
      args: ["matSortStart"]
    }],
    direction: [{
      type: Input,
      args: ["matSortDirection"]
    }],
    disableClear: [{
      type: Input,
      args: [{
        alias: "matSortDisableClear",
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "matSortDisabled",
        transform: booleanAttribute
      }]
    }],
    sortChange: [{
      type: Output,
      args: ["matSortChange"]
    }]
  });
})();
function getSortDirectionCycle(start, disableClear) {
  let sortOrder = ["asc", "desc"];
  if (start == "desc") {
    sortOrder.reverse();
  }
  if (!disableClear) {
    sortOrder.push("");
  }
  return sortOrder;
}
var MatSortHeaderIntl = class _MatSortHeaderIntl {
  /**
   * Stream that emits whenever the labels here are changed. Use this to notify
   * components if the labels have changed after initialization.
   */
  changes = new Subject();
  static \u0275fac = function MatSortHeaderIntl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSortHeaderIntl)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatSortHeaderIntl,
    factory: _MatSortHeaderIntl.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSortHeaderIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatSortHeaderIntl();
}
var MAT_SORT_HEADER_INTL_PROVIDER = {
  // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
  provide: MatSortHeaderIntl,
  deps: [[new Optional(), new SkipSelf(), MatSortHeaderIntl]],
  useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
};
var MatSortHeader = class _MatSortHeader {
  _intl = inject(MatSortHeaderIntl);
  _sort = inject(MatSort, {
    optional: true
  });
  _columnDef = inject("MAT_SORT_HEADER_COLUMN_DEF", {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _focusMonitor = inject(FocusMonitor);
  _elementRef = inject(ElementRef);
  _ariaDescriber = inject(AriaDescriber, {
    optional: true
  });
  _renderChanges;
  _animationsDisabled = _animationsDisabled();
  /**
   * Indicates which state was just cleared from the sort header.
   * Will be reset on the next interaction. Used for coordinating animations.
   */
  _recentlyCleared = signal(null);
  /**
   * The element with role="button" inside this component's view. We need this
   * in order to apply a description with AriaDescriber.
   */
  _sortButton;
  /**
   * ID of this sort header. If used within the context of a CdkColumnDef, this will default to
   * the column's name.
   */
  id;
  /** Sets the position of the arrow that displays when sorted. */
  arrowPosition = "after";
  /** Overrides the sort start value of the containing MatSort for this MatSortable. */
  start;
  /** whether the sort header is disabled. */
  disabled = false;
  /**
   * Description applied to MatSortHeader's button element with aria-describedby. This text should
   * describe the action that will occur when the user clicks the sort header.
   */
  get sortActionDescription() {
    return this._sortActionDescription;
  }
  set sortActionDescription(value) {
    this._updateSortActionDescription(value);
  }
  // Default the action description to "Sort" because it's better than nothing.
  // Without a description, the button's label comes from the sort header text content,
  // which doesn't give any indication that it performs a sorting operation.
  _sortActionDescription = "Sort";
  /** Overrides the disable clear value of the containing MatSort for this MatSortable. */
  disableClear;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const defaultOptions = inject(MAT_SORT_DEFAULT_OPTIONS, {
      optional: true
    });
    if (!this._sort && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getSortHeaderNotContainedWithinSortError();
    }
    if (defaultOptions?.arrowPosition) {
      this.arrowPosition = defaultOptions?.arrowPosition;
    }
  }
  ngOnInit() {
    if (!this.id && this._columnDef) {
      this.id = this._columnDef.name;
    }
    this._sort.register(this);
    this._renderChanges = merge(this._sort._stateChanges, this._sort.sortChange).subscribe(() => this._changeDetectorRef.markForCheck());
    this._sortButton = this._elementRef.nativeElement.querySelector(".mat-sort-header-container");
    this._updateSortActionDescription(this._sortActionDescription);
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe(() => this._recentlyCleared.set(null));
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._sort.deregister(this);
    this._renderChanges?.unsubscribe();
    if (this._sortButton) {
      this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
    }
  }
  /** Triggers the sort on this sort header and removes the indicator hint. */
  _toggleOnInteraction() {
    if (!this._isDisabled()) {
      const wasSorted = this._isSorted();
      const prevDirection = this._sort.direction;
      this._sort.sort(this);
      this._recentlyCleared.set(wasSorted && !this._isSorted() ? prevDirection : null);
    }
  }
  _handleKeydown(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      event.preventDefault();
      this._toggleOnInteraction();
    }
  }
  /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */
  _isSorted() {
    return this._sort.active == this.id && (this._sort.direction === "asc" || this._sort.direction === "desc");
  }
  _isDisabled() {
    return this._sort.disabled || this.disabled;
  }
  /**
   * Gets the aria-sort attribute that should be applied to this sort header. If this header
   * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
   * says that the aria-sort property should only be present on one header at a time, so removing
   * ensures this is true.
   */
  _getAriaSortAttribute() {
    if (!this._isSorted()) {
      return "none";
    }
    return this._sort.direction == "asc" ? "ascending" : "descending";
  }
  /** Whether the arrow inside the sort header should be rendered. */
  _renderArrow() {
    return !this._isDisabled() || this._isSorted();
  }
  _updateSortActionDescription(newDescription) {
    if (this._sortButton) {
      this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
      this._ariaDescriber?.describe(this._sortButton, newDescription);
    }
    this._sortActionDescription = newDescription;
  }
  static \u0275fac = function MatSortHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSortHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSortHeader,
    selectors: [["", "mat-sort-header", ""]],
    hostAttrs: [1, "mat-sort-header"],
    hostVars: 3,
    hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatSortHeader_click_HostBindingHandler() {
          return ctx._toggleOnInteraction();
        })("keydown", function MatSortHeader_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() {
          return ctx._recentlyCleared.set(null);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-sort", ctx._getAriaSortAttribute());
        \u0275\u0275classProp("mat-sort-header-disabled", ctx._isDisabled());
      }
    },
    inputs: {
      id: [0, "mat-sort-header", "id"],
      arrowPosition: "arrowPosition",
      start: "start",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      sortActionDescription: "sortActionDescription",
      disableClear: [2, "disableClear", "disableClear", booleanAttribute]
    },
    exportAs: ["matSortHeader"],
    attrs: _c0,
    ngContentSelectors: _c1,
    decls: 4,
    vars: 17,
    consts: [[1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], [1, "mat-sort-header-arrow"], ["viewBox", "0 -960 960 960", "focusable", "false", "aria-hidden", "true"], ["d", "M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],
    template: function MatSortHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(3, MatSortHeader_Conditional_3_Template, 3, 0, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition === "before")("mat-sort-header-descending", ctx._sort.direction === "desc")("mat-sort-header-ascending", ctx._sort.direction === "asc")("mat-sort-header-recently-cleared-ascending", ctx._recentlyCleared() === "asc")("mat-sort-header-recently-cleared-descending", ctx._recentlyCleared() === "desc")("mat-sort-header-animations-disabled", ctx._animationsDisabled);
        \u0275\u0275attribute("tabindex", ctx._isDisabled() ? null : 0)("role", ctx._isDisabled() ? null : "button");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx._renderArrow() ? 3 : -1);
      }
    },
    styles: [".mat-sort-header{cursor:pointer}.mat-sort-header-disabled{cursor:default}.mat-sort-header-container{display:flex;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}@keyframes _mat-sort-header-recently-cleared-ascending{from{transform:translateY(0);opacity:1}to{transform:translateY(-25%);opacity:0}}@keyframes _mat-sort-header-recently-cleared-descending{from{transform:translateY(0) rotate(180deg);opacity:1}to{transform:translateY(25%) rotate(180deg);opacity:0}}.mat-sort-header-arrow{height:12px;width:12px;position:relative;transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1),opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;overflow:visible;color:var(--mat-sort-arrow-color, var(--mat-sys-on-surface))}.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow,.mat-sort-header.cdk-program-focused .mat-sort-header-arrow,.mat-sort-header:hover .mat-sort-header-arrow{opacity:.54}.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow{opacity:1}.mat-sort-header-descending .mat-sort-header-arrow{transform:rotate(180deg)}.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow{transform:translateY(-25%)}.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow{transition:none;animation:_mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards}.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow{transition:none;animation:_mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards}.mat-sort-header-animations-disabled .mat-sort-header-arrow{transition-duration:0ms;animation-duration:0ms}.mat-sort-header-arrow svg{width:24px;height:24px;fill:currentColor;position:absolute;top:50%;left:50%;margin:-12px 0 0 -12px;transform:translateZ(0)}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSortHeader, [{
    type: Component,
    args: [{
      selector: "[mat-sort-header]",
      exportAs: "matSortHeader",
      host: {
        "class": "mat-sort-header",
        "(click)": "_toggleOnInteraction()",
        "(keydown)": "_handleKeydown($event)",
        "(mouseleave)": "_recentlyCleared.set(null)",
        "[attr.aria-sort]": "_getAriaSortAttribute()",
        "[class.mat-sort-header-disabled]": "_isDisabled()"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<!--
  We set the \`tabindex\` on an element inside the table header, rather than the header itself,
  because of a bug in NVDA where having a \`tabindex\` on a \`th\` breaks keyboard navigation in the
  table (see https://github.com/nvaccess/nvda/issues/7718). This allows for the header to both
  be focusable, and have screen readers read out its \`aria-sort\` state. We prefer this approach
  over having a button with an \`aria-label\` inside the header, because the button's \`aria-label\`
  will be read out as the user is navigating the table's cell (see #13012).

  The approach is based off of: https://dequeuniversity.com/library/aria/tables/sf-sortable-grid
-->
<div class="mat-sort-header-container mat-focus-indicator"
     [class.mat-sort-header-sorted]="_isSorted()"
     [class.mat-sort-header-position-before]="arrowPosition === 'before'"
     [class.mat-sort-header-descending]="this._sort.direction === 'desc'"
     [class.mat-sort-header-ascending]="this._sort.direction === 'asc'"
     [class.mat-sort-header-recently-cleared-ascending]="_recentlyCleared() === 'asc'"
     [class.mat-sort-header-recently-cleared-descending]="_recentlyCleared() === 'desc'"
     [class.mat-sort-header-animations-disabled]="_animationsDisabled"
     [attr.tabindex]="_isDisabled() ? null : 0"
     [attr.role]="_isDisabled() ? null : 'button'">

  <!--
    TODO(crisbeto): this div isn't strictly necessary, but we have to keep it due to a large
    number of screenshot diff failures. It should be removed eventually. Note that the difference
    isn't visible with a shorter header, but once it breaks up into multiple lines, this element
    causes it to be center-aligned, whereas removing it will keep the text to the left.
  -->
  <div class="mat-sort-header-content">
    <ng-content></ng-content>
  </div>

  <!-- Disable animations while a current animation is running -->
  @if (_renderArrow()) {
    <div class="mat-sort-header-arrow">
      <svg viewBox="0 -960 960 960" focusable="false" aria-hidden="true">
        <path d="M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"/>
      </svg>
    </div>
  }
</div>
`,
      styles: [".mat-sort-header{cursor:pointer}.mat-sort-header-disabled{cursor:default}.mat-sort-header-container{display:flex;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}@keyframes _mat-sort-header-recently-cleared-ascending{from{transform:translateY(0);opacity:1}to{transform:translateY(-25%);opacity:0}}@keyframes _mat-sort-header-recently-cleared-descending{from{transform:translateY(0) rotate(180deg);opacity:1}to{transform:translateY(25%) rotate(180deg);opacity:0}}.mat-sort-header-arrow{height:12px;width:12px;position:relative;transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1),opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;overflow:visible;color:var(--mat-sort-arrow-color, var(--mat-sys-on-surface))}.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow,.mat-sort-header.cdk-program-focused .mat-sort-header-arrow,.mat-sort-header:hover .mat-sort-header-arrow{opacity:.54}.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow{opacity:1}.mat-sort-header-descending .mat-sort-header-arrow{transform:rotate(180deg)}.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow{transform:translateY(-25%)}.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow{transition:none;animation:_mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards}.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow{transition:none;animation:_mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards}.mat-sort-header-animations-disabled .mat-sort-header-arrow{transition-duration:0ms;animation-duration:0ms}.mat-sort-header-arrow svg{width:24px;height:24px;fill:currentColor;position:absolute;top:50%;left:50%;margin:-12px 0 0 -12px;transform:translateZ(0)}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}\n"]
    }]
  }], () => [], {
    id: [{
      type: Input,
      args: ["mat-sort-header"]
    }],
    arrowPosition: [{
      type: Input
    }],
    start: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    sortActionDescription: [{
      type: Input
    }],
    disableClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatSortModule = class _MatSortModule {
  static \u0275fac = function MatSortModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSortModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSortModule,
    imports: [MatCommonModule, MatSort, MatSortHeader],
    exports: [MatSort, MatSortHeader]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MAT_SORT_HEADER_INTL_PROVIDER],
    imports: [MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSortModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatSort, MatSortHeader],
      exports: [MatSort, MatSortHeader],
      providers: [MAT_SORT_HEADER_INTL_PROVIDER]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/paginator.mjs
function MatPaginator_Conditional_2_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pageSizeOption_r3 = ctx.$implicit;
    \u0275\u0275property("value", pageSizeOption_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pageSizeOption_r3, " ");
  }
}
function MatPaginator_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 14)(1, "mat-select", 16, 0);
    \u0275\u0275listener("selectionChange", function MatPaginator_Conditional_2_Conditional_3_Template_mat_select_selectionChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1._changePageSize($event.value));
    });
    \u0275\u0275repeaterCreate(3, MatPaginator_Conditional_2_Conditional_3_For_4_Template, 2, 2, "mat-option", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18);
    \u0275\u0275listener("click", function MatPaginator_Conditional_2_Conditional_3_Template_div_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const selectRef_r4 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(selectRef_r4.open());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("appearance", ctx_r1._formFieldAppearance)("color", ctx_r1.color);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.pageSize)("disabled", ctx_r1.disabled)("aria-labelledby", ctx_r1._pageSizeLabelId)("panelClass", ctx_r1.selectConfig.panelClass || "")("disableOptionCentering", ctx_r1.selectConfig.disableOptionCentering);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1._displayedPageSizeOptions);
  }
}
function MatPaginator_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pageSize);
  }
}
function MatPaginator_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, MatPaginator_Conditional_2_Conditional_3_Template, 6, 7, "mat-form-field", 14);
    \u0275\u0275conditionalCreate(4, MatPaginator_Conditional_2_Conditional_4_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("id", ctx_r1._pageSizeLabelId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1._intl.itemsPerPageLabel, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1._displayedPageSizeOptions.length > 1 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1._displayedPageSizeOptions.length <= 1 ? 4 : -1);
  }
}
function MatPaginator_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function MatPaginator_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._buttonClicked(0, ctx_r1._previousButtonsDisabled()));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8);
    \u0275\u0275element(2, "path", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("disabled", ctx_r1._previousButtonsDisabled())("tabindex", ctx_r1._previousButtonsDisabled() ? -1 : null);
    \u0275\u0275attribute("aria-label", ctx_r1._intl.firstPageLabel);
  }
}
function MatPaginator_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function MatPaginator_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._buttonClicked(ctx_r1.getNumberOfPages() - 1, ctx_r1._nextButtonsDisabled()));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8);
    \u0275\u0275element(2, "path", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1._intl.lastPageLabel)("matTooltipDisabled", ctx_r1._nextButtonsDisabled())("disabled", ctx_r1._nextButtonsDisabled())("tabindex", ctx_r1._nextButtonsDisabled() ? -1 : null);
    \u0275\u0275attribute("aria-label", ctx_r1._intl.lastPageLabel);
  }
}
var MatPaginatorIntl = class _MatPaginatorIntl {
  /**
   * Stream to emit from when labels are changed. Use this to notify components when the labels have
   * changed after initialization.
   */
  changes = new Subject();
  /** A label for the page size selector. */
  itemsPerPageLabel = "Items per page:";
  /** A label for the button that increments the current page. */
  nextPageLabel = "Next page";
  /** A label for the button that decrements the current page. */
  previousPageLabel = "Previous page";
  /** A label for the button that moves to the first page. */
  firstPageLabel = "First page";
  /** A label for the button that moves to the last page. */
  lastPageLabel = "Last page";
  /** A label for the range of items within the current page and the length of the whole list. */
  getRangeLabel = (page, pageSize, length) => {
    if (length == 0 || pageSize == 0) {
      return `0 of ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} \u2013 ${endIndex} of ${length}`;
  };
  static \u0275fac = function MatPaginatorIntl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPaginatorIntl)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatPaginatorIntl,
    factory: _MatPaginatorIntl.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatorIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatPaginatorIntl();
}
var MAT_PAGINATOR_INTL_PROVIDER = {
  // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
  provide: MatPaginatorIntl,
  deps: [[new Optional(), new SkipSelf(), MatPaginatorIntl]],
  useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
};
var DEFAULT_PAGE_SIZE = 50;
var MAT_PAGINATOR_DEFAULT_OPTIONS = new InjectionToken("MAT_PAGINATOR_DEFAULT_OPTIONS");
var MatPaginator = class _MatPaginator {
  _intl = inject(MatPaginatorIntl);
  _changeDetectorRef = inject(ChangeDetectorRef);
  /** If set, styles the "page size" form field with the designated style. */
  _formFieldAppearance;
  /** ID for the DOM node containing the paginator's items per page label. */
  _pageSizeLabelId = inject(_IdGenerator).getId("mat-paginator-page-size-label-");
  _intlChanges;
  _isInitialized = false;
  _initializedStream = new ReplaySubject(1);
  /**
   * Theme color of the underlying form controls. This API is supported in M2
   * themes only,it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/paginator/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** The zero-based page index of the displayed list of items. Defaulted to 0. */
  get pageIndex() {
    return this._pageIndex;
  }
  set pageIndex(value) {
    this._pageIndex = Math.max(value || 0, 0);
    this._changeDetectorRef.markForCheck();
  }
  _pageIndex = 0;
  /** The length of the total number of items that are being paginated. Defaulted to 0. */
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value || 0;
    this._changeDetectorRef.markForCheck();
  }
  _length = 0;
  /** Number of items to display on a page. By default set to 50. */
  get pageSize() {
    return this._pageSize;
  }
  set pageSize(value) {
    this._pageSize = Math.max(value || 0, 0);
    this._updateDisplayedPageSizeOptions();
  }
  _pageSize;
  /** The set of provided page size options to display to the user. */
  get pageSizeOptions() {
    return this._pageSizeOptions;
  }
  set pageSizeOptions(value) {
    this._pageSizeOptions = (value || []).map((p) => numberAttribute(p, 0));
    this._updateDisplayedPageSizeOptions();
  }
  _pageSizeOptions = [];
  /** Whether to hide the page size selection UI from the user. */
  hidePageSize = false;
  /** Whether to show the first/last buttons UI to the user. */
  showFirstLastButtons = false;
  /** Used to configure the underlying `MatSelect` inside the paginator. */
  selectConfig = {};
  /** Whether the paginator is disabled. */
  disabled = false;
  /** Event emitted when the paginator changes the page size or page index. */
  page = new EventEmitter();
  /** Displayed set of page size options. Will be sorted and include current page size. */
  _displayedPageSizeOptions;
  /** Emits when the paginator is initialized. */
  initialized = this._initializedStream;
  constructor() {
    const _intl = this._intl;
    const defaults = inject(MAT_PAGINATOR_DEFAULT_OPTIONS, {
      optional: true
    });
    this._intlChanges = _intl.changes.subscribe(() => this._changeDetectorRef.markForCheck());
    if (defaults) {
      const {
        pageSize,
        pageSizeOptions,
        hidePageSize,
        showFirstLastButtons
      } = defaults;
      if (pageSize != null) {
        this._pageSize = pageSize;
      }
      if (pageSizeOptions != null) {
        this._pageSizeOptions = pageSizeOptions;
      }
      if (hidePageSize != null) {
        this.hidePageSize = hidePageSize;
      }
      if (showFirstLastButtons != null) {
        this.showFirstLastButtons = showFirstLastButtons;
      }
    }
    this._formFieldAppearance = defaults?.formFieldAppearance || "outline";
  }
  ngOnInit() {
    this._isInitialized = true;
    this._updateDisplayedPageSizeOptions();
    this._initializedStream.next();
  }
  ngOnDestroy() {
    this._initializedStream.complete();
    this._intlChanges.unsubscribe();
  }
  /** Advances to the next page if it exists. */
  nextPage() {
    if (this.hasNextPage()) {
      this._navigate(this.pageIndex + 1);
    }
  }
  /** Move back to the previous page if it exists. */
  previousPage() {
    if (this.hasPreviousPage()) {
      this._navigate(this.pageIndex - 1);
    }
  }
  /** Move to the first page if not already there. */
  firstPage() {
    if (this.hasPreviousPage()) {
      this._navigate(0);
    }
  }
  /** Move to the last page if not already there. */
  lastPage() {
    if (this.hasNextPage()) {
      this._navigate(this.getNumberOfPages() - 1);
    }
  }
  /** Whether there is a previous page. */
  hasPreviousPage() {
    return this.pageIndex >= 1 && this.pageSize != 0;
  }
  /** Whether there is a next page. */
  hasNextPage() {
    const maxPageIndex = this.getNumberOfPages() - 1;
    return this.pageIndex < maxPageIndex && this.pageSize != 0;
  }
  /** Calculate the number of pages */
  getNumberOfPages() {
    if (!this.pageSize) {
      return 0;
    }
    return Math.ceil(this.length / this.pageSize);
  }
  /**
   * Changes the page size so that the first item displayed on the page will still be
   * displayed using the new page size.
   *
   * For example, if the page size is 10 and on the second page (items indexed 10-19) then
   * switching so that the page size is 5 will set the third page as the current page so
   * that the 10th item will still be displayed.
   */
  _changePageSize(pageSize) {
    const startIndex = this.pageIndex * this.pageSize;
    const previousPageIndex = this.pageIndex;
    this.pageIndex = Math.floor(startIndex / pageSize) || 0;
    this.pageSize = pageSize;
    this._emitPageEvent(previousPageIndex);
  }
  /** Checks whether the buttons for going forwards should be disabled. */
  _nextButtonsDisabled() {
    return this.disabled || !this.hasNextPage();
  }
  /** Checks whether the buttons for going backwards should be disabled. */
  _previousButtonsDisabled() {
    return this.disabled || !this.hasPreviousPage();
  }
  /**
   * Updates the list of page size options to display to the user. Includes making sure that
   * the page size is an option and that the list is sorted.
   */
  _updateDisplayedPageSizeOptions() {
    if (!this._isInitialized) {
      return;
    }
    if (!this.pageSize) {
      this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
    }
    this._displayedPageSizeOptions = this.pageSizeOptions.slice();
    if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
      this._displayedPageSizeOptions.push(this.pageSize);
    }
    this._displayedPageSizeOptions.sort((a, b) => a - b);
    this._changeDetectorRef.markForCheck();
  }
  /** Emits an event notifying that a change of the paginator's properties has been triggered. */
  _emitPageEvent(previousPageIndex) {
    this.page.emit({
      previousPageIndex,
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      length: this.length
    });
  }
  /** Navigates to a specific page index. */
  _navigate(index) {
    const previousIndex = this.pageIndex;
    if (index !== previousIndex) {
      this.pageIndex = index;
      this._emitPageEvent(previousIndex);
    }
  }
  /**
   * Callback invoked when one of the navigation buttons is called.
   * @param targetIndex Index to which the paginator should navigate.
   * @param isDisabled Whether the button is disabled.
   */
  _buttonClicked(targetIndex, isDisabled) {
    if (!isDisabled) {
      this._navigate(targetIndex);
    }
  }
  static \u0275fac = function MatPaginator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPaginator)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatPaginator,
    selectors: [["mat-paginator"]],
    hostAttrs: ["role", "group", 1, "mat-mdc-paginator"],
    inputs: {
      color: "color",
      pageIndex: [2, "pageIndex", "pageIndex", numberAttribute],
      length: [2, "length", "length", numberAttribute],
      pageSize: [2, "pageSize", "pageSize", numberAttribute],
      pageSizeOptions: "pageSizeOptions",
      hidePageSize: [2, "hidePageSize", "hidePageSize", booleanAttribute],
      showFirstLastButtons: [2, "showFirstLastButtons", "showFirstLastButtons", booleanAttribute],
      selectConfig: "selectConfig",
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      page: "page"
    },
    exportAs: ["matPaginator"],
    decls: 14,
    vars: 14,
    consts: [["selectRef", ""], [1, "mat-mdc-paginator-outer-container"], [1, "mat-mdc-paginator-container"], [1, "mat-mdc-paginator-page-size"], [1, "mat-mdc-paginator-range-actions"], ["aria-live", "polite", 1, "mat-mdc-paginator-range-label"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-previous", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["viewBox", "0 0 24 24", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-next", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], [1, "mat-mdc-paginator-page-size-label"], [1, "mat-mdc-paginator-page-size-select", 3, "appearance", "color"], [1, "mat-mdc-paginator-page-size-value"], ["hideSingleSelectionIndicator", "", 3, "selectionChange", "value", "disabled", "aria-labelledby", "panelClass", "disableOptionCentering"], [3, "value"], [1, "mat-mdc-paginator-touch-target", 3, "click"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-first", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-last", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
    template: function MatPaginator_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275conditionalCreate(2, MatPaginator_Conditional_2_Template, 5, 4, "div", 3);
        \u0275\u0275elementStart(3, "div", 4)(4, "div", 5);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, MatPaginator_Conditional_6_Template, 3, 5, "button", 6);
        \u0275\u0275elementStart(7, "button", 7);
        \u0275\u0275listener("click", function MatPaginator_Template_button_click_7_listener() {
          return ctx._buttonClicked(ctx.pageIndex - 1, ctx._previousButtonsDisabled());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 8);
        \u0275\u0275element(9, "path", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(10, "button", 10);
        \u0275\u0275listener("click", function MatPaginator_Template_button_click_10_listener() {
          return ctx._buttonClicked(ctx.pageIndex + 1, ctx._nextButtonsDisabled());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 8);
        \u0275\u0275element(12, "path", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(13, MatPaginator_Conditional_13_Template, 3, 5, "button", 12);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.hidePageSize ? 2 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showFirstLastButtons ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("disabled", ctx._previousButtonsDisabled())("tabindex", ctx._previousButtonsDisabled() ? -1 : null);
        \u0275\u0275attribute("aria-label", ctx._intl.previousPageLabel);
        \u0275\u0275advance(3);
        \u0275\u0275property("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("disabled", ctx._nextButtonsDisabled())("tabindex", ctx._nextButtonsDisabled() ? -1 : null);
        \u0275\u0275attribute("aria-label", ctx._intl.nextPageLabel);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showFirstLastButtons ? 13 : -1);
      }
    },
    dependencies: [MatFormField, MatSelect, MatOption, MatIconButton, MatTooltip],
    styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-sys-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));--mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);--mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size, 56px)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}@media(forced-colors: active){.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,.mat-mdc-paginator-icon{fill:currentColor}.mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled]{color:GrayText}}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display, block);position:absolute;top:50%;left:50%;width:84px;height:48px;background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginator, [{
    type: Component,
    args: [{
      selector: "mat-paginator",
      exportAs: "matPaginator",
      host: {
        "class": "mat-mdc-paginator",
        "role": "group"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [MatFormField, MatSelect, MatOption, MatIconButton, MatTooltip],
      template: '<div class="mat-mdc-paginator-outer-container">\n  <div class="mat-mdc-paginator-container">\n    @if (!hidePageSize) {\n      <div class="mat-mdc-paginator-page-size">\n        <div class="mat-mdc-paginator-page-size-label" [attr.id]="_pageSizeLabelId">\n          {{_intl.itemsPerPageLabel}}\n        </div>\n\n        @if (_displayedPageSizeOptions.length > 1) {\n          <mat-form-field\n            [appearance]="_formFieldAppearance!"\n            [color]="color"\n            class="mat-mdc-paginator-page-size-select">\n            <mat-select\n              #selectRef\n              [value]="pageSize"\n              [disabled]="disabled"\n              [aria-labelledby]="_pageSizeLabelId"\n              [panelClass]="selectConfig.panelClass || \'\'"\n              [disableOptionCentering]="selectConfig.disableOptionCentering"\n              (selectionChange)="_changePageSize($event.value)"\n              hideSingleSelectionIndicator>\n              @for (pageSizeOption of _displayedPageSizeOptions; track pageSizeOption) {\n                <mat-option [value]="pageSizeOption">\n                  {{pageSizeOption}}\n                </mat-option>\n              }\n            </mat-select>\n          <div class="mat-mdc-paginator-touch-target" (click)="selectRef.open()"></div>\n          </mat-form-field>\n        }\n\n        @if (_displayedPageSizeOptions.length <= 1) {\n          <div class="mat-mdc-paginator-page-size-value">{{pageSize}}</div>\n        }\n      </div>\n    }\n\n    <div class="mat-mdc-paginator-range-actions">\n      <div class="mat-mdc-paginator-range-label" aria-live="polite">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      <!--\n      The buttons use `disabledInteractive` so that they can retain focus if they become disabled,\n      otherwise focus is moved to the document body. However, users should not be able to navigate\n      into these buttons, so `tabindex` is set to -1 when disabled.\n      -->\n\n      @if (showFirstLastButtons) {\n        <button matIconButton type="button"\n                class="mat-mdc-paginator-navigation-first"\n                (click)="_buttonClicked(0, _previousButtonsDisabled())"\n                [attr.aria-label]="_intl.firstPageLabel"\n                [matTooltip]="_intl.firstPageLabel"\n                [matTooltipDisabled]="_previousButtonsDisabled()"\n                matTooltipPosition="above"\n                [disabled]="_previousButtonsDisabled()"\n                [tabindex]="_previousButtonsDisabled() ? -1 : null"\n                disabledInteractive>\n          <svg class="mat-mdc-paginator-icon"\n              viewBox="0 0 24 24"\n              focusable="false"\n              aria-hidden="true">\n            <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>\n          </svg>\n        </button>\n      }\n      <button matIconButton type="button"\n              class="mat-mdc-paginator-navigation-previous"\n              (click)="_buttonClicked(pageIndex - 1, _previousButtonsDisabled())"\n              [attr.aria-label]="_intl.previousPageLabel"\n              [matTooltip]="_intl.previousPageLabel"\n              [matTooltipDisabled]="_previousButtonsDisabled()"\n              matTooltipPosition="above"\n              [disabled]="_previousButtonsDisabled()"\n              [tabindex]="_previousButtonsDisabled() ? -1 : null"\n              disabledInteractive>\n        <svg class="mat-mdc-paginator-icon"\n             viewBox="0 0 24 24"\n             focusable="false"\n             aria-hidden="true">\n          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>\n        </svg>\n      </button>\n      <button matIconButton type="button"\n              class="mat-mdc-paginator-navigation-next"\n              (click)="_buttonClicked(pageIndex + 1, _nextButtonsDisabled())"\n              [attr.aria-label]="_intl.nextPageLabel"\n              [matTooltip]="_intl.nextPageLabel"\n              [matTooltipDisabled]="_nextButtonsDisabled()"\n              matTooltipPosition="above"\n              [disabled]="_nextButtonsDisabled()"\n              [tabindex]="_nextButtonsDisabled() ? -1 : null"\n              disabledInteractive>\n        <svg class="mat-mdc-paginator-icon"\n             viewBox="0 0 24 24"\n             focusable="false"\n             aria-hidden="true">\n          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>\n        </svg>\n      </button>\n      @if (showFirstLastButtons) {\n        <button matIconButton type="button"\n                class="mat-mdc-paginator-navigation-last"\n                (click)="_buttonClicked(getNumberOfPages() - 1, _nextButtonsDisabled())"\n                [attr.aria-label]="_intl.lastPageLabel"\n                [matTooltip]="_intl.lastPageLabel"\n                [matTooltipDisabled]="_nextButtonsDisabled()"\n                matTooltipPosition="above"\n                [disabled]="_nextButtonsDisabled()"\n                [tabindex]="_nextButtonsDisabled() ? -1 : null"\n                disabledInteractive>\n          <svg class="mat-mdc-paginator-icon"\n              viewBox="0 0 24 24"\n              focusable="false"\n              aria-hidden="true">\n            <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>\n          </svg>\n        </button>\n      }\n    </div>\n  </div>\n</div>\n',
      styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-sys-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));--mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);--mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size, 56px)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}@media(forced-colors: active){.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,.mat-mdc-paginator-icon{fill:currentColor}.mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled]{color:GrayText}}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display, block);position:absolute;top:50%;left:50%;width:84px;height:48px;background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    pageIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    length: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    pageSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    pageSizeOptions: [{
      type: Input
    }],
    hidePageSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showFirstLastButtons: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectConfig: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    page: [{
      type: Output
    }]
  });
})();
var MatPaginatorModule = class _MatPaginatorModule {
  static \u0275fac = function MatPaginatorModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPaginatorModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatPaginatorModule,
    imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator],
    exports: [MatPaginator]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MAT_PAGINATOR_INTL_PROVIDER],
    imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatorModule, [{
    type: NgModule,
    args: [{
      imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator],
      exports: [MatPaginator],
      providers: [MAT_PAGINATOR_INTL_PROVIDER]
    }]
  }], null, null);
})();

// src/app/sortingAccessor.ts
var nestedProperty = (data, sortHeaderId) => {
  return sortHeaderId.split(".").reduce((accumulator, key) => accumulator && accumulator[key], data);
};
var caseInsensitive = (data, sortHeaderId) => {
  const value = data[sortHeaderId];
  return typeof value === "string" ? value.toUpperCase() : value;
};
var nestedCaseInsensitive = (data, sortHeaderId) => {
  const value = sortHeaderId.split(".").reduce((accumulator, key) => accumulator && accumulator[key], data);
  return typeof value === "string" ? value.toUpperCase() : value;
};
var sortingDataAccessor = {
  nestedProperty,
  caseInsensitive,
  nestedCaseInsensitive
};
var sortingAccessor_default = sortingDataAccessor;

// src/app/harmonia-universalis/harmonia-universalis.component.ts
var _c02 = ["paginator"];
var _c12 = () => [""];
var _c2 = () => [];
function HarmoniaUniversalisComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.authorHeader, " ");
  }
}
function HarmoniaUniversalisComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "mat-icon-button", 30)(4, "mat-icon", 27);
    \u0275\u0275text(5, "open_in_new");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const biblio_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", biblio_r3.author.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/item/" + biblio_r3.author.id);
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function HarmoniaUniversalisComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.titleHeader, " ");
  }
}
function HarmoniaUniversalisComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "mat-icon-button", 30)(4, "mat-icon", 27);
    \u0275\u0275text(5, "open_in_new");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const biblio_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", biblio_r4.title.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/item/" + biblio_r4.title.id);
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function HarmoniaUniversalisComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.locationHeader, " ");
  }
}
function HarmoniaUniversalisComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "mat-icon-button", 30)(4, "mat-icon", 27);
    \u0275\u0275text(5, "open_in_new");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const biblio_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", biblio_r5.location.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/item/" + biblio_r5.location.id);
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function HarmoniaUniversalisComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.dateHeader, " ");
  }
}
function HarmoniaUniversalisComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const biblio_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", biblio_r6.date.value, " ");
  }
}
function HarmoniaUniversalisComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 34);
  }
}
function HarmoniaUniversalisComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 35);
  }
}
var _HarmoniaUniversalisComponent = class _HarmoniaUniversalisComponent {
  constructor() {
    this.database = inject(HuDatabaseService);
    this._liveAnnouncer = inject(LiveAnnouncer);
    this.csv = inject(ArrayToCsvService);
    this.lang = inject(SelectedLangService);
    this.displayedColumns = ["author", "title", "place", "date"];
    this.dataSource = new MatTableDataSource();
    this.biblioHU = "Bibliography Harmonia Universalis";
    this.authorHeader = "Author";
    this.titleHeader = "Title";
    this.locationHeader = "Place";
    this.dateHeader = "Date";
    this.behavior$ = new BehaviorSubject("");
    this.length = 50;
    this.pageSize = 25;
    this.pageIndex = 0;
    this.pageSizeOptions = [10, 25, 50, 100, 500, 1e3];
    this.hidePageSize = false;
    this.showPageSizeOptions = true;
    this.showFirstLastButtons = true;
    this.disabled = false;
    this.isSpinner = false;
    this.myLang = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22" + this.lang.selectedLang + "%22%2C%22en%22.%20%7D%0A%7D%0A";
    this.dataSource.sortingDataAccessor = (data, sortHeaderId) => {
      return sortingAccessor_default.nestedCaseInsensitive(data, sortHeaderId);
    };
    this.dataSource.filterPredicate = (data, filter) => {
      return data.author.label.toLocaleLowerCase().includes(filter) || //    data.author.id.toLocaleLowerCase().includes(filter) ||
      data.title.label.toLocaleLowerCase().includes(filter) || //    data.title.id.toLocaleLowerCase().includes(filter)||
      data.location.label.toLocaleLowerCase().includes(filter) || //     data.location.id.toLocaleLowerCase().includes(filter) ||
      data.date.value.toLocaleLowerCase().includes(filter);
    };
  }
  ngOnInit() {
    this.biblioHU = this.lang.getTranslation("$1", this.lang.selectedLang);
    this.authorHeader = this.lang.getTranslation("$1", this.lang.selectedLang);
    this.titleHeader = this.lang.getTranslation("$1", this.lang.selectedLang);
    this.locationHeader = this.lang.getTranslation("$1", this.lang.selectedLang);
    this.dateHeader = this.lang.getTranslation("$1", this.lang.selectedLang);
    let u = this.database.sparqlBuilding(this.myLang);
    let dataService = this.database.databaseToDisplay(u);
    let v$ = dataService.pipe(map((res) => this.database.listFromSparql(res)));
    this.dataSource$ = combineLatest([this.behavior$, v$]).pipe(map((res) => {
      this.dataSource.filter = res[0];
      this.dataSource.data = res[1];
      return this.dataSource;
    }));
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  onClick(query) {
    let u = query;
    u = this.database.databaseToDownload(query);
    let v = this.csv.arrayToCsv(u);
    this.csv.downloadBlob(v, "biblio_harmonia_universalis", "text/csv;charset=utf-8;");
  }
  applyFilter(event) {
    const filterValue = event.target.value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
    this.dataSource.filteredData;
    this.filtered = this.dataSource.filteredData[0].author.label;
  }
  handlePageEvent(e) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
  setPageSizeOptions(setPageSizeOptionsInput) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(",").map((str) => +str);
    }
  }
};
_HarmoniaUniversalisComponent.\u0275fac = function HarmoniaUniversalisComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HarmoniaUniversalisComponent)();
};
_HarmoniaUniversalisComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HarmoniaUniversalisComponent, selectors: [["app-harmonia-universalis"]], viewQuery: function HarmoniaUniversalisComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatSort, 5);
    \u0275\u0275viewQuery(_c02, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
  }
}, decls: 44, vars: 18, consts: [["paginator", ""], ["content", ""], ["href", \u0275\u0275trustConstantResourceUrl`https://fonts.googleapis.com/icon?family=Material+Icons`, "rel", "stylesheet"], [1, "cardBackground"], [1, "bigTitle"], [1, "search-center"], ["href", "https://database.factgrid.de/query/#%23model%0A%0ASELECT%20%3Fitem%20%3Fviewer%20%3FitemLabel%20%20WHERE%20%7B%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%20%20%3Fitem%20wdt%3AP2%20wd%3AQ7%3B%0A%20%20%20%20%20%20%20%20wdt%3AP247%20wd%3AQ24708.%0A%20%20BIND%28STRAFTER%28STR%28%3Fitem%29%2C%20STR%28wd%3A%29%29%20AS%20%3FitemId%29%0A%20%20BIND%28IRI%28CONCAT%28%22https%3A%2F%2Fdatabase.factgrid.de%2Fviewer%2Fitem%2F%22%2C%20%3FitemId%29%29%20AS%20%3Fviewer%29%0A%7D%0A"], [3, "routerLink"], ["appearance", "outlined", 1, "mat-elevation-z12"], [1, "labelTitlePadding"], ["appearance", "outline"], ["matInput", "", "placeholder", "Search", 3, "keyup"], [1, "mat-elevation-z8", "container"], ["mat-table", "", "matSort", "", "matSortActive", "title", "matSortDirection", "asc", 1, "mat-table", 3, "dataSource"], ["matColumnDef", "author"], ["mat-header-cell", "", "mat-sort-header", "author.label", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "responsive-cell", 4, "matCellDef"], ["matColumnDef", "title"], ["mat-header-cell", "", "mat-sort-header", "title.label", 4, "matHeaderCellDef"], ["matColumnDef", "place"], ["mat-header-cell", "", "mat-sort-header", "location.label", 4, "matHeaderCellDef"], ["matColumnDef", "date"], ["mat-header-cell", "", "mat-sort-header", "date.value", 4, "matHeaderCellDef"], ["mat-header-row", "", "class", "mat-header-row", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "responsive-row", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page", 1, "demo-paginator", 3, "page", "length", "pageSize", "disabled", "showFirstLastButtons", "pageSizeOptions", "hidePageSize", "pageIndex"], ["mat-icon-button", "", "color", "primary", 1, "internalLink", 3, "click"], ["color", "primary", 3, "inline"], ["mat-header-cell", "", "mat-sort-header", "author.label"], ["mat-cell", "", 1, "responsive-cell"], [1, "internalLink", 3, "routerLink"], ["mat-header-cell", "", "mat-sort-header", "title.label"], ["mat-header-cell", "", "mat-sort-header", "location.label"], ["mat-header-cell", "", "mat-sort-header", "date.value"], ["mat-header-row", "", 1, "mat-header-row"], ["mat-row", "", 1, "responsive-row"]], template: function HarmoniaUniversalisComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "head");
    \u0275\u0275element(1, "link", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "body")(3, "div", 3)(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "a", 6);
    \u0275\u0275text(8, " sparql query ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "\xA0\xA0|\xA0\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 7);
    \u0275\u0275text(12, "FactGrid");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "mat-card", 8)(14, "mat-card-content", 3)(15, "div", 9)(16, "mat-form-field", 10)(17, "input", 11);
    \u0275\u0275listener("keyup", function HarmoniaUniversalisComponent_Template_input_keyup_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 12)(19, "table", 13);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275elementContainerStart(21, 14);
    \u0275\u0275template(22, HarmoniaUniversalisComponent_th_22_Template, 2, 1, "th", 15)(23, HarmoniaUniversalisComponent_td_23_Template, 6, 3, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(24, 17);
    \u0275\u0275template(25, HarmoniaUniversalisComponent_th_25_Template, 2, 1, "th", 18)(26, HarmoniaUniversalisComponent_td_26_Template, 6, 3, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(27, 19);
    \u0275\u0275template(28, HarmoniaUniversalisComponent_th_28_Template, 2, 1, "th", 20)(29, HarmoniaUniversalisComponent_td_29_Template, 6, 3, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(30, 21);
    \u0275\u0275template(31, HarmoniaUniversalisComponent_th_31_Template, 2, 1, "th", 22)(32, HarmoniaUniversalisComponent_td_32_Template, 2, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(33, HarmoniaUniversalisComponent_tr_33_Template, 1, 0, "tr", 23)(34, HarmoniaUniversalisComponent_tr_34_Template, 1, 0, "tr", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-paginator", 25, 0);
    \u0275\u0275listener("page", function HarmoniaUniversalisComponent_Template_mat_paginator_page_35_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.handlePageEvent($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div")(38, "span")(39, "button", 26, 1);
    \u0275\u0275listener("click", function HarmoniaUniversalisComponent_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onClick(ctx.dataSource.filteredData));
    });
    \u0275\u0275elementStart(41, "mat-icon", 27);
    \u0275\u0275text(42, "download");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(43, "\xA0\xA0\xA0\xA0\xA0\xA0");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.biblioHU);
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(16, _c12));
    \u0275\u0275advance(8);
    \u0275\u0275property("dataSource", \u0275\u0275pipeBind1(20, 14, ctx.dataSource$));
    \u0275\u0275advance(14);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx.length)("pageSize", ctx.pageSize)("disabled", ctx.disabled)("showFirstLastButtons", ctx.showFirstLastButtons)("pageSizeOptions", ctx.showPageSizeOptions ? ctx.pageSizeOptions : \u0275\u0275pureFunction0(17, _c2))("hidePageSize", ctx.hidePageSize)("pageIndex", ctx.pageIndex);
    \u0275\u0275advance(6);
    \u0275\u0275property("inline", true);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatTableModule,
  MatTable,
  MatHeaderCellDef,
  MatHeaderRowDef,
  MatColumnDef,
  MatCellDef,
  MatRowDef,
  MatHeaderCell,
  MatCell,
  MatHeaderRow,
  MatRow,
  MatSortModule,
  MatSort,
  MatSortHeader,
  MatIconModule,
  MatIcon,
  MatButtonModule,
  MatIconButton,
  MatCardModule,
  MatCard,
  MatCardContent,
  RouterModule,
  RouterLink,
  MatPaginatorModule,
  MatPaginator,
  MatInputModule,
  MatInput,
  MatFormField,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule
], styles: ["\n\n.mat-elevation-z8.container[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\n@media (max-width: 600px) {\n  .mat-header-row[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .responsive-cell[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    padding: 0 16px;\n    margin: 16px 0;\n    border: 0 none;\n  }\n  .responsive-row[_ngcontent-%COMP%] {\n    display: block;\n    overflow: hidden;\n    height: auto;\n    position: relative;\n    box-shadow:\n      0 2px 1px -1px rgba(0, 0, 0, 0.2),\n      0 1px 1px 0 rgba(0, 0, 0, 0.14),\n      0 1px 3px 0 rgba(0, 0, 0, 0.12);\n    border-radius: 3px;\n    margin-bottom: 24px;\n  }\n  .responsive-row[_ngcontent-%COMP%]    + .responsive-row[_ngcontent-%COMP%] {\n    margin-top: 24px;\n  }\n  mat-paginator[_ngcontent-%COMP%] {\n    margin-top: 24px;\n  }\n}\n/*# sourceMappingURL=harmonia-universalis.component.css.map */"] });
var HarmoniaUniversalisComponent = _HarmoniaUniversalisComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HarmoniaUniversalisComponent, [{
    type: Component,
    args: [{ selector: "app-harmonia-universalis", standalone: true, imports: [
      CommonModule,
      MatTableModule,
      MatSortModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      RouterModule,
      MatPaginatorModule,
      MatInputModule,
      MatFormFieldModule,
      FormsModule,
      ReactiveFormsModule,
      MatSlideToggleModule,
      MatProgressSpinnerModule
    ], template: `\r
<head>\r
\r
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons"\r
				rel="stylesheet">\r
\r
</head>\r
\r
<body>\r
\r
	<div class="cardBackground">\r
		<div class="bigTitle">{{biblioHU}}</div>\r
		<div class="search-center">\r
			<a href="https://database.factgrid.de/query/#%23model%0A%0ASELECT%20%3Fitem%20%3Fviewer%20%3FitemLabel%20%20WHERE%20%7B%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%20%20%3Fitem%20wdt%3AP2%20wd%3AQ7%3B%0A%20%20%20%20%20%20%20%20wdt%3AP247%20wd%3AQ24708.%0A%20%20BIND%28STRAFTER%28STR%28%3Fitem%29%2C%20STR%28wd%3A%29%29%20AS%20%3FitemId%29%0A%20%20BIND%28IRI%28CONCAT%28%22https%3A%2F%2Fdatabase.factgrid.de%2Fviewer%2Fitem%2F%22%2C%20%3FitemId%29%29%20AS%20%3Fviewer%29%0A%7D%0A">\r
				sparql query\r
			</a>\r
			<span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>\r
			<a [routerLink]="['']">FactGrid</a>  <!-- new route -->\r
		</div>\r
	</div>\r
\r
\r
	<mat-card appearance="outlined" class=mat-elevation-z12>\r
		<mat-card-content class="cardBackground">\r
\r
			<div class="labelTitlePadding">\r
				<mat-form-field appearance="outline">\r
					<input matInput (keyup)="applyFilter($event)" placeholder="Search">\r
				</mat-form-field>\r
			</div>\r
\r
\r
\r
			<div class="mat-elevation-z8 container">\r
\r
				<table mat-table class="mat-table"\r
							 [dataSource]="dataSource$ | async"\r
							 matSort\r
							 matSortActive="title"\r
							 matSortDirection="asc">\r
\r
					<!-- Author Column -->\r
					<ng-container matColumnDef="author">\r
						<th mat-header-cell *matHeaderCellDef mat-sort-header="author.label">\r
							{{authorHeader}}\r
						</th>\r
						<td mat-cell *matCellDef="let biblio" class="responsive-cell">\r
							<span>\r
								{{biblio.author.label}}\r
								<mat-icon-button class="internalLink" [routerLink]="'/item/' + biblio.author.id"><mat-icon color="primary" [inline]="true">open_in_new</mat-icon></mat-icon-button>\r
							</span>\r
						</td>\r
					</ng-container>\r
\r
					<!-- Title Column -->\r
					<ng-container matColumnDef="title">\r
						<th mat-header-cell *matHeaderCellDef\r
								mat-sort-header="title.label">\r
							{{titleHeader}}\r
						</th>\r
						<td mat-cell *matCellDef="let biblio" class="responsive-cell">\r
							<span>\r
								{{biblio.title.label}}\r
								<mat-icon-button class="internalLink" [routerLink]="'/item/' + biblio.title.id"><mat-icon color="primary" [inline]="true">open_in_new</mat-icon></mat-icon-button>\r
							</span>\r
						</td>\r
					</ng-container>\r
\r
					<!-- Place Column -->\r
					<ng-container matColumnDef="place">\r
						<th mat-header-cell *matHeaderCellDef mat-sort-header="location.label">\r
							{{locationHeader}}\r
						</th>\r
						<td mat-cell *matCellDef="let biblio" class="responsive-cell">\r
							<span>\r
								{{biblio.location.label}}\r
								<mat-icon-button class="internalLink" [routerLink]="'/item/' + biblio.location.id"><mat-icon color="primary" [inline]="true">open_in_new</mat-icon></mat-icon-button>\r
							</span>\r
						</td>\r
					</ng-container>\r
\r
					<!-- Date Column -->\r
					<ng-container matColumnDef="date">\r
						<th mat-header-cell *matHeaderCellDef mat-sort-header="date.value">\r
							{{dateHeader}}\r
						</th>\r
						<td mat-cell *matCellDef="let biblio" class="responsive-cell">\r
							{{biblio.date.value}}\r
						</td>\r
					</ng-container>\r
\r
					<tr mat-header-row class="mat-header-row"  *matHeaderRowDef="displayedColumns; sticky: true"></tr>\r
					<tr mat-row *matRowDef="let biblio; columns: displayedColumns" class="responsive-row"></tr>\r
				</table>\r
\r
				<mat-paginator #paginator\r
											 class="demo-paginator"\r
											 (page)="handlePageEvent($event)"\r
											 [length]="length"\r
											 [pageSize]="pageSize"\r
											 [disabled]="disabled"\r
											 [showFirstLastButtons]="showFirstLastButtons"\r
											 [pageSizeOptions]="showPageSizeOptions ? pageSizeOptions : []"\r
											 [hidePageSize]="hidePageSize"\r
											 [pageIndex]="pageIndex"\r
											 aria-label="Select page">\r
				</mat-paginator>\r
\r
			</div>\r
\r
			<div>\r
				<span><button mat-icon-button color="primary" class="internalLink" #content (click)="onClick(this.dataSource.filteredData)"><mat-icon color="primary" [inline]="true">download</mat-icon></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\r
			</div>\r
\r
		</mat-card-content>\r
\r
	</mat-card>\r
\r
\r
\r
</body>\r
\r
\r
\r
`, styles: ["/* src/app/harmonia-universalis/harmonia-universalis.component.scss */\n.mat-elevation-z8.container {\n  width: 100%;\n  overflow-x: auto;\n}\n@media (max-width: 600px) {\n  .mat-header-row {\n    display: none;\n  }\n  .responsive-cell {\n    display: block;\n    width: 100%;\n    padding: 0 16px;\n    margin: 16px 0;\n    border: 0 none;\n  }\n  .responsive-row {\n    display: block;\n    overflow: hidden;\n    height: auto;\n    position: relative;\n    box-shadow:\n      0 2px 1px -1px rgba(0, 0, 0, 0.2),\n      0 1px 1px 0 rgba(0, 0, 0, 0.14),\n      0 1px 3px 0 rgba(0, 0, 0, 0.12);\n    border-radius: 3px;\n    margin-bottom: 24px;\n  }\n  .responsive-row + .responsive-row {\n    margin-top: 24px;\n  }\n  mat-paginator {\n    margin-top: 24px;\n  }\n}\n/*# sourceMappingURL=harmonia-universalis.component.css.map */\n"] }]
  }], () => [], { sort: [{
    type: ViewChild,
    args: [MatSort]
  }], paginator: [{
    type: ViewChild,
    args: ["paginator"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HarmoniaUniversalisComponent, { className: "HarmoniaUniversalisComponent", filePath: "src/app/harmonia-universalis/harmonia-universalis.component.ts", lineNumber: 59 });
})();
export {
  HarmoniaUniversalisComponent
};
//# sourceMappingURL=harmonia-universalis.component-TXN5PKVV.js.map
