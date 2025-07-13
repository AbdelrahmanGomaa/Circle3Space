import { css as _, state as v, query as b, customElement as y, repeat as f, html as l } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as k } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as M } from "@umbraco-cms/backoffice/style";
var z = Object.defineProperty, P = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, c = (e, t, o, n) => {
  for (var i = n > 1 ? void 0 : n ? P(t, o) : t, s = e.length - 1, u; s >= 0; s--)
    (u = e[s]) && (i = (n ? u(t, o, i) : u(i)) || i);
  return n && i && z(t, o, i), i;
}, w = (e, t, o) => t.has(e) || m("Cannot " + o), E = (e, t, o) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), p = (e, t, o) => (w(e, t, "access private method"), o), r, d, h;
let a = class extends k {
  constructor() {
    super(...arguments), E(this, r), this._options = [];
  }
  connectedCallback() {
    super.connectedCallback(), this._options = this.data?.options ?? [], requestAnimationFrame(() => this._buttonAuto.focus());
  }
  render() {
    return l` <div id="options">
			<uui-button id="auto" look="secondary" @click=${() => p(this, r, d).call(this)} label="Automatically" compact>
				<umb-icon name="icon-wand"></umb-icon> Auto pick
			</uui-button>
			${f(
      this._options,
      (e) => e.unique,
      (e) => l`<uui-button
						look="secondary"
						@click=${() => p(this, r, h).call(this, e.unique)}
						label=${e.name}
						compact>
						<umb-icon .name=${e.icon ?? "icon-circle-dotted"}></umb-icon>${e.name}
					</uui-button>`
    )}
		</div>`;
  }
};
r = /* @__PURE__ */ new WeakSet();
d = function() {
  this.value = { mediaTypeUnique: void 0 }, this._submitModal();
};
h = function(e) {
  if (!e)
    throw new Error("Invalid media type unique");
  this.value = { mediaTypeUnique: e }, this._submitModal();
};
a.styles = [
  M,
  _`
			#options {
				display: flex;
				margin: var(--uui-size-layout-1);
				gap: var(--uui-size-3);
			}
			uui-button {
				width: 150px;
				height: 150px;
			}
			umb-icon {
				font-size: var(--uui-size-10);
				margin-bottom: var(--uui-size-2);
			}
		`
];
c([
  v()
], a.prototype, "_options", 2);
c([
  b("#auto")
], a.prototype, "_buttonAuto", 2);
a = c([
  y("umb-dropzone-media-type-picker-modal")
], a);
const $ = a;
export {
  a as UmbDropzoneMediaTypePickerModalElement,
  $ as default
};
//# sourceMappingURL=dropzone-media-type-picker-modal.element-CcTa8a3H.js.map
