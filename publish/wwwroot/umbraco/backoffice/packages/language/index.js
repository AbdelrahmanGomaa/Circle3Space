import { U as G, a as S } from "./language-access.workspace.context-token-ChA0uFUc.js";
import { d as Q, t as Z, u as ee, e as te, f as ie, g as re, i as se, j as ne, k as ae, b as oe, m as _e, c as le, q as me, r as Ae, l as he, h as ue, n as pe, p as Ee, o as ce, s as Ue } from "./language-access.workspace.context-token-ChA0uFUc.js";
import { UmbPickerInputContext as M } from "@umbraco-cms/backoffice/picker-input";
import { html as u, nothing as C, repeat as I, when as N, css as v, property as o, state as y, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as P } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as R } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
import { UmbSorterController as B } from "@umbraco-cms/backoffice/sorter";
import { UUIFormControlMixin as w } from "@umbraco-cms/backoffice/external/uui";
import { UmbLanguageDetailRepository as de } from "./language-detail.repository-a4uWw_br.js";
import { UmbLanguageItemRepository as ge } from "./language-item.repository-DcAKfbxg.js";
import { UmbLanguageCollectionRepository as Oe } from "./language-collection.repository-didMva8o.js";
import { UmbAppLanguageContext as Se } from "./app-language.context-DP3YAEuZ.js";
class W extends M {
  constructor(t) {
    super(t, G, S);
  }
}
var $ = Object.defineProperty, k = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, a = (e, t, r, m) => {
  for (var _ = m > 1 ? void 0 : m ? k(t, r) : t, c = e.length - 1, U; c >= 0; c--)
    (U = e[c]) && (_ = (m ? U(t, r, _) : U(_)) || _);
  return m && _ && $(t, r, _), _;
}, f = (e, t, r) => t.has(e) || d("Cannot " + r), i = (e, t, r) => (f(e, t, "read from private field"), r ? r.call(e) : t.get(e)), p = (e, t, r) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), K = (e, t, r, m) => (f(e, t, "write to private field"), t.set(e, r), r), E = (e, t, r) => (f(e, t, "access private method"), r), A, h, s, l, L, g, T, O;
let n = class extends w(x, "") {
  constructor() {
    super(), p(this, l), p(this, A, new B(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputLanguage",
      itemSelector: "uui-ref-node",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new R());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this.filter = () => !0, p(this, h, !1), this._items = [], p(this, s, new W(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && i(this, s).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && i(this, s).getSelection().length > this.max
    ), this.observe(i(this, s).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(i(this, s).selectedItems, (e) => this._items = e, "_observerItems");
  }
  set min(e) {
    i(this, s).min = e;
  }
  get min() {
    return i(this, s).min;
  }
  set max(e) {
    i(this, s).max = e;
  }
  get max() {
    return i(this, s).max;
  }
  set selection(e) {
    i(this, s).setSelection(e), i(this, A).setModel(e);
  }
  get selection() {
    return i(this, s).getSelection();
  }
  set value(e) {
    this.selection = P(e);
  }
  get value() {
    return this.selection.join(",");
  }
  get readonly() {
    return i(this, h);
  }
  set readonly(e) {
    K(this, h, e), i(this, h) ? i(this, A).disable() : i(this, A).enable();
  }
  getFormElement() {
  }
  render() {
    return u`${E(this, l, O).call(this)} ${E(this, l, T).call(this)}`;
  }
};
A = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
L = function() {
  i(this, s).openPicker({
    filter: this.filter,
    multiple: this.max > 1
  });
};
g = function(e) {
  i(this, s).requestRemoveItem(e.unique);
};
T = function() {
  return this.max > 0 && this.selection.length >= this.max ? C : u`
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${E(this, l, L)}
				label="${this.localize.term("general_choose")}"></uui-button>
		`;
};
O = function() {
  if (this._items)
    return u`
			<uui-ref-list>
				${I(
      this._items,
      (e) => e.unique,
      (e) => u`<umb-entity-item-ref
							id=${e.unique}
							.item=${e}
							?readonly=${this.readonly}
							?standalone=${this.max === 1}>
							${N(
        !this.readonly,
        () => u`
									<uui-action-bar slot="actions">
										<uui-button
											label=${this.localize.term("general_remove")}
											@click=${() => E(this, l, g).call(this, e)}></uui-button>
									</uui-action-bar>
								`
      )}
						</umb-entity-item-ref>`
    )}
			</uui-ref-list>
		`;
};
n.styles = [
  v`
			#btn-add {
				width: 100%;
			}
		`
];
a([
  o({ type: Number })
], n.prototype, "min", 1);
a([
  o({ type: String, attribute: "min-message" })
], n.prototype, "minMessage", 2);
a([
  o({ type: Number })
], n.prototype, "max", 1);
a([
  o({ type: String, attribute: "min-message" })
], n.prototype, "maxMessage", 2);
a([
  o({ type: Object, attribute: !1 })
], n.prototype, "filter", 2);
a([
  o({ type: Array })
], n.prototype, "selection", 1);
a([
  o()
], n.prototype, "value", 1);
a([
  o({ type: Boolean, reflect: !0 })
], n.prototype, "readonly", 1);
a([
  y()
], n.prototype, "_items", 2);
n = a([
  b("umb-input-language")
], n);
export {
  Q as UMB_APP_LANGUAGE_CONTEXT,
  Z as UMB_CREATE_LANGUAGE_WORKSPACE_PATH_PATTERN,
  ee as UMB_EDIT_LANGUAGE_WORKSPACE_PATH_PATTERN,
  te as UMB_LANGUAGE_ACCESS_WORKSPACE_CONTEXT,
  ie as UMB_LANGUAGE_COLLECTION_ALIAS,
  re as UMB_LANGUAGE_COLLECTION_REPOSITORY_ALIAS,
  se as UMB_LANGUAGE_DETAIL_REPOSITORY_ALIAS,
  ne as UMB_LANGUAGE_DETAIL_STORE_ALIAS,
  ae as UMB_LANGUAGE_DETAIL_STORE_CONTEXT,
  oe as UMB_LANGUAGE_ENTITY_TYPE,
  G as UMB_LANGUAGE_ITEM_REPOSITORY_ALIAS,
  _e as UMB_LANGUAGE_ITEM_STORE_CONTEXT,
  S as UMB_LANGUAGE_PICKER_MODAL,
  le as UMB_LANGUAGE_ROOT_ENTITY_TYPE,
  me as UMB_LANGUAGE_ROOT_WORKSPACE_ALIAS,
  Ae as UMB_LANGUAGE_ROOT_WORKSPACE_PATH,
  he as UMB_LANGUAGE_STORE_ALIAS,
  ue as UMB_LANGUAGE_TABLE_COLLECTION_VIEW_ALIAS,
  pe as UMB_LANGUAGE_WORKSPACE_ALIAS,
  Ee as UMB_LANGUAGE_WORKSPACE_CONTEXT,
  ce as UMB_LANGUAGE_WORKSPACE_MODAL,
  Ue as UMB_LANGUAGE_WORKSPACE_PATH,
  Se as UmbAppLanguageContext,
  n as UmbInputLanguageElement,
  Oe as UmbLanguageCollectionRepository,
  de as UmbLanguageDetailRepository,
  ge as UmbLanguageItemRepository
};
//# sourceMappingURL=index.js.map
