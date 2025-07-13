import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
import { nothing as w, html as c, css as y, property as x, state as m, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as H } from "@umbraco-cms/backoffice/style";
import { UMB_APP_LANGUAGE_CONTEXT as U } from "@umbraco-cms/backoffice/language";
var z = Object.defineProperty, O = Object.getOwnPropertyDescriptor, f = (t) => {
  throw TypeError(t);
}, l = (t, e, i, o) => {
  for (var n = o > 1 ? void 0 : o ? O(e, i) : e, u = t.length - 1, h; u >= 0; u--)
    (h = t[u]) && (n = (o ? h(e, i, n) : h(n)) || n);
  return o && n && z(e, i, n), n;
}, P = (t, e, i) => e.has(t) || f("Cannot " + i), A = (t, e, i) => e.has(t) ? f("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), a = (t, e, i) => (P(t, e, "access private method"), i), r, v, _, p, d, g, b;
const L = "umb-document-search-result-item";
let s = class extends C {
  constructor() {
    super(), A(this, r), this.consumeContext(U, (t) => {
      a(this, r, v).call(this, t), a(this, r, _).call(this, t);
    });
  }
  render() {
    return this.item ? c`
			<span class="item-icon">
				${this.item.icon ? c`<umb-icon name="${this.item.icon}"></umb-icon>` : a(this, r, b).call(this)}
			</span>
			<span class="item-name"> ${a(this, r, g).call(this)} </span>
		` : w;
  }
};
r = /* @__PURE__ */ new WeakSet();
v = function(t) {
  this.observe(t.appLanguageCulture, (e) => {
    this._currentCulture = e, this._variant = a(this, r, p).call(this, e);
  });
};
_ = function(t) {
  this.observe(t.appDefaultLanguage, (e) => {
    this._defaultCulture = e?.unique;
  });
};
p = function(t) {
  return this.item?.variants.find((e) => e.culture === t);
};
d = function() {
  return this.item?.variants[0]?.culture === null;
};
g = function() {
  if (a(this, r, d).call(this))
    return this.item?.name ?? "Unknown";
  const t = a(this, r, p).call(this, this._defaultCulture)?.name ?? this.item?.name ?? "Unknown";
  return this._variant?.name ?? `(${t})`;
};
b = function() {
  return c`
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
				<path fill="none" d="M0 0h24v24H0z" />
				<path
					fill="currentColor"
					d="M7.784 14l.42-4H4V8h4.415l.525-5h2.011l-.525 5h3.989l.525-5h2.011l-.525 5H20v2h-3.784l-.42 4H20v2h-4.415l-.525 5h-2.011l.525-5H9.585l-.525 5H7.049l.525-5H4v-2h3.784zm2.011 0h3.99l.42-4h-3.99l-.42 4z" />
			</svg>
		`;
};
s.styles = [
  H,
  y`
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
l([
  x({ type: Object })
], s.prototype, "item", 2);
l([
  m()
], s.prototype, "_currentCulture", 2);
l([
  m()
], s.prototype, "_defaultCulture", 2);
l([
  m()
], s.prototype, "_variant", 2);
s = l([
  E(L)
], s);
export {
  s as UmbSearchResultItemElement,
  s as element
};
//# sourceMappingURL=document-search-result-item.element-BYVoVkWK.js.map
