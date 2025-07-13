import { r as g, s as C, b as B } from "../constants-CHY0fXo5.js";
import { j as Ie, u as Pe, l as he, c as Oe, v as Re, B as Se, t as fe, o as ye, C as Ue, h as De, m as Ye, f as ge, G as Ce, k as Be, q as be, H as Le, I as ve, g as xe, w as we, D as Fe, i as Ne, a as We, n as Ke, y as $e, A as qe, F as ke, J as He, K as Xe, U as ze, E as Ve, d as Ge, p as je, e as Je, z as Qe, x as Ze } from "../constants-CHY0fXo5.js";
import { MediaTypeService as M } from "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { UmbPickerInputContext as b } from "@umbraco-cms/backoffice/picker-input";
import { html as l, nothing as P, repeat as L, css as v, property as u, state as h, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as w } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as F } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as N } from "@umbraco-cms/backoffice/lit-element";
import { UMB_WORKSPACE_MODAL as W } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as K } from "@umbraco-cms/backoffice/router";
import { UmbSorterController as $ } from "@umbraco-cms/backoffice/sorter";
import { UmbFormControlMixin as q } from "@umbraco-cms/backoffice/validation";
import { UmbMediaTypeDetailRepository as tt } from "../media-type-detail.repository-3lOqmWA1.js";
import { UmbMediaTypeItemRepository as rt } from "../media-type-item.repository-CgmkdcvQ.js";
import { UmbContentTypeStructureServerDataSourceBase as k, UmbContentTypeStructureRepositoryBase as H } from "@umbraco-cms/backoffice/content-type";
import { UmbMediaTypeFolderRepository as _t } from "../media-type-folder.repository-DbqwPAKh.js";
const pe = "Umb.Repository.MediaType.Structure";
class X extends b {
  constructor(t) {
    super(t, g, C);
  }
}
var z = Object.defineProperty, V = Object.getOwnPropertyDescriptor, O = (e) => {
  throw TypeError(e);
}, a = (e, t, i, _) => {
  for (var o = _ > 1 ? void 0 : _ ? V(t, i) : t, p = e.length - 1, d; p >= 0; p--)
    (d = e[p]) && (o = (_ ? d(t, i, o) : d(o)) || o);
  return _ && o && z(t, i, o), o;
}, R = (e, t, i) => t.has(e) || O("Cannot " + i), s = (e, t, i) => (R(e, t, "read from private field"), i ? i.call(e) : t.get(e)), m = (e, t, i) => t.has(e) ? O("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), T = (e, t, i) => (R(e, t, "access private method"), i), A, r, E, S, f, y, U, D, Y;
let n = class extends q(
  N
) {
  constructor() {
    super(), m(this, E), m(this, A, new $(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputMediaType",
      itemSelector: "uui-ref-node-document-type",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new F());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this._editPath = "", m(this, r, new X(this)), new K(this, W).addAdditionalPath("media-type").onSetup(() => ({ data: { entityType: "media-type", preset: {} } })).observeRouteBuilder((e) => {
      this._editPath = e({});
    }), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && s(this, r).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && s(this, r).getSelection().length > this.max
    ), this.observe(s(this, r).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(s(this, r).selectedItems, (e) => this._items = e, "_observerItems");
  }
  set min(e) {
    s(this, r).min = e;
  }
  get min() {
    return s(this, r).min;
  }
  set max(e) {
    s(this, r).max = e;
  }
  get max() {
    return s(this, r).max;
  }
  set selection(e) {
    s(this, r).setSelection(e), s(this, A).setModel(e);
  }
  get selection() {
    return s(this, r).getSelection();
  }
  set value(e) {
    this.selection = w(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  getFormElement() {
  }
  render() {
    return l`${T(this, E, U).call(this)} ${T(this, E, y).call(this)}`;
  }
};
A = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakSet();
S = function() {
  s(this, r).openPicker({
    hideTreeRoot: !0
  });
};
f = function(e) {
  s(this, r).requestRemoveItem(e.unique);
};
y = function() {
  return this.max > 0 && this.selection.length >= this.max ? P : l`
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${T(this, E, S)}
				label="${this.localize.term("general_choose")}"></uui-button>
		`;
};
U = function() {
  return this._items ? l`
			<uui-ref-list>
				${L(
    this._items,
    (e) => e.unique,
    (e) => T(this, E, D).call(this, e)
  )}
			</uui-ref-list>
		` : P;
};
D = function(e) {
  if (!e.unique) return;
  const t = `${this._editPath}edit/${e.unique}`;
  return l`
			<uui-ref-node-document-type name=${this.localize.string(e.name)} id=${e.unique}>
				${T(this, E, Y).call(this, e)}
				<uui-action-bar slot="actions">
					<uui-button href=${t} label=${this.localize.term("general_open")}></uui-button>
					<uui-button @click=${() => T(this, E, f).call(this, e)} label=${this.localize.term("general_remove")}></uui-button>
				</uui-action-bar>
			</uui-ref-node-document-type>
		`;
};
Y = function(e) {
  if (e.icon)
    return l`<umb-icon slot="icon" name=${e.icon}></umb-icon>`;
};
n.styles = [
  v`
			#btn-add {
				width: 100%;
			}
		`
];
a([
  u({ type: Number })
], n.prototype, "min", 1);
a([
  u({ type: String, attribute: "min-message" })
], n.prototype, "minMessage", 2);
a([
  u({ type: Number })
], n.prototype, "max", 1);
a([
  u({ type: String, attribute: "min-message" })
], n.prototype, "maxMessage", 2);
a([
  u({ type: Array })
], n.prototype, "selection", 1);
a([
  u({ type: String })
], n.prototype, "value", 1);
a([
  h()
], n.prototype, "_items", 2);
a([
  h()
], n.prototype, "_editPath", 2);
n = a([
  x("umb-input-media-type")
], n);
class I extends k {
  constructor(t) {
    super(t, { getAllowedChildrenOf: G, mapper: c });
  }
  getMediaTypesOfFileExtension({ fileExtension: t, skip: i, take: _ }) {
    return J({ fileExtension: t, skip: i, take: _ });
  }
  getMediaTypesOfFolders({ skip: t, take: i }) {
    return j({ skip: t, take: i });
  }
}
const G = (e, t) => e ? M.getMediaTypeByIdAllowedChildren({
  id: e,
  parentContentKey: t ?? void 0
}) : M.getMediaTypeAllowedAtRoot({}), c = (e) => ({
  unique: e.id,
  entityType: B,
  name: e.name,
  description: e.description || null,
  icon: e.icon || null
}), j = async ({ skip: e, take: t }) => {
  const { items: i } = await M.getItemMediaTypeFolders({ skip: e, take: t });
  return i.map((_) => c(_));
}, J = async ({
  fileExtension: e,
  skip: t,
  take: i
}) => {
  const { items: _ } = await M.getItemMediaTypeAllowed({ fileExtension: e, skip: t, take: i });
  return _.map((o) => c(o));
};
class de extends H {
  #e;
  constructor(t) {
    super(t, I), this.#e = new I(t);
  }
  async requestMediaTypesOf({
    fileExtension: t,
    skip: i = 0,
    take: _ = 100
  }) {
    return this.#e.getMediaTypesOfFileExtension({ fileExtension: t, skip: i, take: _ });
  }
  async requestMediaTypesOfFolders({ skip: t = 0, take: i = 100 } = {}) {
    return this.#e.getMediaTypesOfFolders({ skip: t, take: i });
  }
}
function Q() {
  return "f38bd2d7-65d0-48e6-95dc-87ce06ec2d3d";
}
function me(e) {
  return e === Q();
}
export {
  Ie as UMB_CREATE_MEDIA_TYPE_WORKSPACE_PATH_PATTERN,
  Pe as UMB_DUPLICATE_MEDIA_TYPE_REPOSITORY_ALIAS,
  he as UMB_EDIT_MEDIA_TYPE_FOLDER_WORKSPACE_PATH_PATTERN,
  Oe as UMB_EDIT_MEDIA_TYPE_WORKSPACE_PATH_PATTERN,
  Re as UMB_EXPORT_MEDIA_TYPE_REPOSITORY_ALIAS,
  Se as UMB_MEDIA_TYPE_COMPOSITION_REPOSITORY_ALIAS,
  fe as UMB_MEDIA_TYPE_CREATE_OPTIONS_MODAL,
  ye as UMB_MEDIA_TYPE_DETAIL_REPOSITORY_ALIAS,
  Ue as UMB_MEDIA_TYPE_DETAIL_STORE_ALIAS,
  De as UMB_MEDIA_TYPE_DETAIL_STORE_CONTEXT,
  B as UMB_MEDIA_TYPE_ENTITY_TYPE,
  Ye as UMB_MEDIA_TYPE_FOLDER_ENTITY_TYPE,
  ge as UMB_MEDIA_TYPE_FOLDER_REPOSITORY_ALIAS,
  Ce as UMB_MEDIA_TYPE_FOLDER_STORE_ALIAS,
  Be as UMB_MEDIA_TYPE_FOLDER_STORE_CONTEXT,
  be as UMB_MEDIA_TYPE_FOLDER_WORKSPACE_ALIAS,
  Le as UMB_MEDIA_TYPE_FOLDER_WORKSPACE_CONTEXT,
  ve as UMB_MEDIA_TYPE_FOLDER_WORKSPACE_PATH,
  xe as UMB_MEDIA_TYPE_IMPORT_MODAL,
  we as UMB_MEDIA_TYPE_IMPORT_REPOSITORY_ALIAS,
  g as UMB_MEDIA_TYPE_ITEM_REPOSITORY_ALIAS,
  Fe as UMB_MEDIA_TYPE_ITEM_STORE_ALIAS,
  Ne as UMB_MEDIA_TYPE_ITEM_STORE_CONTEXT,
  C as UMB_MEDIA_TYPE_PICKER_MODAL,
  We as UMB_MEDIA_TYPE_PROPERTY_TYPE_ENTITY_TYPE,
  Ke as UMB_MEDIA_TYPE_ROOT_ENTITY_TYPE,
  $e as UMB_MEDIA_TYPE_ROOT_WORKSPACE_ALIAS,
  qe as UMB_MEDIA_TYPE_ROOT_WORKSPACE_PATH,
  pe as UMB_MEDIA_TYPE_STRUCTURE_REPOSITORY_ALIAS,
  ke as UMB_MEDIA_TYPE_TREE_ALIAS,
  He as UMB_MEDIA_TYPE_TREE_ITEM_CHILDREN_COLLECTION_ALIAS,
  Xe as UMB_MEDIA_TYPE_TREE_ITEM_CHILDREN_COLLECTION_REPOSITORY_ALIAS,
  ze as UMB_MEDIA_TYPE_TREE_REPOSITORY_ALIAS,
  Ve as UMB_MEDIA_TYPE_TREE_STORE_ALIAS,
  Ge as UMB_MEDIA_TYPE_TREE_STORE_CONTEXT,
  je as UMB_MEDIA_TYPE_WORKSPACE_ALIAS,
  Je as UMB_MEDIA_TYPE_WORKSPACE_CONTEXT,
  Qe as UMB_MEDIA_TYPE_WORKSPACE_PATH,
  Ze as UMB_MOVE_MEDIA_TYPE_REPOSITORY_ALIAS,
  n as UmbInputMediaTypeElement,
  tt as UmbMediaTypeDetailRepository,
  _t as UmbMediaTypeFolderRepository,
  rt as UmbMediaTypeItemRepository,
  X as UmbMediaTypePickerContext,
  X as UmbMediaTypePickerInputContext,
  de as UmbMediaTypeStructureRepository,
  Q as getUmbracoFolderUnique,
  me as isUmbracoFolder
};
//# sourceMappingURL=index.js.map
