import { DataTypeService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as r } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as s } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
class p {
  #t;
  /**
   * Creates an instance of UmbDuplicateDataTypeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDuplicateDataTypeServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Duplicate an item for the given unique to the destination unique
   * @param {UmbDuplicateToRequestArgs} args
   * @returns {*}
   * @memberof UmbDuplicateDataTypeServerDataSource
   */
  async duplicateTo(t) {
    if (!t.unique) throw new Error("Unique is missing");
    if (t.destination.unique === void 0) throw new Error("Destination unique is missing");
    return r(
      this.#t,
      a.postDataTypeByIdCopy({
        id: t.unique,
        requestBody: {
          target: t.destination.unique ? { id: t.destination.unique } : null
        }
      })
    );
  }
}
class l extends u {
  #t = new p(this);
  async requestDuplicateTo(t) {
    const { error: i } = await this.#t.duplicateTo(t);
    if (!i) {
      const o = await this.getContext(s), n = { data: { message: "Duplicated" } };
      o.peek("positive", n);
    }
    return { error: i };
  }
}
export {
  l as UmbDuplicateDataTypeRepository,
  l as api
};
//# sourceMappingURL=data-type-duplicate.repository-3siU-n8D.js.map
