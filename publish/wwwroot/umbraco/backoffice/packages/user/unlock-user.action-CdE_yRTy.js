import "./constants-BstfLIKC.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/temporary-file";
import { UmbUserItemRepository as i } from "./user-item.repository-D8oXtAF7.js";
import "@umbraco-cms/backoffice/localization-api";
import { UmbUnlockUserRepository as e } from "./unlock-user.repository-164kPFdb.js";
import "@umbraco-cms/backoffice/external/rxjs";
import { UmbEntityActionBase as n } from "@umbraco-cms/backoffice/entity-action";
import { umbConfirmModal as s } from "@umbraco-cms/backoffice/modal";
class R extends n {
  constructor(o, t) {
    super(o, t);
  }
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    const o = new i(this), { data: t } = await o.requestItems([this.args.unique]);
    if (!t?.length)
      throw new Error("Item not found.");
    const r = t[0];
    await s(this._host, {
      headline: `Unlock ${r.name}`,
      content: "Are you sure you want to unlock this user?",
      confirmLabel: "Unlock"
    }), await new e(this)?.unlock([this.args.unique]);
  }
}
export {
  R as UmbUnlockUserEntityAction,
  R as api
};
//# sourceMappingURL=unlock-user.action-CdE_yRTy.js.map
