import {
  MatDivider,
  MatDividerModule
} from "./chunk-XD7OE54K.js";
import {
  SetLanguageService
} from "./chunk-DWXCEK3A.js";
import {
  MatSlideToggleModule
} from "./chunk-5LCLSVSP.js";
import {
  MatSelect,
  MatSelectChange,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule
} from "./chunk-TWW3OY67.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KINOYSE3.js";
import {
  MatTableModule
} from "./chunk-GXB22HIH.js";
import {
  A,
  ANIMATION_MODULE_TYPE,
  AsyncPipe,
  Attribute,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CheckboxRequiredValidator,
  CommonModule,
  Component,
  ContentChild,
  DOWN_ARROW,
  DefaultValueAccessor,
  Directive,
  END,
  ENTER,
  ESCAPE,
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
  HOME,
  Inject,
  InjectionToken,
  Input,
  JsonPipe,
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
  MatOption,
  MatRipple,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NINE,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Optional,
  Output,
  ReactiveFormsModule,
  ReplaySubject,
  RequestService,
  RequiredValidator,
  RouterLink,
  RouterModule,
  SPACE,
  SelectedLangService,
  Subject,
  UP_ARROW,
  Validators,
  ViewChild,
  ViewEncapsulation,
  ViewportRuler,
  Z,
  ZERO,
  _MatInternalFormField,
  booleanAttribute,
  combineLatest,
  debounceTime,
  delay,
  filter,
  forwardRef,
  iif,
  inject,
  input,
  map,
  numberAttribute,
  of,
  setClassMetadata,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
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
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinjectAttribute,
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
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtrustConstantResourceUrl,
  ɵɵviewQuery
} from "./chunk-FLLM7YOM.js";

