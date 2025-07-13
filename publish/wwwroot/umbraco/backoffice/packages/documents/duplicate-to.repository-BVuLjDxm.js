import { U as s } from "./document-duplicate.server.data-source-bzXc2Rmw.js";
import { UmbRepositoryBase as a } from "@umbraco-cms/backoffice/repository";
import { UMB_NOTIFICATION_CONTEXT as c } from "@umbraco-cms/backoffice/notification";
class p extends a {
  #t = new s(this);
  #e;
  constructor(e) {
    super(e), this.consumeContext(c, (t) => {
      this.#e = t;
    });
  }
  async requestBulkDuplicateTo(e) {
    let t = 0;
    for (const i of e.uniques) {
      const { error: o } = await this.#t.duplicate({
        unique: i,
        destination: e.destination,
        relateToOriginal: e.relateToOriginal,
        includeDescendants: e.includeDescendants
      });
      if (o) {
        const n = { data: { message: o.message } };
        this.#e?.peek("danger", n);
      } else
        t++;
    }
    if (t > 0) {
      const i = { data: { message: `Duplicated ${t} ${t === 1 ? "document" : "documents"}` } };
      this.#e?.peek("positive", i);
    }
    return {};
  }
}
export {
  p as UmbBulkDuplicateToDocumentRepository,
  p as api
};
//# sourceMappingURL=duplicate-to.repository-BVuLjDxm.js.map
