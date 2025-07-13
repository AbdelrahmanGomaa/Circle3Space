import { b as r, m as a } from "./language-access.workspace.context-token-ChA0uFUc.js";
import { UmbItemServerDataSourceBase as o, UmbItemRepositoryBase as s } from "@umbraco-cms/backoffice/repository";
import { LanguageService as m } from "@umbraco-cms/backoffice/external/backend-api";
class n extends o {
  /**
   * Creates an instance of UmbLanguageItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbLanguageItemServerDataSource
   */
  constructor(t) {
    super(t, {
      getItems: u,
      mapper: c
    });
  }
}
const u = (e) => m.getItemLanguage({ isoCode: e }), c = (e) => ({
  unique: e.isoCode,
  name: e.name,
  entityType: r
});
class I extends s {
  constructor(t) {
    super(t, n, a);
  }
}
export {
  I as UmbLanguageItemRepository,
  I as default
};
//# sourceMappingURL=language-item.repository-DcAKfbxg.js.map
