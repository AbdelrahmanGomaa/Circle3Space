import { MemberService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as a } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as n } from "@umbraco-cms/backoffice/repository";
class u {
  //#host: UmbControllerHost;
  // TODO: [v15]: ignoring unused var here here to prevent a breaking change
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(r) {
  }
  /**
   * Validate a new Member on the server
   * @param {UmbMemberDetailModel} model - Member Model
   * @param {UmbEntityUnique} parentUnique - Parent Unique
   * @returns {*} - The response from the server
   */
  async validateCreate(r, e = null) {
    if (!r) throw new Error("Member is missing");
    if (!r.unique) throw new Error("Member unique is missing");
    if (!r.newPassword) throw new Error("Member newPassword is missing");
    if (e === void 0) throw new Error("Parent unique is missing");
    const i = {
      email: r.email,
      username: r.username,
      password: r.newPassword,
      isApproved: r.isApproved,
      id: r.unique,
      memberType: { id: r.memberType.unique },
      values: r.values,
      variants: r.variants
    };
    return a(
      //this.#host,
      s.postMemberValidate({
        requestBody: i
      })
    );
  }
  /**
   * Validate a existing Member
   * @param {UmbMemberDetailModel} model - Member Model
   * @param {Array<UmbVariantId>} variantIds - Variant Ids
   * @returns {Promise<*>} - The response from the server
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async validateUpdate(r, e) {
    if (!r.unique) throw new Error("Unique is missing");
    const i = {
      email: r.email,
      username: r.username,
      isApproved: r.isApproved,
      isLockedOut: r.isLockedOut,
      isTwoFactorEnabled: r.isTwoFactorEnabled,
      values: r.values,
      variants: r.variants
    };
    return a(
      //this.#host,
      s.putMemberByIdValidate({
        id: r.unique,
        requestBody: i
      })
    );
  }
}
class p extends n {
  #r;
  constructor(r) {
    super(r), this.#r = new u(this);
  }
  /**
   * Returns a promise with an observable of the detail for the given unique
   * @param {DetailModelType} model - The model to validate
   * @param {string | null} [parentUnique] - The parent unique
   * @returns {*}
   */
  async validateCreate(r, e) {
    if (!r) throw new Error("Data is missing");
    return this.#r.validateCreate(r, e);
  }
  /**
   * Saves the given data
   * @param {DetailModelType} model - The model to save
   * @param {Array<UmbVariantId>} variantIds - The variant ids to save
   * @returns {*}
   */
  async validateSave(r, e) {
    if (!r) throw new Error("Data is missing");
    if (!r.unique) throw new Error("Unique is missing");
    return this.#r.validateUpdate(r, e);
  }
}
export {
  p as UmbMemberValidationRepository,
  p as api
};
//# sourceMappingURL=member-validation.repository-BACTsuWE.js.map
