import { DocumentService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as t } from "@umbraco-cms/backoffice/resources";
class r {
  #e;
  /**
   * Creates an instance of UmbDuplicateDocumentServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDuplicateDocumentServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Duplicate an item for the given id to the destination unique
   * @param {UmbDuplicateDocumentRequestArgs} args
   * @returns {*}
   * @memberof UmbDuplicateDocumentServerDataSource
   */
  async duplicate(e) {
    if (!e.unique) throw new Error("Unique is missing");
    if (e.destination.unique === void 0) throw new Error("Destination unique is missing");
    return t(
      this.#e,
      i.postDocumentByIdCopy({
        id: e.unique,
        requestBody: {
          target: e.destination.unique ? { id: e.destination.unique } : null,
          relateToOriginal: e.relateToOriginal,
          includeDescendants: e.includeDescendants
        }
      })
    );
  }
}
export {
  r as U
};
//# sourceMappingURL=document-duplicate.server.data-source-bzXc2Rmw.js.map
