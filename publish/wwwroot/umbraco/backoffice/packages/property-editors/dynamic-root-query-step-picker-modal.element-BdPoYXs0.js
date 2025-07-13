import { UmbDocumentTypePickerInputContext as C } from "@umbraco-cms/backoffice/document-type";
import { UmbId as P } from "@umbraco-cms/backoffice/id";
import { UmbModalBaseElement as D } from "@umbraco-cms/backoffice/modal";
import { repeat as x, ifDefined as m, html as p, state as M, customElement as $ } from "@umbraco-cms/backoffice/external/lit";
var w = Object.defineProperty, E = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, y = (e, t, a, n) => {
  for (var i = n > 1 ? void 0 : n ? E(t, a) : t, c = e.length - 1, u; c >= 0; c--)
    (u = e[c]) && (i = (n ? u(t, a, i) : u(i)) || i);
  return n && i && w(t, a, i), i;
}, _ = (e, t, a) => t.has(e) || f("Cannot " + a), d = (e, t, a) => (_(e, t, "read from private field"), a ? a.call(e) : t.get(e)), h = (e, t, a) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), r = (e, t, a) => (_(e, t, "access private method"), a), s, o, v, b, k, S;
let l = class extends D {
  constructor() {
    super(...arguments), h(this, o), this._querySteps = [], h(this, s, new C(this));
  }
  connectedCallback() {
    super.connectedCallback(), this.data && (this._querySteps = this.data.items);
  }
  render() {
    return p`
			<umb-body-layout headline=${this.localize.term("dynamicRoot_pickDynamicRootQueryStepTitle")}>
				<div id="main">
					<uui-box>
						<uui-ref-list>
							${x(
      this._querySteps,
      (e) => e.alias,
      (e) => p`
									<umb-ref-item
										name=${m(e.meta.label)}
										detail=${m(e.meta.description)}
										icon=${m(e.meta.icon)}
										@open=${() => r(this, o, v).call(this, e)}></umb-ref-item>
								`
    )}
						</uui-ref-list>
					</uui-box>
				</div>
				<div slot="actions">
					<uui-button @click=${r(this, o, b)} look="default" label="${this.localize.term("general_close")}"></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
s = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
v = function(e) {
  r(this, o, k).call(this, e.meta.queryStepAlias);
};
b = function() {
  this.modalContext?.reject();
};
k = async function(e) {
  await d(this, s).openPicker({
    hideTreeRoot: !0,
    pickableFilter: (a) => a.isElement === !1
  });
  const t = d(this, s).getSelection();
  r(this, o, S).call(this, {
    unique: P.new(),
    alias: e,
    anyOfDocTypeKeys: t
  });
};
S = function(e) {
  this.modalContext?.setValue(e), this.modalContext?.submit();
};
y([
  M()
], l.prototype, "_querySteps", 2);
l = y([
  $("umb-dynamic-root-query-step-picker-modal")
], l);
const O = l;
export {
  l as UmbDynamicRootQueryStepPickerModalModalElement,
  O as default
};
//# sourceMappingURL=dynamic-root-query-step-picker-modal.element-BdPoYXs0.js.map
