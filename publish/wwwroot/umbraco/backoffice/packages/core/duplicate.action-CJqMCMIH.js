import { U as i } from "./entity-action-base-C1FfYSbT.js";
import { U as r } from "./request-reload-structure-for-entity.event-CHtdC9hO.js";
import { createExtensionApiByAlias as a } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_ACTION_EVENT_CONTEXT as o } from "@umbraco-cms/backoffice/action";
class l extends i {
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    if (!this.args.entityType) throw new Error("Entity Type is not available");
    try {
      const t = await a(
        this,
        this.args.meta.duplicateRepositoryAlias
      );
      if (!t) throw new Error("Duplicate repository is not available");
      const { error: e } = await t.requestDuplicate({
        unique: this.args.unique
      });
      e || this.#t();
    } catch (t) {
      console.log(t);
    }
  }
  async #t() {
    const t = await this.getContext(o), e = new r({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    t.dispatchEvent(e);
  }
}
export {
  l as UmbDuplicateEntityAction,
  l as api
};
//# sourceMappingURL=duplicate.action-CJqMCMIH.js.map
