import { DocumentTypeService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as s } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as u } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as a } from "@umbraco-cms/backoffice/repository";
class c {
  #t;
  /**
   * Creates an instance of UmbDuplicateDocumentTypeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDuplicateDocumentTypeServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Duplicate an item for the given id to the destination unique
   * @param {UmbDuplicateToRequestArgs} args
   * @returns {*}
   * @memberof UmbDuplicateDocumentTypeServerDataSource
   */
  async duplicateTo(t) {
    if (!t.unique) throw new Error("Unique is missing");
    if (t.destination.unique === void 0) throw new Error("Destination unique is missing");
    return s(
      this.#t,
      r.postDocumentTypeByIdCopy({
        id: t.unique,
        requestBody: {
          target: t.destination.unique ? { id: t.destination.unique } : null
        }
      })
    );
  }
}
class l extends a {
  #t = new c(this);
  async requestDuplicateTo(t) {
    const { error: e } = await this.#t.duplicateTo(t);
    if (!e) {
      const o = await this.getContext(u), n = { data: { message: "Duplicated" } };
      o.peek("positive", n);
    }
    return { error: e };
  }
}
export {
  l as UmbDuplicateDocumentTypeRepository,
  l as api
};
//# sourceMappingURL=document-type-duplicate.repository-Dzp67f9M.js.map
