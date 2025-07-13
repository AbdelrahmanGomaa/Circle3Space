import { UmbServerFilePathUniqueSerializer as h, appendFileExtensionIfNeeded as c, UmbRenameServerFileRepositoryBase as S } from "@umbraco-cms/backoffice/server-file-system";
import { tryExecuteAndNotify as p } from "@umbraco-cms/backoffice/resources";
import { StylesheetService as l } from "@umbraco-cms/backoffice/external/backend-api";
import { c as u } from "./stylesheet-rule-settings-modal.token-e3AAPWoc.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/store";
import { U } from "./stylesheet-detail.server.data-source-C2Md6SyO.js";
class d {
  #e;
  #t;
  #r = new h();
  constructor(e) {
    this.#e = e, this.#t = new U(this.#e);
  }
  /**
   * Rename Stylesheet
   * @param {string} unique
   * @param {string} name
   * @returns {*}
   * @memberof UmbRenameStylesheetServerDataSource
   */
  async rename(e, t) {
    if (!e) throw new Error("Unique is missing");
    if (!t) throw new Error("Name is missing");
    const r = this.#r.toServerPath(e);
    if (!r) throw new Error("Path is missing");
    const s = {
      name: c(t, ".css")
    }, { data: o, error: a } = await p(
      this.#e,
      l.putStylesheetByPathRename({
        path: encodeURIComponent(r),
        requestBody: s
      })
    );
    if (o) {
      const n = decodeURIComponent(o), m = this.#r.toUnique(n);
      return this.#t.read(m);
    }
    return { error: a };
  }
}
class T extends S {
  constructor(e) {
    super(e, d, u);
  }
}
export {
  T as UmbRenameStylesheetRepository,
  T as default
};
//# sourceMappingURL=rename-stylesheet.repository-BvtgAqxV.js.map
