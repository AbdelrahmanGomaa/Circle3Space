import { UmbId as m } from "@umbraco-cms/backoffice/id";
import { MediaService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as n } from "@umbraco-cms/backoffice/resources";
import { UmbContextToken as d } from "@umbraco-cms/backoffice/context-api";
import { UmbDetailRepositoryBase as T } from "@umbraco-cms/backoffice/repository";
const l = "media", h = "media-root", w = "umb-media-placeholder";
class p {
  #e;
  /**
   * Creates an instance of UmbMediaServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Creates a new Media scaffold
   * @param {Partial<UmbMediaDetailModel>} [preset]
   * @returns { UmbMediaDetailModel }
   * @memberof UmbMediaServerDataSource
   */
  async createScaffold(e = {}) {
    return { data: {
      entityType: l,
      unique: m.new(),
      urls: [],
      mediaType: {
        unique: "",
        collection: null,
        icon: null
      },
      isTrashed: !1,
      values: [],
      variants: [
        {
          culture: null,
          segment: null,
          name: "",
          createDate: null,
          updateDate: null
        }
      ],
      ...e
    } };
  }
  /**
   * Fetches a Media with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMediaServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: t, error: i } = await n(this.#e, r.getMediaById({ id: e }));
    return i || !t ? { error: i } : { data: {
      entityType: l,
      unique: t.id,
      values: t.values,
      variants: t.variants.map((a) => ({
        state: null,
        culture: a.culture || null,
        segment: a.segment || null,
        name: a.name,
        createDate: a.createDate,
        updateDate: a.updateDate
      })),
      urls: t.urls,
      mediaType: {
        unique: t.mediaType.id,
        collection: t.mediaType.collection ? { unique: t.mediaType.collection.id } : null,
        icon: t.mediaType.icon
      },
      isTrashed: t.isTrashed
    } };
  }
  /**
   * Inserts a new Media on the server
   * @param {UmbMediaDetailModel} model
   * @param parentUnique
   * @returns {*}
   * @memberof UmbMediaServerDataSource
   */
  async create(e, t = null) {
    if (!e) throw new Error("Media is missing");
    if (!e.unique) throw new Error("Media unique is missing");
    const i = {
      id: e.unique,
      parent: t ? { id: t } : null,
      mediaType: { id: e.mediaType.unique },
      values: e.values,
      variants: e.variants.map((u) => ({
        culture: u.culture || null,
        segment: u.segment || null,
        name: u.name
      }))
    }, { data: s, error: a } = await n(
      this.#e,
      r.postMedia({
        requestBody: i
      })
    );
    return s ? this.read(s) : { error: a };
  }
  /**
   * Updates a Media on the server
   * @param {UmbMediaDetailModel} Media
   * @param model
   * @returns {*}
   * @memberof UmbMediaServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const t = {
      values: e.values,
      variants: e.variants
    }, { error: i } = await n(
      this.#e,
      r.putMediaById({
        id: e.unique,
        requestBody: t
      })
    );
    return i ? { error: i } : this.read(e.unique);
  }
  /**
   * Deletes a Media on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMediaServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return n(this.#e, r.deleteMediaById({ id: e }));
  }
}
const y = new d("UmbMediaDetailStore");
class o extends T {
  constructor(e) {
    super(e, p, y);
  }
}
const I = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaDetailRepository: o,
  api: o,
  default: o
}, Symbol.toStringTag, { value: "Module" })), U = new d("UmbMediaItemStore");
export {
  l as U,
  h as a,
  w as b,
  y as c,
  U as d,
  o as e,
  I as m
};
//# sourceMappingURL=media-item.store.context-token-9YLCPlu1.js.map
