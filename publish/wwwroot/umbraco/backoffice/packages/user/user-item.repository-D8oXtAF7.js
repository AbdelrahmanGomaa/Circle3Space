import { d as t, g as s } from "./constants-BstfLIKC.js";
import { UserService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemServerDataSourceBase as o, UmbItemRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
class U extends o {
  /**
   * Creates an instance of UmbUserItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbUserItemServerDataSource
   */
  constructor(r) {
    super(r, {
      getItems: n,
      mapper: c
    });
  }
}
const n = (e) => a.getItemUser({ id: e }), c = (e) => ({
  avatarUrls: e.avatarUrls,
  entityType: t,
  name: e.name,
  unique: e.id,
  kind: e.kind
});
class d extends m {
  constructor(r) {
    super(r, U, s);
  }
}
export {
  d as UmbUserItemRepository,
  d as default
};
//# sourceMappingURL=user-item.repository-D8oXtAF7.js.map
