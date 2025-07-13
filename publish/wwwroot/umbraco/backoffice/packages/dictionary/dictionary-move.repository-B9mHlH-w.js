import { DictionaryService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as s } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as a } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
class c {
  #i;
  /**
   * Creates an instance of UmbMoveDictionaryServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMoveDictionaryServerDataSource
   */
  constructor(i) {
    this.#i = i;
  }
  /**
   * Move an item for the given id to the target unique
   * @param {string} unique
   * @param {(string | null)} targetUnique
   * @param args
   * @returns {*}
   * @memberof UmbMoveDictionaryServerDataSource
   */
  async moveTo(i) {
    if (!i.unique) throw new Error("Unique is missing");
    if (i.destination.unique === void 0) throw new Error("Destination unique is missing");
    return s(
      this.#i,
      r.putDictionaryByIdMove({
        id: i.unique,
        requestBody: {
          target: i.destination.unique ? { id: i.destination.unique } : null
        }
      })
    );
  }
}
class p extends u {
  #i = new c(this);
  async requestMoveTo(i) {
    const { error: t } = await this.#i.moveTo(i);
    if (!t) {
      const e = await this.getContext(a), n = { data: { message: "Moved" } };
      e.peek("positive", n);
    }
    return { error: t };
  }
}
export {
  p as UmbMoveDictionaryRepository,
  p as api
};
//# sourceMappingURL=dictionary-move.repository-B9mHlH-w.js.map
