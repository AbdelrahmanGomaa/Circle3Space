import "./input-upload-field.element-B7PCDmnx.js";
import "./media-url.repository-DUerHiJb.js";
import "./media-item.store.context-token-9YLCPlu1.js";
import { UmbInputDropzoneElement as m, UmbFileDropzoneItemStatus as U, UmbDropzoneSubmittedEvent as A } from "@umbraco-cms/backoffice/dropzone";
import { css as b, property as M, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbDeprecation as h } from "@umbraco-cms/backoffice/utils";
const N = "Umb.Repository.MediaCollection", w = "Umb.CollectionView.Media.Grid", z = "Umb.CollectionView.Media.Table", V = "Umb.Collection.Media", F = "Umb.Repository.Media.Move", x = "Umb.Repository.Media.SortChildrenOf", W = "Umb.Repository.Media.BulkMove", k = "Umb.Menu.Media", q = "Umb.Repository.Media.Url", G = "Umb.Store.MediaUrl", j = "Umb.Repository.Media.RecycleBin.Tree", K = "Umb.Store.Media.RecycleBin.Tree", H = "Umb.Tree.Media.RecycleBin", $ = "Umb.Repository.Media.RecycleBin", J = "Umb.Repository.Media.BulkTrash", Q = "media-recycle-bin-root", X = "Umb.Repository.Media.Reference", Z = "Umb.Repository.Media.Detail", ee = "Umb.Store.Media.Detail", te = "Umb.Repository.Document.Validation", se = "Umb.Repository.Media.Tree", re = "Umb.Store.Media.Tree", oe = "Umb.Tree.Media", ne = "Umb.Workspace.Media", ae = {
  culture: null,
  segment: null,
  name: "",
  createDate: null,
  updateDate: null
};
var L = Object.defineProperty, O = Object.getOwnPropertyDescriptor, R = (e) => {
  throw TypeError(e);
}, p = (e, t, s, n) => {
  for (var r = n > 1 ? void 0 : n ? O(t, s) : t, a = e.length - 1, i; a >= 0; a--)
    (i = e[a]) && (r = (n ? i(t, s, r) : i(r)) || r);
  return n && r && L(t, s, r), r;
}, S = (e, t, s) => t.has(e) || R("Cannot " + s), T = (e, t, s) => t.has(e) ? R("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), _ = (e, t, s) => (S(e, t, "access private method"), s), o, l, c, E;
let d = class extends m {
  constructor() {
    super(), T(this, o), this.parentUnique = null, this.createAsTemporary = !1, this.getFiles = this.getItems, this.progressItems = () => this._manager.progressItems, this.progress = () => this._manager.progress, document.addEventListener("dragenter", _(this, o, l).bind(this)), document.addEventListener("dragleave", _(this, o, c).bind(this)), document.addEventListener("drop", _(this, o, E).bind(this)), this.observe(
      this._manager.progressItems,
      (e) => {
        const t = e.find((s) => s.status === U.WAITING);
        e.length && !t && this.dispatchEvent(new CustomEvent("complete", { detail: e }));
      },
      "_observeProgressItemsComplete"
    );
  }
  /**
   * Gets the current value of the uploaded items.
   * @returns {Array<UmbUploadableItem>} An array of uploadable items.
   */
  getItems() {
    return this._progressItems;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("dragenter", _(this, o, l).bind(this)), document.removeEventListener("dragleave", _(this, o, c).bind(this)), document.removeEventListener("drop", _(this, o, E).bind(this));
  }
  async onUpload(e) {
    if (!this.disabled && !(!e.detail.files.length && !e.detail.folders.length))
      if (this.createAsTemporary) {
        const t = this._manager.createTemporaryFiles(e.detail.files);
        this.dispatchEvent(new A(await t));
      } else {
        const t = this._manager.createMediaItems(e.detail, this.parentUnique);
        this.dispatchEvent(new A(t));
      }
  }
};
o = /* @__PURE__ */ new WeakSet();
l = function(e) {
  if (this.disabled) return;
  const t = e.dataTransfer?.types;
  !t?.length || !t?.includes("Files") || this.toggleAttribute("dragging", !0);
};
c = function() {
  this.disabled || this.toggleAttribute("dragging", !1);
};
E = function(e) {
  e.preventDefault(), !this.disabled && this.toggleAttribute("dragging", !1);
};
d.styles = [
  ...m.styles,
  b`
			:host(:not([disabled])[dragging]) #dropzone {
				opacity: 1;
				pointer-events: all;
			}

			[dropzone] {
				opacity: 0;
			}

			#dropzone {
				opacity: 0;
				pointer-events: none;
				display: flex;
				align-items: center;
				justify-content: center;
				position: absolute;
				z-index: 100;
				border-radius: var(--uui-border-radius);
				border: 1px solid var(--uui-color-focus);
			}
		`
];
p([
  M({ attribute: "parent-unique" })
], d.prototype, "parentUnique", 2);
p([
  M({ type: Boolean, attribute: "create-as-temporary" })
], d.prototype, "createAsTemporary", 2);
d = p([
  u("umb-dropzone-media")
], d);
var D = Object.getOwnPropertyDescriptor, g = (e, t, s, n) => {
  for (var r = n > 1 ? void 0 : n ? D(t, s) : t, a = e.length - 1, i; a >= 0; a--)
    (i = e[a]) && (r = i(r) || r);
  return r;
};
const v = new h({
  deprecated: "<umb-dropzone />",
  removeInVersion: "18",
  solution: "Use <umb-dropzone-media /> for media items and <umb-input-dropzone /> for all other files and folders."
});
let I = class extends d {
  connectedCallback() {
    super.connectedCallback(), v.warn();
  }
};
I = g([
  u("umb-dropzone")
], I);
export {
  V as U,
  N as a,
  w as b,
  z as c,
  F as d,
  x as e,
  W as f,
  k as g,
  Q as h,
  j as i,
  K as j,
  H as k,
  $ as l,
  J as m,
  X as n,
  Z as o,
  ee as p,
  te as q,
  se as r,
  re as s,
  oe as t,
  q as u,
  G as v,
  ne as w,
  ae as x,
  d as y
};
//# sourceMappingURL=dropzone.element-B5oraMUj.js.map
