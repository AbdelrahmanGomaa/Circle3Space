import { MediaTypeService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as s } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as a } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
class m {
  #e;
  /**
   * Creates an instance of UmbMoveMediaTypeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMoveMediaTypeServerDataSource
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
   * @memberof UmbMoveMediaTypeServerDataSource
   */
  async moveTo(e) {
    if (!e.unique) throw new Error("Unique is missing");
    if (e.destination.unique === void 0) throw new Error("Destination unique is missing");
    return s(
      this.#e,
      r.putMediaTypeByIdMove({
        id: e.unique,
        requestBody: {
          target: e.destination.unique ? { id: e.destination.unique } : null
        }
      })
    );
  }
}
class y extends u {
  #e = new m(this);
  async requestMoveTo(e) {
    const { error: i } = await this.#e.moveTo(e);
    if (!i) {
      const o = await this.getContext(a), n = { data: { message: "Moved" } };
      o.peek("positive", n);
    }
    return { error: i };
  }
}
export {
  y as UmbMoveMediaTypeRepository,
  y as api
};
//# sourceMappingURL=media-type-move.repository-nHNwQHaQ.js.map
