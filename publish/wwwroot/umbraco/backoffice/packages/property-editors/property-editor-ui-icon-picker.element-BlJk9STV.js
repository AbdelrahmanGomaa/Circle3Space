import { html as a, property as m, state as u, customElement as p } from "@umbraco-cms/backoffice/external/lit";
import { UMB_MODAL_MANAGER_CONTEXT as _ } from "@umbraco-cms/backoffice/modal";
import { UMB_ICON_PICKER_MODAL as h } from "@umbraco-cms/backoffice/icon";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
import { extractUmbColorVariable as f } from "@umbraco-cms/backoffice/resources";
import { UmbChangeEvent as d } from "@umbraco-cms/backoffice/event";
var b = Object.defineProperty, E = Object.getOwnPropertyDescriptor, n = (i, t, o, l) => {
  for (var e = l > 1 ? void 0 : l ? E(t, o) : t, c = i.length - 1, s; c >= 0; c--)
    (s = i[c]) && (e = (l ? s(t, o, e) : s(e)) || e);
  return l && e && b(t, o, e), e;
};
let r = class extends v {
  constructor() {
    super(...arguments), this._value = "", this._icon = "", this._color = "";
  }
  set value(i) {
    this._value = i ?? "";
    const t = this._value.split(" ");
    t.length === 2 ? (this._icon = t[0], this._color = t[1].replace("color-", "")) : (this._icon = this._value, this._color = "");
  }
  get value() {
    return this._value;
  }
  async _openModal() {
    const o = await (await this.getContext(_)).open(this, h)?.onSubmit();
    o && (o.color ? this.value = `${o.icon} color-${o.color}` : this.value = o.icon, this.dispatchEvent(new d()));
  }
  render() {
    return a`
			<uui-button
				compact
				label=${this.localize.term("defaultdialogs_selectIcon")}
				look="outline"
				@click=${this._openModal}>
				${this._color ? a` <uui-icon name="${this._icon}" style="color:var(${f(this._color)})"></uui-icon>` : a` <uui-icon name="${this._icon}"></uui-icon>`}
			</uui-button>
		`;
  }
};
n([
  m()
], r.prototype, "value", 1);
n([
  u()
], r.prototype, "_icon", 2);
n([
  u()
], r.prototype, "_color", 2);
r = n([
  p("umb-property-editor-ui-icon-picker")
], r);
const g = r;
export {
  r as UmbPropertyEditorUIIconPickerElement,
  g as default
};
//# sourceMappingURL=property-editor-ui-icon-picker.element-BlJk9STV.js.map
