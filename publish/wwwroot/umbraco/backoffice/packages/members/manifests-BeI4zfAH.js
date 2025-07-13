import { UMB_WORKSPACE_CONDITION_ALIAS as A, UmbSubmitWorkspaceAction as te } from "@umbraco-cms/backoffice/workspace";
import { UMB_CONTENT_HAS_PROPERTIES_WORKSPACE_CONDITION as ie } from "@umbraco-cms/backoffice/content";
import { UmbModalToken as $, UmbModalBaseElement as se } from "@umbraco-cms/backoffice/modal";
import { UmbContextToken as T } from "@umbraco-cms/backoffice/context-api";
import { UMB_COLLECTION_ALIAS_CONDITION as x, UmbCollectionItemPickerContext as re } from "@umbraco-cms/backoffice/collection";
import { UmbPickerInputContext as oe } from "@umbraco-cms/backoffice/picker-input";
import { html as h, nothing as y, repeat as L, css as ae, property as M, state as S, customElement as N } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as ne } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as le } from "@umbraco-cms/backoffice/event";
import { UmbFormControlMixin as me } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as ce } from "@umbraco-cms/backoffice/lit-element";
import { UmbSorterController as pe } from "@umbraco-cms/backoffice/sorter";
import { UMB_MEMBER_TYPE_ENTITY_TYPE as ue } from "@umbraco-cms/backoffice/member-type";
import { UMB_NOTIFICATION_CONTEXT as he } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as be } from "@umbraco-cms/backoffice/repository";
import { tryExecuteAndNotify as de } from "@umbraco-cms/backoffice/resources";
import { MemberService as _e } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbTextStyles as Me } from "@umbraco-cms/backoffice/style";
const D = "Umb.SearchProvider.Member", fe = new $(
  "Umb.Modal.MemberPicker",
  {
    modal: {
      type: "sidebar",
      size: "small"
    },
    data: {
      search: {
        providerAlias: D
      }
    }
  }
), B = "member", mt = "member-root", ye = (e) => e.getEntityType() === B, ct = new T("UmbVariantContext", void 0, ye), W = "Umb.Repository.Member.Collection", Ee = [
  {
    type: "repository",
    alias: W,
    name: "Member Collection Repository",
    api: () => Promise.resolve().then(() => Le)
  }
], Ce = "Umb.CollectionView.Member.Table", ve = [
  {
    type: "collectionView",
    alias: Ce,
    name: "Member Table Collection View",
    element: () => import("./member-table-collection-view.element-BHkalDvC.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: x,
        match: "Umb.Collection.Member"
      }
    ]
  }
], pt = new T("UmbCollectionContext"), ut = new $("Umb.Modal.Member.CreateOptions", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), q = "Umb.Repository.MemberItem", Te = "Umb.Store.MemberItem", ht = [
  {
    type: "repository",
    alias: q,
    name: "Member Item Repository",
    api: () => import("./member-item.repository-DweaLT0x.js")
  },
  {
    type: "itemStore",
    alias: Te,
    name: "Member Item Store",
    api: () => import("./member-item.store-BtBGzhCT.js")
  }
], Ue = new T("UmbMemberItemStore"), bt = "Umb.Repository.Member.Reference", Oe = "Umb.Repository.Member.Detail", Se = "Umb.Store.Member.Detail", dt = [
  {
    type: "repository",
    alias: Oe,
    name: "Member Detail Repository",
    api: () => import("./member-detail.repository-X_Of52We.js")
  },
  {
    type: "store",
    alias: Se,
    name: "Member Detail Store",
    api: () => import("./member-detail.store-DWokJ4Eo.js")
  }
], Ie = new T("UmbMemberDetailStore"), _t = new T(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === "member"
), O = "Umb.Workspace.Member", Re = {
  type: "workspace",
  kind: "routable",
  alias: O,
  name: "Member Workspace",
  api: () => import("./member-workspace.context-zScmaqYg.js"),
  meta: {
    entityType: B
  }
}, Ae = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Member.Save",
    name: "Save Member Workspace Action",
    api: te,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: A,
        match: O
      }
    ]
  }
], we = [
  {
    type: "workspaceView",
    kind: "contentEditor",
    alias: "Umb.WorkspaceView.Member.Content",
    name: "Member Workspace Content View",
    weight: 1e3,
    meta: {
      label: "#general_details",
      pathname: "content",
      icon: "icon-document"
    },
    conditions: [
      {
        alias: A,
        match: O
      },
      {
        alias: ie
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Member.Member",
    name: "Member Workspace Member View",
    js: () => import("./member-workspace-view-member.element-FeCDO_Fq.js"),
    weight: 500,
    meta: {
      label: "#apps_umbInfo",
      pathname: "info",
      icon: "icon-user"
    },
    conditions: [
      {
        alias: A,
        match: O
      }
    ]
  }
], Mt = [Re, ...Ae, ...we], ft = "Umb.Workspace.MemberRoot";
class ke extends oe {
  constructor(t) {
    super(t, q, fe);
  }
  async openPicker(t, i) {
    const s = {
      ...t
    };
    s.pickableFilter = (r) => this.#e(r, i?.allowedContentTypes), t?.search || (s.search = {
      providerAlias: D,
      ...t?.search
    }), s.search.queryParams = {
      allowedContentTypes: i?.allowedContentTypes,
      ...t?.search?.queryParams
    }, await super.openPicker(s);
  }
  #e = (t, i) => i && i.length > 0 ? i.map((s) => s.unique).includes(t.memberType.unique) : !0;
}
var ge = Object.defineProperty, Be = Object.getOwnPropertyDescriptor, V = (e) => {
  throw TypeError(e);
}, p = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? Be(t, i) : t, u = e.length - 1, b; u >= 0; u--)
    (b = e[u]) && (r = (s ? b(t, i, r) : b(r)) || r);
  return s && r && ge(t, i, r), r;
}, P = (e, t, i) => t.has(e) || V("Cannot " + i), a = (e, t, i) => (P(e, t, "read from private field"), i ? i.call(e) : t.get(e)), U = (e, t, i) => t.has(e) ? V("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Pe = (e, t, i, s) => (P(e, t, "write to private field"), t.set(e, i), i), E = (e, t, i) => (P(e, t, "access private method"), i), C, v, n, d, F, Y, z, K, Q, X;
let l = class extends me(
  ce
) {
  constructor() {
    super(), U(this, d), U(this, C, new pe(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputMember",
      itemSelector: "umb-entity-item-ref",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new le());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this.filter = () => !0, U(this, v, !1), U(this, n, new ke(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this.selection.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this.selection.length > this.max
    ), this.observe(a(this, n).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(a(this, n).selectedItems, (e) => this._items = e, "_observeItems");
  }
  set min(e) {
    a(this, n).min = e;
  }
  get min() {
    return a(this, n).min;
  }
  set max(e) {
    a(this, n).max = e;
  }
  get max() {
    return a(this, n).max;
  }
  set selection(e) {
    a(this, n).setSelection(e), a(this, C).setModel(e);
  }
  get selection() {
    return a(this, n).getSelection();
  }
  set value(e) {
    this.selection = ne(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  get readonly() {
    return a(this, v);
  }
  set readonly(e) {
    Pe(this, v, e), a(this, v) ? a(this, C).disable() : a(this, C).enable();
  }
  render() {
    return h`${E(this, d, z).call(this)} ${E(this, d, Q).call(this)}`;
  }
};
C = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
F = function() {
  a(this, n).openPicker(
    {
      filter: this.filter
    },
    {
      allowedContentTypes: this.allowedContentTypeIds?.map((e) => ({
        unique: e,
        entityType: ue
      }))
    }
  );
};
Y = function(e) {
  a(this, n).requestRemoveItem(e.unique);
};
z = function() {
  return this._items ? h`
			<uui-ref-list>
				${L(
    this._items,
    (e) => e.unique,
    (e) => E(this, d, K).call(this, e)
  )}
			</uui-ref-list>
		` : y;
};
K = function(e) {
  return e.unique ? h`
			<umb-entity-item-ref id=${e.unique} .item=${e} ?readonly=${this.readonly} ?standalone=${this.max === 1}>
				<uui-action-bar slot="actions">${E(this, d, X).call(this, e)} </uui-action-bar>
			</umb-entity-item-ref>
		` : y;
};
Q = function() {
  return this.selection.length >= this.max ? y : this.readonly && this.selection.length > 0 ? y : h`
				<uui-button
					id="btn-add"
					look="placeholder"
					@click=${E(this, d, F)}
					label=${this.localize.term("general_choose")}
					?disabled=${this.readonly}></uui-button>
			`;
};
X = function(e) {
  return this.readonly ? y : h`
			<uui-button @click=${() => E(this, d, Y).call(this, e)} label=${this.localize.term("general_remove")}></uui-button>
		`;
};
l.styles = [
  ae`
			#btn-add {
				display: block;
			}

			umb-entity-item-ref[drag-placeholder] {
				opacity: 0.2;
			}
		`
];
p([
  M({ type: Number })
], l.prototype, "min", 1);
p([
  M({ type: String, attribute: "min-message" })
], l.prototype, "minMessage", 2);
p([
  M({ type: Number })
], l.prototype, "max", 1);
p([
  M({ type: String, attribute: "max-message" })
], l.prototype, "maxMessage", 2);
p([
  M({ type: Array })
], l.prototype, "allowedContentTypeIds", 2);
p([
  M({ type: String })
], l.prototype, "value", 1);
p([
  M({ type: Object, attribute: !1 })
], l.prototype, "filter", 2);
p([
  M({ type: Boolean, reflect: !0 })
], l.prototype, "readonly", 1);
p([
  S()
], l.prototype, "_items", 2);
l = p([
  N("umb-input-member")
], l);
class $e extends be {
  constructor(t) {
    super(t), this.init = Promise.all([
      this.consumeContext(Ie, (i) => {
        this.detailStore = i;
      }).asPromise(),
      this.consumeContext(Ue, (i) => {
        this.itemStore = i;
      }).asPromise(),
      this.consumeContext(he, (i) => {
        this.notificationContext = i;
      }).asPromise()
    ]);
  }
}
class xe {
  #e;
  /**
   * Creates an instance of UmbMemberCollectionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberCollectionServerDataSource
   */
  constructor(t) {
    this.#e = t;
  }
  /**
   * Gets the member collection filtered by the given filter.
   * @param {UmbMemberCollectionFilterModel} filter
   * @returns {*}
   * @memberof UmbMemberCollectionServerDataSource
   */
  async getCollection(t) {
    const { data: i, error: s } = await de(this.#e, _e.getFilterMember(t));
    if (s)
      return { error: s };
    if (!i)
      return { data: { items: [], total: 0 } };
    const { items: r, total: u } = i;
    return { data: { items: r.map((o) => ({
      entityType: B,
      email: o.email,
      variants: o.variants,
      unique: o.id,
      kind: o.kind,
      lastLoginDate: o.lastLoginDate || null,
      lastLockoutDate: o.lastLockoutDate || null,
      lastPasswordChangeDate: o.lastPasswordChangeDate || null,
      failedPasswordAttempts: o.failedPasswordAttempts,
      isApproved: o.isApproved,
      isLockedOut: o.isLockedOut,
      groups: o.groups,
      isTwoFactorEnabled: o.isTwoFactorEnabled,
      memberType: { unique: o.memberType.id, icon: o.memberType.icon },
      username: o.username,
      values: o.values
    })), total: u } };
  }
}
class w extends $e {
  #e;
  constructor(t) {
    super(t), this.#e = new xe(t);
  }
  async requestCollection(t = { skip: 0, take: 100 }) {
    await this.init;
    const { data: i, error: s } = await this.#e.getCollection(t);
    return i && this.detailStore.appendItems(i.items), { data: i, error: s, asObservable: () => this.detailStore.all() };
  }
}
const Le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMemberCollectionRepository: w,
  default: w
}, Symbol.toStringTag, { value: "Module" })), Ne = [
  {
    type: "collectionAction",
    name: "Create Member Collection Action",
    kind: "button",
    alias: "Umb.CollectionAction.Member.Create",
    weight: 200,
    meta: {
      label: "#general_create"
    },
    element: () => import("./create-member-collection-action.element-Bj4aP19J.js"),
    conditions: [
      {
        alias: x,
        match: "Umb.Collection.Member"
      }
    ]
  }
], De = "Umb.Collection.Member", yt = [
  {
    type: "collection",
    alias: De,
    name: "Member Collection",
    api: () => import("./member-collection.context-C6ViPVIN.js"),
    element: () => import("./member-collection.element-DZ01yOPO.js"),
    meta: {
      repositoryAlias: W
    }
  },
  ...Ee,
  ...ve,
  ...Ne
];
var We = Object.defineProperty, qe = Object.getOwnPropertyDescriptor, j = (e) => {
  throw TypeError(e);
}, I = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? qe(t, i) : t, u = e.length - 1, b; u >= 0; u--)
    (b = e[u]) && (r = (s ? b(t, i, r) : b(r)) || r);
  return s && r && We(t, i, r), r;
}, G = (e, t, i) => t.has(e) || j("Cannot " + i), m = (e, t, i) => (G(e, t, "read from private field"), i ? i.call(e) : t.get(e)), R = (e, t, i) => t.has(e) ? j("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), k = (e, t, i) => (G(e, t, "access private method"), i), g, c, f, H, J, Z, ee;
let _ = class extends se {
  constructor() {
    super(), R(this, f), this._members = [], this._selectableFilter = () => !0, R(this, g, new w(this)), R(this, c, new re(this)), this.observe(
      m(this, c).selection.selection,
      (e) => {
        this.updateValue({ selection: e }), this.requestUpdate();
      },
      "umbSelectionObserver"
    ), this.observe(
      m(this, c).search.query,
      (e) => {
        this._searchQuery = e?.query;
      },
      "umbPickerSearchQueryObserver"
    );
  }
  async updated(e) {
    if (super.updated(e), e.has("data") && (m(this, c).selection.setMultiple(this.data?.multiple ?? !1), this.data?.pickableFilter && (this._selectableFilter = this.data?.pickableFilter), this.data?.search)) {
      m(this, c).search.updateConfig({
        ...this.data.search
      });
      const t = this.data.search.queryParams;
      t && m(this, c).search.setQuery(t);
    }
    e.has("value") && m(this, c).selection.setSelection(this.value?.selection);
  }
  async firstUpdated() {
    const { data: e } = await m(this, g).requestCollection({});
    this._members = e?.items ?? [];
  }
  render() {
    return h`
			<umb-body-layout headline=${this.localize.term("defaultdialogs_selectMembers")}>
				<uui-box>
					<umb-picker-search-field></umb-picker-search-field>
					<umb-picker-search-result></umb-picker-search-result>
					${k(this, f, J).call(this)}</uui-box
				>
				${k(this, f, ee).call(this)}
			</umb-body-layout>
		`;
  }
};
g = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakSet();
H = function() {
  return this.data?.filter ? this._members.filter(this.data.filter) : this._members;
};
J = function() {
  return this._searchQuery ? y : h`
			${L(
    m(this, f, H),
    (e) => e.unique,
    (e) => k(this, f, Z).call(this, e)
  )}
		`;
};
Z = function(e) {
  const t = this._selectableFilter(e);
  return h`
			<uui-menu-item
				label=${e.variants[0].name ?? ""}
				?selectable=${t}
				?disabled=${!t}
				@selected=${() => m(this, c).selection.select(e.unique)}
				@deselected=${() => m(this, c).selection.deselect(e.unique)}
				?selected=${m(this, c).selection.isSelected(e.unique)}>
				<umb-icon slot="icon" name=${e.memberType.icon}></umb-icon>
			</uui-menu-item>
		`;
};
ee = function() {
  return h`
			<div slot="actions">
				<uui-button
					label=${this.localize.term("general_cancel")}
					@click=${() => this.modalContext?.reject()}></uui-button>
				<uui-button
					color="positive"
					look="primary"
					label=${this.localize.term("general_choose")}
					@click=${() => this.modalContext?.submit()}></uui-button>
			</div>
		`;
};
_.styles = [Me];
I([
  S()
], _.prototype, "_members", 2);
I([
  S()
], _.prototype, "_searchQuery", 2);
I([
  S()
], _.prototype, "_selectableFilter", 2);
_ = I([
  N("umb-member-picker-modal")
], _);
const Ve = _, Et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbMemberPickerModalElement() {
    return _;
  },
  default: Ve
}, Symbol.toStringTag, { value: "Module" })), Fe = "Umb.Repository.Member.Validation", Ct = [
  {
    type: "repository",
    alias: Fe,
    name: "Member Validation Repository",
    api: () => import("./member-validation.repository-BACTsuWE.js")
  }
];
export {
  Ct as A,
  Mt as B,
  yt as C,
  Et as D,
  w as U,
  De as a,
  fe as b,
  ke as c,
  l as d,
  _ as e,
  B as f,
  mt as g,
  ct as h,
  pt as i,
  W as j,
  Ce as k,
  ut as l,
  q as m,
  Te as n,
  Ue as o,
  bt as p,
  Oe as q,
  Se as r,
  Ie as s,
  D as t,
  _t as u,
  O as v,
  ft as w,
  Fe as x,
  ht as y,
  dt as z
};
//# sourceMappingURL=manifests-BeI4zfAH.js.map
