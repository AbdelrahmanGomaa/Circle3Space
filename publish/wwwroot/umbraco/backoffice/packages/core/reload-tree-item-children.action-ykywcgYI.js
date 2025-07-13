import { UmbEntityActionBase as n, UmbRequestReloadChildrenOfEntityEvent as i } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as s } from "@umbraco-cms/backoffice/action";
class c extends n {
  constructor(t, e) {
    super(t, e);
  }
  async execute() {
    (await this.getContext(s)).dispatchEvent(
      new i({
        unique: this.args.unique,
        entityType: this.args.entityType
      })
    );
  }
}
export {
  c as UmbReloadTreeItemChildrenEntityAction,
  c as api
};
//# sourceMappingURL=reload-tree-item-children.action-ykywcgYI.js.map
