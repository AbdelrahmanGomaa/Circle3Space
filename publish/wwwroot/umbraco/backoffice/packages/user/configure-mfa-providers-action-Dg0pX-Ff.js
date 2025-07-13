import { U as t } from "./current-user-mfa-modal.token-DXwGMNEd.js";
import { UmbActionBase as e } from "@umbraco-cms/backoffice/action";
import { UMB_MODAL_MANAGER_CONTEXT as o } from "@umbraco-cms/backoffice/modal";
class m extends e {
  async getHref() {
  }
  async execute() {
    await (await this.getContext(o)).open(this, t).onSubmit();
  }
}
export {
  m as UmbConfigureMfaProvidersApi,
  m as api
};
//# sourceMappingURL=configure-mfa-providers-action-Dg0pX-Ff.js.map
