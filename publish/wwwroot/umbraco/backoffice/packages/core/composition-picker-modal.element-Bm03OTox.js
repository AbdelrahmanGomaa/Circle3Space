import { html as n, nothing as C, repeat as v, css as q, state as y, customElement as P } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as A, umbConfirmModal as R } from "@umbraco-cms/backoffice/modal";
import { UmbExtensionApiInitializer as S } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as U } from "@umbraco-cms/backoffice/extension-registry";
var W = Object.defineProperty, D = Object.getOwnPropertyDescriptor, w = (e) => {
  throw TypeError(e);
}, _ = (e, i, t, s) => {
  for (var o = s > 1 ? void 0 : s ? D(i, t) : i, p = e.length - 1, f; p >= 0; p--)
    (f = e[p]) && (o = (s ? f(i, t, o) : f(o)) || o);
  return s && o && W(i, t, o), o;
}, g = (e, i, t) => i.has(e) || w("Cannot " + t), a = (e, i, t) => (g(e, i, "read from private field"), t ? t.call(e) : i.get(e)), d = (e, i, t) => i.has(e) ? w("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(e) : i.set(e, t), b = (e, i, t, s) => (g(e, i, "write to private field"), i.set(e, t), t), r = (e, i, t) => (g(e, i, "access private method"), t), c, m, h, l, z, $, E, k, T, x, M;
let u = class extends A {
  constructor() {
    super(...arguments), d(this, l), d(this, c), d(this, m, null), d(this, h), this._references = [], this._selection = [];
  }
  connectedCallback() {
    super.connectedCallback();
    const e = this.data?.compositionRepositoryAlias;
    if (e)
      b(this, h, new S(this, U, e, [this], (t, s) => {
        b(this, c, t ? s.api : void 0);
      }).asPromise());
    else
      throw new Error("No composition repository alias provided");
    this._selection = this.data?.selection ?? [], this.modalContext?.setValue({ selection: this._selection });
    const i = this.data.isNew;
    b(this, m, i ? null : this.data.unique), r(this, l, z).call(this), r(this, l, $).call(this);
  }
  async _submitModal() {
    const e = this.data?.selection ?? [], i = this._selection, t = new Set(i);
    !e.every((o) => t.has(o)) && await R(this, {
      headline: this.localize.term("general_remove"),
      content: n`<div style="max-width:400px">
					${this.localize.term("contentTypeEditor_compositionRemoveWarning")}
				</div>`,
      confirmLabel: this.localize.term("general_submit"),
      color: "danger"
    }), super._submitModal();
  }
  render() {
    return n`
			<umb-body-layout headline="${this.localize.term("contentTypeEditor_compositions")}">
				${this._references.length ? r(this, l, T).call(this) : r(this, l, x).call(this)}
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
					${this._references.length ? C : n`
								<uui-button
									label=${this.localize.term("general_submit")}
									look="primary"
									color="positive"
									@click=${this._submitModal}></uui-button>
							`}
				</div>
			</umb-body-layout>
		`;
  }
};
c = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
z = async function() {
  if (await a(this, h), !a(this, m) || !a(this, c)) return;
  const { data: e } = await a(this, c).getReferences(a(this, m));
  this._references = e ?? [];
};
$ = async function() {
  if (await a(this, h), !a(this, c)) return;
  const e = this.data?.isElement ?? void 0, i = this.data?.currentPropertyAliases ?? [], { data: t } = await a(this, c).availableCompositions({
    unique: a(this, m),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // TODO: isElement is not available on all types that can be composed.
    isElement: e,
    currentCompositeUniques: this._selection,
    currentPropertyAliases: i
  });
  if (!t) return;
  const s = Array.from(new Set(t.map((o) => "/" + o.folderPath.join("/"))));
  this._compatibleCompositions = s.map((o) => ({
    path: o,
    compositions: t.filter((p) => "/" + p.folderPath.join("/") === o)
  }));
};
E = function(e) {
  this._selection = [...this._selection, e], this.modalContext?.setValue({ selection: this._selection });
};
k = function(e) {
  this._selection = this._selection.filter((i) => i !== e), this.modalContext?.setValue({ selection: this._selection });
};
T = function() {
  return n`
			<umb-localize key="contentTypeEditor_compositionInUse">
				This Content Type is used in a composition, and therefore cannot be composed itself.
			</umb-localize>
			<h4>
				<umb-localize key="contentTypeEditor_compositionUsageHeading">Where is this composition used?</umb-localize>
			</h4>
			<umb-localize key="contentTypeEditor_compositionUsageSpecification">
				This composition is currently used in the composition of the following Content Types:
			</umb-localize>
			<div class="reference-list">
				${v(
    this._references,
    (e) => e.unique,
    (e) => n`
						<uui-ref-node-document-type
							href=${"/section/settings/workspace/document-type/edit/" + e.unique}
							name=${this.localize.string(e.name)}>
							<umb-icon slot="icon" name=${e.icon}></umb-icon>
						</uui-ref-node-document-type>
					`
  )}
			</div>
		`;
};
x = function() {
  return this._compatibleCompositions ? n`
				<umb-localize key="contentTypeEditor_compositionsDescription">
					Inherit tabs and properties from an existing Document Type. New tabs will be<br />added to the current
					Document Type or merged if a tab with an identical name exists.<br />
				</umb-localize>
				<!--- TODO: Implement search functionality
				<uui-input id="search" placeholder=this.localize.term('placeholders_filter')>
					<uui-icon name="icon-search" slot="prepend"></uui-icon>
				</uui-input> -->
				<div class="compositions-list">
					${v(
    this._compatibleCompositions,
    (e) => e.path,
    (e) => n`${this._compatibleCompositions.length > 1 ? n`<strong><umb-icon name="icon-folder"></umb-icon>${e.path}</strong>` : C}
							${r(this, l, M).call(this, e.compositions)}`
  )}
				</div>
			` : n`
				<umb-localize key="contentTypeEditor_noAvailableCompositions">
					There are no Content Types available to use as a composition
				</umb-localize>
			`;
};
M = function(e) {
  return v(
    e,
    (i) => i.unique,
    (i) => n`
				<uui-menu-item
					label=${this.localize.string(i.name)}
					selectable
					@selected=${() => r(this, l, E).call(this, i.unique)}
					@deselected=${() => r(this, l, k).call(this, i.unique)}
					?selected=${this._selection.find((t) => t === i.unique)}>
					<umb-icon name=${i.icon} slot="icon"></umb-icon>
				</uui-menu-item>
			`
  );
};
u.styles = [
  q`
			uui-input {
				margin: var(--uui-size-6) 0;
				display: flex;
				align-items: center;
			}

			#search uui-icon {
				padding-left: var(--uui-size-3);
			}

			.reference-list {
				margin-block: var(--uui-size-3);
				display: grid;
				gap: var(--uui-size-1);
			}

			.compositions-list strong {
				display: flex;
				align-items: center;
				gap: var(--uui-size-3);
			}
		`
];
_([
  y()
], u.prototype, "_references", 2);
_([
  y()
], u.prototype, "_compatibleCompositions", 2);
_([
  y()
], u.prototype, "_selection", 2);
u = _([
  P("umb-composition-picker-modal")
], u);
const B = u;
export {
  u as UmbCompositionPickerModalElement,
  B as default
};
//# sourceMappingURL=composition-picker-modal.element-Bm03OTox.js.map
