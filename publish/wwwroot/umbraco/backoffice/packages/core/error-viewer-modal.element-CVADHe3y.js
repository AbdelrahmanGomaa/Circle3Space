import { nothing as m, html as p, css as y, state as u, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as g } from "@umbraco-cms/backoffice/modal";
var b = Object.defineProperty, v = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, c = (e, r, a, t) => {
  for (var o = t > 1 ? void 0 : t ? v(r, a) : r, n = e.length - 1, l; n >= 0; n--)
    (l = e[n]) && (o = (t ? l(r, a, o) : l(o)) || o);
  return t && o && b(r, a, o), o;
}, E = (e, r, a) => r.has(e) || h("Cannot " + a), $ = (e, r, a) => r.has(e) ? h("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, a), _ = (e, r, a) => (E(e, r, "access private method"), a), i, d;
let s = class extends g {
  constructor() {
    super(...arguments), $(this, i);
  }
  set data(e) {
    super.data = e, typeof e == "string" ? (this._displayLang = "String", this._displayError = e) : (this._displayLang = "JSON", this._displayError = _(this, i, d).call(this, e));
  }
  get data() {
    return super.data;
  }
  render() {
    return p`
			<umb-body-layout headline=${this.localize.term("defaultdialogs_seeErrorDialogHeadline")} main-no-padding>
				${this.data ? p`<umb-code-block language=${this._displayLang ?? ""} copy>${this._displayError}</umb-code-block>` : m}
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
i = /* @__PURE__ */ new WeakSet();
d = function(e) {
  let r = "{";
  for (const a in e) {
    let t = e[a];
    typeof t == "function" ? t = t.toString() : t instanceof Array ? t = JSON.stringify(t) : typeof t == "object" ? t = _(this, i, d).call(this, t) : t = `"${t}"`, r += `
  ${a}: ${t},`;
  }
  return r + `
}`;
};
s.styles = [
  y`
			umb-code-block {
				border: none;
				height: 100%;
			}
		`
];
c([
  u()
], s.prototype, "_displayError", 2);
c([
  u()
], s.prototype, "_displayLang", 2);
s = c([
  f("umb-error-viewer-modal")
], s);
const O = s;
export {
  s as UmbErrorViewerModalElement,
  O as default
};
//# sourceMappingURL=error-viewer-modal.element-CVADHe3y.js.map
