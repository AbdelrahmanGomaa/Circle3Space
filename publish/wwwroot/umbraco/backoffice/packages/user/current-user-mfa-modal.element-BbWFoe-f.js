import { U, a as O } from "./current-user-mfa-enable-modal.token-Daw2B3OI.js";
import "./current-user.store.token-N-3TWEFa.js";
import { UmbCurrentUserRepository as P } from "./current-user.repository-DHj5cLiS.js";
import "@umbraco-cms/backoffice/user";
import "@umbraco-cms/backoffice/class-api";
import { mergeObservables as $ } from "@umbraco-cms/backoffice/observable-api";
import { when as u, repeat as C, html as l, nothing as x, css as R, property as w, state as S, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as L } from "@umbraco-cms/backoffice/lit-element";
import { UMB_MODAL_MANAGER_CONTEXT as _ } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as D } from "@umbraco-cms/backoffice/style";
import { umbExtensionsRegistry as T } from "@umbraco-cms/backoffice/extension-registry";
var k = Object.defineProperty, z = Object.getOwnPropertyDescriptor, b = (e) => {
  throw TypeError(e);
}, c = (e, r, t, o) => {
  for (var a = o > 1 ? void 0 : o ? z(r, t) : r, i = e.length - 1, s; i >= 0; i--)
    (s = e[i]) && (a = (o ? s(r, t, a) : s(a)) || a);
  return o && a && k(r, t, a), a;
}, h = (e, r, t) => r.has(e) || b("Cannot " + t), B = (e, r, t) => (h(e, r, "read from private field"), t ? t.call(e) : r.get(e)), v = (e, r, t) => r.has(e) ? b("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), m = (e, r, t) => (h(e, r, "access private method"), t), p, n, f, y, E, g, M;
let d = class extends L {
  constructor() {
    super(), v(this, n), this._items = [], v(this, p, new P(this)), m(this, n, f).call(this);
  }
  render() {
    return l`
			<umb-body-layout headline="${this.localize.term("member_2fa")}">
				<div id="main">
					${u(
      this._items.length > 0,
      () => l`
							${C(
        this._items,
        (e) => e.providerName,
        (e) => m(this, n, E).call(this, e)
      )}
						`
    )}
				</div>
				<div slot="actions">
					<uui-button @click=${m(this, n, y)} look="secondary" .label=${this.localize.term("general_close")}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
p = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
f = async function() {
  const e = (await B(this, p).requestMfaLoginProviders()).asObservable(), r = T.byType("mfaLoginProvider"), t = $(
    [e, r],
    ([o, a]) => a.map((i) => {
      const s = o.find(
        (N) => N.providerName === i.forProviderName
      );
      return {
        existsOnServer: !!s,
        isEnabledOnUser: s?.isEnabledOnUser ?? !1,
        providerName: s?.providerName ?? i.forProviderName,
        displayName: i.meta?.label ?? s?.providerName ?? i.name
      };
    })
  );
  this.observe(
    t,
    (o) => {
      this._items = o;
    },
    "_mfaLoginProviders"
  );
};
y = function() {
  this.modalContext?.submit();
};
E = function(e) {
  return l`
			<uui-box headline=${e.displayName}>
				${u(
    e.existsOnServer,
    () => x,
    () => l`<div style="position:relative" slot="header-actions">
							<uui-badge
								style="cursor:default"
								title="Warning: This provider is not configured on the server"
								color="danger"
								look="primary">
								!
							</uui-badge>
						</div>`
  )}
				${u(
    e.isEnabledOnUser,
    () => l`
						<p style="margin-top:0">
							<umb-localize key="user_2faProviderIsEnabled">This two-factor provider is enabled</umb-localize>
						</p>
						<uui-button
							type="button"
							look="secondary"
							color="danger"
							.label=${this.localize.term("actions_disable")}
							@click=${() => m(this, n, M).call(this, e)}></uui-button>
					`,
    () => l`
						<uui-button
							type="button"
							look="secondary"
							?disabled=${!e.existsOnServer}
							.label=${this.localize.term("actions_enable")}
							@click=${() => m(this, n, g).call(this, e)}></uui-button>
					`
  )}
			</uui-box>
		`;
};
g = async function(e) {
  await (await this.getContext(_)).open(this, U, {
    data: { providerName: e.providerName, displayName: e.displayName }
  }).onSubmit().catch(() => {
  });
};
M = async function(e) {
  await (await this.getContext(_)).open(this, O, {
    data: { providerName: e.providerName, displayName: e.displayName }
  }).onSubmit().catch(() => {
  });
};
d.styles = [
  D,
  R`
			uui-box {
				margin-bottom: var(--uui-size-space-3);
			}
		`
];
c([
  w({ attribute: !1 })
], d.prototype, "modalContext", 2);
c([
  S()
], d.prototype, "_items", 2);
d = c([
  A("umb-current-user-mfa-modal")
], d);
const Y = d;
export {
  d as UmbCurrentUserMfaModalElement,
  Y as default
};
//# sourceMappingURL=current-user-mfa-modal.element-BbWFoe-f.js.map
