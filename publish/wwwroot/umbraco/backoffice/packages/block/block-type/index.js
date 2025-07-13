import { U as J, a as Q } from "../input-block-type.element-MKXBwuML.js";
import { UmbModalToken as A, UMB_MODAL_MANAGER_CONTEXT as C } from "@umbraco-cms/backoffice/modal";
import { UmbLitElement as g } from "@umbraco-cms/backoffice/lit-element";
import { css as O, property as x, state as V, customElement as W, html as w } from "@umbraco-cms/backoffice/external/lit";
import { UMB_PROPERTY_DATASET_CONTEXT as P } from "@umbraco-cms/backoffice/property";
import { umbExtensionsRegistry as S } from "@umbraco-cms/backoffice/extension-registry";
import { stringOrStringArrayContains as v } from "@umbraco-cms/backoffice/utils";
import { UmbExtensionsManifestInitializer as D } from "@umbraco-cms/backoffice/extension-api";
import { UmbDocumentTypeDetailRepository as R } from "@umbraco-cms/backoffice/document-type";
import { U as j } from "../block-type-workspace.context-token-C9eNrOiR.js";
const M = new A(
  "Umb.Modal.ManifestViewer",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
);
var N = Object.defineProperty, G = Object.getOwnPropertyDescriptor, k = (t) => {
  throw TypeError(t);
}, E = (t, e, i, o) => {
  for (var n = o > 1 ? void 0 : o ? G(e, i) : e, f = t.length - 1, d; f >= 0; f--)
    (d = t[f]) && (n = (o ? d(e, i, n) : d(n)) || n);
  return o && n && N(e, i, n), n;
}, T = (t, e, i) => e.has(t) || k("Cannot " + i), s = (t, e, i) => (T(t, e, "read from private field"), i ? i.call(t) : e.get(t)), l = (t, e, i) => e.has(t) ? k("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), u = (t, e, i, o) => (T(t, e, "write to private field"), e.set(t, i), i), c = (t, e, i) => (T(t, e, "access private method"), i), h, r, a, _, p, y, b, B, U;
let m = class extends g {
  constructor() {
    super(), l(this, p), l(this, h), l(this, r), l(this, a), l(this, _, new R(this)), l(this, b, (t) => !(!s(this, a) || !s(this, r) || t.forContentTypeAlias && !v(t.forContentTypeAlias, s(this, r)) || t.forBlockEditor && !v(t.forBlockEditor, s(this, a)))), this.consumeContext(P, async (t) => {
      this.observe(
        await t.propertyValueByAlias("contentElementTypeKey"),
        async (e) => {
          if (!e) return;
          const { asObservable: i } = await s(this, _).requestByUnique(e);
          this.observe(
            i(),
            (o) => {
              u(this, h, o?.name), u(this, r, o?.alias), c(this, p, y).call(this);
            },
            "observeContentType"
          );
        },
        "observeContentElementTypeKey"
      );
    });
  }
  get blockEditorType() {
    return s(this, a);
  }
  set blockEditorType(t) {
    u(this, a, t), c(this, p, y).call(this);
  }
  render() {
    return this._manifests && this._manifests.length > 0 ? w` <div>
					<umb-ref-manifest
						standalone
						@open=${() => c(this, p, B).call(this, this._manifests[0])}
						.manifest=${this._manifests[0]}></umb-ref-manifest>
				</div>` : w`<uui-button
					id="add-button"
					look="placeholder"
					label="Generate manifest for this Block Type"
					type="button"
					color="default"
					@click=${() => c(this, p, U).call(this)}></uui-button>`;
  }
};
h = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
y = function() {
  !s(this, a) || !s(this, r) || new D(
    this,
    S,
    "blockEditorCustomView",
    s(this, b),
    async (t) => {
      this._manifests = t.map((e) => e.manifest);
    },
    "manifestInitializer"
  );
};
b = /* @__PURE__ */ new WeakMap();
B = async function(t) {
  (await this.getContext(C)).open(this, M, { data: t });
};
U = async function() {
  const t = await this.getContext(C), e = {
    type: "blockEditorCustomView",
    alias: "Local.blockEditorCustomView." + s(this, r),
    name: "Block Editor Custom View for " + s(this, h),
    element: "[replace with path to your web component js file...]",
    forContentTypeAlias: s(this, r),
    forBlockEditor: s(this, a)
  };
  t.open(this, M, { data: e });
};
m.styles = [
  O`
			#add-button {
				text-align: center;
				width: 100%;
			}
		`
];
E([
  x({ type: String, attribute: "block-editor-type" })
], m.prototype, "blockEditorType", 1);
E([
  V()
], m.prototype, "_manifests", 2);
m = E([
  W("umb-block-type-custom-view-guide")
], m);
export {
  j as UMB_BLOCK_TYPE_WORKSPACE_CONTEXT,
  J as UmbBlockTypeCardElement,
  m as UmbBlockTypeCustomViewGuideElement,
  Q as UmbInputBlockTypeElement
};
//# sourceMappingURL=index.js.map
