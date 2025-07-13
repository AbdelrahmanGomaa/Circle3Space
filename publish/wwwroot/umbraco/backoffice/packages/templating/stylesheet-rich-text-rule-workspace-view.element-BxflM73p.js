import { U as R } from "./stylesheet-rule-manager-kXMtc4LQ.js";
import { o as C } from "./manifests-BP46ESrA.js";
import { UmbTextStyles as E } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as S } from "@umbraco-cms/backoffice/lit-element";
import { html as g, css as T, state as W, customElement as U } from "@umbraco-cms/backoffice/external/lit";
var M = Object.defineProperty, O = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, y = (e, t, s, r) => {
  for (var i = r > 1 ? void 0 : r ? O(t, s) : t, p = e.length - 1, _; p >= 0; p--)
    (_ = e[p]) && (i = (r ? _(t, s, i) : _(i)) || i);
  return r && i && M(t, s, i), i;
}, v = (e, t, s) => t.has(e) || f("Cannot " + s), a = (e, t, s) => (v(e, t, "read from private field"), t.get(e)), h = (e, t, s) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), d = (e, t, s, r) => (v(e, t, "write to private field"), t.set(e, s), s), m = (e, t, s) => (v(e, t, "access private method"), s), o, u, c, n, w, x, b;
let l = class extends S {
  constructor() {
    super(), h(this, n), this._rules = [], h(this, o), h(this, u, new R()), h(this, c, ""), this.consumeContext(C, (e) => {
      d(this, o, e), m(this, n, w).call(this);
    });
  }
  render() {
    return g`<uui-box headline="Rich text editor styles">
			<umb-property-layout
				description="Define the styles that should be available in the rich text editor for this stylesheet.">
				<div slot="editor">
					<umb-stylesheet-rule-input .rules=${this._rules} @change=${m(this, n, b)}></umb-stylesheet-rule-input>
				</div>
			</umb-property-layout>
		</uui-box>`;
  }
};
o = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
w = function() {
  a(this, o)?.content && this.observe(
    a(this, o).content,
    (e) => {
      d(this, c, e || ""), m(this, n, x).call(this, e);
    },
    "umbStylesheetContentObserver"
  );
};
x = function(e) {
  if (e) {
    const t = a(this, u).extractRules(e);
    this._rules = [...t];
  } else
    this._rules = [];
};
b = function(e) {
  e.stopPropagation();
  const s = e.target.rules, r = a(this, u).insertRules(a(this, c), s);
  a(this, o)?.setContent(r);
};
l.styles = [
  E,
  T`
			:host {
				display: block;
				width: 100%;
			}

			uui-box {
				margin: var(--uui-size-layout-1);
			}
		`
];
y([
  W()
], l.prototype, "_rules", 2);
l = y([
  U("umb-stylesheet-rich-text-rule-workspace-view")
], l);
const A = l;
export {
  l as UmbStylesheetRichTextRuleWorkspaceViewElement,
  A as default
};
//# sourceMappingURL=stylesheet-rich-text-rule-workspace-view.element-BxflM73p.js.map
