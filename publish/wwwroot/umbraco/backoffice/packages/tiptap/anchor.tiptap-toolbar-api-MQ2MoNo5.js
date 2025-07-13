import { a as r } from "./base-CzBFGKJV.js";
import { U as i } from "./anchor-modal.token-BPM0CF21.js";
import { Anchor as n } from "@umbraco-cms/backoffice/external/tiptap";
import { UMB_MODAL_MANAGER_CONTEXT as s } from "@umbraco-cms/backoffice/modal";
class u extends r {
  async execute(t) {
    const a = t?.getAttributes(n.name);
    if (!a) return;
    const o = (await this.getContext(s)).open(this, i, { data: { id: a?.id } });
    if (!o) return;
    const e = await o.onSubmit().catch(() => {
    });
    e && t?.chain().insertContent({ type: n.name, attrs: { id: e } }).run();
  }
}
export {
  u as default
};
//# sourceMappingURL=anchor.tiptap-toolbar-api-MQ2MoNo5.js.map
