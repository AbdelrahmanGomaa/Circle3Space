import { b as h } from "./partial-view-workspace.context-token-BPSaKQI9.js";
import { U as c } from "./partial-view-detail.server.data-source-BjQtFKoW.js";
import { UmbServerFilePathUniqueSerializer as l, appendFileExtensionIfNeeded as p, UmbRenameServerFileRepositoryBase as w } from "@umbraco-cms/backoffice/server-file-system";
import { PartialViewService as u } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as U } from "@umbraco-cms/backoffice/resources";
class d {
  #e;
  #r;
  #t = new l();
  constructor(e) {
    this.#e = e, this.#r = new c(this.#e);
  }
  /**
   * Rename Partial View
   * @param {string} unique
   * @param {string} name
   * @returns {*}
   * @memberof UmbRenamePartialViewServerDataSource
   */
  async rename(e, r) {
    if (!e) throw new Error("Unique is missing");
    if (!r) throw new Error("Name is missing");
    const t = this.#t.toServerPath(e);
    if (!t) throw new Error("Path is missing");
    const o = {
      name: p(r, ".cshtml")
    }, { data: i, error: s } = await U(
      this.#e,
      u.putPartialViewByPathRename({
        path: encodeURIComponent(t),
        requestBody: o
      })
    );
    if (i) {
      const n = decodeURIComponent(i), m = this.#t.toUnique(n);
      return this.#r.read(m);
    }
    return { error: s };
  }
}
class v extends w {
  constructor(e) {
    super(e, d, h);
  }
}
export {
  v as UmbRenamePartialViewRepository,
  v as default
};
//# sourceMappingURL=rename-partial-view.repository-DXnTirQG.js.map
