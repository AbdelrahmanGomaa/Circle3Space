import { a as e } from "./base-CzBFGKJV.js";
import { U as n } from "./character-map-modal.token-Ctie_x2r.js";
import { UMB_MODAL_MANAGER_CONTEXT as r } from "@umbraco-cms/backoffice/modal";
class A extends e {
  async execute(a) {
    if (!a) return;
    const t = (await this.getContext(r)).open(this, n);
    if (!t) return;
    const o = await t.onSubmit().catch(() => {
    });
    o && a?.chain().focus().insertContent(o).run();
  }
}
export {
  A as default
};
//# sourceMappingURL=character-map.tiptap-toolbar-api-BFIScrdB.js.map
