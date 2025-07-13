import { h as s, E as u } from "./constants-hBehNVbJ.js";
import { DataTypeService as t } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as i } from "@umbraco-cms/backoffice/resources";
import { UmbId as p } from "@umbraco-cms/backoffice/id";
import { UmbDetailRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class d {
  #r;
  /**
   * Creates an instance of UmbDataTypeFolderServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDataTypeFolderServerDataSource
   */
  constructor(r) {
    this.#r = r;
  }
  /**
   * Creates a scaffold for a Data Type folder
   * @param {Partial<UmbFolderModel>} [preset]
   * @returns {*}
   * @memberof UmbDataTypeFolderServerDataSource
   */
  async createScaffold(r) {
    return { data: {
      entityType: s,
      unique: p.new(),
      name: "",
      ...r
    } };
  }
  /**
   * Fetches a Data Type folder from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDataTypeFolderServerDataSource
   */
  async read(r) {
    if (!r) throw new Error("Unique is missing");
    const { data: e, error: a } = await i(
      this.#r,
      t.getDataTypeFolderById({
        id: r
      })
    );
    return e ? { data: {
      entityType: s,
      unique: e.id,
      name: e.name
    } } : { error: a };
  }
  /**
   * Creates a Data Type folder on the server
   * @param {UmbFolderModel} model
   * @returns {*}
   * @memberof UmbDataTypeFolderServerDataSource
   */
  async create(r, e) {
    if (!r) throw new Error("Data is missing");
    if (!r.unique) throw new Error("Unique is missing");
    if (!r.name) throw new Error("Name is missing");
    const a = {
      id: r.unique,
      parent: e ? { id: e } : null,
      name: r.name
    }, { error: n } = await i(
      this.#r,
      t.postDataTypeFolder({
        requestBody: a
      })
    );
    return n ? { error: n } : this.read(r.unique);
  }
  /**
   * Updates a Data Type folder on the server
   * @param {UmbFolderModel} model
   * @returns {*}
   * @memberof UmbDataTypeFolderServerDataSource
   */
  async update(r) {
    if (!r) throw new Error("Data is missing");
    if (!r.unique) throw new Error("Unique is missing");
    if (!r.name) throw new Error("Folder name is missing");
    const { error: e } = await i(
      this.#r,
      t.putDataTypeFolderById({
        id: r.unique,
        requestBody: { name: r.name }
      })
    );
    return e ? { error: e } : this.read(r.unique);
  }
  /**
   * Deletes a Data Type folder on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDataTypeServerDataSource
   */
  async delete(r) {
    if (!r) throw new Error("Unique is missing");
    return i(
      this.#r,
      t.deleteDataTypeFolderById({
        id: r
      })
    );
  }
}
class E extends c {
  constructor(r) {
    super(r, d, u);
  }
}
export {
  E as UmbDataTypeFolderRepository,
  E as api
};
//# sourceMappingURL=data-type-folder.repository-Bxunr72C.js.map
