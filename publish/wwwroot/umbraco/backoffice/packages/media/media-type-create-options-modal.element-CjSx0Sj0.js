import { f as v } from "./constants-CHY0fXo5.js";
import { html as C, customElement as T } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as b } from "@umbraco-cms/backoffice/modal";
import { UmbCreateFolderEntityAction as w } from "@umbraco-cms/backoffice/tree";
import { UmbDeprecation as E } from "@umbraco-cms/backoffice/utils";
var M = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, O = (e, t, a, s) => {
  for (var n = s > 1 ? void 0 : s ? M(t, a) : t, c = e.length - 1, d; c >= 0; c--)
    (d = e[c]) && (n = d(n) || n);
  return n;
}, u = (e, t, a) => t.has(e) || m("Cannot " + a), A = (e, t, a) => (u(e, t, "read from private field"), a ? a.call(e) : t.get(e)), p = (e, t, a) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), k = (e, t, a, s) => (u(e, t, "write to private field"), t.set(e, a), a), r = (e, t, a) => (u(e, t, "access private method"), a), o, i, _, h, f, y;
let l = class extends b {
  constructor() {
    super(...arguments), p(this, i), p(this, o);
  }
  connectedCallback() {
    if (super.connectedCallback(), !this.data?.parent) throw new Error("A parent is required to create a folder");
    new E({
      deprecated: "umb-media-type-create-options-modal",
      removeInVersion: "17.0.0",
      solution: "Use UMB_ENTITY_CREATE_OPTION_ACTION_LIST_MODAL instead"
    }).warn(), k(this, o, new w(this, {
      unique: this.data.parent.unique,
      entityType: this.data.parent.entityType,
      meta: {
        icon: "icon-folder",
        label: "New Folder...",
        folderRepositoryAlias: v
      }
    }));
  }
  render() {
    return C`
			<umb-body-layout headline="Create Media Type">
				<uui-box>
					<!-- TODO: construct url -->
					<uui-menu-item href=${r(this, i, y).call(this)} label="New Media Type..." @click=${r(this, i, h)}>
						<uui-icon slot="icon" name="icon-autofill"></uui-icon>
					</uui-menu-item>
					<uui-menu-item @click=${r(this, i, _)} label="New Folder...">
						<uui-icon slot="icon" name="icon-folder"></uui-icon>}
					</uui-menu-item>
				</uui-box>
				<uui-button slot="actions" id="cancel" label="Cancel" @click="${r(this, i, f)}">Cancel</uui-button>
			</umb-body-layout>
		`;
  }
};
o = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
_ = async function(e) {
  e.stopPropagation();
  try {
    await A(this, o)?.execute(), this._submitModal();
  } catch (t) {
    console.error(t);
  }
};
h = function() {
  this.modalContext?.submit();
};
f = function() {
  this.modalContext?.reject();
};
y = function() {
  return `section/settings/workspace/media-type/create/parent/${this.data?.parent.entityType}/${this.data?.parent.unique || "null"}`;
};
l = O([
  T("umb-media-type-create-options-modal")
], l);
const N = l;
export {
  l as UmbMediaTypeCreateOptionsModalElement,
  N as default
};
//# sourceMappingURL=media-type-create-options-modal.element-CjSx0Sj0.js.map
