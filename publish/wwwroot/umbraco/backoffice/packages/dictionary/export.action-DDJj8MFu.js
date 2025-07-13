import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "./paths-DZopmHn1.js";
import "@umbraco-cms/backoffice/repository";
import { UmbDictionaryExportRepository as a } from "./dictionary-export.repository-B9P6YEJT.js";
import { U as n } from "./export-dictionary-modal.token-Cok5RBD9.js";
import { blobDownload as e } from "@umbraco-cms/backoffice/utils";
import { UmbEntityActionBase as s } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as m } from "@umbraco-cms/backoffice/modal";
class w extends s {
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    const o = (await this.getContext(m)).open(this, n, { data: { unique: this.args.unique } }), { includeChildren: i } = await o.onSubmit(), r = new a(this), { data: t } = await r.requestExport(this.args.unique, i);
    t && e(t, `${this.args.unique}.udt`, "text/xml");
  }
}
export {
  w as UmbExportDictionaryEntityAction,
  w as default
};
//# sourceMappingURL=export.action-DDJj8MFu.js.map
