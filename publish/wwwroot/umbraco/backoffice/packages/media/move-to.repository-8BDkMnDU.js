import { U as a } from "./media-move.server.data-source-DxTMVOWg.js";
import { UmbRepositoryBase as r } from "@umbraco-cms/backoffice/repository";
import { UMB_NOTIFICATION_CONTEXT as m } from "@umbraco-cms/backoffice/notification";
class f extends r {
  #o = new a(this);
  #e;
  constructor(o) {
    super(o), this.consumeContext(m, (e) => {
      this.#e = e;
    });
  }
  async requestBulkMoveTo(o) {
    let e = 0;
    const s = o.destination;
    for (const t of o.uniques) {
      const { error: i } = await this.#o.moveTo({ unique: t, destination: s });
      if (i) {
        const n = { data: { message: i.message } };
        this.#e?.peek("danger", n);
      } else
        e++;
    }
    if (e > 0) {
      const t = { data: { message: `Moved ${e} media ${e === 1 ? "item" : "items"}` } };
      this.#e?.peek("positive", t);
    }
    return {};
  }
}
export {
  f as UmbBulkMoveToMediaRepository,
  f as api
};
//# sourceMappingURL=move-to.repository-8BDkMnDU.js.map
