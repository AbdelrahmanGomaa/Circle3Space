import { UmbExportDocumentTypeRepository as e } from "./document-type-export.repository-CeuXInYO.js";
import { blobDownload as o } from "@umbraco-cms/backoffice/utils";
import { UmbEntityActionBase as i } from "@umbraco-cms/backoffice/entity-action";
class u extends i {
  #t = new e(this);
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    const { data: t } = await this.#t.requestExport(this.args.unique);
    t && o(t, `${this.args.unique}.udt`, "text/xml");
  }
}
export {
  u as UmbExportDocumentTypeEntityAction,
  u as default
};
//# sourceMappingURL=document-type-export.action-B4Em3Hyt.js.map