// node_modules/@angular/material/fesm2022/checkbox.mjs
var _c0 = ["input"];
var _c1 = ["label"];
var _c2 = ["*"];
var MAT_CHECKBOX_DEFAULT_OPTIONS = new InjectionToken("mat-checkbox-default-options", {
  providedIn: "root",
  factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
});
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: "accent",
    clickAction: "check-indeterminate",
    disabledInteractive: false
  };
}
var TransitionCheckState;
(function(TransitionCheckState2) {
  TransitionCheckState2[TransitionCheckState2["Init"] = 0] = "Init";
  TransitionCheckState2[TransitionCheckState2["Checked"] = 1] = "Checked";
  TransitionCheckState2[TransitionCheckState2["Unchecked"] = 2] = "Unchecked";
  TransitionCheckState2[TransitionCheckState2["Indeterminate"] = 3] = "Indeterminate";
})(TransitionCheckState || (TransitionCheckState = {}));
var MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatCheckbox),
  multi: true
};
var MatCheckboxChange = class {
};
var nextUniqueId = 0;
var defaults = MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
var MatCheckbox = class _MatCheckbox {
  /** Focuses the checkbox. */
  focus() {
    this._inputElement.nativeElement.focus();
  }
  /** Creates the change event that will be emitted by the checkbox. */
  _createChangeEvent(isChecked) {
    const event = new MatCheckboxChange();
    event.source = this;
    event.checked = isChecked;
    return event;
  }
  /** Gets the element on which to add the animation CSS classes. */
  _getAnimationTargetElement() {
    return this._inputElement?.nativeElement;
  }
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  constructor(_elementRef, _changeDetectorRef, _ngZone, tabIndex, _animationMode, _options) {
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._ngZone = _ngZone;
    this._animationMode = _animationMode;
    this._options = _options;
    this._animationClasses = {
      uncheckedToChecked: "mdc-checkbox--anim-unchecked-checked",
      uncheckedToIndeterminate: "mdc-checkbox--anim-unchecked-indeterminate",
      checkedToUnchecked: "mdc-checkbox--anim-checked-unchecked",
      checkedToIndeterminate: "mdc-checkbox--anim-checked-indeterminate",
      indeterminateToChecked: "mdc-checkbox--anim-indeterminate-checked",
      indeterminateToUnchecked: "mdc-checkbox--anim-indeterminate-unchecked"
    };
    this.ariaLabel = "";
    this.ariaLabelledby = null;
    this.labelPosition = "after";
    this.name = null;
    this.change = new EventEmitter();
    this.indeterminateChange = new EventEmitter();
    this._onTouched = () => {
    };
    this._currentAnimationClass = "";
    this._currentCheckState = TransitionCheckState.Init;
    this._controlValueAccessorChangeFn = () => {
    };
    this._validatorChangeFn = () => {
    };
    this._checked = false;
    this._disabled = false;
    this._indeterminate = false;
    this._options = this._options || defaults;
    this.color = this._options.color || defaults.color;
    this.tabIndex = parseInt(tabIndex) || 0;
    this.id = this._uniqueId = `mat-mdc-checkbox-${++nextUniqueId}`;
    this.disabledInteractive = _options?.disabledInteractive ?? false;
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorChangeFn();
    }
  }
  ngAfterViewInit() {
    this._syncIndeterminate(this._indeterminate);
  }
  /** Whether the checkbox is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (value != this.checked) {
      this._checked = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Whether the checkbox is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value !== this.disabled) {
      this._disabled = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
   * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
   * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
   * set to false.
   */
  get indeterminate() {
    return this._indeterminate;
  }
  set indeterminate(value) {
    const changed = value != this._indeterminate;
    this._indeterminate = value;
    if (changed) {
      if (this._indeterminate) {
        this._transitionCheckState(TransitionCheckState.Indeterminate);
      } else {
        this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      }
      this.indeterminateChange.emit(this._indeterminate);
    }
    this._syncIndeterminate(this._indeterminate);
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Method being called whenever the label text changes. */
  _onLabelTextChange() {
    this._changeDetectorRef.detectChanges();
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this.checked = !!value;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  // Implemented as a part of Validator.
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  // Implemented as a part of Validator.
  registerOnValidatorChange(fn) {
    this._validatorChangeFn = fn;
  }
  _transitionCheckState(newState) {
    let oldState = this._currentCheckState;
    let element = this._getAnimationTargetElement();
    if (oldState === newState || !element) {
      return;
    }
    if (this._currentAnimationClass) {
      element.classList.remove(this._currentAnimationClass);
    }
    this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
    this._currentCheckState = newState;
    if (this._currentAnimationClass.length > 0) {
      element.classList.add(this._currentAnimationClass);
      const animationClass = this._currentAnimationClass;
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          element.classList.remove(animationClass);
        }, 1e3);
      });
    }
  }
  _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
    if (this._inputElement) {
      this._inputElement.nativeElement.checked = this.checked;
    }
  }
  /** Toggles the `checked` state of the checkbox. */
  toggle() {
    this.checked = !this.checked;
    this._controlValueAccessorChangeFn(this.checked);
  }
  _handleInputClick() {
    const clickAction = this._options?.clickAction;
    if (!this.disabled && clickAction !== "noop") {
      if (this.indeterminate && clickAction !== "check") {
        Promise.resolve().then(() => {
          this._indeterminate = false;
          this.indeterminateChange.emit(this._indeterminate);
        });
      }
      this._checked = !this._checked;
      this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      this._emitChangeEvent();
    } else if (this.disabled && this.disabledInteractive || !this.disabled && clickAction === "noop") {
      this._inputElement.nativeElement.checked = this.checked;
      this._inputElement.nativeElement.indeterminate = this.indeterminate;
    }
  }
  _onInteractionEvent(event) {
    event.stopPropagation();
  }
  _onBlur() {
    Promise.resolve().then(() => {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
    });
  }
  _getAnimationClassForCheckStateTransition(oldState, newState) {
    if (this._animationMode === "NoopAnimations") {
      return "";
    }
    switch (oldState) {
      case TransitionCheckState.Init:
        if (newState === TransitionCheckState.Checked) {
          return this._animationClasses.uncheckedToChecked;
        } else if (newState == TransitionCheckState.Indeterminate) {
          return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
        }
        break;
      case TransitionCheckState.Unchecked:
        return newState === TransitionCheckState.Checked ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
      case TransitionCheckState.Checked:
        return newState === TransitionCheckState.Unchecked ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
      case TransitionCheckState.Indeterminate:
        return newState === TransitionCheckState.Checked ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
    }
    return "";
  }
  /**
   * Syncs the indeterminate value with the checkbox DOM node.
   *
   * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
   * property is supported on an element boils down to `if (propName in element)`. Domino's
   * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
   * server-side rendering.
   */
  _syncIndeterminate(value) {
    const nativeCheckbox = this._inputElement;
    if (nativeCheckbox) {
      nativeCheckbox.nativeElement.indeterminate = value;
    }
  }
  _onInputClick() {
    this._handleInputClick();
  }
  _onTouchTargetClick() {
    this._handleInputClick();
    if (!this.disabled) {
      this._inputElement.nativeElement.focus();
    }
  }
  /**
   *  Prevent click events that come from the `<label/>` element from bubbling. This prevents the
   *  click handler on the host from triggering twice when clicking on the `<label/>` element. After
   *  the click event on the `<label/>` propagates, the browsers dispatches click on the associated
   *  `<input/>`. By preventing clicks on the label by bubbling, we ensure only one click event
   *  bubbles when the label is clicked.
   */
  _preventBubblingFromLabel(event) {
    if (!!event.target && this._labelElement.nativeElement.contains(event.target)) {
      event.stopPropagation();
    }
  }
  static {
    this.\u0275fac = function MatCheckbox_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatCheckbox)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8), \u0275\u0275directiveInject(MAT_CHECKBOX_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatCheckbox,
      selectors: [["mat-checkbox"]],
      viewQuery: function MatCheckbox_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c0, 5);
          \u0275\u0275viewQuery(_c1, 5);
          \u0275\u0275viewQuery(MatRipple, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputElement = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._labelElement = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ripple = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-checkbox"],
      hostVars: 16,
      hostBindings: function MatCheckbox_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("id", ctx.id);
          \u0275\u0275attribute("tabindex", null)("aria-label", null)("aria-labelledby", null);
          \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "mat-accent");
          \u0275\u0275classProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mdc-checkbox--disabled", ctx.disabled)("mat-mdc-checkbox-disabled", ctx.disabled)("mat-mdc-checkbox-checked", ctx.checked)("mat-mdc-checkbox-disabled-interactive", ctx.disabledInteractive);
        }
      },
      inputs: {
        ariaLabel: [0, "aria-label", "ariaLabel"],
        ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
        ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
        id: "id",
        required: [2, "required", "required", booleanAttribute],
        labelPosition: "labelPosition",
        name: "name",
        value: "value",
        disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
        tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? void 0 : numberAttribute(value)],
        color: "color",
        disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
        checked: [2, "checked", "checked", booleanAttribute],
        disabled: [2, "disabled", "disabled", booleanAttribute],
        indeterminate: [2, "indeterminate", "indeterminate", booleanAttribute]
      },
      outputs: {
        change: "change",
        indeterminateChange: "indeterminateChange"
      },
      exportAs: ["matCheckbox"],
      features: [\u0275\u0275ProvidersFeature([MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, {
        provide: NG_VALIDATORS,
        useExisting: _MatCheckbox,
        multi: true
      }]), \u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature],
      ngContentSelectors: _c2,
      decls: 15,
      vars: 20,
      consts: [["checkbox", ""], ["input", ""], ["label", ""], ["mat-internal-form-field", "", 3, "click", "labelPosition"], [1, "mdc-checkbox"], [1, "mat-mdc-checkbox-touch-target", 3, "click"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "blur", "click", "change", "checked", "indeterminate", "disabled", "id", "required", "tabIndex"], [1, "mdc-checkbox__ripple"], [1, "mdc-checkbox__background"], ["focusable", "false", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], ["mat-ripple", "", 1, "mat-mdc-checkbox-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-label", 3, "for"]],
      template: function MatCheckbox_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div", 3);
          \u0275\u0275listener("click", function MatCheckbox_Template_div_click_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._preventBubblingFromLabel($event));
          });
          \u0275\u0275elementStart(1, "div", 4, 0)(3, "div", 5);
          \u0275\u0275listener("click", function MatCheckbox_Template_div_click_3_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onTouchTargetClick());
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(4, "input", 6, 1);
          \u0275\u0275listener("blur", function MatCheckbox_Template_input_blur_4_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onBlur());
          })("click", function MatCheckbox_Template_input_click_4_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onInputClick());
          })("change", function MatCheckbox_Template_input_change_4_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onInteractionEvent($event));
          });
          \u0275\u0275elementEnd();
          \u0275\u0275element(6, "div", 7);
          \u0275\u0275elementStart(7, "div", 8);
          \u0275\u0275namespaceSVG();
          \u0275\u0275elementStart(8, "svg", 9);
          \u0275\u0275element(9, "path", 10);
          \u0275\u0275elementEnd();
          \u0275\u0275namespaceHTML();
          \u0275\u0275element(10, "div", 11);
          \u0275\u0275elementEnd();
          \u0275\u0275element(11, "div", 12);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(12, "label", 13, 2);
          \u0275\u0275projection(14);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          const checkbox_r2 = \u0275\u0275reference(2);
          \u0275\u0275property("labelPosition", ctx.labelPosition);
          \u0275\u0275advance(4);
          \u0275\u0275classProp("mdc-checkbox--selected", ctx.checked);
          \u0275\u0275property("checked", ctx.checked)("indeterminate", ctx.indeterminate)("disabled", ctx.disabled && !ctx.disabledInteractive)("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex);
          \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-checked", ctx.indeterminate ? "mixed" : null)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? true : null)("name", ctx.name)("value", ctx.value);
          \u0275\u0275advance(7);
          \u0275\u0275property("matRippleTrigger", checkbox_r2)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
          \u0275\u0275advance();
          \u0275\u0275property("for", ctx.inputId);
        }
      },
      dependencies: [MatRipple, _MatInternalFormField],
      styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover .mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:hover .mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mdc-checkbox__ripple{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.cdk-high-contrast-active .mdc-checkbox--disabled{opacity:.5}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mdc-checkbox-unselected-icon-color, var(--mat-app-on-surface-variant));top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mat-app-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mat-app-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover .mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.cdk-high-contrast-active .mdc-checkbox--disabled .mdc-checkbox__checkmark,.cdk-high-contrast-active .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__mixedmark{margin:0 1px}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *,.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color)}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-mdc-focus-indicator::before{content:""}'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckbox, [{
    type: Component,
    args: [{
      selector: "mat-checkbox",
      host: {
        "class": "mat-mdc-checkbox",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[class._mat-animation-noopable]": `_animationMode === 'NoopAnimations'`,
        "[class.mdc-checkbox--disabled]": "disabled",
        "[id]": "id",
        // Add classes that users can use to more easily target disabled or checked checkboxes.
        "[class.mat-mdc-checkbox-disabled]": "disabled",
        "[class.mat-mdc-checkbox-checked]": "checked",
        "[class.mat-mdc-checkbox-disabled-interactive]": "disabledInteractive",
        "[class]": 'color ? "mat-" + color : "mat-accent"'
      },
      providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, {
        provide: NG_VALIDATORS,
        useExisting: MatCheckbox,
        multi: true
      }],
      exportAs: "matCheckbox",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition" (click)="_preventBubblingFromLabel($event)">
  <div #checkbox class="mdc-checkbox">
    <!-- Render this element first so the input is on top. -->
    <div class="mat-mdc-checkbox-touch-target" (click)="_onTouchTargetClick()"></div>
    <input #input
           type="checkbox"
           class="mdc-checkbox__native-control"
           [class.mdc-checkbox--selected]="checked"
           [attr.aria-label]="ariaLabel || null"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-checked]="indeterminate ? 'mixed' : null"
           [attr.aria-disabled]="disabled && disabledInteractive ? true : null"
           [attr.name]="name"
           [attr.value]="value"
           [checked]="checked"
           [indeterminate]="indeterminate"
           [disabled]="disabled && !disabledInteractive"
           [id]="inputId"
           [required]="required"
           [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
           (blur)="_onBlur()"
           (click)="_onInputClick()"
           (change)="_onInteractionEvent($event)"/>
    <div class="mdc-checkbox__ripple"></div>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           focusable="false"
           viewBox="0 0 24 24"
           aria-hidden="true">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple
      [matRippleTrigger]="checkbox"
      [matRippleDisabled]="disableRipple || disabled"
      [matRippleCentered]="true"></div>
  </div>
  <!--
    Avoid putting a click handler on the <label/> to fix duplicate navigation stop on Talk Back
    (#14385). Putting a click handler on the <label/> caused this bug because the browser produced
    an unnecessary accessibility tree node.
  -->
  <label class="mdc-label" #label [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover .mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:hover .mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mdc-checkbox__ripple{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.cdk-high-contrast-active .mdc-checkbox--disabled{opacity:.5}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mdc-checkbox-unselected-icon-color, var(--mat-app-on-surface-variant));top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mat-app-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mat-app-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover .mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.cdk-high-contrast-active .mdc-checkbox--disabled .mdc-checkbox__checkmark,.cdk-high-contrast-active .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__mixedmark{margin:0 1px}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *,.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color)}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-mdc-focus-indicator::before{content:""}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
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
      args: [MAT_CHECKBOX_DEFAULT_OPTIONS]
    }]
  }], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    id: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    labelPosition: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    indeterminateChange: [{
      type: Output
    }],
    value: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _labelElement: [{
      type: ViewChild,
      args: ["label"]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? void 0 : numberAttribute(value)
      }]
    }],
    color: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ripple: [{
      type: ViewChild,
      args: [MatRipple]
    }],
    checked: [{
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
    indeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MAT_CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MatCheckboxRequiredValidator),
  multi: true
};
var MatCheckboxRequiredValidator = class _MatCheckboxRequiredValidator extends CheckboxRequiredValidator {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatCheckboxRequiredValidator_BaseFactory;
      return function MatCheckboxRequiredValidator_Factory(__ngFactoryType__) {
        return (\u0275MatCheckboxRequiredValidator_BaseFactory || (\u0275MatCheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MatCheckboxRequiredValidator)))(__ngFactoryType__ || _MatCheckboxRequiredValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatCheckboxRequiredValidator,
      selectors: [["mat-checkbox", "required", "", "formControlName", ""], ["mat-checkbox", "required", "", "formControl", ""], ["mat-checkbox", "required", "", "ngModel", ""]],
      features: [\u0275\u0275ProvidersFeature([MAT_CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: `mat-checkbox[required][formControlName],
             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]`,
      providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR],
      standalone: true
    }]
  }], null, null);
})();
var _MatCheckboxRequiredValidatorModule = class __MatCheckboxRequiredValidatorModule {
  static {
    this.\u0275fac = function _MatCheckboxRequiredValidatorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || __MatCheckboxRequiredValidatorModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: __MatCheckboxRequiredValidatorModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatCheckboxRequiredValidatorModule, [{
    type: NgModule,
    args: [{
      imports: [MatCheckboxRequiredValidator],
      exports: [MatCheckboxRequiredValidator]
    }]
  }], null, null);
})();
var MatCheckboxModule = class _MatCheckboxModule {
  static {
    this.\u0275fac = function MatCheckboxModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatCheckboxModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatCheckboxModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCheckbox, MatCommonModule, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatCheckbox, MatCommonModule],
      exports: [MatCheckbox, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/ngx-mat-select-search/fesm2020/ngx-mat-select-search.mjs
var _c02 = ["searchSelectInput"];
var _c12 = ["innerSelectSearch"];
var _c22 = [[["", 8, "mat-select-search-custom-header-content"]], [["", "ngxMatSelectSearchClear", ""]], [["", "ngxMatSelectNoEntriesFound", ""]]];
var _c3 = [".mat-select-search-custom-header-content", "[ngxMatSelectSearchClear]", "[ngxMatSelectNoEntriesFound]"];
var _c4 = (a0, a1) => ({
  "mat-select-search-inner-multiple": a0,
  "mat-select-search-inner-toggle-all": a1
});
function MatSelectSearchComponent_mat_checkbox_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 12);
    \u0275\u0275listener("change", function MatSelectSearchComponent_mat_checkbox_4_Template_mat_checkbox_change_0_listener($event) {
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
function MatSelectSearchComponent_mat_spinner_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 13);
  }
}
function MatSelectSearchComponent_button_8_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 1, ["*ngIf", "clearIcon; else defaultIcon"]);
  }
}
function MatSelectSearchComponent_button_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("svgIcon", ctx_r2.closeSvgIcon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", !ctx_r2.closeSvgIcon ? ctx_r2.closeIcon : null, " ");
  }
}
function MatSelectSearchComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function MatSelectSearchComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2._reset(true));
    });
    \u0275\u0275template(1, MatSelectSearchComponent_button_8_ng_content_1_Template, 1, 0, "ng-content", 15)(2, MatSelectSearchComponent_button_8_ng_template_2_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const defaultIcon_r5 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.clearIcon)("ngIfElse", defaultIcon_r5);
  }
}
function MatSelectSearchComponent_div_11_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2, ["*ngIf", "noEntriesFound; else defaultNoEntriesFound"]);
  }
}
function MatSelectSearchComponent_div_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate(ctx_r2.noEntriesFoundLabel);
  }
}
function MatSelectSearchComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, MatSelectSearchComponent_div_11_ng_content_1_Template, 1, 0, "ng-content", 15)(2, MatSelectSearchComponent_div_11_ng_template_2_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const defaultNoEntriesFound_r6 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.noEntriesFound)("ngIfElse", defaultNoEntriesFound_r6);
  }
}
var MatSelectSearchClearDirective = class {
};
MatSelectSearchClearDirective.\u0275fac = function MatSelectSearchClearDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MatSelectSearchClearDirective)();
};
MatSelectSearchClearDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: MatSelectSearchClearDirective,
  selectors: [["", "ngxMatSelectSearchClear", ""]],
  standalone: false
});
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
var MatSelectNoEntriesFoundDirective = class {
};
MatSelectNoEntriesFoundDirective.\u0275fac = function MatSelectNoEntriesFoundDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MatSelectNoEntriesFoundDirective)();
};
MatSelectNoEntriesFoundDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: MatSelectNoEntriesFoundDirective,
  selectors: [["", "ngxMatSelectNoEntriesFound", ""]],
  standalone: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSelectNoEntriesFoundDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxMatSelectNoEntriesFound]"
    }]
  }], null, null);
})();
var MatSelectSearchComponent = class {
  constructor(matSelect, changeDetectorRef, _viewportRuler, matOption, matFormField, defaultOptions) {
    this.matSelect = matSelect;
    this.changeDetectorRef = changeDetectorRef;
    this._viewportRuler = _viewportRuler;
    this.matOption = matOption;
    this.matFormField = matFormField;
    this.placeholderLabel = "Suche";
    this.type = "text";
    this.closeIcon = "close";
    this.noEntriesFoundLabel = "Keine Optionen gefunden";
    this.clearSearchInput = true;
    this.searching = false;
    this.disableInitialFocus = false;
    this.enableClearOnEscapePressed = false;
    this.preventHomeEndKeyPropagation = false;
    this.disableScrollToActiveOnOptionsChanged = false;
    this.ariaLabel = "dropdown search";
    this.showToggleAllCheckbox = false;
    this.toggleAllCheckboxChecked = false;
    this.toggleAllCheckboxIndeterminate = false;
    this.toggleAllCheckboxTooltipMessage = "";
    this.toggleAllCheckboxTooltipPosition = "below";
    this.hideClearSearchButton = false;
    this.alwaysRestoreSelectedOptionsMulti = false;
    this.toggleAll = new EventEmitter();
    this.onTouched = (_) => {
    };
    this._options$ = new BehaviorSubject(null);
    this.optionsList$ = this._options$.pipe(switchMap((_options) => _options ? _options.changes.pipe(map((options) => options.toArray()), startWith(_options.toArray())) : of(null)));
    this.optionsLength$ = this.optionsList$.pipe(map((options) => options ? options.length : 0));
    this._formControl = new FormControl("", {
      nonNullable: true
    });
    this._showNoEntriesFound$ = combineLatest([this._formControl.valueChanges, this.optionsLength$]).pipe(map(([value, optionsLength]) => !!(this.noEntriesFoundLabel && value && optionsLength === this.getOptionsLengthOffset())));
    this._onDestroy = new Subject();
    this.applyDefaultOptions(defaultOptions);
  }
  /** Current search value */
  get value() {
    return this._formControl.value;
  }
  /** Reference to the MatSelect options */
  set _options(_options) {
    this._options$.next(_options);
  }
  get _options() {
    return this._options$.getValue();
  }
  applyDefaultOptions(defaultOptions) {
    if (!defaultOptions) {
      return;
    }
    for (const key of configurableDefaultOptions) {
      if (defaultOptions.hasOwnProperty(key)) {
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
    this.matSelect.openedChange.pipe(take(1), switchMap((_) => {
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
    if (event.key && event.key.length === 1 || event.keyCode >= A && event.keyCode <= Z || event.keyCode >= ZERO && event.keyCode <= NINE || event.keyCode === SPACE || this.preventHomeEndKeyPropagation && (event.keyCode === HOME || event.keyCode === END)) {
      event.stopPropagation();
    }
    if (this.matSelect.multiple && event.key && event.keyCode === ENTER) {
      setTimeout(() => this._focus());
    }
    if (this.enableClearOnEscapePressed === true && event.keyCode === ESCAPE && this.value) {
      this._reset(true);
      event.stopPropagation();
    }
  }
  /**
   * Handles the key up event with MatSelect.
   * Allows e.g. the announcing of the currently activeDescendant by screen readers.
   */
  _handleKeyup(event) {
    if (event.keyCode === UP_ARROW || event.keyCode === DOWN_ARROW) {
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
              values.push(previousValue);
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
   *  And support all Operation Systems
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
};
MatSelectSearchComponent.\u0275fac = function MatSelectSearchComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MatSelectSearchComponent)(\u0275\u0275directiveInject(MatSelect), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ViewportRuler), \u0275\u0275directiveInject(MatOption, 8), \u0275\u0275directiveInject(MatFormField, 8), \u0275\u0275directiveInject(MAT_SELECTSEARCH_DEFAULT_OPTIONS, 8));
};
MatSelectSearchComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: MatSelectSearchComponent,
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
      \u0275\u0275viewQuery(_c02, 7, ElementRef);
      \u0275\u0275viewQuery(_c12, 7, ElementRef);
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
    alwaysRestoreSelectedOptionsMulti: "alwaysRestoreSelectedOptionsMulti"
  },
  outputs: {
    toggleAll: "toggleAll"
  },
  standalone: false,
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MatSelectSearchComponent),
    multi: true
  }])],
  ngContentSelectors: _c3,
  decls: 13,
  vars: 14,
  consts: [["innerSelectSearch", ""], ["searchSelectInput", ""], ["defaultIcon", ""], ["defaultNoEntriesFound", ""], ["matInput", "", 1, "mat-select-search-input", "mat-select-search-hidden"], [1, "mat-select-search-inner", "mat-typography", "mat-datepicker-content", "mat-tab-header", 3, "ngClass"], [1, "mat-select-search-inner-row"], ["class", "mat-select-search-toggle-all-checkbox", "matTooltipClass", "ngx-mat-select-search-toggle-all-tooltip", 3, "color", "checked", "indeterminate", "matTooltip", "matTooltipPosition", "change", 4, "ngIf"], ["autocomplete", "off", 1, "mat-select-search-input", 3, "keydown", "keyup", "blur", "type", "formControl", "placeholder"], ["class", "mat-select-search-spinner", "diameter", "16", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Clear", "class", "mat-select-search-clear", 3, "click", 4, "ngIf"], ["class", "mat-select-search-no-entries-found", 4, "ngIf"], ["matTooltipClass", "ngx-mat-select-search-toggle-all-tooltip", 1, "mat-select-search-toggle-all-checkbox", 3, "change", "color", "checked", "indeterminate", "matTooltip", "matTooltipPosition"], ["diameter", "16", 1, "mat-select-search-spinner"], ["mat-icon-button", "", "aria-label", "Clear", 1, "mat-select-search-clear", 3, "click"], [4, "ngIf", "ngIfElse"], [3, "svgIcon"], [1, "mat-select-search-no-entries-found"]],
  template: function MatSelectSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef(_c22);
      \u0275\u0275element(0, "input", 4);
      \u0275\u0275elementStart(1, "div", 5, 0)(3, "div", 6);
      \u0275\u0275template(4, MatSelectSearchComponent_mat_checkbox_4_Template, 1, 5, "mat-checkbox", 7);
      \u0275\u0275elementStart(5, "input", 8, 1);
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
      \u0275\u0275template(7, MatSelectSearchComponent_mat_spinner_7_Template, 1, 0, "mat-spinner", 9)(8, MatSelectSearchComponent_button_8_Template, 4, 2, "button", 10);
      \u0275\u0275projection(9);
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "mat-divider");
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, MatSelectSearchComponent_div_11_Template, 4, 2, "div", 11);
      \u0275\u0275pipe(12, "async");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(11, _c4, ctx.matSelect.multiple, ctx._isToggleAllCheckboxVisible()));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx._isToggleAllCheckboxVisible());
      \u0275\u0275advance();
      \u0275\u0275property("type", ctx.type)("formControl", ctx._formControl)("placeholder", ctx.placeholderLabel);
      \u0275\u0275attribute("aria-label", ctx.ariaLabel);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.searching);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.hideClearSearchButton && ctx.value && !ctx.searching);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(12, 9, ctx._showNoEntriesFound$));
    }
  },
  dependencies: [NgClass, NgIf, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatIconButton, MatCheckbox, MatIcon, MatProgressSpinner, MatTooltip, MatDivider, AsyncPipe],
  styles: [".mat-select-search-hidden[_ngcontent-%COMP%]{visibility:hidden}.mat-select-search-inner[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;z-index:100;font-size:inherit;box-shadow:none;background-color:var(--mat-select-panel-background-color)}.mat-select-search-inner.mat-select-search-inner-multiple.mat-select-search-inner-toggle-all[_ngcontent-%COMP%]   .mat-select-search-inner-row[_ngcontent-%COMP%]{display:flex;align-items:center}.mat-select-search-input[_ngcontent-%COMP%]{box-sizing:border-box;width:100%;border:none;font-family:inherit;font-size:inherit;color:currentColor;outline:none;background-color:var(--mat-select-panel-background-color);padding:0 44px 0 16px;height:calc(3em - 1px);line-height:calc(3em - 1px)}[dir=rtl][_nghost-%COMP%]   .mat-select-search-input[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .mat-select-search-input[_ngcontent-%COMP%]{padding-right:16px;padding-left:44px}.mat-select-search-inner-toggle-all[_ngcontent-%COMP%]   .mat-select-search-input[_ngcontent-%COMP%]{padding-left:5px}.mat-select-search-no-entries-found[_ngcontent-%COMP%]{padding-top:8px}.mat-select-search-clear[_ngcontent-%COMP%]{position:absolute;right:4px;top:0}[dir=rtl][_nghost-%COMP%]   .mat-select-search-clear[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .mat-select-search-clear[_ngcontent-%COMP%]{right:auto;left:4px}.mat-select-search-spinner[_ngcontent-%COMP%]{position:absolute;right:16px;top:calc(50% - 8px)}[dir=rtl][_nghost-%COMP%]   .mat-select-search-spinner[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .mat-select-search-spinner[_ngcontent-%COMP%]{right:auto;left:16px}  .mat-mdc-option[aria-disabled=true].contains-mat-select-search{position:sticky;top:-8px;z-index:1;opacity:1;margin-top:-8px;pointer-events:all}  .mat-mdc-option[aria-disabled=true].contains-mat-select-search .mat-icon{margin-right:0;margin-left:0}  .mat-mdc-option[aria-disabled=true].contains-mat-select-search mat-pseudo-checkbox{display:none}  .mat-mdc-option[aria-disabled=true].contains-mat-select-search .mdc-list-item__primary-text{opacity:1}.mat-select-search-toggle-all-checkbox[_ngcontent-%COMP%]{padding-left:5px}[dir=rtl][_nghost-%COMP%]   .mat-select-search-toggle-all-checkbox[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .mat-select-search-toggle-all-checkbox[_ngcontent-%COMP%]{padding-left:0;padding-right:5px}"],
  changeDetection: 0
});
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
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<!--
Copyright (c) 2018 Bithost GmbH All Rights Reserved.

