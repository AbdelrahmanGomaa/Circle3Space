import { DocumentService as e } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as n } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as s } from "@umbraco-cms/backoffice/class-api";
import { UMB_NOTIFICATION_CONTEXT as u } from "@umbraco-cms/backoffice/notification";
class c {
  #t;
  /**
   * Creates an instance of UmbSortChildrenOfDocumentServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbSortChildrenOfDocumentServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Creates the Public Access for the given Document unique
   * @param {UmbSortChildrenOfArgs} args
   * @memberof UmbSortChildrenOfDocumentServerDataSource
   */
  async sortChildrenOf(t) {
    if (t.unique === void 0) throw new Error("unique is missing");
    const r = t.sorting.map((o) => ({ id: o.unique, sortOrder: o.sortOrder }));
    return n(
      this.#t,
      e.putDocumentSort({
        requestBody: {
          parent: t.unique ? { id: t.unique } : null,
          sorting: r
        }
      })
    );
  }
}
class f extends s {
  #t;
  #r;
  constructor(t) {
    super(t), this.#t = new c(this), this.consumeContext(u, (r) => {
      this.#r = r;
    });
  }
  async sortChildrenOf(t) {
    if (t.unique === void 0) throw new Error("Unique is missing");
    if (!t.sorting) throw new Error("Sorting details are missing");
    const { error: r } = await this.#t.sortChildrenOf(t);
    if (!r) {
      const o = { data: { message: "Items sorted" } };
      this.#r?.peek("positive", o);
    }
    return { error: r };
  }
}
export {
  f as UmbSortChildrenOfDocumentRepository,
  f as api
};
//# sourceMappingURL=sort-children-of.repository--DUFGghY.js.map
