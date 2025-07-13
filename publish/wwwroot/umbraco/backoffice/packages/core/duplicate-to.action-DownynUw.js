import { createExtensionApiByAlias as u } from "@umbraco-cms/backoffice/extension-registry";
import { UmbEntityBulkActionBase as m } from "@umbraco-cms/backoffice/entity-bulk-action";
import { UmbRequestReloadChildrenOfEntityEvent as E, UmbRequestReloadStructureForEntityEvent as d } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as h } from "@umbraco-cms/backoffice/action";
import { UMB_ENTITY_CONTEXT as p } from "@umbraco-cms/backoffice/entity";
import { UMB_MODAL_MANAGER_CONTEXT as f } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL as y } from "@umbraco-cms/backoffice/tree";
class _ extends m {
  async execute() {
    if (this.selection?.length === 0) return;
    const i = await (await this.getContext(f)).open(this, y, {
      data: {
        foldersOnly: this.args.meta.foldersOnly,
        hideTreeRoot: this.args.meta.hideTreeRoot,
        treeAlias: this.args.meta.treeAlias
      }
    }).onSubmit().catch(() => {
    });
    if (!i?.selection?.length) return;
    const o = i.selection[0];
    if (o === void 0) throw new Error("Destination Unique is not available");
    const n = await u(
      this,
      this.args.meta.bulkDuplicateRepositoryAlias
    );
    if (!n) throw new Error("Bulk Duplicate Repository is not available");
    await n.requestBulkDuplicateTo({
      uniques: this.selection,
      destination: { unique: o }
    });
    const t = await this.getContext(p);
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
  _ as UmbMediaDuplicateEntityBulkAction,
  _ as api
};
//# sourceMappingURL=duplicate-to.action-DownynUw.js.map
