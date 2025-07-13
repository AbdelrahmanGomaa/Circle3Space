import { U as n } from "./restore-from-recycle-bin-modal.token-Dfw4-Cxp.js";
import { UMB_MODAL_MANAGER_CONTEXT as a } from "@umbraco-cms/backoffice/modal";
import { UmbEntityActionBase as s, UmbRequestReloadStructureForEntityEvent as r } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as c } from "@umbraco-cms/backoffice/action";
class E extends s {
  /**
   * Executes the action.
   * @memberof UmbRestoreFromRecycleBinEntityAction
   */
  async execute() {
    if (!this.args.unique) throw new Error("Cannot restore an item without a unique identifier.");
    const e = (await this.getContext(a)).open(this, n, {
      data: {
        unique: this.args.unique,
        entityType: this.args.entityType,
        recycleBinRepositoryAlias: this.args.meta.recycleBinRepositoryAlias,
        itemRepositoryAlias: this.args.meta.itemRepositoryAlias,
        pickerModal: this.args.meta.pickerModal
      }
    }), { destination: t } = await e.onSubmit();
    if (!t) throw new Error("Cannot reload the structure without a destination.");
    const i = await this.getContext(c), o = new r({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    i.dispatchEvent(o), console.log(t.unique, t.entityType);
  }
}
export {
  E as UmbRestoreFromRecycleBinEntityAction,
  E as api
};
//# sourceMappingURL=restore-from-recycle-bin.action-q-TvaA4P.js.map
