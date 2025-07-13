import { U as s } from "./block-entry.context-token-DG6_TzkT.js";
import { UmbConditionBase as i } from "@umbraco-cms/backoffice/extension-registry";
class C extends i {
  constructor(t, o) {
    super(t, o), this.consumeContext(s, (e) => {
      this.observe(
        e.showContentEdit,
        (n) => {
          this.permitted = !!n;
        },
        "observeEntryShowContentEdit"
      );
    });
  }
}
export {
  C as UmbBlockEntryShowContentEditCondition,
  C as default
};
//# sourceMappingURL=block-entry-show-content-edit.condition-m2i8VsF6.js.map
