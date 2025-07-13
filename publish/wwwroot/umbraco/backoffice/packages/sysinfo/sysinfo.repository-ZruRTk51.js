import { UmbRepositoryBase as i } from "@umbraco-cms/backoffice/repository";
import { tryExecuteAndNotify as s, tryExecute as c } from "@umbraco-cms/backoffice/resources";
import { ServerService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { UMB_APP_CONTEXT as g } from "@umbraco-cms/backoffice/app";
class S extends i {
  constructor(t) {
    super(t, "Umb.Repository.Sysinfo");
  }
  async requestTroubleShooting() {
    const { data: t } = await s(this, a.getServerTroubleshooting());
    return t;
  }
  async requestServerInformation() {
    const { data: t } = await s(this, a.getServerInformation());
    return t;
  }
  /**
   * Check if the server has an upgrade available and return the result.
   * If the server has an upgrade available, the result will be stored in local storage.
   * If the server does not have an upgrade available, the result will be stored in local storage as well.
   * @param {string} currentVersion The current version of the server.
   * @returns {Promise<UmbServerUpgradeCheck | null>} The server upgrade check result or null if the check is not allowed or if the check failed.
   */
  async serverUpgradeCheck(t) {
    const o = await this.getContext(g), e = await this.observe(o.getServerConnection().versionCheckPeriod).asPromise();
    if (e <= 0)
      return null;
    const r = this.#e(t);
    if (r !== null && r.createdAt) {
      const n = new Date(r.createdAt);
      if (((/* @__PURE__ */ new Date()).getTime() - n.getTime()) / (1e3 * 3600 * 24) < e)
        return r.type.toLowerCase() !== "none" ? r : null;
    }
    return this.#t(e, t);
  }
  /**
   * Get the stored server upgrade check if it is still valid, otherwise return null and remove the stored check.
   * @param {string} currentVersion The current version of the server.
   * @returns {UmbServerUpgradeCheck | null} The stored server upgrade check or null if it is not valid.
   */
  #e(t) {
    const o = localStorage.getItem("umb:serverUpgradeCheck");
    if (!o)
      return null;
    const e = JSON.parse(o);
    if (e.version !== t)
      return localStorage.removeItem("umb:serverUpgradeCheck"), null;
    if (e.createdAt) {
      const r = new Date(e.createdAt);
      if (new Date(e.expires).getTime() <= r.getTime())
        return localStorage.removeItem("umb:serverUpgradeCheck"), null;
    }
    return e;
  }
  /**
   * Fetch the server upgrade check from the server and store the result in local storage.
   * @param {number} versionCheckPeriod A period in days to wait before checking the server again.
   * @param {string} currentVersion The current version of the server.
   * @returns {Promise<UmbServerUpgradeCheck | null>} The server upgrade check result or null if the check failed.
   */
  async #t(t, o) {
    const { data: e } = await c(a.getServerUpgradeCheck());
    if (e) {
      const r = /* @__PURE__ */ new Date();
      r.setDate(r.getDate() + t);
      const n = {
        ...e,
        expires: r.toISOString(),
        version: o,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      if (localStorage.setItem("umb:serverUpgradeCheck", JSON.stringify(n)), e.type.toLowerCase() !== "none")
        return n;
    }
    return null;
  }
}
export {
  S as U
};
//# sourceMappingURL=sysinfo.repository-ZruRTk51.js.map
