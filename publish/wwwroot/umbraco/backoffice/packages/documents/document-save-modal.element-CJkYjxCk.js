import { html as M, css as S, state as k, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as y } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as $ } from "@umbraco-cms/backoffice/style";
import { UmbSelectionManager as C } from "@umbraco-cms/backoffice/utils";
import "./document-variant-language-picker.element-azTXCKTU.js";
var x = Object.defineProperty, E = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, v = (t, e, a, l) => {
  for (var i = l > 1 ? void 0 : l ? E(e, a) : e, u = t.length - 1, h; u >= 0; u--)
    (h = t[u]) && (i = (l ? h(e, a, i) : h(i)) || i);
  return l && i && x(e, a, i), i;
}, _ = (t, e, a) => e.has(t) || d("Cannot " + a), s = (t, e, a) => (_(t, e, "read from private field"), a ? a.call(t) : e.get(t)), p = (t, e, a) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), m = (t, e, a) => (_(t, e, "access private method"), a), o, c, n, f, b, g;
let r = class extends y {
  constructor() {
    super(...arguments), p(this, n), p(this, o, new C(this)), this._options = [], p(this, c, (t) => t.variant ? this.data?.pickableFilter ? this.data.pickableFilter(t) : !0 : !1);
  }
  firstUpdated() {
    m(this, n, f).call(this);
  }
  render() {
    return M`<uui-dialog-layout headline=${this.localize.term("content_saveModalTitle")}>
			<p id="subtitle">
				<umb-localize key="content_variantsToSave">Choose which variants to be saved.</umb-localize>
			</p>

			<umb-document-variant-language-picker
				.selectionManager=${s(this, o)}
				.variantLanguageOptions=${this._options}
				.pickableFilter=${s(this, c)}></umb-document-variant-language-picker>

			<div slot="actions">
				<uui-button label=${this.localize.term("general_close")} @click=${m(this, n, g)}></uui-button>
				<uui-button
					label="${this.localize.term("buttons_saveAndClose")}"
					look="primary"
					color="positive"
					@click=${m(this, n, b)}></uui-button>
			</div>
		</uui-dialog-layout> `;
  }
};
o = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
f = async function() {
  s(this, o).setMultiple(!0), s(this, o).setSelectable(!0), this._options = this.data?.options ?? [];
  let t = this.value?.selection ?? [];
  const e = this._options.filter((a) => s(this, c).call(this, a));
  t = t.filter((a) => e.some((l) => l.unique === a)), s(this, o).setSelection(t);
};
b = function() {
  this.value = { selection: s(this, o).getSelection() }, this.modalContext?.submit();
};
g = function() {
  this.modalContext?.reject();
};
r.styles = [
  $,
  S`
			:host {
				display: block;
				width: 400px;
				max-width: 90vw;
			}
		`
];
v([
  k()
], r.prototype, "_options", 2);
r = v([
  w("umb-document-save-modal")
], r);
const P = r;
export {
  r as UmbDocumentSaveModalElement,
  P as default
};
//# sourceMappingURL=document-save-modal.element-CJkYjxCk.js.map
