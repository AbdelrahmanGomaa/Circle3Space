import { UmbTextStyles as P } from "@umbraco-cms/backoffice/style";
import { css as h, state as p, property as r, customElement as u, repeat as be, html as l, nothing as _, query as Y, LitElement as et, when as $, ifDefined as g, styleMap as Hs, map as Ns, classMap as Fi } from "@umbraco-cms/backoffice/external/lit";
import { UMB_MODAL_MANAGER_CONTEXT as Gi, UmbModalElement as Fs, UMB_ITEM_PICKER_MODAL as Gs, umbConfirmModal as Ki } from "@umbraco-cms/backoffice/modal";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
import { UMB_NOTIFICATION_CONTEXT as Ks } from "@umbraco-cms/backoffice/notification";
import { a as Ys } from "./entity.context-C8qVKYoi.js";
import { UMB_SECTION_SIDEBAR_CONTEXT as Xs } from "@umbraco-cms/backoffice/section";
import { umbExtensionsRegistry as oi } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsManifestInitializer as Zs, createExtensionApi as Js } from "@umbraco-cms/backoffice/extension-api";
import { e as Qs } from "./extractUmbColorVariable.function-C_Z99zyW.js";
import { UmbChangeEvent as c, UmbDeleteEvent as Yi, UmbInputEvent as ni } from "@umbraco-cms/backoffice/event";
import { UMB_DATA_TYPE_PICKER_FLOW_DATA_TYPE_PICKER_MODAL as js, UMB_DATATYPE_WORKSPACE_MODAL as eo, UMB_DATA_TYPE_ENTITY_TYPE as Xi } from "@umbraco-cms/backoffice/data-type";
import { UmbModalRouteRegistrationController as ki } from "@umbraco-cms/backoffice/router";
import { UmbFormControlMixin as le, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as ri } from "@umbraco-cms/backoffice/validation";
import { UUIFormControlMixin as Ie, UUIInputElement as Zi, UUIRadioElement as to, UUIInputEvent as Ji, UUIRefNodeElement as Qi } from "@umbraco-cms/backoffice/external/uui";
import { splitStringToArray as io, generateAlias as ji, clamp as ea } from "@umbraco-cms/backoffice/utils";
import { UmbSorterController as li } from "@umbraco-cms/backoffice/sorter";
import { UMB_PROPERTY_DATASET_CONTEXT as ao } from "@umbraco-cms/backoffice/property";
import { UmbElementMixin as so } from "@umbraco-cms/backoffice/element-api";
var oo = Object.defineProperty, no = Object.getOwnPropertyDescriptor, ta = (e) => {
  throw TypeError(e);
}, Mt = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? no(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && oo(t, i, a), a;
}, ro = (e, t, i) => t.has(e) || ta("Cannot " + i), lo = (e, t, i) => t.has(e) ? ta("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ne = (e, t, i) => (ro(e, t, "access private method"), i), me, ia, st, aa;
let Se = class extends d {
  constructor() {
    super(), lo(this, me), this._modalElementMap = /* @__PURE__ */ new Map(), this._modals = [], this.fillBackground = !1, this.consumeContext(Gi, (e) => {
      this._modalManager = e, this._observeModals();
    });
  }
  _observeModals() {
    this._modalManager && this.observe(this._modalManager.modals, (e) => {
      Ne(this, me, ia).call(this, e);
    });
  }
  render() {
    return l`
			<uui-modal-container id="container">
				${this._modals.length > 0 ? be(
      this._modals,
      (e) => e.key,
      (e) => Ne(this, me, aa).call(this, e.key)
    ) : ""}
			</uui-modal-container>
		`;
  }
};
me = /* @__PURE__ */ new WeakSet();
ia = function(e) {
  this.fillBackground = !1;
  const t = this._modals;
  this._modals = e, t.filter((s) => !e.some((a) => a.key === s.key)).forEach((s) => {
    const a = this._modalElementMap.get(s.key);
    a?.removeEventListener("close-end", Ne(this, me, st).bind(this, s.key)), a?.destroy(), this._modalElementMap.delete(s.key), s.destroy();
  }), this._modals.length !== 0 && this._modals.forEach(async (s) => {
    if (this._modalElementMap.has(s.key)) return;
    const a = new Fs();
    await a.init(s), a.element?.addEventListener("close-end", Ne(this, me, st).bind(this, s.key)), s.addEventListener("umb:destroy", Ne(this, me, st).bind(this, s.key)), this._modalElementMap.set(s.key, a), s.backdropBackground && (this.fillBackground = !0, this.shadowRoot?.getElementById("container")?.style.setProperty("--backdrop-background", s.backdropBackground)), this.requestUpdate("_modalElementMap");
  });
};
st = function(e) {
  this._modalManager?.remove(e);
};
aa = function(e) {
  const t = this._modalElementMap.get(e);
  return t ? t.render() : _;
};
Se.styles = [
  P,
  h`
			:host {
				position: absolute;
				z-index: 1000;
			}

			:host([fill-background]) {
				--uui-modal-dialog-border-radius: 0;
				--uui-shadow-depth-5: 0;
			}

			:host([fill-background]) #container::after {
				background: var(--backdrop-background);
			}
		`
];
Mt([
  p()
], Se.prototype, "_modalElementMap", 2);
Mt([
  p()
], Se.prototype, "_modals", 2);
Mt([
  r({ type: Boolean, reflect: !0, attribute: "fill-background" })
], Se.prototype, "fillBackground", 2);
Se = Mt([
  u("umb-backoffice-modal-container")
], Se);
var uo = Object.defineProperty, ho = Object.getOwnPropertyDescriptor, ui = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? ho(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && uo(t, i, a), a;
};
let Ke = class extends d {
  constructor() {
    super(), this.consumeContext(Ks, (e) => {
      this._notificationContext = e, this._observeNotifications();
    });
  }
  _observeNotifications() {
    this._notificationContext && this.observe(this._notificationContext.notifications, (e) => {
      this._notifications = e, this._notificationsElement?.hidePopover?.(), this._notificationsElement?.showPopover?.();
    });
  }
  render() {
    return l`
			<uui-toast-notification-container bottom-up id="notifications" popover="manual">
				${this._notifications ? be(
      this._notifications,
      (e) => e.key,
      (e) => l`${e.element}`
    ) : ""}
			</uui-toast-notification-container>
		`;
  }
};
Ke.styles = [
  P,
  h`
			#notifications {
				top: 0;
				left: 0;
				right: 0;
				bottom: 45px;
				height: auto;
				padding: var(--uui-size-layout-1);

				position: fixed;
				width: 100vw;
				background: 0;
				outline: 0;
				border: 0;
				margin: 0;
			}
		`
];
ui([
  Y("#notifications")
], Ke.prototype, "_notificationsElement", 2);
ui([
  p()
], Ke.prototype, "_notifications", 2);
Ke = ui([
  u("umb-backoffice-notification-container")
], Ke);
var po = Object.defineProperty, co = Object.getOwnPropertyDescriptor, sa = (e) => {
  throw TypeError(e);
}, V = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? co(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && po(t, i, a), a;
}, oa = (e, t, i) => t.has(e) || sa("Cannot " + i), de = (e, t, i) => (oa(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Lt = (e, t, i) => t.has(e) ? sa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Wt = (e, t, i) => (oa(e, t, "access private method"), i), ve, ot, Re, nt;
let w = class extends et {
  constructor() {
    super(...arguments), Lt(this, Re), this.headline = "", this.headerTransparent = !1, this.loading = !1, this._headerSlotHasChildren = !1, this._navigationSlotHasChildren = !1, this._actionsMenuSlotHasChildren = !1, this._footerSlotHasChildren = !1, this._actionsSlotHasChildren = !1, Lt(this, ve, (e) => e.target.assignedNodes({ flatten: !0 }).length > 0), Lt(this, ot, () => {
      this._scrollContainer && this.toggleAttribute("scrolling", this._scrollContainer.scrollTop > 0);
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.headerTransparent && requestAnimationFrame(() => {
      this._scrollContainer?.addEventListener("scroll", de(this, ot));
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._scrollContainer?.removeEventListener("scroll", de(this, ot));
  }
  render() {
    return l`
			<div
				id="header"
				style="display: ${this.headline || this._headerSlotHasChildren || this._actionsMenuSlotHasChildren || this._navigationSlotHasChildren ? "" : "none"}">
				${this.headline ? l`<h3 id="headline">${this.headline}</h3>` : _}

				<slot
					id="header-slot"
					name="header"
					@slotchange=${(e) => {
      this._headerSlotHasChildren = de(this, ve).call(this, e), Wt(this, Re, nt).call(this, e.target, this._headerSlotHasChildren);
    }}></slot>
				<slot
					id="navigation-slot"
					name="navigation"
					@slotchange=${(e) => {
      this._navigationSlotHasChildren = de(this, ve).call(this, e), Wt(this, Re, nt).call(this, e.target, this._navigationSlotHasChildren);
    }}></slot>
				<slot
					id="action-menu-slot"
					name="action-menu"
					@slotchange=${(e) => {
      this._actionsMenuSlotHasChildren = de(this, ve).call(this, e), Wt(this, Re, nt).call(this, e.target, this._actionsMenuSlotHasChildren);
    }}></slot>
			</div>

			<!-- This div should be changed for the uui-scroll-container when it gets updated -->
			<div id="main">
				${this.loading ? l`<uui-loader-bar></uui-loader-bar>` : _}
				<slot></slot>
			</div>

			<slot name="footer"></slot>
			<umb-footer-layout style="display:${this._footerSlotHasChildren || this._actionsSlotHasChildren ? "" : "none"}">
				<slot
					name="footer-info"
					@slotchange=${(e) => {
      this._footerSlotHasChildren = de(this, ve).call(this, e);
    }}></slot>
				<slot
					name="actions"
					slot="actions"
					@slotchange=${(e) => {
      this._actionsSlotHasChildren = de(this, ve).call(this, e);
    }}></slot>
			</umb-footer-layout>
		`;
  }
};
ve = /* @__PURE__ */ new WeakMap();
ot = /* @__PURE__ */ new WeakMap();
Re = /* @__PURE__ */ new WeakSet();
nt = function(e, t) {
  e.style.display = t ? "flex" : "none";
};
w.styles = [
  P,
  h`
			:host {
				display: flex;
				background-color: var(--umb-body-layout-color-background, var(--uui-color-background));
				width: 100%;
				height: 100%;
				flex-direction: column;
			}

			#header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				height: var(--umb-header-layout-height);
				background-color: var(--uui-color-surface);
				border-bottom: 1px solid var(--uui-color-border);
				box-sizing: border-box;
				z-index: 1;
			}
			:host([header-transparent]) #header {
				background-color: transparent;
				border-color: transparent;
				transition: box-shadow 150ms ease-in-out;
				box-shadow: 0 -1px 0px 0px rgba(0, 0, 0, 0.5);
			}
			:host([header-transparent][scrolling]) #header {
				/* This should be using the uui-shadows but for now they are too drastic for this use case */
				box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.2);
			}
			:host([header-fit-height][header-transparent]:not([header-no-padding])) #header-slot {
				padding: var(--uui-size-layout-1);
			}
			:host([header-fit-height]) #header {
				height: fit-content;
			}
			#header-slot {
				padding: 0 var(--uui-size-layout-1);
				flex-grow: 1;
			}
			:host([header-no-padding]) #header-slot {
				padding: 0;
			}

			:host([header-transparent]:not([main-no-padding])) #main:not(*[style='display: none'] + *) {
				/* The following styling is only applied if the clear-header IS present,
				the main-no-padding attribute is NOT present, and the header is NOT hidden */
				padding-top: var(--uui-size-space-1);
			}
			:host([main-no-padding]) #main {
				padding: 0;
			}

			#header-slot,
			#action-menu-slot,
			#navigation-slot {
				display: none;
				height: 100%;
				align-items: center;
				box-sizing: border-box;
				min-width: 0;
			}

			#navigation-slot {
				margin-left: auto;
			}

			#headline {
				display: block;
				margin: 0 var(--uui-size-layout-1);
			}

			#main {
				display: block;
				flex: 1;
				flex-direction: column;
				overflow-y: auto;
				padding: var(--uui-size-layout-1);
			}

			#main > slot::slotted(*:first-child) {
				padding-top: 0;
				margin-top: 0;
			}
		`
];
V([
  Y("#main")
], w.prototype, "_scrollContainer", 2);
V([
  r()
], w.prototype, "headline", 2);
V([
  r({ type: Boolean, reflect: !0, attribute: "header-transparent" })
], w.prototype, "headerTransparent", 2);
V([
  r({ type: Boolean })
], w.prototype, "loading", 2);
V([
  p()
], w.prototype, "_headerSlotHasChildren", 2);
V([
  p()
], w.prototype, "_navigationSlotHasChildren", 2);
V([
  p()
], w.prototype, "_actionsMenuSlotHasChildren", 2);
V([
  p()
], w.prototype, "_footerSlotHasChildren", 2);
V([
  p()
], w.prototype, "_actionsSlotHasChildren", 2);
w = V([
  u("umb-body-layout")
], w);
var vo = Object.defineProperty, mo = Object.getOwnPropertyDescriptor, na = (e) => {
  throw TypeError(e);
}, At = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? mo(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && vo(t, i, a), a;
}, fo = (e, t, i) => t.has(e) || na("Cannot " + i), _o = (e, t, i) => t.has(e) ? na("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), yo = (e, t, i) => (fo(e, t, "access private method"), i), Ft, ra;
let ke = class extends et {
  constructor() {
    super(...arguments), _o(this, Ft), this.language = "", this.copy = !1, this._copyState = "idle";
  }
  async copyCode() {
    const e = this.textContent;
    e && (await navigator.clipboard.writeText(e), this._copyState = "success", setTimeout(() => {
      this._copyState = "idle";
    }, 2e3));
  }
  render() {
    return l`
			${yo(this, Ft, ra).call(this)}
			<pre><uui-scroll-container><code><slot></slot></code></uui-scroll-container></pre>
		`;
  }
};
Ft = /* @__PURE__ */ new WeakSet();
ra = function() {
  if (!(!this.language && !this.copy))
    return l`
			<div id="header">
				<span id="lang">${this.language}</span>
				${$(
      this.copy,
      () => l`
						<uui-button color=${this._copyState === "idle" ? "default" : "positive"} @click=${this.copyCode}>
							${$(
        this._copyState === "idle",
        () => l`<uui-icon name="copy"></uui-icon> <umb-localize key="general_copy">Copy</umb-localize>`,
        () => l`<uui-icon name="check"></uui-icon> <umb-localize key="general_copied">Copied!</umb-localize>`
      )}
						</uui-button>
					`
    )}
			</div>
		`;
};
ke.styles = [
  P,
  h`
			:host {
				display: block;
				border: 1px solid var(--uui-color-divider-emphasis);
				border-radius: var(--uui-border-radius);
			}

			uui-scroll-container {
				overflow-y: auto;
				overflow-wrap: anywhere;
			}

			pre {
				font-family: monospace;
				background-color: var(--uui-color-surface-alt);
				color: #303033;
				display: block;
				margin: 0;
				overflow-x: auto;
				padding: 9.5px;
			}

			pre,
			code {
				word-wrap: normal;
				white-space: pre;
			}

			#header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				background-color: var(--uui-color-surface-alt);
				border-bottom: 1px solid var(--uui-color-divider-emphasis);
			}

			#lang {
				margin-left: 16px;
				font-weight: bold;
			}

			button {
				font-family: inherit;
				padding: 6px 16px;
				background-color: transparent;
				border: none;
				border-left: 1px solid var(--uui-color-divider-emphasis);
				border-radius: 0;
				color: #000;
				display: flex;
				align-items: center;
				gap: 8px;
			}

			button:hover {
				background-color: var(--uui-color-surface-emphasis);
			}
		`
];
At([
  r()
], ke.prototype, "language", 2);
At([
  r({ type: Boolean })
], ke.prototype, "copy", 2);
At([
  p()
], ke.prototype, "_copyState", 2);
ke = At([
  u("umb-code-block")
], ke);
var go = Object.defineProperty, bo = Object.getOwnPropertyDescriptor, la = (e) => {
  throw TypeError(e);
}, X = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? bo(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && go(t, i, a), a;
}, $o = (e, t, i) => t.has(e) || la("Cannot " + i), wo = (e, t, i) => t.has(e) ? la("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Eo = (e, t, i) => ($o(e, t, "access private method"), i), Gt, ua;
let k = class extends d {
  constructor() {
    super(...arguments), wo(this, Gt), this.open = !1, this.label = "", this.look = "default", this.color = "default", this.placement = "bottom-start", this.compact = !1, this.hideExpand = !1;
  }
  updated(e) {
    super.updated(e), e.has("open") && this.popoverContainerElement && (this.open ? this.popoverContainerElement.showPopover() : this.popoverContainerElement.hidePopover());
  }
  render() {
    return l`
			<uui-button
				id="dropdown-button"
				popovertarget="dropdown-popover"
				.look=${this.look}
				.color=${this.color}
				.label=${this.label}
				.compact=${this.compact}>
				<slot name="label"></slot>
				${$(
      !this.hideExpand,
      () => l`<uui-symbol-expand id="symbol-expand" .open=${this.open}></uui-symbol-expand>`
    )}
			</uui-button>
			<uui-popover-container id="dropdown-popover" .placement=${this.placement} @toggle=${Eo(this, Gt, ua)}>
				<umb-popover-layout>
					<slot></slot>
				</umb-popover-layout>
			</uui-popover-container>
		`;
  }
};
Gt = /* @__PURE__ */ new WeakSet();
ua = function(e) {
  this.open = e.newState === "open";
};
k.styles = [
  P,
  h`
			#dropdown-button {
				min-width: max-content;
			}
			:host(:not([hide-expand]):not([compact])) #dropdown-button {
				--uui-button-padding-right-factor: 2;
			}

			:host(:not([compact])) #symbol-expand {
				margin-left: var(--uui-size-space-2);
			}
		`
];
X([
  Y("#dropdown-popover")
], k.prototype, "popoverContainerElement", 2);
X([
  r({ type: Boolean, reflect: !0 })
], k.prototype, "open", 2);
X([
  r()
], k.prototype, "label", 2);
X([
  r()
], k.prototype, "look", 2);
X([
  r()
], k.prototype, "color", 2);
X([
  r()
], k.prototype, "placement", 2);
X([
  r({ type: Boolean })
], k.prototype, "compact", 2);
X([
  r({ type: Boolean, attribute: "hide-expand" })
], k.prototype, "hideExpand", 2);
k = X([
  u("umb-dropdown")
], k);
var xo = Object.defineProperty, Co = Object.getOwnPropertyDescriptor, ha = (e) => {
  throw TypeError(e);
}, Z = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Co(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && xo(t, i, a), a;
}, hi = (e, t, i) => t.has(e) || ha("Cannot " + i), Oe = (e, t, i) => (hi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), zt = (e, t, i) => t.has(e) ? ha("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Po = (e, t, i, s) => (hi(e, t, "write to private field"), t.set(e, i), i), ne = (e, t, i) => (hi(e, t, "access private method"), i), ye, rt, B, pa, ca, da, va, ma, fa, _a, ya;
let L = class extends d {
  constructor() {
    super(), zt(this, B), this._numberOfActions = 0, this._dropdownIsOpen = !1, zt(this, ye), zt(this, rt, new Ys(this)), this.consumeContext(Xs, (e) => {
      Po(this, ye, e);
    });
  }
  updated(e) {
    e.has("entityType") && e.has("unique") && (Oe(this, rt).setEntityType(this.entityType), Oe(this, rt).setUnique(this.unique ?? null), ne(this, B, pa).call(this));
  }
  render() {
    return this._numberOfActions === 0 ? _ : l`<uui-action-bar slot="actions">${ne(this, B, _a).call(this)} ${ne(this, B, ya).call(this)} </uui-action-bar>`;
  }
};
ye = /* @__PURE__ */ new WeakMap();
rt = /* @__PURE__ */ new WeakMap();
B = /* @__PURE__ */ new WeakSet();
pa = function() {
  new Zs(
    this,
    oi,
    "entityAction",
    (e) => e.forEntityTypes.includes(this.entityType),
    async (e) => {
      this._numberOfActions = e.length, this._firstActionManifest = this._numberOfActions > 0 ? e[0].manifest : void 0, ne(this, B, ca).call(this);
    },
    "umbEntityActionsObserver"
  );
};
ca = async function() {
  this._firstActionManifest && (this._firstActionApi = await Js(this, this._firstActionManifest, [
    { unique: this.unique, entityType: this.entityType, meta: this._firstActionManifest.meta }
  ]), this._firstActionHref = await this._firstActionApi?.getHref());
};
da = function() {
  if (!this.entityType) throw new Error("Entity type is not defined");
  if (this.unique === void 0) throw new Error("Unique is not defined");
  Oe(this, ye) ? Oe(this, ye).toggleContextMenu(this, {
    entityType: this.entityType,
    unique: this.unique,
    headline: this.label
  }) : this._dropdownIsOpen = !this._dropdownIsOpen;
};
va = async function(e) {
  Oe(this, ye)?.closeContextMenu(), !this._firstActionHref && (e.stopPropagation(), await this._firstActionApi?.execute());
};
ma = function() {
  this._dropdownIsOpen = !1;
};
fa = function(e) {
  e.stopPropagation();
};
_a = function() {
  return this._numberOfActions === 1 ? _ : Oe(this, ye) ? l`<uui-button @click=${ne(this, B, da)} label="Open actions menu">
				<uui-symbol-more></uui-symbol-more>
			</uui-button>` : l`
			<umb-dropdown .open=${this._dropdownIsOpen} @click=${ne(this, B, fa)} compact hide-expand>
				<uui-symbol-more slot="label"></uui-symbol-more>
				<umb-entity-action-list
					@action-executed=${ne(this, B, ma)}
					.entityType=${this.entityType}
					.unique=${this.unique}></umb-entity-action-list>
			</umb-dropdown>
		`;
};
ya = function() {
  return this._firstActionApi ? l`<uui-button
			label=${g(this._firstActionManifest?.meta.label)}
			@click=${ne(this, B, va)}
			href="${g(this._firstActionHref)}">
			<uui-icon name=${g(this._firstActionManifest?.meta.icon)}></uui-icon>
		</uui-button>` : _;
};
Z([
  r({ type: String, attribute: "entity-type" })
], L.prototype, "entityType", 2);
Z([
  r({ type: String })
], L.prototype, "unique", 2);
Z([
  r({ type: String })
], L.prototype, "label", 2);
Z([
  p()
], L.prototype, "_numberOfActions", 2);
Z([
  p()
], L.prototype, "_firstActionManifest", 2);
Z([
  p()
], L.prototype, "_firstActionApi", 2);
Z([
  p()
], L.prototype, "_firstActionHref", 2);
Z([
  p()
], L.prototype, "_dropdownIsOpen", 2);
L = Z([
  u("umb-entity-actions-bundle")
], L);
var So = Object.getOwnPropertyDescriptor, ko = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? So(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = n(a) || a);
  return a;
};
let Kt = class extends et {
  render() {
    return l`
			<slot></slot>
			<slot id="actions" name="actions"></slot>
		`;
  }
};
Kt.styles = [
  P,
  h`
			:host {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				height: var(--umb-footer-layout-height);
				border-top: 1px solid var(--uui-color-border);
				background-color: var(--uui-color-surface);
				box-sizing: border-box;
			}

			#actions {
				display: flex;
				gap: var(--uui-size-space-2);
				margin: 0 var(--uui-size-layout-1);
				margin-left: auto;
			}
		`
];
Kt = ko([
  u("umb-footer-layout")
], Kt);
var Oo = Object.getOwnPropertyDescriptor, Mo = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Oo(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = n(a) || a);
  return a;
};
const Ao = {
  type: "kind",
  alias: "Umb.Kind.Button",
  matchKind: "button",
  matchType: "headerApp",
  manifest: {
    type: "headerApp",
    kind: "button",
    elementName: "umb-header-app-button"
  }
};
oi.register(Ao);
let Yt = class extends d {
  render() {
    return l`
			<uui-button
				look="primary"
				label="${g(this.manifest?.meta.label)}"
				href="${g(this.manifest?.meta.href)}"
				compact>
				<umb-icon name="${g(this.manifest?.meta.icon)}"></umb-icon>
			</uui-button>
		`;
  }
};
Yt.styles = [
  P,
  h`
			uui-button {
				font-size: 18px;
				--uui-button-background-color: var(--umb-header-app-button-background-color, transparent);
				--uui-button-background-color-hover: var(
					--umb-header-app-button-background-color-hover,
					var(--uui-color-emphasis)
				);
			}
		`
];
Yt = Mo([
  u("umb-header-app-button")
], Yt);
var To = Object.defineProperty, Uo = Object.getOwnPropertyDescriptor, pi = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Uo(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && To(t, i, a), a;
};
let Ye = class extends d {
  render() {
    return l`
			<div class="user-info">
				<slot name="avatar"></slot>
				<div>
					<span class="name">${this.name}</span>
					<span class="detail">${this.detail}</span>
				</div>
			</div>
			<slot id="description"></slot>
			<slot id="actions-container" name="actions"></slot>
		`;
  }
};
Ye.styles = [
  P,
  h`
			:host {
				--avatar-size: calc(2em + 4px);
				display: contents;
			}

			slot[name='actions'] {
				--uui-button-border-radius: 50px 50px 50px 50px;
				display: flex;
				align-items: center;
				--uui-button-height: calc(var(--uui-size-2) * 4);
				margin-right: var(--uui-size-2);
			}

			#actions-container {
				opacity: 0;
				transition: opacity 120ms;
			}

			:host(:hover) #actions-container {
				opacity: 1;
			}

			:host(:hover) #actions-container {
				opacity: 1;
			}

			.user-info {
				position: relative;
				display: flex;
				align-items: flex-end;
				gap: var(--uui-size-space-5);
			}

			.user-info div {
				display: flex;
				flex-direction: column;
				min-width: var(--uui-size-60);
			}

			.detail {
				font-size: var(--uui-size-4);
				color: var(--uui-color-text-alt);
				line-height: 1;
			}
		`
];
pi([
  r({ type: String })
], Ye.prototype, "name", 2);
pi([
  r({ type: String })
], Ye.prototype, "detail", 2);
Ye = pi([
  u("umb-history-item")
], Ye);
var Io = Object.getOwnPropertyDescriptor, Do = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Io(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = n(a) || a);
  return a;
};
let Xt = class extends d {
  render() {
    return l`<slot></slot> `;
  }
};
Xt.styles = [
  P,
  h`
			:host {
				display: grid;
				grid-template-columns: auto 1fr auto;
				align-items: center;
				--avatar-size: calc(2em + 4px);
				gap: var(--uui-size-6);
				position: relative;
			}

			/** TODO: This doesn't work due to "display:contents" in umb-history-item, but is needed for the way I put the grid together.
			* Find a different solution so we can have the grey line that links each history item together (this is purely a visual effect, no rush)

			::slotted(*) {
				position: relative;
			}

			::slotted(*:not(:last-child)) {
				margin-bottom: calc(2 * var(--uui-size-space-3));
			}
			::slotted(*:not(:last-child))::before {
				content: '';
				border: 1px solid var(--uui-color-border);
				position: absolute;
				display: block;
				height: calc(1.5 * var(--avatar-size));
				top: var(--avatar-size);
				left: calc(-1px + var(--avatar-size) / 2);
			}
			*/
		`
];
Xt = Do([
  u("umb-history-list")
], Xt);
var Bo = Object.defineProperty, Lo = Object.getOwnPropertyDescriptor, ga = (e) => {
  throw TypeError(e);
}, tt = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Lo(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Bo(t, i, a), a;
}, ci = (e, t, i) => t.has(e) || ga("Cannot " + i), $t = (e, t, i) => (ci(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Rt = (e, t, i) => t.has(e) ? ga("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Oi = (e, t, i, s) => (ci(e, t, "write to private field"), t.set(e, i), i), Mi = (e, t, i) => (ci(e, t, "access private method"), i), Fe, Ge, lt, Zt;
let ge = class extends d {
  constructor() {
    super(...arguments), Rt(this, lt), Rt(this, Fe), Rt(this, Ge), this._style = {};
  }
  set color(e) {
    Oi(this, Fe, e), Mi(this, lt, Zt).call(this);
  }
  get color() {
    return $t(this, Fe) || $t(this, Ge);
  }
  set name(e) {
    const [t, i] = e ? e.split(" ") : [];
    Oi(this, Ge, i), this._icon = t, Mi(this, lt, Zt).call(this);
  }
  get name() {
    return this._icon;
  }
  render() {
    return l`<uui-icon name=${g(this._icon)} style=${Hs(this._style)}></uui-icon>`;
  }
};
Fe = /* @__PURE__ */ new WeakMap();
Ge = /* @__PURE__ */ new WeakMap();
lt = /* @__PURE__ */ new WeakSet();
Zt = function() {
  const e = $t(this, Fe) || $t(this, Ge);
  if (!e) {
    this._style = { "--uui-icon-color": "inherit" };
    return;
  }
  const t = e.replace("color-", ""), i = Qs(t), s = i ? `var(${i})` : t;
  this._style = { "--uui-icon-color": s };
};
ge.styles = [
  P,
  h`
			:host {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		`
];
tt([
  p()
], ge.prototype, "_icon", 2);
tt([
  p()
], ge.prototype, "_style", 2);
tt([
  r({ type: String })
], ge.prototype, "color", 1);
tt([
  r({ type: String })
], ge.prototype, "name", 1);
ge = tt([
  u("umb-icon")
], ge);
var Wo = Object.defineProperty, zo = Object.getOwnPropertyDescriptor, ba = (e) => {
  throw TypeError(e);
}, di = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? zo(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Wo(t, i, a), a;
}, vi = (e, t, i) => t.has(e) || ba("Cannot " + i), wt = (e, t, i) => (vi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), qt = (e, t, i) => t.has(e) ? ba("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ro = (e, t, i, s) => (vi(e, t, "write to private field"), t.set(e, i), i), se = (e, t, i) => (vi(e, t, "access private method"), i), Xe, Et, I, xt, $a, wa, Ea, xa, Ca;
let Ze = class extends le(
  d
) {
  constructor() {
    super(), qt(this, I), qt(this, Xe), qt(this, Et, "Umb.PropertyEditorUi.Collection"), new ki(this, js).addAdditionalPath(":uiAlias").onSetup((e) => ({
      data: {
        propertyEditorUiAlias: e.uiAlias
      },
      value: void 0
    })).onSubmit((e) => {
      e?.createNewWithPropertyEditorUiAlias ? se(this, I, wa).call(this) : se(this, I, xt).call(this, e?.dataTypeId ?? this.defaultValue ?? "");
    }).observeRouteBuilder((e) => {
      this._dataTypePickerModalPath = e({ uiAlias: wt(this, Et) });
    }), Ro(this, Xe, new ki(this, eo).addAdditionalPath(":uiAlias").onSetup((e) => ({ data: { entityType: Xi, preset: { editorUiAlias: e.uiAlias } } })).onSubmit((e) => {
      se(this, I, xt).call(this, e?.unique ?? this.defaultValue ?? "");
    }));
  }
  getFormElement() {
  }
  render() {
    return this.value ? se(this, I, Ca).call(this) : se(this, I, xa).call(this);
  }
};
Xe = /* @__PURE__ */ new WeakMap();
Et = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakSet();
xt = function(e) {
  this.value = e, this.dispatchEvent(new c());
};
$a = function() {
  se(this, I, xt).call(this, void 0);
};
wa = function() {
  wt(this, Xe).open(
    { uiAlias: wt(this, Et) },
    `create/parent/${Xi}/null`
  );
};
Ea = function() {
  wt(this, Xe)?.open({}, `edit/${this.value}`);
};
xa = function() {
  return this._dataTypePickerModalPath ? l`
			<uui-button
				id="create-button"
				color="default"
				look="placeholder"
				label=${this.localize.term("collection_addCollectionConfiguration")}
				href=${this._dataTypePickerModalPath}></uui-button>
		` : _;
};
Ca = function() {
  return !this.value || !this._dataTypePickerModalPath ? _ : l`
			<uui-ref-list>
				<umb-ref-data-type standalone data-type-id=${this.value} @open=${se(this, I, Ea)}>
					<uui-action-bar slot="actions">
						<uui-button
							label=${this.localize.term("general_choose")}
							href=${this._dataTypePickerModalPath}></uui-button>
						<uui-button @click=${se(this, I, $a)} label=${this.localize.term("general_remove")}></uui-button>
					</uui-action-bar>
				</umb-ref-data-type>
			</uui-ref-list>
		`;
};
Ze.styles = [
  h`
			#create-button {
				width: 100%;
			}
		`
];
di([
  p()
], Ze.prototype, "_dataTypePickerModalPath", 2);
di([
  r({ attribute: "default-value" })
], Ze.prototype, "defaultValue", 2);
Ze = di([
  u("umb-input-collection-configuration")
], Ze);
var qo = Object.defineProperty, Vo = Object.getOwnPropertyDescriptor, Pa = (e) => {
  throw TypeError(e);
}, Tt = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Vo(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && qo(t, i, a), a;
}, Ho = (e, t, i) => t.has(e) || Pa("Cannot " + i), No = (e, t, i) => t.has(e) ? Pa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ai = (e, t, i) => (Ho(e, t, "access private method"), i), ut, Sa, ka;
let Je = class extends Ie(d, "") {
  constructor() {
    super(...arguments), No(this, ut), this.readonly = !1, this.showLabels = !1;
  }
  getFormElement() {
  }
  render() {
    return l`
			<uui-color-swatches
				?readonly=${this.readonly}
				label="Color picker"
				value=${this.value ?? ""}
				@change=${Ai(this, ut, Sa)}>
				${Ai(this, ut, ka).call(this)}
			</uui-color-swatches>
		`;
  }
};
ut = /* @__PURE__ */ new WeakSet();
Sa = function(e) {
  this.value = e.target.value, this.dispatchEvent(new c());
};
ka = function() {
  return this.swatches ? Ns(
    this.swatches,
    (e) => l`
				<uui-color-swatch label=${e.label} value=${e.value} .showLabel=${this.showLabels}></uui-color-swatch>
			`
  ) : _;
};
Tt([
  r({ type: Boolean, reflect: !0 })
], Je.prototype, "readonly", 2);
Tt([
  r({ type: Boolean })
], Je.prototype, "showLabels", 2);
Tt([
  r({ type: Array })
], Je.prototype, "swatches", 2);
Je = Tt([
  u("umb-input-color")
], Je);
var Fo = Object.getOwnPropertyDescriptor, Go = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Fo(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = n(a) || a);
  return a;
};
let Jt = class extends Zi {
  /**
   * Specifies the date and time type of the input that will be rendered.
   * @type {InputDateType}
   * @enum {InputDateType}
   */
  set type(e) {
    super.type = e;
  }
  get type() {
    return super.type;
  }
  constructor() {
    super(), this.type = "date";
  }
};
Jt.styles = [
  ...Zi.styles,
  h`
			input {
				color-scheme: var(--uui-color-scheme, normal);
			}
		`
];
Jt = Go([
  u("umb-input-date")
], Jt);
var Ko = Object.defineProperty, Yo = Object.getOwnPropertyDescriptor, Oa = (e) => {
  throw TypeError(e);
}, ue = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Yo(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Ko(t, i, a), a;
}, mi = (e, t, i) => t.has(e) || Oa("Cannot " + i), Xo = (e, t, i) => (mi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Ti = (e, t, i) => t.has(e) ? Oa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Zo = (e, t, i, s) => (mi(e, t, "write to private field"), t.set(e, i), i), Jo = (e, t, i) => (mi(e, t, "access private method"), i), ht, Qt, Ma;
let W = class extends le(d, void 0) {
  constructor() {
    super(), Ti(this, Qt), Ti(this, ht), this.name = "Dropdown", this.readonly = !1, this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? ri,
      () => !this.readonly && !!this.required && (this.value === void 0 || this.value === null || this.value === "")
    );
  }
  set options(e) {
    Zo(this, ht, e), this.value = e?.filter((t) => t.selected).map((t) => t.value).join(", ") ?? void 0;
  }
  get options() {
    return Xo(this, ht);
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("uui-select"));
  }
  render() {
    return l`
			<uui-select
				label=${this.localize.term(this.localize.term("general_fieldFor", [this.name]))}
				.placeholder=${this.placeholder ?? ""}
				.options=${this.options ?? []}
				@change=${Jo(this, Qt, Ma)}
				?readonly=${this.readonly}>
			</uui-select>
		`;
  }
};
ht = /* @__PURE__ */ new WeakMap();
Qt = /* @__PURE__ */ new WeakSet();
Ma = function(e) {
  e.stopPropagation(), this.value = e.target.value?.toString() ?? void 0, this.dispatchEvent(new c());
};
W.styles = [
  h`
			:host {
				display: block;
			}
		`
];
ue([
  r({ type: Array })
], W.prototype, "options", 1);
ue([
  r({ type: String })
], W.prototype, "placeholder", 2);
ue([
  r({ type: Boolean })
], W.prototype, "multiple", 2);
ue([
  r({ type: String })
], W.prototype, "name", 2);
ue([
  r({ type: Boolean })
], W.prototype, "required", 2);
ue([
  r({ type: String })
], W.prototype, "requiredMessage", 2);
ue([
  r({ type: Boolean, reflect: !0 })
], W.prototype, "readonly", 2);
W = ue([
  u("umb-input-dropdown-list")
], W);
var Qo = Object.defineProperty, jo = Object.getOwnPropertyDescriptor, Aa = (e) => {
  throw TypeError(e);
}, H = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? jo(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Qo(t, i, a), a;
}, fi = (e, t, i) => t.has(e) || Aa("Cannot " + i), v = (e, t, i) => (fi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Le = (e, t, i) => t.has(e) ? Aa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Vt = (e, t, i, s) => (fi(e, t, "write to private field"), t.set(e, i), i), Ee = (e, t, i) => (fi(e, t, "access private method"), i), jt, pt, ct, m, oe, Ta, Ua, Ia, Da, Ba, La;
let E = class extends le(
  d
) {
  constructor() {
    super(), Le(this, oe), Le(this, jt, new li(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputEntity",
      itemSelector: "uui-ref-node",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new c());
      }
    })), Le(this, pt, 0), this.minMessage = "This field need more items", Le(this, ct, 1 / 0), this.maxMessage = "This field exceeds the allowed amount of items", Le(this, m), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && (v(this, m)?.getSelection().length ?? 0) < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && (v(this, m)?.getSelection().length ?? 0) > this.max
    );
  }
  getFormElement() {
  }
  set min(e) {
    Vt(this, pt, e), v(this, m) && (v(this, m).min = e);
  }
  get min() {
    return v(this, pt);
  }
  set max(e) {
    Vt(this, ct, e), v(this, m) && (v(this, m).max = e);
  }
  get max() {
    return v(this, ct);
  }
  set selection(e) {
    v(this, m)?.setSelection(e), v(this, jt).setModel(e);
  }
  get selection() {
    return v(this, m)?.getSelection() ?? [];
  }
  set value(e) {
    this.selection = io(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  set pickerContext(e) {
    v(this, m) || (Vt(this, m, e ? new e(this) : void 0), Ee(this, oe, Ta).call(this));
  }
  get pickerContext() {
    return v(this, m);
  }
  render() {
    return l`${Ee(this, oe, Ba).call(this)} ${Ee(this, oe, Da).call(this)}`;
  }
};
jt = /* @__PURE__ */ new WeakMap();
pt = /* @__PURE__ */ new WeakMap();
ct = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
oe = /* @__PURE__ */ new WeakSet();
Ta = async function() {
  v(this, m) && (v(this, m).min = this.min, v(this, m).max = this.max, this.observe(v(this, m).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(v(this, m).selectedItems, (e) => this._items = e, "_observerItems"));
};
Ua = function() {
  v(this, m)?.openPicker({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // TODO: ignoring this for now to prevent breaking existing functionality.
    // if we want a very generic input it should be possible to pass in picker config
    hideTreeRoot: !0
  });
};
Ia = function(e) {
  v(this, m)?.requestRemoveItem(e.unique);
};
Da = function() {
  if (!(this.max === 1 && this.selection && this.selection.length >= this.max))
    return l`
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${Ee(this, oe, Ua)}
				label=${this.localize.term("general_choose")}></uui-button>
		`;
};
Ba = function() {
  if (this._items)
    return l`
			<uui-ref-list>
				${be(
      this._items,
      (e) => e.unique,
      (e) => Ee(this, oe, La).call(this, e)
    )}
			</uui-ref-list>
		`;
};
La = function(e) {
  if (!e.unique) return;
  const t = this.getIcon?.(e) ?? e.icon ?? "";
  return l`
			<uui-ref-node name=${e.name} id=${e.unique}>
				${$(t, () => l`<umb-icon slot="icon" name=${t}></umb-icon>`)}
				<uui-action-bar slot="actions">
					<uui-button @click=${() => Ee(this, oe, Ia).call(this, e)} label=${this.localize.term("general_remove")}></uui-button>
				</uui-action-bar>
			</uui-ref-node>
		`;
};
E.styles = [
  h`
			#btn-add {
				width: 100%;
			}
		`
];
H([
  r({ type: Number })
], E.prototype, "min", 1);
H([
  r({ type: String, attribute: "min-message" })
], E.prototype, "minMessage", 2);
H([
  r({ type: Number })
], E.prototype, "max", 1);
H([
  r({ attribute: !1 })
], E.prototype, "getIcon", 2);
H([
  r({ type: String, attribute: "min-message" })
], E.prototype, "maxMessage", 2);
H([
  r({ type: Array })
], E.prototype, "selection", 1);
H([
  r({ type: String })
], E.prototype, "value", 1);
H([
  r({ attribute: !1 })
], E.prototype, "pickerContext", 1);
H([
  p()
], E.prototype, "_items", 2);
E = H([
  u("umb-input-entity")
], E);
var en = Object.defineProperty, tn = Object.getOwnPropertyDescriptor, Wa = (e) => {
  throw TypeError(e);
}, Ut = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? tn(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && en(t, i, a), a;
}, an = (e, t, i) => t.has(e) || Wa("Cannot " + i), sn = (e, t, i) => t.has(e) ? Wa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ui = (e, t, i) => (an(e, t, "access private method"), i), dt, ei;
let Qe = class extends Ie(d, "") {
  constructor() {
    super(...arguments), sn(this, dt), this.opacity = !1, this.showPalette = !1;
  }
  getFormElement() {
  }
  // HACK: Since `uui-color-picker` doesn't have an option to hide the swatches, we had to get creative.
  // Based on UUI v1.8.0-rc3, the value of `swatches` must be a falsey value to hide them.
  // https://github.com/umbraco/Umbraco.UI/blob/v1.8.0-rc.3/packages/uui-color-picker/lib/uui-color-picker.element.ts#L517
  // However, the object-type for `swatches` is a `string[]` (non-nullable).
  // https://github.com/umbraco/Umbraco.UI/blob/v1.8.0-rc.3/packages/uui-color-picker/lib/uui-color-picker.element.ts#L157
  // To do this, we must omit the `.swatches` attribute, otherwise the default swatches can't be used.
  // So, we've use a `when()` render both configurations. [LK]
  render() {
    const e = this.showPalette ? this.swatches : void 0;
    return $(
      this.showPalette && !e,
      () => l`
				<uui-color-picker
					label="Eye dropper"
					.opacity=${this.opacity}
					.value=${this.value}
					@change=${Ui(this, dt, ei)}>
				</uui-color-picker>
			`,
      () => l`
				<uui-color-picker
					label="Eye dropper"
					.opacity=${this.opacity}
					.swatches=${e}
					.value=${this.value}
					@change=${Ui(this, dt, ei)}>
				</uui-color-picker>
			`
    );
  }
};
dt = /* @__PURE__ */ new WeakSet();
ei = function(e) {
  e.stopPropagation(), this.value = e.target.value, this.dispatchEvent(new c());
};
Ut([
  r({ type: Boolean })
], Qe.prototype, "opacity", 2);
Ut([
  r({ type: Boolean })
], Qe.prototype, "showPalette", 2);
Ut([
  r({ type: Array })
], Qe.prototype, "swatches", 2);
Qe = Ut([
  u("umb-input-eye-dropper")
], Qe);
var on = Object.defineProperty, nn = Object.getOwnPropertyDescriptor, za = (e) => {
  throw TypeError(e);
}, It = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? nn(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && on(t, i, a), a;
}, _i = (e, t, i) => t.has(e) || za("Cannot " + i), Ct = (e, t, i) => (_i(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Ht = (e, t, i) => t.has(e) ? za("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ra = (e, t, i, s) => (_i(e, t, "write to private field"), t.set(e, i), i), Ii = (e, t, i) => (_i(e, t, "access private method"), i), Dt, xe, vt, qa, Va;
let Me = class extends d {
  constructor() {
    super(...arguments), Ht(this, vt), Ht(this, Dt, []), Ht(this, xe), this.max = 1 / 0;
  }
  set extensionType(e) {
    Ra(this, xe, e), Ii(this, vt, qa).call(this);
  }
  get extensionType() {
    return Ct(this, xe);
  }
  render() {
    return l`
			<uui-button
				label=${this.localize.term("general_choose")}
				look="placeholder"
				color="default"
				@click=${Ii(this, vt, Va)}></uui-button>
		`;
  }
};
Dt = /* @__PURE__ */ new WeakMap();
xe = /* @__PURE__ */ new WeakMap();
vt = /* @__PURE__ */ new WeakSet();
qa = function() {
  Ct(this, xe) && this.observe(oi.byType(Ct(this, xe)), (e) => {
    Ra(this, Dt, e.sort((t, i) => t.type.localeCompare(i.type) || t.alias.localeCompare(i.alias)));
  });
};
Va = async function() {
  const i = await (await this.getContext(Gi)).open(this, Gs, {
    data: {
      headline: `${this.localize.term("general_choose")}...`,
      items: Ct(this, Dt).filter((s) => s.type === this.extensionType).map((s) => ({
        label: s.name,
        value: s.alias,
        description: s.alias,
        icon: s.meta?.icon
        // HACK: Ugly way to get the icon. [LK]
      }))
    }
  }).onSubmit();
  i && (this.value = i, this.dispatchEvent(new c()));
};
Me.styles = [
  h`
			:host {
				display: flex;
				flex-direction: column;
			}
		`
];
It([
  r({ type: String, attribute: "extension-type" })
], Me.prototype, "extensionType", 1);
It([
  r({ attribute: !1 })
], Me.prototype, "value", 2);
It([
  r({ type: Number })
], Me.prototype, "max", 2);
Me = It([
  u("umb-input-manifest")
], Me);
var rn = Object.defineProperty, ln = Object.getOwnPropertyDescriptor, Ha = (e) => {
  throw TypeError(e);
}, J = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? ln(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && rn(t, i, a), a;
}, un = (e, t, i) => t.has(e) || Ha("Cannot " + i), hn = (e, t, i) => t.has(e) ? Ha("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Di = (e, t, i) => (un(e, t, "access private method"), i), mt, Na, Fa;
function Bi(e) {
  const t = parseInt(e, 10);
  return isNaN(t) ? void 0 : t;
}
let O = class extends le(d) {
  constructor() {
    super(), hn(this, mt), this.minLabel = "Low value", this.maxLabel = "High value", this.addValidator(
      "patternMismatch",
      () => "The low value must not be exceed the high value",
      () => this._minValue !== void 0 && this._maxValue !== void 0 ? this._minValue > this._maxValue : !1
    );
  }
  set minValue(e) {
    this._minValue = e, this.updateValue();
  }
  get minValue() {
    return this._minValue;
  }
  set maxValue(e) {
    this._maxValue = e, this.updateValue();
  }
  get maxValue() {
    return this._maxValue;
  }
  updateValue() {
    const e = this._minValue || this._maxValue ? (this._minValue ?? "") + "," + (this._maxValue ?? "") : void 0;
    super.value !== e && (super.value = e);
  }
  set value(e) {
    if (e !== this.value) {
      if (e === void 0) {
        this.minValue = this.maxValue = void 0;
        return;
      }
      const t = e.split(/[ ,]+/);
      this.minValue = Bi(t[0]), this.maxValue = Bi(t[1]);
    }
  }
  get value() {
    return this.minValue || this.maxValue ? (this.minValue || "") + "," + (this.maxValue || "") : void 0;
  }
  firstUpdated() {
    this.shadowRoot?.querySelectorAll("uui-input").forEach((e) => this.addFormControlElement(e));
  }
  focus() {
    return this.shadowRoot?.querySelector("uui-input")?.focus();
  }
  render() {
    return l`
			<uui-input
				type="number"
				label=${this.minLabel}
				min=${g(this.validationRange?.min)}
				max=${g(this.validationRange?.max)}
				placeholder=${this.validationRange?.min ?? ""}
				.value=${this._minValue}
				@input=${Di(this, mt, Na)}></uui-input>
			<b>–</b>
			<uui-input
				type="number"
				label=${this.maxLabel}
				min=${g(this.validationRange?.min)}
				max=${g(this.validationRange?.max)}
				placeholder=${this.validationRange?.max ?? "∞"}
				.value=${this._maxValue}
				@input=${Di(this, mt, Fa)}></uui-input>
		`;
  }
};
mt = /* @__PURE__ */ new WeakSet();
Na = function(e) {
  const t = e.target.value;
  this.minValue = t ? Number(t) : void 0, this.dispatchEvent(new c());
};
Fa = function(e) {
  const t = e.target.value;
  this.maxValue = t ? Number(t) : void 0, this.dispatchEvent(new c());
};
O.styles = h`
		:host(:invalid:not([pristine])) {
			color: var(--uui-color-invalid);
		}
		:host(:invalid:not([pristine])) uui-input {
			border-color: var(--uui-color-invalid);
		}
	`;
J([
  r({ type: String, attribute: "min-label" })
], O.prototype, "minLabel", 2);
J([
  r({ type: String, attribute: "max-label" })
], O.prototype, "maxLabel", 2);
J([
  p()
], O.prototype, "_minValue", 2);
J([
  r({ type: Number })
], O.prototype, "minValue", 1);
J([
  p()
], O.prototype, "_maxValue", 2);
J([
  r({ type: Number })
], O.prototype, "maxValue", 1);
J([
  r({ type: Object })
], O.prototype, "validationRange", 2);
J([
  r()
], O.prototype, "value", 1);
O = J([
  u("umb-input-number-range")
], O);
var pn = Object.defineProperty, cn = Object.getOwnPropertyDescriptor, Ga = (e) => {
  throw TypeError(e);
}, De = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? cn(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && pn(t, i, a), a;
}, yi = (e, t, i) => t.has(e) || Ga("Cannot " + i), dn = (e, t, i) => (yi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Li = (e, t, i) => t.has(e) ? Ga("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), vn = (e, t, i, s) => (yi(e, t, "write to private field"), t.set(e, i), i), Wi = (e, t, i) => (yi(e, t, "access private method"), i), ft, _t, Ka, Ya;
let re = class extends le(
  d,
  void 0
) {
  constructor() {
    super(), Li(this, _t), Li(this, ft, ""), this.list = [], this.readonly = !1, this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? ri,
      () => !this.readonly && !!this.required && (this.value === void 0 || this.value === null || this.value === "")
    );
  }
  set value(e) {
    vn(this, ft, e);
  }
  get value() {
    return dn(this, ft);
  }
  render() {
    return this.list ? l`
			<uui-radio-group .value=${this.value} @change=${Wi(this, _t, Ka)} ?readonly=${this.readonly}>
				${be(
      this.list,
      (e) => e,
      (e) => Wi(this, _t, Ya).call(this, e)
    )}
			</uui-radio-group>
		` : _;
  }
};
ft = /* @__PURE__ */ new WeakMap();
_t = /* @__PURE__ */ new WeakSet();
Ka = function(e) {
  e.stopPropagation(), e.target instanceof to && (this.value = e.target.value, this.dispatchEvent(new c()));
};
Ya = function(e) {
  return l`
			<uui-radio
				value=${e.value}
				class=${Fi({ invalid: !!e.invalid })}
				label=${e.label + (e.invalid ? ` (${this.localize.term("validation_legacyOption")})` : "")}
				title=${e.invalid ? this.localize.term("validation_legacyOptionDescription") : ""}></uui-radio>
		`;
};
re.styles = [
  h`
			:host {
				display: block;
			}

			uui-radio {
				&.invalid {
					text-decoration: line-through;
				}
			}
		`
];
De([
  r()
], re.prototype, "value", 1);
De([
  r({ type: Array })
], re.prototype, "list", 2);
De([
  r({ type: Boolean, reflect: !0 })
], re.prototype, "readonly", 2);
De([
  r({ type: Boolean })
], re.prototype, "required", 2);
De([
  r({ type: String })
], re.prototype, "requiredMessage", 2);
re = De([
  u("umb-input-radio-button-list")
], re);
var mn = Object.defineProperty, fn = Object.getOwnPropertyDescriptor, Xa = (e) => {
  throw TypeError(e);
}, Q = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? fn(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && mn(t, i, a), a;
}, _n = (e, t, i) => t.has(e) || Xa("Cannot " + i), yn = (e, t, i) => t.has(e) ? Xa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Pt = (e, t, i) => (_n(e, t, "access private method"), i), Ce, gi, Za, Ja;
let z = class extends Ie(d, "") {
  constructor() {
    super(...arguments), yn(this, Ce), this.label = "", this.min = 0, this.max = 100, this.step = 1, this.valueLow = 0, this.valueHigh = 0, this.enableRange = !1, this.readonly = !1;
  }
  getFormElement() {
  }
  render() {
    return this.enableRange ? Pt(this, Ce, Ja).call(this) : Pt(this, Ce, Za).call(this);
  }
};
Ce = /* @__PURE__ */ new WeakSet();
gi = function(e) {
  e.stopPropagation(), this.value = e.target.value, this.dispatchEvent(new c());
};
Za = function() {
  return l`
			<uui-slider
				.label=${this.label}
				.min=${this.min}
				.max=${this.max}
				.step=${this.step}
				.value=${this.valueLow.toString()}
				@change=${Pt(this, Ce, gi)}
				?readonly=${this.readonly}>
			</uui-slider>
		`;
};
Ja = function() {
  return l`
			<uui-range-slider
				.label=${this.label}
				.min=${this.min}
				.max=${this.max}
				.step=${this.step}
				.value="${this.valueLow},${this.valueHigh}"
				@change=${Pt(this, Ce, gi)}
				?readonly=${this.readonly}>
			</uui-range-slider>
		`;
};
Q([
  r()
], z.prototype, "label", 2);
Q([
  r({ type: Number })
], z.prototype, "min", 2);
Q([
  r({ type: Number })
], z.prototype, "max", 2);
Q([
  r({ type: Number })
], z.prototype, "step", 2);
Q([
  r({ type: Number })
], z.prototype, "valueLow", 2);
Q([
  r({ type: Number })
], z.prototype, "valueHigh", 2);
Q([
  r({ type: Boolean, attribute: "enable-range" })
], z.prototype, "enableRange", 2);
Q([
  r({ type: Boolean, reflect: !0 })
], z.prototype, "readonly", 2);
z = Q([
  u("umb-input-slider")
], z);
var gn = Object.defineProperty, bn = Object.getOwnPropertyDescriptor, Qa = (e) => {
  throw TypeError(e);
}, N = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? bn(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && gn(t, i, a), a;
}, bi = (e, t, i) => t.has(e) || Qa("Cannot " + i), zi = (e, t, i) => (bi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Ri = (e, t, i) => t.has(e) ? Qa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), $n = (e, t, i, s) => (bi(e, t, "write to private field"), t.set(e, i), i), wn = (e, t, i) => (bi(e, t, "access private method"), i), qe, ti, ja;
let x = class extends le(d, "") {
  constructor() {
    super(...arguments), Ri(this, ti), Ri(this, qe, !1), this.showLabels = !1, this.ariaLabel = null, this.readonly = !1;
  }
  set checked(e) {
    $n(this, qe, e), super.value = e.toString();
  }
  get checked() {
    return zi(this, qe);
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("uui-toggle"));
  }
  render() {
    const e = this.showLabels ? this.checked ? this.labelOn : this.labelOff : "";
    return l`<uui-toggle
			.checked=${zi(this, qe)}
			.label=${this.ariaLabel}
			?required=${this.required}
			.requiredMessage=${this.requiredMessage}
			@change=${wn(this, ti, ja)}
			?readonly=${this.readonly}
			><span>${e}</span>
		</uui-toggle>`;
  }
};
qe = /* @__PURE__ */ new WeakMap();
ti = /* @__PURE__ */ new WeakSet();
ja = function(e) {
  e.stopPropagation(), this.checked = e.target.checked, this.dispatchEvent(new c());
};
x.styles = [
  h`
			uui-toggle {
				width: 100%;
			}
		`
];
N([
  r({ type: Boolean })
], x.prototype, "required", 2);
N([
  r({ type: String })
], x.prototype, "requiredMessage", 2);
N([
  r({ type: Boolean })
], x.prototype, "checked", 1);
N([
  r({ type: Boolean })
], x.prototype, "showLabels", 2);
N([
  r({ type: String })
], x.prototype, "labelOn", 2);
N([
  r({ type: String })
], x.prototype, "labelOff", 2);
N([
  r({ type: String, attribute: "aria-label" })
], x.prototype, "ariaLabel", 2);
N([
  r({ type: Boolean, reflect: !0 })
], x.prototype, "readonly", 2);
N([
  p()
], x.prototype, "_currentLabel", 2);
x = N([
  u("umb-input-toggle")
], x);
var En = Object.defineProperty, xn = Object.getOwnPropertyDescriptor, es = (e) => {
  throw TypeError(e);
}, he = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? xn(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && En(t, i, a), a;
}, Cn = (e, t, i) => t.has(e) || es("Cannot " + i), Pn = (e, t, i) => t.has(e) ? es("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), it = (e, t, i) => (Cn(e, t, "access private method"), i), we, ts, is, as, ss;
let R = class extends le(
  d
) {
  constructor() {
    super(...arguments), Pn(this, we), this.label = "", this.alias = "", this.required = !1, this.readonly = !1, this.aliasReadonly = !1, this._aliasLocked = !0;
  }
  firstUpdated() {
    this.addValidator(
      "valueMissing",
      () => ri,
      () => this.required && !this.value
    ), this.shadowRoot?.querySelectorAll("uui-input").forEach((e) => this.addFormControlElement(e));
  }
  focus() {
    return this.shadowRoot?.querySelector("uui-input")?.focus();
  }
  render() {
    const e = this.label ?? this.localize.term("placeholders_entername"), t = this.localize.term("placeholders_enterAlias");
    return l`
			<uui-input
				id="name"
				placeholder=${e}
				label=${e}
				.value=${this.value}
				@input=${it(this, we, ts)}
				?required=${this.required}
				?readonly=${this.readonly}>
				${this.readonly ? l`<span id="alias" class="muted" slot="append">${this.alias}</span>` : l`
							<uui-input-lock
								id="alias"
								name="alias"
								slot="append"
								label=${t}
								placeholder=${t}
								.value=${this.alias}
								?auto-width=${!!this.value}
								?locked=${this._aliasLocked && !this.aliasReadonly}
								?readonly=${this.aliasReadonly}
								?required=${this.required}
								@input=${it(this, we, is)}
								@blur=${it(this, we, as)}
								@lock-change=${it(this, we, ss)}>
							</uui-input-lock>
						`}
			</uui-input>
		`;
  }
};
we = /* @__PURE__ */ new WeakSet();
ts = function(e) {
  if (!(e instanceof Ji)) return;
  typeof e.composedPath()[0]?.value == "string" && (this.value = e.target.value.toString(), this.autoGenerateAlias && this._aliasLocked && (this.alias = ji(this.value)), this.dispatchEvent(new c()));
};
is = function(e) {
  if (e.stopPropagation(), !(e instanceof Ji)) return;
  const t = e.composedPath()[0];
  typeof t?.value == "string" && (this.alias = t.value, this.dispatchEvent(new c()));
};
as = function() {
  !this.alias && this._aliasLocked === !1 && (this.alias = ji(this.value ?? ""), this.dispatchEvent(new c()));
};
ss = function(e) {
  this._aliasLocked = !this._aliasLocked, !this.alias && this._aliasLocked ? this.autoGenerateAlias = !0 : this.autoGenerateAlias = !1, this._aliasLocked || e.target?.focus();
};
R.styles = h`
		#name {
			width: 100%;
			flex: 1 1 auto;
			align-items: center;
		}

		#alias {
			max-width: 50%;

			&.muted {
				opacity: 0.55;
				padding: var(--uui-size-1, 3px) var(--uui-size-space-3, 9px);
			}
		}

		:host(:invalid:not([pristine])) {
			color: var(--uui-color-invalid);
		}
		:host(:invalid:not([pristine])) > uui-input {
			border-color: var(--uui-color-invalid);
		}
	`;
he([
  r({ type: String })
], R.prototype, "label", 2);
he([
  r({ type: String, reflect: !1 })
], R.prototype, "alias", 2);
he([
  r({ type: Boolean, reflect: !0 })
], R.prototype, "required", 2);
he([
  r({ type: Boolean, reflect: !0 })
], R.prototype, "readonly", 2);
he([
  r({ type: Boolean, reflect: !0, attribute: "alias-readonly" })
], R.prototype, "aliasReadonly", 2);
he([
  r({ type: Boolean, attribute: "auto-generate-alias" })
], R.prototype, "autoGenerateAlias", 2);
he([
  p()
], R.prototype, "_aliasLocked", 2);
R = he([
  u("umb-input-with-alias")
], R);
var Sn = Object.defineProperty, kn = Object.getOwnPropertyDescriptor, os = (e) => {
  throw TypeError(e);
}, F = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? kn(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Sn(t, i, a), a;
}, ns = (e, t, i) => t.has(e) || os("Cannot " + i), On = (e, t, i) => (ns(e, t, "read from private field"), i ? i.call(e) : t.get(e)), qi = (e, t, i) => t.has(e) ? os("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), fe = (e, t, i) => (ns(e, t, "access private method"), i), ii, G, $i, rs, ls, us, hs, ps;
let C = class extends Ie(d, "") {
  constructor() {
    super(), qi(this, G), qi(this, ii, new li(this, {
      getUniqueOfElement: (e) => e.value.toString(),
      getUniqueOfModel: (e) => e.value,
      identifier: "Umb.SorterIdentifier.ColorEditor",
      itemSelector: "umb-multiple-color-picker-item-input",
      containerSelector: "#sorter-wrapper",
      onChange: ({ model: e }) => {
        const t = this._items;
        this._items = e, this.requestUpdate("_items", t), this.dispatchEvent(new c());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this.disabled = !1, this.readonly = !1, this.showLabels = !1, this._items = [], this.consumeContext(ao, async (e) => {
      const t = e;
      this.observe(
        await t.propertyValueByAlias("useLabel"),
        (i) => {
          this.showLabels = !!i;
        },
        "observeUseLabel"
      );
    }), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this._items.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this._items.length > this.max
    );
  }
  set items(e) {
    this._items = e ?? [], On(this, ii).setModel(this.items);
  }
  get items() {
    return this._items;
  }
  getFormElement() {
  }
  render() {
    return l`${fe(this, G, hs).call(this)} ${fe(this, G, ps).call(this)}`;
  }
};
ii = /* @__PURE__ */ new WeakMap();
G = /* @__PURE__ */ new WeakSet();
$i = function() {
  this.items = [...this._items, { value: "", label: "" }], this.pristine = !1, this.dispatchEvent(new c()), fe(this, G, ls).call(this);
};
rs = function(e, t) {
  e.stopPropagation();
  const i = e.currentTarget, s = i.value, a = i.label;
  this.items = this._items.map((o, n) => n === t ? { value: s, label: a } : o), this.dispatchEvent(new c());
};
ls = async function() {
  await this.updateComplete;
  const e = this.shadowRoot?.querySelectorAll(
    "umb-multiple-color-picker-item-input"
  );
  e && e[e.length - 1].focus();
};
us = function(e, t) {
  e.stopPropagation(), this.items = this._items.filter((i, s) => s !== t), this.pristine = !1, this.dispatchEvent(new c());
};
hs = function() {
  return l`
			<div id="sorter-wrapper">
				${be(
    this._items,
    (e, t) => t,
    (e, t) => l`
						<umb-multiple-color-picker-item-input
							label=${e.label}
							value=${e.value}
							required
							required-message="Item ${t + 1} is missing a value"
							?disabled=${this.disabled}
							?readonly=${this.readonly}
							?showLabels=${this.showLabels}
							@enter=${fe(this, G, $i)}
							@change=${(i) => fe(this, G, rs).call(this, i, t)}
							@delete=${(i) => fe(this, G, us).call(this, i, t)}>
						</umb-multiple-color-picker-item-input>
					`
  )}
			</div>
		`;
};
ps = function() {
  return this.disabled || this.readonly ? _ : l`
			<uui-button
				id="action"
				label=${this.localize.term("general_add")}
				look="placeholder"
				color="default"
				?disabled=${this.disabled}
				@click=${fe(this, G, $i)}></uui-button>
		`;
};
C.styles = [
  h`
			#action {
				display: block;
			}

			.--umb-sorter-placeholder {
				position: relative;
				visibility: hidden;
			}
			.--umb-sorter-placeholder::after {
				content: '';
				position: absolute;
				inset: 0px;
				border-radius: var(--uui-border-radius);
				border: 1px dashed var(--uui-color-divider-emphasis);
			}
		`
];
F([
  r({ type: Number })
], C.prototype, "min", 2);
F([
  r({ type: String, attribute: "min-message" })
], C.prototype, "minMessage", 2);
F([
  r({ type: Number })
], C.prototype, "max", 2);
F([
  r({ type: String, attribute: "min-message" })
], C.prototype, "maxMessage", 2);
F([
  r({ type: Boolean, reflect: !0 })
], C.prototype, "disabled", 2);
F([
  r({ type: Boolean, reflect: !0 })
], C.prototype, "readonly", 2);
F([
  r({ type: Boolean })
], C.prototype, "showLabels", 2);
F([
  p()
], C.prototype, "_items", 2);
F([
  r({ type: Array })
], C.prototype, "items", 1);
C = F([
  u("umb-multiple-color-picker-input")
], C);
var Mn = Object.defineProperty, An = Object.getOwnPropertyDescriptor, cs = (e) => {
  throw TypeError(e);
}, j = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? An(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Mn(t, i, a), a;
}, Tn = (e, t, i) => t.has(e) || cs("Cannot " + i), Un = (e, t, i) => t.has(e) ? cs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), b = (e, t, i) => (Tn(e, t, "access private method"), i), f, ds, vs, ms, fs, _s, ys, gs, bs, $s, ws, wi;
let M = class extends Ie(d, "") {
  constructor() {
    super(...arguments), Un(this, f), this._valueHex = "", this.disabled = !1, this.readonly = !1, this.showLabels = !1;
  }
  set value(e) {
    e.startsWith("#") ? (this._valueHex = e, super.value = e.substring(1)) : (super.value = e, this._valueHex = `#${e}`);
  }
  get value() {
    return super.value;
  }
  async focus() {
    await this.updateComplete, this._input?.focus();
  }
  getFormElement() {
  }
  render() {
    return l`
			<umb-form-validation-message id="validation-message" @invalid=${b(this, f, ws)} @valid=${b(this, f, $s)}>
				<div id="item">
					${this.disabled || this.readonly ? _ : l`<uui-icon name="icon-grip"></uui-icon>`}
					<div class="color-wrapper">
						<uui-input
							id="input"
							value=${this.value}
							label=${this.localize.term("general_value")}
							placeholder=${this.localize.term("general_value")}
							required=${this.required}
							required-message="Value is missing"
							@keydown=${b(this, f, _s)}
							@input=${b(this, f, gs)}
							@change=${b(this, f, ys)}>
							<uui-color-swatch
								slot="prepend"
								label=${this.value}
								value=${this._valueHex}
								@click=${b(this, f, wi)}></uui-color-swatch>
						</uui-input>
						<input aria-hidden="${!0}" type="color" id="color" value=${this.value} @change=${b(this, f, bs)} />
					</div>
					${$(
      this.showLabels,
      () => l`
							<uui-input
								label=${this.localize.term("placeholders_label")}
								placeholder=${this.localize.term("placeholders_label")}
								value=${g(this.label)}
								@keydown=${b(this, f, ms)}
								@input="${b(this, f, vs)}"
								@change="${b(this, f, fs)}"
								?disabled=${this.disabled}
								?readonly=${this.readonly}></uui-input>
						`
    )}
					${$(
      !this.readonly,
      () => l`
							<uui-button
								compact
								label=${this.localize.term("actions_delete")}
								look="primary"
								?disabled=${this.disabled}
								@click=${b(this, f, ds)}>
								<uui-icon name="icon-trash"></uui-icon>
							</uui-button>
						`
    )}
				</div>
			</umb-form-validation-message>
		`;
  }
};
f = /* @__PURE__ */ new WeakSet();
ds = async function() {
  await Ki(this, {
    headline: `${this.localize.term("actions_delete")} ${this.value || ""}`,
    content: this.localize.term("content_nestedContentDeleteItem"),
    color: "danger",
    confirmLabel: this.localize.term("actions_delete")
  }), this.dispatchEvent(new Yi());
};
vs = function(e) {
  e.stopPropagation(), this.label = e.target.value, this.dispatchEvent(new ni());
};
ms = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  e.key === "Enter" && t.value && this.dispatchEvent(new CustomEvent("enter"));
};
fs = function(e) {
  e.stopPropagation(), this.label = e.target.value, this.dispatchEvent(new c());
};
_s = function(e) {
  e.stopPropagation(), e.key === "Enter" && b(this, f, wi).call(this);
};
ys = function(e) {
  e.stopPropagation(), this.value = e.target.value, this.dispatchEvent(new c());
};
gs = function(e) {
  e.stopPropagation(), this.value = e.target.value, this.dispatchEvent(new ni());
};
bs = function(e) {
  e.stopPropagation(), this.value = this._colorPicker.value, this.dispatchEvent(new c());
};
$s = function(e) {
  e.stopPropagation();
};
ws = function(e) {
  e.stopPropagation();
};
wi = function() {
  this._colorPicker.click();
};
M.styles = [
  h`
			:host {
				display: flex;
				align-items: center;
				margin-bottom: var(--uui-size-space-3);
				gap: var(--uui-size-space-3);
			}

			#item {
				position: relative;
				display: flex;
				gap: var(--uui-size-1);
				align-items: center;
			}
			uui-input {
				flex: 1;
			}

			uui-color-swatch {
				padding: var(--uui-size-1);
			}

			uui-color-swatch:focus-within {
				outline: 2px solid var(--uui-color-selected);
				outline-offset: 0;
				border-radius: var(--uui-border-radius);
			}

			.color-wrapper {
				position: relative;
				flex: 1;
				display: flex;
				flex-direction: column;
			}

			uui-input,
			#validation-message {
				flex: 1;
			}

			input[type='color'] {
				visibility: hidden;
				width: 0px;
				padding: 0;
				margin: 0;
				position: absolute;
			}
		`
];
j([
  r({ type: String })
], M.prototype, "value", 1);
j([
  p()
], M.prototype, "_valueHex", 2);
j([
  r({ type: Boolean, reflect: !0 })
], M.prototype, "disabled", 2);
j([
  r({ type: Boolean, reflect: !0 })
], M.prototype, "readonly", 2);
j([
  r({ type: String })
], M.prototype, "label", 2);
j([
  Y("#input")
], M.prototype, "_input", 2);
j([
  Y("#color")
], M.prototype, "_colorPicker", 2);
j([
  r({ type: Boolean })
], M.prototype, "showLabels", 2);
M = j([
  u("umb-multiple-color-picker-item-input")
], M);
var In = Object.defineProperty, Dn = Object.getOwnPropertyDescriptor, Es = (e) => {
  throw TypeError(e);
}, ee = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Dn(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && In(t, i, a), a;
}, Ei = (e, t, i) => t.has(e) || Es("Cannot " + i), We = (e, t, i) => (Ei(e, t, "read from private field"), i ? i.call(e) : t.get(e)), at = (e, t, i) => t.has(e) ? Es("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Vi = (e, t, i, s) => (Ei(e, t, "write to private field"), t.set(e, i), i), _e = (e, t, i) => (Ei(e, t, "access private method"), i), Ve, yt, gt, K, xi, xs, Cs, Ps, Ss, ks;
let A = class extends le(
  d,
  void 0
) {
  constructor() {
    super(), at(this, K), at(this, Ve, new li(this, {
      getUniqueOfElement: (e) => e.getAttribute("data-sort-entry-id"),
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.MultipleTextString",
      itemSelector: "umb-input-multiple-text-string-item",
      containerSelector: "#sorter-wrapper",
      onChange: ({ model: e }) => {
        const t = this._items;
        this._items = e, this.requestUpdate("_items", t), this.dispatchEvent(new c());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", at(this, yt, !1), at(this, gt, !1), this._items = [], this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this._items.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this._items.length > this.max
    );
  }
  set disabled(e) {
    Vi(this, yt, e), e && We(this, Ve).disable();
  }
  get disabled() {
    return We(this, yt);
  }
  set readonly(e) {
    Vi(this, gt, e), e && We(this, Ve).disable();
  }
  get readonly() {
    return We(this, gt);
  }
  get items() {
    return this._items;
  }
  set items(e) {
    this.value = e?.length > 0 ? "some value" : "", this._items = e ?? [], We(this, Ve).setModel(this.items);
  }
  getFormElement() {
  }
  render() {
    return l`<div id="sorter-wrapper">${_e(this, K, Ss).call(this)}</div>
			${_e(this, K, ks).call(this)}`;
  }
};
Ve = /* @__PURE__ */ new WeakMap();
yt = /* @__PURE__ */ new WeakMap();
gt = /* @__PURE__ */ new WeakMap();
K = /* @__PURE__ */ new WeakSet();
xi = function() {
  this._items = [...this._items, ""], this.pristine = !1, this.dispatchEvent(new c()), _e(this, K, Cs).call(this);
};
xs = function(e, t) {
  e.stopPropagation();
  const s = e.currentTarget.value;
  this._items = this._items.map((a, o) => o === t ? s : a), this.dispatchEvent(new c());
};
Cs = async function() {
  await this.updateComplete;
  const e = this.shadowRoot?.querySelectorAll(
    "umb-input-multiple-text-string-item"
  );
  e[e.length - 1].focus();
};
Ps = function(e, t) {
  e.stopPropagation(), this._items = this._items.filter((i, s) => s !== t), this.pristine = !1, this.dispatchEvent(new c());
};
Ss = function() {
  return l`
			${be(
    this._items,
    (e, t) => t,
    (e, t) => l`
					<umb-input-multiple-text-string-item
						name="item-${t}"
						data-sort-entry-id=${e}
						required
						required-message="Item ${t + 1} is missing a value"
						value=${e}
						?disabled=${this.disabled}
						?readonly=${this.readonly}
						@enter=${_e(this, K, xi)}
						@delete=${(i) => _e(this, K, Ps).call(this, i, t)}
						@input=${(i) => _e(this, K, xs).call(this, i, t)}>
					</umb-input-multiple-text-string-item>
				`
  )}
		`;
};
ks = function() {
  return this.disabled || this.readonly ? _ : l`
			<uui-button
				color="default"
				id="action"
				label="Add"
				look="placeholder"
				?disabled=${this.disabled}
				@click=${_e(this, K, xi)}></uui-button>
		`;
};
A.styles = [
  h`
			#action {
				display: block;
			}

			.--umb-sorter-placeholder {
				position: relative;
				visibility: hidden;
			}
			.--umb-sorter-placeholder::after {
				content: '';
				position: absolute;
				inset: 0px;
				border-radius: var(--uui-border-radius);
				border: 1px dashed var(--uui-color-divider-emphasis);
			}
		`
];
ee([
  r({ type: Number })
], A.prototype, "min", 2);
ee([
  r({ type: String, attribute: "min-message" })
], A.prototype, "minMessage", 2);
ee([
  r({ type: Number })
], A.prototype, "max", 2);
ee([
  r({ type: String, attribute: "min-message" })
], A.prototype, "maxMessage", 2);
ee([
  r({ type: Boolean, reflect: !0 })
], A.prototype, "disabled", 1);
ee([
  r({ type: Boolean, reflect: !0 })
], A.prototype, "readonly", 1);
ee([
  p()
], A.prototype, "_items", 2);
ee([
  r({ type: Array })
], A.prototype, "items", 1);
A = ee([
  u("umb-input-multiple-text-string")
], A);
var Bn = Object.defineProperty, Ln = Object.getOwnPropertyDescriptor, Os = (e) => {
  throw TypeError(e);
}, Bt = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Ln(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Bn(t, i, a), a;
}, Wn = (e, t, i) => t.has(e) || Os("Cannot " + i), zn = (e, t, i) => t.has(e) ? Os("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), $e = (e, t, i) => (Wn(e, t, "access private method"), i), ae, Ms, As, Ts, Us, Is, Ds;
let Ae = class extends Ie(d, "") {
  constructor() {
    super(...arguments), zn(this, ae), this.disabled = !1, this.readonly = !1;
  }
  async focus() {
    await this.updateComplete, this._input?.focus();
  }
  getFormElement() {
  }
  render() {
    return l`
			${this.disabled || this.readonly ? _ : l`<uui-icon name="icon-grip" class="handle"></uui-icon>`}

			<umb-form-validation-message id="validation-message" @invalid=${$e(this, ae, Ds)} @valid=${$e(this, ae, Is)}>
				<uui-input
					id="input"
					label="Value"
					value=${this.value}
					@keydown=${$e(this, ae, Ts)}
					@input=${$e(this, ae, As)}
					@change=${$e(this, ae, Us)}
					?disabled=${this.disabled}
					?readonly=${this.readonly}
					required=${this.required}
					required-message="Value is missing"></uui-input>
			</umb-form-validation-message>

			${$(
      !this.readonly,
      () => l`
					<uui-button
						compact
						label="${this.localize.term("general_remove")} ${this.value}"
						look="outline"
						?disabled=${this.disabled}
						@click=${$e(this, ae, Ms)}>
						<uui-icon name="icon-trash"></uui-icon>
					</uui-button>
				`
    )}
		`;
  }
};
ae = /* @__PURE__ */ new WeakSet();
Ms = async function() {
  await Ki(this, {
    headline: `Delete ${this.value || "item"}`,
    content: "Are you sure you want to delete this item?",
    color: "danger",
    confirmLabel: "Delete"
  }), this.dispatchEvent(new Yi());
};
As = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  this.value = t.value, this.dispatchEvent(new ni());
};
Ts = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  e.key === "Enter" && t.value && this.dispatchEvent(new CustomEvent("enter"));
};
Us = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  this.value = t.value, this.dispatchEvent(new c());
};
Is = function(e) {
  e.stopPropagation();
};
Ds = function(e) {
  e.stopPropagation();
};
Ae.styles = [
  h`
			:host {
				display: flex;
				align-items: center;
				margin-bottom: var(--uui-size-space-3);
				gap: var(--uui-size-space-3);
			}

			#validation-message {
				flex: 1;
			}

			#input {
				width: 100%;
			}

			.handle {
				cursor: grab;
			}

			.handle:active {
				cursor: grabbing;
			}
		`
];
Bt([
  r({ type: Boolean, reflect: !0 })
], Ae.prototype, "disabled", 2);
Bt([
  r({ type: Boolean, reflect: !0 })
], Ae.prototype, "readonly", 2);
Bt([
  Y("#input")
], Ae.prototype, "_input", 2);
Ae = Bt([
  u("umb-input-multiple-text-string-item")
], Ae);
var Rn = Object.getOwnPropertyDescriptor, qn = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Rn(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = n(a) || a);
  return a;
};
let ai = class extends d {
  render() {
    return l`<slot></slot>`;
  }
};
ai.styles = [
  P,
  h`
			:host {
				background-color: var(--uui-color-surface);
				display: block;
				border: 1px solid var(--uui-color-border);
				border-radius: var(--uui-border-radius);
				box-shadow: var(--uui-shadow-depth-3);
				overflow: clip;
			}
		`
];
ai = qn([
  u("umb-popover-layout")
], ai);
var Vn = Object.defineProperty, Hn = Object.getOwnPropertyDescriptor, Bs = (e) => {
  throw TypeError(e);
}, Ls = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Hn(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Vn(t, i, a), a;
}, Nn = (e, t, i) => t.has(e) || Bs("Cannot " + i), Nt = (e, t, i) => (Nn(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Fn = (e, t, i) => t.has(e) ? Bs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), He;
let St = class extends so(Qi) {
  constructor() {
    super(...arguments), this.icon = "", Fn(this, He, document.createElement("umb-icon"));
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.icon && (Nt(this, He).setAttribute("slot", "icon"), Nt(this, He).setAttribute("name", this.icon), this.appendChild(Nt(this, He)));
  }
};
He = /* @__PURE__ */ new WeakMap();
St.styles = [
  ...Qi.styles,
  h`
			:host {
				padding-top: var(--uui-size-3);
				padding-bottom: var(--uui-size-3);
			}
		`
];
Ls([
  r({ type: String })
], St.prototype, "icon", 2);
St = Ls([
  u("umb-ref-item")
], St);
var Gn = Object.defineProperty, Kn = Object.getOwnPropertyDescriptor, Ci = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Kn(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Gn(t, i, a), a;
};
let je = class extends d {
  constructor() {
    super(...arguments), this.look = "default", this.divide = !1;
  }
  render() {
    return l`
			<div class=${Fi({ divide: this.divide, compact: this.look === "compact" })}>
				<slot></slot>
			</div>
		`;
  }
};
je.styles = [
  h`
			div {
				display: block;
				position: relative;
			}

			::slotted(*) {
				position: relative;
				margin-top: var(--uui-size-space-6);
			}

			.divide ::slotted(*)::before {
				content: '';
				position: absolute;
				top: calc((var(--uui-size-space-6) / 2) * -1);
				height: 0;
				width: 100%;
				border-top: solid 1px var(--uui-color-divider-standalone);
			}

			::slotted(*:first-child) {
				margin-top: 0;
			}

			.divide ::slotted(*:first-child)::before {
				display: none;
			}

			.compact ::slotted(*) {
				margin-top: var(--uui-size-space-3);
			}

			.compact ::slotted(*:first-child) {
				margin-top: 0;
			}

			.compact.divide ::slotted(*)::before {
				display: none;
			}
		`
];
Ci([
  r({ type: String })
], je.prototype, "look", 2);
Ci([
  r({ type: Boolean })
], je.prototype, "divide", 2);
je = Ci([
  u("umb-stack")
], je);
var Yn = Object.defineProperty, Xn = Object.getOwnPropertyDescriptor, Ws = (e) => {
  throw TypeError(e);
}, te = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Xn(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Yn(t, i, a), a;
}, Pi = (e, t, i) => t.has(e) || Ws("Cannot " + i), S = (e, t, i) => (Pi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), ze = (e, t, i) => t.has(e) ? Ws("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), kt = (e, t, i, s) => (Pi(e, t, "write to private field"), t.set(e, i), i), D = (e, t, i) => (Pi(e, t, "access private method"), i), Pe, bt, y, zs, Te, Ot, Rs, Ue, Si, qs, si, Vs;
let T = class extends et {
  constructor() {
    super(...arguments), ze(this, y), this.lock = "none", this.position = "var(--umb-split-panel-initial-position)", ze(this, Pe, 0), ze(this, bt, 25), this._hasStartPanel = !1, this._hasEndPanel = !1, ze(this, Te, !1), ze(this, Ue, (e) => {
      e.preventDefault();
      const t = (a) => {
        const { clientX: o } = a, { left: n, width: Be } = this.mainElement.getBoundingClientRect(), ce = ea(o - n, 0, Be), U = s(ce, Be);
        kt(this, Pe, this.lock === "start" ? U : Be - U), D(this, y, Ot).call(this, U);
      }, i = () => {
        document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", i), this.dispatchEvent(new CustomEvent("position-changed", { detail: { position: this.position } }));
      }, s = (a, o) => {
        const n = this.snap?.split(" ");
        if (!n) return a;
        const ce = n.map((U) => {
          let ie = parseFloat(U);
          return U.endsWith("%") && (ie = ie / 100 * o), U.startsWith("-") && (ie = o + ie), ie;
        }).reduce((U, ie) => Math.abs(ie - a) < Math.abs(U - a) ? ie : U);
        return ce < a + S(this, bt) && ce > a - S(this, bt) && (a = ce), a;
      };
      document.addEventListener("pointermove", t, { passive: !0 }), document.addEventListener("pointerup", i);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), D(this, y, Si).call(this);
  }
  updated(e) {
    if (super.updated(e), !!S(this, Te) && e.has("position")) {
      if (this.lock !== "none") {
        const { width: t } = this.mainElement.getBoundingClientRect();
        let i = parseFloat(this.position);
        this.position.endsWith("%") && (i = i / 100 * t);
        const s = this.lock === "start" ? i : t - i;
        kt(this, Pe, s);
      }
      D(this, y, Rs).call(this);
    }
  }
  render() {
    return l`
			<div id="main">
				<slot
					name="start"
					@slotchange=${D(this, y, si)}
					style="width: ${this._hasStartPanel ? "100%" : "0"}"></slot>
				<div id="divider">
					<div id="divider-touch-area" tabindex="0" @keydown=${D(this, y, Vs)}></div>
				</div>
				<slot name="end" @slotchange=${D(this, y, si)} style="width: ${this._hasEndPanel ? "100%" : "0"}"></slot>
			</div>
		`;
  }
};
Pe = /* @__PURE__ */ new WeakMap();
bt = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakSet();
zs = function() {
  return this._hasStartPanel && this._hasEndPanel;
};
Te = /* @__PURE__ */ new WeakMap();
Ot = function(e) {
  const { width: t } = this.mainElement.getBoundingClientRect(), s = ea(e, 0, t) / t * 100;
  this.position = s + "%";
};
Rs = function() {
  let e = this.position, t = "1fr";
  this.lock === "start" && (e = S(this, Pe) + "px", t = "1fr"), this.lock === "end" && (e = "1fr", t = S(this, Pe) + "px"), this.mainElement.style.gridTemplateColumns = `
      minmax(var(--umb-split-panel-start-min-width), ${e})
      0px
      minmax(var(--umb-split-panel-end-min-width), ${t})
    `;
};
Ue = /* @__PURE__ */ new WeakMap();
Si = function() {
  this.dividerTouchAreaElement.removeEventListener("pointerdown", S(this, Ue)), this.dividerTouchAreaElement.removeEventListener("touchstart", S(this, Ue)), this.dividerElement.style.display = "none", this.mainElement.style.display = "flex", kt(this, Te, !1);
};
qs = async function() {
  kt(this, Te, !0), this.mainElement.style.display = "grid", this.mainElement.style.gridTemplateColumns = `${this.position} 0px 1fr`, this.dividerElement.style.display = "unset", this.dividerTouchAreaElement.addEventListener("pointerdown", S(this, Ue)), this.dividerTouchAreaElement.addEventListener("touchstart", S(this, Ue), { passive: !1 }), await new Promise((a) => requestAnimationFrame(a));
  const { left: e } = this.shadowRoot.querySelector("#divider").getBoundingClientRect(), { left: t, width: i } = this.mainElement.getBoundingClientRect(), s = (e - t) / i * 100;
  this.position = `${s}%`;
};
si = function(e) {
  const t = e.target, i = t.name;
  if (i === "start" && (this._hasStartPanel = t.assignedElements().length > 0), i === "end" && (this._hasEndPanel = t.assignedElements().length > 0), !S(this, y, zs)) {
    S(this, Te) && D(this, y, Si).call(this);
    return;
  }
  D(this, y, qs).call(this);
};
Vs = function(e) {
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    const { width: t } = this.mainElement.getBoundingClientRect(), a = (this.dividerElement.getBoundingClientRect().left - this.mainElement.getBoundingClientRect().left) / t * 100, n = 1 * (e.shiftKey ? 10 : 1) * (e.key === "ArrowLeft" ? -1 : 1), ce = (a + n) / 100 * this.mainElement.getBoundingClientRect().width;
    D(this, y, Ot).call(this, ce);
  }
  if (e.key === "Home" || e.key === "End") {
    e.preventDefault();
    const { width: t } = this.mainElement.getBoundingClientRect(), i = e.key === "Home" ? 0 : t;
    D(this, y, Ot).call(this, i);
  }
};
T.styles = h`
		:host {
			display: contents;
			--umb-split-panel-initial-position: 50%;
			--umb-split-panel-start-min-width: 0;
			--umb-split-panel-end-min-width: 0;
			--umb-split-panel-divider-touch-area-width: 20px;
			--umb-split-panel-divider-width: 1px;
			--umb-split-panel-divider-color: transparent;
			--umb-split-panel-slot-overflow: hidden;
		}
		slot {
			overflow: var(--umb-split-panel-slot-overflow);
			display: block;
			min-height: 0;
		}
		#main {
			width: 100%;
			height: 100%;
			display: flex;
			position: relative;
			z-index: 0;
			overflow: hidden;
		}
		#divider {
			height: 100%;
			position: relative;
			z-index: 999999;
			display: none;
		}
		#divider-touch-area {
			position: absolute;
			top: 0;
			left: 5px;
			height: 100%;
			width: var(--umb-split-panel-divider-touch-area-width);
			transform: translateX(-50%);
			cursor: col-resize;
		}
		/* Do we want a line that shows the divider? */
		#divider::after {
			content: '';
			position: absolute;
			top: 0;
			left: 50%;
			width: var(--umb-split-panel-divider-width);
			height: 100%;
			transform: round(translateX(-50%));
			background-color: var(--umb-split-panel-divider-color);
			z-index: -1;
		}
	`;
te([
  Y("#main")
], T.prototype, "mainElement", 2);
te([
  Y("#divider-touch-area")
], T.prototype, "dividerTouchAreaElement", 2);
te([
  Y("#divider")
], T.prototype, "dividerElement", 2);
te([
  r({ type: String })
], T.prototype, "snap", 2);
te([
  r({ type: String })
], T.prototype, "lock", 2);
te([
  r({ type: String, reflect: !0 })
], T.prototype, "position", 2);
te([
  p()
], T.prototype, "_hasStartPanel", 2);
te([
  p()
], T.prototype, "_hasEndPanel", 2);
T = te([
  u("umb-split-panel")
], T);
var Zn = Object.defineProperty, Jn = Object.getOwnPropertyDescriptor, pe = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Jn(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, i, a) : n(a)) || a);
  return s && a && Zn(t, i, a), a;
};
class Hi extends Event {
  constructor() {
    super("selected", { bubbles: !0, composed: !0 });
  }
}
class Ni extends Event {
  constructor() {
    super("deselected", { bubbles: !0, composed: !0 });
  }
}
class Qn extends Event {
  constructor() {
    super("ordered", { bubbles: !0, composed: !0 });
  }
}
let q = class extends et {
  constructor() {
    super(...arguments), this.items = [], this.columns = [], this.config = {
      allowSelection: !1,
      hideIcon: !1
    }, this.selection = [], this.orderingColumn = "", this.orderingDesc = !1, this._selectionMode = !1, this._renderRow = (e) => l`
			<uui-table-row
				?selectable="${this.config.allowSelection}"
				?select-only=${this._selectionMode}
				?selected=${this._isSelected(e.id)}
				@selected=${() => this._selectRow(e.id)}
				@deselected=${() => this._deselectRow(e.id)}>
				${this._renderRowCheckboxCell(e)} ${this.columns.map((t) => this._renderRowCell(t, e))}
			</uui-table-row>
		`;
  }
  _isSelected(e) {
    return this.selection.includes(e);
  }
  _handleRowCheckboxChange(e, t) {
    e.target.checked ? this._selectRow(t.id) : this._deselectRow(t.id);
  }
  _handleAllRowsCheckboxChange(e) {
    e.target.checked ? this._selectAllRows() : this._deselectAllRows();
  }
  _handleOrderingChange(e) {
    this.orderingDesc = this.orderingColumn === e.alias ? !this.orderingDesc : !1, this.orderingColumn = e.alias, this.dispatchEvent(new Qn());
  }
  _selectAllRows() {
    this.selection = this.items.map((e) => e.id), this._selectionMode = !0, this.dispatchEvent(new Hi());
  }
  _deselectAllRows() {
    this.selection = [], this._selectionMode = !1, this.dispatchEvent(new Ni());
  }
  _selectRow(e) {
    this.selection = [...this.selection, e], this._selectionMode = this.selection.length > 0, this.dispatchEvent(new Hi());
  }
  _deselectRow(e) {
    this.selection = this.selection.filter((t) => t !== e), this._selectionMode = this.selection.length > 0, this.dispatchEvent(new Ni());
  }
  render() {
    return l`
			<uui-table class="uui-text">
				<uui-table-column
					.style=${$(
      !(this.config.allowSelection === !1 && this.config.hideIcon === !0),
      () => "width: 60px"
    )}></uui-table-column>
				<uui-table-head>
					${this._renderHeaderCheckboxCell()} ${this.columns.map((e) => this._renderHeaderCell(e))}
				</uui-table-head>
				${be(this.items, (e) => e.id, this._renderRow)}
			</uui-table>
		`;
  }
  _renderHeaderCell(e) {
    return l`
			<uui-table-head-cell style="--uui-table-cell-padding: 0 var(--uui-size-5)">
				${e.allowSorting ? l`${this._renderSortingUI(e)}` : l`<span style="text-align:${e.align ?? "left"};">${e.name}</span>`}
			</uui-table-head-cell>
		`;
  }
  _renderSortingUI(e) {
    return l`
			<button
				style="padding: var(--uui-size-5) var(--uui-size-1);"
				@click="${() => this._handleOrderingChange(e)}">
				<span style="text-align:${e.align ?? "left"};">${e.name}</span>
				<uui-symbol-sort ?active=${this.orderingColumn === e.alias} ?descending=${this.orderingDesc}>
				</uui-symbol-sort>
			</button>
		`;
  }
  _renderHeaderCheckboxCell() {
    if (!(this.config.hideIcon && !this.config.allowSelection))
      return l`
			<uui-table-head-cell style="--uui-table-cell-padding: 0; text-align: center;">
				${$(
        this.config.allowSelection,
        () => l` <uui-checkbox
							label="Select All"
							style="padding: var(--uui-size-4) var(--uui-size-5);"
							@change="${this._handleAllRowsCheckboxChange}"
							?checked="${this.selection.length === this.items.length}">
						</uui-checkbox>`
      )}
			</uui-table-head-cell>
		`;
  }
  _renderRowCheckboxCell(e) {
    if (!(this.config.hideIcon && !this.config.allowSelection))
      return l`
			<uui-table-cell style="text-align: center;">
				${$(!this.config.hideIcon, () => l`<umb-icon name="${g(e.icon ?? void 0)}"></umb-icon>`)}
				${$(
        this.config.allowSelection,
        () => l`
						<uui-checkbox
							label="Select Row"
							@click=${(t) => t.stopPropagation()}
							@change=${(t) => this._handleRowCheckboxChange(t, e)}
							?checked="${this._isSelected(e.id)}">
						</uui-checkbox>
					`
      )}
			</uui-table-cell>
		`;
  }
  _renderRowCell(e, t) {
    return l`
			<uui-table-cell
				style="--uui-table-cell-padding: 0 var(--uui-size-5); text-align:${e.align ?? "left"}; width: ${e.width || "auto"};">
					${this._renderCellContent(e, t)}
			</uui-table-cell>
		</uui-table-cell>
		`;
  }
  _renderCellContent(e, t) {
    const i = t.data.find((s) => s.columnAlias === e.alias)?.value;
    if (e.elementName) {
      const s = document.createElement(e.elementName);
      return s.column = e, s.item = t, s.value = i, s;
    }
    if (e.labelTemplate) {
      import("@umbraco-cms/backoffice/ufm");
      const s = document.createElement("umb-ufm-render");
      return s.inline = !0, s.markdown = e.labelTemplate, s.value = { value: i }, s;
    }
    return i;
  }
};
q.styles = [
  P,
  h`
			:host {
				height: fit-content;
			}

			uui-table {
				box-shadow: var(--uui-shadow-depth-1);
			}

			uui-table-head {
				position: sticky;
				top: 0;
				z-index: 1;
				background-color: var(--uui-color-surface, #fff);
			}

			uui-table-row uui-checkbox {
				display: none;
			}

			uui-table-row[selectable]:focus umb-icon,
			uui-table-row[selectable]:focus-within umb-icon,
			uui-table-row[selectable]:hover umb-icon,
			uui-table-row[select-only] umb-icon {
				display: none;
			}

			uui-table-row[selectable]:focus uui-checkbox,
			uui-table-row[selectable]:focus-within uui-checkbox,
			uui-table-row[selectable]:hover uui-checkbox,
			uui-table-row[select-only] uui-checkbox {
				display: inline-block;
			}

			uui-table-head-cell:focus,
			uui-table-head-cell:focus-within,
			uui-table-head-cell:hover {
				--uui-symbol-sort-hover: 1;
			}

			uui-table-head-cell button {
				padding: 0;
				background-color: transparent;
				color: inherit;
				border: none;
				cursor: pointer;
				font-weight: inherit;
				font-size: inherit;
				display: inline-flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
			}

			uui-table-head-cell button > span {
				flex: 1 0 auto;
			}

			uui-table-cell umb-icon {
				vertical-align: top;
			}
		`
];
pe([
  r({ type: Array, attribute: !1 })
], q.prototype, "items", 2);
pe([
  r({ type: Array, attribute: !1 })
], q.prototype, "columns", 2);
pe([
  r({ type: Object, attribute: !1 })
], q.prototype, "config", 2);
pe([
  r({ type: Array, attribute: !1 })
], q.prototype, "selection", 2);
pe([
  r({ type: String, attribute: !1 })
], q.prototype, "orderingColumn", 2);
pe([
  r({ type: Boolean, attribute: !1 })
], q.prototype, "orderingDesc", 2);
pe([
  p()
], q.prototype, "_selectionMode", 2);
q = pe([
  u("umb-table")
], q);
export {
  ai as A,
  St as B,
  je as C,
  T as D,
  Hi as E,
  Ni as F,
  Qn as G,
  q as H,
  Se as U,
  Ke as a,
  w as b,
  ke as c,
  k as d,
  L as e,
  Kt as f,
  Yt as g,
  Ye as h,
  Xt as i,
  ge as j,
  Ze as k,
  Je as l,
  Jt as m,
  W as n,
  E as o,
  Qe as p,
  Me as q,
  O as r,
  re as s,
  z as t,
  x as u,
  R as v,
  C as w,
  M as x,
  A as y,
  Ae as z
};
//# sourceMappingURL=table.element-R7ONhd66.js.map
