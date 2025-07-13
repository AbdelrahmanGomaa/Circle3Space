import { l as n } from "./constants-BstfLIKC.js";
import { UMB_ACTION_EVENT_CONTEXT as i } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as o } from "@umbraco-cms/backoffice/entity-action";
import { UmbEntityCreateOptionActionBase as a } from "@umbraco-cms/backoffice/entity-create-option-action";
import { UMB_MODAL_MANAGER_CONTEXT as s } from "@umbraco-cms/backoffice/modal";
class p extends a {
  #t;
  constructor(e, t) {
    super(e, t), this.#t = t.kind;
  }
  async execute() {
    await (await this.getContext(s)).open(this, n, {
      data: {
        user: {
          kind: this.#t
        }
      }
    })?.onSubmit().then(() => {
      this.#e();
    }).catch(async () => {
      this.#e();
    });
  }
  async #e() {
    const e = await this.getContext(i), t = new o({
      entityType: this.args.entityType,
      unique: this.args.unique
    });
    e.dispatchEvent(t);
  }
}
export {
  p as U
};
//# sourceMappingURL=user-entity-create-option-action-base-CnTpL036.js.map
