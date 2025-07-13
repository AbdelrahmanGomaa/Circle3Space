import { f as m, o as t } from "./manifests-BeI4zfAH.js";
import { UmbItemServerDataSourceBase as o, UmbItemRepositoryBase as n } from "@umbraco-cms/backoffice/repository";
import { MemberService as s } from "@umbraco-cms/backoffice/external/backend-api";
class a extends o {
  /**
   * Creates an instance of UmbMemberItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberItemServerDataSource
   */
  constructor(r) {
    super(r, {
      getItems: c,
      mapper: u
    });
  }
}
const c = (e) => s.getItemMember({ id: e }), u = (e) => ({
  entityType: m,
  unique: e.id,
  name: e.variants[0].name || "",
  kind: e.kind,
  memberType: {
    unique: e.memberType.id,
    icon: e.memberType.icon,
    collection: e.memberType.collection ? { unique: e.memberType.collection.id } : null
  },
  variants: e.variants.map((r) => ({
    name: r.name,
    culture: r.culture || null
  }))
});
class b extends n {
  constructor(r) {
    super(r, a, t);
  }
}
export {
  b as UmbMemberItemRepository,
  b as default
};
//# sourceMappingURL=member-item.repository-DweaLT0x.js.map
