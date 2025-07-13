import { U as i } from "./constants-BstfLIKC.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/temporary-file";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/external/rxjs";
import { U as t } from "./user-allow-action-base.condition-dUPAQMIj.js";
class h extends t {
  async _onUserDataChange() {
    this.userKind === i.DEFAULT ? this.permitted = !0 : this.permitted = !1;
  }
}
export {
  h as UmbUserIsDefaultKindCondition,
  h as api
};
//# sourceMappingURL=user-is-default-kind.condition-DUx9nol6.js.map
