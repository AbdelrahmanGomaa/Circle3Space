import { l as a } from "./manifests-BeI4zfAH.js";
import { UmbEntityActionBase as e } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as n } from "@umbraco-cms/backoffice/modal";
class M extends e {
  constructor(t, o) {
    super(t, o);
  }
  async execute() {
    await (await this.getContext(n)).open(this, a).onSubmit();
  }
}
export {
  M as UmbCreateMemberEntityAction,
  M as api
};
//# sourceMappingURL=create.action-Cyxj7rgM.js.map
