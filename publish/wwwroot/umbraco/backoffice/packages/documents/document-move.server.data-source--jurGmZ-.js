import { DocumentService as e } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as t } from "@umbraco-cms/backoffice/resources";
class r {
  #i;
  /**
   * Creates an instance of UmbMoveDocumentServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMoveDocumentServerDataSource
   */
  constructor(i) {
    this.#i = i;
  }
  /**
   * Move an item for the given id to the target unique
   * @param {string} unique
   * @param {(string | null)} targetUnique
   * @param args
   * @returns {*}
   * @memberof UmbMoveDocumentServerDataSource
   */
  async moveTo(i) {
    if (!i.unique) throw new Error("Unique is missing");
    if (i.destination.unique === void 0) throw new Error("Destination unique is missing");
    return t(
      this.#i,
      e.putDocumentByIdMove({
        id: i.unique,
        requestBody: {
          target: i.destination.unique ? { id: i.destination.unique } : null
        }
      })
    );
  }
}
export {
  r as U
};
//# sourceMappingURL=document-move.server.data-source--jurGmZ-.js.map
