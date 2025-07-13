import { g as k, h as q, i as B } from "./manifests-BUr6Ff2j.js";
import { DocumentVariantStateModel as b } from "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/notification";
import { T as W } from "./utils-DjhBxJtv.js";
import { html as c, ifDefined as f, nothing as d, css as R, state as r, customElement as L } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as G } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as V } from "@umbraco-cms/backoffice/router";
import { UMB_MODAL_MANAGER_CONTEXT as H } from "@umbraco-cms/backoffice/modal";
import { UMB_WORKSPACE_MODAL as K } from "@umbraco-cms/backoffice/workspace";
import { UmbTemplateItemRepository as X, UMB_TEMPLATE_PICKER_MODAL as F } from "@umbraco-cms/backoffice/template";
import { createExtensionApiByAlias as Y } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as J } from "@umbraco-cms/backoffice/section";
import { UMB_SETTINGS_SECTION_ALIAS as Q } from "@umbraco-cms/backoffice/settings";
var Z = Object.defineProperty, j = Object.getOwnPropertyDescriptor, P = (e) => {
  throw TypeError(e);
}, o = (e, t, i, h) => {
  for (var l = h > 1 ? void 0 : h ? j(t, i) : t, _ = e.length - 1, y; _ >= 0; _--)
    (y = e[_]) && (l = (h ? y(t, i, l) : y(l)) || l);
  return h && l && Z(t, i, l), l;
}, C = (e, t, i) => t.has(e) || P("Cannot " + i), p = (e, t, i) => (C(e, t, "read from private field"), i ? i.call(e) : t.get(e)), v = (e, t, i) => t.has(e) ? P("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), U = (e, t, i, h) => (C(e, t, "write to private field"), t.set(e, i), i), a = (e, t, i) => (C(e, t, "access private method"), i), u, D, g, n, S, E, $, A, I, w, z, M, x, N, O, m, T;
let s = class extends G {
  constructor() {
    super(), v(this, n), this._documentUnique = "", this._documentTypeUnique = "", this._templateUnique = "", this._variantsWithPendingChanges = [], this._hasSettingsAccess = !1, v(this, u), v(this, D, new X(this)), v(this, g), new V(this, K).addAdditionalPath("general/:entityType").onSetup((e) => ({ data: { entityType: e.entityType, preset: {} } })).observeRouteBuilder((e) => {
      this._routeBuilder = e;
    }), this.consumeContext(k, (e) => {
      U(this, u, e), this._documentTypeUnique = p(this, u).getContentTypeId(), a(this, n, S).call(this);
    }), this.consumeContext(q, (e) => {
      this.observe(e.currentVariant, (t) => {
        this._variant = t;
      });
    }), this.consumeContext(B, (e) => {
      U(this, g, e), a(this, n, E).call(this);
    }), Y(this, J, [
      {
        config: {
          match: Q
        },
        onChange: (e) => {
          this._hasSettingsAccess = e;
        }
      }
    ]);
  }
  render() {
    return c`
			<div class="container">
				<umb-extension-slot id="workspace-info-apps" type="workspaceInfoApp"></umb-extension-slot>
			</div>
			<div class="container">
				<uui-box headline=${this.localize.term("general_general")} id="general-section">
					${a(this, n, I).call(this)}
				</uui-box>
			</div>
		`;
  }
};
u = /* @__PURE__ */ new WeakMap();
D = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
S = function() {
  p(this, u) && (this.observe(
    p(this, u).structure.ownerContentType,
    (e) => {
      this._documentTypeName = e?.name, this._documentTypeIcon = e?.icon, this._allowedTemplates = e?.allowedTemplates;
    },
    "_documentType"
  ), this.observe(
    p(this, u).unique,
    (e) => {
      this._documentUnique = e;
    },
    "_documentUnique"
  ), this.observe(
    p(this, u).templateId,
    async (e) => {
      if (this._templateUnique = e, !e) return;
      const { data: t } = await p(this, D).requestItems([e]);
      t?.length && (this._templateName = t[0].name);
    },
    "_templateUnique"
  ));
};
E = function() {
  this.observe(
    p(this, g)?.publishedPendingChanges.variantsWithChanges,
    (e) => {
      this._variantsWithPendingChanges = e || [];
    },
    "_observePendingChanges"
  );
};
$ = function(e) {
  return this._variantsWithPendingChanges.some((t) => t.variantId.compare(e));
};
A = function() {
  switch (this._variant?.state) {
    case b.DRAFT:
      return c`
					<uui-tag look="secondary" label=${this.localize.term("content_unpublished")}>
						${this.localize.term("content_unpublished")}
					</uui-tag>
				`;
    // TODO: The pending changes state can be removed once the management Api removes this state
    // We should also make our own state model for this
    case b.PUBLISHED:
    case b.PUBLISHED_PENDING_CHANGES: {
      const e = a(this, n, $).call(this, this._variant) ? "content_publishedPendingChanges" : "content_published";
      return c`
					<uui-tag color="positive" look="primary" label=${this.localize.term(e)}>
						${this.localize.term(e)}
					</uui-tag>
				`;
    }
    default:
      return c`
					<uui-tag look="primary" label=${this.localize.term("content_notCreated")}>
						${this.localize.term("content_notCreated")}
					</uui-tag>
				`;
  }
};
I = function() {
  const e = this._routeBuilder?.({ entityType: "document-type" }) ?? "";
  return c`
			<div class="general-item"><span>${a(this, n, A).call(this)}</span></div>
			${a(this, n, z).call(this)} ${a(this, n, M).call(this)} ${a(this, n, x).call(this)}
			${a(this, n, N).call(this)} ${a(this, n, O).call(this)}

			<div class="general-item">
				<strong><umb-localize key="content_documentType">Document Type</umb-localize></strong>
				<uui-ref-node-document-type
					standalone
					href=${f(
    this._hasSettingsAccess ? e + "edit/" + this._documentTypeUnique : void 0
  )}
					?readonly=${!this._hasSettingsAccess}
					name=${f(this.localize.string(this._documentTypeName ?? ""))}>
					<umb-icon slot="icon" name=${f(this._documentTypeIcon)}></umb-icon>
				</uui-ref-node-document-type>
			</div>
			${a(this, n, w).call(this)}
			<div class="general-item">
				<strong><umb-localize key="template_id">Id</umb-localize></strong>
				<span>${this._documentUnique}</span>
			</div>
		`;
};
w = function() {
  if (this._allowedTemplates?.length === 0) return d;
  const e = this._routeBuilder?.({ entityType: "template" }) ?? "";
  return c`
			<div class="general-item">
				<strong><umb-localize key="template_template">Template</umb-localize></strong>
				${this._templateUnique ? c`
							<uui-ref-node
								standalone
								name=${f(this._templateName)}
								href=${f(
    this._hasSettingsAccess ? e + "edit/" + this._templateUnique : void 0
  )}
								?readonly=${!this._hasSettingsAccess}>
								<uui-icon slot="icon" name="icon-document-html"></uui-icon>
								<uui-action-bar slot="actions">
									<uui-button
										label=${this.localize.term("general_choose")}
										@click=${a(this, n, T)}></uui-button>
								</uui-action-bar>
							</uui-ref-node>
						` : c`
							<uui-button
								label=${this.localize.term("general_choose")}
								look="placeholder"
								@click=${a(this, n, T)}></uui-button>
						`}
			</div>
		`;
};
z = function() {
  return this._variant?.createDate ? a(this, n, m).call(this, this._variant.createDate, "content_createDate", "Created") : d;
};
M = function() {
  return this._variant?.updateDate ? a(this, n, m).call(this, this._variant.updateDate, "content_updateDate", "Last edited") : d;
};
x = function() {
  return this._variant?.publishDate ? a(this, n, m).call(this, this._variant.publishDate, "content_lastPublished", "Last published") : d;
};
N = function() {
  return this._variant?.scheduledPublishDate ? a(this, n, m).call(this, this._variant.scheduledPublishDate, "content_releaseDate", "Publish At") : d;
};
O = function() {
  return this._variant?.scheduledUnpublishDate ? a(this, n, m).call(this, this._variant.scheduledUnpublishDate, "content_expireDate", "Remove At") : d;
};
m = function(e, t, i) {
  return c`
			<div class="general-item">
				<strong><umb-localize .key=${t}>${i}</umb-localize></strong>
				<span>
					<umb-localize-date .date=${e} .options=${W}></umb-localize-date>
				</span>
			</div>
		`;
};
T = async function() {
  const i = await (await this.getContext(H)).open(this, F, {
    data: {
      multiple: !1,
      pickableFilter: (l) => !!this._allowedTemplates?.find((_) => l.unique === _.id)
    },
    value: {
      selection: [this._templateUnique]
    }
  })?.onSubmit().catch(() => {
  });
  if (!i?.selection.length) return;
  const h = i.selection[0];
  h && p(this, u)?.setTemplate(h);
};
s.styles = [
  R`
			:host {
				display: grid;
				gap: var(--uui-size-layout-1);
				padding: var(--uui-size-layout-1);
				grid-template-columns: 1fr 350px;
			}

			div.container {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-layout-1);
			}

			//General section

			#general-section {
				display: flex;
				flex-direction: column;
			}

			.general-item {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-1);
			}

			.general-item:not(:last-child) {
				margin-bottom: var(--uui-size-space-6);
			}

			.variant-state {
				display: flex;
				gap: var(--uui-size-space-4);
			}

			.variant-state > span {
				color: var(--uui-color-divider-emphasis);
			}

			uui-ref-node-document-type[readonly] {
				padding-top: 7px;
				padding-bottom: 7px;
			}
		`
];
o([
  r()
], s.prototype, "_documentUnique", 2);
o([
  r()
], s.prototype, "_documentTypeUnique", 2);
o([
  r()
], s.prototype, "_documentTypeName", 2);
o([
  r()
], s.prototype, "_documentTypeIcon", 2);
o([
  r()
], s.prototype, "_allowedTemplates", 2);
o([
  r()
], s.prototype, "_templateUnique", 2);
o([
  r()
], s.prototype, "_templateName", 2);
o([
  r()
], s.prototype, "_variant", 2);
o([
  r()
], s.prototype, "_variantsWithPendingChanges", 2);
o([
  r()
], s.prototype, "_hasSettingsAccess", 2);
o([
  r()
], s.prototype, "_routeBuilder", 2);
s = o([
  L("umb-document-workspace-view-info")
], s);
const _e = s;
export {
  s as UmbDocumentWorkspaceViewInfoElement,
  _e as default
};
//# sourceMappingURL=document-workspace-view-info.element-oVJMyO1U.js.map
