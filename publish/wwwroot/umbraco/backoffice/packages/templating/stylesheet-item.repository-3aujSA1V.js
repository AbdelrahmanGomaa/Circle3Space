import { b as n, U as m } from "./entity-CA4W0tlV.js";
import { UmbServerFilePathUniqueSerializer as l } from "@umbraco-cms/backoffice/server-file-system";
import { tryExecuteAndNotify as p } from "@umbraco-cms/backoffice/resources";
import { StylesheetService as h } from "@umbraco-cms/backoffice/external/backend-api";
import { f as u } from "./stylesheet-rule-settings-modal.token-e3AAPWoc.js";
import { UmbItemRepositoryBase as E } from "@umbraco-cms/backoffice/repository";
class S {
  #t;
  #e = new l();
  /**
   * Creates an instance of UmbStylesheetItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbStylesheetItemServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Fetches the items for the given uniques from the server
   * @param {Array<string>} uniques
   * @returns {*}
   * @memberof UmbStylesheetItemServerDataSource
   */
  async getItems(t) {
    if (!t) throw new Error("Uniques are missing");
    const a = t.map((r) => {
      const e = this.#e.toServerPath(r);
      return e || null;
    }).filter((r) => r !== null), { data: s, error: i } = await p(
      this.#t,
      h.getItemStylesheet({
        path: a
      })
    );
    return s ? { data: s.map((e) => ({
      entityType: e.isFolder ? n : m,
      unique: this.#e.toUnique(e.path),
      parentUnique: e.parent ? this.#e.toUnique(e.parent.path) : null,
      name: e.name,
      isFolder: e.isFolder
    })) } : { error: i };
  }
}
class d extends E {
  constructor(t) {
    super(t, S, u);
  }
}
export {
  d as UmbStylesheetItemRepository,
  d as default
};
//# sourceMappingURL=stylesheet-item.repository-3aujSA1V.js.map
