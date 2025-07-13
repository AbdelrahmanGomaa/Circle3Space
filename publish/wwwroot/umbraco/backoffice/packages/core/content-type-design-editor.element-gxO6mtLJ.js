import { U as q, a as W, b as B, c as F, d as L } from "./content-type-move-root-containers-into-first-tab-helper.class-BXhoyS1X.js";
import { UmbContextBase as V } from "@umbraco-cms/backoffice/class-api";
import { UmbBooleanState as X } from "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/extension-api";
import "@umbraco-cms/backoffice/extension-registry";
import { html as c, repeat as H, nothing as K, ifDefined as x, css as Y, state as g, customElement as J } from "@umbraco-cms/backoffice/external/lit";
import { encodeFolderName as w } from "@umbraco-cms/backoffice/router";
import { UmbLitElement as Q } from "@umbraco-cms/backoffice/lit-element";
import { CompositionTypeModel as Z } from "@umbraco-cms/backoffice/external/backend-api";
import { umbConfirmModal as j, UMB_MODAL_MANAGER_CONTEXT as tt } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as et } from "@umbraco-cms/backoffice/style";
import { UmbSorterController as it } from "@umbraco-cms/backoffice/sorter";
class ot extends V {
  constructor(e) {
    super(e, q), this.#t = new X(!1), this.isSorting = this.#t.asObservable();
  }
  #t;
  getIsSorting() {
    return this.#t.getValue();
  }
  setIsSorting(e) {
    this.#t.setValue(e);
  }
  destroy() {
    this.#t.destroy(), super.destroy();
  }
}
var rt = Object.defineProperty, nt = Object.getOwnPropertyDescriptor, N = (t) => {
  throw TypeError(t);
}, v = (t, e, i, r) => {
  for (var u = r > 1 ? void 0 : r ? nt(e, i) : e, n = t.length - 1, b; n >= 0; n--)
    (b = t[n]) && (u = (r ? b(e, i, u) : b(u)) || u);
  return r && u && rt(e, i, u), u;
}, O = (t, e, i) => e.has(t) || N("Cannot " + i), o = (t, e, i) => (O(t, e, "read from private field"), i ? i.call(t) : e.get(t)), _ = (t, e, i) => e.has(t) ? N("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), f = (t, e, i, r) => (O(t, e, "write to private field"), e.set(t, i), i), l = (t, e, i) => (O(t, e, "access private method"), i), y, a, C, h, p, d, s, M, R, P, U, A, S, $, E, D, I, k, z, G;
let m = class extends Q {
  constructor() {
    super(), _(this, s), _(this, y, new it(this, {
      getUniqueOfElement: (t) => t.getAttribute("data-umb-tab-id"),
      getUniqueOfModel: (t) => t.id,
      identifier: "content-type-tabs-sorter",
      itemSelector: "uui-tab",
      containerSelector: "uui-tab-group",
      disabledItemSelector: ":not([sortable])",
      resolvePlacement: (t) => t.relatedRect.left + t.relatedRect.width * 0.5 > t.pointerX,
      onChange: ({ model: t }) => {
        this._tabs = t;
      },
      onEnd: ({ item: t }) => {
        const e = this._tabs ?? [], i = e.findIndex((b) => b.id === t.id);
        if (i === -1) return;
        let r = -1;
        i > 0 && e.length > 0 && (r = e[i - 1].sortOrder), o(this, h).partialUpdateContainer(t.id, {
          sortOrder: ++r
        });
        let u = i + 1, n;
        for (; (n = e[u]) !== void 0 && n.sortOrder <= r; )
          o(this, h).partialUpdateContainer(n.id, {
            sortOrder: ++r
          }), u++;
      }
    })), _(this, a), _(this, C, new ot(this)), _(this, h, new W(this)), _(this, p), _(this, d), this._hasRootGroups = !1, this._routes = [], this._activePath = "", o(this, y).disable(), this.observe(
      o(this, C).isSorting,
      (t) => {
        this._sortModeActive = t, t ? o(this, y).enable() : o(this, y).disable();
      },
      "_observeIsSorting"
    ), o(this, h).setContainerChildType("Tab"), o(this, h).setIsRoot(!0), this.observe(o(this, h).mergedContainers, (t) => {
      this._tabs = t, o(this, y).setModel(t), l(this, s, P).call(this);
    }), this.consumeContext(B, (t) => {
      f(this, a, t), o(this, h).setStructureManager(t.structure), l(this, s, R).call(this);
    });
  }
  set manifest(t) {
    this._compositionRepositoryAlias = t.meta.compositionRepositoryAlias;
  }
  render() {
    return c`
			<umb-body-layout header-fit-height>
				<div id="header" slot="header">
					<div id="container-list">${this.renderTabsNavigation()} ${l(this, s, k).call(this)}</div>
					${l(this, s, z).call(this)}
				</div>
				<umb-router-slot
					.routes=${this._routes}
					@init=${(t) => {
      this._routerPath = t.target.absoluteRouterPath;
    }}
					@change=${(t) => {
      this._activePath = t.target.absoluteActiveViewPath ?? "";
    }}>
				</umb-router-slot>
			</umb-body-layout>
		`;
  }
  renderTabsNavigation() {
    if (!(!this._tabs || this._tabs.length === 0))
      return c`
			<div id="tabs-group">
				<uui-tab-group>
					${this.renderRootTab()}
					${H(
        this._tabs,
        (t) => t.id,
        (t) => this.renderTab(t)
      )}
				</uui-tab-group>
			</div>
		`;
  }
  renderRootTab() {
    const t = this._routerPath + "/root", e = t === this._activePath;
    return !this._hasRootGroups && !this._sortModeActive ? K : c`
			<uui-tab
				id="root-tab"
				data-mark="root-tab"
				class=${this._hasRootGroups || e ? "" : "content-tab-is-empty"}
				label=${this.localize.term("general_generic")}
				.active=${e}
				href=${t}>
				${this.localize.term("general_generic")}
			</uui-tab>
		`;
  }
  renderTab(t) {
    const e = this._routerPath + "/tab/" + w(t.name && t.name !== "" ? t.name : "-"), i = e === this._activePath, r = o(this, h).isOwnerChildContainer(t.id) ?? !1;
    return c`<uui-tab
			label=${t.name && t.name !== "" ? t.name : "Unnamed"}
			.active=${i}
			href=${e}
			data-umb-tab-id=${x(t.id)}
			data-mark="tab:${t.name}"
			?sortable=${r}>
			${this.renderTabInner(t, i, r)}
		</uui-tab>`;
  }
  renderTabInner(t, e, i) {
    const r = t.name && t.name !== "", u = r ? t.name : "Unnamed";
    return this._sortModeActive ? c`<div class="tab">
				${i ? c`<uui-icon name="icon-grip" class="drag-${t.id}"> </uui-icon>${u}
							<uui-input
								label="sort order"
								type="number"
								value=${x(t.sortOrder)}
								style="width:50px"
								@change=${(n) => l(this, s, G).call(this, t, n)}></uui-input>` : c`<uui-icon name="icon-merge"></uui-icon>${t.name}`}
			</div>` : e && i ? c`<div class="tab">
				<uui-input
					id="input"
					look="placeholder"
					placeholder="Unnamed"
					label=${t.name}
					value="${t.name}"
					auto-width
					minlength="1"
					@change=${(n) => l(this, s, E).call(this, n, t)}
					@input=${(n) => l(this, s, E).call(this, n, t)}
					@blur=${(n) => l(this, s, D).call(this, n, t)}>
					${this.renderDeleteFor(t)}
				</uui-input>
			</div>` : i ? c`<div class="not-active">
				<span class=${r ? "" : "invaild"}>${r ? t.name : "Unnamed"}</span> ${this.renderDeleteFor(
      t
    )}
			</div>` : c`<div class="not-active"><uui-icon name="icon-merge"></uui-icon>${t.name}</div>`;
  }
  renderDeleteFor(t) {
    return c`<uui-button
			label=${this.localize.term("actions_remove")}
			class="trash"
			slot="append"
			@click=${(e) => {
      e.stopPropagation(), e.preventDefault(), l(this, s, U).call(this, t);
    }}
			compact>
			<uui-icon name="icon-trash"></uui-icon>
		</uui-button>`;
  }
  destroy() {
    f(this, p, void 0), super.destroy();
  }
};
y = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
M = function() {
  o(this, C)?.setIsSorting(!this._sortModeActive);
};
R = async function() {
  o(this, a) && this.observe(
    await o(this, a).structure.hasRootContainers("Group"),
    (t) => {
      this._hasRootGroups = t, l(this, s, P).call(this);
    },
    "_observeGroups"
  );
};
P = function() {
  if (!o(this, a) || !this._tabs || this._hasRootGroups === void 0) return;
  const t = [];
  let e;
  if (this._tabs.length > 0 && this._tabs?.forEach((i) => {
    const r = i.name && i.name !== "" ? i.name : "-";
    i.id === o(this, d) && (e = r), t.push({
      path: `tab/${w(r)}`,
      component: () => import("./content-type-design-editor-tab.element-CPH1yuL6.js"),
      setup: (u) => {
        f(this, p, u), o(this, p).containerId = i.id;
      }
    });
  }), this._hasRootGroups || this._tabs.length === 0 ? (t.push({
    path: "root",
    component: () => import("./content-type-design-editor-tab.element-CPH1yuL6.js"),
    setup: (i) => {
      f(this, p, i), o(this, p).containerId = null;
    }
  }), t.push({
    path: "",
    redirectTo: "root",
    guards: [() => o(this, d) === void 0]
  })) : t.push({
    path: "",
    redirectTo: t[0]?.path,
    guards: [() => o(this, d) === void 0]
  }), t.length !== 0 && t.push({
    path: "**",
    component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement,
    guards: [() => o(this, d) === void 0],
    setup: () => {
      f(this, p, void 0);
    }
  }), t.push({
    path: "**",
    component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement,
    setup: () => {
      f(this, p, void 0);
    }
  }), this._routes = t, this._activePath && o(this, p) && t.find((r) => this._routerPath + "/" + r.path === this._activePath)?.setup?.(o(this, p), void 0), e !== void 0 && this._activePath && this._routerPath) {
    const i = this._activePath.split(this._routerPath)[1], r = "/tab/" + w(e);
    i !== r && (this._activePath = this._routerPath + r, window.history.replaceState(null, "", this._activePath));
  }
};
U = async function(t) {
  if (!t) return;
  const e = t.name === "" ? "Unnamed" : t.name, i = {
    headline: "Delete tab",
    content: c`<umb-localize key="contentTypeEditor_confirmDeleteTabMessage" .args=${[e]}>
					Are you sure you want to delete the tab <strong>${e}</strong>
				</umb-localize>
				<div style="color:var(--uui-color-danger-emphasis)">
					<umb-localize key="contentTypeEditor_confirmDeleteTabNotice">
						This will delete all items that doesn't belong to a composition.
					</umb-localize>
				</div>`,
    confirmLabel: this.localize.term("actions_delete"),
    color: "danger"
  };
  await j(this, i), l(this, s, A).call(this, t?.id);
};
A = function(t) {
  t && (o(this, a)?.structure.removeContainer(null, t), o(this, d) === t && f(this, d, void 0));
};
S = async function() {
  if (this.shadowRoot?.querySelector("uui-tab[active] uui-input")?.value === "") {
    l(this, s, $).call(this);
    return;
  }
  if (!o(this, a))
    throw new Error("Workspace context has not been found");
  if (!this._tabs) return;
  const e = this._tabs.length, i = e === 0 ? 0 : this._tabs[e - 1].sortOrder + 1, r = await o(this, a).structure.createContainer(null, null, "Tab", i);
  if (e === 0 && new F(this, o(this, a).structure), r) {
    const u = this._routerPath + "/tab/" + w(r.name && r.name !== "" ? r.name : "-");
    window.history.replaceState(null, "", u), l(this, s, $).call(this);
  }
};
$ = async function() {
  setTimeout(() => {
    this.shadowRoot?.querySelector("uui-tab[active] uui-input")?.focus();
  }, 100);
};
E = async function(t, e) {
  f(this, d, e.id);
  let i = t.target.value;
  const r = o(this, a)?.structure.makeContainerNameUniqueForOwnerContentType(
    e.id,
    i,
    "Tab"
  );
  r != null && (i = r, t.target.value = i), o(this, h).partialUpdateContainer(e.id, {
    name: i
  });
};
D = async function(t, e) {
  if (!o(this, d)) return;
  if (t.target?.value === "") {
    const r = o(this, a).structure.makeEmptyContainerName(o(this, d), "Tab");
    t.target.value = r, o(this, h).partialUpdateContainer(e.id, {
      name: r
    });
  }
  f(this, d, void 0);
};
I = async function() {
  if (!o(this, a) || !this._compositionRepositoryAlias) return;
  const t = o(this, a).getUnique();
  if (!t)
    throw new Error("Content Type unique is undefined");
  const e = o(this, a).structure.getContentTypes(), i = o(this, a).structure.getOwnerContentType();
  if (!i)
    throw new Error("Owner Content Type not found");
  const r = {
    compositionRepositoryAlias: this._compositionRepositoryAlias,
    unique: t,
    // Here we use the loaded content types to declare what we already inherit. That puts a pressure on cleaning up, but thats a good thing. [NL]
    selection: e.map((T) => T.unique).filter((T) => T !== t),
    isElement: i.isElement,
    currentPropertyAliases: [],
    isNew: o(this, a).getIsNew()
  }, n = (await this.getContext(tt)).open(this, L, {
    data: r
  });
  if (await n?.onSubmit(), !n?.value) return;
  const b = n.getValue().selection;
  o(this, a)?.setCompositions(
    b.map((T) => ({ contentType: { unique: T }, compositionType: Z.COMPOSITION }))
  );
};
k = function() {
  if (!this._sortModeActive)
    return c`
			<uui-button id="add-tab" @click="${l(this, s, S)}" label="Add tab">
				<uui-icon name="icon-add"></uui-icon>
				Add tab
			</uui-button>
		`;
};
z = function() {
  const t = this._sortModeActive ? this.localize.term("general_reorderDone") : this.localize.term("general_reorder");
  return c`
			<div id="actions">
				${this._compositionRepositoryAlias ? c`
							<uui-button
								look="outline"
								label=${this.localize.term("contentTypeEditor_compositions")}
								compact
								@click=${l(this, s, I)}>
								<uui-icon name="icon-merge"></uui-icon>
								${this.localize.term("contentTypeEditor_compositions")}
							</uui-button>
						` : ""}
				<uui-button look="outline" label=${t} compact @click=${l(this, s, M)}>
					<uui-icon name="icon-height"></uui-icon>
					${t}
				</uui-button>
			</div>
		`;
};
G = function(t, e) {
  if (!e.target.value || !t.id) return;
  const i = Number(e.target.value);
  o(this, h).partialUpdateContainer(t.id, { sortOrder: i });
};
m.styles = [
  et,
  Y`
			:host {
				position: relative;
				display: flex;
				flex-direction: column;
				height: 100%;
				--uui-tab-background: var(--uui-color-surface);
			}

			#buttons-wrapper {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: space-between;
				align-items: stretch;
			}

			[drag-placeholder] {
				opacity: 0.5;
			}

			[drag-placeholder] uui-input {
				visibility: hidden;
			}

			/* TODO: This should be replaced with a general workspace bar — naming is hard */

			#header {
				width: 100%;
				min-height: var(--uui-size-16);
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-wrap: nowrap;
			}

			#container-list {
				display: flex;
			}

			#tabs-group {
				display: flex;
			}

			#actions {
				display: flex;
				gap: var(--uui-size-space-2);
			}

			uui-tab-group {
				flex-wrap: nowrap;
			}

			uui-tab.content-tab-is-empty {
				align-self: center;
				border-radius: 3px;
				--uui-tab-text: var(--uui-color-text-alt);
				border: dashed 1px var(--uui-color-border-emphasis);
			}

			uui-tab {
				position: relative;
				border-left: 1px hidden transparent;
				border-right: 1px solid var(--uui-color-border);
				background-color: var(--uui-color-surface);
			}

			.not-active uui-button {
				pointer-events: auto;
			}

			.not-active {
				pointer-events: none;
				display: inline-flex;
				padding-left: var(--uui-size-space-3);
				border: 1px solid transparent;
				align-items: center;
				gap: var(--uui-size-space-3);
			}

			.invaild {
				color: var(--uui-color-danger, var(--uui-color-invalid));
			}

			.trash {
				opacity: 1;
				transition: opacity 100ms;
			}

			uui-tab:not(:hover, :focus) .trash {
				opacity: 0;
				transition: opacity 100ms;
			}

			uui-input:not(:focus, :hover, :invalid) {
				border: 1px solid transparent;
			}

			.inherited {
				vertical-align: sub;
			}

			[drag-placeholder] {
				opacity: 0.2;
			}
		`
];
v([
  g()
], m.prototype, "_compositionRepositoryAlias", 2);
v([
  g()
], m.prototype, "_hasRootGroups", 2);
v([
  g()
], m.prototype, "_routes", 2);
v([
  g()
], m.prototype, "_tabs", 2);
v([
  g()
], m.prototype, "_routerPath", 2);
v([
  g()
], m.prototype, "_activePath", 2);
v([
  g()
], m.prototype, "_sortModeActive", 2);
m = v([
  J("umb-content-type-design-editor")
], m);
const yt = m;
export {
  m as UmbContentTypeDesignEditorElement,
  yt as default
};
//# sourceMappingURL=content-type-design-editor.element-gxO6mtLJ.js.map
