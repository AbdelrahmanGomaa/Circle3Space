import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "./media-item.store.context-token-9YLCPlu1.js";
import "@umbraco-cms/backoffice/repository";
import { w as r, i as n } from "./input-upload-field.element-B7PCDmnx.js";
import { UmbEntityActionBase as s } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as m } from "@umbraco-cms/backoffice/modal";
class T extends s {
  constructor(t, e) {
    super(t, e);
  }
  async execute() {
    let t = null;
    if (this.args.unique) {
      const a = new r(this._host), { data: i, error: o } = await a.requestItems([this.args.unique]);
      if (o || !i) throw new Error("Failed to load media item");
      t = i[0];
    }
    await (await this.getContext(m)).open(this, n, {
      data: {
        parent: { unique: this.args.unique, entityType: this.args.entityType },
        mediaType: t ? { unique: t.mediaType.unique } : null
      }
    }).onSubmit();
  }
}
export {
  T as UmbCreateMediaEntityAction,
  T as api
};
//# sourceMappingURL=create.action-Bqb3sBj-.js.map
