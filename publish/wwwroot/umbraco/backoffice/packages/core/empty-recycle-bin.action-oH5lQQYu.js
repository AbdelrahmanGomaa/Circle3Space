import { umbConfirmModal as i } from "@umbraco-cms/backoffice/modal";
import { createExtensionApiByAlias as n } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_ACTION_EVENT_CONTEXT as o } from "@umbraco-cms/backoffice/action";
import { UmbEntityActionBase as r, UmbRequestReloadChildrenOfEntityEvent as s } from "@umbraco-cms/backoffice/entity-action";
class E extends r {
  /**
   * Executes the action.
   * @memberof UmbEmptyRecycleBinEntityAction
   */
  async execute() {
    await i(this._host, {
      headline: "Empty Recycle Bin",
      content: "When items are deleted from the recycle bin, they will be gone forever.",
      color: "danger",
      confirmLabel: "Empty Recycle Bin"
    }), await (await n(
      this,
      this.args.meta.recycleBinRepositoryAlias
    )).requestEmpty();
    const e = await this.getContext(o), t = new s({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    e.dispatchEvent(t);
  }
}
export {
  E as UmbEmptyRecycleBinEntityAction,
  E as api
};
//# sourceMappingURL=empty-recycle-bin.action-oH5lQQYu.js.map
