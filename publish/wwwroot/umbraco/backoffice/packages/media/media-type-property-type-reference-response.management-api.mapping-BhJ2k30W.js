import { a as i } from "./constants-CHY0fXo5.js";
import { UmbControllerBase as a } from "@umbraco-cms/backoffice/class-api";
class T extends a {
  async map(e) {
    return {
      alias: e.alias,
      mediaType: {
        alias: e.mediaType.alias,
        icon: e.mediaType.icon,
        name: e.mediaType.name,
        unique: e.mediaType.id
      },
      entityType: i,
      name: e.name,
      unique: e.id
    };
  }
}
export {
  T as UmbMediaTypePropertyTypeReferenceResponseManagementApiDataMapping,
  T as api
};
//# sourceMappingURL=media-type-property-type-reference-response.management-api.mapping-BhJ2k30W.js.map
