import { MediaTypeService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as s } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as a } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
class p {
  #i;
  /**
   * Creates an instance of UmbDuplicateMediaTypeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDuplicateMediaTypeServerDataSource
   */
  constructor(i) {
    this.#i = i;
  }
  /**
   * Duplicate an item for the given unique to the destination unique
   * @param {UmbDuplicateToRequestArgs} args
   * @returns {*}
   * @memberof UmbDuplicateMediaTypeServerDataSource
   */
  async duplicateTo(i) {
    if (!i.unique) throw new Error("Unique is missing");
    if (i.destination.unique === void 0) throw new Error("Destination unique is missing");
    return s(
      this.#i,
      r.postMediaTypeByIdCopy({
        id: i.unique,
        requestBody: {
          target: i.destination.unique ? { id: i.destination.unique } : null
        }
      })
    );
  }
}
class l extends u {
  #i = new p(this);
  async requestDuplicateTo(i) {
    const { error: t } = await this.#i.duplicateTo(i);
    if (!t) {
      const o = await this.getContext(a), n = { data: { message: "Duplicated" } };
      o.peek("positive", n);
    }
    return { error: t };
  }
}
export {
  l as UmbDuplicateMediaTypeRepository,
  l as api
};
//# sourceMappingURL=media-type-duplicate.repository-B6vj3V1C.js.map
