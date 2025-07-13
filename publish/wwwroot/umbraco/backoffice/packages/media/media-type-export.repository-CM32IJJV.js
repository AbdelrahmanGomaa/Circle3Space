import { MediaTypeService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as p } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as n } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class m {
  #t;
  /**
   * Creates an instance of UmbExportMediaTypeServerDataSource.
   * @param {UmbControllerHost} host
   * @memberof UmbExportMediaTypeServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Export an item for the given id to the destination unique
   * @param {unique} unique
   * @returns {*}
   * @memberof UmbExportMediaTypeServerDataSource
   */
  async export(t) {
    if (!t) throw new Error("Unique is missing");
    return p(this.#t, a.getMediaTypeByIdExport({ id: t }));
  }
}
class E extends c {
  #t = new m(this);
  async requestExport(t) {
    const { data: r, error: e } = await this.#t.export(t);
    if (!e) {
      const i = await this.getContext(n), s = { data: { message: "Exported" } };
      i.peek("positive", s);
    }
    return { data: r, error: e };
  }
}
export {
  E as UmbExportMediaTypeRepository,
  E as api
};
//# sourceMappingURL=media-type-export.repository-CM32IJJV.js.map
