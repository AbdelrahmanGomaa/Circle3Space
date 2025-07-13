import { MemberTypeService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as n } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
class p {
  #e;
  /**
   * Creates an instance of UmbMemberTypeCompositionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberTypeCompositionServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Fetches the compatible compositions for a document type from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMemberTypeCompositionServerDataSource
   */
  async getReferences(e) {
    const r = await n(
      this.#e,
      a.getMemberTypeByIdCompositionReferences({ id: e })
    ), o = r.error;
    return { data: r.data?.map((s) => ({
      unique: s.id,
      icon: s.icon,
      name: s.name
    })), error: o };
  }
  /**
   * Updates the compositions for a document type on the server
   * @param {MemberTypeCompositionRequestModel} requestBody
   * @param args
   * @returns {*}
   * @memberof UmbMemberTypeCompositionServerDataSource
   */
  async availableCompositions(e) {
    const r = {
      id: e.unique,
      currentCompositeIds: e.currentCompositeUniques,
      currentPropertyAliases: e.currentPropertyAliases
    }, o = await n(
      this.#e,
      a.postMemberTypeAvailableCompositions({ requestBody: r })
    ), i = o.error;
    return { data: o.data?.map((t) => ({
      unique: t.id,
      name: t.name,
      icon: t.icon,
      folderPath: t.folderPath,
      isCompatible: t.isCompatible
    })), error: i };
  }
}
class l extends m {
  #e;
  constructor(e) {
    super(e), this.#e = new p(this);
  }
  async getReferences(e) {
    return this.#e.getReferences(e);
  }
  async availableCompositions(e) {
    return this.#e.availableCompositions(e);
  }
}
export {
  l as UmbMemberTypeCompositionRepository,
  l as api
};
//# sourceMappingURL=member-type-composition.repository-BAMbNde6.js.map
