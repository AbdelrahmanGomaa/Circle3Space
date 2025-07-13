import { q as n, o as l, c as p } from "./partial-view-workspace.context-token-BPSaKQI9.js";
import { UmbServerFilePathUniqueSerializer as m } from "@umbraco-cms/backoffice/server-file-system";
import { tryExecuteAndNotify as u } from "@umbraco-cms/backoffice/resources";
import { PartialViewService as h } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class I {
  #t;
  #r = new m();
  /**
   * Creates an instance of UmbPartialViewItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbPartialViewItemServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Fetches the items for the given uniques from the server
   * @param {Array<string>} uniques
   * @returns {*}
   * @memberof UmbPartialViewItemServerDataSource
   */
  async getItems(t) {
    if (!t) throw new Error("Uniques are missing");
    const s = t.map((e) => {
      const r = this.#r.toServerPath(e);
      return r || null;
    }).filter((e) => e !== null), { data: a, error: o } = await u(
      this.#t,
      h.getItemPartialView({
        path: s
      })
    );
    return a ? { data: a.map((r) => ({
      entityType: r.isFolder ? n : l,
      unique: this.#r.toUnique(r.path),
      parentUnique: r.parent ? this.#r.toUnique(r.parent.path) : null,
      name: r.name,
      isFolder: r.isFolder,
      path: r.path
    })) } : { error: o };
  }
}
class f extends c {
  constructor(t) {
    super(t, I, p);
  }
}
export {
  f as UmbPartialViewItemRepository,
  f as default
};
//# sourceMappingURL=partial-view-item.repository-PVDrrKEt.js.map
