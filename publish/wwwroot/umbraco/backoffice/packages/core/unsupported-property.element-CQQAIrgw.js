import { css as k, property as h, customElement as S, when as nt, html as v, state as c, nothing as K } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as z } from "@umbraco-cms/backoffice/style";
import "@umbraco-cms/backoffice/ufm";
import { UmbContextToken as B } from "@umbraco-cms/backoffice/context-api";
import { UmbContextBase as j } from "@umbraco-cms/backoffice/class-api";
import { UmbStringState as _, UmbArrayState as H, UmbBooleanState as J, UmbObjectState as X, UmbDeepState as lt, UmbClassState as Y, UmbBasicState as F } from "@umbraco-cms/backoffice/observable-api";
import { UmbVariantId as ht } from "@umbraco-cms/backoffice/variant";
import { UmbChangeEvent as pt } from "@umbraco-cms/backoffice/event";
import { UmbPropertyEditorConfigCollection as dt } from "@umbraco-cms/backoffice/property-editor";
import { createExtensionElement as ut, UmbExtensionsApiInitializer as vt } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as Q } from "@umbraco-cms/backoffice/extension-registry";
import { UmbObserveValidationStateController as ct, UmbFormControlValidator as yt, UmbBindServerValidationToFormControl as mt } from "@umbraco-cms/backoffice/validation";
import { UMB_MARK_ATTRIBUTE_NAME as bt } from "@umbraco-cms/backoffice/const";
import { UmbRoutePathAddendumContext as gt } from "@umbraco-cms/backoffice/router";
var _t = Object.defineProperty, ft = Object.getOwnPropertyDescriptor, Z = (t) => {
  throw TypeError(t);
}, g = (t, e, i, r) => {
  for (var a = r > 1 ? void 0 : r ? ft(e, i) : e, p = t.length - 1, d; p >= 0; p--)
    (d = t[p]) && (a = (r ? d(e, i, a) : d(a)) || a);
  return r && a && _t(e, i, a), a;
}, Vt = (t, e, i) => e.has(t) || Z("Cannot " + i), Et = (t, e, i) => e.has(t) ? Z("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), wt = (t, e, i) => (Vt(t, e, "access private method"), i), R, tt;
let m = class extends D {
  constructor() {
    super(...arguments), Et(this, R), this.alias = "", this.label = "", this.orientation = "horizontal", this.description = "";
  }
  render() {
    return v`
			<div id="headerColumn">
				<uui-label id="label" title=${this.alias} ?required=${this.mandatory}>
					${this.localize.string(this.label)}
					${nt(
      this.invalid,
      () => v`<div id="invalid-badge"><uui-badge color="invalid" attention>!</uui-badge></div>`
    )}
				</uui-label>
				<slot name="action-menu"></slot>
				${wt(this, R, tt).call(this)}
				<slot name="description"></slot>
			</div>
			<div id="editorColumn">
				<umb-form-validation-message>
					<slot name="editor"></slot>
				</umb-form-validation-message>
			</div>
		`;
  }
};
R = /* @__PURE__ */ new WeakSet();
tt = function() {
  if (!this.description) return;
  const t = { alias: this.alias, label: this.label, description: this.description };
  return v`<umb-ufm-render id="description" .markdown=${this.description} .value=${t}></umb-ufm-render>`;
};
m.styles = [
  z,
  k`
			:host {
				display: grid;
				grid-template-columns: 200px minmax(0, 1fr);
				column-gap: var(--uui-size-layout-2);
				border-bottom: 1px solid var(--uui-color-divider);
				padding: var(--uui-size-layout-1) 0;
			}

			:host(:last-of-type) {
				border-bottom: none;
			}

			:host > div {
				grid-column: span 2;
			}
			/*@container (width > 600px) {*/
			:host(:not([orientation='vertical'])) > div {
				grid-column: span 1;
			}
			/*}*/

			#headerColumn {
				position: relative;
				height: min-content;
			}
			/*@container (width > 600px) {*/
			:host(:not([orientation='vertical'])) #headerColumn {
				position: sticky;
				top: calc(var(--uui-size-space-2) * -1);
			}
			/*}*/

			:host {
				/* TODO: Temp solution to not get a yellow asterisk when invalid. */
				--umb-temp-uui-color-invalid: var(--uui-color-invalid);
			}

			#label {
				position: relative;
				word-break: break-word;
				/* TODO: Temp solution to not get a yellow asterisk when invalid. */
				--uui-color-invalid: var(--uui-color-danger);
			}
			#invalid-badge {
				display: inline-block;
				position: relative;
				width: 18px;
				height: 1em;
				margin-right: 6px;
			}
			uui-badge {
				//height: var(--uui-color-invalid);
				background-color: var(--umb-temp-uui-color-invalid);
				color: var(--uui-color-invalid-contrast);
			}

			#description {
				color: var(--uui-color-text-alt);
			}

			#editorColumn {
				margin-top: var(--uui-size-space-3);
			}
			/*@container (width > 600px) {*/
			:host(:not([orientation='vertical'])) #editorColumn {
				margin-top: 0;
			}
			/*}*/
		`
];
g([
  h({ type: String })
], m.prototype, "alias", 2);
g([
  h({ type: String })
], m.prototype, "label", 2);
g([
  h({ type: String, reflect: !0 })
], m.prototype, "orientation", 2);
g([
  h({ type: String })
], m.prototype, "description", 2);
g([
  h({ type: Boolean, reflect: !0 })
], m.prototype, "invalid", 2);
g([
  h({ type: Boolean, reflect: !0 })
], m.prototype, "mandatory", 2);
m = g([
  S("umb-property-layout")
], m);
const W = new B("UmbPropertyDatasetContext"), Ot = (t) => "setName" in t, jt = new B(W.toString(), void 0, Ot);
class Pt extends j {
  // variant id for a specific property?
  constructor(e) {
    super(e, W), this.#e = new _(void 0), this.name = this.#e.asObservable(), this.#t = new H([], (i) => i.alias), this.properties = this.#t.asObservable(), this.values = this.properties, this.#r = new J(!1), this.readOnly = this.#r.asObservable();
  }
  #e;
  #t;
  #r;
  getEntityType() {
    return this._entityType;
  }
  getUnique() {
    return this._unique;
  }
  getName() {
    return this.#e.getValue();
  }
  setName(e) {
    this.#e.setValue(e);
  }
  getVariantId() {
    return ht.CreateInvariant();
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias - the alias to observe
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>} - an Observable for the value of this property.
   */
  async propertyValueByAlias(e) {
    return this.#t.asObservablePart((i) => {
      const r = i.find((a) => a.alias === e);
      return r ? r.value : void 0;
    });
  }
  /**
   * @function setPropertyValue
   * @param {string} alias - The alias to set this value for
   * @param {PromiseLike<unknown>} value - value can be a promise resolving into the actual value or the raw value it self.
   * @description Set the value of this property.
   */
  setPropertyValue(e, i) {
    this.#t.appendOne({ alias: e, value: i });
  }
  /**
   * @deprecated Use `getProperties`
   * @returns {Array<UmbPropertyValueData>} - Array of properties as objects with alias and value properties.
   */
  getValues() {
    return this.#t.getValue();
  }
  /**
   * @param {Array<UmbPropertyValueData>} properties - Properties array with alias and value properties.
   * @deprecated Use `setProperties`
   */
  setValues(e) {
    this.#t.setValue(e);
  }
  /**
   * @returns {Array<UmbPropertyValueData>} - Array of properties as objects with alias and value properties.
   */
  async getProperties() {
    return this.#t.getValue();
  }
  /**
   * @param {Array<UmbPropertyValueData>} properties - Properties array with alias and value properties.
   */
  setProperties(e) {
    this.#t.setValue(e);
  }
  /**
   * Gets the read-only state of the current variant culture.
   * @returns {*}  {boolean}
   */
  getReadOnly() {
    return this.#r.getValue();
  }
}
var Ct = Object.defineProperty, Ut = Object.getOwnPropertyDescriptor, et = (t) => {
  throw TypeError(t);
}, L = (t, e, i, r) => {
  for (var a = r > 1 ? void 0 : r ? Ut(e, i) : e, p = t.length - 1, d; p >= 0; p--)
    (d = t[p]) && (a = (r ? d(e, i, a) : d(a)) || a);
  return r && a && Ct(e, i, a), a;
}, it = (t, e, i) => e.has(t) || et("Cannot " + i), M = (t, e, i) => (it(t, e, "read from private field"), i ? i.call(t) : e.get(t)), G = (t, e, i) => e.has(t) ? et("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), b = (t, e, i, r) => (it(t, e, "write to private field"), e.set(t, i), i), u, P;
let $ = class extends D {
  constructor() {
    super(), G(this, u, !1), G(this, P, () => {
      M(this, u) ? this.dispatchEvent(new pt()) : b(this, u, !0);
    }), this.addEventListener("change", (t) => {
      t.target !== this && t.stopImmediatePropagation();
    }), this.context = new Pt(this), b(this, u, !1), this.observe(this.context.name, M(this, P)), b(this, u, !1), this.observe(this.context.properties, M(this, P));
  }
  /**
   * The value of the dataset.
   * @returns {Array<UmbPropertyValueData>} - The value of the dataset
   * @example
   * ```ts
   * const dataSet = [
   * 	{
   * 		alias: 'testAlias',
   * 		value: 'value as a string',
   * 	},
   *  {
   * 		alias: 'anotherAlias',
   * 		value: 123,
   * 	}
   * ]
   *
   * html`
   * <umb-property-dataset .value="${dataSet}">
   * 	<umb-property
   * 		label="My label for this property"
   * 		description="The description to show on the property"
   * 		alias="testAlias"
   * 		property-editor-ui-alias="Umb.PropertyEditorUi.TextBox"
   * 		.config=${...}>
   * 	</umb-property>
   * </umb-property-dataset>
   * `
   * ```
   */
  set value(t) {
    b(this, u, !1), this.context.setValues(t), b(this, u, !0);
  }
  get value() {
    return this.context.getValues();
  }
  /**
   * The name of the dataset, this name varies depending on the use-case. But this is either
   * @property name
   * @type {string}
   * @returns {string}
   * @example
   * ```ts
   * html`
   * <umb-property-dataset name="My variant name">
   * 	...
   * </umb-property-dataset>
   * `
   */
  set name(t) {
    b(this, u, !1), this.context.setName(t), b(this, u, !0);
  }
  get name() {
    return this.context.getName();
  }
  render() {
    return v`<slot></slot>`;
  }
};
u = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakMap();
L([
  h({ attribute: !1 })
], $.prototype, "value", 1);
L([
  h({ attribute: !1 })
], $.prototype, "name", 1);
$ = L([
  S("umb-property-dataset")
], $);
class At extends j {
  constructor(e) {
    super(e, xt), this.#e = new _(void 0), this.alias = this.#e.asObservable(), this.#t = new _(void 0), this.label = this.#t.asObservable(), this.#r = new _(void 0), this.description = this.#r.asObservable(), this.#o = new X(void 0), this.appearance = this.#o.asObservable(), this.#n = new lt(void 0), this.value = this.#n.asObservable(), this.#l = new H([], (i) => i.alias), this.configValues = this.#l.asObservable(), this.#p = new Y(void 0), this.config = this.#p.asObservable(), this.#s = new X(void 0), this.validation = this.#s.asObservable(), this.validationMandatory = this.#s.asObservablePart((i) => i?.mandatory), this.validationMandatoryMessage = this.#s.asObservablePart((i) => i?.mandatoryMessage), this.#d = new _(void 0), this.dataPath = this.#d.asObservable(), this.#u = new F(void 0), this.editor = this.#u.asObservable(), this.#v = new F(void 0), this.editorManifest = this.#v.asObservable(), this.#h = new J(!1), this.isReadOnly = this.#h.asObservable(), this.#a = new Y(void 0), this.variantId = this.#a.asObservable(), this.#c = new _(void 0), this.variantDifference = this.#c.asObservable(), this.consumeContext(W, (i) => {
      this.#i = i, this.setVariantId(i.getVariantId?.()), this._generateVariantDifferenceString(), this._observeProperty();
    }), this.observe(
      this.alias,
      () => {
        this._observeProperty();
      },
      null
    ), this.observe(
      this.configValues,
      (i) => {
        this.#p.setValue(i ? new dt(i) : void 0);
      },
      null
    ), this.observe(
      this.variantId,
      () => {
        this._generateVariantDifferenceString();
      },
      null
    );
  }
  #e;
  #t;
  #r;
  #o;
  #n;
  #l;
  #p;
  #s;
  #d;
  #u;
  #v;
  #h;
  /**
   * Set the property editor UI element for this property.
   * @param {UmbPropertyEditorUiElement | undefined} editorElement The property editor UI element
   */
  setEditor(e) {
    this.#u.setValue(e ?? void 0);
  }
  /**
   * Get the property editor UI element for this property.
   * @returns {UmbPropertyEditorUiElement | undefined} The property editor UI element
   */
  getEditor() {
    return this.#u.getValue();
  }
  /**
   * Set the property editor manifest for this property.
   * @param {ManifestPropertyEditorUi | undefined} manifest The property editor manifest
   */
  setEditorManifest(e) {
    this.#v.setValue(e ?? void 0);
  }
  /**
   * Get the property editor manifest for this property.
   * @returns {UmbPropertyEditorUiElement | undefined} The property editor manifest
   */
  getEditorManifest() {
    return this.#v.getValue();
  }
  #a;
  #c;
  #i;
  async _observeProperty() {
    const e = this.#e.getValue();
    !this.#i || !e || (this.observe(
      await this.#i.propertyVariantId?.(e),
      (i) => {
        this.#a.setValue(i);
      },
      "observeVariantId"
    ), this.observe(
      await this.#i.propertyValueByAlias(e),
      (i) => {
        this.#n.setValue(i);
      },
      "observeValue"
    ), this.observe(this.#i.readOnly, (i) => {
      this.#h.setValue(i);
    }));
  }
  _generateVariantDifferenceString() {
    if (!this.#i) return;
    const e = this.#i.getVariantId?.() ?? void 0, i = this.#a.getValue();
    let r;
    e && i && (e.segment !== i.segment && (r = "Shared across culture"), e.culture !== i.culture && (r = "Shared")), this.#c.setValue(r);
  }
  /**
   * Set the alias of this property.
   * @param {string | undefined} alias - The alias of the property
   * @memberof UmbPropertyContext
   */
  setAlias(e) {
    this.#e.setValue(e);
  }
  /**
   * Get the alias of this property.
   * @returns {*}  {(string | undefined)}
   * @memberof UmbPropertyContext
   */
  getAlias() {
    return this.#e.getValue();
  }
  /**
   * Set the label of this property.
   * @param {(string | undefined)} label - The label of the property
   * @memberof UmbPropertyContext
   */
  setLabel(e) {
    this.#t.setValue(e);
  }
  /**
   * Get the label of this property.
   * @returns {(string | undefined)} - the label
   * @memberof UmbPropertyContext
   */
  getLabel() {
    return this.#t.getValue();
  }
  /**
   * Set the description of this property.
   * @param {(string | undefined)} description
   * @memberof UmbPropertyContext
   */
  setDescription(e) {
    this.#r.setValue(e);
  }
  /**
   * Get the description of this property.
   * @returns {*}  {(string | undefined)}
   * @memberof UmbPropertyContext
   */
  getDescription() {
    return this.#r.getValue();
  }
  /**
   * Set the appearance of this property.
   * @param {UmbPropertyTypeAppearanceModel | undefined} appearance - the appearance properties of this property
   * @memberof UmbPropertyContext
   */
  setAppearance(e) {
    this.#o.setValue(e);
  }
  /**
   * Get the appearance of this property.
   * @returns {UmbPropertyTypeAppearanceModel | undefined}- the appearance properties of this property
   * @memberof UmbPropertyContext
   */
  getAppearance() {
    return this.#o.getValue();
  }
  /**
   * Set the value of this property.
   * @param {unknown} value - the whole value to be set
   */
  setValue(e) {
    const i = this.#e.getValue();
    !this.#i || !i || this.#i?.setPropertyValue(i, e);
  }
  /**
   * Gets the current value of this property.
   * Notice this is not reactive, you should us the `value` observable for that.
   * @returns {unknown} - the current value of this property
   */
  getValue() {
    return this.#n.getValue();
  }
  /**
   * Set the config of this property.
   * @param {Array<UmbPropertyEditorConfigProperty> | undefined} config - Array of configurations for this property
   * @memberof UmbPropertyContext
   */
  setConfig(e) {
    this.#l.setValue(e ?? []);
  }
  /**
   * Get the config of this property.
   * @returns {Array<UmbPropertyEditorConfigProperty> | undefined} - Array of configurations for this property
   * @memberof UmbPropertyContext
   */
  getConfig() {
    return this.#l.getValue();
  }
  /**
   * Set the variant ID of this property.
   * @param {UmbVariantId | undefined} variantId - The property Variant ID, not necessary the same as the Property Dataset Context VariantId.
   * @memberof UmbPropertyContext
   */
  setVariantId(e) {
    this.#a.setValue(e);
  }
  /**
   * Get the variant ID of this property.
   * @returns {UmbVariantId | undefined} - The property Variant ID, not necessary the same as the Property Dataset Context VariantId.
   * @memberof UmbPropertyContext
   */
  getVariantId() {
    return this.#a.getValue();
  }
  /**
   * Set the validation of this property.
   * @param {UmbPropertyTypeValidationModel | undefined} validation - Object holding the Validation Properties.
   * @memberof UmbPropertyContext
   */
  setValidation(e) {
    this.#s.setValue(e);
  }
  /**
   * Get the validation of this property.
   * @returns {UmbPropertyTypeValidationModel | undefined} - Object holding the Validation Properties.
   * @memberof UmbPropertyContext
   */
  getValidation() {
    return this.#s.getValue();
  }
  /**
   * Get the read only state of this property
   * @returns {boolean} - If property is in read-only mode.
   * @memberof UmbPropertyContext
   */
  getIsReadOnly() {
    return this.#h.getValue();
  }
  setDataPath(e) {
    this.#d.setValue(e);
  }
  getDataPath() {
    return this.#d.getValue();
  }
  /**
   * Reset the value of this property.
   * @memberof UmbPropertyContext
   */
  resetValue() {
    this.setValue(void 0);
  }
  /**
   * Clear the value of this property.
   * @memberof UmbPropertyContext
   */
  clearValue() {
    this.setValue(void 0);
  }
  destroy() {
    super.destroy(), this.#e.destroy(), this.#t.destroy(), this.#r.destroy(), this.#o.destroy(), this.#l.destroy(), this.#n.destroy(), this.#p.destroy(), this.#h.destroy(), this.#i = void 0;
  }
}
const xt = new B("UmbPropertyContext");
var $t = Object.defineProperty, St = Object.getOwnPropertyDescriptor, rt = (t) => {
  throw TypeError(t);
}, l = (t, e, i, r) => {
  for (var a = r > 1 ? void 0 : r ? St(e, i) : e, p = t.length - 1, d; p >= 0; p--)
    (d = t[p]) && (a = (r ? d(e, i, a) : d(a)) || a);
  return r && a && $t(e, i, a), a;
}, N = (t, e, i) => e.has(t) || rt("Cannot " + i), s = (t, e, i) => (N(t, e, "read from private field"), i ? i.call(t) : e.get(t)), y = (t, e, i) => e.has(t) ? rt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), f = (t, e, i, r) => (N(t, e, "write to private field"), e.set(t, i), i), T = (t, e, i) => (N(t, e, "access private method"), i), o, I, C, V, U, A, x, E, w, st, at, ot;
let n = class extends D {
  constructor() {
    super(), y(this, w), this._orientation = "horizontal", this._supportsReadOnly = !1, this._isReadOnly = !1, y(this, o, new At(this)), y(this, I, new gt(this)), y(this, C), y(this, V), y(this, U), y(this, A), y(this, x), y(this, E), this._onPropertyEditorChange = (t) => {
      const e = t.composedPath()[0];
      if (this._element !== e) {
        console.error(
          "Property Editor received a Change Event who's target is not the Property Editor Element. Do not make bubble and composed change events."
        );
        return;
      }
      s(this, o).setValue(e.value), t.stopPropagation();
    }, this.observe(
      s(this, o).alias,
      (t) => {
        this._alias = t, s(this, I).setAddendum(t);
      },
      null
    ), this.observe(
      s(this, o).label,
      (t) => {
        this._label = t, this._element && (this._element.name = t);
      },
      null
    ), this.observe(
      s(this, o).description,
      (t) => {
        this._description = t;
      },
      null
    ), this.observe(
      s(this, o).variantDifference,
      (t) => {
        this._variantDifference = t;
      },
      null
    ), this.observe(
      s(this, o).appearance,
      (t) => {
        this._orientation = t?.labelOnTop ? "vertical" : "horizontal";
      },
      null
    ), this.observe(
      s(this, o).validationMandatory,
      (t) => {
        this._mandatory = t, this._element && (this._element.mandatory = t);
      },
      null
    ), this.observe(
      s(this, o).isReadOnly,
      (t) => {
        this._isReadOnly = t, this._element?.toggleAttribute("readonly", t);
      },
      null
    );
  }
  set label(t) {
    s(this, o).setLabel(t);
  }
  get label() {
    return s(this, o).getLabel();
  }
  set description(t) {
    s(this, o).setDescription(t);
  }
  get description() {
    return s(this, o).getDescription();
  }
  set appearance(t) {
    s(this, o).setAppearance(t);
  }
  get appearance() {
    return s(this, o).getAppearance();
  }
  set alias(t) {
    this.setAttribute(bt, "property:" + t), s(this, o).setAlias(t);
  }
  get alias() {
    return s(this, o).getAlias() ?? "";
  }
  set propertyEditorUiAlias(t) {
    this._propertyEditorUiAlias = t, this._observePropertyEditorUI();
  }
  get propertyEditorUiAlias() {
    return this._propertyEditorUiAlias ?? "";
  }
  set config(t) {
    s(this, o).setConfig(t);
  }
  get config() {
    return s(this, o).getConfig();
  }
  set validation(t) {
    s(this, o).setValidation(t);
  }
  get validation() {
    return s(this, o).getValidation();
  }
  set dataPath(t) {
    s(this, o).setDataPath(t), new ct(this, t, (e) => {
      this._invalid = e;
    });
  }
  get dataPath() {
    return s(this, o).getDataPath();
  }
  _observePropertyEditorUI() {
    this._propertyEditorUiAlias && this.observe(
      Q.byTypeAndAlias("propertyEditorUi", this._propertyEditorUiAlias),
      (t) => {
        this._gotEditorUI(t);
      },
      "_observePropertyEditorUI"
    );
  }
  async _gotEditorUI(t) {
    if (s(this, E)?.destroy(), s(this, o).setEditor(void 0), s(this, o).setEditorManifest(t ?? void 0), !t)
      return;
    const e = await ut(t);
    if (this._supportsReadOnly = t.meta.supportsReadOnly || !1, e) {
      const i = this._element;
      if (s(this, U)?.destroy(), s(this, A)?.destroy(), s(this, x)?.destroy(), s(this, C)?.destroy(), i?.removeEventListener("change", this._onPropertyEditorChange), i?.removeEventListener("property-value-change", this._onPropertyEditorChange), i?.destroy?.(), this._element = e, s(this, o).setEditor(this._element), this._element) {
        if (this._element.addEventListener("change", this._onPropertyEditorChange), this._element.addEventListener("property-value-change", this._onPropertyEditorChange), this._element.mandatory = this._mandatory, this._element.name = this._label, f(this, U, this.observe(
          s(this, o).value,
          (r) => {
            this._element.value = r, s(this, V) && (s(this, V).value = r);
          },
          null
        )), f(this, A, this.observe(
          s(this, o).config,
          (r) => {
            r && (this._element.config = r);
          },
          null
        )), f(this, x, this.observe(
          s(this, o).validationMandatoryMessage,
          (r) => {
            r && (this._element.mandatoryMessage = r ?? void 0);
          },
          null
        )), "checkValidity" in this._element) {
          const r = this.dataPath;
          f(this, C, new yt(this, this._element, r)), r && (f(this, V, new mt(
            this,
            this._element,
            r
          )), s(this, V).value = s(this, o).getValue());
        }
        this._element.toggleAttribute("readonly", this._isReadOnly), T(this, w, st).call(this, t);
      }
      this.requestUpdate("element", i);
    }
  }
  render() {
    return v`
			<umb-property-layout
				id="layout"
				.alias=${this._alias ?? ""}
				.label=${this._label ?? ""}
				.description=${this._description ?? ""}
				.orientation=${this._orientation ?? "horizontal"}
				?mandatory=${this._mandatory}
				?invalid=${this._invalid}>
				${T(this, w, at).call(this)}
				${this._variantDifference ? v`<div id="variant-info" slot="description">
							<uui-tag look="secondary">${this._variantDifference}</uui-tag>
						</div> ` : ""}
				${T(this, w, ot).call(this)}
			</umb-property-layout>
		`;
  }
};
o = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
V = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakMap();
A = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakSet();
st = function(t) {
  s(this, E) && s(this, E).destroy(), f(this, E, new vt(
    this,
    Q,
    "propertyContext",
    [],
    (e) => e.forPropertyEditorUis.includes(t.alias)
  ));
};
at = function() {
  return this._propertyEditorUiAlias ? v`
			<umb-property-action-menu
				slot="action-menu"
				id="action-menu"
				.propertyEditorUiAlias=${this._propertyEditorUiAlias}>
			</umb-property-action-menu>
		` : K;
};
ot = function() {
  return v`
			<div id="editor" slot="editor">
				${this._isReadOnly && this._supportsReadOnly === !1 ? v`<div id="overlay"></div>` : K}
				${this._element}
			</div>
		`;
};
n.styles = [
  z,
  k`
			:host {
				display: block;
			}

			p {
				color: var(--uui-color-text-alt);
			}

			#action-menu {
				opacity: 0;
				transition: opacity 90ms;
			}

			#layout:focus-within #action-menu,
			#layout:hover #action-menu,
			#action-menu[open] {
				opacity: 1;
			}

			#variant-info {
				opacity: 0;
				transition: opacity 90ms;
				margin-top: var(--uui-size-space-2);
				margin-left: calc(var(--uui-size-space-1) * -1);
			}

			#layout:focus-within #variant-info,
			#layout:hover #variant-info {
				opacity: 1;
			}

			#editor {
				position: relative;
			}

			#overlay {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background-color: white;
				opacity: 0.5;
				z-index: 1000;
			}
		`
];
l([
  h({ type: String })
], n.prototype, "label", 1);
l([
  h({ type: String })
], n.prototype, "description", 1);
l([
  h({ type: Object, attribute: !1 })
], n.prototype, "appearance", 1);
l([
  h({ type: String })
], n.prototype, "alias", 1);
l([
  h({ type: String, attribute: "property-editor-ui-alias" })
], n.prototype, "propertyEditorUiAlias", 1);
l([
  h({ type: Array, attribute: !1 })
], n.prototype, "config", 1);
l([
  h({ type: Object, attribute: !1 })
], n.prototype, "validation", 1);
l([
  h({ type: String, attribute: "data-path" })
], n.prototype, "dataPath", 1);
l([
  c()
], n.prototype, "_variantDifference", 2);
l([
  c()
], n.prototype, "_element", 2);
l([
  c()
], n.prototype, "_invalid", 2);
l([
  c()
], n.prototype, "_alias", 2);
l([
  c()
], n.prototype, "_label", 2);
l([
  c()
], n.prototype, "_description", 2);
l([
  c()
], n.prototype, "_orientation", 2);
l([
  c()
], n.prototype, "_mandatory", 2);
l([
  c()
], n.prototype, "_supportsReadOnly", 2);
l([
  c()
], n.prototype, "_isReadOnly", 2);
n = l([
  S("umb-property")
], n);
var Dt = Object.defineProperty, Mt = Object.getOwnPropertyDescriptor, q = (t, e, i, r) => {
  for (var a = r > 1 ? void 0 : r ? Mt(e, i) : e, p = t.length - 1, d; p >= 0; p--)
    (d = t[p]) && (a = (r ? d(e, i, a) : d(a)) || a);
  return r && a && Dt(e, i, a), a;
};
let O = class extends D {
  constructor() {
    super(...arguments), this.alias = "", this.schema = "";
  }
  render() {
    return v`<div id="not-supported">
			<umb-localize key="blockEditor_propertyEditorNotSupported" .args=${[this.alias, this.schema]}></umb-localize>
		</div>`;
  }
};
O.styles = [
  z,
  k`
			:host {
				display: block;
				padding: var(--uui-size-layout-1) 0;
			}

			#not-supported {
				background-color: var(--uui-color-danger);
				color: var(--uui-color-surface);
				padding: var(--uui-size-space-4);
				border-radius: var(--uui-border-radius);
			}
		`
];
q([
  h({ type: String })
], O.prototype, "alias", 2);
q([
  h({ type: String })
], O.prototype, "schema", 2);
O = q([
  S("umb-unsupported-property")
], O);
export {
  xt as U,
  m as a,
  At as b,
  n as c,
  O as d,
  jt as e,
  Pt as f,
  W as g,
  $ as h,
  Ot as i
};
//# sourceMappingURL=unsupported-property.element-CQQAIrgw.js.map
