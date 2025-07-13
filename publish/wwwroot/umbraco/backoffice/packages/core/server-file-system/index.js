import { U as a } from "../rename-server-file.action-CCHxvQKq.js";
import { b as T, a as g } from "../rename-server-file.action-CCHxvQKq.js";
import { UMB_NOTIFICATION_CONTEXT as m } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as h } from "@umbraco-cms/backoffice/repository";
import { UmbControllerBase as l } from "@umbraco-cms/backoffice/class-api";
import { umbUrlPatternToString as u, ensurePathEndsWithSlash as d } from "@umbraco-cms/backoffice/utils";
import { UMB_ACTION_EVENT_CONTEXT as E } from "@umbraco-cms/backoffice/action";
import { U as y } from "../manifests-FzOUH899.js";
const C = (o, e) => o.endsWith(e) ? o : o + e;
class _ {
  #e = "%dot%";
  /**
   * Converts a server file path to a unique URL friendly string that can be used in the client
   * @param {string} serverFilePath
   * @returns {*}  {(string | null)}
   * @memberof UmbServerFilePathSerializer
   */
  toUnique(e) {
    const t = e?.replace(".", this.#e);
    return encodeURIComponent(t);
  }
  /**
   * Converts a unique URL friendly string to a server path
   * @param {string} serverFilePathUnique
   * @returns {*}  {(string | null)}
   * @memberof UmbServerFilePathSerializer
   */
  toServerPath(e) {
    if (e === void 0) throw new Error("Server file path unique is missing");
    return e === null ? null : decodeURIComponent(e).replace(this.#e, ".");
  }
}
class b extends h {
  #e;
  #t;
  constructor(e, t, r) {
    super(e), this.#e = new t(e), this.#t = r;
  }
  /**
   * Rename
   * @param {string} unique
   * @param {string} name
   * @returns {*}
   * @memberof UmbRenameServerFileRepositoryBase
   */
  async rename(e, t) {
    if (!e) throw new Error("Unique is missing");
    if (!t) throw new Error("Name is missing");
    const { data: r, error: i } = await this.#e.rename(e, t);
    if (r) {
      const n = await this.getContext(this.#t);
      n.removeItem(e), n.append(r);
      const s = await this.getContext(m), c = { data: { message: "Renamed" } };
      s.peek("positive", c);
    }
    return { data: r, error: i };
  }
}
const p = Symbol(
  "ServerFileRenameWorkspaceRedirectControllerAlias"
);
class q extends l {
  #e;
  #t;
  #r;
  constructor(e, t, r) {
    super(e, p), this.#t = t, this.#r = r, this.consumeContext(E, (i) => {
      this.#e = i, this.#e && (this.#e.removeEventListener(a.TYPE, this.#o), this.#e.addEventListener(a.TYPE, this.#o));
    });
  }
  #o = (e) => {
    if (!this.#r) throw new Error("Router is required for this controller.");
    const t = this.#t.getUnique(), r = e.getUnique();
    if (t !== r) return;
    const i = e.getNewUnique();
    if (!i) throw new Error("New unique is required for this event.");
    const n = this.#r.absoluteRouterPath;
    if (!n) throw new Error("Router path is required for this controller.");
    const s = u(d(n) + "edit/:unique", {
      unique: i
    });
    this.destroy(), window.history.replaceState(null, "", s);
  };
  destroy() {
    super.destroy(), this.#e?.removeEventListener(a.TYPE, this.#o);
  }
}
export {
  T as UMB_RENAME_SERVER_FILE_MODAL,
  y as UMB_RENAME_SERVER_FILE_MODAL_ALIAS,
  g as UmbRenameEntityAction,
  b as UmbRenameServerFileRepositoryBase,
  _ as UmbServerFilePathUniqueSerializer,
  q as UmbServerFileRenameWorkspaceRedirectController,
  p as UmbServerFileRenameWorkspaceRedirectControllerAlias,
  a as UmbServerFileRenamedEntityEvent,
  C as appendFileExtensionIfNeeded
};
//# sourceMappingURL=index.js.map
