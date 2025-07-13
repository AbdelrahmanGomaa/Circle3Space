import { U as l } from "./tiny-mce-plugin-BKLu9hN_.js";
import { getGuidFromUdi as c } from "@umbraco-cms/backoffice/utils";
import { UMB_MODAL_MANAGER_CONTEXT as m } from "@umbraco-cms/backoffice/modal";
import { UmbTemporaryFileRepository as u } from "@umbraco-cms/backoffice/temporary-file";
import { UmbId as p } from "@umbraco-cms/backoffice/id";
import { uploadBlobImages as h, UMB_MEDIA_PICKER_MODAL as g, UMB_MEDIA_CAPTION_ALT_TEXT_MODAL as f, sizeImageInEditor as b } from "@umbraco-cms/backoffice/media";
import { UmbLocalizationController as _ } from "@umbraco-cms/backoffice/localization-api";
class U extends l {
  #t;
  #e;
  constructor(t) {
    super(t);
    const e = new _(t.host);
    this.#e = new u(t.host), this.consumeContext(m, (i) => {
      this.#t = i;
    }), this.editor.ui.registry.addToggleButton("umbmediapicker", {
      icon: "image",
      tooltip: e.term("general_mediaPicker"),
      onAction: () => this.#i(),
      onSetup: (i) => {
        const n = this.editor.selection.selectorChangedWithUnbind(
          "img[data-udi]",
          (a) => i.setActive(a)
        );
        return () => n.unbind();
      }
    }), this.editor.options.register("maxImageSize", { processor: "number", default: 500 }), this.configuration?.getValueByAlias("toolbar")?.includes("umbmediapicker") && (this.editor.options.set("paste_data_images", !0), this.editor.options.set("automatic_uploads", !1), this.editor.options.set("images_upload_handler", this.#s), this.editor.options.set("images_replace_blob_uris", !0), this.editor.on("SetContent", async (i) => {
      const n = i.content;
      h(this.editor, n);
    }));
  }
  /*
  	async #observeCurrentUser() {
  		if (!this.#currentUserContext) return;
  
  		this.observe(this.#currentUserContext.currentUser, (currentUser) => (this.#currentUser = currentUser));
  	}
  	*/
  async #i() {
    const t = this.editor.selection.getNode();
    let e = {};
    if (t.nodeName === "IMG") {
      const o = t, i = o.hasAttribute("data-udi"), n = o.hasAttribute("data-tmpimg");
      e = {
        altText: o.alt,
        url: o.src,
        caption: o.dataset.caption
      }, i ? e.udi = o.dataset.udi : e.id = o.getAttribute("rel") ?? void 0, n && (e.tmpimg = o.dataset.tmpimg);
    }
    this.#o(e);
  }
  async #o(t) {
    const e = this.#t?.open(this, g, {
      data: {
        multiple: !1
        //startNodeIsVirtual,
      },
      value: {
        selection: t.udi ? [c(t.udi)] : []
      }
    });
    if (!e) return;
    const { selection: o } = await e.onSubmit().catch(() => ({ selection: void 0 }));
    o?.length && (this.#n(o[0], t), this.editor.dispatch("Change"));
  }
  async #n(t, e) {
    if (!t) return;
    const i = await this.#t?.open(this, f, {
      data: { mediaUnique: t },
      value: {
        url: "",
        altText: e.altText,
        caption: e.caption
      }
    })?.onSubmit().catch(() => null);
    if (!i) return;
    const n = {
      altText: i?.altText,
      caption: i?.caption,
      url: i?.url,
      udi: "umb://media/" + t?.replace(/-/g, "")
    };
    this.#a(n);
  }
  async #a(t) {
    if (!t) return;
    const e = {
      alt: t.altText,
      src: t.url ? t.url : "nothing.jpg",
      id: "__mcenew",
      "data-udi": t.udi,
      "data-caption": t.caption
    }, o = this.editor.dom.createHTML("img", e), i = this.editor.selection.getNode().parentElement;
    if (e["data-caption"] && i) {
      const n = this.editor.dom.createHTML("figcaption", {}, e["data-caption"]), a = o + n;
      if (i.nodeName !== "FIGURE") {
        const r = this.editor.dom.createHTML("figure", {}, a);
        this.editor.selection.setContent(r);
      } else
        i.innerHTML = a;
    } else i?.nodeName === "FIGURE" && i.parentElement ? i.parentElement.innerHTML = o : this.editor.selection.setContent(o);
    setTimeout(() => {
      const n = this.editor.dom.get("__mcenew");
      if (!n) return;
      this.editor.dom.setAttrib(n, "id", null);
      const a = () => {
        b(this.editor, n, e.src), this.editor.dispatch("Change");
      };
      n.complete === !0 ? a() : n.onload = a;
    });
  }
  #s = (t, e) => new Promise((o, i) => {
    e(0);
    const n = p.new(), a = t.blob(), r = new File([a], t.filename(), { type: a.type });
    document.dispatchEvent(new CustomEvent("rte.file.uploading", { composed: !0, bubbles: !0 })), this.#e.upload(n, r, (s) => {
      e(s.loaded / s.total * 100);
    }).then((s) => {
      if (s.error) {
        i(s.error);
        return;
      }
      const d = window.URL.createObjectURL(a);
      sessionStorage.setItem(`tinymce__${d}`, n), o(d);
    }).catch(i).finally(() => {
      e(100), document.dispatchEvent(new CustomEvent("rte.file.uploaded", { composed: !0, bubbles: !0 }));
    });
  });
}
export {
  U as default
};
//# sourceMappingURL=tiny-mce-mediapicker.plugin-Bw9830PY.js.map
