import { U as s } from "./current-user.context.token-BnYpMzWI.js";
import "./current-user.store.token-N-3TWEFa.js";
import { UmbCurrentUserRepository as i } from "./current-user.repository-DHj5cLiS.js";
import "@umbraco-cms/backoffice/user";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/observable-api";
import { UmbActionBase as n } from "@umbraco-cms/backoffice/action";
import { UMB_MODAL_MANAGER_CONTEXT as a } from "@umbraco-cms/backoffice/modal";
import { UMB_CHANGE_PASSWORD_MODAL as m } from "@umbraco-cms/backoffice/user-change-password";
class M extends n {
  #t;
  constructor(o, r) {
    super(o, r), this.consumeContext(s, (t) => {
      this.observe(
        t.unique,
        (e) => {
          this.#t = e;
        },
        "umbEditCurrentUserActionObserver"
      );
    });
  }
  async getHref() {
  }
  async execute() {
    if (!this.#t) return;
    const t = await (await this.getContext(a)).open(this, m, {
      data: {
        user: {
          unique: this.#t
        }
      }
    }).onSubmit();
    await new i(this).changePassword(t.newPassword, t.oldPassword);
  }
}
export {
  M as UmbChangePasswordCurrentUserAction,
  M as api
};
//# sourceMappingURL=change-password-current-user.action-BPNeYgSP.js.map
