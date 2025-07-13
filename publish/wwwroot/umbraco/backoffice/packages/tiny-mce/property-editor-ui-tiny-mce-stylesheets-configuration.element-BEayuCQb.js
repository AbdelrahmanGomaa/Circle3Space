import { html as U, property as y, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbDeprecation as g } from "@umbraco-cms/backoffice/utils";
import { UmbLitElement as P } from "@umbraco-cms/backoffice/lit-element";
import { UmbServerFilePathUniqueSerializer as w } from "@umbraco-cms/backoffice/server-file-system";
import { UmbChangeEvent as S } from "@umbraco-cms/backoffice/event";
var C = Object.defineProperty, b = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, m = (e, t, r, s) => {
  for (var i = s > 1 ? void 0 : s ? b(t, r) : t, h = e.length - 1, c; h >= 0; h--)
    (c = e[h]) && (i = (s ? c(t, r, i) : c(i)) || i);
  return s && i && C(t, r, i), i;
}, v = (e, t, r) => t.has(e) || f("Cannot " + r), a = (e, t, r) => (v(e, t, "read from private field"), r ? r.call(e) : t.get(e)), l = (e, t, r) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), d = (e, t, r, s) => (v(e, t, "write to private field"), t.set(e, r), r), M = (e, t, r) => (v(e, t, "access private method"), r), p, n, u, _;
let o = class extends P {
  constructor() {
    super(), l(this, u), l(this, p, new w()), l(this, n, []), new g({
      deprecated: "umb-property-editor-ui-tiny-mce-stylesheets-configuration",
      removeInVersion: "16.0.0",
      solution: "Use `<umb-property-editor-ui-stylesheet-picker>` instead, or the 'Umb.PropertyEditorUi.StylesheetPicker' manifest."
    }).warn();
  }
  set value(e) {
    e && d(this, n, e.map((t) => a(this, p).toUnique(t)));
  }
  get value() {
    return a(this, n) ? a(this, n).map((e) => a(this, p).toServerPath(e)) : [];
  }
  render() {
    return U`<umb-stylesheet-input @change=${M(this, u, _)} .selection=${a(this, n)}></umb-stylesheet-input>`;
  }
};
p = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
_ = function(e) {
  const t = e.target;
  d(this, n, t.selection ?? []), this.dispatchEvent(new S());
};
m([
  y({ type: Array })
], o.prototype, "value", 1);
m([
  y({ type: Object, attribute: !1 })
], o.prototype, "config", 2);
o = m([
  E("umb-property-editor-ui-tiny-mce-stylesheets-configuration")
], o);
const D = o;
export {
  o as UmbPropertyEditorUITinyMceStylesheetsConfigurationElement,
  D as default
};
//# sourceMappingURL=property-editor-ui-tiny-mce-stylesheets-configuration.element-BEayuCQb.js.map
