import { t as s } from "./paths-Cvoq37Uo.js";
import { WebhookService as c } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as a } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as i } from "@umbraco-cms/backoffice/repository";
class l {
  #e;
  /**
   * Creates an instance of UmbWebhookCollectionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbWebhookCollectionServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Gets the Webhook collection filtered by the given filter.
   * @param {UmbWebhookCollectionFilterModel} filter
   * @param _filter
   * @returns {*}
   * @memberof UmbWebhookCollectionServerDataSource
   */
  async getCollection(e) {
    const { data: t, error: r } = await a(this.#e, c.getWebhook(e));
    return r || !t ? { error: r } : { data: { items: t.items.map((o) => ({
      entityType: s,
      unique: o.id,
      url: o.url,
      name: o.name,
      description: o.description,
      enabled: o.enabled,
      headers: o.headers,
      events: o.events,
      contentTypes: o.contentTypeKeys
    })), total: t.total } };
  }
}
class b extends i {
  #e;
  constructor(e) {
    super(e), this.#e = new l(e);
  }
  async requestCollection(e) {
    return this.#e.getCollection(e);
  }
}
export {
  b as UmbWebhookCollectionRepository,
  b as default
};
//# sourceMappingURL=webhook-collection.repository-CCRr8hX8.js.map
