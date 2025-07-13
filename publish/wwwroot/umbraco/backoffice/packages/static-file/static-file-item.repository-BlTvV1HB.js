import { UmbItemServerDataSourceBase as i, UmbItemRepositoryBase as s } from "@umbraco-cms/backoffice/repository";
import { StaticFileService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbServerFilePathUniqueSerializer as r } from "@umbraco-cms/backoffice/server-file-system";
import { UMB_STATIC_FILE_ITEM_STORE_CONTEXT as m } from "./static-file-item.store-Binjae-Q.js";
class c extends i {
  /**
   * Creates an instance of UmbStaticFileItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbStaticFileItemServerDataSource
   */
  constructor(t) {
    super(t, {
      getItems: p,
      mapper: u
    });
  }
}
const p = (e) => {
  const t = new r(), a = e.map((o) => t.toServerPath(o));
  return n.getItemStaticFile({ path: a });
}, u = (e) => {
  const t = new r();
  return {
    isFolder: e.isFolder,
    name: e.name,
    parentUnique: e.parent ? t.toUnique(e.parent.path) : null,
    unique: t.toUnique(e.path)
  };
};
class F extends s {
  constructor(t) {
    super(t, c, m);
  }
}
export {
  F as UmbStaticFileItemRepository,
  F as default
};
//# sourceMappingURL=static-file-item.repository-BlTvV1HB.js.map
