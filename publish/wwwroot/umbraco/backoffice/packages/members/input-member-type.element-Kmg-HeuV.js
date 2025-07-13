import { a as f, U as O } from "./member-type-tree.store.context-token-D6BHGtN0.js";
import { UmbModalToken as g } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL_ALIAS as Y } from "@umbraco-cms/backoffice/tree";
import { UMB_WORKSPACE_PATH_PATTERN as h } from "@umbraco-cms/backoffice/workspace";
import { UMB_SETTINGS_SECTION_PATHNAME as y } from "@umbraco-cms/backoffice/settings";
import { UmbPathPattern as R } from "@umbraco-cms/backoffice/router";
import { UmbContextToken as c } from "@umbraco-cms/backoffice/context-api";
import { UmbPickerInputContext as v } from "@umbraco-cms/backoffice/picker-input";
import { html as _, repeat as C, when as x, css as w, property as p, state as L, customElement as N } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as D } from "@umbraco-cms/backoffice/utils";
import { UmbLitElement as $ } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as k } from "@umbraco-cms/backoffice/validation";
const W = new g(Y, {
  modal: {
    type: "sidebar",
    size: "small"
  },
  data: {
    treeAlias: "Umb.Tree.MemberType"
  }
}), ae = "Umb.Repository.MemberType.Duplicate", b = h.generateAbsolute({
  sectionName: y,
  entityType: f
}), me = h.generateAbsolute({
  sectionName: y,
  entityType: O
}), _e = new R("create/parent/:parentEntityType/:parentUnique", b), pe = new R(
  "edit/:unique",
  b
), Ee = "member-type-property-type", K = "Umb.Repository.MemberType.Detail", q = "Umb.Store.MemberType.Detail", Te = [
  {
    type: "repository",
    alias: K,
    name: "Member Type Detail Repository",
    api: () => import("./member-type-detail.repository-CEcn9B6-.js")
  },
  {
    type: "store",
    alias: q,
    name: "Member Type Detail Store",
    api: () => import("./member-type-detail.store-Bfonih0x.js")
  }
], Me = new c(
  "UmbMemberTypeDetailStore"
), P = "Umb.Repository.MemberTypeItem", H = "Umb.Store.MemberTypeItem", le = [
  {
    type: "repository",
    alias: P,
    name: "Member Type Item Repository",
    api: () => import("./member-type-item.repository-vWncFj8S.js")
  },
  {
    type: "itemStore",
    alias: H,
    name: "Member Type Item Store",
    api: () => import("./member-type-item.store-DQp_kY5o.js")
  }
], ce = new c("UmbMemberTypeItemStore"), z = "Umb.Repository.MemberType.Composition", ue = [
  {
    type: "repository",
    alias: z,
    name: "Member Type Composition Repository",
    api: () => import("./member-type-composition.repository-BAMbNde6.js")
  }
], he = "Umb.Repository.MemberType.Tree", ye = "Umb.Store.MemberType.Tree", Re = "Umb.Tree.MemberType", be = new c(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === "member-type"
), Pe = "Umb.Workspace.MemberType";
class X extends v {
  constructor(t) {
    super(t, P, W);
  }
}
var F = Object.defineProperty, G = Object.getOwnPropertyDescriptor, A = (e) => {
  throw TypeError(e);
}, a = (e, t, s, E) => {
  for (var n = E > 1 ? void 0 : E ? G(t, s) : t, M = e.length - 1, l; M >= 0; M--)
    (l = e[M]) && (n = (E ? l(t, s, n) : l(n)) || n);
  return E && n && F(t, s, n), n;
}, U = (e, t, s) => t.has(e) || A("Cannot " + s), i = (e, t, s) => (U(e, t, "read from private field"), s ? s.call(e) : t.get(e)), u = (e, t, s) => t.has(e) ? A("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), T = (e, t, s) => (U(e, t, "access private method"), s), r, m, d, S, B, I;
let o = class extends k(
  $
) {
  constructor() {
    super(), u(this, m), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", u(this, r, new X(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && i(this, r).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && i(this, r).getSelection().length > this.max
    ), this.observe(i(this, r).selection, (e) => this.value = e.join(",")), this.observe(i(this, r).selectedItems, (e) => this._items = e);
  }
  set min(e) {
    i(this, r).min = e;
  }
  get min() {
    return i(this, r).min;
  }
  set max(e) {
    i(this, r).max = e;
  }
  get max() {
    return i(this, r).max;
  }
  set selection(e) {
    i(this, r).setSelection(e);
  }
  get selection() {
    return i(this, r).getSelection();
  }
  set value(e) {
    this.selection = D(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  getFormElement() {
  }
  render() {
    return _` ${T(this, m, S).call(this)} ${T(this, m, B).call(this)} `;
  }
};
r = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
d = function() {
  i(this, r).openPicker({
    hideTreeRoot: !0
  });
};
S = function() {
  if (this._items)
    return _`
			<uui-ref-list>
				${C(
      this._items,
      (e) => e.unique,
      (e) => T(this, m, I).call(this, e)
    )}
			</uui-ref-list>
		`;
};
B = function() {
  if (!(this.max === 1 && this.selection.length >= this.max))
    return _`
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${T(this, m, d)}
				label="${this.localize.term("general_choose")}"
				>${this.localize.term("general_choose")}</uui-button
			>
		`;
};
I = function(e) {
  if (e.unique)
    return _`
			<uui-ref-node-document-type name=${this.localize.string(e.name)}>
				${x(e.icon, () => _`<umb-icon slot="icon" name=${e.icon}></umb-icon>`)}
				<uui-action-bar slot="actions">
					<uui-button
						@click=${() => i(this, r).requestRemoveItem(e.unique)}
						label="Remove Member Type ${e.name}"
						>${this.localize.term("general_remove")}</uui-button
					>
				</uui-action-bar>
			</uui-ref-node-document-type>
		`;
};
o.styles = [
  w`
			#btn-add {
				width: 100%;
			}
		`
];
a([
  p({ type: Number })
], o.prototype, "min", 1);
a([
  p({ type: String, attribute: "min-message" })
], o.prototype, "minMessage", 2);
a([
  p({ type: Number })
], o.prototype, "max", 1);
a([
  p({ type: String, attribute: "min-message" })
], o.prototype, "maxMessage", 2);
a([
  p({ type: String })
], o.prototype, "value", 1);
a([
  L()
], o.prototype, "_items", 2);
o = a([
  N("umb-input-member-type")
], o);
export {
  X as U,
  o as a,
  ae as b,
  b as c,
  me as d,
  _e as e,
  pe as f,
  Ee as g,
  K as h,
  q as i,
  Me as j,
  P as k,
  H as l,
  ce as m,
  z as n,
  he as o,
  ye as p,
  Re as q,
  Pe as r,
  be as s,
  W as t,
  Te as u,
  le as v,
  ue as w
};
//# sourceMappingURL=input-member-type.element-Kmg-HeuV.js.map
