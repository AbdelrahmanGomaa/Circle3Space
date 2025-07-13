import { s as t } from "./manifests-BUr6Ff2j.js";
import { UmbEntityActionBase as o } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as a } from "@umbraco-cms/backoffice/modal";
import { UMB_NOTIFICATION_CONTEXT as e } from "@umbraco-cms/backoffice/notification";
import { UmbLocalizationController as i } from "@umbraco-cms/backoffice/localization-api";
class f extends o {
  #t = new i(this);
  async execute() {
    if (!await (await this.getContext(a)).open(this, t, {}).onSubmit().catch(() => {
    })) return;
    (await this.getContext(e)).peek("positive", {
      data: { message: this.#t.term("rollback_documentRolledBack") }
    });
  }
}
export {
  f as UmbRollbackDocumentEntityAction,
  f as api
};
//# sourceMappingURL=rollback.action-nV9nkN9J.js.map
