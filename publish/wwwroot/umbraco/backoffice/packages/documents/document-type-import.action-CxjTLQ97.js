import { h as n } from "./constants-CrVNO8d3.js";
import { UMB_ACTION_EVENT_CONTEXT as o } from "@umbraco-cms/backoffice/action";
import { UmbEntityActionBase as a, UmbRequestReloadChildrenOfEntityEvent as i } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as s } from "@umbraco-cms/backoffice/modal";
class d extends a {
  async execute() {
    await (await this.getContext(s)).open(this, n, {
      data: { unique: this.args.unique }
    }).onSubmit().catch(() => {
    });
    const t = await this.getContext(o), e = new i({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    t.dispatchEvent(e);
  }
}
export {
  d as UmbImportDocumentTypeEntityAction,
  d as default
};
//# sourceMappingURL=document-type-import.action-CxjTLQ97.js.map
