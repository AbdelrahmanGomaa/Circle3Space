import { UUIRefNodeElement as n } from "@umbraco-cms/backoffice/external/uui";
import { property as u, customElement as m, html as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalToken as h } from "@umbraco-cms/backoffice/modal";
const y = "Umbraco.Label";
var d = Object.defineProperty, v = Object.getOwnPropertyDescriptor, p = (r, e, t, s) => {
  for (var l = s > 1 ? void 0 : s ? v(e, t) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (l = (s ? o(e, t, l) : o(l)) || l);
  return s && l && d(e, t, l), l;
};
let a = class extends n {
  constructor() {
    super(...arguments), this.fallbackIcon = '<svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M142.212 397.267l106.052-48.024L398.479 199.03l-26.405-26.442-90.519 90.517-15.843-15.891 90.484-90.486-16.204-16.217-150.246 150.243-47.534 106.513zm74.904-100.739l23.285-23.283 3.353 22.221 22.008 3.124-23.283 23.313-46.176 20.991 20.813-46.366zm257.6-173.71L416.188 64.3l-49.755 49.785 58.504 58.503 49.779-49.77zM357.357 300.227h82.826v116.445H68.929V300.227h88.719v-30.648H38.288v177.733h432.537V269.578H357.357v30.649z"></path></svg>', this.alias = "", this.propertyEditorSchemaAlias = "";
  }
  renderDetail() {
    const r = [];
    return this.alias !== "" && r.push(this.alias), this.propertyEditorSchemaAlias !== "" ? r.push(this.propertyEditorSchemaAlias) : r.push(y), this.detail !== "" && r.push(this.detail), c`<small id="detail">${r.join(" | ")}<slot name="detail"></slot></small>`;
  }
};
a.styles = [...n.styles];
p([
  u({ type: String })
], a.prototype, "alias", 2);
p([
  u({ type: String, attribute: "property-editor-schema-alias" })
], a.prototype, "propertyEditorSchemaAlias", 2);
a = p([
  m("umb-ref-property-editor-ui")
], a);
class g extends Array {
  constructor(e) {
    super(...e);
  }
  static get [Symbol.species]() {
    return Array;
  }
  getValueByAlias(e) {
    const t = this.getByAlias(e);
    if (!(t?.value === void 0 || t?.value === null))
      return t.value;
  }
  getByAlias(e) {
    return this.find((t) => t.alias === e);
  }
  /**
   * Convert the underlying array to an object where
   * the property value is keyed by its alias
   * eg
   * `[
   *   { 'alias': 'myProperty', 'value': 27 },
   *   { 'alias': 'anotherProperty', 'value': 'eleven' },
   * ]`
   * is returned as
   * `{
   *   myProperty: 27,
   * 	 anotherProperty: 'eleven',
   * }`
   */
  toObject() {
    return Object.fromEntries(this.map((e) => [e.alias, e.value]));
  }
  equal(e) {
    return this.length !== e?.length ? !1 : this.every((t) => {
      const s = t.alias ? e.getByAlias(t.alias) : void 0;
      return s && t.value === s.value;
    });
  }
}
class _ extends Event {
  constructor() {
    super("change", { bubbles: !0, composed: !1, cancelable: !1 });
  }
}
const A = new h("Umb.Modal.PropertyEditorUiPicker", {
  modal: {
    type: "sidebar",
    size: "small"
  }
});
export {
  y as UMB_PROPERTY_EDITOR_SCHEMA_ALIAS_DEFAULT,
  A as UMB_PROPERTY_EDITOR_UI_PICKER_MODAL,
  g as UmbPropertyEditorConfigCollection,
  _ as UmbPropertyValueChangeEvent,
  a as UmbRefPropertyEditorUIElement
};
//# sourceMappingURL=index.js.map
