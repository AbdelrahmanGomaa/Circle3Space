import { UmbContextToken as y } from "@umbraco-cms/backoffice/context-api";
import { css as b, property as u, state as c, customElement as m, nothing as h, repeat as Ot, html as n, when as _e, query as Et, ref as ve, ifDefined as G } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as C } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as f, umbFocus as me } from "@umbraco-cms/backoffice/lit-element";
import { UmbPathPattern as kt } from "@umbraco-cms/backoffice/router";
import { UMB_SECTION_PATH_PATTERN as fe } from "@umbraco-cms/backoffice/section";
import { UmbExtensionsManifestInitializer as ye, createExtensionElement as be, UmbExtensionsElementAndApiInitializer as we, UmbExtensionsApiInitializer as ge } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as it } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_MODAL_CONTEXT as $e, UmbModalToken as xe } from "@umbraco-cms/backoffice/modal";
import { UUIInputEvent as Tt } from "@umbraco-cms/backoffice/external/uui";
import { umbBindToValidation as St, UmbDataPathVariantQuery as Ce } from "@umbraco-cms/backoffice/validation";
import { UmbContextBase as Oe } from "@umbraco-cms/backoffice/class-api";
import { UmbNumberState as Ee } from "@umbraco-cms/backoffice/observable-api";
import { UmbVariantId as dt } from "@umbraco-cms/backoffice/variant";
import { UMB_MARK_ATTRIBUTE_NAME as Pt } from "@umbraco-cms/backoffice/const";
import { UMB_PROPERTY_DATASET_CONTEXT as ke, isNameablePropertyDatasetContext as Te } from "@umbraco-cms/backoffice/property";
const Xa = new y("UmbWorkspaceContext"), Se = "Umb.Condition.WorkspaceHasCollection", qa = Se, Pe = "Umb.Condition.WorkspaceEntityIsNew", Fa = Pe, Ya = "Umb.Condition.WorkspaceAlias";
var We = Object.defineProperty, Ve = Object.getOwnPropertyDescriptor, Wt = (t) => {
  throw TypeError(t);
}, R = (t, e, a, o) => {
  for (var i = o > 1 ? void 0 : o ? Ve(e, a) : e, r = t.length - 1, s; r >= 0; r--)
    (s = t[r]) && (i = (o ? s(e, a, i) : s(i)) || i);
  return o && i && We(e, a, i), i;
}, Ae = (t, e, a) => e.has(t) || Wt("Cannot " + a), Ue = (t, e, a) => e.has(t) ? Wt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), Ne = (t, e, a) => (Ae(t, e, "access private method"), a), ot, Vt;
let k = class extends f {
  constructor() {
    super(...arguments), Ue(this, ot), this.look = "secondary", this.color = "default", this.items = [], this._popoverOpen = !1;
  }
  render() {
    return this.items?.length ? n`<uui-button
				id="popover-trigger"
				popovertarget="workspace-action-popover"
				look="${this.look}"
				color="${this.color}"
				label=${this.localize.term("visuallyHiddenTexts_tabExpand")}
				compact>
				<uui-symbol-expand id="expand-symbol" .open=${this._popoverOpen}></uui-symbol-expand>
			</uui-button>
			<uui-popover-container
				id="workspace-action-popover"
				margin="6"
				placement="top-end"
				@toggle=${Ne(this, ot, Vt)}>
				<umb-popover-layout>
					<uui-scroll-container>
						${Ot(
      this.items,
      (t) => t.alias,
      (t) => t.component
    )}
					</uui-scroll-container>
				</umb-popover-layout>
			</uui-popover-container>` : h;
  }
};
ot = /* @__PURE__ */ new WeakSet();
Vt = function(t) {
  this._popoverOpen = t.newState === "open";
};
k.styles = [
  C,
  b`
			:host {
				--uui-menu-item-flat-structure: 1;
			}

			#expand-symbol {
				/* TODO: remove this hack and use a proper UUI symbol for this */
				transform: rotate(-90deg);
			}

			#expand-symbol[open] {
				transform: rotate(0deg);
			}

			#workspace-action-popover {
				min-width: 200px;
			}

			#popover-trigger {
				--uui-button-padding-top-factor: 0;
				--uui-button-padding-bottom-factor: 0.125;
			}
		`
];
R([
  u()
], k.prototype, "look", 2);
R([
  u()
], k.prototype, "color", 2);
R([
  u({ type: Array, attribute: !1 })
], k.prototype, "items", 2);
R([
  c()
], k.prototype, "_popoverOpen", 2);
k = R([
  m("umb-workspace-action-menu")
], k);
const Ie = new y(
  "UmbWorkspaceContext",
  void 0,
  (t) => t.getUnique !== void 0
), Ga = new y(
  "UmbWorkspaceContext",
  void 0,
  (t) => "propertyStructureById" in t
), ja = new y("UmbWorkspaceContext", void 0, (t) => "publish" in t), Qa = new y(
  "UmbWorkspaceContext",
  void 0,
  (t) => "routes" in t
), Me = new y("UmbWorkspaceContext", void 0, (t) => "requestSubmit" in t), De = new y("UmbWorkspaceContext", void 0, (t) => "variants" in t), Re = new kt("workspace/:entityType", fe), Be = new kt("view/:viewPathname", Re);
var ze = Object.defineProperty, Le = Object.getOwnPropertyDescriptor, At = (t) => {
  throw TypeError(t);
}, $ = (t, e, a, o) => {
  for (var i = o > 1 ? void 0 : o ? Le(e, a) : e, r = t.length - 1, s; r >= 0; r--)
    (s = t[r]) && (i = (o ? s(e, a, i) : s(i)) || i);
  return o && i && ze(e, a, i), i;
}, Ke = (t, e, a) => e.has(t) || At("Cannot " + a), He = (t, e, a) => e.has(t) ? At("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), tt = (t, e, a) => (Ke(t, e, "access private method"), a), I, Ut, Nt, It;
let v = class extends f {
  constructor() {
    super(), He(this, I), this.headline = "", this.hideNavigation = !1, this.enforceNoFooter = !1, this.loading = !1, this._workspaceViews = [], new ye(this, it, "workspaceView", null, (t) => {
      this._workspaceViews = t.map((e) => e.manifest), this._createRoutes();
    });
  }
  _createRoutes() {
    let t = [];
    this._workspaceViews.length > 0 && (t = this._workspaceViews.map((e) => ({
      path: Be.generateLocal({ viewPathname: e.meta.pathname }),
      component: () => be(e),
      setup: (a) => {
        a && (a.manifest = e);
      }
    })), t.push({ ...t[0], unique: t[0].path, path: "" }), t.push({
      path: "**",
      component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
    })), this._routes = t;
  }
  render() {
    return n`
			<umb-body-layout main-no-padding .headline=${this.headline} ?loading=${this.loading}>
				${tt(this, I, Nt).call(this)}
				<slot name="header" slot="header"></slot>
				${tt(this, I, Ut).call(this)}
				<slot name="action-menu" slot="action-menu"></slot>
				${tt(this, I, It).call(this)}
				<slot></slot>
				${_e(
      !this.enforceNoFooter,
      () => n`
						<umb-workspace-footer slot="footer" data-mark="workspace:footer">
							<slot name="footer-info"></slot>
							<slot name="actions" slot="actions" data-mark="workspace:footer-actions"></slot>
						</umb-workspace-footer>
					`
    )}
			</umb-body-layout>
		`;
  }
};
I = /* @__PURE__ */ new WeakSet();
Ut = function() {
  return n`
			${!this.hideNavigation && this._workspaceViews.length > 1 ? n`
						<uui-tab-group slot="navigation" data-mark="workspace:view-links">
							${Ot(
    this._workspaceViews,
    (t) => t.alias,
    (t, e) => (
      // Notice how we use index 0 to determine which workspace that is active with empty path. [NL]
      n`
										<uui-tab
											href="${this._routerPath}/view/${t.meta.pathname}"
											.label="${t.meta.label ? this.localize.string(t.meta.label) : t.name}"
											?active=${"view/" + t.meta.pathname === this._activePath || e === 0 && this._activePath === ""}
											data-mark="workspace:view-link:${t.alias}">
											<umb-icon slot="icon" name=${t.meta.icon}></umb-icon>
											${t.meta.label ? this.localize.string(t.meta.label) : t.name}
										</uui-tab>
									`
    )
  )}
						</uui-tab-group>
					` : h}
		`;
};
Nt = function() {
  return this.backPath ? n`
			<uui-button
				slot="header"
				class="back-button"
				compact
				href=${this.backPath}
				label=${this.localize.term("general_back")}
				data-mark="action:back">
				<uui-icon name="icon-arrow-left"></uui-icon>
			</uui-button>
		` : h;
};
It = function() {
  return !this._routes || this._routes.length === 0 ? h : n`
			<umb-router-slot
				inherit-addendum
				id="router-slot"
				.routes=${this._routes}
				@init=${(t) => {
    this._routerPath = t.target.absoluteRouterPath;
  }}
				@change=${(t) => {
    this._activePath = t.target.localActiveViewPath;
  }}></umb-router-slot>
		`;
};
v.styles = [
  C,
  b`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}

			#router-slot {
				display: flex;
				flex-direction: column;
				height: 100%;
			}

			.back-button {
				margin-right: var(--uui-size-space-4);
			}

			uui-input {
				width: 100%;
			}

			uui-tab-group {
				--uui-tab-divider: var(--uui-color-border);
				border-left: 1px solid var(--uui-color-border);
				border-right: 1px solid var(--uui-color-border);
			}

			umb-extension-slot[slot='actions'] {
				display: flex;
				gap: var(--uui-size-space-2);
			}
		`
];
$([
  u()
], v.prototype, "headline", 2);
$([
  u({ type: Boolean })
], v.prototype, "hideNavigation", 2);
$([
  u({ type: Boolean })
], v.prototype, "enforceNoFooter", 2);
$([
  u({ attribute: "back-path" })
], v.prototype, "backPath", 2);
$([
  u({ type: Boolean })
], v.prototype, "loading", 2);
$([
  c()
], v.prototype, "_workspaceViews", 2);
$([
  c()
], v.prototype, "_routes", 2);
$([
  c()
], v.prototype, "_routerPath", 2);
$([
  c()
], v.prototype, "_activePath", 2);
v = $([
  m("umb-workspace-editor")
], v);
var Xe = Object.defineProperty, qe = Object.getOwnPropertyDescriptor, Mt = (t) => {
  throw TypeError(t);
}, B = (t, e, a, o) => {
  for (var i = o > 1 ? void 0 : o ? qe(e, a) : e, r = t.length - 1, s; r >= 0; r--)
    (s = t[r]) && (i = (o ? s(e, a, i) : s(i)) || i);
  return o && i && Xe(e, a, i), i;
}, Fe = (t, e, a) => e.has(t) || Mt("Cannot " + a), Ye = (t, e, a) => e.has(t) ? Mt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), wt = (t, e, a) => (Fe(t, e, "access private method"), a), K, Dt, Rt;
let T = class extends f {
  constructor() {
    super(), Ye(this, K), this._popoverOpen = !1, this.consumeContext(Ie, (t) => {
      this._workspaceContext = t, this.observe(this._workspaceContext.unique, (e) => {
        this._unique = e, this._entityType = this._workspaceContext?.getEntityType();
      });
    });
  }
  render() {
    return this._unique !== void 0 && this._entityType ? n`
					<uui-button
						id="action-button"
						popovertarget="workspace-entity-action-menu-popover"
						label=${this.localize.term("general_actions")}>
						${this.localize.term("general_actions")}
						<uui-symbol-expand .open=${this._popoverOpen}></uui-symbol-expand>
					</uui-button>
					<uui-popover-container
						id="workspace-entity-action-menu-popover"
						placement="bottom-end"
						@toggle=${wt(this, K, Rt)}>
						<umb-popover-layout>
							<uui-scroll-container>
								<umb-entity-action-list
									@action-executed=${wt(this, K, Dt)}
									.entityType=${this._entityType}
									.unique=${this._unique}>
								</umb-entity-action-list>
							</uui-scroll-container>
						</umb-popover-layout>
					</uui-popover-container>
				` : h;
  }
};
K = /* @__PURE__ */ new WeakSet();
Dt = function(t) {
  t.stopPropagation(), this._popover?.hidePopover();
};
Rt = function(t) {
  this._popoverOpen = t.newState === "open";
};
T.styles = [
  C,
  b`
			:host {
				height: 100%;
			}

			:host > uui-button {
				height: 100%;
			}
		`
];
B([
  c()
], T.prototype, "_unique", 2);
B([
  c()
], T.prototype, "_entityType", 2);
B([
  c()
], T.prototype, "_popoverOpen", 2);
B([
  Et("#workspace-entity-action-menu-popover")
], T.prototype, "_popover", 2);
T = B([
  m("umb-workspace-entity-action-menu")
], T);
var Ge = Object.defineProperty, je = Object.getOwnPropertyDescriptor, Bt = (t) => {
  throw TypeError(t);
}, j = (t, e, a, o) => {
  for (var i = o > 1 ? void 0 : o ? je(e, a) : e, r = t.length - 1, s; r >= 0; r--)
    (s = t[r]) && (i = (o ? s(e, a, i) : s(i)) || i);
  return o && i && Ge(e, a, i), i;
}, Qe = (t, e, a) => e.has(t) || Bt("Cannot " + a), Je = (t, e, a) => (Qe(t, e, "read from private field"), a ? a.call(t) : e.get(t)), Ze = (t, e, a) => e.has(t) ? Bt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), rt;
function ta(t) {
  return [{ meta: t.meta }];
}
let P = class extends f {
  constructor() {
    super(), this._withinModal = !1, Ze(this, rt, () => {
      this._modalContext?.reject();
    }), this.consumeContext(Me, (t) => {
      this._isNew = t.getIsNew();
    }), this.consumeContext($e, (t) => {
      this._modalContext = t;
    });
  }
  // TODO: Some event/callback from umb-extension-slot that can be utilized to hide the footer, if empty.
  render() {
    return n`
			<umb-footer-layout>
				<umb-extension-slot type="workspaceFooterApp"></umb-extension-slot>
				<slot></slot>
				${this._modalContext ? n`<uui-button
							slot="actions"
							label=${this._isNew ? "Cancel" : "Close"}
							@click=${Je(this, rt)}></uui-button>` : ""}
				<slot name="actions" slot="actions"></slot>
				<umb-extension-with-api-slot
					slot="actions"
					type="workspaceAction"
					.apiArgs=${ta}></umb-extension-with-api-slot>

				<slot name="actions" slot="actions"></slot>
			</umb-footer-layout>
		`;
  }
};
rt = /* @__PURE__ */ new WeakMap();
P.styles = [
  C,
  b`
			:host {
				display: block;
				width: 100%;
			}

			/* prevents text in action buttons from wrapping */
			umb-extension-with-api-slot {
				text-wrap: nowrap;
			}

			umb-extension-slot[slot='actions'] {
				display: flex;
				gap: var(--uui-size-space-2);
			}
		`
];
j([
  c()
], P.prototype, "_withinModal", 2);
j([
  c()
], P.prototype, "_modalContext", 2);
j([
  c()
], P.prototype, "_isNew", 2);
P = j([
  m("umb-workspace-footer")
], P);
const ea = new y(
  "UmbWorkspaceContext",
  void 0,
  (t) => t.getName !== void 0
);
var aa = Object.defineProperty, ia = Object.getOwnPropertyDescriptor, zt = (t) => {
  throw TypeError(t);
}, Q = (t, e, a, o) => {
  for (var i = o > 1 ? void 0 : o ? ia(e, a) : e, r = t.length - 1, s; r >= 0; r--)
    (s = t[r]) && (i = (o ? s(e, a, i) : s(i)) || i);
  return o && i && aa(e, a, i), i;
}, _t = (t, e, a) => e.has(t) || zt("Cannot " + a), st = (t, e, a) => (_t(t, e, "read from private field"), e.get(t)), gt = (t, e, a) => e.has(t) ? zt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), oa = (t, e, a, o) => (_t(t, e, "write to private field"), e.set(t, a), a), $t = (t, e, a) => (_t(t, e, "access private method"), a), W, H, Lt, Kt;
let V = class extends f {
  constructor() {
    super(), gt(this, H), this.readonly = !1, this._name = "", gt(this, W), this.consumeContext(ea, (t) => {
      oa(this, W, t), $t(this, H, Lt).call(this);
    });
  }
  render() {
    return n`<uui-input
			id="nameInput"
			data-mark="input:workspace-name"
			.value=${this._name}
			@input="${$t(this, H, Kt)}"
			label=${this.label ?? this.localize.term("placeholders_entername")}
			placeholder=${this.placeholder ?? this.localize.term("placeholders_entername")}
			?readonly=${this.readonly}
			required
			${St(this, "$.name", this._name)}
			${me()}></uui-input>`;
  }
};
W = /* @__PURE__ */ new WeakMap();
H = /* @__PURE__ */ new WeakSet();
Lt = function() {
  st(this, W) && this.observe(
    st(this, W).name,
    (t) => {
      t !== this._name && (this._name = t ?? "");
    },
    "observeWorkspaceName"
  );
};
Kt = function(t) {
  if (t instanceof Tt) {
    const e = t.composedPath()[0];
    typeof e?.value == "string" && st(this, W)?.setName(e.value);
  }
};
V.styles = [
  C,
  b`
			:host {
				display: contents;
			}

			#nameInput {
				flex: 1 1 auto;
			}
		`
];
Q([
  u()
], V.prototype, "label", 2);
Q([
  u()
], V.prototype, "placeholder", 2);
Q([
  c()
], V.prototype, "_name", 2);
V = Q([
  m("umb-workspace-header-name-editable")
], V);
class ra extends Oe {
  //#variantId = new UmbClassState<UmbVariantId | undefined>(undefined);
  //variantId = this.#variantId.asObservable();
  constructor(e) {
    super(e, Ht), this.#e = new Ee(void 0), this.index = this.#e.asObservable(), this.consumeContext(De, (a) => {
      this.#t = a, this._observeVariant();
    }), this.observe(this.index, () => {
      this._observeVariant();
    });
  }
  //
  #a;
  #t;
  getWorkspaceContext() {
    return this.#t;
  }
  #i;
  #e;
  _observeVariant() {
    if (!this.#t) return;
    const e = this.#e.getValue();
    e !== void 0 && this.observe(
      this.#t.splitView.activeVariantByIndex(e),
      async (a) => {
        if (this.#a && this.#a.unprovide(), !a) return;
        this.#i?.destroy();
        const o = dt.Create(a), i = this.#t?.getVariantValidationContext(o);
        i && (i.provideAt(this), this.#a = i), this.#i = this.#t?.createPropertyDatasetContext(this, o), this.getHostElement().setAttribute(Pt, "workspace-split-view:" + o.toString());
      },
      "_observeActiveVariant"
    );
  }
  switchVariant(e) {
    const a = this.#e.value;
    a !== void 0 && this.#t?.splitView.switchVariant(a, e);
  }
  closeSplitView() {
    const e = this.#e.value;
    e !== void 0 && this.#t?.splitView.closeSplitView(e);
  }
  openSplitView(e) {
    this.#t?.splitView.openSplitView(e);
  }
  getSplitViewIndex() {
    return this.#e.getValue();
  }
  setSplitViewIndex(e) {
    this.#e.setValue(e);
  }
  /**
   *
   * concept this class could have methods to set and get the culture and segment of the active variant? just by using the index.
   */
  /*
  	public destroy(): void {
  
  	}
  	*/
}
const Ht = new y(
  "UmbWorkspaceSplitViewContext"
);
var sa = Object.defineProperty, na = Object.getOwnPropertyDescriptor, Xt = (t) => {
  throw TypeError(t);
}, w = (t, e, a, o) => {
  for (var i = o > 1 ? void 0 : o ? na(e, a) : e, r = t.length - 1, s; r >= 0; r--)
    (s = t[r]) && (i = (o ? s(e, a, i) : s(i)) || i);
  return o && i && sa(e, a, i), i;
}, vt = (t, e, a) => e.has(t) || Xt("Cannot " + a), d = (t, e, a) => (vt(t, e, "read from private field"), a ? a.call(t) : e.get(t)), et = (t, e, a) => e.has(t) ? Xt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), xt = (t, e, a, o) => (vt(t, e, "write to private field"), e.set(t, a), a), p = (t, e, a) => (vt(t, e, "access private method"), a), x, g, l, qt, Ft, Yt, Gt, nt, jt, Qt, Jt, Zt, J, lt, pt, mt, te, ee, ae, Z, X, ie;
let _ = class extends f {
  constructor() {
    super(), et(this, l), this._variantOptions = [], this._readOnlyStates = [], this._activeVariants = [], this._activeVariantsCultures = [], et(this, x), et(this, g), this._variantSelectorOpen = !1, this._readOnlyCultures = [], this._variantSorter = (t, e) => 0, this.consumeContext(Ht, (t) => {
      xt(this, x, t);
      const e = d(this, x).getWorkspaceContext();
      if (!e) throw new Error("Split View Workspace context not found");
      p(this, l, qt).call(this, e), p(this, l, Yt).call(this, e), p(this, l, Ft).call(this, e), p(this, l, nt).call(this);
    }), this.consumeContext(ke, (t) => {
      xt(this, g, t), p(this, l, Gt).call(this), p(this, l, nt).call(this);
    });
  }
  render() {
    return this._variantId ? n`
			<uui-input
				id="name-input"
				data-mark="input:entity-name"
				placeholder=${this.localize.term("placeholders_entername")}
				label=${this.localize.term("placeholders_entername")}
				.value=${this._name ?? ""}
				@input=${p(this, l, jt)}
				required
				?readonly=${p(this, l, Z).call(this, this._activeVariant?.culture ?? null)}
				${St(this, `$.variants[${Ce(this._variantId)}].name`, this._name ?? "")}
				${ve(p(this, l, ee))}>
				${p(this, l, pt).call(this) ? n`
							<uui-button
								id="variant-selector-toggle"
								compact
								slot="append"
								popovertarget="variant-selector-popover"
								title=${G(this._activeVariant?.language.name)}
								label="Select a variant">
								${this._activeVariant?.language.name} ${p(this, l, X).call(this, this._activeVariant?.culture)}
								<uui-symbol-expand .open=${this._variantSelectorOpen}></uui-symbol-expand>
							</uui-button>
							${this._activeVariants.length > 1 ? n`
										<uui-button slot="append" compact id="variant-close" @click=${p(this, l, Zt)}>
											<uui-icon name="remove"></uui-icon>
										</uui-button>
									` : ""}
						` : n`<span id="read-only-tag" slot="append"> ${p(this, l, X).call(this, null)} </span>`}
			</uui-input>

			${p(this, l, pt).call(this) ? n`
						<uui-popover-container
							id="variant-selector-popover"
							@beforetoggle=${p(this, l, te)}
							placement="bottom-end">
							<div id="variant-selector-dropdown">
								<uui-scroll-container>
									<ul>
										${this._variantOptions.map((t) => p(this, l, ae).call(this, t))}
									</ul>
								</uui-scroll-container>
							</div>
						</uui-popover-container>
					` : h}
		` : h;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderVariantDetails(t) {
    return n``;
  }
};
x = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
qt = async function(t) {
  this.observe(
    t.variantOptions,
    (e) => {
      this._variantOptions = e.sort(this._variantSorter), p(this, l, mt).call(this);
    },
    "_observeVariantOptions"
  );
};
Ft = async function(t) {
  this.observe(
    t.readOnlyState.states,
    (e) => {
      this._readOnlyStates = e, p(this, l, mt).call(this);
    },
    "umbObserveReadOnlyStates"
  );
};
Yt = async function(t) {
  this.observe(
    t.splitView.activeVariantsInfo,
    (e) => {
      e && (this._activeVariants = e, this._activeVariantsCultures = this._activeVariants.map((a) => a.culture ?? "") ?? []);
    },
    "_observeActiveVariants"
  );
};
Gt = async function() {
  d(this, g) && this.observe(
    d(this, g).name,
    (t) => {
      this._name = t;
    },
    "_name"
  );
};
nt = async function() {
  if (!d(this, g) || !d(this, x)) return;
  const t = d(this, x).getWorkspaceContext();
  t && (this._variantId = d(this, g).getVariantId(), this.observe(
    t.variantOptions,
    (e) => {
      const a = e.find((o) => o.language.unique === this._variantId?.culture);
      this._activeVariant = a;
    },
    "_currentLanguage"
  ));
};
jt = function(t) {
  if (t instanceof Tt) {
    const e = t.composedPath()[0];
    typeof e?.value == "string" && d(this, g) && Te(d(this, g)) && d(this, g).setName(e.value);
  }
};
Qt = function(t) {
  d(this, x)?.switchVariant(dt.Create(t));
};
Jt = function(t) {
  d(this, x)?.openSplitView(dt.Create(t));
};
Zt = function() {
  d(this, x)?.closeSplitView();
};
J = function(t) {
  return t !== null ? this._activeVariantsCultures.includes(t) : !0;
};
lt = function(t) {
  return !t.variant && !p(this, l, J).call(this, t.culture);
};
pt = function() {
  return this._variantOptions?.length > 1;
};
mt = function() {
  this._readOnlyCultures = this._variantOptions.filter((t) => this._readOnlyStates.some((e) => e.variantId.compare(t))).map((t) => t.culture);
};
te = function(t) {
  if (this._variantSelectorOpen = t.newState === "open", !this._popoverElement || !(t.newState === "open")) return;
  const a = this.getBoundingClientRect();
  this._popoverElement.style.width = `${a.width}px`;
};
ee = function(t) {
  t && setTimeout(async () => {
    await this.updateComplete, t?.focus();
  }, 200);
};
ae = function(t) {
  return n`
			<li class="${p(this, l, J).call(this, t.culture) ? "selected" : ""}">
				<button
					class="variant-selector-switch-button ${p(this, l, lt).call(this, t) ? "add-mode" : ""} ${p(this, l, Z).call(this, t.culture) ? "readonly-mode" : ""}"
					@click=${() => p(this, l, Qt).call(this, t)}>
					${p(this, l, lt).call(this, t) ? n`<uui-icon class="add-icon" name="icon-add"></uui-icon>` : h}
					<div class="variant-info">
						<div class="variant-name">
							${t.variant?.name ?? t.language.name}
							${p(this, l, X).call(this, t.culture)}
						</div>
						<div class="variant-details">
							<span>${this._renderVariantDetails(t)}</span>
							<span
								>${t.language.isDefault ? n`<span> - ${this.localize.term("general_default")}</span>` : h}</span
							>
						</div>
					</div>
					<div class="specs-info">${t.language.name}</div>
				</button>
				${p(this, l, ie).call(this, t)}
			</li>
		`;
};
Z = function(t) {
  return this._readOnlyCultures.includes(t);
};
X = function(t) {
  return t === void 0 ? h : p(this, l, Z).call(this, t) ? n`<uui-tag look="secondary">${this.localize.term("general_readOnly")}</uui-tag>` : h;
};
ie = function(t) {
  return n`
			${p(this, l, J).call(this, t.culture) ? h : n`
						<uui-button
							style="background-color: var(--uui-color-surface)"
							label="Open Split view for ${t.language.name}"
							class="variant-selector-split-view"
							@click=${() => p(this, l, Jt).call(this, t)}>
							Open in Split view
						</uui-button>
					`}
		`;
};
_.styles = [
  C,
  b`
			#name-input {
				width: 100%;
			}

			#variant-selector-toggle {
				white-space: nowrap;
			}

			#variant-selector-popover {
				translate: 1px; /* Fixes tiny alignment issue caused by border */
			}

			#variant-selector-dropdown {
				overflow: hidden;
				z-index: -1;
				background-color: var(--uui-combobox-popover-background-color, var(--uui-color-surface));
				border: 1px solid var(--uui-color-border);
				border-radius: var(--uui-border-radius);
				width: 100%;
				height: auto;
				box-sizing: border-box;
				box-shadow: var(--uui-shadow-depth-3);
			}

			#variant-close {
				white-space: nowrap;
			}

			#read-only-tag {
				white-space: nowrap;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			uui-scroll-container {
				max-height: 50dvh;
			}

			ul {
				list-style-type: none;
				padding: 0;
				margin: 0;
			}

			li {
				position: relative;
				margin-bottom: 1px;
			}

			li:hover .variant-selector-split-view {
				display: flex;
			}

			li:nth-last-of-type(1) {
				margin-bottom: 0;
			}

			li.selected:before {
				background-color: var(--uui-color-current);
				border-radius: 0 4px 4px 0;
				bottom: 8px;
				content: '';
				left: 0;
				pointer-events: none;
				position: absolute;
				top: 8px;
				width: 4px;
				z-index: 1;
			}

			.variant-selector-switch-button {
				display: flex;
				align-items: center;
				border: none;
				background: transparent;
				color: var(--uui-color-current-contrast);
				padding: 6px 20px;
				font-weight: bold;
				width: 100%;
				text-align: left;
				font-size: 14px;
				cursor: pointer;
				border-bottom: 1px solid var(--uui-color-divider-standalone);
			}

			.variant-selector-switch-button:hover {
				background: var(--uui-palette-sand);
				color: var(--uui-palette-space-cadet-light);
			}
			.variant-selector-switch-button .variant-info {
				flex-grow: 1;
			}

			.variant-selector-switch-button .variant-details {
				color: var(--uui-color-text-alt);
				font-size: 12px;
				font-weight: normal;
			}
			.variant-selector-switch-button .variant-details {
				color: var(--uui-color-text-alt);
				font-size: 12px;
				font-weight: normal;
			}
			.variant-selector-switch-button.add-mode .variant-details {
				color: var(--uui-palette-dusty-grey-dark);
			}

			.variant-selector-switch-button .specs-info {
				color: var(--uui-color-text-alt);
				font-size: 12px;
				font-weight: normal;
			}
			.variant-selector-switch-button.add-mode .specs-info {
				color: var(--uui-palette-dusty-grey-dark);
			}

			.variant-selector-switch-button i {
				font-weight: normal;
			}

			.variant-selector-switch-button.add-mode {
				position: relative;
				color: var(--uui-palette-dusty-grey-dark);
			}

			.variant-selector-switch-button.add-mode:after {
				border: 2px dashed var(--uui-color-divider-standalone);
				bottom: 0;
				content: '';
				left: 0;
				margin: 2px;
				pointer-events: none;
				position: absolute;
				right: 0;
				top: 0;
				z-index: 1;
			}

			.variant-selector-switch-button .variant-name {
				margin-bottom: var(--uui-size-space-1);
			}

			.variant-selector-switch-button.readonly-mode .variant-name {
				margin-bottom: calc(var(--uui-size-space-1) * -1);
			}

			.add-icon {
				font-size: 12px;
				margin-right: 12px;
			}

			.variant-selector-split-view {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 1px;
				display: none;
			}
		`
];
w([
  Et("#variant-selector-popover")
], _.prototype, "_popoverElement", 2);
w([
  c()
], _.prototype, "_variantOptions", 2);
w([
  c()
], _.prototype, "_readOnlyStates", 2);
w([
  c()
], _.prototype, "_activeVariants", 2);
w([
  c()
], _.prototype, "_activeVariantsCultures", 2);
w([
  c()
], _.prototype, "_name", 2);
w([
  c()
], _.prototype, "_activeVariant", 2);
w([
  c()
], _.prototype, "_variantId", 2);
w([
  c()
], _.prototype, "_variantSelectorOpen", 2);
w([
  c()
], _.prototype, "_readOnlyCultures", 2);
_ = w([
  m("umb-workspace-split-view-variant-selector")
], _);
var la = Object.defineProperty, pa = Object.getOwnPropertyDescriptor, oe = (t) => {
  throw TypeError(t);
}, z = (t, e, a, o) => {
  for (var i = o > 1 ? void 0 : o ? pa(e, a) : e, r = t.length - 1, s; r >= 0; r--)
    (s = t[r]) && (i = (o ? s(e, a, i) : s(i)) || i);
  return o && i && la(e, a, i), i;
}, ca = (t, e, a) => e.has(t) || oe("Cannot " + a), ua = (t, e, a) => e.has(t) ? oe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), ha = (t, e, a) => (ca(t, e, "access private method"), a), ct, re;
let S = class extends f {
  constructor() {
    super(...arguments), ua(this, ct), this.displayNavigation = !1, this._variantSelectorSlotHasContent = !1, this.splitViewContext = new ra(this);
  }
  set splitViewIndex(t) {
    this.splitViewContext.setSplitViewIndex(t);
  }
  get splitViewIndex() {
    return this.splitViewContext.getSplitViewIndex();
  }
  render() {
    return n`
			<umb-workspace-editor
				back-path=${G(this.backPath)}
				.hideNavigation=${!this.displayNavigation}
				.enforceNoFooter=${!0}>
				<slot id="header" name="variant-selector" slot="header" @slotchange=${ha(this, ct, re)}>
					${this._variantSelectorSlotHasContent ? h : n`<umb-workspace-split-view-variant-selector></umb-workspace-split-view-variant-selector>`}
				</slot>

				${this.displayNavigation ? n`<umb-workspace-entity-action-menu
							slot="action-menu"
							data-mark="workspace:action-menu"></umb-workspace-entity-action-menu>` : ""}
				<slot name="action-menu" slot="action-menu"></slot>
			</umb-workspace-editor>
		`;
  }
};
ct = /* @__PURE__ */ new WeakSet();
re = function(t) {
  this._variantSelectorSlotHasContent = t.target.assignedNodes({ flatten: !0 }).length > 0;
};
S.styles = [
  C,
  b`
			:host {
				display: block;
				width: 100%;
				height: 100%;
				min-width: 0;
			}

			:host(:not(:last-child)) {
				border-right: 1px solid var(--uui-color-border);
			}

			#header {
				flex: 1 1 auto;
				display: block;
			}
		`
];
z([
  u({ type: Boolean })
], S.prototype, "displayNavigation", 2);
z([
  u({ attribute: "back-path" })
], S.prototype, "backPath", 2);
z([
  u({ type: Number })
], S.prototype, "splitViewIndex", 1);
z([
  c()
], S.prototype, "_variantSelectorSlotHasContent", 2);
S = z([
  m("umb-workspace-split-view")
], S);
var da = Object.defineProperty, _a = Object.getOwnPropertyDescriptor, se = (t, e, a, o) => {
  for (var i = o > 1 ? void 0 : o ? _a(e, a) : e, r = t.length - 1, s; r >= 0; r--)
    (s = t[r]) && (i = (o ? s(e, a, i) : s(i)) || i);
  return o && i && da(e, a, i), i;
};
let q = class extends f {
  constructor() {
    super(...arguments), this.entityType = "";
  }
  render() {
    return n`
			<div class="uui-text">
				<h4>${this.localize.term("entityDetail_notFoundTitle", this.entityType)}</h4>
				${this.localize.term("entityDetail_notFoundDescription", this.entityType)}
			</div>
		`;
  }
};
q.styles = [
  C,
  b`
			:host {
				display: block;
				width: 100%;
				height: 100%;
				min-width: 0;
			}

			:host > div {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100%;
			}

			@keyframes fadeIn {
				100% {
					opacity: 100%;
				}
			}
		`
];
se([
  u({ type: String, attribute: "entity-type" })
], q.prototype, "entityType", 2);
q = se([
  m("umb-entity-detail-not-found")
], q);
const va = new y(
  "UmbWorkspaceContext",
  void 0,
  (t) => t.IS_ENTITY_DETAIL_WORKSPACE_CONTEXT
);
var ma = Object.defineProperty, fa = Object.getOwnPropertyDescriptor, ne = (t) => {
  throw TypeError(t);
}, N = (t, e, a, o) => {
  for (var i = o > 1 ? void 0 : o ? fa(e, a) : e, r = t.length - 1, s; r >= 0; r--)
    (s = t[r]) && (i = (o ? s(e, a, i) : s(i)) || i);
  return o && i && ma(e, a, i), i;
}, ft = (t, e, a) => e.has(t) || ne("Cannot " + a), L = (t, e, a) => (ft(t, e, "read from private field"), e.get(t)), Ct = (t, e, a) => e.has(t) ? ne("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), ya = (t, e, a, o) => (ft(t, e, "write to private field"), e.set(t, a), a), ba = (t, e, a) => (ft(t, e, "access private method"), a), E, ut, le;
let O = class extends f {
  constructor() {
    super(), Ct(this, ut), this._isLoading = !1, this._exists = !1, this._isNew = !1, Ct(this, E), this.consumeContext(va, (t) => {
      ya(this, E, t), this.observe(L(this, E)?.entityType, (e) => this._entityType = e), this.observe(L(this, E)?.loading.isOn, (e) => this._isLoading = e), this.observe(L(this, E)?.data, (e) => this._exists = !!e), this.observe(L(this, E)?.isNew, (e) => this._isNew = e);
    });
  }
  render() {
    return n` ${!this._exists && !this._isLoading ? n`<umb-entity-detail-not-found entity-type=${G(this._entityType)}></umb-entity-detail-not-found>` : h}

			<!-- TODO: It is currently on purpose that the workspace editor is always in the DOM, even when it doesn't have data.
			 We currently rely on the entity actions to be available to execute, and we ran into an issue when the entity got deleted; then the DOM got cleared, and the delete action couldn't complete.
			 We need to look into loading the entity actions in the workspace context instead so we don't rely on the DOM.
		 -->
			<umb-workspace-editor
				?loading=${this._isLoading}
				.backPath=${this.backPath}
				class="${this._exists === !1 ? "hide" : ""}">
				<slot name="header" slot="header"></slot>
				${ba(this, ut, le).call(this)}
				<slot></slot>
			</umb-workspace-editor>`;
  }
};
E = /* @__PURE__ */ new WeakMap();
ut = /* @__PURE__ */ new WeakSet();
le = function() {
  return this._isNew ? h : n`<umb-workspace-entity-action-menu
			slot="action-menu"
			data-mark="workspace:action-menu"></umb-workspace-entity-action-menu>`;
};
O.styles = [
  b`
			umb-workspace-editor {
				visibility: visible;
			}

			umb-workspace-editor.hide {
				visibility: hidden;
			}
		`
];
N([
  u({ attribute: "back-path" })
], O.prototype, "backPath", 2);
N([
  c()
], O.prototype, "_entityType", 2);
N([
  c()
], O.prototype, "_isLoading", 2);
N([
  c()
], O.prototype, "_exists", 2);
N([
  c()
], O.prototype, "_isNew", 2);
O = N([
  m("umb-entity-detail-workspace-editor")
], O);
const Ja = new y(
  "UmbWorkspaceContext",
  void 0,
  (t) => t.IS_ENTITY_NAMED_DETAIL_WORKSPACE_CONTEXT
);
var wa = Object.defineProperty, ga = Object.getOwnPropertyDescriptor, pe = (t, e, a, o) => {
  for (var i = o > 1 ? void 0 : o ? ga(e, a) : e, r = t.length - 1, s; r >= 0; r--)
    (s = t[r]) && (i = (o ? s(e, a, i) : s(i)) || i);
  return o && i && wa(e, a, i), i;
};
let F = class extends f {
  render() {
    return n`
			<uui-box headline=${G(this.headline ? this.localize.string(this.headline) : void 0)}>
				<slot name="header-actions" slot="header-actions"></slot>
				<div id="container">
					<slot></slot>
				</div>
			</uui-box>
		`;
  }
};
F.styles = [
  b`
			uui-box {
				--uui-box-default-padding: 0;
			}

			#container {
				padding-left: var(--uui-size-space-4)
			}
		`
];
pe([
  u({ type: String })
], F.prototype, "headline", 2);
F = pe([
  m("umb-workspace-info-app-layout")
], F);
var $a = Object.defineProperty, xa = Object.getOwnPropertyDescriptor, ce = (t, e, a, o) => {
  for (var i = o > 1 ? void 0 : o ? xa(e, a) : e, r = t.length - 1, s; r >= 0; r--)
    (s = t[r]) && (i = (o ? s(e, a, i) : s(i)) || i);
  return o && i && $a(e, a, i), i;
};
let A = class extends f {
  get data() {
    return this._data;
  }
  set data(t) {
    if (this._data = t, !t?.inheritValidationLook) {
      const e = this.style;
      e.setProperty("--uui-color-invalid", "var(--uui-color-danger)"), e.setProperty("--uui-color-invalid-emphasis", "var(--uui-color-danger-emphasis)"), e.setProperty("--uui-color-invalid-standalone", "var(--uui-color-danger-standalone)"), e.setProperty("--uui-color-invalid-contrast", "var(--uui-color-danger-contrast)");
    }
  }
  /**
   * TODO: Consider if this binding and events integration is the right for communicating back the modal handler. Or if we should go with some Context API. like a Modal Context API.
   *
   */
  render() {
    return this.data ? n`<umb-workspace .entityType=${this.data.entityType}></umb-workspace>` : "";
  }
};
A.styles = [
  C,
  b`
			:host {
				display: block;
				height: 100%;
			}
		`
];
ce([
  u({ attribute: !1 })
], A.prototype, "data", 1);
A = ce([
  m("umb-workspace-modal")
], A);
const Ca = A, Za = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbWorkspaceModalElement() {
    return A;
  },
  default: Ca
}, Symbol.toStringTag, { value: "Module" })), ti = new xe(
  "Umb.Modal.Workspace",
  {
    modal: {
      type: "sidebar",
      size: "large"
    }
  }
);
var Oa = Object.defineProperty, Ea = Object.getOwnPropertyDescriptor, ue = (t) => {
  throw TypeError(t);
}, yt = (t, e, a, o) => {
  for (var i = o > 1 ? void 0 : o ? Ea(e, a) : e, r = t.length - 1, s; r >= 0; r--)
    (s = t[r]) && (i = (o ? s(e, a, i) : s(i)) || i);
  return o && i && Oa(e, a, i), i;
}, bt = (t, e, a) => e.has(t) || ue("Cannot " + a), Y = (t, e, a) => (bt(t, e, "read from private field"), a ? a.call(t) : e.get(t)), at = (t, e, a) => e.has(t) ? ue("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), he = (t, e, a, o) => (bt(t, e, "write to private field"), e.set(t, a), a), ka = (t, e, a) => (bt(t, e, "access private method"), a), D, M, ht, de;
const Ta = (t) => [{ manifest: t }];
let U = class extends f {
  constructor() {
    super(...arguments), at(this, ht), at(this, D), at(this, M);
  }
  get entityType() {
    return Y(this, M);
  }
  set entityType(t) {
    t === Y(this, M) || !t || (he(this, M, t), ka(this, ht, de).call(this, t));
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.setAttribute(Pt, "workspace");
  }
  render() {
    return this._component ?? h;
  }
};
D = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakMap();
ht = /* @__PURE__ */ new WeakSet();
de = function(t) {
  Y(this, D) && Y(this, D).destroy(), he(this, D, new we(
    this,
    it,
    "workspace",
    Ta,
    (e) => e.meta.entityType === t,
    (e) => {
      this._component = e[0]?.component;
      const a = e[0]?.api;
      a && new ge(a, it, "workspaceContext", [a]);
    },
    void 0,
    // We can leave the alias to undefined, as we destroy this our selfs.
    void 0,
    () => import("./default-workspace.context-ByhWneCJ.js"),
    { single: !0 }
  ));
};
yt([
  c()
], U.prototype, "_component", 2);
yt([
  u({ type: String, attribute: "entity-type" })
], U.prototype, "entityType", 1);
U = yt([
  m("umb-workspace")
], U);
const ei = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbWorkspaceElement() {
    return U;
  },
  get element() {
    return U;
  }
}, Symbol.toStringTag, { value: "Module" }));
export {
  F as A,
  A as B,
  ti as C,
  Be as D,
  U as E,
  Za as F,
  ei as G,
  Re as U,
  Xa as a,
  Me as b,
  k as c,
  v as d,
  T as e,
  P as f,
  V as g,
  ra as h,
  Ht as i,
  S as j,
  _ as k,
  Se as l,
  qa as m,
  Pe as n,
  Fa as o,
  Ya as p,
  ea as q,
  va as r,
  Ie as s,
  Ga as t,
  ja as u,
  Qa as v,
  De as w,
  Ja as x,
  q as y,
  O as z
};
//# sourceMappingURL=workspace.element-5QKMwFUq.js.map
