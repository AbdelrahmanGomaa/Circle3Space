import { b as i } from "./entity-CA4W0tlV.js";
import { UmbServerFilePathUniqueSerializer as h } from "@umbraco-cms/backoffice/server-file-system";
import { StylesheetService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as s } from "@umbraco-cms/backoffice/resources";
import { UmbId as l } from "@umbraco-cms/backoffice/id";
import { l as u } from "./manifests-BP46ESrA.js";
import { UmbDetailRepositoryBase as f } from "@umbraco-cms/backoffice/repository";
class w {
  #t;
  #e = new h();
  /**
   * Creates an instance of UmbStylesheetFolderServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbStylesheetFolderServerDataSource
   */
  constructor(e) {
    this.#t = e;
  }
  async createScaffold(e) {
    return { data: {
      entityType: i,
      unique: l.new(),
      name: "",
      ...e
    } };
  }
  /**
   * Fetches a Stylesheet folder from the server
   * @param {string} unique
   * @returns {UmbDataSourceResponse<UmbFolderModel>}
   * @memberof UmbStylesheetFolderServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const t = this.#e.toServerPath(e);
    if (!t) throw new Error("Cannot read stylesheet folder without a path");
    const { data: r, error: o } = await s(
      this.#t,
      a.getStylesheetFolderByPath({
        path: encodeURIComponent(t)
      })
    );
    return r ? { data: {
      entityType: i,
      unique: this.#e.toUnique(r.path),
      parentUnique: r.parent ? this.#e.toUnique(r.parent.path) : null,
      name: r.name
    } } : { error: o };
  }
  /**
   * Creates a Stylesheet folder on the server
   * @param {UmbCreateFolderModel} model
   * @returns {UmbDataSourceResponse<UmbFolderModel>}
   * @memberof UmbStylesheetFolderServerDataSource
   */
  async create(e, t) {
    if (!e) throw new Error("Data is missing");
    if (!e.unique) throw new Error("Unique is missing");
    if (!e.name) throw new Error("Name is missing");
    const r = new h().toServerPath(t), o = {
      parent: r ? { path: r } : null,
      name: e.name
    }, { data: n, error: m } = await s(
      this.#t,
      a.postStylesheetFolder({
        requestBody: o
      })
    );
    if (n) {
      const c = decodeURIComponent(n), d = this.#e.toUnique(c);
      return this.read(d);
    }
    return { error: m };
  }
  /**
   * Deletes a Stylesheet folder on the server
   * @param {string} unique
   * @returns {UmbDataSourceErrorResponse}
   * @memberof UmbStylesheetServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    const t = this.#e.toServerPath(e);
    if (!t) throw new Error("Cannot delete stylesheet folder without a path");
    return s(
      this.#t,
      a.deleteStylesheetFolderByPath({
        path: encodeURIComponent(t)
      })
    );
  }
  async update() {
    throw new Error("Updating is not supported");
  }
}
class F extends f {
  constructor(e) {
    super(e, w, u);
  }
}
export {
  F as UmbStylesheetFolderRepository,
  F as default
};
//# sourceMappingURL=stylesheet-folder.repository-CMJw8wh4.js.map
