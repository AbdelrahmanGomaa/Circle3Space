import { UmbContextToken as Kt } from "@umbraco-cms/backoffice/context-api";
import { UmbModalToken as Qt, UmbModalBaseElement as Ze, UMB_MODAL_MANAGER_CONTEXT as Bi, umbConfirmModal as Vn } from "@umbraco-cms/backoffice/modal";
import { U as ft, d as Yn, a as Jt, e as ti } from "./media-item.store.context-token-9YLCPlu1.js";
import { UmbTreeServerDataSourceBase as Gn, UmbTreeRepositoryBase as Xn, UMB_TREE_PICKER_MODAL_ALIAS as Kn } from "@umbraco-cms/backoffice/tree";
import { a as Qn } from "./media-url.repository-DUerHiJb.js";
import { UMB_SECTION_PATH_PATTERN as Jn } from "@umbraco-cms/backoffice/section";
import { UMB_WORKSPACE_MODAL as ji, UMB_WORKSPACE_PATH_PATTERN as Zn } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as ei, UmbPathPattern as Li } from "@umbraco-cms/backoffice/router";
import { UmbPickerInputContext as to } from "@umbraco-cms/backoffice/picker-input";
import { css as P, query as Z, state as l, property as p, customElement as z, nothing as k, classMap as eo, ifDefined as Et, html as r, when as Hi, repeat as st } from "@umbraco-cms/backoffice/external/lit";
import { clamp as U, calculateExtrapolatedValue as he, inverseLerp as io, lerp as ao, debounce as no, UmbPaginationManager as oo, splitStringToArray as so, stringOrStringArrayContains as Ri } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as C } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as V } from "@umbraco-cms/backoffice/lit-element";
import { UmbSorterController as Vi, UmbSorterResolvePlacementAsGrid as Yi } from "@umbraco-cms/backoffice/sorter";
import { UmbFormControlMixin as ii, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as Gi } from "@umbraco-cms/backoffice/validation";
import { getUmbracoFolderUnique as ro, UmbMediaTypeStructureRepository as po, isUmbracoFolder as lo, UMB_MEDIA_TYPE_ENTITY_TYPE as co } from "@umbraco-cms/backoffice/media-type";
import "@umbraco-cms/backoffice/imaging";
import { MediaService as Pt } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemServerDataSourceBase as uo, UmbItemRepositoryBase as ho, UmbRepositoryItemsManager as mo } from "@umbraco-cms/backoffice/repository";
import { tryExecuteAndNotify as Xi } from "@umbraco-cms/backoffice/resources";
import { UmbId as ai } from "@umbraco-cms/backoffice/id";
import { UmbControllerBase as Ki } from "@umbraco-cms/backoffice/class-api";
import { UMB_CONTENT_PROPERTY_CONTEXT as vo } from "@umbraco-cms/backoffice/content";
import { assignToFrozenObject as fo } from "@umbraco-cms/backoffice/observable-api";
import { UmbInputDropzoneDashedStyles as Qi, UmbFileDropzoneItemStatus as Ji } from "@umbraco-cms/backoffice/dropzone";
import { UmbTextStyles as Zi } from "@umbraco-cms/backoffice/style";
import { UmbTemporaryFileConfigRepository as go } from "@umbraco-cms/backoffice/temporary-file";
import { UMB_APP_CONTEXT as ta } from "@umbraco-cms/backoffice/app";
import { drag as xo } from "@umbraco-cms/backoffice/external/uui";
import { UmbExtensionsManifestInitializer as _o } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as yo } from "@umbraco-cms/backoffice/extension-registry";
const ir = new Kt("UmbCollectionContext"), ar = new Qt("Umb.Modal.Media.CreateOptions", {
  modal: {
    type: "sidebar",
    size: "small"
  }
});
class ni extends Event {
  static {
    this.TYPE = "focalpoint-change";
  }
  constructor(e, i) {
    super(ni.TYPE, { bubbles: !1, composed: !1, cancelable: !1, ...i }), this.focalPoint = e;
  }
}
var bo = Object.defineProperty, wo = Object.getOwnPropertyDescriptor, ea = (t) => {
  throw TypeError(t);
}, Y = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? wo(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && bo(e, i, a), a;
}, oi = (t, e, i) => e.has(t) || ea("Cannot " + i), dt = (t, e, i) => (oi(t, e, "read from private field"), i ? i.call(t) : e.get(t)), $e = (t, e, i) => e.has(t) ? ea("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), ko = (t, e, i, n) => (oi(t, e, "write to private field"), e.set(t, i), i), y = (t, e, i) => (oi(t, e, "access private method"), i), ct, Ht, g, ia, aa, na, ut, si, oa, ri, Se, sa, ra;
let F = class extends V {
  constructor() {
    super(...arguments), $e(this, g), this._isDraggingGridHandle = !1, this.coords = { x: 0, y: 0 }, $e(this, ct, { left: 0.5, top: 0.5 }), this.hideFocalPoint = !1, this.disabled = !1, $e(this, Ht, 8);
  }
  set focalPoint(t) {
    ko(this, ct, t), y(this, g, si).call(this, dt(this, ct).left, dt(this, ct).top), y(this, g, aa).call(this);
  }
  get focalPoint() {
    return dt(this, ct);
  }
  update(t) {
    super.update(t), t.has("src") && this.src && y(this, g, ia).call(this);
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.style.setProperty("--dot-radius", `${dt(this, Ht)}px`);
  }
  render() {
    return this.src ? r`
			<div
				id="wrapper"
				@click=${y(this, g, sa)}
				@mousedown=${y(this, g, Se)}
				@touchstart=${y(this, g, Se)}>
				<img id="image" @keydown=${() => k} src=${this.src} alt="" />
				<span
					id="focal-point"
					class=${eo({
      "focal-point--dragging": this._isDraggingGridHandle,
      hidden: this.hideFocalPoint
    })}
					tabindex=${Et(this.disabled ? void 0 : "0")}
					aria-label="${this.localize.term("general_focalPoint")}"
					@keydown=${y(this, g, ra)}>
				</span>
			</div>
		` : k;
  }
};
ct = /* @__PURE__ */ new WeakMap();
Ht = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakSet();
ia = async function() {
  await this.updateComplete, this.hideFocalPoint || y(this, g, si).call(this, this.focalPoint.left, this.focalPoint.top), this.imageElement.onload = () => {
    if (!this.imageElement || !this.wrapperElement) return;
    const t = this.imageElement.naturalWidth / this.imageElement.naturalHeight, e = this.getBoundingClientRect(), i = this.imageElement.getBoundingClientRect();
    i.width > e.width && (this.imageElement.style.width = "100%"), i.height > e.height && (this.imageElement.style.height = "100%"), y(this, g, ri).call(this), this.imageElement.style.aspectRatio = `${t}`, this.wrapperElement.style.aspectRatio = `${t}`;
  };
};
aa = function() {
  y(this, g, oa).call(this, dt(this, ct)) && y(this, g, ri).call(this);
};
na = function(t, e) {
  const i = e / 100 / e * 50, n = t / 100 / t * 50;
  return { top: i, left: n };
};
ut = function(t, e, i, n) {
  const a = U(t / i, 0, 1), o = U(e / n, 0, 1);
  y(this, g, na).call(this, t, e);
  const s = { left: a, top: o };
  this.dispatchEvent(new ni(s));
};
si = function(t, e) {
  this.focalPointElement && (this.focalPointElement.style.left = `calc(${t * 100}% - ${dt(this, Ht)}px)`, this.focalPointElement.style.top = `calc(${e * 100}% - ${dt(this, Ht)}px)`);
};
oa = function(t) {
  if (this.focalPoint)
    return t.left === 0.5 && t.top === 0.5;
};
ri = function() {
  this.imageElement && (this.coords.x = this.imageElement?.clientWidth / 2, this.coords.y = this.imageElement.clientHeight / 2);
};
Se = function(t) {
  if (this.disabled || this.hideFocalPoint || t.button !== 0)
    return;
  const e = this.wrapperElement, i = this.focalPointElement;
  if (!e) return;
  const { width: n, height: a } = e.getBoundingClientRect();
  i?.focus(), t.preventDefault(), t.stopPropagation(), this._isDraggingGridHandle = !0, xo(e, {
    onMove: (o, s) => {
      isNaN(o) || isNaN(s) || (this.coords.x = o, this.coords.y = s, y(this, g, ut).call(this, o, s, n, a));
    },
    onStop: () => this._isDraggingGridHandle = !1,
    initialEvent: t
  });
};
sa = function(t) {
  if (this.disabled || this.hideFocalPoint || t.button !== 0)
    return;
  const e = this.wrapperElement, i = this.focalPointElement;
  if (!e) return;
  i?.focus();
  const n = e.getBoundingClientRect(), a = e.ownerDocument.defaultView, { width: o, height: s } = e.getBoundingClientRect(), c = n.left + a.scrollX, v = n.top + a.scrollY, _ = t.pageX - c, et = t.pageY - v;
  y(this, g, ut).call(this, _, et, o, s);
};
ra = function(t) {
  if (this.disabled || this.hideFocalPoint) return;
  const e = t.shiftKey ? 1 : 10, i = this.wrapperElement;
  if (!i) return;
  const { width: n, height: a } = i.getBoundingClientRect();
  t.key === "ArrowLeft" && (t.preventDefault(), this.coords.x = U(this.coords.x - e, 0, n), y(this, g, ut).call(this, this.coords.x, this.coords.y, n, a)), t.key === "ArrowRight" && (t.preventDefault(), this.coords.x = U(this.coords.x + e, 0, n), y(this, g, ut).call(this, this.coords.x, this.coords.y, n, a)), t.key === "ArrowUp" && (t.preventDefault(), this.coords.y = U(this.coords.y - e, 0, a), y(this, g, ut).call(this, this.coords.x, this.coords.y, n, a)), t.key === "ArrowDown" && (t.preventDefault(), this.coords.y = U(this.coords.y + e, 0, a), y(this, g, ut).call(this, this.coords.x, this.coords.y, n, a));
};
F.styles = P`
		:host {
			display: flex;
			width: 100%;
			height: 100%;
			position: relative;
			user-select: none;
			background-color: var(--uui-color-surface);
			outline: 1px solid var(--uui-color-border);
		}
		/* Wrapper is used to make the focal point position responsive to the image size */
		#wrapper {
			position: relative;
			display: flex;
			margin: auto;
			max-width: 100%;
			max-height: 100%;
			box-sizing: border-box;
			forced-color-adjust: none;
		}
		:host(:not([hidefocalpoint])) #wrapper {
			cursor: crosshair;
		}
		#image {
			margin: auto;
			position: relative;
		}
		#focal-point {
			content: '';
			display: block;
			position: absolute;
			width: calc(2 * var(--dot-radius));
			height: calc(2 * var(--dot-radius));
			top: 0;
			box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
			border: solid 2px white;
			border-radius: 50%;
			pointer-events: none;
			background-color: var(--uui-palette-spanish-pink-light);
			transition: 150ms transform;
			box-sizing: inherit;
		}
		.focal-point--dragging {
			cursor: none;
			transform: scale(1.5);
		}
		#focal-point.hidden {
			display: none;
		}
	`;
Y([
  Z("#image")
], F.prototype, "imageElement", 2);
Y([
  Z("#wrapper")
], F.prototype, "wrapperElement", 2);
Y([
  Z("#focal-point")
], F.prototype, "focalPointElement", 2);
Y([
  l()
], F.prototype, "_isDraggingGridHandle", 2);
Y([
  l()
], F.prototype, "coords", 2);
Y([
  p({ attribute: !1 })
], F.prototype, "focalPoint", 1);
Y([
  p({ type: Boolean })
], F.prototype, "hideFocalPoint", 2);
Y([
  p({ type: Boolean, reflect: !0 })
], F.prototype, "disabled", 2);
Y([
  p({ type: String })
], F.prototype, "src", 2);
F = Y([
  z("umb-image-cropper-focus-setter")
], F);
var $o = Object.defineProperty, Mo = Object.getOwnPropertyDescriptor, pa = (t) => {
  throw TypeError(t);
}, gt = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Mo(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && $o(e, i, a), a;
}, pi = (t, e, i) => e.has(t) || pa("Cannot " + i), Ie = (t, e, i) => (pi(t, e, "read from private field"), i ? i.call(t) : e.get(t)), Fi = (t, e, i) => e.has(t) ? pa("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Eo = (t, e, i, n) => (pi(t, e, "write to private field"), e.set(t, i), i), Oe = (t, e, i) => (pi(t, e, "access private method"), i), Mt, Nt, la, li;
let K = class extends V {
  constructor() {
    super(...arguments), Fi(this, Nt), this.src = "", Fi(this, Mt, { left: 0.5, top: 0.5 });
  }
  set focalPoint(t) {
    Eo(this, Mt, t), Oe(this, Nt, li).call(this);
  }
  get focalPoint() {
    return Ie(this, Mt);
  }
  connectedCallback() {
    super.connectedCallback(), Oe(this, Nt, la).call(this);
  }
  render() {
    return this.crop ? r`
			<div id="container">
				<img id="image" src=${this.src} alt="" />
			</div>
			<span id="alias">
				${this.crop.label !== void 0 ? this.localize.string(this.crop.label) : this.label ?? this.crop.alias}
			</span>
			<span id="dimensions">${this.crop.width} x ${this.crop.height}</span>
			${this.crop.coordinates ? r`<span id="user-defined"><umb-localize key="imagecropper_customCrop">User defined</umb-localize></span>` : k}
		` : r`<span id="label">${this.label}</span>`;
  }
};
Mt = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakSet();
la = async function() {
  if (!this.crop) return;
  await this.updateComplete, await new Promise((_) => this.imageElement.onload = () => _(this.imageElement));
  const t = this.imageContainerElement.getBoundingClientRect(), e = this.crop.width / this.crop.height, i = this.imageElement.naturalWidth / this.imageElement.naturalHeight;
  let n = 0, a = 0, o = 0, s = 0, c = 0, v = 0;
  if (e > 1 ? (n = t.width, a = t.width / e) : (n = t.height * e, a = t.height), this.crop.coordinates) {
    if (e > 1) {
      const _ = this.crop.coordinates.x1 + this.crop.coordinates.x2;
      o = he(n, _), s = o / i, v = -s * this.crop.coordinates.y1, c = -o * this.crop.coordinates.x1;
    } else {
      const _ = this.crop.coordinates.y1 + this.crop.coordinates.y2;
      s = he(a, _), o = s * i, v = -s * this.crop.coordinates.y1, c = -o * this.crop.coordinates.x1;
    }
    v = v / a * 100, c = c / n * 100, this.imageElement.style.top = `${v}%`, this.imageElement.style.left = `${c}%`;
  } else
    i > e ? (s = a, o = s * i) : (o = n, s = o / i), Oe(this, Nt, li).call(this, o, s, n, a);
  this.imageContainerElement.style.width = `${n}px`, this.imageContainerElement.style.aspectRatio = `${e}`, o = o / n * 100, s = s / a * 100, this.imageElement.style.width = `${o}%`, this.imageElement.style.height = `${s}%`;
};
li = function(t, e, i, n) {
  if (!this.crop || !this.imageElement || !this.imageContainerElement || this.crop.coordinates) return;
  if (!t || !e) {
    const s = this.imageElement.getBoundingClientRect();
    t = s.width, e = s.height;
  }
  if (!i || !n) {
    const s = this.imageContainerElement.getBoundingClientRect();
    i = s.width, n = s.height;
  }
  let a = i / 2 - t * Ie(this, Mt).left, o = n / 2 - e * Ie(this, Mt).top;
  a = U(a, i - t, 0), o = U(o, n - e, 0), a = a / i * 100, o = o / n * 100, this.imageElement.style.top = `${o}%`, this.imageElement.style.left = `${a}%`;
};
K.styles = P`
		:host {
			display: flex;
			flex-direction: column;
			padding: var(--uui-size-space-4);
			border-radius: var(--uui-border-radius);
			background-color: var(--uui-color-surface);
			cursor: pointer;
		}
		:host(:hover) {
			background-color: var(--uui-color-surface-alt);
		}
		#container {
			display: flex;
			width: 100%;
			aspect-ratio: 1;
			overflow: hidden;
			position: relative;
			overflow: hidden;
			margin: auto;
			max-width: 100%;
			max-height: 200px;
			user-select: none;
		}
		#label {
			font-weight: bold;
		}
		#alias {
			font-weight: bold;
			margin-top: var(--uui-size-space-3);
		}
		#dimensions,
		#user-defined {
			font-size: 0.8em;
		}
		#image {
			position: absolute;
			pointer-events: none;
		}
	`;
gt([
  Z("#image")
], K.prototype, "imageElement", 2);
gt([
  Z("#container")
], K.prototype, "imageContainerElement", 2);
gt([
  p({ type: Object, attribute: !1 })
], K.prototype, "crop", 2);
gt([
  p({ type: String, attribute: !1 })
], K.prototype, "src", 2);
gt([
  p({ type: String })
], K.prototype, "label", 2);
gt([
  p({ attribute: !1 })
], K.prototype, "focalPoint", 1);
K = gt([
  z("umb-image-cropper-preview")
], K);
class Zt extends Event {
  static {
    this.TYPE = "imagecrop-change";
  }
  constructor(e) {
    super(Zt.TYPE, { bubbles: !1, composed: !1, cancelable: !1, ...e });
  }
}
var To = Object.defineProperty, Co = Object.getOwnPropertyDescriptor, ca = (t) => {
  throw TypeError(t);
}, tt = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Co(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && To(e, i, a), a;
}, ci = (t, e, i) => e.has(t) || ca("Cannot " + i), m = (t, e, i) => (ci(t, e, "read from private field"), i ? i.call(t) : e.get(t)), E = (t, e, i) => e.has(t) ? ca("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), ht = (t, e, i, n) => (ci(t, e, "write to private field"), e.set(t, i), i), f = (t, e, i) => (ci(t, e, "access private method"), i), di, ui, Ae, mt, Vt, Bt, Ot, ie, ae, h, Re, da, ua, Fe, De, hi, ha, at, ma, va, fa, ga, ye, ne, oe, be;
let B = class extends V {
  constructor() {
    super(...arguments), E(this, h), this.src = "", this.focalPoint = {
      left: 0.5,
      top: 0.5
    }, this._zoom = 0, E(this, di, 50), E(this, ui, 4), E(this, Ae, 1e-3), E(this, mt, 0), E(this, Vt, 0), E(this, Bt, 0), E(this, Ot, !1), E(this, ie, 0), E(this, ae, 0), E(this, ye, (t) => {
      t.preventDefault(), ht(this, Ot, !0);
      const e = this.imageElement.getBoundingClientRect(), i = this.viewportElement.getBoundingClientRect();
      ht(this, ie, t.clientX - e.left + i.left), ht(this, ae, t.clientY - e.top + i.top), window.addEventListener("mousemove", m(this, ne)), window.addEventListener("mouseup", m(this, oe));
    }), E(this, ne, (t) => {
      if (m(this, Ot)) {
        const e = t.clientX - m(this, ie), i = t.clientY - m(this, ae);
        f(this, h, hi).call(this, i, e);
      }
    }), E(this, oe, () => {
      ht(this, Ot, !1), window.removeEventListener("mousemove", m(this, ne)), window.removeEventListener("mouseup", m(this, oe));
    }), E(this, be, (t) => {
      t.preventDefault(), f(this, h, De).call(this, t.deltaY * -m(this, Ae), t.clientX, t.clientY);
    });
  }
  get zoom() {
    return this._zoom;
  }
  set zoom(t) {
    const e = t - this._zoom;
    f(this, h, De).call(this, e);
  }
  connectedCallback() {
    super.connectedCallback(), f(this, h, Fe).call(this), f(this, h, da).call(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), f(this, h, ua).call(this);
  }
  updated(t) {
    super.updated(t), t.has("value") && f(this, h, Fe).call(this);
  }
  render() {
    return r`
			<div id="viewport">
				<img id="image" src=${this.src} alt="" />
				<div id="mask"></div>
			</div>
			<uui-slider
				@input=${f(this, h, ga)}
				.value=${this._zoom.toString()}
				hide-step-values
				id="slider"
				type="range"
				min="0"
				max="1"
				value="0"
				step="0.001">
			</uui-slider>
			<div id="actions">
				<uui-button @click=${f(this, h, fa)} label="${this.localize.term("imagecropper_reset")}"></uui-button>
				<uui-button
					look="secondary"
					@click=${f(this, h, va)}
					label="${this.localize.term("general_cancel")}"></uui-button>
				<uui-button
					look="primary"
					color="positive"
					@click=${f(this, h, ma)}
					label="${this.localize.term("buttons_save")}"></uui-button>
			</div>
		`;
  }
};
di = /* @__PURE__ */ new WeakMap();
ui = /* @__PURE__ */ new WeakMap();
Ae = /* @__PURE__ */ new WeakMap();
mt = /* @__PURE__ */ new WeakMap();
Vt = /* @__PURE__ */ new WeakMap();
Bt = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
ie = /* @__PURE__ */ new WeakMap();
ae = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
Re = function() {
  return ao(m(this, mt), m(this, Vt), this._zoom);
};
da = async function() {
  await this.updateComplete, this.imageElement.addEventListener("mousedown", m(this, ye)), this.addEventListener("wheel", m(this, be), { passive: !1 });
};
ua = function() {
  this.imageElement.removeEventListener("mousedown", m(this, ye)), this.removeEventListener("wheel", m(this, be));
};
Fe = async function() {
  if (!this.value) return;
  await this.updateComplete, this.imageElement.complete || await new Promise((W) => this.imageElement.onload = () => W(this.imageElement));
  const t = this.viewportElement.clientWidth, e = this.viewportElement.clientHeight, i = t / e, n = this.value.width / this.value.height;
  let a = 0, o = 0, s = 0, c = 0, v = 0, _ = 0;
  {
    const W = 2 * m(this, di), L = t - W, Ut = e - W, Ai = n > i;
    a = Ai ? L : Ut * n, o = Ai ? L / n : Ut;
  }
  const et = (t - a) / 2, yt = (e - o) / 2;
  this.maskElement.style.width = `${a}px`, this.maskElement.style.height = `${o}px`, this.maskElement.style.left = `${et}px`, this.maskElement.style.top = `${yt}px`;
  {
    const W = a / this.imageElement.naturalWidth, L = o / this.imageElement.naturalHeight, Ut = Math.max(W, L);
    ht(this, mt, Ut), ht(this, Vt, Ut * m(this, ui));
  }
  if (this.value.coordinates) {
    const W = this.imageElement.naturalWidth / this.imageElement.naturalHeight;
    if (n > 1) {
      const L = this.value.coordinates.x1 + this.value.coordinates.x2;
      s = he(a, L), c = s / W, v = -s * this.value.coordinates.x1 + et, _ = -c * this.value.coordinates.y1 + yt;
    } else {
      const L = this.value.coordinates.y1 + this.value.coordinates.y2;
      c = he(o, L), s = c * W, v = -s * this.value.coordinates.x1 + et, _ = -c * this.value.coordinates.y1 + yt;
    }
  } else {
    s = this.imageElement.naturalWidth * m(this, mt), c = this.imageElement.naturalHeight * m(this, mt), v = et + a / 2 - s * this.focalPoint.left, _ = yt + o / 2 - c * this.focalPoint.top;
    const W = et + a - s, L = yt + o - c;
    v = U(v, W, et), _ = U(_, L, yt);
  }
  this.imageElement.style.left = `${v}px`, this.imageElement.style.top = `${_}px`, this.imageElement.style.width = `${s}px`, this.imageElement.style.height = `${c}px`;
  const jn = s / this.imageElement.naturalWidth, Ln = c / this.imageElement.naturalHeight, Hn = Math.max(jn, Ln);
  this._zoom = io(m(this, mt), m(this, Vt), Hn);
};
De = function(t, e, i) {
  ht(this, Bt, m(this, h, Re)), this._zoom = U(this._zoom + t, 0, 1);
  const n = m(this, h, Re), a = this.maskElement.getBoundingClientRect(), o = this.imageElement.getBoundingClientRect();
  let s = { left: 0, top: 0 };
  e && i ? s = f(this, h, at).call(this, e, i) : s = f(this, h, at).call(this, a.left + a.width / 2, a.top + a.height / 2);
  const c = f(this, h, at).call(this, o.left, o.top), v = s.left - (s.left - c.left) * (n / m(this, Bt)), _ = s.top - (s.top - c.top) * (n / m(this, Bt));
  this.imageElement.style.width = `${this.imageElement.naturalWidth * n}px`, this.imageElement.style.height = `${this.imageElement.naturalHeight * n}px`, f(this, h, hi).call(this, _, v);
};
hi = function(t, e) {
  const i = this.maskElement.getBoundingClientRect(), n = this.imageElement.getBoundingClientRect(), a = f(this, h, at).call(this, i.left + i.width - n.width, 0).left, o = f(this, h, at).call(this, i.left, 0).left, s = f(this, h, at).call(this, 0, i.top + i.height - n.height).top, c = f(this, h, at).call(this, 0, i.top).top;
  e = U(e, a, o), t = U(t, s, c), this.imageElement.style.left = `${e}px`, this.imageElement.style.top = `${t}px`;
};
ha = function() {
  const t = { x1: 0, y1: 0, x2: 0, y2: 0 }, e = this.maskElement.getBoundingClientRect(), i = this.imageElement.getBoundingClientRect();
  return t.x1 = (e.left - i.left) / i.width, t.y1 = (e.top - i.top) / i.height, t.x2 = Math.abs((e.right - i.right) / i.width), t.y2 = Math.abs((e.bottom - i.bottom) / i.height), t;
};
at = function(t, e) {
  const i = this.viewportElement.getBoundingClientRect();
  return {
    left: t - i.left,
    top: e - i.top
  };
};
ma = function() {
  if (!this.value) return;
  const { x1: t, x2: e, y1: i, y2: n } = f(this, h, ha).call(this);
  this.value = {
    ...this.value,
    coordinates: { x1: t, x2: e, y1: i, y2: n }
  }, this.dispatchEvent(new Zt());
};
va = function() {
  this.dispatchEvent(new Zt());
};
fa = function() {
  this.value && (delete this.value.coordinates, this.dispatchEvent(new Zt()));
};
ga = function(t) {
  const e = t.target;
  this.zoom = Number(e.value);
};
ye = /* @__PURE__ */ new WeakMap();
ne = /* @__PURE__ */ new WeakMap();
oe = /* @__PURE__ */ new WeakMap();
be = /* @__PURE__ */ new WeakMap();
B.styles = P`
		:host {
			display: grid;
			grid-template-rows: 1fr auto auto;
			gap: var(--uui-size-space-3);
			height: 100%;
			width: 100%;
		}
		#viewport {
			background-color: #fff;
			background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
			background-repeat: repeat;
			background-size: 10px 10px;
			contain: strict;
			overflow: hidden;
			position: relative;
			width: 100%;
			height: 100%;
			outline: 1px solid var(--uui-color-border);
			border-radius: var(--uui-border-radius);
		}
		#actions {
			display: flex;
			justify-content: flex-end;
			gap: var(--uui-size-space-1);
			margin-top: 0.5rem;
		}

		#mask {
			display: block;
			position: absolute;
			box-shadow: 0 0 0 2000px hsla(0, 0%, 100%, 0.8);
			pointer-events: none;
		}

		#image {
			display: block;
			position: absolute;
			user-select: none;
		}

		#viewport #image {
			cursor: move;
		}

		#slider {
			width: 100%;
			height: 0px; /* TODO: FIX - This is needed to prevent the slider from taking up more space than needed */
			min-height: 22px; /* TODO: FIX - This is needed to prevent the slider from taking up more space than needed */
		}
	`;
tt([
  Z("#viewport")
], B.prototype, "viewportElement", 2);
tt([
  Z("#mask")
], B.prototype, "maskElement", 2);
tt([
  Z("#image")
], B.prototype, "imageElement", 2);
tt([
  p({ type: Object, attribute: !1 })
], B.prototype, "value", 2);
tt([
  p({ type: String })
], B.prototype, "src", 2);
tt([
  p({ attribute: !1 })
], B.prototype, "focalPoint", 2);
tt([
  p({ type: Number })
], B.prototype, "zoom", 1);
tt([
  l()
], B.prototype, "_zoom", 2);
B = tt([
  z("umb-image-cropper")
], B);
var Po = Object.defineProperty, zo = Object.getOwnPropertyDescriptor, xa = (t) => {
  throw TypeError(t);
}, G = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? zo(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && Po(e, i, a), a;
}, mi = (t, e, i) => e.has(t) || xa("Cannot " + i), te = (t, e, i) => (mi(t, e, "read from private field"), i ? i.call(t) : e.get(t)), St = (t, e, i) => e.has(t) ? xa("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), se = (t, e, i, n) => (mi(t, e, "write to private field"), e.set(t, i), i), Me = (t, e, i) => (mi(t, e, "access private method"), i), wt, re, We, Ne, At, pe;
let S = class extends V {
  constructor() {
    super(), St(this, At), St(this, wt), this.crops = [], St(this, re), this.focalPoint = { left: 0.5, top: 0.5 }, this.hideFocalPoint = !1, this.src = "", this._serverUrl = "", St(this, We, (t) => {
      const i = t.target.value;
      if (!i) return;
      const n = this.crops.findIndex((a) => a.alias === i.alias);
      n !== void 0 && (this.crops[n] = i, this.currentCrop = void 0, Me(this, At, pe).call(this));
    }), St(this, Ne, (t) => {
      this.focalPoint = { top: t.focalPoint.top, left: t.focalPoint.left }, Me(this, At, pe).call(this);
    }), this.onResetFocalPoint = () => {
      this.focalPoint = { left: 0.5, top: 0.5 }, Me(this, At, pe).call(this);
    }, this.consumeContext(ta, (t) => {
      this._serverUrl = t.getServerUrl();
    });
  }
  set value(t) {
    t ? (this.crops = [...t.crops], this.focalPoint = t.focalPoint || { left: 0.5, top: 0.5 }, this.src = t.src, se(this, wt, t)) : (this.crops = [], this.focalPoint = { left: 0.5, top: 0.5 }, this.src = "", se(this, wt, void 0)), this.requestUpdate();
  }
  get value() {
    return te(this, wt);
  }
  set file(t) {
    se(this, re, t), t ? this.fileDataUrl = URL.createObjectURL(t) : this.fileDataUrl && (URL.revokeObjectURL(this.fileDataUrl), this.fileDataUrl = void 0);
  }
  get file() {
    return te(this, re);
  }
  get source() {
    return this.src ? this.src.startsWith("/") ? `${this._serverUrl}${this.src}` : this.src : this.fileDataUrl ?? "";
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.fileDataUrl && URL.revokeObjectURL(this.fileDataUrl);
  }
  onCropClick(t) {
    const e = this.crops.findIndex((i) => i.alias === t.alias);
    e !== -1 && (this.currentCrop = { ...this.crops[e] });
  }
  render() {
    return r`
			<div id="main">${this.renderMain()}</div>
			<div id="side">${this.renderSide()}</div>
		`;
  }
  renderMain() {
    return this.currentCrop ? r`
				<umb-image-cropper
					.focalPoint=${this.focalPoint}
					.src=${this.source}
					.value=${this.currentCrop}
					?hideFocalPoint=${this.hideFocalPoint}
					@imagecrop-change=${te(this, We)}>
				</umb-image-cropper>
			` : r`
			<umb-image-cropper-focus-setter
				.focalPoint=${this.focalPoint}
				.src=${this.source}
				?hideFocalPoint=${this.hideFocalPoint}
				@focalpoint-change=${te(this, Ne)}>
			</umb-image-cropper-focus-setter>
			<div id="actions">${this.renderActions()}</div>
		`;
  }
  renderActions() {
    return r`<slot name="actions"></slot>
			${Hi(
      !this.hideFocalPoint,
      () => r`<uui-button
						label=${this.localize.term("content_resetFocalPoint")}
						@click=${this.onResetFocalPoint}></uui-button>`
    )} `;
  }
  renderSide() {
    if (!(!this.value || !this.crops))
      return st(
        this.crops,
        (t) => t.alias + JSON.stringify(t.coordinates),
        (t) => r` <umb-image-cropper-preview
					@click=${() => this.onCropClick(t)}
					.crop=${t}
					.focalPoint=${this.focalPoint}
					.src=${this.source}></umb-image-cropper-preview>`
      );
  }
};
wt = /* @__PURE__ */ new WeakMap();
re = /* @__PURE__ */ new WeakMap();
We = /* @__PURE__ */ new WeakMap();
Ne = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakSet();
pe = function() {
  se(this, wt, {
    crops: [...this.crops],
    focalPoint: this.focalPoint,
    src: this.src
  }), this.dispatchEvent(new C());
};
S.styles = P`
		:host {
			display: flex;
			width: 100%;
			box-sizing: border-box;
			gap: var(--uui-size-space-3);
			height: 400px;
		}

		#main {
			max-width: 500px;
			min-width: 300px;
			width: 100%;
			height: 100%;
			display: flex;
			gap: var(--uui-size-space-1);
			flex-direction: column;
		}

		#actions {
			display: flex;
			justify-content: space-between;
			margin-top: 0.5rem;
		}

		umb-image-cropper-focus-setter {
			height: calc(100% - 33px - var(--uui-size-space-1)); /* Temp solution to make room for actions */
		}

		#side {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
			gap: var(--uui-size-space-3);
			flex-grow: 1;
			overflow-y: auto;
			height: fit-content;
			max-height: 100%;
		}
	`;
G([
  p({ attribute: !1 })
], S.prototype, "value", 1);
G([
  l()
], S.prototype, "crops", 2);
G([
  l()
], S.prototype, "currentCrop", 2);
G([
  p({ attribute: !1 })
], S.prototype, "file", 1);
G([
  p()
], S.prototype, "fileDataUrl", 2);
G([
  l()
], S.prototype, "focalPoint", 2);
G([
  p({ type: Boolean })
], S.prototype, "hideFocalPoint", 2);
G([
  l()
], S.prototype, "src", 2);
G([
  l()
], S.prototype, "_serverUrl", 2);
S = G([
  z("umb-image-cropper-field")
], S);
var qo = Object.getOwnPropertyDescriptor, _a = (t) => {
  throw TypeError(t);
}, Uo = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? qo(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = s(a) || a);
  return a;
}, So = (t, e, i) => e.has(t) || _a("Cannot " + i), Io = (t, e, i) => e.has(t) ? _a("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Oo = (t, e, i) => (So(t, e, "access private method"), i), Be, ya;
let je = class extends S {
  constructor() {
    super(...arguments), Io(this, Be);
  }
  renderActions() {
    return r`
			<slot name="actions"></slot>
			${Hi(
      !this.hideFocalPoint,
      () => r`
					<uui-button
						compact
						id="reset-focal-point"
						label=${this.localize.term("content_resetFocalPoint")}
						@click=${this.onResetFocalPoint}>
						<uui-icon name="icon-axis-rotation"></uui-icon>
						${this.localize.term("content_resetFocalPoint")}
					</uui-button>
				`
    )}
		`;
  }
  renderSide() {
    if (!(!this.value || !this.crops))
      return r` <umb-image-cropper-preview
				@click=${Oo(this, Be, ya)}
				?active=${!this.currentCrop}
				.label=${this.localize.term("general_media")}></umb-image-cropper-preview>

			${st(
        this.crops,
        (t) => t.alias + JSON.stringify(t.coordinates),
        (t) => r`
					<umb-image-cropper-preview
						?active=${this.currentCrop?.alias === t.alias}
						@click=${() => this.onCropClick(t)}
						.crop=${t}
						.focalPoint=${this.focalPoint}
						.src=${this.source}></umb-image-cropper-preview>
				`
      )}`;
  }
};
Be = /* @__PURE__ */ new WeakSet();
ya = function() {
  this.currentCrop = void 0;
};
je.styles = P`
		:host {
			display: flex;
			width: 100%;
			box-sizing: border-box;
			gap: var(--uui-size-space-3);
			height: 400px;
		}

		#main {
			width: 100%;
			height: 100%;
			display: flex;
			gap: var(--uui-size-space-1);
			flex-direction: column;
		}

		#actions {
			display: flex;
			justify-content: space-between;
		}

		#reset-focal-point uui-icon {
			padding-right: var(--uui-size-3);
		}

		slot[name='actions'] {
			display: block;
			flex: 1;
		}

		#reset-current-crop[active],
		[active] {
			background-color: var(--uui-color-current);
		}

		umb-image-cropper-focus-setter {
			height: calc(100% - 33px - var(--uui-size-space-1)); /* Temp solution to make room for actions */
		}

		#side {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
			flex: none;
			gap: var(--uui-size-space-3);
			flex-grow: 1;
			overflow-y: auto;
			height: fit-content;
			max-height: 100%;
		}
	`;
je = Uo([
  z("umb-image-cropper-editor-field")
], je);
const vi = new Qt(
  "Umb.Modal.MediaPicker",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
);
var Ao = Object.defineProperty, Ro = Object.getOwnPropertyDescriptor, ba = (t) => {
  throw TypeError(t);
}, rt = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Ro(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && Ao(e, i, a), a;
}, fi = (t, e, i) => e.has(t) || ba("Cannot " + i), wa = (t, e, i) => (fi(t, e, "read from private field"), i ? i.call(t) : e.get(t)), Ee = (t, e, i) => e.has(t) ? ba("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Fo = (t, e, i, n) => (fi(t, e, "write to private field"), e.set(t, i), i), Yt = (t, e, i) => (fi(t, e, "access private method"), i), gi, me, vt, xi, ka, $a, Ma;
let D = class extends Ze {
  constructor() {
    super(), Ee(this, vt), Ee(this, gi, new Qn(this)), this._key = "", this._unique = "", this._hideFocalPoint = !1, this._crops = [], this._editMediaPath = "", Ee(this, me), this.consumeContext(Bi, (t) => {
      Fo(this, me, t);
    }), new ei(this, ji).addAdditionalPath("media").onSetup(() => ({ data: { entityType: "media", preset: {} } })).observeRouteBuilder((t) => {
      this._editMediaPath = t({});
    });
  }
  connectedCallback() {
    super.connectedCallback(), this._key = this.data?.key ?? "", this._unique = this.data?.unique ?? "", this._hideFocalPoint = this.data?.hideFocalPoint ?? !1, this._crops = this.data?.cropOptions ?? [], this._pickableFilter = this.data?.pickableFilter, Yt(this, vt, xi).call(this);
  }
  render() {
    return r`
			<umb-body-layout headline=${this.localize.term("defaultdialogs_selectMedia")}>
				${Yt(this, vt, Ma).call(this)}
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
					<uui-button
						label=${this.localize.term("general_submit")}
						look="primary"
						color="positive"
						@click=${this._submitModal}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
gi = /* @__PURE__ */ new WeakMap();
me = /* @__PURE__ */ new WeakMap();
vt = /* @__PURE__ */ new WeakSet();
xi = async function() {
  const { data: t } = await wa(this, gi).requestItems([this._unique]), e = t?.[0];
  if (!e?.url) return;
  const i = this._crops.map((a) => {
    const o = this.value.crops?.find((s) => s.alias === a.alias);
    return o ? { ...a, ...o } : a;
  }), n = {
    ...this.value,
    src: e.url,
    crops: i,
    focalPoint: this.value.focalPoint ?? { left: 0.5, top: 0.5 }
  };
  this._imageCropperValue = n;
};
ka = async function() {
  const e = await wa(this, me)?.open(this, vi, {
    data: { multiple: !1, pickableFilter: this._pickableFilter },
    value: { selection: [this._unique] }
  })?.onSubmit().catch(() => null);
  if (!e) return;
  const i = e.selection[0];
  if (!i)
    throw new Error("No media selected");
  this._unique = i, this.value = { ...this.value, unique: this._unique }, Yt(this, vt, xi).call(this);
};
$a = function(t) {
  const e = t.target.value;
  e && (this._imageCropperValue && (this._imageCropperValue.crops = e.crops, this._imageCropperValue.focalPoint = e.focalPoint), this.value = { key: this._key, unique: this._unique, crops: e.crops, focalPoint: e.focalPoint });
};
Ma = function() {
  return r`
			<div id="layout">
				<umb-image-cropper-editor-field
					.value=${this._imageCropperValue}
					?hideFocalPoint=${this._hideFocalPoint}
					@change=${Yt(this, vt, $a)}>
					<div id="actions" slot="actions">
						<uui-button compact @click=${Yt(this, vt, ka)} label=${this.localize.term("mediaPicker_changeMedia")}>
							<uui-icon name="icon-search"></uui-icon>${this.localize.term("mediaPicker_changeMedia")}
						</uui-button>
						<uui-button
							compact
							href=${this._editMediaPath + "edit/" + this._unique}
							label=${this.localize.term("mediaPicker_openMedia")}>
							<uui-icon name="icon-out"></uui-icon>${this.localize.term("mediaPicker_openMedia")}
						</uui-button>
					</div>
				</umb-image-cropper-editor-field>
			</div>
		`;
};
D.styles = [
  P`
			#layout {
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
			umb-image-cropper-editor-field {
				flex-grow: 1;
			}

			#actions {
				display: inline-flex;
				gap: var(--uui-size-space-3);
			}
			uui-icon {
				padding-right: var(--uui-size-3);
			}

			#options {
				display: flex;
				justify-content: center;
			}

			img {
				max-width: 80%;
				background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
				background-size: 10px 10px;
				background-repeat: repeat;
			}
		`
];
rt([
  l()
], D.prototype, "_imageCropperValue", 2);
rt([
  l()
], D.prototype, "_key", 2);
rt([
  l()
], D.prototype, "_unique", 2);
rt([
  l()
], D.prototype, "_hideFocalPoint", 2);
rt([
  l()
], D.prototype, "_crops", 2);
rt([
  l()
], D.prototype, "_editMediaPath", 2);
rt([
  l()
], D.prototype, "_pickableFilter", 2);
D = rt([
  z("umb-image-cropper-editor-modal")
], D);
const Do = D, nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbImageCropperEditorModalElement() {
    return D;
  },
  default: Do
}, Symbol.toStringTag, { value: "Module" })), Wo = new Qt("Umb.Modal.ImageCropperEditor", {
  modal: {
    type: "sidebar",
    size: "full"
  }
}), or = new Qt("Umb.Modal.MediaCaptionAltText", {
  modal: {
    type: "sidebar",
    size: "small"
  }
});
class Di extends uo {
  #t;
  /**
   * Creates an instance of UmbMediaItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaItemServerDataSource
   */
  constructor(e) {
    super(e, {
      getItems: No,
      mapper: Wi
    }), this.#t = e;
  }
  /**
   * @deprecated - The search method will be removed in v17. Use the
   * Use the UmbMediaSearchProvider instead.
   * Get it from:
   * ```ts
   * import { UmbMediaSearchProvider } from '@umbraco-cms/backoffice/media';
   * ```
   */
  async search({ query: e, skip: i, take: n }) {
    const { data: a, error: o } = await Xi(
      this.#t,
      Pt.getItemMediaSearch({ query: e, skip: i, take: n })
    );
    return { data: a?.items.map((c) => Wi(c)), error: o };
  }
}
const No = (t) => Pt.getItemMedia({ id: t }), Wi = (t) => ({
  entityType: ft,
  hasChildren: t.hasChildren,
  isTrashed: t.isTrashed,
  unique: t.id,
  mediaType: {
    unique: t.mediaType.id,
    icon: t.mediaType.icon,
    collection: t.mediaType.collection ? { unique: t.mediaType.collection.id } : null
  },
  name: t.variants[0]?.name,
  // TODO: get correct variant name
  parent: t.parent ? { unique: t.parent.id } : null,
  variants: t.variants.map((e) => ({
    culture: e.culture || null,
    name: e.name
  }))
});
class Le extends ho {
  #t;
  constructor(e) {
    super(e, Di, Yn), this.#t = new Di(this);
  }
  /**
   * @param root0
   * @param root0.query
   * @param root0.skip
   * @param root0.take
   * @deprecated - The search method will be removed in v17. Use the
   * Use the UmbMediaSearchProvider instead.
   * Get it from:
   * ```ts
   * import { UmbMediaSearchProvider } from '@umbraco-cms/backoffice/media';
   */
  async search({ query: e, skip: i, take: n }) {
    return this.#t.search({ query: e, skip: i, take: n });
  }
}
const sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaItemRepository: Le,
  default: Le
}, Symbol.toStringTag, { value: "Module" }));
class Bo extends Gn {
  /**
   * Creates an instance of UmbMediaTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaTreeServerDataSource
   */
  constructor(e) {
    super(e, {
      getRootItems: Ea,
      getChildrenOf: jo,
      getAncestorsOf: Lo,
      mapper: Ho
    });
  }
}
const Ea = (t) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  Pt.getTreeMediaRoot({ dataTypeId: t.dataType?.unique, skip: t.skip, take: t.take })
), jo = (t) => t.parent.unique === null ? Ea(t) : Pt.getTreeMediaChildren({
  parentId: t.parent.unique,
  dataTypeId: t.dataType?.unique,
  skip: t.skip,
  take: t.take
}), Lo = (t) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  Pt.getTreeMediaAncestors({
    descendantId: t.treeItem.unique
  })
), Ho = (t) => ({
  unique: t.id,
  parent: {
    unique: t.parent ? t.parent.id : null,
    entityType: t.parent ? ft : Jt
  },
  entityType: ft,
  hasChildren: t.hasChildren,
  noAccess: t.noAccess,
  isTrashed: t.isTrashed,
  isFolder: !1,
  mediaType: {
    unique: t.mediaType.id,
    icon: t.mediaType.icon,
    collection: t.mediaType.collection ? { unique: t.mediaType.collection.id } : null
  },
  name: t.variants[0]?.name,
  // TODO: this is not correct. We need to get it from the variants. This is a temp solution.
  variants: t.variants.map((e) => ({
    name: e.name,
    culture: e.culture || null
  })),
  createDate: t.createDate
}), Vo = new Kt("UmbMediaTreeStore");
class ve extends Xn {
  constructor(e) {
    super(e, Bo, Vo);
  }
  async requestTreeRoot() {
    const { data: e } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), i = e ? e.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: Jt,
      name: "#treeHeaders_media",
      hasChildren: i,
      isFolder: !0
    } };
  }
}
const rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaTreeRepository: ve,
  default: ve
}, Symbol.toStringTag, { value: "Module" }));
var Yo = Object.defineProperty, Go = Object.getOwnPropertyDescriptor, Ta = (t) => {
  throw TypeError(t);
}, zt = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Go(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && Yo(e, i, a), a;
}, Ca = (t, e, i) => e.has(t) || Ta("Cannot " + i), He = (t, e, i) => (Ca(t, e, "read from private field"), i ? i.call(t) : e.get(t)), Te = (t, e, i) => e.has(t) ? Ta("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), It = (t, e, i) => (Ca(t, e, "access private method"), i), _i, fe, lt, Ve, Pa, za, qa;
const le = { name: "Media", unique: null, entityType: Jt };
let ot = class extends V {
  constructor() {
    super(...arguments), Te(this, lt), Te(this, _i, new ve(this)), Te(this, fe, new ti(this)), this.startNode = le, this._currentMedia = le, this._paths = [le], this._typingNewFolder = !1;
  }
  set currentMedia(t) {
    t !== this._currentMedia && (this._currentMedia = t, It(this, lt, Ve).call(this));
  }
  get currentMedia() {
    return this._currentMedia;
  }
  firstUpdated(t) {
    super.firstUpdated(t), It(this, lt, Ve).call(this);
  }
  render() {
    return r`<div id="path">
			${st(
      this._paths,
      (t) => t.unique,
      (t) => r`<uui-button
							compact
							.label=${t.name}
							?disabled=${this.currentMedia.unique === t.unique}
							@click=${() => It(this, lt, Pa).call(this, t)}></uui-button
						>/`
    )}${this._typingNewFolder ? r`<uui-input
						id="new-folder"
						label="enter a name"
						value="new folder name"
						@blur=${It(this, lt, qa)}
						auto-width></uui-input>` : r`<uui-button label="add folder" compact @click=${It(this, lt, za)}>+</uui-button>`}
		</div>`;
  }
};
_i = /* @__PURE__ */ new WeakMap();
fe = /* @__PURE__ */ new WeakMap();
lt = /* @__PURE__ */ new WeakSet();
Ve = async function() {
  const t = this._currentMedia.unique, e = this._currentMedia.entityType, n = (t ? (await He(this, _i).requestTreeItemAncestors({
    treeItem: { unique: t, entityType: e }
  })).data || [] : []).map((a) => ({
    name: a.name,
    unique: a.unique,
    entityType: a.entityType
  }));
  this.startNode || n.unshift(le), this._paths = [...n];
};
Pa = function(t) {
  this._paths = [...this._paths].slice(0, this._paths.findIndex((e) => e.unique === t.unique) + 1), this.currentMedia = t, this.dispatchEvent(new C());
};
za = function() {
  this._typingNewFolder = !0, requestAnimationFrame(() => {
    const t = this.getHostElement().shadowRoot.querySelector("#new-folder");
    t.focus(), t.select();
  });
};
qa = async function(t) {
  t.stopPropagation();
  const e = t.target.value;
  if (this._typingNewFolder = !1, !e) return;
  const i = ai.new(), n = this._paths[this._paths.length - 1].unique, a = {
    unique: i,
    mediaType: {
      unique: ro(),
      collection: null
    },
    variants: [
      {
        culture: null,
        segment: null,
        name: e,
        createDate: null,
        updateDate: null
      }
    ]
  }, { data: o } = await He(this, fe).createScaffold(a);
  if (!o) return;
  const { data: s } = await He(this, fe).create(o, n);
  if (!s) return;
  const c = s.variants[0].name, v = s.unique, _ = s.entityType;
  this._paths = [...this._paths, { name: c, unique: v, entityType: _ }], this.currentMedia = { name: c, unique: v, entityType: _ }, this.dispatchEvent(new C());
};
ot.styles = [
  P`
			#path {
				display: flex;
				align-items: center;
				margin: 0 var(--uui-size-3);
			}
			#path uui-button {
				font-weight: bold;
			}
			#path uui-input {
				height: 100%;
			}
		`
];
zt([
  p({ attribute: !1 })
], ot.prototype, "startNode", 2);
zt([
  p({ attribute: !1 })
], ot.prototype, "currentMedia", 1);
zt([
  l()
], ot.prototype, "_currentMedia", 2);
zt([
  l()
], ot.prototype, "_paths", 2);
zt([
  l()
], ot.prototype, "_typingNewFolder", 2);
ot = zt([
  z("umb-media-picker-folder-path")
], ot);
var Xo = Object.defineProperty, Ko = Object.getOwnPropertyDescriptor, Ua = (t) => {
  throw TypeError(t);
}, we = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Ko(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && Xo(e, i, a), a;
}, Sa = (t, e, i) => e.has(t) || Ua("Cannot " + i), Ia = (t, e, i) => (Sa(t, e, "read from private field"), i ? i.call(t) : e.get(t)), Ce = (t, e, i) => e.has(t) ? Ua("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Ye = (t, e, i) => (Sa(t, e, "access private method"), i), yi, bi, jt, Oa, Aa, Ra;
let Tt = class extends V {
  constructor() {
    super(...arguments), Ce(this, jt), Ce(this, yi, new po(this)), Ce(this, bi, new ti(this)), this._node = null, this._popoverOpen = !1, this._allowedMediaTypes = [];
  }
  set node(t) {
    this._node = t, Ye(this, jt, Aa).call(this);
  }
  get node() {
    return this._node;
  }
  render() {
    return r`
			<uui-button
				popovertarget="collection-action-menu-popover"
				label=${this.localize.term("actions_create")}
				color="default"
				look="outline">
				${this.localize.term("actions_create")}
				<uui-symbol-expand .open=${this._popoverOpen}></uui-symbol-expand>
			</uui-button>
			<uui-popover-container
				id="collection-action-menu-popover"
				placement="bottom-start"
				@toggle=${Ye(this, jt, Ra)}>
				<umb-popover-layout>
					<uui-scroll-container>
						${this._allowedMediaTypes.length ? st(
      this._allowedMediaTypes,
      (t) => t.unique,
      (t) => r`<uui-menu-item label=${t.name}>
											<umb-icon slot="icon" name=${t.icon ?? "icon-circle-dotted"}></umb-icon>
										</uui-menu-item>`
    ) : r`<div id="not-allowed">${this.localize.term("mediaPicker_notAllowed")}</div>`}
					</uui-scroll-container>
				</umb-popover-layout>
			</uui-popover-container>
		`;
  }
};
yi = /* @__PURE__ */ new WeakMap();
bi = /* @__PURE__ */ new WeakMap();
jt = /* @__PURE__ */ new WeakSet();
Oa = async function() {
  if (!this._node) return null;
  const { data: t } = await Ia(this, bi).requestByUnique(this.node);
  return t?.mediaType.unique ?? null;
};
Aa = async function() {
  const t = await Ye(this, jt, Oa).call(this), { data: e } = await Ia(this, yi).requestAllowedChildrenOf(t, this._node);
  this._allowedMediaTypes = e?.items ?? [];
};
Ra = function(t) {
  this._popoverOpen = t.newState === "open";
};
Tt.styles = [
  P`
			#not-allowed {
				padding: var(--uui-size-space-3);
			}
		`
];
we([
  p()
], Tt.prototype, "node", 1);
we([
  l()
], Tt.prototype, "_popoverOpen", 2);
we([
  l()
], Tt.prototype, "_allowedMediaTypes", 2);
Tt = we([
  z("umb-media-picker-create-item")
], Tt);
class Qo {
  #t;
  /**
   * Creates an instance of UmbMediaSearchServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaSearchServerDataSource
   */
  constructor(e) {
    this.#t = e;
  }
  /**
   * Get a list of versions for a data
   * @param {UmbMediaSearchRequestArgs}args - The arguments for the search
   * @returns {*}
   * @memberof UmbMediaSearchServerDataSource
   */
  async search(e) {
    const { data: i, error: n } = await Xi(
      this.#t,
      Pt.getItemMediaSearch({
        query: e.query,
        parentId: e.searchFrom?.unique || void 0,
        allowedMediaTypes: e.allowedContentTypes?.map((a) => a.unique)
      })
    );
    return i ? { data: { items: i.items.map((o) => ({
      entityType: ft,
      hasChildren: o.hasChildren,
      href: "/section/media/workspace/media/edit/" + o.id,
      isTrashed: o.isTrashed,
      unique: o.id,
      mediaType: {
        collection: o.mediaType.collection ? { unique: o.mediaType.collection.id } : null,
        icon: o.mediaType.icon,
        unique: o.mediaType.id
      },
      name: o.variants[0]?.name,
      // TODO: get correct variant name
      parent: o.parent ? { unique: o.parent.id } : null,
      variants: o.variants.map((s) => ({
        culture: s.culture || null,
        name: s.name
      }))
    })), total: i.total } } : { error: n };
  }
}
class Jo extends Ki {
  #t;
  constructor(e) {
    super(e), this.#t = new Qo(this);
  }
  search(e) {
    return this.#t.search(e);
  }
}
class Ge extends Ki {
  #t = new Jo(this);
  async search(e) {
    return this.#t.search(e);
  }
  destroy() {
    this.#t.destroy();
  }
}
const pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaSearchProvider: Ge,
  api: Ge
}, Symbol.toStringTag, { value: "Module" }));
var Zo = Object.defineProperty, ts = Object.getOwnPropertyDescriptor, Fa = (t) => {
  throw TypeError(t);
}, O = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? ts(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && Zo(e, i, a), a;
}, wi = (t, e, i) => e.has(t) || Fa("Cannot " + i), X = (t, e, i) => (wi(t, e, "read from private field"), i ? i.call(t) : e.get(t)), pt = (t, e, i) => e.has(t) ? Fa("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), es = (t, e, i, n) => (wi(t, e, "write to private field"), e.set(t, i), i), u = (t, e, i) => (wi(t, e, "access private method"), i), ki, Xe, $i, ge, Ct, d, qt, Da, Wa, Mi, Na, Ei, Ba, Ti, ja, La, Ha, Va, Ya, Ga, Xa, Ka, Qa, Ci, Ja;
const Za = { name: "Media", unique: null, entityType: Jt };
let w = class extends Ze {
  constructor() {
    super(), pt(this, d), pt(this, ki, new ve(this)), pt(this, Xe, new Le(this)), pt(this, $i, new Ge(this)), pt(this, ge), this._selectableFilter = () => !0, this._currentChildren = [], this._currentPage = 1, this._currentTotalPages = 0, this._searchResult = [], this._searchQuery = "", this._currentMediaEntity = Za, this._isSelectionMode = !1, this._searching = !1, pt(this, Ct, /* @__PURE__ */ new Map()), pt(this, Ti, no(() => {
      u(this, d, Ba).call(this);
    }, 500)), this.consumeContext(vo, (t) => {
      this.observe(t.dataType, (e) => {
        es(this, ge, e);
      });
    });
  }
  async connectedCallback() {
    super.connectedCallback(), this.data?.pickableFilter && (this._selectableFilter = this.data?.pickableFilter);
  }
  async firstUpdated(t) {
    super.firstUpdated(t);
    const e = this.data?.startNode;
    if (e) {
      const { data: i } = await X(this, Xe).requestItems([e.unique]);
      this._startNode = i?.[0], this._startNode && (this._currentMediaEntity = {
        name: this._startNode.name,
        unique: this._startNode.unique,
        entityType: this._startNode.entityType
      }, this._searchFrom = { unique: this._startNode.unique, entityType: this._startNode.entityType });
    }
    u(this, d, qt).call(this);
  }
  render() {
    return r`
			<umb-body-layout headline=${this.localize.term("defaultdialogs_chooseMedia")}>
				${u(this, d, Ga).call(this)} ${u(this, d, Ja).call(this)}
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
					<uui-button
						label=${this.localize.term("general_choose")}
						look="primary"
						color="positive"
						@click=${this._submitModal}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
ki = /* @__PURE__ */ new WeakMap();
Xe = /* @__PURE__ */ new WeakMap();
$i = /* @__PURE__ */ new WeakMap();
ge = /* @__PURE__ */ new WeakMap();
Ct = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
qt = async function(t) {
  const e = this._currentMediaEntity.entityType + this._currentMediaEntity.unique;
  let i = X(this, Ct).get(e);
  i || (i = new oo(), i.setPageSize(100), X(this, Ct).set(e, i));
  const n = i.getSkip(), a = i.getPageSize(), { data: o } = await X(this, ki).requestTreeItemsOf({
    parent: {
      unique: this._currentMediaEntity.unique,
      entityType: this._currentMediaEntity.entityType
    },
    dataType: X(this, ge),
    skip: n,
    take: a
  });
  if (this._currentChildren = o?.items ?? [], i.setTotalItems(o?.total ?? 0), this._currentPage = i.getCurrentPageNumber(), this._currentTotalPages = i.getTotalPages(), t?.length) {
    const s = this._currentChildren.find((c) => c.unique == t[0].unique);
    s && u(this, d, Mi).call(this, s);
  }
};
Da = function(t) {
  const e = t.target;
  u(this, d, qt).call(this, e.value);
};
Wa = function(t) {
  u(this, d, Ei).call(this), this._currentMediaEntity = {
    name: t.name,
    unique: t.unique,
    entityType: Jt
  }, this._searchFrom = this._currentMediaEntity.unique ? { unique: this._currentMediaEntity.unique, entityType: this._currentMediaEntity.entityType } : void 0, u(this, d, qt).call(this);
};
Mi = function(t) {
  const e = this.data?.multiple ? [...this.value.selection, t.unique] : [t.unique];
  this._isSelectionMode = e.length > 0, this.modalContext?.setValue({ selection: e });
};
Na = function(t) {
  const e = this.value.selection.filter((i) => i !== t.unique);
  this._isSelectionMode = e.length > 0, this.modalContext?.setValue({ selection: e });
};
Ei = function() {
  this._searchQuery = "", this._searchResult = [];
};
Ba = async function() {
  if (!this._searchQuery) {
    u(this, d, Ei).call(this), this._searching = !1;
    return;
  }
  const t = this._searchQuery, { data: e } = await X(this, $i).search({
    query: t,
    searchFrom: this._searchFrom,
    ...this.data?.search?.queryParams
  });
  if (!e) {
    this._searchResult = [], this._searching = !1;
    return;
  }
  this._searchResult = e.items, this._searching = !1;
};
Ti = /* @__PURE__ */ new WeakMap();
ja = function(t) {
  this._searchQuery = t.target.value.toLocaleLowerCase(), this._searching = !0, X(this, Ti).call(this);
};
La = function(t) {
  const e = t.target;
  e.currentMedia ? this._currentMediaEntity = e.currentMedia : this._startNode ? this._currentMediaEntity = {
    name: this._startNode.name,
    unique: this._startNode.unique,
    entityType: this._startNode.entityType
  } : this._currentMediaEntity = Za, this._currentMediaEntity.unique ? this._searchFrom = { unique: this._currentMediaEntity.unique, entityType: this._currentMediaEntity.entityType } : this._searchFrom = void 0, u(this, d, qt).call(this);
};
Ha = function(t) {
  t.stopPropagation();
  const e = this._currentMediaEntity.entityType + this._currentMediaEntity.unique, i = X(this, Ct).get(e);
  if (!i)
    throw new Error("Pagination manager not found");
  i.setCurrentPageNumber(t.target.current), X(this, Ct).set(e, i), u(this, d, qt).call(this);
};
Va = function(t) {
  return lo(t.mediaType.unique) || t.hasChildren;
};
Ya = function(t) {
  t.target.checked ? this._searchFrom = { unique: this._currentMediaEntity.unique, entityType: this._currentMediaEntity.entityType } : this._searchFrom = void 0;
};
Ga = function() {
  return r`${u(this, d, Qa).call(this)}
			<umb-dropzone-media
				id="dropzone"
				multiple
				@change=${u(this, d, Da)}
				.parentUnique=${this._currentMediaEntity.unique}></umb-dropzone-media>
			${this._searchQuery ? u(this, d, Xa).call(this) : u(this, d, Ka).call(this)} `;
};
Xa = function() {
  return r`
			${!this._searchResult.length && !this._searching ? r`<div class="container"><p>${this.localize.term("content_listViewNoItems")}</p></div>` : r`<div id="media-grid">
						${st(
    this._searchResult,
    (t) => t.unique,
    (t) => u(this, d, Ci).call(this, t)
  )}
					</div>`}
		`;
};
Ka = function() {
  return r`
			${this._currentChildren.length ? r`<div id="media-grid">
							${st(
    this._currentChildren,
    (t) => t.unique,
    (t) => u(this, d, Ci).call(this, t)
  )}
						</div>
						${this._currentTotalPages > 1 ? r`<uui-pagination
									.current=${this._currentPage}
									.total=${this._currentTotalPages}
									@change=${u(this, d, Ha)}></uui-pagination>` : k}` : r`<div class="container"><p>${this.localize.term("content_listViewNoItems")}</p></div>`}
		`;
};
Qa = function() {
  return r`
			<div id="toolbar">
				<div id="search">
					<uui-input
						label=${this.localize.term("general_search")}
						placeholder=${this.localize.term("placeholders_search")}
						@input=${u(this, d, ja)}
						value=${this._searchQuery}>
						<div slot="prepend">
							${this._searching ? r`<uui-loader-circle id="searching-indicator"></uui-loader-circle>` : r`<uui-icon name="search"></uui-icon>`}
						</div>
					</uui-input>

					${this._currentMediaEntity.unique && this._currentMediaEntity.unique !== this._startNode?.unique ? r`<uui-checkbox
								?checked=${this._searchFrom?.unique === this._currentMediaEntity.unique}
								@change=${u(this, d, Ya)}
								label="Search only in ${this._currentMediaEntity.name}"></uui-checkbox>` : k}
				</div>
				<uui-button
					@click=${() => this._dropzone.browse()}
					label=${this.localize.term("general_upload")}
					look="outline"
					color="default"></uui-button>
			</div>
		`;
};
Ci = function(t) {
  const e = u(this, d, Va).call(this, t), i = this._selectableFilter(t);
  return r`
			<uui-card-media
				class=${Et(!(i || e) ? "not-allowed" : void 0)}
				.name=${t.name}
				data-mark="${t.entityType}:${t.unique}"
				@open=${() => u(this, d, Wa).call(this, t)}
				@selected=${() => u(this, d, Mi).call(this, t)}
				@deselected=${() => u(this, d, Na).call(this, t)}
				?selected=${this.value?.selection?.find((a) => a === t.unique)}
				?selectable=${i}
				?select-only=${this._isSelectionMode || e === !1}>
				<umb-imaging-thumbnail
					unique=${t.unique}
					alt=${t.name}
					icon=${t.mediaType.icon}></umb-imaging-thumbnail>
			</uui-card-media>
		`;
};
Ja = function() {
  if (this._searchQuery && this._currentMediaEntity.unique && !this._searchFrom)
    return k;
  const t = this._startNode ? {
    entityType: this._startNode.entityType,
    unique: this._startNode.unique,
    name: this._startNode.name
  } : void 0;
  return r`<umb-media-picker-folder-path
			slot="footer-info"
			.currentMedia=${this._currentMediaEntity}
			.startNode=${t}
			@change=${u(this, d, La)}></umb-media-picker-folder-path>`;
};
w.styles = [
  P`
			#toolbar {
				display: flex;
				gap: var(--uui-size-6);
				align-items: flex-start;
				margin-bottom: var(--uui-size-3);
			}
			#search {
				flex: 1;
			}

			#search uui-input {
				width: 100%;
				margin-bottom: var(--uui-size-3);
			}
			#search uui-input [slot='prepend'] {
				display: flex;
				align-items: center;
			}

			#searching-indicator {
				margin-left: 7px;
				margin-top: 4px;
			}

			#media-grid {
				display: grid;
				gap: var(--uui-size-space-5);
				grid-template-columns: repeat(auto-fill, minmax(var(--umb-card-medium-min-width), 1fr));
				grid-auto-rows: var(--umb-card-medium-min-width);
				padding-bottom: 5px; /** The modal is a bit jumpy due to the img card focus/hover border. This fixes the issue. */
			}

			/** TODO: Remove this fix when UUI gets upgrade to 1.3 */
			umb-imaging-thumbnail {
				pointer-events: none;
			}

			umb-icon {
				font-size: var(--uui-size-8);
			}

			img {
				background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
				background-size: 10px 10px;
				background-repeat: repeat;
			}

			#actions {
				max-width: 100%;
			}

			.not-allowed {
				cursor: not-allowed;
				opacity: 0.5;
			}

			uui-pagination {
				display: block;
				margin-top: var(--uui-size-layout-1);
			}
		`
];
O([
  l()
], w.prototype, "_selectableFilter", 2);
O([
  l()
], w.prototype, "_currentChildren", 2);
O([
  l()
], w.prototype, "_currentPage", 2);
O([
  l()
], w.prototype, "_currentTotalPages", 2);
O([
  l()
], w.prototype, "_searchResult", 2);
O([
  l()
], w.prototype, "_searchFrom", 2);
O([
  l()
], w.prototype, "_searchQuery", 2);
O([
  l()
], w.prototype, "_currentMediaEntity", 2);
O([
  l()
], w.prototype, "_isSelectionMode", 2);
O([
  l()
], w.prototype, "_startNode", 2);
O([
  l()
], w.prototype, "_searching", 2);
O([
  Z("#dropzone")
], w.prototype, "_dropzone", 2);
w = O([
  z("umb-media-picker-modal")
], w);
const is = w, lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbMediaPickerModalElement() {
    return w;
  },
  default: is
}, Symbol.toStringTag, { value: "Module" })), cr = new Kt(
  "UmbMediaRecycleBinTreeStore"
), tn = "Umb.Repository.MediaItem", dr = "Umb.Store.MediaItem", as = "Umb.SearchProvider.Media", ur = new Qt(
  Kn,
  {
    modal: {
      type: "sidebar",
      size: "small"
    },
    data: {
      treeAlias: "Umb.Tree.Media"
    }
  }
), hr = new Kt(
  "UmbWorkspaceContext",
  void 0,
  (t) => t.getEntityType?.() === ft
), en = "media";
Jn.generateAbsolute({
  sectionName: en
});
const ns = Zn.generateAbsolute({
  sectionName: en,
  entityType: ft
}), mr = new Li("create/parent/:parentEntityType/:parentUnique/:mediaTypeUnique", ns), vr = new Li("edit/:unique"), os = (t) => t.getEntityType() === ft, fr = new Kt(
  "UmbVariantContext",
  void 0,
  os
);
var ss = Object.getOwnPropertyDescriptor, an = (t) => {
  throw TypeError(t);
}, rs = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? ss(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = s(a) || a);
  return a;
}, Pi = (t, e, i) => e.has(t) || an("Cannot " + i), Pe = (t, e, i) => (Pi(t, e, "read from private field"), e.get(t)), ze = (t, e, i) => e.has(t) ? an("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), ps = (t, e, i, n) => (Pi(t, e, "write to private field"), e.set(t, i), i), ls = (t, e, i) => (Pi(t, e, "access private method"), i), Gt, zi, Ke, nn;
let Xt = class extends Ze {
  constructor() {
    super(...arguments), ze(this, Ke), ze(this, Gt), ze(this, zi, new ti(this));
  }
  connectedCallback() {
    super.connectedCallback(), ps(this, Gt, this.data?.mediaUnique), ls(this, Ke, nn).call(this);
  }
  render() {
    return r`
			<umb-body-layout .headline=${this.localize.term("defaultdialogs_editSelectedMedia")}>
				<div id="wrapper">
					<uui-label for="alt-text">${this.localize.term("content_altTextOptional")}</uui-label>
					<uui-input
						id="alt-text"
						label="alt text"
						.value=${this.value?.altText ?? ""}
						@input=${(t) => this.value = { ...this.value, altText: t.target.value }}></uui-input>

					<uui-label for="caption">${this.localize.term("content_captionTextOptional")}</uui-label>
					<uui-input
						id="caption"
						label="caption"
						.value=${this.value?.caption ?? ""}
						@input=${(t) => this.value = { ...this.value, caption: t.target.value }}></uui-input>

					<figure id="mainobject">
						<img src=${this.value?.url ?? ""} alt=${this.value?.altText ?? ""} />
						<figcaption>${this.value?.caption ?? ""}</figcaption>
					</figure>
				</div>
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
					<uui-button
						label=${this.localize.term("general_submit")}
						look="primary"
						color="positive"
						@click=${this._submitModal}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
