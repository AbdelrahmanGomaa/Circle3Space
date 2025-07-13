import { i as T, g as a, h as n, j as l } from "./constants-CwKQXLDb.js";
import { UmbServerFilePathUniqueSerializer as s } from "@umbraco-cms/backoffice/server-file-system";
import { UmbTreeServerDataSourceBase as c, UmbTreeRepositoryBase as u } from "@umbraco-cms/backoffice/tree";
import { StaticFileService as r } from "@umbraco-cms/backoffice/external/backend-api";
class p extends c {
  /**
   * Creates an instance of UmbStylesheetTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbStylesheetTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: o,
      getChildrenOf: S,
      getAncestorsOf: _,
      mapper: d
    });
  }
}
const o = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  r.getTreeStaticFileRoot({ skip: e.skip, take: e.take })
), S = (e) => {
  const t = new s().toServerPath(e.parent.unique);
  return t === null ? o(e) : r.getTreeStaticFileChildren({
    parentPath: t,
    skip: e.skip,
    take: e.take
  });
}, _ = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  r.getTreeStaticFileAncestors({
    descendantPath: e.treeItem.unique
  })
), d = (e) => {
  const t = new s();
  return {
    unique: t.toUnique(e.path),
    parent: {
      unique: e.parent ? t.toUnique(e.parent.path) : null,
      entityType: e.parent ? a : n
    },
    entityType: e.isFolder ? T : a,
    name: e.name,
    isFolder: e.isFolder,
    hasChildren: e.hasChildren
  };
};
class U extends u {
  constructor(t) {
    super(t, p, l);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), i = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: n,
      name: "Static Files",
      hasChildren: i,
      isFolder: !0
    } };
  }
}
export {
  U as UmbStaticFileTreeRepository,
  U as default
};
//# sourceMappingURL=static-file-tree.repository-CWuGBV3O.js.map
