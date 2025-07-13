import { DocumentService as w } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as y } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as O } from "@umbraco-cms/backoffice/class-api";
import { UMB_NOTIFICATION_CONTEXT as B } from "@umbraco-cms/backoffice/notification";
import { css as T, state as g, query as L, customElement as P, html as r, repeat as $ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLanguageCollectionRepository as W } from "@umbraco-cms/backoffice/language";
import { UmbModalBaseElement as R } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as F } from "@umbraco-cms/backoffice/style";
class V {
  #t;
  /**
   * Creates an instance of UmbDocumentCultureAndHostnamesServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentCultureAndHostnamesServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Fetches the Culture and Hostnames for the given Document unique
   * @param {string} unique
   * @memberof UmbDocumentCultureAndHostnamesServerDataSource
   */
  async read(t) {
    if (!t) throw new Error("Unique is missing");
    return y(this.#t, w.getDocumentByIdDomains({ id: t }));
  }
  /**
   * Updates Culture and Hostnames for the given Document unique
   * @param {string} unique
   * @param {UpdateDomainsRequestModel} data
   * @memberof UmbDocumentCultureAndHostnamesServerDataSource
   */
  async update(t, o) {
    if (!t) throw new Error("Unique is missing");
    return y(this.#t, w.putDocumentByIdDomains({ id: t, requestBody: o }));
  }
}
class j extends O {
  #t = new V(this);
  #e;
  constructor(t) {
    super(t), this.consumeContext(B, (o) => {
      this.#e = o;
    });
  }
  async readCultureAndHostnames(t) {
    if (!t) throw new Error("Unique is missing");
    const { data: o, error: n } = await this.#t.read(t);
    return n ? { error: n } : { data: o };
  }
  async updateCultureAndHostnames(t, o) {
    if (!t) throw new Error("Unique is missing");
    if (!o) throw new Error("Data is missing");
    const { error: n } = await this.#t.update(t, o);
    if (!n) {
      const s = { data: { message: "Cultures and hostnames saved" } };
      this.#e?.peek("positive", s);
    }
    return { error: n };
  }
}
var G = Object.defineProperty, X = Object.getOwnPropertyDescriptor, D = (e) => {
  throw TypeError(e);
}, d = (e, t, o, n) => {
  for (var s = n > 1 ? void 0 : n ? X(t, o) : t, p = e.length - 1, _; p >= 0; p--)
    (_ = e[p]) && (s = (n ? _(t, o, s) : _(s)) || s);
  return n && s && G(t, o, s), s;
}, b = (e, t, o) => t.has(e) || D("Cannot " + o), l = (e, t, o) => (b(e, t, "read from private field"), t.get(e)), c = (e, t, o) => t.has(e) ? D("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), J = (e, t, o, n) => (b(e, t, "write to private field"), t.set(e, o), o), a = (e, t, o) => (b(e, t, "access private method"), o), h, v, m, i, x, z, M, E, U, A, I, H, f, S, k, q, C, N;
let u = class extends R {
  constructor() {
    super(...arguments), c(this, i), c(this, h, new j(this)), c(this, v, new W(this)), c(this, m), this._languageModel = [], this._domains = [];
  }
  // Init
  firstUpdated() {
    J(this, m, this.data?.unique), a(this, i, z).call(this), a(this, i, x).call(this);
  }
  // Renders
  render() {
    return r`
			<umb-body-layout headline=${this.localize.term("actions_assigndomain")}>
				${a(this, i, S).call(this)} ${a(this, i, k).call(this)}
				<uui-button
					slot="actions"
					id="close"
					label=${this.localize.term("general_cancel")}
					@click=${a(this, i, E)}></uui-button>
				<uui-button
					slot="actions"
					id="save"
					look="primary"
					color="positive"
					label=${this.localize.term("buttons_save")}
					@click=${a(this, i, M)}></uui-button>
			</umb-body-layout>
		`;
  }
};
h = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
x = async function() {
  if (!l(this, m)) return;
  const { data: e } = await l(this, h).readCultureAndHostnames(l(this, m));
  e && (this._defaultIsoCode = e.defaultIsoCode, this._domains = e.domains);
};
z = async function() {
  const { data: e } = await l(this, v).requestCollection({});
  e && (this._languageModel = e.items);
};
M = async function() {
  this.value = { defaultIsoCode: this._defaultIsoCode, domains: this._domains }, await l(this, h).updateCultureAndHostnames(l(this, m), this.value), this.modalContext?.submit();
};
E = function() {
  this.modalContext?.reject();
};
U = function(e) {
  const t = e.target.value;
  t === "inherit" ? this._defaultIsoCode = null : this._defaultIsoCode = t;
};
A = function(e, t) {
  const o = e.target.value;
  this._domains = this._domains.map((n, s) => t === s ? { ...n, isoCode: o } : n);
};
I = function(e, t) {
  const o = e.target.value;
  this._domains = this._domains.map((n, s) => t === s ? { ...n, domainName: o } : n);
};
H = async function(e) {
  this._domains = this._domains.filter((t, o) => e !== o);
};
f = function(e) {
  const t = this._languageModel.find((o) => o.isDefault);
  e ? (this.popoverContainerElement?.hidePopover(), this._domains = [...this._domains, { isoCode: t?.unique ?? "", domainName: window.location.host }]) : this._domains = [...this._domains, { isoCode: t?.unique ?? "", domainName: "" }];
};
S = function() {
  return r`
			<uui-box headline=${this.localize.term("assignDomain_setLanguage")}>
				<uui-label for="select">${this.localize.term("assignDomain_language")}</uui-label>
				<uui-combobox
					id="select"
					label=${this.localize.term("assignDomain_language")}
					.value=${this._defaultIsoCode ?? "inherit"}
					@change=${a(this, i, U)}>
					<uui-combobox-list>
						<uui-combobox-list-option .value=${"inherit"}>
							${this.localize.term("assignDomain_inherit")}
						</uui-combobox-list-option>
						${a(this, i, C).call(this)}
					</uui-combobox-list>
				</uui-combobox>
			</uui-box>
		`;
};
k = function() {
  return r`
			<uui-box headline=${this.localize.term("assignDomain_setDomains")}>
				<umb-localize key="assignDomain_domainHelpWithVariants">
					Valid domain names are: "example.com", "www.example.com", "example.com:8080", or
					"https://www.example.com/".<br />Furthermore also one-level paths in domains are supported, eg.
					"example.com/en" or "/en".
				</umb-localize>
				${a(this, i, q).call(this)} ${a(this, i, N).call(this)}
			</uui-box>
		`;
};
q = function() {
  if (this._domains?.length)
    return r`
			<div id="domains">
				${$(
      this._domains,
      (e) => e.isoCode,
      (e, t) => r`
						<uui-input
							label=${this.localize.term("assignDomain_domain")}
							.value=${e.domainName}
							@change=${(o) => a(this, i, I).call(this, o, t)}></uui-input>
						<uui-combobox
							.value=${e.isoCode}
							label=${this.localize.term("assignDomain_language")}
							@change=${(o) => a(this, i, A).call(this, o, t)}>
							<uui-combobox-list> ${a(this, i, C).call(this)} </uui-combobox-list>
						</uui-combobox>
						<uui-button
							look="outline"
							color="danger"
							label=${this.localize.term("assignDomain_remove")}
							@click=${() => a(this, i, H).call(this, t)}>
							<uui-icon name="icon-trash"></uui-icon>
						</uui-button>
					`
    )}
			</div>
		`;
};
C = function() {
  return r`${$(
    this._languageModel,
    (e) => e.unique,
    (e) => r`<uui-combobox-list-option .value=${e.unique}>${e.name}</uui-combobox-list-option>`
  )}`;
};
N = function() {
  return r`
			<uui-button-group>
				<uui-button
					label=${this.localize.term("assignDomain_addNew")}
					look="placeholder"
					@click=${() => a(this, i, f).call(this)}></uui-button>
				<uui-button
					id="dropdown"
					label=${this.localize.term("buttons_select")}
					look="placeholder"
					popovertarget="more-options">
					<uui-icon name="icon-navigation-down"></uui-icon>
				</uui-button>
				<uui-popover-container id="more-options" placement="bottom-end">
					<umb-popover-layout>
						<uui-button
							label=${this.localize.term("assignDomain_addCurrent")}
							@click=${() => a(this, i, f).call(this, !0)}></uui-button>
					</umb-popover-layout>
				</uui-popover-container>
			</uui-button-group>
		`;
};
u.styles = [
  F,
  T`
			uui-button-group {
				width: 100%;
			}

			uui-box:first-child {
				margin-bottom: var(--uui-size-layout-1);
			}

			#dropdown {
				flex-grow: 0;
			}

			#domains {
				margin-top: var(--uui-size-layout-1);
				margin-bottom: var(--uui-size-2);
				display: grid;
				grid-template-columns: 1fr 1fr auto;
				grid-gap: var(--uui-size-1);
			}
		`
];
d([
  g()
], u.prototype, "_languageModel", 2);
d([
  g()
], u.prototype, "_defaultIsoCode", 2);
d([
  g()
], u.prototype, "_domains", 2);
d([
  L("#more-options")
], u.prototype, "popoverContainerElement", 2);
u = d([
  P("umb-culture-and-hostnames-modal")
], u);
const K = u, at = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbCultureAndHostnamesModalElement() {
    return u;
  },
  default: K
}, Symbol.toStringTag, { value: "Module" }));
export {
  u as U,
  j as a,
  at as c
};
//# sourceMappingURL=culture-and-hostnames-modal.element-BYx6mjLk.js.map
