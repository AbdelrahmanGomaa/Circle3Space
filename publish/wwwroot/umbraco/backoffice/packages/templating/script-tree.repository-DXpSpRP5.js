import { w as c, u as o, v as a, l as p } from "./manifests-DuLlkyg0.js";
import { UmbServerFilePathUniqueSerializer as r } from "@umbraco-cms/backoffice/server-file-system";
import { UmbTreeServerDataSourceBase as u, UmbTreeRepositoryBase as T } from "@umbraco-cms/backoffice/tree";
import { ScriptService as n } from "@umbraco-cms/backoffice/external/backend-api";
class l extends u {
  /**
   * Creates an instance of UmbScriptTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbScriptTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: s,
      getChildrenOf: d,
      getAncestorsOf: S,
      mapper: h
    });
  }
}
const s = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  n.getTreeScriptRoot({ skip: e.skip, take: e.take })
), d = (e) => {
  const t = new r().toServerPath(e.parent.unique);
  return t === null ? s(e) : n.getTreeScriptChildren({
    parentPath: t,
    skip: e.skip,
    take: e.take
  });
}, S = (e) => {
  const t = new r().toServerPath(e.treeItem.unique);
  if (!t) throw new Error("Descendant path is not available");
  return n.getTreeScriptAncestors({
    descendantPath: t
  });
}, h = (e) => {
  const t = new r();
  return {
    unique: t.toUnique(e.path),
    parent: {
      unique: e.parent ? t.toUnique(e.parent.path) : null,
      entityType: e.parent ? o : a
    },
    entityType: e.isFolder ? c : o,
    name: e.name,
    isFolder: e.isFolder,
    hasChildren: e.hasChildren,
    icon: e.isFolder ? void 0 : "icon-document-js"
  };
};
class U extends T {
  constructor(t) {
    super(t, l, p);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), i = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: a,
      name: "#treeHeaders_scripts",
      hasChildren: i,
      isFolder: !0
    } };
  }
}
export {
  U as UmbScriptTreeRepository,
  U as default
};
//# sourceMappingURL=script-tree.repository-DXpSpRP5.js.map
