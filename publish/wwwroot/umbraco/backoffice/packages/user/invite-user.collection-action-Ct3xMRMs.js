import { U as t } from "./resend-invite-to-user-modal.token-SCmTZoXA.js";
import { UmbCollectionActionBase as o } from "@umbraco-cms/backoffice/collection";
import { UMB_MODAL_MANAGER_CONTEXT as a } from "@umbraco-cms/backoffice/modal";
class c extends o {
  async execute() {
    await (await this.getContext(a)).open(this, t)?.onSubmit();
  }
}
export {
  c as UmbInviteUserCollectionAction,
  c as api
};
//# sourceMappingURL=invite-user.collection-action-Ct3xMRMs.js.map
