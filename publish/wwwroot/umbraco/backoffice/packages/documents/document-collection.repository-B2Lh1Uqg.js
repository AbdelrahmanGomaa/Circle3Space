import { d as n } from "./manifests-BUr6Ff2j.js";
import { DirectionModel as s, DocumentService as d } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as l } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as p } from "@umbraco-cms/backoffice/repository";
class D {
  #e;
  constructor(e) {
    this.#e = e;
  }
  async getCollection(e) {
    if (!e.unique)
      throw new Error("Unique ID is required to fetch a collection.");
    const i = {
      id: e.unique,
      dataTypeId: e.dataTypeId ?? "",
      orderBy: e.orderBy ?? "updateDate",
      orderCulture: e.orderCulture ?? "en-US",
      orderDirection: e.orderDirection === "asc" ? s.ASCENDING : s.DESCENDING,
      filter: e.filter,
      skip: e.skip || 0,
      take: e.take || 100
    }, { data: o, error: u } = await l(this.#e, d.getCollectionDocumentById(i));
    return o ? { data: { items: o.items.map((t) => {
      const a = t.variants[0];
      return {
        ancestors: t.ancestors.map((r) => ({
          unique: r.id,
          entityType: n
        })),
        unique: t.id,
        entityType: n,
        contentTypeAlias: t.documentType.alias,
        createDate: new Date(a.createDate),
        creator: t.creator,
        icon: t.documentType.icon,
        isProtected: t.isProtected,
        isTrashed: t.isTrashed,
        name: a.name,
        sortOrder: t.sortOrder,
        state: a.state,
        updateDate: new Date(a.updateDate),
        updater: t.updater,
        values: t.values.map((r) => ({ alias: r.alias, value: r.value })),
        documentType: {
          unique: t.documentType.id,
          icon: t.documentType.icon,
          alias: t.documentType.alias
        },
        variants: t.variants.map((r) => ({
          name: r.name,
          culture: r.culture ?? null,
          state: r.state
        }))
      };
    }), total: o.total } } : { error: u };
  }
}
class h extends p {
  #e;
  constructor(e) {
    super(e), this.#e = new D(e);
  }
  async requestCollection(e) {
    return this.#e.getCollection(e);
  }
}
export {
  h as UmbDocumentCollectionRepository,
  h as default
};
//# sourceMappingURL=document-collection.repository-B2Lh1Uqg.js.map
