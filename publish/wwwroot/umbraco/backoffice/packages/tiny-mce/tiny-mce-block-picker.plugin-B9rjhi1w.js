import { UMB_BLOCK_RTE_DATA_CONTENT_KEY as l } from "@umbraco-cms/backoffice/rte";
import { UmbTinyMcePluginBase as u } from "@umbraco-cms/backoffice/tiny-mce";
import { UmbLocalizationController as k } from "@umbraco-cms/backoffice/localization-api";
import { UMB_BLOCK_RTE_MANAGER_CONTEXT as b, UMB_BLOCK_RTE_ENTRIES_CONTEXT as m } from "@umbraco-cms/backoffice/block-rte";
class C extends u {
  #i = new k(this._host);
  #o;
  #e;
  #t;
  constructor(t) {
    super(t), this.#o = t.editor, t.editor.ui.registry.addToggleButton("umbblockpicker", {
      icon: "visualblocks",
      tooltip: this.#i.term("blockEditor_insertBlock"),
      onAction: () => this.showDialog(),
      onSetup: function(e) {
        const o = t.editor.selection.selectorChangedWithUnbind(
          "umb-rte-block[data-content-key], umb-rte-block-inline[data-content-key]",
          (n) => e.setActive(n)
        );
        return () => o.unbind();
      }
    }), this.consumeContext(b, (e) => {
      this.observe(
        e.blockTypes,
        (o) => {
          this.#e = o;
        },
        "blockType"
      ), this.observe(
        e.contents,
        (o) => {
          this.#s(o, e.getLayouts());
        },
        "contents"
      );
    }), this.consumeContext(m, (e) => {
      this.#t = e;
    });
  }
  async showDialog() {
    this.#n();
  }
  #n() {
    if (!this.#t) {
      console.error("[Block Picker] No entries context available.");
      return;
    }
    let t;
    if (this.#e?.length === 1) {
      const e = this.#e[0].contentElementTypeKey;
      t = this.#t.getPathForCreateBlock() + "modal/umb-modal-workspace/create/" + e;
    } else
      t = this.#t.getPathForCreateBlock();
    t && window.history.pushState({}, "", t);
  }
  #s(t, e) {
    const o = this.#o;
    if (!o?.dom) return;
    const n = o.dom.select("umb-rte-block, umb-rte-block-inline").map((i) => i.getAttribute(l));
    t.filter((i) => !n.find((c) => c === i.key)).forEach((i) => {
      const r = e.find((h) => h.contentKey === i.key)?.displayInline ?? !1;
      let s = "umb-rte-block";
      r && (s = "umb-rte-block-inline");
      const a = `<${s} ${l}="${i.key}"></${s}>`;
      o.selection.setContent(a), o.setDirty(!0), o.dispatch("Change");
    });
  }
}
export {
  C as default
};
//# sourceMappingURL=tiny-mce-block-picker.plugin-B9rjhi1w.js.map
