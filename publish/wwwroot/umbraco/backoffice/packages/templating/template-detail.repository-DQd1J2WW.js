import { c as i, U as m } from "./template-item.store.context-token-rCTaUJ7s.js";
import { UmbId as c } from "@umbraco-cms/backoffice/id";
import { TemplateService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as n } from "@umbraco-cms/backoffice/resources";
import { UmbDetailRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
class l {
  #e;
  /**
   * Creates an instance of UmbTemplateServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbTemplateServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Creates a new Template scaffold
   * @param {Partial<UmbTemplateDetailModel>} [preset]
   * @returns { CreateTemplateRequestModel }
   * @memberof UmbTemplateServerDataSource
   */
  async createScaffold(e = {}) {
    return { data: {
      entityType: i,
      unique: c.new(),
      name: "",
      alias: "",
      content: `@using Umbraco.Cms.Web.Common.PublishedModels;
@inherits Umbraco.Cms.Web.Common.Views.UmbracoViewPage
@{
	Layout = null;
}`,
      masterTemplate: null,
      ...e
    } };
  }
  /**
   * Fetches a Template with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbTemplateServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: t, error: a } = await n(this.#e, r.getTemplateById({ id: e }));
    return a || !t ? { error: a } : { data: {
      entityType: i,
      unique: t.id,
      name: t.name,
      content: t.content || null,
      alias: t.alias,
      masterTemplate: t.masterTemplate ? { unique: t.masterTemplate.id } : null
    } };
  }
  /**
   * Inserts a new Template on the server
   * @param {UmbTemplateDetailModel} model
   * @returns {*}
   * @memberof UmbTemplateServerDataSource
   */
  async create(e) {
    if (!e) throw new Error("Template is missing");
    const t = {
      id: e.unique,
      name: e.name,
      content: e.content,
      alias: e.alias
    }, { data: a, error: s } = await n(
      this.#e,
      r.postTemplate({
        requestBody: t
      })
    );
    return a ? this.read(a) : { error: s };
  }
  /**
   * Updates a Template on the server
   * @param {UmbTemplateDetailModel} Template
   * @param model
   * @returns {*}
   * @memberof UmbTemplateServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const t = {
      name: e.name,
      content: e.content,
      alias: e.alias
    }, { error: a } = await n(
      this.#e,
      r.putTemplateById({
        id: e.unique,
        requestBody: t
      })
    );
    return a ? { error: a } : this.read(e.unique);
  }
  /**
   * Deletes a Template on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbTemplateServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return n(
      this.#e,
      r.deleteTemplateById({
        id: e
      })
    );
  }
}
class h extends u {
  constructor(e) {
    super(e, l, m);
  }
}
export {
  h as UmbTemplateDetailRepository,
  h as default
};
//# sourceMappingURL=template-detail.repository-DQd1J2WW.js.map
