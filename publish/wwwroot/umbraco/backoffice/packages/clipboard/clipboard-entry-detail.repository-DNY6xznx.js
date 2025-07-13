import { U as d } from "./clipboard-local-storage.manager-mReNzazn.js";
import { b as c, g as y } from "./manifests-B_tP43dQ.js";
import { UmbId as E } from "@umbraco-cms/backoffice/id";
import { ApiError as s } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbControllerBase as f } from "@umbraco-cms/backoffice/class-api";
import { UmbDetailRepositoryBase as p } from "@umbraco-cms/backoffice/repository";
const e = "localstorage";
class m extends f {
  #t = new d(this);
  /**
   * Scaffold a new clipboard entry
   * @param {Partial<UmbClipboardEntryDetailModel>} [preset]
   * @returns {*}
   * @memberof UmbClipboardEntryDetailLocalStorageDataSource
   */
  async createScaffold(t = {}) {
    return { data: {
      values: [],
      entityType: c,
      icon: null,
      meta: {},
      name: null,
      unique: E.new(),
      createDate: null,
      updateDate: null,
      ...t
    } };
  }
  /**
   * Create a new clipboard entry in local storage
   * @param {UmbClipboardEntryDetailModel} model
   * @returns {*}  {Promise<UmbDataSourceResponse<UmbClipboardEntry>>}
   * @memberof UmbClipboardEntryDetailLocalStorageDataSource
   */
  async create(t) {
    if (!t)
      return {
        error: new s(
          {
            method: "POST",
            url: e
          },
          {
            ok: !1,
            status: 400,
            statusText: "Bad Request",
            url: e,
            body: {}
          },
          "Clipboard entry is missing"
        )
      };
    if (await this.#t.getEntry(t.unique))
      return {
        error: new s(
          {
            method: "POST",
            url: e
          },
          {
            ok: !1,
            status: 400,
            statusText: "Bad Request",
            url: e,
            body: {}
          },
          "Clipboard entry already exists"
        )
      };
    const u = (/* @__PURE__ */ new Date()).toISOString(), r = structuredClone(t);
    r.createDate = u, r.updateDate = u;
    const n = [...(await this.#t.getEntries()).entries, r];
    return await this.#t.setEntries(n), { data: r };
  }
  /**
   * Read a clipboard entry from local storage
   * @param {string} unique
   * @returns {*}  {Promise<UmbDataSourceResponse<UmbClipboardEntry>>}
   * @memberof UmbClipboardEntryDetailLocalStorageDataSource
   */
  async read(t) {
    if (!t)
      return {
        error: new s(
          {
            method: "GET",
            url: e
          },
          {
            ok: !1,
            status: 400,
            statusText: "Bad Request",
            url: e,
            body: {}
          },
          "Unique is missing"
        )
      };
    const a = await this.#t.getEntry(t);
    return a ? { data: a } : {
      error: new s(
        {
          method: "GET",
          url: e
        },
        {
          ok: !1,
          status: 404,
          statusText: "Not Found",
          url: e,
          body: {}
        },
        "Entry not found"
      )
    };
  }
  /**
   * Update a clipboard entry in local storage
   * @param {UmbClipboardEntryDetailModel} model
   * @returns {*}  {Promise<UmbDataSourceResponse<UmbClipboardEntry>>}
   * @memberof UmbClipboardEntryDetailLocalStorageDataSource
   */
  async update(t) {
    if (!t)
      return {
        error: new s(
          {
            method: "PUT",
            url: e
          },
          {
            ok: !1,
            status: 400,
            statusText: "Bad Request",
            url: e,
            body: {}
          },
          "Clipboard entry is missing"
        )
      };
    if (!await this.#t.getEntry(t.unique))
      return {
        error: new s(
          {
            method: "GET",
            url: e
          },
          {
            ok: !1,
            status: 404,
            statusText: "Not Found",
            url: e,
            body: {}
          },
          "Entry not found"
        )
      };
    const r = (await this.#t.getEntries()).entries.map((n) => {
      if (n.unique === t.unique) {
        const i = structuredClone(t);
        return i.updateDate = (/* @__PURE__ */ new Date()).toISOString(), i;
      }
      return n;
    });
    return await this.#t.setEntries(r), { data: r.find((n) => n.unique === t.unique) };
  }
  /**
   * Delete a clipboard entry from local storage
   * @param {string} unique
   * @returns {*}  {Promise<UmbDataSourceErrorResponse>}
   * @memberof UmbClipboardEntryDetailLocalStorageDataSource
   */
  async delete(t) {
    if (!t)
      return {
        error: new s(
          {
            method: "DELETE",
            url: e
          },
          {
            ok: !1,
            status: 400,
            statusText: "Bad Request",
            url: e,
            body: {}
          },
          "Unique is missing"
        )
      };
    if (!await this.#t.getEntry(t))
      return {
        error: new s(
          {
            method: "GET",
            url: e
          },
          {
            ok: !1,
            status: 404,
            statusText: "Not Found",
            url: e,
            body: {}
          },
          "Entry not found"
        )
      };
    const r = (await this.#t.getEntries()).entries.filter((o) => o.unique !== t);
    return await this.#t.setEntries(r), {};
  }
}
class D extends p {
  constructor(t) {
    super(t, m, y);
  }
  async create(t) {
    return super.create(t, null);
  }
}
export {
  D as UmbClipboardEntryDetailRepository,
  D as default
};
//# sourceMappingURL=clipboard-entry-detail.repository-DNY6xznx.js.map
