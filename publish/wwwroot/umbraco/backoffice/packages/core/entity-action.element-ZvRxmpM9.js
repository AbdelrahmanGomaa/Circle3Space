import { UmbActionExecutedEvent as w } from "@umbraco-cms/backoffice/event";
import { ifDefined as l, nothing as b, html as u, property as h, state as C, customElement as $ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
var P = Object.defineProperty, S = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, o = (t, e, i, r) => {
  for (var a = r > 1 ? void 0 : r ? S(e, i) : e, c = t.length - 1, f; c >= 0; c--)
    (f = t[c]) && (a = (r ? f(e, i, a) : f(a)) || a);
  return r && a && P(e, i, a), a;
}, m = (t, e, i) => e.has(t) || d("Cannot " + i), y = (t, e, i) => (m(t, e, "read from private field"), e.get(t)), _ = (t, e, i) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), A = (t, e, i, r) => (m(t, e, "write to private field"), e.set(t, i), i), v = (t, e, i) => (m(t, e, "access private method"), i), s, p, E, g;
let n = class extends D {
  constructor() {
    super(...arguments), _(this, p), _(this, s);
  }
  set api(t) {
    A(this, s, t), y(this, s)?.getHref?.().then((e) => {
      this._href = e;
    });
  }
  async focus() {
    await this.updateComplete, this.shadowRoot?.querySelector("uui-menu-item")?.focus();
  }
  render() {
    const t = this.manifest?.meta.label ? this.localize.string(this.manifest.meta.label) : this.manifest?.name;
    return u`
			<uui-menu-item
				label=${l(this.manifest?.meta.additionalOptions ? t + "…" : t)}
				href=${l(this._href)}
				@click-label=${v(this, p, E)}
				@click=${v(this, p, g)}>
				${this.manifest?.meta.icon ? u`<umb-icon slot="icon" name="${this.manifest?.meta.icon}"></umb-icon>` : b}
			</uui-menu-item>
		`;
  }
};
s = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
E = async function(t) {
  this._href || (t.stopPropagation(), await y(this, s)?.execute()), this.dispatchEvent(new w());
};
g = function(t) {
  t.stopPropagation();
};
o([
  h({ type: String })
], n.prototype, "entityType", 2);
o([
  h({ type: String })
], n.prototype, "unique", 2);
o([
  h({ attribute: !1 })
], n.prototype, "manifest", 2);
o([
  C()
], n.prototype, "_href", 2);
n = o([
  $("umb-entity-action")
], n);
const k = n;
export {
  n as UmbEntityActionDefaultElement,
  k as default
};
//# sourceMappingURL=entity-action.element-ZvRxmpM9.js.map
