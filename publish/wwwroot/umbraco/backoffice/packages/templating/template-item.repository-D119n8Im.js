import { c as r, a } from "./template-item.store.context-token-rCTaUJ7s.js";
import { UmbItemServerDataSourceBase as s, UmbItemRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
import { TemplateService as o } from "@umbraco-cms/backoffice/external/backend-api";
class T extends s {
  /**
   * Creates an instance of UmbTemplateItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbTemplateItemServerDataSource
   */
  constructor(t) {
    super(t, {
      getItems: p,
      mapper: c
    });
  }
}
const p = (e) => o.getItemTemplate({ id: e }), c = (e) => ({
  entityType: r,
  unique: e.id,
  name: e.name,
  alias: e.alias
});
class l extends m {
  constructor(t) {
    super(t, T, a);
  }
}
export {
  l as UmbTemplateItemRepository,
  l as default
};
//# sourceMappingURL=template-item.repository-D119n8Im.js.map
