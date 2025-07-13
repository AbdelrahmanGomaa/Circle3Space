import { m as s, k as u } from "./constants-CHY0fXo5.js";
import { MediaTypeService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as t } from "@umbraco-cms/backoffice/resources";
import { UmbId as d } from "@umbraco-cms/backoffice/id";
import { UmbDetailRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
class c {
  #r;
  /**
   * Creates an instance of UmbMediaTypeFolderServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaTypeFolderServerDataSource
   */
  constructor(r) {
    this.#r = r;
  }
  /**
   * Creates a scaffold for a Media Type folder
   * @param {Partial<UmbFolderModel>} [preset]
   * @returns {*}
   * @memberof UmbMediaTypeFolderServerDataSource
   */
  async createScaffold(r) {
    return { data: {
      entityType: s,
      unique: d.new(),
      name: "",
      ...r
    } };
  }
  /**
   * Fetches a Media Type folder from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMediaTypeFolderServerDataSource
   */
  async read(r) {
    if (!r) throw new Error("Unique is missing");
    const { data: e, error: a } = await t(
      this.#r,
      i.getMediaTypeFolderById({
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
   * Creates a Media Type folder on the server
   * @param {UmbFolderModel} model
   * @returns {*}
   * @memberof UmbMediaTypeFolderServerDataSource
   */
  async create(r, e) {
    if (!r) throw new Error("Data is missing");
    if (!r.unique) throw new Error("Unique is missing");
    if (!r.name) throw new Error("Name is missing");
    const a = {
      id: r.unique,
      parent: e ? { id: e } : null,
      name: r.name
    }, { error: n } = await t(
      this.#r,
      i.postMediaTypeFolder({
        requestBody: a
      })
    );
    return n ? { error: n } : this.read(r.unique);
  }
  /**
   * Updates a Media Type folder on the server
   * @param {UmbUpdateFolderModel} model
   * @returns {*}
   * @memberof UmbMediaTypeFolderServerDataSource
   */
  async update(r) {
    if (!r) throw new Error("Data is missing");
    if (!r.unique) throw new Error("Unique is missing");
    if (!r.name) throw new Error("Folder name is missing");
    const { error: e } = await t(
      this.#r,
      i.putMediaTypeFolderById({
        id: r.unique,
        requestBody: { name: r.name }
      })
    );
    return e ? { error: e } : this.read(r.unique);
  }
  /**
   * Deletes a Media Type folder on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMediaTypeServerDataSource
   */
  async delete(r) {
    if (!r) throw new Error("Unique is missing");
    return t(
      this.#r,
      i.deleteMediaTypeFolderById({
        id: r
      })
    );
  }
}
class T extends m {
  constructor(r) {
    super(r, c, u);
  }
}
export {
  T as UmbMediaTypeFolderRepository,
  T as default
};
//# sourceMappingURL=media-type-folder.repository-DbqwPAKh.js.map
