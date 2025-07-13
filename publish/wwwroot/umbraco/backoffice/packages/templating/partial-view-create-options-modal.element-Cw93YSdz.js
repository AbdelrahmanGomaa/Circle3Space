import { i as v, a as C } from "./partial-view-workspace.context-token-BPSaKQI9.js";
import "@umbraco-cms/backoffice/workspace";
import { html as y, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as b, UMB_MODAL_MANAGER_CONTEXT as E } from "@umbraco-cms/backoffice/modal";
import { UmbCreateFolderEntityAction as A } from "@umbraco-cms/backoffice/tree";
var O = Object.getOwnPropertyDescriptor, m = (t) => {
  throw TypeError(t);
}, P = (t, e, a, l) => {
  for (var n = l > 1 ? void 0 : l ? O(e, a) : e, s = t.length - 1, p; s >= 0; s--)
    (p = t[s]) && (n = p(n) || n);
  return n;
}, u = (t, e, a) => e.has(t) || m("Cannot " + a), k = (t, e, a) => (u(t, e, "read from private field"), a ? a.call(t) : e.get(t)), d = (t, e, a) => e.has(t) ? m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), g = (t, e, a, l) => (u(t, e, "write to private field"), e.set(t, a), a), r = (t, e, a) => (u(t, e, "access private method"), a), o, i, h, _, f, w;
let c = class extends b {
  constructor() {
    super(...arguments), d(this, i), d(this, o);
  }
  connectedCallback() {
    if (super.connectedCallback(), !this.data?.parent) throw new Error("A parent unique is required to create a folder");
    g(this, o, new A(this, {
      unique: this.data.parent.unique,
      entityType: this.data.parent.entityType,
      meta: {
        icon: "icon-folder",
        label: "New folder...",
        folderRepositoryAlias: v
      }
    }));
  }
  render() {
    return y`
			<umb-body-layout headline="Create Partial View">
				<uui-box>
					<!-- TODO: construct url -->
					<uui-menu-item href=${r(this, i, w).call(this)} label="New empty partial view" @click=${r(this, i, f)}>
						<uui-icon slot="icon" name="icon-document-html"></uui-icon>}
					</uui-menu-item>

					<uui-menu-item @click=${r(this, i, _)} label="New partial view from snippet...">
						<uui-icon slot="icon" name="icon-document-html"></uui-icon>}
					</uui-menu-item>

					<uui-menu-item @click=${r(this, i, h)} label="New Folder...">
						<uui-icon slot="icon" name="icon-folder"></uui-icon>}
					</uui-menu-item>
				</uui-box>

				<uui-button slot="actions" id="cancel" label="Cancel" @click="${this._rejectModal}">Cancel</uui-button>
			</umb-body-layout>
		`;
  }
};
o = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
h = async function(t) {
  t.stopPropagation();
  try {
    await k(this, o)?.execute(), this._submitModal();
  } catch (e) {
    console.error(e);
  }
};
_ = async function(t) {
  if (t.stopPropagation(), !this.data?.parent) throw new Error("A parent is required to create a folder");
  (await this.getContext(E)).open(this, C, {
    data: {
      parent: this.data.parent
    }
  })?.onSubmit().then(() => this._submitModal());
};
f = function() {
  this._submitModal();
};
w = function() {
  return `section/settings/workspace/partial-view/create/parent/${this.data?.parent.entityType}/${this.data?.parent.unique || "null"}`;
};
c = P([
  M("umb-partial-view-create-options-modal")
], c);
const U = c;
export {
  c as UmbPartialViewCreateOptionsModalElement,
  U as default
};
//# sourceMappingURL=partial-view-create-options-modal.element-Cw93YSdz.js.map
