import { a as e } from "./base-CzBFGKJV.js";
import { UMB_CODE_EDITOR_MODAL as n } from "@umbraco-cms/backoffice/code-editor";
import { UMB_MODAL_MANAGER_CONTEXT as r } from "@umbraco-cms/backoffice/modal";
import { UmbLocalizationController as i } from "@umbraco-cms/backoffice/localization-api";
class u extends e {
  #t = new i(this);
  async execute(t) {
    if (!t) return;
    const a = (await this.getContext(r)).open(this, n, {
      data: {
        headline: this.#t.term("tiptap_sourceCodeEdit"),
        content: t?.getHTML() ?? "",
        language: "html",
        formatOnLoad: !0
      }
    });
    if (!a) return;
    const o = await a.onSubmit().catch(() => {
    });
    o && t?.commands.setContent(o.content, !0);
  }
}
export {
  u as default
};
//# sourceMappingURL=source-editor.tiptap-toolbar-api-B7rQdUeZ.js.map
