import { U as e } from "./partial-view-workspace.context-token-BPSaKQI9.js";
import { UmbEntityActionBase as o } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as i } from "@umbraco-cms/backoffice/modal";
class p extends o {
  constructor(t, a) {
    super(t, a);
  }
  async execute() {
    await (await this.getContext(i)).open(this, e, {
      data: {
        parent: {
          unique: this.args.unique,
          entityType: this.args.entityType
        }
      }
    }).onSubmit();
  }
}
export {
  p as UmbPartialViewCreateOptionsEntityAction,
  p as api
};
//# sourceMappingURL=create.action-DKwm5AQL.js.map
