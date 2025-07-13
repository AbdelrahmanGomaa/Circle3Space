import { t } from "./manifests-BUr6Ff2j.js";
import { DocumentService as o } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemServerDataSourceBase as s, UmbItemRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
class c extends s {
  /**
   * Creates an instance of UmbDocumentUrlServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentUrlServerDataSource
   */
  constructor(r) {
    super(r, { getItems: u, mapper: a });
  }
}
const u = (e) => o.getDocumentUrls({ id: e }), a = (e) => ({ unique: e.id, urls: e.urlInfos });
class i extends m {
  constructor(r) {
    super(r, c, t);
  }
}
export {
  i as UmbDocumentUrlRepository,
  i as api
};
//# sourceMappingURL=document-url.repository-CzVCI_eW.js.map
