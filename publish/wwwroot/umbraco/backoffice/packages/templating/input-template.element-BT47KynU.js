import { html as v, css as x, property as n, customElement as U, state as k } from "@umbraco-cms/backoffice/external/lit";
import { UUIFormControlMixin as w } from "@umbraco-cms/backoffice/external/uui";
import { UmbLitElement as T } from "@umbraco-cms/backoffice/lit-element";
import { UmbTemplateItemRepository as z } from "./template-item.repository-D119n8Im.js";
import "./query-builder-modal.token-DbHeQuy4.js";
import { UmbModalToken as R, UMB_MODAL_MANAGER_CONTEXT as D } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL_ALIAS as I } from "@umbraco-cms/backoffice/tree";
import { UMB_WORKSPACE_MODAL as L } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as B } from "@umbraco-cms/backoffice/router";
import { UmbChangeEvent as _ } from "@umbraco-cms/backoffice/event";
var W = Object.defineProperty, F = Object.getOwnPropertyDescriptor, E = (e) => {
  throw TypeError(e);
}, f = (e, t, i, o) => {
  for (var a = o > 1 ? void 0 : o ? F(t, i) : t, l = e.length - 1, u; l >= 0; l--)
    (u = e[l]) && (a = (o ? u(t, i, a) : u(a)) || a);
  return o && a && W(t, i, a), a;
}, N = (e, t, i) => t.has(e) || E("Cannot " + i), K = (e, t, i) => t.has(e) ? E("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), b = (e, t, i) => (N(e, t, "access private method"), i), m, C, $;
let c = class extends w(T, "") {
  constructor() {
    super(...arguments), K(this, m), this.name = "", this.default = !1, this._id = "";
  }
  set id(e) {
    this._id = e, super.value = e;
  }
  get id() {
    return this._id;
  }
  getFormElement() {
  }
  render() {
    return v`<div id="card">
			<button id="open-part" aria-label="Open ${this.name}" @click="${b(this, m, $)}">
				<uui-icon class="logo" name="icon-document-html"></uui-icon>
				<strong>${this.name.length ? this.name : "Untitled template"}</strong>
			</button>
			<uui-button
				id="bottom"
				label="${this.localize.term("settings_defaulttemplate")}"
				?disabled="${this.default}"
				@click="${b(this, m, C)}">
				(${this.localize.term(this.default ? "settings_defaulttemplate" : "grid_setAsDefault")})
			</uui-button>
			<slot name="actions"></slot>
		</div>`;
  }
};
m = /* @__PURE__ */ new WeakSet();
C = function(e) {
  e.preventDefault(), e.stopPropagation(), this.dispatchEvent(new CustomEvent("change", { bubbles: !1, composed: !0 }));
};
$ = function(e) {
  e.preventDefault(), e.stopPropagation(), this.dispatchEvent(new CustomEvent("open", { bubbles: !1, composed: !0 }));
};
c.styles = [
  x`
			:host {
				box-sizing: border-box;
				display: contents;
				position: relative;

				height: 100%;
				border: 1px solid red;
				margin: auto;
			}

			#card {
				box-sizing: border-box;
				width: 100%;
				max-width: 180px;
				position: relative;
				display: flex;
				flex-direction: column;
				align-items: stretch;
				border-radius: var(--uui-border-radius);
				border: 1px solid var(--uui-color-divider-emphasis);
				background-color: var(--uui-color-background);
				padding: var(--uui-size-4);
			}

			#bottom {
				margin-top: auto;
			}

			slot[name='actions'] {
				position: absolute;
				top: var(--uui-size-4);
				right: var(--uui-size-4);
				display: flex;
				justify-content: right;

				opacity: 0;
				transition: opacity 120ms;
			}

			:host(:focus) slot[name='actions'],
			:host(:focus-within) slot[name='actions'],
			:host(:hover) slot[name='actions'] {
				opacity: 1;
			}

			#open-part {
				border: none;
				outline: none;
				background: none;
				text-align: center;
				display: flex;
				flex-direction: column;
				font-weight: 700;
				align-items: center;
				cursor: pointer;
				flex-grow: 1;
				font-family: inherit;
			}

			#open-part,
			#card {
				gap: var(--uui-size-space-2);
			}

			#open-part strong {
				flex-grow: 1;
				display: flex;
				align-items: center;
			}

			:host([disabled]) #open-part {
				pointer-events: none;
			}

			#open-part:focus-visible,
			#open-part:focus-visible uui-icon,
			#open-part:hover,
			#open-part:hover uui-icon {
				text-decoration: underline;
				color: var(--uui-color-interactive-emphasis);
			}

			#open-part uui-icon {
				font-size: var(--uui-size-20);
				color: var(--uui-color-divider-emphasis);
			}
		`
];
f([
  n({ type: String })
], c.prototype, "name", 2);
f([
  n({ type: Boolean, reflect: !0 })
], c.prototype, "default", 2);
f([
  n({ type: String })
], c.prototype, "id", 1);
c = f([
  U("umb-template-card")
], c);
const G = new R(
  I,
  {
    modal: {
      type: "sidebar",
      size: "small"
    },
    data: {
      hideTreeRoot: !0,
      treeAlias: "Umb.Tree.Template"
    }
  }
);
var V = Object.defineProperty, X = Object.getOwnPropertyDescriptor, M = (e) => {
  throw TypeError(e);
}, r = (e, t, i, o) => {
  for (var a = o > 1 ? void 0 : o ? X(t, i) : t, l = e.length - 1, u; l >= 0; l--)
    (u = e[l]) && (a = (o ? u(t, i, a) : u(a)) || a);
  return o && a && V(t, i, a), a;
}, g = (e, t, i) => t.has(e) || M("Cannot " + i), H = (e, t, i) => (g(e, t, "read from private field"), t.get(e)), y = (e, t, i) => t.has(e) ? M("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), J = (e, t, i, o) => (g(e, t, "write to private field"), t.set(e, i), i), d = (e, t, i) => (g(e, t, "access private method"), i), h, p, q, P, A, O, S;
let s = class extends w(T, "") {
  constructor() {
    super(), y(this, p), this.minMessage = "This field needs more items", this.maxMessage = "This field exceeds the allowed amount of items", this._selection = [], this._defaultUnique = "", this._templateItemRepository = new z(this), this._pickedTemplates = [], y(this, h, ""), new B(this, L).addAdditionalPath("template").onSetup(() => ({ data: { entityType: "template", preset: {} } })).observeRouteBuilder((e) => {
      J(this, h, e({}));
    });
  }
  set selection(e) {
    this._selection = e ?? [], d(this, p, q).call(this);
  }
  get selection() {
    return this._selection;
  }
  set defaultUnique(e) {
    this._defaultUnique = e, super.value = e;
  }
  get defaultUnique() {
    return this._defaultUnique;
  }
  getFormElement() {
    return this;
  }
  render() {
    return v`
			${this._pickedTemplates.map(
      (e) => v`
					<umb-template-card
						.id=${e.unique}
						.name=${e.name}
						@change=${d(this, p, A)}
						@open=${() => window.history.pushState({}, "", H(this, h) + "edit/" + e.unique)}
						?default=${e.unique === this.defaultUnique}>
						<uui-button
							slot="actions"
							compact
							label=${this.localize.term("general_remove") + " " + e.name}
							@click=${() => d(this, p, S).call(this, e.unique ?? "")}>
							<uui-icon name="icon-trash"></uui-icon>
						</uui-button>
					</umb-template-card>
				`
    )}
			<uui-button
				id="btn-add"
				look="placeholder"
				label=${this.localize.term("general_choose")}
				@click=${d(this, p, O)}></uui-button>
		`;
  }
};
h = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
q = async function() {
  this.observe(
    (await this._templateItemRepository.requestItems(this._selection)).asObservable(),
    (e) => {
      const t = this._pickedTemplates;
      this._pickedTemplates = e, this.requestUpdate("_pickedTemplates", t);
    },
    "_observeTemplates"
  );
};
P = function(e) {
  this.selection = [...this.selection ?? [], ...e], !this.defaultUnique && this.selection.length && (this.defaultUnique = this.selection[0]), this.dispatchEvent(new _());
};
A = function(e) {
  e.stopPropagation();
  const t = e.target.value;
  this.defaultUnique = t, this.dispatchEvent(new _());
};
O = async function() {
  const i = await (await this.getContext(D)).open(this, G, {
    data: {
      multiple: !0,
      pickableFilter: (a) => a.unique !== null && !this._selection.includes(a.unique)
    }
  })?.onSubmit().catch(() => {
  });
  if (!i?.selection) return;
  const o = i.selection.filter((a) => a !== null);
  o.length && d(this, p, P).call(this, o);
};
S = function(e) {
  this.selection = this._selection.filter((t) => t !== e), e === this.defaultUnique && (this.selection.length ? this.defaultUnique = this.selection[0] : this.defaultUnique = ""), this.dispatchEvent(new _());
};
s.styles = [
  x`
			:host {
				display: grid;
				gap: var(--uui-size-space-3);
				grid-template-columns: repeat(auto-fill, minmax(var(--umb-card-medium-min-width), 1fr));
				grid-template-rows: repeat(auto-fill, minmax(var(--umb-card-medium-min-width), 1fr));
			}

			#btn-add {
				text-align: center;
				height: 100%;
			}
		`
];
r([
  n({ type: Number })
], s.prototype, "min", 2);
r([
  n({ type: String, attribute: "min-message" })
], s.prototype, "minMessage", 2);
r([
  n({ type: Number })
], s.prototype, "max", 2);
r([
  n({ type: String, attribute: "min-message" })
], s.prototype, "maxMessage", 2);
r([
  n({ type: Array })
], s.prototype, "selection", 1);
r([
  n({ type: String })
], s.prototype, "defaultUnique", 1);
r([
  k()
], s.prototype, "_pickedTemplates", 2);
s = r([
  U("umb-input-template")
], s);
export {
  G as U,
  c as a,
  s as b
};
//# sourceMappingURL=input-template.element-BT47KynU.js.map
