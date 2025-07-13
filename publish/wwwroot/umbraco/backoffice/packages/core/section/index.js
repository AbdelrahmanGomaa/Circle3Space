import { U as ne } from "../modal-token-wEQqBBXI.js";
import { U as oe } from "../path-pattern.class-Dg95YGLM.js";
import { U as re } from "../manifests-BmDqVuWE.js";
import { a as dt } from "../manifests-BmDqVuWE.js";
import { UmbPickerInputContext as ae } from "@umbraco-cms/backoffice/picker-input";
import { html as a, css as d, property as b, state as f, customElement as v, nothing as E, repeat as le, LitElement as ue } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as P } from "@umbraco-cms/backoffice/lit-element";
import { splitStringToArray as he, aliasToPath as pe } from "@umbraco-cms/backoffice/utils";
import { UmbFormControlMixin as me } from "@umbraco-cms/backoffice/validation";
import { UUIRefElement as B } from "@umbraco-cms/backoffice/external/uui";
import { UmbElementMixin as ce } from "@umbraco-cms/backoffice/element-api";
import { UmbTextStyles as M } from "@umbraco-cms/backoffice/style";
import { umbExtensionsRegistry as A } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsElementInitializer as de, UmbExtensionsManifestInitializer as be, createExtensionApi as fe, createExtensionElement as ve } from "@umbraco-cms/backoffice/extension-api";
import { UMB_MARK_ATTRIBUTE_NAME as W } from "@umbraco-cms/backoffice/const";
import { UmbContextToken as j } from "@umbraco-cms/backoffice/context-api";
import { UmbContextBase as H } from "@umbraco-cms/backoffice/class-api";
import { UmbBooleanState as _e, UmbStringState as w, observeMultiple as ye } from "@umbraco-cms/backoffice/observable-api";
const xe = new ne(
  "Umb.Modal.SectionPicker",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), ht = new oe("section/:sectionName");
