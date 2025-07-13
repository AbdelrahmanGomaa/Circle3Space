import { UmbContextToken as E } from "@umbraco-cms/backoffice/context-api";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { UmbModalToken as K } from "@umbraco-cms/backoffice/modal";
import { UmbPickerInputContext as Y } from "@umbraco-cms/backoffice/picker-input";
import { html as p, ifDefined as H, nothing as V, css as O, property as m, state as b, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { UUIFormControlMixin as X, UUIRefNodeElement as g } from "@umbraco-cms/backoffice/external/uui";
import { UmbLitElement as q } from "@umbraco-cms/backoffice/lit-element";
import { UMB_WORKSPACE_MODAL as F, UMB_WORKSPACE_PATH_PATTERN as T } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as j } from "@umbraco-cms/backoffice/router";
import { splitStringToArray as J } from "@umbraco-cms/backoffice/utils";
import { UmbElementMixin as Q } from "@umbraco-cms/backoffice/element-api";
import { umbExtensionsRegistry as L } from "@umbraco-cms/backoffice/extension-registry";
import { UmbDocumentItemRepository as Z } from "@umbraco-cms/backoffice/document";
import { UmbMediaItemRepository as ee } from "@umbraco-cms/backoffice/media";
import { U as M } from "./paths-BXCdLOXz.js";
const f = "user-group", te = "user-group-root", Le = new E(
  "UmbUserGroupDetailStore"
), Me = "Umb.Repository.UserGroup.Detail", Ie = "Umb.Store.UserGroup.Detail", Ce = new E("UmbUserGroupItemStore"), se = "Umb.Repository.UserGroupItem", Ge = "Umb.Store.UserGroupItem", Ne = "Umb.Repository.UserGroupCollection", $e = "Umb.CollectionView.UserGroup.Table", we = new E(
  "UmbCollectionContext"
), Be = "Umb.Collection.UserGroup", re = new K(
  "Umb.Modal.UserGroupPicker",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class oe extends Y {
  constructor(t) {
    super(t, se, re);
  }
}
var ie = Object.defineProperty, ne = Object.getOwnPropertyDescriptor, I = (e) => {
  throw TypeError(e);
}, h = (e, t, s, r) => {
  for (var o = r > 1 ? void 0 : r ? ne(t, s) : t, d = e.length - 1, U; d >= 0; d--)
    (U = e[d]) && (o = (r ? U(t, s, o) : U(o)) || o);
  return r && o && ie(t, s, o), o;
}, ae = (e, t, s) => t.has(e) || I("Cannot " + s), a = (e, t, s) => (ae(e, t, "read from private field"), s ? s.call(e) : t.get(e)), le = (e, t, s) => t.has(e) ? I("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), i;
let _ = class extends X(q, "") {
  constructor() {
    super(), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", le(this, i, new oe(this)), this._editUserGroupPath = "", this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && a(this, i).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && a(this, i).getSelection().length > this.max
    ), this.observe(a(this, i).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(a(this, i).selectedItems, (e) => this._items = e, "_observerItems"), new j(this, F).addAdditionalPath(f).onSetup(async () => ({ data: { entityType: f, preset: {} } })).observeRouteBuilder((e) => {
      this._editUserGroupPath = e({});
    });
  }
  set min(e) {
    a(this, i).min = e;
  }
  get min() {
    return a(this, i).min;
  }
  set max(e) {
    a(this, i).max = e;
  }
  get max() {
    return a(this, i).max;
  }
  set selection(e) {
    a(this, i).setSelection(e);
  }
  get selection() {
    return a(this, i).getSelection();
  }
  set value(e) {
    this.selection = J(e);
  }
  get value() {
    return this.selection.join(",");
  }
  getFormElement() {
  }
  render() {
    return p`
			<uui-ref-list>${this._items?.map((e) => this._renderItem(e))}</uui-ref-list>
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${() => a(this, i).openPicker()}
				label=${this.localize.term("general_choose")}></uui-button>
		`;
  }
  _renderItem(e) {
    if (!e.unique) return;
    const t = `${this._editUserGroupPath}edit/${e.unique}`;
    return p`
			<umb-user-group-ref name="${H(e.name)}" href=${t}>
				${e.icon ? p`<umb-icon slot="icon" name=${e.icon}></umb-icon>` : V}
				<uui-action-bar slot="actions">
					<uui-button
						@click=${() => a(this, i).requestRemoveItem(e.unique)}
						label=${this.localize.term("general_remove")}></uui-button>
				</uui-action-bar>
			</umb-user-group-ref>
		`;
  }
};
i = /* @__PURE__ */ new WeakMap();
_.styles = [
  O`
			#btn-add {
				width: 100%;
			}
		`
];
h([
  m({ type: Number })
], _.prototype, "min", 1);
h([
  m({ type: String, attribute: "min-message" })
], _.prototype, "minMessage", 2);
h([
  m({ type: Number })
], _.prototype, "max", 1);
h([
  m({ type: String, attribute: "min-message" })
], _.prototype, "maxMessage", 2);
h([
  m()
], _.prototype, "value", 1);
h([
  b()
], _.prototype, "_items", 2);
h([
  b()
], _.prototype, "_editUserGroupPath", 2);
_ = h([
  A("umb-user-group-input")
], _);
var me = Object.defineProperty, ce = Object.getOwnPropertyDescriptor, C = (e) => {
  throw TypeError(e);
}, c = (e, t, s, r) => {
  for (var o = r > 1 ? void 0 : r ? ce(t, s) : t, d = e.length - 1, U; d >= 0; d--)
    (U = e[d]) && (o = (r ? U(t, s, o) : U(o)) || o);
  return r && o && me(t, s, o), o;
}, P = (e, t, s) => t.has(e) || C("Cannot " + s), S = (e, t, s) => (P(e, t, "read from private field"), t.get(e)), y = (e, t, s) => t.has(e) ? C("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), G = (e, t, s, r) => (P(e, t, "write to private field"), t.set(e, s), s), u = (e, t, s) => (P(e, t, "access private method"), s), R, v, l, N, $, w, B, x, D, z, W, k;
let n = class extends Q(g) {
  constructor() {
    super(...arguments), y(this, l), y(this, R), y(this, v), this.documentRootAccess = !1, this.mediaRootAccess = !1, this._documentLabel = "", this._mediaLabel = "", this._sectionLabels = [], this._userPermissionLabels = [];
  }
  get documentStartNode() {
    return "";
  }
  set documentStartNode(e) {
    u(this, l, N).call(this, e);
  }
  get mediaStartNode() {
    return "";
  }
  set mediaStartNode(e) {
    u(this, l, $).call(this, e);
  }
  get sections() {
    return [];
  }
  set sections(e) {
    u(this, l, w).call(this, e);
  }
  get userPermissionAliases() {
    return [];
  }
  set userPermissionAliases(e) {
    u(this, l, B).call(this, e);
  }
  renderDetail() {
    return p`
			<small id="detail">${this.detail}</small>
			${u(this, l, x).call(this)}
			<slot name="detail"></slot>
		`;
  }
};
R = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
N = async function(e) {
  if (this.documentRootAccess || !e) return;
  S(this, R) || G(this, R, new Z(this));
  const { error: t, asObservable: s } = await S(this, R).requestItems([e]);
  t || this.observe(
    s(),
    (r) => this._documentLabel = r[0].variants?.[0].name ?? e,
    "_observeDocumentStartNode"
  );
};
$ = async function(e) {
  if (this.mediaRootAccess || !e) return;
  S(this, v) || G(this, v, new ee(this));
  const { error: t, asObservable: s } = await S(this, v).requestItems([e]);
  t || this.observe(
    s(),
    (r) => this._mediaLabel = r[0].variants?.[0].name ?? e,
    "_observeMediaStartNode"
  );
};
w = async function(e) {
  e?.length ? this.observe(
    L.byTypeAndAliases("section", e),
    (t) => {
      this._sectionLabels = t.map(
        (s) => s.meta.label ? this.localize.string(s.meta.label) : s.name
      );
    },
    "_observeSections"
  ) : this.removeUmbControllerByAlias("_observeSections");
};
B = async function(e) {
  e?.length ? this.observe(
    L.byTypeAndAliases("entityUserPermission", e),
    (t) => {
      this._userPermissionLabels = t.map(
        (s) => s.meta.label ? this.localize.string(s.meta.label) : s.name
      );
    },
    "_observeUserPermission"
  ) : this.removeUmbControllerByAlias("_observeUserPermission");
};
x = function() {
  const e = this._sectionLabels.length, t = !!this._documentLabel || this.documentRootAccess, s = !!this._mediaLabel || this.mediaRootAccess, r = this._userPermissionLabels.length;
  if (!(!e && !t && !s && !r))
    return p`
			<div id="details">
				${u(this, l, D).call(this)} ${u(this, l, z).call(this)} ${u(this, l, W).call(this)}
				${u(this, l, k).call(this)}
			</div>
		`;
};
D = function() {
  if (this._sectionLabels.length)
    return p`
			<div>
				<small>
					<strong><umb-localize key="main_sections">Sections</umb-localize>:</strong>
					${this._sectionLabels.join(", ")}
				</small>
			</div>
		`;
};
z = function() {
  if (!(!this._documentLabel && !this.documentRootAccess))
    return p`
			<div>
				<small>
					<strong><umb-localize key="user_startnode">Document Start Node</umb-localize>:</strong>
					${this.documentRootAccess ? this.localize.term("contentTypeEditor_allDocuments") : this._documentLabel}
				</small>
			</div>
		`;
};
W = function() {
  if (!(!this._mediaLabel && !this.mediaRootAccess))
    return p`
			<div>
				<small>
					<strong><umb-localize key="user_mediastartnode">Media Start Node</umb-localize>:</strong>
					${this.mediaRootAccess ? this.localize.term("contentTypeEditor_allMediaItems") : this._mediaLabel}
				</small>
			</div>
		`;
};
k = function() {
  if (this._userPermissionLabels.length)
    return p`
			<div>
				<small>
					<strong><umb-localize key="user_userPermissions">User permissions</umb-localize>:</strong>
					${this._userPermissionLabels.join(", ")}
				</small>
			</div>
		`;
};
n.styles = [
  ...g.styles,
  O`
			#details {
				color: var(--uui-color-text-alt);
				margin-top: var(--uui-size-space-1);
			}

			#details > div {
				margin-bottom: var(--uui-size-space-1);
			}
		`
];
c([
  m({ type: Boolean })
], n.prototype, "documentRootAccess", 2);
c([
  m()
], n.prototype, "documentStartNode", 1);
c([
  m({ type: Boolean })
], n.prototype, "mediaRootAccess", 2);
c([
  m()
], n.prototype, "mediaStartNode", 1);
c([
  m({ type: Array })
], n.prototype, "sections", 1);
c([
  m({ type: Array, attribute: "user-permission-aliases" })
], n.prototype, "userPermissionAliases", 1);
c([
  b()
], n.prototype, "_documentLabel", 2);
c([
  b()
], n.prototype, "_mediaLabel", 2);
c([
  b()
], n.prototype, "_sectionLabels", 2);
c([
  b()
], n.prototype, "_userPermissionLabels", 2);
n = c([
  A("umb-user-group-ref")
], n);
const xe = T.generateAbsolute({
  sectionName: M,
  entityType: f
}), De = T.generateAbsolute({
  sectionName: M,
  entityType: te
}), ze = new E(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === f
), We = "Umb.Workspace.UserGroup", ke = "Umb.Workspace.UserGroupRoot";
export {
  re as U,
  Be as a,
  oe as b,
  _ as c,
  n as d,
  f as e,
  te as f,
  we as g,
  Ne as h,
  $e as i,
  xe as j,
  De as k,
  Me as l,
  Ie as m,
  se as n,
  Ge as o,
  Ce as p,
  We as q,
  ze as r,
  ke as s,
  Le as t
};
//# sourceMappingURL=constants-BCxOO27P.js.map
