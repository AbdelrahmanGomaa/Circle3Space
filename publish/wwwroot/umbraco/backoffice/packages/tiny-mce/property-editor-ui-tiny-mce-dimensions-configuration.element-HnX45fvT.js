import { UmbTextStyles as d } from "@umbraco-cms/backoffice/style";
import { html as _, property as g, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as u } from "@umbraco-cms/backoffice/event";
var E = Object.defineProperty, b = Object.getOwnPropertyDescriptor, p = (e) => {
  throw TypeError(e);
}, m = (e, t, i, a) => {
  for (var r = a > 1 ? void 0 : a ? b(t, i) : t, s = e.length - 1, h; s >= 0; s--)
    (h = e[s]) && (r = (a ? h(t, i, r) : h(r)) || r);
  return a && r && E(t, i, r), r;
}, w = (e, t, i) => t.has(e) || p("Cannot " + i), C = (e, t, i) => t.has(e) ? p("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), l = (e, t, i) => (w(e, t, "access private method"), i), o, c, v;
let n = class extends y {
  constructor() {
    super(...arguments), C(this, o), this.value = {};
  }
  render() {
    return _`<uui-input
				type="number"
				label=${this.localize.term("general_width")}
				placeholder=${this.localize.term("general_width")}
				@change=${l(this, o, c)}
				.value=${this.value?.width}></uui-input>
			x
			<uui-input
				type="number"
				label=${this.localize.term("general_height")}
				placeholder=${this.localize.term("general_height")}
				@change=${l(this, o, v)}
				.value=${this.value?.height}></uui-input>
			pixels`;
  }
};
o = /* @__PURE__ */ new WeakSet();
c = function(e) {
  this.value = { ...this.value, width: Number(e.target.value) }, this.dispatchEvent(new u());
};
v = function(e) {
  this.value = { ...this.value, height: Number(e.target.value) }, this.dispatchEvent(new u());
};
n.styles = [d];
m([
  g({ type: Object })
], n.prototype, "value", 2);
n = m([
  f("umb-property-editor-ui-tiny-mce-dimensions-configuration")
], n);
const D = n;
export {
  n as UmbPropertyEditorUITinyMceDimensionsConfigurationElement,
  D as default
};
//# sourceMappingURL=property-editor-ui-tiny-mce-dimensions-configuration.element-HnX45fvT.js.map
