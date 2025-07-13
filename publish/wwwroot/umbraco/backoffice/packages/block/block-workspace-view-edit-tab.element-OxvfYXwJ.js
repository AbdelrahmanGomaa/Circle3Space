import { U as B } from "./index-jGJQ3LmE.js";
import { css as G, property as $, state as b, customElement as D, repeat as V, html as k } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as H } from "@umbraco-cms/backoffice/style";
import { UmbContentTypePropertyStructureHelper as L, UmbContentTypeContainerStructureHelper as Q } from "@umbraco-cms/backoffice/content-type";
import { UmbLitElement as A, umbDestroyOnDisconnect as R } from "@umbraco-cms/backoffice/lit-element";
import { UmbDataPathPropertyValueQuery as X } from "@umbraco-cms/backoffice/validation";
var q = Object.defineProperty, F = Object.getOwnPropertyDescriptor, z = (e) => {
  throw TypeError(e);
}, g = (e, t, r, i) => {
  for (var a = i > 1 ? void 0 : i ? F(t, r) : t, u = e.length - 1, c; u >= 0; u--)
    (c = e[u]) && (a = (i ? c(t, r, a) : c(a)) || a);
  return i && a && q(t, r, a), a;
}, M = (e, t, r) => t.has(e) || z("Cannot " + r), s = (e, t, r) => (M(e, t, "read from private field"), r ? r.call(e) : t.get(e)), w = (e, t, r) => t.has(e) ? z("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), W = (e, t, r, i) => (M(e, t, "write to private field"), t.set(e, r), r), E = (e, t, r) => (M(e, t, "access private method"), r), _, m, v, y, d, I, x;
let h = class extends A {
  constructor() {
    super(), w(this, d), w(this, _), w(this, m), w(this, v, new L(this)), this._propertyStructure = [], w(this, y), this.consumeContext(B, (e) => {
      W(this, m, e), this._ownerEntityType = s(this, m).getEntityType(), this.observe(
        e.variantId,
        (t) => {
          W(this, y, t), E(this, d, x).call(this);
        },
        "observeVariantId"
      ), E(this, d, I).call(this);
    });
  }
  get managerName() {
    return s(this, _);
  }
  set managerName(e) {
    W(this, _, e), E(this, d, I).call(this);
  }
  get containerId() {
    return s(this, v).getContainerId();
  }
  set containerId(e) {
    s(this, v).setContainerId(e);
  }
  render() {
    return V(
      this._propertyStructure,
      (e) => e.alias,
      (e, t) => k`<umb-property-type-based-property
					class="property"
					data-path=${this._dataPaths[t]}
					.ownerEntityType=${this._ownerEntityType}
					.property=${e}
					${R()}></umb-property-type-based-property>`
    );
  }
};
_ = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
I = function() {
  !s(this, m) || !s(this, _) || (s(this, v).setStructureManager(s(this, m)[s(this, _)].structure), this.observe(
    s(this, v).propertyStructure,
    (e) => {
      this._propertyStructure = e, E(this, d, x).call(this);
    },
    "observePropertyStructure"
  ));
};
x = function() {
  !s(this, y) || !this._propertyStructure || (this._dataPaths = this._propertyStructure.map(
    (e) => `$.values[${X({
      alias: e.alias,
      culture: e.variesByCulture ? s(this, y).culture : null,
      segment: e.variesBySegment ? s(this, y).segment : null
    })}].value`
  ));
};
h.styles = [
  H,
  G`
			.property {
				border-bottom: 1px solid var(--uui-color-divider);
			}
			.property:last-child {
				border-bottom: 0;
			}
		`
];
g([
  $({ attribute: !1 })
], h.prototype, "managerName", 1);
g([
  $({ type: String, attribute: "container-name", reflect: !1 })
], h.prototype, "containerId", 1);
g([
  b()
], h.prototype, "_propertyStructure", 2);
g([
  b()
], h.prototype, "_dataPaths", 2);
g([
  b()
], h.prototype, "_ownerEntityType", 2);
h = g([
  D("umb-block-workspace-view-edit-properties")
], h);
var J = Object.defineProperty, Y = Object.getOwnPropertyDescriptor, K = (e) => {
  throw TypeError(e);
}, l = (e, t, r, i) => {
  for (var a = i > 1 ? void 0 : i ? Y(t, r) : t, u = e.length - 1, c; u >= 0; u--)
    (c = e[u]) && (a = (i ? c(t, r, a) : c(a)) || a);
  return i && a && J(t, r, a), a;
}, O = (e, t, r) => t.has(e) || K("Cannot " + r), o = (e, t, r) => (O(e, t, "read from private field"), r ? r.call(e) : t.get(e)), P = (e, t, r) => t.has(e) ? K("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), U = (e, t, r, i) => (O(e, t, "write to private field"), t.set(e, r), r), N = (e, t, r) => (O(e, t, "access private method"), r), n, S, f, C, T;
let p = class extends A {
  constructor() {
    super(), P(this, C), P(this, n), P(this, S), P(this, f, new Q(this)), this.hideSingleGroup = !1, this._groups = [], this._hasProperties = !1, this.consumeContext(B, (e) => {
      U(this, S, e), N(this, C, T).call(this);
    });
  }
  get managerName() {
    return o(this, n);
  }
  set managerName(e) {
    U(this, n, e), N(this, C, T).call(this);
  }
  get containerId() {
    return this._containerId;
  }
  set containerId(e) {
    this._containerId = e, o(this, f).setContainerId(e);
  }
  render() {
    return k`
			${this._hasProperties ? k`<uui-box>
						<umb-block-workspace-view-edit-properties
							.managerName=${o(this, n)}
							data-mark="property-group:root"
							.containerId=${this._containerId}></umb-block-workspace-view-edit-properties>
					</uui-box>` : ""}
			${this.hideSingleGroup && this._groups.length === 1 ? this.renderGroup(this._groups[0]) : V(
      this._groups,
      (e) => e.id,
      (e) => k` <uui-box .headline=${e.name}>${this.renderGroup(e)}</uui-box>`
    )}
		`;
  }
  renderGroup(e) {
    return k`
			<umb-block-workspace-view-edit-properties
				.managerName=${o(this, n)}
				data-mark="property-group:${e.name}"
				.containerId=${e.id}></umb-block-workspace-view-edit-properties>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakSet();
T = function() {
  !o(this, S) || !o(this, n) || (o(this, f).setStructureManager(o(this, S)[o(this, n)].structure), this.observe(
    o(this, f).mergedContainers,
    (e) => {
      this._groups = e;
    },
    "observeGroups"
  ), this.observe(
    o(this, f).hasProperties,
    (e) => {
      this._hasProperties = e;
    },
    "observeHasProperties"
  ));
};
p.styles = [
  H,
  G`
			uui-box {
				--uui-box-default-padding: 0 var(--uui-size-space-5);
			}
			uui-box:not(:first-child) {
				margin-top: var(--uui-size-layout-1);
			}
		`
];
l([
  $({ attribute: !1 })
], p.prototype, "managerName", 1);
l([
  $({ type: String })
], p.prototype, "containerId", 1);
l([
  b()
], p.prototype, "_containerId", 2);
l([
  $({ type: Boolean, reflect: !1 })
], p.prototype, "hideSingleGroup", 2);
l([
  b()
], p.prototype, "_groups", 2);
l([
  b()
], p.prototype, "_hasProperties", 2);
p = l([
  D("umb-block-workspace-view-edit-tab")
], p);
const se = p;
export {
  p as UmbBlockWorkspaceViewEditTabElement,
  se as default
};
//# sourceMappingURL=block-workspace-view-edit-tab.element-OxvfYXwJ.js.map
