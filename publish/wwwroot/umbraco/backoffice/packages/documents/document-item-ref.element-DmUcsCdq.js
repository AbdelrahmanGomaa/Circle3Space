import { d as U, e as b } from "./manifests-BUr6Ff2j.js";
import { U as O } from "./document-item-data-resolver-CCvZ1xDq.js";
import { nothing as f, ifDefined as $, html as p, property as d, state as u, customElement as q } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as M } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_MODAL as R } from "@umbraco-cms/backoffice/workspace";
var I = Object.defineProperty, w = Object.getOwnPropertyDescriptor, y = (t) => {
  throw TypeError(t);
}, n = (t, e, i, _) => {
  for (var o = _ > 1 ? void 0 : _ ? w(e, i) : e, m = t.length - 1, c; m >= 0; m--)
    (c = t[m]) && (o = (_ ? c(e, i, o) : c(o)) || o);
  return _ && o && I(e, i, o), o;
}, D = (t, e, i) => e.has(t) || y("Cannot " + i), r = (t, e, i) => (D(t, e, "read from private field"), i ? i.call(t) : e.get(t)), v = (t, e, i) => e.has(t) ? y("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), l = (t, e, i) => (D(t, e, "access private method"), i), s, h, T, E, P, g;
let a = class extends C {
  constructor() {
    super(), v(this, h), v(this, s, new O(this)), this.readonly = !1, this.standalone = !1, this._unique = "", this._name = "", this._icon = "", this._isTrashed = !1, this._isDraft = !1, this._editPath = "", new M(this, R).addUniquePaths(["unique"]).onSetup(() => ({ data: { entityType: U, preset: {} } })).observeRouteBuilder((t) => {
      this._editPath = t({});
    }), r(this, s).observe(r(this, s).unique, (t) => this._unique = t ?? ""), r(this, s).observe(r(this, s).name, (t) => this._name = t ?? ""), r(this, s).observe(r(this, s).icon, (t) => this._icon = t ?? ""), r(this, s).observe(r(this, s).isTrashed, (t) => this._isTrashed = t ?? !1), r(this, s).observe(r(this, s).isDraft, (t) => this._isDraft = t ?? !1);
  }
  get item() {
    return r(this, s).getData();
  }
  set item(t) {
    r(this, s).setData(t);
  }
  render() {
    return this.item ? p`
			<uui-ref-node
				name=${this._name}
				href=${$(l(this, h, T).call(this))}
				?readonly=${this.readonly}
				?standalone=${this.standalone}>
				<slot name="actions" slot="actions"></slot>
				${l(this, h, E).call(this)}${l(this, h, g).call(this)} ${l(this, h, P).call(this)}
			</uui-ref-node>
		` : f;
  }
};
s = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
T = function() {
  if (!this._unique) return;
  const t = b.generateLocal({ unique: this._unique });
  return `${this._editPath}/${t}`;
};
E = function() {
  return this._icon ? p`<umb-icon slot="icon" name=${this._icon}></umb-icon>` : f;
};
P = function() {
  return this._isTrashed ? p`<uui-tag size="s" slot="tag" color="danger">Trashed</uui-tag>` : f;
};
g = function() {
  return this._isDraft ? p`<uui-tag size="s" slot="tag" look="secondary" color="default">Draft</uui-tag>` : f;
};
n([
  d({ type: Object })
], a.prototype, "item", 1);
n([
  d({ type: Boolean })
], a.prototype, "readonly", 2);
n([
  d({ type: Boolean })
], a.prototype, "standalone", 2);
n([
  u()
], a.prototype, "_unique", 2);
n([
  u()
], a.prototype, "_name", 2);
n([
  u()
], a.prototype, "_icon", 2);
n([
  u()
], a.prototype, "_isTrashed", 2);
n([
  u()
], a.prototype, "_isDraft", 2);
n([
  u()
], a.prototype, "_editPath", 2);
a = n([
  q("umb-document-item-ref")
], a);
export {
  a as UmbDocumentItemRefElement,
  a as element
};
//# sourceMappingURL=document-item-ref.element-DmUcsCdq.js.map
