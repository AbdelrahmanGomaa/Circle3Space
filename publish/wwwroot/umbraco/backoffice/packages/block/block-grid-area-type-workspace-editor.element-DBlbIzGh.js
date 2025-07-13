import { UMB_BLOCK_GRID_AREA_TYPE_WORKSPACE_CONTEXT as d } from "./block-grid-area-type-workspace.context-C2qy7QTH.js";
import { UmbTextStyles as m } from "@umbraco-cms/backoffice/style";
import { html as v, css as f, state as E, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
var C = Object.defineProperty, k = Object.getOwnPropertyDescriptor, l = (e) => {
  throw TypeError(e);
}, _ = (e, t, r, o) => {
  for (var a = o > 1 ? void 0 : o ? k(t, r) : t, p = e.length - 1, n; p >= 0; p--)
    (n = e[p]) && (a = (o ? n(t, r, a) : n(a)) || a);
  return o && a && C(t, r, a), a;
}, h = (e, t, r) => t.has(e) || l("Cannot " + r), c = (e, t, r) => (h(e, t, "read from private field"), r ? r.call(e) : t.get(e)), w = (e, t, r) => t.has(e) ? l("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), O = (e, t, r, o) => (h(e, t, "write to private field"), t.set(e, r), r), s;
let i = class extends y {
  constructor() {
    super(), w(this, s), this.consumeContext(d, (e) => {
      O(this, s, e), this.observe(c(this, s).name, (t) => {
        this._name = t;
      }), c(this, s)?.createPropertyDatasetContext(this);
    });
  }
  // TODO: Localization, make it so that the headline is about area configuration?
  render() {
    return v`
			<umb-workspace-editor headline=${this.localize.term("blockEditor_blockConfigurationOverlayTitle", [this._name])}>
			</umb-workspace-editor>
		`;
  }
};
s = /* @__PURE__ */ new WeakMap();
i.styles = [
  m,
  f`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
_([
  E()
], i.prototype, "_name", 2);
i = _([
  u("umb-block-grid-area-type-workspace-editor")
], i);
const b = i;
export {
  i as UmbBlockGridAreaTypeWorkspaceEditorElement,
  b as default
};
//# sourceMappingURL=block-grid-area-type-workspace-editor.element-DBlbIzGh.js.map
