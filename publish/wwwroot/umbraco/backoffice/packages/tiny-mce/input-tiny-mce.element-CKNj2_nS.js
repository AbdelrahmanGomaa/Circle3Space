import { UMB_CONTEXT_REQUEST_EVENT_TYPE as F } from "@umbraco-cms/backoffice/context-api";
import { UUIIconRequestEvent as k, UUIFormControlMixin as W } from "@umbraco-cms/backoffice/external/uui";
import { html as q, css as H, property as x, query as D, customElement as $ } from "@umbraco-cms/backoffice/external/lit";
import { loadManifestApi as M } from "@umbraco-cms/backoffice/extension-api";
import { umbDeepMerge as I, getProcessedImageUrl as K } from "@umbraco-cms/backoffice/utils";
import { renderEditor as j } from "@umbraco-cms/backoffice/external/tinymce";
import { umbExtensionsRegistry as V } from "@umbraco-cms/backoffice/extension-registry";
import { ImageCropModeModel as Q } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbChangeEvent as G } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as X } from "@umbraco-cms/backoffice/lit-element";
import { UmbStylesheetDetailRepository as Y, UmbStylesheetRuleManager as J } from "@umbraco-cms/backoffice/stylesheet";
const Z = "@umbraco-cms/backoffice/block-rte", b = {
  plugins: ["anchor", "charmap", "table", "lists", "advlist", "autolink", "directionality", "searchreplace"],
  valid_elements: "+a[id|style|rel|data-id|data-udi|rev|charset|hreflang|dir|lang|tabindex|accesskey|type|name|href|target|title|class|onfocus|onblur|onclick|ondblclick|onmousedown|onmouseup|onmouseover|onmousemove|onmouseout|onkeypress|onkeydown|onkeyup],-strong/-b[class|style],-em/-i[class|style],-strike[class|style],-s[class|style],-u[class|style],#p[id|style|dir|class|align],-ol[class|reversed|start|style|type],-ul[class|style],-li[class|style],br[class],img[id|dir|lang|longdesc|usemap|style|class|src|onmouseover|onmouseout|border|alt=|title|hspace|vspace|width|height|align|umbracoorgwidth|umbracoorgheight|onresize|onresizestart|onresizeend|rel|data-id],-sub[style|class],-sup[style|class],-blockquote[dir|style|class],-table[border=0|cellspacing|cellpadding|width|height|class|align|summary|style|dir|id|lang|bgcolor|background|bordercolor],-tr[id|lang|dir|class|rowspan|width|height|align|valign|style|bgcolor|background|bordercolor],tbody[id|class],thead[id|class],tfoot[id|class],#td[id|lang|dir|class|colspan|rowspan|width|height|align|valign|style|bgcolor|background|bordercolor|scope],-th[id|lang|dir|class|colspan|rowspan|width|height|align|valign|style|scope],caption[id|lang|dir|class|style],-div[id|dir|class|align|style],-span[class|align|style],-pre[class|align|style],address[class|align|style],-h1[id|dir|class|align|style],-h2[id|dir|class|align|style],-h3[id|dir|class|align|style],-h4[id|dir|class|align|style],-h5[id|dir|class|align|style],-h6[id|style|dir|class|align|style],hr[class|style],small[class|style],dd[id|class|title|style|dir|lang],dl[id|class|title|style|dir|lang],dt[id|class|title|style|dir|lang],object[class|id|width|height|codebase|*],param[name|value|_value|class],embed[type|width|height|src|class|*],map[name|class],area[shape|coords|href|alt|target|class],bdo[class],button[class],iframe[*],figure,figcaption,cite,video[*],audio[*],picture[*],source[*],canvas[*],-code",
  invalid_elements: "font",
  extended_valid_elements: "@[id|class|style],+umb-rte-block[!data-content-key],+umb-rte-block-inline[!data-content-key],-div[id|dir|class|align|style],ins[datetime|cite],-ul[class|style],-li[class|style],-h1[id|dir|class|align|style],-h2[id|dir|class|align|style],-h3[id|dir|class|align|style],-h4[id|dir|class|align|style],-h5[id|dir|class|align|style],-h6[id|style|dir|class|align],span[id|class|style|lang],figure,figcaption",
  custom_elements: "umb-rte-block,~umb-rte-block-inline",
  toolbar: [
    "styles",
    "bold",
    "italic",
    "alignleft",
    "aligncenter",
    "alignright",
    "bullist",
    "numlist",
    "outdent",
    "indent",
    "link",
    "umbmediapicker",
    "umbembeddialog"
  ],
  init_instance_callback: function(e) {
    e.dom.doc.addEventListener(F, (i) => {
      e.iframeElement && (i.stopImmediatePropagation(), e.iframeElement.dispatchEvent(i.clone()));
    }), e.dom.doc.addEventListener(k.ICON_REQUEST, (i) => {
      if (!e.iframeElement) return;
      const a = new k(k.ICON_REQUEST, {
        detail: i.detail
      });
      e.iframeElement.dispatchEvent(a), a.icon !== null && i.acceptRequest(a.icon);
    });
    const t = document.head.querySelector('script[type="importmap"]');
    if (t) {
      const i = document.createElement("script");
      i.type = "importmap", i.text = t.innerHTML, e.dom.doc.head.appendChild(i);
    }
    document.head.querySelectorAll('link[rel="stylesheet"]').forEach((i) => {
      const a = document.createElement("link");
      a.rel = "stylesheet", a.href = i.href, e.dom.doc.head.appendChild(a);
    }), e.dom.doc.addEventListener("click", (i) => {
      const a = "composedPath" in i ? i.composedPath() : null, n = a?.find(
        (c) => c instanceof HTMLAnchorElement || c.tagName === "A"
      ) ?? i.target;
      if (n == null || !(n instanceof HTMLAnchorElement || n.tagName === "A") || n.dataset.routerSlot === "disabled" || !(a?.some(
        (c) => c.tagName === "UMB-RTE-BLOCK" || c.tagName === "UMB-RTE-BLOCK-INLINE"
      ) ?? !1))
        return;
      const l = n.pathname + n.search + n.hash;
      i.preventDefault(), window.history.pushState(null, "", l);
    });
    const o = document.createElement("script");
    o.type = "text/javascript", o.setAttribute("type", "module"), o.text = 'import "@umbraco-cms/backoffice/extension-registry";', o.text = `import "${Z}";`, e.dom.doc.head.appendChild(o);
  },
  style_formats: [
    {
      title: "Headers",
      items: [
        { title: "Page header", block: "h2" },
        { title: "Section header", block: "h3" },
        { title: "Paragraph header", block: "h4" }
      ]
    },
    {
      title: "Blocks",
      items: [{ title: "Paragraph", block: "p" }]
    },
    {
      title: "Containers",
      items: [
        { title: "Quote", block: "blockquote" },
        { title: "Code", block: "code" }
      ]
    }
  ],
  /**
   * @description The maximum image size in pixels that can be inserted into the editor.
   * @remarks This is registered and used by the UmbMediaPicker plugin
   */
  maxImageSize: 500
}, T = [
  "ar",
  "ar_SA",
  "hy",
  "az",
  "eu",
  "be",
  "bn_BD",
  "bs",
  "bg_BG",
  "ca",
  "zh_CN",
  "zh_TW",
  "hr",
  "cs",
  "da",
  "dv",
  "nl",
  "en_CA",
  "en_GB",
  "et",
  "fo",
  "fi",
  "fr_FR",
  "gd",
  "gl",
  "ka_GE",
  "de",
  "de_AT",
  "el",
  "he_IL",
  "hi_IN",
  "hu_HU",
  "is_IS",
  "id",
  "it",
  "ja",
  "kab",
  "kk",
  "km_KH",
  "ko_KR",
  "ku",
  "ku_IQ",
  "lv",
  "lt",
  "lb",
  "ml",
  "ml_IN",
  "mn_MN",
  "nb_NO",
  "fa",
  "fa_IR",
  "pl",
  "pt_BR",
  "pt_PT",
  "ro",
  "ru",
  "sr",
  "si_LK",
  "sk",
  "sl_SI",
  "es",
  "es_MX",
  "sv_SE",
  "tg",
  "ta",
  "ta_IN",
  "tt",
  "th_TH",
  "tr",
  "tr_TR",
  "ug",
  "uk",
  "uk_UA",
  "vi",
  "vi_VN",
  "cy"
], ee = (e, t) => {
  t.content = t.content.replace(/<\s*span[^>]*>(.*?)<\s*\/\s*span>/g, "$1"), t.content = t.content.replace(/<\s*b([^>]*)>(.*?)<\s*\/\s*b([^>]*)>/g, "<strong$1>$2</strong$3>"), t.content = t.content.replace(/<\s*i([^>]*)>(.*?)<\s*\/\s*i([^>]*)>/g, "<em$1>$2</em$3>");
}, te = (e) => {
  const t = ["src", "href", "data", "background", "action", "formaction", "poster", "xlink:href"], s = /* @__PURE__ */ function() {
    const o = ["img", "video"], i = /((java|vb)script|mhtml):/i, a = /[\s\u0000-\u001F]+/g, n = (r, l) => /^data:image\//i.test(r) ? o.indexOf(l) !== -1 && /^data:image\/svg\+xml/i.test(r) : /^data:/i.test(r);
    return function(l, c) {
      if (l = l.replace(a, ""), l = decodeURIComponent(l), !i.test(l) && !n(l, c))
        return l;
    };
  }();
  e.serializer.addAttributeFilter("uriAttributesToSanitize", function(o) {
    o.forEach(function(i) {
      if (i.attributes)
        for (const a of i.attributes) {
          const n = a.name.toLowerCase();
          t.indexOf(n) !== -1 && (a.value = s(a.value, i.name) ?? "");
        }
    });
  });
};
var se = Object.defineProperty, ie = Object.getOwnPropertyDescriptor, U = (e) => {
  throw TypeError(e);
}, E = (e, t, s, o) => {
  for (var i = o > 1 ? void 0 : o ? ie(t, s) : t, a = e.length - 1, n; a >= 0; a--)
    (n = e[a]) && (i = (o ? n(t, s, i) : n(i)) || i);
  return o && i && se(t, s, i), i;
}, S = (e, t, s) => t.has(e) || U("Cannot " + s), h = (e, t, s) => (S(e, t, "read from private field"), s ? s.call(e) : t.get(e)), p = (e, t, s) => t.has(e) ? U("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), A = (e, t, s, o) => (S(e, t, "write to private field"), t.set(e, s), s), u = (e, t, s) => (S(e, t, "access private method"), s), v, m, w, C, _, d, R, B, P, N, z, L, g;
async function ae(e) {
  const t = e.target.getAttribute("src");
  if (!t)
    return;
  const s = t.split("?")[0], o = await K(s, {
    width: e.width,
    height: e.height,
    mode: Q.MAX
  });
  e.target.setAttribute("data-mce-src", o);
}
let f = class extends W(X, "") {
  constructor() {
    super(...arguments), p(this, d), p(this, v, []), p(this, m, null), p(this, w, new Y(this)), p(this, C, new J()), p(this, _, !1);
  }
  getFormElement() {
    return this._editorElement?.querySelector("iframe") ?? void 0;
  }
  set value(e) {
    const t = typeof e == "string" ? e : "";
    super.value = t, h(this, m) && h(this, m).getContent() != t && h(this, m).setContent(t);
  }
  get value() {
    return super.value;
  }
  get readonly() {
    return h(this, _);
  }
  set readonly(e) {
    A(this, _, e);
    const t = this.getEditor(), s = e ? "readonly" : "design";
    t?.mode.set(s);
  }
  getEditor() {
    return h(this, m);
  }
  firstUpdated() {
    u(this, d, R).call(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), h(this, m)?.destroy();
  }
  async getFormatStyles(e) {
    if (!e) return [];
    const t = [], s = e.map((i) => h(this, w)?.requestByUnique(i));
    return (await Promise.all(s)).forEach(({ data: i }) => {
      if (!i?.content) return;
      h(this, C).extractRules(i.content).forEach((n) => {
        const r = {
          title: n.name
        };
        if (n.selector) {
          if (n.selector.startsWith("."))
            r.inline = "span", r.classes = n.selector.substring(1);
          else if (n.selector.startsWith("#"))
            r.inline = "span", r.attributes = { id: n.selector.substring(1) };
          else if (n.selector.includes(".")) {
            const [l, ...c] = n.selector.split(".");
            r.block = l, r.classes = c.join(" ").replace(/\./g, " ");
          } else if (n.selector.includes("#")) {
            const [l, c] = n.selector.split("#");
            r.block = l, r.classes = c;
          } else
            r.block = n.selector;
          t.push(r);
        }
      });
    }), t;
  }
  /**
   * Nothing rendered by default - TinyMCE initialization creates
   * a target div and binds the RTE to that element
   */
  render() {
    return q`<div class="editor"></div>`;
  }
};
v = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
R = async function() {
  this.observe(V.byType("tinyMcePlugin"), async (e) => {
    h(this, v).length = 0, A(this, v, await u(this, d, B).call(this, e));
    let t = {};
    e.forEach((s) => {
      s.meta?.config && (t = I(s.meta.config, t));
    }), u(this, d, P).call(this, t);
  });
};
B = async function(e) {
  const t = [];
  for (const s of e)
    s.js && t.push(await M(s.js)), s.api && t.push(await M(s.api));
  return t;
};
P = async function(e) {
  const t = this.configuration?.getValueByAlias("dimensions"), s = this.configuration?.getValueByAlias("stylesheets") ?? [], o = await this.getFormatStyles(s), i = s?.map((y) => `/css${y.replace(/\\/g, "/")}`) ?? [];
  i.push("/umbraco/backoffice/css/rte-content.css");
  const a = {
    ...b,
    height: t?.height ?? b.height,
    width: t?.width ?? b.width,
    content_css: i.length ? i : b.content_css,
    style_formats: o.length ? o : b.style_formats
  };
  a.height || Array.isArray(a.plugins) && a.plugins.includes("autoresize") && a.plugins.splice(a.plugins.indexOf("autoresize"), 1);
  const n = this.configuration?.getValueByAlias("toolbar");
  n?.length ? a.toolbar = n.join(" ") : a.toolbar = !1, this.configuration?.getValueByAlias("mode")?.toLocaleLowerCase() === "inline" && (a.inline = !0);
  const l = this.configuration?.getValueByAlias("maxImageSize");
  l && (a.maxImageSize = l);
  let c = {
    autoresize_bottom_margin: 10,
    body_class: "umb-rte",
    contextMenu: !1,
    inline_boundaries_selector: "a[href],code,.mce-annotation,.umb-embed-holder,.umb-macro-holder",
    menubar: !1,
    paste_remove_styles_if_webkit: !0,
    paste_preprocess: ee,
    relative_urls: !1,
    resize: !1,
    statusbar: !1,
    setup: (y) => u(this, d, z).call(this, y),
    target: this._editorElement,
    paste_data_images: !1,
    language: u(this, d, N).call(this),
    promotion: !1,
    convert_unsafe_embeds: !0,
    // [JOV] Workaround for CVE-2024-29881
    readonly: h(this, _),
    // Extend with configuration options
    ...a
  };
  e && (c = I(e, c)), h(this, m)?.destroy();
  const O = await j(c).catch((y) => (console.error("Failed to render TinyMCE", y), []));
  A(this, m, O.pop());
};
N = function() {
  const e = this.localize.lang();
  let t = T.find((s) => e?.localeCompare(s) === 0);
  if (!t) {
    const s = e?.split("_");
    s && (t = T.find((o) => o === s[0]));
  }
  return t;
};
z = function(e) {
  e.suffix = ".min", e.addShortcut(
    "Ctrl+S",
    "",
    () => this.dispatchEvent(new CustomEvent("rte.shortcut.save", { composed: !0, bubbles: !0 }))
  ), e.addShortcut(
    "Ctrl+P",
    "",
    () => this.dispatchEvent(new CustomEvent("rte.shortcut.saveAndPublish", { composed: !0, bubbles: !0 }))
  ), e.on("init", () => u(this, d, L).call(this, e)), e.on("Change", () => u(this, d, g).call(this, e.getContent())), e.on("Dirty", () => u(this, d, g).call(this, e.getContent())), e.on("Keyup", () => u(this, d, g).call(this, e.getContent())), e.on("focus", () => this.dispatchEvent(new CustomEvent("umb-rte-focus", { composed: !0, bubbles: !0 }))), e.on("blur", () => {
    u(this, d, g).call(this, e.getContent()), this.dispatchEvent(new CustomEvent("umb-rte-blur", { composed: !0, bubbles: !0 }));
  }), e.on("ObjectResized", (t) => {
    ae(t), u(this, d, g).call(this, e.getContent());
  }), e.on("SetContent", () => {
    Array.from(e.dom.doc.getElementsByTagName("*")).forEach((s) => {
      for (const o of s.attributes)
        o.name.startsWith("on") && s.removeAttribute(o.name);
    });
  });
  for (const t of h(this, v))
    t && new t({ host: this, editor: e });
};
L = function(e) {
  e.getBody().setAttribute("spellcheck", "true"), te(e), e.setContent(typeof this.value == "string" ? this.value : "");
};
g = function(e) {
  this.value !== e && (this.value = e, this.dispatchEvent(new G()));
};
f.styles = [
  H`
			.tox-tinymce {
				position: relative;
				min-height: 100px;
				border-radius: 0;
				border: var(--uui-input-border-width, 1px) solid var(--uui-input-border-color, var(--uui-color-border, #d8d7d9));
			}

			.tox-tinymce-fullscreen {
				position: absolute;
			}

			/* FIXME: Remove this workaround when https://github.com/tinymce/tinymce/issues/6431 has been fixed */
			.tox .tox-collection__item-label {
				line-height: 1 !important;
			}
		`
];
E([
  x({ attribute: !1 })
], f.prototype, "configuration", 2);
E([
  x({ type: Boolean, reflect: !0 })
], f.prototype, "readonly", 1);
E([
  D(".editor", !0)
], f.prototype, "_editorElement", 2);
f = E([
  $("umb-input-tiny-mce")
], f);
export {
  Z as U,
  f as a,
  T as b,
  b as d,
  ee as p,
  te as u
};
//# sourceMappingURL=input-tiny-mce.element-CKNj2_nS.js.map
