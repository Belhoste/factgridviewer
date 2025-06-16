import {
  MatCheckbox,
  MatCheckboxModule,
  MatDivider
} from "./chunk-K7I4HYC7.js";
import "./chunk-H3UX3NVF.js";
import {
  SetLanguageService
} from "./chunk-G6T4JQVM.js";
import {
  MatSlideToggleModule
} from "./chunk-TTUJAYGQ.js";
import {
  MatOption,
  MatSelect,
  MatSelectChange,
  MatSelectModule
} from "./chunk-EQ7WBX6U.js";
import {
  MatProgressSpinner,
  MatTooltip
} from "./chunk-S5XWBLUX.js";
import {
  MatTableModule
} from "./chunk-VARWFSSY.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  DefaultValueAccessor,
  Directive,
  ElementRef,
  EventEmitter,
  FormArrayName,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  JsonPipe,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardModule,
  MatFormField,
  MatFormFieldModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatInput,
  MatInputModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgModule,
  Optional,
  Output,
  ReactiveFormsModule,
  ReplaySubject,
  RequestService,
  RequiredValidator,
  RouterLink,
  RouterModule,
  SelectedLangService,
  Subject,
  Validators,
  ViewChild,
  ViewportRuler,
  combineLatest,
  debounceTime,
  delay,
  filter,
  forwardRef,
  inject,
  map,
  of,
  setClassMetadata,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtrustConstantResourceUrl,
  ɵɵviewQuery
} from "./chunk-PQMJ5DTB.js";

// node_modules/ngx-mat-select-search/fesm2022/ngx-mat-select-search.mjs
var _c0 = ["searchSelectInput"];
var _c1 = ["innerSelectSearch"];
var _c2 = [[["", 8, "mat-select-search-custom-header-content"]], [["", "ngxMatSelectSearchClear", ""]], [["", "ngxMatSelectNoEntriesFound", ""]]];
var _c3 = [".mat-select-search-custom-header-content", "[ngxMatSelectSearchClear]", "[ngxMatSelectNoEntriesFound]"];
function MatSelectSearchComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 10);
    \u0275\u0275listener("change", function MatSelectSearchComponent_Conditional_4_Template_mat_checkbox_change_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2._emitSelectAllBooleanToParent($event.checked));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("color", ctx_r2.matFormField == null ? null : ctx_r2.matFormField.color)("checked", ctx_r2.toggleAllCheckboxChecked)("indeterminate", ctx_r2.toggleAllCheckboxIndeterminate)("matTooltip", ctx_r2.toggleAllCheckboxTooltipMessage)("matTooltipPosition", ctx_r2.toggleAllCheckboxTooltipPosition);
  }
}
function MatSelectSearchComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 7);
  }
}
function MatSelectSearchComponent_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 1);
  }
}
function MatSelectSearchComponent_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 12);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("svgIcon", ctx_r2.closeSvgIcon);
  }
}
function MatSelectSearchComponent_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.closeIcon, " ");
  }
}
function MatSelectSearchComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function MatSelectSearchComponent_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2._reset(true));
    });
    \u0275\u0275conditionalCreate(1, MatSelectSearchComponent_Conditional_8_Conditional_1_Template, 1, 0)(2, MatSelectSearchComponent_Conditional_8_Conditional_2_Template, 1, 1, "mat-icon", 12)(3, MatSelectSearchComponent_Conditional_8_Conditional_3_Template, 2, 1, "mat-icon");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.clearIcon ? 1 : ctx_r2.closeSvgIcon ? 2 : 3);
  }
}
function MatSelectSearchComponent_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2);
  }
}
function MatSelectSearchComponent_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.noEntriesFoundLabel, " ");
  }
}
function MatSelectSearchComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275conditionalCreate(1, MatSelectSearchComponent_Conditional_11_Conditional_1_Template, 1, 0)(2, MatSelectSearchComponent_Conditional_11_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.noEntriesFound ? 1 : 2);
  }
}
var MatSelectSearchClearDirective = class _MatSelectSearchClearDirective {
  static \u0275fac = function MatSelectSearchClearDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSelectSearchClearDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSelectSearchClearDirective,
    selectors: [["", "ngxMatSelectSearchClear", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSelectSearchClearDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxMatSelectSearchClear]"
    }]
  }], null, null);
})();
var configurableDefaultOptions = ["ariaLabel", "clearSearchInput", "closeIcon", "closeSvgIcon", "disableInitialFocus", "disableScrollToActiveOnOptionsChanged", "enableClearOnEscapePressed", "hideClearSearchButton", "noEntriesFoundLabel", "placeholderLabel", "preventHomeEndKeyPropagation", "searching"];
var MAT_SELECTSEARCH_DEFAULT_OPTIONS = new InjectionToken("mat-selectsearch-default-options");
var MatSelectNoEntriesFoundDirective = class _MatSelectNoEntriesFoundDirective {
  static \u0275fac = function MatSelectNoEntriesFoundDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSelectNoEntriesFoundDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSelectNoEntriesFoundDirective,
    selectors: [["", "ngxMatSelectNoEntriesFound", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSelectNoEntriesFoundDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxMatSelectNoEntriesFound]"
    }]
  }], null, null);
})();
var MatSelectSearchComponent = class _MatSelectSearchComponent {
  matSelect;
  changeDetectorRef;
  _viewportRuler;
  matOption;
  matFormField;
  /** Label of the search placeholder */
  placeholderLabel = "Suche";
  /** Type of the search input field */
  type = "text";
  /** Font-based icon used for displaying Close-Icon */
  closeIcon = "close";
  /** SVG-based icon used for displaying Close-Icon. If set, closeIcon is overridden */
  closeSvgIcon;
  /** Label to be shown when no entries are found. Set to null if no message should be shown. */
  noEntriesFoundLabel = "Keine Optionen gefunden";
  /**
    * Whether the search field should be cleared after the dropdown menu is closed.
    * Useful for server-side filtering. See [#3](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/3)
    */
  clearSearchInput = true;
  /** Whether to show the search-in-progress indicator */
  searching = false;
  /** Disables initial focusing of the input field */
  disableInitialFocus = false;
  /** Enable clear input on escape pressed */
  enableClearOnEscapePressed = false;
  /**
   * Prevents home / end key being propagated to mat-select,
   * allowing to move the cursor within the search input instead of navigating the options
   */
  preventHomeEndKeyPropagation = false;
  /** Disables scrolling to active options when option list changes. Useful for server-side search */
  disableScrollToActiveOnOptionsChanged = false;
  /** Adds 508 screen reader support for search box */
  ariaLabel = "dropdown search";
  /** Whether to show Select All Checkbox (for mat-select[multi=true]) */
  showToggleAllCheckbox = false;
  /** Select all checkbox checked state */
  toggleAllCheckboxChecked = false;
  /** select all checkbox indeterminate state */
  toggleAllCheckboxIndeterminate = false;
  /** Display a message in a tooltip on the toggle-all checkbox */
  toggleAllCheckboxTooltipMessage = "";
  /** Define the position of the tooltip on the toggle-all checkbox. */
  toggleAllCheckboxTooltipPosition = "below";
  /** Show/Hide the search clear button of the search input */
  hideClearSearchButton = false;
  /**
   * Always restore selected options on selectionChange for mode multi (e.g. for lazy loading/infinity scrolling).
   * Defaults to false, so selected options are only restored while filtering is active.
   */
  alwaysRestoreSelectedOptionsMulti = false;
  /**
   * Recreate array of selected values for multi-selects.
   *
   * This is useful if the selected values are stored in an immutable data structure.
   */
  recreateValuesArray = false;
  /** Output emitter to send to parent component with the toggle all boolean */
  toggleAll = new EventEmitter();
  /** Reference to the search input field */
  searchSelectInput;
  /** Reference to the search input field */
  innerSelectSearch;
  /** Reference to custom search input clear icon */
  clearIcon;
  /** Reference to custom no entries found element */
  noEntriesFound;
  /** Current search value */
  get value() {
    return this._formControl.value;
  }
  _lastExternalInputValue;
  onTouched = () => {
  };
  /** Reference to the MatSelect options */
  set _options(_options) {
    this._options$.next(_options);
  }
  get _options() {
    return this._options$.getValue();
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _options$ = new BehaviorSubject(null);
  optionsList$ = this._options$.pipe(switchMap((_options) => _options ? _options.changes.pipe(map((options) => options.toArray()), startWith(_options.toArray())) : of(null)));
  optionsLength$ = this.optionsList$.pipe(map((options) => options ? options.length : 0));
  /** Previously selected values when using <mat-select [multiple]="true">*/
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  previousSelectedValues;
  _formControl = new FormControl("", {
    nonNullable: true
  });
  /** Whether to show the no entries found message */
  _showNoEntriesFound$ = combineLatest([this._formControl.valueChanges, this.optionsLength$]).pipe(map(([value, optionsLength]) => !!(this.noEntriesFoundLabel && value && optionsLength === this.getOptionsLengthOffset())));
  /** Subject that emits when the component has been destroyed. */
  _onDestroy = new Subject();
  /** Reference to active descendant for ARIA Support. */
  activeDescendant;
  constructor(matSelect, changeDetectorRef, _viewportRuler, matOption, matFormField, defaultOptions) {
    this.matSelect = matSelect;
    this.changeDetectorRef = changeDetectorRef;
    this._viewportRuler = _viewportRuler;
    this.matOption = matOption;
    this.matFormField = matFormField;
    this.applyDefaultOptions(defaultOptions);
  }
  applyDefaultOptions(defaultOptions) {
    if (!defaultOptions) {
      return;
    }
    for (const key of configurableDefaultOptions) {
      if (Object.prototype.hasOwnProperty.call(defaultOptions, key)) {
        this[key] = defaultOptions[key];
      }
    }
  }
  ngOnInit() {
    if (this.matOption) {
      this.matOption.disabled = true;
      this.matOption._getHostElement().classList.add("contains-mat-select-search");
      this.matOption._getHostElement().setAttribute("role", "presentation");
    } else {
      console.error("<ngx-mat-select-search> must be placed inside a <mat-option> element");
    }
    this.matSelect.openedChange.pipe(delay(1), takeUntil(this._onDestroy)).subscribe((opened) => {
      if (opened) {
        this.updateInputWidth();
        if (!this.disableInitialFocus) {
          this._focus();
        }
      } else {
        if (this.clearSearchInput) {
          this._reset();
        }
      }
    });
    this.matSelect.openedChange.pipe(take(1), switchMap(() => {
      this._options = this.matSelect.options;
      let previousFirstOption = this._options.toArray()[this.getOptionsLengthOffset()];
      return this._options.changes.pipe(tap(() => {
        setTimeout(() => {
          const options = this._options.toArray();
          const currentFirstOption = options[this.getOptionsLengthOffset()];
          const keyManager = this.matSelect._keyManager;
          if (keyManager && this.matSelect.panelOpen && currentFirstOption) {
            const firstOptionIsChanged = !previousFirstOption || !this.matSelect.compareWith(previousFirstOption.value, currentFirstOption.value);
            if (firstOptionIsChanged || !keyManager.activeItem || !options.find((option) => this.matSelect.compareWith(option.value, keyManager.activeItem?.value))) {
              keyManager.setActiveItem(this.getOptionsLengthOffset());
            }
            setTimeout(() => {
              this.updateInputWidth();
            });
          }
          previousFirstOption = currentFirstOption;
        });
      }));
    })).pipe(takeUntil(this._onDestroy)).subscribe();
    this._showNoEntriesFound$.pipe(takeUntil(this._onDestroy)).subscribe((showNoEntriesFound) => {
      if (this.matOption) {
        if (showNoEntriesFound) {
          this.matOption._getHostElement().classList.add("mat-select-search-no-entries-found");
        } else {
          this.matOption._getHostElement().classList.remove("mat-select-search-no-entries-found");
        }
      }
    });
    this._viewportRuler.change().pipe(takeUntil(this._onDestroy)).subscribe(() => {
      if (this.matSelect.panelOpen) {
        this.updateInputWidth();
      }
    });
    this.initMultipleHandling();
    this.optionsList$.pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this.changeDetectorRef.markForCheck();
    });
  }
  _emitSelectAllBooleanToParent(state) {
    this.toggleAll.emit(state);
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  _isToggleAllCheckboxVisible() {
    return this.matSelect.multiple && this.showToggleAllCheckbox;
  }
  /**
   * Handles the key down event with MatSelect.
   * Allows e.g. selecting with enter key, navigation with arrow keys, etc.
   * @param event
   */
  _handleKeydown(event) {
    if (event.key && event.key.length === 1 || this.preventHomeEndKeyPropagation && (event.key === "Home" || event.key === "End")) {
      event.stopPropagation();
    }
    if (this.matSelect.multiple && event.key && event.key === "Enter") {
      setTimeout(() => this._focus());
    }
    if (this.enableClearOnEscapePressed && event.key === "Escape" && this.value) {
      this._reset(true);
      event.stopPropagation();
    }
  }
  /**
   * Handles the key up event with MatSelect.
   * Allows e.g. the announcing of the currently activeDescendant by screen readers.
   */
  _handleKeyup(event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      const ariaActiveDescendantId = this.matSelect._getAriaActiveDescendant();
      const index = this._options.toArray().findIndex((item) => item.id === ariaActiveDescendantId);
      if (index !== -1) {
        this.unselectActiveDescendant();
        this.activeDescendant = this._options.toArray()[index]._getHostElement();
        this.activeDescendant.setAttribute("aria-selected", "true");
        this.searchSelectInput.nativeElement.setAttribute("aria-activedescendant", ariaActiveDescendantId);
      }
    }
  }
  writeValue(value) {
    this._lastExternalInputValue = value;
    this._formControl.setValue(value);
    this.changeDetectorRef.markForCheck();
  }
  onBlur() {
    this.unselectActiveDescendant();
    this.onTouched();
  }
  registerOnChange(fn) {
    this._formControl.valueChanges.pipe(filter((value) => value !== this._lastExternalInputValue), tap(() => this._lastExternalInputValue = void 0), takeUntil(this._onDestroy)).subscribe(fn);
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Focuses the search input field
   */
  _focus() {
    if (!this.searchSelectInput || !this.matSelect.panel) {
      return;
    }
    const panel = this.matSelect.panel.nativeElement;
    const scrollTop = panel.scrollTop;
    this.searchSelectInput.nativeElement.focus();
    panel.scrollTop = scrollTop;
  }
  /**
   * Resets the current search value
   * @param focus whether to focus after resetting
   */
  _reset(focus) {
    this._formControl.setValue("");
    if (focus) {
      this._focus();
    }
  }
  /**
   * Initializes handling <mat-select [multiple]="true">
   * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
   */
  initMultipleHandling() {
    if (!this.matSelect.ngControl) {
      if (this.matSelect.multiple) {
        console.error("the mat-select containing ngx-mat-select-search must have a ngModel or formControl directive when multiple=true");
      }
      return;
    }
    this.previousSelectedValues = this.matSelect.ngControl.value;
    if (!this.matSelect.ngControl.valueChanges) {
      return;
    }
    this.matSelect.ngControl.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe((values) => {
      let restoreSelectedValues = false;
      if (this.matSelect.multiple) {
        if ((this.alwaysRestoreSelectedOptionsMulti || this._formControl.value && this._formControl.value.length) && this.previousSelectedValues && Array.isArray(this.previousSelectedValues)) {
          if (!values || !Array.isArray(values)) {
            values = [];
          }
          const optionValues = this.matSelect.options.map((option) => option.value);
          this.previousSelectedValues.forEach((previousValue) => {
            if (!values.some((v) => this.matSelect.compareWith(v, previousValue)) && !optionValues.some((v) => this.matSelect.compareWith(v, previousValue))) {
              if (this.recreateValuesArray) {
                values = [...values, previousValue];
              } else {
                values.push(previousValue);
              }
              restoreSelectedValues = true;
            }
          });
        }
      }
      this.previousSelectedValues = values;
      if (restoreSelectedValues) {
        this.matSelect._onChange(values);
      }
    });
  }
  /**
   *  Set the width of the innerSelectSearch to fit even custom scrollbars
   *  And support all Operating Systems
   */
  updateInputWidth() {
    if (!this.innerSelectSearch || !this.innerSelectSearch.nativeElement) {
      return;
    }
    let element = this.innerSelectSearch.nativeElement;
    let panelElement = null;
    while (element && element.parentElement) {
      element = element.parentElement;
      if (element.classList.contains("mat-select-panel")) {
        panelElement = element;
        break;
      }
    }
    if (panelElement) {
      this.innerSelectSearch.nativeElement.style.width = panelElement.clientWidth + "px";
    }
  }
  /**
   * Determine the offset to length that can be caused by the optional matOption used as a search input.
   */
  getOptionsLengthOffset() {
    if (this.matOption) {
      return 1;
    } else {
      return 0;
    }
  }
  unselectActiveDescendant() {
    this.activeDescendant?.removeAttribute("aria-selected");
    this.searchSelectInput.nativeElement.removeAttribute("aria-activedescendant");
  }
  static \u0275fac = function MatSelectSearchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSelectSearchComponent)(\u0275\u0275directiveInject(MatSelect), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ViewportRuler), \u0275\u0275directiveInject(MatOption, 8), \u0275\u0275directiveInject(MatFormField, 8), \u0275\u0275directiveInject(MAT_SELECTSEARCH_DEFAULT_OPTIONS, 8));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSelectSearchComponent,
    selectors: [["ngx-mat-select-search"]],
    contentQueries: function MatSelectSearchComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatSelectSearchClearDirective, 5);
        \u0275\u0275contentQuery(dirIndex, MatSelectNoEntriesFoundDirective, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clearIcon = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.noEntriesFound = _t.first);
      }
    },
    viewQuery: function MatSelectSearchComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7, ElementRef);
        \u0275\u0275viewQuery(_c1, 7, ElementRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchSelectInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.innerSelectSearch = _t.first);
      }
    },
    inputs: {
      placeholderLabel: "placeholderLabel",
      type: "type",
      closeIcon: "closeIcon",
      closeSvgIcon: "closeSvgIcon",
      noEntriesFoundLabel: "noEntriesFoundLabel",
      clearSearchInput: "clearSearchInput",
      searching: "searching",
      disableInitialFocus: "disableInitialFocus",
      enableClearOnEscapePressed: "enableClearOnEscapePressed",
      preventHomeEndKeyPropagation: "preventHomeEndKeyPropagation",
      disableScrollToActiveOnOptionsChanged: "disableScrollToActiveOnOptionsChanged",
      ariaLabel: "ariaLabel",
      showToggleAllCheckbox: "showToggleAllCheckbox",
      toggleAllCheckboxChecked: "toggleAllCheckboxChecked",
      toggleAllCheckboxIndeterminate: "toggleAllCheckboxIndeterminate",
      toggleAllCheckboxTooltipMessage: "toggleAllCheckboxTooltipMessage",
      toggleAllCheckboxTooltipPosition: "toggleAllCheckboxTooltipPosition",
      hideClearSearchButton: "hideClearSearchButton",
      alwaysRestoreSelectedOptionsMulti: "alwaysRestoreSelectedOptionsMulti",
      recreateValuesArray: "recreateValuesArray"
    },
    outputs: {
      toggleAll: "toggleAll"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _MatSelectSearchComponent),
      multi: true
    }])],
    ngContentSelectors: _c3,
    decls: 13,
    vars: 14,
    consts: [["innerSelectSearch", ""], ["searchSelectInput", ""], ["matInput", "", 1, "mat-select-search-input", "mat-select-search-hidden"], [1, "mat-select-search-inner", "mat-typography", "mat-datepicker-content", "mat-tab-header"], [1, "mat-select-search-inner-row"], ["matTooltipClass", "ngx-mat-select-search-toggle-all-tooltip", 1, "mat-select-search-toggle-all-checkbox", 3, "color", "checked", "indeterminate", "matTooltip", "matTooltipPosition"], ["autocomplete", "off", 1, "mat-select-search-input", 3, "keydown", "keyup", "blur", "type", "formControl", "placeholder"], ["diameter", "16", 1, "mat-select-search-spinner"], ["mat-icon-button", "", "aria-label", "Clear", 1, "mat-select-search-clear"], [1, "mat-select-search-no-entries-found"], ["matTooltipClass", "ngx-mat-select-search-toggle-all-tooltip", 1, "mat-select-search-toggle-all-checkbox", 3, "change", "color", "checked", "indeterminate", "matTooltip", "matTooltipPosition"], ["mat-icon-button", "", "aria-label", "Clear", 1, "mat-select-search-clear", 3, "click"], [3, "svgIcon"]],
    template: function MatSelectSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c2);
        \u0275\u0275element(0, "input", 2);
        \u0275\u0275elementStart(1, "div", 3, 0)(3, "div", 4);
        \u0275\u0275conditionalCreate(4, MatSelectSearchComponent_Conditional_4_Template, 1, 5, "mat-checkbox", 5);
        \u0275\u0275elementStart(5, "input", 6, 1);
        \u0275\u0275listener("keydown", function MatSelectSearchComponent_Template_input_keydown_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._handleKeydown($event));
        })("keyup", function MatSelectSearchComponent_Template_input_keyup_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._handleKeyup($event));
        })("blur", function MatSelectSearchComponent_Template_input_blur_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onBlur());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, MatSelectSearchComponent_Conditional_7_Template, 1, 0, "mat-spinner", 7);
        \u0275\u0275conditionalCreate(8, MatSelectSearchComponent_Conditional_8_Template, 4, 1, "button", 8);
        \u0275\u0275projection(9);
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "mat-divider");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(11, MatSelectSearchComponent_Conditional_11_Template, 3, 1, "div", 9);
        \u0275\u0275pipe(12, "async");
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classProp("mat-select-search-inner-multiple", ctx.matSelect.multiple)("mat-select-search-inner-toggle-all", ctx._isToggleAllCheckboxVisible());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx._isToggleAllCheckboxVisible() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("type", ctx.type)("formControl", ctx._formControl)("placeholder", ctx.placeholderLabel);
        \u0275\u0275attribute("aria-label", ctx.ariaLabel);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.searching ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hideClearSearchButton && ctx.value && !ctx.searching ? 8 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(12, 12, ctx._showNoEntriesFound$) ? 11 : -1);
      }
    },
    dependencies: [AsyncPipe, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatCheckbox, MatDivider, MatTooltip, MatProgressSpinner, MatIcon, MatButtonModule, MatIconButton],
    styles: [".mat-select-search-hidden[_ngcontent-%COMP%]{visibility:hidden}.mat-select-search-inner[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;z-index:100;font-size:inherit;box-shadow:none;background-color:var(--mat-sys-surface-container, var(--mat-select-panel-background-color, white))}.mat-select-search-inner.mat-select-search-inner-multiple.mat-select-search-inner-toggle-all[_ngcontent-%COMP%]   .mat-select-search-inner-row[_ngcontent-%COMP%]{display:flex;align-items:center}.mat-select-search-input[_ngcontent-%COMP%]{box-sizing:border-box;width:100%;border:none;font-family:inherit;font-size:inherit;color:currentColor;outline:none;background-color:var(--mat-sys-surface-container, var(--mat-select-panel-background-color, white));padding:0 44px 0 16px;height:47px;line-height:47px}[dir=rtl][_nghost-%COMP%]   .mat-select-search-input[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .mat-select-search-input[_ngcontent-%COMP%]{padding-right:16px;padding-left:44px}.mat-select-search-input[_ngcontent-%COMP%]::placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color)}.mat-select-search-inner-toggle-all[_ngcontent-%COMP%]   .mat-select-search-input[_ngcontent-%COMP%]{padding-left:5px}.mat-select-search-no-entries-found[_ngcontent-%COMP%]{padding-top:8px}.mat-select-search-clear[_ngcontent-%COMP%]{position:absolute;right:4px;top:0}[dir=rtl][_nghost-%COMP%]   .mat-select-search-clear[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .mat-select-search-clear[_ngcontent-%COMP%]{right:auto;left:4px}.mat-select-search-spinner[_ngcontent-%COMP%]{position:absolute;right:16px;top:calc(50% - 8px)}[dir=rtl][_nghost-%COMP%]   .mat-select-search-spinner[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .mat-select-search-spinner[_ngcontent-%COMP%]{right:auto;left:16px}  .mat-mdc-option[aria-disabled=true].contains-mat-select-search{position:sticky;top:-8px;z-index:1;opacity:1;margin-top:-8px;pointer-events:all}  .mat-mdc-option[aria-disabled=true].contains-mat-select-search .mat-icon{margin-right:0;margin-left:0}  .mat-mdc-option[aria-disabled=true].contains-mat-select-search mat-pseudo-checkbox{display:none}  .mat-mdc-option[aria-disabled=true].contains-mat-select-search .mdc-list-item__primary-text{opacity:1}.mat-select-search-toggle-all-checkbox[_ngcontent-%COMP%]{padding-left:5px}[dir=rtl][_nghost-%COMP%]   .mat-select-search-toggle-all-checkbox[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .mat-select-search-toggle-all-checkbox[_ngcontent-%COMP%]{padding-left:0;padding-right:5px}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSelectSearchComponent, [{
    type: Component,
    args: [{
      selector: "ngx-mat-select-search",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MatSelectSearchComponent),
        multi: true
      }],
      imports: [AsyncPipe, ReactiveFormsModule, MatCheckbox, MatDivider, MatTooltip, MatProgressSpinner, MatIcon, MatButtonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<!--\nCopyright (c) 2018 Bithost GmbH All Rights Reserved.\n\nUse of this source code is governed by an MIT-style license that can be\nfound in the LICENSE file at https://angular.io/license\n-->\n<!-- Placeholder to adjust vertical offset of the mat-option elements -->\n<input matInput class="mat-select-search-input mat-select-search-hidden"/>\n\n<!-- Note: the  mat-datepicker-content mat-tab-header are needed to inherit the material theme colors, see PR #22 -->\n<div\n      #innerSelectSearch\n      class="mat-select-search-inner mat-typography mat-datepicker-content mat-tab-header"\n      [class.mat-select-search-inner-multiple]="matSelect.multiple"\n      [class.mat-select-search-inner-toggle-all]="_isToggleAllCheckboxVisible()">\n\n  <div class="mat-select-search-inner-row">\n    @if(_isToggleAllCheckboxVisible())\n    {\n      <mat-checkbox [color]="matFormField?.color"\n                    class="mat-select-search-toggle-all-checkbox"\n                    [checked]="toggleAllCheckboxChecked"\n                    [indeterminate]="toggleAllCheckboxIndeterminate"\n                    [matTooltip]="toggleAllCheckboxTooltipMessage"\n                    matTooltipClass="ngx-mat-select-search-toggle-all-tooltip"\n                    [matTooltipPosition]="toggleAllCheckboxTooltipPosition"\n                    (change)="_emitSelectAllBooleanToParent($event.checked)" />\n    }\n\n    <input class="mat-select-search-input"\n           autocomplete="off"\n           [type]="type"\n           [formControl]="_formControl"\n           #searchSelectInput\n           (keydown)="_handleKeydown($event)"\n           (keyup)="_handleKeyup($event)"\n           (blur)="onBlur()"\n           [placeholder]="placeholderLabel"\n           [attr.aria-label]="ariaLabel"\n    />\n    @if(searching)\n    {\n      <mat-spinner class="mat-select-search-spinner"\n                   diameter="16" />\n    }\n\n    @if(!hideClearSearchButton && value && !searching)\n    {\n      <button mat-icon-button\n              aria-label="Clear"\n              (click)="_reset(true)"\n              class="mat-select-search-clear">\n        @if(clearIcon)\n        {\n          <ng-content select="[ngxMatSelectSearchClear]" />\n        }\n        @else if(closeSvgIcon)\n        {\n          <mat-icon [svgIcon]="closeSvgIcon" />\n        }\n        @else\n        {\n          <mat-icon>\n            {{closeIcon}}\n          </mat-icon>\n        }\n      </button>\n    }\n\n\n    <ng-content select=".mat-select-search-custom-header-content" />\n  </div>\n\n  <mat-divider />\n</div>\n\n@if(_showNoEntriesFound$ | async)\n{\n  <div class="mat-select-search-no-entries-found">\n    @if(noEntriesFound)\n    {\n      <ng-content select="[ngxMatSelectNoEntriesFound]" />\n    }\n    @else\n    {\n      {{noEntriesFoundLabel}}\n    }\n  </div>\n}\n\n',
      styles: [".mat-select-search-hidden{visibility:hidden}.mat-select-search-inner{position:absolute;top:0;left:0;width:100%;z-index:100;font-size:inherit;box-shadow:none;background-color:var(--mat-sys-surface-container, var(--mat-select-panel-background-color, white))}.mat-select-search-inner.mat-select-search-inner-multiple.mat-select-search-inner-toggle-all .mat-select-search-inner-row{display:flex;align-items:center}.mat-select-search-input{box-sizing:border-box;width:100%;border:none;font-family:inherit;font-size:inherit;color:currentColor;outline:none;background-color:var(--mat-sys-surface-container, var(--mat-select-panel-background-color, white));padding:0 44px 0 16px;height:47px;line-height:47px}:host-context([dir=rtl]) .mat-select-search-input{padding-right:16px;padding-left:44px}.mat-select-search-input::placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color)}.mat-select-search-inner-toggle-all .mat-select-search-input{padding-left:5px}.mat-select-search-no-entries-found{padding-top:8px}.mat-select-search-clear{position:absolute;right:4px;top:0}:host-context([dir=rtl]) .mat-select-search-clear{right:auto;left:4px}.mat-select-search-spinner{position:absolute;right:16px;top:calc(50% - 8px)}:host-context([dir=rtl]) .mat-select-search-spinner{right:auto;left:16px}::ng-deep .mat-mdc-option[aria-disabled=true].contains-mat-select-search{position:sticky;top:-8px;z-index:1;opacity:1;margin-top:-8px;pointer-events:all}::ng-deep .mat-mdc-option[aria-disabled=true].contains-mat-select-search .mat-icon{margin-right:0;margin-left:0}::ng-deep .mat-mdc-option[aria-disabled=true].contains-mat-select-search mat-pseudo-checkbox{display:none}::ng-deep .mat-mdc-option[aria-disabled=true].contains-mat-select-search .mdc-list-item__primary-text{opacity:1}.mat-select-search-toggle-all-checkbox{padding-left:5px}:host-context([dir=rtl]) .mat-select-search-toggle-all-checkbox{padding-left:0;padding-right:5px}\n"]
    }]
  }], () => [{
    type: MatSelect,
    decorators: [{
      type: Inject,
      args: [MatSelect]
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: ViewportRuler
  }, {
    type: MatOption,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MatOption]
    }]
  }, {
    type: MatFormField,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MatFormField]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_SELECTSEARCH_DEFAULT_OPTIONS]
    }]
  }], {
    placeholderLabel: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    closeIcon: [{
      type: Input
    }],
    closeSvgIcon: [{
      type: Input
    }],
    noEntriesFoundLabel: [{
      type: Input
    }],
    clearSearchInput: [{
      type: Input
    }],
    searching: [{
      type: Input
    }],
    disableInitialFocus: [{
      type: Input
    }],
    enableClearOnEscapePressed: [{
      type: Input
    }],
    preventHomeEndKeyPropagation: [{
      type: Input
    }],
    disableScrollToActiveOnOptionsChanged: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    showToggleAllCheckbox: [{
      type: Input
    }],
    toggleAllCheckboxChecked: [{
      type: Input
    }],
    toggleAllCheckboxIndeterminate: [{
      type: Input
    }],
    toggleAllCheckboxTooltipMessage: [{
      type: Input
    }],
    toggleAllCheckboxTooltipPosition: [{
      type: Input
    }],
    hideClearSearchButton: [{
      type: Input
    }],
    alwaysRestoreSelectedOptionsMulti: [{
      type: Input
    }],
    recreateValuesArray: [{
      type: Input
    }],
    toggleAll: [{
      type: Output
    }],
    searchSelectInput: [{
      type: ViewChild,
      args: ["searchSelectInput", {
        read: ElementRef,
        static: true
      }]
    }],
    innerSelectSearch: [{
      type: ViewChild,
      args: ["innerSelectSearch", {
        read: ElementRef,
        static: true
      }]
    }],
    clearIcon: [{
      type: ContentChild,
      args: [MatSelectSearchClearDirective]
    }],
    noEntriesFound: [{
      type: ContentChild,
      args: [MatSelectNoEntriesFoundDirective]
    }]
  });
})();
var NgxMatSelectSearchModule = class _NgxMatSelectSearchModule {
  static \u0275fac = function NgxMatSelectSearchModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxMatSelectSearchModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NgxMatSelectSearchModule,
    imports: [MatSelectSearchComponent, MatSelectSearchClearDirective, MatSelectNoEntriesFoundDirective],
    exports: [MatSelectSearchComponent, MatSelectSearchClearDirective, MatSelectNoEntriesFoundDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatSelectSearchComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatSelectSearchModule, [{
    type: NgModule,
    args: [{
      imports: [MatSelectSearchComponent, MatSelectSearchClearDirective, MatSelectNoEntriesFoundDirective],
      exports: [MatSelectSearchComponent, MatSelectSearchClearDirective, MatSelectNoEntriesFoundDirective]
    }]
  }], null, null);
})();

