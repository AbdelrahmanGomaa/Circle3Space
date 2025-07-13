import { u as s } from "./manifests-DuLlkyg0.js";
import { UmbServerFilePathUniqueSerializer as u, appendFileExtensionIfNeeded as m } from "@umbraco-cms/backoffice/server-file-system";
import { ScriptService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as a } from "@umbraco-cms/backoffice/resources";
class y {
  #e;
  #t = new u();
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
      name: m(t.name, ".js"),
      content: t.content
    }, { data: o, error: c } = await a(
      this.#e,
      i.postScript({
        requestBody: n
      })
    );
    if (o) {
      const h = decodeURIComponent(o), p = this.#t.toUnique(h);
      return this.read(p);
    }
    return { error: c };
  }
  async read(t) {
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.toServerPath(t);
    if (!e) throw new Error("Path is missing");
    const { data: r, error: n } = await a(
      this.#e,
      i.getScriptByPath({ path: encodeURIComponent(e) })
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
      i.putScriptByPath({
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
      i.deleteScriptByPath({
        path: encodeURIComponent(e)
      })
    );
  }
}
export {
  y as U
};
//# sourceMappingURL=script-detail.server.data-source-jRKAt4lI.js.map
