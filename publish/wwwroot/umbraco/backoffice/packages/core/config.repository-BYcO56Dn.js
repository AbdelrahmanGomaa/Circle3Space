import { TemporaryFileService as o } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as a } from "@umbraco-cms/backoffice/resources";
import { U as s } from "./config.store.token-CsbU_19N.js";
import { a as n } from "./constants-CDwqkOdg.js";
import { UmbRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
class h {
  #t;
  constructor(t) {
    this.#t = t;
  }
  /**
   * Get the temporary file configuration.
   */
  getConfig() {
    return a(this.#t, o.getTemporaryFileConfiguration());
  }
}
class d extends m {
  #t;
  #r = new h(this);
  constructor(t) {
    super(t, n.toString()), this.initialized = new Promise((i) => {
      this.consumeContext(s, async (e) => {
        this.#t = e, await this.#i(), i();
      });
    });
  }
  async #i() {
    if (this.#t?.getState())
      return;
    const { data: t } = await this.#r.getConfig();
    t && this.#t?.update(t);
  }
  /**
   * Subscribe to the entire configuration.
   */
  all() {
    if (!this.#t)
      throw new Error("Data store not initialized");
    return this.#t.all();
  }
  /**
   * Subscribe to a part of the configuration.
   * @param part
   */
  part(t) {
    if (!this.#t)
      throw new Error("Data store not initialized");
    return this.#t.part(t);
  }
}
export {
  d as UmbTemporaryFileConfigRepository,
  d as default
};
//# sourceMappingURL=config.repository-BYcO56Dn.js.map