// src/app/services/projects-list.service.ts
var _ProjectsListService = class _ProjectsListService {
  constructor() {
    this.request = inject(RequestService);
    this.lang = inject(SelectedLangService);
    this.langService = "%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22" + this.lang.selectedLang + "%22%2C%22en%22.%20%7D%0A";
  }
  projectsListBuilding(id) {
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20WHERE%20%7B";
    let suffix = "%3Fitem%20wdt%3AP2%20wd%3A";
    let suffix2 = ".%7D%0A";
    let u = this.newSparqlAddress(prefix + this.langService + suffix + id + suffix2);
    return this.request.getList(u).pipe(map((res) => this.listFromSparql(res)));
  }
  listFromSparql(res) {
    if (res !== void 0) {
      if (res.results !== void 0) {
        let v = res.results.bindings;
        for (let i = 0; i < v.length; i++) {
          v[i]["item"].id = v[i]["item"].value.replace("https://database.factgrid.de/entity/", "");
        }
        ;
        v.sort((a, b) => {
          if (a.itemLabel.value.toUpperCase() < b.itemLabel.value.toUpperCase()) {
            return -1;
          }
          if (b.itemLabel.value.toUpperCase() > b.itemLabel.value.toUpperCase()) {
            return 1;
          }
          return 0;
        });
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
};
_ProjectsListService.\u0275fac = function ProjectsListService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProjectsListService)();
};
_ProjectsListService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectsListService, factory: _ProjectsListService.\u0275fac, providedIn: "root" });
var ProjectsListService = _ProjectsListService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectsListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/services/properties-list.service.ts
var _PropertiesListService = class _PropertiesListService {
  constructor() {
    this.request = inject(RequestService);
    this.lang = inject(SelectedLangService);
    this.langService = "%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22" + this.lang.selectedLang + "%22%2C%22en%22.%20%7D%0A";
  }
  propertiesListBuilding(id) {
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FpropertyType%20WHERE%20%7B";
    let prefix2 = "VALUES%20%3Fproperties%20%7B%20wd%3A";
    let suffix = "%20wd%3AQ1089730%7D%20%3Fitem%20wdt%3AP8%20%3Fproperties%3B%20wikibase%3ApropertyType%20%3FpropertyType%20MINUS%20%7B%20%3Fproperty%20wikibase%3ApropertyType%20wikibase%3AUrl%20%7D%20MINUS%20%7B%20%3Fitem%20wikibase%3ApropertyType%20wikibase%3AExternalId%20%7D%20MINUS%20%7B%20%3Fitem%20wikibase%3ApropertyType%20wikibase%3AUrl%20%7D%20MINUS%20%7B%20%3Fitem%20wikibase%3ApropertyType%20wikibase%3AGlobeCoordinate%20%7D%20MINUS%20%7B%20%3Fitem%20wikibase%3ApropertyType%20wikibase%3AGeoShape%20%7D%20MINUS%20%7B%20%3Fitem%20wikibase%3ApropertyType%20wikibase%3ACommonsMedia%20%7D%20%7D%20ORDER%20BY%20%3FitemLabel%0A";
    let address = prefix + this.langService + prefix2 + id + suffix;
    console.log(address);
    let u = this.newSparqlAddress(address);
    console.log(u);
    return this.request.getList(u).pipe(map((res) => this.transformListFromSparql(res)));
  }
  propertiesList2Building(id) {
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20WHERE%20%7B";
    let suffix = "%3Fitem%20wdt%3AP2%20wd%3A";
    let suffix2 = ".%7D%0A";
    console.log(prefix + this.langService + suffix + id + suffix2);
    let u = this.newSparqlAddress(prefix + this.langService + suffix + id + suffix2);
    return this.request.getList(u).pipe(map((res) => this.listFromSparql(res)));
  }
  get qualifierPropertiesListBuilding() {
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FpropertyType%20%20WHERE%20%7B%20";
    let suffix = "%20VALUES%20%3Fqualifier%20%7B%20wd%3AQ514317%20wd%3AQ21403%20%7D%0A%20%3Fitem%20wikibase%3ApropertyType%20%3FpropertyType%3B%0A%20%20%20%20%20%20%20%20%20%20%20wdt%3AP8%20%3Fqualifier.%0A%7D%0AORDER%20BY%20%3FitemLabel";
    let v;
    let u = this.newSparqlAddress(prefix + this.langService + suffix);
    return this.request.getList(u).pipe(map((res) => this.listFromSparql(res)), map((res) => this.transformListFromSparql(res)));
  }
  listFromSparql(res) {
    if (res !== void 0) {
      if (res.results !== void 0) {
        let v = res.results.bindings;
        for (let i = 0; i < v.length; i++) {
          v[i]["item"].id = v[i]["item"].value.replace("https://database.factgrid.de/entity/", "");
        }
        ;
        v.sort((a, b) => {
          if (a.itemLabel.value.toUpperCase() < b.itemLabel.value.toUpperCase()) {
            return -1;
          }
          if (b.itemLabel.value.toUpperCase() > b.itemLabel.value.toUpperCase()) {
            return 1;
          }
          return 0;
        });
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
  deepNatureOf() {
    let u = "Instance of (deep search)";
    if (this.lang.selectedLang === "de") {
      u = "Ist ein(e) (vertiefte Suche)";
    }
    ;
    if (this.lang.selectedLang === "fr") {
      u = "Nature de l'\xE9l\xE9ment (recherche approfondie)";
    }
    ;
    if (this.lang.selectedLang === "es") {
      u = "Instancia de (investigaci\xF3n en profundidad)";
    }
    ;
    if (this.lang.selectedLang === "it") {
      u = "\xC8 (ricerca approfondita)";
    }
    ;
    return u;
  }
  changeList(data) {
    if (data !== void 0) {
      for (let i = 0; i < data.length; i++) {
        let type = this.removeSubstring(data[i]["propertyType"].value, "http://wikiba.se/ontology#");
        data[i]["itemLabel"].label = data[i]["itemLabel"].value + " (" + type + ")";
      }
      ;
    }
    return data;
  }
  transformListFromSparql(res) {
    if (res !== void 0 && res.results !== void 0) {
      let v = res.results.bindings;
      return v.map((item) => {
        const value = item.itemLabel.value;
        const type = item.propertyType.value.replace("http://wikiba.se/ontology#", "");
        return {
          value,
          id: item.item.value.replace("https://database.factgrid.de/entity/", ""),
          type,
          label: `${value} (${type})`
          // Ajouter la propriété label
        };
      }).sort((a, b) => {
        if (a.value.toUpperCase() < b.value.toUpperCase()) {
          return -1;
        }
        if (a.value.toUpperCase() > b.value.toUpperCase()) {
          return 1;
        }
        return 0;
      });
    }
    return [];
  }
  removeSubstring(str, substring) {
    const regex = new RegExp(substring, "g");
    return str.replace(regex, "");
  }
};
_PropertiesListService.\u0275fac = function PropertiesListService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PropertiesListService)();
};
_PropertiesListService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PropertiesListService, factory: _PropertiesListService.\u0275fac, providedIn: "root" });
var PropertiesListService = _PropertiesListService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertiesListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/search/advanced-search/project-select/project-select.component.ts
var _c02 = ["multiSelect"];
function ProjectSelectComponent_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    \u0275\u0275property("value", project_r2.item.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", project_r2.itemLabel.value, " ");
  }
}
var _ProjectSelectComponent = class _ProjectSelectComponent {
  constructor() {
    this.setLanguage = inject(SetLanguageService);
    this.lang = inject(SelectedLangService);
    this.formBuilder = inject(FormBuilder);
    this.placeholderLabel = "Search";
    this.projectSearchInput = new FormControl();
    this.projectMultiFilterCtrl = new FormControl("");
    this.filteredProjectMulti = new ReplaySubject(1);
    this.selectionChange = new EventEmitter();
    this._onDestroy = new Subject();
  }
  set data(data) {
    this._data = data;
    this.filteredProjectMulti.next(this.data.slice());
  }
  get data() {
    return this._data;
  }
  ngOnInit() {
    this.projectMultiFilterCtrl.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this.filterProjectMulti();
    });
  }
  ngAfterViewInit() {
    this.setInitialValue();
  }
  setInitialValue() {
    this.filteredProjectMulti;
  }
  onSelectChange($event) {
  }
  filterProjectMulti() {
    if (!this.data) {
      return;
    }
    let search = this.projectMultiFilterCtrl.value;
    if (!search) {
      this.filteredProjectMulti.next(this.data.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredProjectMulti.next(this.data.filter((entity) => entity.itemLabel.value.toLowerCase().indexOf(search) > -1));
  }
  onSelection(event) {
    this.selectionChange.emit(new MatSelectChange(this.multiSelect, event.value));
  }
  ngOnDestroy() {
  }
};
_ProjectSelectComponent.\u0275fac = function ProjectSelectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProjectSelectComponent)();
};
_ProjectSelectComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectSelectComponent, selectors: [["app-project-select"]], viewQuery: function ProjectSelectComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c02, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.multiSelect = _t.first);
  }
}, inputs: { placeholderLabel: "placeholderLabel", data: "data" }, outputs: { selectionChange: "selectionChange" }, decls: 9, vars: 6, consts: [["multiSelect", ""], [1, "cardBackground"], ["id", "projects", 1, "search-center2"], ["placeholder", "Projects", 3, "selectionChange", "formControl", "multiple"], ["placeholderLabel", "Search", "noEntriesFoundLabel", "Not found", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function ProjectSelectComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "mat-form-field")(3, "mat-select", 3, 0);
    \u0275\u0275listener("selectionChange", function ProjectSelectComponent_Template_mat_select_selectionChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSelection($event));
    });
    \u0275\u0275elementStart(5, "mat-option");
    \u0275\u0275element(6, "ngx-mat-select-search", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProjectSelectComponent_mat_option_7_Template, 2, 2, "mat-option", 5);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("formControl", ctx.projectSearchInput)("multiple", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("formControl", ctx.projectMultiFilterCtrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(8, 4, ctx.filteredProjectMulti));
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  AsyncPipe,
  ReactiveFormsModule,
  NgControlStatus,
  FormControlDirective,
  FormsModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  MatFormField,
  MatSelect,
  MatOption,
  MatFormFieldModule,
  NgxMatSelectSearchModule,
  MatSelectSearchComponent
], styles: ["\n\n.search-center2[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n}\n#projects[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 60vw;\n}\n@media (max-width: 959.98px) {\n  #projects[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n/*# sourceMappingURL=project-select.component.css.map */"] });
var ProjectSelectComponent = _ProjectSelectComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectSelectComponent, [{
    type: Component,
    args: [{ selector: "app-project-select", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      MatCardModule,
      MatIconModule,
      MatButtonModule,
      MatSelectModule,
      MatFormFieldModule,
      MatSelect,
      NgxMatSelectSearchModule
    ], template: '\r\n<div class="cardBackground">\r\n  <div class="search-center2" id="projects">\r\n    <mat-form-field>\r\n      <mat-select [formControl]="projectSearchInput"\r\n                  placeholder="Projects"\r\n                  [multiple]="true"\r\n                  #multiSelect\r\n                  (selectionChange)="onSelection($event)">\r\n        <mat-option>\r\n          <ngx-mat-select-search [formControl]="projectMultiFilterCtrl"\r\n                                 placeholderLabel="Search"\r\n                                 noEntriesFoundLabel="Not found"></ngx-mat-select-search>\r\n        </mat-option>\r\n        <mat-option *ngFor="let project of filteredProjectMulti | async" [value]="project.item.id">\r\n          {{project.itemLabel.value}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n', styles: ["/* src/app/search/advanced-search/project-select/project-select.component.scss */\n.search-center2 {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n}\n#projects mat-form-field {\n  width: 60vw;\n}\n@media (max-width: 959.98px) {\n  #projects mat-form-field {\n    width: 90vw;\n  }\n}\n/*# sourceMappingURL=project-select.component.css.map */\n"] }]
  }], null, { placeholderLabel: [{
    type: Input
  }], data: [{
    type: Input
  }], multiSelect: [{
    type: ViewChild,
    args: ["multiSelect", { static: true }]
  }], selectionChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectSelectComponent, { className: "ProjectSelectComponent", filePath: "src/app/search/advanced-search/project-select/project-select.component.ts", lineNumber: 36 });
})();

