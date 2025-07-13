import { b as a, h as u } from "./member-group-picker-modal.element-COluPxRJ.js";
import { UmbId as m } from "@umbraco-cms/backoffice/id";
import { tryExecuteAndNotify as i } from "@umbraco-cms/backoffice/resources";
import { MemberGroupService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbDetailRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class p {
  #r;
  /**
   * Creates an instance of UmbMemberGroupServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberGroupServerDataSource
   */
  constructor(r) {
    this.#r = r;
  }
  /**
   * Creates a new Member Group scaffold
   * @param {(string | null)} parentUnique
   * @returns { CreateMemberGroupRequestModel }
   * @memberof UmbMemberGroupServerDataSource
   */
  async createScaffold() {
    return { data: {
      entityType: a,
      unique: m.new(),
      name: ""
    } };
  }
  /**
   * Fetches a Member Group with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMemberGroupServerDataSource
   */
  async read(r) {
    if (!r) throw new Error("Unique is missing");
    const { data: t, error: e } = await i(
      this.#r,
      n.getMemberGroupById({ id: r })
    );
    return e || !t ? { error: e } : { data: {
      entityType: a,
      unique: t.id,
      name: t.name
    } };
  }
  /**
   * Inserts a new Member Group on the server
   * @param {UmbMemberGroupDetailModel} model
   * @returns {*}
   * @memberof UmbMemberGroupServerDataSource
   */
  async create(r) {
    if (!r) throw new Error("Member Group is missing");
    const t = {
      name: r.name,
      id: r.unique
    }, { data: e, error: s } = await i(
      this.#r,
      n.postMemberGroup({
        requestBody: t
      })
    );
    return e ? this.read(e) : { error: s };
  }
  /**
   * Updates a MemberGroup on the server
   * @param {UmbMemberGroupDetailModel} MemberGroup
   * @param model
   * @returns {*}
   * @memberof UmbMemberGroupServerDataSource
   */
  async update(r) {
    if (!r.unique) throw new Error("Unique is missing");
    const t = {
      name: r.name
    }, { error: e } = await i(
      this.#r,
      n.putMemberGroupById({
        id: r.unique,
        requestBody: t
      })
    );
    return e ? { error: e } : this.read(r.unique);
  }
  /**
   * Deletes a Member Group on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMemberGroupServerDataSource
   */
  async delete(r) {
    if (!r) throw new Error("Unique is missing");
    return i(
      this.#r,
      n.deleteMemberGroupById({
        id: r
      })
    );
  }
}
class E extends c {
  constructor(r) {
    super(r, p, u);
  }
  async create(r) {
    return super.create(r, null);
  }
}
export {
  E as UmbMemberGroupDetailRepository,
  E as default
};
//# sourceMappingURL=member-group-detail.repository-DTVStRfS.js.map
