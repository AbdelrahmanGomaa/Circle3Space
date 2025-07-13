import { d as i, a as s } from "./paths-BF32ZUyU.js";
import { UmbEntityActionBase as o } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as r } from "@umbraco-cms/backoffice/modal";
class m extends o {
  constructor(e, t) {
    super(e, t);
  }
  async execute() {
    const t = (await this.getContext(r)).open(this, i, {
      data: {
        parent: {
          unique: this.args.unique,
          entityType: this.args.entityType
        }
      }
    });
    await t.onSubmit().catch(() => {
    });
    const n = t.getValue().documentTypeUnique;
    if (!n) return;
    const a = `section/settings/workspace/${s}/create/parent/${this.args.entityType}/${this.args.unique ?? "null"}/${n}`;
    history.pushState(null, "", a);
  }
}
export {
  m as UmbCreateDocumentBlueprintEntityAction,
  m as default
};
//# sourceMappingURL=create.action-Dr3R8PQT.js.map
