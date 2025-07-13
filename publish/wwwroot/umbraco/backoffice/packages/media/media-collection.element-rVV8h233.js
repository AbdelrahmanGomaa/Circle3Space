import { U as q, a as b } from "./media-item.store.context-token-9YLCPlu1.js";
import { h as P, s as M } from "./input-upload-field.element-B7PCDmnx.js";
import { when as O, ref as U, html as m, state as f, customElement as I } from "@umbraco-cms/backoffice/external/lit";
import { UmbCollectionDefaultElement as y } from "@umbraco-cms/backoffice/collection";
import { UmbRequestReloadChildrenOfEntityEvent as D } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as w } from "@umbraco-cms/backoffice/action";
var N = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, c = (e, r, t, n) => {
  for (var s = n > 1 ? void 0 : n ? $(r, t) : r, _ = e.length - 1, p; _ >= 0; _--)
    (p = e[_]) && (s = (n ? p(r, t, s) : p(s)) || s);
  return n && s && N(r, t, s), s;
}, h = (e, r, t) => r.has(e) || v("Cannot " + t), u = (e, r, t) => (h(e, r, "read from private field"), r.get(e)), d = (e, r, t) => r.has(e) ? v("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), x = (e, r, t, n) => (h(e, r, "write to private field"), r.set(e, t), t), l = (e, r, t) => (h(e, r, "access private method"), t), o, i, E, C, g, T;
let a = class extends y {
  constructor() {
    super(), d(this, i), d(this, o), this._progress = -1, this._unique = null, this.consumeContext(P, (e) => {
      x(this, o, e);
    }), this.consumeContext(M, (e) => {
      this.observe(e.unique, (r) => {
        this._unique = r ?? null;
      });
    });
  }
  renderToolbar() {
    return m`
			<umb-collection-toolbar slot="header">
				<umb-collection-filter-field></umb-collection-filter-field>
			</umb-collection-toolbar>
			${O(this._progress >= 0, () => m`<uui-loader-bar progress=${this._progress}></uui-loader-bar>`)}
			<umb-dropzone-media
				id="dropzone"
				${U(l(this, i, E))}
				multiple
				.parentUnique=${this._unique}
				@submitted=${l(this, i, C)}
				@complete=${l(this, i, g)}
				@progress=${l(this, i, T)}></umb-dropzone-media>
		`;
  }
};
o = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
E = function(e) {
  e && this.observe(
    e.progressItems(),
    (r) => {
      r.forEach((t) => {
        t.folder?.name || (u(this, o)?.updatePlaceholderStatus(t.unique, t.status), u(this, o)?.updatePlaceholderProgress(t.unique, t.progress));
      });
    },
    "_observeProgressItems"
  );
};
C = async function(e) {
  e.preventDefault();
  const r = e.items.filter((t) => t.parentUnique === this._unique).map((t) => ({ unique: t.unique, status: t.status, name: t.temporaryFile?.file.name ?? t.folder?.name }));
  u(this, o)?.setPlaceholders(r);
};
g = async function(e) {
  e.preventDefault(), this._progress = -1, u(this, o)?.requestCollection();
  const r = await this.getContext(w), t = new D({
    entityType: this._unique ? q : b,
    unique: this._unique
  });
  r.dispatchEvent(t);
};
T = function(e) {
  e.preventDefault(), this._progress = e.loaded / e.total * 100, this._progress >= 100 && (this._progress = -1);
};
c([
  f()
], a.prototype, "_progress", 2);
c([
  f()
], a.prototype, "_unique", 2);
a = c([
  I("umb-media-collection")
], a);
const X = a;
export {
  a as UmbMediaCollectionElement,
  X as default,
  a as element
};
//# sourceMappingURL=media-collection.element-rVV8h233.js.map
