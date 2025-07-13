import { UserService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as i } from "@umbraco-cms/backoffice/resources";
import { j as a } from "./constants-BstfLIKC.js";
import { UmbRepositoryBase as n } from "@umbraco-cms/backoffice/repository";
class h {
  #t;
  constructor(t) {
    this.#t = t;
  }
  /**
   * Get the user configuration.
   * @memberof UmbUserConfigServerDataSource
   */
  getUserConfig() {
    return i(this.#t, r.getUserConfiguration());
  }
  /**
   * Get the current user configuration.
   * @memberof UmbUserConfigServerDataSource
   */
  getCurrentUserConfig() {
    return i(this.#t, r.getUserCurrentConfiguration());
  }
}
class m extends n {
  #t;
  #r = new h(this);
  constructor(t) {
    super(t), this.initialized = new Promise((s) => {
      this.consumeContext(a, async (o) => {
        this.#t = o, await this.#i(), s();
      });
    });
  }
  async #i() {
    if (this.#t?.getState())
      return;
    const { data: t } = await this.#r.getUserConfig();
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
  m as UmbUserConfigRepository,
  m as default
};
//# sourceMappingURL=user-config.repository-Eb1Ljjm6.js.map
