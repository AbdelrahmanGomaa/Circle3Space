import { UserService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as o } from "@umbraco-cms/backoffice/resources";
import { k as a } from "./constants-BstfLIKC.js";
import { UmbRepositoryBase as n } from "@umbraco-cms/backoffice/repository";
class u {
  #t;
  constructor(t) {
    this.#t = t;
  }
  /**
   * Get the current user configuration.
   * @memberof UmbCurrentUserConfigServerDataSource
   */
  getCurrentUserConfig() {
    return o(this.#t, s.getUserCurrentConfiguration());
  }
}
class m extends n {
  #t;
  #r = new u(this);
  constructor(t) {
    super(t), this.initialized = new Promise((e) => {
      this.consumeContext(a, async (i) => {
        this.#t = i, await this.#e(), e();
      });
    });
  }
  async #e() {
    if (this.#t?.getState())
      return;
    const { data: t } = await this.#r.getCurrentUserConfig();
    t && this.#t?.update(t);
  }
  /**
   * Subscribe to the entire user configuration.
   */
  all() {
    if (!this.#t)
      throw new Error("Data store not initialized");
    return this.#t.all();
  }
  /**
   * Subscribe to a part of the user configuration.
   * @param part
   */
  part(t) {
    if (!this.#t)
      throw new Error("Data store not initialized");
    return this.#t.part(t);
  }
}
export {
  m as UmbCurrentUserConfigRepository,
  m as default
};
//# sourceMappingURL=current-user-config.repository-SC9WukoU.js.map
