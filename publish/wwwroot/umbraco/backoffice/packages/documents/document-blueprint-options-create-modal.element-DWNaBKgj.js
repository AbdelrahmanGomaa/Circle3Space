import { p as v } from "./paths-BF32ZUyU.js";
import { UmbDocumentBlueprintFolderRepository as w } from "./document-blueprint-folder.repository-o99ERsrb.js";
import { UmbTextStyles as C } from "@umbraco-cms/backoffice/style";
import { html as E, css as U, state as B, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as T } from "@umbraco-cms/backoffice/modal";
import { UmbSelectionChangeEvent as z } from "@umbraco-cms/backoffice/event";
import { UmbCreateFolderEntityAction as D } from "@umbraco-cms/backoffice/tree";
var O = Object.defineProperty, S = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, _ = (e, t, r, i) => {
  for (var a = i > 1 ? void 0 : i ? S(t, r) : t, s = e.length - 1, c; s >= 0; s--)
    (c = e[s]) && (a = (i ? c(t, r, a) : c(a)) || a);
  return i && a && O(t, r, a), a;
}, p = (e, t, r) => t.has(e) || h("Cannot " + r), b = (e, t, r) => (p(e, t, "read from private field"), r ? r.call(e) : t.get(e)), u = (e, t, r) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), x = (e, t, r, i) => (p(e, t, "write to private field"), t.set(e, r), r), d = (e, t, r) => (p(e, t, "access private method"), r), l, m, n, f, y;
let o = class extends T {
  constructor() {
    super(...arguments), u(this, n), u(this, l), u(this, m, new w(this));
  }
  async connectedCallback() {
    if (super.connectedCallback(), !this.data?.parent) throw new Error("A parent is required to create a folder");
    if (this.data.parent.unique) {
      const { data: e } = await b(this, m).requestByUnique(this.data.parent.unique.toString());
      this._parentName = e?.name ?? this.localize.term("general_unknown");
    } else
      this._parentName = this.localize.term("treeHeaders_contentBlueprints");
    x(this, l, new D(this, {
      unique: this.data.parent.unique,
      entityType: this.data.parent.entityType,
      meta: {
        icon: "icon-folder",
        label: this.localize.term("create_newFolder"),
        folderRepositoryAlias: v
      }
    }));
  }
  render() {
    return E`
			<umb-body-layout headline=${this.localize.term("actions_createblueprint")}>
				<uui-box headline=${this.localize.term("blueprints_createBlueprintFolderUnder", this._parentName)}>
					<uui-menu-item @click=${d(this, n, f)} label=${this.localize.term("create_newFolder") + "..."}>
						<uui-icon slot="icon" name="icon-folder"></uui-icon>
					</uui-menu-item>
				</uui-box>
				<uui-box headline=${this.localize.term("blueprints_createBlueprintItemUnder", this._parentName)}>
					<umb-localize key="create_createContentBlueprint">
						Select the Document Type you want to make a Document Blueprint for
					</umb-localize>
					<umb-tree
						alias="Umb.Tree.DocumentType"
						.props=${{
      hideTreeRoot: !0,
      selectableFilter: (e) => e.isElement == !1
    }}
						@selected=${d(this, n, y)}></umb-tree>
				</uui-box>
				<uui-button
					slot="actions"
					id="cancel"
					label=${this.localize.term("buttons_confirmActionCancel")}
					@click="${this._rejectModal}"></uui-button>
			</umb-body-layout>
		`;
  }
};
l = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
f = async function(e) {
  e.stopPropagation();
  try {
    await b(this, l)?.execute(), this._submitModal();
  } catch (t) {
    console.error(t);
  }
};
y = function(e) {
  e.stopPropagation();
  const t = e.target;
  this.value = { documentTypeUnique: t.getSelection()[0] }, this.modalContext?.dispatchEvent(new z()), this._submitModal();
};
o.styles = [
  C,
  U`
			uui-box:first-child {
				margin-bottom: var(--uui-size-6);
			}
		`
];
_([
  B()
], o.prototype, "_parentName", 2);
o = _([
  M("umb-document-blueprint-options-create-modal")
], o);
const R = o;
export {
  o as UmbDocumentBlueprintOptionsCreateModalElement,
  R as default
};
//# sourceMappingURL=document-blueprint-options-create-modal.element-DWNaBKgj.js.map
