import { a as t } from "./member-type-tree.store.context-token-D6BHGtN0.js";
import { UmbItemServerDataSourceBase as m, UmbItemRepositoryBase as o } from "@umbraco-cms/backoffice/repository";
import { MemberTypeService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { m as a } from "./input-member-type.element-Kmg-HeuV.js";
class p extends m {
  /**
   * Creates an instance of UmbMemberTypeItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberTypeItemServerDataSource
   */
  constructor(r) {
    super(r, {
      getItems: T,
      mapper: c
    });
  }
}
const T = (e) => s.getItemMemberType({ id: e }), c = (e) => ({
  entityType: t,
  unique: e.id,
  name: e.name,
  icon: e.icon || ""
});
class u extends o {
  constructor(r) {
    super(r, p, a);
  }
}
export {
  u as UmbMemberTypeItemRepository,
  u as default
};
//# sourceMappingURL=member-type-item.repository-vWncFj8S.js.map
