import { UmbDictionaryDetailRepository as s } from "./dictionary-detail.repository-CN0ZnlNz.js";
import "./paths-DZopmHn1.js";
import { DictionaryService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as m } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as a } from "@umbraco-cms/backoffice/repository";
class p {
  #r;
  constructor(r) {
    this.#r = r;
  }
  /**
   * @description - Import a dictionary
   * @param {string} temporaryFileUnique
   * @param {string?} parentUnique
   * @returns {*}
   * @memberof UmbDictionaryImportServerDataSource
   */
  async import(r, i) {
    if (!r) throw new Error("temporaryFileUnique is required");
    if (i === void 0) throw new Error("parentUnique is required");
    const t = {
      temporaryFile: { id: r },
      parent: i ? { id: i } : null
    };
    return m(
      this.#r,
      n.postDictionaryImport({
        requestBody: t
      })
    );
  }
}
class w extends a {
  #r;
  #i;
  constructor(r) {
    super(r), this.#r = new p(r), this.#i = new s(r);
  }
  /**
   * @description - Import a dictionary
   * @param {string} temporaryFileUnique
   * @param {string} [parentUnique]
   * @returns {*}
   * @memberof UmbDictionaryImportRepository
   */
  async requestImport(r, i) {
    if (!r) throw new Error("Temporary file unique is missing");
    if (i === void 0) throw new Error("Parent unique is missing");
    const { data: t, error: e } = await this.#r.import(r, i);
    return t ? this.#i.requestByUnique(t) : { data: t, error: e };
  }
}
export {
  w as UmbDictionaryImportRepository,
  w as api
};
//# sourceMappingURL=dictionary-import.repository-C5zmqQoX.js.map
