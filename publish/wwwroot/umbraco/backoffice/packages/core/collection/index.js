import { UmbControllerBase as ft, UmbContextBase as zt } from "@umbraco-cms/backoffice/class-api";
import { UmbExtensionsManifestInitializer as Bt, createExtensionElement as ut, UmbExtensionApiInitializer as qt } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as st, UmbExtensionElementAndApiSlotElementBase as Wt } from "@umbraco-cms/backoffice/extension-registry";
import { UmbArrayState as T, UmbObjectState as G, UmbStringState as kt, UmbNumberState as Ft, UmbBasicState as Yt, observeMultiple as Kt } from "@umbraco-cms/backoffice/observable-api";
import { U as O } from "../collection-default.context-token-BaKj_eMl.js";
import { UmbChangeEvent as Gt } from "@umbraco-cms/backoffice/event";
import { UmbPaginationManager as Xt, UmbSelectionManager as Jt, debounce as jt } from "@umbraco-cms/backoffice/utils";
import { UmbRequestReloadStructureForEntityEvent as q, UmbRequestReloadChildrenOfEntityEvent as W } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as Ht } from "@umbraco-cms/backoffice/action";
import { UMB_ENTITY_CONTEXT as vt } from "@umbraco-cms/backoffice/entity";
import { UMB_WORKSPACE_MODAL as Qt, UMB_ENTITY_WORKSPACE_CONTEXT as Zt } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as te, UMB_ROUTE_CONTEXT as ee } from "@umbraco-cms/backoffice/router";
import { css as v, state as l, customElement as c, nothing as _, html as a, property as R, query as ie, repeat as se } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as h } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as V } from "@umbraco-cms/backoffice/style";
import { UmbCollectionBulkActionPermissionCondition as oi } from "../collection-bulk-action-permission.condition-C86XgYah.js";
import { UmbCollectionAliasCondition as ai } from "../collection-alias.condition-BoV08hPp.js";
import { a as ci, b as hi, U as ui } from "../collection-action-button.element-TmHU9Eph.js";
import { UmbPickerContext as ne } from "@umbraco-cms/backoffice/picker";
import { UmbCollectionWorkspaceViewElement as _i, UmbCollectionWorkspaceViewElement as mi } from "../collection-workspace-view.element-BSGEziPX.js";
class oe extends ft {
  constructor(e) {
    super(e), this.#t = new T([], (i) => i.alias), this.views = this.#t.asObservable(), this.#e = new G(void 0), this.currentView = this.#e.asObservable(), this.#i = new T([], (i) => i.path), this.routes = this.#i.asObservable(), this.#s = new kt(""), this.rootPathName = this.#s.asObservable(), setTimeout(() => {
      const i = new URL(window.location.href);
      this.#s.setValue(i.pathname.substring(0, i.pathname.lastIndexOf("/")));
    }, 100);
  }
  #t;
  #e;
  #i;
  #s;
  #n;
  setConfig(e) {
    this.#n = e.defaultViewAlias, this.#o(e.manifestFilter);
  }
  // Views
  /**
   * Sets the current view.
   * @param {ManifestCollectionView} view
   * @memberof UmbCollectionContext
   */
  setCurrentView(e) {
    this.#e.setValue(e);
  }
  /**
   * Returns the current view.
   * @returns {ManifestCollectionView}
   * @memberof UmbCollectionContext
   */
  getCurrentView() {
    return this.#e.getValue();
  }
  #o(e) {
    return new Bt(
      this,
      st,
      "collectionView",
      e ?? null,
      (i) => {
        const n = i.map((s) => s.manifest);
        this.#t.setValue(n), this.#r(n);
      }
    );
  }
  #r(e) {
    let i = [];
    if (e && e.length > 0) {
      const s = e.find((o) => o.alias === this.#n) ?? e[0];
      i = e.map((o) => ({
        path: `${o.meta.pathName}`,
        component: () => ut(o),
        setup: () => {
          this.setCurrentView(o);
        }
      })), i.length > 0 && i.push({
        unique: s.alias,
        path: "",
        component: () => ut(s),
        setup: () => {
          this.setCurrentView(s);
        }
      }), i.push({
        path: "**",
        component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
      });
    }
    this.#i.setValue(i);
  }
}
const k = "umb-collection-view";
class re extends zt {
  constructor(e, i, n = {}) {
    super(e, O), this.#t = { pageSize: 50 }, this._loading = new G(!1), this.loading = this._loading.asObservable(), this._items = new T([], (s) => s.unique), this.items = this._items.asObservable(), this._totalItems = new Ft(0), this.totalItems = this._totalItems.asObservable(), this._filter = new G({}), this.filter = this._filter.asObservable(), this.#e = new Yt(void 0), this.workspacePathBuilder = this.#e.asObservable(), this.#i = new T([], (s) => s.alias), this.userDefinedProperties = this.#i.asObservable(), this.#s = new T([], (s) => s.collectionView), this.viewLayouts = this.#s.asObservable(), this.pagination = new Xt(), this.selection = new Jt(this), this.view = new oe(this), this.#c = !1, this._init = new Promise((s) => {
      this.#c ? s() : this.#r = s;
    }), this._configured = !1, this.#p = (s) => {
      const r = { skip: s.target.getSkip() };
      this.setFilter(r);
    }, this.#a = (s) => {
      this._items.getValue().some((B) => B.unique === s.getUnique()) && this.requestCollection();
    }, this.#l = async (s) => {
      const o = await this.getContext(vt), r = o.getUnique(), B = o.getEntityType();
      r === s.getUnique() && B === s.getEntityType() && this.requestCollection();
    }, this.#n = i, this.#o = n, this.pagination.addEventListener(Gt.TYPE, this.#p), this.#_();
  }
  #t;
  #e;
  #i;
  #s;
  #n;
  #o;
  #r;
  #c;
  #h;
  setupView(e) {
    new te(e, Qt).addAdditionalPath("entity/:entityType").onSetup((i) => ({ data: { entityType: i.entityType, preset: {} } })).onReject(() => {
      this.requestCollection();
    }).onSubmit(() => {
      this.requestCollection();
    }).observeRouteBuilder((i) => {
      this.#e.setValue(i);
    });
  }
  async #_() {
    this.consumeContext(Ht, (e) => {
      this.#h = e, e?.removeEventListener(
        q.TYPE,
        this.#a
      ), e?.removeEventListener(
        W.TYPE,
        this.#l
      ), e?.addEventListener(
        q.TYPE,
        this.#a
      ), e?.addEventListener(
        W.TYPE,
        this.#l
      );
    });
  }
  _configure() {
    if (!this.#t) return;
    this.selection.setMultiple(!0), this.#t.pageSize && this.pagination.setPageSize(this.#t.pageSize);
    const e = this._filter.getValue();
    this._filter.setValue({
      ...this.#o,
      ...this.#t,
      ...e,
      skip: e.skip ?? 0,
      take: this.#t.pageSize
    }), this.#i.setValue(this.#t?.userDefinedProperties ?? []);
    const i = { defaultViewAlias: this.#n };
    if (this.#t.layouts && this.#t.layouts.length > 0) {
      this.#s.setValue(this.#t.layouts);
      const n = this.#t.layouts.map((s) => s.collectionView);
      i.manifestFilter = (s) => n.includes(s.alias);
    }
    this.view.setConfig(i), this._configured = !0;
  }
  #m() {
    this._repository && (this.#c = !0, this.#r?.());
  }
  #u(e) {
    if (!e) throw new Error("Tree must have a repository alias.");
    new qt(
      this,
      st,
      e,
      [this._host],
      (i, n) => {
        this._repository = i ? n.api : void 0, this.#m();
      }
    );
  }
  #p;
  /**
   * Sets the configuration for the collection.
   * @param {UmbCollectionConfiguration} config
   * @memberof UmbCollectionContext
   */
  setConfig(e) {
    this.#t = e;
  }
  getConfig() {
    return this.#t;
  }
  set manifest(e) {
    this._manifest !== e && (this._manifest = e, this.#u(this._manifest?.meta.repositoryAlias));
  }
  get manifest() {
    return this._manifest;
  }
  /**
   * Requests the collection from the repository.
   * @returns {*}
   * @memberof UmbCollectionContext
   */
  async requestCollection() {
    if (await this._init, this._configured || this._configure(), !this._repository) throw new Error(`Missing repository for ${this._manifest}`);
    this._loading.setValue(!0);
    const e = this._filter.getValue(), { data: i } = await this._repository.requestCollection(e);
    i && (this._items.setValue(i.items), this._totalItems.setValue(i.total), this.pagination.setTotalItems(i.total)), this._loading.setValue(!1);
  }
  /**
   * Sets the filter for the collection and refreshes the collection.
   * @param {Partial<FilterModelType>} filter
   * @memberof UmbCollectionContext
   */
  setFilter(e) {
    this._filter.setValue({ ...this._filter.getValue(), ...e }), this.requestCollection();
  }
  getLastSelectedView(e) {
    if (!e) return;
    const i = JSON.parse(localStorage.getItem(k) ?? "{}") ?? {};
    if (i)
      return i[e];
  }
  setLastSelectedView(e, i) {
    if (!e) return;
    const n = JSON.parse(localStorage.getItem(k) ?? "{}") ?? {};
    n && (n[e] = i, localStorage.setItem(k, JSON.stringify(n)));
  }
  #a;
  #l;
  destroy() {
    this.#h?.removeEventListener(
      q.TYPE,
      this.#a
    ), this.#h?.removeEventListener(
      W.TYPE,
      this.#l
    ), super.destroy();
  }
  /**
   * Sets the manifest for the collection.
   * @param {ManifestCollection} manifest
   * @memberof UmbCollectionContext
   * @deprecated Use set the `.manifest` property instead.
   */
  setManifest(e) {
    this._manifest !== e && (this._manifest = e, this._manifest && this.#u(this._manifest.meta.repositoryAlias));
  }
  /**
   * Returns the manifest for the collection.
   * @returns {ManifestCollection}
   * @memberof UmbCollectionContext
   * @deprecated Use get the `.manifest` property instead.
   */
  getManifest() {
    return this._manifest;
  }
  /**
   * Returns the items in the collection.
   * @returns {Array<CollectionItemType>} - The items in the collection.
   */
  getItems() {
    return this._items.getValue();
  }
}
var ae = Object.defineProperty, le = Object.getOwnPropertyDescriptor, dt = (t) => {
  throw TypeError(t);
}, z = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? le(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (s = (n ? r(e, i, s) : r(s)) || s);
  return n && s && ae(e, i, s), s;
}, nt = (t, e, i) => e.has(t) || dt("Cannot " + i), U = (t, e, i) => (nt(t, e, "read from private field"), i ? i.call(t) : e.get(t)), pt = (t, e, i) => e.has(t) ? dt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), ce = (t, e, i, n) => (nt(t, e, "write to private field"), e.set(t, i), i), A = (t, e, i) => (nt(t, e, "access private method"), i), p, d, bt, gt, Ct, wt;
const he = {
  type: "kind",
  alias: "Umb.Kind.Collection.Default",
  matchKind: "default",
  matchType: "collection",
  manifest: {
    type: "collection",
    kind: "default",
    elementName: "umb-collection-default",
    api: re
  }
};
st.register(he);
let y = class extends h {
  constructor() {
    super(), pt(this, d), this._routes = [], this._hasItems = !1, this._isDoneLoading = !1, pt(this, p), this.consumeContext(O, async (t) => {
      ce(this, p, t), A(this, d, bt).call(this), A(this, d, gt).call(this), await U(this, p)?.requestCollection(), this._isDoneLoading = !0;
    });
  }
  render() {
    return this._routes ? a`
					<umb-body-layout header-transparent class=${this._hasItems ? "has-items" : ""}>
						<umb-router-slot id="router" .routes=${this._routes}></umb-router-slot>
						${this.renderToolbar()} ${this._hasItems ? A(this, d, Ct).call(this) : A(this, d, wt).call(this)}
					</umb-body-layout>
				` : _;
  }
  renderToolbar() {
    return a`<umb-collection-toolbar slot="header"></umb-collection-toolbar>`;
  }
  renderPagination() {
    return a`<umb-collection-pagination></umb-collection-pagination>`;
  }
  renderSelectionActions() {
    return a`<umb-collection-selection-actions slot="footer"></umb-collection-selection-actions>`;
  }
};
p = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
bt = function() {
  U(this, p) && this.observe(
    U(this, p).view.routes,
    (t) => {
      this._routes = t;
    },
    "umbCollectionRoutesObserver"
  );
};
gt = function() {
  U(this, p) && this.observe(
    U(this, p).totalItems,
    (t) => {
      this._hasItems = t > 0;
    },
    "umbCollectionTotalItemsObserver"
  );
};
Ct = function() {
  return a` ${this.renderPagination()} ${this.renderSelectionActions()} `;
};
wt = function() {
  return this._isDoneLoading ? a` <div id="empty-state" class="uui-text">
			<h4><umb-localize key="collection_noItemsTitle"></umb-localize></h4>
		</div>` : _;
};
y.styles = [
  V,
  v`
			:host {
				display: flex;
				flex-direction: column;
				box-sizing: border-box;
				gap: var(--uui-size-space-5);
				height: 100%;
			}

			#router {
				visibility: hidden;
			}

			.has-items #router {
				visibility: visible;
			}

			#empty-state {
				height: 80%;
				align-content: center;
				text-align: center;
			}

			router-slot {
				width: 100%;
				height: 100%;
			}
		`
];
z([
  l()
], y.prototype, "_routes", 2);
z([
  l()
], y.prototype, "_hasItems", 2);
z([
  l()
], y.prototype, "_isDoneLoading", 2);
y = z([
  c("umb-collection-default")
], y);
var ue = Object.defineProperty, pe = Object.getOwnPropertyDescriptor, yt = (t) => {
  throw TypeError(t);
}, ot = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? pe(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (s = (n ? r(e, i, s) : r(s)) || s);
  return n && s && ue(e, i, s), s;
}, rt = (t, e, i) => e.has(t) || yt("Cannot " + i), E = (t, e, i) => (rt(t, e, "read from private field"), i ? i.call(t) : e.get(t)), F = (t, e, i) => e.has(t) ? yt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), _t = (t, e, i, n) => (rt(t, e, "write to private field"), e.set(t, i), i), D = (t, e, i) => (rt(t, e, "access private method"), i), g, C, b, X, J;
const _e = "umb-collection";
let M = class extends Wt {
  constructor() {
    super(...arguments), F(this, b), F(this, g), F(this, C);
  }
  getExtensionType() {
    return "collection";
  }
  getDefaultElementName() {
    return "umb-collection-default";
  }
  set config(t) {
    _t(this, g, t), D(this, b, X).call(this);
  }
  get config() {
    return E(this, g);
  }
  set filter(t) {
    _t(this, C, t), D(this, b, J).call(this);
  }
  get filter() {
    return E(this, C);
  }
  apiChanged(t) {
    super.apiChanged(t), D(this, b, X).call(this), D(this, b, J).call(this);
  }
};
g = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakSet();
X = function() {
  !E(this, g) || !this._api || this._api.setConfig(E(this, g));
};
J = function() {
  !E(this, C) || !this._api || this._api.setFilter(E(this, C));
};
ot([
  R({ type: Object, attribute: !1 })
], M.prototype, "config", 1);
ot([
  R({ type: Object, attribute: !1 })
], M.prototype, "filter", 1);
M = ot([
  c(_e)
], M);
var me = Object.defineProperty, fe = Object.getOwnPropertyDescriptor, Et = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? fe(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (s = (n ? r(e, i, s) : r(s)) || s);
  return n && s && me(e, i, s), s;
};
let j = class extends h {
  constructor() {
    super(...arguments), this.value = !1;
  }
  render() {
    return this.value ? a`<uui-icon name="icon-check"></uui-icon>` : _;
  }
};
Et([
  R({ attribute: !1 })
], j.prototype, "value", 2);
j = Et([
  c("umb-boolean-table-column-view")
], j);
var ve = Object.defineProperty, de = Object.getOwnPropertyDescriptor, Ot = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? de(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (s = (n ? r(e, i, s) : r(s)) || s);
  return n && s && ve(e, i, s), s;
};
let H = class extends h {
  render() {
    if (!this.value) return _;
    const t = new Date(this.value);
    return a`${t.toLocaleString()}`;
  }
};
Ot([
  R({ attribute: !1 })
], H.prototype, "value", 2);
H = Ot([
  c("umb-date-table-column-view")
], H);
var be = Object.getOwnPropertyDescriptor, ge = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? be(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (s = r(s) || s);
  return s;
};
let Q = class extends h {
  render() {
    return a`<umb-extension-slot type="collectionAction"></umb-extension-slot>`;
  }
};
Q.styles = [
  v`
			:host {
				display: contents;
			}
		`
];
Q = ge([
  c("umb-collection-action-bundle")
], Q);
var Ce = Object.getOwnPropertyDescriptor, Pt = (t) => {
  throw TypeError(t);
}, we = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? Ce(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (s = r(s) || s);
  return s;
}, at = (t, e, i) => e.has(t) || Pt("Cannot " + i), $t = (t, e, i) => (at(t, e, "read from private field"), i ? i.call(t) : e.get(t)), Y = (t, e, i) => e.has(t) ? Pt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), ye = (t, e, i, n) => (at(t, e, "write to private field"), e.set(t, i), i), Ee = (t, e, i) => (at(t, e, "access private method"), i), N, lt, Z, xt;
let tt = class extends h {
  constructor() {
    super(), Y(this, Z), Y(this, N), Y(this, lt, jt((t) => $t(this, N)?.setFilter({ filter: t }), 500)), this.consumeContext(O, (t) => {
      ye(this, N, t);
    });
  }
  render() {
    return a`
			<uui-input
				label=${this.localize.term("general_search")}
				placeholder=${this.localize.term("placeholders_search")}
				@input=${Ee(this, Z, xt)}></uui-input>
		`;
  }
};
N = /* @__PURE__ */ new WeakMap();
lt = /* @__PURE__ */ new WeakMap();
Z = /* @__PURE__ */ new WeakSet();
xt = function(t) {
  const e = t.target.value ?? "";
  $t(this, lt).call(this, e);
};
tt.styles = [
  v`
			uui-input {
				display: block;
			}
		`
];
tt = we([
  c("umb-collection-filter-field")
], tt);
var Oe = Object.defineProperty, Pe = Object.getOwnPropertyDescriptor, Tt = (t) => {
  throw TypeError(t);
}, I = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? Pe(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (s = (n ? r(e, i, s) : r(s)) || s);
  return n && s && Oe(e, i, s), s;
}, $e = (t, e, i) => e.has(t) || Tt("Cannot " + i), xe = (t, e, i) => e.has(t) ? Tt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Te = (t, e, i) => ($e(t, e, "access private method"), i), et, Ut;
function Ue(t, e) {
  return [{ entityType: t, meta: e.meta }];
}
let f = class extends h {
  constructor() {
    super(), xe(this, et), this._totalItems = 0, this._selectionLength = 0, this._apiProps = {}, this._selection = [], this.consumeContext(O, (t) => {
      this._collectionContext = t, this._observeCollectionContext();
    }), this.consumeContext(vt, (t) => {
      this._entityType = t.getEntityType();
    });
  }
  _handleKeyDown(t) {
    t.key === "Enter" && this._handleClearSelection();
  }
  _handleClearSelection() {
    this._collectionContext?.selection.clearSelection();
  }
  _observeCollectionContext() {
    this._collectionContext && (this.observe(
      this._collectionContext.totalItems,
      (t) => {
        this._totalItems = t;
      },
      "umbTotalItemsObserver"
    ), this.observe(
      this._collectionContext.selection.selection,
      (t) => {
        this._selectionLength = t.length, this._selection = t, this._apiProps = { selection: this._selection };
      },
      "umbSelectionObserver"
    ));
  }
  _renderSelectionCount() {
    return a`<div>${this._selectionLength} of ${this._totalItems} selected</div>`;
  }
  render() {
    return this._selectionLength === 0 ? _ : a`
			<div id="container">
				<div id="selection-info">
					<uui-button
						@click=${this._handleClearSelection}
						@keydown=${this._handleKeyDown}
						label=${this.localize.term("buttons_clearSelection")}
						look="secondary"></uui-button>
					${this._renderSelectionCount()}
				</div>

				<umb-extension-with-api-slot
					id="actions"
					type="entityBulkAction"
					default-element="umb-entity-bulk-action"
					.apiProps=${this._apiProps}
					.apiArgs=${(t) => Ue(this._entityType, t)}
					@action-executed=${Te(this, et, Ut)}>
				</umb-extension-with-api-slot>
			</div>
		`;
  }
};
et = /* @__PURE__ */ new WeakSet();
Ut = function(t) {
  t.stopPropagation(), this._collectionContext?.selection.clearSelection();
};
f.styles = [
  V,
  v`
			:host {
				width: 100%;
				margin-right: calc(
					-1 * var(--uui-size-space-6)
				); // compensate for the padding on the container. TODO: make a better solution
			}

			#container {
				display: flex;
				gap: var(--uui-size-3);
				width: 100%;
				padding: var(--uui-size-space-4) var(--uui-size-space-6);
				background-color: var(--uui-color-selected);
				color: var(--uui-color-selected-contrast);
				align-items: center;
				box-sizing: border-box;
				justify-content: space-between;
			}
			#selection-info,
			#actions {
				display: flex;
				align-items: center;
				box-sizing: border-box;
				gap: var(--uui-size-3);
			}
		`
];
I([
  l()
], f.prototype, "_entityType", 2);
I([
  l()
], f.prototype, "_totalItems", 2);
I([
  l()
], f.prototype, "_selectionLength", 2);
I([
  l()
], f.prototype, "_apiProps", 2);
f = I([
  c("umb-collection-selection-actions")
], f);
var Se = Object.getOwnPropertyDescriptor, Ve = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? Se(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (s = r(s) || s);
  return s;
};
let it = class extends h {
  render() {
    return a`
			<umb-collection-action-bundle></umb-collection-action-bundle>
			<div id="slot"><slot></slot></div>
			<umb-collection-view-bundle></umb-collection-view-bundle>
		`;
  }
};
it.styles = [
  V,
  v`
			:host {
				display: flex;
				gap: var(--uui-size-space-5);
				justify-content: space-between;
				width: 100%;
			}
			#slot {
				flex: 1;
			}
		`
];
it = Ve([
  c("umb-collection-toolbar")
], it);
var Ie = Object.defineProperty, Ae = Object.getOwnPropertyDescriptor, St = (t) => {
  throw TypeError(t);
}, P = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? Ae(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (s = (n ? r(e, i, s) : r(s)) || s);
  return n && s && Ie(e, i, s), s;
}, ct = (t, e, i) => e.has(t) || St("Cannot " + i), $ = (t, e, i) => (ct(t, e, "read from private field"), e.get(t)), mt = (t, e, i) => e.has(t) ? St("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), De = (t, e, i, n) => (ct(t, e, "write to private field"), e.set(t, i), i), L = (t, e, i) => (ct(t, e, "access private method"), i), u, w, Vt, It, At, Dt;
let m = class extends h {
  constructor() {
    super(), mt(this, w), this._views = [], mt(this, u), this.consumeContext(ee, (t) => {
      this.observe(t.activePath, (e) => {
        this._collectionRootPathName = e;
      });
    }), this.consumeContext(O, (t) => {
      De(this, u, t), L(this, w, Vt).call(this);
    }), this.consumeContext(Zt, (t) => {
      this._entityUnique = t.getUnique() ?? "";
    });
  }
  render() {
    return this._currentView ? this._views.length <= 1 ? _ : a`
			<uui-button compact popovertarget="collection-view-bundle-popover" label="status">
				<umb-icon name=${this._currentView.icon}></umb-icon>
			</uui-button>
			<uui-popover-container id="collection-view-bundle-popover" placement="bottom-end">
				<umb-popover-layout>
					<div class="filter-dropdown">
						${se(
      this._views,
      (t) => t.alias,
      (t) => L(this, w, Dt).call(this, t)
    )}
					</div>
				</umb-popover-layout>
			</uui-popover-container>
		` : _;
  }
};
u = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakSet();
Vt = function() {
  $(this, u) && (this.observe(
    $(this, u).view.currentView,
    (t) => {
      t && (this._currentView = this._views.find((e) => e.alias === t.alias));
    },
    "umbCurrentCollectionViewObserver"
  ), this.observe(
    Kt([$(this, u).view.views, $(this, u).viewLayouts]),
    ([t, e]) => {
      !t?.length && !e?.length || (this._views = L(this, w, It).call(this, t, e));
    },
    "umbCollectionViewsAndLayoutsObserver"
  ));
};
It = function(t, e) {
  if (e.length > 0) {
    const i = [];
    return e.forEach((n) => {
      const s = t.find((o) => o.alias === n.collectionView);
      s && i.push({
        alias: s.alias,
        label: n.name ?? s.meta.label,
        icon: n.icon ?? s.meta.icon,
        pathName: s.meta.pathName
      });
    }), i;
  }
  return t.map((i) => ({
    alias: i.alias,
    label: i.meta.label,
    icon: i.meta.icon,
    pathName: i.meta.pathName
  }));
};
At = function(t) {
  $(this, u)?.setLastSelectedView(this._entityUnique, t.alias), setTimeout(() => {
    this._popover?.hidePopover();
  }, 100);
};
Dt = function(t) {
  return a`
			<uui-menu-item
				label=${t.label}
				href="${this._collectionRootPathName}/${t.pathName}"
				@click-label=${() => L(this, w, At).call(this, t)}
				?active=${t.alias === this._currentView?.alias}>
				<umb-icon slot="icon" name=${t.icon}></umb-icon>
			</uui-menu-item>
		`;
};
m.styles = [
  V,
  v`
			:host {
				--uui-button-content-align: left;
				--uui-menu-item-flat-structure: 1;
				display: contents;
			}

			.filter-dropdown {
				padding: var(--uui-size-space-3);
			}
		`
];
P([
  l()
], m.prototype, "_views", 2);
P([
  l()
], m.prototype, "_currentView", 2);
P([
  l()
], m.prototype, "_collectionRootPathName", 2);
P([
  l()
], m.prototype, "_entityUnique", 2);
P([
  ie("#collection-view-bundle-popover")
], m.prototype, "_popover", 2);
m = P([
  c("umb-collection-view-bundle")
], m);
var Ne = Object.defineProperty, Me = Object.getOwnPropertyDescriptor, Nt = (t) => {
  throw TypeError(t);
}, ht = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? Me(e, i) : e, o = t.length - 1, r; o >= 0; o--)
    (r = t[o]) && (s = (n ? r(e, i, s) : r(s)) || s);
  return n && s && Ne(e, i, s), s;
}, Le = (t, e, i) => e.has(t) || Nt("Cannot " + i), Re = (t, e, i) => e.has(t) ? Nt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), K = (t, e, i) => (Le(t, e, "access private method"), i), x, Mt, Lt, Rt;
let S = class extends h {
  constructor() {
    super(), Re(this, x), this._totalPages = 1, this._currentPage = 1, this.consumeContext(O, (t) => {
      this._collectionContext = t, K(this, x, Mt).call(this), K(this, x, Lt).call(this);
    });
  }
  render() {
    return this._totalPages <= 1 ? _ : a`<uui-pagination
			.current=${this._currentPage}
			.total=${this._totalPages}
			@change=${K(this, x, Rt)}></uui-pagination>`;
  }
};
x = /* @__PURE__ */ new WeakSet();
Mt = function() {
  this.observe(
    this._collectionContext.pagination.currentPage,
    (t) => {
      this._currentPage = t;
    },
    "umbCurrentPageObserver"
  );
};
Lt = function() {
  this.observe(
    this._collectionContext.pagination.totalPages,
    (t) => {
      this._totalPages = t;
    },
    "umbTotalPagesObserver"
  );
};
Rt = function(t) {
  this._collectionContext?.pagination.setCurrentPageNumber(t.target.current);
};
S.styles = [
  V,
  v`
			:host {
				display: contents;
			}

			uui-pagination {
				display: block;
				margin-top: var(--uui-size-layout-1);
			}
		`
];
ht([
  l()
], S.prototype, "_totalPages", 2);
ht([
  l()
], S.prototype, "_currentPage", 2);
S = ht([
  c("umb-collection-pagination")
], S);
class ei extends ne {
  constructor(e) {
    super(e);
  }
}
class ii extends ft {
}
export {
  ci as UMB_COLLECTION_ALIAS_CONDITION,
  hi as UMB_COLLECTION_BULK_ACTION_PERMISSION_CONDITION,
  O as UMB_COLLECTION_CONTEXT,
  ii as UmbCollectionActionBase,
  Q as UmbCollectionActionBundleElement,
  ui as UmbCollectionActionElement,
  ai as UmbCollectionAliasCondition,
  oi as UmbCollectionBulkActionPermissionCondition,
  y as UmbCollectionDefaultElement,
  M as UmbCollectionElement,
  tt as UmbCollectionFilterFieldElement,
  ei as UmbCollectionItemPickerContext,
  S as UmbCollectionPaginationElement,
  f as UmbCollectionSelectionActionsElement,
  it as UmbCollectionToolbarElement,
  m as UmbCollectionViewBundleElement,
  _i as UmbCollectionWorkspaceViewElement,
  re as UmbDefaultCollectionContext,
  ei as api,
  mi as element
};
//# sourceMappingURL=index.js.map
