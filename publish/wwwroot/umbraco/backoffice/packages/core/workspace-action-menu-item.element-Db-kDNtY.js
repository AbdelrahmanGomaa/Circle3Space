import { UmbActionExecutedEvent as b } from "@umbraco-cms/backoffice/event";
import { ifDefined as f, nothing as g, html as l, state as k, property as $, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
var P = Object.defineProperty, W = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, p = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? W(t, i) : t, c = e.length - 1, m; c >= 0; c--)
    (m = e[c]) && (a = (n ? m(t, i, a) : m(a)) || a);
  return n && a && P(t, i, a), a;
}, h = (e, t, i) => t.has(e) || v("Cannot " + i), d = (e, t, i) => (h(e, t, "read from private field"), t.get(e)), _ = (e, t, i) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), A = (e, t, i, n) => (h(e, t, "write to private field"), t.set(e, i), i), u = (e, t, i) => (h(e, t, "access private method"), i), r, o, E, w;
let s = class extends C {
  constructor() {
    super(...arguments), _(this, o), _(this, r);
  }
  set api(e) {
    A(this, r, e), d(this, r)?.getHref?.().then((t) => {
      this._href = t;
    });
  }
  render() {
    return l`
			<uui-menu-item
				label=${f(
      this.manifest?.meta.label ? this.localize.string(this.manifest.meta.label) : this.manifest?.name
    )}
				href=${f(this._href)}
				@click-label=${u(this, o, E)}
				@click=${u(this, o, w)}>
				${this.manifest?.meta.icon ? l`<umb-icon slot="icon" name="${this.manifest?.meta.icon}"></umb-icon>` : g}
			</uui-menu-item>
		`;
  }
};
r = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
E = async function(e) {
  this._href || (e.stopPropagation(), await d(this, r)?.execute()), this.dispatchEvent(new b());
};
w = function(e) {
  e.stopPropagation();
};
p([
  k()
], s.prototype, "_href", 2);
p([
  $({ attribute: !1 })
], s.prototype, "manifest", 2);
s = p([
  y("umb-workspace-action-menu-item")
], s);
const O = s;
export {
  s as UmbWorkspaceActionMenuItemElement,
  O as default
};
//# sourceMappingURL=workspace-action-menu-item.element-Db-kDNtY.js.map
