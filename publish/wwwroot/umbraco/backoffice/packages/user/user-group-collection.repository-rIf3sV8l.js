import { UserGroupService as r } from "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/id";
import { tryExecuteAndNotify as n } from "@umbraco-cms/backoffice/resources";
import { e as i, t as c } from "./constants-BCxOO27P.js";
import "@umbraco-cms/backoffice/repository";
import { UmbControllerBase as l } from "@umbraco-cms/backoffice/class-api";
class u {
  #e;
  /**
   * Creates an instance of UmbUserGroupCollectionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbUserGroupCollectionServerDataSource
   */
  constructor(s) {
    this.#e = s;
  }
  async getCollection(s) {
    const { data: t, error: o } = await n(
      this.#e,
      r.getFilterUserGroup({ skip: s.skip, take: s.take, filter: s.query })
    );
    return t ? { data: { items: t.items.map((e) => ({
      alias: e.alias,
      aliasCanBeChanged: e.aliasCanBeChanged,
      documentRootAccess: e.documentRootAccess,
      documentStartNode: e.documentStartNode ? { unique: e.documentStartNode.id } : null,
      entityType: i,
      fallbackPermissions: e.fallbackPermissions,
      hasAccessToAllLanguages: e.hasAccessToAllLanguages,
      icon: e.icon || null,
      isDeletable: e.isDeletable,
      languages: e.languages,
      mediaRootAccess: e.mediaRootAccess,
      mediaStartNode: e.mediaStartNode ? { unique: e.mediaStartNode.id } : null,
      name: e.name,
      permissions: e.permissions,
      sections: e.sections,
      unique: e.id
    })), total: t.total } } : { error: o };
  }
}
class A extends l {
  #e;
  #s;
  #t;
  constructor(s) {
    super(s), this.#t = new u(this._host), this.#e = this.consumeContext(c, (t) => {
      this.#s = t;
    }).asPromise();
  }
  async requestCollection(s = { skip: 0, take: 100 }) {
    await this.#e;
    const { data: t, error: o } = await this.#t.getCollection(s);
    return t && this.#s?.appendItems(t.items), { data: t, error: o, asObservable: () => this.#s.all() };
  }
}
export {
  A as UmbUserGroupCollectionRepository,
  A as default
};
//# sourceMappingURL=user-group-collection.repository-rIf3sV8l.js.map
