import { U as s } from "./link-picker-modal.token-D9E3VS6O.js";
import { UmbLocalizationController as l } from "@umbraco-cms/backoffice/localization-api";
import { UmbTinyMcePluginBase as o } from "@umbraco-cms/backoffice/tiny-mce";
import { UMB_MODAL_MANAGER_CONTEXT as h } from "@umbraco-cms/backoffice/modal";
class g extends o {
  #t;
  #i;
  constructor(t) {
    super(t);
    const i = new l(t.host);
    this.editor.ui.registry.addToggleButton("link", {
      icon: "link",
      tooltip: i.term("general_addEditLink"),
      onAction: () => this.showDialog(),
      onSetup: (e) => {
        const n = this.editor.selection.selectorChangedWithUnbind("a", (r) => e.setActive(r));
        return () => n.unbind();
      }
    }), this.editor.ui.registry.addToggleButton("unlink", {
      icon: "unlink",
      tooltip: i.term("general_removeLink"),
      onAction: () => t.editor.execCommand("unlink"),
      onSetup: (e) => {
        const n = this.editor.selection.selectorChangedWithUnbind("a", (r) => e.setActive(r));
        return () => n.unbind();
      }
    });
  }
  async showDialog() {
    const t = this.editor.selection.getNode();
    if (this.#i = this.editor.dom.getParent(t, "a[href]"), !this.#i) {
      this.#r({ name: this.editor.selection.getContent({ format: "text" }) });
      return;
    }
    let i = this.#i.getAttribute("href") ?? this.#i.href ?? "";
    const e = this.#i.getAttribute("data-anchor") ?? "";
    e && i.endsWith(e) && (i = i.substring(0, i.indexOf(e)));
    const n = {
      name: this.#i.title || this.#i.textContent,
      target: this.#i.target,
      queryString: e,
      type: this.#i.type ?? "external",
      unique: i.includes("localLink:") ? i.substring(i.indexOf(":") + 1, i.indexOf("}")) : null,
      url: i
    };
    this.#r(n);
  }
  async #r(t) {
    const e = (await this.getContext(h)).open(this, s, {
      data: {
        config: {},
        index: null,
        isNew: t?.url === void 0
      },
      value: {
        link: t ?? {}
      }
    });
    if (!e) return;
    const n = await e.onSubmit().catch(() => {
    });
    n && (this.#t = { link: { ...n.link } }, this.#s());
  }
  #e() {
    const t = this.#t.link, i = {
      href: t.url ?? "",
      title: t.name ?? t.url ?? "",
      target: t.target,
      type: t.type ?? "external",
      rel: t.target === "_blank" ? "noopener" : null
    };
    return t.queryString && (i["data-anchor"] = t.queryString, t.queryString.startsWith("?") ? i.href += i.href ? t.queryString : "/" + t.queryString : t.queryString.startsWith("#") && (i.href += t.queryString)), i;
  }
  #n() {
    if (this.#i) {
      this.editor.dom.setAttribs(this.#i, this.#e()), this.editor.selection.select(this.#i), this.editor.execCommand("mceEndTyping");
      return;
    }
    if (this.editor.selection.getContent() !== "") {
      this.editor.execCommand("CreateLink", !1, this.#e());
      return;
    }
    const t = typeof this.#t?.link.name < "u" && this.#t?.link.name !== "" ? this.#t?.link.name : this.#t?.link.url;
    if (t) {
      const i = this.editor.dom.createHTML("a", this.#e(), t);
      this.editor.execCommand("mceInsertContent", !1, i);
    }
  }
  #s() {
    if (this.#t?.link.queryString && !this.#t.link.queryString.startsWith("?") && !this.#t.link.queryString.startsWith("#") && (this.#t.link.queryString = (this.#t.link.queryString.startsWith("=") ? "#" : "?") + this.#t.link.queryString), this.#t && !this.#t?.link.queryString) {
      const t = this.#t?.link.url?.split(/(#|\?)/);
      t?.length === 3 && (this.#t.link.url = t[0], this.#t.link.queryString = t[1] + t[2]);
    }
    if (!this.#t?.link.url && !this.#t?.link.queryString && !this.#t?.link.unique) {
      this.editor.execCommand("unlink");
      return;
    }
    if (this.#t?.link.unique) {
      this.#t.link.url = "/{localLink:" + this.#t.link.unique + "}", this.#n();
      return;
    }
    if (this.#t?.link.url || (this.#t.link.url = ""), this.#t?.link.url.includes("@") && !this.#t.link.url.includes("//") && !this.#t.link.url.includes(":")) {
      this.#t.link.url = "mailto:" + this.#t?.link.url, this.#n();
      return;
    }
    /^\s*www\./i.test(this.#t?.link.url) && (this.#t.link.url = "http://" + this.#t.link.url), this.#n();
  }
}
export {
  g as default
};
//# sourceMappingURL=tiny-mce-multi-url-picker.plugin-BZXbUwnB.js.map
