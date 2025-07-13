import { RelationService as l } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as c } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as s } from "@umbraco-cms/backoffice/repository";
const u = "relation";
class p {
  #e;
  /**
   * Creates an instance of UmbRelationCollectionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbRelationCollectionServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Gets the relation collection filtered by the given filter.
   * @param {UmbRelationCollectionFilterModel} filter
   * @returns {*}
   * @memberof UmbRelationCollectionServerDataSource
   */
  async getCollection(e) {
    const a = {
      skip: e.skip,
      take: e.take,
      id: e.relationType.unique
    }, { data: o, error: i } = await c(
      this.#e,
      l.getRelationByRelationTypeId(a)
    );
    return o ? { data: { items: o.items.map((t) => ({
      unique: t.id,
      entityType: u,
      relationType: {
        unique: t.relationType.id
      },
      parent: {
        unique: t.parent.id,
        name: t.parent.name || ""
      },
      child: {
        unique: t.child.id,
        name: t.child.name || ""
      },
      createDate: t.createDate,
      comment: t.comment || ""
    })), total: o.total } } : { error: i };
  }
}
class n extends s {
  #e;
  constructor(e) {
    super(e), this.#e = new p(e);
  }
  async requestCollection(e) {
    return this.#e.getCollection(e);
  }
}
const _ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbRelationCollectionRepository: n,
  default: n
}, Symbol.toStringTag, { value: "Module" }));
export {
  n as U,
  u as a,
  _ as r
};
//# sourceMappingURL=relation-collection.repository-sXWDJhuS.js.map
