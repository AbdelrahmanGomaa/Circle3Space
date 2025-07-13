import { b as o, k as u } from "./language-access.workspace.context-token-ChA0uFUc.js";
import { LanguageService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as r } from "@umbraco-cms/backoffice/resources";
import { UmbDetailRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class f {
  #a;
  /**
   * Creates an instance of UmbLanguageServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbLanguageServerDataSource
   */
  constructor(a) {
    this.#a = a;
  }
  /**
   * Creates a new Language scaffold
   * @param {Partial<UmbLanguageDetailModel>} [preset]
   * @returns { CreateLanguageRequestModel }
   * @memberof UmbLanguageServerDataSource
   */
  async createScaffold(a = {}) {
    return { data: {
      entityType: o,
      fallbackIsoCode: null,
      isDefault: !1,
      isMandatory: !1,
      name: "",
      unique: "",
      ...a
    } };
  }
  /**
   * Fetches a Language with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbLanguageServerDataSource
   */
  async read(a) {
    if (!a) throw new Error("Unique is missing");
    const { data: e, error: t } = await r(
      this.#a,
      s.getLanguageByIsoCode({ isoCode: a })
    );
    return t || !e ? { error: t } : { data: {
      entityType: o,
      fallbackIsoCode: e.fallbackIsoCode || null,
      isDefault: e.isDefault,
      isMandatory: e.isMandatory,
      name: e.name,
      unique: e.isoCode
    } };
  }
  /**
   * Inserts a new Language on the server
   * @param {UmbLanguageDetailModel} model
   * @returns {*}
   * @memberof UmbLanguageServerDataSource
   */
  async create(a) {
    if (!a) throw new Error("Language is missing");
    const e = {
      fallbackIsoCode: a.fallbackIsoCode,
      isDefault: a.isDefault,
      isMandatory: a.isMandatory,
      isoCode: a.unique,
      name: a.name
    }, { data: t, error: n } = await r(
      this.#a,
      s.postLanguage({
        requestBody: e
      })
    );
    return t ? this.read(t) : { error: n };
  }
  /**
   * Updates a Language on the server
   * @param {UmbLanguageDetailModel} Language
   * @param model
   * @returns {*}
   * @memberof UmbLanguageServerDataSource
   */
  async update(a) {
    if (!a.unique) throw new Error("Unique is missing");
    const e = {
      fallbackIsoCode: a.fallbackIsoCode,
      isDefault: a.isDefault,
      isMandatory: a.isMandatory,
      name: a.name
    }, { error: t } = await r(
      this.#a,
      s.putLanguageByIsoCode({
        isoCode: a.unique,
        requestBody: e
      })
    );
    return t ? { error: t } : this.read(a.unique);
  }
  /**
   * Deletes a Language on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbLanguageServerDataSource
   */
  async delete(a) {
    if (!a) throw new Error("Unique is missing");
    return r(
      this.#a,
      s.deleteLanguageByIsoCode({
        isoCode: a
      })
    );
  }
}
class p extends c {
  constructor(a) {
    super(a, f, u);
  }
  async create(a) {
    return super.create(a, null);
  }
}
export {
  p as UmbLanguageDetailRepository,
  p as default
};
//# sourceMappingURL=language-detail.repository-a4uWw_br.js.map
