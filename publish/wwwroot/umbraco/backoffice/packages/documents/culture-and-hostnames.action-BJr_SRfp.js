import { UmbEntityActionBase as a } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as n } from "@umbraco-cms/backoffice/modal";
import { UMB_CULTURE_AND_HOSTNAMES_MODAL as e } from "@umbraco-cms/backoffice/document";
class u extends a {
  constructor(t, o) {
    super(t, o);
  }
  async execute() {
    await (await this.getContext(n)).open(this, e, {
      data: { unique: this.args.unique }
    }).onSubmit();
  }
}
export {
  u as UmbDocumentCultureAndHostnamesEntityAction,
  u as api
};
//# sourceMappingURL=culture-and-hostnames.action-BJr_SRfp.js.map
