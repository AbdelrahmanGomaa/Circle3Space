import { UmbEnableUserRepository as n } from "./enable-user.repository-C3ql2PTH.js";
import { UmbUserItemRepository as i } from "./user-item.repository-D8oXtAF7.js";
import { UmbEntityActionBase as r } from "@umbraco-cms/backoffice/entity-action";
import { umbConfirmModal as s } from "@umbraco-cms/backoffice/modal";
class h extends r {
  constructor(t, e) {
    super(t, e);
  }
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    const t = new i(this), { data: e } = await t.requestItems([this.args.unique]);
    if (!e?.length)
      throw new Error("Item not found.");
    const o = e[0];
    await s(this._host, {
      headline: `Enable ${o.name}`,
      content: "Are you sure you want to enable this user?",
      confirmLabel: "Enable"
    }), await new n(this).enable([this.args.unique]);
  }
}
export {
  h as UmbEnableUserEntityAction,
  h as api
};
//# sourceMappingURL=enable-user.action-DDylm0O0.js.map
