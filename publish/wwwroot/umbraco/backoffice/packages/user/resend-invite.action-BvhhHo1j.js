import "./constants-BstfLIKC.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import { a as i } from "./resend-invite-to-user-modal.token-SCmTZoXA.js";
import { UmbEntityActionBase as a } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as e } from "@umbraco-cms/backoffice/modal";
class l extends a {
  constructor(t, o) {
    super(t, o);
  }
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    await (await this.getContext(e)).open(this, i, {
      data: {
        user: {
          unique: this.args.unique
        }
      }
    }).onSubmit();
  }
}
export {
  l as UmbResendInviteToUserEntityAction,
  l as api
};
//# sourceMappingURL=resend-invite.action-BvhhHo1j.js.map
