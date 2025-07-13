import { UmbContextToken as u } from "@umbraco-cms/backoffice/context-api";
import { UmbContextBase as c } from "@umbraco-cms/backoffice/class-api";
import { UmbObjectState as E } from "@umbraco-cms/backoffice/observable-api";
import { css as v, property as _, state as a, customElement as b, html as l, ifDefined as T } from "@umbraco-cms/backoffice/external/lit";
import { UmbDataTypeDetailRepository as f } from "@umbraco-cms/backoffice/data-type";
import { umbExtensionsRegistry as U } from "@umbraco-cms/backoffice/extension-registry";
import { UmbLitElement as A } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as S } from "@umbraco-cms/backoffice/style";
import { UMB_UNSUPPORTED_EDITOR_SCHEMA_ALIASES as d } from "@umbraco-cms/backoffice/property";
const P = new u("UmbContentPropertyContext");
class w extends c {
  constructor(t) {
    super(t, P), this.#t = new E(void 0), this.dataType = this.#t.asObservable();
  }
  #t;
  setDataType(t) {
    this.#t.setValue(t);
  }
}
var D = Object.defineProperty, C = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, o = (e, t, r, p) => {
  for (var s = p > 1 ? void 0 : p ? C(t, r) : t, y = e.length - 1, n; y >= 0; y--)
    (n = e[y]) && (s = (p ? n(t, r, s) : n(s)) || s);
  return p && s && D(t, r, s), s;
}, O = (e, t, r) => t.has(e) || m("Cannot " + r), x = (e, t, r) => (O(e, t, "read from private field"), r ? r.call(e) : t.get(e)), $ = (e, t, r) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), h;
let i = class extends A {
  constructor() {
    super(...arguments), this._dataTypeDetailRepository = new f(this), $(this, h, new w(this));
  }
  set property(e) {
    const t = this._property;
    this._property = e, this._property?.dataType.unique !== t?.dataType.unique && this._observeDataType(this._property?.dataType.unique);
  }
  get property() {
    return this._property;
  }
  get ownerEntityType() {
    return this._ownerEntityType;
  }
  set ownerEntityType(e) {
    this._ownerEntityType = e;
  }
  async _checkSchemaSupport() {
    !this._ownerEntityType || !this._propertyEditorSchemaAlias || this._ownerEntityType in d && (this._isUnsupported = d[this._ownerEntityType].includes(
      this._propertyEditorSchemaAlias
    ));
  }
  async _observeDataType(e) {
    this._dataTypeObserver?.destroy(), e && (await this._dataTypeDetailRepository.requestByUnique(e), this._dataTypeObserver = this.observe(
      await this._dataTypeDetailRepository.byUnique(e),
      (t) => {
        const r = t ? { unique: t.unique } : void 0;
        x(this, h).setDataType(r), this._dataTypeData = t?.values, this._propertyEditorUiAlias = t?.editorUiAlias || void 0, this._propertyEditorSchemaAlias = t?.editorAlias || void 0, this._checkSchemaSupport(), !this._propertyEditorUiAlias && t?.editorAlias ? this.observe(
          U.byTypeAndAlias("propertyEditorSchema", t.editorAlias),
          (p) => {
            p && (this._propertyEditorUiAlias = p?.meta.defaultPropertyEditorUiAlias, this.removeUmbControllerByAlias("_observePropertyEditorSchema"));
          },
          "_observePropertyEditorSchema"
        ) : this.removeUmbControllerByAlias("_observePropertyEditorSchema");
      },
      "_observeDataType"
    ));
  }
  render() {
    if (!(!this._propertyEditorUiAlias || !this._property?.alias))
      return this._isUnsupported ? l`<umb-unsupported-property
				.alias=${this._property.alias}
				.schema=${this._propertyEditorSchemaAlias}></umb-unsupported-property>` : l`
			<umb-property
				.dataPath=${this.dataPath}
				.alias=${this._property.alias}
				.label=${this._property.name}
				.description=${this._property.description ?? void 0}
				.appearance=${this._property.appearance}
				property-editor-ui-alias=${T(this._propertyEditorUiAlias)}
				.config=${this._dataTypeData}
				.validation=${this._property.validation}>
			</umb-property>
		`;
  }
};
h = /* @__PURE__ */ new WeakMap();
i.styles = [
  S,
  v`
			:host {
				display: block;
			}
		`
];
o([
  _({ type: Object, attribute: !1 })
], i.prototype, "property", 1);
o([
  _({ type: String, attribute: "data-path" })
], i.prototype, "dataPath", 2);
o([
  _({ type: String })
], i.prototype, "ownerEntityType", 1);
o([
  a()
], i.prototype, "_propertyEditorUiAlias", 2);
o([
  a()
], i.prototype, "_propertyEditorSchemaAlias", 2);
o([
  a()
], i.prototype, "_isUnsupported", 2);
o([
  a()
], i.prototype, "_dataTypeData", 2);
i = o([
  b("umb-property-type-based-property")
], i);
export {
  i as U,
  P as a,
  w as b
};
//# sourceMappingURL=property-type-based-property.element-B_7ZydA1.js.map
