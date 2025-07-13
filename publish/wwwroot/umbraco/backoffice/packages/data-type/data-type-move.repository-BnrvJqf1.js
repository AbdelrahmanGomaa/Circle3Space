import { DataTypeService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as s } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as a } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
class m {
  #t;
  /**
   * Creates an instance of UmbMoveDataTypeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMoveDataTypeServerDataSource
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
   * @memberof UmbMoveDataTypeServerDataSource
   */
  async moveTo(t) {
    if (!t.unique) throw new Error("Unique is missing");
    if (t.destination.unique === void 0) throw new Error("Destination unique is missing");
    return s(
      this.#t,
      r.putDataTypeByIdMove({
        id: t.unique,
        requestBody: {
          target: t.destination.unique ? { id: t.destination.unique } : null
        }
      })
    );
  }
}
class y extends u {
  #t = new m(this);
  async requestMoveTo(t) {
    const { error: e } = await this.#t.moveTo(t);
    if (!e) {
      const o = await this.getContext(a), n = { data: { message: "Moved" } };
      o.peek("positive", n);
    }
    return { error: e };
  }
}
export {
  y as UmbMoveDataTypeRepository,
  y as api
};
//# sourceMappingURL=data-type-move.repository-BnrvJqf1.js.map
