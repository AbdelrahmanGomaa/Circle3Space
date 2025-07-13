import { U as r } from "./document-move.server.data-source--jurGmZ-.js";
import { UMB_NOTIFICATION_CONTEXT as s } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as a } from "@umbraco-cms/backoffice/repository";
class v extends a {
  #o = new r(this);
  async requestMoveTo(e) {
    const { error: o } = await this.#o.moveTo(e);
    if (!o) {
      const t = await this.getContext(s), i = { data: { message: "Moved" } };
      t.peek("positive", i);
    }
    return { error: o };
  }
}
export {
  v as UmbMoveDocumentRepository,
  v as api
};
//# sourceMappingURL=document-move.repository-DVhnehFO.js.map
