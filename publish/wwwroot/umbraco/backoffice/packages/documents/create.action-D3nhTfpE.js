import { UmbDocumentItemRepository as r } from "./document-item.repository-DGfmiV4g.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/language";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/property";
import { k as a } from "./manifests-BUr6Ff2j.js";
import { UmbEntityActionBase as m } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as s } from "@umbraco-cms/backoffice/modal";
class f extends m {
  constructor(t, e) {
    super(t, e);
  }
  async execute() {
    let t = null;
    if (this.args.unique) {
      const i = new r(this._host), { data: o, error: n } = await i.requestItems([this.args.unique]);
      if (n || !o) throw new Error("Failed to load document item");
      t = o[0];
    }
    await (await this.getContext(s)).open(this, a, {
      data: {
        parent: { unique: this.args.unique, entityType: this.args.entityType },
        documentType: t ? { unique: t.documentType.unique } : null
      }
    }).onSubmit();
  }
}
export {
  f as UmbCreateDocumentEntityAction,
  f as default
};
//# sourceMappingURL=create.action-D3nhTfpE.js.map
