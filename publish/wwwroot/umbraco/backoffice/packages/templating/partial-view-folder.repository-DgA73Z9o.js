import { q as s, k as d } from "./partial-view-workspace.context-token-BPSaKQI9.js";
import { UmbServerFilePathUniqueSerializer as p } from "@umbraco-cms/backoffice/server-file-system";
import { PartialViewService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as o } from "@umbraco-cms/backoffice/resources";
import { UmbId as u } from "@umbraco-cms/backoffice/id";
import { UmbDetailRepositoryBase as l } from "@umbraco-cms/backoffice/repository";
class f {
  #e;
  #t = new p();
  /**
   * Creates an instance of UmbPartialViewFolderServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbPartialViewFolderServerDataSource
   */
  constructor(t) {
    this.#e = t;
  }
  /**
   * Creates a scaffold for a Partial View folder
   * @param {Partial<UmbFolderModel>} [preset]
   * @returns {*}
   * @memberof UmbPartialViewFolderServerDataSource
   */
  async createScaffold(t) {
    return { data: {
      entityType: s,
      unique: u.new(),
      name: "",
      ...t
    } };
  }
  /**
   * Fetches a Partial View folder from the server
   * @param {string} unique
   * @returns {UmbDataSourceResponse<UmbFolderModel>}
   * @memberof UmbPartialViewFolderServerDataSource
   */
  async read(t) {
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.toServerPath(t);
    if (!e) throw new Error("Cannot read partial view folder without a path");
    const { data: r, error: a } = await o(
      this.#e,
      n.getPartialViewFolderByPath({
        path: encodeURIComponent(e)
      })
    );
    return r ? { data: {
      entityType: s,
      unique: this.#t.toUnique(r.path),
      parentUnique: r.parent ? this.#t.toUnique(r.parent.path) : null,
      name: r.name
    } } : { error: a };
  }
  /**
   * Creates a Partial View folder on the server
   * @param {UmbFolderModel} model
   * @returns {UmbDataSourceResponse<UmbFolderModel>}
   * @memberof UmbPartialViewFolderServerDataSource
   */
  async create(t, e) {
    if (!t) throw new Error("Data is missing");
    if (!t.unique) throw new Error("Unique is missing");
    if (!t.name) throw new Error("Name is missing");
    const r = new p().toServerPath(e), a = {
      parent: r ? { path: r } : null,
      name: t.name
    }, { data: i, error: w } = await o(
      this.#e,
      n.postPartialViewFolder({
        requestBody: a
      })
    );
    if (i) {
      const c = decodeURIComponent(i), m = this.#t.toUnique(c);
      return this.read(m);
    }
    return { error: w };
  }
  /**
   * Deletes a Partial View folder on the server
   * @param {string} unique
   * @returns {UmbDataSourceErrorResponse}
   * @memberof UmbPartialViewServerDataSource
   */
  async delete(t) {
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.toServerPath(t);
    if (!e) throw new Error("Cannot delete partial view folder without a path");
    return o(
      this.#e,
      n.deletePartialViewFolderByPath({
        path: encodeURIComponent(e)
      })
    );
  }
  async update() {
    throw new Error("Updating is not supported");
  }
}
class R extends l {
  constructor(t) {
    super(t, f, d);
  }
}
export {
  R as UmbPartialViewFolderRepository,
  R as api
};
//# sourceMappingURL=partial-view-folder.repository-DgA73Z9o.js.map
