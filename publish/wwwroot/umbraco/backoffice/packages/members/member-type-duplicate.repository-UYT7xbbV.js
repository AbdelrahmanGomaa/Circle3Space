import { MemberTypeService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as a } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as p } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class n {
  #e;
  /**
   * Creates an instance of UmbDuplicateMemberTypeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDuplicateMemberTypeServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Duplicate an item for the given unique
   * @param {UmbDuplicateRequestArgs} args
   * @returns {*}
   * @memberof UmbDuplicateDataTypeServerDataSource
   */
  async duplicate(e) {
    if (!e.unique) throw new Error("Unique is missing");
    return a(
      this.#e,
      s.postMemberTypeByIdCopy({
        id: e.unique
      })
    );
  }
}
class f extends c {
  #e = new n(this);
  async requestDuplicate(e) {
    const { error: t } = await this.#e.duplicate(e);
    if (!t) {
      const o = await this.getContext(p), r = { data: { message: "Duplicated" } };
      o.peek("positive", r);
    }
    return { error: t };
  }
}
export {
  f as UmbDuplicateMemberTypeRepository,
  f as api
};
//# sourceMappingURL=member-type-duplicate.repository-UYT7xbbV.js.map
