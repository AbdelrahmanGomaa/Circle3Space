import { U as a } from "./tiny-mce-plugin-BKLu9hN_.js";
import { UmbLocalizationController as s } from "@umbraco-cms/backoffice/localization-api";
import { UMB_MODAL_MANAGER_CONTEXT as r } from "@umbraco-cms/backoffice/modal";
import { UMB_EMBEDDED_MEDIA_MODAL as h } from "@umbraco-cms/backoffice/embedded-media";
class g extends a {
  constructor(t) {
    super(t);
    const e = new s(t.host);
    this.editor.ui.registry.addToggleButton("umbembeddialog", {
      icon: "embed",
      tooltip: e.term("general_embed"),
      onAction: () => this.#t(),
      onSetup: function(i) {
        const o = t.editor.selection.selectorChangedWithUnbind(
          "div.umb-embed-holder",
          (d) => i.setActive(d)
        );
        return () => o.unbind();
      }
    });
  }
  #t() {
    const t = this.editor.selection.getNode();
    let e = {
      width: 360,
      height: 240
    };
    if (t.nodeName.toUpperCase() === "DIV" && t.classList.contains("umb-embed-holder")) {
      const i = this.editor.dom.getAttrib(t, "data-embed-url"), o = this.editor.dom.getAttrib(t, "data-embed-width"), d = this.editor.dom.getAttrib(t, "data-embed-height"), n = this.editor.dom.getAttrib(t, "data-embed-constrain") === "true";
      e = {
        url: i,
        constrain: n,
        width: parseInt(o) || e.width,
        height: parseInt(d) || e.height
      };
    }
    this.#i(t, e);
  }
  #e(t, e) {
    const i = this.editor.dom.create(
      "div",
      {
        class: "mceNonEditable umb-embed-holder",
        "data-embed-url": t.url ?? "",
        "data-embed-height": t.height,
        "data-embed-width": t.width,
        "data-embed-constrain": t.constrain ?? !1,
        contenteditable: !1
      },
      t.markup
    );
    e?.nodeName.toUpperCase() === "DIV" && e.classList.contains("umb-embed-holder") ? e.replaceWith(i) : this.editor.selection.setNode(i);
  }
  async #i(t, e) {
    const o = (await this.getContext(r)).open(this, h, { data: e });
    if (!o) return;
    const d = await o.onSubmit();
    d && (this.#e(d, t), this.editor.dispatch("Change"));
  }
}
export {
  g as default
};
//# sourceMappingURL=tiny-mce-embeddedmedia.plugin-gd8U1Z9w.js.map
