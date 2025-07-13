import { clamp as S } from "@umbraco-cms/backoffice/external/uui";
import { clamp as pt } from "@umbraco-cms/backoffice/external/uui";
import { UmbChangeEvent as b, UmbSelectedEvent as p, UmbSelectionChangeEvent as f, UmbDeselectedEvent as P } from "@umbraco-cms/backoffice/event";
import { UmbNumberState as u, UmbBooleanState as d, UmbArrayState as m } from "@umbraco-cms/backoffice/observable-api";
import { u as Vt } from "../url-pattern-to-string.function-BAOMgyZQ.js";
import { DOMPurify as V } from "@umbraco-cms/backoffice/external/dompurify";
import { UmbControllerBase as w } from "@umbraco-cms/backoffice/class-api";
import { U as Ot } from "../deprecation-SeDYTswO.js";
function D(e, t) {
  if (e === 0) return "0 Bytes";
  const s = t?.kilo ?? 1024, n = t?.decimals ?? 2, i = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], r = Math.floor(Math.log(e) / Math.log(s));
  return `${parseFloat((e / Math.pow(s, r)).toFixed(n)).toLocaleString(t?.culture)} ${i[r]}`;
}
const W = (e, t = 0) => {
  let s;
  return function(...n) {
    clearTimeout(s), s = setTimeout(() => e.apply(this, n), t);
  };
}, B = Object.freeze({
  ASCENDING: "Ascending",
  DESCENDING: "Descending"
}), $ = (e, t, s) => {
  const n = new Blob([e], { type: s }), i = window.URL.createObjectURL(n), r = document.createElement("a");
  r.href = i, r.download = t, r.style.display = "none", document.body.appendChild(r), r.dispatchEvent(new MouseEvent("click")), r.remove(), window.URL.revokeObjectURL(i);
};
function z(e) {
  if (!e.startsWith("umb://")) throw new Error("udi does not start with umb://");
  const s = e.replace("umb://", "").split("/")[1];
  if (s.length !== 32) throw new Error("udi is not 32 chars");
  return `${s.substring(0, 8)}-${s.substring(8, 12)}-${s.substring(12, 16)}-${s.substring(16, 20)}-${s.substring(20)}`;
}
async function F(e, t) {
  if (!t)
    return e;
  const s = new URLSearchParams({
    width: t.width?.toString() ?? "",
    height: t.height?.toString() ?? "",
    mode: t.mode ?? ""
  });
  return `${e}?${s.toString()}`;
}
function N(e, t, s) {
  return s = S(s, 0, 1), e * (1 - s) + t * s;
}
function H(e, t, s) {
  return e === t ? 0 : (s - e) / (t - e);
}
function G(e, t) {
  return Math.abs(e - t);
}
function j(e, t) {
  return t < 0 || t >= 1 ? NaN : e / (1 - t);
}
function k(e, t) {
  const s = [0];
  t.reduce((o, a, c) => s[c + 1] = o + a, 0);
  const n = s.reduce((o, a) => {
    const c = Math.abs(o - e), h = Math.abs(a - e);
    return c === h ? o < a ? o : a : h < c ? a : o;
  }), i = s.indexOf(n), r = e - n;
  let l = i;
  if (!(r < 0 && i === 0)) {
    if (!(r > 0 && i === s.length - 1)) {
      const o = t[r >= 0 ? i : i - 1];
      l += o === 0 ? l : r / o;
    }
  }
  return l;
}
function Z(e, t) {
  const s = Math.min(e, t.length);
  let n = 0, i = 0;
  for (; n < s; )
    i += t[n++];
  return i;
}
function X(e, t, s, n = 0) {
  return e > s.left - n && e < s.right + n && t > s.top - n && t < s.bottom + n;
}
function q(e, t) {
  const s = new Image(), n = new Promise(
    (i, r) => {
      s.onload = () => {
        const l = s.naturalWidth, o = s.naturalHeight;
        let a = l, c = o;
        if (t?.maxWidth && t.maxWidth > 0 && a > t?.maxWidth) {
          const h = t.maxWidth / l;
          a = t.maxWidth, c = Math.round(o * h);
        }
        i({ width: a, height: c, naturalWidth: l, naturalHeight: o });
      }, s.onerror = r;
    }
  );
  return s.src = e, n;
}
function E(e, t) {
  const s = { ...t };
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && e[n] !== void 0 && (e[n]?.constructor === Object && t[n]?.constructor === Object ? s[n] = E(e[n], t[n]) : s[n] = e[n]);
  return s;
}
class K extends EventTarget {
  constructor() {
    super(...arguments), this.#s = {
      totalItems: 0,
      totalPages: 1,
      currentPage: 1
    }, this.#t = new u(10), this.pageSize = this.#t.asObservable(), this.#n = new u(this.#s.totalItems), this.totalItems = this.#n.asObservable(), this.#e = new u(this.#s.totalPages), this.totalPages = this.#e.asObservable(), this.#i = new u(this.#s.currentPage), this.currentPage = this.#i.asObservable(), this.#r = new u(0), this.skip = this.#r.asObservable();
  }
  #s;
  #t;
  #n;
  #e;
  #i;
  #r;
  /**
   * Sets the number of items per page and recalculates the total number of pages
   * @param {number} pageSize
   * @memberof UmbPaginationManager
   */
  setPageSize(t) {
    this.#t.setValue(t), this.#o();
  }
  /**
   * Gets the number of items per page
   * @returns {number}
   * @memberof UmbPaginationManager
   */
  getPageSize() {
    return this.#t.getValue();
  }
  /**
   * Gets the total number of items
   * @returns {number}
   * @memberof UmbPaginationManager
   */
  getTotalItems() {
    return this.#n.getValue();
  }
  /**
   * Sets the total number of items and recalculates the total number of pages
   * @param {number} totalItems
   * @memberof UmbPaginationManager
   */
  setTotalItems(t) {
    this.#n.setValue(t), this.#o();
  }
  /**
   * Gets the total number of pages
   * @returns {number}
   * @memberof UmbPaginationManager
   */
  getTotalPages() {
    return this.#e.getValue();
  }
  /**
   * Gets the current page number
   * @returns {number}
   * @memberof UmbPaginationManager
   */
  getCurrentPageNumber() {
    return this.#i.getValue();
  }
  /**
   * Sets the current page number
   * @param {number} pageNumber
   * @memberof UmbPaginationManager
   */
  setCurrentPageNumber(t) {
    t < 1 && (t = 1), t > this.#e.getValue() && (t = this.#e.getValue()), this.#i.setValue(t), this.#a(), this.dispatchEvent(new b());
  }
  /**
   * Gets the number of items to skip
   * @returns {number}
   * @memberof UmbPaginationManager
   */
  getSkip() {
    return this.#r.getValue();
  }
  /**
   * Clears the pagination manager values and resets them to their default values
   * @memberof UmbPaginationManager
   */
  clear() {
    this.#n.setValue(this.#s.totalItems), this.#e.setValue(this.#s.totalPages), this.#i.setValue(this.#s.currentPage), this.#r.setValue(0);
  }
  /**
   * Calculates the total number of pages
   * @memberof UmbPaginationManager
   */
  #o() {
    let t = Math.ceil(this.#n.getValue() / this.#t.getValue());
    t = t === 0 ? 1 : t, this.#e.setValue(t), this.getCurrentPageNumber() > t && this.setCurrentPageNumber(t);
  }
  #a() {
    const t = Math.max(0, (this.#i.getValue() - 1) * this.#t.getValue());
    this.#r.setValue(t);
  }
}
function O(e, t) {
  const s = new URL(e, window.location.origin);
  return s.origin === window.location.origin ? s : t ? new URL(t) : new URL(window.location.origin);
}
function Y(e) {
  return e.endsWith("/") ? e : e + "/";
}
function J(e, t = globalThis.window) {
  try {
    const s = t.opener;
    if (!s)
      return !1;
    const n = s.location, i = t.location;
    return !(n.origin !== i.origin || typeof e < "u" && !n.pathname.startsWith(e));
  } catch {
    return !1;
  }
}
const Q = (e) => decodeURIComponent(e), U = (e) => encodeURIComponent(e).replaceAll(".", "%2E").replaceAll(":", "%3A"), tt = (e) => U(e), et = (e) => {
  const t = e.replace(/([A-Z])/g, " $1");
  return t.charAt(0).toUpperCase() + t.slice(1);
}, v = (e) => {
  const t = e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)?.map((s) => s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase()).join("");
  return t && t.slice(0, 1).toLowerCase() + t.slice(1) || "";
};
function A(e) {
  return v(e);
}
function st(e) {
  return e.replace(/(\d*)$/, (t, s) => (+s + 1).toString().padStart(s.length, "0"));
}
function nt(e, t = ",") {
  return e ? e.split(t).map((s) => s.trim()).filter((s) => s.length > 0) ?? [] : [];
}
function it(e, t) {
  return Array.isArray(e) ? e.indexOf(t) !== -1 : e === t;
}
function rt(e, t) {
  return Array.isArray(e) ? e.some((s) => t.indexOf(s) !== -1) : t.indexOf(e) !== -1;
}
const ot = A;
function at(e) {
  return e.startsWith("/") ? e.slice(1) : e;
}
function lt(e) {
  return e.endsWith("/") ? e.slice(void 0, -1) : e;
}
const g = "umb:auth:redirect";
function ct() {
  let e = "";
  const t = sessionStorage.getItem(g);
  return t && (sessionStorage.removeItem(g), e = t.endsWith("logout") ? e : t), e ? O(e) : null;
}
function ut(e) {
  const t = new URL(e, window.location.origin);
  t.origin === window.location.origin && sessionStorage.setItem(g, t.toString());
}
function ht(e) {
  return e?.indexOf("~/") === 0 && (e = e.slice(1)), e?.indexOf("/wwwroot/") === 0 && (e = e.slice(8)), e;
}
function gt(e, t = "v1") {
  return `/umbraco/management/api/${t}${e}`;
}
const y = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, I = /([^#-~| |!])/g;
function ft(e) {
  return typeof e != "string" && !(e instanceof String) ? e : e.toString().replace(/&/g, "&amp;").replace(y, function(t) {
    const s = t.charCodeAt(0), n = t.charCodeAt(1);
    return "&#" + ((s - 55296) * 1024 + (n - 56320) + 65536) + ";";
  }).replace(I, function(t) {
    return "&#" + t.charCodeAt(0) + ";";
  }).replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function dt(e) {
  return V.sanitize(e);
}
class mt extends w {
  constructor(t) {
    super(t), this.#s = new d(!0), this.selectable = this.#s.asObservable(), this.#t = new m([], (s) => s), this.selection = this.#t.asObservable(), this.hasSelection = this.#t.asObservablePart((s) => s.length > 0), this.#n = new d(!1), this.multiple = this.#n.asObservable(), this.#e = (s) => !0;
  }
  #s;
  #t;
  #n;
  #e;
  /**
   * Returns whether items can be selected.
   * @returns {*}
   * @memberof UmbSelectionManager
   */
  getSelectable() {
    return this.#s.getValue();
  }
  /**
   * Sets whether items can be selected.
   * @param {boolean} value
   * @memberof UmbSelectionManager
   */
  setSelectable(t) {
    this.#s.setValue(t);
  }
  /**
   * Returns the current selection.
   * @returns {*}
   * @memberof UmbSelectionManager
   */
  getSelection() {
    return this.#t.getValue();
  }
  /**
   * Sets the current selection.
   * @param {Array<ValueType>} value
   * @memberof UmbSelectionManager
   */
  setSelection(t) {
    if (this.getSelectable() === !1) return;
    if (t === void 0) throw new Error("Value cannot be undefined");
    t.forEach((n) => {
      if (this.#e(n) === !1)
        throw new Error(`${n} is now allowed to be selected`);
    });
    const s = this.getMultiple() ? t : t.slice(0, 1);
    this.#t.setValue(s);
  }
  /**
   * Returns whether multiple items can be selected.
   * @returns {*}
   * @memberof UmbSelectionManager
   */
  getMultiple() {
    return this.#n.getValue();
  }
  /**
   * Sets whether multiple items can be selected.
   * @param {boolean} value
   * @memberof UmbSelectionManager
   */
  setMultiple(t) {
    if (this.#n.setValue(t), t === !1 && this.getSelection().length > 1) {
      const s = this.getSelection()[0];
      this.clearSelection(), this.select(s);
    }
  }
  /**
   * Toggles the given unique id in the current selection.
   * @param {(ValueType)} unique
   * @memberof UmbSelectionManager
   */
  toggleSelect(t) {
    this.getSelectable() !== !1 && (this.isSelected(t) ? this.deselect(t) : this.select(t));
  }
  /**
   * Appends the given unique id to the current selection.
   * @param {(ValueType)} unique
   * @memberof UmbSelectionManager
   */
  select(t) {
    if (this.getSelectable() === !1 || this.isSelected(t)) return;
    if (this.#e(t) === !1)
      throw new Error("The item is now allowed to be selected");
    const s = this.getMultiple() ? [...this.getSelection(), t] : [t];
    this.#t.setValue(s), this.getHostElement().dispatchEvent(new p(t)), this.getHostElement().dispatchEvent(new f());
  }
  /**
   * Removes the given unique id from the current selection.
   * @param {(ValueType)} unique
   * @memberof UmbSelectionManager
   */
  deselect(t) {
    if (this.getSelectable() === !1) return;
    const s = this.getSelection().filter((n) => n !== t);
    this.#t.setValue(s), this.getHostElement().dispatchEvent(new P(t)), this.getHostElement().dispatchEvent(new f());
  }
  /**
   * Returns true if the given unique id is selected.
   * @param {(ValueType)} unique
   * @returns {*}
   * @memberof UmbSelectionManager
   */
  isSelected(t) {
    return this.getSelection().includes(t);
  }
  /**
   * Clears the current selection.
   * @memberof UmbSelectionManager
   */
  clearSelection() {
    this.getSelectable() !== !1 && this.#t.setValue([]);
  }
  /**
   * Sets a function that determines if an item is selectable or not.
   * @param compareFn A function that determines if an item is selectable or not.
   * @memberof UmbSelectionManager
   */
  setAllowLimitation(t) {
    this.#e = t;
  }
  /**
   * Returns the function that determines if an item is selectable or not.
   * @returns {*}
   * @memberof UmbSelectionManager
   */
  getAllowLimitation() {
    return this.#e;
  }
}
class M extends w {
  /**
   * Creates an instance of UmbStateManager.
   * @param {UmbControllerHost} host
   * @memberof UmbStateManager
   */
  constructor(t) {
    super(t), this._states = new m([], (s) => s.unique), this.states = this._states.asObservable(), this.isOn = this._states.asObservablePart((s) => s.length > 0), this.isOff = this._states.asObservablePart((s) => s.length === 0);
  }
  /**
   * Add a new state to the state manager
   * @param {StateType} state
   * @memberof UmbStateManager
   */
  addState(t) {
    if (!t.unique) throw new Error("State must have a unique property");
    if (this._states.getValue().find((s) => s.unique === t.unique))
      throw new Error("State with unique already exists");
    this._states.setValue([...this._states.getValue(), t]);
  }
  /**
   * Add multiple states to the state manager
   * @param {StateType[]} states
   * @memberof UmbStateManager
   */
  addStates(t) {
    t.forEach((s) => this.addState(s));
  }
  /**
   * Remove a state from the state manager
   * @param {StateType['unique']} unique
   * @memberof UmbStateManager
   */
  removeState(t) {
    this._states.setValue(this._states.getValue().filter((s) => s.unique !== t));
  }
  /**
   * Remove multiple states from the state manager
   * @param {StateType['unique'][]} uniques
   * @memberof UmbStateManager
   */
  removeStates(t) {
    this._states.setValue(this._states.getValue().filter((s) => !t.includes(s.unique)));
  }
  /**
   * Get all states from the state manager
   * @returns {StateType[]} {StateType[]} All states in the state manager
   * @memberof UmbStateManager
   */
  getStates() {
    return this._states.getValue();
  }
  /**
   * Clear all states from the state manager
   * @memberof UmbStateManager
   */
  clear() {
    this._states.setValue([]);
  }
  destroy() {
    super.destroy(), this._states.destroy();
  }
}
class C extends M {
  constructor() {
    super(...arguments), this.isReadOnly = this.isOn;
  }
}
class wt extends C {
}
export {
  g as UMB_STORAGE_REDIRECT_URL,
  Ot as UmbDeprecation,
  B as UmbDirection,
  K as UmbPaginationManager,
  C as UmbReadOnlyStateManager,
  wt as UmbReadOnlyVariantStateManager,
  mt as UmbSelectionManager,
  M as UmbStateManager,
  tt as aliasToPath,
  $ as blobDownload,
  j as calculateExtrapolatedValue,
  pt as clamp,
  W as debounce,
  Q as decodeFilePath,
  G as distance,
  U as encodeFilePath,
  O as ensureLocalPath,
  Y as ensurePathEndsWithSlash,
  ft as escapeHTML,
  D as formatBytes,
  et as fromCamelCase,
  A as generateAlias,
  Z as getAccumulatedValueOfIndex,
  z as getGuidFromUdi,
  k as getInterpolatedIndexOfPositionInWeightMap,
  F as getProcessedImageUrl,
  J as hasOwnOpener,
  q as imageSize,
  st as incrementString,
  H as inverseLerp,
  X as isWithinRect,
  N as lerp,
  ot as pathFolderName,
  at as removeInitialSlashFromPath,
  lt as removeLastSlashFromPath,
  ct as retrieveStoredPath,
  dt as sanitizeHTML,
  ut as setStoredPath,
  nt as splitStringToArray,
  it as stringOrStringArrayContains,
  rt as stringOrStringArrayIntersects,
  v as toCamelCase,
  ht as transformServerPathToClientPath,
  E as umbDeepMerge,
  Vt as umbUrlPatternToString,
  gt as umbracoPath
};
//# sourceMappingURL=index.js.map
