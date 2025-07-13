import { a as d } from "./base-CzBFGKJV.js";
import { umbEmbeddedMedia as o } from "@umbraco-cms/backoffice/external/tiptap";
import { UMB_EMBEDDED_MEDIA_MODAL as n } from "@umbraco-cms/backoffice/embedded-media";
import { UMB_MODAL_MANAGER_CONTEXT as m } from "@umbraco-cms/backoffice/modal";
class p extends d {
  async execute(i) {
    const a = {
      constrain: !1,
      height: 240,
      width: 360,
      url: ""
    }, e = i?.getAttributes(o.name);
    e && (a.constrain = e["data-embed-constrain"], a.height = e["data-embed-height"], a.width = e["data-embed-width"], a.url = e["data-embed-url"]);
    const r = (await this.getContext(m)).open(this, n, { data: a });
    if (!r) return;
    const t = await r.onSubmit().catch(() => {
    });
    t && i?.commands.setEmbeddedMedia({
      markup: t.markup,
      url: t.url,
      constrain: t.constrain,
      height: t.height?.toString(),
      width: t.width?.toString()
    });
  }
}
export {
  p as default
};
//# sourceMappingURL=embedded-media.tiptap-toolbar-api-BkKRK5Pc.js.map
