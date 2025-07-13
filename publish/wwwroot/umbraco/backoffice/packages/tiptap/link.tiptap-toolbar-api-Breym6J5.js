import { a as f } from "./base-CzBFGKJV.js";
import { UmbLink as c } from "@umbraco-cms/backoffice/external/tiptap";
import { UMB_LINK_PICKER_MODAL as h } from "@umbraco-cms/backoffice/multi-url-picker";
import { UMB_MODAL_MANAGER_CONTEXT as m } from "@umbraco-cms/backoffice/modal";
class L extends f {
  async execute(t) {
    const i = t?.getAttributes(c.name) ?? {}, n = this.#t(i), r = { config: {}, index: null, isNew: n?.url === void 0 }, l = { link: n }, a = this.configuration?.getValueByAlias("overlaySize") ?? "small", s = (await this.getContext(m)).open(this, h, { data: r, value: l, modal: { size: a } });
    if (!s) return;
    const o = await s.onSubmit().catch(() => {
    });
    if (!o?.link) return;
    const u = this.#n(o.link);
    u ? t?.chain().focus().extendMarkRange(c.name).setUmbLink(u).run() : t?.chain().focus().extendMarkRange(c.name).unsetLink().run();
  }
  #t(t) {
    const i = t["data-anchor"], n = t.href?.substring(0, t.href.length - (i?.length ?? 0)), r = n?.includes("localLink:") ? n.substring(n.indexOf(":") + 1, n.indexOf("}")) : null;
    return {
      name: t.title,
      queryString: i,
      target: t.target,
      type: t.type,
      unique: r,
      url: n
    };
  }
  #n(t) {
    const { name: i, target: n, type: r, unique: l } = t;
    let { queryString: a, url: e } = t;
    if (a = this.#r(a), !a) {
      const o = this.#e(e, a);
      e = o.url, a = o.queryString;
    }
    l ? e = `/{localLink:${l}}` : (e = this.#a(e), e = this.#i(e));
    const s = this.#s(a);
    return s && (e = (e ?? "") + s), e ? {
      type: r ?? "external",
      href: e,
      "data-anchor": s,
      target: n,
      title: i ?? e
    } : null;
  }
  #e(t, i) {
    const n = t?.split(/([#?])/);
    return n?.length === 3 && (t = n[0], i = n[1] + n[2]), { url: t, queryString: i };
  }
  /**
   * If the URL is prefixed "www.", then prepend "http://" protocol scheme.
   * @param url
   */
  #i(t) {
    return t ? (/^\s*www\./i.test(t) && (t = `http://${t}`), t) : null;
  }
  /**
   * If the URL is an email address, then prepend "mailto:" protocol scheme.
   * @param url
   */
  #a(t) {
    return t ? (t?.includes("@") && !t.includes("//") && !t.includes(":") && (t = `mailto:${t}`), t) : null;
  }
  /**
   * If the URL contains an anchor, then return the anchor.
   * @param queryString
   */
  #s(t) {
    return t && (t.startsWith("#") || t.startsWith("?")) ? t : null;
  }
  /**
   * If the query string does not start with "?" or "#", then prepend it.
   * @param queryString
   */
  #r(t) {
    return t ? (!t.startsWith("?") && !t.startsWith("#") && (t = (t.startsWith("=") ? "#" : "?") + t), t) : null;
  }
}
export {
  L as default
};
//# sourceMappingURL=link.tiptap-toolbar-api-Breym6J5.js.map
