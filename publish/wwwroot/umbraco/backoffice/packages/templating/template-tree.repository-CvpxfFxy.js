import { c as a, b as n } from "./template-item.store.context-token-rCTaUJ7s.js";
import { UmbTreeServerDataSourceBase as p, UmbTreeRepositoryBase as T } from "@umbraco-cms/backoffice/tree";
import { TemplateService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { k as i } from "./manifests-H0KeU9t1.js";
class u extends p {
  /**
   * Creates an instance of UmbTemplateTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbTemplateTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: s,
      getChildrenOf: l,
      getAncestorsOf: c,
      mapper: m
    });
  }
}
const s = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  r.getTreeTemplateRoot({ skip: e.skip, take: e.take })
), l = (e) => e.parent.unique === null ? s({
  skip: e.skip,
  take: e.take
}) : r.getTreeTemplateChildren({
  parentId: e.parent.unique,
  skip: e.skip,
  take: e.take
}), c = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  r.getTreeTemplateAncestors({
    descendantId: e.treeItem.unique
  })
), m = (e) => ({
  unique: e.id,
  parent: {
    unique: e.parent ? e.parent.id : null,
    entityType: e.parent ? a : n
  },
  name: e.name,
  entityType: a,
  hasChildren: e.hasChildren,
  isFolder: !1,
  icon: "icon-document-html"
});
class h extends T {
  constructor(t) {
    super(t, u, i);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), o = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: n,
      name: "#treeHeaders_templates",
      hasChildren: o,
      isFolder: !0
    } };
  }
}
export {
  h as UmbTemplateTreeRepository,
  h as default
};
//# sourceMappingURL=template-tree.repository-CvpxfFxy.js.map
