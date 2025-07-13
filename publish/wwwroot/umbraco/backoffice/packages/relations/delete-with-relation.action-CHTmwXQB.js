import { U as t } from "./delete-with-relation-modal.token-BiSZyd7F.js";
import { UMB_MODAL_MANAGER_CONTEXT as e } from "@umbraco-cms/backoffice/modal";
import { UmbDeleteEntityAction as i } from "@umbraco-cms/backoffice/entity-action";
class l extends i {
  async _confirmDelete() {
    if (!this.args.unique) throw new Error("Cannot delete an item without a unique identifier.");
    await (await this.getContext(e)).open(this, t, {
      data: {
        unique: this.args.unique,
        entityType: this.args.entityType,
        itemRepositoryAlias: this.args.meta.itemRepositoryAlias,
        referenceRepositoryAlias: this.args.meta.referenceRepositoryAlias
      }
    }).onSubmit();
  }
}
export {
  l as UmbDeleteWithRelationEntityAction,
  l as api
};
//# sourceMappingURL=delete-with-relation.action-CHTmwXQB.js.map
