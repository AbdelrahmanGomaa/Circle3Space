import { UMB_HELP_MENU_ALIAS as m } from "./index.js";
import { html as u, nothing as d, state as b, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { umbExtensionsRegistry as y } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsManifestInitializer as E } from "@umbraco-cms/backoffice/extension-api";
import { UmbHeaderAppButtonElement as c } from "@umbraco-cms/backoffice/components";
var H = Object.defineProperty, I = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, _ = (e, t, n, o) => {
  for (var r = o > 1 ? void 0 : o ? I(t, n) : t, p = e.length - 1, i; p >= 0; p--)
    (i = e[p]) && (r = (o ? i(t, n, r) : i(r)) || r);
  return o && r && H(t, n, r), r;
}, x = (e, t, n) => t.has(e) || h("Cannot " + n), A = (e, t, n) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), l = (e, t, n) => (x(e, t, "access private method"), n), s, v, f;
let a = class extends c {
  constructor() {
    super(), A(this, s), this._helpMenuHasMenuItems = !1, new E(
      this,
      y,
      "menuItem",
      (e) => e.meta.menus.includes(m),
      (e) => {
        const t = e.map((n) => n.manifest);
        this._helpMenuHasMenuItems = t.length > 0;
      }
    );
  }
  render() {
    return u`${l(this, s, v).call(this)} ${l(this, s, f).call(this)}`;
  }
};
s = /* @__PURE__ */ new WeakSet();
v = function() {
  return this._helpMenuHasMenuItems ? u`
			<uui-button compact label=${this.localize.term("general_help")} look="primary" popovertarget="help-menu-popover">
				<uui-icon name="icon-help-alt"></uui-icon>
			</uui-button>
		` : d;
};
f = function() {
  return u`
			<uui-popover-container id="help-menu-popover" placement="top-end">
				<umb-popover-layout>
					<uui-scroll-container>
						<umb-extension-slot
							type="menu"
							.filter=${(e) => e.alias === m}
							default-element="umb-menu"></umb-extension-slot>
					</uui-scroll-container>
				</umb-popover-layout>
			</uui-popover-container>
		`;
};
a.styles = c.styles;
_([
  b()
], a.prototype, "_helpMenuHasMenuItems", 2);
a = _([
  M("umb-help-header-app")
], a);
export {
  a as UmbHelpHeaderAppElement,
  a as element
};
//# sourceMappingURL=help-header-app.element-Wt6mVgbA.js.map
