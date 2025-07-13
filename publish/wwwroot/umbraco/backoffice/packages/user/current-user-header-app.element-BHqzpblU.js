import { U as d } from "./current-user-modal.token-AO0ePjaF.js";
import { html as f, css as C, state as E, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UMB_MODAL_MANAGER_CONTEXT as A } from "@umbraco-cms/backoffice/modal";
import { UMB_CURRENT_USER_CONTEXT as M } from "@umbraco-cms/backoffice/current-user";
import { UmbHeaderAppButtonElement as m } from "@umbraco-cms/backoffice/components";
var O = Object.defineProperty, y = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, h = (e, r, t, a) => {
  for (var s = a > 1 ? void 0 : a ? y(r, t) : r, i = e.length - 1, p; i >= 0; i--)
    (p = e[i]) && (s = (a ? p(r, t, s) : p(s)) || s);
  return a && s && O(r, t, s), s;
}, _ = (e, r, t) => r.has(e) || v("Cannot " + t), c = (e, r, t) => (_(e, r, "read from private field"), r.get(e)), l = (e, r, t) => r.has(e) ? v("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), T = (e, r, t, a) => (_(e, r, "write to private field"), r.set(e, t), t), w = (e, r, t) => (_(e, r, "access private method"), t), n, u, U;
let o = class extends m {
  constructor() {
    super(), l(this, u), l(this, n), this.consumeContext(M, (e) => {
      T(this, n, e), this._observeCurrentUser();
    });
  }
  async _observeCurrentUser() {
    c(this, n) && this.observe(
      c(this, n).currentUser,
      (e) => {
        this._currentUser = e;
      },
      "umbCurrentUserObserver"
    );
  }
  render() {
    return f`
			<uui-button
				@click=${w(this, u, U)}
				look="primary"
				label="${this.localize.term("visuallyHiddenTexts_openCloseBackofficeProfileOptions")}"
				compact>
				<umb-user-avatar
					id="Avatar"
					.name=${this._currentUser?.name}
					.imgUrls=${this._currentUser?.avatarUrls || []}></umb-user-avatar>
			</uui-button>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
U = async function() {
  (await this.getContext(A)).open(this, d);
};
o.styles = [
  m.styles,
  C`
			uui-button {
				font-size: 14px;
			}
		`
];
h([
  E()
], o.prototype, "_currentUser", 2);
o = h([
  b("umb-current-user-header-app")
], o);
const N = o;
export {
  o as UmbCurrentUserHeaderAppElement,
  N as default
};
//# sourceMappingURL=current-user-header-app.element-BHqzpblU.js.map
