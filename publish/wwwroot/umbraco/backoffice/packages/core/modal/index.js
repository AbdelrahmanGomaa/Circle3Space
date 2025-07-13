import { U as m } from "../modal-manager.context-DPpuCk7K.js";
import { b as f, a as x, c as A } from "../modal-manager.context-DPpuCk7K.js";
import { U as o } from "../modal-token-wEQqBBXI.js";
import { UmbControllerBase as n } from "@umbraco-cms/backoffice/class-api";
import { UmbConfirmModalElement as O } from "../confirm-modal.element-COhIMOef.js";
import { a as w, U as B, a as R } from "../discard-changes-modal.element-Ds5HOoV9.js";
import { m as y } from "../manifest-D87W_b9a.js";
const r = new o("Umb.Modal.Confirm", {
  modal: {
    type: "dialog"
  }
});
class s extends n {
  async open(e) {
    const t = (await this.getContext(m)).open(this, r, {
      data: e
    }).onSubmit();
    t.catch(() => {
      this.destroy();
    }), await t, this.destroy();
  }
}
function C(a, e) {
  return new s(a).open(e);
}
const b = new o("Umb.Modal.DiscardChanges", {
  modal: {
    type: "dialog"
  }
}), c = new o(
  "Umb.Modal.ErrorViewer",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
), p = new o(
  "Umb.Modal.ItemPicker",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
export {
  r as UMB_CONFIRM_MODAL,
  b as UMB_DISCARD_CHANGES_MODAL,
  c as UMB_ERROR_VIEWER_MODAL,
  p as UMB_ITEM_PICKER_MODAL,
  f as UMB_MODAL_CONTEXT,
  m as UMB_MODAL_MANAGER_CONTEXT,
  s as UmbConfirmModalController,
  O as UmbConfirmModalElement,
  w as UmbDiscardChangesModalElement,
  B as UmbModalBaseElement,
  x as UmbModalElement,
  A as UmbModalManagerContext,
  o as UmbModalToken,
  R as element,
  y as manifests,
  C as umbConfirmModal
};
//# sourceMappingURL=index.js.map
