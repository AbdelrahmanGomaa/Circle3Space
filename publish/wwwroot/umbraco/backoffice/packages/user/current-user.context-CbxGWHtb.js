import "./current-user.store.token-N-3TWEFa.js";
import { UmbCurrentUserRepository as o } from "./current-user.repository-DHj5cLiS.js";
import "@umbraco-cms/backoffice/user";
import { UmbContextBase as n } from "@umbraco-cms/backoffice/class-api";
import { UmbObjectState as u } from "@umbraco-cms/backoffice/observable-api";
import { U as h } from "./current-user.context.token-BnYpMzWI.js";
import { filter as l, firstValueFrom as r } from "@umbraco-cms/backoffice/external/rxjs";
import { UMB_AUTH_CONTEXT as c } from "@umbraco-cms/backoffice/auth";
import { umbLocalizationRegistry as m } from "@umbraco-cms/backoffice/localization";
import { umbExtensionsRegistry as g } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_SECTION_PATH_PATTERN as b } from "@umbraco-cms/backoffice/section";
import { UMB_APP_CONTEXT as d } from "@umbraco-cms/backoffice/app";
import { ensurePathEndsWithSlash as U } from "@umbraco-cms/backoffice/utils";
class y extends n {
  constructor(t) {
    super(t, h), this.#e = new u(void 0), this.currentUser = this.#e.asObservable().pipe(l((e) => !!e)), this.allowedSections = this.#e.asObservablePart((e) => e?.allowedSections), this.avatarUrls = this.#e.asObservablePart((e) => e?.avatarUrls), this.documentStartNodeUniques = this.#e.asObservablePart((e) => e?.documentStartNodeUniques), this.email = this.#e.asObservablePart((e) => e?.email), this.fallbackPermissions = this.#e.asObservablePart((e) => e?.fallbackPermissions), this.hasAccessToAllLanguages = this.#e.asObservablePart((e) => e?.hasAccessToAllLanguages), this.hasAccessToSensitiveData = this.#e.asObservablePart((e) => e?.hasAccessToSensitiveData), this.hasDocumentRootAccess = this.#e.asObservablePart((e) => e?.hasDocumentRootAccess), this.hasMediaRootAccess = this.#e.asObservablePart((e) => e?.hasMediaRootAccess), this.isAdmin = this.#e.asObservablePart((e) => e?.isAdmin), this.languageIsoCode = this.#e.asObservablePart((e) => e?.languageIsoCode), this.languages = this.#e.asObservablePart((e) => e?.languages), this.mediaStartNodeUniques = this.#e.asObservablePart((e) => e?.mediaStartNodeUniques), this.name = this.#e.asObservablePart((e) => e?.name), this.permissions = this.#e.asObservablePart((e) => e?.permissions), this.unique = this.#e.asObservablePart((e) => e?.unique), this.userName = this.#e.asObservablePart((e) => e?.userName), this.#s = new o(this), this.consumeContext(c, (e) => {
      this.#t = e, this.#a();
    }), this.observe(this.languageIsoCode, (e) => {
      e && m.loadLanguage(e);
    });
  }
  #e;
  #t;
  #s;
  /**
   * Loads the current user
   */
  async load() {
    const { asObservable: t } = await this.#s.requestCurrentUser();
    t && await this.observe(t(), (e) => {
      this.#e?.setValue(e), this.#r();
    }).asPromise();
  }
  /**
   * Checks if a user is the current user.
   * @param userUnique The user id to check
   * @returns True if the user is the current user, otherwise false
   */
  async isUserCurrentUser(t) {
    return (await r(this.currentUser))?.unique === t;
  }
  /**
   * Checks if the current user is an admin.
   * @returns True if the current user is an admin, otherwise false
   */
  async isCurrentUserAdmin() {
    return (await r(this.currentUser))?.isAdmin ?? !1;
  }
  /**
   * Get the allowed sections for the current user
   * @returns {Array<string> | undefined} The allowed sections for the current user
   */
  getAllowedSection() {
    return this.#e.getValue()?.allowedSections;
  }
  /**
   * Get the avatar urls for the current user
   * @returns {Array<string> | undefined} The avatar urls for the current user
   */
  getAvatarUrls() {
    return this.#e.getValue()?.avatarUrls;
  }
  /**
   * Get the document start node uniques for the current user
   * @returns {Array<UmbReferenceByUnique> | undefined} The document start node uniques for the current user
   */
  getDocumentStartNodeUniques() {
    return this.#e.getValue()?.documentStartNodeUniques;
  }
  /**
   * Get the email for the current user
   * @returns {string | undefined} The email for the current user
   */
  getEmail() {
    return this.#e.getValue()?.email;
  }
  /**
   * Get the fallback permissions for the current user
   * @returns {Array<string> | undefined} The fallback permissions for the current user
   */
  getFallbackPermissions() {
    return this.#e.getValue()?.fallbackPermissions;
  }
  /**
   * Get if the current user has access to all languages
   * @returns {boolean | undefined} True if the current user has access to all languages, otherwise false
   */
  getHasAccessToAllLanguages() {
    return this.#e.getValue()?.hasAccessToAllLanguages;
  }
  /**
   * Get if the current user has access to sensitive data
   * @returns {boolean | undefined} True if the current user has access to sensitive data, otherwise false
   */
  getHasAccessToSensitiveData() {
    return this.#e.getValue()?.hasAccessToSensitiveData;
  }
  /**
   * Get if the current user has document root access
   * @returns {boolean | undefined} True if the current user has document root access, otherwise false
   */
  getHasDocumentRootAccess() {
    return this.#e.getValue()?.hasDocumentRootAccess;
  }
  /**
   * Get if the current user has media root access
   * @returns {boolean | undefined} True if the current user has media root access, otherwise false
   */
  getHasMediaRootAccess() {
    return this.#e.getValue()?.hasMediaRootAccess;
  }
  /**
   * Get if the current user is an admin
   * @returns {boolean | undefined} True if the current user is an admin, otherwise false
   */
  getIsAdmin() {
    return this.#e.getValue()?.isAdmin;
  }
  /**
   * Get the language iso code for the current user
   * @returns {string | undefined} The language iso code for the current user
   */
  getLanguageIsoCode() {
    return this.#e.getValue()?.languageIsoCode;
  }
  /**
   * Get the languages for the current user
   * @returns {Array<string> | undefined} The languages for the current user
   */
  getLanguages() {
    return this.#e.getValue()?.languages;
  }
  /**
   * Get the media start node uniques for the current user
   * @returns {Array<UmbReferenceByUnique> | undefined} The media start node uniques for the current user
   */
  getMediaStartNodeUniques() {
    return this.#e.getValue()?.mediaStartNodeUniques;
  }
  /**
   * Get the name for the current user
   * @returns {string | undefined} The name for the current user
   */
  getName() {
    return this.#e.getValue()?.name;
  }
  /**
   * Get the permissions for the current user
   * @returns {Array<DocumentPermissionPresentationModel | UnknownTypePermissionPresentationModel> | undefined} The permissions for the current user
   */
  getPermissions() {
    return this.#e.getValue()?.permissions;
  }
  /**
   * Get the unique for the current user
   * @returns {string | undefined} The unique for the current user
   */
  getUnique() {
    return this.#e.getValue()?.unique;
  }
  /**
   * Get the user name for the current user
   * @returns {string | undefined} The user name for the current user
   */
  getUserName() {
    return this.#e.getValue()?.userName;
  }
  #a() {
    this.#t && this.observe(this.#t.isAuthorized, (t) => {
      t && this.load();
    });
  }
  async #r() {
    const t = new URL(window.location.href), s = (await this.getContext(d)).getBackofficePath();
    if (t.pathname === s || t.pathname === U(s)) {
      const a = await this.#i();
      if (!a) return;
      const i = b.generateLocal({
        sectionName: a.meta.pathname
      });
      history.pushState(null, "", i);
    }
  }
  async #i() {
    const t = this.#e.getValue();
    return t ? (await this.observe(
      g.byTypeAndAliases("section", t.allowedSections),
      () => {
      }
    ).asPromise())[0] : void 0;
  }
}
export {
  y as UmbCurrentUserContext,
  y as default
};
//# sourceMappingURL=current-user.context-CbxGWHtb.js.map
