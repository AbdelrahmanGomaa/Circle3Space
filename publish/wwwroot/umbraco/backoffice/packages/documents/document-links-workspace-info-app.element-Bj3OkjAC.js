import { UmbDocumentUrlRepository as S } from "./document-url.repository-CzVCI_eW.js";
import { g as I } from "./manifests-BUr6Ff2j.js";
import { when as M, html as u, repeat as B, nothing as O, css as G, state as _, customElement as X } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as Y } from "@umbraco-cms/backoffice/lit-element";
import { UmbRequestReloadStructureForEntityEvent as C } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as F } from "@umbraco-cms/backoffice/action";
import { observeMultiple as K } from "@umbraco-cms/backoffice/observable-api";
import { DocumentVariantStateModel as w } from "@umbraco-cms/backoffice/external/backend-api";
import { debounce as V } from "@umbraco-cms/backoffice/utils";
import { UMB_APP_LANGUAGE_CONTEXT as H } from "@umbraco-cms/backoffice/language";
var J = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, P = (t) => {
  throw TypeError(t);
}, h = (t, e, i, l) => {
  for (var o = l > 1 ? void 0 : l ? Q(e, i) : e, d = t.length - 1, y; d >= 0; d--)
    (y = t[d]) && (o = (l ? y(e, i, o) : y(o)) || o);
  return l && o && J(e, i, o), o;
}, U = (t, e, i) => e.has(t) || P("Cannot " + i), r = (t, e, i) => (U(t, e, "read from private field"), i ? i.call(t) : e.get(t)), c = (t, e, i) => e.has(t) ? P("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), g = (t, e, i, l) => (U(t, e, "write to private field"), e.set(t, i), i), s = (t, e, i) => (U(t, e, "access private method"), i), L, v, f, p, n, k, W, b, q, T, m, A, D, $, R, x, z, E, N;
let a = class extends Y {
  constructor() {
    super(), c(this, n), c(this, L, new S(this)), this._isNew = !1, this._loading = !1, this._links = [], c(this, v, []), c(this, f), c(this, p), c(this, T, V(() => s(this, n, b).call(this), 50)), c(this, m, (t) => {
      t.getUnique() === r(this, f)?.getUnique() && t.getEntityType() === r(this, f).getEntityType() && r(this, T).call(this);
    }), this.consumeContext(F, (t) => {
      g(this, p, t), r(this, p).removeEventListener(
        C.TYPE,
        r(this, m)
      ), r(this, p).addEventListener(
        C.TYPE,
        r(this, m)
      );
    }), this.consumeContext(I, (t) => {
      g(this, f, t), this.observe(K([t.isNew, t.unique]), ([e, i]) => {
        i && (this._isNew = e === !0, i !== this._unique && (this._unique = i, s(this, n, b).call(this)));
      }), this.observe(t.variantOptions, (e) => {
        this._variantOptions = e, s(this, n, k).call(this);
      });
    }), this.consumeContext(H, (t) => {
      this.observe(t.appDefaultLanguage, (e) => {
        this._defaultCulture = e?.unique, s(this, n, k).call(this);
      });
    });
  }
  render() {
    return u`
			<umb-workspace-info-app-layout headline="#general_links">
				${M(
      this._loading,
      () => s(this, n, A).call(this),
      () => s(this, n, D).call(this)
    )}
			</umb-workspace-info-app-layout>
		`;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), r(this, p)?.removeEventListener(
      C.TYPE,
      r(this, m)
    );
  }
};
L = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
k = function() {
  const t = r(this, v).map((e) => {
    const i = e.culture ?? this._defaultCulture ?? "", l = e.url, o = this._variantOptions?.find((d) => d.culture === i)?.variant?.state;
    return { culture: i, url: l, state: o };
  });
  this._links = t;
};
W = function(t) {
  return !t || t.length === 0 ? t : t.includes(".") && !t.includes("//") ? "//" + t : t;
};
b = async function() {
  if (this._isNew || !this._unique) return;
  this._loading = !0, g(this, v, []);
  const { data: t } = await r(this, L).requestItems([this._unique]);
  if (t?.length) {
    const e = t[0];
    g(this, v, e.urls), s(this, n, k).call(this);
  }
  this._loading = !1;
};
q = function(t) {
  switch (t) {
    case null:
    case void 0:
    case w.NOT_CREATED:
      return "content_notCreated";
    case w.DRAFT:
      return "content_itemNotPublished";
    case w.PUBLISHED:
      return "content_routeErrorCannotRoute";
    default:
      return "content_parentNotPublishedAnomaly";
  }
};
T = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
A = function() {
  return u`<div id="loader-container"><uui-loader></uui-loader></div>`;
};
D = function() {
  return u`
			${M(
    this._isNew,
    () => s(this, n, $).call(this),
    () => this._links.length === 0 ? s(this, n, z).call(this) : s(this, n, R).call(this)
  )}
		`;
};
$ = function() {
  return u`${s(this, n, E).call(this, null, null)}`;
};
R = function() {
  return u`
			${B(
    this._links,
    (t) => t.url,
    (t) => s(this, n, x).call(this, t)
  )}
		`;
};
x = function(t) {
  return t.url ? u`
			<a class="link-item" href=${s(this, n, W).call(this, t.url)} target="_blank">
				<span>
					${s(this, n, N).call(this, t.culture)}
					<span>${t.url}</span>
				</span>
				<uui-icon name="icon-out"></uui-icon>
			</a>
		` : s(this, n, E).call(this, t.culture, t.state);
};
z = function() {
  return u` ${this._variantOptions?.map(
    (t) => s(this, n, E).call(this, t.culture, t.variant?.state)
  )}`;
};
E = function(t, e) {
  return u`<div class="link-item">
			<span>
				${s(this, n, N).call(this, t)}
				<em><umb-localize key=${s(this, n, q).call(this, e)}></umb-localize></em>
			</span>
		</div>`;
};
N = function(t) {
  return t ? this._links.length === 1 ? O : u`<span class="culture">${t}</span>` : O;
};
a.styles = [
  G`
			uui-box {
				--uui-box-default-padding: 0;
			}

			#loader-container {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: var(--uui-size-space-2);
			}

			.link-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				gap: var(--uui-size-6);
				padding: var(--uui-size-space-4) var(--uui-size-space-5);

				&:is(a) {
					cursor: pointer;
					color: inherit;
					text-decoration: none;
				}

				&:is(a):hover {
					background: var(--uui-color-divider);
				}

				& > span {
					display: flex;
					align-items: center;
					gap: var(--uui-size-6);
				}

				.culture {
					color: var(--uui-color-divider-emphasis);
				}
			}
		`
];
h([
  _()
], a.prototype, "_isNew", 2);
h([
  _()
], a.prototype, "_unique", 2);
h([
  _()
], a.prototype, "_variantOptions", 2);
h([
  _()
], a.prototype, "_loading", 2);
h([
  _()
], a.prototype, "_links", 2);
h([
  _()
], a.prototype, "_defaultCulture", 2);
a = h([
  X("umb-document-links-workspace-info-app")
], a);
const ut = a;
export {
  a as UmbDocumentLinksWorkspaceInfoAppElement,
  ut as default
};
//# sourceMappingURL=document-links-workspace-info-app.element-Bj3OkjAC.js.map
