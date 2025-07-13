import { U as r } from "./sort-children-of-modal.token-YzqcKId4.js";
import { UmbEntityActionBase as s, UmbRequestReloadStructureForEntityEvent as u } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as l } from "@umbraco-cms/backoffice/modal";
import { createExtensionApiByAlias as c } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_ACTION_EVENT_CONTEXT as p } from "@umbraco-cms/backoffice/action";
class g extends s {
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    if (!this.args.entityType) throw new Error("Entity Type is not available");
    const t = (await this.getContext(l)).open(this, r, {
      data: {
        unique: this.args.unique,
        entityType: this.args.entityType,
        treeAlias: this.args.meta.treeAlias,
        foldersOnly: this.args.meta.foldersOnly
      }
    });
    try {
      const a = (await t.onSubmit()).destination.unique;
      if (a === void 0) throw new Error("Destination Unique is not available");
      const n = await c(
        this,
        this.args.meta.duplicateRepositoryAlias
      );
      if (!n) throw new Error("Duplicate repository is not available");
      const { error: o } = await n.requestDuplicateTo({
        unique: this.args.unique,
        destination: { unique: a }
      });
      o || this.#t();
    } catch (i) {
      console.error(i);
    }
  }
  async #t() {
    const e = await this.getContext(p), t = new u({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    e.dispatchEvent(t);
  }
}
export {
  g as UmbDuplicateToEntityAction,
  g as api
};
//# sourceMappingURL=duplicate-to.action-D826i5Pj.js.map
