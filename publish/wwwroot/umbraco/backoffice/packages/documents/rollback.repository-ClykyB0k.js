import { DocumentVersionService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as s } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as o } from "@umbraco-cms/backoffice/class-api";
class i {
  #e;
  /**
   * Creates an instance of UmbRollbackServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbRollbackServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Get a list of versions for a document
   * @param id
   * @param culture
   * @returns {*}
   * @memberof UmbRollbackServerDataSource
   */
  getVersionsByDocumentId(e, t) {
    return s(this.#e, r.getDocumentVersion({ documentId: e, culture: t }));
  }
  /**
   * Get a specific version by id
   * @param versionId
   * @returns {*}
   * @memberof UmbRollbackServerDataSource
   */
  getVersionById(e) {
    return s(this.#e, r.getDocumentVersionById({ id: e }));
  }
  setPreventCleanup(e, t) {
    return s(
      this.#e,
      r.putDocumentVersionByIdPreventCleanup({ id: e, preventCleanup: t })
    );
  }
  rollback(e, t) {
    return s(
      this.#e,
      r.postDocumentVersionByIdRollback({ id: e, culture: t })
    );
  }
}
class l extends o {
  #e;
  constructor(e) {
    super(e), this.#e = new i(this);
  }
  async requestVersionsByDocumentId(e, t) {
    return await this.#e.getVersionsByDocumentId(e, t);
  }
  async requestVersionById(e) {
    return await this.#e.getVersionById(e);
  }
  async setPreventCleanup(e, t) {
    return await this.#e.setPreventCleanup(e, t);
  }
  async rollback(e, t) {
    return await this.#e.rollback(e, t);
  }
}
export {
  l as UmbRollbackRepository,
  l as default
};
//# sourceMappingURL=rollback.repository-ClykyB0k.js.map
