import { UmbChangeEvent as f } from "@umbraco-cms/backoffice/event";
import { umbExtensionsRegistry as C } from "@umbraco-cms/backoffice/extension-registry";
import { html as a, nothing as O, ifDefined as u, property as _, state as V, customElement as S } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as z } from "@umbraco-cms/backoffice/validation";
var M = Object.defineProperty, D = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, h = (e, t, s, n) => {
  for (var i = n > 1 ? void 0 : n ? D(t, s) : t, c = e.length - 1, m; c >= 0; c--)
    (m = e[c]) && (i = (n ? m(t, s, i) : m(i)) || i);
  return n && i && M(t, s, i), i;
}, d = (e, t, s) => t.has(e) || v("Cannot " + s), b = (e, t, s) => (d(e, t, "read from private field"), t.get(e)), y = (e, t, s) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), W = (e, t, s, n) => (d(e, t, "write to private field"), t.set(e, s), s), o = (e, t, s) => (d(e, t, "access private method"), s), l, r, g, w, P, E, U, $, T;
let p = class extends z(x) {
  constructor() {
    super(...arguments), y(this, r), this._entityType = "", this.allowedVerbs = [], this._manifests = [], y(this, l);
  }
  get entityType() {
    return this._entityType;
  }
  set entityType(e) {
    e !== this._entityType && (this._entityType = e, o(this, r, w).call(this));
  }
  getFormElement() {
  }
  render() {
    return a`${o(this, r, $).call(this, this._manifests)} `;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), b(this, l)?.destroy();
  }
};
l = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
g = function(e) {
  return e.every((t) => this.allowedVerbs.includes(t));
};
w = function() {
  b(this, l)?.destroy(), W(this, l, this.observe(
    C.byType("entityUserPermission"),
    (e) => {
      this._manifests = e.filter(
        (t) => t.forEntityTypes.includes(this.entityType)
      );
    },
    "umbUserPermissionManifestsObserver"
  ));
};
P = function(e, t) {
  e.stopPropagation(), e.target.allowed ? o(this, r, E).call(this, t) : o(this, r, U).call(this, t);
};
E = function(e) {
  const t = [...this.allowedVerbs, ...e];
  this.allowedVerbs = [...new Set(t)], this.dispatchEvent(new f());
};
U = function(e) {
  this.allowedVerbs = this.allowedVerbs.filter((t) => !e.includes(t)), this.dispatchEvent(new f());
};
$ = function(e) {
  const t = Object.groupBy(
    e,
    (s) => s.meta.group
  );
  return a`
			${Object.entries(t).map(
    ([s, n]) => a`
					${s !== "undefined" ? a` <h5><umb-localize .key=${`actionCategories_${s}`}>${s}</umb-localize></h5> ` : O}
					${n.map((i) => a` ${o(this, r, T).call(this, i)} `)}
				`
  )}
		`;
};
T = function(e) {
  return a` <umb-input-user-permission-verb
			label=${u(e.meta.label ? this.localize.string(e.meta.label) : e.name)}
			description=${u(e.meta.description ? this.localize.string(e.meta.description) : void 0)}
			?allowed=${o(this, r, g).call(this, e.meta.verbs)}
			@change=${(t) => o(this, r, P).call(this, t, e.meta.verbs)}></umb-input-user-permission-verb>`;
};
h([
  _({ type: String, attribute: "entity-type" })
], p.prototype, "entityType", 1);
h([
  _({ attribute: !1 })
], p.prototype, "allowedVerbs", 2);
h([
  V()
], p.prototype, "_manifests", 2);
p = h([
  S("umb-input-entity-user-permission")
], p);
export {
  p as U
};
//# sourceMappingURL=input-entity-user-permission.element-CASDH22A.js.map
