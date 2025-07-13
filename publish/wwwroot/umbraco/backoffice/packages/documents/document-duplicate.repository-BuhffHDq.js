import { U as a } from "./document-duplicate.server.data-source-bzXc2Rmw.js";
import { UMB_NOTIFICATION_CONTEXT as r } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as s } from "@umbraco-cms/backoffice/repository";
class u extends s {
  #t = new a(this);
  async requestDuplicate(e) {
    const { error: t } = await this.#t.duplicate(e);
    if (!t) {
      const i = await this.getContext(r), o = { data: { message: "Duplicated" } };
      i.peek("positive", o);
    }
    return { error: t };
  }
}
export {
  u as UmbDuplicateDocumentRepository,
  u as api
};
//# sourceMappingURL=document-duplicate.repository-BuhffHDq.js.map
