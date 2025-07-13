import { map as x, ifDefined as O, html as C, css as y, state as w, customElement as S } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as $ } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as T } from "@umbraco-cms/backoffice/style";
import { UMB_SECTION_CONTEXT as U } from "@umbraco-cms/backoffice/section";
import { UMB_WORKSPACE_CONTEXT as g } from "@umbraco-cms/backoffice/workspace";
var M = Object.defineProperty, N = Object.getOwnPropertyDescriptor, E = (e) => {
  throw TypeError(e);
}, f = (e, t, r, c) => {
  for (var s = c > 1 ? void 0 : c ? N(t, r) : t, _ = e.length - 1, l; _ >= 0; _--)
    (l = e[_]) && (s = (c ? l(t, r, s) : l(s)) || s);
  return c && s && M(t, r, s), s;
}, b = (e, t, r) => t.has(e) || E("Cannot " + r), a = (e, t, r) => (b(e, t, "read from private field"), t.get(e)), h = (e, t, r) => t.has(e) ? E("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), v = (e, t, r, c) => (b(e, t, "write to private field"), t.set(e, r), r), m = (e, t, r) => (b(e, t, "access private method"), r), n, p, u, i, d, W, k;
let o = class extends $ {
  constructor() {
    super(), h(this, i), this._name = "", this._structure = [], h(this, n), h(this, p), h(this, u), this.consumeContext(U, (e) => {
      v(this, p, e);
    }), this.consumeContext(g, (e) => {
      v(this, n, e), m(this, i, d).call(this), m(this, i, W).call(this);
    }), this.consumeContext("UmbMenuStructureWorkspaceContext", (e) => {
      v(this, u, e), m(this, i, d).call(this);
    });
  }
  render() {
    return C`
			<uui-breadcrumbs>
				${x(
      this._structure,
      (e) => C`<uui-breadcrumb-item href=${O(m(this, i, k).call(this, e))}
							>${this.localize.string(e.name)}</uui-breadcrumb-item
						>`
    )}
				<uui-breadcrumb-item>${this._name}</uui-breadcrumb-item>
			</uui-breadcrumbs>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
d = function() {
  if (!a(this, u) || !a(this, n)) return;
  const e = a(this, n).getIsNew();
  this.observe(
    a(this, u).structure,
    (t) => {
      const r = t;
      this._structure = e ? r : r.slice(0, -1);
    },
    "menuStructureObserver"
  );
};
W = function() {
  this.observe(
    a(this, n)?.name,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (e) => this._name = e || "",
    "breadcrumbWorkspaceNameObserver"
  );
};
k = function(e) {
  const t = `section/${a(this, p)?.getPathname()}/workspace/${e.entityType}/edit`;
  return e.isFolder ? void 0 : `${t}/${e.unique}`;
};
o.styles = [
  T,
  y`
			:host {
				margin-left: var(--uui-size-layout-1);
			}
		`
];
f([
  w()
], o.prototype, "_name", 2);
f([
  w()
], o.prototype, "_structure", 2);
o = f([
  S("umb-workspace-breadcrumb")
], o);
const X = o;
export {
  o as UmbWorkspaceBreadcrumbElement,
  X as default
};
//# sourceMappingURL=workspace-menu-breadcrumb.element-BesT94Bg.js.map
