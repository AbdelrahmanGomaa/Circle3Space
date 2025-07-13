import { U as u } from "./search-modal.token-CTxun4lq.js";
import { html as _, customElement as l } from "@umbraco-cms/backoffice/external/lit";
import { UMB_MODAL_MANAGER_CONTEXT as d } from "@umbraco-cms/backoffice/modal";
import { UmbHeaderAppButtonElement as i } from "@umbraco-cms/backoffice/components";
var v = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, f = (e, t, r, c) => {
  for (var a = c > 1 ? void 0 : c ? v(t, r) : t, o = e.length - 1, p; o >= 0; o--)
    (p = e[o]) && (a = p(a) || a);
  return a;
}, A = (e, t, r) => t.has(e) || m("Cannot " + r), E = (e, t, r) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), C = (e, t, r) => (A(e, t, "access private method"), r), s, h;
let n = class extends i {
  constructor() {
    super(...arguments), E(this, s);
  }
  render() {
    return _`
			<uui-button @click=${C(this, s, h)} look="primary" label="search" compact>
				<uui-icon name="icon-search"></uui-icon>
			</uui-button>
		`;
  }
};
s = /* @__PURE__ */ new WeakSet();
h = async function() {
  (await this.getContext(d)).open(this, u);
};
n.styles = i.styles;
n = f([
  l("umb-search-header-app")
], n);
const O = n;
export {
  n as UmbSearchHeaderAppElement,
  O as default
};
//# sourceMappingURL=umb-search-header-app.element-BVjOVESK.js.map
