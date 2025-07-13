import { html as l, state as _, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as v } from "@umbraco-cms/backoffice/modal";
import { tryExecuteAndNotify as w } from "@umbraco-cms/backoffice/resources";
import { PartialViewService as b } from "@umbraco-cms/backoffice/external/backend-api";
var y = Object.defineProperty, C = Object.getOwnPropertyDescriptor, m = (t) => {
  throw TypeError(t);
}, c = (t, e, a, r) => {
  for (var i = r > 1 ? void 0 : r ? C(e, a) : e, s = t.length - 1, p; s >= 0; s--)
    (p = t[s]) && (i = (r ? p(e, a, i) : p(i)) || i);
  return r && i && y(e, a, i), i;
}, P = (t, e, a) => e.has(t) || m("Cannot " + a), $ = (t, e, a) => e.has(t) ? m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), u = (t, e, a) => (P(t, e, "access private method"), a), n, d, h;
let o = class extends v {
  constructor() {
    super(...arguments), $(this, n), this._snippets = [];
  }
  async firstUpdated() {
    const { data: t } = await w(this, b.getPartialViewSnippet({ take: 1e4 }));
    t && (this._snippets = t.items.map((e) => ({
      name: e.name,
      path: u(this, n, d).call(this, e)
    })));
  }
  render() {
    return l`
			<umb-body-layout headline="Create Partial View from snippet">
				<uui-box>
					${this._snippets.map(
      (t) => l` <uui-menu-item label="${t.name}" href=${t.path} @click=${u(this, n, h)}>
								<uui-icon name="icon-document-html" slot="icon"></uui-icon
							></uui-menu-item>`
    )}
				</uui-box>
				<uui-button slot="actions" @click=${this._rejectModal} look="secondary">Close</uui-button>
			</umb-body-layout>
		`;
  }
};
n = /* @__PURE__ */ new WeakSet();
d = function(t) {
  return `section/settings/workspace/partial-view/create/parent/${this.data?.parent.entityType}/${this.data?.parent.unique || "null"}/snippet/${t.id}`;
};
h = function() {
  this._submitModal();
};
c([
  _()
], o.prototype, "_snippets", 2);
o = c([
  f("umb-partial-view-create-from-snippet-modal")
], o);
const g = o;
export {
  o as UmbPartialViewCreateFromSnippetModalElement,
  g as default
};
//# sourceMappingURL=create-from-snippet-modal-DaOVphKu.js.map
