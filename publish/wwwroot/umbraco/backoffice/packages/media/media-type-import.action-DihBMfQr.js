import { g as n } from "./constants-CHY0fXo5.js";
import { UMB_ACTION_EVENT_CONTEXT as a } from "@umbraco-cms/backoffice/action";
import { UmbEntityActionBase as i, UmbRequestReloadChildrenOfEntityEvent as o } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as s } from "@umbraco-cms/backoffice/modal";
class M extends i {
  async execute() {
    await (await this.getContext(s)).open(this, n, {
      data: { unique: this.args.unique }
    }).onSubmit().catch(() => {
    });
    const t = await this.getContext(a), e = new o({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    t.dispatchEvent(e);
  }
}
export {
  M as UmbImportMediaTypeEntityAction,
  M as default
};
//# sourceMappingURL=media-type-import.action-DihBMfQr.js.map
