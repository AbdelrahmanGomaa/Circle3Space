import { UmbDocumentUserPermissionCondition as i } from "./document-user-permission.condition-DWZwv9EZ.js";
import { u as n, w as o, g as a, i as r } from "./manifests-BUr6Ff2j.js";
import { UmbWorkspaceActionBase as c } from "@umbraco-cms/backoffice/workspace";
class O extends c {
  constructor(t, s) {
    super(t, s), this.disable(), new i(t, {
      host: t,
      config: {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [n, o]
      },
      onChange: (e) => {
        e ? this.enable() : this.disable();
      }
    });
  }
  async hasAdditionalOptions() {
    const t = await this.getContext(a);
    return (await this.observe(t.variantOptions).asPromise())?.length > 1;
  }
  async execute() {
    return (await this.getContext(r)).saveAndPublish();
  }
}
export {
  O as UmbDocumentSaveAndPublishWorkspaceAction,
  O as api
};
//# sourceMappingURL=save-and-publish.action-BJeLsBCQ.js.map
