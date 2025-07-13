import { DocumentTypeService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as p } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as a } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class m {
  #t;
  /**
   * Creates an instance of UmbExportDocumentTypeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbExportDocumentTypeServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Export an item for the given id to the destination unique
   * @param {unique} unique
   * @returns {*}
   * @memberof UmbExportDocumentTypeServerDataSource
   */
  async export(t) {
    if (!t) throw new Error("Unique is missing");
    return p(this.#t, n.getDocumentTypeByIdExport({ id: t }));
  }
}
class E extends c {
  #t = new m(this);
  async requestExport(t) {
    const { data: r, error: o } = await this.#t.export(t);
    if (!o) {
      const i = await this.getContext(a), s = { data: { message: "Exported" } };
      i.peek("positive", s);
    }
    return { data: r, error: o };
  }
}
export {
  E as UmbExportDocumentTypeRepository,
  E as api
};
//# sourceMappingURL=document-type-export.repository-CeuXInYO.js.map
