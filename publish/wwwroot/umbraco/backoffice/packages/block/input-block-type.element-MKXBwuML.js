import { umbConfirmModal as N } from "@umbraco-cms/backoffice/modal";
import { UmbModalRouteRegistrationController as z } from "@umbraco-cms/backoffice/router";
import { property as l, state as y, customElement as R, ifDefined as S, html as _, css as L, repeat as Y } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_DATASET_CONTEXT as G } from "@umbraco-cms/backoffice/property";
import { UmbChangeEvent as O } from "@umbraco-cms/backoffice/event";
import { UMB_DOCUMENT_TYPE_ITEM_REPOSITORY_ALIAS as X, UMB_DOCUMENT_TYPE_PICKER_MODAL as V, UMB_DOCUMENT_TYPE_ITEM_STORE_CONTEXT as H } from "@umbraco-cms/backoffice/document-type";
import { UmbSorterController as J, UmbSorterResolvePlacementAsGrid as Q } from "@umbraco-cms/backoffice/sorter";
import { UmbRepositoryItemsManager as Z } from "@umbraco-cms/backoffice/repository";
import { UMB_APP_CONTEXT as j } from "@umbraco-cms/backoffice/app";
import { transformServerPathToClientPath as ee } from "@umbraco-cms/backoffice/utils";
import { UUICardEvent as A } from "@umbraco-cms/backoffice/external/uui";
var te = Object.defineProperty, ie = Object.getOwnPropertyDescriptor, B = (e) => {
  throw TypeError(e);
}, a = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? ie(t, i) : t, p = e.length - 1, c; p >= 0; p--)
    (c = e[p]) && (n = (r ? c(t, i, n) : c(n)) || n);
  return r && n && te(t, i, n), n;
}, D = (e, t, i) => t.has(e) || B("Cannot " + i), h = (e, t, i) => (D(e, t, "read from private field"), i ? i.call(e) : t.get(e)), E = (e, t, i) => t.has(e) ? B("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), I = (e, t, i, r) => (D(e, t, "write to private field"), t.set(e, i), i), b, T, d, P;
let o = class extends x {
  constructor() {
    super(), E(this, b), E(this, T, ""), E(this, d, new Z(
      this,
      X
    )), this._name = "", E(this, P, () => {
      this.dispatchEvent(new A(A.OPEN));
    }), I(this, b, this.getContext(j).then((e) => {
      I(this, T, e.getServerUrl());
    })), this.observe(h(this, d).statuses, async (e) => {
      const t = e[0];
      if (t?.state.type === "success") {
        const i = await h(this, d).getItemByUnique(t.unique);
        this._fallbackIcon = i.icon, this._name = i.name ? this.localize.string(i.name) : this.localize.term("general_unknown"), this._description = this.localize.string(i.description);
      } else t?.state.type === "error" && (this._fallbackIcon = "icon-alert", this._name = this.localize.term("blockEditor_elementTypeDoesNotExistHeadline"), this._description = this.localize.term("blockEditor_elementTypeDoesNotExistDescription"));
    });
  }
  set iconFile(e) {
    e = ee(e), e ? h(this, b).then(() => {
      const t = new URL(e, h(this, T));
      this._iconFile = t.href;
    }) : this._iconFile = void 0;
  }
  get iconFile() {
    return this._iconFile;
  }
  set contentElementTypeKey(e) {
    this._elementTypeKey = e, e ? h(this, d).setUniques([e]) : h(this, d).setUniques([]);
  }
  get contentElementTypeKey() {
    return this._elementTypeKey;
  }
  // TODO: Support image files instead of icons.
  render() {
    return _`
			<uui-card-block-type
				href=${S(this.href)}
				@open=${h(this, P)}
				.name=${this._name}
				.description=${this._description}
				.background=${this.backgroundColor}>
				${this._iconFile ? _`<img src=${this._iconFile} alt="" />` : _`<umb-icon name=${this._fallbackIcon ?? ""} color=${S(this.iconColor)}></umb-icon>`}
				<slot name="actions" slot="actions"> </slot>
			</uui-card-block-type>
		`;
  }
};
b = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakMap();
a([
  l({ type: String })
], o.prototype, "href", 2);
a([
  l({ type: String, attribute: !1 })
], o.prototype, "iconFile", 1);
a([
  y()
], o.prototype, "_iconFile", 2);
a([
  l({ type: String, attribute: !1 })
], o.prototype, "iconColor", 2);
a([
  l({ type: String, attribute: !1 })
], o.prototype, "backgroundColor", 2);
a([
  l({ type: String, attribute: !1 })
], o.prototype, "contentElementTypeKey", 1);
a([
  y()
], o.prototype, "_name", 2);
a([
  y()
], o.prototype, "_description", 2);
a([
  y()
], o.prototype, "_fallbackIcon", 2);
o = a([
  R("umb-block-type-card")
], o);
var ne = Object.defineProperty, re = Object.getOwnPropertyDescriptor, W = (e) => {
  throw TypeError(e);
}, v = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? re(t, i) : t, p = e.length - 1, c; p >= 0; p--)
    (c = e[p]) && (n = (r ? c(t, i, n) : c(n)) || n);
  return r && n && ne(t, i, n), n;
}, $ = (e, t, i) => t.has(e) || W("Cannot " + i), u = (e, t, i) => ($(e, t, "read from private field"), i ? i.call(e) : t.get(e)), m = (e, t, i) => t.has(e) ? W("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), w = (e, t, i, r) => ($(e, t, "write to private field"), t.set(e, i), i), K = (e, t, i) => ($(e, t, "access private method"), i), U, g, k, f, C, q, M, F;
let s = class extends x {
  constructor() {
    super(), m(this, C), m(this, U, new J(this, {
      getUniqueOfElement: (e) => e.contentElementTypeKey,
      getUniqueOfModel: (e) => e.contentElementTypeKey,
      itemSelector: "umb-block-type-card",
      identifier: "umb-block-type-sorter",
      containerSelector: "#blocks",
      resolvePlacement: Q,
      onContainerChange: ({ item: e, model: t }) => {
        this.dispatchEvent(new CustomEvent("container-change", { detail: { item: e, model: t } }));
      },
      onChange: ({ model: e }) => {
        this._value = e, this.dispatchEvent(new O());
      }
      /*onEnd: () => {
      	// TODO: Investigate if onEnd is called when a container move has been performed, if not then I would say it should be. [NL]
      	this.dispatchEvent(new UmbChangeEvent());
      },*/
    })), m(this, g), this._value = [], m(this, k), m(this, f, []), m(this, M, (e) => _`
			<umb-block-type-card
				.iconFile=${e.thumbnail}
				.iconColor=${e.iconColor}
				.backgroundColor=${e.backgroundColor}
				.href="${this.workspacePath}edit/${e.contentElementTypeKey}"
				.contentElementTypeKey=${e.contentElementTypeKey}>
				<uui-action-bar slot="actions">
					<uui-button @click=${() => K(this, C, q).call(this, e)} label="Remove block">
						<uui-icon name="icon-trash"></uui-icon>
					</uui-button>
				</uui-action-bar>
			</umb-block-type-card>
		`), this.consumeContext(G, async (e) => {
      w(this, k, e), this.observe(
        await u(this, k)?.propertyValueByAlias("blocks"),
        (t) => {
          w(this, f, t);
        },
        "observeBlocks"
      );
    }), w(this, g, new z(this, V).addUniquePaths(["propertyAlias"]).onSetup(() => ({
      data: {
        hideTreeRoot: !0,
        multiple: !1,
        createAction: {
          extendWithPathParams: {
            parentUnique: null,
            presetAlias: "element"
          }
        },
        pickableFilter: (e) => (
          // Only pick elements:
          e.isElement && // Prevent picking the an already used element type:
          u(this, f) && u(this, f).find((t) => t.contentElementTypeKey === e.unique) === void 0
        )
      },
      value: {
        selection: []
      }
    })).onSubmit((e) => {
      const t = e.selection[0];
      t && this.dispatchEvent(new CustomEvent("create", { detail: { contentElementTypeKey: t } }));
    }).observeRouteBuilder((e) => {
      const t = this._pickerPath;
      this._pickerPath = e({}), this.requestUpdate("_pickerPath", t);
    }));
  }
  set value(e) {
    this._value = e ?? [], this._value = this._value.filter(
      (t, i, r) => r.findIndex((n) => n.contentElementTypeKey === t.contentElementTypeKey) === i
    ), u(this, U).setModel(this._value);
  }
  get value() {
    return this._value;
  }
  set propertyAlias(e) {
    u(this, g).setUniquePathValue("propertyAlias", e);
  }
  get propertyAlias() {
  }
  deleteItem(e) {
    this._value = this.value.filter((t) => t.contentElementTypeKey !== e), this.dispatchEvent(new O());
  }
  render() {
    return _`<div id="blocks">
			${Y(this.value, (e) => e.contentElementTypeKey, u(this, M))} ${K(this, C, F).call(this)}
		</div>`;
  }
};
U = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
k = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakSet();
q = async function(e) {
  const i = (await this.getContext(H)).getItems([e.contentElementTypeKey]);
  await N(this, {
    color: "danger",
    headline: `Remove ${i[0]?.name}?`,
    // TODO: Translations: [NL]
    content: "Are you sure you want to remove this Block Type Configuration?",
    confirmLabel: "Remove"
  }), this.deleteItem(e.contentElementTypeKey);
};
M = /* @__PURE__ */ new WeakMap();
F = function() {
  return this._pickerPath ? _`
					<uui-button id="add-button" look="placeholder" href=${this._pickerPath} label="open">
						<uui-icon name="icon-add"></uui-icon>
						Add
					</uui-button>
				` : null;
};
s.styles = [
  L`
			div {
				display: grid;
				gap: var(--uui-size-space-3);
				grid-template-columns: repeat(auto-fill, minmax(var(--umb-card-medium-min-width), 1fr));
				grid-template-rows: repeat(auto-fill, minmax(var(--umb-card-medium-min-width), 1fr));
			}

			[drag-placeholder] {
				opacity: 0.5;
			}

			#add-button {
				text-align: center;
				min-height: 150px;
				height: 100%;
			}

			uui-icon {
				display: block;
				margin: 0 auto;
			}

			uui-input {
				border: none;
				margin: var(--uui-size-space-6) 0 var(--uui-size-space-4);
			}

			uui-input:hover uui-button {
				opacity: 1;
			}
			uui-input uui-button {
				opacity: 0;
			}
		`
];
v([
  l({ type: Array, attribute: !1 })
], s.prototype, "value", 1);
v([
  l({ type: String })
], s.prototype, "propertyAlias", 1);
v([
  l({ type: String })
], s.prototype, "workspacePath", 2);
v([
  y()
], s.prototype, "_pickerPath", 2);
v([
  y()
], s.prototype, "_value", 2);
s = v([
  R("umb-input-block-type")
], s);
export {
  o as U,
  s as a
};
//# sourceMappingURL=input-block-type.element-MKXBwuML.js.map
