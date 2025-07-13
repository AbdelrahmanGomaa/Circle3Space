import { UmbContextToken as I } from "@umbraco-cms/backoffice/context-api";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/temporary-file";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/external/rxjs";
import { css as J, property as l, state as R, query as Ue, customElement as b, ifDefined as Q, classMap as pe, html as U, repeat as q, nothing as z } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as g } from "@umbraco-cms/backoffice/lit-element";
import { UmbDocumentItemRepository as he } from "@umbraco-cms/backoffice/document";
import { UmbModalToken as y } from "@umbraco-cms/backoffice/modal";
import { UmbPickerInputContext as de } from "@umbraco-cms/backoffice/picker-input";
import { splitStringToArray as Se } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as Ee } from "@umbraco-cms/backoffice/event";
import { UmbSorterController as Ae } from "@umbraco-cms/backoffice/sorter";
import { UUIFormControlMixin as Ie } from "@umbraco-cms/backoffice/external/uui";
import { UmbMediaItemRepository as Re } from "@umbraco-cms/backoffice/media";
const at = "Umb.Repository.UserCollection", ot = new I("UmbUserDetailStore"), nt = new I("UmbUserItemStore"), Ce = "user", _t = "user-root", lt = "Umb.CollectionView.User.Table", ct = "Umb.CollectionView.User.Grid", mt = new I("UmbCollectionContext"), ut = "Umb.Collection.User", Ut = "Umb.Repository.User.Avatar", pt = "Umb.Repository.User.ChangePassword", N = Object.freeze({
  DEFAULT: "Default",
  API: "Api"
}), ht = "Umb.Repository.User.Detail", dt = "Umb.Store.User.Detail", fe = "Umb.Repository.User.Item", St = "Umb.ItemStore.User", Et = "Umb.Repository.User.Disable", At = "Umb.Repository.User.Enable", It = "Umb.Repository.User.Unlock";
var Oe = Object.defineProperty, ve = Object.getOwnPropertyDescriptor, Z = (e) => {
  throw TypeError(e);
}, p = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? ve(t, s) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (i ? o(t, s, r) : o(r)) || r);
  return i && r && Oe(t, s, r), r;
}, G = (e, t, s) => t.has(e) || Z("Cannot " + s), d = (e, t, s) => (G(e, t, "read from private field"), s ? s.call(e) : t.get(e)), H = (e, t, s) => t.has(e) ? Z("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), ye = (e, t, s, i) => (G(e, t, "write to private field"), t.set(e, s), s), $ = (e, t, s) => (G(e, t, "access private method"), s), c, C, j, V;
const Te = "umb-user-avatar";
let m = class extends g {
  constructor() {
    super(...arguments), H(this, C), this.kind = N.DEFAULT, H(this, c, []), this._imgSrcSizes = [], this._imgSrc = "", this.hasImgUrls = !1;
  }
  get imgUrls() {
    return d(this, c);
  }
  set imgUrls(e) {
    ye(this, c, e), this.hasImgUrls = e.length > 0, $(this, C, j).call(this);
  }
  firstUpdated() {
    $(this, C, V).call(this);
  }
  render() {
    const e = {
      default: this.kind === N.API,
      api: this.kind === N.API,
      "has-image": this.hasImgUrls
    };
    return U`<uui-avatar
			.name=${this.name || "Unknown"}
			img-src=${Q(this._imgSrc ? this._imgSrc : void 0)}
			class=${pe(e)}></uui-avatar>`;
  }
};
c = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakSet();
j = function() {
  if (d(this, c).length === 0) {
    this._imgSrcSizes = [];
    return;
  }
  this._imgSrcSizes = [
    {
      w: 30,
      url: d(this, c)[0]
    },
    {
      w: 60,
      url: d(this, c)[1]
    },
    {
      w: 90,
      url: d(this, c)[2]
    },
    {
      w: 150,
      url: d(this, c)[3]
    },
    {
      w: 300,
      url: d(this, c)[4]
    }
  ], $(this, C, V).call(this);
};
V = async function() {
  this.hasImgUrls && this.avatarElement && setTimeout(() => {
    const t = this.avatarElement.getBoundingClientRect().width, s = this._imgSrcSizes.filter((i) => t * 1.5 <= i.w);
    this._imgSrc = s[0]?.url;
  }, 0);
};
m.styles = [
  J`
			uui-avatar {
				background-color: transparent;
				color: inherit;
				box-shadow: 0 0 0 1.5px var(--uui-color-border);
			}

			uui-avatar.has-image {
				border-color: transparent;
			}

			uui-avatar.api {
				border-radius: 9%;
			}
		`
];
p([
  l({ type: String })
], m.prototype, "name", 2);
p([
  l({ type: String })
], m.prototype, "kind", 2);
p([
  l({ type: Array, attribute: !1 })
], m.prototype, "imgUrls", 1);
p([
  R()
], m.prototype, "_imgSrcSizes", 2);
p([
  R()
], m.prototype, "_imgSrc", 2);
p([
  R()
], m.prototype, "hasImgUrls", 2);
p([
  Ue("uui-avatar")
], m.prototype, "avatarElement", 2);
m = p([
  b(Te)
], m);
var Me = Object.defineProperty, be = Object.getOwnPropertyDescriptor, ee = (e) => {
  throw TypeError(e);
}, L = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? be(t, s) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (i ? o(t, s, r) : o(r)) || r);
  return i && r && Me(t, s, r), r;
}, Y = (e, t, s) => t.has(e) || ee("Cannot " + s), T = (e, t, s) => (Y(e, t, "read from private field"), s ? s.call(e) : t.get(e)), D = (e, t, s) => t.has(e) ? ee("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), ge = (e, t, s, i) => (Y(e, t, "write to private field"), t.set(e, s), s), Le = (e, t, s) => (Y(e, t, "access private method"), s), E, F, W, te;
let f = class extends g {
  constructor() {
    super(...arguments), D(this, W), D(this, E, []), this.readonly = !1, this._displayValue = [], D(this, F, new he(this));
  }
  get uniques() {
    return T(this, E);
  }
  set uniques(e) {
    ge(this, E, e), T(this, E).length > 0 && Le(this, W, te).call(this);
  }
  render() {
    return this.uniques.length < 1 ? U`
				<uui-ref-node
					name="Content Root"
					?disabled=${this.readonly}
					style="--uui-color-disabled-contrast: var(--uui-color-text)">
					<uui-icon slot="icon" name="folder"></uui-icon>
				</uui-ref-node>
			` : q(
      this._displayValue,
      (e) => e.unique,
      (e) => U`
					<!-- TODO: get correct variant name -->
					<uui-ref-node
						name=${e.variants[0]?.name}
						?disabled=${this.readonly}
						style="--uui-color-disabled-contrast: var(--uui-color-text)">
						<uui-icon slot="icon" name="folder"></uui-icon>
					</uui-ref-node>
				`
    );
  }
};
E = /* @__PURE__ */ new WeakMap();
F = /* @__PURE__ */ new WeakMap();
W = /* @__PURE__ */ new WeakSet();
te = async function() {
  const { asObservable: e } = await T(this, F).requestItems(T(this, E));
  this.observe(e(), (t) => {
    this._displayValue = t || [];
  });
};
L([
  l({ type: Array, attribute: !1 })
], f.prototype, "uniques", 1);
L([
  l({ type: Boolean })
], f.prototype, "readonly", 2);
L([
  R()
], f.prototype, "_displayValue", 2);
f = L([
  b("umb-user-document-start-node")
], f);
const we = new y(
  "Umb.Modal.User.Picker",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class Ne extends de {
  constructor(t) {
    super(t, fe, we);
  }
}
var De = Object.defineProperty, Be = Object.getOwnPropertyDescriptor, se = (e) => {
  throw TypeError(e);
}, h = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? Be(t, s) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (i ? o(t, s, r) : o(r)) || r);
  return i && r && De(t, s, r), r;
}, re = (e, t, s) => t.has(e) || se("Cannot " + s), _ = (e, t, s) => (re(e, t, "read from private field"), s ? s.call(e) : t.get(e)), B = (e, t, s) => t.has(e) ? se("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), O = (e, t, s) => (re(e, t, "access private method"), s), x, n, S, ie, ae, oe, ne, _e;
let u = class extends Ie(g, "") {
  constructor() {
    super(), B(this, S), B(this, x, new Ae(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputUser",
      itemSelector: "umb-entity-item-ref",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new Ee());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", B(this, n, new Ne(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && _(this, n).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && _(this, n).getSelection().length > this.max
    ), this.observe(_(this, n).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(_(this, n).selectedItems, (e) => this._items = e, "_observerItems");
  }
  get min() {
    return _(this, n).min;
  }
  set min(e) {
    _(this, n).min = e;
  }
  get max() {
    return _(this, n).max;
  }
  set max(e) {
    _(this, n).max = e;
  }
  set selection(e) {
    _(this, n).setSelection(e), _(this, x).setModel(e);
  }
  get selection() {
    return _(this, n).getSelection();
  }
  set value(e) {
    this.selection = Se(e);
  }
  get value() {
    return this.selection.join(",");
  }
  getFormElement() {
  }
  render() {
    return U`${O(this, S, ne).call(this)} ${O(this, S, oe).call(this)}`;
  }
};
x = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakSet();
ie = function() {
  _(this, n).openPicker({});
};
ae = function(e) {
  _(this, n).requestRemoveItem(e.unique);
};
oe = function() {
  return this.max > 0 && this.selection.length >= this.max ? z : U`
			<uui-button
				id="btn-add"
				look="placeholder"
				label=${this.localize.term("general_choose")}
				@click=${O(this, S, ie)}></uui-button>
		`;
};
ne = function() {
  return this._items ? U`
			<uui-ref-list>
				${q(
    this._items,
    (e) => e.unique,
    (e) => O(this, S, _e).call(this, e)
  )}
			</uui-ref-list>
		` : z;
};
_e = function(e) {
  return e.unique ? U`
			<umb-entity-item-ref .item=${e} id=${e.unique} ?standalone=${this.max === 1}>
				<uui-action-bar slot="actions">
					<uui-button label=${this.localize.term("general_remove")} @click=${() => O(this, S, ae).call(this, e)}></uui-button>
				</uui-action-bar>
			</umb-entity-item-ref>
		` : z;
};
u.styles = [
  J`
			#btn-add {
				width: 100%;
			}
		`
];
h([
  l({ type: Number })
], u.prototype, "min", 1);
h([
  l({ type: String, attribute: "min-message" })
], u.prototype, "minMessage", 2);
h([
  l({ type: Number })
], u.prototype, "max", 1);
h([
  l({ type: String, attribute: "min-message" })
], u.prototype, "maxMessage", 2);
h([
  l({ type: Array })
], u.prototype, "selection", 1);
h([
  l()
], u.prototype, "value", 1);
h([
  R()
], u.prototype, "_items", 2);
u = h([
  b("umb-user-input")
], u);
var Pe = Object.defineProperty, $e = Object.getOwnPropertyDescriptor, le = (e) => {
  throw TypeError(e);
}, w = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? $e(t, s) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (i ? o(t, s, r) : o(r)) || r);
  return i && r && Pe(t, s, r), r;
}, K = (e, t, s) => t.has(e) || le("Cannot " + s), M = (e, t, s) => (K(e, t, "read from private field"), s ? s.call(e) : t.get(e)), P = (e, t, s) => t.has(e) ? le("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), We = (e, t, s, i) => (K(e, t, "write to private field"), t.set(e, s), s), xe = (e, t, s) => (K(e, t, "access private method"), s), A, X, k, ce;
let v = class extends g {
  constructor() {
    super(...arguments), P(this, k), P(this, A, []), this.readonly = !1, this._displayValue = [], P(this, X, new Re(this));
  }
  get uniques() {
    return M(this, A);
  }
  set uniques(e) {
    We(this, A, e), M(this, A).length > 0 && xe(this, k, ce).call(this);
  }
  render() {
    return this.uniques.length < 1 ? U`
				<uui-ref-node
					name="Media Root"
					?disabled=${this.readonly}
					style="--uui-color-disabled-contrast: var(--uui-color-text)">
					<uui-icon slot="icon" name="folder"></uui-icon>
				</uui-ref-node>
			` : q(
      this._displayValue,
      (e) => e.unique,
      (e) => U`
					<!-- TODO: get correct variant name -->
					<uui-ref-node
						name=${Q(e.variants[0]?.name)}
						?disabled=${this.readonly}
						style="--uui-color-disabled-contrast: var(--uui-color-text)">
						<uui-icon slot="icon" name="folder"></uui-icon>
					</uui-ref-node>
				`
    );
  }
};
A = /* @__PURE__ */ new WeakMap();
X = /* @__PURE__ */ new WeakMap();
k = /* @__PURE__ */ new WeakSet();
ce = async function() {
  const { asObservable: e } = await M(this, X).requestItems(M(this, A));
  this.observe(e(), (t) => {
    this._displayValue = t || [];
  });
};
w([
  l({ type: Array, attribute: !1 })
], v.prototype, "uniques", 1);
w([
  l({ type: Boolean })
], v.prototype, "readonly", 2);
w([
  R()
], v.prototype, "_displayValue", 2);
v = w([
  b("umb-user-media-start-node")
], v);
const Rt = "Umb.Repository.User.ClientCredential", me = "Umb.Modal.User.ClientCredential.Create", Ct = [
  {
    type: "modal",
    alias: me,
    name: "Create User Client Credential Modal",
    element: () => import("./create-user-client-credential-modal.element-B3d7gEQZ.js")
  }
], ft = new y(me, {
  modal: {
    type: "dialog",
    size: "small"
  }
}), Ot = "Umb.Condition.User.AllowChangePassword", vt = "Umb.Condition.CurrentUser.AllowChangePassword", yt = "Umb.Condition.User.AllowDeleteAction", Tt = "Umb.Condition.User.AllowDisableAction", Mt = "Umb.Condition.User.AllowExternalLoginAction", bt = "Umb.Condition.User.AllowMfaAction", gt = "Umb.Condition.CurrentUser.AllowMfaAction", Lt = "Umb.Condition.User.AllowUnlockAction", wt = "Umb.Condition.User.IsDefaultKind", ue = "Umb.Modal.User.Create", Nt = [
  {
    type: "modal",
    alias: ue,
    name: "Create User Modal",
    js: () => import("./create-user-modal.element-Do2r5Bvx.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.User.CreateSuccess",
    name: "Create Success User Modal",
    js: () => import("./create-user-success-modal.element-DmDtT_VM.js")
  }
], Dt = new y(ue, {
  modal: {
    type: "dialog",
    size: "small"
  }
}), Bt = new y("Umb.Modal.User.CreateSuccess", {
  modal: {
    type: "dialog",
    size: "small"
  }
}), Pt = new y("Umb.Modal.User.Mfa", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), $t = new I("UmbUserConfigStore"), Wt = new I(
  "UmbCurrentUserConfigStore"
), xt = "Umb.Repository.User.Config", kt = "Umb.Store.User.Config", qt = "Umb.Repository.CurrentUser.Config", zt = "Umb.Store.CurrentUser.Config", Gt = new I(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === Ce
), Vt = "Umb.Workspace.User", Yt = "Umb.Workspace.UserRoot", Ft = "Umb.Repository.User.Invite";
export {
  bt as A,
  gt as B,
  Lt as C,
  wt as D,
  ue as E,
  Ut as F,
  pt as G,
  xt as H,
  kt as I,
  qt as J,
  zt as K,
  ht as L,
  dt as M,
  Et as N,
  At as O,
  fe as P,
  St as Q,
  It as R,
  Vt as S,
  Yt as T,
  N as U,
  Ft as V,
  Ct as W,
  Nt as X,
  Bt as a,
  ct as b,
  Pt as c,
  Ce as d,
  _t as e,
  ot as f,
  nt as g,
  mt as h,
  Gt as i,
  $t as j,
  Wt as k,
  Dt as l,
  we as m,
  at as n,
  ut as o,
  lt as p,
  Ne as q,
  u as r,
  Rt as s,
  ft as t,
  me as u,
  Ot as v,
  vt as w,
  yt as x,
  Tt as y,
  Mt as z
};
//# sourceMappingURL=constants-BstfLIKC.js.map