// src/app/services/search-engine.service.ts
var _SearchEngineService = class _SearchEngineService {
  constructor() {
    this.request = inject(RequestService);
    this.lang = inject(SelectedLangService);
    this.baseGetURL = "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=";
    this.getUrlSuffix = "&format=json&origin=*";
  }
  input(de) {
    de.pipe(
      debounceTime(400),
      switchMap((label) => this.request.searchItem(label, this.lang.selectedLang)),
      map((res) => this.createList(res)),
      map((res) => res == "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=&format=json&origin=*" ? "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=Q220375&format=json&origin=*" : res),
      debounceTime(200),
      switchMap((url) => this.request.getItem(url)),
      // tap(res => console.log(res)),
      //  takeWhile (res => res !== undefined),
      filter((res) => res !== void 0)
    );
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
};
_SearchEngineService.\u0275fac = function SearchEngineService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SearchEngineService)();
};
_SearchEngineService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SearchEngineService, factory: _SearchEngineService.\u0275fac, providedIn: "root" });
var SearchEngineService = _SearchEngineService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchEngineService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/search/advanced-search/variable.ts
var ITEMTYPES = [
  { label: "?activity", id: "Q256699", order: 0 },
  { label: "?archive", id: "Q21870", order: 0 },
  { label: "?artefact", id: "Q101755", order: 0 },
  { label: "?book", id: "Q100626", order: 0 },
  { label: "?career", id: "Q77493", order: 0 },
  { label: "?city", id: "Q77500", order: 0 },
  { label: "?context", id: "Q77500", order: 0 },
  { label: "?country", id: "Q77500", order: 0 },
  { label: "?date", id: "Q77483", order: 0 },
  { label: "?document", id: "Q21870", order: 0 },
  { label: "?education", id: "Q100631", order: 0 },
  { label: "?event", id: "Q77499", order: 0 },
  { label: "?freemasonry", id: "Q23197", order: 0 },
  { label: "?group", id: "Q77498", order: 0 },
  { label: "?human", id: "Q77478", order: 0 },
  { label: "?human work", id: "Q77495", order: 0 },
  { label: "?name", id: "Q77488", order: 0 },
  { label: "?object", id: "Q101755", order: 0 },
  { label: "?organisation", id: "Q77501", order: 0 },
  { label: "?person", id: "Q77478", order: 0 },
  { label: "?people", id: "Q77478", order: 0 },
  { label: "?place", id: "Q77500", order: 0 },
  { label: "?printed document", id: "Q100626", order: 0 },
  { label: "?profession", id: "Q256699", order: 0 },
  { label: "?publication", id: "Q77502", order: 0 }
];
var LITERALS = [
  { label: "write literal string", type: "String", col: 0 },
  { label: "write date : YYYY-MM-DD", type: "Time", col: 0 },
  { label: "write number", type: "Quantity", col: 0 },
  { label: "None", type: "Any", col: 2 },
  { label: "None", type: "Any", col: 3 },
  { label: "None", type: "Any", col: 4 },
  { label: "?date", type: "Time", col: 0 },
  { label: "?date1", type: "Time", col: 1 },
  { label: "?date2", type: "Time", col: 2 },
  { label: "?date3", type: "Time", col: 3 },
  { label: "?date4", type: "Time", col: 4 },
  { label: "?date5", type: "Time", col: 5 },
  { label: "?string", type: "String", col: 0 },
  { label: "?string1", type: "String", col: 1 },
  { label: "?string2", type: "String", col: 2 },
  { label: "?string3", type: "String", col: 3 },
  { label: "?string4", type: "String", col: 4 },
  /*{ label: '?context', type: 'String', col: 0 },
  { label: '?context1', type: 'String', col: 1 },
  { label: '?context2', type: 'String', col: 2 },
  { label: '?context3', type: 'String', col: 3 },
  { label: '?context4', type: 'String', col: 4 },*/
  { label: "?amount", type: "Quantity", col: 0 },
  { label: "?amount1", type: "Quantity", col: 1 },
  { label: "?amount2", type: "Quantity", col: 2 },
  { label: "?amount3", type: "Quantity", col: 3 },
  { label: "?number", type: "Quantity", col: 0 },
  { label: "?number1", type: "Quantity", col: 1 },
  { label: "?number2", type: "Quantity", col: 2 },
  { label: "?number3", type: "Quantity", col: 3 }
];
var QUALIFIERTYPES = [1, 5, 6, 8, 10, 13, 16, 17, 19, 20, 21, 23];
var MUTATOR = [
  [{ label: "?activity", id: "Q256699", col: 0 }, { label: "?archive", id: "Q21870", col: 1 }, { label: "?artefact", id: "Q101755", col: 2 }, { label: "?book", id: "Q100626", col: 3 }, { label: "?career", id: "Q77493", col: 4 }, { label: "?city", id: "Q77500", col: 5 }, { label: "?country", id: "Q77500", col: 6 }, { label: "?date", id: "Q77483", col: 7 }, { label: "?document", id: "Q21870", col: 8 }, { label: "?education", id: "Q100631", col: 9 }, { label: "?event", id: "Q77499", col: 10 }, { label: "?freemasonry", id: "Q23197", col: 11 }, { label: "?group", id: "Q77498", col: 12 }, { label: "?human", id: "Q77478", col: 13 }, { label: "?human work", id: "Q77495", col: 14 }, { label: "?name", id: "Q77488", col: 15 }, { label: "?object", id: "Q101755", col: 16 }, { label: "?organisation", id: "Q77501", col: 17 }, { label: "?people", id: "Q77478", col: 18 }, { label: "?person", id: "Q77478", col: 19 }, { label: "?place", id: "Q77500", col: 20 }, { label: "?printed document", id: "Q100626", col: 21 }, { label: "?profession", id: "Q256699", col: 22 }, { label: "?publication", id: "Q77502", col: 23 }],
  [{ label: "?activity1", id: "Q256699", col: 0 }, { label: "?archive1", id: "Q21870", col: 1 }, { label: "?artefact1", id: "Q101755", col: 2 }, { label: "?book1", id: "Q100626", col: 3 }, { label: "?career1", id: "Q77493", col: 4 }, { label: "?city1", id: "Q77500", col: 5 }, { label: "?country1", id: "Q77500", col: 6 }, { label: "?date1", id: "Q77483", col: 7 }, { label: "?document1", id: "Q21870", col: 8 }, { label: "?education1", id: "Q100631", col: 9 }, { label: "?event1", id: "Q77499", col: 10 }, { label: "?freemasonry1", id: "Q23197", col: 11 }, { label: "?group1", id: "Q77498", col: 12 }, { label: "?human1", id: "Q77478", col: 13 }, { label: "?human work1", id: "Q77495", col: 14 }, { label: "?name1", id: "Q77488", col: 15 }, { label: "?object1", id: "Q101755", col: 16 }, { label: "?organisation1", id: "Q77501", col: 17 }, { label: "?people1", id: "Q77478", col: 18 }, { label: "?person1", id: "Q77478", col: 19 }, { label: "?place1", id: "Q77500", col: 20 }, { label: "?printed document1", id: "Q100626", col: 21 }, { label: "?profession1", id: "Q256699", col: 22 }, { label: "?publication1", id: "Q77502", col: 23 }],
  [{ label: "?activity2", id: "Q256699", col: 0 }, { label: "?archive2", id: "Q21870", col: 1 }, { label: "?artefact2", id: "Q101755", col: 2 }, { label: "?book2", id: "Q100626", col: 3 }, { label: "?career2", id: "Q77493", col: 4 }, { label: "?city2", id: "Q77500", col: 5 }, { label: "?country2", id: "Q77500", col: 6 }, { label: "?date2", id: "Q77483", col: 7 }, { label: "?document2", id: "Q21870", col: 8 }, { label: "?education2", id: "Q100631", col: 9 }, { label: "?event2", id: "Q77499", col: 10 }, { label: "?freemasonry2", id: "Q23197", col: 11 }, { label: "?group2", id: "Q77498", col: 12 }, { label: "?human2", id: "Q77478", col: 13 }, { label: "?human work2", id: "Q77495", col: 14 }, { label: "?name2", id: "Q77488", col: 15 }, { label: "?object2", id: "Q101755", col: 16 }, { label: "?organisation2", id: "Q77501", col: 17 }, { label: "?people2", id: "Q77478", col: 18 }, { label: "?person2", id: "Q77478", col: 19 }, { label: "?place2", id: "Q77500", col: 20 }, { label: "?printed document2", id: "Q100626", col: 21 }, { label: "?profession2", id: "Q256699", col: 22 }, { label: "?publication2", id: "Q77502", col: 23 }],
  [{ label: "?activity3", id: "Q256699", col: 0 }, { label: "?archive3", id: "Q21870", col: 1 }, { label: "?artefact3", id: "Q101755", col: 2 }, { label: "?book3", id: "Q100626", col: 3 }, { label: "?career3", id: "Q77493", col: 4 }, { label: "?city3", id: "Q77500", col: 5 }, { label: "?country3", id: "Q77500", col: 6 }, { label: "?date3", id: "Q77483", col: 7 }, { label: "?document3", id: "Q21870", col: 8 }, { label: "?education3", id: "Q100631", col: 9 }, { label: "?event3", id: "Q77499", col: 10 }, { label: "?freemasonry3", id: "Q23197", col: 11 }, { label: "?group3", id: "Q77498", col: 12 }, { label: "?human3", id: "Q77478", col: 13 }, { label: "?human work3", id: "Q77495", col: 14 }, { label: "?name3", id: "Q77488", col: 15 }, { label: "?object3", id: "Q101755", col: 16 }, { label: "?organisation3", id: "Q77501", col: 17 }, { label: "?people3", id: "Q77478", col: 18 }, { label: "?person3", id: "Q77478", col: 19 }, { label: "?place3", id: "Q77500", col: 20 }, { label: "?printed document3", id: "Q100626", col: 21 }, { label: "?profession3", id: "Q256699", col: 22 }, { label: "?publication3", id: "Q77502", col: 23 }],
  [{ label: "?activity4", id: "Q256699", col: 0 }, { label: "?archive4", id: "Q21870", col: 1 }, { label: "?artefact4", id: "Q101755", col: 2 }, { label: "?book4", id: "Q100626", col: 3 }, { label: "?career4", id: "Q77493", col: 4 }, { label: "?city4", id: "Q77500", col: 5 }, { label: "?country4", id: "Q77500", col: 6 }, { label: "?date4", id: "Q77483", col: 7 }, { label: "?document4", id: "Q21870", col: 8 }, { label: "?education4", id: "Q100631", col: 9 }, { label: "?event4", id: "Q77499", col: 10 }, { label: "?freemasonry4", id: "Q23197", col: 11 }, { label: "?group4", id: "Q77498", col: 12 }, { label: "?human4", id: "Q77478", col: 13 }, { label: "?human work4", id: "Q77495", col: 14 }, { label: "?name4", id: "Q77488", col: 15 }, { label: "?object4", id: "Q101755", col: 16 }, { label: "?organisation4", id: "Q77501", col: 17 }, { label: "?people4", id: "Q77478", col: 18 }, { label: "?person4", id: "Q77478", col: 19 }, { label: "?place4", id: "Q77500", col: 20 }, { label: "?printed document4", id: "Q100626", col: 21 }, { label: "?profession4", id: "Q256699", col: 22 }, { label: "?publication4", id: "Q77502", col: 23 }],
  [{ label: "?activity5", id: "Q256699", col: 0 }, { label: "?archive5", id: "Q21870", col: 1 }, { label: "?artefact5", id: "Q101755", col: 2 }, { label: "?book5", id: "Q100626", col: 3 }, { label: "?career5", id: "Q77493", col: 4 }, { label: "?city5", id: "Q77500", col: 5 }, { label: "?country5", id: "Q77500", col: 6 }, { label: "?date5", id: "Q77483", col: 7 }, { label: "?document5", id: "Q21870", col: 8 }, { label: "?education5", id: "Q100631", col: 9 }, { label: "?event5", id: "Q77499", col: 10 }, { label: "?freemasonry5", id: "Q23197", col: 11 }, { label: "?group5", id: "Q77498", col: 12 }, { label: "?human5", id: "Q77478", col: 13 }, { label: "?human work5", id: "Q77495", col: 14 }, { label: "?name5", id: "Q77488", col: 15 }, { label: "?object5", id: "Q101755", col: 16 }, { label: "?organisation5", id: "Q77501", col: 17 }, { label: "?people5", id: "Q77478", col: 18 }, { label: "?person5", id: "Q77478", col: 19 }, { label: "?place5", id: "Q77500", col: 20 }, { label: "?printed document5", id: "Q100626", col: 21 }, { label: "?profession5", id: "Q256699", col: 22 }, { label: "?publication5", id: "Q77502", col: 23 }]
];

