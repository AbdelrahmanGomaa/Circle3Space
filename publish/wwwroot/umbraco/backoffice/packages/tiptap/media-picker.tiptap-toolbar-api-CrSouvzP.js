import { a as l } from "./base-CzBFGKJV.js";
import { getGuidFromUdi as m, imageSize as u, getProcessedImageUrl as d } from "@umbraco-cms/backoffice/utils";
import { ImageCropModeModel as p } from "@umbraco-cms/backoffice/external/backend-api";
import { UMB_MEDIA_PICKER_MODAL as g, UMB_MEDIA_CAPTION_ALT_TEXT_MODAL as h } from "@umbraco-cms/backoffice/media";
import { UMB_MODAL_MANAGER_CONTEXT as f } from "@umbraco-cms/backoffice/modal";
class _ extends l {
  #t;
  /**
   * @returns {number} The maximum width of uploaded images
   */
  get maxWidth() {
    const t = parseInt(this.configuration?.getValueByAlias("maxImageSize") ?? "", 10);
    return isNaN(t) ? 500 : t;
  }
  constructor(t) {
    super(t), this.consumeContext(f, (e) => {
      this.#t = e;
    });
  }
  isActive(t) {
    return t?.isActive("image") === !0 || t?.isActive("figure") === !0;
  }
  async execute(t) {
    const e = t.getAttributes("image"), i = t.getAttributes("figure");
    let a;
    e?.["data-udi"] && (a = m(e["data-udi"]));
    let n;
    e?.alt && (n = e.alt);
    let o;
    i?.figcaption && (o = i.figcaption);
    const r = await this.#e(a);
    if (!r?.length) return;
    const s = r[0];
    if (!s)
      throw new Error("No media selected");
    const c = await this.#i(s, n, o);
    c && this.#a(t, s, c);
  }
  async #e(t) {
    const e = this.#t?.open(this, g, {
      data: {
        multiple: !1
        //startNodeIsVirtual,
      },
      value: {
        selection: t ? [t] : []
      }
    });
    if (!e) return;
    const { selection: i } = await e.onSubmit().catch(() => ({ selection: void 0 }));
    return i;
  }
  async #i(t, e, i) {
    return await this.#t?.open(this, h, {
      data: { mediaUnique: t },
      value: {
        url: "",
        altText: e,
        caption: i
      }
    })?.onSubmit().catch(() => null);
  }
  async #a(t, e, i) {
    if (!i?.url) return;
    const { width: a, height: n } = await u(i.url, { maxWidth: this.maxWidth }), o = await d(i.url, { width: a, height: n, mode: p.MAX }), r = {
      alt: i.altText,
      src: o,
      "data-udi": `umb://media/${e.replace(/-/g, "")}`,
      width: a.toString(),
      height: n.toString()
    };
    return i.caption ? t.commands.insertContent({
      type: "figure",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "image",
              attrs: r
            }
          ]
        },
        {
          type: "figcaption",
          content: [
            {
              type: "text",
              text: i.caption
            }
          ]
        }
      ]
    }) : t.commands.setImage(r);
  }
}
export {
  _ as default
};
//# sourceMappingURL=media-picker.tiptap-toolbar-api-CrSouvzP.js.map
