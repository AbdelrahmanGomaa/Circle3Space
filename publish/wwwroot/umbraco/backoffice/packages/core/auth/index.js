import { U as h, a as u } from "../auth-flow-CWAq4eQH.js";
import { b as y } from "../auth-flow-CWAq4eQH.js";
import { U as l } from "../auth.context.token-CFi72pnR.js";
import { OpenAPI as s } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbContextBase as p } from "@umbraco-cms/backoffice/class-api";
import { UmbBooleanState as d } from "@umbraco-cms/backoffice/observable-api";
import { Subject as m, ReplaySubject as g, firstValueFrom as c, switchMap as b } from "@umbraco-cms/backoffice/external/rxjs";
import { U as A } from "../modal-token-wEQqBBXI.js";
class v extends p {
  constructor(t, e, r, o) {
    super(t, l), this.#i = new d(!1), this.#r = new m(), this.#s = new g(1), this.isInitialized = this.#s.asObservable(), this.isAuthorized = this.#i.asObservable(), this.timeoutSignal = this.#r.asObservable(), this.#n = o, this.#a = e, this.#o = r, this.#t = new h(
      e,
      this.getRedirectUrl(),
      this.getPostLogoutRedirectUrl(),
      this.#r
    ), this.observe(
      this.authorizationSignal,
      () => {
        this.getIsAuthorized();
      },
      "_authFlowAuthorizationSignal"
    ), window.addEventListener("storage", this.#u.bind(this));
  }
  #i;
  #r;
  #s;
  #n;
  #a;
  #o;
  #t;
  #e;
  #h;
  /**
   * Observable that acts as a signal for when the authorization state changes.
   */
  get authorizationSignal() {
    return this.#t.authorizationSignal;
  }
  destroy() {
    super.destroy(), window.removeEventListener("storage", this.#u.bind(this));
  }
  async #u(t) {
    t.key === u && (this.#e?.close(), await this.setInitialState(), this.authorizationSignal.next());
  }
  /**
   * Initiates the login flow.
   * @param identityProvider The provider to use for login. Default is 'Umbraco'.
   * @param redirect If true, the user will be redirected to the login page.
   * @param usernameHint The username hint to use for login.
   * @param manifest The manifest for the registered provider.
   */
  async makeAuthorizationRequest(t = "Umbraco", e, r, o) {
    const i = await this.#t.makeAuthorizationRequest(t, r);
    if (e) {
      location.href = i;
      return;
    }
    const n = o?.meta?.behavior?.popupTarget ?? "umbracoAuthPopup", a = o?.meta?.behavior?.popupFeatures ?? "width=600,height=600,menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,toolbar=no";
    return !this.#e || this.#e.closed ? this.#e = window.open(i, n, a) : this.#h !== i && (this.#e = window.open(i, n), this.#e?.focus()), this.#h = i, c(this.authorizationSignal);
  }
  /**
   * Completes the login flow.
   */
  completeAuthorizationRequest() {
    return this.#t.completeAuthorizationIfPossible();
  }
  /**
   * Checks if the user is authorized. If Authorization is bypassed, the user is always authorized.
   * @returns True if the user is authorized, otherwise false.
   */
  getIsAuthorized() {
    if (this.#n)
      return this.#i.setValue(!0), !0;
    {
      const t = this.#t.isAuthorized();
      return this.#i.setValue(t), t;
    }
  }
  /**
   * Sets the initial state of the auth flow.
   * @returns {Promise<void>}
   */
  setInitialState() {
    return this.#t.setInitialState();
  }
  /**
   * Gets the latest token from the Management API.
   * If the token is expired, it will be refreshed.
   *
   * NB! The user may experience being redirected to the login screen if the token is expired.
   * @example <caption>Using the latest token</caption>
   * ```js
   *   const token = await authContext.getLatestToken();
   *   const result = await fetch('https://my-api.com', { headers: { Authorization: `Bearer ${token}` } });
   * ```
   * @memberof UmbAuthContext
   * @returns The latest token from the Management API
   */
  getLatestToken() {
    return this.#t.performWithFreshTokens();
  }
  /**
   * Validates the token against the server and returns true if the token is valid.
   * @memberof UmbAuthContext
   * @returns True if the token is valid, otherwise false
   */
  async validateToken() {
    return this.#n || this.#t.makeRefreshTokenRequest();
  }
  /**
   * Clears the token storage.
   * @memberof UmbAuthContext
   */
  clearTokenStorage() {
    return this.#t.clearTokenStorage();
  }
  /**
   * Handles the case where the user has timed out, i.e. the token has expired.
   * This will clear the token storage and set the user as unauthorized.
   * @memberof UmbAuthContext
   */
  timeOut() {
    this.#i.setValue(!1), this.#r.next();
  }
  /**
   * Signs the user out by removing any tokens from the browser.
   * @memberof UmbAuthContext
   */
  signOut() {
    return this.#t.signOut();
  }
  /**
   * Get the server url to the Management API.
   * @memberof UmbAuthContext
   * @example <caption>Using the server url</caption>
   * ```js
   * 	const serverUrl = authContext.getServerUrl();
   * 	OpenAPI.BASE = serverUrl;
   * ```
   * @example <caption></caption>
   * ```js
   * 	const serverUrl = authContext.getServerUrl();
   * 	const token = await authContext.getLatestToken();
   * 	const result = await fetch(`${serverUrl}/umbraco/management/api/v1/my-resource`, { headers: { Authorization: `Bearer ${token}` } });
   * ```
   * @returns The server url to the Management API
   */
  getServerUrl() {
    return this.#a;
  }
  /**
   * Get the default OpenAPI configuration, which is set up to communicate with the Management API.
   * @remark This is useful if you want to communicate with your own resources generated by the [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen) library.
   * @memberof UmbAuthContext
   * @example <caption>Using the default OpenAPI configuration</caption>
   * ```js
   *  	const defaultOpenApi = authContext.getOpenApiConfiguration();
   *  	OpenAPI.BASE = defaultOpenApi.base;
   * 		OpenAPI.WITH_CREDENTIALS = defaultOpenApi.withCredentials;
   * 		OpenAPI.CREDENTIALS = defaultOpenApi.credentials;
   * 		OpenAPI.TOKEN = defaultOpenApi.token;
   * ```
   * @returns The default OpenAPI configuration
   */
  getOpenApiConfiguration() {
    return {
      base: s.BASE,
      version: s.VERSION,
      withCredentials: s.WITH_CREDENTIALS,
      credentials: s.CREDENTIALS,
      token: () => this.getLatestToken(),
      encodePath: s.ENCODE_PATH
    };
  }
  /**
   * Sets the auth context as initialized, which means that the auth context is ready to be used.
   * @remark This is used to let the app context know that the core module is ready, which means that the core auth providers are available.
   */
  setInitialized() {
    this.#s.next(), this.#s.complete();
  }
  /**
   * Gets all registered auth providers.
   * @param extensionsRegistry
   */
  getAuthProviders(t) {
    return this.#s.pipe(
      b(() => t.byType("authProvider"))
    );
  }
  /**
   * Gets the authorized redirect url.
   * @returns The redirect url, which is the backoffice path.
   */
  getRedirectUrl() {
    return `${window.location.origin}${this.#o}${this.#o.endsWith("/") ? "" : "/"}oauth_complete`;
  }
  /**
   * Gets the post logout redirect url.
   * @returns The post logout redirect url, which is the backoffice path with the logout path appended.
   */
  getPostLogoutRedirectUrl() {
    return `${window.location.origin}${this.#o}${this.#o.endsWith("/") ? "" : "/"}logout`;
  }
  /**
   * @param provider
   * @see UmbAuthFlow#linkLogin
   */
  linkLogin(t) {
    return this.#t.linkLogin(t);
  }
  /**
   * @param providerName
   * @param providerKey
   * @see UmbAuthFlow#unlinkLogin
   */
  unlinkLogin(t, e) {
    return this.#t.unlinkLogin(t, e);
  }
}
const O = new A("Umb.Modal.AppAuth", {
  modal: {
    type: "dialog"
  }
});
export {
  l as UMB_AUTH_CONTEXT,
  O as UMB_MODAL_APP_AUTH,
  u as UMB_STORAGE_TOKEN_RESPONSE_NAME,
  v as UmbAuthContext,
  y as UmbAuthProviderDefaultElement
};
//# sourceMappingURL=index.js.map
