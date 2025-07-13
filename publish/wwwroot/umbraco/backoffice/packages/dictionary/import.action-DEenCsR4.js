import { U as t } from "./import-dictionary-modal.token-CKI-F1TP.js";
import { UmbEntityActionBase as a } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as o } from "@umbraco-cms/backoffice/modal";
class c extends a {
  async execute() {
    await (await this.getContext(o)).open(this, t, { data: { unique: this.args.unique } }).onSubmit();
  }
}
export {
  c as UmbImportDictionaryEntityAction,
  c as default
};
//# sourceMappingURL=import.action-DEenCsR4.js.map
