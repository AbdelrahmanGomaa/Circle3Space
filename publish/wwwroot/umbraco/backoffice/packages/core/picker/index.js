import { a as g } from "../picker-search-result-item-element-base-vg8p90Ra.js";
import { U as le } from "../picker-search-result-item-element-base-vg8p90Ra.js";
import { U as pe, a as _e } from "../default-picker-search-result-item.context-7tVujM-8.js";
import { UmbControllerBase as T, UmbContextBase as R } from "@umbraco-cms/backoffice/class-api";
import { createExtensionApiByAlias as M } from "@umbraco-cms/backoffice/extension-registry";
import { UmbBooleanState as E, UmbObjectState as A, UmbArrayState as B, UmbNumberState as N } from "@umbraco-cms/backoffice/observable-api";
import { debounce as Q, UmbSelectionManager as W } from "@umbraco-cms/backoffice/utils";
import { css as D, state as l, customElement as U, nothing as b, html as c, repeat as F } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as P } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as z } from "@umbraco-cms/backoffice/style";
class G extends T {
  /**
   * Creates an instance of UmbPickerSearchManager.
   * @param {UmbControllerHost} host The controller host for the search manager.
   * @memberof UmbPickerSearchManager
   */
  constructor(e) {
    super(e), this.#s = new E(!1), this.searchable = this.#s.asObservable(), this.#e = new A(void 0), this.query = this.#e.asObservable(), this.#t = new E(!1), this.searching = this.#t.asObservable(), this.#i = new B([], (r) => r.unique), this.resultItems = this.#i.asObservable(), this.#a = new N(0), this.resultTotalItems = this.#a.asObservable(), this.#n = Q(this.#c, 300);
  }
  #s;
  #e;
  #t;
  #i;
  #a;
  #r;
  #h;
  /**
   * Set the configuration for the search manager.
   * @param {UmbPickerSearchManagerConfig} config The configuration for the search manager.
   * @memberof UmbPickerSearchManager
   */
  setConfig(e) {
    this.#r = e, this.#o();
  }
  /**
   * Get the current configuration for the search manager.
   * @returns {UmbPickerSearchManagerConfig | undefined} The current configuration for the search manager.
   * @memberof UmbPickerSearchManager
   */
  getConfig() {
    return this.#r;
  }
  /**
   * Update the current configuration for the search manager.
   * @param {Partial<UmbPickerSearchManagerConfig>} partialConfig
   * @memberof UmbPickerSearchManager
   */
  updateConfig(e) {
    const r = { ...this.#r, ...e };
    this.setConfig(r);
  }
  /**
   * Returns whether items can be searched.
   * @returns {boolean} Whether items can be searched.
   * @memberof UmbPickerSearchManager
   */
  getSearchable() {
    return this.#s.getValue();
  }
  /**
   * Sets whether items can be searched.
   * @param {boolean} value Whether items can be searched.
   * @memberof UmbPickerSearchManager
   */
  setSearchable(e) {
    this.#s.setValue(e);
  }
  /**
   * Search for items based on the current query.
   * @memberof UmbPickerSearchManager
   */
  search() {
    if (this.getSearchable() === !1) throw new Error("Search is not enabled");
    if (!this.#e.getValue()?.query) {
      this.clear();
      return;
    }
    this.#t.setValue(!0), this.#n();
  }
  /**
   * Clear the current search query and result items.
   * @memberof UmbPickerSearchManager
   */
  clear() {
    this.#e.setValue(void 0), this.#i.setValue([]), this.#t.setValue(!1), this.#a.setValue(0);
  }
  /**
   * Set the search query.
   * @param {SearchRequestArgsType} query The search query.
   * @memberof UmbPickerSearchManager
   */
  setQuery(e) {
    if (!this.query) {
      this.clear();
      return;
    }
    this.#e.setValue(e);
  }
  /**
   * Get the current search query.
   * @memberof UmbPickerSearchManager
   * @returns {SearchRequestArgsType | undefined} The current search query.
   */
  getQuery() {
    return this.#e.getValue();
  }
  /**
   * Update the current search query.
   * @param {Partial<SearchRequestArgsType>} query
   * @memberof UmbPickerSearchManager
   */
  updateQuery(e) {
    const r = { ...this.getQuery(), ...e };
    this.#e.setValue(r);
  }
  async #o() {
    const e = this.#r?.providerAlias;
    if (!e)
      throw this.setSearchable(!1), new Error("No search provider alias provided");
    if (this.#h = await M(this, e), !this.#h)
      throw this.setSearchable(!1), new Error(`Search Provider with alias ${e} is not available`);
    this.setSearchable(!0);
  }
  #n;
  async #c() {
    if (this.getSearchable() === !1) throw new Error("Search is not enabled");
    if (!this.#h) throw new Error("Search provider is not available");
    const e = this.#e.getValue();
    if (!e) throw new Error("No query provided");
    if (!e.query) {
      this.clear();
      return;
    }
    const r = {
      searchFrom: this.#r?.searchFrom,
      ...e
    }, { data: i } = await this.#h.search(r), s = i?.items ?? [];
    this.#i.setValue(s), this.#a.setValue(i?.total ?? 0), this.#t.setValue(!1);
  }
}
var K = Object.defineProperty, L = Object.getOwnPropertyDescriptor, $ = (t) => {
  throw TypeError(t);
}, f = (t, e, r, i) => {
  for (var s = i > 1 ? void 0 : i ? L(e, r) : e, h = t.length - 1, n; h >= 0; h--)
    (n = t[h]) && (s = (i ? n(e, r, s) : n(s)) || s);
  return i && s && K(e, r, s), s;
}, S = (t, e, r) => e.has(t) || $("Cannot " + r), u = (t, e, r) => (S(t, e, "read from private field"), r ? r.call(t) : e.get(t)), q = (t, e, r) => e.has(t) ? $("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), X = (t, e, r, i) => (S(t, e, "write to private field"), e.set(t, r), r), H = (t, e, r) => (S(t, e, "access private method"), r), a, y, O;
let p = class extends P {
  constructor() {
    super(), q(this, y), this._query = "", this._searching = !1, this._isSearchable = !1, q(this, a), this.consumeContext(g, (t) => {
      X(this, a, t), this.observe(u(this, a).search.searchable, (e) => this._isSearchable = e), this.observe(u(this, a).search.searching, (e) => this._searching = e), this.observe(u(this, a).search.query, (e) => this._query = e?.query || "");
    });
  }
  render() {
    return this._isSearchable ? c`
			<uui-input .value=${this._query} placeholder="Search..." @input=${H(this, y, O)}>
				<div slot="prepend">
					${this._searching ? c`<uui-loader-circle id="searching-indicator"></uui-loader-circle>` : c`<uui-icon name="search"></uui-icon>`}
				</div>

				${this._query ? c`
							<uui-button slot="append" type="button" @click=${() => u(this, a)?.search.clear()} compact>
								<uui-icon name="icon-delete"></uui-icon>
							</uui-button>
						` : b}
			</uui-input>
			<div id="divider"></div>
		` : b;
  }
};
a = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakSet();
O = function(t) {
  const e = t.target.value;
  u(this, a)?.search.updateQuery({ query: e }), u(this, a)?.search.search();
};
p.styles = [
  z,
  D`
			uui-input {
				width: 100%;
			}

			uui-input [slot='prepend'] {
				display: flex;
				align-items: center;
			}

			#divider {
				width: 100%;
				height: 1px;
				background-color: var(--uui-color-divider);
				margin-top: var(--uui-size-space-5);
				margin-bottom: var(--uui-size-space-3);
			}

			#searching-indicator {
				margin-left: 7px;
				margin-top: 4px;
			}
		`
];
f([
  l()
], p.prototype, "_query", 2);
f([
  l()
], p.prototype, "_searching", 2);
f([
  l()
], p.prototype, "_isSearchable", 2);
p = f([
  U("umb-picker-search-field")
], p);
var J = Object.defineProperty, Y = Object.getOwnPropertyDescriptor, V = (t) => {
  throw TypeError(t);
}, d = (t, e, r, i) => {
  for (var s = i > 1 ? void 0 : i ? Y(e, r) : e, h = t.length - 1, n; h >= 0; h--)
    (n = t[h]) && (s = (i ? n(e, r, s) : n(s)) || s);
  return i && s && J(e, r, s), s;
}, w = (t, e, r) => e.has(t) || V("Cannot " + r), v = (t, e, r) => (w(t, e, "read from private field"), r ? r.call(t) : e.get(t)), C = (t, e, r) => e.has(t) ? V("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Z = (t, e, r, i) => (w(t, e, "write to private field"), e.set(t, r), r), x = (t, e, r) => (w(t, e, "access private method"), r), o, m, k, I;
let _ = class extends P {
  constructor() {
    super(), C(this, m), this._searching = !1, this._items = [], this._isSearchable = !1, C(this, o), this.consumeContext(g, (t) => {
      Z(this, o, t), this.observe(v(this, o).search.searchable, (e) => this._isSearchable = e), this.observe(v(this, o).search.query, (e) => this._query = e), this.observe(v(this, o).search.searching, (e) => this._searching = e), this.observe(v(this, o).search.resultItems, (e) => this._items = e);
    });
  }
  render() {
    return this._isSearchable ? this._query?.query && this._searching === !1 && this._items.length === 0 ? x(this, m, k).call(this) : c`
			${F(
      this._items,
      (t) => t.unique,
      (t) => x(this, m, I).call(this, t)
    )}
		` : b;
  }
};
o = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
k = function() {
  return c`<small>No result for <strong>"${this._query?.query}"</strong>.</small>`;
};
I = function(t) {
  return c`
			<umb-extension-with-api-slot
				type="pickerSearchResultItem"
				.filter=${(e) => e.forEntityTypes.includes(t.entityType)}
				.elementProps=${{ item: t }}></umb-extension-with-api-slot>
		`;
};
d([
  l()
], _.prototype, "_query", 2);
d([
  l()
], _.prototype, "_searching", 2);
d([
  l()
], _.prototype, "_items", 2);
d([
  l()
], _.prototype, "_isSearchable", 2);
_ = d([
  U("umb-picker-search-result")
], _);
class ne extends R {
  constructor(e) {
    super(e, g), this.selection = new W(this), this.search = new G(this);
  }
}
export {
  g as UMB_PICKER_CONTEXT,
  pe as UMB_PICKER_SEARCH_RESULT_ITEM_CONTEXT,
  _e as UmbDefaultPickerSearchResultItemContext,
  ne as UmbPickerContext,
  p as UmbPickerSearchFieldElement,
  G as UmbPickerSearchManager,
  _ as UmbPickerSearchResultElement,
  le as UmbPickerSearchResultItemElementBase
};
//# sourceMappingURL=index.js.map
