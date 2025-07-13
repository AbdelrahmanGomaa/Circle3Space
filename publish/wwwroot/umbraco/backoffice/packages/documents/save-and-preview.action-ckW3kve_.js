import { UmbDocumentUserPermissionCondition as i } from "./document-user-permission.condition-DWZwv9EZ.js";
import { u as s, g as n } from "./manifests-BUr6Ff2j.js";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/class-api";
import { UmbWorkspaceActionBase as r } from "@umbraco-cms/backoffice/workspace";
class d extends r {
  constructor(e, o) {
    super(e, o), this.disable();
    const t = new i(e, {
      host: e,
      config: {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [s]
      },
      onChange: () => {
        t.permitted ? this.enable() : this.disable();
      }
    });
  }
  async execute() {
    (await this.getContext(n)).saveAndPreview();
  }
}
export {
  d as UmbDocumentSaveAndPreviewWorkspaceAction,
  d as api
};
//# sourceMappingURL=save-and-preview.action-ckW3kve_.js.map
