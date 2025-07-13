import { U as t } from "./external-login-modal.token-BIuwBNJv.js";
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
  m as UmbConfigureExternalLoginProvidersApi,
  m as api
};
//# sourceMappingURL=configure-external-login-providers-action-Bi-ETD6_.js.map
