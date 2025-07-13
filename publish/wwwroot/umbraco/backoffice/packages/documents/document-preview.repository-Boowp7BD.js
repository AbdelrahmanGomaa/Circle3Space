import { UmbRepositoryBase as o } from "@umbraco-cms/backoffice/repository";
import { PreviewService as e } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as r } from "@umbraco-cms/backoffice/resources";
class c extends o {
  constructor(t) {
    super(t);
  }
  /**
   * Enters preview mode.
   * @returns {Promise<void>}
   * @memberof UmbDocumentPreviewRepository
   */
  async enter() {
    await r(e.postPreview());
  }
  /**
   * Exits preview mode.
   * @returns {Promise<void>}
   * @memberof UmbDocumentPreviewRepository
   */
  async exit() {
    await r(e.deletePreview());
  }
}
export {
  c as U
};
//# sourceMappingURL=document-preview.repository-Boowp7BD.js.map
