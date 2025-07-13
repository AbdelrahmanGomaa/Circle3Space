import { U as t } from "./bulk-trash-with-relation-modal.token-BtR7225U.js";
import { UMB_MODAL_MANAGER_CONTEXT as a } from "@umbraco-cms/backoffice/modal";
import { UmbTrashEntityBulkAction as i } from "@umbraco-cms/backoffice/recycle-bin";
class l extends i {
  async _confirmTrash() {
    await (await this.getContext(a)).open(this, t, {
      data: {
        uniques: this.selection,
        itemRepositoryAlias: this.args.meta.itemRepositoryAlias,
        referenceRepositoryAlias: this.args.meta.referenceRepositoryAlias
      }
    }).onSubmit();
  }
}
export {
  l as UmbBulkTrashWithRelationEntityAction,
  l as api
};
//# sourceMappingURL=bulk-trash-with-relation.action-C8ci9eyj.js.map
