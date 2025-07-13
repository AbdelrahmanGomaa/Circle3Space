import { UmbChangeEvent as u } from "@umbraco-cms/backoffice/event";
import { html as h, property as v, state as l, customElement as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as _ } from "@umbraco-cms/backoffice/lit-element";
var f = Object.defineProperty, E = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, i = (e, t, n, o) => {
  for (var r = o > 1 ? void 0 : o ? E(t, n) : t, s = e.length - 1, m; s >= 0; s--)
    (m = e[s]) && (r = (o ? m(t, n, r) : m(r)) || r);
  return o && r && f(t, n, r), r;
}, P = (e, t, n) => t.has(e) || y("Cannot " + n), x = (e, t, n) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), T = (e, t, n) => (P(e, t, "access private method"), n), p, c;
let a = class extends _ {
  constructor() {
    super(...arguments), x(this, p), this.min = 0, this.max = 1 / 0;
  }
  set config(e) {
    if (!e) return;
    const t = e?.getValueByAlias("validationLimit");
    this.min = t?.min ?? 0, this.max = t?.max ?? 1 / 0, this.onlyElementTypes = e.getValueByAlias("onlyPickElementTypes") ?? !1;
  }
  render() {
    return h`
			<umb-input-document-type
				.min=${this.min}
				.max=${this.max}
				.value=${this.value}
				.elementTypesOnly=${this.onlyElementTypes ?? !1}
				@change=${T(this, p, c)}>
			</umb-input-document-type>
		`;
  }
};
p = /* @__PURE__ */ new WeakSet();
c = function(e) {
  this.value = e.target.value, this.dispatchEvent(new u());
};
i([
  v()
], a.prototype, "value", 2);
i([
  l()
], a.prototype, "min", 2);
i([
  l()
], a.prototype, "max", 2);
i([
  l()
], a.prototype, "onlyElementTypes", 2);
a = i([
  d("umb-property-editor-ui-document-type-picker")
], a);
const C = a;
export {
  a as UmbPropertyEditorUIDocumentTypePickerElement,
  C as default
};
//# sourceMappingURL=property-editor-ui-document-type-picker.element-CLFZqc7z.js.map
