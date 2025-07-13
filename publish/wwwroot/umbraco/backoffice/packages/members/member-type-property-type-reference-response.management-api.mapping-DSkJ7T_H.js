import { g as m } from "./input-member-type.element-Kmg-HeuV.js";
import { UmbControllerBase as n } from "@umbraco-cms/backoffice/class-api";
class T extends n {
  async map(e) {
    return {
      alias: e.alias,
      memberType: {
        alias: e.memberType.alias,
        icon: e.memberType.icon,
        name: e.memberType.name,
        unique: e.memberType.id
      },
      entityType: m,
      name: e.name,
      unique: e.id
    };
  }
}
export {
  T as UmbMemberTypePropertyTypeReferenceResponseManagementApiDataMapping,
  T as api
};
//# sourceMappingURL=member-type-property-type-reference-response.management-api.mapping-DSkJ7T_H.js.map
