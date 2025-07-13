import "./default-tree.element-Bir0WlPt.js";
import { UmbContextBase as T } from "@umbraco-cms/backoffice/class-api";
import { UmbObjectState as E, UmbArrayState as x, UmbBooleanState as a, UmbStringState as w } from "@umbraco-cms/backoffice/observable-api";
import { U as S } from "./default-tree.context-token-C7a9fWg9.js";
import { UMB_ACTION_EVENT_CONTEXT as q } from "@umbraco-cms/backoffice/action";
import { umbExtensionsRegistry as I } from "@umbraco-cms/backoffice/extension-registry";
import "@umbraco-cms/backoffice/extension-api";
import { UmbPaginationManager as O, debounce as P } from "@umbraco-cms/backoffice/utils";
import { UmbEntityActionEvent as $, UmbHasChildrenEntityContext as A, UmbRequestReloadChildrenOfEntityEvent as C, UmbRequestReloadStructureForEntityEvent as y } from "@umbraco-cms/backoffice/entity-action";
import { UmbChangeEvent as U } from "@umbraco-cms/backoffice/event";
import { map as f } from "@umbraco-cms/backoffice/external/rxjs";
import { UmbContextToken as V } from "@umbraco-cms/backoffice/context-api";
import { UMB_SECTION_CONTEXT as L, UMB_SECTION_SIDEBAR_CONTEXT as R } from "@umbraco-cms/backoffice/section";
import { property as m, state as o, ifDefined as k, html as h, nothing as g, repeat as N } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as H } from "@umbraco-cms/backoffice/lit-element";
class p extends $ {
  static {
    this.TYPE = "request-reload-tree-item-children";
  }
  constructor(e) {
    super(p.TYPE, e);
  }
}
class se extends T {
  constructor(e) {
    super(e, _), this.pagination = new O(), this._treeItem = new E(void 0), this.treeItem = this._treeItem.asObservable(), this.#t = new x([], (t) => t.unique), this.childItems = this.#t.asObservable(), this.#i = new a(!1), this.hasChildren = this.#i.asObservable(), this.#s = new a(!1), this.isLoading = this.#s.asObservable(), this.#o = new a(!1), this.isSelectable = this.#o.asObservable(), this.#a = new a(!1), this.isSelectableContext = this.#a.asObservable(), this.#l = new a(!1), this.isSelected = this.#l.asObservable(), this.#r = new a(!1), this.isActive = this.#r.asObservable(), this.#m = new a(!1), this.hasActions = this.#m.asObservable(), this.#c = new w(""), this.path = this.#c.asObservable(), this.#d = new a(!1), this.isOpen = this.#d.asObservable(), this.#p = new a(!1), this.foldersOnly = this.#p.asObservable(), this.#C = new A(this), this.#h = {
      skip: 0,
      take: 50
    }, this.loadChildren = () => this.#T(), this.loadMore = () => this.#T(!0), this.#u = (t) => {
      t.getUnique() === this.unique && t.getEntityType() === this.entityType && this.loadChildren();
    }, this.#y = async (t) => {
      this.unique && t.getUnique() === this.unique && t.getEntityType() === this.entityType && (this.parentTreeItemContext ? this.parentTreeItemContext.loadChildren() : this.treeContext?.loadTree());
    }, this.#S = (t) => {
      const n = t.target;
      this.#h.skip = n.getSkip(), this.loadMore();
    }, this.#f = P(() => this.#g(), 100), this.#_ = () => {
      this.#n?.removeEventListener(
        p.TYPE,
        this.#u
      ), this.#n?.removeEventListener(
        C.TYPE,
        this.#u
      ), this.#n?.removeEventListener(
        y.TYPE,
        this.#y
      );
    }, this.pagination.setPageSize(this.#h.take), this.#q(), this.pagination.addEventListener(U.TYPE, this.#S), window.addEventListener("navigationend", this.#f);
  }
  #e;
  #t;
  #i;
  #s;
  #o;
  #a;
  #l;
  #r;
  #m;
  #c;
  #d;
  #p;
  #b;
  #v;
  #n;
  #C;
  #h;
  /**
   * Sets the manifest
   * @param {ManifestCollection} manifest
   * @memberof UmbCollectionContext
   */
  set manifest(e) {
    this.#e !== e && (this.#e = e);
  }
  get manifest() {
    return this.#e;
  }
  // TODO: Be aware that this method, could be removed and we can use the getter method instead [NL]
  /**
   * Returns the manifest.
   * @returns {ManifestCollection}
   * @memberof UmbCollectionContext
   */
  getManifest() {
    return this.#e;
  }
  setTreeItem(e) {
    if (!e) {
      this._treeItem.setValue(void 0);
      return;
    }
    if (e.unique === void 0) throw new Error("Could not create tree item context, unique is missing");
    if (this.unique = e.unique, !e.entityType) throw new Error("Could not create tree item context, tree item type is missing");
    this.entityType = e.entityType;
    const t = e.hasChildren || !1;
    this.#i.setValue(t), this.#C.setHasChildren(t), this._treeItem.setValue(e), this.#O(), this.#E(), this.#x(), this.#w();
  }
  async #T(e = !1) {
    if (this.unique === void 0) throw new Error("Could not request children, unique key is missing");
    if (this.entityType === void 0) throw new Error("Could not request children, entity type is missing");
    const t = this.treeContext?.getRepository();
    if (!t) throw new Error("Could not request children, repository is missing");
    this.#s.setValue(!0);
    const n = e ? this.#h.skip : 0, r = e ? this.#h.take : this.pagination.getCurrentPageNumber() * this.#h.take, l = this.#p.getValue(), u = this.treeContext?.getAdditionalRequestArgs(), { data: c } = await t.requestTreeItemsOf({
      parent: {
        unique: this.unique,
        entityType: this.entityType
      },
      foldersOnly: l,
      skip: n,
      take: r,
      ...u
    });
    if (c) {
      if (e) {
        const v = this.#t.getValue();
        this.#t.setValue([...v, ...c.items]);
      } else
        this.#t.setValue(c.items);
      const b = c.total > 0;
      this.#i.setValue(b), this.#C.setHasChildren(b), this.pagination.setTotalItems(c.total);
    }
    this.#s.setValue(!1);
  }
  toggleContextMenu() {
    if (!this.getTreeItem() || !this.entityType || this.unique === void 0)
      throw new Error("Could not request children, tree item is not set");
    this.#v?.toggleContextMenu(this.getHostElement(), {
      entityType: this.entityType,
      unique: this.unique,
      headline: this.getTreeItem()?.name || ""
    });
  }
  /**
   * Selects the tree item
   * @memberof UmbTreeItemContextBase
   * @returns {void}
   */
  select() {
    if (this.unique === void 0) throw new Error("Could not select. Unique is missing");
    this.treeContext?.selection.select(this.unique);
  }
  /**
   * Deselects the tree item
   * @memberof UmbTreeItemContextBase
   * @returns {void}
   */
  deselect() {
    if (this.unique === void 0) throw new Error("Could not deselect. Unique is missing");
    this.treeContext?.selection.deselect(this.unique);
  }
  showChildren() {
    const e = this.entityType, t = this.unique;
    if (!e)
      throw new Error("Could not show children, entity type is missing");
    if (t === void 0)
      throw new Error("Could not show children, unique is missing");
    this.treeContext?.expansion.expandItem({ entityType: e, unique: t });
  }
  hideChildren() {
    const e = this.entityType, t = this.unique;
    if (!e)
      throw new Error("Could not show children, entity type is missing");
    if (t === void 0)
      throw new Error("Could not show children, unique is missing");
    this.treeContext?.expansion.collapseItem({ entityType: e, unique: t });
  }
  async #q() {
    this.consumeContext(L, (e) => {
      this.#b = e, this.#w();
    }), this.consumeContext(R, (e) => {
      this.#v = e;
    }), this.consumeContext(S, (e) => {
      this.treeContext = e, this.#E(), this.#x(), this.#I(), this.#P();
    }), this.consumeContext(_, (e) => {
      this.parentTreeItemContext = e;
    }).skipHost(), this.consumeContext(q, (e) => {
      this.#_(), this.#n = e, this.#n.addEventListener(
        p.TYPE,
        this.#u
      ), this.#n.addEventListener(
        C.TYPE,
        this.#u
      ), this.#n.addEventListener(
        y.TYPE,
        this.#y
      );
    });
  }
  getTreeItem() {
    return this._treeItem.getValue();
  }
  #E() {
    this.treeContext && this.observe(
      this.treeContext.selection.selectable,
      (e) => {
        if (this.#a.setValue(e), e === !0) {
          const t = this.treeContext?.selectableFilter?.(this.getTreeItem()) ?? !0;
          this.#o.setValue(t), this.#g();
        }
      },
      "observeIsSelectable"
    );
  }
  #x() {
    !this.treeContext || !this.unique || this.observe(
      this.treeContext.selection.selection.pipe(f((e) => e.includes(this.unique))),
      (e) => {
        this.#l.setValue(e);
      },
      "observeIsSelected"
    );
  }
  #I() {
    !this.treeContext || this.unique === void 0 || this.observe(
      this.treeContext.foldersOnly,
      (e) => {
        this.#p.setValue(e);
      },
      "observeFoldersOnly"
    );
  }
  #w() {
    this.#b && this.observe(
      this.#b.pathname,
      (e) => {
        if (!e || !this.entityType || this.unique === void 0) return;
        const t = this.constructPath(e, this.entityType, this.unique);
        this.#c.setValue(t), this.#g();
      },
      "observeSectionPath"
    );
  }
  #O() {
    this.observe(
      I.byType("entityAction").pipe(f((e) => e.filter((t) => t.forEntityTypes.includes(this.entityType)))),
      (e) => {
        this.#m.setValue(e.length > 0);
      },
      "observeActions"
    );
  }
  #P() {
    this.unique !== void 0 && this.entityType && this.treeContext && this.observe(
      this.treeContext.expansion.isExpanded({ entityType: this.entityType, unique: this.unique }),
      (e) => {
        e && this.#i.getValue() && this.#d.getValue() === !1 && this.loadChildren(), this.#d.setValue(e);
      },
      "observeExpansion"
    );
  }
  #u;
  #y;
  #S;
  #f;
  #g() {
    if (this.#o.getValue()) {
      this.#r.setValue(!1);
      return;
    }
    const t = this.#c.getValue(), r = window.location.pathname.includes(t);
    this.#r.setValue(r);
  }
  // TODO: use router context
  constructPath(e, t, n) {
    return `section/${e}/workspace/${t}/edit/${n}`;
  }
  #_;
  destroy() {
    this.#_(), window.removeEventListener("navigationend", this.#f), super.destroy();
  }
}
const _ = new V("UmbTreeItemContext");
var B = Object.defineProperty, M = Object.getOwnPropertyDescriptor, i = (d, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? M(e, t) : e, l = d.length - 1, u; l >= 0; l--)
    (u = d[l]) && (r = (n ? u(e, t, r) : u(r)) || r);
  return n && r && B(e, t, r), r;
};
class s extends H {
  constructor() {
    super(...arguments), this.hideActions = !1, this._isActive = !1, this._isLoading = !1, this._isSelectableContext = !1, this._isSelectable = !1, this._isSelected = !1, this._hasChildren = !1, this._isOpen = !1, this._iconSlotHasChildren = !1, this._totalPages = 1, this._currentPage = 1, this.#i = (e) => {
      e.stopPropagation();
      const t = this._currentPage = this._currentPage + 1;
      this.#e?.pagination.setCurrentPageNumber(t);
    }, this.#s = (e) => e.target.assignedNodes({ flatten: !0 }).length > 0;
  }
  get item() {
    return this._item;
  }
  set item(e) {
    this._item = e, this._item && this.#t();
  }
  #e;
  get api() {
    return this.#e;
  }
  set api(e) {
    this.#e = e, this.#e && (this.observe(this.#e.childItems, (t) => this._childItems = t), this.observe(this.#e.hasChildren, (t) => this._hasChildren = t), this.observe(this.#e.isActive, (t) => this._isActive = t), this.observe(this.#e.isOpen, (t) => this._isOpen = t), this.observe(this.#e.isLoading, (t) => this._isLoading = t), this.observe(this.#e.isSelectableContext, (t) => this._isSelectableContext = t), this.observe(this.#e.isSelectable, (t) => this._isSelectable = t), this.observe(this.#e.isSelected, (t) => this._isSelected = t), this.observe(this.#e.path, (t) => this._href = t), this.observe(this.#e.pagination.currentPage, (t) => this._currentPage = t), this.observe(this.#e.pagination.totalPages, (t) => this._totalPages = t), this.#t());
  }
  #t() {
    this.#e && this._item && this.#e.setTreeItem(this._item);
  }
  _handleSelectedItem(e) {
    e.stopPropagation(), this.#e?.select();
  }
  _handleDeselectedItem(e) {
    e.stopPropagation(), this.#e?.deselect();
  }
  _onShowChildren(e) {
    e.stopPropagation(), this.#e?.showChildren();
  }
  _onHideChildren(e) {
    e.stopPropagation(), this.#e?.hideChildren();
  }
  #i;
  // Note: Currently we want to prevent opening when the item is in a selectable context, but this might change in the future.
  // If we like to be able to open items in selectable context, then we might want to make it as a menu item action, so you have to click ... and chose an action called 'Edit'
  render() {
    const e = this.localize.string(this._item?.name ?? "");
    return h`
			<uui-menu-item
				@show-children=${this._onShowChildren}
				@hide-children=${this._onHideChildren}
				@selected=${this._handleSelectedItem}
				@deselected=${this._handleDeselectedItem}
				?active=${this._isActive}
				?disabled=${this._isSelectableContext && !this._isSelectable}
				?selectable=${this._isSelectable}
				?selected=${this._isSelected}
				.loading=${this._isLoading}
				.hasChildren=${this._hasChildren}
				.showChildren=${this._isOpen}
				.caretLabel=${this.localize.term("visuallyHiddenTexts_expandChildItems") + " " + e}
				label=${e}
				href="${k(this._isSelectableContext ? void 0 : this._href)}">
				${this.renderIconContainer()} ${this.renderLabel()} ${this.#a()} ${this.#l()}
				<slot></slot>
				${this.#r()}
			</uui-menu-item>
		`;
  }
  #s;
  renderIconContainer() {
    return h`
			<slot
				name="icon"
				slot="icon"
				@slotchange=${(e) => {
      this._iconSlotHasChildren = this.#s(e);
    }}></slot>
			${this._iconSlotHasChildren ? g : this.#o()}
		`;
  }
  #o() {
    const e = this._item?.icon, t = this._item?.isFolder, n = e?.split(" ")[0];
    return e && n ? h`<umb-icon slot="icon" name="${this._isActive ? n : e}"></umb-icon>` : t ? h`<umb-icon slot="icon" name="icon-folder"></umb-icon>` : h`<umb-icon slot="icon" name="icon-circle-dotted"></umb-icon>`;
  }
  renderLabel() {
    return h`<slot name="label" slot="label"></slot>`;
  }
  #a() {
    if (!this.hideActions)
      return this.#e && this._item ? h`<umb-entity-actions-bundle
					slot="actions"
					.entityType=${this.#e.entityType}
					.unique=${this.#e.unique}
					.label=${this._item.name}>
				</umb-entity-actions-bundle>` : "";
  }
  #l() {
    return h`
			${this._childItems ? N(
      this._childItems,
      (e, t) => e.name + "___" + t,
      (e) => h`<umb-tree-item
								.entityType=${e.entityType}
								.props=${{ hideActions: this.hideActions, item: e }}></umb-tree-item>`
    ) : ""}
		`;
  }
  #r() {
    return this._totalPages <= 1 || this._currentPage === this._totalPages ? g : h` <uui-button @click=${this.#i} label="Load more"></uui-button> `;
  }
}
i([
  m({ type: Object, attribute: !1 })
], s.prototype, "item", 1);
i([
  m({ type: Object, attribute: !1 })
], s.prototype, "api", 1);
i([
  m({ type: Boolean, attribute: !1 })
], s.prototype, "hideActions", 2);
i([
  o()
], s.prototype, "_isActive", 2);
i([
  o()
], s.prototype, "_childItems", 2);
i([
  o()
], s.prototype, "_href", 2);
i([
  o()
], s.prototype, "_isLoading", 2);
i([
  o()
], s.prototype, "_isSelectableContext", 2);
i([
  o()
], s.prototype, "_isSelectable", 2);
i([
  o()
], s.prototype, "_isSelected", 2);
i([
  o()
], s.prototype, "_hasChildren", 2);
i([
  o()
], s.prototype, "_isOpen", 2);
i([
  o()
], s.prototype, "_iconSlotHasChildren", 2);
i([
  o()
], s.prototype, "_totalPages", 2);
i([
  o()
], s.prototype, "_currentPage", 2);
export {
  se as U,
  s as a,
  p as b,
  _ as c
};
//# sourceMappingURL=tree-item-element-base-DL0d55Cc.js.map
