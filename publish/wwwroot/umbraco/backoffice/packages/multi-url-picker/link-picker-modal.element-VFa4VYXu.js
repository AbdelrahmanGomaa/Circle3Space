import { html as o, nothing as f, when as G, css as H, state as w, query as b, customElement as J } from "@umbraco-cms/backoffice/external/lit";
import { UmbMediaTypeStructureRepository as K, isUmbracoFolder as Q } from "@umbraco-cms/backoffice/media-type";
import { UmbValidationContext as X, umbBindToValidation as q } from "@umbraco-cms/backoffice/validation";
import { UmbModalBaseElement as Y, umbConfirmModal as Z } from "@umbraco-cms/backoffice/modal";
import { UmbDocumentDetailRepository as j } from "@umbraco-cms/backoffice/document";
import { UmbMediaDetailRepository as ee } from "@umbraco-cms/backoffice/media";
var te = Object.defineProperty, ie = Object.getOwnPropertyDescriptor, U = (e) => {
  throw TypeError(e);
}, m = (e, t, a, u) => {
  for (var l = u > 1 ? void 0 : u ? ie(t, a) : t, s = e.length - 1, k; s >= 0; s--)
    (k = e[s]) && (l = (u ? k(t, a, l) : k(l)) || l);
  return u && l && te(t, a, l), l;
}, g = (e, t, a) => t.has(e) || U("Cannot " + a), p = (e, t, a) => (g(e, t, "read from private field"), a ? a.call(e) : t.get(e)), y = (e, t, a) => t.has(e) ? U("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), ne = (e, t, a, u) => (g(e, t, "write to private field"), t.set(e, a), a), n = (e, t, a) => (g(e, t, "access private method"), a), d, _, i, P, r, z, L, M, x, $, T, C, S, E, I, R, A, D, W, N, O, V, B, F;
let h = class extends Y {
  constructor() {
    super(...arguments), y(this, i), y(this, d, "vertical"), y(this, _, new X(this)), this._config = {
      hideAnchor: !1,
      hideTarget: !1
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.data?.config && (this._config = this.data.config), this.modalContext && this.observe(this.modalContext.size, (e) => {
      (e === "large" || e === "full") && ne(this, d, "horizontal");
    }), n(this, i, P).call(this);
  }
  firstUpdated() {
    this._linkAnchorInput?.addValidator(
      "valueMissing",
      () => this.localize.term("linkPicker_modalAnchorValidationMessage"),
      () => !this.value.link.url && !this.value.link.queryString
    );
  }
  render() {
    return o`
			<umb-body-layout
				headline=${this.localize.term(
      this.modalContext?.data.isNew ? "defaultdialogs_addLink" : "defaultdialogs_updateLink"
    )}>
				<uui-box>
					${n(this, i, R).call(this)} ${n(this, i, V).call(this)} ${n(this, i, B).call(this)}
					${n(this, i, F).call(this)}
				</uui-box>
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
					<uui-button
						color="positive"
						look="primary"
						label=${this.localize.term(this.modalContext?.data.isNew ? "general_add" : "general_update")}
						?disabled=${!this.value.link.type}
						@click=${n(this, i, C)}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
d = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
P = async function() {
  const e = new K(this), { data: t } = await e.requestAllowedChildrenOf(null, null);
  this._allowedMediaTypeUniques = t?.items.map((a) => a.unique).filter((a) => a && !Q(a)) ?? [];
};
r = function(e) {
  this.modalContext?.updateValue({ link: { ...this.value.link, ...e } });
};
z = function(e) {
  const t = e.target.value ?? "";
  if (t.startsWith("#") || t.startsWith("?")) {
    n(this, i, r).call(this, { queryString: t });
    return;
  }
  t.includes("=") ? n(this, i, r).call(this, { queryString: `?${t}` }) : t ? n(this, i, r).call(this, { queryString: `#${t}` }) : n(this, i, r).call(this, { queryString: "" });
};
L = function(e) {
  n(this, i, r).call(this, { name: e.target.value });
};
M = function(e) {
  n(this, i, r).call(this, { target: e.target.checked ? "_blank" : void 0 });
};
x = function(e) {
  const t = e.target.value;
  let a;
  t && !this.value.link.name && (URL.canParse(t) ? a = URL.parse(t)?.hostname ?? t : a = t), n(this, i, r).call(this, {
    name: this.value.link.name || a,
    type: "external",
    url: t
  });
};
$ = async function(e, t) {
  let a, u, l;
  const s = e.target.value;
  if (s)
    switch (t) {
      case "document": {
        const v = new j(this), { data: c } = await v.requestByUnique(s);
        c && (a = c.documentType.icon, u = c.variants[0].name, l = c.urls[0]?.url ?? "");
        break;
      }
      case "media": {
        const v = new ee(this), { data: c } = await v.requestByUnique(s);
        c && (a = c.mediaType.icon, u = c.variants[0].name, l = c.urls[0].url);
        break;
      }
    }
  const k = {
    icon: a,
    name: this.value.link.name || u,
    type: s ? t : void 0,
    unique: s,
    url: l ?? this.value.link.url
  };
  n(this, i, r).call(this, k), await p(this, _).validate();
};
T = async function() {
  this.value.link.url && await Z(this, {
    color: "danger",
    headline: this.localize.term("linkPicker_resetUrlHeadline"),
    content: this.localize.term("linkPicker_resetUrlMessage"),
    confirmLabel: this.localize.term("linkPicker_resetUrlLabel")
  }), n(this, i, r).call(this, { type: null, url: null });
};
C = async function() {
  await p(this, _).validate(), this.modalContext?.submit();
};
S = function() {
  this._documentPickerElement?.shadowRoot?.querySelector("#btn-add")?.dispatchEvent(new Event("click"));
};
E = function() {
  this._mediaPickerElement?.shadowRoot?.querySelector("#btn-add")?.dispatchEvent(new Event("click"));
};
I = function() {
  n(this, i, r).call(this, { type: "external" });
};
R = function() {
  return o`
			<umb-property-layout
				orientation=${p(this, d)}
				label=${this.localize.term("linkPicker_modalSource")}
				mandatory>
				<div slot="editor">
					${n(this, i, A).call(this)} ${n(this, i, D).call(this)} ${n(this, i, W).call(this)}
					${n(this, i, N).call(this)} ${n(this, i, O).call(this)}
				</div>
			</umb-property-layout>
		`;
};
A = function() {
  return this.value.link.type ? f : o`
			<uui-button-group>
				<uui-button
					data-mark="action:document"
					look="placeholder"
					label=${this.localize.term("general_content")}
					@click=${n(this, i, S)}></uui-button>
				<uui-button
					data-mark="action:media"
					look="placeholder"
					label=${this.localize.term("general_media")}
					@click=${n(this, i, E)}></uui-button>
				<uui-button
					data-mark="action:external"
					look="placeholder"
					label=${this.localize.term("linkPicker_modalManual")}
					@click=${n(this, i, I)}></uui-button>
			</uui-button-group>
		`;
};
D = function() {
  return o`
			<umb-input-document
				?hidden=${!this.value.link.unique || this.value.link.type !== "document"}
				.max=${1}
				.value=${this.value.link.unique && this.value.link.type === "document" ? this.value.link.unique : ""}
				@change=${(e) => n(this, i, $).call(this, e, "document")}>
			</umb-input-document>
		`;
};
W = function() {
  return o`
			<umb-input-media
				?hidden=${!this.value.link.unique || this.value.link.type !== "media"}
				.allowedContentTypeIds=${this._allowedMediaTypeUniques}
				.max=${1}
				.value=${this.value.link.unique && this.value.link.type === "media" ? this.value.link.unique : ""}
				@change=${(e) => n(this, i, $).call(this, e, "media")}></umb-input-media>
		`;
};
N = function() {
  return this.value.link.type !== "external" ? f : o`
			<uui-input
				data-mark="input:url"
				label=${this.localize.term("placeholders_enterUrl")}
				placeholder=${this.localize.term("placeholders_enterUrl")}
				.value=${this.value.link.url ?? ""}
				?disabled=${!!this.value.link.unique}
				?required=${this._config.hideAnchor}
				@change=${n(this, i, x)}
				${q(this)}>
				${G(
    !this.value.link.unique,
    () => o`
						<div slot="append">
							<uui-button
								slot="append"
								compact
								label=${this.localize.term("general_remove")}
								@click=${n(this, i, T)}>
								<uui-icon name="remove"></uui-icon>
							</uui-button>
						</div>
					`
  )}
			</uui-input>
		`;
};
O = function() {
  return !this.value.link.unique || !this.value.link.url ? f : o`<uui-input readonly value=${this.value.link.url}></uui-input>`;
};
V = function() {
  return this._config.hideAnchor ? f : o`
			<umb-property-layout
				orientation=${p(this, d)}
				label=${this.localize.term("defaultdialogs_anchorLinkPicker")}>
				<uui-input
					data-mark="input:anchor"
					slot="editor"
					id="link-anchor"
					label=${this.localize.term("placeholders_anchor")}
					placeholder=${this.localize.term("placeholders_anchor")}
					.value=${this.value.link.queryString ?? ""}
					@change=${n(this, i, z)}
					${q(this)}></uui-input>
			</umb-property-layout>
		`;
};
B = function() {
  return o`
			<umb-property-layout
				orientation=${p(this, d)}
				label=${this.localize.term("defaultdialogs_nodeNameLinkPicker")}>
				<uui-input
					data-mark="input:title"
					slot="editor"
					label=${this.localize.term("defaultdialogs_nodeNameLinkPicker")}
					placeholder=${this.localize.term("defaultdialogs_nodeNameLinkPicker")}
					.value=${this.value.link.name ?? ""}
					@change=${n(this, i, L)}>
				</uui-input>
			</umb-property-layout>
		`;
};
F = function() {
  return this._config.hideTarget ? f : o`
			<umb-property-layout orientation=${p(this, d)} label=${this.localize.term("content_target")}>
				<uui-toggle
					slot="editor"
					label=${this.localize.term("defaultdialogs_openInNewWindow")}
					.checked=${this.value.link.target === "_blank"}
					@change=${n(this, i, M)}>
					${this.localize.term("defaultdialogs_openInNewWindow")}
				</uui-toggle>
			</umb-property-layout>
		`;
};
h.styles = [
  H`
			uui-box {
				--uui-box-default-padding: 0 var(--uui-size-space-5);
			}

			uui-button-group {
				width: 100%;
			}

			uui-input {
				width: 100%;

				&[readonly] {
					margin-top: var(--uui-size-space-2);
				}
			}
		`
];
m([
  w()
], h.prototype, "_allowedMediaTypeUniques", 2);
m([
  w()
], h.prototype, "_config", 2);
m([
  b("umb-input-document")
], h.prototype, "_documentPickerElement", 2);
m([
  b("umb-input-media")
], h.prototype, "_mediaPickerElement", 2);
m([
  b("#link-anchor", !0)
], h.prototype, "_linkAnchorInput", 2);
h = m([
  J("umb-link-picker-modal")
], h);
const ce = h;
export {
  h as UmbLinkPickerModalElement,
  ce as default,
  h as element
};
//# sourceMappingURL=link-picker-modal.element-VFa4VYXu.js.map
