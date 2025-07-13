import { css as E, property as D, state as n, customElement as T, repeat as R, html as h } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as I } from "@umbraco-cms/backoffice/style";
import { UmbContentTypePropertyStructureHelper as F, UmbContentTypeContainerStructureHelper as H } from "@umbraco-cms/backoffice/content-type";
import { encodeFolderName as k } from "@umbraco-cms/backoffice/router";
import { UmbLitElement as O } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_STRUCTURE_WORKSPACE_CONTEXT as U } from "@umbraco-cms/backoffice/workspace";
import { UmbDataPathPropertyValueQuery as X } from "@umbraco-cms/backoffice/validation";
import { UMB_PROPERTY_DATASET_CONTEXT as Y } from "@umbraco-cms/backoffice/property";
var K = Object.defineProperty, L = Object.getOwnPropertyDescriptor, A = (t) => {
  throw TypeError(t);
}, g = (t, e, r, a) => {
  for (var s = a > 1 ? void 0 : a ? L(e, r) : e, o = t.length - 1, i; o >= 0; o--)
    (i = t[o]) && (s = (a ? i(e, r, s) : i(s)) || s);
  return a && s && K(e, r, s), s;
}, W = (t, e, r) => e.has(t) || A("Cannot " + r), c = (t, e, r) => (W(t, e, "read from private field"), r ? r.call(t) : e.get(t)), w = (t, e, r) => e.has(t) ? A("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Q = (t, e, r, a) => (W(t, e, "write to private field"), e.set(t, r), r), M = (t, e, r) => (W(t, e, "access private method"), r), _, d, P, $;
let m = class extends O {
  constructor() {
    super(), w(this, P), w(this, _, new F(this)), w(this, d), this.consumeContext(U, (t) => {
      c(this, _).setStructureManager(
        // Assuming its the same content model type that we are working with here... [NL]
        t.structure
      );
    }), this.consumeContext(Y, (t) => {
      Q(this, d, t.getVariantId()), M(this, P, $).call(this);
    }), this.observe(
      c(this, _).propertyStructure,
      (t) => {
        this._propertyStructure = t, M(this, P, $).call(this);
      },
      null
    );
  }
  get containerId() {
    return c(this, _).getContainerId();
  }
  set containerId(t) {
    c(this, _).setContainerId(t);
  }
  render() {
    return this._propertyStructure && this._dataPaths ? R(
      this._propertyStructure,
      (t) => t.alias,
      (t, e) => h`<umb-property-type-based-property
							class="property"
							data-path=${this._dataPaths[e]}
							.property=${t}></umb-property-type-based-property> `
    ) : "";
  }
};
_ = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakSet();
$ = function() {
  !c(this, d) || !this._propertyStructure || (this._dataPaths = this._propertyStructure.map(
    (t) => `$.values[${X({
      alias: t.alias,
      culture: t.variesByCulture ? c(this, d).culture : null,
      segment: t.variesBySegment ? c(this, d).segment : null
    })}].value`
  ));
};
m.styles = [
  I,
  E`
			.property {
				border-bottom: 1px solid var(--uui-color-divider);
			}
			.property:last-child {
				border-bottom: 0;
			}
		`
];
g([
  D({ type: String, attribute: "container-id", reflect: !1 })
], m.prototype, "containerId", 1);
g([
  n()
], m.prototype, "_propertyStructure", 2);
g([
  n()
], m.prototype, "_dataPaths", 2);
m = g([
  T("umb-content-workspace-view-edit-properties")
], m);
var q = Object.defineProperty, J = Object.getOwnPropertyDescriptor, z = (t) => {
  throw TypeError(t);
}, y = (t, e, r, a) => {
  for (var s = a > 1 ? void 0 : a ? J(e, r) : e, o = t.length - 1, i; o >= 0; o--)
    (i = t[o]) && (s = (a ? i(e, r, s) : i(s)) || s);
  return a && s && q(e, r, s), s;
}, Z = (t, e, r) => e.has(t) || z("Cannot " + r), f = (t, e, r) => (Z(t, e, "read from private field"), r ? r.call(t) : e.get(t)), j = (t, e, r) => e.has(t) ? z("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), l;
let p = class extends O {
  constructor() {
    super(), j(this, l, new H(this)), this._groups = [], this._hasProperties = !1, this.consumeContext(U, (t) => {
      f(this, l).setStructureManager(
        // Assuming its the same content model type that we are working with here... [NL]
        t.structure
      );
    }), this.observe(f(this, l).mergedContainers, (t) => {
      this._groups = t;
    }), this.observe(f(this, l).hasProperties, (t) => {
      this._hasProperties = t;
    });
  }
  get containerId() {
    return this._containerId;
  }
  set containerId(t) {
    this._containerId = t, f(this, l).setContainerId(t);
  }
  render() {
    return h`
			${this._hasProperties ? h`
						<uui-box>
							<umb-content-workspace-view-edit-properties
								data-mark="property-group:root"
								.containerId=${this._containerId}></umb-content-workspace-view-edit-properties>
						</uui-box>
					` : ""}
			${R(
      this._groups,
      (t) => t.id,
      (t) => h`<uui-box .headline=${this.localize.string(t.name) ?? ""}>
						<umb-content-workspace-view-edit-properties
							data-mark="property-group:${t.name}"
							.containerId=${t.id}></umb-content-workspace-view-edit-properties>
					</uui-box>`
    )}
		`;
  }
};
l = /* @__PURE__ */ new WeakMap();
p.styles = [
  I,
  E`
			uui-box {
				--uui-box-default-padding: 0 var(--uui-size-space-5);
			}
			uui-box:not(:first-child) {
				margin-top: var(--uui-size-layout-1);
			}
		`
];
y([
  D({ type: String })
], p.prototype, "containerId", 1);
y([
  n()
], p.prototype, "_containerId", 2);
y([
  n()
], p.prototype, "_groups", 2);
y([
  n()
], p.prototype, "_hasProperties", 2);
p = y([
  T("umb-content-workspace-view-edit-tab")
], p);
const tt = p, G = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbContentWorkspaceViewEditTabElement() {
    return p;
  },
  default: tt
}, Symbol.toStringTag, { value: "Module" }));
var et = Object.defineProperty, rt = Object.getOwnPropertyDescriptor, N = (t) => {
  throw TypeError(t);
}, b = (t, e, r, a) => {
  for (var s = a > 1 ? void 0 : a ? rt(e, r) : e, o = t.length - 1, i; o >= 0; o--)
    (i = t[o]) && (s = (a ? i(e, r, s) : i(s)) || s);
  return a && s && et(e, r, s), s;
}, x = (t, e, r) => e.has(t) || N("Cannot " + r), C = (t, e, r) => (x(t, e, "read from private field"), r ? r.call(t) : e.get(t)), V = (t, e, r) => e.has(t) ? N("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), st = (t, e, r, a) => (x(t, e, "write to private field"), e.set(t, r), r), at = (t, e, r) => (x(t, e, "access private method"), r), v, S, B;
let u = class extends O {
  constructor() {
    super(), V(this, S), this._hasRootGroups = !1, this._routes = [], this._activePath = "", V(this, v), this._tabsStructureHelper = new H(this), this._tabsStructureHelper.setIsRoot(!0), this._tabsStructureHelper.setContainerChildType("Tab"), this.observe(
      this._tabsStructureHelper.mergedContainers,
      (t) => {
        this._tabs = t, this._createRoutes();
      },
      null
    ), this.consumeContext(U, (t) => {
      st(this, v, t.structure), this._tabsStructureHelper.setStructureManager(t.structure), at(this, S, B).call(this);
    });
  }
  _createRoutes() {
    if (!this._tabs || !C(this, v)) return;
    const t = [];
    this._hasRootGroups && t.push({
      path: "root",
      component: () => Promise.resolve().then(() => G),
      setup: (e) => {
        e.containerId = null;
      }
    }), this._tabs.length > 0 && this._tabs?.forEach((e) => {
      const r = e.name ?? "";
      t.push({
        path: `tab/${k(r)}`,
        component: () => Promise.resolve().then(() => G),
        setup: (a) => {
          a.containerId = e.id;
        }
      });
    }), t.length !== 0 && (t.push({
      path: "",
      redirectTo: t[0].path
    }), t.push({
      path: "**",
      component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
    })), this._routes = t;
  }
  render() {
    if (!(!this._routes || !this._tabs))
      return h`
			<umb-body-layout header-fit-height>
				${this._routerPath && (this._tabs.length > 1 || this._tabs.length === 1 && this._hasRootGroups) ? h` <uui-tab-group slot="header">
							${this._hasRootGroups && this._tabs.length > 0 ? h`
										<uui-tab
											.label=${this.localize.term("general_generic")}
											.active=${this._routerPath + "/root" === this._activePath}
											.href=${this._routerPath + "/root"}></uui-tab>
									` : ""}
							${R(
        this._tabs,
        (t) => t.name,
        (t) => {
          const e = this._routerPath + "/tab/" + k(t.name || "");
          return h`<uui-tab
										.label=${this.localize.string(t.name ?? "#general_unnamed")}
										.active=${e === this._activePath}
										.href=${e}></uui-tab>`;
        }
      )}
						</uui-tab-group>` : ""}

				<umb-router-slot
					inherit-addendum
					.routes=${this._routes}
					@init=${(t) => {
        this._routerPath = t.target.absoluteRouterPath;
      }}
					@change=${(t) => {
        this._activePath = t.target.absoluteActiveViewPath || "";
      }}>
				</umb-router-slot>
			</umb-body-layout>
		`;
  }
};
v = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakSet();
B = async function() {
  C(this, v) && this.observe(
    await C(this, v).hasRootContainers("Group"),
    (t) => {
      this._hasRootGroups = t, this._createRoutes();
    },
    "_observeGroups"
  );
};
u.styles = [
  I,
  E`
			:host {
				display: block;
				height: 100%;
				--uui-tab-background: var(--uui-color-surface);
			}
		`
];
b([
  n()
], u.prototype, "_hasRootGroups", 2);
b([
  n()
], u.prototype, "_routes", 2);
b([
  n()
], u.prototype, "_tabs", 2);
b([
  n()
], u.prototype, "_routerPath", 2);
b([
  n()
], u.prototype, "_activePath", 2);
u = b([
  T("umb-content-workspace-view-edit")
], u);
const lt = u;
export {
  u as UmbContentWorkspaceViewEditElement,
  lt as default
};
//# sourceMappingURL=content-editor.element-GMgpMQhT.js.map
