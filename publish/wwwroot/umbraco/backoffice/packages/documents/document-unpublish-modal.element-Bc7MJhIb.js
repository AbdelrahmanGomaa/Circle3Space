import { DocumentVariantStateModel as _ } from "@umbraco-cms/backoffice/external/backend-api";
import { x as I, y as C } from "./manifests-BUr6Ff2j.js";
import { UMB_DOCUMENT_CONFIGURATION_CONTEXT as R } from "./document-configuration.context-O-fJ6QkZ.js";
import { nothing as m, html as d, css as T, state as c, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as D } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as O } from "@umbraco-cms/backoffice/style";
import { UmbSelectionManager as $ } from "@umbraco-cms/backoffice/utils";
import "./document-variant-language-picker.element-azTXCKTU.js";
var k = Object.defineProperty, q = Object.getOwnPropertyDescriptor, g = (e) => {
  throw TypeError(e);
}, l = (e, i, t, a) => {
  for (var s = a > 1 ? void 0 : a ? q(i, t) : i, n = e.length - 1, p; n >= 0; n--)
    (p = e[n]) && (s = (a ? p(i, t, s) : p(s)) || s);
  return a && s && k(i, t, s), s;
}, v = (e, i, t) => i.has(e) || g("Cannot " + t), b = (e, i, t) => (v(e, i, "read from private field"), t ? t.call(e) : i.get(e)), f = (e, i, t) => i.has(e) ? g("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(e) : i.set(e, t), u = (e, i, t) => (v(e, i, "access private method"), t), h, r, y, U, M, S, E;
function x(e) {
  return e.variant?.state === _.PUBLISHED || e.variant?.state === _.PUBLISHED_PENDING_CHANGES;
}
let o = class extends D {
  constructor() {
    super(...arguments), f(this, r), this._selectionManager = new $(this), this._options = [], this._selection = [], this._canUnpublish = !0, this._hasInvalidSelection = !0, this._isInvariant = !1, f(this, h, (e) => e.variant ? this.data?.pickableFilter ? this.data.pickableFilter(e) : !0 : !1), this._requiredFilter = (e) => e.language.isMandatory && !this._selection.includes(e.unique);
  }
  firstUpdated() {
    if (u(this, r, y).call(this), this.data?.options.length === 1 && this.data.options[0].unique === "invariant") {
      this._isInvariant = !0, this._hasInvalidSelection = !1;
      return;
    }
    u(this, r, U).call(this);
  }
  render() {
    return d`<uui-dialog-layout headline=${this.localize.term("content_unpublish")}>
			${this._isInvariant ? m : d`
						<p id="subtitle">
							<umb-localize key="content_languagesToUnpublish">
								Select the languages to unpublish. Unpublishing a mandatory language will unpublish all languages.
							</umb-localize>
						</p>
						<umb-document-variant-language-picker
							.selectionManager=${this._selectionManager}
							.variantLanguageOptions=${this._options}
							.requiredFilter=${this._hasInvalidSelection ? this._requiredFilter : void 0}
							.pickableFilter=${b(this, h)}></umb-document-variant-language-picker>
					`}

			<p>
				<umb-localize key="prompt_confirmUnpublish">
					Unpublishing will remove this page and all its descendants from the site.
				</umb-localize>
			</p>

			${this._referencesConfig ? d`<umb-confirm-action-modal-entity-references
						.config=${this._referencesConfig}
						@change=${u(this, r, E)}></umb-confirm-action-modal-entity-references>` : m}

			<div slot="actions">
				<uui-button label=${this.localize.term("general_close")} @click=${u(this, r, S)}></uui-button>
				<uui-button
					label="${this.localize.term("actions_unpublish")}"
					?disabled=${this._hasInvalidSelection || !this._canUnpublish || !this._isInvariant && this._selection.length === 0}
					look="primary"
					color="warning"
					@click=${u(this, r, M)}></uui-button>
			</div>
		</uui-dialog-layout> `;
  }
};
h = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
y = function() {
  this.data?.documentUnique && (this._referencesConfig = {
    itemRepositoryAlias: C,
    referenceRepositoryAlias: I,
    unique: this.data.documentUnique
  });
};
U = async function() {
  this._selectionManager.setMultiple(!0), this._selectionManager.setSelectable(!0), this._options = this.data?.options.filter((t) => t.variant && t.variant.state === null || x(t)) ?? [];
  let e = this.value?.selection ?? [];
  const i = this._options.filter((t) => b(this, h).call(this, t));
  e = e.filter((t) => i.some((a) => a.unique === t)), this._selectionManager.setSelection(e), this.observe(
    this._selectionManager.selection,
    (t) => {
      this._selection = t;
      const a = this._options.some((n) => n.language.isMandatory && t.includes(n.unique)), s = this._options.some(
        (n) => n.language.isMandatory && !t.includes(n.unique)
      );
      this._hasInvalidSelection = a && s;
    },
    "observeSelection"
  );
};
M = function() {
  if (this._canUnpublish) {
    const e = this._isInvariant ? ["invariant"] : this._selection;
    this.value = { selection: e }, this.modalContext?.submit();
    return;
  }
  this.modalContext?.reject();
};
S = function() {
  this.modalContext?.reject();
};
E = async function(e) {
  e.stopPropagation();
  const i = e.target, t = i.getTotalReferencedBy(), a = i.getTotalDescendantsWithReferences();
  if (t + a > 0) {
    const n = await this.getContext(R);
    this._canUnpublish = (await n.getDocumentConfiguration())?.disableUnpublishWhenReferenced === !1;
  }
};
o.styles = [
  O,
  T`
			:host {
				display: block;
				min-width: 600px;
				max-width: 90vw;
			}

			#references {
				--uui-table-cell-padding: 0;
			}

			#references-warning {
				margin-top: 1rem;
				background-color: var(--uui-color-danger);
				color: var(--uui-color-danger-contrast);
			}
		`
];
l([
  c()
], o.prototype, "_options", 2);
l([
  c()
], o.prototype, "_selection", 2);
l([
  c()
], o.prototype, "_canUnpublish", 2);
l([
  c()
], o.prototype, "_hasInvalidSelection", 2);
l([
  c()
], o.prototype, "_isInvariant", 2);
l([
  c()
], o.prototype, "_referencesConfig", 2);
o = l([
  w("umb-document-unpublish-modal")
], o);
const L = o;
export {
  o as UmbDocumentUnpublishModalElement,
  L as default,
  x as isPublished
};
//# sourceMappingURL=document-unpublish-modal.element-Bc7MJhIb.js.map
