import { i as $, U as X, t as dt, L as ht, d as pt, S as _t } from "./constants-BstfLIKC.js";
import { UmbUserAvatarRepository as mt } from "./user-avatar.repository-BulIpqXn.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/external/rxjs";
import { UmbUserConfigRepository as vt } from "./user-config.repository-Eb1Ljjm6.js";
import { b as ft } from "./paths-z-la_6QN.js";
import { css as U, state as l, customElement as w, html as n, ifDefined as W, nothing as h, repeat as bt, query as Ae } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as O } from "@umbraco-cms/backoffice/style";
import "@umbraco-cms/backoffice/temporary-file";
import { umbBindToValidation as gt } from "@umbraco-cms/backoffice/validation";
import { g as yt, T as x } from "./utils-BEu6TUZg.js";
import { UmbUserClientCredentialRepository as $t } from "./user-client-credential.repository-Tp3vOvlB.js";
import { UMB_MODAL_MANAGER_CONTEXT as ve, umbConfirmModal as Ut } from "@umbraco-cms/backoffice/modal";
import { UmbEntityDetailWorkspaceContextBase as wt } from "@umbraco-cms/backoffice/workspace";
import { UmbObjectState as Ct } from "@umbraco-cms/backoffice/observable-api";
var kt = Object.defineProperty, At = Object.getOwnPropertyDescriptor, Se = (e) => {
  throw TypeError(e);
}, ne = (e, t, s, a) => {
  for (var r = a > 1 ? void 0 : a ? At(t, s) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (r = (a ? o(t, s, r) : o(r)) || r);
  return a && r && kt(t, s, r), r;
}, ue = (e, t, s) => t.has(e) || Se("Cannot " + s), S = (e, t, s) => (ue(e, t, "read from private field"), s ? s.call(e) : t.get(e)), fe = (e, t, s) => t.has(e) ? Se("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), St = (e, t, s, a) => (ue(e, t, "write to private field"), t.set(e, s), s), A = (e, t, s) => (ue(e, t, "access private method"), s), p, f, Pe, Ee, qe, Oe, De, xe;
let M = class extends C {
  constructor() {
    super(), fe(this, f), this._usernameIsEmail = !0, fe(this, p), this.consumeContext($, (e) => {
      St(this, p, e), this.observe(S(this, p).data, (t) => this._user = t, "umbUserObserver"), this.observe(
        S(this, p).configRepository.part("usernameIsEmail"),
        (t) => this._usernameIsEmail = t,
        "umbUsernameIsEmailObserver"
      );
    });
  }
  render() {
    return n`<uui-box>
			<div slot="headline"><umb-localize key="user_profile">Profile</umb-localize></div>
			${A(this, f, Oe).call(this)} ${A(this, f, De).call(this)} ${A(this, f, xe).call(this)}
		</uui-box>`;
  }
};
p = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakSet();
Pe = function(e) {
  const t = e.target;
  typeof t?.value == "string" && (S(this, p)?.updateProperty("email", t.value), this._usernameIsEmail && S(this, p)?.updateProperty("userName", t.value));
};
Ee = function(e) {
  const t = e.target;
  typeof t?.value == "string" && S(this, p)?.updateProperty("userName", t.value);
};
qe = function(e) {
  const t = e.target;
  typeof t?.value == "string" && S(this, p)?.updateProperty("languageIsoCode", t.value);
};
Oe = function() {
  return n`
			<umb-property-layout
				mandatory
				label="${this.localize.term("general_email")}"
				.description=${this.localize.term("user_emailDescription", this._usernameIsEmail)}>
				<uui-input
					slot="editor"
					name="email"
					label="${this.localize.term("general_email")}"
					@change="${A(this, f, Pe)}"
					required
					required-message=${this.localize.term("user_emailRequired")}
					${gt(this)}
					value=${W(this._user?.email)}></uui-input>
			</umb-property-layout>
		`;
};
De = function() {
  return this._usernameIsEmail ? h : n`
			<umb-property-layout
				mandatory
				label="${this.localize.term("user_loginname")}"
				description=${this.localize.term("user_loginnameDescription")}>
				<uui-input
					slot="editor"
					name="username"
					autocomplete="off"
					label="${this.localize.term("user_loginname")}"
					@change="${A(this, f, Ee)}"
					required
					required-message=${this.localize.term("user_loginnameRequired")}
					value=${W(this._user?.userName)}></uui-input>
			</umb-property-layout>
		`;
};
xe = function() {
  return this._user?.kind === X.API ? h : n`
			<umb-property-layout
				label="${this.localize.term("user_language")}"
				description=${this.localize.term("user_languageHelp")}>
				<umb-ui-culture-input
					slot="editor"
					value=${W(this._user?.languageIsoCode ?? void 0)}
					@change="${A(this, f, qe)}"
					name="language"
					label="${this.localize.term("user_language")}"></umb-ui-culture-input>
			</umb-property-layout>
		`;
};
M.styles = [
  O,
  U`
			:host {
				display: block;
			}

			uui-input {
				width: 100%;
			}
		`
];
ne([
  l()
], M.prototype, "_user", 2);
ne([
  l()
], M.prototype, "_usernameIsEmail", 2);
M = ne([
  w("umb-user-workspace-profile-settings")
], M);
var Pt = Object.defineProperty, Et = Object.getOwnPropertyDescriptor, ze = (e) => {
  throw TypeError(e);
}, D = (e, t, s, a) => {
  for (var r = a > 1 ? void 0 : a ? Et(t, s) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (r = (a ? o(t, s, r) : o(r)) || r);
  return a && r && Pt(t, s, r), r;
}, le = (e, t, s) => t.has(e) || ze("Cannot " + s), c = (e, t, s) => (le(e, t, "read from private field"), s ? s.call(e) : t.get(e)), be = (e, t, s) => t.has(e) ? ze("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), qt = (e, t, s, a) => (le(e, t, "write to private field"), t.set(e, s), s), b = (e, t, s) => (le(e, t, "access private method"), s), u, d, Re, Ne, We, Me, Ie, Te, Le, Ke;
const Ot = "umb-user-workspace-assign-access";
let g = class extends C {
  constructor() {
    super(), be(this, d), this._userGroupUniques = [], this._documentStartNodeUniques = [], this._documentRootAccess = !1, this._mediaStartNodeUniques = [], this._mediaRootAccess = !1, be(this, u), this.consumeContext($, (e) => {
      qt(this, u, e), this.observe(
        c(this, u).userGroupUniques,
        (t) => this._userGroupUniques = t,
        "_observeUserGroupAccess"
      ), this.observe(
        c(this, u).hasDocumentRootAccess,
        (t) => this._documentRootAccess = t,
        "_observeDocumentRootAccess"
      ), this.observe(
        c(this, u).documentStartNodeUniques,
        (t) => this._documentStartNodeUniques = t,
        "_observeDocumentStartNode"
      ), this.observe(
        c(this, u).hasMediaRootAccess,
        (t) => this._mediaRootAccess = t,
        "_observeMediaRootAccess"
      ), this.observe(
        c(this, u).mediaStartNodeUniques,
        (t) => this._mediaStartNodeUniques = t,
        "_observeMediaStartNode"
      );
    });
  }
  render() {
    return n`
			<uui-box>
				<div slot="headline"><umb-localize key="user_assignAccess">Assign Access</umb-localize></div>
				<div id="assign-access">
					${b(this, d, Te).call(this)} ${b(this, d, Le).call(this)} ${b(this, d, Ke).call(this)}
				</div>
			</uui-box>
		`;
  }
};
u = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
Re = function(e) {
  e.stopPropagation();
  const s = e.target.selection.map((a) => ({ unique: a }));
  c(this, u)?.updateProperty("userGroupUniques", s);
};
Ne = function(e) {
  e.stopPropagation();
  const t = e.target;
  c(this, u)?.updateProperty("hasDocumentRootAccess", t.checked), c(this, u)?.updateProperty("documentStartNodeUniques", []);
};
We = function(e) {
  e.stopPropagation();
  const s = e.target.selection.map((a) => ({ unique: a }));
  c(this, u)?.updateProperty("documentStartNodeUniques", s);
};
Me = function(e) {
  e.stopPropagation();
  const t = e.target;
  c(this, u)?.updateProperty("hasMediaRootAccess", t.checked), c(this, u)?.updateProperty("mediaStartNodeUniques", []);
};
Ie = function(e) {
  e.stopPropagation();
  const s = e.target.selection.map((a) => ({ unique: a }));
  c(this, u)?.updateProperty("mediaStartNodeUniques", s);
};
Te = function() {
  return n`<umb-property-layout
			label="${this.localize.term("general_groups")}"
			description="${this.localize.term("user_groupsHelp")}">
			<umb-user-group-input
				slot="editor"
				.selection=${this._userGroupUniques.map((e) => e.unique)}
				@change=${b(this, d, Re)}></umb-user-group-input>
		</umb-property-layout>`;
};
Le = function() {
  return n`
			<umb-property-layout
				label=${this.localize.term("user_startnodes")}
				description=${this.localize.term("user_startnodeshelp")}>
				<div slot="editor">
					<uui-toggle
						style="margin-bottom: var(--uui-size-space-3);"
						label="${this.localize.term("user_allowAccessToAllDocuments")}"
						.checked=${this._documentRootAccess}
						@change=${b(this, d, Ne)}></uui-toggle>
				</div>

				${this._documentRootAccess === !1 ? n`
							<umb-input-document
								slot="editor"
								.selection=${this._documentStartNodeUniques.map((e) => e.unique)}
								@change=${b(this, d, We)}></umb-input-document>
						` : h}
			</umb-property-layout>
		`;
};
Ke = function() {
  return n`
			<umb-property-layout
				label=${this.localize.term("defaultdialogs_selectMediaStartNode")}
				description=${this.localize.term("user_mediastartnodehelp")}>
				<div slot="editor">
					<uui-toggle
						style="margin-bottom: var(--uui-size-space-3);"
						label="${this.localize.term("user_allowAccessToAllMedia")}"
						.checked=${this._mediaRootAccess}
						@change=${b(this, d, Me)}></uui-toggle>
				</div>

				${this._mediaRootAccess === !1 ? n`
							<umb-input-media
								slot="editor"
								.selection=${this._mediaStartNodeUniques.map((e) => e.unique)}
								@change=${b(this, d, Ie)}></umb-input-media>
						` : h}
			</umb-property-layout>
		`;
};
g.styles = [
  O,
  U`
			:host {
				display: block;
			}
		`
];
D([
  l()
], g.prototype, "_userGroupUniques", 2);
D([
  l()
], g.prototype, "_documentStartNodeUniques", 2);
D([
  l()
], g.prototype, "_documentRootAccess", 2);
D([
  l()
], g.prototype, "_mediaStartNodeUniques", 2);
D([
  l()
], g.prototype, "_mediaRootAccess", 2);
g = D([
  w(Ot)
], g);
var Dt = Object.defineProperty, xt = Object.getOwnPropertyDescriptor, Ge = (e) => {
  throw TypeError(e);
}, Fe = (e, t, s, a) => {
  for (var r = a > 1 ? void 0 : a ? xt(t, s) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (r = (a ? o(t, s, r) : o(r)) || r);
  return a && r && Dt(t, s, r), r;
}, ce = (e, t, s) => t.has(e) || Ge("Cannot " + s), zt = (e, t, s) => (ce(e, t, "read from private field"), s ? s.call(e) : t.get(e)), ge = (e, t, s) => t.has(e) ? Ge("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Rt = (e, t, s, a) => (ce(e, t, "write to private field"), t.set(e, s), s), ye = (e, t, s) => (ce(e, t, "access private method"), s), B, H, Be, He;
const Nt = "umb-user-workspace-access";
let J = class extends C {
  constructor() {
    super(), ge(this, H), ge(this, B), this.consumeContext($, (e) => {
      Rt(this, B, e), this.observe(
        zt(this, B).calculatedStartNodes,
        (t) => this._calculatedStartNodes = t,
        "umbUserObserver"
      );
    });
  }
  render() {
    return n` <uui-box headline=${this.localize.term("user_access")}>
			<div slot="header" class="faded-text">
				<umb-localize key="user_accessHelp"
					>Based on the assigned groups and start nodes, the user has access to the following nodes</umb-localize
				>
			</div>

			${ye(this, H, Be).call(this)}
			<hr />
			${ye(this, H, He).call(this)}
		</uui-box>`;
  }
};
B = /* @__PURE__ */ new WeakMap();
H = /* @__PURE__ */ new WeakSet();
Be = function() {
  return n` <b><umb-localize key="sections_content">Content</umb-localize></b>
			<umb-user-document-start-node
				readonly
				.uniques=${this._calculatedStartNodes?.documentStartNodeUniques.map((e) => e.unique) || []}></umb-user-document-start-node>`;
};
He = function() {
  return n` <b><umb-localize key="sections_media">Media</umb-localize></b>
			<umb-user-media-start-node
				readonly
				.uniques=${this._calculatedStartNodes?.mediaStartNodeUniques.map((e) => e.unique) || []}></umb-user-media-start-node>`;
};
J.styles = [
  O,
  U`
			:host {
				display: block;
			}

			hr {
				border: none;
				border-bottom: 1px solid var(--uui-color-divider);
				width: 100%;
			}
			.faded-text {
				color: var(--uui-color-text-alt);
				font-size: 0.8rem;
			}
		`
];
Fe([
  l()
], J.prototype, "_calculatedStartNodes", 2);
J = Fe([
  w(Nt)
], J);
var Wt = Object.defineProperty, Mt = Object.getOwnPropertyDescriptor, Ye = (e) => {
  throw TypeError(e);
}, de = (e, t, s, a) => {
  for (var r = a > 1 ? void 0 : a ? Mt(t, s) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (r = (a ? o(t, s, r) : o(r)) || r);
  return a && r && Wt(t, s, r), r;
}, he = (e, t, s) => t.has(e) || Ye("Cannot " + s), $e = (e, t, s) => (he(e, t, "read from private field"), s ? s.call(e) : t.get(e)), te = (e, t, s) => t.has(e) ? Ye("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), It = (e, t, s, a) => (he(e, t, "write to private field"), t.set(e, s), s), se = (e, t, s) => (he(e, t, "access private method"), s), Y, re, N, Ve, Xe, Je;
let I = class extends C {
  constructor() {
    super(), te(this, N), this._userInfo = [], this._userDisplayState = null, te(this, Y), te(this, re, (e) => {
      if (!e) {
        this._userInfo = [];
        return;
      }
      if (this._userInfo = [
        {
          labelKey: "user_kind",
          value: e.kind === X.API ? this.localize.term("user_userKindApi") : this.localize.term("user_userKindDefault")
        },
        {
          labelKey: "user_lastLogin",
          value: e.lastLoginDate ? this.localize.date(e.lastLoginDate, x) : `${e.name} ${this.localize.term("user_noLogin")}`
        },
        { labelKey: "user_failedPasswordAttempts", value: e.failedLoginAttempts },
        {
          labelKey: "user_lastLockoutDate",
          value: e.lastLockoutDate ? this.localize.date(e.lastLockoutDate, x) : `${e.name} ${this.localize.term("user_noLockouts")}`
        },
        {
          labelKey: "user_lastPasswordChangeDate",
          value: e.lastPasswordChangeDate ? this.localize.date(e.lastPasswordChangeDate, x) : `${e.name} ${this.localize.term("user_noPasswordChange")}`
        },
        { labelKey: "user_createDate", value: this.localize.date(e.createDate, x) },
        { labelKey: "user_updateDate", value: this.localize.date(e.updateDate, x) },
        { labelKey: "general_id", value: e.unique }
      ], e.kind === X.API) {
        const t = ["user_kind", "user_createDate", "user_updateDate", "general_id"];
        this._userInfo = this._userInfo.filter((s) => t.includes(s.labelKey));
      }
    }), this.consumeContext($, (e) => {
      It(this, Y, e), this.observe(
        $e(this, Y).data,
        async (t) => {
          t && ($e(this, re).call(this, t), this._userDisplayState = t.state ? yt(t.state) : null);
        },
        "umbUserObserver"
      );
    });
  }
  render() {
    return this._userInfo.length === 0 ? h : n`<uui-box id="user-info">${se(this, N, Ve).call(this)} ${se(this, N, Xe).call(this)} </uui-box>`;
  }
};
Y = /* @__PURE__ */ new WeakMap();
re = /* @__PURE__ */ new WeakMap();
N = /* @__PURE__ */ new WeakSet();
Ve = function() {
  return n`
			<div id="state" class="user-info-item">
				<uui-tag look="${W(this._userDisplayState?.look)}" color="${W(this._userDisplayState?.color)}">
					${this.localize.term("user_" + this._userDisplayState?.key)}
				</uui-tag>
			</div>
		`;
};
Xe = function() {
  return n`
			<umb-stack look="compact">
				${bt(
    this._userInfo,
    (e) => e.labelKey,
    (e) => se(this, N, Je).call(this, e.labelKey, e.value)
  )}
			</umb-stack>
		`;
};
Je = function(e, t) {
  return n`
			<div>
				<h4><umb-localize key=${e}></umb-localize></h4>
				<span>${t}</span>
			</div>
		`;
};
I.styles = [
  O,
  U`
			:host {
				display: block;
			}

			uui-tag {
				width: fit-content;
			}

			h4 {
				margin: 0;
			}

			#state {
				border-bottom: 1px solid var(--uui-color-divider);
				padding-bottom: var(--uui-size-space-4);
			}
		`
];
de([
  l()
], I.prototype, "_userInfo", 2);
de([
  l()
], I.prototype, "_userDisplayState", 2);
I = de([
  w("umb-user-workspace-info")
], I);
var Tt = Object.defineProperty, Lt = Object.getOwnPropertyDescriptor, Qe = (e) => {
  throw TypeError(e);
}, Q = (e, t, s, a) => {
  for (var r = a > 1 ? void 0 : a ? Lt(t, s) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (r = (a ? o(t, s, r) : o(r)) || r);
  return a && r && Tt(t, s, r), r;
}, pe = (e, t, s) => t.has(e) || Qe("Cannot " + s), m = (e, t, s) => (pe(e, t, "read from private field"), t.get(e)), z = (e, t, s) => t.has(e) ? Qe("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Kt = (e, t, s, a) => (pe(e, t, "write to private field"), t.set(e, s), s), Ue = (e, t, s) => (pe(e, t, "access private method"), s), v, ae, ie, V, Ze, oe, je;
let P = class extends C {
  constructor() {
    super(), z(this, V), z(this, v), z(this, ae, () => {
      this.observe(
        m(this, v).data,
        async (e) => {
          this._user = e;
        },
        "umbUserObserver"
      );
    }), z(this, ie, async () => {
      try {
        const e = await Ue(this, V, Ze).call(this);
        m(this, v)?.uploadAvatar(e);
      } catch (e) {
        console.error(e);
      }
    }), z(this, oe, async () => {
      m(this, v) && m(this, v).deleteAvatar();
    }), this.consumeContext($, (e) => {
      Kt(this, v, e), m(this, v) && m(this, ae).call(this);
    });
  }
  getFormElement() {
    return this._selectElement;
  }
  render() {
    return this._user ? n`
			<uui-box>
				<form id="AvatarUploadForm" novalidate>
					<umb-user-avatar
						id="Avatar"
						.name=${this._user.name}
						.kind=${this._user.kind}
						.imgUrls=${this._user.avatarUrls ?? []}></umb-user-avatar>
					<input id="AvatarFileField" type="file" name="avatarFile" required hidden />
					<uui-button label="${this.localize.term("user_changePhoto")}" @click=${m(this, ie)}></uui-button>
					${Ue(this, V, je).call(this) ? n`
								<uui-button
									type="button"
									label=${this.localize.term("user_removePhoto")}
									@click=${m(this, oe)}></uui-button>
							` : h}
				</form>
			</uui-box>
		` : h;
  }
};
v = /* @__PURE__ */ new WeakMap();
ae = /* @__PURE__ */ new WeakMap();
ie = /* @__PURE__ */ new WeakMap();
V = /* @__PURE__ */ new WeakSet();
Ze = function() {
  return new Promise((e, t) => {
    if (!this._avatarFileField) {
      t("Can't find avatar file field");
      return;
    }
    this._avatarFileField.addEventListener("change", (s) => {
      const r = (s?.target).files?.[0];
      if (!r) {
        t("Can't find avatar file");
        return;
      }
      e(r);
    }), this._avatarFileField.click();
  });
};
oe = /* @__PURE__ */ new WeakMap();
je = function() {
  return this._user ? this._user.avatarUrls.length > 0 : !1;
};
P.styles = [
  U`
			:host {
				display: block;
			}

			#Avatar {
				font-size: 75px;
				place-self: center;
			}

			form {
				text-align: center;
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-2);
			}
		`
];
Q([
  l()
], P.prototype, "_user", 2);
Q([
  Ae("#AvatarFileField")
], P.prototype, "_avatarFileField", 2);
Q([
  Ae("uui-combobox")
], P.prototype, "_selectElement", 2);
P = Q([
  w("umb-user-workspace-avatar")
], P);
var Gt = Object.defineProperty, Ft = Object.getOwnPropertyDescriptor, et = (e) => {
  throw TypeError(e);
}, Z = (e, t, s, a) => {
  for (var r = a > 1 ? void 0 : a ? Ft(t, s) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (r = (a ? o(t, s, r) : o(r)) || r);
  return a && r && Gt(t, s, r), r;
}, _e = (e, t, s) => t.has(e) || et("Cannot " + s), E = (e, t, s) => (_e(e, t, "read from private field"), s ? s.call(e) : t.get(e)), G = (e, t, s) => t.has(e) ? et("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), we = (e, t, s, a) => (_e(e, t, "write to private field"), t.set(e, s), s), y = (e, t, s) => (_e(e, t, "access private method"), s), R, T, j, _, tt, ee, st, rt, at;
const Bt = "umb-user-workspace-client-credentials";
let q = class extends C {
  constructor() {
    super(), G(this, _), this._clientCredentials = [], G(this, R), G(this, T, ve.TYPE), G(this, j, new $t(this)), this.consumeContext($, (e) => {
      we(this, R, e), this.observe(E(this, R).kind, (t) => this._userKind = t, "umbUserKindObserver"), this.observe(
        E(this, R).unique,
        async (t) => {
          t && y(this, _, tt).call(this, t);
        },
        "umbUserUniqueObserver"
      );
    }), this.consumeContext(ve, (e) => {
      we(this, T, e);
    });
  }
  render() {
    return this._userKind !== X.API ? h : n`<uui-box>
			<div slot="headline">Client Credentials</div>
			<uui-ref-list>${this._clientCredentials.map((e) => n` ${y(this, _, at).call(this, e)} `)}</uui-ref-list>
			<uui-button
				id="add-button"
				look="placeholder"
				label=${this.localize.term("general_add")}
				@click=${y(this, _, st)}></uui-button>
		</uui-box>`;
  }
};
R = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakMap();
j = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
tt = function(e) {
  e && this._userUnique !== e && (this._userUnique = e, y(this, _, ee).call(this)), e || (this._userUnique = void 0, this._clientCredentials = []);
};
ee = async function() {
  if (!this._userUnique) throw new Error("User unique not available");
  const { data: e } = await E(this, j).requestClientCredentials({
    user: { unique: this._userUnique }
  });
  this._clientCredentials = e ?? [];
};
st = function(e) {
  if (e.stopPropagation(), !E(this, T)) throw new Error("Modal Manager Context not available");
  if (!this._userUnique) throw new Error("User unique not available");
  E(this, T).open(this, dt, {
    data: {
      user: {
        unique: this._userUnique
      }
    }
  }).onSubmit().then(() => y(this, _, ee).call(this));
};
rt = async function(e, t) {
  if (e.stopPropagation(), !this._userUnique) throw new Error("User unique not available");
  await Ut(this, {
    headline: `Delete ${t.unique}`,
    content: `Are you sure you want to delete ${t.unique}?`,
    confirmLabel: "Delete",
    color: "danger"
  });
  const s = {
    user: { unique: this._userUnique },
    client: { unique: t.unique }
  }, { error: a } = await E(this, j).requestDelete(s);
  a || y(this, _, ee).call(this);
};
at = function(e) {
  return n`
			<uui-ref-node name=${e.unique} readonly>
				<uui-icon slot="icon" name="icon-key"></uui-icon>
				<uui-button
					slot="actions"
					@click=${(t) => y(this, _, rt).call(this, t, e)}
					label="Delete ${e.unique}"
					compact
					><uui-icon name="icon-trash" look="danger"></uui-icon
				></uui-button>
			</uui-ref-node>
		`;
};
q.styles = [
  O,
  U`
			:host {
				display: block;
			}

			uui-input {
				width: 100%;
			}

			#add-button {
				width: 100%;
			}
		`
];
Z([
  l()
], q.prototype, "_userUnique", 2);
Z([
  l()
], q.prototype, "_userKind", 2);
Z([
  l()
], q.prototype, "_clientCredentials", 2);
q = Z([
  w(Bt)
], q);
var Ht = Object.defineProperty, Yt = Object.getOwnPropertyDescriptor, it = (e) => {
  throw TypeError(e);
}, ot = (e, t, s, a) => {
  for (var r = a > 1 ? void 0 : a ? Yt(t, s) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (r = (a ? o(t, s, r) : o(r)) || r);
  return a && r && Ht(t, s, r), r;
}, me = (e, t, s) => t.has(e) || it("Cannot " + s), Ce = (e, t, s) => (me(e, t, "read from private field"), t.get(e)), ke = (e, t, s) => t.has(e) ? it("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Vt = (e, t, s, a) => (me(e, t, "write to private field"), t.set(e, s), s), F = (e, t, s) => (me(e, t, "access private method"), s), L, k, nt, ut, lt, ct;
let K = class extends C {
  constructor() {
    super(), ke(this, k), ke(this, L), this.consumeContext($, (e) => {
      Vt(this, L, e), F(this, k, nt).call(this);
    });
  }
  render() {
    return n`
			<umb-entity-detail-workspace-editor class="uui-text" .backPath=${ft}>
				${F(this, k, ut).call(this)}
				<div id="main">
					<div id="left-column">${F(this, k, lt).call(this)}</div>
					<div id="right-column">${F(this, k, ct).call(this)}</div>
				</div>
			</umb-entity-detail-workspace-editor>
		`;
  }
};
L = /* @__PURE__ */ new WeakMap();
k = /* @__PURE__ */ new WeakSet();
nt = function() {
  Ce(this, L) && this.observe(Ce(this, L).data, (e) => this._user = e, "umbUserObserver");
};
ut = function() {
  return n` <umb-workspace-header-name-editable slot="header"></umb-workspace-header-name-editable>`;
};
lt = function() {
  return this._user ? n`
			<umb-stack>
				<umb-user-workspace-profile-settings></umb-user-workspace-profile-settings>
				<umb-user-workspace-assign-access></umb-user-workspace-assign-access>
				<umb-user-workspace-access></umb-user-workspace-access>
			</umb-stack>
		` : h;
};
ct = function() {
  return this._user ? n`
			<umb-stack look="compact">
				<umb-user-workspace-avatar></umb-user-workspace-avatar>
				<umb-user-workspace-info></umb-user-workspace-info>
				<umb-user-workspace-client-credentials></umb-user-workspace-client-credentials>
			</umb-stack>
		` : h;
};
K.styles = [
  O,
  U`
			:host {
				display: block;
				height: 100%;
			}

			#main {
				display: grid;
				grid-template-columns: 1fr 350px;
				gap: var(--uui-size-layout-1);
				padding: var(--uui-size-layout-1);
			}

			#left-column {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-4);
			}
		`
];
ot([
  l()
], K.prototype, "_user", 2);
K = ot([
  w("umb-user-workspace-editor")
], K);
class vs extends wt {
  constructor(t) {
    super(t, {
      workspaceAlias: _t,
      entityType: pt,
      detailRepositoryAlias: ht
    }), this.avatarRepository = new mt(this), this.configRepository = new vt(this), this.name = this._data.createObservablePartOfCurrent((s) => s?.name), this.state = this._data.createObservablePartOfCurrent((s) => s?.state), this.kind = this._data.createObservablePartOfCurrent((s) => s?.kind), this.userGroupUniques = this._data.createObservablePartOfCurrent((s) => s?.userGroupUniques || []), this.documentStartNodeUniques = this._data.createObservablePartOfCurrent(
      (s) => s?.documentStartNodeUniques || []
    ), this.hasDocumentRootAccess = this._data.createObservablePartOfCurrent(
      (s) => s?.hasDocumentRootAccess || !1
    ), this.mediaStartNodeUniques = this._data.createObservablePartOfCurrent(
      (s) => s?.mediaStartNodeUniques || []
    ), this.hasMediaRootAccess = this._data.createObservablePartOfCurrent((s) => s?.hasMediaRootAccess || !1), this.#e = new Ct(void 0), this.calculatedStartNodes = this.#e.asObservable(), this.routes.setRoutes([
      {
        path: "edit/:id",
        component: K,
        setup: (s, a) => {
          const r = a.match.params.id;
          this.load(r);
        }
      }
    ]);
  }
  #e;
  async load(t) {
    const s = await super.load(t);
    if (this.observe(s.asObservable?.(), (r) => this.onUserStoreChanges(r), "umbUserStoreObserver"), !this._detailRepository)
      throw new Error("Detail repository is missing");
    const { data: a } = await this._detailRepository.requestCalculateStartNodes(t);
    return this.#e.setValue(a), s;
  }
  /* TODO: some properties are allowed to update without saving.
  	For a user properties like state will be updated when one of the entity actions are executed.
  	Therefore we have to subscribe to the user store to update the state in the workspace data.
  	There might be a less manual way to do this.
  */
  onUserStoreChanges(t) {
    t && this._data.updateCurrent({ state: t.state, avatarUrls: t.avatarUrls });
  }
  getState() {
    return this._data.getCurrent()?.state;
  }
  updateProperty(t, s) {
    this._data.updateCurrent({ [t]: s });
  }
  // TODO: implement upload progress
  uploadAvatar(t) {
    const s = this.getUnique();
    if (!s) throw new Error("Id is missing");
    return this.avatarRepository.uploadAvatar(s, t);
  }
  deleteAvatar() {
    const t = this.getUnique();
    if (!t) throw new Error("Id is missing");
    return this.avatarRepository.deleteAvatar(t);
  }
  getName() {
    return this._data.getCurrent()?.name || "";
  }
  setName(t) {
    this._data.updateCurrent({ name: t });
  }
  destroy() {
    this.avatarRepository.destroy(), super.destroy();
  }
}
export {
  vs as UmbUserWorkspaceContext,
  vs as api
};
//# sourceMappingURL=user-workspace.context-B6K6zK3e.js.map
