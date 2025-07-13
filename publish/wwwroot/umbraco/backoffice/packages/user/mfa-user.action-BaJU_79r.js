import { c as i } from "./constants-BstfLIKC.js";
import { U as a } from "./current-user-mfa-modal.token-DXwGMNEd.js";
import { UmbEntityActionBase as n } from "@umbraco-cms/backoffice/entity-action";
import { UMB_CURRENT_USER_CONTEXT as s } from "@umbraco-cms/backoffice/current-user";
import { firstValueFrom as c } from "@umbraco-cms/backoffice/external/rxjs";
import { UMB_MODAL_MANAGER_CONTEXT as m } from "@umbraco-cms/backoffice/modal";
class h extends n {
  constructor(t, r) {
    super(t, r);
  }
  async execute() {
    const { unique: t } = this.args;
    if (!t) throw new Error("Unique is not available");
    const r = await this.getContext(s), o = await c(r.currentUser);
    if (!o) throw new Error("Current user is not available");
    const e = await this.getContext(m);
    if (o.unique === t) {
      await e.open(this, a).onSubmit().catch(() => {
      });
      return;
    }
    await e.open(this, i, {
      data: { unique: t }
    }).onSubmit().catch(() => {
    });
  }
}
export {
  h as UmbMfaUserEntityAction,
  h as api
};
//# sourceMappingURL=mfa-user.action-BaJU_79r.js.map