Use of this source code is governed by an MIT-style license that can be
found in the LICENSE file at https://angular.io/license
-->
<!-- Placeholder to adjust vertical offset of the mat-option elements -->
<input matInput class="mat-select-search-input mat-select-search-hidden"/>

<!-- Note: the  mat-datepicker-content mat-tab-header are needed to inherit the material theme colors, see PR #22 -->
<div
      #innerSelectSearch
      class="mat-select-search-inner mat-typography mat-datepicker-content mat-tab-header"
      [ngClass]="{'mat-select-search-inner-multiple': matSelect.multiple, 'mat-select-search-inner-toggle-all': _isToggleAllCheckboxVisible() }">

  <div class="mat-select-search-inner-row">
    <mat-checkbox *ngIf="_isToggleAllCheckboxVisible()"
                  [color]="matFormField?.color"
                  class="mat-select-search-toggle-all-checkbox"
                  [checked]="toggleAllCheckboxChecked"
                  [indeterminate]="toggleAllCheckboxIndeterminate"
                  [matTooltip]="toggleAllCheckboxTooltipMessage"
                  matTooltipClass="ngx-mat-select-search-toggle-all-tooltip"
                  [matTooltipPosition]="toggleAllCheckboxTooltipPosition"
                  (change)="_emitSelectAllBooleanToParent($event.checked)"
    ></mat-checkbox>

    <input class="mat-select-search-input"
           autocomplete="off"
           [type]="type"
           [formControl]="_formControl"
           #searchSelectInput
           (keydown)="_handleKeydown($event)"
           (keyup)="_handleKeyup($event)"
           (blur)="onBlur()"
           [placeholder]="placeholderLabel"
           [attr.aria-label]="ariaLabel"
    />
    <mat-spinner *ngIf="searching"
            class="mat-select-search-spinner"
            diameter="16"></mat-spinner>

    <button *ngIf="!hideClearSearchButton && value && !searching"
            mat-icon-button
            aria-label="Clear"
            (click)="_reset(true)"
            class="mat-select-search-clear">
      <ng-content *ngIf="clearIcon; else defaultIcon" select="[ngxMatSelectSearchClear]"></ng-content>
      <ng-template #defaultIcon>
        <mat-icon [svgIcon]="closeSvgIcon">
          {{!closeSvgIcon ? closeIcon : null}}
        </mat-icon>
      </ng-template>
    </button>

    <ng-content select=".mat-select-search-custom-header-content"></ng-content>
  </div>

  <mat-divider></mat-divider>
