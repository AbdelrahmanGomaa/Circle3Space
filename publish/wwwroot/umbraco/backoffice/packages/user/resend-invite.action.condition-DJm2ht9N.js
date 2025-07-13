import { U as e } from "./user-allow-action-base.condition-dUPAQMIj.js";
import { UserStateModel as t } from "@umbraco-cms/backoffice/external/backend-api";
class n extends e {
  async _onUserDataChange() {
    if (!this.userUnique) {
      this.permitted = !1;
      return;
    }
    this.permitted = this.userState === t.INVITED;
  }
}
export {
  n as UmbUserAllowResendInviteActionCondition,
  n as api
};
//# sourceMappingURL=resend-invite.action.condition-DJm2ht9N.js.map
