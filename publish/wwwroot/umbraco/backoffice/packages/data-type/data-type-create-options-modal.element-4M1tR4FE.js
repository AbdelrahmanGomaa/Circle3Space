import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import { C as y } from "./constants-hBehNVbJ.js";
import "@umbraco-cms/backoffice/repository";
import { html as f, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as C } from "@umbraco-cms/backoffice/modal";
import { UmbCreateFolderEntityAction as T } from "@umbraco-cms/backoffice/tree";
import { UmbDeprecation as b } from "@umbraco-cms/backoffice/utils";
var w = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, E = (e, t, a, n) => {
  for (var r = n > 1 ? void 0 : n ? w(t, a) : t, s = e.length - 1, u; s >= 0; s--)
    (u = e[s]) && (r = u(r) || r);
  return r;
}, c = (e, t, a) => t.has(e) || m("Cannot " + a), O = (e, t, a) => (c(e, t, "read from private field"), a ? a.call(e) : t.get(e)), p = (e, t, a) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), A = (e, t, a, n) => (c(e, t, "write to private field"), t.set(e, a), a), d = (e, t, a) => (c(e, t, "access private method"), a), o, i, _, h;
let l = class extends C {
  constructor() {
    super(), p(this, i), p(this, o), new b({
      deprecated: "umb-data-type-create-options-modal",
      removeInVersion: "17.0.0",
      solution: "Use UMB_ENTITY_CREATE_OPTION_ACTION_LIST_MODAL instead"
    }).warn();
  }
  connectedCallback() {
    if (super.connectedCallback(), !this.data?.parent) throw new Error("A parent is required to create a folder");
    A(this, o, new T(this, {
      unique: this.data.parent.unique,
      entityType: this.data.parent.entityType,
      meta: {
        icon: "icon-folder",
        label: "New Folder...",
        folderRepositoryAlias: y
      }
    }));
  }
  render() {
    return f`
			<umb-body-layout headline="Create Data Type">
				<uui-box>
					<!-- TODO: construct url -->
					<uui-menu-item href=${d(this, i, _).call(this)} label="New Data Type..." @click=${this._submitModal}>
						<uui-icon slot="icon" name="icon-autofill"></uui-icon>
					</uui-menu-item>
					<uui-menu-item @click=${d(this, i, h)} label="New Folder...">
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
_ = function() {
  return `section/settings/workspace/data-type/create/parent/${this.data?.parent.entityType}/${this.data?.parent.unique || "null"}`;
};
h = async function(e) {
  e.stopPropagation();
  try {
    await O(this, o)?.execute(), this._submitModal();
  } catch (t) {
    console.error(t);
  }
};
l = E([
  v("umb-data-type-create-options-modal")
], l);
const S = l;
export {
  l as UmbDataTypeCreateOptionsModalElement,
  S as default
};
//# sourceMappingURL=data-type-create-options-modal.element-4M1tR4FE.js.map
