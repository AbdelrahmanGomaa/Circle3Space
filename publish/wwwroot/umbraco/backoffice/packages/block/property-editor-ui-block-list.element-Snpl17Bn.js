import { UmbBooleanState as ft, mergeObservables as pe, observeMultiple as ht } from "@umbraco-cms/backoffice/observable-api";
import { UmbBlockManagerContext as de, UmbBlockEntryContext as be, UMB_BLOCK_WORKSPACE_ALIAS as _e, UmbDataPathBlockElementDataQuery as St } from "@umbraco-cms/backoffice/block";
import { U as me } from "./block-catalogue-modal.token-CqYZWuQE.js";
import "./block-entry.context-token-DG6_TzkT.js";
import "@umbraco-cms/backoffice/class-api";
import { stringOrStringArrayContains as $t } from "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/modal";
import "@umbraco-cms/backoffice/localization-api";
import { UmbModalRouteRegistrationController as Pt } from "@umbraco-cms/backoffice/router";
import "@umbraco-cms/backoffice/variant";
import "@umbraco-cms/backoffice/ufm";
import "./block-catalogue-modal.element-1MlNjslD.js";
import { U as fe } from "./block-entries.context-CSSvS_hC.js";
import "@umbraco-cms/backoffice/document-type";
import { UmbContentTypeContainerStructureHelper as ve } from "@umbraco-cms/backoffice/content-type";
import "@umbraco-cms/backoffice/id";
import { UMB_PROPERTY_CONTEXT as vt, UMB_PROPERTY_DATASET_CONTEXT as It } from "@umbraco-cms/backoffice/property";
import { UmbLanguageItemRepository as ge } from "@umbraco-cms/backoffice/language";
import "@umbraco-cms/backoffice/data-type";
import { UmbObserveValidationStateController as Lt, UmbFormControlMixin as ye, UmbValidationContext as ke, extractJsonQueryProps as Tt, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as we } from "@umbraco-cms/backoffice/validation";
import { U as xe } from "./index-jGJQ3LmE.js";
import { d as Rt, a as Y, f as Ce, U as ot, b as Ee, c as $e } from "./index-BbCqfSen.js";
import { UMB_CLIPBOARD_PROPERTY_CONTEXT as pt, UmbClipboardPastePropertyValueTranslatorValueResolver as Pe } from "@umbraco-cms/backoffice/clipboard";
import { UmbLitElement as D, umbDestroyOnDisconnect as st } from "@umbraco-cms/backoffice/lit-element";
import { css as z, property as v, customElement as N, nothing as g, html as a, state as h, repeat as Ut } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as nt } from "@umbraco-cms/backoffice/style";
import { UmbSorterController as Te } from "@umbraco-cms/backoffice/sorter";
import { a as Be } from "./constants-DzGYudYo.js";
import { UUIBlinkAnimationValue as Oe } from "@umbraco-cms/backoffice/external/uui";
import { UmbExtensionApiInitializer as Me, UmbExtensionsApiInitializer as Se } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as Bt } from "@umbraco-cms/backoffice/extension-registry";
import "./block-workspace-view-edit-tab.element-OxvfYXwJ.js";
import { debounceTime as Ie } from "@umbraco-cms/backoffice/external/rxjs";
import { UMB_CONTENT_WORKSPACE_CONTEXT as Le } from "@umbraco-cms/backoffice/content";
class Re extends de {
  constructor() {
    super(...arguments), this.#t = new ft(void 0), this.inlineEditingMode = this.#t.asObservable();
  }
  #t;
  setInlineEditingMode(e) {
    this.#t.setValue(e ?? !1);
  }
  getInlineEditingMode() {
    return this.#t.getValue();
  }
  /**
   * @param contentElementTypeKey
   * @param partialLayoutEntry
   * @param _originData
   * @deprecated Use createWithPresets instead. Will be removed in v.17.
   */
  create(e, i, s) {
    throw new Error("Method deparecated use createWithPresets");
  }
  async createWithPresets(e, i, s) {
    return await super._createBlockData(e, i);
  }
  insert(e, i, s, o) {
    return this._layouts.appendOneAt(e, o.index ?? -1), this.insertBlockData(e, i, s, o), !0;
  }
}
class Ue extends fe {
  constructor(e) {
    super(e, Rt), this.canCreate = new ft(!0).asObservable(), new Pt(this, me).addAdditionalPath("_catalogue/:view/:index").onSetup(async (i) => {
      if (await this._retrieveManager, !this._manager) return !1;
      const s = i.index ? parseInt(i.index) : -1, o = await this.getContext(pt), n = o.getPasteTranslatorManifests(
        Y
      ), x = (await this.getContext(vt)).getConfig(), W = new Pe(this);
      return {
        data: {
          blocks: this._manager?.getBlockTypes() ?? [],
          blockGroups: [],
          openClipboard: i.view === "clipboard",
          clipboardFilter: async (L) => {
            if (!o.hasSupportedPasteTranslator(
              n,
              L.values
            ))
              return !1;
            const Z = await W.getPasteTranslator(
              L.values,
              Y
            );
            if (Z.isCompatibleValue) {
              const he = await W.resolve(
                L.values,
                Y
              );
              return Z.isCompatibleValue(he, x);
            }
            return !0;
          },
          originData: { index: s },
          createBlockInWorkspace: this._manager.getInlineEditingMode() === !1
        }
      };
    }).onSubmit(async (i, s) => {
      if (i?.create && s) {
        const o = await this.create(
          i.create.contentElementTypeKey,
          {},
          s.originData
        );
        if (o)
          this.insert(
            o.layout,
            o.content,
            o.settings,
            s.originData
          );
        else
          throw new Error("Failed to create block");
      } else if (i?.clipboard && i.clipboard.selection?.length && s) {
        const n = await (await this.getContext(pt)).readMultiple(
          i.clipboard.selection,
          Y
        );
        this._insertFromPropertyValues(n, s.originData);
      }
    }).observeRouteBuilder((i) => {
      this._catalogueRouteBuilderState.setValue(i);
    }), new Pt(this, Ce).addAdditionalPath("block").onSetup(() => ({
      data: { entityType: "block", preset: {}, baseDataPath: this._dataPath },
      modal: { size: "medium" }
    })).observeRouteBuilder((i) => {
      const s = i({});
      this._workspacePath.setValue(s);
    });
  }
  _gotBlockManager() {
    this._manager && (this.observe(
      this._manager.layouts,
      (e) => {
        this._layoutEntries.setValue(e);
      },
      "observeParentLayouts"
    ), this.observe(
      this.layoutEntries,
      (e) => {
        this._manager?.setLayouts(e);
      },
      "observeThisLayouts"
    ));
  }
  getPathForCreateBlock(e) {
    return this._catalogueRouteBuilderState.getValue()?.({ view: "create", index: e });
  }
  getPathForClipboard(e) {
    return this._catalogueRouteBuilderState.getValue()?.({ view: "clipboard", index: e });
  }
  async setLayouts(e) {
    await this._retrieveManager, this._manager?.setLayouts(e);
  }
  async create(e, i, s) {
    return await this._retrieveManager, await this._manager?.createWithPresets(e, i, s);
  }
  // insert Block?
  async insert(e, i, s, o) {
    return await this._retrieveManager, this._manager?.insert(e, i, s, o) ?? !1;
  }
  async _insertFromPropertyValue(e, i) {
    const s = e.layout[ot];
    if (!s)
      throw new Error("No layout entries found");
    return await Promise.all(
      s.map(async (o) => {
        this._insertBlockFromPropertyValue(o, e, i), i.index !== -1 && (i = { ...i, index: i.index + 1 });
      })
    ), i;
  }
}
class Ve extends be {
  constructor(e) {
    super(e, Rt, Ee), this.#t = new ft(void 0), this.inlineEditingMode = this.#t.asObservable(), this.forceHideContentEditorInOverlay = this._blockType.asObservablePart(
      (i) => i ? i.forceHideContentEditorInOverlay ?? !1 : void 0
    ), this.showContentEdit = pe(
      [this._contentStructureHasProperties, this.forceHideContentEditorInOverlay, this.inlineEditingMode],
      ([i, s, o]) => i === !0 && s === !1 && o === !1
    );
  }
  #t;
  _gotManager() {
    this.observe(
      this._manager?.inlineEditingMode,
      (e) => {
        this.#t.setValue(e);
      },
      "observeInlineEditingMode"
    );
  }
  _gotEntries() {
  }
  _gotContentType() {
  }
}
var Ae = Object.defineProperty, De = Object.getOwnPropertyDescriptor, K = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? De(e, i) : e, n = t.length - 1, c; n >= 0; n--)
    (c = t[n]) && (o = (s ? c(e, i, o) : c(o)) || o);
  return s && o && Ae(e, i, o), o;
};
let B = class extends D {
  render() {
    return a`
			<uui-ref-node standalone href=${(this.config?.showContentEdit ? this.config?.editContentPath : void 0) ?? ""}>
				<umb-icon slot="icon" .name=${this.icon}></umb-icon>
				<umb-ufm-render slot="name" inline .markdown=${this.label} .value=${this.content}></umb-ufm-render>
				${this.unpublished ? a`<uui-tag slot="name" look="secondary" title=${this.localize.term("blockEditor_notExposedDescription")}
							><umb-localize key="blockEditor_notExposedLabel"></umb-localize
						></uui-tag>` : g}
			</uui-ref-node>
		`;
  }
};
B.styles = [
  z`
			uui-ref-node {
				min-height: var(--uui-size-16);
			}
			uui-tag {
				margin-left: 0.5em;
				margin-bottom: -0.3em;
				margin-top: -0.3em;
				vertical-align: text-top;
			}
			:host([unpublished]) umb-icon,
			:host([unpublished]) umb-ufm-render {
				opacity: 0.6;
			}
		`
];
K([
  v({ type: String, reflect: !1 })
], B.prototype, "label", 2);
K([
  v({ type: String, reflect: !1 })
], B.prototype, "icon", 2);
K([
  v({ type: Boolean, reflect: !0 })
], B.prototype, "unpublished", 2);
K([
  v({ attribute: !1 })
], B.prototype, "content", 2);
K([
  v({ attribute: !1 })
], B.prototype, "config", 2);
B = K([
  N("umb-ref-list-block")
], B);
var ze = Object.defineProperty, Ne = Object.getOwnPropertyDescriptor, Vt = (t) => {
  throw TypeError(t);
}, rt = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? Ne(e, i) : e, n = t.length - 1, c; n >= 0; n--)
    (c = t[n]) && (o = (s ? c(e, i, o) : c(o)) || o);
  return s && o && ze(e, i, o), o;
}, gt = (t, e, i) => e.has(t) || Vt("Cannot " + i), S = (t, e, i) => (gt(t, e, "read from private field"), i ? i.call(t) : e.get(t)), lt = (t, e, i) => e.has(t) ? Vt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Ke = (t, e, i, s) => (gt(t, e, "write to private field"), e.set(t, i), i), X = (t, e, i) => (gt(t, e, "access private method"), i), V, R, M, At, yt, dt;
let A = class extends D {
  constructor() {
    super(), lt(this, M), this._hasRootGroups = !1, lt(this, V), lt(this, R, new ve(this)), S(this, R).setIsRoot(!0), S(this, R).setContainerChildType("Tab"), this.observe(S(this, R).mergedContainers, (t) => {
      this._tabs = t, X(this, M, yt).call(this);
    }), this.consumeContext(xe, (t) => {
      Ke(this, V, t), S(this, R).setStructureManager(t.content.structure), X(this, M, At).call(this);
    });
  }
  render() {
    if (this._tabs)
      return a`
			${this._tabs.length > 1 || this._tabs.length === 1 && this._hasRootGroups ? a` <uui-tab-group slot="header">
						${this._hasRootGroups && this._tabs.length > 0 ? a`
									<uui-tab
										label="Content"
										.active=${this._activeTabId === null}
										@click=${() => X(this, M, dt).call(this, null, null)}
										>Content</uui-tab
									>
								` : g}
						${Ut(
        this._tabs,
        (t) => t.name,
        (t) => a`<uui-tab
									label=${t.name ?? "Unnamed"}
									.active=${t.id === this._activeTabId}
									@click=${() => X(this, M, dt).call(this, t.name, t.id)}
									>${t.name}</uui-tab
								>`
      )}
					</uui-tab-group>` : g}
			${this._activeTabId !== void 0 ? a`<umb-block-workspace-view-edit-tab
						.managerName=${"content"}
						.hideSingleGroup=${!0}
						.containerId=${this._activeTabId}>
					</umb-block-workspace-view-edit-tab>` : g}
		`;
  }
};
V = /* @__PURE__ */ new WeakMap();
R = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakSet();
At = async function() {
  S(this, V) && this.observe(
    await S(this, V).content.structure.hasRootContainers("Group"),
    (t) => {
      this._hasRootGroups = t, X(this, M, yt).call(this);
    },
    "observeGroups"
  );
};
yt = function() {
  !this._tabs || !S(this, V) || this._activeTabId === void 0 && (this._hasRootGroups ? this._activeTabId = null : this._tabs.length > 0 && (this._activeTabId = this._tabs[0].id));
};
dt = function(t, e) {
  this._activeTabId = e;
};
A.styles = [
  nt,
  z`
			:host {
				position: relative;
				display: block;
				height: 100%;
				--uui-tab-background: var(--uui-color-surface);

				padding: calc(var(--uui-size-layout-1));
			}
		`
];
rt([
  h()
], A.prototype, "_hasRootGroups", 2);
rt([
  h()
], A.prototype, "_tabs", 2);
rt([
  h()
], A.prototype, "_activeTabId", 2);
A = rt([
  N("umb-block-workspace-view-edit-content-no-router")
], A);
var We = Object.defineProperty, Ge = Object.getOwnPropertyDescriptor, Dt = (t) => {
  throw TypeError(t);
}, P = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? Ge(e, i) : e, n = t.length - 1, c; n >= 0; n--)
    (c = t[n]) && (o = (s ? c(e, i, o) : c(o)) || o);
  return s && o && We(e, i, o), o;
}, kt = (t, e, i) => e.has(t) || Dt("Cannot " + i), E = (t, e, i) => (kt(t, e, "read from private field"), i ? i.call(t) : e.get(t)), G = (t, e, i) => e.has(t) ? Dt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), ct = (t, e, i, s) => (kt(t, e, "write to private field"), e.set(t, i), i), j = (t, e, i) => (kt(t, e, "access private method"), i), tt, $, J, U, bt, wt, zt, Nt;
const Fe = (t) => [{ manifest: t }];
let w = class extends D {
  constructor() {
    super(), G(this, U), G(this, tt), G(this, $), G(this, J), this._isOpen = !1, G(this, wt, () => {
      E(this, $)?.expose();
    }), this.consumeContext($e, (t) => {
      ct(this, tt, t), this.observe(
        E(this, tt).unique,
        (e) => {
          ct(this, J, e), j(this, U, bt).call(this);
        },
        "observeContentKey"
      );
    }), new Me(
      this,
      Bt,
      _e,
      Fe,
      (t, e) => {
        const i = e.api;
        t && i && (ct(this, $, i), E(this, $).establishLiveSync(), j(this, U, bt).call(this), this.observe(
          E(this, $).exposed,
          (s) => {
            this._exposed = s;
          },
          "observeExposed"
        ), this.observe(
          i.content.structure.ownerContentTypeName,
          (s) => {
            this._ownerContentTypeName = s;
          },
          "observeContentTypeName"
        ), this.observe(
          i.variantId,
          async (s) => {
            if (s) {
              i.content.setup(this, s);
              const o = s.culture;
              if (o) {
                const n = new ge(this), { data: c } = await n.requestItems([o]), x = c?.[0].name;
                this._variantName = x ? this.localize.string(x) : void 0;
              }
            }
          },
          "observeVariant"
        ), new Se(this, Bt, "workspaceContext", [E(this, $)]));
      }
    );
  }
  render() {
    return a`
			<div id="host">
				<button
					id="open-part"
					tabindex="0"
					@keydown=${(t) => {
      t.key !== " " && t.key !== "Enter" || (t.preventDefault(), t.stopPropagation(), this._isOpen = !this._isOpen);
    }}
					@click=${() => {
      this._isOpen = !this._isOpen;
    }}>
					<uui-symbol-expand .open=${this._isOpen}></uui-symbol-expand>
					${j(this, U, zt).call(this)}
					<slot></slot>
					<slot name="tag"></slot>
				</button>
				${this._isOpen === !0 ? j(this, U, Nt).call(this) : g}
			</div>
		`;
  }
};
tt = /* @__PURE__ */ new WeakMap();
$ = /* @__PURE__ */ new WeakMap();
J = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakSet();
bt = function() {
  !E(this, $) || !E(this, J) || E(this, $).load(E(this, J));
};
wt = /* @__PURE__ */ new WeakMap();
zt = function() {
  return a`
			<span id="content">
				<span id="icon">
					<umb-icon .name=${this.icon}></umb-icon>
				</span>
				<div id="info">
					<umb-ufm-render id="name" inline .markdown=${this.label} .value=${this.content}></umb-ufm-render>
				</div>
			</span>
			${this.unpublished ? a`<uui-tag slot="name" look="secondary" title=${this.localize.term("blockEditor_notExposedDescription")}
						><umb-localize key="blockEditor_notExposedLabel"></umb-localize
					></uui-tag>` : g}
		`;
};
Nt = function() {
  return this._exposed === !1 ? a`<uui-button id="exposeButton" draggable="false" @click=${E(this, wt)}
				><uui-icon name="icon-add"></uui-icon>
				<umb-localize
					key="blockEditor_createThisFor"
					.args=${[this._ownerContentTypeName, this._variantName]}></umb-localize
			></uui-button>` : a`<umb-block-workspace-view-edit-content-no-router
				draggable="false"></umb-block-workspace-view-edit-content-no-router>`;
};
w.styles = [
  nt,
  z`
			#host {
				position: relative;
				display: block;
				width: 100%;

				box-sizing: border-box;
				border-radius: var(--uui-border-radius);
				background-color: var(--uui-color-surface);

				border: 1px solid var(--uui-color-border);
				transition: border-color 80ms;

				min-width: 250px;
			}

			#exposeButton {
				width: 100%;
				min-height: var(--uui-size-16);
			}

			#open-part + * {
				border-top: 1px solid var(--uui-color-border);
			}
			:host([disabled]) #open-part {
				cursor: default;
				transition: border-color 80ms;
			}
			:host(:not([disabled])) #host:has(#open-part:hover) {
				border-color: var(--uui-color-border-emphasis);
			}
			:host(:not([disabled])) #open-part:hover + * {
				border-color: var(--uui-color-border-emphasis);
			}
			:host([disabled]) #host {
				border-color: var(--uui-color-disabled-standalone);
			}

			:host([unpublished]) #open-part #content {
				opacity: 0.6;
			}

			slot[name='tag'] {
				flex-grow: 1;

				display: flex;
				justify-content: flex-end;
				align-items: center;
			}

			button {
				font-size: inherit;
				font-family: inherit;
				border: 0;
				padding: 0;
				background-color: transparent;
				text-align: left;
				color: var(--uui-color-text);
			}

			#content {
				align-self: stretch;
				line-height: normal;
				display: flex;
				position: relative;
				align-items: center;
			}

			#open-part {
				color: inherit;
				text-decoration: none;
				cursor: pointer;

				display: flex;
				text-align: left;
				align-items: center;
				justify-content: flex-start;
				width: 100%;
				border: none;
				background: none;

				min-height: var(--uui-size-16);
				padding: calc(var(--uui-size-2) + 1px);
			}

			#icon {
				font-size: 1.2em;
				margin-left: var(--uui-size-2);
				margin-right: var(--uui-size-1);
			}

			#info {
				display: flex;
				flex-direction: column;
				align-items: start;
				justify-content: center;
				height: 100%;
				padding-left: var(--uui-size-2, 6px);
			}

			#name {
				font-weight: 700;
			}

			uui-tag {
				margin-left: 0.5em;
				margin-bottom: -0.3em;
				margin-top: -0.3em;
				vertical-align: text-top;
			}

			:host(:not([disabled])) #open-part:hover #icon {
				color: var(--uui-color-interactive-emphasis);
			}
			:host(:not([disabled])) #open-part:hover #name {
				color: var(--uui-color-interactive-emphasis);
			}

			:host([disabled]) #icon {
				color: var(--uui-color-disabled-contrast);
			}
			:host([disabled]) #name {
				color: var(--uui-color-disabled-contrast);
			}
		`
];
P([
  v({ type: String, reflect: !1 })
], w.prototype, "label", 2);
P([
  v({ type: String, reflect: !1 })
], w.prototype, "icon", 2);
P([
  v({ type: Boolean, reflect: !0 })
], w.prototype, "unpublished", 2);
P([
  v({ attribute: !1 })
], w.prototype, "content", 2);
P([
  h()
], w.prototype, "_exposed", 2);
P([
  h()
], w.prototype, "_isOpen", 2);
P([
  h()
], w.prototype, "_ownerContentTypeName", 2);
P([
  h()
], w.prototype, "_variantName", 2);
w = P([
  N("umb-inline-list-block")
], w);
var Ye = Object.getOwnPropertyDescriptor, Kt = (t) => {
  throw TypeError(t);
}, Xe = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? Ye(e, i) : e, n = t.length - 1, c; n >= 0; n--)
    (c = t[n]) && (o = c(o) || o);
  return o;
}, qe = (t, e, i) => e.has(t) || Kt("Cannot " + i), He = (t, e, i) => e.has(t) ? Kt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Qe = (t, e, i) => (qe(t, e, "access private method"), i), _t, Wt;
let mt = class extends D {
  constructor() {
    super(...arguments), He(this, _t);
  }
  render() {
    return a`
			<div id="host">
				<div id="open-part">
					${Qe(this, _t, Wt).call(this)}
					<slot></slot>
					<slot name="tag"></slot>
				</div>
				<div id="inside" draggable="false">${this.localize.term("blockEditor_unsupportedBlockDescription")}</div>
			</div>
		`;
  }
};
_t = /* @__PURE__ */ new WeakSet();
Wt = function() {
  return a`
			<span id="content">
				<span id="icon">
					<umb-icon name="icon-alert"></umb-icon>
				</span>
				<div id="info">
					<span id="name">${this.localize.term("blockEditor_unsupportedBlockName")}</span>
				</div>
			</span>
		`;
};
mt.styles = [
  nt,
  z`
			#host {
				position: relative;
				display: block;
				width: 100%;

				box-sizing: border-box;
				border-radius: var(--uui-border-radius);
				background-color: var(--uui-color-surface);

				border: 1px solid var(--uui-color-border);
				transition: border-color 80ms;

				min-width: 250px;
			}

			#open-part + * {
				border-top: 1px solid var(--uui-color-border);
			}
			:host([disabled]) #open-part {
				cursor: default;
				transition: border-color 80ms;
			}
			:host([disabled]) #host {
				border-color: var(--uui-color-disabled-standalone);
			}

			:host([unpublished]) #open-part #content {
				opacity: 0.6;
			}

			slot[name='tag'] {
				flex-grow: 1;

				display: flex;
				justify-content: flex-end;
				align-items: center;
			}

			button {
				font-size: inherit;
				font-family: inherit;
				border: 0;
				padding: 0;
				background-color: transparent;
				text-align: left;
				color: var(--uui-color-text);
			}

			#content {
				align-self: stretch;
				line-height: normal;
				display: flex;
				position: relative;
				align-items: center;
			}

			#open-part {
				color: inherit;
				text-decoration: none;

				display: flex;
				text-align: left;
				align-items: center;
				justify-content: flex-start;
				width: 100%;
				border: none;
				background: none;

				min-height: var(--uui-size-16);
				padding: calc(var(--uui-size-2) + 1px);
			}

			#icon {
				font-size: 1.2em;
				margin-left: var(--uui-size-2);
				margin-right: var(--uui-size-1);
			}

			#info {
				display: flex;
				flex-direction: column;
				align-items: start;
				justify-content: center;
				height: 100%;
				padding-left: var(--uui-size-2, 6px);
			}

			#name {
				font-weight: 700;
			}

			uui-tag {
				margin-left: 0.5em;
				margin-bottom: -0.3em;
				margin-top: -0.3em;
				vertical-align: text-top;
			}

			:host([disabled]) #icon {
				color: var(--uui-color-disabled-contrast);
			}
			:host([disabled]) #name {
				color: var(--uui-color-disabled-contrast);
			}

			#inside {
				position: relative;
				display: block;
				padding: calc(var(--uui-size-layout-1));
			}
		`
];
mt = Xe([
  N("umb-unsupported-list-block")
], mt);
var Je = Object.defineProperty, Ze = Object.getOwnPropertyDescriptor, Gt = (t) => {
  throw TypeError(t);
}, f = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? Ze(e, i) : e, n = t.length - 1, c; n >= 0; n--)
    (c = t[n]) && (o = (s ? c(e, i, o) : c(o)) || o);
  return s && o && Je(e, i, o), o;
}, Ft = (t, e, i) => e.has(t) || Gt("Cannot " + i), l = (t, e, i) => (Ft(t, e, "read from private field"), i ? i.call(t) : e.get(t)), F = (t, e, i) => e.has(t) ? Gt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), b = (t, e, i) => (Ft(t, e, "access private method"), i), u, p, y, Yt, Xt, et, qt, xt, Ct, Ht, Qt, Jt, Zt, jt, te, ee, ie, oe;
let m = class extends D {
  constructor() {
    super(), F(this, p), F(this, u, new Ve(this)), this._showContentEdit = !1, this._hasSettings = !1, this._label = "", this._blockViewProps = {
      contentKey: void 0,
      config: { showContentEdit: !1, showSettingsEdit: !1 }
    }, this._isReadOnly = !1, F(this, et, () => {
      l(this, u).expose();
    }), F(this, xt, (t) => !(this._unsupported || t.forContentTypeAlias && !$t(t.forContentTypeAlias, this._contentTypeAlias) || t.forBlockEditor && !$t(t.forBlockEditor, Be))), F(this, Ct, (t) => this._exposed ? t.component : a`<div>
				${t.component}
				<umb-block-overlay-expose-button
					.contentTypeName=${this._contentTypeName}
					@click=${l(this, et)}></umb-block-overlay-expose-button>
			</div>`), b(this, p, Yt).call(this);
  }
  get index() {
    return l(this, u).getIndex();
  }
  set index(t) {
    l(this, u).setIndex(t);
  }
  get contentKey() {
    return this._contentKey;
  }
  set contentKey(t) {
    t && (this._contentKey = t, l(this, u).setContentKey(t), new Lt(
      this,
      `$.contentData[${St({ key: t })}]`,
      (e) => {
        this._contentInvalid = e, this._blockViewProps.contentInvalid = e;
      },
      "observeMessagesForContent"
    ));
  }
  connectedCallback() {
    super.connectedCallback(), this.observe(
      l(this, u).contentElementTypeKey,
      (t) => {
        t && this.setAttribute("data-content-element-type-key", t);
      },
      "contentElementTypeKey"
    ), this.observe(
      l(this, u).contentElementTypeAlias,
      (t) => {
        t && (this._contentTypeAlias = t, this.setAttribute("data-content-element-type-alias", t));
      },
      "contentElementTypeAlias"
    ), this.observe(
      l(this, u).contentElementTypeName,
      (t) => {
        this._contentTypeName = t;
      },
      "contentElementTypeName"
    );
  }
  render() {
    return b(this, p, jt).call(this);
  }
};
u = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
y = function(t) {
  this._blockViewProps = { ...this._blockViewProps, ...t }, this.requestUpdate("_blockViewProps");
};
Yt = function() {
  this.observe(
    l(this, u).showContentEdit,
    (t) => {
      this._showContentEdit = t, b(this, p, y).call(this, { config: { ...this._blockViewProps.config, showContentEdit: t } });
    },
    null
  ), this.observe(
    l(this, u).settingsElementTypeKey,
    (t) => {
      this._hasSettings = !!t, b(this, p, y).call(this, { config: { ...this._blockViewProps.config, showSettingsEdit: !!t } });
    },
    null
  ), this.observe(
    l(this, u).blockType,
    (t) => {
      b(this, p, y).call(this, { blockType: t });
    },
    null
  ), this.observe(
    l(this, u).label,
    (t) => {
      b(this, p, y).call(this, { label: t }), this._label = t;
    },
    null
  ), this.observe(
    l(this, u).contentElementTypeIcon,
    (t) => {
      b(this, p, y).call(this, { icon: t }), this._icon = t;
    },
    null
  ), this.observe(
    l(this, u).hasExpose,
    (t) => {
      b(this, p, y).call(this, { unpublished: !t }), this._exposed = t;
    },
    null
  ), this.observe(
    l(this, u).unsupported,
    (t) => {
      t !== void 0 && (b(this, p, y).call(this, { unsupported: t }), this._unsupported = t, this.toggleAttribute("unsupported", t));
    },
    null
  ), this.observe(
    l(this, u).inlineEditingMode,
    (t) => {
      this._inlineEditingMode = t;
    },
    null
  ), this.observe(
    l(this, u).layout,
    (t) => {
      b(this, p, y).call(this, { layout: t });
    },
    null
  ), b(this, p, Xt).call(this), this.observe(
    l(this, u).settingsKey,
    (t) => {
      this.removeUmbControllerByAlias("observeMessagesForSettings"), t && new Lt(
        this,
        `$.settingsData[${St({ key: t })}]`,
        (e) => {
          this._settingsInvalid = e, this._blockViewProps.settingsInvalid = e;
        },
        "observeMessagesForSettings"
      );
    },
    null
  ), this.observe(
    l(this, u).workspaceEditContentPath,
    (t) => {
      this._workspaceEditContentPath = t, b(this, p, y).call(this, { config: { ...this._blockViewProps.config, editContentPath: t } });
    },
    null
  ), this.observe(
    l(this, u).workspaceEditSettingsPath,
    (t) => {
      this._workspaceEditSettingsPath = t, b(this, p, y).call(this, { config: { ...this._blockViewProps.config, editSettingsPath: t } });
    },
    null
  ), this.observe(
    l(this, u).readOnlyState.isReadOnly,
    (t) => this._isReadOnly = t,
    "umbReadonlyObserver"
  );
};
Xt = async function() {
  this.observe(
    await l(this, u).contentValues(),
    (t) => {
      b(this, p, y).call(this, { content: t });
    },
    null
  ), this.observe(
    await l(this, u).settingsValues(),
    (t) => {
      b(this, p, y).call(this, { settings: t });
    },
    null
  );
};
et = /* @__PURE__ */ new WeakMap();
qt = async function() {
  const t = await this.getContext(It), e = await this.getContext(vt), i = await this.getContext(pt), s = t?.getName(), o = e?.getLabel(), n = this._label, c = s ? `${s} - ${o} - ${n}` : `${o} - ${n}`, x = l(this, u).getContent(), W = l(this, u).getLayout(), L = l(this, u).getSettings(), at = l(this, u).getExpose(), Z = {
    contentData: x ? [structuredClone(x)] : [],
    layout: {
      [ot]: W ? [structuredClone(W)] : void 0
    },
    settingsData: L ? [structuredClone(L)] : [],
    expose: at ? [structuredClone(at)] : []
  };
  i.write({
    icon: this._icon,
    name: c,
    propertyValue: Z,
    propertyEditorUiAlias: Y
  });
};
xt = /* @__PURE__ */ new WeakMap();
Ct = /* @__PURE__ */ new WeakMap();
Ht = function() {
  return a`<umb-ref-list-block
			.label=${this._label}
			.icon=${this._icon}
			.unpublished=${!this._exposed}
			.config=${this._blockViewProps.config}
			.content=${this._blockViewProps.content}
			.settings=${this._blockViewProps.settings}
			${st()}></umb-ref-list-block>`;
};
Qt = function() {
  return a`<umb-inline-list-block
			.label=${this._label}
			.icon=${this._icon}
			.unpublished=${!this._exposed}
			.config=${this._blockViewProps.config}
			.content=${this._blockViewProps.content}
			.settings=${this._blockViewProps.settings}
			${st()}></umb-inline-list-block>`;
};
Jt = function() {
  return a`<umb-unsupported-list-block
			.config=${this._blockViewProps.config}
			.content=${this._blockViewProps.content}
			.settings=${this._blockViewProps.settings}
			${st()}></umb-unsupported-list-block>`;
};
Zt = function() {
  return this._unsupported ? b(this, p, Jt).call(this) : this._inlineEditingMode ? b(this, p, Qt).call(this) : b(this, p, Ht).call(this);
};
jt = function() {
  return this.contentKey && (this._contentTypeAlias || this._unsupported) ? a`
					<div class="umb-block-list__block">
						<umb-extension-slot
							type="blockEditorCustomView"
							default-element=${this._inlineEditingMode ? "umb-inline-list-block" : "umb-ref-list-block"}
							.renderMethod=${l(this, Ct)}
							.props=${this._blockViewProps}
							.filter=${l(this, xt)}
							single
							>${b(this, p, Zt).call(this)}</umb-extension-slot
						>
						<uui-action-bar>
							${b(this, p, te).call(this)} ${b(this, p, ee).call(this)}
							${b(this, p, oe).call(this)} ${b(this, p, ie).call(this)}
						</uui-action-bar>
						${!this._showContentEdit && this._contentInvalid ? a`<uui-badge attention color="invalid" label="Invalid content">!</uui-badge>` : g}
					</div>
				` : g;
};
te = function() {
  return this._showContentEdit && this._workspaceEditContentPath ? a`<uui-button
					label="edit"
					look="secondary"
					color=${this._contentInvalid ? "invalid" : ""}
					href=${this._workspaceEditContentPath}>
					<uui-icon name=${this._exposed === !1 && this._isReadOnly === !1 ? "icon-add" : "icon-edit"}></uui-icon>
					${this._contentInvalid ? a`<uui-badge attention color="invalid" label="Invalid content">!</uui-badge>` : g}
				</uui-button>` : this._showContentEdit === !1 && this._exposed === !1 ? a`<uui-button
						@click=${l(this, et)}
						label=${this.localize.term("blockEditor_createThisFor", this._contentTypeName)}
						look="secondary"
						><uui-icon name="icon-add"></uui-icon
					></uui-button>` : g;
};
ee = function() {
  return a`
			${this._hasSettings && this._workspaceEditSettingsPath ? a`<uui-button
						label="Edit settings"
						look="secondary"
						color=${this._settingsInvalid ? "invalid" : ""}
						href=${this._workspaceEditSettingsPath}>
						<uui-icon name="icon-settings"></uui-icon>
						${this._settingsInvalid ? a`<uui-badge attention color="invalid" label="Invalid settings">!</uui-badge>` : g}
					</uui-button>` : g}
		`;
};
ie = function() {
  return this._isReadOnly ? g : a` <uui-button label="delete" look="secondary" @click=${() => l(this, u).requestDelete()}>
			<uui-icon name="icon-remove"></uui-icon>
		</uui-button>`;
};
oe = function() {
  return a`<uui-button label="Copy to clipboard" look="secondary" @click=${() => b(this, p, qt).call(this)}>
			<uui-icon name="icon-clipboard-copy"></uui-icon>
		</uui-button>`;
};
m.styles = [
  z`
			:host {
				position: relative;
				display: block;
				--umb-block-list-entry-actions-opacity: 0;
			}

			:host([settings-invalid]),
			:host([content-invalid]),
			:host(:hover),
			:host(:focus-within) {
				--umb-block-list-entry-actions-opacity: 1;
			}

			:host::after {
				content: '';
				position: absolute;
				z-index: 1;
				pointer-events: none;
				inset: 0;
				border: 1px solid transparent;
				border-radius: var(--uui-border-radius);

				transition: border-color 240ms ease-in;
			}

			:host([settings-invalid])::after,
			:host([content-invalid])::after {
				border-color: var(--uui-color-invalid);
			}

			uui-action-bar {
				position: absolute;
				top: var(--uui-size-2);
				right: var(--uui-size-2);
				opacity: var(--umb-block-list-entry-actions-opacity, 0);
				transition: opacity 120ms;
			}

			uui-badge {
				z-index: 2;
			}

			:host::after {
				content: '';
				position: absolute;
				z-index: 1;
				pointer-events: none;
				inset: 0;
				border: 1px solid transparent;
				border-radius: var(--uui-border-radius);

				transition: border-color 240ms ease-in;
			}
			:host(:hover):not(:drop)::after {
				display: block;
				border-color: var(--uui-color-interactive-emphasis);
				box-shadow:
					0 0 0 1px rgba(255, 255, 255, 0.7),
					inset 0 0 0 1px rgba(255, 255, 255, 0.7);
			}

			:host([drag-placeholder])::after {
				display: block;
				border-width: 2px;
				border-color: var(--uui-color-interactive-emphasis);
				animation: ${Oe};
			}
			:host([drag-placeholder])::before {
				content: '';
				position: absolute;
				pointer-events: none;
				inset: 0;
				border-radius: var(--uui-border-radius);
				background-color: var(--uui-color-interactive-emphasis);
				opacity: 0.12;
			}
			:host([drag-placeholder]) .umb-block-list__block {
				transition: opacity 50ms 16ms;
				opacity: 0;
			}
		`
];
f([
  v({ type: Number })
], m.prototype, "index", 1);
f([
  v({ attribute: !1 })
], m.prototype, "contentKey", 1);
f([
  h()
], m.prototype, "_contentTypeAlias", 2);
f([
  h()
], m.prototype, "_contentTypeName", 2);
f([
  h()
], m.prototype, "_showContentEdit", 2);
f([
  h()
], m.prototype, "_hasSettings", 2);
f([
  h()
], m.prototype, "_label", 2);
f([
  h()
], m.prototype, "_icon", 2);
f([
  h()
], m.prototype, "_exposed", 2);
f([
  h()
], m.prototype, "_unsupported", 2);
f([
  h()
], m.prototype, "_workspaceEditContentPath", 2);
f([
  h()
], m.prototype, "_workspaceEditSettingsPath", 2);
f([
  h()
], m.prototype, "_inlineEditingMode", 2);
f([
  v({ type: Boolean, attribute: "content-invalid", reflect: !0 })
], m.prototype, "_contentInvalid", 2);
f([
  v({ type: Boolean, attribute: "settings-invalid", reflect: !0 })
], m.prototype, "_settingsInvalid", 2);
f([
  h()
], m.prototype, "_blockViewProps", 2);
f([
  h()
], m.prototype, "_isReadOnly", 2);
m = f([
  N("umb-block-list-entry")
], m);
var je = Object.defineProperty, ti = Object.getOwnPropertyDescriptor, se = Object.getPrototypeOf, ei = Reflect.get, ii = Reflect.set, ne = (t) => {
  throw TypeError(t);
}, k = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? ti(e, i) : e, n = t.length - 1, c; n >= 0; n--)
    (c = t[n]) && (o = (s ? c(e, i, o) : c(o)) || o);
  return s && o && je(e, i, o), o;
}, Et = (t, e, i) => e.has(t) || ne("Cannot " + i), r = (t, e, i) => (Et(t, e, "read from private field"), i ? i.call(t) : e.get(t)), O = (t, e, i) => e.has(t) ? ne("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Ot = (t, e, i, s) => (Et(t, e, "write to private field"), e.set(t, i), i), Q = (t, e, i) => (Et(t, e, "access private method"), i), ut = (t, e, i) => ei(se(t), i, e), Mt = (t, e, i, s) => (ii(se(t), i, s, e), s), q, T, it, H, d, C, I, re, ae, le, ce, ue;
const oi = {
  getUniqueOfElement: (t) => t.contentKey,
  getUniqueOfModel: (t) => t.contentKey,
  //identifier: 'block-list-editor',
  itemSelector: "umb-block-list-entry"
  //containerSelector: 'EMPTY ON PURPOSE, SO IT BECOMES THE HOST ELEMENT',
};
let _ = class extends ye(D) {
  constructor() {
    super(), O(this, I), O(this, q, new Te(this, {
      ...oi,
      onChange: ({ model: t }) => {
        r(this, C).setLayouts(t);
      }
    })), O(this, T, new ke(this)), O(this, it), this._createButtonLabel = this.localize.term("content_createEmpty"), O(this, H, !1), this._layouts = [], O(this, d, new Re(this)), O(this, C, new Ue(this)), this.consumeContext(Le, (t) => {
      this.observe(
        ht([
          r(this, d).blockTypes,
          t.structure.variesByCulture,
          t.structure.variesBySegment
        ]),
        async ([e, i, s]) => {
          if (e.length > 0 && (i === !1 || s === !1)) {
            const o = await Promise.all(
              e.map(async (n) => {
                const c = n.contentElementTypeKey;
                await r(this, d).contentTypesLoaded;
                const x = await r(this, d).getStructure(c);
                return i === !1 && x?.getVariesByCulture() === !0 ? !0 : s === !1 && x?.getVariesBySegment() === !0;
              })
            );
            this._notSupportedVariantSetting = o.filter((n) => n === !0).length > 0, this._notSupportedVariantSetting && r(this, T).messages.addMessage(
              "config",
              "$",
              "#blockEditor_blockVariantConfigurationNotSupported",
              "blockConfigurationNotSupported"
            );
          }
        }
      );
    }).passContextAliasMatches(), this.consumeContext(vt, (t) => {
      Q(this, I, re).call(this, t);
    }), this.observe(
      r(this, d).layouts,
      (t) => {
        const e = [], i = t.map((o) => o.contentKey);
        r(this, T).messages.getMessagesOfPathAndDescendant("$.contentData").forEach((o) => {
          const n = Tt(o.path).key;
          n && i.indexOf(n) === -1 && e.push(o.key);
        });
        const s = t.map((o) => o.settingsKey).filter((o) => o !== void 0);
        r(this, T).messages.getMessagesOfPathAndDescendant("$.settingsData").forEach((o) => {
          const n = Tt(o.path).key;
          n && s.indexOf(n) === -1 && e.push(o.key);
        }), r(this, T).messages.removeMessageByKeys(e);
      },
      null
    ), this.consumeContext(It, async (t) => {
      r(this, d).setVariantId(t.getVariantId());
    }), this.addValidator(
      "rangeUnderflow",
      () => this.localize.term(
        "validation_entriesShort",
        this._limitMin,
        (this._limitMin ?? 0) - r(this, C).getLength()
      ),
      () => !!this._limitMin && r(this, C).getLength() < this._limitMin
    ), this.addValidator(
      "rangeOverflow",
      () => this.localize.term(
        "validation_entriesExceed",
        this._limitMax,
        r(this, C).getLength() - (this._limitMax || 0)
      ),
      () => !!this._limitMax && r(this, C).getLength() > this._limitMax
    ), this.addValidator(
      "valueMissing",
      () => this.mandatoryMessage ?? we,
      () => !!this.mandatory && r(this, C).getLength() === 0
    ), this.observe(
      r(this, C).layoutEntries,
      (t) => {
        this._layouts = t, r(this, q).setModel(t), r(this, d).setLayouts(t);
      },
      null
    ), this.observe(
      r(this, d).blockTypes,
      (t) => {
        this._blocks = t;
      },
      null
    ), this.observe(
      r(this, C).catalogueRouteBuilder,
      (t) => {
        this._catalogueRouteBuilder = t;
      },
      null
    );
  }
  set value(t) {
    if (Ot(this, it, t), !t) {
      super.value = void 0;
      return;
    }
    const e = t ? { ...t } : {};
    e.layout ??= {}, e.contentData ??= [], e.settingsData ??= [], e.expose ??= [], super.value = e, r(this, d).setLayouts(super.value.layout[ot] ?? []), r(this, d).setContents(super.value.contentData), r(this, d).setSettings(super.value.settingsData), r(this, d).setExposes(super.value.expose);
  }
  get value() {
    return super.value;
  }
  set config(t) {
    if (!t) return;
    const e = t.getValueByAlias("validationLimit");
    this._limitMin = e?.min, this._limitMax = e?.max;
    const i = t.getValueByAlias("blocks") ?? [];
    r(this, d).setBlockTypes(i);
    const s = t.getValueByAlias("useInlineEditingAsDefault");
    r(this, d).setInlineEditingMode(s), this.style.maxWidth = t.getValueByAlias("maxPropertyWidth") ?? "", r(this, d).setEditorConfiguration(t);
    const o = t.getValueByAlias("createLabel");
    o ? this._createButtonLabel = this.localize.string(o) : i.length === 1 && r(this, d).contentTypesLoaded.then(() => {
      const n = r(this, d).getContentTypeNameOf(i[0].contentElementTypeKey);
      this._createButtonLabel = this.localize.term("blockEditor_addThis", this.localize.string(n));
    });
  }
  set readonly(t) {
    Ot(this, H, t), r(this, H) ? r(this, q).disable() : r(this, q).enable();
  }
  get readonly() {
    return r(this, H);
  }
  getFormElement() {
  }
  render() {
    return this._notSupportedVariantSetting ? g : a`
			${Ut(
      this._layouts,
      (t) => t.contentKey,
      (t, e) => a`
					${Q(this, I, le).call(this, e)}
					<umb-block-list-entry
						.contentKey=${t.contentKey}
						.layout=${t}
						${st()}>
					</umb-block-list-entry>
				`
    )}
			${Q(this, I, ae).call(this)}
		`;
  }
};
q = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakMap();
it = /* @__PURE__ */ new WeakMap();
H = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakSet();
re = function(t) {
  this.observe(
    t.dataPath,
    (e) => {
      e && (r(this, T).setDataPath(e), r(this, T).autoReport());
    },
    "observeDataPath"
  ), this.observe(
    t?.alias,
    (e) => {
      r(this, d).setPropertyAlias(e);
    },
    "observePropertyAlias"
  ), this.observe(
    ht([
      r(this, d).layouts,
      r(this, d).contents,
      r(this, d).settings,
      r(this, d).exposes
    ]).pipe(Ie(20)),
    ([e, i, s, o]) => {
      e.length === 0 ? Mt(_.prototype, this, "value", void 0) : Mt(_.prototype, this, "value", {
        ...ut(_.prototype, this, "value"),
        layout: { [ot]: e },
        contentData: i,
        settingsData: s,
        expose: o
      }), !(r(this, it) === void 0 && ut(_.prototype, this, "value") === void 0) && t.setValue(ut(_.prototype, this, "value"));
    },
    "motherObserver"
  ), this.observe(
    ht([t.isReadOnly, t.variantId]),
    ([e, i]) => {
      const s = "UMB_PROPERTY_EDITOR_UI";
      if (i !== void 0)
        if (e) {
          const o = {
            unique: s,
            variantId: i,
            message: ""
          };
          r(this, d).readOnlyState.addState(o);
        } else
          r(this, d).readOnlyState.removeState(s);
    },
    "observeIsReadOnly"
  );
};
ae = function() {
  return this.readonly && this._layouts.length > 0 ? g : a` <uui-button-group> ${Q(this, I, ce).call(this)} ${Q(this, I, ue).call(this)} </uui-button-group> `;
};
le = function(t) {
  return this.readonly ? g : a`<uui-button-inline-create
			label=${this._createButtonLabel}
			href=${this._catalogueRouteBuilder?.({ view: "create", index: t }) ?? ""}></uui-button-inline-create>`;
};
ce = function() {
  let t;
  if (this._blocks?.length === 1) {
    const e = this._blocks[0].contentElementTypeKey;
    t = this._catalogueRouteBuilder?.({ view: "create", index: -1 }) + "modal/umb-modal-workspace/create/" + e;
  } else
    t = this._catalogueRouteBuilder?.({ view: "create", index: -1 });
  return a`
			<uui-button
				look="placeholder"
				label=${this._createButtonLabel}
				href=${t ?? ""}
				?disabled=${this.readonly}></uui-button>
		`;
};
ue = function() {
  return a`
			<uui-button
				label=${this.localize.term("content_createFromClipboard")}
				look="placeholder"
				href=${this._catalogueRouteBuilder?.({ view: "clipboard", index: -1 }) ?? ""}
				?disabled=${this.readonly}>
				<uui-icon name="icon-clipboard-paste"></uui-icon>
			</uui-button>
		`;
};
_.styles = [
  nt,
  z`
			:host {
				display: grid;
				gap: 1px;
			}
			> div {
				display: flex;
				flex-direction: column;
				align-items: stretch;
			}

			uui-button-group {
				padding-top: 1px;
				display: grid;
				grid-template-columns: 1fr auto;
			}
		`
];
k([
  v({ attribute: !1 })
], _.prototype, "value", 1);
k([
  h()
], _.prototype, "_createButtonLabel", 2);
k([
  v({ type: Boolean, reflect: !0 })
], _.prototype, "readonly", 1);
k([
  v({ type: Boolean })
], _.prototype, "mandatory", 2);
k([
  v({ type: String })
], _.prototype, "mandatoryMessage", 2);
k([
  h()
], _.prototype, "_limitMin", 2);
k([
  h()
], _.prototype, "_limitMax", 2);
k([
  h()
], _.prototype, "_blocks", 2);
k([
  h()
], _.prototype, "_layouts", 2);
k([
  h()
], _.prototype, "_catalogueRouteBuilder", 2);
k([
  h()
], _.prototype, "_notSupportedVariantSetting", 2);
_ = k([
  N("umb-property-editor-ui-block-list")
], _);
const Ai = _;
export {
  _ as UmbPropertyEditorUIBlockListElement,
  Ai as default
};
//# sourceMappingURL=property-editor-ui-block-list.element-Snpl17Bn.js.map
