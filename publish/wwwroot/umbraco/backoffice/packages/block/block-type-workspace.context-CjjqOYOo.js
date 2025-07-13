import { U as v } from "./block-type-workspace.context-token-C9eNrOiR.js";
import { UmbTextStyles as f } from "@umbraco-cms/backoffice/style";
import { html as T, css as w, state as C, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as g } from "@umbraco-cms/backoffice/lit-element";
import { UmbRepositoryItemsManager as O } from "@umbraco-cms/backoffice/repository";
import { UMB_DOCUMENT_TYPE_ITEM_REPOSITORY_ALIAS as P } from "@umbraco-cms/backoffice/document-type";
import { UMB_PROPERTY_CONTEXT as c } from "@umbraco-cms/backoffice/property";
import { UmbSubmittableWorkspaceContextBase as k, umbObjectToPropertyValueArray as h, UmbWorkspaceIsNewRedirectController as U, UmbWorkspaceIsNewRedirectControllerAlias as x, UmbInvariantWorkspacePropertyDatasetContext as K } from "@umbraco-cms/backoffice/workspace";
import { UmbObjectState as S, appendToFrozenArray as V } from "@umbraco-cms/backoffice/observable-api";
import { firstValueFrom as N } from "@umbraco-cms/backoffice/external/rxjs";
var R = Object.defineProperty, W = Object.getOwnPropertyDescriptor, y = (s) => {
  throw TypeError(s);
}, d = (s, t, e, a) => {
  for (var r = a > 1 ? void 0 : a ? W(t, e) : t, o = s.length - 1, i; o >= 0; o--)
    (i = s[o]) && (r = (a ? i(t, e, r) : i(r)) || r);
  return a && r && R(t, e, r), r;
}, b = (s, t, e) => t.has(s) || y("Cannot " + e), l = (s, t, e) => (b(s, t, "read from private field"), t.get(s)), u = (s, t, e) => t.has(s) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(s) : t.set(s, e), A = (s, t, e, a) => (b(s, t, "write to private field"), t.set(s, e), e), m, p;
let n = class extends g {
  constructor() {
    super(), u(this, m, new O(this, P)), u(this, p), this.consumeContext(v, (s) => {
      A(this, p, s), l(this, p)?.createPropertyDatasetContext(this), this.observe(l(this, p).unique, (t) => {
        t && l(this, m).setUniques([t]);
      });
    }), this.observe(l(this, m).items, (s) => {
      const t = s[0];
      t && (this._name = t.name);
    });
  }
  render() {
    return T`
			<umb-workspace-editor headline=${this.localize.term("blockEditor_blockConfigurationOverlayTitle", [this._name])}>
			</umb-workspace-editor>
		`;
  }
};
m = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
n.styles = [
  f,
  w`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
d([
  C()
], n.prototype, "_name", 2);
n = d([
  E("umb-block-type-workspace-editor")
], n);
class G extends k {
  constructor(t, e) {
    super(t, e.manifest.alias), this.IS_BLOCK_TYPE_WORKSPACE_CONTEXT = !0, this.#t = new S(void 0), this.data = this.#t.asObservable(), this.name = this.#t.asObservablePart(() => "block type"), this.unique = this.#t.asObservablePart((r) => r?.contentElementTypeKey), this.values = this.#t.asObservablePart((r) => h(r));
    const a = e.manifest;
    this.#e = a.meta?.entityType, this.routes.setRoutes([
      {
        // Would it make more sense to have groupKey before elementTypeKey?
        path: "create/:elementTypeKey/:groupKey",
        component: n,
        setup: async (r, o) => {
          const i = o.match.params.elementTypeKey, _ = o.match.params.groupKey === "null" ? null : o.match.params.groupKey;
          await this.create(i, _), new U(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:id",
        component: n,
        setup: (r, o) => {
          const i = o.match.params.id;
          this.load(i);
        }
      }
    ]);
  }
  #e;
  #t;
  async getValues() {
    return h(await N(this.data));
  }
  resetState() {
    super.resetState(), this.#t.setValue(void 0), this.removeUmbControllerByAlias(x);
  }
  createPropertyDatasetContext(t) {
    return new K(t, this);
  }
  async load(t) {
    this.resetState();
    const e = await this.getContext(c);
    this.observe(e.value, (a) => {
      if (a) {
        const r = a.find((o) => o.contentElementTypeKey === t);
        if (r) {
          this.#t.setValue(r);
          return;
        }
      }
      this.#t.setValue(void 0);
    });
  }
  async create(t, e) {
    this.resetState();
    let a = {
      contentElementTypeKey: t
    };
    this.modalContext && (a = { ...a, ...this.modalContext.data.preset }), e && (a.groupKey = e), this.setIsNew(!0), this.#t.setValue(a);
  }
  getData() {
    return this.#t.getValue();
  }
  getUnique() {
    return this.getData().contentElementTypeKey;
  }
  getEntityType() {
    return this.#e;
  }
  getName() {
    return "block name content element type here...";
  }
  // TODO: [v15] ignoring unused name parameter to avoid breaking changes
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setName(t) {
    console.warn("You cannot set a name of a block type.");
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>}
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(t) {
    return this.#t.asObservablePart((e) => e?.[t]);
  }
  getPropertyValue(t) {
    return this.#t.getValue()?.[t];
  }
  /**
   * @function setPropertyValue
   * @param {string} alias
   * @param {unknown} value - value can be a promise resolving into the actual value or the raw value it self.
   * @returns {Promise<void>}
   * @description Set the value of this property.
   */
  async setPropertyValue(t, e) {
    const a = this.#t.value;
    a && this.#t.update({ ...a, [t]: e });
  }
  async submit() {
    if (!this.#t.value)
      throw new Error("No data to submit.");
    const t = await this.getContext(c);
    t.setValue(
      V(t.getValue() ?? [], this.#t.getValue(), (e) => e?.contentElementTypeKey)
    ), this.setIsNew(!1);
  }
  destroy() {
    this.#t.destroy(), super.destroy();
  }
}
export {
  G as UmbBlockTypeWorkspaceContext,
  G as api
};
//# sourceMappingURL=block-type-workspace.context-CjjqOYOo.js.map
