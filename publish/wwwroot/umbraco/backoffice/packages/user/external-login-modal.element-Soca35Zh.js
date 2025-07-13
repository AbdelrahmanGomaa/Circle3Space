import "./current-user.store.token-N-3TWEFa.js";
import { UmbCurrentUserRepository as N } from "./current-user.repository-DHj5cLiS.js";
import "@umbraco-cms/backoffice/user";
import "@umbraco-cms/backoffice/class-api";
import { mergeObservables as $ } from "@umbraco-cms/backoffice/observable-api";
import { repeat as U, html as l, when as y, nothing as O, css as P, property as S, state as M, customElement as T } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as Y } from "@umbraco-cms/backoffice/lit-element";
import { umbConfirmModal as _ } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as D } from "@umbraco-cms/backoffice/style";
import { umbExtensionsRegistry as W } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_AUTH_CONTEXT as b } from "@umbraco-cms/backoffice/auth";
import { UMB_NOTIFICATION_CONTEXT as A } from "@umbraco-cms/backoffice/notification";
var K = Object.defineProperty, F = Object.getOwnPropertyDescriptor, k = (e) => {
  throw TypeError(e);
}, p = (e, i, r, t) => {
  for (var a = t > 1 ? void 0 : t ? F(i, r) : i, d = e.length - 1, o; d >= 0; d--)
    (o = e[d]) && (a = (t ? o(i, r, a) : o(a)) || a);
  return t && a && K(i, r, a), a;
}, v = (e, i, r) => i.has(e) || k("Cannot " + r), g = (e, i, r) => (v(e, i, "read from private field"), r ? r.call(e) : i.get(e)), h = (e, i, r) => i.has(e) ? k("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(e) : i.set(e, r), I = (e, i, r, t) => (v(e, i, "write to private field"), i.set(e, r), r), u = (e, i, r) => (v(e, i, "access private method"), r), f, c, n, x, z, w, C, E;
let s = class extends Y {
  constructor() {
    super(), h(this, n), this._items = [], h(this, f, new N(this)), h(this, c), u(this, n, x).call(this), this.consumeContext(A, (e) => {
      I(this, c, e);
    });
  }
  render() {
    return l`
			<umb-body-layout headline="${this.localize.term("defaultdialogs_externalLoginProviders")}">
				<div id="main">
					${U(
      this._items,
      (e) => e.providerSchemeName,
      (e) => u(this, n, w).call(this, e)
    )}
				</div>
				<div slot="actions">
					<uui-button @click=${u(this, n, z)} look="secondary" .label=${this.localize.term("general_close")}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
f = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
x = async function() {
  const e = (await g(this, f).requestExternalLoginProviders()).asObservable(), i = W.byTypeAndFilter(
    "authProvider",
    (t) => !!t.meta?.linking?.allowManualLinking
  ), r = $(
    [e, i],
    ([t, a]) => a.map((o) => {
      const m = t.find(
        (L) => L.providerSchemeName === o.forProviderName
      );
      return {
        existsOnServer: !!m,
        hasManualLinkingEnabled: m?.hasManualLinkingEnabled ?? !1,
        isLinkedOnUser: m?.isLinkedOnUser ?? !1,
        providerKey: m?.providerKey ?? "",
        providerSchemeName: o.forProviderName,
        icon: o.meta?.defaultView?.icon,
        displayName: o.meta?.label ?? o.forProviderName ?? o.name
      };
    })
  );
  this.observe(
    r,
    (t) => {
      this._items = t;
    },
    "_externalLoginProviders"
  );
};
z = function() {
  this.modalContext?.submit();
};
w = function(e) {
  return l`
			<uui-box>
				<div class="header" slot="header">
					<uui-icon class="header-icon" name=${e.icon ?? "icon-cloud"}></uui-icon>
					${this.localize.string(e.displayName)}
				</div>
				${y(
    e.existsOnServer,
    () => O,
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
				${y(
    e.isLinkedOnUser,
    () => l`
						<p style="margin-top:0">
							<umb-localize key="defaultdialogs_linkedToService">Your account is linked to this service</umb-localize>
						</p>
						<uui-button
							type="button"
							look="secondary"
							color="danger"
							.label=${this.localize.term("defaultdialogs_unLinkYour", this.localize.string(e.displayName))}
							@click=${() => u(this, n, E).call(this, e)}>
							<umb-localize key="defaultdialogs_unLinkYour" .args=${[this.localize.string(e.displayName)]}>
								Unlink your ${this.localize.string(e.displayName)} account
							</umb-localize>
							<uui-icon name="icon-window-popout"></uui-icon>
						</uui-button>
					`,
    () => l`
						<uui-button
							type="button"
							look="secondary"
							.label=${this.localize.term("defaultdialogs_linkYour", e.displayName)}
							?disabled=${!e.existsOnServer || !e.hasManualLinkingEnabled}
							@click=${() => u(this, n, C).call(this, e)}>
							<umb-localize key="defaultdialogs_linkYour" .args=${[this.localize.string(e.displayName)]}>
								Link your ${this.localize.string(e.displayName)} account
							</umb-localize>
							<uui-icon name="icon-window-popout"></uui-icon>
						</uui-button>
					`
  )}
			</uui-box>
		`;
};
C = async function(e) {
  const i = this.localize.string(e.displayName);
  try {
    await _(this, {
      headline: this.localize.term("defaultdialogs_linkYour", i),
      content: this.localize.term("defaultdialogs_linkYourConfirm", i),
      confirmLabel: this.localize.term("general_continue"),
      color: "positive"
    }), await (await this.getContext(b)).linkLogin(e.providerSchemeName);
  } catch (r) {
    r instanceof Error && g(this, c)?.peek("danger", {
      data: {
        headline: this.localize.term("defaultdialogs_linkYour", i),
        message: r.message
      }
    });
  }
};
E = async function(e) {
  if (!e.providerKey)
    throw new Error("Provider key is missing");
  const i = this.localize.string(e.displayName);
  try {
    await _(this, {
      headline: this.localize.term("defaultdialogs_unLinkYour", i),
      content: this.localize.term("defaultdialogs_unLinkYourConfirm", i),
      confirmLabel: this.localize.term("general_continue"),
      color: "danger"
    }), await (await this.getContext(b)).unlinkLogin(e.providerSchemeName, e.providerKey);
  } catch (r) {
    let t = this.localize.term("errors_receivedErrorFromServer");
    r instanceof Error ? t = r.message : typeof r == "object" && r.title && (t = r.title ?? t), console.error("[External Login] Error unlinking provider: ", r), g(this, c)?.peek("danger", {
      data: {
        headline: this.localize.term("defaultdialogs_unLinkYour", i),
        message: t
      }
    });
  }
};
s.styles = [
  D,
  P`
			uui-box {
				margin-bottom: var(--uui-size-space-3);
			}

			.header {
				display: flex;
				align-items: center;
			}

			.header-icon {
				margin-right: var(--uui-size-space-4);
			}
		`
];
p([
  S({ attribute: !1 })
], s.prototype, "modalContext", 2);
p([
  M()
], s.prototype, "_items", 2);
s = p([
  T("umb-current-user-external-login-modal")
], s);
const ie = s;
export {
  s as UmbCurrentUserExternalLoginModalElement,
  ie as default
};
//# sourceMappingURL=external-login-modal.element-Soca35Zh.js.map