</div>

<div *ngIf="_showNoEntriesFound$ | async"
     class="mat-select-search-no-entries-found">
  <ng-content *ngIf="noEntriesFound; else defaultNoEntriesFound"
              select="[ngxMatSelectNoEntriesFound]"></ng-content>
  <ng-template #defaultNoEntriesFound>{{noEntriesFoundLabel}}</ng-template>
</div>

`,
      styles: [".mat-select-search-hidden{visibility:hidden}.mat-select-search-inner{position:absolute;top:0;left:0;width:100%;z-index:100;font-size:inherit;box-shadow:none;background-color:var(--mat-select-panel-background-color)}.mat-select-search-inner.mat-select-search-inner-multiple.mat-select-search-inner-toggle-all .mat-select-search-inner-row{display:flex;align-items:center}.mat-select-search-input{box-sizing:border-box;width:100%;border:none;font-family:inherit;font-size:inherit;color:currentColor;outline:none;background-color:var(--mat-select-panel-background-color);padding:0 44px 0 16px;height:calc(3em - 1px);line-height:calc(3em - 1px)}:host-context([dir=rtl]) .mat-select-search-input{padding-right:16px;padding-left:44px}.mat-select-search-inner-toggle-all .mat-select-search-input{padding-left:5px}.mat-select-search-no-entries-found{padding-top:8px}.mat-select-search-clear{position:absolute;right:4px;top:0}:host-context([dir=rtl]) .mat-select-search-clear{right:auto;left:4px}.mat-select-search-spinner{position:absolute;right:16px;top:calc(50% - 8px)}:host-context([dir=rtl]) .mat-select-search-spinner{right:auto;left:16px}::ng-deep .mat-mdc-option[aria-disabled=true].contains-mat-select-search{position:sticky;top:-8px;z-index:1;opacity:1;margin-top:-8px;pointer-events:all}::ng-deep .mat-mdc-option[aria-disabled=true].contains-mat-select-search .mat-icon{margin-right:0;margin-left:0}::ng-deep .mat-mdc-option[aria-disabled=true].contains-mat-select-search mat-pseudo-checkbox{display:none}::ng-deep .mat-mdc-option[aria-disabled=true].contains-mat-select-search .mdc-list-item__primary-text{opacity:1}.mat-select-search-toggle-all-checkbox{padding-left:5px}:host-context([dir=rtl]) .mat-select-search-toggle-all-checkbox{padding-left:0;padding-right:5px}\n"]
    }]
  }], function() {
    return [{
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
    }];
  }, {
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
var NgxMatSelectSearchModule = class {
};
NgxMatSelectSearchModule.\u0275fac = function NgxMatSelectSearchModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxMatSelectSearchModule)();
};
NgxMatSelectSearchModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: NgxMatSelectSearchModule
});
NgxMatSelectSearchModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatProgressSpinnerModule, MatTooltipModule, MatDividerModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatSelectSearchModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatProgressSpinnerModule, MatTooltipModule, MatDividerModule],
      declarations: [MatSelectSearchComponent, MatSelectSearchClearDirective, MatSelectNoEntriesFoundDirective],
      exports: [MatSelectSearchComponent, MatSelectSearchClearDirective, MatSelectNoEntriesFoundDirective]
    }]
  }], null, null);
})();

// src/app/services/projects-list.service.ts
var ProjectsListService = class _ProjectsListService {
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
  static {
    this.\u0275fac = function ProjectsListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsListService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectsListService, factory: _ProjectsListService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/properties-list.service.ts
var PropertiesListService = class _PropertiesListService {
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
    let u = this.newSparqlAddress(address);
    return this.request.getList(u).pipe(map((res) => this.listFromSparql(res)));
  }
  propertiesList2Building(id) {
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20WHERE%20%7B";
    let suffix = "%3Fitem%20wdt%3AP2%20wd%3A";
    let suffix2 = ".%7D%0A";
    let u = this.newSparqlAddress(prefix + this.langService + suffix + id + suffix2);
    return this.request.getList(u).pipe(map((res) => this.listFromSparql(res)));
  }
  get qualifierPropertiesListBuilding() {
    let prefix = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FpropertyType%20%20WHERE%20%7B%20";
    let suffix = "%20VALUES%20%3Fqualifier%20%7B%20wd%3AQ514317%20wd%3AQ21403%20%7D%0A%20%3Fitem%20wikibase%3ApropertyType%20%3FpropertyType%3B%0A%20%20%20%20%20%20%20%20%20%20%20wdt%3AP8%20%3Fqualifier.%0A%7D%0AORDER%20BY%20%3FitemLabel";
    let v;
    let u = this.newSparqlAddress(prefix + this.langService + suffix);
    return this.request.getList(u).pipe(map((res) => this.listFromSparql(res)), map((res) => this.changeList(res)));
  }
  listFromSparql(res) {
    if (res !== void 0) {
      if (res.results !== void 0) {
        let v = res.results.bindings;
        for (let i = 0; i < v.length; i++) {
          v[i].id = v[i]["item"].value.replace("https://database.factgrid.de/entity/", "");
          if (v[i]["propertyType"]) {
            v[i]["propertyType"].id = v[i]["propertyType"].value.replace("http://wikiba.se/ontology#", "");
          }
        }
        ;
        v.push(
          { id: "P2/P3*", itemLabel: { value: this.deepNatureOf() }, propertyType: { id: "WikibaseItem" } }
          // adding a special property
        );
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
        data[i]["itemLabel"].label = data[i]["itemLabel"].value + " (" + data[i]["propertyType"].id + ")";
      }
      ;
    }
    return data;
  }
  static {
    this.\u0275fac = function PropertiesListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PropertiesListService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PropertiesListService, factory: _PropertiesListService.\u0275fac, providedIn: "root" });
  }
};

// src/app/search/advanced-search/project-select/project-select.component.ts
var _c03 = ["multiSelect"];
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
var ProjectSelectComponent = class _ProjectSelectComponent {
  constructor() {
    this.setLanguage = inject(SetLanguageService);
    this.lang = inject(SelectedLangService);
    this.formBuilder = inject(FormBuilder);
    this.placeholderLabel = input("Search");
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
    console.log($event);
  }
  filterProjectMulti() {
    console.log(this.data);
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
  static {
    this.\u0275fac = function ProjectSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectSelectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectSelectComponent, selectors: [["app-project-select"]], viewQuery: function ProjectSelectComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.multiSelect = _t.first);
      }
    }, inputs: { placeholderLabel: [1, "placeholderLabel"], data: "data" }, outputs: { selectionChange: "selectionChange" }, decls: 9, vars: 6, consts: [["multiSelect", ""], [1, "cardBackground"], ["id", "projects", 1, "search-center2"], ["placeholder", "Projects", 3, "selectionChange", "formControl", "multiple"], ["placeholderLabel", "Search", "noEntriesFoundLabel", "Not found", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function ProjectSelectComponent_Template(rf, ctx) {
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
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectSelectComponent, { className: "ProjectSelectComponent", filePath: "src/app/search/advanced-search/project-select/project-select.component.ts", lineNumber: 34 });
})();

// src/app/services/search-engine.service.ts
var SearchEngineService = class _SearchEngineService {
  constructor() {
    this.request = inject(RequestService);
    this.lang = inject(SelectedLangService);
  }
  input(de) {
    de.pipe(
      debounceTime(400),
      switchMap((label) => this.request.searchItem(label, this.lang.selectedLang, 50)),
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
    let baseGetURL = "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=";
    let getUrlSuffix = "&format=json&origin=*";
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
  static {
    this.\u0275fac = function SearchEngineService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchEngineService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SearchEngineService, factory: _SearchEngineService.\u0275fac, providedIn: "root" });
  }
};

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
var DataService = class _DataService {
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
    this.$propertiesList = this.propertiesList.asObservable();
    this.currentStatement = new BehaviorSubject(0);
    this.$currentStatement = this.currentStatement.asObservable();
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
  static {
    this.\u0275fac = function DataService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DataService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataService, factory: _DataService.\u0275fac, providedIn: "root" });
  }
};

// src/app/search/advanced-search/services/statements-controls.service.ts
var StatementsControlsService = class _StatementsControlsService {
  constructor() {
  }
  itemType(statements, i) {
    return statements.at(i).get("value.itemType");
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
  static {
    this.\u0275fac = function StatementsControlsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StatementsControlsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StatementsControlsService, factory: _StatementsControlsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/search/advanced-search/statement-search/statement-search.component.ts
var _c04 = ["matRef"];
var _c13 = ["singleSelect"];
var _c23 = ["multiSelect"];
var _forTrack0 = ($index, $item) => $item.itemType;
var _forTrack1 = ($index, $item) => $item.qualifierProperty[1];
var _c32 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c42 = (a0, a1, a2) => [a0, a1, a2];
var _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
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
    \u0275\u0275template(1, StatementSearchComponent_Conditional_5_For_1_Conditional_4_Conditional_1_Template, 1, 1)(2, StatementSearchComponent_Conditional_5_For_1_Conditional_4_Conditional_2_Template, 1, 1)(3, StatementSearchComponent_Conditional_5_For_1_Conditional_4_Conditional_3_Template, 1, 1);
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
    \u0275\u0275textInterpolate2(" qualifier ", qualifier_r3.qualifierProperty[1] + 1, " : property: ", qualifier_r3.qualifierProperty[4], "");
  }
}
function StatementSearchComponent_Conditional_5_For_1_Conditional_5_For_2_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const qualifier_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" -> object: ", qualifier_r3.value.qualifierValue[2], "");
  }
}
function StatementSearchComponent_Conditional_5_For_1_Conditional_5_For_2_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const qualifier_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" -> object: ", qualifier_r3.value.qualifierLiteralValue[2], "");
  }
}
function StatementSearchComponent_Conditional_5_For_1_Conditional_5_For_2_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const qualifier_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" -> object: ", qualifier_r3.value.qualifierLiteralString, "");
  }
}
function StatementSearchComponent_Conditional_5_For_1_Conditional_5_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StatementSearchComponent_Conditional_5_For_1_Conditional_5_For_2_Conditional_2_Conditional_0_Template, 1, 1)(1, StatementSearchComponent_Conditional_5_For_1_Conditional_5_For_2_Conditional_2_Conditional_1_Template, 1, 1)(2, StatementSearchComponent_Conditional_5_For_1_Conditional_5_For_2_Conditional_2_Conditional_2_Template, 1, 1);
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
    \u0275\u0275template(1, StatementSearchComponent_Conditional_5_For_1_Conditional_5_For_2_Conditional_1_Template, 1, 2)(2, StatementSearchComponent_Conditional_5_For_1_Conditional_5_For_2_Conditional_2_Template, 3, 3);
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
    \u0275\u0275template(1, StatementSearchComponent_Conditional_5_For_1_Conditional_1_Template, 1, 0)(2, StatementSearchComponent_Conditional_5_For_1_Conditional_2_Template, 1, 2)(3, StatementSearchComponent_Conditional_5_For_1_Conditional_3_Template, 3, 0)(4, StatementSearchComponent_Conditional_5_For_1_Conditional_4_Template, 4, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StatementSearchComponent_Conditional_5_For_1_Conditional_5_Template, 3, 0, "div", 2);
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
function StatementSearchComponent_For_13_Conditional_1_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const itemType_r6 = ctx.$implicit;
    const \u0275$index_56_r7 = \u0275\u0275nextContext(2).$index;
    \u0275\u0275property("value", \u0275\u0275pureFunction4(2, _c32, \u0275$index_56_r7, itemType_r6.label, itemType_r6.value, itemType_r6.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", itemType_r6.label, " ");
  }
}
function StatementSearchComponent_For_13_Conditional_1_mat_option_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, " select several properties only if they have the type");
    \u0275\u0275elementEnd();
  }
}
function StatementSearchComponent_For_13_Conditional_1_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275template(1, StatementSearchComponent_For_13_Conditional_1_mat_option_18_Conditional_1_Template, 2, 0, "p", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const property_r8 = ctx.$implicit;
    const ctx_r8 = \u0275\u0275nextContext(2);
    const statement_r10 = ctx_r8.$implicit;
    const \u0275$index_56_r7 = ctx_r8.$index;
    \u0275\u0275property("value", \u0275\u0275pureFunction4(3, _c32, \u0275$index_56_r7, property_r8.id, property_r8.propertyType.id, property_r8.itemLabel.value));
    \u0275\u0275advance();
    \u0275\u0275conditional(statement_r10.get("properties").valid ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", property_r8.itemLabel.label, " ");
  }
}
function StatementSearchComponent_For_13_Conditional_1_Conditional_21_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const itemValue_r12 = ctx.$implicit;
    const \u0275$index_56_r7 = \u0275\u0275nextContext(3).$index;
    \u0275\u0275property("value", \u0275\u0275pureFunction4(4, _c32, \u0275$index_56_r7, itemValue_r12.label, itemValue_r12.col, itemValue_r12.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", itemValue_r12.label, "", itemValue_r12.separator, "", itemValue_r12.description, " ");
  }
}
function StatementSearchComponent_For_13_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 20, 0);
    \u0275\u0275listener("selectionChange", function StatementSearchComponent_For_13_Conditional_1_Conditional_21_Template_mat_select_selectionChange_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onValueSelect($event));
    });
    \u0275\u0275elementStart(3, "mat-option");
    \u0275\u0275element(4, "ngx-mat-select-search", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StatementSearchComponent_For_13_Conditional_1_Conditional_21_mat_option_5_Template, 2, 9, "mat-option", 14);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControl", ctx_r3.itemValueFilterCtrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 2, ctx_r3.filteredItemValues));
  }
}
function StatementSearchComponent_For_13_Conditional_1_Conditional_22_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const literalVariable_r14 = ctx.$implicit;
    const \u0275$index_56_r7 = \u0275\u0275nextContext(3).$index;
    \u0275\u0275property("value", \u0275\u0275pureFunction3(2, _c42, \u0275$index_56_r7, literalVariable_r14.label, literalVariable_r14.col));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", literalVariable_r14.label, " ");
  }
}
function StatementSearchComponent_For_13_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 21, 0);
    \u0275\u0275listener("selectionChange", function StatementSearchComponent_For_13_Conditional_1_Conditional_22_Template_mat_select_selectionChange_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onLiteralValueSelect($event));
    });
    \u0275\u0275repeaterCreate(3, StatementSearchComponent_For_13_Conditional_1_Conditional_22_For_4_Template, 2, 6, "mat-option", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-form-field", 11);
    \u0275\u0275element(6, "input", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("placeholder", ctx_r3.placeholderForLiteralValue);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.literalVariables);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", ctx_r3.placeholderForLiteralString);
  }
}
function StatementSearchComponent_For_13_Conditional_1_Conditional_23_For_2_Conditional_1_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const qualifier_r16 = ctx.$implicit;
    const \u0275$index_135_r17 = \u0275\u0275nextContext(2).$index;
    const \u0275$index_56_r7 = \u0275\u0275nextContext(3).$index;
    \u0275\u0275property("value", \u0275\u0275pureFunction5(2, _c5, \u0275$index_56_r7, \u0275$index_135_r17, qualifier_r16.id, qualifier_r16.propertyType.id, qualifier_r16.itemLabel.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", qualifier_r16.itemLabel.label, " ");
  }
}
function StatementSearchComponent_For_13_Conditional_1_Conditional_23_For_2_Conditional_1_Conditional_14_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const qualifierValue_r19 = ctx.$implicit;
    const \u0275$index_135_r17 = \u0275\u0275nextContext(3).$index;
    const \u0275$index_56_r7 = \u0275\u0275nextContext(3).$index;
    \u0275\u0275property("value", \u0275\u0275pureFunction5(4, _c5, \u0275$index_56_r7, \u0275$index_135_r17, qualifierValue_r19.label, qualifierValue_r19.col, qualifierValue_r19.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", qualifierValue_r19.label, "", qualifierValue_r19.separator, "", qualifierValue_r19.description, " ");
  }
}
function StatementSearchComponent_For_13_Conditional_1_Conditional_23_For_2_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 25, 0);
    \u0275\u0275listener("selectionChange", function StatementSearchComponent_For_13_Conditional_1_Conditional_23_For_2_Conditional_1_Conditional_14_Template_mat_select_selectionChange_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r3.onQualifierValueSelect($event));
    });
    \u0275\u0275elementStart(3, "mat-option");
    \u0275\u0275element(4, "ngx-mat-select-search", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StatementSearchComponent_For_13_Conditional_1_Conditional_23_For_2_Conditional_1_Conditional_14_mat_option_5_Template, 2, 10, "mat-option", 14);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControl", ctx_r3.qualifierValueFilterCtrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 2, ctx_r3.filteredQualifierValues));
  }
}
function StatementSearchComponent_For_13_Conditional_1_Conditional_23_For_2_Conditional_1_Conditional_15_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const qualifierLiteralVariable_r21 = ctx.$implicit;
    const \u0275$index_135_r17 = \u0275\u0275nextContext(3).$index;
    const \u0275$index_56_r7 = \u0275\u0275nextContext(3).$index;
    \u0275\u0275property("value", \u0275\u0275pureFunction4(2, _c32, \u0275$index_56_r7, \u0275$index_135_r17, qualifierLiteralVariable_r21.label, qualifierLiteralVariable_r21.col));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", qualifierLiteralVariable_r21.label, " ");
  }
}
function StatementSearchComponent_For_13_Conditional_1_Conditional_23_For_2_Conditional_1_Conditional_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 11);
    \u0275\u0275element(1, "input", 27);
    \u0275\u0275elementEnd();
  }
}
function StatementSearchComponent_For_13_Conditional_1_Conditional_23_For_2_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 26, 0);
    \u0275\u0275listener("selectionChange", function StatementSearchComponent_For_13_Conditional_1_Conditional_23_For_2_Conditional_1_Conditional_15_Template_mat_select_selectionChange_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r3.onQualifierLiteralValueSelect($event));
    });
    \u0275\u0275repeaterCreate(3, StatementSearchComponent_For_13_Conditional_1_Conditional_23_For_2_Conditional_1_Conditional_15_For_4_Template, 2, 7, "mat-option", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, StatementSearchComponent_For_13_Conditional_1_Conditional_23_For_2_Conditional_1_Conditional_15_Conditional_5_Template, 2, 0, "mat-form-field", 11);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.qualifierLiteralVariables);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isLiteralStringOnQualifier ? 5 : -1);
  }
}
function StatementSearchComponent_For_13_Conditional_1_Conditional_23_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
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
    \u0275\u0275listener("selectionChange", function StatementSearchComponent_For_13_Conditional_1_Conditional_23_For_2_Conditional_1_Template_mat_select_selectionChange_8_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.onQualifierPropertySelect($event));
    });
    \u0275\u0275elementStart(9, "mat-option");
    \u0275\u0275element(10, "ngx-mat-select-search", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, StatementSearchComponent_For_13_Conditional_1_Conditional_23_For_2_Conditional_1_mat_option_11_Template, 2, 8, "mat-option", 14);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 17);
    \u0275\u0275template(14, StatementSearchComponent_For_13_Conditional_1_Conditional_23_For_2_Conditional_1_Conditional_14_Template, 7, 4, "mat-form-field", 11)(15, StatementSearchComponent_For_13_Conditional_1_Conditional_23_For_2_Conditional_1_Conditional_15_Template, 6, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_135_r17 = \u0275\u0275nextContext().$index;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Qualifier ", \u0275$index_135_r17 + 1, " ");
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
function StatementSearchComponent_For_13_Conditional_1_Conditional_23_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, StatementSearchComponent_For_13_Conditional_1_Conditional_23_For_2_Conditional_1_Template, 16, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_135_r17 = ctx.$index;
    const \u0275$index_56_r7 = \u0275\u0275nextContext(3).$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", \u0275$index_135_r17);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_135_r17 === ctx_r3.qualifiers(\u0275$index_56_r7).length - 1 ? 1 : -1);
  }
}
function StatementSearchComponent_For_13_Conditional_1_Conditional_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 28);
    \u0275\u0275listener("click", function StatementSearchComponent_For_13_Conditional_1_Conditional_23_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r22);
      const \u0275$index_56_r7 = \u0275\u0275nextContext(3).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeQualifiers(\u0275$index_56_r7, ctx_r3.j));
    });
    \u0275\u0275text(2, "Remove qualifier");
    \u0275\u0275elementEnd()();
  }
}
function StatementSearchComponent_For_13_Conditional_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, StatementSearchComponent_For_13_Conditional_1_Conditional_23_For_2_Template, 2, 2, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StatementSearchComponent_For_13_Conditional_1_Conditional_23_Conditional_3_Template, 3, 0, "div", 4);
  }
  if (rf & 2) {
    const \u0275$index_56_r7 = \u0275\u0275nextContext(2).$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.qualifiers(\u0275$index_56_r7).controls);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isRemoveQualifier ? 3 : -1);
  }
}
function StatementSearchComponent_For_13_Conditional_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 28);
    \u0275\u0275listener("click", function StatementSearchComponent_For_13_Conditional_1_Conditional_24_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r23);
      const \u0275$index_56_r7 = \u0275\u0275nextContext(2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addQualifiers(\u0275$index_56_r7));
    });
    \u0275\u0275text(2, "Add qualifier");
    \u0275\u0275elementEnd()();
  }
}
function StatementSearchComponent_For_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\xA0\xA0\xA0\xA0\xA0\xA0");
    \u0275\u0275elementStart(4, "mat-checkbox", 10);
    \u0275\u0275text(5, "Optional");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(6, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 11)(8, "mat-select", 12, 0);
    \u0275\u0275listener("selectionChange", function StatementSearchComponent_For_13_Conditional_1_Template_mat_select_selectionChange_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onItemTypeSelect($event));
    });
    \u0275\u0275elementStart(10, "mat-option");
    \u0275\u0275element(11, "ngx-mat-select-search", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, StatementSearchComponent_For_13_Conditional_1_mat_option_12_Template, 2, 7, "mat-option", 14);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-form-field", 11)(15, "mat-select", 15);
    \u0275\u0275listener("selectionChange", function StatementSearchComponent_For_13_Conditional_1_Template_mat_select_selectionChange_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onPropertySelect($event));
    });
    \u0275\u0275elementStart(16, "mat-option");
    \u0275\u0275element(17, "ngx-mat-select-search", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, StatementSearchComponent_For_13_Conditional_1_mat_option_18_Template, 3, 8, "mat-option", 14);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 17);
    \u0275\u0275template(21, StatementSearchComponent_For_13_Conditional_1_Conditional_21_Template, 7, 4, "mat-form-field", 11)(22, StatementSearchComponent_For_13_Conditional_1_Conditional_22_Template, 7, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, StatementSearchComponent_For_13_Conditional_1_Conditional_23_Template, 4, 1)(24, StatementSearchComponent_For_13_Conditional_1_Conditional_24_Template, 3, 0, "div", 4);
  }
  if (rf & 2) {
    const \u0275$index_56_r7 = \u0275\u0275nextContext().$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Statement ", \u0275$index_56_r7 + 1, " ");
    \u0275\u0275advance(10);
    \u0275\u0275property("formControl", ctx_r3.itemTypeFilterCtrl)("noEntriesFoundLabel", ctx_r3.noDataFoundLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(13, 11, ctx_r3.filteredItemTypes));
    \u0275\u0275advance(3);
    \u0275\u0275property("multiple", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r3.propertytMultiFilterCtrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(19, 13, ctx_r3.filteredPropertyMulti));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.isWikibaseItemOnStatement === true ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isLiteralOnStatement === true ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isQualifier === true ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isAddQualifier ? 24 : -1);
  }
}
function StatementSearchComponent_For_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 28);
    \u0275\u0275listener("click", function StatementSearchComponent_For_13_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r24);
      const \u0275$index_56_r7 = \u0275\u0275nextContext().$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeStatements(\u0275$index_56_r7));
    });
    \u0275\u0275text(2, "Remove statement");
    \u0275\u0275elementEnd()();
  }
}
function StatementSearchComponent_For_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 28);
    \u0275\u0275listener("click", function StatementSearchComponent_For_13_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.addStatements());
    });
    \u0275\u0275text(2, "Add Statement");
    \u0275\u0275elementEnd()();
  }
}
function StatementSearchComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, StatementSearchComponent_For_13_Conditional_1_Template, 25, 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, StatementSearchComponent_For_13_Conditional_2_Template, 3, 0, "div", 4)(3, StatementSearchComponent_For_13_Conditional_3_Template, 3, 0, "div", 4);
  }
  if (rf & 2) {
    const \u0275$index_56_r7 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", \u0275$index_56_r7);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_56_r7 === ctx_r3.statements.length - 1 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isRemoveStatement ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isAddStatement ? 3 : -1);
  }
}
var StatementSearchComponent = class _StatementSearchComponent {
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
    this.propertyDatatype = new EventEmitter();
    this.selectedItemType = new EventEmitter();
    this.selectedValue = new EventEmitter();
    this.selectedQualifierValue = new EventEmitter();
    this.qualifierPropertyDatatype = new EventEmitter();
    this.itemTypes = input([0, ITEMTYPES]);
    this.statementName = 0;
    this.placeholderForLiteralValue = "literal value?";
    this.placeholderForLiteralString = "write string? | date? | number?";
    this.propertiesValues = ["property?"];
    this.subjectsValues = ["subject?"];
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
    this.query = this.fb.group({
      statements: this.fb.array([this.statement])
    });
    this.itemTypeFilterCtrl = new FormControl("");
    this.filteredItemTypes = new ReplaySubject(1);
    this.propertytMultiFilterCtrl = new FormControl("");
    this.filteredPropertyMulti = new ReplaySubject(1);
    this.itemValueFilterCtrl = new FormControl("");
    this.filteredItemValues = new ReplaySubject(1);
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
  /*  get propertiesList(): any[] {
      return this._propertiesList;
    }
    */
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
    return this.statements.length - 1;
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
  addStatements() {
    let formerItemType = [];
    let itemTypes;
    let itemTypesList;
    let mutator;
    this.statements.push(this.statement);
    this.isRemoveStatement = true;
    this.data.itemTypes2$.subscribe((res) => {
      itemTypes = res;
      formerItemType.push(itemTypes);
      this.data.updateItemTypes(itemTypes);
      this.data.updateFormerItemTypes(formerItemType);
    });
    this.data.mutatorForNextStatement$.subscribe((res) => {
      mutator = res;
      console.log(mutator);
      this.data.updateMutator(mutator);
      this.data.mutator$.subscribe((res2) => console.log(res2));
    });
  }
  removeStatements(i) {
    this.statements.removeAt(i);
    let itemTypes = [];
    let formerItemTypesList;
    let formerItemTypes;
    if (i === 0) {
      this.data.updateMutator(MUTATOR), this.data.updateItemTypes(ITEMTYPES);
    }
    ;
    this.data.formerItemTypes$.subscribe((res) => formerItemTypesList = res);
    this.data.updateFormerItemTypes(formerItemTypesList.slice(-1));
    this.data.formerItemTypes$.subscribe((res) => formerItemTypesList = res);
    this.data.updateItemTypes(formerItemTypesList[formerItemTypesList.length - 1]);
    this.propertiesValues.splice(i, 1);
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
    if (u === "WikibaseItem") {
      this.isWikibaseItemOnStatement = true;
      this.isLiteralOnStatement = false;
      this.controls.itemValue(this.statements, i).enable();
      this.controls.literalValue(this.statements, i).disable();
      this.controls.literalString(this.statements, i).disable();
    } else {
      if (u === "String" || u === "MonolingualText" || u === "Time" || u === "Quantity") {
        console.log(u);
        this.controls.itemValue(this.statements, i).disable();
        this.controls.literalValue(this.statements, i).enable();
        this.controls.literalString(this.statements, i).enable();
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
      this.placeholderForLiteralValue = "write below";
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
    let i = event.value[0];
    this.controls.propertyValues(this.statements, i).enable();
    this.selectedItemType.emit(event.value);
  }
  onPropertySelect(event) {
    let propertyValue = [];
    if (event.value[0] !== void 0) {
      let i = event.value[0][0];
      this.datatype = event.value[0][2];
      this.statementControllerDisplay(this.datatype, i);
      this.propertyDatatype.emit([i, this.datatype]);
      this.controls.itemValue(this.statements, i).enable();
    }
  }
  onValueSelect(event) {
    let i = event.value[0];
    let label = event.value[1];
    let dataType = event.value[2];
    console.log(event.value);
    if (label.charAt(0) === "?") {
      this.selectedValue.emit(event.value);
    }
    this.isAddQualifier = true;
    this.isAddStatement = true;
  }
  onLiteralValueSelect(event) {
    let i = event.value[0];
    let label = event.value[1];
    this.placeholderForLiteralString = label;
    this.literalControllerDisplay(label, i);
    if (label.charAt(0) === "?") {
      console.log(label);
      this.selectedValue.emit(event.value);
    }
    this.isAddStatement = true;
    this.isAddQualifier = true;
  }
  onQualifierPropertySelect(event) {
    console.log(event.value);
    let i = event.value[0];
    let j = event.value[1];
    let datatype = event.value[3];
    this.qualifierPropertyDatatype.emit([i, j, datatype]);
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
      this.selectedQualifierValue.emit(u);
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
      this.selectedQualifierValue.emit(event.value);
      this.isLiteralStringOnQualifier = false;
    } else
      this.isLiteralStringOnQualifier = true;
    this.isRemoveQualifier = true;
  }
  clear() {
    this.matRef.options.forEach((data) => data.deselect());
  }
  ngOnInit() {
    this.propertyList.qualifierPropertiesListBuilding.subscribe((res) => this.qualifierPropertiesToSelect = res);
    this.itemTypeFilterCtrl.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this.filterItemTypes();
    });
    this.propertytMultiFilterCtrl.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this.filterPropertyMulti();
    });
    this.itemValueFilterCtrl.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this.filterItemValues();
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
    var propertyValueChanges = this.query.get("statements").valueChanges.pipe(map((res) => res[0]["property"]));
    var valueValueChanges = this.query.get("statements").valueChanges.pipe(map((res) => res[0]["itemValue"]));
  }
  ngAfterViewInit() {
    this.setInitialItemTypeValue();
    this.setInitialPropertyValue();
    this.setInitialValueValue();
    this.setInitialLiteralVariable();
    this.setInitialQualifierPropertyValue();
    this.setInitialQualifierValueValue();
    this.setInitialQualifierLiteralVariable();
  }
  setInitialItemTypeValue() {
    this.data.itemTypes$.subscribe((res) => {
      if (this.lastStatementIndex !== 0) {
        this.filteredItemTypes.next(res);
      }
    });
    this.filteredItemTypes;
  }
  setInitialPropertyValue() {
    this.filteredPropertyMulti;
  }
  setInitialValueValue() {
    this.filteredItemValues;
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
  filterItemTypes() {
    this.data.itemTypes$.subscribe((res) => {
      this.currentItemTypes = res;
      let search = this.itemTypeFilterCtrl.value;
      if (!search) {
        this.currentItemTypes = this.entityValues;
      } else {
        search = search.toLowerCase();
        this.filteredItemTypes.next(this.currentItemTypes.filter((itemType) => itemType.label.toLowerCase().indexOf(search) > -1));
      }
    });
  }
  filterPropertyMulti() {
    this.data.$propertiesList.subscribe((res) => {
      this.propertiesToSelect = res[1];
      let search = this.propertytMultiFilterCtrl.value;
      if (!search) {
        this.filteredPropertyMulti.next(this.propertiesToSelect.slice());
        return;
      } else {
        search = search.toLowerCase();
        this.filteredPropertyMulti.next(this.propertiesToSelect.filter((entity) => entity.itemLabel.label.toLowerCase().indexOf(search) > -1));
      }
    });
  }
  /*  protected filterItemValues() {
      let search = this.itemValueFilterCtrl.value;
      let firstCharacter = search.charAt(0);
      let searchLength = search.length;
    // this.filteredItemValues.next(this.entityValues);
      if (!search) {
        this.filteredItemValues.next(this.entityValues);
        return;
      } else {
        if (firstCharacter !== "?") {
          search = search.toLowerCase();
          this.itemValueFilterCtrl.valueChanges //search engine
            .pipe(
              filter(res => res !== '?'),
            //  map(res => { if (res.length === 1) { res = firstCharacter } }),
              debounceTime(400),
              switchMap(label => this.request.searchItem(label, this.lang.selectedLang, 20)),
              map(res => this.createList(res)),
              debounceTime(400),
              switchMap(url => this.request.getItem(url)),
             filter(res => res !== undefined && res !== null),
              filter(res => res.entities !== undefined && res.entities !== null),
             map(res => Object.values(res.entities)),
            ).subscribe(re => {
              this.entityValues = this.setLanguage.item(re, this.lang.selectedLang);
              this.setSeparator(this.entityValues);
              this.filteredItemValues.next(this.entityValues.filter(value => value.label.toLowerCase().indexOf(search) > -1));
            }
            );
        }
        else {
          if (search.length === 1) { search = '?*' };
          this.filteredItemValues.next(this.entityValues);
          this.data.mutator$.subscribe(re => {
            this.entityValues = re[0];
            if (search === '?*') {
              this.filteredItemValues.next(this.entityValues);
            } else {
              search = search.slice(1);
              this.filteredItemValues.next(this.entityValues.filter(value => value.label.toLowerCase().indexOf(search) > -1));
            }
          }
          );
        }
      }
    }
    */
  filterItemValues() {
    let search = this.itemValueFilterCtrl.value;
    let firstCharacter = search.charAt(0);
    let searchLength = search.length;
    if (!search) {
      this.filteredItemValues.next(this.entityValues);
      return;
    } else {
      search = search.toLowerCase();
      this.itemValueFilterCtrl.valueChanges.pipe(debounceTime(400), switchMap((label) => iif(() => label.charAt(0) === "?", this.data.mutator$.pipe(map((re) => re[0])), this.itemValuesList2(label, this.lang.selectedLang, 20)))).subscribe((re) => {
        this.entityValues = re;
        this.setSeparator(this.entityValues);
        this.filteredItemValues.next(this.entityValues.filter((value) => value.label.toLowerCase().indexOf(search) > -1));
      });
    }
  }
  itemValuesList1(label) {
    return this.data.mutator$.pipe(map((re) => re[0]));
  }
  itemValuesList2(label, lang, number) {
    let entityValues = [];
    return this.request.searchItem(label, lang, number).pipe(map((res) => this.createList(res)), switchMap((url) => this.request.getItem(url)), filter((res) => res !== void 0 && res !== null), filter((res) => res.entities !== void 0 && res.entities !== null), map((res) => Object.values(res.entities)), map((res) => this.setLanguage.item(res, this.lang.selectedLang)));
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
        this.qualifierValueFilterCtrl.valueChanges.pipe(debounceTime(400), switchMap((label) => this.request.searchItem(label, this.lang.selectedLang, 20)), map((res) => this.createList(res)), debounceTime(400), switchMap((url) => this.request.getItem(url)), filter((res) => res !== void 0 && res !== null), filter((res) => res.entities !== void 0 && res.entities !== null), map((res) => Object.values(res.entities))).subscribe((re) => {
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
    if (control.value) {
      if (control.value[0] !== void 0) {
        let equalDatatype = control.value.every((val) => val[2] === control.value[0][2]);
        if (equalDatatype) {
          return { "differentDatatype": true };
        }
      }
    }
    return null;
  }
  compare(u, v) {
    if (u === void 0) {
      return v;
    } else
      return u;
  }
  //TODO: if u = [] then u =v else u = u and return u; (see if its possible to create a method witb filter or something else)
  newQualifier() {
    return this.fb.group({
      qualifierProperty: "",
      qualifierValue: ""
    });
  }
  onVariableSelect(event) {
    console.log(event.value);
  }
  validateItemValues(control) {
    if (!control.value.cb.some((item) => item)) {
      return { checkboxSectionValid: true };
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
  resetField(i, field) {
    let j;
    if (j > i && j < this.statements.controls.length) {
      this.statements.controls[j].get(field).reset();
    }
  }
  onQualifierButtonSelect() {
  }
  onPropertyButtonSelect(item) {
  }
  ngOnDestroy() {
    this._onDestroy.next(), this._onDestroy.complete();
  }
  static {
    this.\u0275fac = function StatementSearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StatementSearchComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatementSearchComponent, selectors: [["app-statement-search"]], viewQuery: function StatementSearchComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 5);
        \u0275\u0275viewQuery(_c13, 7);
        \u0275\u0275viewQuery(_c23, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.matRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.singleSelect = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.multiSelect = _t.first);
      }
    }, inputs: { itemTypes: [1, "itemTypes"], literalVariables: "literalVariables", qualifierLiteralVariables: "qualifierLiteralVariables" }, outputs: { propertyDatatype: "propertyDatatype", selectedItemType: "selectedItemType", selectedValue: "selectedValue", selectedQualifierValue: "selectedQualifierValue", qualifierPropertyDatatype: "qualifierPropertyDatatype", datatype: "datatype", selectionChange: "selectionChange", propertySelectionChange: "propertySelectionChange" }, decls: 18, vars: 5, consts: [["singleSelect", ""], ["appearance", "outlined", 1, "mat-elevation-z12"], [1, "listStyle"], ["id", "statements", 1, "whiteBackGround"], [1, "search-center"], [3, "formGroup"], [1, "formPadding"], ["formArrayName", "statements"], [1, "statementStyle"], [1, "search-center3", "cardGreyBackground", 3, "formGroupName"], ["formControlName", "optional"], ["appearance", "fill"], ["placeholder", "subject?", "formControlName", "itemType", "required", "", 3, "selectionChange"], ["placeholderLabel", "Search", 3, "formControl", "noEntriesFoundLabel"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "properties?", "formControlName", "properties", "required", "", 3, "selectionChange", "multiple"], ["placeholderLabel", "Search", "noEntriesFoundLabel", "Not found", 3, "formControl"], ["formGroupName", "value", 1, "search-center3"], [3, "value"], [1, "validatorWarning"], ["placeholder", "value?", "formControlName", "itemValue", "required", "", 3, "selectionChange"], ["formControlName", "literalValue", "required", "", 3, "selectionChange", "placeholder"], ["matInput", "", "formControlName", "literalString", 3, "placeholder"], ["formArrayName", "qualifiers"], ["placeholder", "property?", "formControlName", "qualifierProperty", "required", "", 3, "selectionChange"], ["placeholder", "value?", "formControlName", "qualifierValue", "required", "", 3, "selectionChange"], ["placeholder", "literal value?", "formControlName", "qualifierLiteralValue", "required", "", 3, "selectionChange"], ["matInput", "", "value", "string?", "formControlName", "qualifierLiteralString"], ["type", "button", 3, "click"]], template: function StatementSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-card", 1)(1, "mat-card-content")(2, "div", 2)(3, "div");
        \u0275\u0275text(4, "Query:");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, StatementSearchComponent_Conditional_5_Template, 2, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "mat-card-content", 3)(7, "p", 4);
        \u0275\u0275text(8, "Statement:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "form", 5)(10, "div", 6)(11, "div", 7);
        \u0275\u0275repeaterCreate(12, StatementSearchComponent_For_13_Template, 4, 4, null, null, \u0275\u0275repeaterTrackByIdentity);
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
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 3, ctx.query.value), "");
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
      MatSelectModule,
      MatSelect,
      MatOption,
      MatFormFieldModule,
      NgxMatSelectSearchModule,
      MatSelectSearchComponent,
      MatCheckboxModule,
      MatCheckbox,
      MatSlideToggleModule
    ], styles: ["\n\nmat-button-toggle-group[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.search-center2[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n}\n.search-center3[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n#itemType[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 30vw;\n}\n@media (max-width: 959.98px) {\n  #itemType[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    width: 80vw;\n  }\n}\n#statements[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  width: 60vw;\n}\n#statements[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 30vw;\n}\n@media (max-width: 959.98px) {\n  #statements[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n.search-form[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n.ellipsis[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 50px;\n}\n.arrow-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0px !important;\n  justify-content: center;\n}\n.icon-size[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n.small-icon-button[_ngcontent-%COMP%] {\n  width: 24px !important;\n  height: 24px !important;\n  padding: 0px !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n}\n.small-icon-button[_ngcontent-%COMP%]    > *[role=img][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.small-icon-button[_ngcontent-%COMP%]    > *[role=img][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.small-icon-button[_ngcontent-%COMP%]   .mat-mdc-button-touch-target[_ngcontent-%COMP%] {\n  width: 24px !important;\n  height: 24px !important;\n}\n.search-center3[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.list-search[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: left;\n}\n.statement-search-form[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  gap: 30px;\n  display: flex;\n  justify-content: center;\n}\n.button-search-form[_ngcontent-%COMP%] {\n  gap: 30px;\n  display: flex;\n  justify-content: center;\n}\n#projects[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 60vw;\n}\n@media (max-width: 959.98px) {\n  #projects[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n@media (max-width: 959.98px) {\n  .statement-search-form[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n  }\n}\n#sopi[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 60vw;\n}\n@media (max-width: 959.98px) {\n  #sopi[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n.button[_ngcontent-%COMP%] {\n  text-align: start;\n  background-color: transparent !important;\n  border-color: transparent;\n  font-size: 12px;\n}\n/*# sourceMappingURL=statement-search.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatementSearchComponent, { className: "StatementSearchComponent", filePath: "src/app/search/advanced-search/statement-search/statement-search.component.ts", lineNumber: 60 });
})();

// src/app/search/advanced-search/services/mutator.service.ts
var MutatorService = class _MutatorService {
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
  static {
    this.\u0275fac = function MutatorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MutatorService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MutatorService, factory: _MutatorService.\u0275fac, providedIn: "root" });
  }
};

// src/app/search/advanced-search/advanced-search.component.ts
var _c05 = () => [""];
var _c14 = () => ["/harmonia_universalis"];
var AdvancedSearchComponent = class _AdvancedSearchComponent {
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
  }
  ngOnInit() {
    this.subtitle = this.lang.subtitle(this.subtitle);
    this.projects = this.lang.projects(this.projects);
    this.fields = this.lang.fields(this.fields);
    this.projectList.projectsListBuilding("Q11295").subscribe((res) => this.projectsList = res);
    console.log(this.selections);
  }
  selectedItemType(itemType) {
    let i = itemType[0];
    let selection = { label: itemType[1], id: itemType[3] };
    this.formData[i].types.selections.push(selection);
    this.formData[i].values.options.push(selection);
    this.propertyList.propertiesListBuilding(itemType[3]).subscribe((res) => {
      this.propertiesList = [itemType[0], this.propertyList.changeList(res)];
      this.data.updatePropertiesList([itemType[0], this.propertyList.changeList(res)]);
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
  ngOnDestroy() {
  }
  static {
    this.\u0275fac = function AdvancedSearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdvancedSearchComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdvancedSearchComponent, selectors: [["app-advanced-search"]], decls: 26, vars: 9, consts: [["href", \u0275\u0275trustConstantResourceUrl`https://fonts.googleapis.com/icon?family=Material+Icons`, "rel", "stylesheet"], [1, "cardBackground"], [1, "FactGridTitle"], [1, "subTitle"], ["appearance", "outlined", 1, "mat-elevation-z12"], [1, "search-container"], [1, "search-center"], [3, "routerLink"], ["href", "https://database.factgrid.de/query/#%23model%0A%0ASELECT%20%3Fitem%20%3Fviewer%20%3FitemLabel%20%20WHERE%20%7B%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%20%20%3Fitem%20wdt%3AP2%20wd%3AQ7%3B%0A%20%20%20%20%20%20%20%20wdt%3AP247%20wd%3AQ24708.%0A%20%20BIND%28STRAFTER%28STR%28%3Fitem%29%2C%20STR%28wd%3A%29%29%20AS%20%3FitemId%29%0A%20%20BIND%28IRI%28CONCAT%28%22https%3A%2F%2Fdatabase.factgrid.de%2Fviewer%2Fitem%2F%22%2C%20%3FitemId%29%29%20AS%20%3Fviewer%29%0A%7D%0A"], ["color", "primary"], [3, "selectionChange", "data"], [1, "child-container", 3, "propertyDatatype", "selectedQualifierValue", "qualifierPropertyDatatype", "selectedValue", "selectedItemType", "qualifierLiteralVariables", "literalVariables", "itemTypes"]], template: function AdvancedSearchComponent_Template(rf, ctx) {
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
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c05));
        \u0275\u0275advance(8);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c14));
        \u0275\u0275advance(5);
        \u0275\u0275property("data", ctx.projectsList);
        \u0275\u0275advance();
        \u0275\u0275property("qualifierLiteralVariables", ctx.qualifierLiteralVariables)("literalVariables", ctx.literalVariables)("itemTypes", ctx.itemTypes);
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
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdvancedSearchComponent, { className: "AdvancedSearchComponent", filePath: "src/app/search/advanced-search/advanced-search.component.ts", lineNumber: 51 });
})();
export {
  AdvancedSearchComponent
};
//# sourceMappingURL=advanced-search.component-ZV6UPDOE.js.map
