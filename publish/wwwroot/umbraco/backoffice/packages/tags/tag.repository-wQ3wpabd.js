import { TagService as h } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as m } from "@umbraco-cms/backoffice/resources";
import { c as l } from "./constants-BHP6V-qT.js";
import { UmbControllerBase as g } from "@umbraco-cms/backoffice/class-api";
class p {
  #t;
  /**
   * Creates an instance of UmbTagServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbTagServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Get a list of tags on the server
   * @param root0
   * @param root0.query
   * @param root0.skip
   * @param root0.take
   * @param root0.tagGroup
   * @param root0.culture
   * @returns {*}
   * @memberof UmbTagServerDataSource
   */
  async getCollection({
    query: t,
    skip: e,
    take: r,
    tagGroup: a,
    culture: s
  }) {
    return m(this.#t, h.getTag({ query: t, skip: e, take: r, tagGroup: a, culture: s }));
  }
}
class d extends g {
  #t;
  #s;
  #e;
  constructor(t) {
    super(t), this.#s = new p(this), this.#t = this.consumeContext(l, (e) => {
      this.#e = e;
    }).asPromise();
  }
  async requestTags(t, e, { skip: r, take: a, query: s } = { skip: 0, take: 1e3, query: "" }) {
    await this.#t;
    const i = e || "", { data: o, error: n } = await this.#s.getCollection({
      skip: r,
      take: a,
      tagGroup: t,
      culture: i,
      query: s
    });
    return o && o.items.forEach((u) => this.#e?.append(u)), {
      data: o,
      error: n,
      asObservable: () => this.#e.byQuery(t, i, s)
    };
  }
  async queryTags(t, e, r, { skip: a, take: s } = { skip: 0, take: 1e3 }) {
    return this.requestTags(t, e, { skip: a, take: s, query: r });
  }
}
export {
  d as UmbTagRepository,
  d as default
};
//# sourceMappingURL=tag.repository-wQ3wpabd.js.map
