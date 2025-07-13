import { UserService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as i, tryExecute as o } from "@umbraco-cms/backoffice/resources";
import { U as c } from "./current-user.store.token-N-3TWEFa.js";
import { UmbRepositoryBase as d } from "@umbraco-cms/backoffice/repository";
import { UMB_NOTIFICATION_CONTEXT as h } from "@umbraco-cms/backoffice/notification";
class l {
  #e;
  /**
   * Creates an instance of UmbCurrentUserServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbCurrentUserServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Get the current user
   * @returns {*}
   * @memberof UmbCurrentUserServerDataSource
   */
  async getCurrentUser() {
    const { data: e, error: r } = await i(this.#e, a.getUserCurrent());
    return e ? { data: {
      allowedSections: e.allowedSections,
      avatarUrls: e.avatarUrls,
      documentStartNodeUniques: e.documentStartNodeIds.map((s) => ({
        unique: s.id
      })),
      email: e.email,
      fallbackPermissions: e.fallbackPermissions,
      hasAccessToAllLanguages: e.hasAccessToAllLanguages,
      hasAccessToSensitiveData: e.hasAccessToSensitiveData,
      hasDocumentRootAccess: e.hasDocumentRootAccess,
      hasMediaRootAccess: e.hasMediaRootAccess,
      isAdmin: e.isAdmin,
      languageIsoCode: e.languageIsoCode || "en-us",
      // TODO: make global variable
      languages: e.languages,
      mediaStartNodeUniques: e.mediaStartNodeIds.map((s) => ({
        unique: s.id
      })),
      name: e.name,
      permissions: e.permissions,
      unique: e.id,
      userName: e.userName,
      userGroupUniques: e.userGroupIds.map((s) => s.id)
    } } : { error: r };
  }
  /**
   * Get the current user's external login providers
   * @memberof UmbCurrentUserServerDataSource
   */
  async getExternalLoginProviders() {
    return i(this.#e, a.getUserCurrentLoginProviders());
  }
  /**
   * Get the current user's available MFA login providers
   * @memberof UmbCurrentUserServerDataSource
   */
  async getMfaLoginProviders() {
    const { data: e, error: r } = await i(this.#e, a.getUserCurrent2Fa());
    return e ? { data: e } : { error: r };
  }
  /**
   * Enable an MFA provider
   * @param providerName
   * @param code
   * @param secret
   */
  async enableMfaProvider(e, r, t) {
    const { error: s } = await o(
      a.postUserCurrent2FaByProviderName({ providerName: e, requestBody: { code: r, secret: t } })
    );
    return s ? { error: s } : {};
  }
  /**
   * Disable an MFA provider
   * @param providerName
   * @param code
   */
  async disableMfaProvider(e, r) {
    const { error: t } = await o(a.deleteUserCurrent2FaByProviderName({ providerName: e, code: r }));
    return t ? { error: t } : {};
  }
  /**
   * Change the password for current user
   * @param id
   * @param newPassword
   * @param oldPassword
   * @param isCurrentUser
   * @returns
   */
  async changePassword(e, r) {
    return i(
      this.#e,
      a.postUserCurrentChangePassword({
        requestBody: {
          newPassword: e,
          oldPassword: r
        }
      })
    );
  }
}
class U extends d {
  #e = new l(this._host);
  #r;
  #s;
  constructor(e) {
    super(e), this.#s = Promise.all([
      this.consumeContext(c, (r) => {
        this.#r = r;
      }).asPromise(),
      this.consumeContext(h, (r) => {
        this.notificationContext = r;
      }).asPromise()
    ]);
  }
  /**
   * Request the current user
   * @returns {*}
   * @memberof UmbCurrentUserRepository
   */
  async requestCurrentUser() {
    await this.#s;
    const { data: e, error: r } = await this.#e.getCurrentUser();
    return e && this.#r?.set(e), { data: e, error: r, asObservable: () => this.#r.data };
  }
  /**
   * Request the current user's external login providers
   * @memberof UmbCurrentUserRepository
   */
  async requestExternalLoginProviders() {
    await this.#s;
    const { data: e, error: r } = await this.#e.getExternalLoginProviders();
    return e && this.#r?.setExternalLoginProviders(e), { data: e, error: r, asObservable: () => this.#r.externalLoginProviders };
  }
  /**
   * Request the current user's available MFA login providers
   * @memberof UmbCurrentUserRepository
   */
  async requestMfaLoginProviders() {
    await this.#s;
    const { data: e, error: r } = await this.#e.getMfaLoginProviders();
    return e && this.#r?.setMfaProviders(e), { data: e, error: r, asObservable: () => this.#r.mfaProviders };
  }
  /**
   * Enable an MFA provider
   * @param provider The provider to enable
   * @param providerName
   * @param code The activation code of the provider to enable
   * @param secret
   * @memberof UmbCurrentUserRepository
   */
  async enableMfaProvider(e, r, t) {
    const { error: s } = await this.#e.enableMfaProvider(e, r, t);
    return s ? { error: s } : (this.#r?.updateMfaProvider({ providerName: e, isEnabledOnUser: !0 }), {});
  }
  /**
   * Disable an MFA provider
   * @param provider The provider to disable
   * @param providerName
   * @param code The activation code of the provider to disable
   * @memberof UmbCurrentUserRepository
   */
  async disableMfaProvider(e, r) {
    const { error: t } = await this.#e.disableMfaProvider(e, r);
    return t ? { error: t } : (this.#r?.updateMfaProvider({ providerName: e, isEnabledOnUser: !1 }), {});
  }
  /**
   * Change password for current user
   * @param userId
   * @param newPassword
   * @param oldPassword
   * @param isCurrentUser
   * @returns
   */
  async changePassword(e, r) {
    if (!e) throw new Error("New password is missing");
    if (!r) throw new Error("Old password is missing");
    const { data: t, error: s } = await this.#e.changePassword(e, r);
    if (!s) {
      const u = { data: { message: "Password changed" } };
      this.notificationContext?.peek("positive", u);
    }
    return { data: t, error: s };
  }
}
export {
  U as UmbCurrentUserRepository,
  U as default
};
//# sourceMappingURL=current-user.repository-DHj5cLiS.js.map
