import { U as n, a as o, b as l } from "./entity-CA4W0tlV.js";
import { UmbServerFilePathUniqueSerializer as r } from "@umbraco-cms/backoffice/server-file-system";
import { StylesheetService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbTreeServerDataSourceBase as T, UmbTreeRepositoryBase as u } from "@umbraco-cms/backoffice/tree";
import { h as p } from "./manifests-BP46ESrA.js";
class c extends T {
  /**
   * Creates an instance of UmbStylesheetTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbStylesheetTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: a,
      getChildrenOf: h,
      getAncestorsOf: S,
      mapper: E
    });
  }
}
const a = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  s.getTreeStylesheetRoot({ skip: e.skip, take: e.take })
), h = (e) => {
  const t = new r().toServerPath(e.parent.unique);
  return t === null ? a(e) : s.getTreeStylesheetChildren({
    parentPath: t,
    skip: e.skip,
    take: e.take
  });
}, S = (e) => {
  const t = new r().toServerPath(e.treeItem.unique);
  if (!t) throw new Error("Descendant path is not available");
  return s.getTreeStylesheetAncestors({
    descendantPath: t
  });
}, E = (e) => {
  const t = new r();
  return {
    unique: t.toUnique(e.path),
    entityType: e.isFolder ? l : n,
    parent: {
      unique: e.parent ? t.toUnique(e.parent.path) : null,
      entityType: e.parent ? n : o
    },
    name: e.name,
    isFolder: e.isFolder,
    hasChildren: e.hasChildren,
    icon: e.isFolder ? void 0 : "icon-palette"
  };
};
class R extends u {
  constructor(t) {
    super(t, c, p);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), i = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: o,
      name: "#treeHeaders_stylesheets",
      hasChildren: i,
      isFolder: !0
    } };
  }
}
export {
  R as UmbStylesheetTreeRepository,
  R as default
};
//# sourceMappingURL=stylesheet-tree.repository-H4Pu5VJi.js.map
