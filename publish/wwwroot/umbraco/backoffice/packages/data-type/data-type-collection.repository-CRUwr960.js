import { f as m, x as p } from "./constants-hBehNVbJ.js";
import { tryExecuteAndNotify as c } from "@umbraco-cms/backoffice/resources";
import { DataTypeService as l } from "@umbraco-cms/backoffice/external/backend-api";
import { umbExtensionsRegistry as u } from "@umbraco-cms/backoffice/extension-registry";
import { UmbRepositoryBase as d } from "@umbraco-cms/backoffice/repository";
class y {
  #e;
  #t = [];
  /**
   * Creates an instance of UmbDataTypeCollectionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @DataTypeof UmbDataTypeCollectionServerDataSource
   */
  constructor(e) {
    this.#e = e, u.byType("propertyEditorUi").subscribe((t) => {
      this.#t = t;
    }).unsubscribe();
  }
  /**
   * Gets the DataType collection filtered by the given filter.
   * @param {UmbDataTypeCollectionFilterModel} filter
   * @returns {*}
   * @DataTypeof UmbDataTypeCollectionServerDataSource
   */
  async getCollection(e) {
    const { data: t, error: s } = await c(this.#e, l.getFilterDataType(e));
    if (s)
      return { error: s };
    if (!t)
      return { data: { items: [], total: 0 } };
    const { items: r, total: o } = t;
    return { data: { items: r.map((i) => ({
      entityType: m,
      unique: i.id,
      name: i.name,
      propertyEditorSchemaAlias: i.editorAlias,
      propertyEditorUiAlias: i.editorUiAlias,
      icon: this.#t.find((n) => n.alias === i.editorUiAlias)?.meta.icon
    })), total: o } };
  }
}
class D extends d {
  #e;
  #t;
  #i;
  constructor(e) {
    super(e), this.#e = Promise.all([
      this.consumeContext(p, (t) => {
        this.#t = t;
      }).asPromise()
    ]), this.#i = new y(e);
  }
  async requestCollection(e) {
    await this.#e;
    const { data: t, error: s } = await this.#i.getCollection(e);
    t && this.#t.appendItems(t.items);
    const r = t?.items.map((o) => o.unique) ?? [];
    return { data: t, error: s, asObservable: () => this.#t.items(r) };
  }
}
export {
  D as UmbDataTypeCollectionRepository,
  D as default
};
//# sourceMappingURL=data-type-collection.repository-CRUwr960.js.map
