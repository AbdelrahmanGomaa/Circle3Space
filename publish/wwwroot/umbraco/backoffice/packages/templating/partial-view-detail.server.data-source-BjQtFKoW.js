import { o as s } from "./partial-view-workspace.context-token-BPSaKQI9.js";
import { UmbServerFilePathUniqueSerializer as w, appendFileExtensionIfNeeded as p } from "@umbraco-cms/backoffice/server-file-system";
import { PartialViewService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as a } from "@umbraco-cms/backoffice/resources";
class y {
  #e;
  #t = new w();
  constructor(t) {
    this.#e = t;
  }
  async createScaffold(t = {}) {
    return { data: {
      entityType: s,
      unique: "",
      name: "",
      content: "",
      ...t
    } };
  }
  async create(t, e = null) {
    if (!t) throw new Error("Data is missing");
    if (!t.name) throw new Error("Name is missing");
    const r = this.#t.toServerPath(e), n = {
      parent: r ? { path: r } : null,
      name: p(t.name, ".cshtml"),
      content: t.content
    }, { data: o, error: h } = await a(
      this.#e,
      i.postPartialView({
        requestBody: n
      })
    );
    if (o) {
      const c = decodeURIComponent(o), u = this.#t.toUnique(c);
      return this.read(u);
    }
    return { error: h };
  }
  async read(t) {
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.toServerPath(t);
    if (!e) throw new Error("Path is missing");
    const { data: r, error: n } = await a(
      this.#e,
      i.getPartialViewByPath({ path: encodeURIComponent(e) })
    );
    return n || !r ? { error: n } : { data: {
      entityType: s,
      unique: this.#t.toUnique(r.path),
      name: r.name,
      content: r.content
    } };
  }
  async update(t) {
    if (!t.unique) throw new Error("Unique is missing");
    const e = this.#t.toServerPath(t.unique);
    if (!e) throw new Error("Path is missing");
    const r = {
      content: t.content
    }, { error: n } = await a(
      this.#e,
      i.putPartialViewByPath({
        path: encodeURIComponent(e),
        requestBody: r
      })
    );
    return n ? { error: n } : this.read(t.unique);
  }
  async delete(t) {
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.toServerPath(t);
    if (!e) throw new Error("Path is missing");
    return a(
      this.#e,
      i.deletePartialViewByPath({
        path: encodeURIComponent(e)
      })
    );
  }
}
export {
  y as U
};
//# sourceMappingURL=partial-view-detail.server.data-source-BjQtFKoW.js.map
