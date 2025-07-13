import { U as k, b as ee, d as te, e as re, a as se, c as ie, i as ne, f as oe, g as ae, h as me } from "../sort-children-of-modal.token-YzqcKId4.js";
import { UmbModalToken as b } from "@umbraco-cms/backoffice/modal";
import { tryExecuteAndNotify as a } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as O } from "@umbraco-cms/backoffice/repository";
import { UmbStoreBase as U } from "@umbraco-cms/backoffice/store";
import { UmbArrayState as I, createObservablePart as v } from "@umbraco-cms/backoffice/observable-api";
import { UmbDefaultTreeElement as le } from "../default-tree.element-Bir0WlPt.js";
import { UmbDefaultTreeContext as _e } from "../default-tree.context-D0xONizl.js";
import { U as fe } from "../default-tree.context-token-C7a9fWg9.js";
import { UmbDuplicateToEntityAction as ye } from "../duplicate-to.action-D826i5Pj.js";
import { UmbReloadTreeItemChildrenEntityAction as Te } from "../reload-tree-item-children.action-ykywcgYI.js";
import { c as be, b as Oe, U as Ue, a as Ie } from "../tree-item-element-base-DL0d55Cc.js";
import { UmbSortChildrenOfEntityAction as Ae } from "../sort-children-of.action-BhKqLk2X.js";
import { property as c, customElement as p, nothing as A, html as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbExtensionElementAndApiSlotElementBase as f, umbExtensionsRegistry as h } from "@umbraco-cms/backoffice/extension-registry";
import { UmbDefaultTreeItemContext as De } from "../tree-item-default.context-DVlaPjgc.js";
import { UmbDefaultTreeItemElement as Ce } from "../tree-item-default.element-CBRidqkk.js";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
const S = "Umb.Modal.TreePicker", G = new b(
  S,
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class J {
  #e;
  #r;
  #s;
  #i;
  #t;
  /**
   * Creates an instance of UmbTreeServerDataSourceBase.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @param args
   * @memberof UmbTreeServerDataSourceBase
   */
  constructor(e, t) {
    this.#e = e, this.#r = t.getRootItems, this.#s = t.getChildrenOf, this.#i = t.getAncestorsOf, this.#t = t.mapper;
  }
  /**
   * Fetches the root items for the tree from the server
   * @param {UmbTreeRootItemsRequestArgs} args
   * @returns {*}
   * @memberof UmbTreeServerDataSourceBase
   */
  async getRootItems(e) {
    const { data: t, error: s } = await a(this.#e, this.#r(e));
    if (t) {
      const r = t?.items.map((n) => this.#t(n));
      return { data: { total: t.total, items: r } };
    }
    return { error: s };
  }
  /**
   * Fetches the children of a given parent unique from the server
   * @param {UmbTreeChildrenOfRequestArgs} args
   * @returns {*}
   * @memberof UmbTreeServerDataSourceBase
   */
  async getChildrenOf(e) {
    if (e.parent.unique === void 0) throw new Error("Parent unique is missing");
    const { data: t, error: s } = await a(this.#e, this.#s(e));
    if (t) {
      const r = t?.items.map((n) => this.#t(n));
      return { data: { total: t.total, items: r } };
    }
    return { error: s };
  }
  /**
   * Fetches the ancestors of a given item from the server
   * @param {UmbTreeAncestorsOfRequestArgs} args
   * @returns {*}
   * @memberof UmbTreeServerDataSourceBase
   */
  async getAncestorsOf(e) {
    if (!e.treeItem.entityType) throw new Error("Parent unique is missing");
    const { data: t, error: s } = await a(this.#e, this.#i(e));
    return t ? { data: t?.map((n) => this.#t(n)) } : { error: s };
  }
}
class Q extends O {
  /**
   * Creates an instance of UmbTreeRepositoryBase.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @param {UmbTreeDataSourceConstructor<TreeItemType>} treeSourceConstructor
   * @param {(string | UmbContextToken<any, any>)} treeStoreContextAlias
   * @memberof UmbTreeRepositoryBase
   */
  constructor(e, t, s) {
    super(e), this._treeSource = new t(this), this._init = this.consumeContext(s, (r) => {
      this._treeStore = r;
    }).asPromise();
  }
  /**
   * Requests root items of a tree
   * @param args
   * @returns {*}
   * @memberof UmbTreeRepositoryBase
   */
  async requestTreeRootItems(e) {
    await this._init;
    const { data: t, error: s } = await this._treeSource.getRootItems(e), r = s;
    return t && this._treeStore.appendItems(t.items), { data: t, error: r, asObservable: () => this._treeStore.rootItems };
  }
  /**
   * Requests tree items of a given parent
   * @param {(string | null)} parentUnique
   * @param args
   * @returns {*}
   * @memberof UmbTreeRepositoryBase
   */
  async requestTreeItemsOf(e) {
    if (!e.parent) throw new Error("Parent is missing");
    if (e.parent.unique === void 0) throw new Error("Parent unique is missing");
    if (e.parent.entityType === null) throw new Error("Parent entity type is missing");
    await this._init;
    const { data: t, error: s } = await this._treeSource.getChildrenOf(e), r = s;
    return t && this._treeStore.appendItems(t.items), { data: t, error: r, asObservable: () => this._treeStore.childrenOf(e.parent.unique) };
  }
  /**
   * Requests ancestors of a given item
   * @param {UmbTreeAncestorsOfRequestArgs} args
   * @returns {*}
   * @memberof UmbTreeRepositoryBase
   */
  async requestTreeItemAncestors(e) {
    if (e.treeItem.unique === void 0) throw new Error("Descendant unique is missing");
    await this._init;
    const { data: t, error: s } = await this._treeSource.getAncestorsOf(e);
    return { data: t, error: s };
  }
  /**
   * Returns a promise with an observable of tree root items
   * @returns {*}
   * @memberof UmbTreeRepositoryBase
   */
  async rootTreeItems() {
    return await this._init, this._treeStore.rootItems;
  }
  /**
   * Returns a promise with an observable of children items of a given parent
   * @param {(string | null)} parentUnique
   * @returns {*}
   * @memberof UmbTreeRepositoryBase
   */
  async treeItemsOf(e) {
    if (e === void 0) throw new Error("Parent unique is missing");
    return await this._init, this._treeStore.childrenOf(e);
  }
}
class V extends U {
  constructor(e, t) {
    super(e, t, new I([], (s) => s.unique)), this.rootItems = this._data.asObservablePart((s) => s.filter((r) => r.parent.unique === null));
  }
  /**
   * Returns an observable to observe the children of a given parent
   * @param {(string | null)} parentUnique
   * @returns {*}
   * @memberof UmbUniqueTreeStore
   */
  childrenOf(e) {
    return this._data.asObservablePart((t) => t.filter((s) => s.parent.unique === e));
  }
}
var C = Object.defineProperty, R = Object.getOwnPropertyDescriptor, y = (i) => {
  throw TypeError(i);
}, E = (i, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? R(e, t) : e, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = (s ? o(e, t, r) : o(r)) || r);
  return s && r && C(e, t, r), r;
}, g = (i, e, t) => e.has(i) || y("Cannot " + t), x = (i, e, t) => e.has(i) ? y("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), M = (i, e, t) => (g(i, e, "access private method"), t), m, T;
let u = class extends f {
  constructor() {
    super(...arguments), x(this, m);
  }
  get entityType() {
    return this._entityType;
  }
  set entityType(i) {
    this._entityType = i, M(this, m, T).call(this);
  }
  getExtensionType() {
    return "treeItem";
  }
  getDefaultElementName() {
    return "umb-default-tree-item";
  }
};
m = /* @__PURE__ */ new WeakSet();
T = function() {
  if (!this._entityType) return;
  const i = (e) => this._entityType ? e.forEntityTypes.includes(this._entityType) : !1;
  this.observe(
    // TODO: what should we do if there are multiple tree items for an entity type?
    // This method gets all extensions based on a type, then filters them based on the entity type. and then we get the alias of the first one [NL]
    v(
      h.byTypeAndFilter(this.getExtensionType(), i),
      (e) => e[0].alias
    ),
    (e) => {
      this.alias = e;
    },
    "umbObserveAlias"
  );
};
E([
  c({ type: String, reflect: !0 })
], u.prototype, "entityType", 1);
u = E([
  p("umb-tree-item")
], u);
var P = Object.defineProperty, B = Object.getOwnPropertyDescriptor, d = (i, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? B(e, t) : e, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = (s ? o(e, t, r) : o(r)) || r);
  return s && r && P(e, t, r), r;
};
const L = {
  type: "kind",
  alias: "Umb.Kind.Tree",
  matchKind: "tree",
  matchType: "menuItem",
  manifest: {
    type: "menuItem",
    elementName: "umb-menu-item-tree-default"
  }
};
h.register(L);
let l = class extends D {
  render() {
    return this.manifest ? w`
					<umb-tree
						alias=${this.manifest?.meta.treeAlias}
						.props=${{
      hideTreeRoot: this.manifest?.meta.hideTreeRoot === !0,
      selectionConfiguration: {
        selectable: !1,
        multiple: !1
      }
    }}></umb-tree>
				` : A;
  }
};
d([
  c({ type: Object })
], l.prototype, "manifest", 2);
l = d([
  p("umb-menu-item-tree-default")
], l);
var q = Object.getOwnPropertyDescriptor, F = (i, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? q(e, t) : e, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = o(r) || r);
  return r;
};
let _ = class extends f {
  getExtensionType() {
    return "tree";
  }
  getDefaultElementName() {
    return "umb-default-tree";
  }
  getSelection() {
    return this._element?.getSelection?.() ?? [];
  }
};
_ = F([
  p("umb-tree")
], _);
export {
  k as UMB_DUPLICATE_TO_MODAL,
  ee as UMB_DUPLICATE_TO_MODAL_ALIAS,
  te as UMB_FOLDER_CREATE_MODAL,
  re as UMB_FOLDER_UPDATE_MODAL,
  se as UMB_SORT_CHILDREN_OF_MODAL,
  ie as UMB_SORT_CHILDREN_OF_MODAL_ALIAS,
  fe as UMB_TREE_CONTEXT,
  be as UMB_TREE_ITEM_CONTEXT,
  ne as UMB_TREE_ITEM_DEFAULT_KIND_MANIFEST,
  G as UMB_TREE_PICKER_MODAL,
  S as UMB_TREE_PICKER_MODAL_ALIAS,
  oe as UmbCreateFolderEntityAction,
  _e as UmbDefaultTreeContext,
  le as UmbDefaultTreeElement,
  De as UmbDefaultTreeItemContext,
  Ce as UmbDefaultTreeItemElement,
  ae as UmbDeleteFolderEntityAction,
  ye as UmbDuplicateToEntityAction,
  l as UmbMenuItemTreeDefaultElement,
  Te as UmbReloadTreeItemChildrenEntityAction,
  Oe as UmbRequestReloadTreeItemChildrenEvent,
  Ae as UmbSortChildrenOfEntityAction,
  _ as UmbTreeElement,
  Ue as UmbTreeItemContextBase,
  u as UmbTreeItemElement,
  Ie as UmbTreeItemElementBase,
  Q as UmbTreeRepositoryBase,
  J as UmbTreeServerDataSourceBase,
  V as UmbUniqueTreeStore,
  me as UmbUpdateFolderEntityAction
};
//# sourceMappingURL=index.js.map
