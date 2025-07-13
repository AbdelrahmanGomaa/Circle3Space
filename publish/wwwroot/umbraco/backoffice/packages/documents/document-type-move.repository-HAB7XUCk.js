import { DocumentTypeService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as s } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as u } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
class a {
  #e;
  /**
   * Creates an instance of UmbMoveDocumentTypeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMoveDocumentTypeServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Move an item for the given id to the target unique
   * @param {string} unique
   * @param {(string | null)} targetUnique
   * @param args
   * @returns {*}
   * @memberof UmbMoveDocumentTypeServerDataSource
   */
  async moveTo(e) {
    if (!e.unique) throw new Error("Unique is missing");
    if (e.destination.unique === void 0) throw new Error("Destination unique is missing");
    return s(
      this.#e,
      r.putDocumentTypeByIdMove({
        id: e.unique,
        requestBody: {
          target: e.destination.unique ? { id: e.destination.unique } : null
        }
      })
    );
  }
}
class y extends m {
  #e = new a(this);
  async requestMoveTo(e) {
    const { error: t } = await this.#e.moveTo(e);
    if (!t) {
      const i = await this.getContext(u), n = { data: { message: "Moved" } };
      i.peek("positive", n);
    }
    return { error: t };
  }
}
export {
  y as UmbMoveDocumentTypeRepository,
  y as api
};
//# sourceMappingURL=document-type-move.repository-HAB7XUCk.js.map
