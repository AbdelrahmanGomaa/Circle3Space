import { h as T, f as a, g as n, B as p } from "./constants-hBehNVbJ.js";
import { UmbTreeServerDataSourceBase as u, UmbTreeRepositoryBase as l } from "@umbraco-cms/backoffice/tree";
import { DataTypeService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { umbExtensionsRegistry as d } from "@umbraco-cms/backoffice/extension-registry";
let o = [];
class c extends u {
  /**
   * Creates an instance of UmbDataTypeTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDataTypeTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: i,
      getChildrenOf: y,
      getAncestorsOf: _,
      mapper: E
    }), d.byType("propertyEditorUi").subscribe((r) => {
      o = r;
    }).unsubscribe();
  }
}
const i = async (e) => s.getTreeDataTypeRoot({
  foldersOnly: e.foldersOnly,
  skip: e.skip,
  take: e.take
}), y = (e) => e.parent.unique === null ? i(e) : s.getTreeDataTypeChildren({
  parentId: e.parent.unique,
  foldersOnly: e.foldersOnly,
  skip: e.skip,
  take: e.take
}), _ = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  s.getTreeDataTypeAncestors({
    descendantId: e.treeItem.unique
  })
), E = (e) => ({
  unique: e.id,
  parent: {
    unique: e.parent?.id || null,
    entityType: e.parent ? a : n
  },
  icon: o.find((t) => t.alias === e.editorUiAlias)?.meta.icon,
  name: e.name,
  entityType: e.isFolder ? T : a,
  isFolder: e.isFolder,
  hasChildren: e.hasChildren
});
class O extends l {
  constructor(t) {
    super(t, c, p);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), r = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: n,
      name: "#treeHeaders_dataTypes",
      hasChildren: r,
      isFolder: !0
    } };
  }
}
export {
  O as UmbDataTypeTreeRepository,
  O as api
};
//# sourceMappingURL=data-type-tree.repository-DQCICNDG.js.map
