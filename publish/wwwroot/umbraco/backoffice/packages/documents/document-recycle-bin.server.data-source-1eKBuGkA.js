import { DocumentService as t } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as n } from "@umbraco-cms/backoffice/resources";
class d {
  #e;
  constructor(e) {
    this.#e = e;
  }
  trash(e) {
    return n(this.#e, t.putDocumentByIdMoveToRecycleBin({ id: e.unique }));
  }
  restore(e) {
    return n(
      this.#e,
      t.putRecycleBinDocumentByIdRestore({
        id: e.unique,
        requestBody: {
          target: e.destination.unique ? { id: e.destination.unique } : null
        }
      })
    );
  }
  empty() {
    return n(this.#e, t.deleteRecycleBinDocument());
  }
  async getOriginalParent(e) {
    const { data: i, error: r } = await n(
      this.#e,
      t.getRecycleBinDocumentByIdOriginalParent({ id: e.unique })
    );
    return i !== void 0 ? { data: i ? { unique: i.id } : null } : { error: r };
  }
}
export {
  d as U
};
//# sourceMappingURL=document-recycle-bin.server.data-source-1eKBuGkA.js.map