class ge extends ae {
  constructor(t) {
    super(t, re, xe);
  }
}
var we = Object.defineProperty, Se = Object.getOwnPropertyDescriptor, K = (e) => {
  throw TypeError(e);
}, g = (e, t, s, n) => {
  for (var i = n > 1 ? void 0 : n ? Se(t, s) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (i = (n ? r(t, s, i) : r(i)) || i);
  return n && i && we(t, s, i), i;
}, Oe = (e, t, s) => t.has(e) || K("Cannot " + s), u = (e, t, s) => (Oe(e, t, "read from private field"), s ? s.call(e) : t.get(e)), Ee = (e, t, s) => t.has(e) ? K("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), l;
let c = class extends me(
  P
) {
  constructor() {
    super(), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", Ee(this, l, new ge(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && u(this, l).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && u(this, l).getSelection().length > this.max
    ), this.observe(u(this, l).selection, (e) => this.value = e.join(",")), this.observe(u(this, l).selectedItems, (e) => this._items = e);
  }
  set min(e) {
    u(this, l).min = e;
  }
  get min() {
    return u(this, l).min;
  }
  set max(e) {
    u(this, l).max = e;
  }
  get max() {
    return u(this, l).max;
  }
  set selection(e) {
    u(this, l).setSelection(e);
  }
  get selection() {
    return u(this, l).getSelection();
  }
  set value(e) {
    this.selection = he(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  getFormElement() {
  }
  render() {
    return a`
			<uui-ref-list>${this._items?.map((e) => this._renderItem(e))}</uui-ref-list>
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${() => u(this, l).openPicker()}
				label=${this.localize.term("general_choose")}></uui-button>
		`;
  }
  _renderItem(e) {
    if (e.unique)
      return a` <umb-ref-section .item=${e}>
			<uui-action-bar slot="actions">
				<uui-button @click=${() => u(this, l).requestRemoveItem(e.unique)} label="Remove ${e.name}"
					>Remove</uui-button
				>
			</uui-action-bar>
		</umb-ref-section>`;
  }
};
l = /* @__PURE__ */ new WeakMap();
c.styles = [
  d`
			#btn-add {
				width: 100%;
			}
		`
];
g([
  b({ type: Number })
], c.prototype, "min", 1);
g([
  b({ type: String, attribute: "min-message" })
], c.prototype, "minMessage", 2);
g([
  b({ type: Number })
], c.prototype, "max", 1);
g([
  b({ type: String, attribute: "min-message" })
], c.prototype, "maxMessage", 2);
g([
  b({ type: String })
], c.prototype, "value", 1);
g([
  f()
], c.prototype, "_items", 2);
c = g([
  v("umb-input-section")
], c);
var Pe = Object.defineProperty, $e = Object.getOwnPropertyDescriptor, L = (e, t, s, n) => {
  for (var i = n > 1 ? void 0 : n ? $e(t, s) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (i = (n ? r(t, s, i) : r(i)) || i);
  return n && i && Pe(t, s, i), i;
};
let U = class extends ce(B) {
  render() {
    return a`
			<div id="info">
				<div id="name">${this.item?.meta.label ? this.localize.string(this.item.meta.label) : this.item?.name}</div>
			</div>
			<slot></slot>
			<slot name="actions" id="actions-container"></slot>
		`;
  }
};
U.styles = [
  ...B.styles,
  d`
			#name {
				font-weight: 700;
			}
		`
];
L([
  b({ type: Object, attribute: !1 })
], U.prototype, "item", 2);
U = L([
  v("umb-ref-section")
], U);
var Ce = Object.defineProperty, Ue = Object.getOwnPropertyDescriptor, k = (e) => {
  throw TypeError(e);
}, $ = (e, t, s, n) => {
  for (var i = n > 1 ? void 0 : n ? Ue(t, s) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (i = (n ? r(t, s, i) : r(i)) || i);
  return n && i && Ce(t, s, i), i;
}, Me = (e, t, s) => t.has(e) || k("Cannot " + s), Ae = (e, t, s) => t.has(e) ? k("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), T = (e, t, s) => (Me(e, t, "access private method"), s), O, F, G, X;
let y = class extends P {
  constructor() {
    super(), Ae(this, O), this._splitPanelPosition = "300px", new de(this, A, "sectionSidebarApp", null, (t) => {
      const s = this._sidebarApps;
      t.forEach((n) => {
        n.component?.setAttribute(W, "section-sidebar:" + n.manifest.alias);
      }), this._sidebarApps = t, this.requestUpdate("_sidebarApps", s);
    }), T(this, O, F).call(this);
    const e = localStorage.getItem("umb-split-panel-position");
    e && (this._splitPanelPosition = e);
  }
  get manifest() {
    return this._manifest;
  }
  set manifest(e) {
    const t = this._manifest;
    t !== e && (this._manifest = e, this.requestUpdate("manifest", t));
  }
  render() {
    return a`
			<umb-split-panel
				lock="start"
				snap="300px"
				@position-changed=${T(this, O, X)}
				.position=${this._splitPanelPosition}>
				${this._sidebarApps && this._sidebarApps.length > 0 ? a`
							<!-- TODO: these extensions should be combined into one type: sectionSidebarApp with a "subtype" -->
							<umb-section-sidebar slot="start">
								${le(
      this._sidebarApps,
      (e) => e.alias,
      (e) => e.component
    )}
							</umb-section-sidebar>
						` : E}
				<umb-section-main slot="end">
					${this._routes && this._routes.length > 0 ? a`<umb-router-slot id="router-slot" .routes=${this._routes}></umb-router-slot>` : E}
					<slot></slot>
				</umb-section-main>
			</umb-split-panel>
		`;
  }
};
O = /* @__PURE__ */ new WeakSet();
F = function() {
  new be(
    this,
    A,
    "sectionRoute",
    null,
    async (e) => {
      const t = e.filter((i) => i.manifest.element);
      if (e.filter((i) => !i.manifest.element).length > 0) throw new Error("sectionRoute extensions must have an element");
      const n = await Promise.all(
        t.map(async (i) => {
          const o = await fe(this, i.manifest);
          return {
            path: o?.getPath?.() || i.manifest.meta?.path || pe(i.manifest.alias),
            component: () => ve(i.manifest),
            setup: (r, se) => {
              o?.setup?.(r, se);
            }
          };
        })
      );
      T(this, O, G).call(this, n);
    },
    "umbRouteExtensionApisInitializer"
  );
};
G = function(e) {
  this._routes = [
    ...e,
    {
      path: "**",
      component: () => import("../section-main-views.element-C4OUdIT5.js"),
      setup: (t) => {
        t.sectionAlias = this.manifest?.alias;
      }
    }
  ];
};
X = function(e) {
  const t = e.detail.position;
  localStorage.setItem("umb-split-panel-position", t.toString());
};
y.styles = [
  M,
  d`
			:host {
				flex: 1 1 auto;
				height: 100%;
				display: flex;
			}

			umb-split-panel {
				--umb-split-panel-start-min-width: 200px;
				--umb-split-panel-start-max-width: 400px;
				--umb-split-panel-end-min-width: 600px;
				--umb-split-panel-slot-overflow: visible;
			}
			@media only screen and (min-width: 800px) {
				umb-split-panel {
					--umb-split-panel-initial-position: 300px;
				}
			}
		`
];
$([
  b({ type: Object, attribute: !1 })
], y.prototype, "manifest", 1);
$([
  f()
], y.prototype, "_routes", 2);
$([
  f()
], y.prototype, "_sidebarApps", 2);
$([
  f()
], y.prototype, "_splitPanelPosition", 2);
y = $([
  v("umb-section-default")
], y);
var Te = Object.getOwnPropertyDescriptor, Ie = (e, t, s, n) => {
  for (var i = n > 1 ? void 0 : n ? Te(t, s) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (i = r(i) || i);
  return i;
};
let I = class extends ue {
  render() {
    return a`
			<main>
				<slot></slot>
			</main>
		`;
  }
};
I.styles = [
  M,
  d`
			:host {
				flex: 1 1 auto;
				height: 100%;
				min-width: 0;
			}

			main {
				position: relative;
				display: flex;
				flex-direction: column;
				height: 100%;
			}
		`
];
I = Ie([
  v("umb-section-main")
], I);
class De extends H {
  constructor(t) {
    super(t, R), this.#t = new _e(!1), this.contextMenuIsOpen = this.#t.asObservable(), this.#e = new w(void 0), this.entityType = this.#e.asObservable(), this.#i = new w(void 0), this.unique = this.#i.asObservable(), this.#s = new w(void 0), this.headline = this.#s.asObservable(), this.#n = void 0;
  }
  #t;
  #e;
  #i;
  #s;
  #n;
  toggleContextMenu(t, s) {
    this.openContextMenu(t, s);
  }
  // TODO: we wont get notified about tree item name changes because we don't have a subscription
  // we need to figure out how we best can handle this when we only know the entity and unique id
  openContextMenu(t, s) {
    this.#e.setValue(s.entityType), this.#i.setValue(s.unique), this.#s.setValue(s.headline), this.#t.setValue(!0), this.#n = t;
  }
  closeContextMenu() {
    this.#t.setValue(!1), this.#e.setValue(void 0), this.#i.setValue(void 0), this.#s.setValue(void 0), this.#n = void 0;
  }
  getContextElement() {
    return this.#n;
  }
}
const R = new j("UmbSectionSidebarContext");
var ze = Object.getOwnPropertyDescriptor, Re = (e, t, s, n) => {
  for (var i = n > 1 ? void 0 : n ? ze(t, s) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (i = r(i) || i);
  return i;
};
let D = class extends P {
  constructor() {
    super(), new De(this);
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.setAttribute(W, "section-sidebar");
  }
  render() {
    return a`
			<umb-section-sidebar-context-menu>
				<uui-scroll-container id="scroll-container">
					<slot></slot>
				</uui-scroll-container>
			</umb-section-sidebar-context-menu>
		`;
  }
};
D.styles = [
  d`
			:host {
				flex: 0 0 var(--umb-section-sidebar-width);
				background-color: var(--uui-color-surface);
				height: 100%;
				border-right: 1px solid var(--uui-color-border);
				font-weight: 500;
				display: flex;
				flex-direction: column;
				z-index: 10;
				position: relative;
				box-sizing: border-box;
			}

			#scroll-container {
				height: 100%;
				overflow-y: auto;
			}
		`
];
D = Re([
  v("umb-section-sidebar")
], D);
var Ne = Object.defineProperty, qe = Object.getOwnPropertyDescriptor, Y = (e) => {
  throw TypeError(e);
}, C = (e, t, s, n) => {
  for (var i = n > 1 ? void 0 : n ? qe(t, s) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (i = (n ? r(t, s, i) : r(i)) || i);
  return n && i && Ne(t, s, i), i;
}, N = (e, t, s) => t.has(e) || Y("Cannot " + s), m = (e, t, s) => (N(e, t, "read from private field"), t.get(e)), V = (e, t, s) => t.has(e) ? Y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Ve = (e, t, s, n) => (N(e, t, "write to private field"), t.set(e, s), s), _ = (e, t, s) => (N(e, t, "access private method"), s), h, p, J, q, Q, Z, ee, te;
let x = class extends P {
  constructor() {
    super(), V(this, p), V(this, h), this._isOpen = !1, this.consumeContext(R, (e) => {
      Ve(this, h, e), _(this, p, J).call(this), m(this, h) ? (this.observe(m(this, h).contextMenuIsOpen, (t) => this._isOpen = t, "_observeContextMenuIsOpen"), this.observe(m(this, h).headline, (t) => this._headline = t, "_observeHeadline")) : (this.removeUmbControllerByAlias("_observeContextMenuIsOpen"), this.removeUmbControllerByAlias("_observeHeadline"));
    });
  }
  render() {
    return a`
			${_(this, p, ee).call(this)}
			<div id="relative-wrapper">
				<slot></slot>
				${_(this, p, te).call(this)}
			</div>
		`;
  }
};
h = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
J = function() {
  if (!m(this, h)) {
    this.removeUmbControllerByAlias("_observeEntityModel");
    return;
  }
  this.observe(
    ye([m(this, h).unique, m(this, h).entityType]),
    (e) => {
      this._unique = e[0], this._entityType = e[1];
    },
    "_observeEntityModel"
  );
};
q = function() {
  m(this, h)?.closeContextMenu();
};
Q = function(e) {
  e.stopPropagation(), _(this, p, q).call(this);
};
Z = function(e) {
  m(this, h) && e.contextAlias !== R.contextAlias && (e.stopImmediatePropagation(), m(this, h).getContextElement()?.dispatchEvent(e.clone()));
};
ee = function() {
  return this._isOpen ? a`<div id="backdrop" @click=${_(this, p, q)}></div>` : E;
};
te = function() {
  return this._isOpen && this._unique !== void 0 && this._entityType ? a`<uui-scroll-container id="action-modal" @umb:context-request=${_(this, p, Z)}>
					${this._headline ? a`<h3>${this.localize.string(this._headline)}</h3>` : E}
					<umb-entity-action-list
						@action-executed=${_(this, p, Q)}
						.entityType=${this._entityType}
						.unique=${this._unique}></umb-entity-action-list>
				</uui-scroll-container>` : E;
};
x.styles = [
  M,
  d`
			:host {
				display: block;
				width: 100%;
				height: 100%;
				z-index: 1;
			}
			#backdrop {
				content: '';
				position: absolute;
				inset: 0px;
				background-color: black;
				opacity: 0.5;
				width: 100vw;
				height: 100vh;
				z-index: -1;
			}
			#relative-wrapper {
				background-color: var(--uui-color-surface);
				position: relative;
				display: flex;
				flex-direction: column;
				width: 100%;
				height: 100%;
			}
			#action-modal {
				position: absolute;
				height: 100%;
				z-index: 1;
				top: 0;
				right: calc(var(--umb-section-sidebar-width) * -1);
				width: var(--umb-section-sidebar-width);
				border: none;
				border-left: 1px solid var(--uui-color-border);
				border-right: 1px solid var(--uui-color-border);
				background-color: var(--uui-color-surface);
			}

			#action-modal h3 {
				padding: var(--uui-size-4) var(--uui-size-8);
				margin: 0;
				min-height: var(--umb-header-layout-height);
				box-sizing: border-box;
				display: flex;
				align-items: center;
			}
			#action-modal umb-entity-action-list {
				--uui-menu-item-flat-structure: 0;
			}
		`
];
C([
  f()
], x.prototype, "_isOpen", 2);
C([
  f()
], x.prototype, "_entityType", 2);
C([
  f()
], x.prototype, "_unique", 2);
C([
  f()
], x.prototype, "_headline", 2);
x = C([
  v("umb-section-sidebar-context-menu")
], x);
var Be = Object.defineProperty, We = Object.getOwnPropertyDescriptor, ie = (e, t, s, n) => {
  for (var i = n > 1 ? void 0 : n ? We(t, s) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (i = (n ? r(t, s, i) : r(i)) || i);
  return n && i && Be(t, s, i), i;
};
const je = {
  type: "kind",
  alias: "Umb.Kind.SectionSidebarAppMenu",
  matchKind: "menu",
  matchType: "sectionSidebarApp",
  manifest: {
    type: "sectionSidebarApp",
    elementName: "umb-section-sidebar-menu"
  }
};
A.register(je);
let S = class extends P {
  renderHeader() {
    return a`<h3>${this.localize.string(this.manifest?.meta?.label ?? "")}</h3>`;
  }
  render() {
    return a`
			${this.renderHeader()}
			<umb-extension-slot
				type="menu"
				.filter="${(e) => e.alias === this.manifest?.meta?.menu}"
				default-element="umb-menu"></umb-extension-slot>
		`;
  }
};
S.styles = [
  M,
  d`
			h3 {
				margin: var(--uui-size-5) 0;
				padding: var(--uui-size-4) var(--uui-size-8);
				font-size: 14px;
			}
		`
];
ie([
  b({ type: Object, attribute: !1 })
], S.prototype, "manifest", 2);
S = ie([
  v("umb-section-sidebar-menu")
], S);
var He = Object.getOwnPropertyDescriptor, Ke = (e, t, s, n) => {
  for (var i = n > 1 ? void 0 : n ? He(t, s) : t, o = e.length - 1, r; o >= 0; o--)
    (r = e[o]) && (i = r(i) || i);
  return i;
};
const Le = {
  type: "kind",
  alias: "Umb.Kind.SectionSidebarAppMenuWithEntityActions",
  matchKind: "menuWithEntityActions",
  matchType: "sectionSidebarApp",
  manifest: {
    type: "sectionSidebarApp",
    elementName: "umb-section-sidebar-menu-with-entity-actions"
  }
};
A.register(Le);
let z = class extends S {
  renderHeader() {
    return a`
			<div id="header">
				<h3>${this.localize.string(this.manifest?.meta?.label ?? "")}</h3>
				<umb-entity-actions-bundle
					slot="actions"
					.unique=${null}
					.entityType=${this.manifest?.meta.entityType}
					.label=${this.manifest?.meta.label}>
				</umb-entity-actions-bundle>
			</div>
		`;
  }
};
z.styles = [
  ...S.styles,
  d`
			#header {
				display: flex;
				flex-direction: row;
				align-items: center;
			}
			#header > :first-child {
				flex-grow: 1;
			}
		`
];
z = Ke([
  v("umb-section-sidebar-menu-with-entity-actions")
], z);
class pt extends H {
  constructor(t) {
    super(t, ke), this.#t = new w(void 0), this.#e = new w(void 0), this.#i = new w(void 0), this.alias = this.#t.asObservable(), this.pathname = this.#e.asObservable(), this.label = this.#i.asObservable();
  }
  #t;
  #e;
  #i;
  setManifest(t) {
    this.#t.setValue(t?.alias), this.#e.setValue(t?.meta?.pathname), this.#i.setValue(t ? t.meta?.label || t.name : void 0);
  }
  getPathname() {
    return this.#e.getValue();
  }
}
const ke = new j("UmbSectionContext");
export {
  ke as UMB_SECTION_CONTEXT,
  re as UMB_SECTION_ITEM_REPOSITORY_ALIAS,
  ht as UMB_SECTION_PATH_PATTERN,
  xe as UMB_SECTION_PICKER_MODAL,
  R as UMB_SECTION_SIDEBAR_CONTEXT,
  dt as UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS,
  c as UmbInputSectionElement,
  U as UmbRefSectionElement,
  pt as UmbSectionContext,
  y as UmbSectionDefaultElement,
  I as UmbSectionMainElement,
  De as UmbSectionSidebarContext,
  x as UmbSectionSidebarContextMenuElement,
  D as UmbSectionSidebarElement,
  S as UmbSectionSidebarMenuElement,
  z as UmbSectionSidebarMenuWithEntityActionsElement
};
//# sourceMappingURL=index.js.map
