import { n as v } from "./manifests-DuLlkyg0.js";
import "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { html as y, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as b } from "@umbraco-cms/backoffice/modal";
import { UmbCreateFolderEntityAction as w } from "@umbraco-cms/backoffice/tree";
var E = Object.getOwnPropertyDescriptor, m = (t) => {
  throw TypeError(t);
}, O = (t, e, r, n) => {
  for (var i = n > 1 ? void 0 : n ? E(e, r) : e, c = t.length - 1, p; c >= 0; c--)
    (p = t[c]) && (i = p(i) || i);
  return i;
}, u = (t, e, r) => e.has(t) || m("Cannot " + r), k = (t, e, r) => (u(t, e, "read from private field"), r ? r.call(t) : e.get(t)), d = (t, e, r) => e.has(t) ? m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), M = (t, e, r, n) => (u(t, e, "write to private field"), e.set(t, r), r), s = (t, e, r) => (u(t, e, "access private method"), r), o, a, h, _, f;
let l = class extends b {
  constructor() {
    super(...arguments), d(this, a), d(this, o);
  }
  connectedCallback() {
    if (super.connectedCallback(), !this.data?.parent) throw new Error("A parent is required to create a folder");
    M(this, o, new w(this, {
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
			<umb-body-layout headline="Create Script">
				<uui-box>
					<!-- TODO: construct url -->
					<uui-menu-item href=${s(this, a, f).call(this)} label="New Javascript file" @click=${s(this, a, _)}>
						<uui-icon slot="icon" name="icon-document-js"></uui-icon>}
					</uui-menu-item>

					<uui-menu-item @click=${s(this, a, h)} label="New Folder...">
						<uui-icon slot="icon" name="icon-folder"></uui-icon>}
					</uui-menu-item>
				</uui-box>

				<uui-button slot="actions" id="cancel" label="Cancel" @click="${this._rejectModal}"></uui-button>
			</umb-body-layout>
		`;
  }
};
o = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
h = async function(t) {
  t.stopPropagation();
  try {
    await k(this, o)?.execute(), this._submitModal();
  } catch (e) {
    console.error(e);
  }
};
_ = function() {
  this._submitModal();
};
f = function() {
  return `section/settings/workspace/script/create/parent/${this.data?.parent.entityType}/${this.data?.parent.unique || "null"}`;
};
l = O([
  C("umb-script-create-options-modal")
], l);
const R = l;
export {
  l as UmbScriptCreateOptionsModalElement,
  R as default
};
//# sourceMappingURL=script-create-options-modal.element-C7iKQMAN.js.map
