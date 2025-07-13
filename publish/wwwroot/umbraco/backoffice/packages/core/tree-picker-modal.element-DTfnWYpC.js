import { UmbPickerContext as M } from "@umbraco-cms/backoffice/picker";
import { html as h, nothing as _, ifDefined as T, state as u, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as U } from "@umbraco-cms/backoffice/modal";
import { UMB_WORKSPACE_MODAL as q } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as O } from "@umbraco-cms/backoffice/router";
import { UmbSelectedEvent as w, UmbDeselectedEvent as A } from "@umbraco-cms/backoffice/event";
class R extends M {
  constructor(t) {
    super(t);
  }
}
var D = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, b = (e) => {
  throw TypeError(e);
}, c = (e, t, i, d) => {
  for (var l = d > 1 ? void 0 : d ? Q(t, i) : t, p = e.length - 1, m; p >= 0; p--)
    (m = e[p]) && (l = (d ? m(t, i, l) : m(l)) || l);
  return d && l && D(t, i, l), l;
}, v = (e, t, i) => t.has(e) || b("Cannot " + i), r = (e, t, i) => (v(e, t, "read from private field"), i ? i.call(e) : t.get(e)), f = (e, t, i) => t.has(e) ? b("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), o = (e, t, i) => (v(e, t, "access private method"), i), s, a, P, y, C, k, S, g, $, x;
let n = class extends U {
  constructor() {
    super(), f(this, a), this._selectionConfiguration = {
      multiple: !1,
      selectable: !0,
      selection: []
    }, this._hasSelection = !1, f(this, s, new R(this)), r(this, s).selection.setSelectable(!0), this.observe(r(this, s).selection.hasSelection, (e) => {
      this._hasSelection = e;
    }), o(this, a, P).call(this), o(this, a, y).call(this);
  }
  connectedCallback() {
    super.connectedCallback(), o(this, a, S).call(this);
  }
  async updated(e) {
    if (super.updated(e), e.has("data")) {
      if (this.data?.search) {
        r(this, s).search.updateConfig({
          ...this.data.search,
          searchFrom: this.data.startNode
        });
        const i = this.data.search.queryParams;
        i && r(this, s).search.setQuery(i);
      }
      const t = this.data?.multiple ?? !1;
      r(this, s).selection.setMultiple(t), this._selectionConfiguration = {
        ...this._selectionConfiguration,
        multiple: t
      };
    }
    if (e.has("value")) {
      const t = this.value?.selection ?? [];
      r(this, s).selection.setSelection(t), this._selectionConfiguration = {
        ...this._selectionConfiguration,
        selection: [...t]
      };
    }
  }
  render() {
    return h`
			<umb-body-layout headline=${this.localize.term("general_choose")}>
				<uui-box> ${o(this, a, g).call(this)} ${o(this, a, $).call(this)}</uui-box>
				${o(this, a, x).call(this)}
			</umb-body-layout>
		`;
  }
};
s = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
P = function() {
  this.observe(
    r(this, s).selection.selection,
    (e) => {
      this.updateValue({ selection: e }), this.requestUpdate();
    },
    "umbPickerSelectionObserver"
  );
};
y = function() {
  this.observe(
    r(this, s).search.query,
    (e) => {
      this._searchQuery = e?.query;
    },
    "umbPickerSearchQueryObserver"
  );
};
C = function(e) {
  e.stopPropagation(), r(this, s).selection.select(e.unique), this.modalContext?.dispatchEvent(new w(e.unique));
};
k = function(e) {
  e.stopPropagation(), r(this, s).selection.deselect(e.unique), this.modalContext?.dispatchEvent(new A(e.unique));
};
S = function() {
  const e = this.data?.createAction;
  e && (this._createLabel = e.label, new O(
    this,
    e.modalToken ?? q
  ).onSetup(() => ({ data: e.modalData })).onSubmit((t) => {
    t ? (this.value = { selection: [t.unique] }, this._submitModal()) : this._rejectModal();
  }).observeRouteBuilder((t) => {
    const i = this._createPath;
    this._createPath = t({}) + e.extendWithPathPattern.generateLocal(e.extendWithPathParams), this.requestUpdate("_createPath", i);
  }));
};
g = function() {
  return h`
			<umb-picker-search-field></umb-picker-search-field>
			<umb-picker-search-result></umb-picker-search-result>
		`;
};
$ = function() {
  return this._searchQuery ? _ : h`
			<umb-tree
				alias=${T(this.data?.treeAlias)}
				.props=${{
    hideTreeItemActions: !0,
    hideTreeRoot: this.data?.hideTreeRoot,
    expandTreeRoot: this.data?.expandTreeRoot,
    selectionConfiguration: this._selectionConfiguration,
    filter: this.data?.filter,
    selectableFilter: this.data?.pickableFilter,
    startNode: this.data?.startNode,
    foldersOnly: this.data?.foldersOnly
  }}
				@selected=${o(this, a, C)}
				@deselected=${o(this, a, k)}></umb-tree>
		`;
};
x = function() {
  return h`
			<div slot="actions">
				<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
				${this._createPath ? h` <uui-button
							label=${this.localize.string(this._createLabel ?? "#general_create")}
							look="secondary"
							href=${this._createPath}></uui-button>` : _}
				<uui-button
					label=${this.localize.term("general_choose")}
					look="primary"
					color="positive"
					@click=${this._submitModal}
					?disabled=${!this._hasSelection}></uui-button>
			</div>
		`;
};
c([
  u()
], n.prototype, "_selectionConfiguration", 2);
c([
  u()
], n.prototype, "_hasSelection", 2);
c([
  u()
], n.prototype, "_createPath", 2);
c([
  u()
], n.prototype, "_createLabel", 2);
c([
  u()
], n.prototype, "_searchQuery", 2);
n = c([
  E("umb-tree-picker-modal")
], n);
const N = n;
export {
  n as UmbTreePickerModalElement,
  N as default
};
//# sourceMappingURL=tree-picker-modal.element-DTfnWYpC.js.map
