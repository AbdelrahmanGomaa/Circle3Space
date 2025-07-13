import { OEmbedService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as c } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as i } from "@umbraco-cms/backoffice/class-api";
class u {
  #e;
  /**
   * Creates an instance of UmbOEmbedServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbOEmbedServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Fetches markup for the given URL.
   * @param {string} unique
   * @memberof UmbOEmbedServerDataSource
   */
  async getOEmbedQuery({ url: e, maxWidth: r, maxHeight: t }) {
    return c(this.#e, a.getOembedQuery({ url: e, maxWidth: r, maxHeight: t }));
  }
}
class y extends i {
  #e = new u(this);
  constructor(e) {
    super(e);
  }
  async requestOEmbed({ url: e, maxWidth: r, maxHeight: t }) {
    const { data: m, error: o } = await this.#e.getOEmbedQuery({ url: e, maxWidth: r, maxHeight: t });
    return o ? { error: o } : { data: m };
  }
}
export {
  y as UmbOEmbedRepository,
  y as api
};
//# sourceMappingURL=oembed.repository-DZFIohQR.js.map
