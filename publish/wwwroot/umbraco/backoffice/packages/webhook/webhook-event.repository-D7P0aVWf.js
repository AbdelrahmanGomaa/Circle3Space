import { WebhookService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as i } from "@umbraco-cms/backoffice/resources";
import { UMB_WEBHOOK_EVENT_STORE_CONTEXT as n } from "./webhook-event.store-Ckvt3DzU.js";
import { UmbRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
class c {
  #t;
  /**
   * Creates an instance of UmbWebhookEventServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbWebhookEventServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  async getAll() {
    const { data: t, error: e } = await i(this.#t, a.getWebhookEvents());
    if (e || !t)
      return { error: e };
    const r = t.items.map((s) => ({
      eventName: s.eventName,
      eventType: s.eventType,
      alias: s.alias
    }));
    return {
      data: {
        items: r,
        total: r.length
      }
    };
  }
}
class v extends m {
  #t;
  #e;
  #s;
  constructor(t) {
    super(t), this.#s = new c(t), this.#t = Promise.all([
      this.consumeContext(n, (e) => {
        this.#e = e;
      }).asPromise()
    ]);
  }
  async requestEvents() {
    await this.#t;
    const { data: t, error: e } = await this.#s.getAll();
    return t && this.#e.appendItems(t.items), { data: t, error: e, asObservable: () => this.#e.all() };
  }
}
export {
  v as UmbWebhookEventRepository,
  v as default
};
//# sourceMappingURL=webhook-event.repository-D7P0aVWf.js.map
