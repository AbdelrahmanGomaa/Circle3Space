import { MediaService as t } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as i } from "@umbraco-cms/backoffice/resources";
class c {
  #e;
  constructor(e) {
    this.#e = e;
  }
  trash(e) {
    return i(this.#e, t.putMediaByIdMoveToRecycleBin({ id: e.unique }));
  }
  restore(e) {
    return i(
      this.#e,
      t.putRecycleBinMediaByIdRestore({
        id: e.unique,
        requestBody: {
          target: e.destination.unique ? { id: e.destination.unique } : null
        }
      })
    );
  }
  empty() {
    return i(this.#e, t.deleteRecycleBinMedia());
  }
  async getOriginalParent(e) {
    const { data: r, error: n } = await i(
      this.#e,
      t.getRecycleBinMediaByIdOriginalParent({ id: e.unique })
    );
    return r !== void 0 ? { data: r ? { unique: r.id } : null } : { error: n };
  }
}
export {
  c as U
};
//# sourceMappingURL=media-recycle-bin.server.data-source-CsPKTmut.js.map
