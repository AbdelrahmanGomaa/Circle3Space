import { b as r, i as o } from "./constants-CHY0fXo5.js";
import { UmbItemServerDataSourceBase as s, UmbItemRepositoryBase as a } from "@umbraco-cms/backoffice/repository";
import { MediaTypeService as m } from "@umbraco-cms/backoffice/external/backend-api";
class i extends s {
  /**
   * Creates an instance of UmbMediaTypeItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaTypeItemServerDataSource
   */
  constructor(t) {
    super(t, {
      getItems: p,
      mapper: n
    });
  }
}
const p = (e) => m.getItemMediaType({ id: e }), n = (e) => ({
  entityType: r,
  icon: e.icon || null,
  name: e.name,
  unique: e.id
});
class I extends a {
  constructor(t) {
    super(t, i, o);
  }
}
export {
  I as UmbMediaTypeItemRepository,
  I as default
};
//# sourceMappingURL=media-type-item.repository-CgmkdcvQ.js.map
