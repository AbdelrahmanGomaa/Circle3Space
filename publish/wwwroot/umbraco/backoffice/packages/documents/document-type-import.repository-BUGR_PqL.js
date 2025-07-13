import { DocumentTypeService as m } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as n } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as p } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class a {
  #t;
  /**
   * Creates an instance of UmbDocumentTypeImportServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentTypeImportServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Import an item for the given id to the destination unique
   * @param {temporaryUnique} temporaryUnique
   * @returns {*}
   * @memberof UmbDocumentTypeImportServerDataSource
   */
  async import(t) {
    if (!t) throw new Error("Unique is missing");
    const o = {
      requestBody: { file: { id: t } }
    };
    return n(this.#t, m.postDocumentTypeImport(o));
  }
}
class I extends c {
  #t = new a(this);
  async requestImport(t) {
    const { data: o, error: e } = await this.#t.import(t);
    if (!e) {
      const i = await this.getContext(p), s = { data: { message: "Imported" } };
      i.peek("positive", s);
    }
    return { data: o, error: e };
  }
}
export {
  I as UmbDocumentTypeImportRepository,
  I as api
};
//# sourceMappingURL=document-type-import.repository-BUGR_PqL.js.map
