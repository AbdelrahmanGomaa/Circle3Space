import { i as e } from "./manifests-BUr6Ff2j.js";
import { UmbWorkspaceActionBase as t } from "@umbraco-cms/backoffice/workspace";
class n extends t {
  async execute() {
    return (await this.getContext(e)).schedule();
  }
}
export {
  n as UmbDocumentSaveAndScheduleWorkspaceAction,
  n as api
};
//# sourceMappingURL=save-and-schedule.action-B_vvF8bV.js.map
