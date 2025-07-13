import { U as A } from "./media-item.store.context-token-9YLCPlu1.js";
import { v as S } from "./input-upload-field.element-B7PCDmnx.js";
import { createExtensionApiByAlias as I } from "@umbraco-cms/backoffice/extension-registry";
import { nothing as M, ifDefined as P, html as f, property as h, state as u, customElement as T } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as O } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as U } from "@umbraco-cms/backoffice/router";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as C } from "@umbraco-cms/backoffice/section";
import { UMB_WORKSPACE_MODAL as R } from "@umbraco-cms/backoffice/workspace";
const B = "Umb.Section.Media";
var D = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, n = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? $(t, i) : t, p = e.length - 1, c; p >= 0; p--)
    (c = e[p]) && (r = (s ? c(t, i, r) : c(r)) || r);
  return s && r && D(t, i, r), r;
}, m = (e, t, i) => t.has(e) || v("Cannot " + i), g = (e, t, i) => (m(e, t, "read from private field"), i ? i.call(e) : t.get(e)), l = (e, t, i) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), w = (e, t, i, s) => (m(e, t, "write to private field"), t.set(e, i), i), d = (e, t, i) => (m(e, t, "access private method"), i), o, _, y, E;
let a = class extends O {
  constructor() {
    super(), l(this, _), l(this, o), this.readonly = !1, this.standalone = !1, this._editPath = "", this._userHasSectionAccess = !1, I(this, C, [
      {
        config: {
          match: B
        },
        onChange: (e) => {
          this._userHasSectionAccess = e;
        }
      }
    ]), new U(this, R).addUniquePaths(["unique"]).onSetup(() => ({ data: { entityType: A, preset: {} } })).observeRouteBuilder((e) => {
      this._editPath = e({});
    });
  }
  get item() {
    return g(this, o);
  }
  set item(e) {
    w(this, o, e);
  }
  render() {
    return this.item ? f`
			<uui-ref-node
				name=${this.item.name}
				href=${P(d(this, _, y).call(this, this.item))}
				?readonly=${this.readonly || !this._userHasSectionAccess}
				?standalone=${this.standalone}>
				<slot name="actions" slot="actions"></slot>
				${d(this, _, E).call(this, this.item)}
			</uui-ref-node>
		` : M;
  }
};
o = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
y = function(e) {
  if (!this._editPath) return;
  const t = S.generateLocal({ unique: e.unique });
  return `${this._editPath}/${t}`;
};
E = function(e) {
  if (e.mediaType.icon)
    return f`<umb-icon slot="icon" name=${e.mediaType.icon}></umb-icon>`;
};
n([
  h({ type: Object })
], a.prototype, "item", 1);
n([
  h({ type: Boolean })
], a.prototype, "readonly", 2);
n([
  h({ type: Boolean })
], a.prototype, "standalone", 2);
n([
  u()
], a.prototype, "_editPath", 2);
n([
  u()
], a.prototype, "_userHasSectionAccess", 2);
a = n([
  T("umb-media-item-ref")
], a);
export {
  a as UmbMediaItemRefElement,
  a as element
};
//# sourceMappingURL=media-item-ref.element-DgGFeGlC.js.map
