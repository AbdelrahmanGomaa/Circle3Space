import { U as a } from "./media-move.server.data-source-DxTMVOWg.js";
import { UMB_NOTIFICATION_CONTEXT as r } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as s } from "@umbraco-cms/backoffice/repository";
class v extends s {
  #o = new a(this);
  async requestMoveTo(e) {
    const { error: o } = await this.#o.moveTo(e);
    if (!o) {
      const t = await this.getContext(r), i = { data: { message: "Moved" } };
      t.peek("positive", i);
    }
    return { error: o };
  }
}
export {
  v as UmbMoveMediaRepository,
  v as api
};
//# sourceMappingURL=media-move.repository-P71GH5ea.js.map
