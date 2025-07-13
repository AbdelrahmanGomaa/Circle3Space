import { a as c, h as i } from "./paths-BF32ZUyU.js";
import { DocumentBlueprintService as m, DocumentTypeService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemServerDataSourceBase as p, UmbItemRepositoryBase as a } from "@umbraco-cms/backoffice/repository";
import { tryExecuteAndNotify as y } from "@umbraco-cms/backoffice/resources";
class r extends p {
  #e;
  /**
   * Creates an instance of UmbDocumentBlueprintItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentBlueprintItemServerDataSource
   */
  constructor(t) {
    super(t, {
      getItems: T,
      mapper: d
    }), this.#e = t;
  }
  async getItemsByDocumentType(t) {
    if (!t) throw new Error("Unique is missing");
    const { data: n, error: u } = await y(
      this.#e,
      s.getDocumentTypeByIdBlueprint({ id: t })
    );
    return n ? { data: n.items.map((o) => ({
      entityType: c,
      unique: o.id,
      name: o.name
    })) } : { error: u };
  }
}
const T = (e) => m.getItemDocumentBlueprint({ id: e }), d = (e) => ({
  entityType: c,
  unique: e.id,
  name: e.name,
  documentType: {
    unique: e.documentType.id,
    icon: e.documentType.icon,
    collection: e.documentType.collection ? { unique: e.documentType.collection.id } : null
  }
});
class U extends a {
  #e = new r(this);
  constructor(t) {
    super(t, r, i);
  }
  async requestItemsByDocumentType(t) {
    return this.#e.getItemsByDocumentType(t);
  }
}
export {
  U as UmbDocumentBlueprintItemRepository,
  U as api
};
//# sourceMappingURL=document-blueprint-item.repository-BIRG_YSq.js.map
