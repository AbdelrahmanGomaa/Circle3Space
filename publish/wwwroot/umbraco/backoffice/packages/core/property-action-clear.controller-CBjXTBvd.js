import { U as t } from "./property-action-base-DoDWw2x7.js";
import { UMB_PROPERTY_CONTEXT as e } from "@umbraco-cms/backoffice/property";
class s extends t {
  async execute() {
    (await this.getContext(e)).clearValue();
  }
}
export {
  s as UmbClearPropertyAction,
  s as default
};
//# sourceMappingURL=property-action-clear.controller-CBjXTBvd.js.map
