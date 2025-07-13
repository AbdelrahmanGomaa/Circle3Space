import { i as t } from "./manifests-BUr6Ff2j.js";
import { UmbWorkspaceActionBase as e } from "@umbraco-cms/backoffice/workspace";
class c extends e {
  async execute() {
    return (await this.getContext(t)).publishWithDescendants();
  }
}
export {
  c as UmbDocumentPublishWithDescendantsWorkspaceAction,
  c as api
};
//# sourceMappingURL=publish-with-descendants.action-Bu_9LyfK.js.map
