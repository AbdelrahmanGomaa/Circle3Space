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
import { UMB_ACTION_EVENT_CONTEXT as s } from "@umbraco-cms/backoffice/action";
import { UmbEntityBulkActionBase as m } from "@umbraco-cms/backoffice/entity-bulk-action";
import { UmbRequestReloadChildrenOfEntityEvent as p } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ENTITY_CONTEXT as a } from "@umbraco-cms/backoffice/entity";
class B extends m {
  async execute() {
    await new r(this._host).disable(this.selection);
    const t = await this.getContext(a), o = t.getEntityType(), e = t.getUnique();
    if (!o) throw new Error("Entity type not found");
    if (e === void 0) throw new Error("Entity unique not found");
    const i = await this.getContext(s), n = new p({
      entityType: o,
      unique: e
    });
    i.dispatchEvent(n);
  }
}
export {
  B as UmbDisableUserEntityBulkAction,
  B as api
};
//# sourceMappingURL=disable.action-De0FZgcc.js.map
