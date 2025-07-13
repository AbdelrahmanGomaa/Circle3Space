import { U as X, a as k, b as F } from "../constants-D8nfzuQw.js";
import { U as H } from "../external-login-modal.token-BIuwBNJv.js";
import { U as V } from "../current-user-history.store.token-C66NWwR2.js";
import { U as z } from "../current-user-modal.token-AO0ePjaF.js";
import { U as J } from "../current-user-mfa-modal.token-DXwGMNEd.js";
import { a as Q, U as Z } from "../current-user-mfa-enable-modal.token-Daw2B3OI.js";
import { U as h } from "../current-user.context.token-BnYpMzWI.js";
import { UmbTextStyles as C } from "@umbraco-cms/backoffice/style";
import { state as S, property as T, customElement as O, ifDefined as f, html as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
import { UmbActionExecutedEvent as A } from "@umbraco-cms/backoffice/event";
import { U as tt } from "../mfa-provider-default.element-CvQyy95R.js";
import { UmbCurrentUserContext as rt } from "../current-user.context-CbxGWHtb.js";
import { UmbCurrentUserHistoryStore as st } from "../current-user-history.store-Ca48wRgT.js";
import { U as it } from "../current-user.store.token-N-3TWEFa.js";
import { UmbCurrentUserRepository as _t } from "../current-user.repository-DHj5cLiS.js";
import { UmbCurrentUserStore as mt } from "../current-user.store-N0uyXnob.js";
import { i as ft } from "../is-current-user-an-admin.function-BjNT31EQ.js";
import { UmbContextConsumerController as M } from "@umbraco-cms/backoffice/context-api";
var N = Object.defineProperty, x = Object.getOwnPropertyDescriptor, u = (t) => {
  throw TypeError(t);
}, m = (t, e, r, o) => {
  for (var s = o > 1 ? void 0 : o ? x(e, r) : e, n = t.length - 1, _; n >= 0; n--)
    (_ = t[n]) && (s = (o ? _(e, r, s) : _(s)) || s);
  return o && s && N(e, r, s), s;
}, p = (t, e, r) => e.has(t) || u("Cannot " + r), l = (t, e, r) => (p(t, e, "read from private field"), e.get(t)), R = (t, e, r) => e.has(t) ? u("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), d = (t, e, r, o) => (p(t, e, "write to private field"), e.set(t, r), r), b = (t, e, r) => (p(t, e, "access private method"), r), a, U, c;
let i = class extends v {
  constructor() {
    super(...arguments), R(this, U), R(this, a);
  }
  set api(t) {
    d(this, a, t), l(this, a)?.getHref?.().then((e) => {
      this._href = e;
    });
  }
  get label() {
    return this.manifest?.meta.label ? this.localize.string(this.manifest.meta.label) : void 0;
  }
  render() {
    return E`
			<uui-button
				@click=${b(this, U, c)}
				look="${this.manifest?.meta.look ?? "primary"}"
				color="${this.manifest?.meta.color ?? "default"}"
				label="${f(this.label)}"
				href="${f(this._href)}">
				${this.manifest?.meta.icon ? E`<uui-icon name="${this.manifest.meta.icon}"></uui-icon>` : ""} ${this.label}
			</uui-button>
		`;
  }
};
a = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakSet();
c = async function(t) {
  this._href || (t.stopPropagation(), await l(this, a)?.execute()), this.dispatchEvent(new A());
};
i.styles = [C];
m([
  S()
], i.prototype, "_href", 2);
m([
  T({ attribute: !1 })
], i.prototype, "manifest", 2);
i = m([
  O("umb-current-user-app-button")
], i);
const P = async (t, e) => {
  const r = new M(t, h), o = await r.asPromise();
  return r.destroy(), await o.isUserCurrentUser(e);
};
export {
  h as UMB_CURRENT_USER_CONTEXT,
  H as UMB_CURRENT_USER_EXTERNAL_LOGIN_MODAL,
  X as UMB_CURRENT_USER_GROUP_ID_CONDITION_ALIAS,
  V as UMB_CURRENT_USER_HISTORY_STORE_CONTEXT,
  k as UMB_CURRENT_USER_IS_ADMIN_CONDITION_ALIAS,
  Q as UMB_CURRENT_USER_MFA_DISABLE_PROVIDER_MODAL,
  Z as UMB_CURRENT_USER_MFA_ENABLE_PROVIDER_MODAL,
  J as UMB_CURRENT_USER_MFA_MODAL,
  z as UMB_CURRENT_USER_MODAL,
  F as UMB_CURRENT_USER_REPOSITORY_ALIAS,
  it as UMB_CURRENT_USER_STORE_CONTEXT,
  i as UmbCurrentUserAppButtonElement,
  rt as UmbCurrentUserContext,
  st as UmbCurrentUserHistoryStore,
  _t as UmbCurrentUserRepository,
  mt as UmbCurrentUserStore,
  tt as UmbMfaProviderDefaultElement,
  P as isCurrentUser,
  ft as isCurrentUserAnAdmin
};
//# sourceMappingURL=index.js.map
