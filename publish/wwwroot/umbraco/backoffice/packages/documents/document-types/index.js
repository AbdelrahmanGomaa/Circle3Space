import { o as N, e as Y, b as U, t as L, u as B, c as b } from "../constants-CrVNO8d3.js";
import { g as Pe, f as he, B as Ce, v as Re, p as Ae, C as de, i as Se, n as De, r as Ie, H as ye, l as fe, s as Ne, I as Ye, J as Le, h as Be, y as be, D as ve, j as ge, a as xe, M as we, E as We, G as Ke, K as Fe, L as ke, U as $e, F as qe, d as He, q as Xe, k as ze, A as Ve, w as Ge, m as je, x as Je, z as Qe } from "../constants-CrVNO8d3.js";
import { UmbModalToken as v } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL_ALIAS as g } from "@umbraco-cms/backoffice/tree";
import { UmbPickerInputContext as x } from "@umbraco-cms/backoffice/picker-input";
import { html as l, nothing as P, repeat as w, css as W, property as E, state as h, customElement as K } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as F } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as k } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as $ } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as q } from "@umbraco-cms/backoffice/router";
import { UmbSorterController as H } from "@umbraco-cms/backoffice/sorter";
import { UmbFormControlMixin as X } from "@umbraco-cms/backoffice/validation";
import { UmbDocumentTypeDetailRepository as et } from "../document-type-detail.repository-CMq7glm7.js";
import { UmbDocumentTypeItemRepository as rt } from "../document-type-item.repository-CWwJfU44.js";
import { DocumentTypeService as M } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbContentTypeStructureServerDataSourceBase as z, UmbContentTypeStructureRepositoryBase as V } from "@umbraco-cms/backoffice/content-type";
const G = new v(g, {
  modal: {
    type: "sidebar",
    size: "small"
  },
  data: {
    treeAlias: "Umb.Tree.DocumentType",
    createAction: {
      label: "#content_createEmpty",
      modalData: {
        entityType: U,
        preset: {}
      },
      extendWithPathPattern: Y,
      extendWithPathParams: {
        parentEntityType: N,
        parentUnique: null,
        presetAlias: null
      }
    }
  }
}), ce = "Umb.Repository.DocumentType.Structure";
class j extends x {
  constructor(t) {
    super(t, L, G);
  }
}
var J = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, C = (e) => {
  throw TypeError(e);
}, s = (e, t, i, u) => {
  for (var T = u > 1 ? void 0 : u ? Q(t, i) : t, m = e.length - 1, O; m >= 0; m--)
    (O = e[m]) && (T = (u ? O(t, i, T) : O(T)) || T);
  return u && T && J(t, i, T), T;
}, R = (e, t, i) => t.has(e) || C("Cannot " + i), n = (e, t, i) => (R(e, t, "read from private field"), i ? i.call(e) : t.get(e)), c = (e, t, i) => t.has(e) ? C("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), a = (e, t, i) => (R(e, t, "access private method"), i), p, r, o, A, d, S, D, I, y, f;
let _ = class extends X(
  $,
  void 0
) {
  constructor() {
    super(), c(this, o), c(this, p, new H(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputDocumentType",
      itemSelector: "uui-ref-node-document-type",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new k());
      }
    })), this.elementTypesOnly = !1, this.documentTypesOnly = !1, this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this._editPath = "", c(this, r, new j(this)), new q(this, B).addAdditionalPath("document-type").onSetup(() => ({})).observeRouteBuilder((e) => {
      this._editPath = e({});
    }), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && n(this, r).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && n(this, r).getSelection().length > this.max
    ), this.observe(n(this, r).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(n(this, r).selectedItems, (e) => this._items = e, "_observerItems");
  }
  set min(e) {
    n(this, r).min = e;
  }
  get min() {
    return n(this, r).min;
  }
  set max(e) {
    n(this, r).max = e;
  }
  get max() {
    return n(this, r).max;
  }
  set selection(e) {
    n(this, r).setSelection(e), n(this, p).setModel(e);
  }
  get selection() {
    return n(this, r).getSelection();
  }
  set value(e) {
    this.selection = F(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  getFormElement() {
  }
  render() {
    return l`${a(this, o, I).call(this)} ${a(this, o, D).call(this)}`;
  }
};
p = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
A = function() {
  if (this.documentTypesOnly)
    return (e) => e.isFolder === !1 && e.isElement === !1;
  if (this.elementTypesOnly)
    return (e) => e.isElement;
};
d = function() {
  n(this, r).openPicker({
    hideTreeRoot: !0,
    pickableFilter: a(this, o, A).call(this)
  });
};
S = function(e) {
  n(this, r).requestRemoveItem(e.unique);
};
D = function() {
  return this.max > 0 && this.selection.length >= this.max ? P : l`
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${a(this, o, d)}
				label="${this.localize.term("general_choose")}"></uui-button>
		`;
};
I = function() {
  return this._items ? l`
			<uui-ref-list>
				${w(
    this._items,
    (e) => e.unique,
    (e) => a(this, o, y).call(this, e)
  )}
			</uui-ref-list>
		` : P;
};
y = function(e) {
  if (!e.unique) return;
  const t = this._editPath + b.generateLocal({ unique: e.unique });
  return l`
			<uui-ref-node-document-type id=${e.unique} name=${this.localize.string(e.name)} href=${t}>
				${a(this, o, f).call(this, e)}
				<uui-action-bar slot="actions">
					<uui-button @click=${() => a(this, o, S).call(this, e)} label=${this.localize.term("general_remove")}></uui-button>
				</uui-action-bar>
			</uui-ref-node-document-type>
		`;
};
f = function(e) {
  if (e.icon)
    return l`<umb-icon slot="icon" name=${e.icon}></umb-icon>`;
};
_.styles = [
  W`
			#btn-add {
				width: 100%;
			}
		`
];
s([
  E({ attribute: !1 })
], _.prototype, "elementTypesOnly", 2);
s([
  E({ attribute: !1 })
], _.prototype, "documentTypesOnly", 2);
s([
  E({ type: Number })
], _.prototype, "min", 1);
s([
  E({ type: String, attribute: "min-message" })
], _.prototype, "minMessage", 2);
s([
  E({ type: Number })
], _.prototype, "max", 1);
s([
  E({ type: String, attribute: "min-message" })
], _.prototype, "maxMessage", 2);
s([
  E({ type: Array })
], _.prototype, "selection", 1);
s([
  E({ type: String })
], _.prototype, "value", 1);
s([
  h()
], _.prototype, "_items", 2);
s([
  h()
], _.prototype, "_editPath", 2);
_ = s([
  K("umb-input-document-type")
], _);
class Z extends z {
  constructor(t) {
    super(t, { getAllowedChildrenOf: ee, mapper: te });
  }
}
const ee = (e, t) => e ? M.getDocumentTypeByIdAllowedChildren({
  id: e,
  parentContentKey: t ?? void 0
}) : M.getDocumentTypeAllowedAtRoot({}), te = (e) => ({
  unique: e.id,
  entityType: U,
  name: e.name,
  description: e.description || null,
  icon: e.icon || null
});
class pe extends V {
  constructor(t) {
    super(t, Z);
  }
}
export {
  Y as UMB_CREATE_DOCUMENT_TYPE_WORKSPACE_PATH_PATTERN,
  Pe as UMB_CREATE_DOCUMENT_TYPE_WORKSPACE_PRESET_ELEMENT,
  he as UMB_CREATE_DOCUMENT_TYPE_WORKSPACE_PRESET_TEMPLATE,
  Ce as UMB_DOCUMENT_TYPE_COMPOSITION_REPOSITORY_ALIAS,
  Re as UMB_DOCUMENT_TYPE_CREATE_OPTIONS_MODAL,
  Ae as UMB_DOCUMENT_TYPE_DETAIL_REPOSITORY_ALIAS,
  de as UMB_DOCUMENT_TYPE_DETAIL_STORE_ALIAS,
  Se as UMB_DOCUMENT_TYPE_DETAIL_STORE_CONTEXT,
  U as UMB_DOCUMENT_TYPE_ENTITY_TYPE,
  De as UMB_DOCUMENT_TYPE_FOLDER_ENTITY_TYPE,
  Ie as UMB_DOCUMENT_TYPE_FOLDER_REPOSITORY_ALIAS,
  ye as UMB_DOCUMENT_TYPE_FOLDER_STORE_ALIAS,
  fe as UMB_DOCUMENT_TYPE_FOLDER_STORE_CONTEXT,
  Ne as UMB_DOCUMENT_TYPE_FOLDER_WORKSPACE_ALIAS,
  Ye as UMB_DOCUMENT_TYPE_FOLDER_WORKSPACE_CONTEXT,
  Le as UMB_DOCUMENT_TYPE_FOLDER_WORKSPACE_PATH,
  Be as UMB_DOCUMENT_TYPE_IMPORT_MODAL,
  be as UMB_DOCUMENT_TYPE_IMPORT_REPOSITORY_ALIAS,
  L as UMB_DOCUMENT_TYPE_ITEM_REPOSITORY_ALIAS,
  ve as UMB_DOCUMENT_TYPE_ITEM_STORE_ALIAS,
  ge as UMB_DOCUMENT_TYPE_ITEM_STORE_CONTEXT,
  G as UMB_DOCUMENT_TYPE_PICKER_MODAL,
  xe as UMB_DOCUMENT_TYPE_PROPERTY_TYPE_ENTITY_TYPE,
  N as UMB_DOCUMENT_TYPE_ROOT_ENTITY_TYPE,
  we as UMB_DOCUMENT_TYPE_ROOT_WORKSPACE_ALIAS,
  We as UMB_DOCUMENT_TYPE_SEARCH_PROVIDER_ALIAS,
  ce as UMB_DOCUMENT_TYPE_STRUCTURE_REPOSITORY_ALIAS,
  Ke as UMB_DOCUMENT_TYPE_TREE_ALIAS,
  Fe as UMB_DOCUMENT_TYPE_TREE_ITEM_CHILDREN_COLLECTION_ALIAS,
  ke as UMB_DOCUMENT_TYPE_TREE_ITEM_CHILDREN_COLLECTION_REPOSITORY_ALIAS,
  $e as UMB_DOCUMENT_TYPE_TREE_REPOSITORY_ALIAS,
  qe as UMB_DOCUMENT_TYPE_TREE_STORE_ALIAS,
  He as UMB_DOCUMENT_TYPE_TREE_STORE_CONTEXT,
  Xe as UMB_DOCUMENT_TYPE_WORKSPACE_ALIAS,
  ze as UMB_DOCUMENT_TYPE_WORKSPACE_CONTEXT,
  B as UMB_DOCUMENT_TYPE_WORKSPACE_MODAL,
  Ve as UMB_DOCUMENT_TYPE_WORKSPACE_PATH,
  Ge as UMB_DUPLICATE_DOCUMENT_TYPE_REPOSITORY_ALIAS,
  je as UMB_EDIT_DOCUMENT_TYPE_FOLDER_WORKSPACE_PATH_PATTERN,
  b as UMB_EDIT_DOCUMENT_TYPE_WORKSPACE_PATH_PATTERN,
  Je as UMB_EXPORT_DOCUMENT_TYPE_REPOSITORY_ALIAS,
  Qe as UMB_MOVE_DOCUMENT_TYPE_REPOSITORY_ALIAS,
  et as UmbDocumentTypeDetailRepository,
  rt as UmbDocumentTypeItemRepository,
  j as UmbDocumentTypePickerContext,
  j as UmbDocumentTypePickerInputContext,
  pe as UmbDocumentTypeStructureRepository,
  _ as UmbInputDocumentTypeElement
};
//# sourceMappingURL=index.js.map
