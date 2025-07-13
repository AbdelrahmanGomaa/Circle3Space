import { DocumentService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as a } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
class m {
  #t;
  /**
   * Creates an instance of UmbAuditLogServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbAuditLogServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Get the audit log for a document
   * @param {UmbAuditLogRequestArgs} args
   * @returns {*}
   * @memberof UmbDocumentAuditLogServerDataSource
   */
  async getAuditLog(t) {
    const { data: o, error: i } = await a(
      this.#t,
      s.getDocumentByIdAuditLog({
        id: t.unique,
        orderDirection: t.orderDirection,
        // TODO: Fix type cast
        sinceDate: t.sinceDate,
        skip: t.skip,
        take: t.take
      })
    );
    return o ? { data: { items: o.items.map((e) => ({
      user: { unique: e.user.id },
      timestamp: e.timestamp,
      logType: e.logType,
      // TODO: Fix type cast
      comment: e.comment,
      parameters: e.parameters
    })), total: o.total } } : { error: i };
  }
}
class y extends u {
  #t;
  /**
   * Creates an instance of UmbDocumentAuditLogRepository.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentAuditLogRepository
   */
  constructor(t) {
    super(t), this.#t = new m(t);
  }
  /**
   * Request the audit log for a document
   * @param {UmbAuditLogRequestArgs} args
   * @returns {*}
   * @memberof UmbDocumentAuditLogRepository
   */
  async requestAuditLog(t) {
    return this.#t.getAuditLog(t);
  }
}
export {
  y as U
};
//# sourceMappingURL=document-audit-log.repository-CHm64Rly.js.map
