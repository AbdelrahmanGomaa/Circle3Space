import { U as y } from "./media-item.store.context-token-9YLCPlu1.js";
import { html as u, property as m, state as o, customElement as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_CONTEXT as f } from "@umbraco-cms/backoffice/property";
import { UmbFormControlMixin as E, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as I } from "@umbraco-cms/backoffice/validation";
import "./input-upload-field.element-B7PCDmnx.js";
import { UmbChangeEvent as M } from "@umbraco-cms/backoffice/event";
var P = Object.defineProperty, C = Object.getOwnPropertyDescriptor, h = (t) => {
  throw TypeError(t);
}, i = (t, e, r, l) => {
  for (var s = l > 1 ? void 0 : l ? C(e, r) : e, n = t.length - 1, p; n >= 0; n--)
    (p = t[n]) && (s = (l ? p(e, r, s) : p(s)) || s);
  return l && s && P(e, r, s), s;
}, b = (t, e, r) => e.has(t) || h("Cannot " + r), T = (t, e, r) => e.has(t) ? h("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), $ = (t, e, r) => (b(t, e, "access private method"), r), d, _;
const g = "umb-property-editor-ui-media-picker";
let a = class extends E(v) {
  constructor() {
    super(), T(this, d), this.mandatoryMessage = I, this.readonly = !1, this._focalPointEnabled = !1, this._preselectedCrops = [], this._allowedMediaTypes = [], this._multiple = !1, this._min = 0, this._max = 1 / 0, this.consumeContext(f, (t) => {
      this.observe(t.alias, (e) => this._alias = e), this.observe(t.variantId, (e) => this._variantId = e?.toString() || "invariant");
    });
  }
  set config(t) {
    if (!t) return;
    this._allowedMediaTypes = t.getValueByAlias("filter")?.split(",") ?? [], this._focalPointEnabled = !!t.getValueByAlias("enableLocalFocalPoint"), this._multiple = !!t.getValueByAlias("multiple"), this._preselectedCrops = t?.getValueByAlias("crops") ?? [];
    const e = t.getValueByAlias("startNodeId") ?? "";
    this._startNode = e ? { unique: e, entityType: y } : void 0;
    const r = t.getValueByAlias("validationLimit");
    this._min = r?.min ?? 0, this._max = r?.max ?? 1 / 0;
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("umb-input-rich-media"));
  }
  focus() {
    return this.shadowRoot?.querySelector("umb-input-rich-media")?.focus();
  }
  render() {
    return u`
			<umb-input-rich-media
				.alias=${this._alias}
				.allowedContentTypeIds=${this._allowedMediaTypes}
				.focalPointEnabled=${this._focalPointEnabled}
				.value=${this.value ?? []}
				.max=${this._max}
				.min=${this._min}
				.preselectedCrops=${this._preselectedCrops}
				.startNode=${this._startNode}
				.variantId=${this._variantId}
				.required=${this.mandatory}
				.requiredMessage=${this.mandatoryMessage}
				?multiple=${this._multiple}
				@change=${$(this, d, _)}
				?readonly=${this.readonly}>
			</umb-input-rich-media>
		`;
  }
};
d = /* @__PURE__ */ new WeakSet();
_ = function(t) {
  const e = t.target.value?.length === 0;
  this.value = e ? void 0 : t.target.value, this.dispatchEvent(new M());
};
i([
  m({ type: Boolean })
], a.prototype, "mandatory", 2);
i([
  m({ type: String })
], a.prototype, "mandatoryMessage", 2);
i([
  m({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 2);
i([
  o()
], a.prototype, "_startNode", 2);
i([
  o()
], a.prototype, "_focalPointEnabled", 2);
i([
  o()
], a.prototype, "_preselectedCrops", 2);
i([
  o()
], a.prototype, "_allowedMediaTypes", 2);
i([
  o()
], a.prototype, "_multiple", 2);
i([
  o()
], a.prototype, "_min", 2);
i([
  o()
], a.prototype, "_max", 2);
i([
  o()
], a.prototype, "_alias", 2);
i([
  o()
], a.prototype, "_variantId", 2);
a = i([
  c(g)
], a);
export {
  a as UmbPropertyEditorUIMediaPickerElement,
  a as element
};
//# sourceMappingURL=property-editor-ui-media-picker.element-BX48IORS.js.map
