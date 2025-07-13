import { U as i } from "./tiny-mce-plugin-BKLu9hN_.js";
import { UmbLocalizationController as n } from "@umbraco-cms/backoffice/localization-api";
import { UMB_CODE_EDITOR_MODAL as r } from "@umbraco-cms/backoffice/code-editor";
import { UMB_MODAL_MANAGER_CONTEXT as a } from "@umbraco-cms/backoffice/modal";
class h extends i {
  constructor(t) {
    super(t);
    const e = new n(t.host);
    this.editor.ui.registry.addButton("sourcecode", {
      icon: "sourcecode",
      tooltip: e.term("general_viewSourceCode"),
      onAction: () => this.#t()
    });
  }
  async #t() {
    const o = await (await this.getContext(a)).open(this, r, {
      data: {
        headline: "Edit source code",
        content: this.editor.getContent() ?? "",
        language: "html"
      }
    }).onSubmit().catch(() => {
    });
    o && (o.content ? this.editor.setContent(o.content.toString()) : this.editor.resetContent(), this.editor.dispatch("Change"));
  }
}
export {
  h as default
};
//# sourceMappingURL=tiny-mce-code-editor.plugin-B6ofbssc.js.map
