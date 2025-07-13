import { a } from "./entity-CGrHYXC8.js";
import { RelationTypeService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as s } from "@umbraco-cms/backoffice/resources";
import { U as o } from "./relation-type-detail.store.context-token-Dk0XD8Vu.js";
import { UmbRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class l {
  #e;
  /**
   * Creates an instance of UmbRelationTypeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbRelationTypeServerDataSource
   */
  constructor(i) {
    this.#e = i;
  }
  /**
   * Fetches a Relation Type with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbRelationTypeServerDataSource
   */
  async read(i) {
    if (!i) throw new Error("Unique is missing");
    const { data: e, error: t } = await s(
      this.#e,
      n.getRelationTypeById({ id: i })
    );
    return t || !e ? { error: t } : { data: {
      alias: e.alias || "",
      child: e.childObject ? {
        objectType: {
          unique: e.childObject.id,
          name: e.childObject.name || ""
        }
      } : null,
      entityType: a,
      isBidirectional: e.isBidirectional,
      isDependency: e.isDependency,
      name: e.name,
      parent: e.parentObject ? {
        objectType: {
          unique: e.parentObject.id,
          name: e.parentObject.name || ""
        }
      } : null,
      unique: e.id
    } };
  }
}
class T extends c {
  #e;
  #i;
  #t = new l(this);
  constructor(i) {
    super(i), this.#e = Promise.all([
      this.consumeContext(o, (e) => {
        this.#i = e;
      }).asPromise()
    ]);
  }
  /**
   * Requests the detail for the given unique
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async requestByUnique(i) {
    if (!i) throw new Error("Unique is missing");
    await this.#e;
    const { data: e, error: t } = await this.#t.read(i);
    return e && this.#i.append(e), { data: e, error: t, asObservable: () => this.#i.byUnique(i) };
  }
  /**
   * Returns a promise with an observable of the detail for the given unique
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async byUnique(i) {
    if (!i) throw new Error("Unique is missing");
    return await this.#e, this.#i.byUnique(i);
  }
}
export {
  T as UmbRelationTypeDetailRepository,
  T as default
};
//# sourceMappingURL=relation-type-detail.repository-Dhk-kMCW.js.map