Gt = /* @__PURE__ */ new WeakMap();
zi = /* @__PURE__ */ new WeakMap();
Ke = /* @__PURE__ */ new WeakSet();
nn = async function() {
  if (!Pe(this, Gt)) return;
  const { data: t } = await Pe(this, zi).requestByUnique(Pe(this, Gt));
  t && (this.value = { ...this.value, altText: this.value?.altText ?? t.variants[0].name, url: t.urls[0]?.url ?? "" });
};
Xt.styles = [
  P`
			uui-input {
				margin-bottom: var(--uui-size-layout-1);
			}

			#wrapper {
				display: flex;
				flex-direction: column;
			}

			#mainobject {
				display: flex;
				flex-direction: column;
				max-width: 100%;

				img {
					max-width: 100%;
					height: auto;
				}
			}
		`
];
Xt = rs([
  z("umb-media-caption-alt-text-modal")
], Xt);
const cs = Xt, gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbMediaCaptionAltTextModalElement() {
    return Xt;
  },
  default: cs
}, Symbol.toStringTag, { value: "Module" }));
class ds extends to {
  constructor(e) {
    super(e, tn, vi);
  }
  async openPicker(e, i) {
    const n = {
      ...e
    };
    n.pickableFilter = (a) => this.#t(a, i?.allowedContentTypes), e?.search || (n.search = {
      providerAlias: as,
      ...e?.search
    }), n.search.queryParams = {
      allowedContentTypes: i?.allowedContentTypes,
      ...e?.search?.queryParams
    }, await super.openPicker(n);
  }
  #t = (e, i) => i && i.length > 0 ? i.map((n) => n.unique).includes(e.mediaType.unique) : !0;
}
var us = Object.defineProperty, hs = Object.getOwnPropertyDescriptor, on = (t) => {
  throw TypeError(t);
}, j = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? hs(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && us(e, i, a), a;
}, qi = (t, e, i) => e.has(t) || on("Cannot " + i), $ = (t, e, i) => (qi(t, e, "read from private field"), i ? i.call(t) : e.get(t)), ee = (t, e, i) => e.has(t) ? on("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), ms = (t, e, i, n) => (qi(t, e, "write to private field"), e.set(t, i), i), nt = (t, e, i) => (qi(t, e, "access private method"), i), Rt, H, sn, Ft, A, rn, pn, ln, cn, dn, un, hn;
const vs = "umb-input-media";
let I = class extends ii(V) {
  constructor() {
    super(), ee(this, H), ee(this, Rt, new Vi(this, {
      getUniqueOfElement: (t) => t.getAttribute("detail"),
      getUniqueOfModel: (t) => t,
      identifier: "Umb.SorterIdentifier.InputMedia",
      itemSelector: "uui-card-media",
      containerSelector: ".container",
      resolvePlacement: Yi,
      onChange: ({ model: t }) => {
        this.selection = t, nt(this, H, sn).call(this, t), this.dispatchEvent(new C());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", ee(this, Ft, !1), this._editMediaPath = "", this._cards = [], ee(this, A, new ds(this)), new ei(this, ji).addAdditionalPath("media").onSetup(() => ({ data: { entityType: "media", preset: {} } })).observeRouteBuilder((t) => {
      this._editMediaPath = t({});
    }), this.observe($(this, A).selection, (t) => this.value = t.join(",")), this.observe($(this, A).selectedItems, async (t) => {
      const e = t.filter((i) => !this._cards.find((n) => n.unique === i.unique));
      t?.length && !e.length || (this._cards = t ?? []);
    }), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this.selection.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this.selection.length > this.max
    );
  }
  set min(t) {
    $(this, A).min = t;
  }
  get min() {
    return $(this, A).min;
  }
  set max(t) {
    $(this, A).max = t;
  }
  get max() {
    return $(this, A).max;
  }
  set selection(t) {
    $(this, A).setSelection(t), $(this, Rt).setModel(t);
  }
  get selection() {
    return $(this, A).getSelection();
  }
  set value(t) {
    this.selection = so(t);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  get readonly() {
    return $(this, Ft);
  }
  set readonly(t) {
    ms(this, Ft, t), $(this, Ft) ? $(this, Rt).disable() : $(this, Rt).enable();
  }
  render() {
    return r`<div class="container">${nt(this, H, ln).call(this)} ${nt(this, H, cn).call(this)}</div>`;
  }
};
Rt = /* @__PURE__ */ new WeakMap();
H = /* @__PURE__ */ new WeakSet();
sn = function(t) {
  const e = {};
  t.forEach((n, a) => {
    e[n] = a;
  });
  const i = [...this._cards];
  this._cards = i.sort((n, a) => e[n.unique] - e[a.unique]);
};
Ft = /* @__PURE__ */ new WeakMap();
A = /* @__PURE__ */ new WeakMap();
rn = function() {
  $(this, A).openPicker(
    {
      multiple: this.max > 1,
      startNode: this.startNode
    },
    {
      allowedContentTypes: this.allowedContentTypeIds?.map((t) => ({
        unique: t,
        entityType: co
      }))
    }
  );
};
pn = async function(t) {
  await $(this, A).requestRemoveItem(t.unique), this._cards = this._cards.filter((e) => e.unique !== t.unique);
};
ln = function() {
  return this._cards?.length ? r`
			${st(
    this._cards,
    (t) => t.unique,
    (t) => nt(this, H, dn).call(this, t)
  )}
		` : k;
};
cn = function() {
  return this._cards && this.max && this._cards.length >= this.max ? k : this.readonly && this._cards.length > 0 ? k : r`
				<uui-button
					id="btn-add"
					look="placeholder"
					@click=${nt(this, H, rn)}
					label=${this.localize.term("general_choose")}
					?disabled=${this.readonly}>
					<uui-icon name="icon-add"></uui-icon>
					${this.localize.term("general_choose")}
				</uui-button>
			`;
};
dn = function(t) {
  const e = this.readonly ? void 0 : `${this._editMediaPath}edit/${t.unique}`;
  return r`
			<uui-card-media
				name=${Et(t.name === null ? void 0 : t.name)}
				data-mark="${t.entityType}:${t.unique}"
				href="${Et(e)}"
				?readonly=${this.readonly}>
				<umb-imaging-thumbnail
					unique=${t.unique}
					alt=${t.name}
					icon=${t.mediaType.icon}></umb-imaging-thumbnail>
				${nt(this, H, hn).call(this, t)}
				<uui-action-bar slot="actions"> ${nt(this, H, un).call(this, t)}</uui-action-bar>
			</uui-card-media>
		`;
};
un = function(t) {
  return this.readonly ? k : r`
			<uui-button label=${this.localize.term("general_remove")} look="secondary" @click=${() => nt(this, H, pn).call(this, t)}>
				<uui-icon name="icon-trash"></uui-icon>
			</uui-button>
		`;
};
hn = function(t) {
  return t.isTrashed ? r`
			<uui-tag size="s" slot="tag" color="danger">
				<umb-localize key="mediaPicker_trashed">Trashed</umb-localize>
			</uui-tag>
		` : k;
};
I.styles = [
  P`
			:host {
				position: relative;
			}
			.container {
				display: grid;
				gap: var(--uui-size-space-3);
				grid-template-columns: repeat(auto-fill, minmax(var(--umb-card-medium-min-width), 1fr));
				grid-auto-rows: var(--umb-card-medium-min-width);
			}

			#btn-add {
				text-align: center;
				height: 100%;
			}

			uui-icon {
				display: block;
				margin: 0 auto;
			}

			uui-card-media umb-icon {
				font-size: var(--uui-size-8);
			}

			uui-card-media[drag-placeholder] {
				opacity: 0.2;
			}
			img {
				background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
				background-size: 10px 10px;
				background-repeat: repeat;
			}
		`
];
j([
  p({ type: Number })
], I.prototype, "min", 1);
j([
  p({ type: String, attribute: "min-message" })
], I.prototype, "minMessage", 2);
j([
  p({ type: Number })
], I.prototype, "max", 1);
j([
  p({ type: String, attribute: "max-message" })
], I.prototype, "maxMessage", 2);
j([
  p({ type: Array })
], I.prototype, "allowedContentTypeIds", 2);
j([
  p({ type: Object, attribute: !1 })
], I.prototype, "startNode", 2);
j([
  p({ type: String })
], I.prototype, "value", 1);
j([
  p({ type: Boolean, reflect: !0 })
], I.prototype, "readonly", 1);
j([
  l()
], I.prototype, "_editMediaPath", 2);
j([
  l()
], I.prototype, "_cards", 2);
I = j([
  z(vs)
], I);
var fs = Object.defineProperty, gs = Object.getOwnPropertyDescriptor, mn = (t) => {
  throw TypeError(t);
}, b = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? gs(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && fs(e, i, a), a;
}, Ui = (t, e, i) => e.has(t) || mn("Cannot " + i), N = (t, e, i) => (Ui(t, e, "read from private field"), i ? i.call(t) : e.get(t)), bt = (t, e, i) => e.has(t) ? mn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Ni = (t, e, i, n) => (Ui(t, e, "write to private field"), e.set(t, i), i), q = (t, e, i) => (Ui(t, e, "access private method"), i), Dt, ce, Wt, Lt, M, Qe, xe, Si, vn, fn, gn, xn, _n, yn, bn, wn, kn;
let x = class extends ii(V, void 0) {
  constructor() {
    super(), bt(this, M), bt(this, Dt, new Vi(this, {
      getUniqueOfElement: (t) => t.id,
      getUniqueOfModel: (t) => t.key,
      identifier: "Umb.SorterIdentifier.InputRichMedia",
      itemSelector: "uui-card-media",
      containerSelector: ".container",
      resolvePlacement: Yi,
      onChange: ({ model: t }) => {
        this.value = t, this.dispatchEvent(new C());
      }
    })), this.min = 0, this.minMessage = "This field need more items", this.max = 1 / 0, this.maxMessage = "This field exceeds the allowed amount of items", this.multiple = !1, bt(this, ce, !1), bt(this, Wt, !1), this._cards = [], bt(this, Lt, new mo(this, tn)), bt(this, xe, (t) => this.allowedContentTypeIds && this.allowedContentTypeIds.length > 0 ? this.allowedContentTypeIds.includes(t.mediaType.unique) : !0), this.observe(N(this, Lt).items, () => {
      q(this, M, Qe).call(this);
    }), new ei(this, Wo).addAdditionalPath(":key").onSetup((t) => {
      const e = t.key;
      if (!e) return !1;
      const i = this.value?.find((n) => n.key === e);
      return i ? {
        data: {
          cropOptions: this.preselectedCrops,
          hideFocalPoint: !this.focalPointEnabled,
          key: e,
          unique: i.mediaKey,
          pickableFilter: N(this, xe)
        },
        value: {
          crops: i.crops ?? [],
          focalPoint: i.focalPoint ?? { left: 0.5, top: 0.5 },
          src: "",
          key: e,
          unique: i.mediaKey
        }
      } : !1;
    }).onSubmit((t) => {
      this.value = this.value?.map((e) => {
        if (e.key !== t.key) return e;
        const i = this.focalPointEnabled ? t.focalPoint : null, n = t.crops, a = t.unique, o = a === e.mediaKey ? e.key : ai.new();
        return { ...e, crops: n, mediaKey: a, focalPoint: i, key: o };
      }), this.dispatchEvent(new C());
    }).observeRouteBuilder((t) => {
      this._routeBuilder = t;
    }), this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? Gi,
      () => !this.readonly && !!this.required && (!this.value || this.value.length === 0)
    ), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !this.readonly && // Only if min is set:
      !!this.min && // if the value is empty and not required, we should not validate the min:
      !(this.value?.length === 0 && this.required == !1) && // Validate the min:
      (this.value?.length ?? 0) < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !this.readonly && !!this.value && !!this.max && this.value?.length > this.max
    );
  }
  set value(t) {
    super.value = t, N(this, Dt).setModel(t), N(this, Lt).setUniques(t?.map((e) => e.mediaKey)), q(this, M, Qe).call(this);
  }
  get value() {
    return super.value;
  }
  set focalPointEnabled(t) {
    Ni(this, ce, t);
  }
  get focalPointEnabled() {
    return N(this, ce);
  }
  /** @deprecated will be removed in v17 */
  set alias(t) {
  }
  get alias() {
  }
  /** @deprecated will be removed in v17 */
  set variantId(t) {
  }
  get variantId() {
  }
  get readonly() {
    return N(this, Wt);
  }
  set readonly(t) {
    Ni(this, Wt, t), N(this, Wt) ? N(this, Dt).disable() : N(this, Dt).enable();
  }
  getFormElement() {
  }
  render() {
    return r`
			${q(this, M, xn).call(this)}
			<div class="container">${q(this, M, _n).call(this)} ${q(this, M, yn).call(this)}</div>
		`;
  }
};
Dt = /* @__PURE__ */ new WeakMap();
ce = /* @__PURE__ */ new WeakMap();
Wt = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakSet();
Qe = async function() {
  const t = N(this, Lt).getItems();
  if (!t.length) {
    this._cards = [];
    return;
  }
  const e = t.filter((n) => !this._cards.find((a) => a.unique === n.unique)), i = this._cards.filter((n) => !t.find((a) => n.unique === a.unique));
  e.length === 0 && i.length === 0 || (this._cards = this.value?.map((n) => {
    const a = t.find((o) => o.unique === n.mediaKey);
    return {
      unique: n.key,
      media: n.mediaKey,
      name: a?.name ?? "",
      icon: a?.mediaType?.icon,
      isTrashed: a?.isTrashed ?? !1
    };
  }) ?? []);
};
xe = /* @__PURE__ */ new WeakMap();
Si = function(t) {
  if (!t.length) return;
  const e = t.map((i) => ({
    key: ai.new(),
    mediaKey: i,
    mediaTypeAlias: "",
    crops: [],
    focalPoint: null
  }));
  this.value = [...this.value ?? [], ...e], this.dispatchEvent(new C());
};
vn = async function() {
  const i = await (await this.getContext(Bi))?.open(this, vi, {
    data: {
      multiple: this.multiple,
      startNode: this.startNode,
      pickableFilter: N(this, xe)
    },
    value: { selection: [] }
  })?.onSubmit().catch(() => null);
  if (!i) return;
  const n = i.selection.filter((a) => a !== null);
  q(this, M, Si).call(this, n);
};
fn = async function(t) {
  await Vn(this, {
    color: "danger",
    headline: `${this.localize.term("actions_remove")} ${t.name}?`,
    content: `${this.localize.term("defaultdialogs_confirmremove")} ${t.name}?`,
    confirmLabel: this.localize.term("actions_remove")
  }), this.value = this.value?.filter((e) => e.key !== t.unique), this.dispatchEvent(new C());
};
gn = async function(t) {
  const i = t.detail.map((n) => n.unique);
  q(this, M, Si).call(this, i);
};
xn = function() {
  if (this.readonly) return k;
  if (!(this._cards && this._cards.length >= this.max))
    return r`<umb-dropzone-media
			?multiple=${this.max > 1}
			@complete=${q(this, M, gn)}></umb-dropzone-media>`;
};
_n = function() {
  if (this._cards.length)
    return r`
			${st(
      this._cards,
      (t) => t.unique,
      (t) => q(this, M, bn).call(this, t)
    )}
		`;
};
yn = function() {
  if (!(this._cards && this._cards.length && !this.multiple))
    return this.readonly && this._cards.length > 0 ? k : r`
				<uui-button
					id="btn-add"
					look="placeholder"
					@blur=${() => {
      this.pristine = !1, this.checkValidity();
    }}
					@click=${q(this, M, vn)}
					label=${this.localize.term("general_choose")}
					?disabled=${this.readonly}>
					<uui-icon name="icon-add"></uui-icon>
					${this.localize.term("general_choose")}
				</uui-button>
			`;
};
bn = function(t) {
  if (!t.unique) return k;
  const e = this.readonly ? void 0 : this._routeBuilder?.({ key: t.unique });
  return r`
			<uui-card-media id=${t.unique} name=${t.name} .href=${e} ?readonly=${this.readonly}>
				<umb-imaging-thumbnail
					unique=${t.media}
					alt=${t.name}
					icon=${t.icon ?? "icon-picture"}></umb-imaging-thumbnail>
				${q(this, M, kn).call(this, t)} ${q(this, M, wn).call(this, t)}
			</uui-card-media>
		`;
};
wn = function(t) {
  return this.readonly ? k : r`
			<uui-action-bar slot="actions">
				<uui-button label=${this.localize.term("general_remove")} look="secondary" @click=${() => q(this, M, fn).call(this, t)}>
					<uui-icon name="icon-trash"></uui-icon>
				</uui-button>
			</uui-action-bar>
		`;
};
kn = function(t) {
  if (t.isTrashed)
    return r`
			<uui-tag size="s" slot="tag" color="danger">
				<umb-localize key="mediaPicker_trashed">Trashed</umb-localize>
			</uui-tag>
		`;
};
x.styles = [
  P`
			:host {
				position: relative;
			}
			.container {
				display: grid;
				gap: var(--uui-size-space-5);
				grid-template-columns: repeat(auto-fill, minmax(var(--umb-card-medium-min-width), 1fr));
				grid-auto-rows: var(--umb-card-medium-min-width);
			}

			#btn-add {
				text-align: center;
				height: 100%;
			}

			uui-icon {
				display: block;
				margin: 0 auto;
			}

			uui-card-media umb-icon {
				font-size: var(--uui-size-8);
			}

			uui-card-media[drag-placeholder] {
				opacity: 0.2;
			}
			img {
				background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
				background-size: 10px 10px;
				background-repeat: repeat;
			}
		`
];
b([
  p({ type: Boolean })
], x.prototype, "required", 2);
b([
  p({ type: String })
], x.prototype, "requiredMessage", 2);
b([
  p({ type: Number })
], x.prototype, "min", 2);
b([
  p({ type: String, attribute: "min-message" })
], x.prototype, "minMessage", 2);
b([
  p({ type: Number })
], x.prototype, "max", 2);
b([
  p({ type: String, attribute: "min-message" })
], x.prototype, "maxMessage", 2);
b([
  p({ type: Array })
], x.prototype, "value", 1);
b([
  p({ type: Array })
], x.prototype, "allowedContentTypeIds", 2);
b([
  p({ type: Object, attribute: !1 })
], x.prototype, "startNode", 2);
b([
  p({ type: Boolean })
], x.prototype, "multiple", 2);
b([
  p({ type: Array })
], x.prototype, "preselectedCrops", 2);
b([
  p({ type: Boolean })
], x.prototype, "focalPointEnabled", 1);
b([
  p()
], x.prototype, "alias", 1);
b([
  p()
], x.prototype, "variantId", 1);
b([
  p({ type: Boolean, reflect: !0 })
], x.prototype, "readonly", 1);
b([
  l()
], x.prototype, "_cards", 2);
b([
  l()
], x.prototype, "_routeBuilder", 2);
x = b([
  z("umb-input-rich-media")
], x);
var xs = Object.defineProperty, _s = Object.getOwnPropertyDescriptor, $n = (t) => {
  throw TypeError(t);
}, xt = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? _s(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && xs(e, i, a), a;
}, Mn = (t, e, i) => e.has(t) || $n("Cannot " + i), Je = (t, e, i) => (Mn(t, e, "read from private field"), i ? i.call(t) : e.get(t)), qe = (t, e, i) => e.has(t) ? $n("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), kt = (t, e, i) => (Mn(t, e, "access private method"), i), _e, it, En, Tn, Ii, Cn, Pn, zn, qn;
const ys = { left: 0.5, top: 0.5 }, bs = {
  temporaryFileId: null,
  src: "",
  crops: [],
  focalPoint: ys
};
let Q = class extends ii(V, void 0) {
  constructor() {
    super(), qe(this, it), this.crops = [], this._loading = !0, qe(this, _e, new go(this)), qe(this, Ii, () => {
      this.value = void 0, this._file?.temporaryFile?.abortController?.abort(), this._file = void 0, this.dispatchEvent(new C());
    }), this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? Gi,
      () => !!this.required && (!this.value || this.value.src === "" && this.value.temporaryFileId == null)
    );
  }
  firstUpdated() {
    kt(this, it, Cn).call(this), kt(this, it, En).call(this);
  }
  render() {
    return this._loading ? r`<div id="loader"><uui-loader></uui-loader></div>` : this.value?.src || this._file ? kt(this, it, qn).call(this) : kt(this, it, Pn).call(this);
  }
};
_e = /* @__PURE__ */ new WeakMap();
it = /* @__PURE__ */ new WeakSet();
En = async function() {
  await Je(this, _e).initialized, this.observe(
    Je(this, _e).part("imageFileTypes"),
    (t) => {
      this._accept = t.join(","), this._loading = !1;
    },
    "_observeFileTypes"
  );
};
Tn = function(t) {
  t.stopImmediatePropagation();
  const i = t.target.value?.[0];
  i?.status === Ji.COMPLETE && (this._file = i, this.value = fo(this.value ?? bs, {
    temporaryFileId: i.temporaryFile?.temporaryUnique
  }), this.dispatchEvent(new C()));
};
Ii = /* @__PURE__ */ new WeakMap();
Cn = function() {
  if (this.value) {
    const t = this.crops.map((e) => {
      const i = this.value.crops.find((a) => a.alias === e.alias);
      return {
        ...e,
        coordinates: i?.coordinates ?? void 0
      };
    });
    this.value = {
      ...this.value,
      crops: t
    };
  }
};
Pn = function() {
  return r`
			<umb-input-dropzone
				id="dropzone"
				accept=${Et(this._accept)}
				disable-folder-upload
				@change="${kt(this, it, Tn)}"></umb-input-dropzone>
		`;
};
zn = function(t) {
  const e = t.target.value;
  if (!e) {
    this.value = void 0, this.dispatchEvent(new C());
    return;
  }
  this.value && this.value.temporaryFileId && (e.temporaryFileId = this.value.temporaryFileId), (e.temporaryFileId || e.src !== "") && (this.value = e), this.dispatchEvent(new C());
};
qn = function() {
  return r`<umb-image-cropper-field
			.value=${this.value}
			.file=${this._file?.temporaryFile?.file}
			@change=${kt(this, it, zn)}>
			<uui-button slot="actions" @click=${Je(this, Ii)} label=${this.localize.term("content_uploadClear")}>
				<uui-icon name="icon-trash"></uui-icon>${this.localize.term("content_uploadClear")}
			</uui-button>
		</umb-image-cropper-field> `;
};
Q.styles = [
  Zi,
  Qi,
  P`
			#loader {
				display: flex;
				justify-content: center;
			}
		`
];
xt([
  p({ type: Boolean })
], Q.prototype, "required", 2);
xt([
  p({ type: String })
], Q.prototype, "requiredMessage", 2);
xt([
  p({ attribute: !1 })
], Q.prototype, "crops", 2);
xt([
  l()
], Q.prototype, "_file", 2);
xt([
  l()
], Q.prototype, "_accept", 2);
xt([
  l()
], Q.prototype, "_loading", 2);
Q = xt([
  z("umb-input-image-cropper")
], Q);
function ws(t) {
  return {
    ".123": "application/vnd.lotus-1-2-3",
    ".3dml": "text/vnd.in3d.3dml",
    ".3g2": "video/3gpp2",
    ".3gp": "video/3gpp",
    ".a": "application/octet-stream",
    ".aab": "application/x-authorware-bin",
    ".aac": "audio/x-aac",
    ".aam": "application/x-authorware-map",
    ".aas": "application/x-authorware-seg",
    ".abw": "application/x-abiword",
    ".acc": "application/vnd.americandynamics.acc",
    ".ace": "application/x-ace-compressed",
    ".acu": "application/vnd.acucobol",
    ".acutc": "application/vnd.acucorp",
    ".adp": "audio/adpcm",
    ".aep": "application/vnd.audiograph",
    ".afm": "application/x-font-type1",
    ".afp": "application/vnd.ibm.modcap",
    ".ai": "application/postscript",
    ".aif": "audio/x-aiff",
    ".aifc": "audio/x-aiff",
    ".aiff": "audio/x-aiff",
    ".air": "application/vnd.adobe.air-application-installer-package+zip",
    ".ami": "application/vnd.amiga.ami",
    ".apk": "application/vnd.android.package-archive",
    ".application": "application/x-ms-application",
    ".apr": "application/vnd.lotus-approach",
    ".asc": "application/pgp-signature",
    ".asf": "video/x-ms-asf",
    ".asm": "text/x-asm",
    ".aso": "application/vnd.accpac.simply.aso",
    ".asx": "video/x-ms-asf",
    ".atc": "application/vnd.acucorp",
    ".atom": "application/atom+xml",
    ".atomcat": "application/atomcat+xml",
    ".atomsvc": "application/atomsvc+xml",
    ".atx": "application/vnd.antix.game-component",
    ".au": "audio/basic",
    ".avi": "video/x-msvideo",
    ".aw": "application/applixware",
    ".azf": "application/vnd.airzip.filesecure.azf",
    ".azs": "application/vnd.airzip.filesecure.azs",
    ".azw": "application/vnd.amazon.ebook",
    ".bat": "application/x-msdownload",
    ".bcpio": "application/x-bcpio",
    ".bdf": "application/x-font-bdf",
    ".bdm": "application/vnd.syncml.dm+wbxml",
    ".bh2": "application/vnd.fujitsu.oasysprs",
    ".bin": "application/octet-stream",
    ".bmi": "application/vnd.bmi",
    ".bmp": "image/bmp",
    ".book": "application/vnd.framemaker",
    ".box": "application/vnd.previewsystems.box",
    ".boz": "application/x-bzip2",
    ".bpk": "application/octet-stream",
    ".btif": "image/prs.btif",
    ".bz": "application/x-bzip",
    ".bz2": "application/x-bzip2",
    ".c": "text/x-c",
    ".c4d": "application/vnd.clonk.c4group",
    ".c4f": "application/vnd.clonk.c4group",
    ".c4g": "application/vnd.clonk.c4group",
    ".c4p": "application/vnd.clonk.c4group",
    ".c4u": "application/vnd.clonk.c4group",
    ".cab": "application/vnd.ms-cab-compressed",
    ".car": "application/vnd.curl.car",
    ".cat": "application/vnd.ms-pki.seccat",
    ".cc": "text/x-c",
    ".cct": "application/x-director",
    ".ccxml": "application/ccxml+xml",
    ".cdbcmsg": "application/vnd.contact.cmsg",
    ".cdf": "application/x-netcdf",
    ".cdkey": "application/vnd.mediastation.cdkey",
    ".cdx": "chemical/x-cdx",
    ".cdxml": "application/vnd.chemdraw+xml",
    ".cdy": "application/vnd.cinderella",
    ".cer": "application/pkix-cert",
    ".cgm": "image/cgm",
    ".chat": "application/x-chat",
    ".chm": "application/vnd.ms-htmlhelp",
    ".chrt": "application/vnd.kde.kchart",
    ".cif": "chemical/x-cif",
    ".cii": "application/vnd.anser-web-certificate-issue-initiation",
    ".cil": "application/vnd.ms-artgalry",
    ".cla": "application/vnd.claymore",
    ".class": "application/java-vm",
    ".clkk": "application/vnd.crick.clicker.keyboard",
    ".clkp": "application/vnd.crick.clicker.palette",
    ".clkt": "application/vnd.crick.clicker.template",
    ".clkw": "application/vnd.crick.clicker.wordbank",
    ".clkx": "application/vnd.crick.clicker",
    ".clp": "application/x-msclip",
    ".cmc": "application/vnd.cosmocaller",
    ".cmdf": "chemical/x-cmdf",
    ".cml": "chemical/x-cml",
    ".cmp": "application/vnd.yellowriver-custom-menu",
    ".cmx": "image/x-cmx",
    ".cod": "application/vnd.rim.cod",
    ".com": "application/x-msdownload",
    ".conf": "text/plain",
    ".cpio": "application/x-cpio",
    ".cpp": "text/x-c",
    ".cpt": "application/mac-compactpro",
    ".crd": "application/x-mscardfile",
    ".crl": "application/pkix-crl",
    ".crt": "application/x-x509-ca-cert",
    ".csh": "application/x-csh",
    ".csml": "chemical/x-csml",
    ".csp": "application/vnd.commonspace",
    ".css": "text/css",
    ".cst": "application/x-director",
    ".csv": "text/csv",
    ".cu": "application/cu-seeme",
    ".curl": "text/vnd.curl",
    ".cww": "application/prs.cww",
    ".cxt": "application/x-director",
    ".cxx": "text/x-c",
    ".daf": "application/vnd.mobius.daf",
    ".dataless": "application/vnd.fdsn.seed",
    ".davmount": "application/davmount+xml",
    ".dcr": "application/x-director",
    ".dcurl": "text/vnd.curl.dcurl",
    ".dd2": "application/vnd.oma.dd2+xml",
    ".ddd": "application/vnd.fujixerox.ddd",
    ".deb": "application/x-debian-package",
    ".def": "text/plain",
    ".deploy": "application/octet-stream",
    ".der": "application/x-x509-ca-cert",
    ".dfac": "application/vnd.dreamfactory",
    ".dic": "text/x-c",
    ".diff": "text/plain",
    ".dir": "application/x-director",
    ".dis": "application/vnd.mobius.dis",
    ".dist": "application/octet-stream",
    ".distz": "application/octet-stream",
    ".djv": "image/vnd.djvu",
    ".djvu": "image/vnd.djvu",
    ".dll": "application/x-msdownload",
    ".dmg": "application/octet-stream",
    ".dms": "application/octet-stream",
    ".dna": "application/vnd.dna",
    ".doc": "application/msword",
    ".docm": "application/vnd.ms-word.document.macroenabled.12",
    ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".dot": "application/msword",
    ".dotm": "application/vnd.ms-word.template.macroenabled.12",
    ".dotx": "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
    ".dp": "application/vnd.osgi.dp",
    ".dpg": "application/vnd.dpgraph",
    ".dsc": "text/prs.lines.tag",
    ".dtb": "application/x-dtbook+xml",
    ".dtd": "application/xml-dtd",
    ".dts": "audio/vnd.dts",
    ".dtshd": "audio/vnd.dts.hd",
    ".dump": "application/octet-stream",
    ".dvi": "application/x-dvi",
    ".dwf": "model/vnd.dwf",
    ".dwg": "image/vnd.dwg",
    ".dxf": "image/vnd.dxf",
    ".dxp": "application/vnd.spotfire.dxp",
    ".dxr": "application/x-director",
    ".ecelp4800": "audio/vnd.nuera.ecelp4800",
    ".ecelp7470": "audio/vnd.nuera.ecelp7470",
    ".ecelp9600": "audio/vnd.nuera.ecelp9600",
    ".ecma": "application/ecmascript",
    ".edm": "application/vnd.novadigm.edm",
    ".edx": "application/vnd.novadigm.edx",
    ".efif": "application/vnd.picsel",
    ".ei6": "application/vnd.pg.osasli",
    ".elc": "application/octet-stream",
    ".eml": "message/rfc822",
    ".emma": "application/emma+xml",
    ".eol": "audio/vnd.digital-winds",
    ".eot": "application/vnd.ms-fontobject",
    ".eps": "application/postscript",
    ".epub": "application/epub+zip",
    ".es3": "application/vnd.eszigno3+xml",
    ".esf": "application/vnd.epson.esf",
    ".et3": "application/vnd.eszigno3+xml",
    ".etx": "text/x-setext",
    ".exe": "application/x-msdownload",
    ".ext": "application/vnd.novadigm.ext",
    ".ez": "application/andrew-inset",
    ".ez2": "application/vnd.ezpix-album",
    ".ez3": "application/vnd.ezpix-package",
    ".f": "text/x-fortran",
    ".f4v": "video/x-f4v",
    ".f77": "text/x-fortran",
    ".f90": "text/x-fortran",
    ".fbs": "image/vnd.fastbidsheet",
    ".fdf": "application/vnd.fdf",
    ".fe_launch": "application/vnd.denovo.fcselayout-link",
    ".fg5": "application/vnd.fujitsu.oasysgp",
    ".fgd": "application/x-director",
    ".fh": "image/x-freehand",
    ".fh4": "image/x-freehand",
    ".fh5": "image/x-freehand",
    ".fh7": "image/x-freehand",
    ".fhc": "image/x-freehand",
    ".fig": "application/x-xfig",
    ".fli": "video/x-fli",
    ".flo": "application/vnd.micrografx.flo",
    ".flv": "video/x-flv",
    ".flw": "application/vnd.kde.kivio",
    ".flx": "text/vnd.fmi.flexstor",
    ".fly": "text/vnd.fly",
    ".fm": "application/vnd.framemaker",
    ".fnc": "application/vnd.frogans.fnc",
    ".for": "text/x-fortran",
    ".fpx": "image/vnd.fpx",
    ".frame": "application/vnd.framemaker",
    ".fsc": "application/vnd.fsc.weblaunch",
    ".fst": "image/vnd.fst",
    ".ftc": "application/vnd.fluxtime.clip",
    ".fti": "application/vnd.anser-web-funds-transfer-initiation",
    ".fvt": "video/vnd.fvt",
    ".fzs": "application/vnd.fuzzysheet",
    ".g3": "image/g3fax",
    ".gac": "application/vnd.groove-account",
    ".gdl": "model/vnd.gdl",
    ".geo": "application/vnd.dynageo",
    ".gex": "application/vnd.geometry-explorer",
    ".ggb": "application/vnd.geogebra.file",
    ".ggt": "application/vnd.geogebra.tool",
    ".ghf": "application/vnd.groove-help",
    ".gif": "image/gif",
    ".gim": "application/vnd.groove-identity-message",
    ".gmx": "application/vnd.gmx",
    ".gnumeric": "application/x-gnumeric",
    ".gph": "application/vnd.flographit",
    ".gqf": "application/vnd.grafeq",
    ".gqs": "application/vnd.grafeq",
    ".gram": "application/srgs",
    ".gre": "application/vnd.geometry-explorer",
    ".grv": "application/vnd.groove-injector",
    ".grxml": "application/srgs+xml",
    ".gsf": "application/x-font-ghostscript",
    ".gtar": "application/x-gtar",
    ".gtm": "application/vnd.groove-tool-message",
    ".gtw": "model/vnd.gtw",
    ".gv": "text/vnd.graphviz",
    ".gz": "application/x-gzip",
    ".h": "text/x-c",
    ".h261": "video/h261",
    ".h263": "video/h263",
    ".h264": "video/h264",
    ".hbci": "application/vnd.hbci",
    ".hdf": "application/x-hdf",
    ".hh": "text/x-c",
    ".hlp": "application/winhlp",
    ".hpgl": "application/vnd.hp-hpgl",
    ".hpid": "application/vnd.hp-hpid",
    ".hps": "application/vnd.hp-hps",
    ".hqx": "application/mac-binhex40",
    ".htke": "application/vnd.kenameaapp",
    ".htm": "text/html",
    ".html": "text/html",
    ".hvd": "application/vnd.yamaha.hv-dic",
    ".hvp": "application/vnd.yamaha.hv-voice",
    ".hvs": "application/vnd.yamaha.hv-script",
    ".icc": "application/vnd.iccprofile",
    ".ice": "x-conference/x-cooltalk",
    ".icm": "application/vnd.iccprofile",
    ".ico": "image/x-icon",
    ".ics": "text/calendar",
    ".ief": "image/ief",
    ".ifb": "text/calendar",
    ".ifm": "application/vnd.shana.informed.formdata",
    ".iges": "model/iges",
    ".igl": "application/vnd.igloader",
    ".igs": "model/iges",
    ".igx": "application/vnd.micrografx.igx",
    ".iif": "application/vnd.shana.informed.interchange",
    ".imp": "application/vnd.accpac.simply.imp",
    ".ims": "application/vnd.ms-ims",
    ".in": "text/plain",
    ".ipk": "application/vnd.shana.informed.package",
    ".irm": "application/vnd.ibm.rights-management",
    ".irp": "application/vnd.irepository.package+xml",
    ".iso": "application/octet-stream",
    ".itp": "application/vnd.shana.informed.formtemplate",
    ".ivp": "application/vnd.immervision-ivp",
    ".ivu": "application/vnd.immervision-ivu",
    ".jad": "text/vnd.sun.j2me.app-descriptor",
    ".jam": "application/vnd.jam",
    ".jar": "application/java-archive",
    ".java": "text/x-java-source",
    ".jisp": "application/vnd.jisp",
    ".jlt": "application/vnd.hp-jlyt",
    ".jnlp": "application/x-java-jnlp-file",
    ".joda": "application/vnd.joost.joda-archive",
    ".jpe": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".jpgm": "video/jpm",
    ".jpgv": "video/jpeg",
    ".jpm": "video/jpm",
    ".js": "application/javascript",
    ".json": "application/json",
    ".kar": "audio/midi",
    ".karbon": "application/vnd.kde.karbon",
    ".kfo": "application/vnd.kde.kformula",
    ".kia": "application/vnd.kidspiration",
    ".kil": "application/x-killustrator",
    ".kml": "application/vnd.google-earth.kml+xml",
    ".kmz": "application/vnd.google-earth.kmz",
    ".kne": "application/vnd.kinar",
    ".knp": "application/vnd.kinar",
    ".kon": "application/vnd.kde.kontour",
    ".kpr": "application/vnd.kde.kpresenter",
    ".kpt": "application/vnd.kde.kpresenter",
    ".ksh": "text/plain",
    ".ksp": "application/vnd.kde.kspread",
    ".ktr": "application/vnd.kahootz",
    ".ktz": "application/vnd.kahootz",
    ".kwd": "application/vnd.kde.kword",
    ".kwt": "application/vnd.kde.kword",
    ".latex": "application/x-latex",
    ".lbd": "application/vnd.llamagraphics.life-balance.desktop",
    ".lbe": "application/vnd.llamagraphics.life-balance.exchange+xml",
    ".les": "application/vnd.hhe.lesson-player",
    ".lha": "application/octet-stream",
    ".link66": "application/vnd.route66.link66+xml",
    ".list": "text/plain",
    ".list3820": "application/vnd.ibm.modcap",
    ".listafp": "application/vnd.ibm.modcap",
    ".log": "text/plain",
    ".lostxml": "application/lost+xml",
    ".lrf": "application/octet-stream",
    ".lrm": "application/vnd.ms-lrm",
    ".ltf": "application/vnd.frogans.ltf",
    ".lvp": "audio/vnd.lucent.voice",
    ".lwp": "application/vnd.lotus-wordpro",
    ".lzh": "application/octet-stream",
    ".m13": "application/x-msmediaview",
    ".m14": "application/x-msmediaview",
    ".m1v": "video/mpeg",
    ".m2a": "audio/mpeg",
    ".m2v": "video/mpeg",
    ".m3a": "audio/mpeg",
    ".m3u": "audio/x-mpegurl",
    ".m4u": "video/vnd.mpegurl",
    ".m4v": "video/x-m4v",
    ".ma": "application/mathematica",
    ".mag": "application/vnd.ecowin.chart",
    ".maker": "application/vnd.framemaker",
    ".man": "text/troff",
    ".mathml": "application/mathml+xml",
    ".mb": "application/mathematica",
    ".mbk": "application/vnd.mobius.mbk",
    ".mbox": "application/mbox",
    ".mc1": "application/vnd.medcalcdata",
    ".mcd": "application/vnd.mcd",
    ".mcurl": "text/vnd.curl.mcurl",
    ".mdb": "application/x-msaccess",
    ".mdi": "image/vnd.ms-modi",
    ".me": "text/troff",
    ".mesh": "model/mesh",
    ".mfm": "application/vnd.mfmp",
    ".mgz": "application/vnd.proteus.magazine",
    ".mht": "message/rfc822",
    ".mhtml": "message/rfc822",
    ".mid": "audio/midi",
    ".midi": "audio/midi",
    ".mif": "application/vnd.mif",
    ".mime": "message/rfc822",
    ".mj2": "video/mj2",
    ".mjp2": "video/mj2",
    ".mlp": "application/vnd.dolby.mlp",
    ".mmd": "application/vnd.chipnuts.karaoke-mmd",
    ".mmf": "application/vnd.smaf",
    ".mmr": "image/vnd.fujixerox.edmics-mmr",
    ".mny": "application/x-msmoney",
    ".mobi": "application/x-mobipocket-ebook",
    ".mov": "video/quicktime",
    ".movie": "video/x-sgi-movie",
    ".mp2": "audio/mpeg",
    ".mp2a": "audio/mpeg",
    ".mp3": "audio/mpeg",
    ".mp4": "video/mp4",
    ".mp4a": "audio/mp4",
    ".mp4s": "application/mp4",
    ".mp4v": "video/mp4",
    ".mpa": "video/mpeg",
    ".mpc": "application/vnd.mophun.certificate",
    ".mpe": "video/mpeg",
    ".mpeg": "video/mpeg",
    ".mpg": "video/mpeg",
    ".mpg4": "video/mp4",
    ".mpga": "audio/mpeg",
    ".mpkg": "application/vnd.apple.installer+xml",
    ".mpm": "application/vnd.blueice.multipass",
    ".mpn": "application/vnd.mophun.application",
    ".mpp": "application/vnd.ms-project",
    ".mpt": "application/vnd.ms-project",
    ".mpy": "application/vnd.ibm.minipay",
    ".mqy": "application/vnd.mobius.mqy",
    ".mrc": "application/marc",
    ".ms": "text/troff",
    ".mscml": "application/mediaservercontrol+xml",
    ".mseed": "application/vnd.fdsn.mseed",
    ".mseq": "application/vnd.mseq",
    ".msf": "application/vnd.epson.msf",
    ".msh": "model/mesh",
    ".msi": "application/x-msdownload",
    ".msl": "application/vnd.mobius.msl",
    ".msty": "application/vnd.muvee.style",
    ".mts": "model/vnd.mts",
    ".mus": "application/vnd.musician",
    ".musicxml": "application/vnd.recordare.musicxml+xml",
    ".mvb": "application/x-msmediaview",
    ".mwf": "application/vnd.mfer",
    ".mxf": "application/mxf",
    ".mxl": "application/vnd.recordare.musicxml",
    ".mxml": "application/xv+xml",
    ".mxs": "application/vnd.triscape.mxs",
    ".mxu": "video/vnd.mpegurl",
    ".n-gage": "application/vnd.nokia.n-gage.symbian.install",
    ".nb": "application/mathematica",
    ".nc": "application/x-netcdf",
    ".ncx": "application/x-dtbncx+xml",
    ".ngdat": "application/vnd.nokia.n-gage.data",
    ".nlu": "application/vnd.neurolanguage.nlu",
    ".nml": "application/vnd.enliven",
    ".nnd": "application/vnd.noblenet-directory",
    ".nns": "application/vnd.noblenet-sealer",
    ".nnw": "application/vnd.noblenet-web",
    ".npx": "image/vnd.net-fpx",
    ".nsf": "application/vnd.lotus-notes",
    ".nws": "message/rfc822",
    ".o": "application/octet-stream",
    ".oa2": "application/vnd.fujitsu.oasys2",
    ".oa3": "application/vnd.fujitsu.oasys3",
    ".oas": "application/vnd.fujitsu.oasys",
    ".obd": "application/x-msbinder",
    ".obj": "application/octet-stream",
    ".oda": "application/oda",
    ".odb": "application/vnd.oasis.opendocument.database",
    ".odc": "application/vnd.oasis.opendocument.chart",
    ".odf": "application/vnd.oasis.opendocument.formula",
    ".odft": "application/vnd.oasis.opendocument.formula-template",
    ".odg": "application/vnd.oasis.opendocument.graphics",
    ".odi": "application/vnd.oasis.opendocument.image",
    ".odp": "application/vnd.oasis.opendocument.presentation",
    ".ods": "application/vnd.oasis.opendocument.spreadsheet",
    ".odt": "application/vnd.oasis.opendocument.text",
    ".oga": "audio/ogg",
    ".ogg": "audio/ogg",
    ".ogv": "video/ogg",
    ".ogx": "application/ogg",
    ".onepkg": "application/onenote",
    ".onetmp": "application/onenote",
    ".onetoc": "application/onenote",
    ".onetoc2": "application/onenote",
    ".opf": "application/oebps-package+xml",
    ".oprc": "application/vnd.palm",
    ".opus": "audio/ogg",
    ".org": "application/vnd.lotus-organizer",
    ".osf": "application/vnd.yamaha.openscoreformat",
    ".osfpvg": "application/vnd.yamaha.openscoreformat.osfpvg+xml",
    ".otc": "application/vnd.oasis.opendocument.chart-template",
    ".otf": "application/x-font-otf",
    ".otg": "application/vnd.oasis.opendocument.graphics-template",
    ".oth": "application/vnd.oasis.opendocument.text-web",
    ".oti": "application/vnd.oasis.opendocument.image-template",
    ".otm": "application/vnd.oasis.opendocument.text-master",
    ".otp": "application/vnd.oasis.opendocument.presentation-template",
    ".ots": "application/vnd.oasis.opendocument.spreadsheet-template",
    ".ott": "application/vnd.oasis.opendocument.text-template",
    ".oxt": "application/vnd.openofficeorg.extension",
    ".p": "text/x-pascal",
    ".p10": "application/pkcs10",
    ".p12": "application/x-pkcs12",
    ".p7b": "application/x-pkcs7-certificates",
    ".p7c": "application/pkcs7-mime",
    ".p7m": "application/pkcs7-mime",
    ".p7r": "application/x-pkcs7-certreqresp",
    ".p7s": "application/pkcs7-signature",
    ".pas": "text/x-pascal",
    ".pbd": "application/vnd.powerbuilder6",
    ".pbm": "image/x-portable-bitmap",
    ".pcf": "application/x-font-pcf",
    ".pcl": "application/vnd.hp-pcl",
    ".pclxl": "application/vnd.hp-pclxl",
    ".pct": "image/x-pict",
    ".pcurl": "application/vnd.curl.pcurl",
    ".pcx": "image/x-pcx",
    ".pdb": "application/vnd.palm",
    ".pdf": "application/pdf",
    ".pfa": "application/x-font-type1",
    ".pfb": "application/x-font-type1",
    ".pfm": "application/x-font-type1",
    ".pfr": "application/font-tdpfr",
    ".pfx": "application/x-pkcs12",
    ".pgm": "image/x-portable-graymap",
    ".pgn": "application/x-chess-pgn",
    ".pgp": "application/pgp-encrypted",
    ".pic": "image/x-pict",
    ".pkg": "application/octet-stream",
    ".pki": "application/pkixcmp",
    ".pkipath": "application/pkix-pkipath",
    ".pl": "text/plain",
    ".plb": "application/vnd.3gpp.pic-bw-large",
    ".plc": "application/vnd.mobius.plc",
    ".plf": "application/vnd.pocketlearn",
    ".pls": "application/pls+xml",
    ".pml": "application/vnd.ctc-posml",
    ".png": "image/png",
    ".pnm": "image/x-portable-anymap",
    ".portpkg": "application/vnd.macports.portpkg",
    ".pot": "application/vnd.ms-powerpoint",
    ".potm": "application/vnd.ms-powerpoint.template.macroenabled.12",
    ".potx": "application/vnd.openxmlformats-officedocument.presentationml.template",
    ".ppa": "application/vnd.ms-powerpoint",
    ".ppam": "application/vnd.ms-powerpoint.addin.macroenabled.12",
    ".ppd": "application/vnd.cups-ppd",
    ".ppm": "image/x-portable-pixmap",
    ".pps": "application/vnd.ms-powerpoint",
    ".ppsm": "application/vnd.ms-powerpoint.slideshow.macroenabled.12",
    ".ppsx": "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
    ".ppt": "application/vnd.ms-powerpoint",
    ".pptm": "application/vnd.ms-powerpoint.presentation.macroenabled.12",
    ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ".pqa": "application/vnd.palm",
    ".prc": "application/x-mobipocket-ebook",
    ".pre": "application/vnd.lotus-freelance",
    ".prf": "application/pics-rules",
    ".ps": "application/postscript",
    ".psb": "application/vnd.3gpp.pic-bw-small",
    ".psd": "image/vnd.adobe.photoshop",
    ".psf": "application/x-font-linux-psf",
    ".ptid": "application/vnd.pvi.ptid1",
    ".pub": "application/x-mspublisher",
    ".pvb": "application/vnd.3gpp.pic-bw-var",
    ".pwn": "application/vnd.3m.post-it-notes",
    ".pwz": "application/vnd.ms-powerpoint",
    ".py": "text/x-python",
    ".pya": "audio/vnd.ms-playready.media.pya",
    ".pyc": "application/x-python-code",
    ".pyo": "application/x-python-code",
    ".pyv": "video/vnd.ms-playready.media.pyv",
    ".qam": "application/vnd.epson.quickanime",
    ".qbo": "application/vnd.intu.qbo",
    ".qfx": "application/vnd.intu.qfx",
    ".qps": "application/vnd.publishare-delta-tree",
    ".qt": "video/quicktime",
    ".qwd": "application/vnd.quark.quarkxpress",
    ".qwt": "application/vnd.quark.quarkxpress",
    ".qxb": "application/vnd.quark.quarkxpress",
    ".qxd": "application/vnd.quark.quarkxpress",
    ".qxl": "application/vnd.quark.quarkxpress",
    ".qxt": "application/vnd.quark.quarkxpress",
    ".ra": "audio/x-pn-realaudio",
    ".ram": "audio/x-pn-realaudio",
    ".rar": "application/x-rar-compressed",
    ".ras": "image/x-cmu-raster",
    ".rcprofile": "application/vnd.ipunplugged.rcprofile",
    ".rdf": "application/rdf+xml",
    ".rdz": "application/vnd.data-vision.rdz",
    ".rep": "application/vnd.businessobjects",
    ".res": "application/x-dtbresource+xml",
    ".rgb": "image/x-rgb",
    ".rif": "application/reginfo+xml",
    ".rl": "application/resource-lists+xml",
    ".rlc": "image/vnd.fujixerox.edmics-rlc",
    ".rld": "application/resource-lists-diff+xml",
    ".rm": "application/vnd.rn-realmedia",
    ".rmi": "audio/midi",
    ".rmp": "audio/x-pn-realaudio-plugin",
    ".rms": "application/vnd.jcp.javame.midlet-rms",
    ".rnc": "application/relax-ng-compact-syntax",
    ".roff": "text/troff",
    ".rpm": "application/x-rpm",
    ".rpss": "application/vnd.nokia.radio-presets",
    ".rpst": "application/vnd.nokia.radio-preset",
    ".rq": "application/sparql-query",
    ".rs": "application/rls-services+xml",
    ".rsd": "application/rsd+xml",
    ".rss": "application/rss+xml",
    ".rtf": "application/rtf",
    ".rtx": "text/richtext",
    ".s": "text/x-asm",
    ".saf": "application/vnd.yamaha.smaf-audio",
    ".sbml": "application/sbml+xml",
    ".sc": "application/vnd.ibm.secure-container",
    ".scd": "application/x-msschedule",
    ".scm": "application/vnd.lotus-screencam",
    ".scq": "application/scvp-cv-request",
    ".scs": "application/scvp-cv-response",
    ".scurl": "text/vnd.curl.scurl",
    ".sda": "application/vnd.stardivision.draw",
    ".sdc": "application/vnd.stardivision.calc",
    ".sdd": "application/vnd.stardivision.impress",
    ".sdkd": "application/vnd.solent.sdkm+xml",
    ".sdkm": "application/vnd.solent.sdkm+xml",
    ".sdp": "application/sdp",
    ".sdw": "application/vnd.stardivision.writer",
    ".see": "application/vnd.seemail",
    ".seed": "application/vnd.fdsn.seed",
    ".sema": "application/vnd.sema",
    ".semd": "application/vnd.semd",
    ".semf": "application/vnd.semf",
    ".ser": "application/java-serialized-object",
    ".setpay": "application/set-payment-initiation",
    ".setreg": "application/set-registration-initiation",
    ".sfd-hdstx": "application/vnd.hydrostatix.sof-data",
    ".sfs": "application/vnd.spotfire.sfs",
    ".sgl": "application/vnd.stardivision.writer-global",
    ".sgm": "text/sgml",
    ".sgml": "text/sgml",
    ".sh": "application/x-sh",
    ".shar": "application/x-shar",
    ".shf": "application/shf+xml",
    ".si": "text/vnd.wap.si",
    ".sic": "application/vnd.wap.sic",
    ".sig": "application/pgp-signature",
    ".silo": "model/mesh",
    ".sis": "application/vnd.symbian.install",
    ".sisx": "application/vnd.symbian.install",
    ".sit": "application/x-stuffit",
    ".sitx": "application/x-stuffitx",
    ".skd": "application/vnd.koan",
    ".skm": "application/vnd.koan",
    ".skp": "application/vnd.koan",
    ".skt": "application/vnd.koan",
    ".sl": "text/vnd.wap.sl",
    ".slc": "application/vnd.wap.slc",
    ".sldm": "application/vnd.ms-powerpoint.slide.macroenabled.12",
    ".sldx": "application/vnd.openxmlformats-officedocument.presentationml.slide",
    ".slt": "application/vnd.epson.salt",
    ".smf": "application/vnd.stardivision.math",
    ".smi": "application/smil+xml",
    ".smil": "application/smil+xml",
    ".snd": "audio/basic",
    ".snf": "application/x-font-snf",
    ".so": "application/octet-stream",
    ".spc": "application/x-pkcs7-certificates",
    ".spf": "application/vnd.yamaha.smaf-phrase",
    ".spl": "application/x-futuresplash",
    ".spot": "text/vnd.in3d.spot",
    ".spp": "application/scvp-vp-response",
    ".spq": "application/scvp-vp-request",
    ".spx": "audio/ogg",
    ".src": "application/x-wais-source",
    ".srx": "application/sparql-results+xml",
    ".sse": "application/vnd.kodak-descriptor",
    ".ssf": "application/vnd.epson.ssf",
    ".ssml": "application/ssml+xml",
    ".stc": "application/vnd.sun.xml.calc.template",
    ".std": "application/vnd.sun.xml.draw.template",
    ".stf": "application/vnd.wt.stf",
    ".sti": "application/vnd.sun.xml.impress.template",
    ".stk": "application/hyperstudio",
    ".stl": "application/vnd.ms-pki.stl",
    ".str": "application/vnd.pg.format",
    ".stw": "application/vnd.sun.xml.writer.template",
    ".sus": "application/vnd.sus-calendar",
    ".susp": "application/vnd.sus-calendar",
    ".sv4cpio": "application/x-sv4cpio",
    ".sv4crc": "application/x-sv4crc",
    ".svd": "application/vnd.svd",
    ".svg": "image/svg+xml",
    ".svgz": "image/svg+xml",
    ".swa": "application/x-director",
    ".swf": "application/x-shockwave-flash",
    ".swi": "application/vnd.arastra.swi",
    ".sxc": "application/vnd.sun.xml.calc",
    ".sxd": "application/vnd.sun.xml.draw",
    ".sxg": "application/vnd.sun.xml.writer.global",
    ".sxi": "application/vnd.sun.xml.impress",
    ".sxm": "application/vnd.sun.xml.math",
    ".sxw": "application/vnd.sun.xml.writer",
    ".t": "text/troff",
    ".tao": "application/vnd.tao.intent-module-archive",
    ".tar": "application/x-tar",
    ".tcap": "application/vnd.3gpp2.tcap",
    ".tcl": "application/x-tcl",
    ".teacher": "application/vnd.smart.teacher",
    ".tex": "application/x-tex",
    ".texi": "application/x-texinfo",
    ".texinfo": "application/x-texinfo",
    ".text": "text/plain",
    ".tfm": "application/x-tex-tfm",
    ".tgz": "application/x-gzip",
    ".tif": "image/tiff",
    ".tiff": "image/tiff",
    ".tmo": "application/vnd.tmobile-livetv",
    ".torrent": "application/x-bittorrent",
    ".tpl": "application/vnd.groove-tool-template",
    ".tpt": "application/vnd.trid.tpt",
    ".tr": "text/troff",
    ".tra": "application/vnd.trueapp",
    ".trm": "application/x-msterminal",
    ".tsv": "text/tab-separated-values",
    ".ttc": "application/x-font-ttf",
    ".ttf": "application/x-font-ttf",
    ".twd": "application/vnd.simtech-mindmapper",
    ".twds": "application/vnd.simtech-mindmapper",
    ".txd": "application/vnd.genomatix.tuxedo",
    ".txf": "application/vnd.mobius.txf",
    ".txt": "text/plain",
    ".u32": "application/x-authorware-bin",
    ".udeb": "application/x-debian-package",
    ".ufd": "application/vnd.ufdl",
    ".ufdl": "application/vnd.ufdl",
    ".umj": "application/vnd.umajin",
    ".unityweb": "application/vnd.unity",
    ".uoml": "application/vnd.uoml+xml",
    ".uri": "text/uri-list",
    ".uris": "text/uri-list",
    ".urls": "text/uri-list",
    ".ustar": "application/x-ustar",
    ".utz": "application/vnd.uiq.theme",
    ".uu": "text/x-uuencode",
    ".vcd": "application/x-cdlink",
    ".vcf": "text/x-vcard",
    ".vcg": "application/vnd.groove-vcard",
    ".vcs": "text/x-vcalendar",
    ".vcx": "application/vnd.vcx",
    ".vis": "application/vnd.visionary",
    ".viv": "video/vnd.vivo",
    ".vor": "application/vnd.stardivision.writer",
    ".vox": "application/x-authorware-bin",
    ".vrml": "model/vrml",
    ".vsd": "application/vnd.visio",
    ".vsf": "application/vnd.vsf",
    ".vss": "application/vnd.visio",
    ".vst": "application/vnd.visio",
    ".vsw": "application/vnd.visio",
    ".vtu": "model/vnd.vtu",
    ".vxml": "application/voicexml+xml",
    ".w3d": "application/x-director",
    ".wad": "application/x-doom",
    ".wav": "audio/x-wav",
    ".wax": "audio/x-ms-wax",
    ".wbmp": "image/vnd.wap.wbmp",
    ".wbs": "application/vnd.criticaltools.wbs+xml",
    ".wbxml": "application/vnd.wap.wbxml",
    ".wcm": "application/vnd.ms-works",
    ".wdb": "application/vnd.ms-works",
    ".weba": "audio/webm",
    ".webm": "video/webm",
    ".webp": "image/webp",
    ".wiz": "application/msword",
    ".wks": "application/vnd.ms-works",
    ".wm": "video/x-ms-wm",
    ".wma": "audio/x-ms-wma",
    ".wmd": "application/x-ms-wmd",
    ".wmf": "application/x-msmetafile",
    ".wml": "text/vnd.wap.wml",
    ".wmlc": "application/vnd.wap.wmlc",
    ".wmls": "text/vnd.wap.wmlscript",
    ".wmlsc": "application/vnd.wap.wmlscriptc",
    ".wmv": "video/x-ms-wmv",
    ".wmx": "video/x-ms-wmx",
    ".wmz": "application/x-ms-wmz",
    ".wpd": "application/vnd.wordperfect",
    ".wpl": "application/vnd.ms-wpl",
    ".wps": "application/vnd.ms-works",
    ".wqd": "application/vnd.wqd",
    ".wri": "application/x-mswrite",
    ".wrl": "model/vrml",
    ".wsdl": "application/wsdl+xml",
    ".wspolicy": "application/wspolicy+xml",
    ".wtb": "application/vnd.webturbo",
    ".wvx": "video/x-ms-wvx",
    ".x32": "application/x-authorware-bin",
    ".x3d": "application/vnd.hzn-3d-crossword",
    ".xap": "application/x-silverlight-app",
    ".xar": "application/vnd.xara",
    ".xbap": "application/x-ms-xbap",
    ".xbd": "application/vnd.fujixerox.docuworks.binder",
    ".xbm": "image/x-xbitmap",
    ".xdm": "application/vnd.syncml.dm+xml",
    ".xdp": "application/vnd.adobe.xdp+xml",
    ".xdw": "application/vnd.fujixerox.docuworks",
    ".xenc": "application/xenc+xml",
    ".xer": "application/patch-ops-error+xml",
    ".xfdf": "application/vnd.adobe.xfdf",
    ".xfdl": "application/vnd.xfdl",
    ".xht": "application/xhtml+xml",
    ".xhtml": "application/xhtml+xml",
    ".xhvml": "application/xv+xml",
    ".xif": "image/vnd.xiff",
    ".xla": "application/vnd.ms-excel",
    ".xlam": "application/vnd.ms-excel.addin.macroenabled.12",
    ".xlb": "application/vnd.ms-excel",
    ".xlc": "application/vnd.ms-excel",
    ".xlm": "application/vnd.ms-excel",
    ".xls": "application/vnd.ms-excel",
    ".xlsb": "application/vnd.ms-excel.sheet.binary.macroenabled.12",
    ".xlsm": "application/vnd.ms-excel.sheet.macroenabled.12",
    ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ".xlt": "application/vnd.ms-excel",
    ".xltm": "application/vnd.ms-excel.template.macroenabled.12",
    ".xltx": "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
    ".xlw": "application/vnd.ms-excel",
    ".xml": "application/xml",
    ".xo": "application/vnd.olpc-sugar",
    ".xop": "application/xop+xml",
    ".xpdl": "application/xml",
    ".xpi": "application/x-xpinstall",
    ".xpm": "image/x-xpixmap",
    ".xpr": "application/vnd.is-xpr",
    ".xps": "application/vnd.ms-xpsdocument",
    ".xpw": "application/vnd.intercon.formnet",
    ".xpx": "application/vnd.intercon.formnet",
    ".xsl": "application/xml",
    ".xslt": "application/xslt+xml",
    ".xsm": "application/vnd.syncml+xml",
    ".xspf": "application/xspf+xml",
    ".xul": "application/vnd.mozilla.xul+xml",
    ".xvm": "application/xv+xml",
    ".xvml": "application/xv+xml",
    ".xwd": "image/x-xwindowdump",
    ".xyz": "chemical/x-xyz",
    ".zaz": "application/vnd.zzazz.deck+xml",
    ".zip": "application/zip",
    ".zir": "application/vnd.zul",
    ".zirz": "application/vnd.zul",
    ".zmm": "application/vnd.handheld-entertainment+xml"
  }[t.toLowerCase()] || null;
}
var ks = Object.defineProperty, $s = Object.getOwnPropertyDescriptor, Un = (t) => {
  throw TypeError(t);
}, _t = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? $s(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && ks(e, i, a), a;
}, Oi = (t, e, i) => e.has(t) || Un("Cannot " + i), de = (t, e, i) => (Oi(t, e, "read from private field"), i ? i.call(t) : e.get(t)), Ue = (t, e, i) => e.has(t) ? Un("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Sn = (t, e, i, n) => (Oi(t, e, "write to private field"), e.set(t, i), i), R = (t, e, i) => (Oi(t, e, "access private method"), i), ue, $t, T, In, On, An, Rn, Fn, Dn, Wn, Nn, Bn, ke;
let J = class extends V {
  constructor() {
    super(), Ue(this, T), Ue(this, ue, ""), this._serverUrl = "", Ue(this, $t, []), this.consumeContext(ta, (t) => {
      this._serverUrl = t.getServerUrl();
    });
  }
  set value(t) {
    Sn(this, ue, t?.src ?? ""), R(this, T, On).call(this);
  }
  get value() {
    return {
      src: de(this, ue),
      temporaryFileId: this.temporaryFile?.temporaryUnique
    };
  }
  disconnectedCallback() {
    super.disconnectedCallback(), R(this, T, ke).call(this);
  }
  render() {
    return !this.temporaryFile && !this.value.src ? R(this, T, Dn).call(this) : this.value?.src && this._previewAlias ? R(this, T, Wn).call(this, this.value.src) : k;
  }
};
ue = /* @__PURE__ */ new WeakMap();
$t = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakSet();
In = async function() {
  return de(this, $t).length ? de(this, $t) : (await new _o(this, yo, "fileUploadPreview", null, (t) => {
    Sn(this, $t, t.map((e) => e.manifest));
  }).asPromise(), de(this, $t));
};
On = async function() {
  this._previewAlias = await R(this, T, An).call(this);
};
An = async function() {
  if (!this.value.src) return;
  const t = await R(this, T, In).call(this), e = t.find(
    (o) => Ri(o.forMimeTypes, "*/*")
  )?.alias;
  let i = null;
  if (this.temporaryFile?.file ? i = this.temporaryFile.file.type : i = R(this, T, Rn).call(this, this.value.src), !i) return e;
  const n = t.find((o) => Ri(o.forMimeTypes, i));
  if (n) return n.alias;
  const a = t.find((o) => (Array.isArray(o.forMimeTypes) ? o.forMimeTypes : [o.forMimeTypes]).find((c) => {
    const v = c.replace(/\*/g, "");
    if (i.startsWith(v) || i.endsWith(v)) return o.alias;
  }));
  return a ? a.alias : e;
};
Rn = function(t) {
  if (t.startsWith("data:"))
    return t.substring(5, t.indexOf(";"));
  const e = t.split(".").pop()?.toLowerCase();
  return e ? ws("." + e) : null;
};
Fn = async function(t) {
  t.stopImmediatePropagation();
  const i = t.target.value?.[0];
  if (i?.status !== Ji.COMPLETE) return;
  this.temporaryFile = i.temporaryFile, R(this, T, ke).call(this);
  const n = URL.createObjectURL(this.temporaryFile.file);
  this.value = { src: n }, this.dispatchEvent(new C());
};
Dn = function() {
  return r`
			<umb-input-dropzone
				id="dropzone"
				disable-folder-upload
				accept=${Et(this._extensions?.join(","))}
				@change=${R(this, T, Fn)}></umb-input-dropzone>
		`;
};
Wn = function(t) {
  return t.startsWith("blob:") || (t = this._serverUrl + t), r`
			<div id="wrapper">
				<div id="wrapperInner">
					<umb-extension-slot
						type="fileUploadPreview"
						.props=${{ path: t, file: this.temporaryFile?.file }}
						.filter=${(e) => e.alias === this._previewAlias}>
					</umb-extension-slot>
				</div>
			</div>
			${R(this, T, Nn).call(this)}
		`;
};
Nn = function() {
  return r`
			<uui-button compact @click=${R(this, T, Bn)} label=${this.localize.term("content_uploadClear")}>
				<uui-icon name="icon-trash"></uui-icon>${this.localize.term("content_uploadClear")}
			</uui-button>
		`;
};
Bn = function() {
  this.temporaryFile?.abortController?.abort(), R(this, T, ke).call(this), this.value = { src: void 0 }, this.temporaryFile = void 0, this.dispatchEvent(new C());
};
ke = function() {
  this.value?.src?.startsWith("blob:") && URL.revokeObjectURL(this.value.src);
};
J.styles = [
  Zi,
  Qi,
  P`
			:host {
				position: relative;
			}
			uui-icon {
				vertical-align: sub;
				margin-right: var(--uui-size-space-4);
			}

			#wrapper {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
				gap: var(--uui-size-space-4);
				box-sizing: border-box;
				margin-bottom: var(--uui-size-space-3);
			}

			#wrapper:has(umb-input-upload-field-file) {
				padding: var(--uui-size-space-4);
				border: 1px solid var(--uui-color-border);
				border-radius: var(--uui-border-radius);
			}

			#wrapperInner {
				position: relative;
				display: flex;
				width: 100%;
			}
		`
];
_t([
  p({ type: Object, attribute: !1 })
], J.prototype, "value", 1);
_t([
  p({
    type: Array,
    attribute: "allowed-file-extensions",
    converter(t) {
      return typeof t == "string" ? t.split(",").map((e) => e.trim()) : t;
    }
  })
], J.prototype, "allowedFileExtensions", 2);
_t([
  l()
], J.prototype, "temporaryFile", 2);
_t([
  l()
], J.prototype, "_extensions", 2);
_t([
  l()
], J.prototype, "_previewAlias", 2);
_t([
  l()
], J.prototype, "_serverUrl", 2);
J = _t([
  z("umb-input-upload-field")
], J);
export {
  rr as A,
  pr as B,
  lr as C,
  gr as D,
  x as U,
  ds as a,
  I as b,
  Q as c,
  Zt as d,
  ni as e,
  J as f,
  fr as g,
  ir as h,
  ar as i,
  Wo as j,
  vi as k,
  or as l,
  cr as m,
  tn as n,
  dr as o,
  as as p,
  Vo as q,
  ur as r,
  hr as s,
  ns as t,
  mr as u,
  vr as v,
  Le as w,
  Ge as x,
  nr as y,
  sr as z
};
//# sourceMappingURL=input-upload-field.element-B7PCDmnx.js.map
