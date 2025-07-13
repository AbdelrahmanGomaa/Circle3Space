import { b as o, j as r } from "./constants-CrVNO8d3.js";
import { UmbItemServerDataSourceBase as s, UmbItemRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
import { DocumentTypeService as n } from "@umbraco-cms/backoffice/external/backend-api";
class c extends s {
  /**
   * Creates an instance of UmbDocumentTypeItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentTypeItemServerDataSource
   */
  constructor(t) {
    super(t, { getItems: p, mapper: T });
  }
}
const p = (e) => n.getItemDocumentType({ id: e }), T = (e) => ({
  entityType: o,
  isElement: e.isElement,
  icon: e.icon,
  unique: e.id,
  name: e.name,
  description: e.description
});
class E extends m {
  constructor(t) {
    super(t, c, r);
  }
}
export {
  E as UmbDocumentTypeItemRepository,
  E as api
};
//# sourceMappingURL=document-type-item.repository-CWwJfU44.js.map
