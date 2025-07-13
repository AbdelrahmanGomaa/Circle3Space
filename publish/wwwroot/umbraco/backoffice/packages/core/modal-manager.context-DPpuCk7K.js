import { UmbContextToken as g, UMB_CONTEXT_REQUEST_EVENT_TYPE as A, UmbContextBoundary as P, UmbContextProvider as L } from "@umbraco-cms/backoffice/context-api";
import { UmbLitElement as I } from "@umbraco-cms/backoffice/lit-element";
import { umbExtensionsRegistry as W } from "@umbraco-cms/backoffice/extension-registry";
import { UmbTextStyles as N } from "@umbraco-cms/backoffice/style";
import { customElement as X, html as G } from "@umbraco-cms/backoffice/external/lit";
import { UmbBasicState as w, UmbStringState as j, UmbObjectState as q, appendToFrozenArray as F } from "@umbraco-cms/backoffice/observable-api";
import { UUIModalCloseEvent as C } from "@umbraco-cms/backoffice/external/uui";
import { UMB_ROUTE_CONTEXT as k } from "@umbraco-cms/backoffice/router";
import { loadManifestElement as H, createExtensionElement as Q } from "@umbraco-cms/backoffice/extension-api";
import { U as _ } from "./modal-token-wEQqBBXI.js";
import { UmbId as Y } from "@umbraco-cms/backoffice/id";
import { UmbControllerBase as $, UmbContextBase as J } from "@umbraco-cms/backoffice/class-api";
import { umbDeepMerge as K } from "@umbraco-cms/backoffice/utils";
const M = new g("UmbModalContext");
var Z = Object.getOwnPropertyDescriptor, U = (e) => {
  throw TypeError(e);
}, tt = (e, t, i, a) => {
  for (var o = a > 1 ? void 0 : a ? Z(t, i) : t, l = e.length - 1, v; l >= 0; l--)
    (v = e[l]) && (o = v(o) || o);
  return o;
}, y = (e, t, i) => t.has(e) || U("Cannot " + i), s = (e, t, i) => (y(e, t, "read from private field"), i ? i.call(e) : t.get(e)), d = (e, t, i) => t.has(e) ? U("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), c = (e, t, i, a) => (y(e, t, "write to private field"), t.set(e, i), i), m = (e, t, i) => (y(e, t, "access private method"), i), n, u, p, r, f, h, x, V, R, T, D, O, S, E;
let b = class extends I {
  constructor() {
    super(...arguments), d(this, h), d(this, n), d(this, u, new w(void 0)), d(this, p), d(this, r), d(this, f, (e) => {
      if (s(this, n)?.isResolved() === !1 && s(this, n)?.router) {
        e.stopImmediatePropagation(), e.preventDefault(), s(this, n)._internal_removeCurrentModal();
        return;
      }
      this.element?.removeEventListener(C, s(this, f)), s(this, n)?.reject({ type: "close" });
    }), d(this, E, () => {
      this.destroy();
    });
  }
  async init(e) {
    if (s(this, n) === e) return;
    if (c(this, n, e), !s(this, n)) {
      this.destroy();
      return;
    }
    s(this, n).addEventListener("umb:destroy", s(this, E)), this.element = await m(this, h, x).call(this), this.element.addEventListener(C, s(this, f)), this.element.addEventListener(A, (i) => {
      s(this, n) && i.contextAlias !== M.contextAlias && (i.stopImmediatePropagation(), s(this, n).getHostElement().dispatchEvent(i.clone()));
    }), s(this, n).onSubmit().then(
      () => {
        this.element?.close();
      },
      () => {
        this.element?.close();
      }
    ), s(this, n).router ? (c(this, r, document.createElement("umb-router-slot")), s(this, r).routes = [
      {
        unique: "_umbEmptyRoute_",
        path: "",
        component: document.createElement("slot")
      }
    ], s(this, r).parent = s(this, n).router) : (c(this, r, document.createElement("div")), s(this, r).style.display = "contents", new P(s(this, r), k).hostConnected()), this.element.appendChild(s(this, r)), m(this, h, T).call(this, s(this, n).alias.toString()), new L(this.element, M, s(this, n)).hostConnected();
  }
  render() {
    return G`${this.element}`;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.destroy();
  }
  destroy() {
    s(this, u).destroy(), s(this, p)?.destroy(), c(this, p, void 0), s(this, n) && (s(this, n).removeEventListener("umb:destroy", s(this, E)), s(this, n).destroy(), c(this, n, void 0)), super.destroy();
  }
};
n = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
x = async function() {
  if (s(this, n).type == "custom" && s(this, n)?.element) {
    const e = await H(s(this, n).element);
    return new e();
  }
  return s(this, n).type === "sidebar" ? m(this, h, V).call(this) : m(this, h, R).call(this);
};
V = function() {
  const e = document.createElement("uui-modal-sidebar");
  return this.observe(
    s(this, n).size,
    (t) => {
      e.size = t;
    },
    "observeSize"
  ), e;
};
R = function() {
  const e = document.createElement("uui-modal-dialog"), t = document.createElement("uui-dialog");
  return e.appendChild(t), e;
};
T = function(e) {
  s(this, p)?.destroy(), this.observe(W.byTypeAndAlias("modal", e), async (t) => {
    if (m(this, h, S).call(this), t) {
      const i = await m(this, h, D).call(this, t);
      i && m(this, h, O).call(this, i);
    }
  });
};
D = async function(e) {
  const t = await Q(e);
  if (s(this, n))
    return t && (t.manifest = e, t.data = s(this, n).data, t.modalContext = s(this, n)), t;
};
O = function(e) {
  s(this, r).appendChild(e), s(this, u).setValue(e);
};
S = function() {
  const e = s(this, u).getValue();
  e && (s(this, r).removeChild(e), s(this, u).setValue(void 0));
};
E = /* @__PURE__ */ new WeakMap();
b.styles = [N];
b = tt([
  X("umb-modal")
], b);
class et extends $ {
  constructor(t, i, a) {
    super(t), this.type = "dialog", this.router = null, this.#r = new j("small"), this.size = this.#r.asObservable(), this.key = a.modal?.key || Y.new(), this.router = a.router ?? null, this.alias = i;
    let o = "small";
    this.alias instanceof _ && (this.type = this.alias.getDefaultModal()?.type || this.type, o = this.alias.getDefaultModal()?.size ?? o, this.element = this.alias.getDefaultModal()?.element || this.element, this.backdropBackground = this.alias.getDefaultModal()?.backdropBackground || this.backdropBackground), this.type = a.modal?.type || this.type, o = a.modal?.size ?? o, this.element = a.modal?.element || this.element, this.backdropBackground = a.modal?.backdropBackground || this.backdropBackground, this.#r.setValue(o);
    const l = this.alias instanceof _ ? this.alias.getDefaultData() : void 0;
    this.data = Object.freeze(
      // If we have both data and defaultData perform a deep merge
      a.data && l ? K(a.data, l) : (
        // otherwise pick one of them:
        a.data ?? l
      )
    );
    const v = a.value ?? (this.alias instanceof _ ? this.alias.getDefaultValue() : void 0);
    this.#s = new q(v), this.value = this.#s.asObservable(), this.#l = new Promise((B, z) => {
      this.#n = B, this.#a = z;
    });
  }
  //
  // TODO: Come up with a better name:
  #t;
  #i;
  #e;
  #l;
  #n;
  #a;
  #o() {
    this.#n = void 0, this.#a = void 0, this.#e = !0;
  }
  #s;
  #r;
  #h;
  _internal_setCurrentModalPath(t) {
    this.#h = t;
  }
  async _internal_removeCurrentModal() {
    (await this.getContext(k))._internal_removeModalPath(this.#h);
  }
  forceResolve() {
    if (this.#t) {
      const t = this.#n;
      this.#o(), t?.(this.getValue());
    } else {
      const t = this.#a;
      this.#o(), t?.(this.#i ?? { type: "close" });
    }
  }
  isResolved() {
    return this.#e === !0;
  }
  // note, this methods is private  argument is not defined correctly here, but requires to be fix by appending the OptionalSubmitArgumentIfUndefined type when newing up this class.
  /**
   * Submits this modal, returning with a value to the initiator of the modal.
   * @public
   * @memberof UmbModalContext
   */
  submit() {
    if (!this.#e) {
      if (this.router) {
        this.#t = !0, this._internal_removeCurrentModal();
        return;
      }
      this.#n?.(this.getValue()), this.#o();
    }
  }
  /**
   * Closes this modal
   * @param reason
   * @public
   * @memberof UmbModalContext
   */
  reject(t) {
    if (!this.#e) {
      if (this.router) {
        this.#t = !1, this.#i = t, this._internal_removeCurrentModal();
        return;
      }
      this.#a?.(t), this.#o();
    }
  }
  /**
   * Gives a Promise which will be resolved when this modal is submitted.
   * @returns {Promise<ModalValue>}
   * @public
   * @memberof UmbModalContext
   */
  onSubmit() {
    return this.#l;
  }
  /**
   * Gives the current value of this modal.
   * @returns {ModalValue}
   * @public
   * @memberof UmbModalContext
   */
  getValue() {
    return this.#s.getValue();
  }
  /**
   * Sets the current value of this modal.
   * @param value
   * @public
   * @memberof UmbModalContext
   */
  setValue(t) {
    this.#s.setValue(t);
  }
  /**
   * Updates the current value of this modal.
   * @param partialValue
   * @public
   * @memberof UmbModalContext
   */
  updateValue(t) {
    this.#s.update(t);
  }
  /**
   * Updates the size this modal.
   * @param size
   * @public
   * @memberof UmbModalContext
   */
  setModalSize(t) {
    this.#r.setValue(t);
  }
  destroy() {
    this.dispatchEvent(new CustomEvent("umb:destroy")), this.#s.destroy(), this.router = null, this.data = void 0, super.destroy();
  }
}
class ft extends J {
  constructor(t) {
    super(t, st), this.#t = new w([]), this.modals = this.#t.asObservable(), this.#e = () => {
      this.#i();
    }, window.addEventListener("navigationsuccess", this.#e);
  }
  #t;
  /**
   * Opens a modal or sidebar modal
   * @public
   * @param {UmbControllerHost} host - The host that the modal should be attached to, this is usually the controller/element that is opening the modal. This additionally acts as the modal origin for the context api.
   * @param {(string | UmbModalToken)} modalAlias - The alias or token of the modal to open
   * @param {UmbModalContextClassArgs} args - The arguments for this setup.
   * @returns {*}  {UmbModalHandler}
   * @memberof UmbModalManagerContext
   */
  open(t, i, a = {}) {
    const o = new et(t, i, a);
    return this.#t.setValue(
      F(this.#t.value, o, (l) => l.key === o.key)
    ), o;
  }
  /**
   * Closes a modal or sidebar modal
   * @private
   * @param {string} key - The key of the modal to close
   * @memberof UmbModalManagerContext
   */
  close(t) {
    const i = this.#t.getValue().find((a) => a.key === t);
    i && i.forceResolve();
  }
  remove(t) {
    this.#t.setValue(this.#t.getValue().filter((i) => i.key !== t));
  }
  /**
   * Closes all modals that is not routable
   * @private
   * @memberof UmbModalManagerContext
   */
  #i() {
    this.#t.getValue().filter((t) => t.router === null).forEach((t) => {
      t.forceResolve();
    });
  }
  #e;
  destroy() {
    super.destroy(), this.#t.destroy(), window.removeEventListener("navigationsuccess", this.#e);
  }
}
const st = new g(
  "UmbModalManagerContext"
);
export {
  st as U,
  b as a,
  M as b,
  ft as c
};
//# sourceMappingURL=modal-manager.context-DPpuCk7K.js.map
