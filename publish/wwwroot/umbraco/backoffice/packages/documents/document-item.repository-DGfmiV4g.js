import { d as n, p as r } from "./manifests-BUr6Ff2j.js";
import { DocumentService as o } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemServerDataSourceBase as s, UmbItemRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class u extends s {
  /**
   * Creates an instance of UmbDocumentItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentItemServerDataSource
   */
  constructor(t) {
    super(t, {
      getItems: a,
      mapper: p
    });
  }
}
const a = (e) => o.getItemDocument({ id: e }), p = (e) => ({
  documentType: {
    collection: e.documentType.collection ? { unique: e.documentType.collection.id } : null,
    icon: e.documentType.icon,
    unique: e.documentType.id
  },
  entityType: n,
  hasChildren: e.hasChildren,
  isProtected: e.isProtected,
  isTrashed: e.isTrashed,
  name: e.variants[0]?.name,
  // TODO: this is not correct. We need to get it from the variants. This is a temp solution.
  parent: e.parent ? { unique: e.parent.id } : null,
  unique: e.id,
  variants: e.variants.map((t) => ({
    culture: t.culture || null,
    name: t.name,
    state: t.state
  }))
});
class l extends c {
  constructor(t) {
    super(t, u, r);
  }
}
export {
  l as UmbDocumentItemRepository,
  l as api
};
//# sourceMappingURL=document-item.repository-DGfmiV4g.js.map
