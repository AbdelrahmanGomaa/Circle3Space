import { html as p, customElement as h } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyEditorUiRteElementBase as m } from "@umbraco-cms/backoffice/rte";
import "./input-tiny-mce.element-CKNj2_nS.js";
var v = Object.getOwnPropertyDescriptor, l = (t) => {
  throw TypeError(t);
}, y = (t, e, r, a) => {
  for (var n = a > 1 ? void 0 : a ? v(e, r) : e, i = t.length - 1, c; i >= 0; i--)
    (c = t[i]) && (n = c(n) || n);
  return n;
}, d = (t, e, r) => e.has(t) || l("Cannot " + r), _ = (t, e, r) => e.has(t) ? l("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), g = (t, e, r) => (d(t, e, "access private method"), r), o, u;
let s = class extends m {
  constructor() {
    super(...arguments), _(this, o);
  }
  render() {
    return p`
			<umb-input-tiny-mce
				.configuration=${this._config}
				.value=${this._markup}
				@change=${g(this, o, u)}
				?readonly=${this.readonly}>
			</umb-input-tiny-mce>
		`;
  }
};
o = /* @__PURE__ */ new WeakSet();
u = function(t) {
  const e = typeof t.target.value == "string" ? t.target.value : "";
  if (e === "") {
    this.value = void 0, this._fireChangeEvent();
    return;
  }
  const r = [], a = new RegExp(
    /<umb-rte-block(?:-inline)?(?: class="(?:.[^"]*)")? data-content-key="(?<key>.[^"]*)">(?:<!--Umbraco-Block-->)?<\/umb-rte-block(?:-inline)?>/gi
  );
  let n;
  for (; (n = a.exec(e)) !== null; )
    n.groups?.key && r.push(n.groups.key);
  this.value ? this.value = {
    ...this.value,
    markup: e
  } : this.value = {
    markup: e,
    blocks: {
      layout: {},
      contentData: [],
      settingsData: [],
      expose: []
    }
  }, this._filterUnusedBlocks(r), this._fireChangeEvent();
};
s = y([
  h("umb-property-editor-ui-tiny-mce")
], s);
const b = s;
export {
  s as UmbPropertyEditorUITinyMceElement,
  b as default
};
//# sourceMappingURL=property-editor-ui-tiny-mce.element-DBj-xPkL.js.map
