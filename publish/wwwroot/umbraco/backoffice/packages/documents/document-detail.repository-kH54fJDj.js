import { d as a, r as c } from "./manifests-BUr6Ff2j.js";
import { UmbId as o } from "@umbraco-cms/backoffice/id";
import { DocumentService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as s } from "@umbraco-cms/backoffice/resources";
import { UmbDetailRepositoryBase as d } from "@umbraco-cms/backoffice/repository";
class m {
  #e;
  /**
   * Creates an instance of UmbDocumentServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Creates a new Document scaffold
   * @param preset
   * @returns { UmbDocumentDetailModel }
   * @memberof UmbDocumentServerDataSource
   */
  async createScaffold(e = {}) {
    return { data: {
      entityType: a,
      unique: o.new(),
      urls: [],
      template: null,
      documentType: {
        unique: "",
        collection: null,
        icon: null
      },
      isTrashed: !1,
      values: [],
      variants: [],
      ...e
    } };
  }
  /**
   * Creates a new variant scaffold.
   * @returns A new variant scaffold.
   */
  /*
  // TDOD: remove if not used
  createVariantScaffold(): UmbDocumentVariantModel {
  	return {
  		state: null,
  		culture: null,
  		segment: null,
  		name: '',
  		publishDate: null,
  		createDate: null,
  		updateDate: null,
  	};
  }
  */
  /**
   * Fetches a Document with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDocumentServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: u, error: n } = await s(this.#e, r.getDocumentById({ id: e }));
    return n || !u ? { error: n } : { data: {
      entityType: a,
      unique: u.id,
      values: u.values.map((t) => ({
        editorAlias: t.editorAlias,
        culture: t.culture || null,
        segment: t.segment || null,
        alias: t.alias,
        value: t.value
      })),
      variants: u.variants.map((t) => ({
        culture: t.culture || null,
        segment: t.segment || null,
        state: t.state,
        name: t.name,
        publishDate: t.publishDate || null,
        createDate: t.createDate,
        updateDate: t.updateDate,
        scheduledPublishDate: t.scheduledPublishDate || null,
        scheduledUnpublishDate: t.scheduledUnpublishDate || null
      })),
      urls: u.urls.map((t) => ({
        culture: t.culture || null,
        url: t.url
      })),
      template: u.template ? { unique: u.template.id } : null,
      documentType: {
        unique: u.documentType.id,
        collection: u.documentType.collection ? { unique: u.documentType.collection.id } : null,
        icon: u.documentType.icon
      },
      isTrashed: u.isTrashed
    } };
  }
  /**
   * Inserts a new Document on the server
   * @param {UmbDocumentDetailModel} model - Document Model
   * @param parentUnique
   * @returns {*}
   * @memberof UmbDocumentServerDataSource
   */
  async create(e, u = null) {
    if (!e) throw new Error("Document is missing");
    if (!e.unique) throw new Error("Document unique is missing");
    const n = {
      id: e.unique,
      parent: u ? { id: u } : null,
      documentType: { id: e.documentType.unique },
      template: e.template ? { id: e.template.unique } : null,
      values: e.values,
      variants: e.variants
    }, { data: i, error: t } = await s(
      this.#e,
      r.postDocument({
        requestBody: n
      })
    );
    return i ? this.read(i) : { error: t };
  }
  /**
   * Updates a Document on the server
   * @param {UmbDocumentDetailModel} model - Document Model
   * @returns {*}
   * @memberof UmbDocumentServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const u = {
      template: e.template ? { id: e.template.unique } : null,
      values: e.values,
      variants: e.variants
    }, { error: n } = await s(
      this.#e,
      r.putDocumentById({
        id: e.unique,
        requestBody: u
      })
    );
    return n ? { error: n } : this.read(e.unique);
  }
  /**
   * Deletes a Document on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDocumentServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return s(this.#e, r.deleteDocumentById({ id: e }));
  }
}
class f extends d {
  constructor(e) {
    super(e, m, c);
  }
}
export {
  f as UmbDocumentDetailRepository,
  f as api
};
//# sourceMappingURL=document-detail.repository-kH54fJDj.js.map
