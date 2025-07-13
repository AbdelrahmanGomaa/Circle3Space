import { UmbExportMediaTypeRepository as e } from "./media-type-export.repository-CM32IJJV.js";
import { blobDownload as i } from "@umbraco-cms/backoffice/utils";
import { UmbEntityActionBase as o } from "@umbraco-cms/backoffice/entity-action";
class u extends o {
  #t = new e(this);
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    const { data: t } = await this.#t.requestExport(this.args.unique);
    t && i(t, `${this.args.unique}.udt`, "text/xml");
  }
}
export {
  u as UmbExportMediaTypeEntityAction,
  u as default
};
//# sourceMappingURL=media-type-export.action-DgXaPUln.js.map
