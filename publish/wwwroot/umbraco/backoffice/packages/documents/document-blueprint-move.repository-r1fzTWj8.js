import { DocumentBlueprintService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as s } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as u } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
class a {
  #t;
  /**
   * Creates an instance of UmbMoveDocumentBlueprintServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMoveDocumentBlueprintServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Move an item for the given id to the target unique
   * @param {string} unique
   * @param {(string | null)} targetUnique
   * @param args
   * @returns {*}
   * @memberof UmbMoveDocumentBlueprintServerDataSource
   */
  async moveTo(t) {
    if (!t.unique) throw new Error("Unique is missing");
    if (t.destination.unique === void 0) throw new Error("Destination unique is missing");
    return s(
      this.#t,
      r.putDocumentBlueprintByIdMove({
        id: t.unique,
        requestBody: {
          target: t.destination.unique ? { id: t.destination.unique } : null
        }
      })
    );
  }
}
class f extends m {
  #t = new a(this);
  async requestMoveTo(t) {
    const { error: e } = await this.#t.moveTo(t);
    if (!e) {
      const o = await this.getContext(u), n = { data: { message: "Moved" } };
      o.peek("positive", n);
    }
    return { error: e };
  }
}
export {
  f as UmbMoveDocumentBlueprintRepository,
  f as api
};
//# sourceMappingURL=document-blueprint-move.repository-r1fzTWj8.js.map
