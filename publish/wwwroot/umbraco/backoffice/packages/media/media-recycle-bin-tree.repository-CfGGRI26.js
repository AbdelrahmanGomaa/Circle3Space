import { h as s } from "./dropzone.element-B5oraMUj.js";
import { U as a, a as i } from "./media-item.store.context-token-9YLCPlu1.js";
import { MediaService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbTreeServerDataSourceBase as c, UmbTreeRepositoryBase as u } from "@umbraco-cms/backoffice/tree";
import { m as l } from "./input-upload-field.element-B7PCDmnx.js";
class p extends c {
  /**
   * Creates an instance of UmbMediaRecycleBinTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaRecycleBinTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: r,
      getChildrenOf: d,
      getAncestorsOf: T,
      mapper: _
    });
  }
}
const r = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  n.getRecycleBinMediaRoot({ skip: e.skip, take: e.take })
), d = (e) => e.parent.unique === null ? r(e) : n.getRecycleBinMediaChildren({
  parentId: e.parent.unique,
  skip: e.skip,
  take: e.take
}), T = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  n.getTreeMediaAncestors({
    descendantId: e.treeItem.unique
  })
), _ = (e) => ({
  unique: e.id,
  parent: {
    unique: e.parent ? e.parent.id : null,
    entityType: e.parent ? a : i
  },
  entityType: a,
  noAccess: !1,
  isTrashed: !0,
  hasChildren: e.hasChildren,
  mediaType: {
    unique: e.mediaType.id,
    icon: e.mediaType.icon,
    collection: e.mediaType.collection ? { unique: e.mediaType.collection.id } : null
  },
  variants: e.variants.map((t) => ({
    name: t.name,
    culture: t.culture || null,
    segment: null
    // TODO: add segment to the backend API?
  })),
  name: e.variants[0]?.name,
  // TODO: this is not correct. We need to get it from the variants. This is a temp solution.
  isFolder: !1,
  createDate: e.createDate
});
class B extends u {
  constructor(t) {
    super(t, p, l);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), o = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: s,
      name: "#treeHeaders_contentRecycleBin",
      icon: "icon-trash",
      hasChildren: o,
      isContainer: !1,
      isFolder: !0
    } };
  }
}
export {
  B as UmbMediaRecycleBinTreeRepository,
  B as api
};
//# sourceMappingURL=media-recycle-bin-tree.repository-CfGGRI26.js.map
