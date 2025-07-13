import { MediaService as e } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as n } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as s } from "@umbraco-cms/backoffice/class-api";
import { UMB_NOTIFICATION_CONTEXT as u } from "@umbraco-cms/backoffice/notification";
class a {
  #i;
  /**
   * Creates an instance of UmbSortChildrenOfMediaServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbSortChildrenOfMediaServerDataSource
   */
  constructor(i) {
    this.#i = i;
  }
  /**
   * Creates the Public Access for the given Media unique
   * @param {UmbSortChildrenOfArgs} args
   * @memberof UmbSortChildrenOfMediaServerDataSource
   */
  async sortChildrenOf(i) {
    if (i.unique === void 0) throw new Error("unique is missing");
    const r = i.sorting.map((t) => ({ id: t.unique, sortOrder: t.sortOrder }));
    return n(
      this.#i,
      e.putMediaSort({
        requestBody: {
          parent: i.unique ? { id: i.unique } : null,
          sorting: r
        }
      })
    );
  }
}
class f extends s {
  #i;
  #r;
  constructor(i) {
    super(i), this.#i = new a(this), this.consumeContext(u, (r) => {
      this.#r = r;
    });
  }
  async sortChildrenOf(i) {
    if (i.unique === void 0) throw new Error("Unique is missing");
    if (!i.sorting) throw new Error("Sorting details are missing");
    const { error: r } = await this.#i.sortChildrenOf(i);
    if (!r) {
      const t = { data: { message: "Items sorted" } };
      this.#r?.peek("positive", t);
    }
    return { error: r };
  }
}
export {
  f as UmbSortChildrenOfMediaRepository,
  f as api
};
//# sourceMappingURL=sort-children-of.repository-DBdP2wZz.js.map
