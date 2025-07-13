import { UmbItemServerDataSourceBase as r, UmbItemRepositoryBase as t } from "@umbraco-cms/backoffice/repository";
import { WebhookService as m } from "@umbraco-cms/backoffice/external/backend-api";
import { i as s } from "./paths-Cvoq37Uo.js";
class a extends r {
  /**
   * Creates an instance of UmbWebhookItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbWebhookItemServerDataSource
   */
  constructor(o) {
    super(o, {
      getItems: c,
      mapper: n
    });
  }
}
const c = (e) => m.getItemWebhook({ id: e }), n = (e) => ({
  unique: e.name,
  name: e.name
});
class i extends t {
  constructor(o) {
    super(o, a, s);
  }
}
export {
  i as UmbWebhookItemRepository,
  i as default
};
//# sourceMappingURL=webhook-item.repository-BgOk0Vb4.js.map
