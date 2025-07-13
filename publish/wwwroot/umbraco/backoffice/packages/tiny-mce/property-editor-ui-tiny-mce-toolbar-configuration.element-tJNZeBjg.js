import { repeat as m, html as p, css as y, property as f, state as b, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { firstValueFrom as v } from "@umbraco-cms/backoffice/external/rxjs";
import { tinymce as C } from "@umbraco-cms/backoffice/external/tinymce";
import { umbExtensionsRegistry as E } from "@umbraco-cms/backoffice/extension-registry";
import { UmbLitElement as U } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as w } from "@umbraco-cms/backoffice/style";
import { UmbChangeEvent as P } from "@umbraco-cms/backoffice/event";
var T = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, g = (t) => {
  throw TypeError(t);
}, c = (t, e, i, o) => {
  for (var a = o > 1 ? void 0 : o ? $(e, i) : e, u = t.length - 1, h; u >= 0; u--)
    (h = t[u]) && (a = (o ? h(e, i, a) : h(a)) || a);
  return o && a && T(e, i, a), a;
}, d = (t, e, i) => e.has(t) || g("Cannot " + i), l = (t, e, i) => (d(t, e, "read from private field"), i ? i.call(t) : e.get(t)), x = (t, e, i) => e.has(t) ? g("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), n = (t, e, i, o) => (d(t, e, "write to private field"), e.set(t, i), i), r;
const M = C.IconManager.get("default");
let s = class extends U {
  constructor() {
    super(...arguments), this._toolbarConfig = [], x(this, r, []);
  }
  set value(t) {
    if (t) {
      if (typeof t == "string")
        n(this, r, t.split(",").filter((e) => e.length > 0));
      else if (Array.isArray(t))
        n(this, r, t);
      else {
        n(this, r, []);
        return;
      }
      l(this, r).includes("ace") && (n(this, r, l(this, r).filter((e) => e !== "ace")), l(this, r).push("sourcecode")), this._toolbarConfig.forEach((e) => {
        e.selected = l(this, r).includes(e.alias);
      });
    }
  }
  get value() {
    return l(this, r);
  }
  async firstUpdated(t) {
    super.firstUpdated(t), this.config?.getValueByAlias("toolbar")?.forEach((e) => {
      this._toolbarConfig.push({
        ...e,
        selected: this.value.includes(e.alias)
      });
    }), await this.getToolbarPlugins(), this.requestUpdate("_toolbarConfig");
  }
  async getToolbarPlugins() {
    const t = E.byType("tinyMcePlugin");
    (await v(t)).forEach((i) => {
      i.meta?.toolbar && i.meta.toolbar.forEach((o) => {
        this._toolbarConfig.push({
          alias: o.alias,
          label: this.localize.string(o.label),
          icon: o.icon ?? "icon-autofill",
          selected: this.value.includes(o.alias)
        });
      });
    });
  }
  onChange(t) {
    const e = t.target, i = e.value, o = this._toolbarConfig.filter((a) => a.alias !== i && a.selected || a.alias === i && e.checked).map((a) => a.alias);
    this.value = o, this.dispatchEvent(new P());
  }
  render() {
    return p`<ul>
			${m(
      this._toolbarConfig,
      (t) => t.alias,
      (t) => p`<li>
						<uui-checkbox label=${t.label} value=${t.alias} ?checked=${t.selected} @change=${this.onChange}>
							<uui-icon .svg=${M?.icons[t.icon ?? "alignjustify"]}></uui-icon>
							${t.label}
						</uui-checkbox>
					</li>`
    )}
		</ul>`;
  }
};
r = /* @__PURE__ */ new WeakMap();
s.styles = [
  w,
  y`
			ul {
				list-style: none;
				padding: 0;
				margin: 0;

				uui-icon {
					width: 1.5em;
					height: 1.5em;
					margin-right: 5px;
				}
			}
		`
];
c([
  f({ attribute: !1 })
], s.prototype, "value", 1);
c([
  f({ attribute: !1 })
], s.prototype, "config", 2);
c([
  b()
], s.prototype, "_toolbarConfig", 2);
s = c([
  _("umb-property-editor-ui-tiny-mce-toolbar-configuration")
], s);
const W = s;
export {
  s as UmbPropertyEditorUITinyMceToolbarConfigurationElement,
  W as default
};
//# sourceMappingURL=property-editor-ui-tiny-mce-toolbar-configuration.element-tJNZeBjg.js.map
