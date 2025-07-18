import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "./media-item.store.context-token-9YLCPlu1.js";
import "@umbraco-cms/backoffice/repository";
import { w as T } from "./input-upload-field.element-B7PCDmnx.js";
import { when as U, html as l, repeat as q, nothing as z, css as O, state as _, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as E } from "@umbraco-cms/backoffice/modal";
import { UmbMediaTypeStructureRepository as S } from "@umbraco-cms/backoffice/media-type";
import { UmbTextStyles as k } from "@umbraco-cms/backoffice/style";
var A = Object.defineProperty, P = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, p = (e, t, i, r) => {
  for (var a = r > 1 ? void 0 : r ? P(t, i) : t, d = e.length - 1, c; d >= 0; d--)
    (c = e[d]) && (a = (r ? c(t, i, a) : c(a)) || a);
  return r && a && A(t, i, a), a;
}, f = (e, t, i) => t.has(e) || y("Cannot " + i), w = (e, t, i) => (f(e, t, "read from private field"), i ? i.call(e) : t.get(e)), u = (e, t, i) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), o = (e, t, i) => (f(e, t, "access private method"), i), h, m, s, M, b, v, g, $;
let n = class extends E {
  constructor() {
    super(...arguments), u(this, s), u(this, h, new S(this)), u(this, m, new T(this)), this._allowedMediaTypes = [], this._headline = this.localize.term("general_create");
  }
  async firstUpdated() {
    const e = this.data?.parent.unique, t = this.data?.mediaType?.unique || null;
    o(this, s, M).call(this, t, e || null), e && o(this, s, b).call(this, e);
  }
  render() {
    return l`
			<umb-body-layout headline=${this._headline ?? ""}>
				<uui-box>
					${U(
      this._allowedMediaTypes.length === 0,
      () => o(this, s, g).call(this),
      () => o(this, s, $).call(this)
    )}
				</uui-box>
				<uui-button
					slot="actions"
					id="cancel"
					label=${this.localize.term("general_cancel")}
					@click="${this._rejectModal}"></uui-button>
			</umb-body-layout>
		`;
  }
};
h = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
M = async function(e, t) {
  const { data: i } = await w(this, h).requestAllowedChildrenOf(e, t);
  i && (this._allowedMediaTypes = i.items);
};
b = async function(e) {
  if (!e) return;
  const { data: t } = await w(this, m).requestItems([e]);
  t && (this._headline = this.localize.term("create_createUnder") + " " + t[0].variants?.[0].name);
};
v = function(e) {
  const t = `section/media/workspace/media/create/parent/${this.data?.parent.entityType}/${this.data?.parent.unique ?? "null"}/${e.unique}`;
  history.pushState({}, "", t), this._submitModal();
};
g = function() {
  return l`
			<umb-localize key="create_noMediaTypes">
				There are no allowed Media Types available for creating media here. You must enable these in
				<strong>Media Types</strong> within the <strong>Settings</strong> section, by editing the
				<strong>Allowed child node types</strong> under <strong>Permissions</strong>. </umb-localize
			><br />
			<uui-button
				id="edit-permissions"
				look="secondary"
				@click=${() => this._rejectModal()}
				href=${`/section/settings/workspace/media-type/edit/${this.data?.mediaType?.unique}/view/structure`}
				label=${this.localize.term("create_noMediaTypesEditPermissions")}></uui-button>
		`;
};
$ = function() {
  return q(
    this._allowedMediaTypes,
    (e) => e.unique,
    (e) => l`
				<uui-ref-node-document-type
					.name=${this.localize.string(e.name)}
					.alias=${this.localize.string(e.description ?? "")}
					select-only
					selectable
					@selected=${() => o(this, s, v).call(this, e)}>
					${e.icon ? l`<umb-icon slot="icon" name=${e.icon}></umb-icon>` : z}
				</uui-ref-node-document-type>
			`
  );
};
n.styles = [
  k,
  O`
			#edit-permissions {
				margin-top: var(--uui-size-6);
			}
		`
];
p([
  _()
], n.prototype, "_allowedMediaTypes", 2);
p([
  _()
], n.prototype, "_headline", 2);
n = p([
  C("umb-media-create-options-modal")
], n);
const j = n;
export {
  n as UmbMediaCreateOptionsModalElement,
  j as default
};
//# sourceMappingURL=media-create-options-modal.element-BQ0q_Hti.js.map
