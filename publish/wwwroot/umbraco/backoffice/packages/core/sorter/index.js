import { isWithinRect as D } from "@umbraco-cms/backoffice/utils";
import { UmbControllerBase as O } from "@umbraco-cms/backoffice/class-api";
const q = 50, M = 16;
function T(o, e) {
  if (!o || !o.getBoundingClientRect) return null;
  let i = o;
  for (; i; ) {
    if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
      const s = getComputedStyle(i);
      if (i.clientHeight < i.scrollHeight && (s.overflowY == "auto" || s.overflowY == "scroll") || i.clientWidth < i.scrollWidth && (s.overflowX == "auto" || s.overflowX == "scroll"))
        return !i.getBoundingClientRect || i === document.body ? null : i;
    }
    if (i.parentNode === document)
      return null;
    i.parentNode instanceof ShadowRoot ? i = i.parentNode.host : i = i.parentNode;
  }
  return null;
}
function x(o, e) {
  const i = e.split(",");
  i.push('[draggable="false"]'), i.forEach(function(s) {
    o.querySelectorAll(s.trim()).forEach(X);
  });
}
function P(o, e) {
  const i = e.split(",");
  i.push('[draggable="false"]'), i.forEach(function(s) {
    o.querySelectorAll(s.trim()).forEach(F);
  });
}
function X(o) {
  console.log("prevent on", o), o.draggable = !1;
}
function F(o) {
  o.draggable = !1;
}
class t extends O {
  constructor(e, i) {
    super(e), this.#r = !1, this.#t = [], this.#o = !0, this.#n = 0, this.#i = 0, this.#h = Array(), this.#w = () => {
      if (this.#r === !1) return;
      const s = (this.#e.containerSelector ? this.#f.shadowRoot.querySelector(this.#e.containerSelector) : this.#f) ?? this.#f;
      this.#s = s, this.#E = this.#s === this.#f;
      const n = this.#E ? this.#s.shadowRoot ?? this.#s : this.#s;
      n.addEventListener("dragover", this.#I), this.#u.disconnect(), n.querySelectorAll(this.#e.itemSelector).forEach((a) => {
        a.matches && a.matches(this.#e.itemSelector) && this.setupItem(a);
      }), this.#u.observe(n, {
        childList: !0,
        subtree: !1
      });
    }, this.#I = (s) => {
      const n = t.dropSorter;
      if (!(!n || n.identifier !== this.identifier))
        if (n === this) {
          s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = "move"), this.#H(s), s.stopPropagation();
          return;
        } else {
          if (this.updateAllowIndication(t.activeItem) === !1)
            return;
          t.dropSorter = this, s.stopPropagation();
        }
    }, this.#R = (s) => {
      const n = s.target, a = s.composedPath();
      if (this.#e.ignorerSelector) {
        if (n.matches(this.#e.ignorerSelector))
          return;
        const h = a.indexOf(n), l = h !== -1 ? a.slice(0, h) : void 0;
        if (l && l.some(
          (E) => E.matches?.('[draggable="false"],' + this.#e.ignorerSelector)
        ))
          return;
      }
      if (s.target && s.button === 0) {
        const h = this.#X(s.target);
        if (!h) return;
        const l = this.#m(h);
        if (!l) return;
        l.addEventListener("mouseup", this.#q), l.draggable = !0;
      }
    }, this.#q = (s) => {
      const n = s.target;
      n && (n.removeEventListener("mouseup", this.#q), n.draggable = !1);
    }, this.#y = (s) => {
      const n = s.target.closest(this.#e.itemSelector);
      if (n) {
        if (t.activeElement && t.activeElement !== n && (console.error("drag start ws cancelled due to another drag was still active"), this.#l()), s.stopPropagation(), s.dataTransfer) {
          const a = t.activeDragElement ?? n, h = a.getBoundingClientRect();
          s.dataTransfer.setDragImage(a, s.clientX - h.x, s.clientY - h.y), s.dataTransfer.dropEffect = "move", s.dataTransfer.effectAllowed = "all";
        }
        if (this.#g || (this.#g = T(this.#s)), this.#T(n), t.activeDragElement?.addEventListener("dragend", this.#l), window.addEventListener("mouseup", this.#c), window.addEventListener("mouseout", this.#c), window.addEventListener("mouseleave", this.#c), window.addEventListener("mousemove", this.#A), t.activeItem = this.getItemOfElement(t.activeElement), t.originalSorter = this, t.originalIndex = this.#t.indexOf(t.activeItem), !t.activeItem) {
          console.error("Could not find item related to this element.", t.activeElement);
          return;
        }
        return t.activeIndex = t.originalIndex, t.activeDragElement.style.transform = "translateZ(0)", this.#e.dataTransferResolver && this.#e.dataTransferResolver(s.dataTransfer, t.activeItem), this.#e.onStart && this.#e.onStart({
          item: t.activeItem,
          element: t.activeElement
        }), t.activeSorter = this, t.dropSorter = this, t.rqaId = requestAnimationFrame(() => {
          t.rqaId = void 0, t.activeDragElement && (t.activeDragElement.style.transform = "");
        }), !0;
      }
    }, this.#l = (s) => {
      t.originalSorter && s?.dataTransfer != null && s.dataTransfer.dropEffect === "none" && t.originalSorter.moveItemInModel(
        t.originalIndex ?? 0,
        t.activeSorter
      ), this.#D();
    }, this.#A = (s) => {
      s.buttons === 0 && this.#D();
    }, this.#c = (s) => {
      this.#D();
    }, this.#x = () => {
      if (t.rqaId = void 0, !t.activeElement || !t.activeItem)
        return;
      if (t.dropSorter !== this)
        throw new Error("Drop sorter is not this sorter");
      const s = t.activeElement.getBoundingClientRect();
      if (D(this.#n, this.#i, s))
        return;
      const a = this.#E ? this.#s.shadowRoot ?? this.#s : this.#s, h = Array.from(a.querySelectorAll(this.#e.itemSelector)), l = this.#s.getBoundingClientRect(), v = [];
      let E = !1;
      for (const r of h) {
        const c = r.getBoundingClientRect();
        if (this.#i >= c.top && this.#i <= c.bottom) {
          const u = this.#m(r);
          if (u) {
            const I = u.getBoundingClientRect();
            r !== t.activeElement ? v.push({ el: r, dragRect: I }) : E = !0;
          }
        }
      }
      let y = 1 / 0, p, d, g = !1;
      v.forEach((r) => {
        const c = r.dragRect.left + r.dragRect.width * 0.5, u = Math.abs(this.#n - c);
        u < y && (p = r.el, d = r.dragRect, y = u, g = this.#n > c);
      });
      let f = this.#t.indexOf(t.activeItem);
      if (f === -1 && (f = null), p) {
        if (p === t.activeElement)
          return;
        const r = this.getItemOfElement(p);
        if (!r)
          throw new Error("Could not find model of found element");
        let c = this.#t.indexOf(r);
        if (c === -1 && (c = null), f !== null && c !== null) {
          const m = Math.max(d.width - s.width, 0);
          f < c && d.left + m < this.#n ? g = !0 : f > c && d.right - m > this.#n && (g = !1);
        }
        const u = this.#e.resolvePlacement ? this.#e.resolvePlacement({
          containerElement: this.#s,
          containerRect: l,
          item: t.activeItem,
          itemIndex: f,
          element: t.activeElement,
          elementRect: s,
          relatedElement: p,
          relatedModel: r,
          relatedRect: d,
          relatedIndex: c,
          placeholderIsInThisRow: E,
          horizontalPlaceAfter: g,
          pointerX: this.#n,
          pointerY: this.#i
        }) : !0;
        if (u === null)
          return;
        let I = !0;
        if (typeof u == "object")
          I = u.verticalDirection ?? !1, g = u.placeAfter;
        else if (I = u ?? !1, I === !0 && (g = this.#i > d.top + d.height * 0.5, f !== null && c !== null)) {
          const m = Math.max(d.height - s.height, 0);
          f < c && this.#i > d.top + m ? g = !0 : f > c && this.#i < d.bottom - m && (g = !1);
        }
        if (I === !0) {
          let m;
          if (g === !1) {
            let R = d.left;
            v.map((w) => {
              w.dragRect.left < R && (R = w.dragRect.left, m = w.el);
            });
          } else {
            let R = d.right;
            v.map((w) => {
              w.dragRect.right > R && (R = w.dragRect.right, m = w.el);
            });
          }
          m && (p = m);
        }
        const A = h.indexOf(p), L = g ? A + 1 : A;
        this.#v(L);
        return;
      }
      if (this.updateAllowIndication(t.activeItem) !== !1) {
        if (this.#t.length === 0)
          this.#v(0);
        else if (this.#i < l.top)
          this.#v(0);
        else if (this.#i > l.bottom)
          this.#v(-1);
        else if (this.#t.length > 1 && f !== null) {
          const c = this.#i > s.bottom === !1 ? this.#p(0, f) : this.#p(f, this.#t.length);
          c && this.#v(c);
        }
      }
    }, this.#d = null, this.#a = document.scrollingElement || document.documentElement, this.autoScrollX = 0, this.autoScrollY = 0, this.#M = () => {
      this.#a.scrollLeft += this.autoScrollX * M, this.#a.scrollTop += this.autoScrollY * M, this.#d = requestAnimationFrame(this.#M);
    }, this.#f = e, i.identifier ??= Symbol(), i.ignorerSelector ??= "a,img,iframe,input,textarea,select,option", !i.placeholderClass && !i.placeholderAttr && (i.placeholderAttr = "drag-placeholder"), this.#e = i, e.addUmbController(this), this.#u = new MutationObserver((s) => {
      s.forEach((n) => {
        n.addedNodes.forEach((a) => {
          a.matches && a.matches(this.#e.itemSelector) && this.setupItem(a);
        }), n.removedNodes.forEach((a) => {
          a.matches && a.matches(this.#e.itemSelector) && this.destroyItem(a);
        });
      });
    });
  }
  #f;
  #r;
  #e;
  #u;
  #t;
  #s;
  #E;
  #g;
  #o;
  #n;
  #i;
  #h;
  get identifier() {
    return this.#e.identifier;
  }
  set identifier(e) {
    this.#e.identifier = e;
  }
  #P() {
    return t.activeSorter?.identifier === this.identifier;
  }
  /**
   * Enables the sorter, this will allow sorting to happen.
   * @returns {*}  {void}
   * @memberof UmbSorterController
   */
  enable() {
    this.#o || (this.#o = !0, this.#r && this.#w());
  }
  /**
   * Disables the sorter, this will prevent any sorting to happen.
   * @returns {*}  {void}
   * @memberof UmbSorterController
   */
  disable() {
    this.#o && (this.#o = !1, this.#r && this.#L());
  }
  setModel(e) {
    this.#t = e ?? [];
  }
  /**
   * Returns the model of the sorter.
   * @returns {Array<T>}
   * @memberof UmbSorterController
   */
  getModel() {
    return this.#t;
  }
  hasItem(e) {
    return this.#t.find((i) => this.#e.getUniqueOfModel(i) === e) !== void 0;
  }
  getItem(e) {
    return this.#t.find((i) => this.#e.getUniqueOfModel(i) === e);
  }
  hostConnected() {
    this.#r = !0, this.#o && requestAnimationFrame(this.#w);
  }
  hostDisconnected() {
    this.#r = !1, this.#o && this.#L();
  }
  #w;
  #L() {
    this.#u.disconnect(), this.#s && ((this.#E ? this.#s.shadowRoot ?? this.#s : this.#s).removeEventListener("dragover", this.#I), this.#s = void 0), this.#h.forEach((e) => this.destroyItem(e));
  }
  #I;
  #m(e) {
    return this.#e.draggableSelector ? (e.shadowRoot ?? e).querySelector(this.#e.draggableSelector) ?? e : e;
  }
  #O(e) {
    return this.#e.handleSelector ? (e.shadowRoot ?? e).querySelector(this.#e.handleSelector) ?? e : e;
  }
  #X(e) {
    let i = e, s = null;
    for (; !s; )
      if (s = i.closest(this.#e.itemSelector), !s) {
        const n = i.getRootNode().host, a = i === n ? i.parentElement?.getRootNode()?.host : n;
        if (a)
          i = a;
        else
          return null;
      }
    return s;
  }
  setupItem(e) {
    if (this.#e.ignorerSelector && x(e, this.#e.ignorerSelector), !this.#e.disabledItemSelector || !e.matches(this.#e.disabledItemSelector)) {
      const i = this.#m(e);
      this.#O(e).addEventListener("mousedown", this.#R), i.draggable = !1, i.addEventListener("dragstart", this.#y), i.addEventListener("dragend", this.#l);
    }
    if (t.activeItem && this.#P()) {
      const i = this.#e.getUniqueOfElement(e), s = this.#e.getUniqueOfModel(t.activeItem);
      i === s && i !== void 0 && t.activeElement !== e && this.#T(e);
    }
    this.#h.push(e), this.#h = Array.from(new Set(this.#h));
  }
  destroyItem(e) {
    this.#e.ignorerSelector && P(e, this.#e.ignorerSelector);
    const i = this.#m(e);
    i.removeEventListener("dragstart", this.#y), i.removeEventListener("dragend", this.#l), this.#O(e).removeEventListener("mousedown", this.#R), i.draggable = !1, this.#h = this.#h.filter((n) => n !== e);
  }
  #F() {
    this.#e.placeholderClass && t.activeElement?.classList.add(this.#e.placeholderClass), this.#e.placeholderAttr && t.activeElement?.setAttribute(this.#e.placeholderAttr, "");
  }
  #B() {
    this.#e.placeholderClass && t.activeElement?.classList.remove(this.#e.placeholderClass), this.#e.placeholderAttr && t.activeElement?.removeAttribute(this.#e.placeholderAttr);
  }
  #T(e) {
    if (t.activeElement = e, t.activeDragElement = this.#m(e), !t.activeDragElement)
      throw new Error(
        'Could not find drag element, query was made with the `draggableSelector` of "' + this.#e.draggableSelector + '"'
      );
    this.#F();
  }
  #R;
  #q;
  #y;
  #l;
  #A;
  #c;
  #D() {
    if (!t.activeElement || !t.activeItem)
      return;
    const e = t.activeElement;
    t.activeDragElement && (t.activeDragElement.style.transform = "", t.activeDragElement.draggable = !1, t.activeDragElement.removeEventListener("dragend", this.#l)), window.removeEventListener("mouseup", this.#c), window.removeEventListener("mouseout", this.#c), window.removeEventListener("mouseleave", this.#c), window.removeEventListener("mousemove", this.#A), this.#B(), this.#W(), this.removeAllowIndication(), this.#e.onEnd && this.#e.onEnd({
      item: t.activeItem,
      element: e
    }), t.rqaId && (cancelAnimationFrame(t.rqaId), t.rqaId = void 0), t.activeItem = void 0, t.activeElement = void 0, t.activeDragElement = void 0, t.activeSorter = void 0, t.dropSorter = void 0, t.originalIndex = void 0, t.originalSorter = void 0, this.#n = 0, this.#i = 0;
  }
  #H(e) {
    if (!t.activeElement)
      return;
    const i = e.touches ? e.touches[0].clientX : e.clientX, s = e.touches ? e.touches[0].clientY : e.clientY;
    if (i !== 0 && s !== 0) {
      if (this.#n === i && this.#i === s)
        return;
      this.#n = i, this.#i = s, this.handleAutoScroll(this.#n, this.#i);
      const n = t.activeDragElement.getBoundingClientRect();
      D(this.#n, this.#i, n) || t.rqaId === void 0 && (t.rqaId = requestAnimationFrame(this.#x));
    }
  }
  #x;
  #p(e, i) {
    if (e === i)
      return e;
    const s = e + Math.round((i - e) * 0.5);
    if (s === e || s === i)
      return i;
    const n = this.#Y(s);
    if (n === null)
      throw new Error("Could not determine if below target");
    return n ? this.#p(s, i) : this.#p(e, s);
  }
  #Y(e) {
    if (e > 0 && e < this.#t.length) {
      const i = this.getElementOfItem(this.#t[e]);
      if (i)
        return this.#i > i?.getBoundingClientRect().bottom;
    }
    return null;
  }
  //
  async #v(e) {
    if (!t.activeElement || !t.activeSorter)
      return;
    const i = t.dropSorter;
    if (!i)
      throw new Error("Could not find requestingSorter");
    if (i !== this)
      throw new Error("Requesting sorter is not this sorter");
    i === t.activeSorter && t.activeIndex === e || await i.moveItemInModel(e, t.activeSorter);
  }
  /** Management methods: */
  getItemOfElement(e) {
    if (!e)
      throw new Error("Element was not defined");
    const i = this.#e.getUniqueOfElement(e);
    if (i === void 0) {
      console.error("Could not find unique of element", e);
      return;
    }
    return this.#t.find((s) => i === this.#e.getUniqueOfModel(s));
  }
  getElementOfItem(e) {
    const i = this.#e.getUniqueOfModel(e);
    if (i === void 0) {
      console.error("Sorter could not find unique of item", e);
      return;
    }
    return this.#h.find((s) => i === this.#e.getUniqueOfElement(s));
  }
  async removeItem(e) {
    if (!e)
      return !1;
    if (this.#e.performItemRemove)
      return await this.#e.performItemRemove({ item: e }) ?? !1;
    {
      const i = this.#t.indexOf(e);
      if (i !== -1) {
        const s = [...this.#t];
        return s.splice(i, 1), this.#t = s, this.#e.onChange?.({ model: s, item: e }), !0;
      }
    }
    return !1;
  }
  hasOtherItemsThan(e) {
    return this.#t.filter((i) => i !== e).length > 0;
  }
  async moveItemInModel(e, i) {
    if (!t.activeItem)
      return console.error("There is no active item to move"), !1;
    const s = this.#e.getUniqueOfModel(t.activeItem);
    if (!s)
      return console.error("Failed to retrieve active item unique"), !1;
    const n = i.getItem(s);
    if (!n)
      return console.error("Could not find item of model to move", s, this.#t), !1;
    if (this.notifyRequestDrop({ item: n }) === !1)
      return !1;
    const a = i === this;
    if (!a) {
      if (await i.removeItem(n) !== !0)
        return console.error("Sync could not remove item when moving to a new container"), !1;
      if (this.#e.performItemInsert) {
        if (await this.#e.performItemInsert({ item: n, newIndex: e }) === !1)
          return console.error("Sync could not insert after a move a new container"), !1;
      } else {
        const h = [...this.#t];
        h.splice(e, 0, n), this.#t = h, this.#e.onContainerChange?.({
          model: h,
          item: n,
          from: i
        }), this.#e.onChange?.({ model: h, item: n }), t.activeSorter = this, t.dropSorter = this, t.activeIndex = e;
      }
      return !0;
    }
    if (a) {
      const h = this.#t.indexOf(n);
      if (h === -1)
        return console.error("Could not find item in model when performing internal move", this.getHostElement(), this.#t), !1;
      if (this.#e.performItemMove) {
        if (await this.#e.performItemMove({ item: n, newIndex: e, oldIndex: h }) === !1)
          return !1;
      } else {
        const l = [...this.#t];
        l.splice(h, 1), h <= e && e--, l.splice(e, 0, n), this.#t = l, this.#e.onChange?.({ model: l, item: n });
      }
      t.activeIndex = e;
    }
    return !0;
  }
  updateAllowIndication(e) {
    return t.lastIndicationSorter && t.lastIndicationSorter !== this && t.lastIndicationSorter.notifyAllowed(), t.lastIndicationSorter = this, this.notifyRequestDrop({ item: e }) === !0 ? (this.notifyAllowed(), !0) : (this.notifyDisallowed(), !1);
  }
  removeAllowIndication() {
    t.lastIndicationSorter && t.lastIndicationSorter.notifyAllowed(), t.lastIndicationSorter = void 0;
  }
  #d;
  #a;
  handleAutoScroll(e, i) {
    let s = null;
    this.#g ? (this.#a = this.#g, s = this.#a.getBoundingClientRect()) : (this.#a = document.scrollingElement || document.documentElement, s = {
      top: 0,
      left: 0,
      bottom: window.innerHeight,
      right: window.innerWidth,
      height: window.innerHeight,
      width: window.innerWidth
    });
    const n = this.#a.scrollWidth, a = this.#a.scrollHeight, h = s.width < n, l = s.height < a, v = this.#a.scrollLeft, E = this.#a.scrollTop;
    cancelAnimationFrame(this.#d), (h || l) && (this.autoScrollX = Math.abs(s.right - e) <= q && v + s.width < n ? 1 : Math.abs(s.left - e) <= q && v ? -1 : 0, this.autoScrollY = Math.abs(s.bottom - i) <= q && E + s.height < a ? 1 : Math.abs(s.top - i) <= q && E ? -1 : 0, this.#d = requestAnimationFrame(this.#M));
  }
  #M;
  #W() {
    cancelAnimationFrame(this.#d), this.#d = null;
  }
  notifyDisallowed() {
    this.#e.onDisallowed && this.#e.onDisallowed({
      item: t.activeItem,
      element: t.activeElement
    });
  }
  notifyAllowed() {
    this.#e.onAllowed && this.#e.onAllowed({
      item: t.activeItem,
      element: t.activeElement
    });
  }
  notifyRequestDrop(e) {
    return this.#e.onRequestMove ? this.#e.onRequestMove(e) || !1 : !0;
  }
  destroy() {
    super.destroy(), t.activeElement && this.#l(), t.lastIndicationSorter = void 0, this.#u.disconnect(), this.#g = null;
  }
}
function Y(o) {
  return o.itemIndex !== null && o.relatedIndex !== null && o.relatedRect.left < o.pointerX && o.relatedRect.right > o.pointerX ? {
    placeAfter: o.itemIndex < o.relatedIndex
  } : !1;
}
export {
  t as UmbSorterController,
  Y as UmbSorterResolvePlacementAsGrid
};
//# sourceMappingURL=index.js.map
