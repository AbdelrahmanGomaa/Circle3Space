import { e as n, t as c } from "./constants-BCxOO27P.js";
import { UserGroupService as t } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbId as u } from "@umbraco-cms/backoffice/id";
import { tryExecuteAndNotify as i } from "@umbraco-cms/backoffice/resources";
import { UmbDetailRepositoryBase as d } from "@umbraco-cms/backoffice/repository";
class l {
  #s;
  /**
   * Creates an instance of UmbUserGroupServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbUserGroupServerDataSource
   */
  constructor(s) {
    this.#s = s;
  }
  /**
   * Creates a new User Group scaffold
   * @param {(string | null)} parentUnique
   * @returns { CreateUserGroupRequestModel }
   * @memberof UmbUserGroupServerDataSource
   */
  async createScaffold() {
    return { data: {
      alias: "",
      aliasCanBeChanged: !0,
      documentRootAccess: !1,
      documentStartNode: null,
      entityType: n,
      fallbackPermissions: [],
      hasAccessToAllLanguages: !1,
      icon: "icon-users",
      isDeletable: !0,
      languages: [],
      mediaRootAccess: !1,
      mediaStartNode: null,
      name: "",
      permissions: [],
      sections: [],
      unique: u.new()
    } };
  }
  /**
   * Fetches a User Group with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbUserGroupServerDataSource
   */
  async read(s) {
    if (!s) throw new Error("Unique is missing");
    const { data: e, error: a } = await i(this.#s, t.getUserGroupById({ id: s }));
    return a || !e ? { error: a } : { data: {
      alias: e.alias,
      documentRootAccess: e.documentRootAccess,
      documentStartNode: e.documentStartNode ? { unique: e.documentStartNode.id } : null,
      entityType: n,
      fallbackPermissions: e.fallbackPermissions,
      hasAccessToAllLanguages: e.hasAccessToAllLanguages,
      icon: e.icon || null,
      isDeletable: e.isDeletable,
      aliasCanBeChanged: e.aliasCanBeChanged,
      languages: e.languages,
      mediaRootAccess: e.mediaRootAccess,
      mediaStartNode: e.mediaStartNode ? { unique: e.mediaStartNode.id } : null,
      name: e.name,
      permissions: e.permissions,
      sections: e.sections,
      unique: e.id
    } };
  }
  /**
   * Inserts a new User Group on the server
   * @param {UmbUserGroupDetailModel} model
   * @returns {*}
   * @memberof UmbUserGroupServerDataSource
   */
  async create(s) {
    if (!s) throw new Error("User Group is missing");
    const e = {
      alias: s.alias,
      documentRootAccess: s.documentRootAccess,
      documentStartNode: s.documentStartNode ? { id: s.documentStartNode.unique } : null,
      fallbackPermissions: s.fallbackPermissions,
      hasAccessToAllLanguages: s.hasAccessToAllLanguages,
      icon: s.icon,
      languages: s.languages,
      mediaRootAccess: s.mediaRootAccess,
      mediaStartNode: s.mediaStartNode ? { id: s.mediaStartNode.unique } : null,
      name: s.name,
      permissions: s.permissions,
      sections: s.sections
    }, { data: a, error: r } = await i(
      this.#s,
      t.postUserGroup({
        requestBody: e
      })
    );
    return a ? this.read(a) : { error: r };
  }
  /**
   * Updates a UserGroup on the server
   * @param {UmbUserGroupDetailModel} UserGroup
   * @param model
   * @returns {*}
   * @memberof UmbUserGroupServerDataSource
   */
  async update(s) {
    if (!s.unique) throw new Error("Unique is missing");
    const e = {
      alias: s.alias,
      documentRootAccess: s.documentRootAccess,
      documentStartNode: s.documentStartNode ? { id: s.documentStartNode.unique } : null,
      fallbackPermissions: s.fallbackPermissions,
      hasAccessToAllLanguages: s.hasAccessToAllLanguages,
      icon: s.icon,
      languages: s.languages,
      mediaRootAccess: s.mediaRootAccess,
      mediaStartNode: s.mediaStartNode ? { id: s.mediaStartNode.unique } : null,
      name: s.name,
      permissions: s.permissions,
      sections: s.sections
    }, { error: a } = await i(
      this.#s,
      t.putUserGroupById({
        id: s.unique,
        requestBody: e
      })
    );
    return a ? { error: a } : this.read(s.unique);
  }
  /**
   * Deletes a User Group on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbUserGroupServerDataSource
   */
  async delete(s) {
    if (!s) throw new Error("Unique is missing");
    return i(
      this.#s,
      t.deleteUserGroupById({
        id: s
      })
    );
  }
}
class f extends d {
  constructor(s) {
    super(s, l, c);
  }
  async create(s) {
    return super.create(s, null);
  }
}
export {
  f as UmbUserGroupDetailRepository,
  f as default
};
//# sourceMappingURL=user-group-detail.repository-CY170Kxb.js.map
