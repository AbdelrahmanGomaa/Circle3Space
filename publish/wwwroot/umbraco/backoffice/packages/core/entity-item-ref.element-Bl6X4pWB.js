import { property as f, customElement as $, nothing as R, html as b, css as W, state as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as A } from "@umbraco-cms/backoffice/lit-element";
import { UmbExtensionsElementInitializer as I } from "@umbraco-cms/backoffice/extension-api";
import { UMB_MARK_ATTRIBUTE_NAME as x } from "@umbraco-cms/backoffice/const";
import { umbExtensionsRegistry as D } from "@umbraco-cms/backoffice/extension-registry";
import { UmbRoutePathAddendumContext as B } from "@umbraco-cms/backoffice/router";
var S = Object.defineProperty, k = Object.getOwnPropertyDescriptor, M = (t) => {
  throw TypeError(t);
}, C = (t, e, n, s) => {
  for (var r = s > 1 ? void 0 : s ? k(e, n) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (r = (s ? a(e, n, r) : a(r)) || r);
  return s && r && S(e, n, r), r;
}, q = (t, e, n) => e.has(t) || M("Cannot " + n), z = (t, e, n) => e.has(t) ? M("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), G = (t, e, n) => (q(t, e, "access private method"), n), v, O;
let y = class extends A {
  constructor() {
    super(...arguments), z(this, v), this.standalone = !1;
  }
  render() {
    return this.item ? b`
			<uui-ref-node name=${this.item.name} ?standalone=${this.standalone} readonly>
				<slot name="actions" slot="actions"></slot>
				${G(this, v, O).call(this, this.item)}
			</uui-ref-node>
		` : R;
  }
};
v = /* @__PURE__ */ new WeakSet();
O = function(t) {
  if (t.icon)
    return b`<umb-icon slot="icon" name=${t.icon}></umb-icon>`;
};
C([
  f({ type: Object })
], y.prototype, "item", 2);
C([
  f({ type: Boolean })
], y.prototype, "standalone", 2);
y = C([
  $("umb-default-item-ref")
], y);
var K = Object.defineProperty, L = Object.getOwnPropertyDescriptor, T = (t) => {
  throw TypeError(t);
}, _ = (t, e, n, s) => {
  for (var r = s > 1 ? void 0 : s ? L(e, n) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (r = (s ? a(e, n, r) : a(r)) || r);
  return s && r && K(e, n, r), r;
}, U = (t, e, n) => e.has(t) || T("Cannot " + n), o = (t, e, n) => (U(t, e, "read from private field"), n ? n.call(t) : e.get(t)), m = (t, e, n) => e.has(t) ? T("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), u = (t, e, n, s) => (U(t, e, "write to private field"), e.set(t, n), n), N = (t, e, n) => (U(t, e, "access private method"), n), c, l, d, h, E, w, P;
let p = class extends A {
  constructor() {
    super(...arguments), m(this, w), m(this, c), m(this, l), m(this, d, !1), m(this, h, !1), m(this, E, new B(this));
  }
  get item() {
    return o(this, l);
  }
  set item(t) {
    const e = o(this, l);
    if (u(this, l, t), t !== e && t) {
      if (this._component && t.entityType === e?.entityType) {
        this._component.item = t;
        return;
      }
      o(this, E).setAddendum("ref/" + t.entityType + "/" + t.unique), N(this, w, P).call(this, t.entityType);
    }
  }
  get readonly() {
    return o(this, d);
  }
  set readonly(t) {
    u(this, d, t), this._component && (this._component.readonly = o(this, d));
  }
  get standalone() {
    return o(this, h);
  }
  set standalone(t) {
    u(this, h, t), this._component && (this._component.standalone = o(this, h));
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.setAttribute(x, "entity-item-ref");
  }
  render() {
    return b`${this._component}`;
  }
};
c = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakSet();
P = function(t) {
  o(this, c) && o(this, c).destroy(), u(this, c, new I(
    this,
    D,
    "entityItemRef",
    (e) => e.forEntityTypes.includes(t),
    (e) => {
      this._component?.remove();
      const n = e[0]?.component || document.createElement("umb-default-item-ref");
      n.item = o(this, l), n.readonly = this.readonly, n.standalone = this.standalone;
      const s = document.createElement("slot");
      s.name = "actions", s.setAttribute("slot", "actions"), n.appendChild(s), this._component = n;
    },
    void 0,
    // We can leave the alias to undefined, as we destroy this our selfs.
    void 0,
    { single: !0 }
  ));
};
p.styles = [
  W`
			:host {
				display: block;
				position: relative;
			}
		`
];
_([
  g()
], p.prototype, "_component", 2);
_([
  f({ type: Object, attribute: !1 })
], p.prototype, "item", 1);
_([
  f({ type: Boolean, attribute: "readonly" })
], p.prototype, "readonly", 1);
_([
  f({ type: Boolean, attribute: "standalone" })
], p.prototype, "standalone", 1);
p = _([
  $("umb-entity-item-ref")
], p);
export {
  p as U
};
//# sourceMappingURL=entity-item-ref.element-Bl6X4pWB.js.map
