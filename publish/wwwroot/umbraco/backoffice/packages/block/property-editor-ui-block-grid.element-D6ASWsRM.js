import { U as It } from "./constants-D1CA0epN.js";
import { UmbBooleanState as ge, UmbArrayState as Re, pushAtToUniqueArray as Rt, appendToFrozenArray as he, UmbNumberState as et, UmbObjectState as Xe, UmbStringState as Lt, mergeObservables as Dt, observeMultiple as R } from "@umbraco-cms/backoffice/observable-api";
import { transformServerPathToClientPath as zt, isWithinRect as Gt, getAccumulatedValueOfIndex as Nt, getInterpolatedIndexOfPositionInWeightMap as Wt, stringOrStringArrayContains as Ye } from "@umbraco-cms/backoffice/utils";
import { UmbBlockManagerContext as qt, UMB_BLOCK_WORKSPACE_ALIAS as Ft, UmbBlockEntriesContext as Ht, UMB_BLOCK_CATALOGUE_MODAL as Xt, UmbBlockEntryContext as Yt, UmbDataPathBlockElementDataQuery as tt } from "@umbraco-cms/backoffice/block";
import { UMB_APP_CONTEXT as jt } from "@umbraco-cms/backoffice/app";
import { i as Le, b as De, h as it, l as re, n as Qt, k as fe, a as Jt } from "./index-q0gJfrDp.js";
import { UmbLitElement as z } from "@umbraco-cms/backoffice/lit-element";
import { css as K, state as c, customElement as M, repeat as ot, html as a, property as C, nothing as v, ref as Zt } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as we } from "@umbraco-cms/backoffice/style";
import { UMB_PROPERTY_CONTEXT as _e, UMB_PROPERTY_DATASET_CONTEXT as rt } from "@umbraco-cms/backoffice/property";
import { UmbDataPathPropertyValueQuery as ei, UmbFormControlMixin as nt, UmbFormControlValidator as je, UmbObserveValidationStateController as st, UmbValidationContext as ti } from "@umbraco-cms/backoffice/validation";
import { debounceTime as ii } from "@umbraco-cms/backoffice/external/rxjs";
import { umbExtensionsRegistry as Qe } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionApiInitializer as oi, UmbExtensionsApiInitializer as ri } from "@umbraco-cms/backoffice/extension-api";
import { UmbLanguageItemRepository as ni } from "@umbraco-cms/backoffice/language";
import "@umbraco-cms/backoffice/ufm";
import { f as Te, U as si, c as ai } from "./block-grid-scale-manager.controller-CmKL_UCf.js";
import { UmbRoutePathAddendumContext as li, UmbModalRouteRegistrationController as Je } from "@umbraco-cms/backoffice/router";
import { UMB_CLIPBOARD_PROPERTY_CONTEXT as Be, UmbClipboardPastePropertyValueTranslatorValueResolver as ui } from "@umbraco-cms/backoffice/clipboard";
import { UmbSorterController as ci } from "@umbraco-cms/backoffice/sorter";
import { UUIBlinkKeyframes as hi, UUIBlinkAnimationValue as di, UUIRefNodeElement as at } from "@umbraco-cms/backoffice/external/uui";
import { UMB_CONTENT_WORKSPACE_CONTEXT as pi } from "@umbraco-cms/backoffice/content";
class bi extends qt {
  constructor(e) {
    super(e), this.#o = new ge(void 0), this.inlineEditingMode = this.#o.asObservable(), this.#t = new Re([], (i) => i.key), this.blockGroups = this.#t.asObservable(), this.layoutStylesheet = this._editorConfiguration.asObservablePart((i) => {
      if (!i) return;
      const o = i.getValueByAlias("layoutStylesheet");
      if (!o) return It;
      if (o)
        return new URL(zt(o), this.#r).href;
    }), this.gridColumns = this._editorConfiguration.asObservablePart((i) => {
      const o = i?.getValueByAlias("gridColumns");
      return parseInt(o && o !== "" ? o : "12");
    }), this.#i = this.getContext(jt).then((i) => {
      this.#r = i.getServerUrl();
    });
  }
  #o;
  setInlineEditingMode(e) {
    this.#o.setValue(e ?? !1);
  }
  getInlineEditingMode() {
    return this.#o.getValue();
  }
  #i;
  #r;
  #t;
  getMinAllowed() {
    return this._editorConfiguration.getValue()?.getValueByAlias("validationLimit")?.min ?? 0;
  }
  getMaxAllowed() {
    return this._editorConfiguration.getValue()?.getValueByAlias("validationLimit")?.max ?? 1 / 0;
  }
  setEditorConfiguration(e) {
    this.#i.then(() => {
      super.setEditorConfiguration(e);
    });
  }
  setBlockGroups(e) {
    this.#t.setValue(e);
  }
  getBlockGroups() {
    return this.#t.value;
  }
  getBlockGroupName(e) {
    return this.#t.getValue().find((i) => i.key === e)?.name;
  }
  /**
   * @param contentElementTypeKey
   * @param partialLayoutEntry
   * @param _originData
   * @deprecated Use createWithPresets instead. Will be removed in v.17.
   */
  create(e, i, o) {
    throw new Error("Method deparecated use createWithPresets");
  }
  async createWithPresets(e, i, o) {
    return await super._createBlockData(e, i);
  }
  /**
   * Inserts a layout entry into an area of a layout entry.
   * @param layoutEntry The layout entry to insert.
   * @param insert
   * @param entries The layout entries to search within.
   * @param parentUnique The parentUnique to search for.
   * @param parentId
   * @param areaKey The areaKey to insert the layout entry into.
   * @param index The index to insert the layout entry at.
   * @returns a updated layout entries array if the insert was successful.
   * @remarks
   * This method is recursive and will search for the parentUnique in the layout entries.
   * If the parentUnique is found, the layout entry will be inserted into the items of the area that matches the areaKey.
   * This returns a new array of layout entries with the updated layout entry inserted.
   * Because the layout entries are frozen, the affected parts is replaced with a new. Only updating/unfreezing the affected part of the structure.
   */
  #n(e, i, o, r, n) {
    let s = i.length;
    for (; s--; ) {
      const l = i[s];
      if (l.contentKey === o) {
        const d = l.areas?.map(
          (_) => _.key === r ? {
            ..._,
            items: Rt([..._.items], e, (O) => O.contentKey === e.contentKey, n)
          } : _
        ) ?? [];
        return he(
          i,
          {
            ...l,
            areas: d
          },
          (_) => _.contentKey === l.contentKey
        );
      }
      if (l.areas) {
        let d = l.areas.length;
        for (; d--; ) {
          const _ = this.#n(
            e,
            l.areas[d].items,
            o,
            r,
            n
          );
          if (_) {
            const O = l.areas[d];
            return he(
              i,
              {
                ...l,
                areas: he(
                  l.areas,
                  { ...O, items: _ },
                  (S) => S.key === O.key
                )
              },
              (S) => S.contentKey === l.contentKey
            );
          }
        }
      }
    }
  }
  insert(e, i, o, r) {
    return this.setOneLayout(e, r), this.insertBlockData(e, i, o, r), !0;
  }
  setOneLayout(e, i) {
    const o = i?.index ?? -1;
    if (i?.parentUnique && i?.areaKey) {
      const r = this.#n(
        e,
        this._layouts.getValue(),
        i?.parentUnique,
        i?.areaKey,
        o
      );
      r && this._layouts.setValue(r);
    } else
      this._layouts.appendOneAt(e, o);
  }
  onDragStart() {
    this.getHostElement().style.setProperty("--umb-block-grid--is-dragging", " ");
  }
  onDragEnd() {
    this.getHostElement().style.removeProperty("--umb-block-grid--is-dragging");
  }
}
var mi = Object.defineProperty, yi = Object.getOwnPropertyDescriptor, Ce = (t, e, i, o) => {
  for (var r = o > 1 ? void 0 : o ? yi(e, i) : e, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (r = (o ? s(e, i, r) : s(r)) || r);
  return o && r && mi(e, i, r), r;
};
let ee = class extends z {
  constructor() {
    super(), this._areas = [], this.consumeContext(Le, (t) => {
      this.observe(
        t.areas,
        (e) => {
          this._areas = e;
        },
        "observeAreas"
      ), this.observe(
        t.areaGridColumns,
        (e) => {
          this._areaGridColumns = e;
        },
        "observeAreaGridColumns"
      );
    }), this.consumeContext(De, (t) => {
      this.observe(
        t.layoutStylesheet,
        (e) => {
          !e || this._styleElement?.href === e || (this._styleElement = document.createElement("link"), this._styleElement.rel = "stylesheet", this._styleElement.href = e);
        },
        "observeStylesheet"
      );
    });
  }
  render() {
    return this._areas && this._areas.length > 0 ? a` ${this._styleElement}
					<div
						class="umb-block-grid__area-container"
						part="area-container"
						style="--umb-block-grid--area-grid-columns: ${this._areaGridColumns}">
						${ot(
      this._areas,
      (t) => t.key,
      (t) => a`<umb-block-grid-entries
									part="area"
									class="umb-block-grid__area"
									.areaKey=${t.key}
									.layoutColumns=${t.columnSpan}></umb-block-grid-entries>`
    )}
					</div>` : "";
  }
};
ee.styles = [
  K`
			:host {
				display: block;
				width: 100%;
			}
		`
];
Ce([
  c()
], ee.prototype, "_styleElement", 2);
Ce([
  c()
], ee.prototype, "_areas", 2);
Ce([
  c()
], ee.prototype, "_areaGridColumns", 2);
ee = Ce([
  M("umb-block-grid-areas-container")
], ee);
var gi = Object.defineProperty, fi = Object.getOwnPropertyDescriptor, lt = (t) => {
  throw TypeError(t);
}, A = (t, e, i, o) => {
  for (var r = o > 1 ? void 0 : o ? fi(e, i) : e, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (r = (o ? s(e, i, r) : s(r)) || r);
  return o && r && gi(e, i, r), r;
}, ze = (t, e, i) => e.has(t) || lt("Cannot " + i), E = (t, e, i) => (ze(t, e, "read from private field"), i ? i.call(t) : e.get(t)), U = (t, e, i) => e.has(t) ? lt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), X = (t, e, i, o) => (ze(t, e, "write to private field"), e.set(t, i), i), Y = (t, e, i) => (ze(t, e, "access private method"), i), de, V, Z, ue, ne, se, I, Oe, Se, Ge, ut, ct;
const _i = (t) => [{ manifest: t }];
let T = class extends z {
  constructor() {
    super(), U(this, I), U(this, de), U(this, V), U(this, Z), U(this, ue), U(this, ne), U(this, se), U(this, Ge, () => {
      E(this, V)?.expose();
    }), this.consumeContext(Le, (t) => {
      X(this, de, t), this.observe(
        E(this, de).unique,
        (e) => {
          X(this, ue, e), Y(this, I, Oe).call(this);
        },
        "observeContentKey"
      );
    }), this.consumeContext(it, (t) => {
      X(this, ne, t.getParentUnique()), X(this, se, t.getAreaKey());
    }), new oi(
      this,
      Qe,
      Ft,
      _i,
      (t, e) => {
        const i = e.api;
        if (t && i) {
          if (E(this, ne) === void 0 || E(this, se) === void 0)
            throw new Error("Parent unique and area key must be defined");
          X(this, V, i), i.setOriginData({
            areaKey: E(this, se),
            parentUnique: E(this, ne)
          }), E(this, V).establishLiveSync(), Y(this, I, Oe).call(this), this.observe(
            E(this, V).content.structure.contentTypeProperties,
            (o) => {
              this._inlineProperty = o[0], Y(this, I, Se).call(this);
            },
            "observeProperties"
          ), this.observe(
            i.content.structure.ownerContentTypeName,
            (o) => {
              this._ownerContentTypeName = o;
            },
            "observeContentTypeName"
          ), this.observe(
            i.variantId,
            async (o) => {
              if (X(this, Z, o), Y(this, I, Se).call(this), o) {
                i.content.setup(this, o);
                const r = o.culture;
                if (r) {
                  const n = new ni(this), { data: s } = await n.requestItems([r]), l = s?.[0].name;
                  this._variantName = l ? this.localize.string(l) : void 0;
                }
              }
            },
            "observeVariant"
          ), new ri(this, Qe, "workspaceContext", [E(this, V)]);
        }
      }
    );
  }
  render() {
    return a`
			<div id="host">
				<button id="open-part" tabindex="0">
					${Y(this, I, ut).call(this)}
					<slot></slot>
					<slot name="tag"></slot>
				</button>
				${Y(this, I, ct).call(this)}
			</div>
		`;
  }
};
de = /* @__PURE__ */ new WeakMap();
V = /* @__PURE__ */ new WeakMap();
Z = /* @__PURE__ */ new WeakMap();
ue = /* @__PURE__ */ new WeakMap();
ne = /* @__PURE__ */ new WeakMap();
se = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakSet();
Oe = function() {
  !E(this, V) || !E(this, ue) || E(this, V).load(E(this, ue));
};
Se = function() {
  if (!E(this, Z) || !this._inlineProperty) return;
  const t = this._inlineProperty;
  this._inlinePropertyDataPath = `$.values[${ei({
    alias: t.alias,
    culture: t.variesByCulture ? E(this, Z).culture : null,
    segment: t.variesBySegment ? E(this, Z).segment : null
  })}].value`;
};
Ge = /* @__PURE__ */ new WeakMap();
ut = function() {
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
					></uui-tag>` : v}
		`;
};
ct = function() {
  return this.unpublished === !0 ? a`<uui-button id="exposeButton" @click=${E(this, Ge)}
				><uui-icon name="icon-add"></uui-icon>
				<umb-localize
					key="blockEditor_createThisFor"
					.args=${[this._ownerContentTypeName, this._variantName]}></umb-localize
			></uui-button>` : a`<div id="inside" draggable="false">
				<umb-property-type-based-property
					.property=${this._inlineProperty}
					.dataPath=${this._inlinePropertyDataPath ?? ""}
					slot="areas"></umb-property-type-based-property>
				<umb-block-grid-areas-container slot="areas" draggable="false"></umb-block-grid-areas-container>
			</div>`;
};
T.styles = [
  we,
  K`
			umb-block-grid-areas-container {
				margin-top: calc(var(--uui-size-2) + 1px);
			}
			umb-block-grid-areas-container::part(area) {
				margin: var(--uui-size-2);
			}

			#exposeButton {
				width: 100%;
				min-height: var(--uui-size-16);
			}

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

			#inside {
				position: relative;
				display: block;
				padding: calc(var(--uui-size-layout-1));
			}
		`
];
A([
  C({ attribute: !1 })
], T.prototype, "config", 2);
A([
  C({ type: String, reflect: !1 })
], T.prototype, "label", 2);
A([
  C({ type: String, reflect: !1 })
], T.prototype, "icon", 2);
A([
  C({ type: Boolean, reflect: !0 })
], T.prototype, "unpublished", 2);
A([
  C({ attribute: !1 })
], T.prototype, "content", 2);
A([
  c()
], T.prototype, "_inlineProperty", 2);
A([
  c()
], T.prototype, "_inlinePropertyDataPath", 2);
A([
  c()
], T.prototype, "_ownerContentTypeName", 2);
A([
  c()
], T.prototype, "_variantName", 2);
T = A([
  M("umb-block-grid-block-inline")
], T);
var vi = Object.getOwnPropertyDescriptor, ht = (t) => {
  throw TypeError(t);
}, ki = (t, e, i, o) => {
  for (var r = o > 1 ? void 0 : o ? vi(e, i) : e, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (r = s(r) || r);
  return r;
}, wi = (t, e, i) => e.has(t) || ht("Cannot " + i), Ci = (t, e, i) => e.has(t) ? ht("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Ze = (t, e, i) => (wi(t, e, "access private method"), i), pe, dt, pt;
let Ae = class extends z {
  constructor() {
    super(...arguments), Ci(this, pe);
  }
  render() {
    return a`
			<div id="host">
				<div id="open-part">
					${Ze(this, pe, dt).call(this)}
					<slot></slot>
					<slot name="tag"></slot>
				</div>
				${Ze(this, pe, pt).call(this)}
			</div>
		`;
  }
};
pe = /* @__PURE__ */ new WeakSet();
dt = function() {
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
pt = function() {
  return a`<div id="inside" draggable="false">
			${this.localize.term("blockEditor_unsupportedBlockDescription")}
			<umb-block-grid-areas-container slot="areas"></umb-block-grid-areas-container>
		</div>`;
};
Ae.styles = [
  we,
  K`
			umb-block-grid-areas-container {
				margin-top: calc(var(--uui-size-2) + 1px);
			}
			umb-block-grid-areas-container::part(area) {
				margin: var(--uui-size-2);
			}

			#exposeButton {
				width: 100%;
				min-height: var(--uui-size-16);
			}

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
			#open-part {
				cursor: default;
				transition: border-color 80ms;
			}
			#host {
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

			#inside {
				position: relative;
				display: block;
				padding: calc(var(--uui-size-layout-1));
			}
		`
];
Ae = ki([
  M("umb-block-grid-block-unsupported")
], Ae);
var Ei = Object.defineProperty, xi = Object.getOwnPropertyDescriptor, te = (t, e, i, o) => {
  for (var r = o > 1 ? void 0 : o ? xi(e, i) : e, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (r = (o ? s(e, i, r) : s(r)) || r);
  return o && r && Ei(e, i, r), r;
};
let D = class extends z {
  render() {
    return a`<umb-ref-grid-block
			standalone
			href=${(this.config?.showContentEdit ? this.config?.editContentPath : void 0) ?? ""}>
			<umb-icon slot="icon" .name=${this.icon}></umb-icon>
			<umb-ufm-render slot="name" inline .markdown=${this.label} .value=${this.content}></umb-ufm-render>
			${this.unpublished ? a`<uui-tag slot="name" look="secondary" title=${this.localize.term("blockEditor_notExposedDescription")}
						><umb-localize key="blockEditor_notExposedLabel"></umb-localize
					></uui-tag>` : v}
			<umb-block-grid-areas-container slot="areas" draggable="false"></umb-block-grid-areas-container>
		</umb-ref-grid-block>`;
  }
};
D.styles = [
  K`
			umb-block-grid-areas-container {
				margin-top: calc(var(--uui-size-2) + 1px);
			}
			umb-block-grid-areas-container::part(area) {
				margin: var(--uui-size-2);
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
te([
  C({ attribute: !1 })
], D.prototype, "label", 2);
te([
  C({ type: String, reflect: !1 })
], D.prototype, "icon", 2);
te([
  C({ attribute: !1 })
], D.prototype, "config", 2);
te([
  C({ type: Boolean, reflect: !0 })
], D.prototype, "unpublished", 2);
te([
  C({ attribute: !1 })
], D.prototype, "content", 2);
D = te([
  M("umb-block-grid-block")
], D);
class Pi extends Ht {
  constructor(e) {
    super(e, De), this.#o = new li(this), this.#r = new et(void 0), this.layoutColumns = this.#r.asObservable(), this.#t = new Xe(void 0), this.areaType = this.#t.asObservable(), this.areaTypeCreateLabel = this.#t.asObservablePart((i) => i?.createLabel), this.#a = new Xe(void 0), this.rangeLimits = this.#a.asObservable(), this.#s = new Re([], (i) => i.contentElementTypeKey), this.allowedBlockTypes = this.#s.asObservable(), this.amountOfAllowedBlockTypes = this.#s.asObservablePart((i) => i.length), this.canCreate = this.#s.asObservablePart((i) => i.length > 0), this.#l = new ge(void 0), this.hasTypeLimits = this.#l.asObservable(), this.consumeContext(Le, (i) => {
      this.#i = i, this.#p();
    }), new Je(this, Xt).addAdditionalPath("_catalogue/:view/:index").onSetup(async (i) => {
      if (!this._manager) return !1;
      const o = i.index ? parseInt(i.index) : -1, r = await this.getContext(Be), n = r.getPasteTranslatorManifests(
        re
      ), l = (await this.getContext(_e)).getConfig(), d = new ui(this);
      return {
        data: {
          blocks: this.#s.getValue(),
          blockGroups: this._manager.getBlockGroups() ?? [],
          openClipboard: i.view === "clipboard",
          clipboardFilter: async (_) => {
            if (!r.hasSupportedPasteTranslator(
              n,
              _.values
            ))
              return !1;
            const S = await d.getPasteTranslator(
              _.values,
              re
            );
            if (S.isCompatibleValue) {
              const ie = await d.resolve(
                _.values,
                re
              );
              return S.isCompatibleValue(ie, l, (x) => this.#m(x));
            }
            return !0;
          },
          originData: {
            index: o,
            areaKey: this.#e,
            parentUnique: this.#n
          },
          createBlockInWorkspace: this._manager.getInlineEditingMode() === !1
        }
      };
    }).onSubmit(async (i, o) => {
      if (i?.create && o) {
        const r = await this.create(
          i.create.contentElementTypeKey,
          // We can parse an empty object, cause the rest will be filled in by others.
          {},
          o.originData
        );
        if (r)
          await this.insert(
            r.layout,
            r.content,
            r.settings,
            o.originData
          );
        else
          throw new Error("Failed to create block");
      } else if (i?.clipboard && i.clipboard.selection?.length && o) {
        const n = await (await this.getContext(Be)).readMultiple(
          i.clipboard.selection,
          re
        );
        this._insertFromPropertyValues(n, o.originData);
      }
    }).observeRouteBuilder((i) => {
      this._catalogueRouteBuilderState.setValue(i);
    }), new Je(this, Qt).addAdditionalPath("block").onSetup(() => ({
      data: {
        entityType: "block",
        preset: {},
        originData: {
          index: -1,
          areaKey: this.#e,
          parentUnique: this.#n,
          baseDataPath: this._dataPath
        }
      },
      modal: { size: "medium" }
    })).observeRouteBuilder((i) => {
      const o = i({});
      this._workspacePath.setValue(o);
    });
  }
  #o;
  #i;
  #r;
  #t;
  #n;
  #e;
  #a;
  #s;
  #l;
  firstAllowedBlockTypeName() {
    if (!this._manager)
      throw new Error("Manager not ready");
    const e = new Lt(void 0);
    return this.observe(this.allowedBlockTypes, (i) => {
      i.length === 1 ? this.observe(
        this._manager.contentTypeNameOf(i[0].contentElementTypeKey),
        (o) => {
          e.setValue(o);
        },
        "getFirstAllowedBlockTypeName"
      ) : this.removeUmbControllerByAlias("getFirstAllowedBlockTypeName");
    }), e.asObservable();
  }
  setParentUnique(e) {
    this.#n = e;
  }
  getParentUnique() {
    return this.#n;
  }
  setAreaKey(e) {
    this.#e = e, this.#o.setAddendum(e ?? ""), this.#y();
  }
  getAreaKey() {
    return this.#e;
  }
  setLayoutColumns(e) {
    this.#r.setValue(e);
  }
  getLayoutColumns() {
    return this.#r.getValue();
  }
  getMinAllowed() {
    return this.#e ? this.#t.getValue()?.minAllowed ?? 0 : this._manager?.getMinAllowed() ?? 0;
  }
  getMaxAllowed() {
    return this.#e ? this.#t.getValue()?.maxAllowed ?? 1 / 0 : this._manager?.getMaxAllowed() ?? 1 / 0;
  }
  getLayoutContainerElement() {
    return this.getHostElement().shadowRoot?.querySelector(".umb-block-grid__layout-container");
  }
  async #m(e) {
    const i = this.#b().map((s) => s.contentElementTypeKey), o = e.layout["Umbraco.BlockGrid"]?.map((s) => s.contentKey) ?? [];
    return e.contentData.filter((s) => o.includes(s.key)).map((s) => s.contentTypeKey).every(
      (s) => i.includes(s)
    );
  }
  _gotBlockManager() {
    this._manager && (this.#u(), this.#c());
  }
  #y() {
    this.#e !== void 0 && this.#p();
  }
  async #p() {
    if (this.#e !== void 0)
      if (this.#e === null) {
        if (await this._retrieveManager, !this._manager) return;
        this.removeUmbControllerByAlias("observeParentUnique"), this.setParentUnique(null), this.observe(
          this._manager.layouts,
          (i) => {
            this._layoutEntries.setValue(i);
          },
          "observeParentLayouts"
        ), this.observe(
          this.layoutEntries,
          (i) => {
            this._manager?.setLayouts(i);
          },
          "observeThisLayouts"
        );
        const e = this.getHostElement();
        e && (e.removeAttribute("data-area-alias"), e.removeAttribute("data-area-col-span"), e.removeAttribute("data-area-row-span"), e.style.removeProperty("--umb-block-grid--grid-columns"), e.style.removeProperty("--umb-block-grid--area-column-span"), e.style.removeProperty("--umb-block-grid--area-row-span")), this.removeUmbControllerByAlias("observeAreaType"), this.#u(), this.#c();
      } else {
        if (!this.#i) return;
        this.observe(
          this.#i.unique,
          (e) => {
            this.setParentUnique(e ?? null);
          },
          "observeParentUnique"
        ), this.observe(
          this.#i.layoutsOfArea(this.#e),
          (e) => {
            e && this._layoutEntries.setValue(e);
          },
          "observeParentLayouts"
        ), this.observe(
          this.layoutEntries,
          (e) => {
            this.#e && this.#i?.setLayoutsOfArea(this.#e, e);
          },
          "observeThisLayouts"
        ), this.observe(
          this.#i.areaType(this.#e),
          (e) => {
            this.#t.setValue(e);
            const i = this.getHostElement();
            i && (i.setAttribute("data-area-alias", e?.alias ?? ""), i.setAttribute("data-area-col-span", e?.columnSpan?.toString() ?? ""), i.setAttribute("data-area-row-span", e?.rowSpan?.toString() ?? ""), i.style.setProperty("--umb-block-grid--grid-columns", e?.columnSpan?.toString() ?? ""), i.style.setProperty("--umb-block-grid--area-column-span", e?.columnSpan?.toString() ?? ""), i.style.setProperty("--umb-block-grid--area-row-span", e?.rowSpan?.toString() ?? ""), this.#u(), this.#c());
          },
          "observeAreaType"
        );
      }
  }
  #u() {
    this._manager && (this.#s.setValue(this.#b()), this.#g());
  }
  #c() {
    if (this._manager) {
      if (this.#e != null) {
        const e = this.#t.getValue();
        if (this.removeUmbControllerByAlias("observeConfigurationRootLimits"), !e) return;
        this.#a.setValue({
          min: e.minAllowed ?? 0,
          max: e.maxAllowed ?? 1 / 0
        });
      } else if (this.#e === null) {
        if (!this._manager) return;
        this.observe(
          this._manager.editorConfiguration,
          (e) => {
            const i = e?.getValueByAlias("validationLimit")?.min ?? 0, o = e?.getValueByAlias("validationLimit")?.max ?? 1 / 0;
            this.#a.setValue({ min: i, max: o });
          },
          "observeConfigurationRootLimits"
        );
      }
    }
  }
  getPathForCreateBlock(e) {
    return this._catalogueRouteBuilderState.getValue()?.({ view: "create", index: e });
  }
  getPathForClipboard(e) {
    return this._catalogueRouteBuilderState.getValue()?.({ view: "clipboard", index: e });
  }
  isBlockTypeAllowed(e) {
    return this.#s.asObservablePart(
      (i) => i.some((o) => o.contentElementTypeKey === e)
    );
  }
  /*
  async setLayouts(layouts: Array<UmbBlockGridLayoutModel>) {
  	await this._retrieveManager;
  	if (this.#areaKey === null) {
  		this._manager?.setLayouts(layouts);
  	} else {
  		if (!this.#parentUnique || !this.#areaKey) {
  			throw new Error('ParentUnique or AreaKey not set');
  		}
  		this._manager?.setLayoutsOfArea(this.#parentUnique, this.#areaKey, layouts);
  	}
  }
  */
  async create(e, i, o) {
    return await this._retrieveManager, await this._manager?.createWithPresets(e, i, o);
  }
  // insert Block?
  async insert(e, i, o, r) {
    return await this._retrieveManager, this._manager?.insert(e, i, o, r) ?? !1;
  }
  // create Block?
  async delete(e) {
    const i = this._layoutEntries.getValue().find((o) => o.contentKey === e);
    if (!i)
      throw new Error(`Cannot delete block, missing layout for ${e}`);
    Te(i, async (o) => {
      o.settingsKey && this._manager.removeOneSettings(o.settingsKey), this._manager.removeOneContent(e), this._manager.removeExposesOf(e);
    }), await super.delete(e);
  }
  async _insertFromPropertyValue(e, i) {
    const o = e.layout[fe];
    if (!o)
      throw new Error("No layout entries found");
    return await Promise.all(
      o.map(async (r) => {
        await this._insertBlockFromPropertyValue(r, e, i), i.index !== -1 && (i = { ...i, index: i.index + 1 });
      })
    ), i;
  }
  async _insertBlockFromPropertyValue(e, i, o) {
    await super._insertBlockFromPropertyValue(e, i, o), await Te(e, async (r, n, s) => {
      const l = { index: -1, parentUnique: n, areaKey: s };
      await this._insertBlockFromPropertyValue(r, i, l);
    });
  }
  /**
   * @internal
   * @returns {Array<UmbBlockGridTypeModel>} an Array of ElementTypeKeys that are allowed in the current area. Or undefined if not ready jet.
   */
  #b() {
    if (!this._manager) return [];
    if (this.#e) {
      const e = this.#t.getValue();
      return e ? e.specifiedAllowance && e.specifiedAllowance?.length > 0 ? e.specifiedAllowance.flatMap((i) => i.groupKey ? this._manager?.getBlockTypes().filter((o) => o.groupKey === i.groupKey) ?? [] : i.elementTypeKey ? this._manager?.getBlockTypes().filter((o) => o.contentElementTypeKey === i.elementTypeKey) ?? [] : []).filter((i, o, r) => r.findIndex((n) => n.contentElementTypeKey === i.contentElementTypeKey) === o) : this._manager.getBlockTypes().filter((i) => i.allowInAreas) : [];
    } else if (this.#e === null)
      return this._manager.getBlockTypes().filter((e) => e.allowAtRoot);
    return [];
  }
  /**
   * @internal
   */
  #g() {
    if (this._manager)
      if (this.#e) {
        const e = this.#t.getValue();
        if (!e) return;
        e.specifiedAllowance && e.specifiedAllowance?.length > 0 && this.#l.setValue(!0);
      } else this.#e;
  }
  // Property to hold the result of the check, used to make a meaningful Validation Message
  #h;
  getInvalidBlockTypeLimits() {
    return this.#h ?? [];
  }
  /**
   * @internal
   * @returns {boolean} - True if the block type limits are valid, otherwise false.
   */
  checkBlockTypeLimitsValidity() {
    const e = this.#t.getValue();
    if (!e || !e.specifiedAllowance) return !1;
    const i = this._layoutEntries.getValue();
    return this.#h = e.specifiedAllowance.map((o) => {
      const r = o.minAllowed || 0, n = o.maxAllowed || 0;
      if (o.groupKey) {
        const s = this._manager?.getBlockTypes().filter((d) => d.groupKey === o.groupKey && d.allowInAreas === !0).map((d) => d.contentElementTypeKey) ?? [], l = i.filter((d) => {
          const _ = this._manager.getContentTypeKeyOfContentKey(d.contentKey);
          return _ ? s.indexOf(_) !== -1 : !1;
        }).length;
        return l < r || n > 0 && l > n ? {
          groupKey: o.groupKey,
          name: this._manager.getBlockGroupName(o.groupKey) ?? "?",
          amount: l,
          minRequirement: r,
          maxRequirement: n
        } : void 0;
      } else if (o.elementTypeKey) {
        const s = i.filter((l) => this._manager.getContentOf(l.contentKey)?.contentTypeKey === o.elementTypeKey).length;
        return s < r || n > 0 && s > n ? {
          key: o.elementTypeKey,
          name: this._manager.getContentTypeNameOf(o.elementTypeKey) ?? "?",
          amount: s,
          minRequirement: r,
          maxRequirement: n
        } : void 0;
      }
      console.error("Invalid block type limit rule.", o);
    }).filter((o) => o !== void 0), this.#h.length === 0;
  }
  #d;
  getInvalidBlockTypeConfigurations() {
    return this.#d ?? [];
  }
  /**
   * @internal
   * @returns {boolean} - True if the block type limits are valid, otherwise false.
   */
  checkBlockTypeConfigurationValidity() {
    this.#d = [];
    const e = this._layoutEntries.getValue();
    if (e.length === 0) return !0;
    const i = this.#s.getValue();
    if (i.length === 0) return !1;
    const o = i.map((n) => n.contentElementTypeKey);
    return e.filter((n) => {
      const s = this._manager.getContentTypeKeyOfContentKey(n.contentKey);
      if (!s)
        return !1;
      const l = o.indexOf(s) === -1;
      return s && l && this.#d?.push(
        this._manager?.getContentTypeNameOf(s) ?? s
      ), l;
    }).length === 0;
  }
  /**
   * Check if given contentKey is allowed in the current area.
   * @param {string} contentKey - The contentKey of the content to check.
   * @returns {boolean} - True if the content is allowed in the current area, otherwise false.
   */
  allowDrop(e) {
    const i = this._manager?.getContentOf(e), o = this.#s.getValue();
    return !i || !o ? !1 : o.map((r) => r.contentElementTypeKey).indexOf(i.contentTypeKey) !== -1;
  }
  onDragStart() {
    this._manager?.onDragStart();
  }
  onDragEnd() {
    this._manager?.onDragEnd();
  }
}
var Ti = Object.defineProperty, Bi = Object.getOwnPropertyDescriptor, bt = (t) => {
  throw TypeError(t);
}, $ = (t, e, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Bi(e, i) : e, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (r = (o ? s(e, i, r) : s(r)) || r);
  return o && r && Ti(e, i, r), r;
}, Ne = (t, e, i) => e.has(t) || bt("Cannot " + i), p = (t, e, i) => (Ne(t, e, "read from private field"), i ? i.call(t) : e.get(t)), G = (t, e, i) => e.has(t) ? bt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), L = (t, e, i, o) => (Ne(t, e, "write to private field"), e.set(t, i), i), le = (t, e, i) => (Ne(t, e, "access private method"), i), be, k, me, W, j, Q, q, mt, yt, gt, ft, _t;
function Oi(t) {
  if (t.relatedModel.areas && t.relatedModel.areas.length > 0 && Gt(t.pointerX, t.pointerY, t.relatedRect, -10))
    return null;
  const e = getComputedStyle(t.containerElement), i = Number(e.columnGap.split("px")[0]) || 0, o = parseInt(
    e.getPropertyValue("--umb-block-grid--grid-columns"),
    10
  ), r = parseInt(t.relatedElement.dataset.colSpan ?? "", 10), n = t.item.columnSpan;
  if (n >= o)
    return !0;
  const s = e.gridTemplateColumns.trim().split("px").map((x) => Number(x)).filter((x) => x > 0).map((x, H, xe) => xe.length === H ? x : x + i);
  let l = s.length;
  const d = o - l;
  if (d > 0) {
    const x = Nt(l, s) || 0, H = (t.containerRect.width - x) / d;
    if (H > 0)
      for (; l++ < o; )
        s.push(H);
  }
  let _ = 0;
  t.placeholderIsInThisRow && t.elementRect.left < t.relatedRect.left && (_ = -(t.elementRect.width + i));
  const O = Math.max(t.relatedRect.left - t.containerRect.left + _, 0);
  return Math.round(
    Wt(O, s)
  ) + r + n > o;
}
const Si = {
  getUniqueOfElement: (t) => t.contentKey,
  getUniqueOfModel: (t) => t.contentKey,
  resolvePlacement: Oi,
  identifier: "block-grid-editor",
  itemSelector: "umb-block-grid-entry",
  containerSelector: ".umb-block-grid__layout-container"
};
let B = class extends nt(z) {
  constructor() {
    super(), G(this, q), G(this, be, new ci(this, {
      ...Si,
      onStart: () => {
        p(this, k).onDragStart();
      },
      onEnd: () => {
        p(this, k).onDragEnd();
      },
      onChange: ({ model: t }) => {
        p(this, k).setLayouts(t);
      },
      onRequestMove: ({ item: t }) => p(this, k).allowDrop(t.contentKey),
      onDisallowed: () => {
        this.setAttribute("disallow-drop", "");
      },
      onAllowed: () => {
        this.removeAttribute("disallow-drop");
      }
    })), G(this, k, new Pi(this)), G(this, me), G(this, W), G(this, j), G(this, Q), this._layoutEntries = [], this._isReadOnly = !1, this.observe(
      p(this, k).layoutEntries,
      (t) => {
        p(this, be).setModel(t), this._layoutEntries = t;
      },
      null
    ), this.observe(
      p(this, k).amountOfAllowedBlockTypes,
      (t) => {
        this._canCreate = t > 0, t === 1 ? this.observe(
          p(this, k).firstAllowedBlockTypeName(),
          (e) => {
            this._createLabel = this.localize.term("blockEditor_addThis", this.localize.string(e));
          },
          "observeSingleBlockTypeName"
        ) : (this.removeUmbControllerByAlias("observeSingleBlockTypeName"), this._createLabel = this.localize.term("blockEditor_addBlock"));
      },
      null
    ), this.observe(
      p(this, k).rangeLimits,
      (t) => {
        le(this, q, mt).call(this, t);
      },
      null
    ), this.observe(
      p(this, k).hasTypeLimits,
      (t) => {
        le(this, q, yt).call(this, t);
      },
      null
    ), p(this, k).getManager().then((t) => {
      this.observe(
        t.layoutStylesheet,
        (e) => {
          !e || this._styleElement?.href === e || (this._styleElement = document.createElement("link"), this._styleElement.rel = "stylesheet", this._styleElement.href = e);
        },
        "observeStylesheet"
      ), this.observe(
        t.readOnlyState.isReadOnly,
        (e) => this._isReadOnly = e,
        "observeIsReadOnly"
      ), this.observe(
        t.variantId,
        (e) => {
          e && (p(this, be).identifier = "umb-block-grid-" + e.toString());
        },
        "observeVariantId"
      ), this.areaKey ? this.observe(
        p(this, k).areaTypeCreateLabel,
        (e) => this._configCreateLabel = e,
        "observeConfigCreateLabel"
      ) : this.observe(
        t.editorConfigurationPart((e) => e?.find((i) => i.alias === "createLabel")?.value),
        (e) => this._configCreateLabel = e,
        "observeConfigCreateLabel"
      );
    }), new je(
      this,
      this
      /*, this.#dataPath*/
    );
  }
  set areaKey(t) {
    this._areaKey = t, p(this, k).setAreaKey(t ?? null), p(this, me)?.destroy(), this.areaKey && L(this, me, new je(this, this));
  }
  get areaKey() {
    return this._areaKey;
  }
  set layoutColumns(t) {
    p(this, k).setLayoutColumns(t);
  }
  get layoutColumns() {
    return p(this, k).getLayoutColumns();
  }
  // TODO: Missing ability to jump directly to creating a Block, when there is only one Block Type. [NL]
  render() {
    return a`
			${this._styleElement}
			<div class="umb-block-grid__layout-container" data-area-length=${this._layoutEntries.length}>
				${ot(
      this._layoutEntries,
      (t) => t.contentKey,
      (t, e) => a`<umb-block-grid-entry
							class="umb-block-grid__layout-item"
							index=${e}
							.contentKey=${t.contentKey}
							.layout=${t}>
						</umb-block-grid-entry>`
    )}
			</div>
			${this._canCreate ? le(this, q, gt).call(this) : v}
			${this._areaKey ? a` <uui-form-validation-message .for=${this}></uui-form-validation-message>` : v}
		`;
  }
};
be = /* @__PURE__ */ new WeakMap();
k = /* @__PURE__ */ new WeakMap();
me = /* @__PURE__ */ new WeakMap();
W = /* @__PURE__ */ new WeakMap();
j = /* @__PURE__ */ new WeakMap();
Q = /* @__PURE__ */ new WeakMap();
q = /* @__PURE__ */ new WeakSet();
mt = async function(t) {
  p(this, j) && (this.removeValidator(p(this, j)), L(this, j, void 0)), t?.min !== 0 && L(this, j, this.addValidator(
    "rangeUnderflow",
    () => this.localize.term(
      "validation_entriesShort",
      t.min,
      (t.min ?? 0) - this._layoutEntries.length
    ),
    () => this._layoutEntries.length < (t?.min ?? 0)
  )), p(this, Q) && (this.removeValidator(p(this, Q)), L(this, Q, void 0)), t?.max !== 1 / 0 && L(this, Q, this.addValidator(
    "rangeOverflow",
    () => this.localize.term(
      "validation_entriesExceed",
      t.max,
      this._layoutEntries.length - (t.max ?? this._layoutEntries.length)
    ),
    () => this._layoutEntries.length > (t?.max ?? 1 / 0)
  ));
};
yt = async function(t) {
  p(this, W) && (this.removeValidator(p(this, W)), L(this, W, void 0)), t ? L(this, W, this.addValidator(
    "customError",
    () => p(this, k).getInvalidBlockTypeLimits().map(
      (i) => this.localize.term(
        i.amount < i.minRequirement ? "blockEditor_areaValidationEntriesShort" : "blockEditor_areaValidationEntriesExceed",
        i.name,
        i.amount,
        i.minRequirement,
        i.maxRequirement
      )
    ).join(", "),
    () => !p(this, k).checkBlockTypeLimitsValidity()
  )) : L(this, W, this.addValidator(
    "customError",
    () => {
      const e = p(this, k).getInvalidBlockTypeConfigurations().filter((i, o, r) => r.indexOf(i) === o).join(", ");
      return this.localize.term(
        this._areaKey ? "blockEditor_areaValidationEntriesNotAllowed" : "blockEditor_rootValidationEntriesNotAllowed",
        e
      );
    },
    () => !p(this, k).checkBlockTypeConfigurationValidity()
  ));
};
gt = function() {
  return this._areaKey === null || this._layoutEntries.length === 0 ? a` <uui-button-group id="createButton">
				${le(this, q, ft).call(this)} ${le(this, q, _t).call(this)}
			</uui-button-group>` : this._isReadOnly === !1 ? a`<uui-button-inline-create
				href=${p(this, k).getPathForCreateBlock(-1) ?? ""}
				label=${this.localize.term("blockEditor_addBlock")}></uui-button-inline-create> ` : v;
};
ft = function() {
  return this._isReadOnly && this._layoutEntries.length > 0 ? v : a`
			<uui-button
				look="placeholder"
				color=${this.pristine === !1 && this.validity.valid === !1 ? "invalid" : "default"}
				label=${this._configCreateLabel ?? this._createLabel ?? ""}
				href=${p(this, k).getPathForCreateBlock(-1) ?? ""}
				?disabled=${this._isReadOnly}></uui-button>
		`;
};
_t = function() {
  return this._areaKey ? v : this._isReadOnly && this._layoutEntries.length > 0 ? v : a`
			<uui-button
				label=${this.localize.term("content_createFromClipboard")}
				look="placeholder"
				href=${p(this, k).getPathForClipboard(-1) ?? ""}
				?disabled=${this._isReadOnly}>
				<uui-icon name="icon-clipboard-paste"></uui-icon>
			</uui-button>
		`;
};
B.styles = [
  we,
  K`
			:host {
				position: relative;
				display: grid;
				gap: 1px;
			}
			:host([disallow-drop])::before {
				content: '';
				position: absolute;
				z-index: 1;
				inset: 0;
				border: 2px solid var(--uui-color-danger);
				border-radius: calc(var(--uui-border-radius) * 2);
				pointer-events: none;
			}
			:host([disallow-drop])::after {
				content: '';
				position: absolute;
				z-index: 1;
				inset: 0;
				border-radius: calc(var(--uui-border-radius) * 2);
				background-color: var(--uui-color-danger);
				opacity: 0.2;
				pointer-events: none;
			}

			> div {
				display: flex;
				flex-direction: column;
				align-items: stretch;
			}

			#createButton {
				grid-template-columns: 1fr auto;
				display: grid;
			}

			/* Only when we are n an area, we like to hide the button on drag */
			:host([area-key]) #createButton {
				--umb-block-grid--create-button--is-dragging--variable: var(--umb-block-grid--is-dragging) none;
				display: var(--umb-block-grid--create-button--is-dragging--variable, grid);
			}

			.umb-block-grid__layout-container[data-area-length='0'] {
				--umb-block-grid--layout-container--is-dragging--variable: var(--umb-block-grid--is-dragging) 1;
				min-height: calc(var(--umb-block-grid--layout-container--is-dragging--variable, 0) * var(--uui-size-11));
			}

			.umb-block-grid__layout-container[data-area-length='0']::after {
				content: '';
				position: absolute;
				inset: 0;
				top: 1px;
				border: calc(var(--umb-block-grid--layout-container--is-dragging--variable, 0) * 1px) dashed
					var(--uui-color-border);
				border-radius: var(--uui-border-radius);
			}
		`
];
$([
  C({ type: String, attribute: "area-key", reflect: !0 })
], B.prototype, "areaKey", 1);
$([
  C({ attribute: !1 })
], B.prototype, "layoutColumns", 1);
$([
  c()
], B.prototype, "_areaKey", 2);
$([
  c()
], B.prototype, "_canCreate", 2);
$([
  c()
], B.prototype, "_createLabel", 2);
$([
  c()
], B.prototype, "_configCreateLabel", 2);
$([
  c()
], B.prototype, "_styleElement", 2);
$([
  c()
], B.prototype, "_layoutEntries", 2);
$([
  c()
], B.prototype, "_isReadOnly", 2);
B = $([
  M("umb-block-grid-entries")
], B);
class Ai extends Yt {
  constructor(e) {
    super(e, De, it), this.columnSpan = this._layout.asObservablePart((i) => i ? i.columnSpan ?? null : void 0), this.rowSpan = this._layout.asObservablePart((i) => i ? i.rowSpan ?? null : void 0), this.layoutAreas = this._layout.asObservablePart((i) => i?.areas), this.columnSpanOptions = this._blockType.asObservablePart((i) => i?.columnSpanOptions ?? []), this.areaTypeGridColumns = this._blockType.asObservablePart((i) => i?.areaGridColumns), this.areas = this._blockType.asObservablePart((i) => i?.areas ?? []), this.minMaxRowSpan = this._blockType.asObservablePart(
      (i) => i ? [i.rowMinSpan ?? 1, i.rowMaxSpan ?? 1] : void 0
    ), this.forceHideContentEditorInOverlay = this._blockType.asObservablePart(
      (i) => i ? i.forceHideContentEditorInOverlay ?? !1 : void 0
    ), this.inlineEditingMode = this._blockType.asObservablePart((i) => i?.inlineEditing === !0), this.#o = new Re([], (i) => i), this.relevantColumnSpanOptions = this.#o.asObservable(), this.#i = new ge(!1), this.canScale = this.#i.asObservable(), this.#r = new ge(!1), this.isAllowed = this.#r.asObservable(), this.#t = new et(void 0), this.areaGridColumns = this.#t.asObservable(), this.showContentEdit = Dt(
      [this._contentStructureHasProperties, this.forceHideContentEditorInOverlay],
      ([i, o]) => i === !0 && o === !1
    ), this.scaleManager = new si(this);
  }
  getMinMaxRowSpan() {
    const e = this._blockType.getValue();
    if (e)
      return [e.rowMinSpan ?? 1, e.rowMaxSpan ?? 1];
  }
  #o;
  getRelevantColumnSpanOptions() {
    return this.#o.getValue();
  }
  #i;
  #r;
  #t;
  layoutsOfArea(e) {
    return this._layout.asObservablePart((i) => i?.areas?.find((o) => o.key === e)?.items);
  }
  areaType(e) {
    return this._blockType.asObservablePart((i) => i?.areas?.find((o) => o.key === e));
  }
  setLayoutsOfArea(e, i) {
    const o = this._layout.value;
    if (!o) return;
    const r = he(
      o?.areas ?? [],
      {
        key: e,
        items: i
      },
      (n) => n.key
    );
    this._layout.update({ areas: r });
  }
  /**
   * Set the column span of this entry.
   * @param columnSpan {number} The new column span.
   */
  setColumnSpan(e) {
    if (!this._entries) return;
    const i = this._entries.getLayoutColumns();
    if (!i || (e = this.#e(e, this.getRelevantColumnSpanOptions(), i), e === this.getColumnSpan())) return;
    const o = this._layout.getValue();
    o && this._layout.setValue({
      ...o,
      columnSpan: e
    });
  }
  /**
   * Get the column span of this entry.
   * @returns {number} The column span.
   */
  getColumnSpan() {
    return this._layout.getValue()?.columnSpan;
  }
  /**
   * Set the row span of this entry.
   * @param rowSpan {number} The new row span.
   */
  setRowSpan(e) {
    const i = this.getMinMaxRowSpan();
    if (!i || (e = Math.max(i[0], Math.min(e, i[1])), e === this.getRowSpan())) return;
    const o = this._layout.getValue();
    o && this._layout.setValue({
      ...o,
      rowSpan: e
    });
  }
  /**
   * Get the row span of this entry.
   * @returns {number} The row span.
   */
  getRowSpan() {
    return this._layout.getValue()?.rowSpan;
  }
  _gotManager() {
    this.#n();
  }
  _gotEntries() {
    this.scaleManager.setEntriesContext(this._entries), this._entries && (this.#n(), this.observe(
      this.contentElementTypeKey,
      (e) => {
        this.observe(
          e ? this._entries?.isBlockTypeAllowed(e) : void 0,
          (i) => {
            i !== void 0 && this.#r.setValue(i);
          },
          "observeIsAllowed"
        );
      },
      "observeContentElementTypeKey"
    ), this.observe(
      R([this.minMaxRowSpan, this.columnSpanOptions, this._entries.layoutColumns]),
      ([e, i, o]) => {
        if (!o || !e) return;
        const r = i ? i.filter((d) => d.columnSpan <= o).map((d) => d.columnSpan).sort((d, _) => d > _ ? 1 : _ > d ? -1 : 0) : [];
        this.#o.setValue(r);
        const n = r.length > 1, s = e[0] !== e[1], l = n || s;
        this.#i.setValue(l);
      },
      "observeScaleOptions"
    ), this.observe(
      R([this.areaTypeGridColumns, this._entries.layoutColumns]),
      ([e, i]) => {
        this.#t.setValue(e ?? i);
      },
      "observeAreaGridColumns"
    ));
  }
  #n() {
    !this._entries || !this._manager || (this.observe(
      R([this.areas, this.layoutAreas]),
      ([e, i]) => {
        if (!e || !i) return;
        if ((e.length === i.length && e.every((r) => i.some((n) => n.key === r.key))) === !1) {
          const r = this._layout.getValue();
          if (!r) return;
          this._layout.setValue({
            ...r,
            areas: i.map((n) => e.find((s) => s.key === n.key) ? n : { key: n.key, items: [] })
          });
        }
      },
      "observeAreaValidation"
    ), this.observe(
      R([this.columnSpan, this.relevantColumnSpanOptions, this._entries.layoutColumns]),
      ([e, i, o]) => {
        if (!o || e === void 0) return;
        const r = this.#e(
          e ?? o,
          i,
          o
        );
        if (r !== e) {
          const n = this._layout.getValue();
          if (!n) return;
          this._layout.setValue({
            ...n,
            columnSpan: r
          });
        }
      },
      "observeColumnSpanValidation"
    ), this.observe(
      R([this.minMaxRowSpan, this.rowSpan]),
      ([e, i]) => {
        if (!e || i === void 0) return;
        const o = Math.max(e[0], Math.min(i ?? 1, e[1]));
        if (o !== i) {
          const r = this._layout.getValue();
          if (!r) return;
          this._layout.setValue({
            ...r,
            rowSpan: o
          });
        }
      },
      "observeRowSpanValidation"
    ));
  }
  _gotContentType() {
  }
  #e(e, i, o) {
    if (i.length > 0) {
      const r = ai(e, i, o) ?? o;
      if (r !== e)
        return r;
    } else
      return o;
    return e;
  }
  async copyToClipboard() {
    if (!this._manager) return;
    const e = await this.getContext(rt), i = await this.getContext(_e), o = await this.getContext(Be), r = e?.getName(), n = i?.getLabel(), s = this.getLabel(), l = r ? `${r} - ${n} - ${s}` : `${n} - ${s}`, d = this.getLayout();
    if (!d)
      throw new Error("No layout found");
    const _ = this.getContent(), O = this.getSettings(), S = this.getExpose(), ie = _ ? [structuredClone(_)] : [], x = O ? [structuredClone(O)] : [], H = S ? [structuredClone(S)] : [];
    Te(d, async (Pe) => {
      const Fe = this._manager.getContentOf(Pe.contentKey);
      if (!Fe)
        throw new Error("No content found");
      if (ie.push(structuredClone(Fe)), Pe.settingsKey) {
        const He = this._manager.getSettingsOf(Pe.settingsKey);
        He && x.push(structuredClone(He));
      }
    });
    const xe = {
      layout: {
        [fe]: d ? [structuredClone(d)] : void 0
      },
      contentData: ie,
      settingsData: x,
      expose: H
    };
    o.write({
      icon: this.getContentElementTypeIcon(),
      name: l,
      propertyValue: xe,
      propertyEditorUiAlias: re
    });
  }
}
var $i = Object.defineProperty, Vi = Object.getOwnPropertyDescriptor, vt = (t) => {
  throw TypeError(t);
}, g = (t, e, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Vi(e, i) : e, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (r = (o ? s(e, i, r) : s(r)) || r);
  return o && r && $i(e, i, r), r;
}, We = (t, e, i) => e.has(t) || vt("Cannot " + i), u = (t, e, i) => (We(t, e, "read from private field"), i ? i.call(t) : e.get(t)), N = (t, e, i) => e.has(t) ? vt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), kt = (t, e, i, o) => (We(t, e, "write to private field"), e.set(t, i), i), f = (t, e, i) => (We(t, e, "access private method"), i), h, ce, m, P, wt, Ct, ve, $e, ke, Ve, Ke, Et, xt, Pt, Tt, Bt, Ot, St, At, $t, Vt;
let b = class extends z {
  constructor() {
    super(), N(this, m), N(this, h, new Ai(this)), N(this, ce), this._showContentEdit = !1, this._hasSettings = !1, this._label = "", this._blockViewProps = {
      contentKey: void 0,
      config: { showContentEdit: !1, showSettingsEdit: !1 }
    }, this._isReadOnly = !1, N(this, ve, () => {
      u(this, h).expose();
    }), N(this, ke, () => {
      const t = this.parentElement;
      if (!t) return;
      const e = t.getBoundingClientRect();
      if (e.width === 0) {
        this._showInlineCreateBefore = !1, this._showInlineCreateAfter = !1, this._inlineCreateAboveWidth = void 0, kt(this, ce, setTimeout(u(this, ke), 100));
        return;
      }
      const i = this.getBoundingClientRect();
      i.right > e.right - 5 ? this._showInlineCreateAfter = !1 : this._showInlineCreateAfter = !0, i.left > e.left + 5 ? (this._showInlineCreateBefore = !1, this._inlineCreateAboveWidth = void 0) : (this._inlineCreateAboveWidth = getComputedStyle(t).width, this._showInlineCreateBefore = !0);
    }), N(this, Ve, (t) => !(!this._contentTypeAlias || t.forContentTypeAlias && !Ye(t.forContentTypeAlias, this._contentTypeAlias) || t.forBlockEditor && !Ye(t.forBlockEditor, Jt))), N(this, Ke, (t) => (t.component && t.component.classList.add("umb-block-grid__block--view"), this._exposed ? t.component : a`<div>
				${t.component}
				<umb-block-overlay-expose-button
					.contentTypeName=${this._contentTypeName}
					@click=${u(this, ve)}></umb-block-overlay-expose-button>
			</div>`)), f(this, m, wt).call(this);
  }
  get index() {
    return u(this, h).getIndex();
  }
  set index(t) {
    u(this, h).setIndex(t);
  }
  get contentKey() {
    return this._contentKey;
  }
  set contentKey(t) {
    !t || t === this._contentKey || (this._contentKey = t, this._blockViewProps.contentKey = t, this.setAttribute("data-element-key", t), u(this, h).setContentKey(t), new st(
      this,
      `$.contentData[${tt({ key: t })}]`,
      (e) => {
        this._contentInvalid = e, this._blockViewProps.contentInvalid = e;
      },
      "observeMessagesForContent"
    ));
  }
  connectedCallback() {
    super.connectedCallback(), this.observe(
      u(this, h).columnSpan,
      (t) => {
        this._columnSpan = t, this.setAttribute("data-col-span", t ? t.toString() : ""), this.style.setProperty("--umb-block-grid--item-column-span", t ? t.toString() : "");
      },
      "columnSpan"
    ), this.observe(
      u(this, h).rowSpan,
      (t) => {
        this._rowSpan = t, this.setAttribute("data-row-span", t ? t.toString() : ""), this.style.setProperty("--umb-block-grid--item-row-span", t ? t.toString() : "");
      },
      "rowSpan"
    ), this.observe(
      u(this, h).contentElementTypeKey,
      (t) => {
        t && this.setAttribute("data-content-element-type-key", t);
      },
      "contentElementTypeKey"
    ), this.observe(
      u(this, h).contentElementTypeAlias,
      (t) => {
        t && (this._contentTypeAlias = t, this.setAttribute("data-content-element-type-alias", t));
      },
      "contentElementTypeAlias"
    ), this.observe(
      u(this, h).contentElementTypeName,
      (t) => {
        this._contentTypeName = t;
      },
      "contentElementTypeName"
    ), f(this, m, $e).call(this);
  }
  updated(t) {
    super.updated(t), (t.has("_blockViewProps") || t.has("_columnSpan")) && f(this, m, $e).call(this);
  }
  render() {
    return this.contentKey && (this._contentTypeAlias || this._unsupported) ? a`
					${f(this, m, Tt).call(this)}
					<div class="umb-block-grid__block" part="umb-block-grid__block">
						<umb-extension-slot
							.filter=${u(this, Ve)}
							.renderMethod=${u(this, Ke)}
							.props=${this._blockViewProps}
							default-element=${this._inlineEditingMode ? "umb-block-grid-block-inline" : "umb-block-grid-block"}
							type="blockEditorCustomView"
							single
							>${f(this, m, Et).call(this)}</umb-extension-slot
						>
						${f(this, m, Ot).call(this)}
						${!this._showContentEdit && this._contentInvalid ? a`<uui-badge attention color="invalid" label="Invalid content">!</uui-badge>` : v}
						${this._invalidLocation ? a`<uui-tag id="invalidLocation" color="danger"
									><umb-localize key="blockEditor_invalidDropPosition" .args=${[this._label]}></umb-localize
								></uui-tag>` : v}
						${this._canScale ? a` <umb-block-scale-handler
									@mousedown=${(t) => u(this, h).scaleManager.onScaleMouseDown(t)}>
									${this._columnSpan}x${this._rowSpan}
								</umb-block-scale-handler>` : v}
					</div>
					${f(this, m, Bt).call(this)}
				` : v;
  }
  renderInlineBlock() {
    return a`<umb-block-grid-block-inline
			class="umb-block-grid__block--view"
			.label=${this._label}
			.icon=${this._icon}
			.unpublished=${!this._exposed}
			.config=${this._blockViewProps.config}
			.content=${this._blockViewProps.content}
			.settings=${this._blockViewProps.settings}></umb-block-grid-block-inline>`;
  }
};
h = /* @__PURE__ */ new WeakMap();
ce = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
P = function(t) {
  this._blockViewProps = { ...this._blockViewProps, ...t }, this.requestUpdate("_blockViewProps");
};
wt = function() {
  this.observe(
    u(this, h).showContentEdit,
    (t) => {
      this._showContentEdit = t, f(this, m, P).call(this, { config: { ...this._blockViewProps.config, showContentEdit: t } });
    },
    null
  ), this.observe(
    u(this, h).settingsElementTypeKey,
    (t) => {
      this._hasSettings = !!t, f(this, m, P).call(this, { config: { ...this._blockViewProps.config, showSettingsEdit: !!t } });
    },
    null
  ), this.observe(
    u(this, h).canScale,
    (t) => {
      this._canScale = t;
    },
    null
  ), this.observe(
    u(this, h).isAllowed,
    (t) => {
      this._invalidLocation = !t;
    },
    null
  ), this.observe(
    u(this, h).blockType,
    (t) => {
      f(this, m, P).call(this, { blockType: t });
    },
    null
  ), this.observe(
    u(this, h).label,
    (t) => {
      f(this, m, P).call(this, { label: t }), this._label = t;
    },
    null
  ), this.observe(
    u(this, h).contentElementTypeIcon,
    (t) => {
      f(this, m, P).call(this, { icon: t }), this._icon = t;
    },
    null
  ), this.observe(
    u(this, h).hasExpose,
    (t) => {
      f(this, m, P).call(this, { unpublished: !t }), this._exposed = t;
    },
    null
  ), this.observe(
    u(this, h).unsupported,
    (t) => {
      t !== void 0 && (f(this, m, P).call(this, { unsupported: t }), this._unsupported = t, this.toggleAttribute("unsupported", t));
    },
    null
  ), this.observe(
    u(this, h).inlineEditingMode,
    (t) => {
      this._inlineEditingMode = t;
    },
    null
  ), this.observe(
    u(this, h).layout,
    (t) => {
      f(this, m, P).call(this, { layout: t });
    },
    null
  ), f(this, m, Ct).call(this), this.observe(
    u(this, h).settingsKey,
    (t) => {
      this.removeUmbControllerByAlias("observeMessagesForSettings"), t && new st(
        this,
        `$.settingsData[${tt({ key: t })}]`,
        (e) => {
          this._settingsInvalid = e, this._blockViewProps.settingsInvalid = e;
        },
        "observeMessagesForSettings"
      );
    },
    null
  ), this.observe(
    u(this, h).createBeforePath,
    (t) => {
      this._createBeforePath = t;
    },
    null
  ), this.observe(
    u(this, h).createAfterPath,
    (t) => {
      this._createAfterPath = t;
    },
    null
  ), this.observe(
    u(this, h).workspaceEditContentPath,
    (t) => {
      this._workspaceEditContentPath = t, f(this, m, P).call(this, { config: { ...this._blockViewProps.config, editContentPath: t } });
    },
    null
  ), this.observe(
    u(this, h).workspaceEditSettingsPath,
    (t) => {
      this._workspaceEditSettingsPath = t, f(this, m, P).call(this, { config: { ...this._blockViewProps.config, editSettingsPath: t } });
    },
    null
  ), this.observe(
    u(this, h).readOnlyState.isReadOnly,
    (t) => this._isReadOnly = t,
    "umbReadonlyObserver"
  );
};
Ct = async function() {
  this.observe(
    await u(this, h).contentValues(),
    (t) => {
      f(this, m, P).call(this, { content: t });
    },
    null
  ), this.observe(
    await u(this, h).settingsValues(),
    (t) => {
      f(this, m, P).call(this, { settings: t });
    },
    null
  );
};
ve = /* @__PURE__ */ new WeakMap();
$e = function() {
  clearTimeout(u(this, ce)), kt(this, ce, setTimeout(u(this, ke), 100));
};
ke = /* @__PURE__ */ new WeakMap();
Ve = /* @__PURE__ */ new WeakMap();
Ke = /* @__PURE__ */ new WeakMap();
Et = function() {
  return this._unsupported ? f(this, m, xt).call(this) : this._inlineEditingMode ? this.renderInlineBlock() : f(this, m, Pt).call(this);
};
xt = function() {
  return a`<umb-block-grid-block-unsupported
			class="umb-block-grid__block--view"
			.config=${this._blockViewProps.config}
			.content=${this._blockViewProps.content}
			.settings=${this._blockViewProps.settings}></umb-block-grid-block-unsupported>`;
};
Pt = function() {
  return a`<umb-block-grid-block
			class="umb-block-grid__block--view"
			.label=${this._label}
			.icon=${this._icon}
			.unpublished=${!this._exposed}
			.config=${this._blockViewProps.config}
			.content=${this._blockViewProps.content}
			.settings=${this._blockViewProps.settings}></umb-block-grid-block>`;
};
Tt = function() {
  return this._isReadOnly ? v : this._createBeforePath ? this._showInlineCreateBefore ? a`<uui-button-inline-create
			href=${this._createBeforePath}
			label=${this.localize.term("blockEditor_addBlock")}
			style=${this._inlineCreateAboveWidth ? `width: ${this._inlineCreateAboveWidth}` : ""}></uui-button-inline-create>` : v : v;
};
Bt = function() {
  return this._isReadOnly ? v : this._createAfterPath ? this._showInlineCreateAfter ? a`
			<uui-button-inline-create
				vertical
				label=${this.localize.term("blockEditor_addBlock")}
				href=${this._createAfterPath}></uui-button-inline-create>
		` : v : v;
};
Ot = function() {
  return a`
			<uui-action-bar>
				${f(this, m, St).call(this)} ${f(this, m, At).call(this)} ${f(this, m, $t).call(this)}
				${f(this, m, Vt).call(this)}</uui-action-bar
			>
		`;
};
St = function() {
  return this._showContentEdit && this._workspaceEditContentPath ? a`<uui-button
					label="edit"
					look="secondary"
					color=${this._contentInvalid ? "danger" : ""}
					href=${this._workspaceEditContentPath}>
					<uui-icon name=${this._exposed === !1 ? "icon-add" : "icon-edit"}></uui-icon>
					${this._contentInvalid ? a`<uui-badge attention color="invalid" label="Invalid content">!</uui-badge>` : v}
				</uui-button>` : this._showContentEdit === !1 && this._exposed === !1 ? a`<uui-button
						@click=${u(this, ve)}
						label=${this.localize.term("blockEditor_createThisFor", this._contentTypeName)}
						look="secondary"
						><uui-icon name="icon-add"></uui-icon
					></uui-button>` : v;
};
At = function() {
  return a`
			${this._hasSettings && this._workspaceEditSettingsPath ? a`<uui-button
						label="Edit settings"
						look="secondary"
						color=${this._settingsInvalid ? "invalid" : ""}
						href=${this._workspaceEditSettingsPath}>
						<uui-icon name="icon-settings"></uui-icon>
						${this._settingsInvalid ? a`<uui-badge attention color="invalid" label="Invalid settings">!</uui-badge>` : v}
					</uui-button>` : v}
		`;
};
$t = function() {
  return a`<uui-button label="Copy to clipboard" look="secondary" @click=${() => u(this, h).copyToClipboard()}>
			<uui-icon name="icon-clipboard-copy"></uui-icon>
		</uui-button>`;
};
Vt = function() {
  return this._isReadOnly ? v : a`
			<uui-button label="delete" look="secondary" @click=${() => u(this, h).requestDelete()}>
				<uui-icon name="icon-remove"></uui-icon>
			</uui-button>
		`;
};
b.styles = [
  hi,
  K`
			:host {
				position: relative;
				display: block;
				--umb-block-grid-entry-actions-opacity: 0;
			}

			:host([settings-invalid]),
			:host([content-invalid]),
			:host(:hover),
			:host(:focus-within) {
				--umb-block-grid-entry-actions-opacity: 1;
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

			:host([location-invalid])::after,
			:host([settings-invalid])::after,
			:host([content-invalid])::after {
				border-color: var(--uui-color-invalid);
			}

			#invalidLocation {
				position: absolute;
				top: -1em;
				left: var(--uui-size-space-2);
				z-index: 2;
			}

			uui-action-bar {
				position: absolute;
				top: var(--uui-size-2);
				right: var(--uui-size-2);
				opacity: var(--umb-block-grid-entry-actions-opacity, 0);
				transition: opacity 120ms;
			}
			uui-button-inline-create {
				top: 0px;
				position: absolute;

				--umb-block-grid__block--inline-create-button-display--condition: var(--umb-block-grid--dragging-mode) none;
				display: var(--umb-block-grid__block--inline-create-button-display--condition);
			}
			uui-button-inline-create:not([vertical]) {
				left: 0;
				width: var(--umb-block-grid-editor--inline-create-width, 100%);
			}
			:host(:not([index='0'])) uui-button-inline-create:not([vertical]) {
				top: calc(var(--umb-block-grid--row-gap, 0px) * -0.5);
			}
			uui-button-inline-create[vertical] {
				right: calc(1px - (var(--umb-block-grid--column-gap, 0px) * 0.5));
			}

			.umb-block-grid__block {
				height: 100%;
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
				animation: ${di};
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
			:host([drag-placeholder]) .umb-block-grid__block {
				transition: opacity 50ms 16ms;
				opacity: 0;
			}

			uui-badge {
				z-index: 2;
			}
		`
];
g([
  C({ type: Number, reflect: !0 })
], b.prototype, "index", 1);
g([
  C({ attribute: !1 })
], b.prototype, "contentKey", 1);
g([
  c()
], b.prototype, "_contentTypeAlias", 2);
g([
  c()
], b.prototype, "_contentTypeName", 2);
g([
  c()
], b.prototype, "_columnSpan", 2);
g([
  c()
], b.prototype, "_rowSpan", 2);
g([
  c()
], b.prototype, "_showContentEdit", 2);
g([
  c()
], b.prototype, "_hasSettings", 2);
g([
  c()
], b.prototype, "_createBeforePath", 2);
g([
  c()
], b.prototype, "_createAfterPath", 2);
g([
  c()
], b.prototype, "_label", 2);
g([
  c()
], b.prototype, "_icon", 2);
g([
  c()
], b.prototype, "_exposed", 2);
g([
  c()
], b.prototype, "_unsupported", 2);
g([
  c()
], b.prototype, "_workspaceEditContentPath", 2);
g([
  c()
], b.prototype, "_workspaceEditSettingsPath", 2);
g([
  c()
], b.prototype, "_inlineEditingMode", 2);
g([
  c()
], b.prototype, "_canScale", 2);
g([
  c()
], b.prototype, "_showInlineCreateBefore", 2);
g([
  c()
], b.prototype, "_showInlineCreateAfter", 2);
g([
  c()
], b.prototype, "_inlineCreateAboveWidth", 2);
g([
  C({ type: Boolean, attribute: "location-invalid", reflect: !0 })
], b.prototype, "_invalidLocation", 2);
g([
  C({ type: Boolean, attribute: "content-invalid", reflect: !0 })
], b.prototype, "_contentInvalid", 2);
g([
  C({ type: Boolean, attribute: "settings-invalid", reflect: !0 })
], b.prototype, "_settingsInvalid", 2);
g([
  c()
], b.prototype, "_blockViewProps", 2);
g([
  c()
], b.prototype, "_isReadOnly", 2);
b = g([
  M("umb-block-grid-entry")
], b);
var Ki = Object.getOwnPropertyDescriptor, Mi = (t, e, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Ki(e, i) : e, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (r = s(r) || r);
  return r;
};
let Me = class extends z {
  //
  constructor() {
    super(), this.addEventListener("dragstart", (t) => {
      t.preventDefault();
    }), this.addEventListener("dragstart", (t) => {
      t.preventDefault();
    });
  }
  render() {
    return a`
			<button aria-label="TODO: Some introduction to keyboard scaling" id="handler"></button>
			<slot id="label"></slot>
		`;
  }
};
Me.styles = [
  K`
			:host {
				position: absolute;
				inset: 0;
				pointer-events: none;
				box-sizing: border-box;
			}
			:host(:focus-within),
			:host(:hover) {
				border: var(--uui-color-interactive) solid 1px;
				border-radius: var(--uui-border-radius);
			}

			#handler {
				position: absolute;
				// TODO: Look at the feature I out-commented here, what was that suppose to do [NL]:
				//display: var(--umb-block-grid--block-ui-display, block);
				display: block;
				z-index: 2;

				pointer-events: all;
				cursor: nwse-resize;

				bottom: -4px;
				right: -4px;
				width: 7px;
				height: 7px;
				padding: 0;
				background-color: var(--uui-color-surface);
				border: var(--uui-color-interactive) solid 1px;
				box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.7);
				opacity: 0;
				transition: opacity 120ms;
			}
			#handler:hover,
			#handler:focus {
				opacity: 1;
			}
			#handler:focus {
				outline: 2px solid var(--uui-color-selected);
				outline-offset: 1px;
			}
			#handler::after {
				content: '';
				position: absolute;
				inset: -10px;
				background-color: rgba(0, 0, 0, 0);
			}
			#handler:focus + #label,
			#handler:hover + #label {
				opacity: 1;
			}

			#label {
				position: absolute;
				display: block;
				top: 100%;
				left: 100%;
				margin-left: 6px;
				margin-top: 6px;
				z-index: 2;

				background-color: white;
				color: black;
				font-size: 12px;
				padding: 0px 6px;
				border-radius: 3px;
				opacity: 0;
				transition: opacity 120ms;

				pointer-events: none;
				white-space: nowrap;
			}

			:host([scale-mode]) > #handler {
				opacity: 1;
			}
			:host([scale-mode]) > #label {
				opacity: 1;
			}
		`
];
Me = Mi([
  M("umb-block-scale-handler")
], Me);
var Ui = Object.getOwnPropertyDescriptor, Ii = (t, e, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Ui(e, i) : e, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (r = s(r) || r);
  return r;
};
let Ue = class extends at {
  render() {
    return a`
			${super.render()}
			<div class="break"></div>
			<slot name="areas"></slot>
		`;
  }
};
Ue.styles = [
  ...at.styles,
  K`
			:host {
				min-width: 20px; /* Set to something, to overwrite UUI min width. */
				height: 100%; /* Help to fill out the whole layout entry. */
				min-height: var(--uui-size-16);
				flex-flow: row wrap;
				background-color: var(--uui-color-surface);
			}

			.break {
				flex-basis: 100%;
				height: 0;
			}

			#open-part {
				display: flex;
				min-height: var(--uui-size-16);
				padding: calc(var(--uui-size-2) + 1px);
			}

			:host([unpublished]) #open-part {
				opacity: 0.6;
			}
		`
];
Ue = Ii([
  M("umb-ref-grid-block")
], Ue);
var Ri = Object.defineProperty, Li = Object.getOwnPropertyDescriptor, Kt = (t) => {
  throw TypeError(t);
}, Ee = (t, e, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Li(e, i) : e, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (r = (o ? s(e, i, r) : s(r)) || r);
  return o && r && Ri(e, i, r), r;
}, qe = (t, e, i) => e.has(t) || Kt("Cannot " + i), y = (t, e, i) => (qe(t, e, "read from private field"), i ? i.call(t) : e.get(t)), oe = (t, e, i) => e.has(t) ? Kt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Mt = (t, e, i, o) => (qe(t, e, "write to private field"), e.set(t, i), i), Di = (t, e, i) => (qe(t, e, "access private method"), i), ae, w, ye, J, Ie, Ut;
let F = class extends nt(z) {
  constructor() {
    super(), oe(this, Ie), oe(this, ae, new ti(this)), oe(this, w, new bi(this)), oe(this, ye), oe(this, J), this.consumeContext(pi, (t) => {
      this.observe(
        R([
          y(this, w).blockTypes,
          t.structure.variesByCulture,
          t.structure.variesBySegment
        ]),
        async ([e, i, o]) => {
          if (e.length > 0 && (i === !1 || o === !1)) {
            const r = await Promise.all(
              e.map(async (n) => {
                const s = n.contentElementTypeKey;
                await y(this, w).contentTypesLoaded;
                const l = await y(this, w).getStructure(s);
                return i === !1 && l?.getVariesByCulture() === !0 ? !0 : o === !1 && l?.getVariesBySegment() === !0;
              })
            );
            this._notSupportedVariantSetting = r.filter((n) => n === !0).length > 0, this._notSupportedVariantSetting && y(this, ae).messages.addMessage(
              "config",
              "$",
              "#blockEditor_blockVariantConfigurationNotSupported"
            );
          }
        }
      );
    }).passContextAliasMatches(), this.consumeContext(_e, (t) => {
      this.observe(
        t.dataPath,
        (e) => {
          e && (y(this, ae).setDataPath(e), y(this, ae).autoReport());
        },
        "observeDataPath"
      );
    }), this.consumeContext(_e, (t) => {
      this.observe(
        R([
          y(this, w).layouts,
          y(this, w).contents,
          y(this, w).settings,
          y(this, w).exposes
        ]).pipe(ii(20)),
        ([e, i, o, r]) => {
          e.length === 0 ? super.value = void 0 : super.value = {
            ...super.value,
            layout: { [fe]: e },
            contentData: i,
            settingsData: o,
            expose: r
          }, !(y(this, ye) === void 0 && super.value === void 0) && t.setValue(super.value);
        },
        "motherObserver"
      ), this.observe(
        t?.alias,
        (e) => {
          y(this, w).setPropertyAlias(e);
        },
        "observePropertyAlias"
      ), this.observe(
        R([t.isReadOnly, t.variantId]),
        ([e, i]) => {
          const o = "UMB_PROPERTY_EDITOR_UI";
          if (i !== void 0)
            if (e) {
              const r = {
                unique: o,
                variantId: i,
                message: ""
              };
              y(this, w).readOnlyState.addState(r);
            } else
              y(this, w).readOnlyState.removeState(o);
        },
        "observeIsReadOnly"
      );
    }), this.consumeContext(rt, (t) => {
      y(this, w).setVariantId(t.getVariantId());
    });
  }
  set config(t) {
    if (!t) return;
    const e = t.getValueByAlias("blocks") ?? [];
    y(this, w).setBlockTypes(e);
    const i = t.getValueByAlias("blockGroups") ?? [];
    y(this, w).setBlockGroups(i);
    const o = t.getValueByAlias("useInlineEditingAsDefault");
    y(this, w).setInlineEditingMode(o), this.style.maxWidth = t.getValueByAlias("maxPropertyWidth") ?? "", y(this, w).setEditorConfiguration(t);
  }
  set value(t) {
    if (Mt(this, ye, t), !t) {
      super.value = void 0;
      return;
    }
    const e = t ? { ...t } : {};
    e.layout ??= {}, e.contentData ??= [], e.settingsData ??= [], e.expose ??= [], super.value = e, y(this, w).setLayouts(super.value.layout[fe] ?? []), y(this, w).setContents(super.value.contentData), y(this, w).setSettings(super.value.settingsData), y(this, w).setExposes(super.value.expose);
  }
  get value() {
    return super.value;
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.observe(y(this, w).gridColumns, (e) => {
      e && (this._layoutColumns = e, this.style.setProperty("--umb-block-grid--grid-columns", e.toString()));
    });
  }
  render() {
    return this._notSupportedVariantSetting ? v : a` <umb-block-grid-entries
			${Zt(Di(this, Ie, Ut))}
			.areaKey=${null}
			.layoutColumns=${this._layoutColumns}></umb-block-grid-entries>`;
  }
};
ae = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
ye = /* @__PURE__ */ new WeakMap();
J = /* @__PURE__ */ new WeakMap();
Ie = /* @__PURE__ */ new WeakSet();
Ut = function(t) {
  y(this, J) !== t && (y(this, J) && this.removeFormControlElement(y(this, J)), Mt(this, J, t), t && this.addFormControlElement(t));
};
F.styles = [
  we,
  K`
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
Ee([
  c()
], F.prototype, "_layoutColumns", 2);
Ee([
  C({ attribute: !1 })
], F.prototype, "value", 1);
Ee([
  c()
], F.prototype, "_notSupportedVariantSetting", 2);
F = Ee([
  M("umb-property-editor-ui-block-grid")
], F);
const uo = F;
export {
  F as UmbPropertyEditorUIBlockGridElement,
  uo as default
};
//# sourceMappingURL=property-editor-ui-block-grid.element-D6ASWsRM.js.map
