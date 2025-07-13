import { l as s, m as r, d as u } from "./manifests-BUr6Ff2j.js";
import { UmbDuplicateDocumentRepository as c } from "./document-duplicate.repository-BuhffHDq.js";
import { UMB_MODAL_MANAGER_CONTEXT as l } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as T } from "@umbraco-cms/backoffice/action";
import { UmbEntityActionBase as E, UmbRequestReloadChildrenOfEntityEvent as m } from "@umbraco-cms/backoffice/entity-action";
class D extends E {
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    if (!this.args.entityType) throw new Error("Entity Type is not available");
    const n = (await this.getContext(l)).open(this, s, {
      data: {
        unique: this.args.unique,
        entityType: this.args.entityType
      }
    });
    try {
      const t = await n.onSubmit(), e = t.destination.unique;
      if (e === void 0) throw new Error("Destination Unique is not available");
      const a = new c(this), { error: o } = await a.requestDuplicate({
        unique: this.args.unique,
        destination: { unique: e },
        relateToOriginal: t.relateToOriginal,
        includeDescendants: t.includeDescendants
      });
      o || this.#t(e);
    } catch (t) {
      console.log(t);
    }
  }
  async #t(i) {
    const n = await this.getContext(T), t = i === null ? r : u, e = new m({
      unique: i,
      entityType: t
    });
    n.dispatchEvent(e);
  }
}
export {
  D as UmbDuplicateDocumentEntityAction,
  D as api
};
//# sourceMappingURL=duplicate-document.action-Dak9EYM5.js.map
