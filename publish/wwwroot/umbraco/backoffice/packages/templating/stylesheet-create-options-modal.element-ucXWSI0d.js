import { j as y } from "./manifests-BP46ESrA.js";
import "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { html as v, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as b } from "@umbraco-cms/backoffice/modal";
import { UmbCreateFolderEntityAction as C } from "@umbraco-cms/backoffice/tree";
var E = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, S = (e, t, i, s) => {
  for (var o = s > 1 ? void 0 : s ? E(t, i) : t, l = e.length - 1, h; l >= 0; l--)
    (h = e[l]) && (o = h(o) || o);
  return o;
}, d = (e, t, i) => t.has(e) || _("Cannot " + i), k = (e, t, i) => (d(e, t, "read from private field"), i ? i.call(e) : t.get(e)), m = (e, t, i) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), O = (e, t, i, s) => (d(e, t, "write to private field"), t.set(e, i), i), r = (e, t, i) => (d(e, t, "access private method"), i), n, a, f, c, u;
let p = class extends b {
  constructor() {
    super(...arguments), m(this, a), m(this, n);
  }
  connectedCallback() {
    if (super.connectedCallback(), !this.data?.parent) throw new Error("A parent is required to create a folder");
    O(this, n, new C(this, {
      unique: this.data.parent.unique,
      entityType: this.data.parent.entityType,
      meta: {
        icon: "icon-folder",
        label: "New folder...",
        folderRepositoryAlias: y
      }
    }));
  }
  render() {
    return v`
			<umb-body-layout headline="Create Stylesheet">
				<uui-box>
					<!-- TODO: construct url -->
					<uui-menu-item href=${`${r(this, a, u).call(this)}/view/code`} label="New Stylesheet" @click=${r(this, a, c)}>
						<uui-icon slot="icon" name="icon-palette"></uui-icon>}
					</uui-menu-item>

					<uui-menu-item
						href=${`${r(this, a, u).call(this)}/view/rich-text-editor`}
						label="New Rich Text Editor Stylesheet"
						@click=${r(this, a, c)}>
						<uui-icon slot="icon" name="icon-palette"></uui-icon>}
					</uui-menu-item>

					<uui-menu-item @click=${r(this, a, f)} label="New Folder...">
						<uui-icon slot="icon" name="icon-folder"></uui-icon>}
					</uui-menu-item>
				</uui-box>

				<uui-button slot="actions" id="cancel" label="Cancel" @click="${this._rejectModal}"></uui-button>
			</umb-body-layout>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
f = async function(e) {
  e.stopPropagation();
  try {
    await k(this, n)?.execute(), this._submitModal();
  } catch (t) {
    console.error(t);
  }
};
c = function() {
  this._submitModal();
};
u = function() {
  return `section/settings/workspace/stylesheet/create/parent/${this.data?.parent.entityType}/${this.data?.parent.unique || "null"}`;
};
p = S([
  w("umb-stylesheet-create-options-modal")
], p);
const R = p;
export {
  p as UmbStylesheetCreateOptionsModalElement,
  R as default
};
//# sourceMappingURL=stylesheet-create-options-modal.element-ucXWSI0d.js.map
