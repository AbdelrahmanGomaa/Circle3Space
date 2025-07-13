import { UmbUserItemRepository as e } from "./user-item.repository-D8oXtAF7.js";
import "./constants-BstfLIKC.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/temporary-file";
import { UmbDisableUserRepository as r } from "./disable-user.repository-D2JWaR_m.js";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/external/rxjs";
import { UmbEntityActionBase as s } from "@umbraco-cms/backoffice/entity-action";
import { umbConfirmModal as a } from "@umbraco-cms/backoffice/modal";
class R extends s {
  constructor(i, t) {
    super(i, t);
  }
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    const i = new e(this), { data: t } = await i.requestItems([this.args.unique]);
    if (!t?.length)
      throw new Error("Item not found.");
    const o = t[0];
    await a(this._host, {
      headline: `Disable ${o.name}`,
      content: "Are you sure you want to disable this user?",
      color: "danger",
      confirmLabel: "Disable"
    }), await new r(this).disable([this.args.unique]);
  }
}
export {
  R as UmbDisableUserEntityAction,
  R as api
};
//# sourceMappingURL=disable-user.action-CijAdPOj.js.map
