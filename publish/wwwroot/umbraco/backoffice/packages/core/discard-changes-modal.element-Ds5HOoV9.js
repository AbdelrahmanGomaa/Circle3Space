import { property as n, customElement as d, html as p } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as c } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as b } from "@umbraco-cms/backoffice/style";
var h = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, m = (r, e, l, a) => {
  for (var t = a > 1 ? void 0 : a ? _(e, l) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (t = (a ? o(e, l, t) : o(t)) || t);
  return a && t && h(e, l, t), t;
};
class u extends c {
  #t = {};
  #e;
  set modalContext(e) {
    this.#e = e, e && this.observe(
      e.value,
      (l) => {
        const a = this.#t;
        this.#t = l, this.requestUpdate("value", a);
      },
      "observeModalContextValue"
    );
  }
  get modalContext() {
    return this.#e;
  }
  set data(e) {
    this._data = e;
  }
  get data() {
    return this._data;
  }
  set value(e) {
    this.#e?.setValue(e);
  }
  get value() {
    return this.#t;
  }
  updateValue(e) {
    this.#e?.updateValue(e);
  }
  /**
   * Submits the modal
   * @protected
   * @memberof UmbModalBaseElement
   */
  _submitModal() {
    this.#e?.submit();
  }
  /**
   * Rejects the modal
   * @param reason
   * @protected
   * @memberof UmbModalBaseElement
   */
  _rejectModal(e) {
    this.#e?.reject(e);
  }
}
m([
  n({ type: Object, attribute: !1 })
], u.prototype, "manifest", 2);
m([
  n({ attribute: !1 })
], u.prototype, "modalContext", 1);
m([
  n({ attribute: !1 })
], u.prototype, "data", 1);
m([
  n({ attribute: !1 })
], u.prototype, "value", 1);
var v = Object.getOwnPropertyDescriptor, f = (r, e, l, a) => {
  for (var t = a > 1 ? void 0 : a ? v(e, l) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (t = o(t) || t);
  return t;
};
let i = class extends u {
  render() {
    return p`
			<uui-dialog-layout class="uui-text" headline=${this.localize.term("prompt_unsavedChanges")}>
				<umb-localize key="prompt_unsavedChangesWarning"></umb-localize>
				<uui-button
					slot="actions"
					id="cancel"
					label=${this.localize.term("prompt_stay")}
					@click=${this._rejectModal}></uui-button>
				<uui-button
					slot="actions"
					id="confirm"
					color="positive"
					look="primary"
					label=${this.localize.term("prompt_discardChanges")}
					@click=${this._submitModal}></uui-button>
			</uui-dialog-layout>
		`;
  }
};
i.styles = [b];
i = f([
  d("umb-discard-changes-modal")
], i);
const M = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbDiscardChangesModalElement() {
    return i;
  },
  get element() {
    return i;
  }
}, Symbol.toStringTag, { value: "Module" }));
export {
  u as U,
  i as a,
  M as d
};
//# sourceMappingURL=discard-changes-modal.element-Ds5HOoV9.js.map
