import "./script-item.store.context-token-5j5GfCRe.js";
import { g as c } from "./manifests-DuLlkyg0.js";
import { U as p } from "./script-detail.server.data-source-jRKAt4lI.js";
import { UmbServerFilePathUniqueSerializer as h, appendFileExtensionIfNeeded as S, UmbRenameServerFileRepositoryBase as u } from "@umbraco-cms/backoffice/server-file-system";
import { ScriptService as U } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as d } from "@umbraco-cms/backoffice/resources";
class f {
  #e;
  #r;
  #t = new h();
  constructor(e) {
    this.#e = e, this.#r = new p(this.#e);
  }
  /**
   * Rename Script
   * @param {string} unique
   * @param {string} name
   * @returns {*}
   * @memberof UmbRenameScriptServerDataSource
   */
  async rename(e, r) {
    if (!e) throw new Error("Unique is missing");
    if (!r) throw new Error("Name is missing");
    const t = this.#t.toServerPath(e);
    if (!t) throw new Error("Path is missing");
    const s = {
      name: S(r, ".js")
    }, { data: i, error: a } = await d(
      this.#e,
      U.putScriptByPathRename({
        path: encodeURIComponent(t),
        requestBody: s
      })
    );
    if (i) {
      const n = decodeURIComponent(i), m = this.#t.toUnique(n);
      return this.#r.read(m);
    }
    return { error: a };
  }
}
class y extends u {
  constructor(e) {
    super(e, f, c);
  }
}
export {
  y as UmbRenameScriptRepository,
  y as default
};
//# sourceMappingURL=rename-script.repository-D4PlwVxE.js.map
