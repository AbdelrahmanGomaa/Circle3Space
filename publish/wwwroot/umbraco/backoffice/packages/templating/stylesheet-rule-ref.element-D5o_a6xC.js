import "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/external/backend-api";
import { d as q, U as N, b as B } from "./stylesheet-rule-settings-modal.token-e3AAPWoc.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/store";
import { UmbPickerInputContext as F } from "@umbraco-cms/backoffice/picker-input";
import { repeat as C, html as v, css as O, property as m, state as G, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { UUIFormControlMixin as I, UUIRefNodeElement as k } from "@umbraco-cms/backoffice/external/uui";
import { UmbLitElement as T } from "@umbraco-cms/backoffice/lit-element";
import { splitStringToArray as H } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as p } from "@umbraco-cms/backoffice/event";
import { UmbSorterController as Y } from "@umbraco-cms/backoffice/sorter";
import { UMB_MODAL_MANAGER_CONTEXT as z } from "@umbraco-cms/backoffice/modal";
class V extends F {
  constructor(t) {
    super(t, q, N);
  }
}
var K = Object.defineProperty, X = Object.getOwnPropertyDescriptor, R = (e) => {
  throw TypeError(e);
}, h = (e, t, s, n) => {
  for (var r = n > 1 ? void 0 : n ? X(t, s) : t, o = e.length - 1, l; o >= 0; o--)
    (l = e[o]) && (r = (n ? l(t, s, r) : l(r)) || r);
  return n && r && K(t, s, r), r;
}, P = (e, t, s) => t.has(e) || R("Cannot " + s), a = (e, t, s) => (P(e, t, "read from private field"), s ? s.call(e) : t.get(e)), x = (e, t, s) => t.has(e) ? R("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), j = (e, t, s) => (P(e, t, "access private method"), s), i, y, A;
let u = class extends I(T, "") {
  constructor() {
    super(), x(this, y), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this._items = [], x(this, i, new V(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && a(this, i).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && a(this, i).getSelection().length > this.max
    ), this.observe(a(this, i).selection, (e) => this.value = e.join(",")), this.observe(a(this, i).selectedItems, (e) => this._items = e);
  }
  set min(e) {
    a(this, i).min = e;
  }
  get min() {
    return a(this, i).min;
  }
  set max(e) {
    a(this, i).max = e;
  }
  get max() {
    return a(this, i).max;
  }
  set selection(e) {
    a(this, i).setSelection(e ?? []);
  }
  get selection() {
    return a(this, i).getSelection();
  }
  set value(e) {
    this.selection = H(e);
  }
  get value() {
    return a(this, i).getSelection().join(",");
  }
  getFormElement() {
  }
  render() {
    return v`
			<uui-ref-list>
				${C(
      this._items,
      (e) => e.unique,
      (e) => j(this, y, A).call(this, e)
    )}
			</uui-ref-list>
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${() => a(this, i).openPicker({ pickableFilter: (e) => !e.isFolder })}
				label="Add stylesheet"></uui-button>
		`;
  }
};
i = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakSet();
A = function(e) {
  if (e.unique)
    return v`
			<uui-ref-node name=${e.name}>
				<uui-icon slot="icon" name="icon-palette"></uui-icon>
				<uui-action-bar slot="actions">
					<uui-button
						@click=${() => a(this, i).requestRemoveItem(e.unique)}
						label=${this.localize.term("general_remove")}></uui-button>
				</uui-action-bar>
			</uui-ref-node>
		`;
};
u.styles = [
  O`
			#btn-add {
				width: 100%;
			}
		`
];
h([
  m({ type: Number })
], u.prototype, "min", 1);
h([
  m({ type: String, attribute: "min-message" })
], u.prototype, "minMessage", 2);
h([
  m({ type: Number })
], u.prototype, "max", 1);
h([
  m({ type: String, attribute: "min-message" })
], u.prototype, "maxMessage", 2);
h([
  m({ type: Array })
], u.prototype, "selection", 1);
h([
  m()
], u.prototype, "value", 1);
h([
  G()
], u.prototype, "_items", 2);
u = h([
  U("umb-stylesheet-input")
], u);
var J = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, D = (e) => {
  throw TypeError(e);
}, L = (e, t, s, n) => {
  for (var r = n > 1 ? void 0 : n ? Q(t, s) : t, o = e.length - 1, l; o >= 0; o--)
    (l = e[o]) && (r = (n ? l(t, s, r) : l(r)) || r);
  return n && r && J(t, s, r), r;
}, W = (e, t, s) => t.has(e) || D("Cannot " + s), d = (e, t, s) => (W(e, t, "read from private field"), s ? s.call(e) : t.get(e)), c = (e, t, s) => t.has(e) ? D("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), $ = (e, t, s) => (W(e, t, "access private method"), s), g, _, b, E, S, w;
let f = class extends I(T, "") {
  constructor() {
    super(...arguments), c(this, _), c(this, g, new Y(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e.name,
      identifier: "Umb.SorterIdentifier.InputStylesheetRule",
      itemSelector: "umb-stylesheet-rule-ref",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.rules = e, this.dispatchEvent(new p());
      }
    })), this.rules = [], c(this, E, () => {
      $(this, _, b).call(this, null).then((e) => {
        e.rule && (this.rules = [...this.rules, e.rule], this.dispatchEvent(new p()));
      }).catch(() => {
      });
    }), c(this, S, (e, t) => {
      $(this, _, b).call(this, e).then((s) => {
        s.rule && (this.rules[t] = s.rule, this.dispatchEvent(new p()), this.requestUpdate());
      }).catch(() => {
      });
    }), c(this, w, (e) => {
      this.rules = this.rules.filter((t) => t.name !== e.name), this.dispatchEvent(new p());
    });
  }
  getFormElement() {
  }
  firstUpdated() {
    d(this, g).setModel(this.rules);
  }
  render() {
    return v`
			<uui-ref-list>
				${C(
      this.rules,
      (e, t) => e.name + t,
      (e, t) => v`
						<umb-stylesheet-rule-ref
							name=${e.name}
							id=${e.name}
							detail=${e.selector}
							@open=${() => d(this, S).call(this, e, t)}>
							<uui-action-bar slot="actions">
								<uui-button
									label=${this.localize.term("general_remove")}
									@click=${() => d(this, w).call(this, e)}></uui-button>
							</uui-action-bar>
						</umb-stylesheet-rule-ref>
					`
    )}
			</uui-ref-list>
			<uui-button label=${this.localize.term("general_add")} look="placeholder" @click=${d(this, E)}></uui-button>
		`;
  }
};
g = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
b = async function(e = null) {
  const t = await this.getContext(z), s = {
    rule: e ? { name: e.name, selector: e.selector, styles: e.styles } : null
  };
  return t.open(this, B, {
    value: s
  })?.onSubmit();
};
E = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
f.styles = [
  O`
			:host {
				display: block;
			}

			uui-button {
				display: block;
			}
		`
];
L([
  m({ type: Array, attribute: !1 })
], f.prototype, "rules", 2);
f = L([
  U("umb-stylesheet-rule-input")
], f);
var Z = Object.getOwnPropertyDescriptor, ee = (e, t, s, n) => {
  for (var r = n > 1 ? void 0 : n ? Z(t, s) : t, o = e.length - 1, l; o >= 0; o--)
    (l = e[o]) && (r = l(r) || r);
  return r;
};
let M = class extends k {
  constructor() {
    super(...arguments), this.fallbackIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" /><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" /></svg>';
  }
};
M.styles = [...k.styles];
M = ee([
  U("umb-stylesheet-rule-ref")
], M);
export {
  V as U,
  u as a,
  f as b,
  M as c
};
//# sourceMappingURL=stylesheet-rule-ref.element-D5o_a6xC.js.map
