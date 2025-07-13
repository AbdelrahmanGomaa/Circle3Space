import { MediaTypeService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as p } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as m } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as n } from "@umbraco-cms/backoffice/repository";
class c {
  #t;
  /**
   * Creates an instance of UmbMediaTypeImportServerDataSource.
   * @param {UmbControllerHost} host
   * @memberof UmbMediaTypeImportServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Import an item for the given id to the destination unique
   * @param {temporaryUnique} temporaryUnique
   * @returns {*}
   * @memberof UmbMediaTypeImportServerDataSource
   */
  async import(t) {
    if (!t) throw new Error("Unique is missing");
    const o = {
      requestBody: { file: { id: t } }
    };
    return p(this.#t, a.postMediaTypeImport(o));
  }
}
class I extends n {
  #t = new c(this);
  async requestImport(t) {
    const { data: o, error: e } = await this.#t.import(t);
    if (!e) {
      const i = await this.getContext(m), s = { data: { message: "Imported" } };
      i.peek("positive", s);
    }
    return { data: o, error: e };
  }
}
export {
  I as UmbMediaTypeImportRepository,
  I as api
};
//# sourceMappingURL=media-type-import.repository-CMsl0c45.js.map
