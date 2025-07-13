import { umbExtensionsRegistry as e } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_ACTION_EVENT_CONTEXT as o } from "@umbraco-cms/backoffice/action";
import { UmbEntityActionBase as r, UmbRequestReloadStructureForEntityEvent as s } from "@umbraco-cms/backoffice/entity-action";
import { umbConfirmModal as a } from "@umbraco-cms/backoffice/modal";
import { html as u } from "@umbraco-cms/backoffice/external/lit";
class y extends r {
  async execute() {
    if (!this.args.unique) throw new Error("Cannot delete an item without a unique identifier.");
    const t = e.getByAlias(this.args.unique);
    if (!t) throw new Error("Extension not found");
    await a(this, {
      headline: "Unregister extension",
      confirmLabel: "Unregister",
      content: u`<p>Are you sure you want to unregister the extension <strong>${t.alias}</strong>?</p>`,
      color: "danger"
    }), e.unregister(t.alias);
    const n = await this.getContext(o), i = new s({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    n.dispatchEvent(i);
  }
}
export {
  y as UmbUnregisterExtensionEntityAction,
  y as api
};
//# sourceMappingURL=unregister-extension.action-ClBNRdQ_.js.map