// src/app/search/advanced-search/services/data.service.ts
var _DataService = class _DataService {
  constructor() {
    this.mutator = new BehaviorSubject(MUTATOR);
    this.mutator$ = this.mutator.asObservable();
    this.mutatorForItemValue = new BehaviorSubject(MUTATOR);
    this.mutatorForItemValue$ = this.mutator.asObservable();
    this.mutatorForNextStatement = new BehaviorSubject(MUTATOR);
    this.mutatorForNextStatement$ = this.mutatorForNextStatement.asObservable();
    this.itemTypes = new BehaviorSubject(ITEMTYPES);
    this.itemTypes$ = this.itemTypes.asObservable();
    this.itemTypes1 = new BehaviorSubject([]);
    this.itemTypes1$ = this.itemTypes1.asObservable();
    this.itemTypes2 = new BehaviorSubject([]);
    this.itemTypes2$ = this.itemTypes2.asObservable();
    this.formerItemTypes = new BehaviorSubject([ITEMTYPES]);
    this.formerItemTypes$ = this.formerItemTypes.asObservable();
    this.propertiesList = new BehaviorSubject([]);
    this.propertiesList$ = this.propertiesList.asObservable();
    this.currentStatement = new BehaviorSubject(0);
    this.currentStatement$ = this.currentStatement.asObservable();
  }
  updateMutator(mutator) {
    this.mutator.next(mutator);
  }
  updateMutatorForItemValue(mutator) {
    this.mutatorForItemValue.next(mutator);
  }
  updateMutatorForNextStatement(mutator) {
    this.mutatorForNextStatement.next(mutator);
  }
  lastItemTypes$(u$) {
    return u$.pipe(map((res) => res[res.length - 1]));
  }
  updateItemTypes(item) {
    this.itemTypes.next(item);
  }
  updateItemTypes1(item) {
    this.itemTypes1.next(item);
  }
  updateItemTypes2(item) {
    this.itemTypes2.next(item);
  }
  updateFormerItemTypes(itemTypes) {
    this.formerItemTypes.next(itemTypes);
  }
  updatePropertiesList(list) {
    this.propertiesList.next(list);
  }
  updateCurrentStatement(i) {
    this.currentStatement.next(i);
  }
};
_DataService.\u0275fac = function DataService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DataService)();
};
_DataService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataService, factory: _DataService.\u0275fac, providedIn: "root" });
var DataService = _DataService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/search/advanced-search/services/statements-controls.service.ts
var _StatementsControlsService = class _StatementsControlsService {
  constructor() {
  }
  itemType(statements, i) {
    if (statements && statements.length > i) {
      return statements.at(i).get("value.itemType");
    }
    return null;
  }
  itemValue(statements, i) {
    return statements.at(i).get("value.itemValue");
  }
  propertyValues(statements, i) {
    return statements.at(i).get("properties");
  }
  literalValue(statements, i) {
    return statements.at(i).get("value.literalValue");
  }
  literalString(statements, i) {
    return statements.at(i).get("value.literalString");
  }
  qualifiers(statements, i) {
    return statements.at(i).get("qualifiers");
  }
  qualifierProperty(qualifiers, j) {
    return qualifiers.at(j).get("qualifierProperty");
  }
  qualifierValue(qualifiers, j) {
    return qualifiers.at(j).controls["value"].get("qualifierValue");
  }
  qualifierLiteralValue(qualifiers, j) {
    return qualifiers.at(j).controls["value"].get("qualifierLiteralValue");
  }
  qualifierLiteralString(qualifiers, j) {
    return qualifiers.at(j).controls["value"].get("qualifierLiteralString");
  }
  patchQualifierValue(value, qualifiers, j) {
    let control = this.qualifierValue(qualifiers, j);
    return control.patchValue("value");
  }
};
_StatementsControlsService.\u0275fac = function StatementsControlsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StatementsControlsService)();
};
_StatementsControlsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StatementsControlsService, factory: _StatementsControlsService.\u0275fac, providedIn: "root" });
var StatementsControlsService = _StatementsControlsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatementsControlsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/search/advanced-search/statement-search/statement-search.component.ts
var _c03 = ["matRef"];
var _c12 = ["singleSelect"];
var _c22 = ["multiSelect"];
var _c32 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c5 = (a0, a1, a2) => [a0, a1, a2];
var _forTrack0 = ($index, $item) => $item.itemType;
var _forTrack1 = ($index, $item) => $item.qualifierProperty[1];
function StatementSearchComponent_Conditional_5_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " (optional) ");
  }
}
function StatementSearchComponent_Conditional_5_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const statement_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" statement ", statement_r1.itemType[0] + 1, " : subject: ", statement_r1.itemType[1], " ");
  }
}
function StatementSearchComponent_Conditional_5_For_1_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const property_r2 = ctx.$implicit;
    \u0275\u0275textInterpolate(property_r2[3]);
  }
}
function StatementSearchComponent_Conditional_5_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " -> property: ");
    \u0275\u0275repeaterCreate(1, StatementSearchComponent_Conditional_5_For_1_Conditional_3_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const statement_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(statement_r1.properties);
  }
}
function StatementSearchComponent_Conditional_5_For_1_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const statement_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", statement_r1.value.itemValue[1], " ");
  }
}
function StatementSearchComponent_Conditional_5_For_1_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const statement_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", statement_r1.value.literalValue[1], " ");
  }
}
function StatementSearchComponent_Conditional_5_For_1_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const statement_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", statement_r1.value.literalString, " ");
  }
}
function StatementSearchComponent_Conditional_5_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " -> object: ");
    \u0275\u0275conditionalCreate(1, StatementSearchComponent_Conditional_5_For_1_Conditional_4_Conditional_1_Template, 1, 1);
    \u0275\u0275conditionalCreate(2, StatementSearchComponent_Conditional_5_For_1_Conditional_4_Conditional_2_Template, 1, 1);
    \u0275\u0275conditionalCreate(3, StatementSearchComponent_Conditional_5_For_1_Conditional_4_Conditional_3_Template, 1, 1);
  }
  if (rf & 2) {
    const statement_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(statement_r1.value.itemValue ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(statement_r1.value.literalValue ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(statement_r1.value.literalString ? 3 : -1);
  }
}
function StatementSearchComponent_Conditional_5_For_1_Conditional_5_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const qualifier_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" qualifier ", qualifier_r3.qualifierProperty[1] + 1, " : property: ", qualifier_r3.qualifierProperty[4]);
  }
}
function StatementSearchComponent_Conditional_5_For_1_Conditional_5_For_2_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const qualifier_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" -> object: ", qualifier_r3.value.qualifierValue[2]);
  }
}
function StatementSearchComponent_Conditional_5_For_1_Conditional_5_For_2_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const qualifier_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" -> object: ", qualifier_r3.value.qualifierLiteralValue[2]);
  }
}
function StatementSearchComponent_Conditional_5_For_1_Conditional_5_For_2_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const qualifier_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" -> object: ", qualifier_r3.value.qualifierLiteralString);
  }
}
function StatementSearchComponent_Conditional_5_For_1_Conditional_5_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, StatementSearchComponent_Conditional_5_For_1_Conditional_5_For_2_Conditional_2_Conditional_0_Template, 1, 1);
    \u0275\u0275conditionalCreate(1, StatementSearchComponent_Conditional_5_For_1_Conditional_5_For_2_Conditional_2_Conditional_1_Template, 1, 1);
    \u0275\u0275conditionalCreate(2, StatementSearchComponent_Conditional_5_For_1_Conditional_5_For_2_Conditional_2_Conditional_2_Template, 1, 1);
  }
  if (rf & 2) {
    const qualifier_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(qualifier_r3.value.qualifierValue ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(qualifier_r3.value.qualifierLiteralValue ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(qualifier_r3.value.qualifierLiteralString ? 2 : -1);
  }
}
function StatementSearchComponent_Conditional_5_For_1_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, StatementSearchComponent_Conditional_5_For_1_Conditional_5_For_2_Conditional_1_Template, 1, 2);
    \u0275\u0275conditionalCreate(2, StatementSearchComponent_Conditional_5_For_1_Conditional_5_For_2_Conditional_2_Template, 3, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const qualifier_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(qualifier_r3.qualifierProperty ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(qualifier_r3.value ? 2 : -1);
  }
}
function StatementSearchComponent_Conditional_5_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, StatementSearchComponent_Conditional_5_For_1_Conditional_5_For_2_Template, 3, 2, "div", 8, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const statement_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(statement_r1.qualifiers);
  }
}
function StatementSearchComponent_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, StatementSearchComponent_Conditional_5_For_1_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, StatementSearchComponent_Conditional_5_For_1_Conditional_2_Template, 1, 2);
    \u0275\u0275conditionalCreate(3, StatementSearchComponent_Conditional_5_For_1_Conditional_3_Template, 3, 0);
    \u0275\u0275conditionalCreate(4, StatementSearchComponent_Conditional_5_For_1_Conditional_4_Template, 4, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, StatementSearchComponent_Conditional_5_For_1_Conditional_5_Template, 3, 0, "div", 2);
  }
  if (rf & 2) {
    const statement_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(statement_r1.optional ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(statement_r1.itemType ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(statement_r1.properties ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(statement_r1.value ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(statement_r1.qualifiers ? 5 : -1);
  }
}
function StatementSearchComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, StatementSearchComponent_Conditional_5_For_1_Template, 6, 5, null, null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r3.query.value.statements);
  }
}
function StatementSearchComponent_For_13_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const itemType_r6 = ctx.$implicit;
    const \u0275$index_56_r7 = \u0275\u0275nextContext().$index;
    \u0275\u0275property("value", \u0275\u0275pureFunction5(2, _c32, \u0275$index_56_r7, itemType_r6.label, itemType_r6.value, itemType_r6.id, itemType_r6.order));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", itemType_r6.label, " ");
  }
}
function StatementSearchComponent_For_13_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const property_r8 = ctx.$implicit;
    const \u0275$index_56_r7 = \u0275\u0275nextContext().$index;
    \u0275\u0275property("value", \u0275\u0275pureFunction4(2, _c4, \u0275$index_56_r7, property_r8.value, property_r8.id, property_r8.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", property_r8.label, " ");
  }
}
function StatementSearchComponent_For_13_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, " Select several properties only if they have the same type ");
    \u0275\u0275elementEnd();
  }
}
function StatementSearchComponent_For_13_Conditional_23_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const itemValue_r10 = ctx.$implicit;
    const \u0275$index_56_r7 = \u0275\u0275nextContext(2).$index;
    \u0275\u0275property("value", \u0275\u0275pureFunction4(4, _c4, \u0275$index_56_r7, itemValue_r10.label, itemValue_r10.col, itemValue_r10.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", itemValue_r10.label, "", itemValue_r10.separator, "", itemValue_r10.description, " ");
  }
}
function StatementSearchComponent_For_13_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 20, 0);
    \u0275\u0275listener("selectionChange", function StatementSearchComponent_For_13_Conditional_23_Template_mat_select_selectionChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onValueSelect($event));
    });
    \u0275\u0275elementStart(3, "mat-option");
    \u0275\u0275element(4, "ngx-mat-select-search", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StatementSearchComponent_For_13_Conditional_23_mat_option_5_Template, 2, 9, "mat-option", 14);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const \u0275$index_56_r7 = \u0275\u0275nextContext().$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("formControl", ctx_r3.itemValueFilterCtrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 2, ctx_r3.filteredItemValuesArray[\u0275$index_56_r7]));
  }
}
function StatementSearchComponent_For_13_Conditional_24_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const literalVariable_r12 = ctx.$implicit;
    const \u0275$index_56_r7 = \u0275\u0275nextContext(2).$index;
    \u0275\u0275property("value", \u0275\u0275pureFunction3(2, _c5, \u0275$index_56_r7, literalVariable_r12.label, literalVariable_r12.col));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", literalVariable_r12.label, " ");
  }
}
function StatementSearchComponent_For_13_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 21, 0);
    \u0275\u0275listener("selectionChange", function StatementSearchComponent_For_13_Conditional_24_Template_mat_select_selectionChange_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onLiteralValueSelect($event));
    });
    \u0275\u0275repeaterCreate(3, StatementSearchComponent_For_13_Conditional_24_For_4_Template, 2, 6, "mat-option", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-form-field", 11);
    \u0275\u0275element(6, "input", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx_r3.placeholderForLiteralValue));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.literalVariables);
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx_r3.placeholderForLiteralString));
  }
}
function StatementSearchComponent_For_13_Conditional_25_For_2_Conditional_1_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const qualifier_r14 = ctx.$implicit;
    const \u0275$index_134_r15 = \u0275\u0275nextContext(2).$index;
    const \u0275$index_56_r7 = \u0275\u0275nextContext(2).$index;
    \u0275\u0275property("value", \u0275\u0275pureFunction5(2, _c32, \u0275$index_56_r7, \u0275$index_134_r15, qualifier_r14.id, qualifier_r14.propertyType.id, qualifier_r14.itemLabel.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", qualifier_r14.itemLabel.label, " ");
  }
}
function StatementSearchComponent_For_13_Conditional_25_For_2_Conditional_1_Conditional_14_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const qualifierValue_r17 = ctx.$implicit;
    const \u0275$index_134_r15 = \u0275\u0275nextContext(3).$index;
    const \u0275$index_56_r7 = \u0275\u0275nextContext(2).$index;
    \u0275\u0275property("value", \u0275\u0275pureFunction5(4, _c32, \u0275$index_56_r7, \u0275$index_134_r15, qualifierValue_r17.label, qualifierValue_r17.col, qualifierValue_r17.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", qualifierValue_r17.label, "", qualifierValue_r17.separator, "", qualifierValue_r17.description, " ");
  }
}
function StatementSearchComponent_For_13_Conditional_25_For_2_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 25, 0);
    \u0275\u0275listener("selectionChange", function StatementSearchComponent_For_13_Conditional_25_For_2_Conditional_1_Conditional_14_Template_mat_select_selectionChange_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.onQualifierValueSelect($event));
    });
    \u0275\u0275elementStart(3, "mat-option");
    \u0275\u0275element(4, "ngx-mat-select-search", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StatementSearchComponent_For_13_Conditional_25_For_2_Conditional_1_Conditional_14_mat_option_5_Template, 2, 10, "mat-option", 14);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControl", ctx_r3.qualifierValueFilterCtrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 2, ctx_r3.filteredQualifierValues));
  }
}
function StatementSearchComponent_For_13_Conditional_25_For_2_Conditional_1_Conditional_15_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const qualifierLiteralVariable_r19 = ctx.$implicit;
    const \u0275$index_134_r15 = \u0275\u0275nextContext(3).$index;
    const \u0275$index_56_r7 = \u0275\u0275nextContext(2).$index;
    \u0275\u0275property("value", \u0275\u0275pureFunction4(2, _c4, \u0275$index_56_r7, \u0275$index_134_r15, qualifierLiteralVariable_r19.label, qualifierLiteralVariable_r19.col));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", qualifierLiteralVariable_r19.label, " ");
  }
}
function StatementSearchComponent_For_13_Conditional_25_For_2_Conditional_1_Conditional_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 11);
    \u0275\u0275element(1, "input", 27);
    \u0275\u0275elementEnd();
  }
}
function StatementSearchComponent_For_13_Conditional_25_For_2_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 26, 0);
    \u0275\u0275listener("selectionChange", function StatementSearchComponent_For_13_Conditional_25_For_2_Conditional_1_Conditional_15_Template_mat_select_selectionChange_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.onQualifierLiteralValueSelect($event));
    });
    \u0275\u0275repeaterCreate(3, StatementSearchComponent_For_13_Conditional_25_For_2_Conditional_1_Conditional_15_For_4_Template, 2, 7, "mat-option", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, StatementSearchComponent_For_13_Conditional_25_For_2_Conditional_1_Conditional_15_Conditional_5_Template, 2, 0, "mat-form-field", 11);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.qualifierLiteralVariables);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isLiteralStringOnQualifier ? 5 : -1);
  }
}
function StatementSearchComponent_For_13_Conditional_25_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\xA0\xA0\xA0\xA0\xA0\xA0");
    \u0275\u0275elementStart(4, "mat-checkbox", 10);
    \u0275\u0275text(5, "Optional");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(6, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 11)(8, "mat-select", 24);
    \u0275\u0275listener("selectionChange", function StatementSearchComponent_For_13_Conditional_25_For_2_Conditional_1_Template_mat_select_selectionChange_8_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.onQualifierPropertySelect($event));
    });
    \u0275\u0275elementStart(9, "mat-option");
    \u0275\u0275element(10, "ngx-mat-select-search", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, StatementSearchComponent_For_13_Conditional_25_For_2_Conditional_1_mat_option_11_Template, 2, 8, "mat-option", 14);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 18);
    \u0275\u0275conditionalCreate(14, StatementSearchComponent_For_13_Conditional_25_For_2_Conditional_1_Conditional_14_Template, 7, 4, "mat-form-field", 11);
    \u0275\u0275conditionalCreate(15, StatementSearchComponent_For_13_Conditional_25_For_2_Conditional_1_Conditional_15_Template, 6, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_134_r15 = \u0275\u0275nextContext().$index;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Qualifier ", \u0275$index_134_r15 + 1, " ");
    \u0275\u0275advance(9);
    \u0275\u0275property("formControl", ctx_r3.qualifierPropertyFilterCtrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(12, 5, ctx_r3.filteredQualifierProperties));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.isWikibaseItemOnQualifier === true ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isLiteralOnQualifier === true ? 15 : -1);
  }
}
function StatementSearchComponent_For_13_Conditional_25_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275conditionalCreate(1, StatementSearchComponent_For_13_Conditional_25_For_2_Conditional_1_Template, 16, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_134_r15 = ctx.$index;
    const \u0275$index_56_r7 = \u0275\u0275nextContext(2).$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", \u0275$index_134_r15);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_134_r15 === ctx_r3.qualifiers(\u0275$index_56_r7).length - 1 ? 1 : -1);
  }
}
function StatementSearchComponent_For_13_Conditional_25_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 28);
    \u0275\u0275listener("click", function StatementSearchComponent_For_13_Conditional_25_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const \u0275$index_56_r7 = \u0275\u0275nextContext(2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeQualifiers(\u0275$index_56_r7, ctx_r3.j));
    });
    \u0275\u0275text(2, "Remove qualifier");
    \u0275\u0275elementEnd()();
  }
}
function StatementSearchComponent_For_13_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, StatementSearchComponent_For_13_Conditional_25_For_2_Template, 2, 2, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, StatementSearchComponent_For_13_Conditional_25_Conditional_3_Template, 3, 0, "div", 4);
  }
  if (rf & 2) {
    const \u0275$index_56_r7 = \u0275\u0275nextContext().$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.qualifiers(\u0275$index_56_r7).controls);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isRemoveQualifier ? 3 : -1);
  }
}
function StatementSearchComponent_For_13_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 28);
    \u0275\u0275listener("click", function StatementSearchComponent_For_13_Conditional_26_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r21);
      const \u0275$index_56_r7 = \u0275\u0275nextContext().$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addQualifiers(\u0275$index_56_r7));
    });
    \u0275\u0275text(2, "Add qualifier");
    \u0275\u0275elementEnd()();
  }
}
function StatementSearchComponent_For_13_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 28);
    \u0275\u0275listener("click", function StatementSearchComponent_For_13_Conditional_27_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r22);
      const \u0275$index_56_r7 = \u0275\u0275nextContext().$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeStatements(\u0275$index_56_r7));
    });
    \u0275\u0275text(2, "Remove statement");
    \u0275\u0275elementEnd()();
  }
}
function StatementSearchComponent_For_13_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 28);
    \u0275\u0275listener("click", function StatementSearchComponent_For_13_Conditional_28_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.addStatements());
    });
    \u0275\u0275text(2, "Add Statement");
    \u0275\u0275elementEnd()();
  }
}
function StatementSearchComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\xA0\xA0\xA0\xA0\xA0\xA0");
    \u0275\u0275elementStart(5, "mat-checkbox", 10);
    \u0275\u0275text(6, "Optional");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(7, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-form-field", 11)(9, "mat-select", 12, 0);
    \u0275\u0275listener("selectionChange", function StatementSearchComponent_For_13_Template_mat_select_selectionChange_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onItemTypeSelect($event));
    });
    \u0275\u0275elementStart(11, "mat-option");
    \u0275\u0275element(12, "ngx-mat-select-search", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, StatementSearchComponent_For_13_mat_option_13_Template, 2, 8, "mat-option", 14);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 11)(16, "mat-select", 15);
    \u0275\u0275listener("selectionChange", function StatementSearchComponent_For_13_Template_mat_select_selectionChange_16_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPropertySelect($event));
    });
    \u0275\u0275elementStart(17, "mat-option");
    \u0275\u0275element(18, "ngx-mat-select-search", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, StatementSearchComponent_For_13_mat_option_19_Template, 2, 7, "mat-option", 14);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, StatementSearchComponent_For_13_Conditional_21_Template, 2, 0, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 18);
    \u0275\u0275conditionalCreate(23, StatementSearchComponent_For_13_Conditional_23_Template, 7, 4, "mat-form-field", 11);
    \u0275\u0275conditionalCreate(24, StatementSearchComponent_For_13_Conditional_24_Template, 7, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, StatementSearchComponent_For_13_Conditional_25_Template, 4, 1);
    \u0275\u0275conditionalCreate(26, StatementSearchComponent_For_13_Conditional_26_Template, 3, 0, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, StatementSearchComponent_For_13_Conditional_27_Template, 3, 0, "div", 4);
    \u0275\u0275conditionalCreate(28, StatementSearchComponent_For_13_Conditional_28_Template, 3, 0, "div", 4);
  }
  if (rf & 2) {
    const \u0275$index_56_r7 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", \u0275$index_56_r7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Statement ", \u0275$index_56_r7 + 1, " ");
    \u0275\u0275advance(10);
    \u0275\u0275property("formControl", ctx_r3.itemTypeFilterCtrl)("noEntriesFoundLabel", ctx_r3.noDataFoundLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(14, 15, ctx_r3.filteredItemTypesArray[\u0275$index_56_r7]));
    \u0275\u0275advance(3);
    \u0275\u0275property("multiple", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r3.propertytMultiFilterCtrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(20, 17, ctx_r3.filteredPropertyMultiArray[\u0275$index_56_r7]));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.statements.at(\u0275$index_56_r7).get("properties").hasError("differentDatatype") ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isWikibaseItemOnStatement === true ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isLiteralOnStatement === true ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isQualifier === true ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isAddQualifier ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isRemoveStatement ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isAddStatement ? 28 : -1);
  }
}
var _StatementSearchComponent = class _StatementSearchComponent {
  constructor() {
    this.changeDetector = inject(ChangeDetectorRef);
    this.request = inject(RequestService);
    this.setLanguage = inject(SetLanguageService);
    this.lang = inject(SelectedLangService);
    this.propertyList = inject(PropertiesListService);
    this.fb = inject(FormBuilder);
    this.searchEngine = inject(SearchEngineService);
    this.data = inject(DataService);
    this.controls = inject(StatementsControlsService);
    this.selectedItemType = new EventEmitter();
    this.currentItemTypes = [];
    this.currentItemTypesArray = [];
    this.statementOptions = [];
    this.entityValues = [];
    this.currentMutator = MUTATOR;
    this.selectedLiteralVariables = [];
    this.isWikibaseItemOnStatement = true;
    this.isLiteralOnStatement = false;
    this.isLiteralStringOnStatement = false;
    this.isWikibaseItemOnQualifier = true;
    this.isLiteralOnQualifier = false;
    this.isLiteralStringOnQualifier = false;
    this.isLastStatement = false;
    this.isAddStatement = false;
    this.isRemoveStatement = false;
    this.isAddQualifier = false;
    this.isRemoveQualifier = false;
    this.isQualifier = false;
    this.isItemValue = true;
    this.isLiteralVariableSelected = true;
    this.selectedItemTypes = [];
    this.placeholderForLiteralValue = "literal value?";
    this.placeholderForLiteralString = "write string? | date? | number?";
    this.query = this.fb.group({
      statements: this.fb.array([this.statement])
    });
    this.itemTypeFilterCtrl = new FormControl("");
    this.filteredItemTypesArray = [];
    this.propertytMultiFilterCtrl = new FormControl("");
    this.filteredPropertyMultiArray = [];
    this.itemValueFilterCtrl = new FormControl("");
    this.filteredItemValuesArray = [];
    this.literalFilterCtrl = new FormControl("");
    this.filteredLiteralVariables = new ReplaySubject(1);
    this.qualifierPropertyFilterCtrl = new FormControl("");
    this.filteredQualifierProperties = new ReplaySubject(1);
    this.qualifierValueFilterCtrl = new FormControl("");
    this.filteredQualifierValues = new ReplaySubject(1);
    this.qualifierLiteralFilterCtrl = new FormControl("");
    this.filteredQualifierLiteralVariables = new ReplaySubject(1);
    this.items = [];
    this.isQualifier2Display = false;
    this.selectionChange = new EventEmitter();
    this.propertySelectionChange = new EventEmitter();
    this._onDestroy = new Subject();
  }
  //  private data = inject(DataService);
  set literalVariables(literalVariables) {
    this._literalVariables = literalVariables;
    if (this.literalVariables) {
      this.filteredLiteralVariables.next(this.literalVariables.slice());
    }
  }
  set qualifierLiteralVariables(qualifierLiteralVariables) {
    this._qualifierLiteralVariables = qualifierLiteralVariables;
    if (this.qualifierLiteralVariables) {
      this.filteredQualifierLiteralVariables.next(this.qualifierLiteralVariables.slice());
    }
  }
  get literalVariables() {
    return this._literalVariables;
  }
  get qualifierLiteralVariables() {
    return this._qualifierLiteralVariables;
  }
  get statements() {
    return this.query.get("statements");
  }
  // getter for statements as form array
  // on pourrait aussi bien écrire : get statements() { return this.query.controls['statements'] as FormArray; }
  qualifiers(i) {
    return this.statements.at(i).get("qualifiers");
  }
  get lastStatementIndex() {
    const index = this.statements.length > 0 ? this.statements.length - 1 : 0;
    console.log("lastStatementIndex:", index);
    return index;
  }
  get statement() {
    return this.fb.group({
      itemType: new FormControl({ value: "", disabled: false }),
      properties: new FormControl({ value: [], disabled: true }, [Validators.required, this.datatypeValidator]),
      value: this.value,
      optional: new FormControl({ value: false, disabled: false }),
      qualifiers: this.fb.array([this.qualifier])
    });
  }
  get value() {
    return this.fb.group({
      itemValue: new FormControl({ value: "", disabled: true }),
      literalValue: new FormControl({ value: "", disabled: true }),
      literalString: new FormControl({ value: "", disabled: true })
    });
  }
  get qualifier() {
    return this.fb.group({
      qualifierProperty: new FormControl({ value: "", disabled: false }),
      value: this.qualifierValue,
      optional: new FormControl({ value: false, disabled: false })
    });
  }
  get qualifierValue() {
    return this.fb.group({
      qualifierValue: new FormControl({ value: "", disabled: true }),
      qualifierLiteralValue: new FormControl({ value: "", disabled: true }),
      qualifierLiteralString: new FormControl({ value: "", disabled: true })
    });
  }
  isPropertiesInvalid(index) {
    const statementGroup = this.statements.at(index);
    const propertiesControl = statementGroup.get("properties");
    return propertiesControl.invalid;
  }
  addStatements() {
    this.statements.push(this.statement);
    console.log("Added statement, new statements length:", this.statements.length);
    this.isRemoveStatement = true;
    this.filteredItemTypesArray.push(new ReplaySubject(1));
    this.filteredItemValuesArray.push(new ReplaySubject(1));
    this.filteredPropertyMultiArray.push(new ReplaySubject(1));
    this.statementOptions.push(new BehaviorSubject([]));
    this.filteredItemTypesArray[this.lastStatementIndex].next([]);
    this.filteredItemValuesArray[this.lastStatementIndex].next([]);
    this.filteredPropertyMultiArray[this.lastStatementIndex].next([]);
    this.setCurrentItemTypes(this.lastStatementIndex);
    this.filterItemTypes(this.lastStatementIndex);
    this.filterItemValues(this.lastStatementIndex);
    this.filterPropertyMulti(this.lastStatementIndex, of([]));
  }
  removeStatements(i) {
    this.statements.removeAt(i);
    console.log("Removed statement at index", i, "new statements length:", this.statements.length);
    this.currentItemTypesArray.splice(i, 1);
    this.filteredItemTypesArray.splice(i, 1);
    this.setCurrentItemTypes(this.lastStatementIndex);
    this.filterItemTypes(this.lastStatementIndex);
  }
  addQualifiers(i) {
    let m = this.qualifiers(i).controls.length - 1;
    if (this.qualifiers(i).pristine) {
      this.qualifiers(i).removeAt(m);
    }
    ;
    this.isQualifier = true;
    this.qualifiers(i).push(this.qualifier);
    let qual = this.controls.qualifiers(this.statements, i);
    this.isQualifier = true;
  }
  addFirstQualifier(i) {
    this.controls.qualifiers(this.statements, i).enable();
    if (i === 0) {
      this.isQualifier = true;
    }
  }
  removeQualifiers(i, j) {
    this.qualifiers(i).removeAt(j);
  }
  statementControllerDisplay(u, i) {
    const statement = this.statements.at(i);
    const itemValueControl = statement.get("value.itemValue");
    if (u === "WikibaseItem") {
      this.isWikibaseItemOnStatement = true;
      this.isLiteralOnStatement = false;
      itemValueControl.enable();
      statement.get("value.literalValue").disable();
      statement.get("value.literalString").disable();
    } else {
      if (u === "String" || u === "MonolingualText" || u === "Time" || u === "Quantity") {
        console.log(u);
        itemValueControl.disable();
        statement.get("value.literalValue").enable();
        statement.get("value.literalString").enable();
        this.isWikibaseItemOnStatement = false;
        this.isLiteralStringOnStatement = false;
        this.isLiteralOnStatement = true;
      }
    }
  }
  literalControllerDisplay(label, i) {
    if (label === "write literal string" || label === "write date : YYYY-MM-DD" || label === "write number") {
      this.controls.literalValue(this.statements, i).enable();
      this.controls.literalString(this.statements, i).enable();
      this.controls.literalValue(this.statements, i).patchValue("");
      this.isLiteralStringOnStatement = true;
      this.placeholderForLiteralString = "write below";
    } else {
      this.controls.literalValue(this.statements, i).enable();
      this.controls.literalString(this.statements, i).disable();
      this.isLiteralStringOnStatement = false;
      this.placeholderForLiteralString = "disabled";
    }
  }
  qualifierControllerDisplay(u, i, j) {
    console.log(u);
    let qual = this.controls.qualifiers(this.statements, i);
    if (u === "WikibaseItem") {
      let value = this.controls.qualifierValue(qual, j);
      console.log(value);
      this.isWikibaseItemOnQualifier = true;
      this.isLiteralOnQualifier = false;
      this.controls.qualifierValue(qual, j).enable();
      this.controls.qualifierLiteralValue(qual, j).disable();
      this.controls.qualifierLiteralString(qual, j).disable();
    } else {
      if (u === "String" || u === "MonolingualText" || u === "Time" || u === "Quantity") {
        this.controls.qualifierLiteralValue(qual, j).enable();
        this.controls.qualifierLiteralString(qual, j).enable();
        this.isWikibaseItemOnQualifier = false;
        this.isLiteralOnQualifier = true;
      }
    }
  }
  qualifierLiteralControllerDisplay(label, i, j) {
    let qual = this.controls.qualifiers(this.statements, i);
    if (label === "write literal string" || label === "write date : YYYY-MM-DD" || label === "write number") {
      this.controls.qualifierLiteralValue(qual, j).enable();
      this.controls.qualifierLiteralString(qual, j).enable();
      this.isLiteralStringOnQualifier = true;
    } else {
      this.controls.literalValue(qual, j).enable();
      this.controls.literalString(qual, j).disable();
      this.isLiteralStringOnQualifier = false;
    }
  }
  onItemTypeSelect(event) {
    console.log(event.value), console.log("Selected itemType:", event.value);
    let i = event.value[0];
    this.controls.propertyValues(this.statements, i).enable();
    const options$ = this.propertyList.propertiesListBuilding(event.value[3]);
    this.filterPropertyMulti(i, options$);
    this.selectedItemType.emit(event.value);
    this.statements.at(i).get("itemType").setValue(event.value, { emitEvent: false });
    console.log("Updated itemType control value:", this.statements.at(i).get("itemType").value);
    this.changeDetector.detectChanges();
  }
  onPropertySelect(event) {
    let propertyValue = [];
    console.log("Event value:", event.value);
    let i = event.value[0][0];
    console.log(i);
    for (let j = 0; j < event.value.length; j++) {
      if (event.value[j] !== void 0) {
        let propertyType = event.value[j][3];
        console.log(propertyType);
        if (propertyType) {
          this.statementControllerDisplay(propertyType, i);
          this.controls.itemValue(this.statements, i).enable();
        } else {
          console.error("Property type is undefined or invalid:", event.value[j][1].propertyType);
        }
      } else {
        console.error("Event value[" + j + "] is undefined:", event.value);
      }
    }
  }
  onValueSelect(event) {
    let i = event.value[0];
    let label = event.value[1];
    let dataType = event.value[2];
    console.log(event.value);
    const itemValueControl = this.statements.at(i).get("value.itemValue");
    this.changeDetector.detectChanges();
    if (label.charAt(0) === "?") {
    }
    this.isAddQualifier = true;
    this.isAddStatement = true;
    this.resetPreviousItemValues(i);
    console.log(this.resetPreviousItemValues(i));
  }
  onLiteralValueSelect(event) {
    let i = event.value[0];
    let label = event.value[1];
    this.placeholderForLiteralString = label;
    this.literalControllerDisplay(label, i);
    if (label.charAt(0) === "?") {
      console.log(label);
    }
    this.isAddStatement = true;
    this.isAddQualifier = true;
  }
  onQualifierPropertySelect(event) {
    console.log(event.value);
    let i = event.value[0];
    let j = event.value[1];
    let datatype = event.value[3];
    this.qualifierControllerDisplay(datatype, i, j);
  }
  onQualifierValueSelect(event) {
    console.log(event.value);
    let i = event.value[0];
    let j = event.value[1];
    let dataType = event.value[2];
    let col = event.value[3];
    let id = event.value[4];
    let u = [i, dataType, col, id];
    if (dataType.charAt(0) === "?") {
    }
    this.isRemoveQualifier = true;
    let qual = this.controls.qualifiers(this.statements, i);
    let value = this.controls.qualifierValue(qual, j);
    console.log(value);
    this.controls.patchQualifierValue(value, qual, j);
  }
  onQualifierLiteralValueSelect(event) {
    console.log(event.value);
    let i = event.value[0];
    let label = event.value[2];
    if (label.charAt(0) === "?") {
      this.isLiteralStringOnQualifier = false;
    } else
      this.isLiteralStringOnQualifier = true;
    this.isRemoveQualifier = true;
  }
  clear() {
    this.matRef.options.forEach((data) => data.deselect());
  }
  ngOnInit() {
    console.log("Initial statements length:", this.statements.length);
    this.propertyList.qualifierPropertiesListBuilding.subscribe((res) => this.qualifierPropertiesToSelect = res);
    this.itemTypeFilterCtrl.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this.filterItemTypes(this.lastStatementIndex);
    });
    this.propertytMultiFilterCtrl.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this.filterPropertyMulti(this.lastStatementIndex, of([]));
    });
    this.itemValueFilterCtrl.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this.filterItemValues(this.lastStatementIndex);
    });
    this.literalFilterCtrl.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this.filterLiteralVariables();
    });
    this.qualifierPropertyFilterCtrl.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this.filterQualifierProperties();
    });
    this.qualifierValueFilterCtrl.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this.filterQualifierValues();
    });
    this.qualifierLiteralFilterCtrl.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this.filterQualifierValues();
    });
    this.statementOptions[0] = new BehaviorSubject([]);
    this.filteredItemTypesArray.push(new ReplaySubject(1));
    this.filteredItemValuesArray.push(new ReplaySubject(1));
    this.filteredPropertyMultiArray.push(new ReplaySubject(1));
    this.setCurrentItemTypes(this.lastStatementIndex);
    this.filterItemTypes(this.lastStatementIndex);
    this.filterItemValues(this.lastStatementIndex);
    this.filterPropertyMulti(this.lastStatementIndex, of([]));
  }
  ngAfterViewInit() {
    console.log("Statements length after view init:", this.statements.length);
    this.setInitialLiteralVariable();
    this.setInitialQualifierPropertyValue();
    this.setInitialQualifierValueValue();
    this.setInitialQualifierLiteralVariable();
  }
  setInitialItemTypeValue() {
    this.data.itemTypes$.subscribe((res) => {
      this.filteredItemTypesArray.forEach((filteredItemTypes, index) => {
        console.log(res);
        filteredItemTypes.next(res);
        this.filterItemTypes(index);
      });
    });
  }
  setInitialPropertyValue() {
    this.filteredPropertyMultiArray.forEach((filteredProperties, index) => {
      filteredProperties;
    });
  }
  setInitialItemValue() {
    this.filteredItemValuesArray.forEach((filteredItemValues, index) => {
      filteredItemValues;
    });
  }
  setInitialLiteralVariable() {
    this.filteredLiteralVariables;
  }
  setInitialQualifierPropertyValue() {
    this.filteredQualifierProperties;
  }
  setInitialQualifierValueValue() {
    this.filteredQualifierValues;
  }
  setInitialQualifierLiteralVariable() {
    this.filterQualifierLiteralVariables;
  }
  filterItemTypes(index) {
    console.log("Calling setCurrentItemTypes with index:", index);
    this.setCurrentItemTypes(index);
    console.log("currentItemTypes after setCurrentItemTypes:", this.currentItemTypesArray[index]);
    let search = this.itemTypeFilterCtrl.value;
    if (!search) {
      this.filteredItemTypesArray[index].next(this.currentItemTypesArray[index].slice());
    } else {
      search = search.toLowerCase();
      this.filteredItemTypesArray[index].next(this.currentItemTypesArray[index].filter((itemType) => itemType.label.toLowerCase().indexOf(search) > -1));
    }
    this.changeDetector.detectChanges();
  }
  /**
  * Initialise et met à jour la liste des types d'éléments disponibles pour chaque déclaration.
  * Cette fonction est appelée chaque fois qu'une nouvelle déclaration est ajoutée ou qu'une déclaration existante est modifiée.
  * Elle s'assure que la liste des types d'éléments est toujours à jour et reflète les sélections actuelles.
  *
  * @param index L'index de la déclaration pour laquelle les types d'éléments doivent être mis à jour.
  */
  setCurrentItemTypes(index) {
    console.log("setCurrentItemTypes called with index:", index);
    if (index === 0) {
      if (!ITEMTYPES || ITEMTYPES.length === 0) {
        console.error("ITEMTYPES is undefined or empty");
        this.currentItemTypesArray[index] = [];
      } else {
        this.currentItemTypesArray[index] = ITEMTYPES;
        console.log("Updated currentItemTypes:", this.currentItemTypesArray[index]);
      }
    } else {
      let labels = [];
      for (let j = 0; j < index; j++) {
        const itemTypeControl = this.statements.at(j).get("itemType");
        const itemValueControl = this.statements.at(j).get("value.itemValue");
        console.log("itemTypeControl at index", j, ":", itemTypeControl);
        console.log("itemValueControl at index", j, ":", itemValueControl);
        if (itemTypeControl && itemTypeControl.value) {
          const itemTypeValue = itemTypeControl.value[1];
          console.log(`itemTypeControl value at index ${j}:`, itemTypeValue);
          labels.push({ label: itemTypeValue });
        }
        if (itemValueControl && itemValueControl.value) {
          const itemValue = itemValueControl.value[1];
          if (typeof itemValue === "string" && itemValue.startsWith("?")) {
            labels.push({ label: itemValue });
          }
        }
      }
      const uniqueLabels = Array.from(new Set(labels.map((label) => JSON.stringify(label)))).map((str) => JSON.parse(str));
      this.currentItemTypesArray[index] = uniqueLabels.sort((a, b) => a.label.localeCompare(b.label));
      console.log("Updated currentItemTypes:", this.currentItemTypesArray[index]);
    }
  }
  filterPropertyMulti(index, options$) {
    options$.pipe(switchMap((options) => {
      if (!options || options.length === 0) {
        console.error("Les donn\xE9es ne sont pas correctement charg\xE9es dans options.");
        return of([]);
      }
      console.log(options);
      let search = this.propertytMultiFilterCtrl.value;
      if (!search) {
        return of(options.slice());
      } else {
        search = search.toLowerCase();
        return of(options.filter((entity) => entity.value.toLowerCase().indexOf(search) > -1));
      }
    })).subscribe((filteredOptions) => {
      this.filteredPropertyMultiArray[index].next(filteredOptions);
    });
  }
  /*  protected filterItemValues(index: number) {
      const initialSearch = this.itemValueFilterCtrl.value ? this.itemValueFilterCtrl.value.toLowerCase() : '';
      this.itemValueFilterCtrl.valueChanges
        .pipe(
          startWith(initialSearch),
          debounceTime(400),
          switchMap(search => {
            search = search ? search.toLowerCase() : '';
            return this.itemValuesList2(search, this.lang.selectedLang, 20).pipe(
              map(filteredItems => {
                const selectedOptions = this.getSelectedOptionsUpToIndex(index); // Utiliser l'index actuel
                const selectedLabels = this.getLabelsFromSelectedOptions(selectedOptions);
                const augmentedItems = [...selectedLabels.map(label => ({ label, col: null, id: null, separator: '' })), ...filteredItems];
  
                if (search.startsWith('?')) {
                  return augmentedItems.filter(item => item.label.toLowerCase().startsWith(search));
                } else {
                  return augmentedItems.filter(item => item.label.toLowerCase().includes(search));
                }
              }),
              map(items => {
                const uniqueItems = items.filter((item, index, self) =>
                  index === self.findIndex((t) => (
                    t.label === item.label
                  ))
                );
                if (!this.statementOptions[index]) {
                  this.statementOptions[index] = new BehaviorSubject<any[]>([]);
                }
                this.statementOptions[index].next(uniqueItems); // Stocker les options dans le BehaviorSubject
                return uniqueItems;
              })
            );
          })
        )
        .subscribe(augmentedItems => {
          console.log(`Augmented Items for statement ${index}:`, augmentedItems);
          if (!this.filteredItemValuesArray[index]) {
            this.filteredItemValuesArray[index] = new ReplaySubject<any[]>(1);
          }
          this.filteredItemValuesArray[index].next(augmentedItems); // Utiliser l'index actuel
          this.resetPreviousItemValues(index); // Réinitialiser les valeurs des statements précédents
        });
  
      // Utiliser les options stockées lors des changements
      if (this.statementOptions[index]) {
        this.statementOptions[index].subscribe(options => {
          this.filteredItemValuesArray[index].next(options);
        });
      }
    } */
  filterItemValues(index) {
    const selectedOptions = this.getSelectedOptionsUpToIndex(index);
    const selectedLabels = this.getLabelsFromSelectedOptions(selectedOptions);
    const augmentedItems = selectedLabels.map((label) => ({ label, col: null, id: null, separator: "" }));
    console.log(augmentedItems);
    if (!this.statementOptions[index]) {
      this.statementOptions[index] = new BehaviorSubject([]);
    }
    this.statementOptions[index].next(augmentedItems);
    if (!this.filteredItemValuesArray[index]) {
      this.filteredItemValuesArray[index] = new ReplaySubject(1);
    }
    this.filteredItemValuesArray[index].next(augmentedItems);
    this.resetPreviousItemValues(index);
  }
  resetPreviousItemValues(currentIndex) {
    for (let i = 0; i < currentIndex; i++) {
      const itemValueControl = this.statements.at(i).get("value.itemValue");
      if (itemValueControl && itemValueControl.value) {
        itemValueControl.setValue(itemValueControl.value, { emitEvent: false });
      }
    }
  }
  getSelectedOptionsUpToIndex(i) {
    let selectedOptions = [];
    const lastItemTypeControl = this.statements.at(i).get("itemType");
    const lastItemTypeValue = lastItemTypeControl ? lastItemTypeControl.value[1] : null;
    for (let index = 0; index <= i; index++) {
      const itemTypeControl = this.statements.at(index).get("itemType");
      const itemValueControl = this.statements.at(index).get("value.itemValue");
      if (itemTypeControl && itemTypeControl.value) {
        let itemTypeValue = [...itemTypeControl.value];
        let label = itemTypeValue[1];
        if (itemValueControl && itemValueControl.value) {
          const itemValue = itemValueControl.value[1];
          const match = itemValue.match(/^\?(.+?)(\d+)$/);
          if (match) {
            const baseValue = match[1];
            const number = parseInt(match[2]);
            const itemTypeBase = itemTypeControl.value[1].slice(0, -1);
            if (baseValue === itemTypeBase) {
              label = baseValue + (number + 1);
            }
          }
        }
        const lastChar = label.charAt(label.length - 1);
        if (/[a-zA-Z]$/.test(lastChar)) {
          label += "1";
        } else if (/[0-9]$/.test(lastChar)) {
          const number = parseInt(lastChar);
          label = label.slice(0, -1) + (number + 1);
        }
        itemTypeValue[1] = label;
        if (index < i && label === lastItemTypeValue) {
          continue;
        }
        if (index < i && itemValueControl && itemValueControl.value) {
          const itemValue = itemValueControl.value[1];
          const match = itemValue.match(/^\?(.+?)(\d+)$/);
          if (match) {
            const baseValue = match[1];
            const number = parseInt(match[2]);
            const newLabel = baseValue + (number + 1);
            if (!selectedOptions.some((option) => option[1] === newLabel)) {
              selectedOptions.push([itemTypeControl.value[0], newLabel]);
            }
          }
        }
        selectedOptions.push(itemTypeValue);
      }
    }
    return selectedOptions;
  }
  getLabelsFromSelectedOptions(options) {
    return options.map((option) => option[1]);
  }
  itemValuesList1(label) {
    return this.data.mutator$.pipe(map((re) => re[0]));
  }
  itemValuesList2(label, lang, number) {
    let entityValues = [];
    return this.request.searchItem(label, lang).pipe(map((res) => this.createList(res)), switchMap((url) => this.request.getItem(url)), filter((res) => res !== void 0 && res !== null), filter((res) => res.entities !== void 0 && res.entities !== null), map((res) => Object.values(res.entities)), map((res) => this.setLanguage.item(res, this.lang.selectedLang)));
  }
  filterLiteralVariables() {
    if (this.literalVariables === void 0) {
      return;
    }
    let search = this.literalFilterCtrl.value;
    if (!search) {
      this.filteredLiteralVariables.next(this.literalVariables.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredLiteralVariables.next(this.literalVariables.filter((variable) => variable.label.toLowerCase().indexOf(search) > -1));
  }
  filterQualifierProperties() {
    if (!this.qualifierPropertiesToSelect) {
      return;
    }
    let search = this.qualifierPropertyFilterCtrl.value;
    if (!search) {
      this.filteredQualifierProperties.next(this.qualifierPropertiesToSelect.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredQualifierProperties.next(this.qualifierPropertiesToSelect.filter((entity) => entity.itemLabel.label.toLowerCase().indexOf(search) > -1));
  }
  filterQualifierValues() {
    let search = this.qualifierValueFilterCtrl.value;
    let firstCharacter = search.charAt(0);
    if (!search) {
      this.filteredQualifierValues.next(this.entityValues.slice());
      return;
    } else {
      if (firstCharacter !== "?") {
        search = search.toLowerCase();
        this.qualifierValueFilterCtrl.valueChanges.pipe(debounceTime(400), switchMap((label) => this.request.searchItem(label, this.lang.selectedLang)), map((res) => this.createList(res)), debounceTime(400), switchMap((url) => this.request.getItem(url)), filter((res) => res !== void 0 && res !== null), filter((res) => res.entities !== void 0 && res.entities !== null), map((res) => Object.values(res.entities))).subscribe((re) => {
          this.entityValues = this.setLanguage.item(re, this.lang.selectedLang);
          this.setSeparator(this.entityValues);
          this.filteredQualifierValues.next(this.entityValues.filter((value) => value.label.toLowerCase().indexOf(search) > -1));
        });
      } else {
        this.data.mutator$.subscribe((re) => {
          this.entityValues = re[0];
          let qualifierEntityValues = [];
          qualifierEntityValues = this.entityValues.filter((entityValue) => QUALIFIERTYPES.includes(entityValue.col));
          if (search === "?*") {
            this.filteredQualifierValues.next(qualifierEntityValues);
          } else {
            search = search.slice(1);
            this.filteredQualifierValues.next(qualifierEntityValues.filter((value) => value.label.toLowerCase().indexOf(search) > -1));
          }
        });
      }
    }
  }
  filterQualifierLiteralVariables() {
    console.log(this.qualifierLiteralVariables);
    if (this.qualifierLiteralVariables === void 0) {
      return;
    }
    let search = this.qualifierLiteralFilterCtrl.value;
    console.log(search);
    if (!search) {
      console.log(this.qualifierLiteralVariables);
      this.filteredQualifierLiteralVariables.next(this.qualifierLiteralVariables.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredQualifierLiteralVariables.next(this.qualifierLiteralVariables.filter((variable) => variable.label.toLowerCase().indexOf(search) > -1));
  }
  setSeparator(entityValues) {
    for (let i = 0; i < entityValues.length; i++) {
      if (entityValues[i].description) {
        entityValues[i].separator = ", ";
      }
      ;
    }
    ;
  }
  selectedProperties(property) {
    this.selectedPropertiesList = property.value;
  }
  datatypeValidator(control) {
    if (control.value && control.value.length > 1) {
      const firstType = control.value[0][3];
      const allSameType = control.value.every((val) => val[3] === firstType);
      if (!allSameType) {
        return { "differentDatatype": true };
      }
    }
    return null;
  }
  notFound(res) {
    res == "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=&format=json&origin=*" ? res = "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=Q220375&format=json&origin=*" : res;
    return res;
  }
  createList(re) {
    let baseGetURL = "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=";
    let getUrlSuffix = "&format=json&origin=*";
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
    url = baseGetURL + list + getUrlSuffix;
    return url;
  }
  ngOnDestroy() {
    this._onDestroy.next(), this._onDestroy.complete();
  }
};
_StatementSearchComponent.\u0275fac = function StatementSearchComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StatementSearchComponent)();
};
_StatementSearchComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatementSearchComponent, selectors: [["app-statement-search"]], viewQuery: function StatementSearchComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c03, 5);
    \u0275\u0275viewQuery(_c12, 7);
    \u0275\u0275viewQuery(_c22, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.matRef = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.singleSelect = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.multiSelect = _t.first);
  }
}, inputs: { literalVariables: "literalVariables", qualifierLiteralVariables: "qualifierLiteralVariables" }, outputs: { datatype: "datatype", selectedItemType: "selectedItemType", selectionChange: "selectionChange", propertySelectionChange: "propertySelectionChange" }, decls: 18, vars: 5, consts: [["singleSelect", ""], ["appearance", "outlined", 1, "mat-elevation-z12"], [1, "listStyle"], ["id", "statements", 1, "whiteBackGround"], [1, "search-center"], [3, "formGroup"], [1, "formPadding"], ["formArrayName", "statements"], [1, "statementStyle"], [1, "search-center3", "cardGreyBackground", 3, "formGroupName"], ["formControlName", "optional"], ["appearance", "fill"], ["placeholder", "subject?", "formControlName", "itemType", "required", "", 3, "selectionChange"], ["placeholderLabel", "Search", 3, "formControl", "noEntriesFoundLabel"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "properties?", "formControlName", "properties", "required", "", 3, "selectionChange", "multiple"], ["placeholderLabel", "Search", "noEntriesFoundLabel", "Not found", 3, "formControl"], [1, "validatorWarning"], ["formGroupName", "value", 1, "search-center3"], [3, "value"], ["placeholder", "value?", "formControlName", "itemValue", "required", "", 3, "selectionChange"], ["formControlName", "literalValue", "required", "", 3, "selectionChange", "placeholder"], ["matInput", "", "formControlName", "literalString", 3, "placeholder"], ["formArrayName", "qualifiers"], ["placeholder", "property?", "formControlName", "qualifierProperty", "required", "", 3, "selectionChange"], ["placeholder", "value?", "formControlName", "qualifierValue", "required", "", 3, "selectionChange"], ["placeholder", "literal value?", "formControlName", "qualifierLiteralValue", "required", "", 3, "selectionChange"], ["matInput", "", "value", "string?", "formControlName", "qualifierLiteralString"], ["type", "button", 3, "click"]], template: function StatementSearchComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 1)(1, "mat-card-content")(2, "div", 2)(3, "div");
    \u0275\u0275text(4, "Query:");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, StatementSearchComponent_Conditional_5_Template, 2, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-card-content", 3)(7, "p", 4);
    \u0275\u0275text(8, "Statement:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "form", 5)(10, "div", 6)(11, "div", 7);
    \u0275\u0275repeaterCreate(12, StatementSearchComponent_For_13_Template, 29, 19, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div")(15, "p", 4);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "json");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.query.value.statements ? 5 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx.query);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.statements.controls);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 3, ctx.query.value));
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  AsyncPipe,
  JsonPipe,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  RequiredValidator,
  FormControlDirective,
  FormGroupDirective,
  FormControlName,
  FormGroupName,
  FormArrayName,
  FormsModule,
  MatInputModule,
  MatInput,
  MatFormField,
  MatCardModule,
  MatCard,
  MatCardContent,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  NgxMatSelectSearchModule,
  MatSelectSearchComponent,
  MatSelect,
  MatCheckboxModule,
  MatCheckbox,
  MatOption,
  MatSlideToggleModule
], styles: ["\n\n.validatorWarning[_ngcontent-%COMP%] {\n  color: #AD1457;\n  font-style: italic;\n}\nmat-button-toggle-group[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.search-center2[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n}\n.search-center3[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n#itemType[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 30vw;\n}\n@media (max-width: 959.98px) {\n  #itemType[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    width: 80vw;\n  }\n}\n#statements[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  width: 60vw;\n}\n#statements[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 30vw;\n}\n@media (max-width: 959.98px) {\n  #statements[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n.search-form[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n.ellipsis[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 50px;\n}\n.arrow-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0px !important;\n  justify-content: center;\n}\n.icon-size[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n.small-icon-button[_ngcontent-%COMP%] {\n  width: 24px !important;\n  height: 24px !important;\n  padding: 0px !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n}\n.small-icon-button[_ngcontent-%COMP%]    > *[role=img][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.small-icon-button[_ngcontent-%COMP%]    > *[role=img][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.small-icon-button[_ngcontent-%COMP%]   .mat-mdc-button-touch-target[_ngcontent-%COMP%] {\n  width: 24px !important;\n  height: 24px !important;\n}\n.search-center3[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.list-search[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: left;\n}\n.statement-search-form[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  gap: 30px;\n  display: flex;\n  justify-content: center;\n}\n.button-search-form[_ngcontent-%COMP%] {\n  gap: 30px;\n  display: flex;\n  justify-content: center;\n}\n#projects[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 60vw;\n}\n@media (max-width: 959.98px) {\n  #projects[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n@media (max-width: 959.98px) {\n  .statement-search-form[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n  }\n}\n#sopi[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 60vw;\n}\n@media (max-width: 959.98px) {\n  #sopi[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n.button[_ngcontent-%COMP%] {\n  text-align: start;\n  background-color: transparent !important;\n  border-color: transparent;\n  font-size: 12px;\n}\n/*# sourceMappingURL=statement-search.component.css.map */"] });
var StatementSearchComponent = _StatementSearchComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatementSearchComponent, [{
    type: Component,
    args: [{ selector: "app-statement-search", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      MatInputModule,
      MatCardModule,
      MatIconModule,
      MatButtonModule,
      MatFormFieldModule,
      NgxMatSelectSearchModule,
      MatSelect,
      MatCheckboxModule,
      MatOption,
      MatSlideToggleModule
    ], template: `  <mat-card appearance="outlined" class=mat-elevation-z12>\r
  <mat-card-content>\r
\r
    <div class="listStyle">\r
      <div>Query:</div>\r
      @if(query.value.statements){\r
    \r
      @for(statement of query.value.statements; track statement.itemType){\r
      <div class="statementStyle">\r
        @if(statement.optional) { (optional) }\r
        @if(statement.itemType) { statement {{ statement.itemType[0] + 1 }} : subject: {{ statement.itemType[1] }} }\r
        @if(statement.properties) { -> property: @for (property of statement.properties; track property ) {{{ property[3] }}} }\r
        @if(statement.value) { -> object:\r
           @if(statement.value.itemValue) { {{ statement.value.itemValue[1] }} }\r
           @if(statement.value.literalValue) { {{statement.value.literalValue[1] }}  }\r
           @if(statement.value.literalString) { {{statement.value.literalString }} }\r
       }\r
      </div>\r
\r
      @if(statement.qualifiers){\r
      <div class="listStyle">\r
        @for(qualifier of statement.qualifiers; track qualifier.qualifierProperty[1]){\r
        <div class="statementStyle">\r
          @if(qualifier.qualifierProperty) { qualifier {{ qualifier.qualifierProperty[1] + 1 }} :  property: {{ qualifier.qualifierProperty[4] }}}\r
          @if(qualifier.value){\r
          @if(qualifier.value.qualifierValue) { -> object: {{ qualifier.value.qualifierValue[2] }}}\r
          @if(qualifier.value.qualifierLiteralValue) { -> object: {{ qualifier.value.qualifierLiteralValue[2] }}}\r
          @if(qualifier.value.qualifierLiteralString) { -> object: {{ qualifier.value.qualifierLiteralString }}}\r
          }\r
       </div>\r
       }\r
      </div>\r
      }\r
     }\r
    }\r
    </div>\r
  </mat-card-content>\r
\r
  <mat-card-content class="whiteBackGround" id="statements">\r
    <p class="search-center">Statement:</p>\r
    <form [formGroup]="query">\r
      <div class="formPadding">\r
        <div formArrayName="statements">\r
\r
          @for(statement of statements.controls; let i = $index; track statement){  <!---note that track is on statement!-->\r
\r
          <div class="search-center3 cardGreyBackground"\r
               [formGroupName]="i">\r
\r
            <!---    @if( i === statements.length -1){     --->\r
\r
            <div class="listStyle">Statement {{ i + 1 }} <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mat-checkbox formControlName="optional">Optional</mat-checkbox></span>:</div>\r
            <!--- form field for selecting the type of the item with search --->\r
            <mat-form-field appearance="fill">\r
              <mat-select placeholder="subject?"\r
                          formControlName="itemType" required\r
                          (selectionChange)="onItemTypeSelect($event)"\r
                          #singleSelect>\r
                <mat-option>\r
                  <ngx-mat-select-search placeholderLabel="Search"\r
                                         [formControl]="itemTypeFilterCtrl"\r
                                         [noEntriesFoundLabel]=noDataFoundLabel></ngx-mat-select-search>\r
                </mat-option>\r
                <mat-option *ngFor="let itemType of filteredItemTypesArray[i] | async" [value]="[i, itemType.label, itemType.value, itemType.id, itemType.order]">\r
                  {{itemType.label}}\r
                </mat-option>\r
              </mat-select>\r
            </mat-form-field>\r
\r
            <!--- form field for multi-selecting the property of the statement with search --->\r
            <mat-form-field appearance="fill">\r
              <!---             <mat-select placeholder={{this.propertiesValues[i]}} --->\r
              <mat-select placeholder="properties?"\r
                          formControlName="properties" required\r
                          [multiple]="true"\r
                          (selectionChange)="onPropertySelect($event)">\r
                <mat-option>\r
                  <ngx-mat-select-search placeholderLabel="Search"\r
                                         [formControl]="propertytMultiFilterCtrl"\r
                                         noEntriesFoundLabel="Not found"></ngx-mat-select-search>\r
                </mat-option>\r
                <mat-option *ngFor="let property of filteredPropertyMultiArray[i] | async" [value]="[i, property.value, property.id, property.type]">\r
                  {{ property.label }}\r
                </mat-option>\r
              </mat-select>\r
              @if (statements.at(i).get('properties').hasError('differentDatatype')) {\r
              <div class="validatorWarning">\r
                Select several properties only if they have the same type\r
              </div>\r
              }\r
            </mat-form-field>\r
\r
            <!--- form field for single-selecting the wikibase value of the statement with search --->\r
            <div class="search-center3" formGroupName="value">\r
              @if (isWikibaseItemOnStatement === true) {\r
              <mat-form-field appearance="fill">\r
                <mat-select placeholder="value?"\r
                            formControlName="itemValue" required\r
                            (selectionChange)="onValueSelect($event)"\r
                            #singleSelect>\r
                  <mat-option>\r
                    <ngx-mat-select-search placeholderLabel="Search"\r
                                           [formControl]="itemValueFilterCtrl"\r
                                           noEntriesFoundLabel="Not found"></ngx-mat-select-search>\r
                  </mat-option>\r
                  <mat-option *ngFor="let itemValue of filteredItemValuesArray[i] | async" [value]="[i, itemValue.label, itemValue.col, itemValue.id]">\r
                    {{itemValue.label}}{{itemValue.separator}}{{itemValue.description}}\r
                  </mat-option>\r
                </mat-select>\r
              </mat-form-field>\r
              }\r
\r
              @if (isLiteralOnStatement === true) {\r
              <mat-form-field appearance="fill">\r
                <mat-select placeholder={{placeholderForLiteralValue}}\r
                            formControlName="literalValue" required\r
                            (selectionChange)="onLiteralValueSelect($event)"\r
                            #singleSelect>\r
                  @for ( literalVariable of literalVariables; track literalVariable ) {\r
                  <mat-option [value]="[i, literalVariable.label, literalVariable.col]">\r
                    {{literalVariable.label}}\r
                  </mat-option>\r
                  }\r
                </mat-select>\r
              </mat-form-field>\r
\r
\r
\r
              <!--- form field for input the literal value of the statement with search --->\r
              <!----        @if (isLiteralStringOnStatement === true){   --->\r
              <mat-form-field appearance="fill">\r
                <input matInput placeholder={{placeholderForLiteralString}} formControlName="literalString">\r
              </mat-form-field>\r
              <!-----        }  --->\r
              }\r
            </div>\r
\r
            <!---        <mat-form-field appearance="fill">\r
  <mat-checkbox formControlName="optional">\r
    Optional\r
  </mat-checkbox> -->\r
            <!----------------------------------------------start of qualifiers------------------------------------------------------->\r
            @if(isQualifier === true){\r
            <div formArrayName="qualifiers">\r
              @for(qualifier of qualifiers(i).controls; let j = $index; track qualifier){  <!---note that track is on qualifier-->\r
              <div class="search-center3 cardGreyBackground"\r
                   [formGroupName]="j">\r
\r
                @if( j === qualifiers(i).length -1){\r
\r
                <div class="listStyle">Qualifier {{ j + 1 }} <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mat-checkbox formControlName="optional">Optional</mat-checkbox></span>:</div>\r
                <!--- form field for selecting the property of the qualifier with search --->\r
                <mat-form-field appearance="fill">\r
\r
                  <!---             <mat-select placeholder={{this.propertiesValues[i]}} --->\r
                  <mat-select placeholder="property?"\r
                              formControlName="qualifierProperty" required\r
                              (selectionChange)="onQualifierPropertySelect($event)">\r
                    <mat-option>\r
                      <ngx-mat-select-search placeholderLabel="Search"\r
                                             [formControl]="qualifierPropertyFilterCtrl"\r
                                             noEntriesFoundLabel="Not found"></ngx-mat-select-search>\r
                    </mat-option>\r
\r
                    <mat-option *ngFor="let qualifier of filteredQualifierProperties | async" [value]="[i,j,qualifier.id, qualifier.propertyType.id, qualifier.itemLabel.value]">\r
                      {{qualifier.itemLabel.label}}\r
                    </mat-option>\r
                  </mat-select>\r
                </mat-form-field>\r
\r
                <!--- form field for single-selecting the wikibase value of the statement with search --->\r
                <div class="search-center3" formGroupName="value">\r
                  @if (isWikibaseItemOnQualifier === true) {\r
                  <mat-form-field appearance="fill">\r
                    <mat-select placeholder="value?"\r
                                formControlName="qualifierValue" required\r
                                (selectionChange)="onQualifierValueSelect($event)"\r
                                #singleSelect>\r
                      <mat-option>\r
                        <ngx-mat-select-search placeholderLabel="Search"\r
                                               [formControl]="qualifierValueFilterCtrl"\r
                                               noEntriesFoundLabel="Not found"></ngx-mat-select-search>\r
                      </mat-option>\r
                      <mat-option *ngFor="let qualifierValue of filteredQualifierValues | async" [value]="[i, j, qualifierValue.label, qualifierValue.col, qualifierValue.id]">\r
                        {{qualifierValue.label}}{{qualifierValue.separator}}{{qualifierValue.description}}\r
                      </mat-option>\r
                    </mat-select>\r
                  </mat-form-field>\r
                  }\r
                  @if (isLiteralOnQualifier === true) {\r
                  <mat-form-field appearance="fill">\r
                    <mat-select placeholder="literal value?"\r
                                formControlName="qualifierLiteralValue" required\r
                                (selectionChange)="onQualifierLiteralValueSelect($event)"\r
                                #singleSelect>\r
                      @for ( qualifierLiteralVariable of qualifierLiteralVariables; track qualifierLiteralVariable ) {\r
                      <mat-option [value]="[i, j, qualifierLiteralVariable.label, qualifierLiteralVariable.col]">\r
                        {{qualifierLiteralVariable.label}}\r
                      </mat-option>\r
                      }\r
                    </mat-select>\r
                  </mat-form-field>\r
                  <!--- form field for input the literal value of the statement with search --->\r
                  @if(isLiteralStringOnQualifier) {\r
                  <mat-form-field appearance="fill">\r
                    <input matInput value="string?" formControlName="qualifierLiteralString">\r
                  </mat-form-field>\r
                  }\r
                  }\r
                </div>\r
\r
\r
\r
                }\r
              </div>\r
              }\r
\r
            </div>\r
\r
            @if(isRemoveQualifier){\r
            <div class="search-center">\r
              <button type="button" (click)="removeQualifiers(i,j)">Remove qualifier</button>\r
            </div>\r
            }\r
\r
\r
            }\r
            @if (isAddQualifier) {\r
            <div class="search-center">\r
              <button type="button" (click)="addQualifiers(i)">Add qualifier</button>\r
            </div>\r
            }\r
\r
            <!---   }     -->\r
            <!----       @if (isAddQualifier) {\r
         <div class="search-center">\r
           <button type="button" (click)="addFirstQualifier(i)">Add first qualifier</button>\r
         </div>\r
         }\r
  -->\r
            <!-------------------------------------------------end of qualifier-------------------------------------------------------->\r
\r
\r
          </div>\r
\r
          @if(isRemoveStatement){\r
          <div class="search-center">\r
            <button type="button" (click)="removeStatements(i)">Remove statement</button>\r
          </div>\r
          }\r
\r
          @if(isAddStatement){\r
          <div class="search-center">\r
            <button type="button" (click)="addStatements()">Add Statement</button>\r
          </div>\r
          }\r
          }\r
\r
        </div>\r
      </div>\r
    </form>\r
    <div>\r
      <p class="search-center">  {{ query.value | json }}</p>\r
    </div>\r
  </mat-card-content>\r
\r
</mat-card>\r
\r
\r
\r
`, styles: ["/* src/app/search/advanced-search/statement-search/statement-search.component.scss */\n.validatorWarning {\n  color: #AD1457;\n  font-style: italic;\n}\nmat-button-toggle-group {\n  margin-left: 12px;\n}\n.search-center2 {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n}\n.search-center3 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n#itemType mat-form-field {\n  width: 30vw;\n}\n@media (max-width: 959.98px) {\n  #itemType mat-form-field {\n    width: 80vw;\n  }\n}\n#statements mat-card-content {\n  width: 60vw;\n}\n#statements mat-form-field {\n  width: 30vw;\n}\n@media (max-width: 959.98px) {\n  #statements mat-form-field {\n    width: 90vw;\n  }\n}\n.search-form {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n.ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 50px;\n}\n.arrow-icon {\n  display: flex;\n  align-items: center;\n  padding: 0px !important;\n  justify-content: center;\n}\n.icon-size {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n.small-icon-button {\n  width: 24px !important;\n  height: 24px !important;\n  padding: 0px !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n}\n.small-icon-button > *[role=img] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.small-icon-button > *[role=img] svg {\n  width: 16px;\n  height: 16px;\n}\n.small-icon-button .mat-mdc-button-touch-target {\n  width: 24px !important;\n  height: 24px !important;\n}\n.search-center3 {\n  display: flex;\n  justify-content: center;\n}\n.list-search {\n  display: flex;\n  justify-content: left;\n}\n.statement-search-form {\n  margin-top: 20px;\n  gap: 30px;\n  display: flex;\n  justify-content: center;\n}\n.button-search-form {\n  gap: 30px;\n  display: flex;\n  justify-content: center;\n}\n#projects mat-form-field {\n  width: 60vw;\n}\n@media (max-width: 959.98px) {\n  #projects mat-form-field {\n    width: 90vw;\n  }\n}\n@media (max-width: 959.98px) {\n  .statement-search-form {\n    margin-top: 20px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n  }\n}\n#sopi mat-form-field {\n  width: 60vw;\n}\n@media (max-width: 959.98px) {\n  #sopi mat-form-field {\n    width: 90vw;\n  }\n}\n.button {\n  text-align: start;\n  background-color: transparent !important;\n  border-color: transparent;\n  font-size: 12px;\n}\n/*# sourceMappingURL=statement-search.component.css.map */\n"] }]
  }], null, { literalVariables: [{
    type: Input
  }], qualifierLiteralVariables: [{
    type: Input
  }], datatype: [{
    type: Output
  }], selectedItemType: [{
    type: Output
  }], matRef: [{
    type: ViewChild,
    args: ["matRef"]
  }], singleSelect: [{
    type: ViewChild,
    args: ["singleSelect", { static: true }]
  }], multiSelect: [{
    type: ViewChild,
    args: ["multiSelect", { static: true }]
  }], selectionChange: [{
    type: Output
  }], propertySelectionChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatementSearchComponent, { className: "StatementSearchComponent", filePath: "src/app/search/advanced-search/statement-search/statement-search.component.ts", lineNumber: 60 });
})();

