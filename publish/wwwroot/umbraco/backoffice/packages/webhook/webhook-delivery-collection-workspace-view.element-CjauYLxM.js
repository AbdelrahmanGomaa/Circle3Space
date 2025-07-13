import { UmbCollectionWorkspaceViewElement as v } from "@umbraco-cms/backoffice/collection";
import { h as _ } from "./paths-Cvoq37Uo.js";
import { customElement as p } from "@umbraco-cms/backoffice/external/lit";
var m = Object.getOwnPropertyDescriptor, c = (e) => {
  throw TypeError(e);
}, k = (e, t, o, n) => {
  for (var r = n > 1 ? void 0 : n ? m(t, o) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (r = i(r) || r);
  return r;
}, w = (e, t, o) => t.has(e) || c("Cannot " + o), C = (e, t, o) => t.has(e) ? c("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), W = (e, t, o) => (w(e, t, "access private method"), o), a, h;
let l = class extends v {
  constructor() {
    super(), C(this, a), this.consumeContext(_, (e) => {
      this.observe(e.unique, (t) => W(this, a, h).call(this, t));
    });
  }
};
a = /* @__PURE__ */ new WeakSet();
h = function(e) {
  this._filter = {
    webhook: e ? { unique: e } : null
  };
};
l = k([
  p("umb-webhook-delivery-collection-workspace-view")
], l);
export {
  l as UmbWebhookDeliveryCollectionWorkspaceViewElement,
  l as element
};
//# sourceMappingURL=webhook-delivery-collection-workspace-view.element-CjauYLxM.js.map
