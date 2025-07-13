import { MediaService as e } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as t } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as n } from "@umbraco-cms/backoffice/repository";
class u {
  //#host: UmbControllerHost;
  // TODO: [v15]: ignoring unused var here here to prevent a breaking change
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(i) {
  }
  /**
   * Validate a new Media on the server
   * @param {UmbMediaDetailModel} model - Media Model
   * @param {UmbEntityUnique} parentUnique - Parent Unique
   * @returns {*}
   */
  async validateCreate(i, a = null) {
    if (!i) throw new Error("Media is missing");
    if (!i.unique) throw new Error("Media unique is missing");
    if (a === void 0) throw new Error("Parent unique is missing");
    const r = {
      id: i.unique,
      parent: a ? { id: a } : null,
      mediaType: { id: i.mediaType.unique },
      values: i.values,
      variants: i.variants
    };
    return t(
      //this.#host,
      e.postMediaValidate({
        requestBody: r
      })
    );
  }
  /**
   * Validate a existing Media
   * @param {UmbMediaDetailModel} model - Media Model
   * @param {Array<UmbVariantId>} variantIds - Variant Ids
   * @returns {Promise<*>} - The response from the server
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async validateUpdate(i, a) {
    if (!i.unique) throw new Error("Unique is missing");
    const r = {
      values: i.values,
      variants: i.variants
    };
    return t(
      //this.#host,
      e.putMediaByIdValidate({
        id: i.unique,
        requestBody: r
      })
    );
  }
}
class c extends n {
  #i;
  constructor(i) {
    super(i), this.#i = new u(this);
  }
  /**
   * Returns a promise with an observable of the detail for the given unique
   * @param {DetailModelType} model - The model to validate
   * @param {string | null} [parentUnique] - The parent unique
   * @returns {*}
   */
  async validateCreate(i, a) {
    if (!i) throw new Error("Data is missing");
    return this.#i.validateCreate(i, a);
  }
  /**
   * Saves the given data
   * @param {DetailModelType} model - The model to save
   * @param {Array<UmbVariantId>} variantIds - The variant ids to save
   * @returns {*}
   */
  async validateSave(i, a) {
    if (!i) throw new Error("Data is missing");
    if (!i.unique) throw new Error("Unique is missing");
    return this.#i.validateUpdate(i, a);
  }
}
export {
  c as UmbMediaValidationRepository,
  c as api
};
//# sourceMappingURL=media-validation.repository-3oFTDjyn.js.map
