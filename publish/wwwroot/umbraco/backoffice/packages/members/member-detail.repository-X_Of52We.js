import { f as u, s as l } from "./manifests-BeI4zfAH.js";
import { U as p } from "./index-L-35ogTa.js";
import { UmbId as c } from "@umbraco-cms/backoffice/id";
import { MemberService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as i } from "@umbraco-cms/backoffice/resources";
import { UmbDetailRepositoryBase as d } from "@umbraco-cms/backoffice/repository";
class m {
  #e;
  /**
   * Creates an instance of UmbMemberServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Creates a new Member scaffold
   * @param {Partial<UmbMemberDetailModel>} [preset]
   * @returns { CreateMemberRequestModel }
   * @memberof UmbMemberServerDataSource
   */
  async createScaffold(e = {}) {
    return { data: {
      entityType: u,
      unique: c.new(),
      email: "",
      username: "",
      memberType: {
        unique: "",
        icon: ""
      },
      isApproved: !1,
      isLockedOut: !1,
      isTwoFactorEnabled: !1,
      kind: p.DEFAULT,
      failedPasswordAttempts: 0,
      lastLoginDate: null,
      lastLockoutDate: null,
      lastPasswordChangeDate: null,
      groups: [],
      values: [],
      variants: [
        {
          name: "",
          culture: null,
          segment: null,
          createDate: (/* @__PURE__ */ new Date()).toISOString(),
          updateDate: (/* @__PURE__ */ new Date()).toISOString()
        }
      ],
      ...e
    } };
  }
  /**
   * Fetches a Member with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMemberServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: r, error: s } = await i(this.#e, a.getMemberById({ id: e }));
    return s || !r ? { error: s } : { data: {
      entityType: u,
      unique: r.id,
      email: r.email,
      username: r.username,
      memberType: {
        unique: r.memberType.id,
        icon: r.memberType.icon
      },
      isApproved: r.isApproved,
      isLockedOut: r.isLockedOut,
      isTwoFactorEnabled: r.isTwoFactorEnabled,
      kind: r.kind,
      failedPasswordAttempts: r.failedPasswordAttempts,
      lastLoginDate: r.lastLoginDate || null,
      lastLockoutDate: r.lastLockoutDate || null,
      lastPasswordChangeDate: r.lastPasswordChangeDate || null,
      groups: r.groups,
      values: r.values.map((t) => ({
        editorAlias: t.editorAlias,
        culture: t.culture || null,
        segment: t.segment || null,
        alias: t.alias,
        value: t.value
      })),
      variants: r.variants.map((t) => ({
        culture: t.culture || null,
        segment: t.segment || null,
        name: t.name,
        createDate: t.createDate,
        updateDate: t.updateDate
      }))
    } };
  }
  /**
   * Inserts a new Member on the server
   * @param {UmbMemberDetailModel} model
   * @returns {*}
   * @memberof UmbMemberServerDataSource
   */
  async create(e) {
    if (!e) throw new Error("Member is missing");
    const r = {
      id: e.unique,
      email: e.email,
      username: e.username,
      password: e.newPassword || "",
      memberType: { id: e.memberType.unique },
      groups: e.groups,
      isApproved: e.isApproved,
      values: e.values,
      variants: e.variants
    }, { data: s, error: n } = await i(
      this.#e,
      a.postMember({
        requestBody: r
      })
    );
    return s ? this.read(s) : { error: n };
  }
  /**
   * Updates a Member on the server
   * @param {UmbMemberDetailModel} Member
   * @param model
   * @returns {*}
   * @memberof UmbMemberServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const r = {
      email: e.email,
      groups: e.groups,
      isApproved: e.isApproved,
      isLockedOut: e.isLockedOut,
      isTwoFactorEnabled: e.isTwoFactorEnabled,
      newPassword: e.newPassword,
      oldPassword: e.oldPassword,
      username: e.username,
      values: e.values,
      variants: e.variants
    }, { error: s } = await i(
      this.#e,
      a.putMemberById({
        id: e.unique,
        requestBody: r
      })
    );
    return s ? { error: s } : this.read(e.unique);
  }
  /**
   * Deletes a Member on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMemberServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return i(
      this.#e,
      a.deleteMemberById({
        id: e
      })
    );
  }
}
class T extends d {
  /**
   * Creates an instance of UmbMemberDetailRepository.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberDetailRepository
   */
  constructor(e) {
    super(e, m, l);
  }
  async create(e) {
    return super.create(e, null);
  }
}
export {
  T as UmbMemberDetailRepository,
  T as default
};
//# sourceMappingURL=member-detail.repository-X_Of52We.js.map
