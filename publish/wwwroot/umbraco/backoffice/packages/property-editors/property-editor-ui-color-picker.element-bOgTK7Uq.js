import { html as b, property as m, state as y, customElement as P } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as L } from "@umbraco-cms/backoffice/event";
var U = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, w = (e) => {
  throw TypeError(e);
}, i = (e, t, r, o) => {
  for (var a = o > 1 ? void 0 : o ? $(t, r) : t, p = e.length - 1, u; p >= 0; p--)
    (u = e[p]) && (a = (o ? u(t, r, a) : u(a)) || a);
  return o && a && U(t, r, a), a;
}, d = (e, t, r) => t.has(e) || w("Cannot " + r), c = (e, t, r) => (d(e, t, "read from private field"), r ? r.call(e) : t.get(e)), v = (e, t, r) => t.has(e) ? w("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), g = (e, t, r, o) => (d(e, t, "write to private field"), t.set(e, r), r), _ = (e, t, r) => (d(e, t, "access private method"), r), n, h, l, f, E;
let s = class extends C {
  constructor() {
    super(...arguments), v(this, l), v(this, n, !1), v(this, h), this.readonly = !1, this._showLabels = c(this, n), this._swatches = [];
  }
  set value(e) {
    e && g(this, h, _(this, l, f).call(this, e));
  }
  get value() {
    return c(this, h);
  }
  set config(e) {
    if (!e) return;
    this._showLabels = e?.getValueByAlias("useLabel") ?? c(this, n);
    const t = e?.getValueByAlias("items") ?? [];
    this._swatches = t.map((r) => _(this, l, f).call(this, r));
  }
  render() {
    return b`<umb-input-color
			value=${this.value?.value ?? ""}
			.swatches=${this._swatches}
			?showLabels=${this._showLabels}
			@change=${_(this, l, E)}
			?readonly=${this.readonly}></umb-input-color>`;
  }
};
n = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
f = function(e) {
  return {
    label: e.label,
    // hex color regex adapted from: https://stackoverflow.com/a/9682781/12787
    value: e.value.match(/^(?:[0-9a-f]{3}){1,2}$/i) ? `#${e.value}` : e.value
  };
};
E = function(e) {
  const t = e.target.value;
  this.value = this._swatches.find((r) => r.value === t), this.dispatchEvent(new L());
};
i([
  m({ type: Object })
], s.prototype, "value", 1);
i([
  m({ type: Boolean, reflect: !0 })
], s.prototype, "readonly", 2);
i([
  y()
], s.prototype, "_showLabels", 2);
i([
  y()
], s.prototype, "_swatches", 2);
s = i([
  P("umb-property-editor-ui-color-picker")
], s);
const W = s;
export {
  s as UmbPropertyEditorUIColorPickerElement,
  W as default
};
//# sourceMappingURL=property-editor-ui-color-picker.element-bOgTK7Uq.js.map
