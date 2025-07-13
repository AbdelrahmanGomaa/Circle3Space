import { r as w, k as re, l as oe, e as ne, q as le, f as ue } from "./constants-BCxOO27P.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { state as u, customElement as S, html as d, nothing as g, ifDefined as ce, css as pe } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as E, umbFocus as he } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as G } from "@umbraco-cms/backoffice/style";
import { UMB_MODAL_MANAGER_CONTEXT as me } from "@umbraco-cms/backoffice/modal";
import { UMB_ICON_PICKER_MODAL as de } from "@umbraco-cms/backoffice/icon";
import { umbExtensionsRegistry as _e } from "@umbraco-cms/backoffice/extension-registry";
import { UmbChangeEvent as ge } from "@umbraco-cms/backoffice/event";
import { filterFrozenArray as be } from "@umbraco-cms/backoffice/observable-api";
import { UmbEntityDetailWorkspaceContextBase as fe, UmbWorkspaceIsNewRedirectController as ye } from "@umbraco-cms/backoffice/workspace";
var ve = Object.defineProperty, Pe = Object.getOwnPropertyDescriptor, M = (e) => {
  throw TypeError(e);
}, T = (e, t, s, o) => {
  for (var i = o > 1 ? void 0 : o ? Pe(t, s) : t, c = e.length - 1, p; c >= 0; c--)
    (p = e[c]) && (i = (o ? p(t, s, i) : p(i)) || i);
  return o && i && ve(t, s, i), i;
}, U = (e, t, s) => t.has(e) || M("Cannot " + s), x = (e, t, s) => (U(e, t, "read from private field"), s ? s.call(e) : t.get(e)), N = (e, t, s) => t.has(e) ? M("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Ae = (e, t, s, o) => (U(e, t, "write to private field"), t.set(e, s), s), C = (e, t, s) => (U(e, t, "access private method"), s), f, y, L, B, W;
let v = class extends E {
  constructor() {
    super(), N(this, y), this._entityTypes = [], N(this, f), C(this, y, L).call(this), this.consumeContext(w, (e) => {
      Ae(this, f, e), this.observe(
        x(this, f).fallbackPermissions,
        (t) => {
          this._fallBackPermissions = t;
        },
        "umbUserGroupEntityUserPermissionsObserver"
      );
    });
  }
  render() {
    return d` ${this._entityTypes.map((e) => C(this, y, W).call(this, e))} `;
  }
};
f = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakSet();
L = function() {
  this.observe(
    _e.byType("entityUserPermission"),
    (e) => {
      this._entityTypes = [...new Set(e.flatMap((t) => t.forEntityTypes))];
    },
    "umbUserPermissionsObserver"
  );
};
B = function(e) {
  e.stopPropagation();
  const s = e.target.allowedVerbs;
  if (s == null) throw new Error("The verbs are not defined");
  x(this, f)?.setFallbackPermissions(s);
};
W = function(e) {
  return d`
			<h4><umb-localize .key=${`user_permissionsEntityGroup_${e}`}>${e}</umb-localize></h4>
			<umb-input-entity-user-permission
				.entityType=${e}
				.allowedVerbs=${this._fallBackPermissions || []}
				@change=${C(this, y, B)}></umb-input-entity-user-permission>
		`;
};
v.styles = [G];
T([
  u()
], v.prototype, "_fallBackPermissions", 2);
T([
  u()
], v.prototype, "_entityTypes", 2);
v = T([
  S("umb-user-group-entity-user-permission-list")
], v);
var Ce = Object.defineProperty, $e = Object.getOwnPropertyDescriptor, D = (e) => {
  throw TypeError(e);
}, R = (e, t, s, o) => {
  for (var i = o > 1 ? void 0 : o ? $e(t, s) : t, c = e.length - 1, p; c >= 0; c--)
    (p = e[c]) && (i = (o ? p(t, s, i) : p(i)) || i);
  return o && i && Ce(t, s, i), i;
}, q = (e, t, s) => t.has(e) || D("Cannot " + s), b = (e, t, s) => (q(e, t, "read from private field"), s ? s.call(e) : t.get(e)), A = (e, t, s) => t.has(e) ? D("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Oe = (e, t, s, o) => (q(e, t, "write to private field"), t.set(e, s), s), _, $, O;
let P = class extends E {
  constructor() {
    super(), A(this, _), A(this, $, (e) => {
      e.stopPropagation();
      const t = e.target, s = t.manifest?.meta.schemaType;
      if (!s) throw new Error("Schema type is not available");
      const o = be(
        b(this, _)?.getPermissions() || [],
        (p) => p.$type !== s
      ), i = t.permissions || [], c = [...o, ...i];
      b(this, _)?.setPermissions(c);
    }), A(this, O, (e) => {
      if (!this._userGroupPermissions) return g;
      if (!e.component) return g;
      const t = e.manifest;
      if (!t) throw new Error("Manifest is not available");
      const s = t.meta.labelKey ? this.localize.term(t.meta.labelKey) : t.meta.label, o = t.meta.descriptionKey ? this.localize.term(t.meta.descriptionKey) : t.meta.description, i = t.meta.schemaType, c = this._userGroupPermissions.filter((p) => p.$type === i) || [];
      return e.component.permissions = c, e.component.addEventListener(ge.TYPE, b(this, $)), d`
			<umb-property-layout .label=${s || ""} .description=${o || ""}>
				<div slot="editor">${e.component}</div>
			</umb-property-layout>
		`;
    }), this.consumeContext(w, (e) => {
      Oe(this, _, e), this.observe(
        b(this, _).data,
        (t) => {
          this._userGroupPermissions = t?.permissions, this._userGroupFallbackPermissions = t?.fallbackPermissions;
        },
        "umbUserGroupGranularPermissionObserver"
      );
    });
  }
  render() {
    if (this._userGroupPermissions)
      return d`<umb-extension-slot
			type="userGranularPermission"
			.props=${{ fallbackPermissions: this._userGroupFallbackPermissions }}
			.renderMethod=${b(this, O)}></umb-extension-slot>`;
  }
};
_ = /* @__PURE__ */ new WeakMap();
$ = /* @__PURE__ */ new WeakMap();
O = /* @__PURE__ */ new WeakMap();
R([
  u()
], P.prototype, "_userGroupPermissions", 2);
R([
  u()
], P.prototype, "_userGroupFallbackPermissions", 2);
P = R([
  S("umb-user-group-granular-permission-list")
], P);
var we = Object.defineProperty, Se = Object.getOwnPropertyDescriptor, I = (e) => {
  throw TypeError(e);
}, m = (e, t, s, o) => {
  for (var i = o > 1 ? void 0 : o ? Se(t, s) : t, c = e.length - 1, p; c >= 0; c--)
    (p = e[c]) && (i = (o ? p(t, s, i) : p(i)) || i);
  return o && i && we(t, s, i), i;
}, k = (e, t, s) => t.has(e) || I("Cannot " + s), r = (e, t, s) => (k(e, t, "read from private field"), t.get(e)), z = (e, t, s) => t.has(e) ? I("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Ee = (e, t, s, o) => (k(e, t, "write to private field"), t.set(e, s), s), h = (e, t, s) => (k(e, t, "access private method"), s), a, l, F, K, H, Y, V, X, J, Q, Z, j, ee, te, se, ie, ae;
let n = class extends E {
  constructor() {
    super(), z(this, l), this._isNew = !1, this._aliasCanBeChanged = !0, this._icon = null, this._sections = [], this._languages = [], this._hasAccessToAllLanguages = !1, this._documentRootAccess = !1, this._mediaRootAccess = !1, z(this, a), this.consumeContext(w, (e) => {
      Ee(this, a, e), h(this, l, F).call(this);
    });
  }
  render() {
    return d`
			<umb-entity-detail-workspace-editor class="uui-text" back-path=${re}>
				${h(this, l, ee).call(this)} ${h(this, l, te).call(this)}
			</umb-entity-detail-workspace-editor>
		`;
  }
};
a = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
F = function() {
  r(this, a) && (this.observe(r(this, a).isNew, (e) => this._isNew = e, "_observeIsNew"), this.observe(r(this, a).unique, (e) => this._unique = e ?? void 0, "_observeUnique"), this.observe(r(this, a).name, (e) => this._name = e, "_observeName"), this.observe(r(this, a).alias, (e) => this._alias = e, "_observeAlias"), this.observe(
    r(this, a).aliasCanBeChanged,
    (e) => this._aliasCanBeChanged = e,
    "_observeAliasCanBeChanged"
  ), this.observe(r(this, a).icon, (e) => this._icon = e, "_observeIcon"), this.observe(r(this, a).sections, (e) => this._sections = e, "_observeSections"), this.observe(r(this, a).languages, (e) => this._languages = e, "_observeLanguages"), this.observe(
    r(this, a).hasAccessToAllLanguages,
    (e) => this._hasAccessToAllLanguages = e,
    "_observeHasAccessToAllLanguages"
  ), this.observe(
    r(this, a).documentRootAccess,
    (e) => this._documentRootAccess = e,
    "_observeDocumentRootAccess"
  ), this.observe(
    r(this, a).documentStartNode,
    (e) => this._documentStartNode = e,
    "_observeDocumentStartNode"
  ), this.observe(
    r(this, a).mediaRootAccess,
    (e) => this._mediaRootAccess = e,
    "_observeMediaRootAccess"
  ), this.observe(
    r(this, a).mediaStartNode,
    (e) => this._mediaStartNode = e,
    "_observeMediaStartNode"
  ));
};
K = function(e) {
  e.stopPropagation();
  const t = e.target;
  r(this, a)?.updateProperty("sections", t.selection);
};
H = function(e) {
  e.stopPropagation();
  const t = e.target;
  r(this, a)?.updateProperty("hasAccessToAllLanguages", t.checked);
};
Y = function(e) {
  e.stopPropagation();
  const t = e.target;
  r(this, a)?.updateProperty("languages", t.selection);
};
V = function(e) {
  e.stopPropagation();
  const t = e.target;
  r(this, a)?.updateProperty("documentRootAccess", t.checked), r(this, a)?.updateProperty("documentStartNode", null);
};
X = function(e) {
  e.stopPropagation();
  const s = e.target.selection?.[0];
  r(this, a)?.updateProperty("documentStartNode", s ? { unique: s } : null);
};
J = function(e) {
  e.stopPropagation();
  const t = e.target;
  r(this, a)?.updateProperty("mediaRootAccess", t.checked), r(this, a)?.updateProperty("mediaStartNode", null);
};
Q = function(e) {
  e.stopPropagation();
  const s = e.target.selection?.[0];
  r(this, a)?.updateProperty("mediaStartNode", s ? { unique: s } : null);
};
Z = async function() {
  const [e, t] = this._icon?.replace("color-", "")?.split(" ") ?? [];
  (await this.getContext(me)).open(this, de, {
    value: {
      icon: e,
      color: t
    }
  })?.onSubmit().then((i) => {
    i.icon && i.color ? r(this, a)?.updateProperty("icon", `${i.icon} color-${i.color}`) : i.icon && r(this, a)?.updateProperty("icon", i.icon);
  });
};
j = function(e) {
  r(this, a)?.updateProperty("name", e.target.value ?? ""), r(this, a)?.updateProperty("alias", e.target.alias ?? "");
};
ee = function() {
  return d`
			<div id="header" slot="header">
				<uui-button id="icon" compact label="icon" look="outline" @click=${h(this, l, Z)}>
					<umb-icon name=${this._icon || ""}></umb-icon>
				</uui-button>

				<umb-input-with-alias
					id="name"
					label=${this.localize.term("placeholders_entername")}
					.value=${this._name}
					alias=${ce(this._alias)}
					?auto-generate-alias=${this._isNew}
					?alias-readonly=${this._aliasCanBeChanged === !1}
					@change=${h(this, l, j)}
					${he()}>
				</umb-input-with-alias>
			</div>
		`;
};
te = function() {
  return this._unique ? d`
			<div id="main">
				<umb-stack>
					<uui-box>
						<div slot="headline"><umb-localize key="user_assignAccess"></umb-localize></div>

						<umb-property-layout
							label=${this.localize.term("main_sections")}
							description=${this.localize.term("user_sectionsHelp")}>
							<umb-input-section
								slot="editor"
								.selection=${this._sections}
								@change=${h(this, l, K)}></umb-input-section>
						</umb-property-layout>

						${h(this, l, se).call(this)} ${h(this, l, ie).call(this)} ${h(this, l, ae).call(this)}
					</uui-box>

					<uui-box>
						<div slot="headline"><umb-localize key="user_permissionsDefault"></umb-localize></div>

						<umb-property-layout
							label=${this.localize.term("user_entityPermissionsLabel")}
							description=${this.localize.term("user_entityPermissionsDescription")}>
							<umb-user-group-entity-user-permission-list slot="editor"></umb-user-group-entity-user-permission-list>
						</umb-property-layout>
					</uui-box>

					<uui-box>
						<div slot="headline"><umb-localize key="user_permissionsGranular"></umb-localize></div>
						<umb-user-group-granular-permission-list></umb-user-group-granular-permission-list>
					</uui-box>
				</umb-stack>
			</div>
		` : g;
};
se = function() {
  return d`
			<umb-property-layout
				label=${this.localize.term("treeHeaders_languages")}
				description=${this.localize.term("user_languagesHelp")}>
				<div slot="editor">
					<uui-toggle
						style="margin-bottom: var(--uui-size-space-3);"
						label="${this.localize.term("user_allowAccessToAllLanguages")}"
						.checked=${this._hasAccessToAllLanguages}
						@change=${h(this, l, H)}></uui-toggle>

					${this._hasAccessToAllLanguages === !1 ? d`
								<umb-input-language
									.selection=${this._languages}
									@change=${h(this, l, Y)}></umb-input-language>
							` : g}
				</div>
			</umb-property-layout>
		`;
};
ie = function() {
  return d`
			<umb-property-layout
				label=${this.localize.term("defaultdialogs_selectContentStartNode")}
				description=${this.localize.term("user_startnodehelp")}>
				<div slot="editor">
					<uui-toggle
						style="margin-bottom: var(--uui-size-space-3);"
						label="${this.localize.term("user_allowAccessToAllDocuments")}"
						.checked=${this._documentRootAccess}
						@change=${h(this, l, V)}></uui-toggle>
				</div>

				${this._documentRootAccess === !1 ? d`
							<umb-input-document
								slot="editor"
								max="1"
								.selection=${this._documentStartNode?.unique ? [this._documentStartNode.unique] : []}
								@change=${h(this, l, X)}></umb-input-document>
						` : g}
			</umb-property-layout>
		`;
};
ae = function() {
  return d`
			<umb-property-layout
				label=${this.localize.term("defaultdialogs_selectMediaStartNode")}
				description=${this.localize.term("user_mediastartnodehelp")}>
				<div slot="editor">
					<uui-toggle
						style="margin-bottom: var(--uui-size-space-3);"
						label="${this.localize.term("user_allowAccessToAllMedia")}"
						.checked=${this._mediaRootAccess}
						@change=${h(this, l, J)}></uui-toggle>
				</div>

				${this._mediaRootAccess === !1 ? d`
							<umb-input-media
								slot="editor"
								max="1"
								.selection=${this._mediaStartNode?.unique ? [this._mediaStartNode.unique] : []}
								@change=${h(this, l, Q)}></umb-input-media>
						` : g}
			</umb-property-layout>
		`;
};
n.styles = [
  G,
  pe`
			:host {
				display: block;
				height: 100%;
			}

			#header {
				display: flex;
				flex: 1 1 auto;
				gap: var(--uui-size-space-2);
				align-items: center;
			}

			#icon {
				font-size: var(--uui-size-5);
				height: 30px;
				width: 30px;
			}

			#name {
				width: 100%;
				flex: 1 1 auto;
				align-items: center;
			}

			#main {
				padding: var(--uui-size-layout-1);
			}

			uui-input {
				width: 100%;
			}
		`
];
m([
  u()
], n.prototype, "_isNew", 2);
m([
  u()
], n.prototype, "_unique", 2);
m([
  u()
], n.prototype, "_name", 2);
m([
  u()
], n.prototype, "_alias", 2);
m([
  u()
], n.prototype, "_aliasCanBeChanged", 2);
m([
  u()
], n.prototype, "_icon", 2);
m([
  u()
], n.prototype, "_sections", 2);
m([
  u()
], n.prototype, "_languages", 2);
m([
  u()
], n.prototype, "_hasAccessToAllLanguages", 2);
m([
  u()
], n.prototype, "_documentStartNode", 2);
m([
  u()
], n.prototype, "_documentRootAccess", 2);
m([
  u()
], n.prototype, "_mediaStartNode", 2);
m([
  u()
], n.prototype, "_mediaRootAccess", 2);
n = m([
  S("umb-user-group-workspace-editor")
], n);
class Ie extends fe {
  constructor(t) {
    super(t, {
      workspaceAlias: le,
      entityType: ne,
      detailRepositoryAlias: oe
    }), this.name = this._data.createObservablePartOfCurrent((s) => s?.name || ""), this.alias = this._data.createObservablePartOfCurrent((s) => s?.alias || ""), this.aliasCanBeChanged = this._data.createObservablePartOfCurrent((s) => s?.aliasCanBeChanged), this.icon = this._data.createObservablePartOfCurrent((s) => s?.icon || null), this.sections = this._data.createObservablePartOfCurrent((s) => s?.sections || []), this.languages = this._data.createObservablePartOfCurrent((s) => s?.languages || []), this.hasAccessToAllLanguages = this._data.createObservablePartOfCurrent(
      (s) => s?.hasAccessToAllLanguages || !1
    ), this.documentStartNode = this._data.createObservablePartOfCurrent((s) => s?.documentStartNode || null), this.documentRootAccess = this._data.createObservablePartOfCurrent((s) => s?.documentRootAccess || !1), this.mediaStartNode = this._data.createObservablePartOfCurrent((s) => s?.mediaStartNode || null), this.mediaRootAccess = this._data.createObservablePartOfCurrent((s) => s?.mediaRootAccess || !1), this.fallbackPermissions = this._data.createObservablePartOfCurrent((s) => s?.fallbackPermissions || []), this.permissions = this._data.createObservablePartOfCurrent((s) => s?.permissions || []), this.routes.setRoutes([
      {
        path: "create",
        component: n,
        setup: async () => {
          await this.createScaffold({ parent: { entityType: ue, unique: null } }), new ye(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:unique",
        component: n,
        setup: (s, o) => {
          const i = o.match.params.unique;
          this.load(i);
        }
      }
    ]);
  }
  updateProperty(t, s) {
    this._data.updateCurrent({ [t]: s });
  }
  /**
   * Gets the user group user permissions.
   * @memberof UmbUserGroupWorkspaceContext
   */
  getPermissions() {
    return this._data.getCurrent()?.permissions ?? [];
  }
  /**
   * Sets the user group user permissions.
   * @param {Array<UmbUserPermissionModel>} permissions
   * @memberof UmbUserGroupWorkspaceContext
   */
  setPermissions(t) {
    this._data.updateCurrent({ permissions: t });
  }
  /**
   * Gets the user group fallback permissions.
   * @memberof UmbUserGroupWorkspaceContext
   */
  getFallbackPermissions() {
    return this._data.getCurrent()?.fallbackPermissions ?? [];
  }
  /**
   * Sets the user group fallback permissions.
   * @param {Array<string>} fallbackPermissions
   * @memberof UmbUserGroupWorkspaceContext
   */
  setFallbackPermissions(t) {
    this._data.updateCurrent({ fallbackPermissions: t });
  }
}
export {
  Ie as UmbUserGroupWorkspaceContext,
  Ie as api
};
//# sourceMappingURL=user-group-workspace.context-CKSAIKyS.js.map
