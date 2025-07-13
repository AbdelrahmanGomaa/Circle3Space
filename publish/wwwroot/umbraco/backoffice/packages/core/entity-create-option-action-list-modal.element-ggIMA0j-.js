import { UmbRefItemElement as E } from "@umbraco-cms/backoffice/components";
import { UmbExtensionsApiInitializer as w } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as C } from "@umbraco-cms/backoffice/extension-registry";
import { html as f, repeat as g, ifDefined as m, state as p, customElement as $ } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as N } from "@umbraco-cms/backoffice/modal";
var O = Object.defineProperty, P = Object.getOwnPropertyDescriptor, h = (t) => {
  throw TypeError(t);
}, c = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? P(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && O(e, i, r), r;
}, T = (t, e, i) => e.has(t) || h("Cannot " + i), x = (t, e, i) => e.has(t) ? h("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), l = (t, e, i) => (T(t, e, "access private method"), i), s, d, _, y, b, v;
let u = class extends N {
  constructor() {
    super(...arguments), x(this, s), this._apiControllers = [], this._hrefList = [];
  }
  updated(t) {
    super.updated(t), t.has("data") && l(this, s, d).call(this);
  }
  render() {
    return f`
			<umb-body-layout headline="${this.localize.term("general_create")}">
				<uui-box>
					${this._apiControllers.length === 0 ? f`<div>No create options available.</div>` : f`
								<uui-ref-list>
									${g(
      this._apiControllers,
      (t) => t.manifest?.alias,
      (t, e) => l(this, s, v).call(this, t, e)
    )}
								</uui-ref-list>
							`}
				</uui-box>
				<uui-button
					slot="actions"
					label=${this.localize.term("general_cancel")}
					@click=${this._rejectModal}></uui-button>
			</umb-body-layout>
		`;
  }
};
s = /* @__PURE__ */ new WeakSet();
d = function() {
  const t = this.data;
  if (!t) throw new Error("No data found");
  if (!t.entityType) throw new Error("No entityType found");
  if (t.unique === void 0) throw new Error("No unique found");
  new w(
    this,
    C,
    "entityCreateOptionAction",
    (e) => [{ entityType: t.entityType, unique: t.unique, meta: e.meta }],
    (e) => e.forEntityTypes.includes(t.entityType),
    async (e) => {
      this._apiControllers = e;
      const i = this._apiControllers.map((n) => n.api?.getHref());
      this._hrefList = await Promise.all(i);
    }
  );
};
_ = async function(t, e) {
  if (t.stopPropagation(), !e.api)
    throw new Error("No API found");
  await e.api.execute(), this._submitModal();
};
y = async function(t, e) {
  if (t.composedPath().find((n) => n instanceof E)) {
    if (!e)
      throw new Error("No href found");
    this._submitModal();
  }
};
b = function(t) {
  return t && t.startsWith("http") ? "_blank" : "_self";
};
v = function(t, e) {
  const i = t.manifest;
  if (!i) throw new Error("No manifest found");
  const n = i.meta.label ? this.localize.string(i.meta.label) : i.name, r = i.meta.description ? this.localize.string(i.meta.description) : void 0, o = this._hrefList[e];
  return f`
			<umb-ref-item
				name=${n}
				detail=${m(r)}
				icon=${i.meta.icon}
				href=${m(o)}
				target=${l(this, s, b).call(this, o)}
				@open=${(a) => l(this, s, _).call(this, a, t)}
				@click=${(a) => l(this, s, y).call(this, a, o)}>
			</umb-ref-item>
		`;
};
c([
  p()
], u.prototype, "_apiControllers", 2);
c([
  p()
], u.prototype, "_hrefList", 2);
u = c([
  $("umb-entity-create-option-action-list-modal")
], u);
export {
  u as UmbEntityCreateOptionActionListModalElement,
  u as element
};
//# sourceMappingURL=entity-create-option-action-list-modal.element-ggIMA0j-.js.map
