import { UserGroupService as o } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemServerDataSourceBase as t, UmbItemRepositoryBase as s } from "@umbraco-cms/backoffice/repository";
import { p as m } from "./constants-BCxOO27P.js";
class p extends t {
  /**
   * Creates an instance of UmbUserGroupItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbUserGroupItemServerDataSource
   */
  constructor(r) {
    super(r, {
      getItems: u,
      mapper: a
    });
  }
}
const u = (e) => o.getItemUserGroup({ id: e }), a = (e) => ({
  unique: e.id,
  name: e.name,
  icon: e.icon || null
});
class i extends s {
  constructor(r) {
    super(r, p, m);
  }
}
export {
  i as UmbUserGroupItemRepository,
  i as default
};
//# sourceMappingURL=user-group-item.repository-DLCrrhJD.js.map
