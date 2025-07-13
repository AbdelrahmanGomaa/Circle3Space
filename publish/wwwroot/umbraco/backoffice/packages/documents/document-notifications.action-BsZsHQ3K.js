import { o as a } from "./manifests-BUr6Ff2j.js";
import { UmbEntityActionBase as n } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as e } from "@umbraco-cms/backoffice/modal";
class r extends n {
  constructor(t, o) {
    super(t, o);
  }
  async execute() {
    await (await this.getContext(e)).open(this, a, {
      data: { unique: this.args.unique }
    }).onSubmit().catch(() => {
    });
  }
}
export {
  r as UmbDocumentNotificationsEntityAction,
  r as default
};
//# sourceMappingURL=document-notifications.action-BsZsHQ3K.js.map
