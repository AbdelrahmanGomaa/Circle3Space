import { d as r, A as o, z as s } from "./manifests-BUr6Ff2j.js";
import { DocumentService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbTreeServerDataSourceBase as u, UmbTreeRepositoryBase as i } from "@umbraco-cms/backoffice/tree";
class l extends u {
  /**
   * Creates an instance of UmbDocumentRecycleBinTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentRecycleBinTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: a,
      getChildrenOf: p,
      getAncestorsOf: d,
      mapper: T
    });
  }
}
const a = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  n.getRecycleBinDocumentRoot({ skip: e.skip, take: e.take })
), p = (e) => e.parent.unique === null ? a(e) : n.getRecycleBinDocumentChildren({
  parentId: e.parent.unique,
  skip: e.skip,
  take: e.take
}), d = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  n.getTreeDocumentAncestors({
    descendantId: e.treeItem.unique
  })
), T = (e) => ({
  unique: e.id,
  parent: {
    unique: e.parent ? e.parent.id : null,
    entityType: e.parent ? r : o
  },
  entityType: r,
  noAccess: !1,
  isTrashed: !0,
  hasChildren: e.hasChildren,
  isProtected: !1,
  documentType: {
    unique: e.documentType.id,
    icon: e.documentType.icon,
    collection: e.documentType.collection ? { unique: e.documentType.collection.id } : null
  },
  variants: e.variants.map((t) => ({
    name: t.name,
    culture: t.culture || null,
    segment: null,
    // TODO: add segment to the backend API?
    state: t.state
  })),
  name: e.variants[0]?.name,
  // TODO: this is not correct. We need to get it from the variants. This is a temp solution.
  isFolder: !1,
  createDate: e.createDate
});
class E extends i {
  constructor(t) {
    super(t, l, s);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), c = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: o,
      name: "#treeHeaders_contentRecycleBin",
      icon: "icon-trash",
      hasChildren: c,
      isContainer: !1,
      isFolder: !0
    } };
  }
}
export {
  E as UmbDocumentRecycleBinTreeRepository,
  E as api
};
//# sourceMappingURL=document-recycle-bin-tree.repository-B6iMMzLh.js.map
