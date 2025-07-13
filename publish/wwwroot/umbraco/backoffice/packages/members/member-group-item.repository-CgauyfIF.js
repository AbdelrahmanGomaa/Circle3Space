import { b as t, k as o } from "./member-group-picker-modal.element-COluPxRJ.js";
import { UmbItemServerDataSourceBase as m, UmbItemRepositoryBase as s } from "@umbraco-cms/backoffice/repository";
import { MemberGroupService as a } from "@umbraco-cms/backoffice/external/backend-api";
class p extends m {
  /**
   * Creates an instance of UmbMemberGroupItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberGroupItemServerDataSource
   */
  constructor(r) {
    super(r, {
      getItems: u,
      mapper: c
    });
  }
}
const u = (e) => a.getItemMemberGroup({ id: e }), c = (e) => ({
  unique: e.id,
  name: e.name,
  entityType: t
});
class i extends s {
  constructor(r) {
    super(r, p, o);
  }
}
export {
  i as UmbMemberGroupItemRepository,
  i as default
};
//# sourceMappingURL=member-group-item.repository-CgauyfIF.js.map
