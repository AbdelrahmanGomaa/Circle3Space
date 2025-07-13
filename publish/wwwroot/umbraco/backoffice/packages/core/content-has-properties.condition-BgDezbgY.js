import { U as o } from "./content-workspace.context-token-BMs4lY7q.js";
import { UmbConditionBase as i } from "@umbraco-cms/backoffice/extension-registry";
class m extends i {
  constructor(e, t) {
    super(e, t), this.consumeContext(o, (s) => {
      this.observe(
        s.structure.contentTypeHasProperties,
        (r) => {
          this.permitted = r;
        },
        "hasPropertiesObserver"
      );
    });
  }
}
export {
  m as UmbContentHasPropertiesWorkspaceCondition,
  m as api
};
//# sourceMappingURL=content-has-properties.condition-BgDezbgY.js.map
