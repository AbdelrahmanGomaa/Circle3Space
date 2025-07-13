import { createExtensionApiByAlias as m } from "@umbraco-cms/backoffice/extension-registry";
import { UmbEntityBulkActionBase as u } from "@umbraco-cms/backoffice/entity-bulk-action";
import { UmbRequestReloadChildrenOfEntityEvent as E, UmbRequestReloadStructureForEntityEvent as d } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as h } from "@umbraco-cms/backoffice/action";
import { UMB_ENTITY_CONTEXT as v } from "@umbraco-cms/backoffice/entity";
import { UMB_MODAL_MANAGER_CONTEXT as p } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL as f } from "@umbraco-cms/backoffice/tree";
class U extends u {
  async execute() {
    if (this.selection?.length === 0) return;
    const o = await (await this.getContext(p)).open(this, f, {
      data: {
        foldersOnly: this.args.meta.foldersOnly,
        hideTreeRoot: this.args.meta.hideTreeRoot,
        treeAlias: this.args.meta.treeAlias
      }
    }).onSubmit().catch(() => {
    });
    if (!o?.selection?.length) return;
    const i = o.selection[0];
    if (i === void 0) throw new Error("Destination Unique is not available");
    const n = await m(
      this,
      this.args.meta.bulkMoveRepositoryAlias
    );
    if (!n) throw new Error("Bulk Move Repository is not available");
    await n.requestBulkMoveTo({ uniques: this.selection, destination: { unique: i } });
    const t = await this.getContext(v);
    if (!t) throw new Error("Entity Context is not available");
    const a = t.getEntityType(), r = t.getUnique();
    if (a && r !== void 0) {
      const e = await this.getContext(h);
      if (!e) throw new Error("Event Context is not available");
      const s = { entityType: a, unique: r }, l = new E(s);
      e.dispatchEvent(l);
      const c = new d(s);
      e.dispatchEvent(c);
    }
  }
}
export {
  U as UmbMediaMoveEntityBulkAction,
  U as api
};
//# sourceMappingURL=move-to.action-CVcFQz6t.js.map
