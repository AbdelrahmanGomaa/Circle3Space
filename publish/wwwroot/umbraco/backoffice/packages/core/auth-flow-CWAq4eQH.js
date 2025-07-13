import { css as b, property as p, customElement as R, nothing as S, html as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as q } from "@umbraco-cms/backoffice/style";
import { FetchRequestor as A, AuthorizationServiceConfiguration as z, AuthorizationNotifier as P, BaseTokenRequestHandler as O, LocalStorageBackend as $, RedirectRequestHandler as N, TokenResponse as L, AuthorizationRequest as v, RevokeTokenRequest as g, TokenRequest as y, GRANT_TYPE_AUTHORIZATION_CODE as U, GRANT_TYPE_REFRESH_TOKEN as x, BasicQueryStringUtils as C } from "@umbraco-cms/backoffice/external/openid";
import { Subject as F } from "@umbraco-cms/backoffice/external/rxjs";
var B = Object.defineProperty, W = Object.getOwnPropertyDescriptor, T = (o) => {
  throw TypeError(o);
}, h = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? W(e, t) : e, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (s = (i ? r(e, t, s) : r(s)) || s);
  return i && s && B(e, t, s), s;
}, D = (o, e, t) => e.has(o) || T("Cannot " + t), w = (o, e, t) => (D(o, e, "read from private field"), t ? t.call(o) : e.get(o)), H = (o, e, t) => e.has(o) ? T("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(o) : e.set(o, t), c, m;
let a = class extends E {
  constructor() {
    super(...arguments), H(this, c);
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("part", "auth-provider-default");
  }
  render() {
    return _`
			<uui-button
				type="button"
				@click=${() => this.onSubmit(this.manifest)}
				id="auth-provider-button"
				.label=${w(this, c, m)}
				.look=${this.manifest.meta?.defaultView?.look ?? "outline"}
				.color=${this.manifest.meta?.defaultView?.color ?? "default"}>
				${this.manifest.meta?.defaultView?.icon ? _`<uui-icon id="icon" .name=${this.manifest.meta?.defaultView?.icon}></uui-icon>` : S}
				${w(this, c, m)}
			</uui-button>
		`;
  }
};
c = /* @__PURE__ */ new WeakSet();
m = function() {
  const o = this.manifest.meta?.label ?? this.manifest.forProviderName, e = this.localize.string(o);
  return this.localize.term("login_signInWith", e);
};
a.styles = [
  q,
  b`
			:host {
				display: block;
			}

			#auth-provider-button {
				width: 100%;
			}

			#icon {
				margin-right: var(--uui-size-space-1);
			}
		`
];
h([
  p({ attribute: !1 })
], a.prototype, "userLoginState", 2);
h([
  p({ attribute: !1 })
], a.prototype, "manifest", 2);
h([
  p({ attribute: !1 })
], a.prototype, "onSubmit", 2);
a = h([
  R("umb-auth-provider-default")
], a);
const f = "umb:userAuthTokenResponse", I = new A();
class j extends C {
  parse(e) {
    return super.parse(e, !1);
  }
}
class Y {
  constructor(e, t, i, s, n = "umbraco-back-office", r = "offline_access") {
    this.authorizationSignal = new F(), this.#o = t, this.#c = i, this.#u = s, this.#i = n, this.#h = r, this.#t = new z({
      authorization_endpoint: `${e}/umbraco/management/api/v1/security/back-office/authorize`,
      token_endpoint: `${e}/umbraco/management/api/v1/security/back-office/token`,
      revocation_endpoint: `${e}/umbraco/management/api/v1/security/back-office/revoke`,
      end_session_endpoint: `${e}/umbraco/management/api/v1/security/back-office/signout`
    }), this.#l = `${e}/umbraco/management/api/v1/security/back-office/link-login`, this.#f = `${e}/umbraco/management/api/v1/security/back-office/link-login-key`, this.#m = `${e}/umbraco/management/api/v1/security/back-office/unlink-login`, this.#a = new P(), this.#r = new O(I), this.#s = new $(), this.#n = new N(this.#s, new j()), this.#n.setAuthorizationNotifier(this.#a), this.#a.setAuthorizationListener(async (u, d, l) => {
      if (l)
        throw console.error("Authorization error", l), this.authorizationSignal.next(), l;
      if (d) {
        let k;
        u.internal && u.internal.code_verifier && (k = u.internal.code_verifier), await this.#k(d.code, k), await this.performWithFreshTokens(), await this.#p();
      }
      this.authorizationSignal.next();
    });
  }
  // handlers
  #a;
  #n;
  #r;
  #s;
  // state
  #t;
  #o;
  #c;
  #i;
  #h;
  #u;
  // tokens
  #e;
  // external login
  #l;
  #f;
  #m;
  /**
   * This method will initialize all the state needed for the auth flow.
   *
   * It will:
   * - Check if there is a token response in local storage
   * - If there is a token response, check if it is valid
   * - If it is not valid, check if there is a new authorization to be made
   * - If there is a new authorization to be made, complete it
   * - If there is no token response, check if there is a new authorization to be made
   * - If there is a new authorization to be made, complete it
   */
  async setInitialState() {
    const e = await this.#s.getItem(f);
    if (e) {
      const t = new L(JSON.parse(e));
      this.#e = t;
    }
  }
  /**
   * This method will check if there is a new authorization to be made and complete it if there is.
   * This method will be called on initialization to check if there is a new authorization to be made.
   * It is useful if there is a ?code query string parameter in the URL from the server or if the auth flow
   * saved the state in local storage before redirecting the user to the login page.
   */
  completeAuthorizationIfPossible() {
    return this.#n.completeAuthorizationRequestIfPossible();
  }
  /**
   * Make an authorization request to the server using the specified identity provider.
   * This method will redirect the user to the authorization endpoint of the server.
   * @param identityProvider The identity provider to use for the authorization request.
   * @param usernameHint (Optional) The username to use for the authorization request. It will be provided to the OpenID server as a hint.
   */
  makeAuthorizationRequest(e, t) {
    const i = { prompt: "consent", access_type: "offline" };
    e !== "Umbraco" && (i.identity_provider = e), t && (i.login_hint = t);
    const s = new v(
      {
        client_id: this.#i,
        redirect_uri: this.#o,
        scope: this.#h,
        response_type: v.RESPONSE_TYPE_CODE,
        state: void 0,
        extras: i
      },
      void 0,
      !0
    );
    return this.#n.performAuthorizationRequest(this.#t, s);
  }
  /**
   * This method will check if the user is logged in by validating if there is a token stored.
   * If no token is stored, it will return false.
   * @returns true if the user is logged in, false otherwise.
   */
  isAuthorized() {
    return !!this.#e;
  }
  /**
   * Forget all cached token state
   */
  async clearTokenStorage() {
    await this.#s.removeItem(f), this.#e = void 0;
  }
  /**
   * This method will sign the user out of the application.
   */
  async signOut() {
    const e = [];
    if (this.#e) {
      const n = new g({
        token: this.#e.accessToken,
        client_id: this.#i,
        token_type_hint: "access_token"
      });
      if (e.push(this.#r.performRevokeTokenRequest(this.#t, n)), this.#e.refreshToken) {
        const r = new g({
          token: this.#e.refreshToken,
          client_id: this.#i,
          token_type_hint: "refresh_token"
        });
        e.push(
          this.#r.performRevokeTokenRequest(this.#t, r)
        );
      }
    }
    e.push(this.clearTokenStorage()), await Promise.allSettled(e);
    const t = new URL(this.#c, window.origin), i = this.#t.endSessionEndpoint;
    if (!i) {
      location.href = t.href;
      return;
    }
    const s = new URL(i, this.#o);
    s.searchParams.set("post_logout_redirect_uri", t.href), location.href = s.href;
  }
  /**
   * This method will check if the token needs to be refreshed and if so, it will refresh it and return the new access token.
   * If the token does not need to be refreshed, it will return the current access token.
   * @returns The access token for the user.
   */
  async performWithFreshTokens() {
    return this.#e?.isValid() ? Promise.resolve(this.#e.accessToken) : await this.makeRefreshTokenRequest() ? this.#e ? Promise.resolve(this.#e.accessToken) : Promise.reject("Missing tokenResponse.") : (this.clearTokenStorage(), this.#u.next(), Promise.reject("Missing tokenResponse."));
  }
  /**
   * This method will link the current user to the specified provider by redirecting the user to the link endpoint.
   * @param provider The provider to link to.
   */
  async linkLogin(e) {
    const t = await this.#_(e), i = document.createElement("form");
    i.method = "POST", i.action = this.#l, i.style.display = "none";
    const s = document.createElement("input");
    s.name = "provider", s.value = e, i.appendChild(s);
    const n = document.createElement("input");
    n.name = "linkKey", n.value = t, i.appendChild(n), document.body.appendChild(i), i.submit();
  }
  /**
   * This method will unlink the current user from the specified provider.
   * @param loginProvider
   * @param providerKey
   */
  async unlinkLogin(e, t) {
    const i = await this.performWithFreshTokens(), s = new Request(this.#m, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${i}` },
      body: JSON.stringify({ loginProvider: e, providerKey: t })
    }), n = await fetch(s);
    if (!n.ok)
      throw await n.json();
    return await this.signOut(), !0;
  }
  /**
   * Save the current token response to local storage.
   */
  async #p() {
    this.#e && await this.#s.setItem(f, JSON.stringify(this.#e.toJson()));
  }
  /**
   * This method will make a token request to the server using the authorization code.
   * @param code
   * @param codeVerifier
   */
  async #k(e, t) {
    const i = {};
    t && (i.code_verifier = t);
    const s = new y({
      client_id: this.#i,
      redirect_uri: this.#o,
      grant_type: U,
      code: e,
      refresh_token: void 0,
      extras: i
    });
    await this.#d(s);
  }
  async makeRefreshTokenRequest() {
    if (!this.#e?.refreshToken)
      return !1;
    const e = new y({
      client_id: this.#i,
      redirect_uri: this.#o,
      grant_type: x,
      code: void 0,
      refresh_token: this.#e.refreshToken,
      extras: void 0
    });
    return this.#d(e);
  }
  /**
   * This method will make a token request to the server using the refresh token.
   * If the request fails, it will sign the user out (clear the token state).
   * @param request
   */
  async #d(e) {
    try {
      return this.#e = await this.#r.performTokenRequest(this.#t, e), this.#p(), !0;
    } catch (t) {
      return console.error("Token request error", t), this.clearTokenStorage(), !1;
    }
  }
  async #_(e) {
    const t = await this.performWithFreshTokens(), i = await fetch(`${this.#f}?provider=${e}`, {
      headers: {
        Authorization: `Bearer ${t}`,
        "Content-Type": "application/json"
      }
    });
    if (!i.ok)
      throw new Error("Failed to link login");
    return i.json();
  }
}
export {
  Y as U,
  f as a,
  a as b
};
//# sourceMappingURL=auth-flow-CWAq4eQH.js.map
