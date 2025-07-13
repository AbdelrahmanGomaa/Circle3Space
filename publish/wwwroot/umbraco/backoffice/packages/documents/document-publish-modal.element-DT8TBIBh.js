import { DocumentVariantStateModel as v } from "@umbraco-cms/backoffice/external/backend-api";
import { i as p } from "./utils-DhnAT8B6.js";
import { html as k, css as w, state as b, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as P } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as $ } from "@umbraco-cms/backoffice/style";
import { UmbSelectionManager as O } from "@umbraco-cms/backoffice/utils";
import "./document-variant-language-picker.element-azTXCKTU.js";
var C = Object.defineProperty, D = Object.getOwnPropertyDescriptor, f = (t) => {
  throw TypeError(t);
}, _ = (t, i, e, s) => {
  for (var a = s > 1 ? void 0 : s ? D(i, e) : i, c = t.length - 1, h; c >= 0; c--)
    (h = t[c]) && (a = (s ? h(i, e, a) : h(a)) || a);
  return s && a && C(i, e, a), a;
}, y = (t, i, e) => i.has(t) || f("Cannot " + e), o = (t, i, e) => (y(t, i, "read from private field"), e ? e.call(t) : i.get(t)), d = (t, i, e) => i.has(t) ? f("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(t) : i.set(t, e), m = (t, i, e) => (y(t, i, "access private method"), e), l, u, r, M, g, S;
let n = class extends P {
  constructor() {
    super(...arguments), d(this, r), d(this, l, new O(this)), this._options = [], d(this, u, (t) => !t.variant || t.variant.state === v.NOT_CREATED ? !1 : this.data?.pickableFilter ? this.data.pickableFilter(t) : !0);
  }
  firstUpdated() {
    m(this, r, M).call(this);
  }
  render() {
    return k`<uui-dialog-layout headline=${this.localize.term("content_readyToPublish")}>
			<p id="subtitle">
				<umb-localize key="content_variantsToPublish">Which variants would you like to publish?</umb-localize>
			</p>
			<umb-document-variant-language-picker
				.selectionManager=${o(this, l)}
				.variantLanguageOptions=${this._options}
				.requiredFilter=${p}
				.pickableFilter=${o(this, u)}></umb-document-variant-language-picker>

			<div slot="actions">
				<uui-button label=${this.localize.term("general_close")} @click=${m(this, r, S)}></uui-button>
				<uui-button
					label="${this.localize.term("buttons_saveAndPublish")}"
					look="primary"
					color="positive"
					?disabled=${this._hasNotSelectedMandatory}
					@click=${m(this, r, g)}></uui-button>
			</div>
		</uui-dialog-layout>`;
  }
};
l = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
M = async function() {
  o(this, l).setMultiple(!0), o(this, l).setSelectable(!0), this._options = this.data?.options.filter(
    (e) => e.variant && e.variant.state === null || p(e) || e.variant?.state !== v.NOT_CREATED
  ) ?? [];
  let t = this.value?.selection ?? [];
  const i = this._options.filter((e) => o(this, u).call(this, e));
  t = t.filter((e) => i.some((s) => s.unique === e)), o(this, l).setSelection(t), this.observe(
    o(this, l).selection,
    (e) => {
      if (!this._options && !e) return;
      const s = this._options.filter(p);
      this._hasNotSelectedMandatory = s.some((a) => !e.includes(a.unique));
    },
    "observeSelection"
  );
};
g = function() {
  this.value = { selection: o(this, l).getSelection() }, this.modalContext?.submit();
};
S = function() {
  this.modalContext?.reject();
};
n.styles = [
  $,
  w`
			:host {
				display: block;
				min-width: 460px;
				max-width: 90vw;
			}
		`
];
_([
  b()
], n.prototype, "_options", 2);
_([
  b()
], n.prototype, "_hasNotSelectedMandatory", 2);
n = _([
  E("umb-document-publish-modal")
], n);
const A = n;
export {
  n as UmbDocumentPublishModalElement,
  A as default
};
//# sourceMappingURL=document-publish-modal.element-DT8TBIBh.js.map
