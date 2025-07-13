import { d as u } from "./manifests-BUr6Ff2j.js";
import { DocumentService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as d } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as a } from "@umbraco-cms/backoffice/class-api";
class p {
  #e;
  /**
   * Creates an instance of UmbDocumentSearchServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentSearchServerDataSource
   */
  constructor(t) {
    this.#e = t;
  }
  /**
   * Get a list of versions for a document
   * @param {UmbDocumentSearchRequestArgs} args - The arguments for the search
   * @returns {*}
   * @memberof UmbDocumentSearchServerDataSource
   */
  async search(t) {
    const { data: r, error: c } = await d(
      this.#e,
      i.getItemDocumentSearch({
        query: t.query,
        parentId: t.searchFrom?.unique ?? void 0,
        allowedDocumentTypes: t.allowedContentTypes?.map((s) => s.unique)
      })
    );
    return r ? { data: { items: r.items.map((e) => ({
      documentType: {
        collection: e.documentType.collection ? { unique: e.documentType.collection.id } : null,
        icon: e.documentType.icon,
        unique: e.documentType.id
      },
      entityType: u,
      hasChildren: e.hasChildren,
      href: "/section/content/workspace/document/edit/" + e.id,
      isProtected: e.isProtected,
      isTrashed: e.isTrashed,
      name: e.variants[0]?.name,
      // TODO: this is not correct. We need to get it from the variants. This is a temp solution.
      parent: e.parent ? { unique: e.parent.id } : null,
      unique: e.id,
      variants: e.variants.map((o) => ({
        culture: o.culture || null,
        name: o.name,
        state: o.state
      }))
    })), total: r.total } } : { error: c };
  }
}
class l extends a {
  #e;
  constructor(t) {
    super(t), this.#e = new p(this);
  }
  /**
   * Search for documents
   * @param {UmbDocumentSearchRequestArgs} args - The arguments for the search
   * @returns {Promise<UmbRepositoryResponse<UmbPagedModel<UmbDocumentSearchItemModel>>>} - The search results
   * @memberof UmbDocumentSearchRepository
   */
  search(t) {
    return this.#e.search(t);
  }
}
class q extends a {
  #e = new l(this);
  /**
   * Search for documents
   * @param {UmbDocumentSearchRequestArgs} args - The arguments for the search
   * @returns {Promise<UmbRepositoryResponse<UmbPagedModel<UmbDocumentSearchItemModel>>>} - The search results
   * @memberof UmbDocumentSearchProvider
   */
  search(t) {
    return this.#e.search(t);
  }
  destroy() {
    this.#e.destroy();
  }
}
export {
  q as UmbDocumentSearchProvider,
  q as api
};
//# sourceMappingURL=document.search-provider-DK5r6qQm.js.map
