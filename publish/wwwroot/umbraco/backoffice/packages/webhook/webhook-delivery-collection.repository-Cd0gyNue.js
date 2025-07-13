import { v as a } from "./paths-Cvoq37Uo.js";
import { WebhookService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as i } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as l } from "@umbraco-cms/backoffice/repository";
class c {
  #e;
  /**
   * Creates an instance of UmbWebhookDeliveryCollectionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbWebhookDeliveryCollectionServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Gets the Webhook delivery collection filtered by the given filter.
   * @param {UmbWebhookDeliveryCollectionFilterModel} filter
   * @param filter
   * @returns {*}
   * @memberof UmbWebhookDeliveryCollectionServerDataSource
   */
  async getCollection(e) {
    const { data: o, error: r } = await i(
      this.#e,
      n.getWebhookByIdLogs({
        id: e.webhook.unique,
        skip: e.skip,
        take: e.take
      })
    );
    return r || !o ? { error: r } : { data: { items: o.items.map((t) => ({
      entityType: a,
      unique: t.key,
      date: t.date,
      url: t.url,
      eventAlias: t.eventAlias,
      retryCount: t.retryCount,
      statusCode: t.statusCode
    })), total: o.total } };
  }
}
class h extends l {
  #e;
  constructor(e) {
    super(e), this.#e = new c(e);
  }
  async requestCollection(e) {
    return this.#e.getCollection(e);
  }
}
export {
  h as UmbWebhookDeliveryCollectionRepository,
  h as default
};
//# sourceMappingURL=webhook-delivery-collection.repository-Cd0gyNue.js.map
