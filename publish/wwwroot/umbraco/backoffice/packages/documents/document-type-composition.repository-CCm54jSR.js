import { DocumentTypeService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as a } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
class u {
  #e;
  /**
   * Creates an instance of UmbDocumentTypeCompositionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentTypeCompositionServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Fetches the compatible compositions for a document type from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDocumentTypeCompositionServerDataSource
   */
  async getReferences(e) {
    const o = await a(
      this.#e,
      i.getDocumentTypeByIdCompositionReferences({ id: e })
    ), r = o.error;
    return { data: o.data?.map((s) => ({
      unique: s.id,
      icon: s.icon,
      name: s.name
    })), error: r };
  }
  /**
   * Updates the compositions for a document type on the server
   * @param {DocumentTypeCompositionRequestModel} requestBody
   * @param args
   * @returns {*}
   * @memberof UmbDocumentTypeCompositionServerDataSource
   */
  async availableCompositions(e) {
    const o = {
      id: e.unique,
      isElement: e.isElement,
      currentCompositeIds: e.currentCompositeUniques,
      currentPropertyAliases: e.currentPropertyAliases
    }, r = await a(
      this.#e,
      i.postDocumentTypeAvailableCompositions({ requestBody: o })
    ), n = r.error;
    return { data: r.data?.map((t) => ({
      unique: t.id,
      name: t.name,
      icon: t.icon,
      folderPath: t.folderPath,
      isCompatible: t.isCompatible
    })), error: n };
  }
}
class y extends m {
  #e;
  constructor(e) {
    super(e), this.#e = new u(this);
  }
  async getReferences(e) {
    return this.#e.getReferences(e);
  }
  async availableCompositions(e) {
    return this.#e.availableCompositions(e);
  }
}
export {
  y as UmbDocumentTypeCompositionRepository,
  y as api
};
//# sourceMappingURL=document-type-composition.repository-CCm54jSR.js.map
