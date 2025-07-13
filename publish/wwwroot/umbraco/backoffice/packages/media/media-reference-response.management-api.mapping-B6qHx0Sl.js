import { U as i } from "./media-item.store.context-token-9YLCPlu1.js";
import { UmbControllerBase as n } from "@umbraco-cms/backoffice/class-api";
class r extends n {
  async map(e) {
    return {
      entityType: i,
      id: e.id,
      mediaType: {
        alias: e.mediaType.alias,
        icon: e.mediaType.icon,
        name: e.mediaType.name,
        unique: e.mediaType.id
      },
      name: e.name,
      // TODO: this is a hardcoded array until the server can return the correct variants array
      variants: [
        {
          culture: null,
          name: e.name ?? ""
        }
      ],
      unique: e.id
    };
  }
}
export {
  r as UmbMediaReferenceResponseManagementApiDataMapping,
  r as api
};
//# sourceMappingURL=media-reference-response.management-api.mapping-B6qHx0Sl.js.map
