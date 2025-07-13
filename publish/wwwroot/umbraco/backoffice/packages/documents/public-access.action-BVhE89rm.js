import { n as i } from "./manifests-BUr6Ff2j.js";
import { UmbEntityActionBase as s, UmbRequestReloadStructureForEntityEvent as a, UmbRequestReloadChildrenOfEntityEvent as o } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as r } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as u } from "@umbraco-cms/backoffice/action";
class p extends s {
  constructor(t, e) {
    super(t, e);
  }
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    await (await this.getContext(r)).open(this, i, { data: { unique: this.args.unique } }).onSubmit(), this.#t();
  }
  async #t() {
    const t = await this.getContext(u), e = new a({
      unique: this.args.unique,
      entityType: this.args.entityType
    }), n = new o({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    t.dispatchEvent(e), t.dispatchEvent(n);
  }
}
export {
  p as UmbDocumentPublicAccessEntityAction,
  p as api
};
//# sourceMappingURL=public-access.action-BVhE89rm.js.map
