import { ifDefined as O, html as k, css as T, state as v, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as M } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as N } from "@umbraco-cms/backoffice/style";
import { UmbVariantId as U } from "@umbraco-cms/backoffice/variant";
import { UMB_APP_LANGUAGE_CONTEXT as $ } from "@umbraco-cms/backoffice/language";
import { UMB_SECTION_CONTEXT as D } from "@umbraco-cms/backoffice/section";
import { UMB_VARIANT_WORKSPACE_CONTEXT as P } from "@umbraco-cms/backoffice/workspace";
var S = Object.defineProperty, B = Object.getOwnPropertyDescriptor, V = (e) => {
  throw TypeError(e);
}, m = (e, t, r, a) => {
  for (var o = a > 1 ? void 0 : a ? B(t, r) : t, d = e.length - 1, b; d >= 0; d--)
    (b = e[d]) && (o = (a ? b(t, r, o) : b(o)) || o);
  return a && o && S(t, r, o), o;
}, C = (e, t, r) => t.has(e) || V("Cannot " + r), s = (e, t, r) => (C(e, t, "read from private field"), t.get(e)), h = (e, t, r) => t.has(e) ? V("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), l = (e, t, r, a) => (C(e, t, "write to private field"), t.set(e, r), r), c = (e, t, r) => (C(e, t, "access private method"), r), _, u, f, p, i, w, A, x, W, g, E;
let n = class extends M {
  constructor() {
    super(), h(this, i), this._name = "", this._structure = [], h(this, _), h(this, u), h(this, f), h(this, p), this.consumeContext($, (e) => {
      l(this, f, e), c(this, i, A).call(this);
    }), this.consumeContext(D, (e) => {
      l(this, _, e);
    }), this.consumeContext(P, (e) => {
      e && (l(this, u, e), c(this, i, x).call(this), c(this, i, w).call(this));
    }), this.consumeContext("UmbMenuStructureWorkspaceContext", (e) => {
      e && (l(this, p, e), c(this, i, w).call(this));
    });
  }
  render() {
    return k`
			<uui-breadcrumbs>
				${this._structure.map(
      (e) => k`<uui-breadcrumb-item href="${O(c(this, i, E).call(this, e))}"
							>${this.localize.string(c(this, i, g).call(this, e))}</uui-breadcrumb-item
						>`
    )}
				<uui-breadcrumb-item>${this._name}</uui-breadcrumb-item>
			</uui-breadcrumbs>
		`;
  }
};
_ = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
w = function() {
  if (!s(this, p) || !s(this, u)) return;
  const e = s(this, u).getIsNew();
  this.observe(s(this, p).structure, (t) => {
    const r = t;
    this._structure = e ? r : r.slice(0, -1);
  });
};
A = function() {
  this.observe(s(this, f).appDefaultLanguage, (e) => {
    this._appDefaultCulture = e?.unique;
  });
};
x = function() {
  this.observe(
    s(this, u)?.splitView.activeVariantsInfo,
    (e) => {
      e && (this._workspaceActiveVariantId = U.Create(e[0]), c(this, i, W).call(this));
    },
    "breadcrumbWorkspaceActiveVariantObserver"
  );
};
W = function() {
  this.observe(
    s(this, u)?.name(this._workspaceActiveVariantId),
    (e) => this._name = e || "",
    "breadcrumbWorkspaceNameObserver"
  );
};
g = function(e) {
  const t = e.variants.find((a) => a.culture === this._appDefaultCulture)?.name ?? e.variants[0].name ?? "Unknown";
  return e.variants.find((a) => this._workspaceActiveVariantId?.compare(a))?.name ?? `(${t})`;
};
E = function(e) {
  const t = `section/${s(this, _)?.getPathname()}/workspace/${e.entityType}/edit`;
  return e.isFolder ? void 0 : `${t}/${e.unique}/${this._workspaceActiveVariantId?.culture}`;
};
n.styles = [
  N,
  T`
			:host {
				/* TODO: This is a temp solution to handle an issue where long nested breadcrumbs would hide workspace actions */
				overflow: hidden;
				display: flex;
				flex-direction: row-reverse;
				margin-left: var(--uui-size-layout-1);
			}
		`
];
m([
  v()
], n.prototype, "_name", 2);
m([
  v()
], n.prototype, "_structure", 2);
m([
  v()
], n.prototype, "_workspaceActiveVariantId", 2);
m([
  v()
], n.prototype, "_appDefaultCulture", 2);
n = m([
  y("umb-workspace-variant-menu-breadcrumb")
], n);
const F = n;
export {
  n as UmbWorkspaceVariantMenuBreadcrumbElement,
  F as default
};
//# sourceMappingURL=workspace-variant-menu-breadcrumb.element-D8sq_sWb.js.map
