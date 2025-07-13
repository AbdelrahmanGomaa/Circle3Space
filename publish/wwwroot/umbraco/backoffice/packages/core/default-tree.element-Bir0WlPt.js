import { U as P } from "./default-tree.context-token-C7a9fWg9.js";
import { css as O, property as n, state as _, customElement as w, html as u, nothing as b, repeat as I } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as $ } from "@umbraco-cms/backoffice/lit-element";
var S = Object.defineProperty, A = Object.getOwnPropertyDescriptor, R = (t) => {
  throw TypeError(t);
}, a = (t, e, r, h) => {
  for (var l = h > 1 ? void 0 : h ? A(e, r) : e, d = t.length - 1, m; d >= 0; d--)
    (m = t[d]) && (l = (h ? m(e, r, l) : m(l)) || l);
  return h && l && S(e, r, l), l;
}, T = (t, e, r) => e.has(t) || R("Cannot " + r), s = (t, e, r) => (T(t, e, "read from private field"), r ? r.call(t) : e.get(t)), f = (t, e, r) => e.has(t) ? R("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), v = (t, e, r, h) => (T(t, e, "write to private field"), e.set(t, r), r), y = (t, e, r) => (T(t, e, "access private method"), r), i, c, p, C, x, g, E;
let o = class extends $ {
  constructor() {
    super(), f(this, p), this._selectionConfiguration = {
      multiple: !1,
      selectable: !0,
      selection: []
    }, this.selectionConfiguration = this._selectionConfiguration, this.hideTreeItemActions = !1, this.hideTreeRoot = !1, this.expandTreeRoot = !1, this.foldersOnly = !1, this.selectableFilter = () => !0, this.filter = () => !0, this.expansion = [], this._rootItems = [], this._currentPage = 1, this._totalPages = 1, f(this, i), f(this, c), f(this, g, (t) => {
      t.stopPropagation();
      const e = this._currentPage = this._currentPage + 1;
      s(this, i)?.pagination.setCurrentPageNumber(e);
    }), v(this, c, Promise.all([
      // TODO: Notice this can be retrieve via a api property. [NL]
      this.consumeContext(P, (t) => {
        v(this, i, t), this.observe(s(this, i).treeRoot, (e) => this._treeRoot = e), this.observe(s(this, i).rootItems, (e) => this._rootItems = e), this.observe(s(this, i).pagination.currentPage, (e) => this._currentPage = e), this.observe(s(this, i).pagination.totalPages, (e) => this._totalPages = e);
      }).asPromise()
    ]));
  }
  async updated(t) {
    super.updated(t), await s(this, c), t.has("selectionConfiguration") && (this._selectionConfiguration = this.selectionConfiguration, s(this, i).selection.setMultiple(this._selectionConfiguration.multiple ?? !1), s(this, i).selection.setSelectable(this._selectionConfiguration.selectable ?? !0), s(this, i).selection.setSelection(this._selectionConfiguration.selection ?? [])), t.has("startNode") && s(this, i).setStartNode(this.startNode), t.has("hideTreeRoot") && s(this, i).setHideTreeRoot(this.hideTreeRoot), t.has("expandTreeRoot") && s(this, i).setExpandTreeRoot(this.expandTreeRoot), t.has("foldersOnly") && s(this, i).setFoldersOnly(this.foldersOnly ?? !1), t.has("selectableFilter") && (s(this, i).selectableFilter = this.selectableFilter), t.has("filter") && (s(this, i).filter = this.filter), t.has("expansion") && s(this, i).setExpansion(this.expansion);
  }
  getSelection() {
    return s(this, i)?.selection.getSelection();
  }
  getExpansion() {
    return s(this, i)?.expansion.getExpansion();
  }
  render() {
    return u` ${y(this, p, C).call(this)} ${y(this, p, x).call(this)}`;
  }
};
i = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
C = function() {
  return this.hideTreeRoot || this._treeRoot === void 0 ? b : u`
			<umb-tree-item
				.entityType=${this._treeRoot.entityType}
				.props=${{ hideActions: this.hideTreeItemActions, item: this._treeRoot }}></umb-tree-item>
		`;
};
x = function() {
  return this.hideTreeRoot === !0 ? u`
				${I(
    this._rootItems,
    (t, e) => t.name + "___" + e,
    (t) => u`<umb-tree-item
							.entityType=${t.entityType}
							.props=${{ hideActions: this.hideTreeItemActions, item: t }}></umb-tree-item>`
  )}
				${y(this, p, E).call(this)}
			` : b;
};
g = /* @__PURE__ */ new WeakMap();
E = function() {
  return this._totalPages <= 1 || this._currentPage === this._totalPages ? b : u` <uui-button id="load-more" @click=${s(this, g)} label="Load more"></uui-button> `;
};
o.styles = O`
		#load-more {
			width: 100%;
		}
	`;
a([
  n({ type: Object, attribute: !1 })
], o.prototype, "selectionConfiguration", 2);
a([
  n({ type: Boolean, attribute: !1 })
], o.prototype, "hideTreeItemActions", 2);
a([
  n({ type: Boolean, attribute: !1 })
], o.prototype, "hideTreeRoot", 2);
a([
  n({ type: Boolean, attribute: !1 })
], o.prototype, "expandTreeRoot", 2);
a([
  n({ type: Object, attribute: !1 })
], o.prototype, "startNode", 2);
a([
  n({ type: Boolean, attribute: !1 })
], o.prototype, "foldersOnly", 2);
a([
  n({ attribute: !1 })
], o.prototype, "selectableFilter", 2);
a([
  n({ attribute: !1 })
], o.prototype, "filter", 2);
a([
  n({ attribute: !1 })
], o.prototype, "expansion", 2);
a([
  _()
], o.prototype, "_rootItems", 2);
a([
  _()
], o.prototype, "_treeRoot", 2);
a([
  _()
], o.prototype, "_currentPage", 2);
a([
  _()
], o.prototype, "_totalPages", 2);
o = a([
  w("umb-default-tree")
], o);
const U = o;
export {
  o as UmbDefaultTreeElement,
  U as default
};
//# sourceMappingURL=default-tree.element-Bir0WlPt.js.map
