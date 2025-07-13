import { U as N } from "./link-picker-modal.token-D9E3VS6O.js";
import { html as c, nothing as U, repeat as O, ifDefined as P, when as A, css as B, property as u, state as W, customElement as k } from "@umbraco-cms/backoffice/external/lit";
import { simpleHashCode as z } from "@umbraco-cms/backoffice/observable-api";
import { UmbChangeEvent as D } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as L } from "@umbraco-cms/backoffice/lit-element";
import { umbConfirmModal as T } from "@umbraco-cms/backoffice/modal";
import { UmbModalRouteRegistrationController as F } from "@umbraco-cms/backoffice/router";
import { UmbSorterController as K } from "@umbraco-cms/backoffice/sorter";
import { UUIFormControlMixin as V } from "@umbraco-cms/backoffice/external/uui";
var G = Object.defineProperty, H = Object.getOwnPropertyDescriptor, x = (e) => {
  throw TypeError(e);
}, o = (e, t, i, r) => {
  for (var h = r > 1 ? void 0 : r ? H(t, i) : t, g = e.length - 1, _; g >= 0; g--)
    (_ = e[g]) && (h = (r ? _(t, i, h) : _(h)) || h);
  return r && h && G(t, i, h), h;
}, w = (e, t, i) => t.has(e) || x("Cannot " + i), l = (e, t, i) => (w(e, t, "read from private field"), i ? i.call(e) : t.get(e)), m = (e, t, i) => t.has(e) ? x("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), b = (e, t, i, r) => (w(e, t, "write to private field"), t.set(e, i), i), a = (e, t, i) => (w(e, t, "access private method"), i), p, d, f, v, n, S, I, $, M, C, y, E, q, R;
const J = "umb-input-multi-url";
let s = class extends V(L, "") {
  constructor() {
    super(), m(this, n), m(this, p, new K(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => a(this, n, M).call(this, e),
      identifier: "Umb.SorterIdentifier.InputMultiUrl",
      itemSelector: "uui-ref-node",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.urls = e, a(this, n, y).call(this);
      }
    })), this.minMessage = "This field needs more items", this.maxMessage = "This field exceeds the allowed amount of items", m(this, d, []), m(this, f, !1), m(this, v), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this.urls.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this.urls.length > this.max
    ), b(this, v, new F(this, N).addAdditionalPath(":index").onSetup((e) => {
      if (!e.index) return !1;
      let i = parseInt(e.index);
      if (Number.isNaN(i)) return !1;
      let r = null;
      return i >= 0 && i < this.urls.length ? r = a(this, n, $).call(this, i) : i = null, {
        modal: {
          size: this.overlaySize || "small"
        },
        data: {
          index: i,
          isNew: i === null,
          config: {
            hideAnchor: this.hideAnchor
          }
        },
        value: {
          link: {
            icon: r?.icon,
            name: r?.name,
            published: r?.published,
            queryString: r?.queryString,
            target: r?.target,
            trashed: r?.trashed,
            type: r?.type,
            unique: r?.unique,
            url: r?.url
          }
        }
      };
    }).onSubmit((e) => {
      e && a(this, n, C).call(this, e.link, l(this, v).modalContext?.data.index ?? null);
    }).observeRouteBuilder((e) => {
      this._modalRoute = e;
    }));
  }
  getFormElement() {
  }
  /** @deprecated will be removed in v17 */
  set alias(e) {
  }
  get alias() {
  }
  /** @deprecated will be removed in v17 */
  set variantId(e) {
  }
  get variantId() {
  }
  set urls(e) {
    e ??= [], b(this, d, [...e]), super.value = l(this, d).map((t) => t.url).join(","), l(this, p).setModel(l(this, d));
  }
  get urls() {
    return l(this, d);
  }
  get readonly() {
    return l(this, f);
  }
  set readonly(e) {
    b(this, f, e), l(this, f) ? l(this, p).disable() : l(this, p).enable();
  }
  render() {
    return c`${a(this, n, q).call(this)} ${a(this, n, E).call(this)}`;
  }
};
p = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
S = async function(e) {
  const t = l(this, d)[e];
  if (!t) throw new Error("Could not find item at index: " + e);
  await T(this, {
    color: "danger",
    headline: `Remove ${t.name}?`,
    content: "Are you sure you want to remove this item",
    confirmLabel: "Remove"
  }), a(this, n, I).call(this, e);
};
I = function(e) {
  this.urls.splice(e, 1), a(this, n, y).call(this);
};
$ = function(e) {
  return this.urls[e];
};
M = function(e) {
  return "x" + z(JSON.stringify(e)).toString(16);
};
C = function(e, t) {
  t !== null && t >= 0 ? this.urls[t] = e : this.urls.push(e), a(this, n, y).call(this);
};
y = function() {
  this.requestUpdate(), this.dispatchEvent(new D());
};
E = function() {
  return this.max === 1 && this.urls && this.urls.length >= this.max ? U : this.readonly && this.urls.length > 0 ? U : c`
				<uui-button
					id="btn-add"
					look="placeholder"
					label=${this.localize.term("general_add")}
					.href=${this._modalRoute?.({ index: -1 })}
					?disabled=${this.readonly}></uui-button>
			`;
};
q = function() {
  if (this.urls)
    return c`
			<uui-ref-list>
				${O(
      this.urls,
      (e) => e.unique,
      (e, t) => a(this, n, R).call(this, e, t)
    )}
			</uui-ref-list>
		`;
};
R = function(e, t) {
  const i = a(this, n, M).call(this, e), r = this.readonly ? void 0 : this._modalRoute?.({ index: t }) ?? void 0;
  return c`
			<uui-ref-node
				id=${i}
				href=${P(r)}
				name=${e.name || ""}
				detail=${(e.url || "") + (e.queryString || "")}
				?readonly=${this.readonly}>
				<umb-icon slot="icon" name=${e.icon || "icon-link"}></umb-icon>
				${A(
    !this.readonly,
    () => c`
						<uui-action-bar slot="actions">
							<uui-button
								label=${this.localize.term("general_remove")}
								@click=${() => a(this, n, S).call(this, t)}></uui-button>
						</uui-action-bar>
					`
  )}
			</uui-ref-node>
		`;
};
s.styles = [
  B`
			#btn-add {
				width: 100%;
			}
		`
];
o([
  u()
], s.prototype, "alias", 1);
o([
  u()
], s.prototype, "variantId", 1);
o([
  u({ type: Number })
], s.prototype, "min", 2);
o([
  u({ type: String, attribute: "min-message" })
], s.prototype, "minMessage", 2);
o([
  u({ type: Number })
], s.prototype, "max", 2);
o([
  u({ type: String, attribute: "min-message" })
], s.prototype, "maxMessage", 2);
o([
  u({ type: Boolean, attribute: "hide-anchor" })
], s.prototype, "hideAnchor", 2);
o([
  u()
], s.prototype, "overlaySize", 2);
o([
  u({ attribute: !1 })
], s.prototype, "urls", 1);
o([
  u({ type: Boolean, reflect: !0 })
], s.prototype, "readonly", 1);
o([
  W()
], s.prototype, "_modalRoute", 2);
s = o([
  k(J)
], s);
export {
  s as U
};
//# sourceMappingURL=input-multi-url.element-x2S01U12.js.map
