import { LogViewerService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as r } from "@umbraco-cms/backoffice/resources";
class h {
  #e;
  /**
   * Creates an instance of UmbLogSearchesServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbLogSearchesServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Grabs all the log viewer saved searches from the server
   * @param {{ skip?: number; take?: number }} { skip = 0, take = 100 }
   * @returns {*}
   * @memberof UmbLogSearchesServerDataSource
   */
  async getAllSavedSearches({ skip: e = 0, take: t = 100 }) {
    return await r(this.#e, a.getLogViewerSavedSearch({ skip: e, take: t }));
  }
  /**
   * Get a log viewer saved search by name from the server
   * @param {{ name: string }} { name }
   * @returns {*}
   * @memberof UmbLogSearchesServerDataSource
   */
  async getSavedSearchByName({ name: e }) {
    return await r(this.#e, a.getLogViewerSavedSearchByName({ name: e }));
  }
  /**
   *	Post a new log viewer saved search to the server
   * @param {{ requestBody?: SavedLogSearch }} { requestBody }
   * @returns {*}
   * @memberof UmbLogSearchesServerDataSource
   */
  async postLogViewerSavedSearch({ name: e, query: t }) {
    return await r(
      this.#e,
      a.postLogViewerSavedSearch({ requestBody: { name: e, query: t } })
    );
  }
  /**
   * Remove a log viewer saved search by name from the server
   * @param {{ name: string }} { name }
   * @returns {*}
   * @memberof UmbLogSearchesServerDataSource
   */
  async deleteSavedSearchByName({ name: e }) {
    return await r(this.#e, a.deleteLogViewerSavedSearchByName({ name: e }));
  }
}
class L {
  #e;
  /**
   * Creates an instance of UmbLogMessagesServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbLogMessagesServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Grabs all the loggers from the server
   * @param {{ skip?: number; take?: number }} { skip = 0, take = 100 }
   * @returns {*}
   * @memberof UmbLogMessagesServerDataSource
   */
  async getLogViewerLevel({ skip: e = 0, take: t = 100 }) {
    return await r(this.#e, a.getLogViewerLevel({ skip: e, take: t }));
  }
  /**
   * Grabs all the number of different log messages from the server
   * @param {{ skip?: number; take?: number }} { skip = 0, take = 100 }
   * @returns {*}
   * @memberof UmbLogMessagesServerDataSource
   */
  async getLogViewerLevelCount({ startDate: e, endDate: t }) {
    return await r(
      this.#e,
      a.getLogViewerLevelCount({
        startDate: e,
        endDate: t
      })
    );
  }
  /**
   *	Grabs all the log messages from the server
   * @param {{
   * 		skip?: number;
   * 		take?: number;
   * 		orderDirection?: DirectionModel;
   * 		filterExpression?: string;
   * 		logLevel?: Array<LogLevelModel>;
   * 		startDate?: string;
   * 		endDate?: string;
   * 	}} {
   * 		skip = 0,
   * 		take = 100,
   * 		orderDirection,
   * 		filterExpression,
   * 		logLevel,
   * 		startDate,
   * 		endDate,
   * 	}
   * @returns {*}
   * @memberof UmbLogMessagesServerDataSource
   */
  async getLogViewerLogs({
    skip: e = 0,
    take: t = 100,
    orderDirection: s,
    filterExpression: i,
    logLevel: g,
    startDate: o,
    endDate: c
  }) {
    return await r(
      this.#e,
      a.getLogViewerLog({
        skip: e,
        take: t,
        orderDirection: s,
        filterExpression: i,
        logLevel: g,
        startDate: o,
        endDate: c
      })
    );
  }
  /**
   * Grabs all the log message templates from the server
   * @param {{
   * 		skip?: number;
   * 		take?: number;
   * 		startDate?: string;
   * 		endDate?: string;
   * 	}} {
   * 		skip,
   * 		take = 100,
   * 		startDate,
   * 		endDate,
   * 	}
   * @returns {*}
   * @memberof UmbLogMessagesServerDataSource
   */
  async getLogViewerMessageTemplate({
    skip: e,
    take: t = 100,
    startDate: s,
    endDate: i
  }) {
    return await r(
      this.#e,
      a.getLogViewerMessageTemplate({
        skip: e,
        take: t,
        startDate: s,
        endDate: i
      })
    );
  }
  async getLogViewerValidateLogsSize({ startDate: e, endDate: t }) {
    return await r(
      this.#e,
      a.getLogViewerValidateLogsSize({
        startDate: e,
        endDate: t
      })
    );
  }
}
class u {
  #e;
  #a;
  #t;
  constructor(e) {
    this.#e = e, this.#a = new h(this.#e), this.#t = new L(this.#e);
  }
  async getSavedSearches({ skip: e, take: t }) {
    return this.#a.getAllSavedSearches({ skip: e, take: t });
  }
  async saveSearch({ name: e, query: t }) {
    return this.#a.postLogViewerSavedSearch({ name: e, query: t });
  }
  async removeSearch({ name: e }) {
    return this.#a.deleteSavedSearchByName({ name: e });
  }
  async getMessageTemplates({
    skip: e,
    take: t,
    startDate: s,
    endDate: i
  }) {
    return this.#t.getLogViewerMessageTemplate({ skip: e, take: t, startDate: s, endDate: i });
  }
  async getLogCount({ startDate: e, endDate: t }) {
    return this.#t.getLogViewerLevelCount({ startDate: e, endDate: t });
  }
  async getLogs({
    skip: e = 0,
    take: t = 100,
    orderDirection: s,
    filterExpression: i,
    logLevel: g,
    startDate: o,
    endDate: c
  }) {
    return this.#t.getLogViewerLogs({
      skip: e,
      take: t,
      orderDirection: s,
      filterExpression: i,
      logLevel: g,
      startDate: o,
      endDate: c
    });
  }
  async getLogLevels({ skip: e = 0, take: t = 100 }) {
    return this.#t.getLogViewerLevel({ skip: e, take: t });
  }
  async getLogViewerValidateLogsSize({ startDate: e, endDate: t }) {
    return this.#t.getLogViewerValidateLogsSize({ startDate: e, endDate: t });
  }
}
export {
  u as U
};
//# sourceMappingURL=log-viewer.repository-S1vcKgpy.js.map
