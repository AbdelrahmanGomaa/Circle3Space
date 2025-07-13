import { U as t } from "./manifests-BP46ESrA.js";
import { UmbEntityActionBase as e } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as a } from "@umbraco-cms/backoffice/modal";
class p extends e {
  async execute() {
    await (await this.getContext(a)).open(this, t, {
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
  p as UmbStylesheetCreateOptionsEntityAction,
  p as api
};
//# sourceMappingURL=create.action-D7yHAg5h.js.map
