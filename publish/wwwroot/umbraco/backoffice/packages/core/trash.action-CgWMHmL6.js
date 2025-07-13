import { U as s } from "./trash.event-D1yYlRYJ.js";
import { createExtensionApiByAlias as n } from "@umbraco-cms/backoffice/extension-registry";
import { umbConfirmModal as a } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as r } from "@umbraco-cms/backoffice/action";
import { UmbEntityActionBase as o, UmbRequestReloadStructureForEntityEvent as h } from "@umbraco-cms/backoffice/entity-action";
import { UmbLocalizationController as c } from "@umbraco-cms/backoffice/localization-api";
class E extends o {
  #t = new c(this);
  /**
   * Executes the action.
   * @memberof UmbTrashEntityAction
   */
  async execute() {
    if (!this.args.unique) throw new Error("Cannot trash an item without a unique identifier.");
    const t = await this.#i();
    await this._confirmTrash(t), await (await n(
      this,
      this.args.meta.recycleBinRepositoryAlias
    )).requestTrash({ unique: this.args.unique }), this.#e();
  }
  async _confirmTrash(t) {
    await a(this._host, {
      headline: "#actions_trash",
      content: this.#t.string("#defaultdialogs_confirmTrash", t.name),
      color: "danger",
      confirmLabel: "#actions_trash"
    });
  }
  async #i() {
    if (!this.args.unique) throw new Error("Cannot trash an item without a unique identifier.");
    const t = await n(
      this,
      this.args.meta.itemRepositoryAlias
    ), { data: i } = await t.requestItems([this.args.unique]), e = i?.[0];
    if (!e) throw new Error("Item not found.");
    return e;
  }
  async #e() {
    const t = await this.getContext(r), i = new h({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    t.dispatchEvent(i);
    const e = new s({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    t.dispatchEvent(e);
  }
}
export {
  E as UmbTrashEntityAction,
  E as api
};
//# sourceMappingURL=trash.action-CgWMHmL6.js.map
