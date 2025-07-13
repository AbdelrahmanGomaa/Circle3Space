import { U as o } from "./entity-CA4W0tlV.js";
import { UmbServerFilePathUniqueSerializer as p, appendFileExtensionIfNeeded as y } from "@umbraco-cms/backoffice/server-file-system";
import { StylesheetService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as s } from "@umbraco-cms/backoffice/resources";
class U {
  #e;
  #t = new p();
  constructor(t) {
    this.#e = t;
  }
  async createScaffold(t = {}) {
    return { data: {
      entityType: o,
      unique: "",
      name: "",
      content: "",
      ...t
    } };
  }
  async create(t, e = null) {
    if (!t) throw new Error("Data is missing");
    if (!t.name) throw new Error("Name is missing");
    const n = this.#t.toServerPath(e), r = {
      parent: n ? { path: n } : null,
      name: y(t.name, ".css"),
      content: t.content
    }, { data: a, error: h } = await s(
      this.#e,
      i.postStylesheet({
        requestBody: r
      })
    );
    if (a) {
      const c = decodeURIComponent(a), u = this.#t.toUnique(c);
      return this.read(u);
    }
    return { error: h };
  }
  async read(t) {
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.toServerPath(t);
    if (!e) throw new Error("Path is missing");
    const { data: n, error: r } = await s(
      this.#e,
      i.getStylesheetByPath({ path: encodeURIComponent(e) })
    );
    return r || !n ? { error: r } : { data: {
      entityType: o,
      unique: this.#t.toUnique(n.path),
      name: n.name,
      content: n.content
    } };
  }
  async update(t) {
    if (!t.unique) throw new Error("Unique is missing");
    const e = this.#t.toServerPath(t.unique);
    if (!e) throw new Error("Path is missing");
    const n = {
      content: t.content
    }, { error: r } = await s(
      this.#e,
      i.putStylesheetByPath({
        path: encodeURIComponent(e),
        requestBody: n
      })
    );
    return r ? { error: r } : this.read(t.unique);
  }
  async delete(t) {
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.toServerPath(t);
    if (!e) throw new Error("Path is missing");
    return s(
      this.#e,
      i.deleteStylesheetByPath({
        path: encodeURIComponent(e)
      })
    );
  }
}
export {
  U
};
//# sourceMappingURL=stylesheet-detail.server.data-source-C2Md6SyO.js.map
