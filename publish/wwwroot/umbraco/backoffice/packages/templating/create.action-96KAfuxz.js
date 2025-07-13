import { U as e } from "./index-DTLu03tH.js";
import { UmbEntityActionBase as o } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as n } from "@umbraco-cms/backoffice/modal";
class p extends o {
  constructor(t, a) {
    super(t, a);
  }
  async execute() {
    await (await this.getContext(n)).open(this, e, {
      data: {
        parent: {
          entityType: this.args.entityType,
          unique: this.args.unique
        }
      }
    }).onSubmit();
  }
}
export {
  p as UmbScriptCreateOptionsEntityAction,
  p as api
};
//# sourceMappingURL=create.action-96KAfuxz.js.map
