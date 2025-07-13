import { UmbTextStyles as T } from "@umbraco-cms/backoffice/style";
import { css as R, customElement as x, html as U, property as P } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as A } from "@umbraco-cms/backoffice/lit-element";
import { UmbContextToken as E } from "@umbraco-cms/backoffice/context-api";
import { UmbContextBase as b, UmbControllerBase as D } from "@umbraco-cms/backoffice/class-api";
import { UMB_MODAL_MANAGER_CONTEXT as I } from "@umbraco-cms/backoffice/modal";
import { UmbStringState as p, mergeObservables as G } from "@umbraco-cms/backoffice/observable-api";
import { u as $ } from "../url-pattern-to-string.function-BAOMgyZQ.js";
import { stripSlash as W } from "@umbraco-cms/backoffice/external/router-slot";
export * from "@umbraco-cms/backoffice/external/router-slot";
import { UUIEvent as M } from "@umbraco-cms/backoffice/external/uui";
import { UmbId as K } from "@umbraco-cms/backoffice/id";
import { U as pt } from "../path-pattern.class-Dg95YGLM.js";
var q = Object.getOwnPropertyDescriptor, z = (s, t, e, r) => {
  for (var i = r > 1 ? void 0 : r ? q(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (i = n(i) || i);
  return i;
};
let g = class extends A {
  render() {
    return U`
			<div class="uui-text">
				<h4><umb-localize key="routing_routeNotFoundTitle"></umb-localize></h4>
				<umb-localize key="routing_routeNotFoundDescription"></umb-localize>
			</div>
		`;
  }
};
g.styles = [
  T,
  R`
			:host {
				display: block;
				width: 100%;
				height: 100%;
				min-width: 0;
			}

			:host > div {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100%;
				opacity: 0;
				animation: fadeIn 5s 5s forwards;
			}

			@keyframes fadeIn {
				100% {
					opacity: 100%;
				}
			}
		`
];
g = z([
  x("umb-route-not-found")
], g);
function F(s) {
  return (t) => "/" + W($(s, t)) + "/";
}
const C = document.createElement("div");
class H extends b {
  constructor(t, e, r) {
    super(t, L), this.#t = [], this.#a = [], this.#s = new p(void 0), this.basePath = this.#s.asObservable(), this.#e = new p(void 0), this.activeLocalPath = this.#e.asObservable(), this.activePath = G([this.basePath, this.activeLocalPath], ([i, o]) => i + "/" + o), this.#n = (i) => {
      const o = this.#s.getValue();
      if (!o) return;
      const n = this.#e.getValue(), B = o.endsWith("/") ? o : o + "/", O = n ? n.endsWith("/") ? n : n + "/" : "", N = B + O + i.generateModalPath(), V = F(N);
      i._internal_setRouteBuilder(V);
    }, this.#i = r, this.consumeContext(I, (i) => {
      this.#r = i, this.#u();
    });
  }
  #i;
  #t;
  #r;
  #a;
  #o;
  #s;
  #e;
  getBasePath() {
    return this.#s.getValue();
  }
  getActivePath() {
    return this.getBasePath() + "/" + this.#e;
  }
  registerModal(t) {
    this.#t.push(t), this.#n(t), this.#u();
  }
  unregisterModal(t) {
    const e = this.#t.indexOf(t);
    e !== -1 && (this.#t.splice(e, 1), this.#u());
  }
  #c(t) {
    return {
      __modalKey: t.key,
      unique: "umbModalKey_" + t.key,
      path: "/" + t.generateModalPath(),
      component: C,
      setup: async (e, r) => {
        if (!this.#r) return;
        const i = await t.routeSetup(
          this.#i,
          this.#r,
          r.match.params
        );
        i && i._internal_setCurrentModalPath(r.match.fragments.consumed);
      }
    };
  }
  _internal_removeModalPath(t) {
    if (t && window.location.href.includes(t)) {
      const e = this.#s.getValue() + "/" + this.#e.getValue();
      window.history.pushState({}, "", e);
    }
  }
  #u() {
    const t = this.#t.filter(
      (i) => !this.#a.find((o) => i.key === o.__modalKey)
    ), e = this.#a.filter(
      (i) => !this.#t.find((o) => o.key === i.__modalKey)
    );
    e.some((i) => i.path === this.#o ? (this.#r?.close(i.__modalKey), !0) : !1);
    const r = this.#a.filter((i) => !e.includes(i));
    this.#a = [
      ...r,
      ...t.map((i) => this.#c(i))
    ], this.#a.push({
      __modalKey: "_empty_",
      unique: "umbEmptyModal",
      path: "",
      component: C
    }), this.#i.routes = this.#a, this.#i.render();
  }
  _internal_routerGotBasePath(t) {
    this.#s.getValue() !== t && (this.#s.setValue(t), this.#l());
  }
  _internal_routerGotActiveLocalPath(t) {
    this.#e.getValue() !== t && (this.#e.setValue(t), this.#l());
  }
  // Also notice each registration should now hold its handler when its active.
  _internal_modalRouterChanged(t) {
    if (this.#o !== t) {
      if (this.#o) {
        const e = this.#t.find((r) => "/" + r.generateModalPath() === this.#o);
        e && this.#r?.close(e.key);
      }
      this.#o = t;
    }
  }
  #l() {
    this.#t.forEach(this.#n);
  }
  #n;
  hostDisconnected() {
    super.hostDisconnected(), this._internal_modalRouterChanged(void 0);
  }
}
const L = new E("UmbRouterContext");
class _ extends M {
  static {
    this.CHANGE = "change";
  }
  constructor() {
    super(_.CHANGE);
  }
}
class w extends M {
  static {
    this.INIT = "init";
  }
  constructor() {
    super(w.INIT);
  }
}
const f = new E("UmbRoutePathAddendum");
class j extends b {
  constructor(t) {
    super(t, f), this.#i = new p(""), this.addendum = this.#i.asObservable();
  }
  #i;
}
var X = Object.defineProperty, J = Object.getOwnPropertyDescriptor, k = (s) => {
  throw TypeError(s);
}, v = (s, t, e, r) => {
  for (var i = r > 1 ? void 0 : r ? J(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (i = (r ? n(t, e, i) : n(i)) || i);
  return r && i && X(t, e, i), i;
}, S = (s, t, e) => t.has(s) || k("Cannot " + e), a = (s, t, e) => (S(s, t, "read from private field"), e ? e.call(s) : t.get(s)), m = (s, t, e) => t.has(s) ? k("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(s) : t.set(s, e), y = (s, t, e, r) => (S(s, t, "write to private field"), t.set(s, e), e), h, u, d, l;
let c = class extends A {
  constructor() {
    super(), m(this, h, document.createElement("router-slot")), m(this, u, document.createElement("router-slot")), m(this, d, !1), m(this, l, new H(this, a(this, h), a(this, u))), this._onNavigationChanged = (s) => {
      if (s.detail.slot === a(this, h)) {
        const t = this._constructLocalRouterPath();
        this._activeLocalPath !== t && (this._activeLocalPath = t, a(this, l)._internal_routerGotActiveLocalPath(t), this.dispatchEvent(new _()));
      } else if (s.detail.slot === a(this, u)) {
        const t = a(this, u).match?.route.path ?? "";
        a(this, l)._internal_modalRouterChanged(t);
      }
    }, a(this, u).parent = a(this, h), a(this, u).style.display = "none", a(this, h).addEventListener("changestate", this._updateRouterPath.bind(this)), a(this, h).appendChild(document.createElement("slot"));
  }
  get routes() {
    return a(this, h).routes;
  }
  set routes(s) {
    s ??= [];
    const t = a(this, h).routes;
    (s.length !== t?.length || s.filter((e) => t?.findIndex((r) => r.path === e.path) === -1).length > 0) && (a(this, h).routes = s);
  }
  get parent() {
    return a(this, h).parent;
  }
  set parent(s) {
    a(this, h).parent = s;
  }
  get absoluteRouterPath() {
    return this._routerPath;
  }
  get localActiveViewPath() {
    return this._activeLocalPath;
  }
  get absoluteActiveViewPath() {
    return this._routerPath + "/" + this._activeLocalPath;
  }
  _constructAbsoluteRouterPath() {
    return a(this, h).constructAbsolutePath("") || "";
  }
  _constructLocalRouterPath() {
    return a(this, h).match?.fragments.consumed ?? "";
  }
  connectedCallback() {
    this.inheritAddendum !== !0 && new j(this), super.connectedCallback(), a(this, u).parent = a(this, h), a(this, d) === !1 && (window.addEventListener("navigationsuccess", this._onNavigationChanged), y(this, d, !0));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), window.removeEventListener("navigationsuccess", this._onNavigationChanged), y(this, d, !1);
  }
  firstUpdated(s) {
    super.firstUpdated(s), this._updateRouterPath();
  }
  _updateRouterPath() {
    const s = this._constructAbsoluteRouterPath();
    if (this._routerPath !== s) {
      this._routerPath = s, a(this, l)._internal_routerGotBasePath(this._routerPath), this.dispatchEvent(new w());
      const t = this._constructLocalRouterPath();
      this._activeLocalPath !== t && (this._activeLocalPath = t, a(this, l)._internal_routerGotActiveLocalPath(this._activeLocalPath), this.dispatchEvent(new _()));
    }
  }
  render() {
    return U`${a(this, h)}${a(this, u)}`;
  }
};
h = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
c.styles = [
  R`
			:host {
				position: relative;
				height: 100%;
			}

			router-slot {
				height: 100%;
			}
		`
];
v([
  P({ type: Boolean, attribute: "inherit-addendum", reflect: !1 })
], c.prototype, "inheritAddendum", 2);
v([
  P({ attribute: !1 })
], c.prototype, "routes", 1);
v([
  P({ attribute: !1 })
], c.prototype, "parent", 1);
c = v([
  x("umb-router-slot")
], c);
class ut extends b {
  constructor(t) {
    super(t, f), this.#r = new p(void 0), this.addendum = this.#r.asObservable(), this.consumeContext(f, (e) => {
      this.observe(e.addendum, (r) => {
        this.#i = r, this.#a();
      });
    }).skipHost();
  }
  #i;
  #t;
  #r;
  setAddendum(t) {
    this.#t = t, this.#a();
  }
  #a() {
    if (this.#i === void 0 || this.#t === void 0)
      return;
    const t = this.#t === "" || this.#i === "" ? this.#t : "/" + this.#t;
    this.#r.setValue(this.#i + t);
  }
}
const Q = (s) => encodeURIComponent(s.toLowerCase().replace(/\s+/g, "-")).replace(/_/g, "-").replace(/\./g, "-").replace(/!/g, "-").replace(/~/g, "-").replace(/\*/g, "-").replace(/'/g, "").replace(/\(/g, "-").replace(/\)/g, "-");
class lt extends D {
  //
  #i;
  #t;
  #r;
  #a;
  #o = /* @__PURE__ */ new Map();
  #s;
  #e;
  #c;
  #u;
  #l;
  #n;
  #p;
  #_;
  #h;
  #m;
  #f;
  /**
   * Creates an instance of UmbModalRouteRegistrationController.
   * @param {UmbControllerHost} host - The host element of the modal, this determine the ownership of the modal and the origin of it.
   * @param {UmbModalToken} alias - The alias of the modal, this is used to identify the modal.
   * @param {UmbControllerAlias} ctrlAlias - The alias for this controller, this is used to identify the controller.
   * @memberof UmbModalRouteRegistrationController
   */
  constructor(t, e, r) {
    super(t, r ?? e.toString()), this.#c = K.new(), this.#l = e, this.consumeContext(f, (i) => {
      this.observe(
        i.addendum,
        (o) => {
          this.#r = o, this.#d();
        },
        "observeAddendum"
      );
    }), this.#t = this.consumeContext(L, (i) => {
      this.#s = i, this.#d();
    }), this.#i = this.#t.asPromise();
  }
  /**
   * Appends an additional path to the modal route.
   *
   * This can help specify the URL for this modal, or used to add a parameter to the URL like this: "/modal/my-modal/:index/"
   * A folder name starting with a colon ":" will be interpreted as a parameter. Then this modal can open with any value in that location.
   * When modal is being setup the value of the parameter can be read from the route params. See the example:
   * @param {string} additionalPath - The additional path to be appended to the modal route
   * @returns {UmbModalRouteRegistrationController} this
   * @example <caption>Example of adding an additional path to the modal route</caption>
   * const modalRegistration = new UmbModalRouteRegistrationController(this, MY_MODAL_TOKEN)
   * modalRegistration.addAdditionalPath(':index')
   *
   * modalRegistration.onSetup((params) => {
   * 	const index = params.index;
   *  // When entering the url of: "/modal/my-modal/hello-world/"
   *  // Then index will be "hello-world"
   * }
   */
  addAdditionalPath(t) {
    return this.#a = t, this;
  }
  /**
   * Registerer one or more additional paths to the modal route, similar to addAdditionalPath. But without defining the actual path name. This enables this to be asynchronously defined and even changed later.
   * This can be useful if your modal has to be unique for this registration, avoiding collision with other registrations.
   * If you made a modal for editing one of multiple property, then you can add a unique path holding the property id.
   * Making the URL unique to this modal registration: /modal/my-modal/my-unique-value/
   *
   * Notice the modal will only be available when all unique paths have a value.
   * @param {Array<string>} uniquePathNames - the unique path names
   * @returns {UmbModalRouteRegistrationController} this
   * @example <caption>Example of adding an additional unique path to the modal route</caption>
   * const modalRegistration = new UmbModalRouteRegistrationController(this, MY_MODAL_TOKEN)
   * modalRegistration.addUniquePaths(['myAliasForIdentifyingThisPartOfThePath'])
   *
   * // Later:
   * modalRegistration.setUniquePathValue('myAliasForIdentifyingThisPartOfThePath', 'myValue');
   */
  addUniquePaths(t) {
    return t && t.forEach((e) => {
      this.#o.set(e, void 0);
    }), this;
  }
  /**
   * Set or change the value of a unique path part.
   * @param {string} identifier - the unique path part identifier
   * @param {value | undefined} value - the new value for the unique path part
   * @example <caption>Example of adding an additional unique path to the modal route</caption>
   * const modalRegistration = new UmbModalRouteRegistrationController(this, MY_MODAL_TOKEN)
   * modalRegistration.addUniquePaths(['first-one', 'another-one'])
   *
   * // Later:
   * modalRegistration.setUniquePathValue('first-one', 'myValue');
   */
  setUniquePathValue(t, e) {
    if (!this.#o.has(t))
      throw new Error(
        `Identifier ${t} was not registered at the construction of the modal registration controller, it has to be.`
      );
    this.#o.get(t) !== e && (this.#o.set(t, e), this.#d());
  }
  getUniquePathValue(t) {
    return this.#o.get(t);
  }
  async #d() {
    if (await this.#i, !this.#s || this.#r === void 0) return;
    const t = Array.from(this.#o.values());
    t.some((r) => r === void 0) && this.#v(), this.#r !== "" && t.unshift(this.#r), this.#a && t.push(this.#a);
    const e = t.join("/") ?? "";
    this.path === e && this.#e === this.#s || (this.#v(), this._setPath(e), this.#s.registerModal(this), this.#e = this.#s);
  }
  async #v() {
    this.#s && this.#e && (this.#e.unregisterModal(this), this.#e = void 0);
  }
  hostConnected() {
    super.hostConnected(), this.#e || this.#d();
  }
  hostDisconnected() {
    super.hostDisconnected(), this.#e && (this.#e.unregisterModal(this), this.#e = void 0);
  }
  get key() {
    return this.#c;
  }
  get alias() {
    return this.#l;
  }
  generateModalPath() {
    return `modal/${Q(this.alias.toString())}${this.path && this.path !== "" ? `/${this.path}` : ""}`;
  }
  get path() {
    return this.#u;
  }
  _setPath(t) {
    this.#u = t;
  }
  /**
   * Returns true if the modal is currently active.
   * @returns {boolean} - true if the modal is currently active, false otherwise.
   */
  get active() {
    return !!this.#h;
  }
  open(t, e) {
    this.active || !this.#m || window.history.pushState({}, "", this.#m(t) + (e ? `${e}` : ""));
  }
  /**
   * Returns the modal context if the modal is currently active. Otherwise its undefined.
   * @returns {UmbModalContext | undefined} - modal context if the modal is active, otherwise undefined.
   */
  get modalContext() {
    return this.#h;
  }
  observeRouteBuilder(t) {
    return this.#f = t, this;
  }
  _internal_setRouteBuilder(t) {
    this.#s && (this.#m = t, this.#f?.(t));
  }
  onSetup(t) {
    return this.#n = t, this;
  }
  onSubmit(t) {
    return this.#p = t, this;
  }
  onReject(t) {
    return this.#_ = t, this;
  }
  #g = (t) => {
    this.#p?.(t, this.#h?.data), this.#h = void 0;
  };
  #P = () => {
    this.#_?.(), this.#h = void 0;
  };
  async routeSetup(t, e, r) {
    if (this.active) return;
    const i = this.#n ? await this.#n(r) : void 0;
    if (i !== !1) {
      const o = {
        modal: {},
        ...i,
        router: t
      };
      return o.modal.key = this.#c, this.#h = e.open(this, this.#l, o), this.#h.onSubmit().then(this.#g, this.#P), this.#h;
    }
  }
  destroy() {
    super.destroy(), this.#t.destroy(), this.#e = void 0, this.#o = void 0, this.#s = void 0;
  }
}
export {
  L as UMB_ROUTE_CONTEXT,
  f as UMB_ROUTE_PATH_ADDENDUM_CONTEXT,
  lt as UmbModalRouteRegistrationController,
  pt as UmbPathPattern,
  H as UmbRouteContext,
  g as UmbRouteNotFoundElement,
  ut as UmbRoutePathAddendumContext,
  _ as UmbRouterSlotChangeEvent,
  c as UmbRouterSlotElement,
  w as UmbRouterSlotInitEvent,
  Q as encodeFolderName
};
//# sourceMappingURL=index.js.map
