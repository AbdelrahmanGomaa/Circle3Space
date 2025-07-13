import { UmbLanguageDetailRepository as d } from "./language-detail.repository-a4uWw_br.js";
import { p as m, r as h, i as A, b as E, n as w, c as C } from "./language-access.workspace.context-token-ChA0uFUc.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import { html as l, state as U, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as y } from "@umbraco-cms/backoffice/style";
import { UmbEntityNamedDetailWorkspaceContextBase as T, UmbWorkspaceIsNewRedirectController as N, UmbWorkspaceIsNewRedirectControllerAlias as b } from "@umbraco-cms/backoffice/workspace";
var O = Object.defineProperty, k = Object.getOwnPropertyDescriptor, _ = (t) => {
  throw TypeError(t);
}, u = (t, e, a, r) => {
  for (var s = r > 1 ? void 0 : r ? k(e, a) : e, n = t.length - 1, p; n >= 0; n--)
    (p = t[n]) && (s = (r ? p(e, a, s) : p(s)) || s);
  return r && s && O(e, a, s), s;
}, c = (t, e, a) => e.has(t) || _("Cannot " + a), G = (t, e, a) => (c(t, e, "read from private field"), a ? a.call(t) : e.get(t)), L = (t, e, a) => e.has(t) ? _("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), R = (t, e, a, r) => (c(t, e, "write to private field"), e.set(t, a), a), i;
let o = class extends v {
  constructor() {
    super(), L(this, i), this.consumeContext(m, (t) => {
      R(this, i, t), this.observe(G(this, i).isNew, (e) => this._isNew = e);
    });
  }
  render() {
    return l`<umb-entity-detail-workspace-editor .backPath=${h}>
			${this._isNew ? l`<h3 slot="header">Add language</h3>` : l`<umb-workspace-header-name-editable slot="header"></umb-workspace-header-name-editable> `}
		</umb-entity-detail-workspace-editor>`;
  }
};
i = /* @__PURE__ */ new WeakMap();
o.styles = [y];
u([
  U()
], o.prototype, "_isNew", 2);
o = u([
  f("umb-language-workspace-editor")
], o);
class D extends T {
  constructor(e) {
    super(e, {
      workspaceAlias: w,
      entityType: E,
      detailRepositoryAlias: A
    }), this.repository = new d(this), this.routes.setRoutes([
      {
        path: "create",
        component: o,
        setup: async () => {
          await this.createScaffold({ parent: { entityType: C, unique: null } }), new N(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:unique",
        component: o,
        setup: (a, r) => {
          this.removeUmbControllerByAlias(b), this.load(r.match.params.unique);
        }
      }
    ]);
  }
  setCulture(e) {
    this._data.updateCurrent({ unique: e });
  }
  setMandatory(e) {
    this._data.updateCurrent({ isMandatory: e });
  }
  setDefault(e) {
    this._data.updateCurrent({ isDefault: e });
  }
  setFallbackCulture(e) {
    this._data.updateCurrent({ fallbackIsoCode: e });
  }
}
export {
  D as UmbLanguageWorkspaceContext,
  D as api
};
//# sourceMappingURL=language-workspace.context-ChgP72sw.js.map
