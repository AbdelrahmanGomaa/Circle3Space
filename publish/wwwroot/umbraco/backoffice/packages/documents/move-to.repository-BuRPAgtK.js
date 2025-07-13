import { U as r } from "./document-move.server.data-source--jurGmZ-.js";
import { UmbRepositoryBase as a } from "@umbraco-cms/backoffice/repository";
import { UMB_NOTIFICATION_CONTEXT as c } from "@umbraco-cms/backoffice/notification";
class d extends a {
  #e = new r(this);
  #o;
  constructor(e) {
    super(e), this.consumeContext(c, (o) => {
      this.#o = o;
    });
  }
  async requestBulkMoveTo(e) {
    let o = 0;
    const i = e.destination;
    for (const t of e.uniques) {
      const { error: s } = await this.#e.moveTo({ unique: t, destination: i });
      if (s) {
        const n = { data: { message: s.message } };
        this.#o?.peek("danger", n);
      } else
        o++;
    }
    if (o > 0) {
      const t = { data: { message: `Moved ${o} ${o === 1 ? "document" : "documents"}` } };
      this.#o?.peek("positive", t);
    }
    return {};
  }
}
export {
  d as UmbBulkMoveToDocumentRepository,
  d as api
};
//# sourceMappingURL=move-to.repository-BuRPAgtK.js.map