// src/app/search/advanced-search/services/mutator.service.ts
var _MutatorService = class _MutatorService {
  constructor() {
    this.data = inject(DataService);
  }
  mutator(itemType) {
    console.log(itemType);
    let mutator = [];
    this.data.mutator$.subscribe((res) => {
      mutator = res;
    });
    let transposeMutator = this.transpose(mutator);
    let selectedItemType = itemType[1];
    let selectedItemId = itemType[3];
    let selectedCol = itemType[2];
    let array = transposeMutator[selectedCol];
    let permutedArray = this.circularPermutation(array);
    transposeMutator[selectedCol] = permutedArray;
    let newMutator = this.transpose(transposeMutator);
    console.log(newMutator);
    return newMutator;
  }
  transpose(arr) {
    let newArr = arr[0].map((_, colIndex) => arr.map((row) => row[colIndex]));
    return newArr;
  }
  circularPermutation(arr) {
    let newArr = [];
    let u = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      newArr[i] = arr[i + 1];
    }
    ;
    newArr[5] = u;
    return newArr;
  }
  circularInversePermutation(arr) {
    let u = arr[5];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[5 - i] = arr[5 - (i + 1)];
    }
    arr[0] = u;
    return arr;
  }
};
_MutatorService.\u0275fac = function MutatorService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MutatorService)();
};
_MutatorService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MutatorService, factory: _MutatorService.\u0275fac, providedIn: "root" });
var MutatorService = _MutatorService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MutatorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/search/advanced-search/advanced-search.component.ts
var _c04 = () => [""];
var _c13 = () => ["/harmonia_universalis"];
var _AdvancedSearchComponent = class _AdvancedSearchComponent {
  constructor() {
    this.lang = inject(SelectedLangService);
    this.projectList = inject(ProjectsListService);
    this.propertyList = inject(PropertiesListService);
    this.data = inject(DataService);
    this.mutator = inject(MutatorService);
    this.title = "factgrid";
    this.subtitle = "a database for historians";
    this.basic_search = "search";
    this.projects = "research projects";
    this.fields = "fields of reserach";
    this.isDisplay = false;
    this.selections = [];
    this.statementSelection = [];
    this.formData = [{ statement: 0, types: { options: ITEMTYPES, selections: [] }, values: { options: ITEMTYPES, selections: [] } }];
    this.literals = LITERALS;
    this.projectsList = [];
    this.propertiesList = [];
    this.replay = new ReplaySubject(1);
    this.lonos = [ITEMTYPES.map((item) => item.order)];
  }
  ngOnInit() {
    this.subtitle = this.lang.getTranslation("$1", this.lang.selectedLang);
    this.projects = this.lang.getTranslation("$1", this.lang.selectedLang);
    this.fields = this.lang.getTranslation("$1", this.lang.selectedLang);
    this.projectList.projectsListBuilding("Q11295").subscribe((res) => this.projectsList = res);
  }
  selectedItemType(itemType) {
    console.log(itemType);
    let i = itemType[0];
    let u = ITEMTYPES.findIndex((item) => item.id === itemType[3]);
    let selection = { label: itemType[1], id: itemType[3] };
    console.log(itemType[3]);
    this.propertyList.propertiesListBuilding(itemType[3]).subscribe((res) => {
      console.log(res);
    });
  }
  propertyDatatype(u) {
    this.literalVariables = this.literals.filter((literal) => (literal.type === u[1] || literal.type === "Any") && literal.col === u[0]);
    return this.literalVariables;
  }
  qualifierPropertyDatatype(u) {
    this.qualifierLiteralVariables = this.literals.filter((literal) => (literal.type === u[2] || literal.type === "Any") && literal.col === u[0]);
    return this.qualifierLiteralVariables;
  }
  selectedProjects(projects) {
    console.log(projects.value);
  }
  selectedValue(value) {
    console.log(value);
    this.data.itemTypes1$.subscribe((res) => console.log(res));
    let i = value[0];
    let selection1 = { variable: [value[0], this.updateValue(this.statementSelection[0].variable[2], value[2]), 1], label: value[1], id: value[3] };
    if (!this.statementSelection[1]) {
      this.statementSelection.push(selection1);
    } else
      this.statementSelection.splice(1, 1, selection1);
    this.selections.push(this.statementSelection);
    let currentItemTypes;
    let newItemType = { label: value[1], col: value[2], id: value[3] };
    let $newItemType = of(newItemType);
    $newItemType.subscribe((res) => console.log(res));
    combineLatest([$newItemType, this.data.itemTypes1$]).subscribe(([res1, res2]) => {
      res2.push(res1);
      currentItemTypes = res2;
    });
    this.data.updateItemTypes2(currentItemTypes);
    let newMutator = this.mutator.mutator(value);
    this.data.updateMutatorForNextStatement(newMutator);
  }
  selectedQualifierValue(itemType) {
    let i = itemType[0];
    let qualifierItemType = [itemType[1], itemType[2], itemType[3], ""];
    let newMutator = this.mutator.mutator(qualifierItemType);
    console.log(newMutator);
    let newItemType = { label: itemType[1], id: itemType[2], col: itemType[3] };
    let currentItem;
    this.data.itemTypes$.subscribe((res) => {
      currentItem = res;
      if (i === 0) {
        currentItem = [newItemType];
      }
      ;
    });
    this.data.updateItemTypes(currentItem);
    this.data.updateMutator(newMutator);
    this.data.mutator$.subscribe((res) => console.log(res));
  }
  updateValue(value0, value1) {
    let u;
    if (value0 = value1) {
      u = value1 + 1;
    } else
      u = value1;
    return u;
  }
  findIndexById(a, id) {
    return a.findIndex((item) => item.id === id);
  }
  incrementElement(a, b) {
    if (a.length !== b.length) {
      throw new Error("Les listes a et b doivent avoir la m\xEAme longueur");
    }
    let c = [...b];
    for (let i = 0; i < a.length; i++) {
      if (a[i] === 1) {
        c[i] = b[i] + 1;
        break;
      }
    }
    return c;
  }
  ngOnDestroy() {
  }
};
_AdvancedSearchComponent.\u0275fac = function AdvancedSearchComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdvancedSearchComponent)();
};
_AdvancedSearchComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdvancedSearchComponent, selectors: [["app-advanced-search"]], decls: 26, vars: 8, consts: [["href", \u0275\u0275trustConstantResourceUrl`https://fonts.googleapis.com/icon?family=Material+Icons`, "rel", "stylesheet"], [1, "cardBackground"], [1, "FactGridTitle"], [1, "subTitle"], ["appearance", "outlined", 1, "mat-elevation-z12"], [1, "search-container"], [1, "search-center"], [3, "routerLink"], ["href", "https://database.factgrid.de/query/#%23model%0A%0ASELECT%20%3Fitem%20%3Fviewer%20%3FitemLabel%20%20WHERE%20%7B%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%20%20%3Fitem%20wdt%3AP2%20wd%3AQ7%3B%0A%20%20%20%20%20%20%20%20wdt%3AP247%20wd%3AQ24708.%0A%20%20BIND%28STRAFTER%28STR%28%3Fitem%29%2C%20STR%28wd%3A%29%29%20AS%20%3FitemId%29%0A%20%20BIND%28IRI%28CONCAT%28%22https%3A%2F%2Fdatabase.factgrid.de%2Fviewer%2Fitem%2F%22%2C%20%3FitemId%29%29%20AS%20%3Fviewer%29%0A%7D%0A"], ["color", "primary"], [3, "selectionChange", "data"], [1, "child-container", 3, "propertyDatatype", "selectedQualifierValue", "qualifierPropertyDatatype", "selectedValue", "selectedItemType", "qualifierLiteralVariables", "literalVariables"]], template: function AdvancedSearchComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "head");
    \u0275\u0275element(1, "link", 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "body")(3, "div", 1)(4, "div", 2);
    \u0275\u0275text(5, "FactGrid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 3);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-card", 4)(9, "mat-card-content", 5)(10, "div", 6)(11, "a", 7);
    \u0275\u0275text(12, "FactGrid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "\xA0\xA0|\xA0\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 8);
    \u0275\u0275text(16, " sparql query ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "\xA0\xA0|\xA0\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 7);
    \u0275\u0275text(20, "Harmonia Universalis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 6)(22, "mat-icon", 9);
    \u0275\u0275text(23, "build");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "app-project-select", 10);
    \u0275\u0275listener("selectionChange", function AdvancedSearchComponent_Template_app_project_select_selectionChange_24_listener($event) {
      return ctx.selectedProjects($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "app-statement-search", 11);
    \u0275\u0275listener("propertyDatatype", function AdvancedSearchComponent_Template_app_statement_search_propertyDatatype_25_listener($event) {
      return ctx.propertyDatatype($event);
    })("selectedQualifierValue", function AdvancedSearchComponent_Template_app_statement_search_selectedQualifierValue_25_listener($event) {
      return ctx.selectedQualifierValue($event);
    })("qualifierPropertyDatatype", function AdvancedSearchComponent_Template_app_statement_search_qualifierPropertyDatatype_25_listener($event) {
      return ctx.qualifierPropertyDatatype($event);
    })("selectedValue", function AdvancedSearchComponent_Template_app_statement_search_selectedValue_25_listener($event) {
      return ctx.selectedValue($event);
    })("selectedItemType", function AdvancedSearchComponent_Template_app_statement_search_selectedItemType_25_listener($event) {
      return ctx.selectedItemType($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.subtitle);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c04));
    \u0275\u0275advance(8);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c13));
    \u0275\u0275advance(5);
    \u0275\u0275property("data", ctx.projectsList);
    \u0275\u0275advance();
    \u0275\u0275property("qualifierLiteralVariables", ctx.qualifierLiteralVariables)("literalVariables", ctx.literalVariables);
  }
}, dependencies: [
  CommonModule,
  RouterModule,
  RouterLink,
  ReactiveFormsModule,
  FormsModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatIconModule,
  MatIcon,
  MatButtonModule,
  MatCardModule,
  MatCard,
  MatCardContent,
  MatSelectModule,
  NgxMatSelectSearchModule,
  ProjectSelectComponent,
  StatementSearchComponent
], styles: ["\n\n.child-container[_ngcontent-%COMP%] {\n  width: 70vw;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.search-align[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.search-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.FactGrid-div[_ngcontent-%COMP%] {\n  height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.FactGridTitle-div[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  color: #AD1457;\n  font-weight: 600;\n  font-size: 60px;\n}\n.search-itemSelected[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n#projects[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 60vw;\n}\n@media (max-width: 959.98px) {\n  #projects[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n.selectedItemSize[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.button[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border-color: transparent;\n  font-size: 16px;\n}\na.button[_ngcontent-%COMP%]:hover {\n  background: #383;\n}\n/*# sourceMappingURL=advanced-search.component.css.map */"] });
var AdvancedSearchComponent = _AdvancedSearchComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdvancedSearchComponent, [{
    type: Component,
    args: [{ selector: "app-advanced-search", standalone: true, imports: [
      CommonModule,
      RouterModule,
      ReactiveFormsModule,
      FormsModule,
      MatInputModule,
      MatFormFieldModule,
      MatTableModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      MatSelectModule,
      NgxMatSelectSearchModule,
      ProjectSelectComponent,
      StatementSearchComponent
    ], template: `<head>\r
\r
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"\r
        rel="stylesheet">\r
\r
</head>\r
\r
<body>\r
\r
  <div class="cardBackground">\r
    <div class="FactGridTitle">FactGrid</div>\r
    <div class="subTitle">{{subtitle}}</div>\r
  </div>\r
\r
  <mat-card appearance="outlined" class=mat-elevation-z12>\r
    <mat-card-content class="search-container">\r
      <div class="search-center">\r
        <a [routerLink]="['']">FactGrid</a> <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>\r
        <a href="https://database.factgrid.de/query/#%23model%0A%0ASELECT%20%3Fitem%20%3Fviewer%20%3FitemLabel%20%20WHERE%20%7B%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%20%20%3Fitem%20wdt%3AP2%20wd%3AQ7%3B%0A%20%20%20%20%20%20%20%20wdt%3AP247%20wd%3AQ24708.%0A%20%20BIND%28STRAFTER%28STR%28%3Fitem%29%2C%20STR%28wd%3A%29%29%20AS%20%3FitemId%29%0A%20%20BIND%28IRI%28CONCAT%28%22https%3A%2F%2Fdatabase.factgrid.de%2Fviewer%2Fitem%2F%22%2C%20%3FitemId%29%29%20AS%20%3Fviewer%29%0A%7D%0A">\r
          sparql query\r
        </a>\r
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>\r
        <a [routerLink]="['/harmonia_universalis']">Harmonia Universalis</a>\r
      </div>\r
      <div class="search-center"><mat-icon color="primary">build</mat-icon></div>\r
\r
      <app-project-select [data]="projectsList" (selectionChange)="selectedProjects($event)"></app-project-select>\r
      \r
      <app-statement-search class="child-container" [qualifierLiteralVariables]="qualifierLiteralVariables" [literalVariables]="literalVariables" \r
                          \r
         (propertyDatatype)="propertyDatatype($event)" (selectedQualifierValue)="selectedQualifierValue($event)" (qualifierPropertyDatatype)="qualifierPropertyDatatype($event)" (selectedValue)="selectedValue($event)" (selectedItemType)="selectedItemType($event)"></app-statement-search>\r
\r
      <!----   <app-essai></app-essai>-->\r
\r
    </mat-card-content>\r
  \r
  </mat-card>\r
\r
</body>\r
\r
`, styles: ["/* src/app/search/advanced-search/advanced-search.component.scss */\n.child-container {\n  width: 70vw;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.search-align {\n  display: flex;\n  flex-direction: row;\n}\n.search-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.search-label {\n  font-weight: bold;\n}\n.FactGrid-div {\n  height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.FactGridTitle-div {\n  padding-left: 10px;\n  color: #AD1457;\n  font-weight: 600;\n  font-size: 60px;\n}\n.search-itemSelected {\n  margin-top: 50px;\n}\n#projects mat-form-field {\n  width: 60vw;\n}\n@media (max-width: 959.98px) {\n  #projects mat-form-field {\n    width: 90vw;\n  }\n}\n.selectedItemSize {\n  font-size: 14px;\n}\n.button {\n  background-color: transparent !important;\n  border-color: transparent;\n  font-size: 16px;\n}\na.button:hover {\n  background: #383;\n}\n/*# sourceMappingURL=advanced-search.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdvancedSearchComponent, { className: "AdvancedSearchComponent", filePath: "src/app/search/advanced-search/advanced-search.component.ts", lineNumber: 52 });
})();
export {
  AdvancedSearchComponent
};
//# sourceMappingURL=advanced-search.component-2TGZIYHF.js.map
