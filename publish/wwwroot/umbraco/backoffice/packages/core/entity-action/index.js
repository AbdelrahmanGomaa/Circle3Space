import { property as T, customElement as A, nothing as w, html as U, css as P, state as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
import { UmbCreateEntityAction as J } from "../create.action-CY79PM0S.js";
import { UmbDeleteEntityAction as Z } from "../delete.action-DXp0Xn_o.js";
import { UmbDuplicateEntityAction as tt } from "../duplicate.action-CJqMCMIH.js";
import { b as rt, U as st, a as it, c as nt } from "../constants-8D5bBcdE.js";
import { U as S } from "../has-children.context-token-D_lphZ2G.js";
import { U as pt } from "../entity-action-base-C1FfYSbT.js";
import { UmbEntityContext as g } from "@umbraco-cms/backoffice/entity";
import { a as f } from "../request-reload-structure-for-entity.event-CHtdC9hO.js";
import { U as ut } from "../request-reload-structure-for-entity.event-CHtdC9hO.js";
import { UmbContextBase as D } from "@umbraco-cms/backoffice/class-api";
import { UmbBooleanState as M } from "@umbraco-cms/backoffice/observable-api";
import { U as ht } from "../default.action.kind-B00NCT7z.js";
var L = Object.defineProperty, Y = Object.getOwnPropertyDescriptor, b = (e, t, r, i) => {
  for (var s = i > 1 ? void 0 : i ? Y(t, r) : t, o = e.length - 1, p; o >= 0; o--)
    (p = e[o]) && (s = (i ? p(t, r, s) : p(s)) || s);
  return i && s && L(t, r, s), s;
};
let c = class extends C {
  render() {
    return this.value ? U`
			<umb-entity-actions-bundle .entityType=${this.value.entityType} .unique=${this.value.unique}>
			</umb-entity-actions-bundle>
		` : w;
  }
};
b([
  T({ attribute: !1 })
], c.prototype, "value", 2);
c = b([
  A("umb-entity-actions-table-column-view")
], c);
var B = Object.defineProperty, R = Object.getOwnPropertyDescriptor, I = (e) => {
  throw TypeError(e);
}, a = (e, t, r, i) => {
  for (var s = i > 1 ? void 0 : i ? R(t, r) : t, o = e.length - 1, p; o >= 0; o--)
    (p = e[o]) && (s = (i ? p(t, r, s) : p(s)) || s);
  return i && s && B(t, r, s), s;
}, d = (e, t, r) => t.has(e) || I("Cannot " + r), l = (e, t, r) => (d(e, t, "read from private field"), t.get(e)), y = (e, t, r) => t.has(e) ? I("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), O = (e, t, r, i) => (d(e, t, "write to private field"), t.set(e, r), r), v = (e, t, r) => (d(e, t, "access private method"), r), h, _, m, u;
let n = class extends C {
  constructor() {
    super(...arguments), y(this, _), this._props = {}, y(this, h, new g(this)), y(this, u);
  }
  get entityType() {
    return this._props.entityType;
  }
  set entityType(e) {
    e === void 0 || e === this._props.entityType || (this._props.entityType = e, v(this, _, m).call(this), this.requestUpdate("_props"), this._filter = (t) => t.forEntityTypes.includes(e));
  }
  get unique() {
    return this._props.unique;
  }
  set unique(e) {
    e !== this._props.unique && (this._props.unique = e, v(this, _, m).call(this), this.requestUpdate("_props"));
  }
  render() {
    return this._filter ? U`
					<umb-extension-with-api-slot
						type="entityAction"
						.filter=${this._filter}
						.elementProps=${this._props}
						.apiArgs=${this._apiArgs}
						.renderMethod=${(e, t) => (!l(this, u) && t === 0 && (e.component?.updateComplete.then(async () => {
      const r = e.component?.shadowRoot?.querySelector("uui-menu-item");
      r?.updateComplete.then(async () => {
        r?.shadowRoot?.querySelector("#label-button")?.focus?.();
      });
    }), O(this, u, !0)), e.component)}></umb-extension-with-api-slot>
				` : "";
  }
};
h = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
m = function() {
  !this._props.entityType || this._props.unique === void 0 || (l(this, h).setEntityType(this._props.entityType), l(this, h).setUnique(this._props.unique), O(this, u, !1), this._apiArgs = (e) => [{ entityType: this._props.entityType, unique: this._props.unique, meta: e.meta }]);
};
u = /* @__PURE__ */ new WeakMap();
n.styles = [
  P`
			:host {
				--uui-menu-item-flat-structure: 1;
			}
		`
];
a([
  T({ type: String, attribute: "entity-type" })
], n.prototype, "entityType", 1);
a([
  E()
], n.prototype, "_filter", 2);
a([
  T({ type: String })
], n.prototype, "unique", 1);
a([
  E()
], n.prototype, "_props", 2);
a([
  E()
], n.prototype, "_apiArgs", 2);
n = a([
  A("umb-entity-action-list")
], n);
class X extends D {
  constructor(t) {
    super(t, S), this.#t = new M(void 0), this.hasChildren = this.#t.asObservable();
  }
  #t;
  /**
   * Gets the hasChildren state
   * @returns {boolean} - The hasChildren state
   * @memberof UmbHasChildrenEntityContext
   */
  getHasChildren() {
    return this.#t.getValue();
  }
  /**
   * Sets the hasChildren state
   * @param {boolean} hasChildren - The hasChildren state
   * @memberof UmbHasChildrenEntityContext
   */
  setHasChildren(t) {
    this.#t.setValue(t);
  }
}
class N extends f {
  static {
    this.TYPE = "entity-updated";
  }
  constructor(t) {
    super(N.TYPE, t);
  }
}
class q extends f {
  static {
    this.TYPE = "entity-deleted";
  }
  constructor(t) {
    super(q.TYPE, t);
  }
}
class x extends f {
  static {
    this.TYPE = "request-reload-children-of-entity";
  }
  constructor(t) {
    super(x.TYPE, t);
  }
}
export {
  ht as UMB_ENTITY_ACTION_DEFAULT_KIND_MANIFEST,
  rt as UMB_ENTITY_ACTION_DELETE_KIND_MANIFEST,
  st as UMB_ENTITY_CREATE_OPTION_ACTION_LIST_MODAL,
  it as UMB_ENTITY_CREATE_OPTION_ACTION_LIST_MODAL_ALIAS,
  nt as UMB_ENTITY_HAS_CHILDREN_CONDITION_ALIAS,
  S as UMB_HAS_CHILDREN_ENTITY_CONTEXT,
  J as UmbCreateEntityAction,
  Z as UmbDeleteEntityAction,
  tt as UmbDuplicateEntityAction,
  pt as UmbEntityActionBase,
  f as UmbEntityActionEvent,
  n as UmbEntityActionListElement,
  q as UmbEntityDeletedEvent,
  N as UmbEntityUpdatedEvent,
  X as UmbHasChildrenEntityContext,
  x as UmbRequestReloadChildrenOfEntityEvent,
  ut as UmbRequestReloadStructureForEntityEvent
};
//# sourceMappingURL=index.js.map
