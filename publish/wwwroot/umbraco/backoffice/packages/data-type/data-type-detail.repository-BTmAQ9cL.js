import { f as o, v as n } from "./constants-hBehNVbJ.js";
import { UmbId as y } from "@umbraco-cms/backoffice/id";
import { DataTypeService as e } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as s } from "@umbraco-cms/backoffice/resources";
import { UmbDetailRepositoryBase as l } from "@umbraco-cms/backoffice/repository";
class p {
  #i;
  /**
   * Creates an instance of UmbDataTypeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDataTypeServerDataSource
   */
  constructor(i) {
    this.#i = i;
  }
  /**
   * Creates a new Data Type scaffold
   * @param {(string | null)} parentUnique
   * @param preset
   * @returns { CreateDataTypeRequestModel }
   * @memberof UmbDataTypeServerDataSource
   */
  async createScaffold(i = {}) {
    return { data: {
      entityType: o,
      unique: y.new(),
      name: "",
      editorAlias: void 0,
      editorUiAlias: null,
      values: [],
      ...i
    } };
  }
  /**
   * Fetches a Data Type with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDataTypeServerDataSource
   */
  async read(i) {
    if (!i) throw new Error("Unique is missing");
    const { data: r, error: t } = await s(this.#i, e.getDataTypeById({ id: i }));
    return t || !r ? { error: t } : { data: {
      entityType: o,
      unique: r.id,
      name: r.name,
      editorAlias: r.editorAlias,
      editorUiAlias: r.editorUiAlias || null,
      values: r.values
    } };
  }
  /**
   * Inserts a new Data Type on the server
   * @param {UmbDataTypeDetailModel} model
   * @param parentUnique
   * @returns {*}
   * @memberof UmbDataTypeServerDataSource
   */
  async create(i, r = null) {
    if (!i) throw new Error("Data Type is missing");
    if (!i.unique) throw new Error("Data Type unique is missing");
    if (!i.editorAlias) throw new Error("Property Editor Alias is missing");
    if (!i.editorUiAlias) throw new Error("Property Editor UI Alias is missing");
    const t = {
      id: i.unique,
      parent: r ? { id: r } : null,
      name: i.name,
      editorAlias: i.editorAlias,
      editorUiAlias: i.editorUiAlias,
      values: i.values
    }, { data: a, error: d } = await s(
      this.#i,
      e.postDataType({
        requestBody: t
      })
    );
    return a ? this.read(a) : { error: d };
  }
  /**
   * Updates a DataType on the server
   * @param {UmbDataTypeDetailModel} DataType
   * @param model
   * @returns {*}
   * @memberof UmbDataTypeServerDataSource
   */
  async update(i) {
    if (!i.unique) throw new Error("Unique is missing");
    if (!i.editorAlias) throw new Error("Property Editor Alias is missing");
    if (!i.editorUiAlias) throw new Error("Property Editor UI Alias is missing");
    const r = {
      name: i.name,
      editorAlias: i.editorAlias,
      editorUiAlias: i.editorUiAlias,
      values: i.values
    }, { error: t } = await s(
      this.#i,
      e.putDataTypeById({
        id: i.unique,
        requestBody: r
      })
    );
    return t ? { error: t } : this.read(i.unique);
  }
  /**
   * Deletes a Data Type on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDataTypeServerDataSource
   */
  async delete(i) {
    if (!i) throw new Error("Unique is missing");
    return s(
      this.#i,
      e.deleteDataTypeById({
        id: i
      })
    );
  }
}
class T extends l {
  #i;
  #r;
  constructor(i) {
    super(i, p, n), this.#i = Promise.all([
      this.consumeContext(n, (r) => {
        this.#r = r;
      }).asPromise()
    ]);
  }
  async byPropertyEditorUiAlias(i) {
    if (!i) throw new Error("propertyEditorUiAlias is missing");
    return await this.#i, this.#r.withPropertyEditorUiAlias(i);
  }
}
export {
  T as UmbDataTypeDetailRepository,
  T as api
};
//# sourceMappingURL=data-type-detail.repository-BTmAQ9cL.js.map
