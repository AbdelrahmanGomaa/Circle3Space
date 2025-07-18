import { property as l, state as S, customElement as y, html as u, ifDefined as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as b } from "@umbraco-cms/backoffice/lit-element";
import { UMB_SECTION_CONTEXT as U } from "@umbraco-cms/backoffice/section";
import { debounce as L } from "@umbraco-cms/backoffice/utils";
var N = Object.defineProperty, W = Object.getOwnPropertyDescriptor, M = (e) => {
  throw TypeError(e);
}, $ = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? W(t, i) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (a = (n ? r(t, i, a) : r(a)) || a);
  return n && a && N(t, i, a), a;
}, C = (e, t, i) => t.has(e) || M("Cannot " + i), g = (e, t, i) => (C(e, t, "read from private field"), t.get(e)), E = (e, t, i) => t.has(e) ? M("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), z = (e, t, i, n) => (C(e, t, "write to private field"), t.set(e, i), i), O = (e, t, i) => (C(e, t, "access private method"), i), c, p, _;
let f = class extends b {
  constructor() {
    super(), E(this, p), E(this, c), this.consumeContext(U, (e) => {
      this.observe(
        e?.pathname,
        (t) => {
          z(this, c, t), O(this, p, _).call(this);
        },
        "observePathname"
      );
    });
  }
  get manifest() {
    return this._manifest;
  }
  set manifest(e) {
    this._manifest = e, O(this, p, _).call(this);
  }
  render() {
    return u`
			<umb-menu-item-layout
				.href=${this._href}
				.iconName=${this.manifest.meta.icon ?? ""}
				.label=${this.localize.string(this.manifest.meta.label ?? this.manifest.name)}
				.entityType=${this.manifest.meta.entityType}>
			</umb-menu-item-layout>
		`;
  }
};
c = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
_ = function() {
  !g(this, c) || !this.manifest || (this._href = `section/${g(this, c)}/workspace/${this.manifest.meta.entityType}`);
};
$([
  l({ type: Object, attribute: !1 })
], f.prototype, "_manifest", 2);
$([
  S()
], f.prototype, "_href", 2);
f = $([
  y("umb-menu-item-default")
], f);
var B = Object.defineProperty, G = Object.getOwnPropertyDescriptor, x = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? G(t, i) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (a = (n ? r(t, i, a) : r(a)) || a);
  return n && a && B(t, i, a), a;
};
let v = class extends b {
  render() {
    return u`
			<umb-extension-slot
				type="menuItem"
				default-element="umb-menu-item-default"
				.filter=${(e) => e.meta.menus.includes(this.manifest.alias)}>
			</umb-extension-slot>
		`;
  }
};
x([
  l({ attribute: !1 })
], v.prototype, "manifest", 2);
v = x([
  y("umb-menu")
], v);
var H = Object.defineProperty, q = Object.getOwnPropertyDescriptor, A = (e) => {
  throw TypeError(e);
}, h = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? q(t, i) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (a = (n ? r(t, i, a) : r(a)) || a);
  return n && a && H(t, i, a), a;
}, D = (e, t, i) => t.has(e) || A("Cannot " + i), P = (e, t, i) => (D(e, t, "read from private field"), t.get(e)), T = (e, t, i) => t.has(e) ? A("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), X = (e, t, i) => (D(e, t, "access private method"), i), m, d, I;
let o = class extends b {
  constructor() {
    super(...arguments), T(this, d), this.iconName = "", this.label = "", this.hasChildren = !1, this._isActive = !1, T(this, m, L(() => X(this, d, I).call(this), 100));
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("navigationend", P(this, m));
  }
  render() {
    return u`<uui-menu-item
			href="${w(this.href)}"
			label=${this.label}
			.caretLabel=${this.localize.term("visuallyHiddenTexts_expandChildItems") + " " + this.label}
			?active=${this._isActive}
			?has-children=${this.hasChildren}
			target=${w(this.href && this.target ? this.target : void 0)}>
			<umb-icon slot="icon" name=${this.iconName}></umb-icon>
			${this.entityType ? u`<umb-entity-actions-bundle
						slot="actions"
						.entityType=${this.entityType}
						.unique=${null}
						.label=${this.label}>
					</umb-entity-actions-bundle>` : ""}
			<slot></slot>
		</uui-menu-item>`;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), window.removeEventListener("navigationend", P(this, m));
  }
};
m = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
I = function() {
  if (!this.href) {
    this._isActive = !1;
    return;
  }
  const e = window.location.pathname;
  this._isActive = e.includes(this.href);
};
h([
  l({ type: String, attribute: "entity-type" })
], o.prototype, "entityType", 2);
h([
  l({ type: String, attribute: "icon-name" })
], o.prototype, "iconName", 2);
h([
  l({ type: String })
], o.prototype, "label", 2);
h([
  l({ type: Boolean, attribute: "has-children" })
], o.prototype, "hasChildren", 2);
h([
  l({ type: String })
], o.prototype, "href", 2);
h([
  l({ type: String })
], o.prototype, "target", 2);
h([
  S()
], o.prototype, "_isActive", 2);
o = h([
  y("umb-menu-item-layout")
], o);
export {
  v as U,
  f as a,
  o as b
};
//# sourceMappingURL=menu-item-layout.element-CcqT69Nn.js.map
