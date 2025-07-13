import { w as s, p as u } from "./manifests-DuLlkyg0.js";
import { UmbServerFilePathUniqueSerializer as p } from "@umbraco-cms/backoffice/server-file-system";
import { ScriptService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as i } from "@umbraco-cms/backoffice/resources";
import { UmbId as f } from "@umbraco-cms/backoffice/id";
import { UmbDetailRepositoryBase as w } from "@umbraco-cms/backoffice/repository";
class l {
  #e;
  #t = new p();
  /**
   * Creates an instance of UmbScriptFolderServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbScriptFolderServerDataSource
   */
  constructor(t) {
    this.#e = t;
  }
  /**
   * Creates a scaffold for a Script folder
   * @param {Partial<UmbFolderModel>} [preset]
   * @returns {*}
   * @memberof UmbScriptFolderServerDataSource
   */
  async createScaffold(t) {
    return { data: {
      entityType: s,
      unique: f.new(),
      name: "",
      ...t
    } };
  }
  /**
   * Fetches a Script folder from the server
   * @param {string} unique
   * @returns {UmbDataSourceResponse<UmbFolderModel>}
   * @memberof UmbScriptFolderServerDataSource
   */
  async read(t) {
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.toServerPath(t);
    if (!e) throw new Error("Cannot read script folder without a path");
    const { data: r, error: a } = await i(
      this.#e,
      n.getScriptFolderByPath({
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
   * Creates a Script folder on the server
   * @param {UmbFolderModel} model
   * @returns {UmbDataSourceResponse<UmbFolderModel>}
   * @memberof UmbScriptFolderServerDataSource
   */
  async create(t, e) {
    if (!t) throw new Error("Data is missing");
    if (!t.name) throw new Error("Name is missing");
    const r = new p().toServerPath(e), a = {
      parent: r ? { path: r } : null,
      name: t.name
    }, { data: o, error: h } = await i(
      this.#e,
      n.postScriptFolder({
        requestBody: a
      })
    );
    if (o) {
      const d = decodeURIComponent(o), m = this.#t.toUnique(d);
      return this.read(m);
    }
    return { error: h };
  }
  /**
   * Deletes a Script folder on the server
   * @param {string} unique
   * @returns {UmbDataSourceErrorResponse}
   * @memberof UmbScriptServerDataSource
   */
  async delete(t) {
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.toServerPath(t);
    if (!e) throw new Error("Cannot delete script folder without a path");
    return i(
      this.#e,
      n.deleteScriptFolderByPath({
        path: encodeURIComponent(e)
      })
    );
  }
  async update() {
    throw new Error("Updating is not supported");
  }
}
class R extends w {
  constructor(t) {
    super(t, l, u);
  }
}
export {
  R as UmbScriptFolderRepository,
  R as default
};
//# sourceMappingURL=script-folder.repository-DNKxxaJ4.js.map
