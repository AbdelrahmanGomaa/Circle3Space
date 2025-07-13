import { U as t } from "./bulk-delete-with-relation-modal.token-ClxjRYy9.js";
import { UmbDeleteEntityBulkAction as e } from "@umbraco-cms/backoffice/entity-bulk-action";
import { UMB_MODAL_MANAGER_CONTEXT as i } from "@umbraco-cms/backoffice/modal";
class l extends e {
  async _confirmDelete() {
    await (await this.getContext(i)).open(this, t, {
      data: {
        uniques: this.selection,
        itemRepositoryAlias: this.args.meta.itemRepositoryAlias,
        referenceRepositoryAlias: this.args.meta.referenceRepositoryAlias
      }
    }).onSubmit();
  }
}
export {
  l as UmbBulkDeleteWithRelationEntityAction,
  l as api
};
//# sourceMappingURL=bulk-delete-with-relation.action-BmcSzaRl.js.map
