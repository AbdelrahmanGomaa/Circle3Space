import { UmbPropertyEditorUiRteElementBase as c } from "@umbraco-cms/backoffice/rte";
import { html as h, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import "./input-tiptap.element-Ca-2EYxt.js";
var d = Object.getOwnPropertyDescriptor, l = (e) => {
  throw TypeError(e);
}, v = (e, t, r, i) => {
  for (var s = i > 1 ? void 0 : i ? d(t, r) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (s = o(s) || s);
  return s;
}, _ = (e, t, r) => t.has(e) || l("Cannot " + r), y = (e, t, r) => t.has(e) ? l("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), g = (e, t, r) => (_(e, t, "access private method"), r), n, u;
let p = class extends c {
  constructor() {
    super(...arguments), y(this, n);
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.addFormControlElement(this.shadowRoot.querySelector("umb-input-tiptap"));
  }
  render() {
    return h`
			<umb-input-tiptap
				.configuration=${this._config}
				.requiredMessage=${this.mandatoryMessage}
				.value=${this._markup}
				?readonly=${this.readonly}
				?required=${this.mandatory}
				@change=${g(this, n, u)}></umb-input-tiptap>
		`;
  }
};
n = /* @__PURE__ */ new WeakSet();
u = function(e) {
  const t = e.target, r = t.value;
  if (t.isEmpty()) {
    this.value = void 0, this._fireChangeEvent();
    return;
  }
  const i = [], s = new RegExp(
    /<umb-rte-block(?:-inline)?(?: class="(?:.[^"]*)")? data-content-key="(?<key>.[^"]*)">(?:<!--Umbraco-Block-->)?<\/umb-rte-block(?:-inline)?>/gi
  );
  let a;
  for (; (a = s.exec(r)) !== null; )
    a.groups?.key && i.push(a.groups.key);
  this.value ? this.value = {
    ...this.value,
    markup: r
  } : this.value = {
    markup: r,
    blocks: {
      layout: {},
      contentData: [],
      settingsData: [],
      expose: []
    }
  }, this._filterUnusedBlocks(i), this._fireChangeEvent();
};
p = v([
  m("umb-property-editor-ui-tiptap")
], p);
export {
  p as UmbPropertyEditorUiTiptapElement,
  p as element
};
//# sourceMappingURL=property-editor-ui-tiptap.element-DLjFWhmC.js.map
