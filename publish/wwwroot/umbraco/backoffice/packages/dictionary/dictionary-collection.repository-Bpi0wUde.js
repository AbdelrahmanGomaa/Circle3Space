import { b as a } from "./paths-DZopmHn1.js";
import { DictionaryService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as s } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class l {
  #t;
  /**
   * Creates an instance of UmbDictionaryCollectionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDictionaryCollectionServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Gets the dictionary collection filtered by the given filter.
   * @param {UmbDictionaryCollectionFilterModel} filter
   * @returns {*}
   * @memberof UmbDictionaryCollectionServerDataSource
   */
  async getCollection(t) {
    const { data: e, error: n } = await s(this.#t, i.getDictionary(t));
    return e ? { data: { items: e.items.map((o) => ({
      entityType: a,
      name: o.name,
      parentUnique: o.parent ? o.parent.id : null,
      translatedIsoCodes: o.translatedIsoCodes,
      unique: o.id
    })), total: e.total } } : { error: n };
  }
}
class f extends c {
  #t;
  constructor(t) {
    super(t), this.#t = new l(t);
  }
  async requestCollection(t) {
    return this.#t.getCollection(t);
  }
}
export {
  f as UmbDictionaryCollectionRepository,
  f as default
};
//# sourceMappingURL=dictionary-collection.repository-Bpi0wUde.js.map
