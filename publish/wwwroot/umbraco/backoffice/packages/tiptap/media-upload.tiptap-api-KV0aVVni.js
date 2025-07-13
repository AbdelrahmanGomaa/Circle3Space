import { U as d } from "./base-CzBFGKJV.js";
import { imageSize as p } from "@umbraco-cms/backoffice/utils";
import { Extension as h } from "@umbraco-cms/backoffice/external/tiptap";
import { UmbTemporaryFileManager as c, TemporaryFileStatus as u } from "@umbraco-cms/backoffice/temporary-file";
import { UmbId as f } from "@umbraco-cms/backoffice/id";
import { UmbLocalizationController as g } from "@umbraco-cms/backoffice/localization-api";
import { UMB_NOTIFICATION_CONTEXT as b } from "@umbraco-cms/backoffice/notification";
class S extends d {
  #e;
  /**
   * @returns {number} The maximum width of uploaded images
   */
  get maxWidth() {
    const e = parseInt(this.#e?.getValueByAlias("maxImageSize") ?? "", 10);
    return isNaN(e) ? 500 : e;
  }
  /**
   * @returns {Array<string>} The allowed mime types for uploads
   */
  get allowedFileTypes() {
    return this.#e?.getValueByAlias("allowedFileTypes") ?? ["image/jpeg", "image/png", "image/gif"];
  }
  #a = new c(this);
  #r = new g(this);
  #t;
  constructor(e) {
    super(e), this.consumeContext(b, (i) => {
      this.#t = i;
    });
  }
  getTiptapExtensions(e) {
    this.#e = e?.configuration;
    const i = this;
    return [
      h.create({
        name: "umbMediaUpload",
        onCreate() {
          this.parent?.();
          const s = this.editor.view.dom;
          s.addEventListener("dragover", (t) => {
            t.preventDefault();
          }), s.addEventListener("drop", (t) => {
            t.preventDefault();
            const a = t.dataTransfer?.files;
            a && i.#i(a, this.editor);
          }), s.addEventListener("paste", (t) => {
            if (t.clipboardData?.getData("text/html"))
              return;
            const o = t.clipboardData?.files;
            o && i.#i(o, this.editor);
          });
        }
      })
    ];
  }
  /**
   * Uploads the files to the server and inserts them into the editor as data URIs.
   * The server will replace the data URI with a proper URL when the content is saved.
   * @param {FileList} files The files to upload.
   * @param {Editor} editor The editor to insert the images into.
   */
  async #i(e, i) {
    const t = this.#o(e).map((r) => this.#s(r));
    this.dispatchEvent(new CustomEvent("rte.file.uploading", { composed: !0, bubbles: !0, detail: t }));
    const a = await this.#a.upload(t), o = this.maxWidth;
    a.forEach(async (r) => {
      if (r.status !== u.SUCCESS) {
        this.#t?.peek("danger", {
          data: {
            headline: r.file.name,
            message: this.#r.term("errors_dissallowedMediaType")
          }
        });
        return;
      }
      const n = URL.createObjectURL(r.file), { width: l, height: m } = await p(n, { maxWidth: o });
      i.chain().focus().setImage({
        src: n,
        width: l.toString(),
        height: m.toString(),
        "data-tmpimg": r.temporaryUnique
      }).run();
    }), this.dispatchEvent(new CustomEvent("rte.file.uploaded", { composed: !0, bubbles: !0, detail: a }));
  }
  #s(e) {
    return {
      file: e,
      temporaryUnique: f.new()
    };
  }
  #o(e) {
    return Array.from(e).filter((i) => this.allowedFileTypes.includes(i.type));
  }
}
export {
  S as default
};
//# sourceMappingURL=media-upload.tiptap-api-KV0aVVni.js.map
