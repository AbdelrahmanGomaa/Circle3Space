import { b as s } from "./language-access.workspace.context-token-ChA0uFUc.js";
import { LanguageService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as l } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as i } from "@umbraco-cms/backoffice/repository";
class c {
  #t;
  /**
   * Creates an instance of UmbLanguageCollectionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbLanguageCollectionServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Gets the language collection filtered by the given filter.
   * @param {UmbLanguageCollectionFilterModel} filter
   * @returns {*}
   * @memberof UmbLanguageCollectionServerDataSource
   */
  async getCollection(t) {
    const { data: o, error: r } = await l(this.#t, n.getLanguage(t));
    return o ? { data: { items: o.items.map((e) => ({
      unique: e.isoCode,
      name: e.name,
      entityType: s,
      isDefault: e.isDefault,
      isMandatory: e.isMandatory,
      fallbackIsoCode: e.fallbackIsoCode || null
    })), total: o.total } } : { error: r };
  }
}
class y extends i {
  #t;
  constructor(t) {
    super(t), this.#t = new c(t);
  }
  async requestCollection(t) {
    return this.#t.getCollection(t);
  }
}
export {
  y as UmbLanguageCollectionRepository,
  y as default
};
//# sourceMappingURL=language-collection.repository-didMva8o.js.map
