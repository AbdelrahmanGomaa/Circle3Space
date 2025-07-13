import { U as o } from "./change-password-modal.token-DRlXqm3X.js";
import { UmbChangeUserPasswordRepository as a } from "@umbraco-cms/backoffice/user";
import { UmbEntityActionBase as n } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as i } from "@umbraco-cms/backoffice/modal";
import { UMB_CURRENT_USER_CONTEXT as u, UmbCurrentUserRepository as U } from "@umbraco-cms/backoffice/current-user";
class l extends n {
  constructor(s, r) {
    super(s, r);
  }
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    const t = await (await this.getContext(i)).open(this, o, {
      data: {
        user: {
          unique: this.args.unique
        }
      }
    }).onSubmit();
    await (await this.getContext(u)).isUserCurrentUser(this.args.unique) ? await new U(this).changePassword(t.newPassword, t.oldPassword) : await new a(this).changePassword(this.args.unique, t.newPassword);
  }
}
export {
  l as UmbChangeUserPasswordEntityAction,
  l as api
};
//# sourceMappingURL=change-user-password.action-CZ1JzQF1.js.map
