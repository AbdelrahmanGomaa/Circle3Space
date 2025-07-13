import "./constants-BstfLIKC.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import { U as t } from "./resend-invite-to-user-modal.token-SCmTZoXA.js";
import { UmbEntityActionBase as o } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as a } from "@umbraco-cms/backoffice/modal";
class E extends o {
  async execute() {
    await (await this.getContext(a)).open(this, t)?.onSubmit();
  }
}
export {
  E as UmbCreateUserEntityAction,
  E as api
};
//# sourceMappingURL=invite-user-entity-action-BcOdxMe2.js.map
