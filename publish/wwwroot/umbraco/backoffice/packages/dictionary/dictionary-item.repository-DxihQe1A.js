import { b as r, m as o } from "./paths-DZopmHn1.js";
import { UmbItemServerDataSourceBase as s, UmbItemRepositoryBase as a } from "@umbraco-cms/backoffice/repository";
import { DictionaryService as m } from "@umbraco-cms/backoffice/external/backend-api";
class i extends s {
  /**
   * Creates an instance of UmbDictionaryItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDictionaryItemServerDataSource
   */
  constructor(t) {
    super(t, {
      getItems: c,
      mapper: n
    });
  }
}
const c = (e) => m.getItemDictionary({ id: e }), n = (e) => ({
  entityType: r,
  unique: e.id,
  name: e.name
});
class u extends a {
  constructor(t) {
    super(t, i, o);
  }
}
export {
  u as UmbDictionaryItemRepository,
  u as api
};
//# sourceMappingURL=dictionary-item.repository-DxihQe1A.js.map
