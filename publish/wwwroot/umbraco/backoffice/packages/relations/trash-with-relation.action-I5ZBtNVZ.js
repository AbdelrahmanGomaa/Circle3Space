import { U as a } from "./trash-with-relation-modal.token-CJFEoSES.js";
import { UMB_MODAL_MANAGER_CONTEXT as i } from "@umbraco-cms/backoffice/modal";
import { UmbTrashEntityAction as e } from "@umbraco-cms/backoffice/recycle-bin";
class A extends e {
  async _confirmTrash(t) {
    await (await this.getContext(i)).open(this, a, {
      data: {
        unique: t.unique,
        entityType: t.entityType,
        itemRepositoryAlias: this.args.meta.itemRepositoryAlias,
        referenceRepositoryAlias: this.args.meta.referenceRepositoryAlias
      }
    }).onSubmit();
  }
}
export {
  A as UmbTrashWithRelationEntityAction,
  A as api
};
//# sourceMappingURL=trash-with-relation.action-I5ZBtNVZ.js.map
