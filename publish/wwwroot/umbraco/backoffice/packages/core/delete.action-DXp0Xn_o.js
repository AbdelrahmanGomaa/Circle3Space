import { U as n } from "./entity-action-base-C1FfYSbT.js";
import { U as o } from "./request-reload-structure-for-entity.event-CHtdC9hO.js";
import { createExtensionApiByAlias as a } from "@umbraco-cms/backoffice/extension-registry";
import { umbConfirmModal as s } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as r } from "@umbraco-cms/backoffice/action";
import { UmbLocalizationController as m } from "@umbraco-cms/backoffice/localization-api";
class y extends n {
  // TODO: make base type for item and detail models
  #t = new m(this);
  async execute() {
    if (!this.args.unique) throw new Error("Cannot delete an item without a unique identifier.");
    const t = await this.#e();
    await this._confirmDelete(t), await (await a(
      this,
      this.args.meta.detailRepositoryAlias
    )).delete(this.args.unique), await this.#i();
  }
  async _confirmDelete(t) {
    const e = this.args.meta.confirm?.headline ?? "#actions_delete", i = this.args.meta.confirm?.message ?? "#defaultdialogs_confirmdelete";
    await s(this._host, {
      headline: e,
      content: this.#t.string(i, t.name),
      color: "danger",
      confirmLabel: "#general_delete"
    });
  }
  async #e() {
    if (!this.args.unique) throw new Error("Cannot delete an item without a unique identifier.");
    const t = await a(
      this,
      this.args.meta.itemRepositoryAlias
    ), { data: e } = await t.requestItems([this.args.unique]), i = e?.[0];
    if (!i) throw new Error("Item not found.");
    return i;
  }
  async #i() {
    const t = await this.getContext(r), e = new o({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    t.dispatchEvent(e);
  }
}
export {
  y as UmbDeleteEntityAction,
  y as default
};
//# sourceMappingURL=delete.action-DXp0Xn_o.js.map
