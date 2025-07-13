import { MediaService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as s } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
class d {
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
   * Get the audit log for a Media
   * @param {UmbAuditLogRequestArgs} args
   * @returns {*}
   * @memberof UmbMediaAuditLogServerDataSource
   */
  async getAuditLog(t) {
    const { data: r, error: i } = await s(
      this.#t,
      a.getMediaByIdAuditLog({
        id: t.unique,
        orderDirection: t.orderDirection,
        // TODO: fix this type cast
        sinceDate: t.sinceDate,
        skip: t.skip,
        take: t.take
      })
    );
    return r ? { data: { items: r.items.map((e) => ({
      user: { unique: e.user.id },
      timestamp: e.timestamp,
      logType: e.logType,
      // TODO: fix this type cast
      comment: e.comment,
      parameters: e.parameters
    })), total: r.total } } : { error: i };
  }
}
class y extends u {
  #t;
  /**
   * Creates an instance of UmbMediaAuditLogRepository.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaAuditLogRepository
   */
  constructor(t) {
    super(t), this.#t = new d(t);
  }
  /**
   * Request the audit log for a Media
   * @param {UmbAuditLogRequestArgs} args
   * @returns {*}
   * @memberof UmbMediaAuditLogRepository
   */
  async requestAuditLog(t) {
    return this.#t.getAuditLog(t);
  }
}
export {
  y as U
};
//# sourceMappingURL=media-audit-log.repository-aXbdezOC.js.map
