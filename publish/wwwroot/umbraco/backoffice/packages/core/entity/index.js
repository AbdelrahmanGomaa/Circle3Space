import { U as x, a as C } from "../entity.context-C8qVKYoi.js";
import { UmbContextToken as s } from "@umbraco-cms/backoffice/context-api";
import { UmbContextBase as o } from "@umbraco-cms/backoffice/class-api";
import { UmbArrayState as r } from "@umbraco-cms/backoffice/observable-api";
const n = new s("UmbAncestorsEntityContext");
class T extends o {
  constructor(t) {
    super(t, n), this.#t = new r([], (e) => e.unique), this.ancestors = this.#t.asObservable();
  }
  #t;
  /**
   * Gets the ancestors state
   * @returns {Array<UmbEntityModel>} - The ancestors state
   * @memberof UmbAncestorsEntityContext
   */
  getAncestors() {
    return this.#t.getValue();
  }
  /**
   * Sets the ancestors state
   * @param {Array<UmbEntityModel>} ancestors - The ancestors state
   * @memberof UmbAncestorsEntityContext
   */
  setAncestors(t) {
    this.#t.setValue(t);
  }
}
export {
  n as UMB_ANCESTORS_ENTITY_CONTEXT,
  x as UMB_ENTITY_CONTEXT,
  T as UmbAncestorsEntityContext,
  C as UmbEntityContext
};
//# sourceMappingURL=index.js.map
