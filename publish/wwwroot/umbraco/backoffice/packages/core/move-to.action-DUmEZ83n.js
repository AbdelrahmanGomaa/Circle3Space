import { UmbEntityActionBase as n, UmbRequestReloadStructureForEntityEvent as s } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as r } from "@umbraco-cms/backoffice/modal";
import { createExtensionApiByAlias as u } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_ACTION_EVENT_CONTEXT as l } from "@umbraco-cms/backoffice/action";
import { UMB_TREE_PICKER_MODAL as m } from "@umbraco-cms/backoffice/tree";
class w extends n {
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    if (!this.args.entityType) throw new Error("Entity Type is not available");
    const i = (await (await this.getContext(r)).open(this, m, {
      data: {
        treeAlias: this.args.meta.treeAlias,
        foldersOnly: this.args.meta.foldersOnly,
        expandTreeRoot: !0,
        pickableFilter: (a) => a.unique !== this.args.unique
      }
    }).onSubmit()).selection[0];
    if (i === void 0) throw new Error("Destination Unique is not available");
    const o = await u(this, this.args.meta.moveRepositoryAlias);
    if (!o) throw new Error("Move Repository is not available");
    await o.requestMoveTo({ unique: this.args.unique, destination: { unique: i } }), this.#t();
  }
  async #t() {
    const t = await this.getContext(l), e = new s({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    t.dispatchEvent(e);
  }
}
export {
  w as UmbMoveToEntityAction,
  w as default
};
//# sourceMappingURL=move-to.action-DUmEZ83n.js.map
