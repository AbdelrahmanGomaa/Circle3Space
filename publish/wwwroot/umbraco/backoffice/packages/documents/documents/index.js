import { y as X, f as G, N as J } from "../manifests-BUr6Ff2j.js";
import { a2 as ge, Z as xe, _ as Ye, a8 as we, O as $e, D as He, L as ke, K as We, R as qe, M as Ke, j as Ve, P as Fe, k as ze, F as Xe, G as Ge, ad as Je, r as Qe, d as Ze, Q as je, p as et, o as tt, W as _t, X as rt, au as st, h as at, a5 as ot, i as it, v as nt, a4 as Et, C as Ut, a3 as lt, a9 as Tt, A as Ot, ac as Mt, aa as ut, ab as ct, z as mt, x as It, m as Ct, E as St, a0 as Rt, B as At, a6 as Nt, $ as Dt, c as pt, U as ht, b as dt, av as Lt, a as ft, q as Bt, a7 as bt, ag as Pt, ah as yt, t as vt, I as gt, H as xt, g as Yt, a1 as wt, l as $t, S as Ht, T as kt, e as Wt, V as qt, n as Kt, s as Vt, ae as Ft, af as zt, Y as Xt, J as Gt, ak as Jt, ar as Qt, aj as Zt, ao as jt, ap as e_, al as t_, am as __, as as r_, w as s_, ai as a_, at as o_, aq as i_, an as n_, u as E_ } from "../manifests-BUr6Ff2j.js";
import { UmbPickerInputContext as Q } from "@umbraco-cms/backoffice/picker-input";
import { html as n, nothing as S, repeat as f, when as Z, css as B, property as U, state as p, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as j, UmbDeprecation as ee } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as te } from "@umbraco-cms/backoffice/event";
import { UmbFormControlMixin as _e } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as P } from "@umbraco-cms/backoffice/lit-element";
import { UmbSorterController as re } from "@umbraco-cms/backoffice/sorter";
import { UMB_DOCUMENT_TYPE_ENTITY_TYPE as se } from "@umbraco-cms/backoffice/document-type";
import { U as l_ } from "../document-audit-log.repository-CHm64Rly.js";
import { UmbPublicAccessModalElement as O_ } from "../public-access-modal.element-qIHal7AY.js";
import { U as u_, a as c_ } from "../culture-and-hostnames-modal.element-BYx6mjLk.js";
import { UmbSortChildrenOfDocumentRepository as I_ } from "../sort-children-of.repository--DUFGghY.js";
import { UMB_DOCUMENT_CONFIGURATION_CONTEXT as S_, UmbDocumentConfigurationContext as R_ } from "../document-configuration.context-O-fJ6QkZ.js";
import { UmbDocumentItemRepository as N_ } from "../document-item.repository-DGfmiV4g.js";
import { U as p_ } from "../document-item-data-resolver-CCvZ1xDq.js";
import { U as d_ } from "../document-variant-language-picker.element-azTXCKTU.js";
import { UmbDocumentPublishingRepository as f_ } from "../document-publishing.repository-ypBwqj-c.js";
import { UmbDocumentRecycleBinTreeRepository as b_ } from "../document-recycle-bin-tree.repository-B6iMMzLh.js";
import "@umbraco-cms/backoffice/tree";
import { UmbDocumentReferenceRepository as ae } from "../document-reference.repository-BUhJlypD.js";
import { UmbTextStyles as oe } from "@umbraco-cms/backoffice/style";
import { isDocumentReference as y, isMediaReference as v, isMemberReference as ie, isDefaultReference as g } from "@umbraco-cms/backoffice/relations";
import { UmbDocumentDetailRepository as y_ } from "../document-detail.repository-kH54fJDj.js";
import { U as g_ } from "../document-preview.repository-Boowp7BD.js";
import { UmbDocumentTreeRepository as Y_ } from "../document-tree.repository-CvewjBF0.js";
import { UmbDocumentUrlRepository as $_ } from "../document-url.repository-CzVCI_eW.js";
import { UmbDocumentPermissionRepository as k_ } from "../document-permission.repository-CaW-5yFk.js";
const de = "Umb.Repository.Document.CreateBlueprint", Le = "Umb.Repository.Document.CultureAndHostnames", fe = "Umb.Repository.Document.PublicAccess", Be = "Umb.Repository.Document.Validation", be = "Umb.Condition.Workspace.DocumentIsNotTrashed", Pe = "Umb.Condition.Workspace.DocumentIsTrashed";
class ne extends Q {
  constructor(t) {
    super(t, X, G);
  }
  async openPicker(t, _) {
    const r = {
      ...t
    };
    r.pickableFilter = (s) => this.#e(s, _?.allowedContentTypes), t?.search || (r.search = {
      providerAlias: J,
      ...t?.search
    }), r.search.queryParams = {
      allowedContentTypes: _?.allowedContentTypes,
      ...t?.search?.queryParams
    }, await super.openPicker(r);
  }
  #e = (t, _) => _ && _.length > 0 ? _.map((r) => r.unique).includes(t.documentType.unique) : !0;
}
var Ee = Object.defineProperty, Ue = Object.getOwnPropertyDescriptor, x = (e) => {
  throw TypeError(e);
}, E = (e, t, _, r) => {
  for (var s = r > 1 ? void 0 : r ? Ue(t, _) : t, l = e.length - 1, T; l >= 0; l--)
    (T = e[l]) && (s = (r ? T(t, _, s) : T(s)) || s);
  return r && s && Ee(t, _, s), s;
}, d = (e, t, _) => t.has(e) || x("Cannot " + _), a = (e, t, _) => (d(e, t, "read from private field"), _ ? _.call(e) : t.get(e)), A = (e, t, _) => t.has(e) ? x("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, _), le = (e, t, _, r) => (d(e, t, "write to private field"), t.set(e, _), _), D = (e, t, _) => (d(e, t, "access private method"), _), c, m, o, u, Y, w, $, H;
let i = class extends _e(
  P
) {
  constructor() {
    super(), A(this, u), A(this, c, new re(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputDocument",
      itemSelector: "umb-entity-item-ref",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new te());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", A(this, m, !1), A(this, o, new ne(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this.selection.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this.selection.length > this.max
    ), this.observe(a(this, o).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(a(this, o).selectedItems, (e) => this._items = e, "_observerItems");
  }
  set min(e) {
    a(this, o).min = e;
  }
  get min() {
    return a(this, o).min;
  }
  set max(e) {
    a(this, o).max = e;
  }
  get max() {
    return a(this, o).max;
  }
  set selection(e) {
    a(this, o).setSelection(e), a(this, c).setModel(e);
  }
  get selection() {
    return a(this, o).getSelection();
  }
  set value(e) {
    this.selection = j(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  get readonly() {
    return a(this, m);
  }
  set readonly(e) {
    le(this, m, e), a(this, m) ? a(this, c).disable() : a(this, c).enable();
  }
  render() {
    return n`${D(this, u, H).call(this)} ${D(this, u, $).call(this)}`;
  }
};
c = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
Y = function() {
  a(this, o).openPicker(
    {
      hideTreeRoot: !0,
      startNode: this.startNode
    },
    {
      allowedContentTypes: this.allowedContentTypeIds?.map((e) => ({
        unique: e,
        entityType: se
      }))
    }
  );
};
w = function(e) {
  a(this, o).requestRemoveItem(e.unique);
};
$ = function() {
  return this.selection.length >= this.max ? S : this.readonly && this.selection.length > 0 ? S : n`
				<uui-button
					id="btn-add"
					look="placeholder"
					@click=${D(this, u, Y)}
					label=${this.localize.term("general_choose")}
					?disabled=${this.readonly}></uui-button>
			`;
};
H = function() {
  if (this._items)
    return n`
			<uui-ref-list>
				${f(
      this._items,
      (e) => e.unique,
      (e) => n`<umb-entity-item-ref
							id=${e.unique}
							.item=${e}
							?readonly=${this.readonly}
							?standalone=${this.max === 1}>
							${Z(
        !this.readonly,
        () => n`
									<uui-action-bar slot="actions">
										<uui-button
											label=${this.localize.term("general_remove")}
											@click=${() => D(this, u, w).call(this, e)}></uui-button>
									</uui-action-bar>
								`
      )}
						</umb-entity-item-ref>`
    )}
			</uui-ref-list>
		`;
};
i.styles = [
  B`
			#btn-add {
				display: block;
			}

			umb-entity-item-ref[drag-placeholder] {
				opacity: 0.2;
			}
		`
];
E([
  U({ type: Number })
], i.prototype, "min", 1);
E([
  U({ type: String, attribute: "min-message" })
], i.prototype, "minMessage", 2);
E([
  U({ type: Number })
], i.prototype, "max", 1);
E([
  U({ type: String, attribute: "max-message" })
], i.prototype, "maxMessage", 2);
E([
  U({ type: Object, attribute: !1 })
], i.prototype, "startNode", 2);
E([
  U({ type: Array })
], i.prototype, "allowedContentTypeIds", 2);
E([
  U({ type: String })
], i.prototype, "value", 1);
E([
  U({ type: Boolean, reflect: !0 })
], i.prototype, "readonly", 1);
E([
  p()
], i.prototype, "_items", 2);
i = E([
  b("umb-input-document")
], i);
var Te = Object.defineProperty, Oe = Object.getOwnPropertyDescriptor, k = (e) => {
  throw TypeError(e);
}, R = (e, t, _, r) => {
  for (var s = r > 1 ? void 0 : r ? Oe(t, _) : t, l = e.length - 1, T; l >= 0; l--)
    (T = e[l]) && (s = (r ? T(t, _, s) : T(s)) || s);
  return r && s && Te(t, _, s), s;
}, W = (e, t, _) => t.has(e) || k("Cannot " + _), N = (e, t, _) => (W(e, t, "read from private field"), _ ? _.call(e) : t.get(e)), h = (e, t, _) => t.has(e) ? k("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, _), I = (e, t, _) => (W(e, t, "access private method"), _), L, C, O, q, K, V, F, z;
let M = class extends P {
  constructor() {
    super(...arguments), h(this, O), h(this, L, new ae(this)), h(this, C, 10), this.unique = "", this._items = [], this._hasMoreReferences = 0, this._errorMessage = "";
  }
  firstUpdated() {
    new ee({
      removeInVersion: "17",
      deprecated: "<umb-document-reference-table> element",
      solution: "For modals use the <umb-confirm-action-modal-entity-references> or <umb-confirm-bulk-action-modal-entity-references> element instead"
    }).warn(), I(this, O, q).call(this);
  }
  render() {
    return n` ${I(this, O, z).call(this)} ${I(this, O, F).call(this)} `;
  }
};
L = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
O = /* @__PURE__ */ new WeakSet();
q = async function() {
  const { data: e, error: t } = await N(this, L).requestReferencedBy(this.unique, 0, N(this, C));
  if (t) {
    this._errorMessage = t.message;
    return;
  }
  e && (this._items = e.items, this._hasMoreReferences = e.total > N(this, C) ? e.total - N(this, C) : 0);
};
K = function(e) {
  return y(e) ? e.documentType.icon ?? "icon-document" : v(e) ? e.mediaType.icon ?? "icon-picture" : ie(e) ? e.memberType.icon ?? "icon-user" : g(e) ? e.icon ?? "icon-document" : "icon-document";
};
V = function(e) {
  return y(e) ? e.documentType.name : v(e) ? e.mediaType.name : g(e) ? e.type : "";
};
F = function() {
  return this._items?.length === 0 ? S : n`
			<uui-box headline=${this.localize.term("references_labelDependsOnThis")} style="--uui-box-default-padding:0">
				<uui-table>
					<uui-table-head>
						<uui-table-head-cell></uui-table-head-cell>
						<uui-table-head-cell><umb-localize key="general_name">Name</umb-localize></uui-table-head-cell>
						<uui-table-head-cell><umb-localize key="general_typeName">Type Name</umb-localize></uui-table-head-cell>
					</uui-table-head>

					${f(
    this._items,
    (e) => e.id,
    (e) => n`<uui-table-row>
								<uui-table-cell style="text-align:center;">
									<umb-icon name=${I(this, O, K).call(this, e)}></umb-icon>
								</uui-table-cell>
								<uui-table-cell class="link-cell"> ${e.name} </uui-table-cell>
								<uui-table-cell>${I(this, O, V).call(this, e)}</uui-table-cell>
							</uui-table-row>`
  )}
					${this._hasMoreReferences ? n`<uui-table-row>
								<uui-table-cell></uui-table-cell>
								<uui-table-cell>
									<umb-localize key="references_labelMoreReferences" .args="${[this._hasMoreReferences]}">
										...and ${this._hasMoreReferences} more items
									</umb-localize>
								</uui-table-cell>
								<uui-table-cell></uui-table-cell>
							</uui-table-row>` : S}
				</uui-table>
			</uui-box>
		`;
};
z = function() {
  return this._errorMessage ? n`<div id="error"><strong>${this._errorMessage}</strong></div>` : S;
};
M.styles = [
  oe,
  B`
			#error {
				color: var(--uui-color-negative);
				margin-bottom: 1rem;
			}
		`
];
R([
  U()
], M.prototype, "unique", 2);
R([
  p()
], M.prototype, "_items", 2);
R([
  p()
], M.prototype, "_hasMoreReferences", 2);
R([
  p()
], M.prototype, "_errorMessage", 2);
M = R([
  b("umb-document-reference-table")
], M);
export {
  ge as IsDocumentPropertyDatasetContext,
  xe as UMB_BULK_DUPLICATE_DOCUMENT_REPOSITORY_ALIAS,
  Ye as UMB_BULK_MOVE_DOCUMENT_REPOSITORY_ALIAS,
  we as UMB_BULK_TRASH_DOCUMENT_REPOSITORY_ALIAS,
  $e as UMB_CONTENT_MENU_ALIAS,
  He as UMB_CREATE_BLUEPRINT_MODAL,
  ke as UMB_CREATE_DOCUMENT_WORKSPACE_PATH_PATTERN,
  We as UMB_CREATE_FROM_BLUEPRINT_DOCUMENT_WORKSPACE_PATH_PATTERN,
  qe as UMB_CULTURE_AND_HOSTNAMES_MODAL,
  Ke as UMB_DOCUMENT_COLLECTION_ALIAS,
  Ve as UMB_DOCUMENT_COLLECTION_CONTEXT,
  Fe as UMB_DOCUMENT_COLLECTION_REPOSITORY_ALIAS,
  S_ as UMB_DOCUMENT_CONFIGURATION_CONTEXT,
  de as UMB_DOCUMENT_CREATE_BLUEPRINT_REPOSITORY_ALIAS,
  ze as UMB_DOCUMENT_CREATE_OPTIONS_MODAL,
  Le as UMB_DOCUMENT_CULTURE_AND_HOSTNAMES_REPOSITORY_ALIAS,
  Xe as UMB_DOCUMENT_DETAIL_MODEL_VARIANT_SCAFFOLD,
  Ge as UMB_DOCUMENT_DETAIL_REPOSITORY_ALIAS,
  Je as UMB_DOCUMENT_DETAIL_STORE_ALIAS,
  Qe as UMB_DOCUMENT_DETAIL_STORE_CONTEXT,
  Ze as UMB_DOCUMENT_ENTITY_TYPE,
  je as UMB_DOCUMENT_GRID_COLLECTION_VIEW_ALIAS,
  be as UMB_DOCUMENT_IS_NOT_TRASHED_CONDITION_ALIAS,
  Pe as UMB_DOCUMENT_IS_TRASHED_CONDITION_ALIAS,
  X as UMB_DOCUMENT_ITEM_REPOSITORY_ALIAS,
  et as UMB_DOCUMENT_ITEM_STORE_CONTEXT,
  tt as UMB_DOCUMENT_NOTIFICATIONS_MODAL,
  _t as UMB_DOCUMENT_NOTIFICATIONS_MODAL_ALIAS,
  rt as UMB_DOCUMENT_NOTIFICATIONS_REPOSITORY_ALIAS,
  st as UMB_DOCUMENT_PERMISSION_REPOSITORY_ALIAS,
  G as UMB_DOCUMENT_PICKER_MODAL,
  at as UMB_DOCUMENT_PROPERTY_DATASET_CONTEXT,
  fe as UMB_DOCUMENT_PUBLIC_ACCESS_REPOSITORY_ALIAS,
  ot as UMB_DOCUMENT_PUBLISHING_REPOSITORY_ALIAS,
  it as UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT,
  nt as UMB_DOCUMENT_PUBLISH_MODAL,
  Et as UMB_DOCUMENT_PUBLISH_MODAL_ALIAS,
  Ut as UMB_DOCUMENT_PUBLISH_WITH_DESCENDANTS_MODAL,
  lt as UMB_DOCUMENT_PUBLISH_WITH_DESCENDANTS_MODAL_ALIAS,
  Tt as UMB_DOCUMENT_RECYCLE_BIN_REPOSITORY_ALIAS,
  Ot as UMB_DOCUMENT_RECYCLE_BIN_ROOT_ENTITY_TYPE,
  Mt as UMB_DOCUMENT_RECYCLE_BIN_TREE_ALIAS,
  ut as UMB_DOCUMENT_RECYCLE_BIN_TREE_REPOSITORY_ALIAS,
  ct as UMB_DOCUMENT_RECYCLE_BIN_TREE_STORE_ALIAS,
  mt as UMB_DOCUMENT_RECYCLE_BIN_TREE_STORE_CONTEXT,
  It as UMB_DOCUMENT_REFERENCE_REPOSITORY_ALIAS,
  Ct as UMB_DOCUMENT_ROOT_ENTITY_TYPE,
  St as UMB_DOCUMENT_SAVE_MODAL,
  Rt as UMB_DOCUMENT_SAVE_MODAL_ALIAS,
  At as UMB_DOCUMENT_SCHEDULE_MODAL,
  Nt as UMB_DOCUMENT_SCHEDULE_MODAL_ALIAS,
  J as UMB_DOCUMENT_SEARCH_PROVIDER_ALIAS,
  Dt as UMB_DOCUMENT_STORE_ALIAS,
  pt as UMB_DOCUMENT_TABLE_COLLECTION_VIEW_ALIAS,
  ht as UMB_DOCUMENT_TREE_ALIAS,
  dt as UMB_DOCUMENT_TREE_REPOSITORY_ALIAS,
  Lt as UMB_DOCUMENT_TREE_STORE_ALIAS,
  ft as UMB_DOCUMENT_TREE_STORE_CONTEXT,
  Bt as UMB_DOCUMENT_UNPUBLISH_MODAL,
  bt as UMB_DOCUMENT_UNPUBLISH_MODAL_ALIAS,
  Pt as UMB_DOCUMENT_URL_REPOSITORY_ALIAS,
  yt as UMB_DOCUMENT_URL_STORE_ALIAS,
  vt as UMB_DOCUMENT_URL_STORE_CONTEXT,
  gt as UMB_DOCUMENT_USER_PERMISSION_CONDITION_ALIAS,
  Be as UMB_DOCUMENT_VALIDATION_REPOSITORY_ALIAS,
  xt as UMB_DOCUMENT_WORKSPACE_ALIAS,
  Yt as UMB_DOCUMENT_WORKSPACE_CONTEXT,
  wt as UMB_DOCUMENT_WORKSPACE_PATH,
  $t as UMB_DUPLICATE_DOCUMENT_MODAL,
  Ht as UMB_DUPLICATE_DOCUMENT_MODAL_ALIAS,
  kt as UMB_DUPLICATE_DOCUMENT_REPOSITORY_ALIAS,
  Wt as UMB_EDIT_DOCUMENT_WORKSPACE_PATH_PATTERN,
  qt as UMB_MOVE_DOCUMENT_REPOSITORY_ALIAS,
  Kt as UMB_PUBLIC_ACCESS_MODAL,
  Vt as UMB_ROLLBACK_MODAL,
  Ft as UMB_ROLLBACK_MODAL_ALIAS,
  zt as UMB_ROLLBACK_REPOSITORY_ALIAS,
  Xt as UMB_SORT_CHILDREN_OF_DOCUMENT_REPOSITORY_ALIAS,
  Gt as UMB_USER_PERMISSION_DOCUMENT_CREATE,
  Jt as UMB_USER_PERMISSION_DOCUMENT_CREATE_BLUEPRINT,
  Qt as UMB_USER_PERMISSION_DOCUMENT_CULTURE_AND_HOSTNAMES,
  Zt as UMB_USER_PERMISSION_DOCUMENT_DELETE,
  jt as UMB_USER_PERMISSION_DOCUMENT_DUPLICATE,
  e_ as UMB_USER_PERMISSION_DOCUMENT_MOVE,
  t_ as UMB_USER_PERMISSION_DOCUMENT_NOTIFICATIONS,
  __ as UMB_USER_PERMISSION_DOCUMENT_PERMISSIONS,
  r_ as UMB_USER_PERMISSION_DOCUMENT_PUBLIC_ACCESS,
  s_ as UMB_USER_PERMISSION_DOCUMENT_PUBLISH,
  a_ as UMB_USER_PERMISSION_DOCUMENT_READ,
  o_ as UMB_USER_PERMISSION_DOCUMENT_ROLLBACK,
  i_ as UMB_USER_PERMISSION_DOCUMENT_SORT,
  n_ as UMB_USER_PERMISSION_DOCUMENT_UNPUBLISH,
  E_ as UMB_USER_PERMISSION_DOCUMENT_UPDATE,
  u_ as UmbCultureAndHostnamesModalElement,
  l_ as UmbDocumentAuditLogRepository,
  R_ as UmbDocumentConfigurationContext,
  c_ as UmbDocumentCultureAndHostnamesRepository,
  y_ as UmbDocumentDetailRepository,
  p_ as UmbDocumentItemDataResolver,
  N_ as UmbDocumentItemRepository,
  k_ as UmbDocumentPermissionRepository,
  ne as UmbDocumentPickerContext,
  ne as UmbDocumentPickerInputContext,
  g_ as UmbDocumentPreviewRepository,
  f_ as UmbDocumentPublishingRepository,
  b_ as UmbDocumentRecycleBinTreeRepository,
  ae as UmbDocumentReferenceRepository,
  M as UmbDocumentReferenceTableElement,
  Y_ as UmbDocumentTreeRepository,
  $_ as UmbDocumentUrlRepository,
  d_ as UmbDocumentVariantLanguagePickerElement,
  i as UmbInputDocumentElement,
  O_ as UmbPublicAccessModalElement,
  I_ as UmbSortChildrenOfDocumentRepository,
  i as element
};
//# sourceMappingURL=index.js.map
