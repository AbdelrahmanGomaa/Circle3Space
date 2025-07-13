import { n as T, b as r, o, d as p } from "./constants-CrVNO8d3.js";
import { DocumentTypeService as n } from "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { UmbTreeServerDataSourceBase as i, UmbTreeRepositoryBase as u } from "@umbraco-cms/backoffice/tree";
class l extends i {
  /**
   * Creates an instance of UmbDocumentTypeTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentTypeTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: s,
      getChildrenOf: c,
      getAncestorsOf: d,
      mapper: y
    });
  }
}
const s = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  n.getTreeDocumentTypeRoot({
    foldersOnly: e.foldersOnly,
    skip: e.skip,
    take: e.take
  })
), c = (e) => e.parent.unique === null ? s({
  foldersOnly: e.foldersOnly,
  skip: e.skip,
  take: e.take
}) : n.getTreeDocumentTypeChildren({
  parentId: e.parent.unique,
  foldersOnly: e.foldersOnly,
  skip: e.skip,
  take: e.take
}), d = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  n.getTreeDocumentTypeAncestors({
    descendantId: e.treeItem.unique
  })
), y = (e) => ({
  unique: e.id,
  parent: {
    unique: e.parent ? e.parent.id : null,
    entityType: e.parent ? r : o
  },
  name: e.name,
  entityType: e.isFolder ? T : r,
  hasChildren: e.hasChildren,
  isFolder: e.isFolder,
  icon: e.icon,
  isElement: e.isElement
});
class U extends u {
  constructor(t) {
    super(t, l, p);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), a = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: o,
      name: "#treeHeaders_documentTypes",
      hasChildren: a,
      isFolder: !0
    } };
  }
}
export {
  U as UmbDocumentTypeTreeRepository,
  U as api
};
//# sourceMappingURL=document-type-tree.repository-CqyLUGIF.js.map
