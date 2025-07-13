import { DictionaryService as e } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as i } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as s } from "@umbraco-cms/backoffice/repository";
class a {
  #r;
  constructor(r) {
    this.#r = r;
  }
  /**
   * @description - Export a Dictionary, optionally including child items.
   * @param {string} unique
   * @param {boolean} includeChildren
   * @returns {*}
   * @memberof UmbDictionaryExportServerDataSource
   */
  async export(r, t) {
    return await i(
      this.#r,
      e.getDictionaryByIdExport({ id: r, includeChildren: t })
    );
  }
}
class y extends s {
  #r;
  constructor(r) {
    super(r), this.#r = new a(r);
  }
  /**
   * @description - Export a Dictionary, optionally including child items.
   * @param {string} unique
   * @param {boolean} [includeChildren]
   * @returns {*}
   * @memberof UmbDictionaryExportRepository
   */
  async requestExport(r, t = !1) {
    if (!r)
      throw new Error("Unique is missing");
    return this.#r.export(r, t);
  }
}
export {
  y as UmbDictionaryExportRepository,
  y as api
};
//# sourceMappingURL=dictionary-export.repository-B9P6YEJT.js.map
