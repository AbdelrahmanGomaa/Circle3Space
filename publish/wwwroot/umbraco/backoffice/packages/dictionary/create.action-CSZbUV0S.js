import { v as e } from "./paths-DZopmHn1.js";
import { UmbEntityActionBase as a } from "@umbraco-cms/backoffice/entity-action";
class r extends a {
  async execute() {
    const t = e.generateAbsolute({
      parentEntityType: this.args.entityType,
      parentUnique: this.args.unique ?? "null"
    });
    history.pushState({}, "", t);
  }
}
export {
  r as UmbCreateDictionaryEntityAction,
  r as default
};
//# sourceMappingURL=create.action-CSZbUV0S.js.map
