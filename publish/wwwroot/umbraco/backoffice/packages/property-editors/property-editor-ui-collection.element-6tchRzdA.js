import { html as u, property as f, state as p, customElement as h } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as m } from "@umbraco-cms/backoffice/lit-element";
import { UMB_DOCUMENT_COLLECTION_ALIAS as y } from "@umbraco-cms/backoffice/document";
import { UMB_PROPERTY_CONTEXT as g } from "@umbraco-cms/backoffice/property";
import { UMB_CONTENT_COLLECTION_WORKSPACE_CONTEXT as C } from "@umbraco-cms/backoffice/content";
var E = Object.defineProperty, v = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, s = (e, t, o, r) => {
  for (var i = r > 1 ? void 0 : r ? v(t, o) : t, n = e.length - 1, l; n >= 0; n--)
    (l = e[n]) && (i = (r ? l(t, o, i) : l(i)) || i);
  return r && i && E(t, o, i), i;
}, T = (e, t, o) => t.has(e) || _("Cannot " + o), A = (e, t, o) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), O = (e, t, o) => (T(e, t, "access private method"), o), c, d;
let a = class extends m {
  constructor() {
    super(), A(this, c), this._collectionAlias = y, this.consumeContext(C, (e) => {
      this._collectionAlias = e.getCollectionAlias(), this.consumeContext(g, (t) => {
        this.observe(t.alias, async (o) => {
          if (o) {
            const r = await e.structure.getPropertyStructureByAlias(o), i = e.getUnique();
            i && r && this._config && (this._config.unique = i, this._config.dataTypeId = r.dataType.unique, this.requestUpdate("_config"));
          }
        });
      });
    });
  }
  set config(e) {
    this._config = O(this, c, d).call(this, e);
  }
  render() {
    return !this._config?.unique || !this._config?.dataTypeId ? u`<uui-loader></uui-loader>` : u`<umb-collection .alias=${this._collectionAlias} .config=${this._config}></umb-collection>`;
  }
};
c = /* @__PURE__ */ new WeakSet();
d = function(e) {
  const t = Number(e?.getValueByAlias("pageSize"));
  return {
    layouts: e?.getValueByAlias("layouts"),
    orderBy: e?.getValueByAlias("orderBy") ?? "updateDate",
    orderDirection: e?.getValueByAlias("orderDirection") ?? "asc",
    pageSize: isNaN(t) ? 50 : t,
    userDefinedProperties: e?.getValueByAlias("includeProperties")
  };
};
s([
  f()
], a.prototype, "value", 2);
s([
  p()
], a.prototype, "_collectionAlias", 2);
s([
  p()
], a.prototype, "_config", 2);
a = s([
  h("umb-property-editor-ui-collection")
], a);
const I = a;
export {
  a as UmbPropertyEditorUICollectionElement,
  I as default
};
//# sourceMappingURL=property-editor-ui-collection.element-6tchRzdA.js.map
