import { d as p } from "./manifests-BUr6Ff2j.js";
import { DocumentService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as u } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as b } from "@umbraco-cms/backoffice/repository";
import { UMB_NOTIFICATION_CONTEXT as w } from "@umbraco-cms/backoffice/notification";
class D {
  #t;
  /**
   * Creates an instance of UmbDocumentPublishingServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentPublishingServerDataSource
   */
  constructor(s) {
    this.#t = s;
  }
  /**
   * Publish one or more variants of a Document
   * @param {string} unique
   * @param {Array<UmbVariantId>} variantIds
   * @param variants
   * @returns {*}
   * @memberof UmbDocumentPublishingServerDataSource
   */
  async publish(s, e) {
    if (!s) throw new Error("Id is missing");
    const r = {
      publishSchedules: e.map(
        (t) => ({
          culture: t.variantId.isCultureInvariant() ? null : t.variantId.toCultureString(),
          schedule: t.schedule
        })
      )
    };
    return u(this.#t, n.putDocumentByIdPublish({ id: s, requestBody: r }));
  }
  /**
   * Unpublish one or more variants of a Document
   * @param {string} unique
   * @param {Array<UmbVariantId>} variantIds
   * @returns {*}
   * @memberof UmbDocumentPublishingServerDataSource
   */
  async unpublish(s, e) {
    if (!s) throw new Error("Id is missing");
    if (e.some((t) => t.isCultureInvariant())) {
      const t = {
        cultures: null
      };
      return u(this.#t, n.putDocumentByIdUnpublish({ id: s, requestBody: t }));
    }
    const r = {
      cultures: e.map((t) => t.toCultureString())
    };
    return u(this.#t, n.putDocumentByIdUnpublish({ id: s, requestBody: r }));
  }
  /**
   * Publish variants of a document and all its descendants
   * @param unique
   * @param variantIds
   * @param includeUnpublishedDescendants
   * @memberof UmbDocumentPublishingServerDataSource
   */
  async publishWithDescendants(s, e, i) {
    if (!s) throw new Error("Id is missing");
    const r = {
      cultures: e.map((l) => l.toCultureString()),
      includeUnpublishedDescendants: i
    }, { data: t, error: o } = await u(
      this.#t,
      n.putDocumentByIdPublishWithDescendants({ id: s, requestBody: r })
    );
    if (o || !t)
      return { error: o };
    const d = t.taskId;
    let a = !0;
    for (; ; ) {
      await new Promise((m) => setTimeout(m, a ? 1e3 : 5e3)), a = !1;
      const { data: l, error: c } = await u(
        this.#t,
        n.getDocumentByIdPublishWithDescendantsResultByTaskId({ id: s, taskId: d })
      );
      if (c || !l)
        return { error: c };
      if (l.isComplete)
        return { error: null };
    }
  }
  /**
   * Get the published Document by its unique
   * @param {string} unique - Document unique
   * @returns {Promise<UmbDataSourceResponse<UmbDocumentDetailModel>>} Published document
   * @memberof UmbDocumentPublishingServerDataSource
   */
  async published(s) {
    if (!s) throw new Error("Unique is missing");
    const { data: e, error: i } = await u(
      this.#t,
      n.getDocumentByIdPublished({ id: s })
    );
    return i || !e ? { error: i } : { data: {
      entityType: p,
      unique: e.id,
      values: e.values.map((t) => ({
        editorAlias: t.editorAlias,
        culture: t.culture || null,
        segment: t.segment || null,
        alias: t.alias,
        value: t.value
      })),
      variants: e.variants.map((t) => ({
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
      urls: e.urls.map((t) => ({
        culture: t.culture || null,
        url: t.url
      })),
      template: e.template ? { unique: e.template.id } : null,
      documentType: {
        unique: e.documentType.id,
        collection: e.documentType.collection ? { unique: e.documentType.collection.id } : null,
        icon: e.documentType.icon
      },
      isTrashed: e.isTrashed
    } };
  }
}
class B extends b {
  #t;
  #e;
  /**
   * @deprecated The calling workspace context should be used instead to show notifications
   */
  #s;
  constructor(s) {
    super(s), this.#e = new D(this), this.#t = Promise.all([
      this.consumeContext(w, (e) => {
        this.#s = e;
      }).asPromise()
    ]);
  }
  /**
   * Publish one or more variants of a Document
   * @param {string} id
   * @param {Array<UmbVariantId>} variantIds
   * @param unique
   * @param variants
   * @returns {*}
   * @memberof UmbDocumentPublishingRepository
   */
  async publish(s, e) {
    if (!s) throw new Error("id is missing");
    if (!e.length) throw new Error("variant IDs are missing");
    return await this.#t, this.#e.publish(s, e);
  }
  /**
   * Unpublish one or more variants of a Document
   * @param {string} id
   * @param {Array<UmbVariantId>} variantIds
   * @returns {*}
   * @memberof UmbDocumentPublishingRepository
   */
  async unpublish(s, e) {
    if (!s) throw new Error("id is missing");
    if (!e) throw new Error("variant IDs are missing");
    await this.#t;
    const { error: i } = await this.#e.unpublish(s, e);
    if (!i) {
      const r = { data: { message: "Document unpublished" } };
      this.#s?.peek("positive", r);
    }
    return { error: i };
  }
  /**
   * Publish variants of a document including its descendants
   * @param id
   * @param variantIds
   * @param includeUnpublishedDescendants
   * @memberof UmbDocumentPublishingRepository
   */
  async publishWithDescendants(s, e, i) {
    if (!s) throw new Error("id is missing");
    if (!e) throw new Error("variant IDs are missing");
    await this.#t;
    const r = { data: { message: "Document and descendants submitted for publishing..." } };
    this.#s?.peek("positive", r);
    const { error: t } = await this.#e.publishWithDescendants(
      s,
      e,
      i
    );
    if (!t) {
      const o = { data: { message: "Document published with descendants" } };
      this.#s?.peek("positive", o);
    }
    return { error: t };
  }
  /**
   * Get the published data of a document
   * @param {string} unique Document unique
   * @returns { Promise<UmbRepositoryResponse<UmbDocumentDetailModel>>} Published document
   * @memberof UmbDocumentPublishingRepository
   */
  async published(s) {
    return this.#e.published(s);
  }
}
export {
  B as UmbDocumentPublishingRepository,
  B as api
};
//# sourceMappingURL=document-publishing.repository-ypBwqj-c.js.map
