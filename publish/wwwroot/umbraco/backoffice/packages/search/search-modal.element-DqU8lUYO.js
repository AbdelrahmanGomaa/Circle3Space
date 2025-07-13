import { UmbTextStyles as q } from "@umbraco-cms/backoffice/style";
import { css as M, property as T, customElement as F, nothing as A, html as n, repeat as D, query as I, state as _ } from "@umbraco-cms/backoffice/external/lit";
import { umbExtensionsRegistry as ee } from "@umbraco-cms/backoffice/extension-registry";
import { UmbLitElement as H } from "@umbraco-cms/backoffice/lit-element";
import { UmbExtensionsManifestInitializer as te, createExtensionApi as re } from "@umbraco-cms/backoffice/extension-api";
var ie = Object.defineProperty, se = Object.getOwnPropertyDescriptor, L = (e) => {
  throw TypeError(e);
}, O = (e, t, r, o) => {
  for (var s = o > 1 ? void 0 : o ? se(t, r) : t, u = e.length - 1, h; u >= 0; u--)
    (h = e[u]) && (s = (o ? h(t, r, s) : h(s)) || s);
  return o && s && ie(t, r, s), s;
}, ae = (e, t, r) => t.has(e) || L("Cannot " + r), oe = (e, t, r) => t.has(e) ? L("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), ne = (e, t, r) => (ae(e, t, "access private method"), r), b, U;
const ce = "umb-search-result-item";
let y = class extends H {
  constructor() {
    super(...arguments), oe(this, b);
  }
  render() {
    return this.item ? n`
			<span class="item-icon">
				${this.item.icon ? n`<umb-icon name="${this.item.icon}"></umb-icon>` : ne(this, b, U).call(this)}
			</span>
			<span class="item-name"> ${this.item.name} </span>
		` : A;
  }
};
b = /* @__PURE__ */ new WeakSet();
U = function() {
  return n`
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
				<path fill="none" d="M0 0h24v24H0z" />
				<path
					fill="currentColor"
					d="M7.784 14l.42-4H4V8h4.415l.525-5h2.011l-.525 5h3.989l.525-5h2.011l-.525 5H20v2h-3.784l-.42 4H20v2h-4.415l-.525 5h-2.011l.525-5H9.585l-.525 5H7.049l.525-5H4v-2h3.784zm2.011 0h3.99l.42-4h-3.99l-.42 4z" />
			</svg>
		`;
};
y.styles = [
  q,
  M`
			:host {
				padding: var(--uui-size-space-3) var(--uui-size-space-5);
				border-radius: var(--uui-border-radius);
				display: grid;
				grid-template-columns: var(--uui-size-space-6) 1fr var(--uui-size-space-5);
				align-items: center;
				width: 100%;
				outline-offset: -3px;
			}
			.item-icon {
				margin-bottom: auto;
				margin-top: 5px;
			}
			.item-icon {
				opacity: 0.4;
			}
			.item-name {
				display: flex;
				flex-direction: column;
			}
			.item-icon > * {
				height: 1rem;
				display: flex;
				width: min-content;
			}
			a {
				text-decoration: none;
				color: inherit;
			}
		`
];
O([
  T({ type: Object })
], y.prototype, "item", 2);
y = O([
  F(ce)
], y);
var le = Object.defineProperty, ue = Object.getOwnPropertyDescriptor, W = (e) => {
  throw TypeError(e);
}, d = (e, t, r, o) => {
  for (var s = o > 1 ? void 0 : o ? ue(t, r) : t, u = e.length - 1, h; u >= 0; u--)
    (h = e[u]) && (s = (o ? h(t, r, s) : h(s)) || s);
  return o && s && le(t, r, s), s;
}, P = (e, t, r) => t.has(e) || W("Cannot " + r), p = (e, t, r) => (P(e, t, "read from private field"), r ? r.call(e) : t.get(e)), m = (e, t, r) => t.has(e) ? W("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), z = (e, t, r, o) => (P(e, t, "write to private field"), t.set(e, r), r), a = (e, t, r) => (P(e, t, "access private method"), r), v, x, C, g, i, N, k, w, $, j, R, S, B, E, K, V, G, J, Q, X;
let c = class extends H {
  constructor() {
    super(), m(this, i), this._search = "", this._searchResults = [], this._searchProviders = [], this._loading = !1, m(this, v, 0), m(this, x), m(this, C, 300), m(this, g, (e) => {
      e.composedPath().includes(this) || this.modalContext?.reject();
    }), a(this, i, N).call(this);
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("keydown", a(this, i, E)), document.addEventListener("click", p(this, g)), requestAnimationFrame(() => {
      a(this, i, w).call(this);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("keydown", a(this, i, E)), document.removeEventListener("click", p(this, g));
  }
  render() {
    return n`
			<div id="top">
				${a(this, i, K).call(this)}
				<div id="input-wrapper">
					<div id="input-wrapper-fake-cursor" aria-hidden="true"></div>
					<input
						value=${this._search}
						@input=${a(this, i, B)}
						@blur=${() => a(this, i, $).call(this, !0)}
						@focus=${() => a(this, i, $).call(this, !1)}
						type="text"
						placeholder=${this.localize.term("placeholders_search")}
						autocomplete="off" />
				</div>
			</div>

			${a(this, i, V).call(this)}
			${this._search ? n`<div id="main">${this._searchResults.length > 0 ? a(this, i, G).call(this) : a(this, i, Q).call(this)}</div>` : a(this, i, X).call(this)}
		`;
  }
};
v = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
N = function() {
  new te(this, ee, "searchProvider", null, async (e) => {
    const t = [];
    for (const r of e) {
      const o = await re(this, r.manifest);
      o && t.push({
        name: r.manifest.meta?.label || r.manifest.name,
        api: o,
        alias: r.alias
      });
    }
    this._searchProviders = t, this._searchProviders.length > 0 && (this._currentProvider = this._searchProviders[0]);
  });
};
k = async function(e) {
  this.shadowRoot?.querySelector(
    `a[data-item-index="${p(this, v)}"]`
  )?.classList.remove("active"), z(this, v, e);
  const r = this.shadowRoot?.querySelector(`a[data-item-index="${e}"]`);
  r?.classList.add("active"), r && this._searchResults.length && r.focus();
};
w = function() {
  this._input.focus();
};
$ = async function(e) {
  if (e) {
    await new Promise((r) => requestAnimationFrame(r));
    const t = this._search.substring(0, this._input.selectionStart ?? 0);
    this._inputFakeCursor.textContent = t, this._inputFakeCursor.style.display = "block";
  } else
    this._inputFakeCursor.style.display = "none";
};
j = function(e) {
  this._currentProvider !== e && (this._currentProvider = e, a(this, i, w).call(this), this._loading = !0, this._searchResults = [], a(this, i, R).call(this));
};
R = async function() {
  if (this._search && this._currentProvider?.api) {
    const { data: e } = await this._currentProvider.api.search({ query: this._search });
    if (!e) return;
    this._searchResults = e.items;
  } else
    this._searchResults = [];
  this._loading = !1, z(this, v, -1);
};
S = function(e) {
  e instanceof KeyboardEvent && e.key !== "Enter" || requestAnimationFrame(() => {
    this.modalContext?.reject();
  });
};
B = function(e) {
  const t = e.target;
  if (this._search = t.value.trim(), clearTimeout(p(this, x)), !this._search) {
    this._loading = !1, this._searchResults = [];
    return;
  }
  this._loading = !0, z(this, x, setTimeout(() => a(this, i, R).call(this), p(this, C)));
};
E = function(e) {
  const t = this.shadowRoot;
  if (t) {
    if (e.key === "Tab") {
      const r = (l) => l === t.querySelector(".search-provider:first-child"), o = (l) => l === t.querySelector(".search-provider:last-child"), s = (l) => l?.focus(), u = () => {
        const l = t.querySelectorAll(".search-provider") || [];
        return Array.from(l).some((Z) => Z === t.activeElement);
      }, h = () => {
        const l = t.querySelectorAll(".search-provider") || [];
        return l[l.length - 1] === t.activeElement;
      }, Y = () => (t.querySelectorAll(".search-provider") || [])[0] === t.activeElement, f = t.querySelector(".search-provider.active");
      if (!f) return;
      if (e.shiftKey) {
        if (u()) {
          Y() && (s(t.querySelector(".search-provider:last-child")), e.preventDefault());
          return;
        }
        if (r(f)) {
          s(t.querySelector(".search-provider:last-child")), e.preventDefault();
          return;
        }
        s(f);
      } else {
        if (u()) {
          h() && (s(t.querySelector(".search-provider:first-child")), e.preventDefault());
          return;
        }
        if (o(f)) {
          s(t.querySelector(".search-provider:first-child")), e.preventDefault();
          return;
        }
        s(f);
      }
    }
    switch (e.key) {
      case "Tab":
      case "Shift":
      case "Escape":
      case "Enter":
        break;
      case "ArrowDown":
        e.preventDefault(), a(this, i, k).call(this, Math.min(p(this, v) + 1, this._searchResults.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault(), a(this, i, k).call(this, Math.max(p(this, v) - 1, 0));
        break;
      default:
        if (this._input === t.activeElement) return;
        a(this, i, w).call(this);
        break;
    }
  }
};
K = function() {
  return n` <div id="search-icon">
			${this._loading ? n`<uui-loader-circle></uui-loader-circle>` : n`<uui-icon name="search"></uui-icon>`}
		</div>`;
};
V = function() {
  return n`<div id="search-providers">
			${D(
    this._searchProviders,
    (e) => e,
    (e) => n`<button
						data-provider-alias=${e.alias}
						@click=${() => a(this, i, j).call(this, e)}
						@keydown=${() => ""}
						class="search-provider ${this._currentProvider?.alias === e.alias ? "active" : ""}">
						${e.name}
					</button>`
  )}
		</div> `;
};
G = function() {
  return D(
    this._searchResults,
    (e) => e.unique,
    (e, t) => a(this, i, J).call(this, e, t)
  );
};
J = function(e, t) {
  return n`
			<a
				href=${e.href}
				data-item-index=${t}
				class="search-item"
				@click=${a(this, i, S)}
				@keydown=${a(this, i, S)}>
				<umb-extension-slot
					type="searchResultItem"
					.props=${{ item: e }}
					.filter=${(r) => r.forEntityTypes.includes(e.entityType)}
					default-element="umb-search-result-item"></umb-extension-slot>
			</a>
		`;
};
Q = function() {
  return this._loading ? A : n`<div id="no-results">${this.localize.term("general_searchNoResult")}</div>`;
};
X = function() {
  return n`<div id="navigation-tips">
			<div class="navigation-tips-key" style="grid-column: span 2;">Tab</div>
			<span>${this.localize.term("globalSearch_navigateSearchProviders")}</span>
			<div class="navigation-tips-key">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round">
					<path d="m5 12 7-7 7 7" />
					<path d="M12 19V5" />
				</svg>
			</div>
			<div class="navigation-tips-key">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round">
					<path d="M12 5v14" />
					<path d="m19 12-7 7-7-7" />
				</svg>
			</div>
			<span>${this.localize.term("globalSearch_navigateSearchResults")}</span>
		</div>`;
};
c.styles = [
  q,
  M`
			:host {
				display: flex;
				flex-direction: column;
				width: min(610px, 100vw);
				height: max(600px, 80dvh);
				max-height: 100dvh;
				background-color: var(--uui-color-surface);
				box-sizing: border-box;
				color: var(--uui-color-text);
				font-size: 1rem;
				padding-bottom: var(--uui-size-space-2);
			}
			#navigation-tips {
				display: grid;
				grid-template-columns: 50px 50px auto;
				column-gap: var(--uui-size-space-3);
				row-gap: var(--uui-size-space-4);
				align-items: center;
				color: var(--uui-color-border-emphasis);
				margin-top: var(--uui-size-layout-3);
				margin-inline: auto;
			}
			.navigation-tips-key {
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: var(--uui-border-radius);
				border: 1px solid var(--uui-color-border);
				height: 36px;
				font-size: 0.9rem;
				font-weight: bold;
			}
			#navigation-tips .navigation-tips-key + span {
				margin-left: var(--uui-size-space-2);
			}
			#top {
				background-color: var(--uui-color-surface);
				display: flex;
				height: 48px;
				flex-shrink: 0;
			}
			#main {
				display: flex;
				flex-direction: column;
				height: 100%;
				overflow: auto;
			}
			#search-providers {
				display: flex;
				flex-wrap: wrap;
				gap: var(--uui-size-space-2);
				padding: 0 var(--uui-size-space-5);
				padding-bottom: var(--uui-size-space-2);
			}
			.search-provider {
				padding: var(--uui-size-space-3) var(--uui-size-space-4);
				background: var(--uui-color-surface-alt);
				line-height: 1;
				white-space: nowrap;
				border-radius: var(--uui-border-radius);
				color: var(--uui-color-interactive);
				cursor: pointer;
				border: 2px solid transparent;
			}
			.search-provider:hover {
				background: var(--uui-color-surface-emphasis);
				color: var(--uui-color-interactive-emphasis);
			}
			.search-provider.active {
				background: var(--uui-color-focus);
				color: var(--uui-color-selected-contrast);
				border-color: transparent;
			}
			.search-provider.active:focus {
				outline-offset: -4px;
				outline-color: var(--uui-color-focus);
			}
			input {
				all: unset;
				height: 100%;
				width: 100%;
			}
			#input-wrapper {
				width: 100%;
				position: relative;
			}
			#input-wrapper-fake-cursor {
				position: absolute;
				left: 0;
				border-right: 1px solid var(--uui-color-text);
				height: 1.2rem;
				color: transparent;
				user-select: none;
				pointer-events: none;
				bottom: 14px;
				animation: blink-animation 1s infinite;
			}
			@keyframes blink-animation {
				0%,
				50% {
					border-color: var(--uui-color-text);
				}
				51%,
				100% {
					border-color: transparent;
				}
			}
			button {
				font-family: unset;
				font-size: unset;
				cursor: pointer;
			}
			#search-icon {
				display: flex;
				align-items: center;
				justify-content: center;
				aspect-ratio: 1;
				height: 100%;
			}
			#no-results {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				height: 100%;
				width: 100%;
				margin-top: var(--uui-size-space-5);
				color: var(--uui-color-text-alt);
				margin: var(--uui-size-space-5) 0;
			}
			.search-item {
				color: var(--uui-color-text);
				text-decoration: none;
				outline-offset: -3px;
				display: flex;
			}
			.search-item:hover {
				background: var(--uui-color-surface-emphasis);
				color: var(--uui-color-interactive-emphasis);
			}
			.search-item:focus {
				outline: 2px solid var(--uui-color-interactive-emphasis);
				border-radius: 6px;
				outline-offset: -4px;
			}
			.search-item.active:not(:focus-within) {
				outline: 2px solid var(--uui-color-border);
				border-radius: 6px;
				outline-offset: -4px;
			}
		`
];
d([
  I("#input-wrapper-fake-cursor")
], c.prototype, "_inputFakeCursor", 2);
d([
  I("input")
], c.prototype, "_input", 2);
d([
  T({ attribute: !1 })
], c.prototype, "modalContext", 2);
d([
  _()
], c.prototype, "_search", 2);
d([
  _()
], c.prototype, "_searchResults", 2);
d([
  _()
], c.prototype, "_searchProviders", 2);
d([
  _()
], c.prototype, "_currentProvider", 2);
d([
  _()
], c.prototype, "_loading", 2);
c = d([
  F("umb-search-modal")
], c);
const me = c;
export {
  c as UmbSearchModalElement,
  me as default
};
//# sourceMappingURL=search-modal.element-DqU8lUYO.js.map
