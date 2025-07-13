import { i as t } from "./manifests-BUr6Ff2j.js";
import { UmbWorkspaceActionBase as e } from "@umbraco-cms/backoffice/workspace";
class c extends e {
  async execute() {
    return (await this.getContext(t)).unpublish();
  }
}
export {
  c as UmbDocumentUnpublishWorkspaceAction,
  c as api
};
//# sourceMappingURL=unpublish.action-DYPUDPUY.js.map
