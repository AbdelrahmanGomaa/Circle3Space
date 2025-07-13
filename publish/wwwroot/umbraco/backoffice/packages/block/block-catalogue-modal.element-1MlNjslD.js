import { a as T } from "./index-jGJQ3LmE.js";
import "./block-entry.context-token-DG6_TzkT.js";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/utils";
import { UmbModalBaseElement as z, UMB_MODAL_CONTEXT as O } from "@umbraco-cms/backoffice/modal";
import "@umbraco-cms/backoffice/localization-api";
import { UmbModalRouteRegistrationController as U } from "@umbraco-cms/backoffice/router";
import "@umbraco-cms/backoffice/variant";
import "@umbraco-cms/backoffice/ufm";
import { UmbContextToken as C } from "@umbraco-cms/backoffice/context-api";
import "@umbraco-cms/backoffice/document-type";
import "@umbraco-cms/backoffice/content-type";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/property";
import "@umbraco-cms/backoffice/language";
import "@umbraco-cms/backoffice/data-type";
import { css as x, state as d, customElement as K, html as n, nothing as h, repeat as P } from "@umbraco-cms/backoffice/external/lit";
import "@umbraco-cms/backoffice/block-type";
const rt = new C("UmbBlockEntriesContext"), S = new C("UmbBlockManagerContext");
var L = Object.defineProperty, G = Object.getOwnPropertyDescriptor, g = (t) => {
  throw TypeError(t);
}, p = (t, e, o, s) => {
  for (var i = s > 1 ? void 0 : s ? G(e, o) : e, c = t.length - 1, m; c >= 0; c--)
    (m = t[c]) && (i = (s ? m(e, o, i) : m(i)) || i);
  return s && i && L(e, o, i), i;
}, b = (t, e, o) => e.has(t) || g("Cannot " + o), f = (t, e, o) => (b(t, e, "read from private field"), o ? o.call(t) : e.get(t)), k = (t, e, o) => e.has(t) ? g("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), A = (t, e, o, s) => (b(t, e, "write to private field"), e.set(t, o), o), r = (t, e, o) => (b(t, e, "access private method"), o), u, a, _, y, v, $, E, B, M, w;
let l = class extends z {
  constructor() {
    super(), k(this, a), k(this, u, ""), this._groupedBlocks = [], this._filtered = [], this.consumeContext(O, (t) => {
      t.data.createBlockInWorkspace && new U(this, T).onSetup(() => ({
        data: { preset: {}, originData: t.data.originData }
      })).onSubmit(() => {
        this.modalContext?.submit();
      }).observeRouteBuilder((e) => {
        this._workspacePath = e({});
      });
    }), this.consumeContext(S, (t) => {
      this._manager = t;
    });
  }
  connectedCallback() {
    if (super.connectedCallback(), !this.data) return;
    this._openClipboard = this.data.openClipboard ?? !1;
    const t = this.data.blocks ?? [], e = this.data.blockGroups ?? [], o = t.filter((i) => !e.find((c) => c.key === i.groupKey)), s = e.map((i) => ({
      name: i.name,
      blocks: t.filter((c) => c.groupKey === i.key)
    }));
    this._groupedBlocks = [{ blocks: o }, ...s], r(this, a, _).call(this);
  }
  render() {
    return n`
			<umb-body-layout headline="${this.localize.term("blockEditor_addBlock")}">
				${r(this, a, w).call(this)}${r(this, a, E).call(this)}
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
					<uui-button
						label=${this.localize.term("general_submit")}
						look="primary"
						color="positive"
						@click=${this._submitModal}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
u = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
_ = function() {
  if (f(this, u).length === 0)
    this._filtered = this._groupedBlocks;
  else {
    const t = f(this, u).toLowerCase();
    this._filtered = this._groupedBlocks.map((e) => ({ ...e, blocks: e.blocks.filter((o) => o.label?.toLocaleLowerCase().includes(t)) }));
  }
};
y = function(t) {
  A(this, u, t.target.value), r(this, a, _).call(this);
};
v = function(t) {
  this.value = {
    create: {
      contentElementTypeKey: t
    }
  }, this.modalContext?.submit();
};
$ = async function(t) {
  const o = t.target?.selection || [];
  this.value = {
    clipboard: {
      selection: o
    }
  };
};
E = function() {
  return this._manager ? this._openClipboard ? r(this, a, B).call(this) : r(this, a, M).call(this) : h;
};
B = function() {
  return n`<uui-box
			><umb-clipboard-entry-picker
				.config=${{ multiple: !0, asyncFilter: this.data?.clipboardFilter }}
				@selection-change=${r(this, a, $)}></umb-clipboard-entry-picker
		></uui-box>`;
};
M = function() {
  return n`
			${this.data?.blocks && this.data.blocks.length > 8 ? n`<uui-input
						id="search"
						@input=${r(this, a, y)}
						label=${this.localize.term("general_search")}
						placeholder=${this.localize.term("placeholders_search")}>
						<uui-icon name="icon-search" slot="prepend"></uui-icon>
					</uui-input>` : h}
			${this._filtered.map(
    (t) => n`
					${t.name && t.blocks.length !== 0 && t.name !== "" ? n`<h4>${t.name}</h4>` : h}
					<div class="blockGroup">
						${P(
      t.blocks,
      (e) => e.contentElementTypeKey,
      (e) => n`
								<umb-block-type-card
									.iconFile=${e.thumbnail}
									.iconColor=${e.iconColor}
									.backgroundColor=${e.backgroundColor}
									.contentElementTypeKey=${e.contentElementTypeKey}
									@open=${() => r(this, a, v).call(this, e.contentElementTypeKey)}
									.href=${this._workspacePath && this._manager.getContentTypeHasProperties(e.contentElementTypeKey) ? `${this._workspacePath}create/${e.contentElementTypeKey}` : void 0}>
								</umb-block-type-card>
							`
    )}
					</div>
				`
  )}
		`;
};
w = function() {
  return n`
			<uui-tab-group slot="navigation">
				<uui-tab
					label=${this.localize.term("blockEditor_tabCreateEmpty")}
					?active=${!this._openClipboard}
					@click=${() => this._openClipboard = !1}>
					<umb-localize key=${this.localize.term("blockEditor_tabCreateEmpty")}>Create Empty</umb-localize>
					<uui-icon slot="icon" name="icon-add"></uui-icon>
				</uui-tab>
				<uui-tab
					label=${this.localize.term("blockEditor_tabClipboard")}
					?active=${this._openClipboard}
					@click=${() => this._openClipboard = !0}>
					<umb-localize key=${this.localize.term("blockEditor_tabClipboard")}>Clipboard</umb-localize>
					<uui-icon slot="icon" name="icon-clipboard"></uui-icon>
				</uui-tab>
			</uui-tab-group>
		`;
};
l.styles = [
  x`
			#search {
				width: 100%;
				align-items: center;
				margin-bottom: var(--uui-size-layout-1);
			}
			#search uui-icon {
				padding-left: var(--uui-size-space-3);
			}
			.blockGroup {
				display: grid;
				gap: 1rem;
				grid-template-columns: repeat(auto-fill, minmax(min(var(--umb-card-medium-min-width), 100%), 1fr));
			}

			uui-tab-group {
				--uui-tab-divider: var(--uui-color-border);
				border-left: 1px solid var(--uui-color-border);
				border-right: 1px solid var(--uui-color-border);
			}
		`
];
p([
  d()
], l.prototype, "_openClipboard", 2);
p([
  d()
], l.prototype, "_workspacePath", 2);
p([
  d()
], l.prototype, "_filtered", 2);
p([
  d()
], l.prototype, "_manager", 2);
l = p([
  K("umb-block-catalogue-modal")
], l);
const D = l, lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbBlockCatalogueModalElement() {
    return l;
  },
  default: D
}, Symbol.toStringTag, { value: "Module" }));
export {
  rt as U,
  S as a,
  l as b,
  lt as c
};
//# sourceMappingURL=block-catalogue-modal.element-1MlNjslD.js.map
