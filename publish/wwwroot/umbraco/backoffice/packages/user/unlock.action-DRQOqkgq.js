import "./constants-BstfLIKC.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/temporary-file";
import "@umbraco-cms/backoffice/localization-api";
import { UmbUnlockUserRepository as r } from "./unlock-user.repository-164kPFdb.js";
import "@umbraco-cms/backoffice/external/rxjs";
import { UMB_ENTITY_CONTEXT as s } from "@umbraco-cms/backoffice/entity";
import { UmbEntityBulkActionBase as m } from "@umbraco-cms/backoffice/entity-bulk-action";
import { UMB_ACTION_EVENT_CONTEXT as p } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as c } from "@umbraco-cms/backoffice/entity-action";
class B extends m {
  async execute() {
    await new r(this._host).unlock(this.selection);
    const t = await this.getContext(s), o = t.getEntityType(), e = t.getUnique();
    if (!o) throw new Error("Entity type not found");
    if (e === void 0) throw new Error("Entity unique not found");
    const i = await this.getContext(p), n = new c({
      entityType: o,
      unique: e
    });
    i.dispatchEvent(n);
  }
}
export {
  B as UmbUnlockUserEntityBulkAction,
  B as api
};
//# sourceMappingURL=unlock.action-DRQOqkgq.js.map
