import { a as t } from "./sort-children-of-modal.token-YzqcKId4.js";
import { UmbEntityActionBase as e, UmbRequestReloadChildrenOfEntityEvent as i } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as a } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as o } from "@umbraco-cms/backoffice/action";
class d extends e {
  async execute() {
    await (await this.getContext(a)).open(this._host, t, {
      data: {
        unique: this.args.unique,
        entityType: this.args.entityType,
        sortChildrenOfRepositoryAlias: this.args.meta.sortChildrenOfRepositoryAlias,
        treeRepositoryAlias: this.args.meta.treeRepositoryAlias
      }
    }).onSubmit().catch(() => {
    }), (await this.getContext(o)).dispatchEvent(
      new i({
        unique: this.args.unique,
        entityType: this.args.entityType
      })
    );
  }
}
export {
  d as UmbSortChildrenOfEntityAction,
  d as default
};
//# sourceMappingURL=sort-children-of.action-BhKqLk2X.js.map
