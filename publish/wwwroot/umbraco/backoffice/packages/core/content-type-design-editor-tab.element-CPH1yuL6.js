import { U as st, b as pt, a as Et } from "./content-type-move-root-containers-into-first-tab-helper.class-BXhoyS1X.js";
import { UmbContextBase as Ut } from "@umbraco-cms/backoffice/class-api";
import { UmbStringState as it } from "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/id";
import { generateAlias as It } from "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/extension-api";
import "@umbraco-cms/backoffice/extension-registry";
import { css as G, property as c, state as u, customElement as L, nothing as y, html as n, repeat as Q, when as H, ifDefined as Mt } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as F, umbFocus as kt } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as Y } from "@umbraco-cms/backoffice/router";
import { UmbSorterController as ut } from "@umbraco-cms/backoffice/sorter";
import { UMB_WORKSPACE_MODAL as At } from "@umbraco-cms/backoffice/workspace";
import { U as zt, a as xt } from "./content-type-property-structure-helper.class-CrCAJBRs.js";
import { UmbTextStyles as Z } from "@umbraco-cms/backoffice/style";
import { UMB_EDIT_PROPERTY_TYPE_WORKSPACE_PATH_PATTERN as Ht, UMB_PROPERTY_TYPE_WORKSPACE_MODAL as ot, UMB_CREATE_PROPERTY_TYPE_WORKSPACE_PATH_PATTERN as qt } from "@umbraco-cms/backoffice/property-type";
import { umbConfirmModal as dt } from "@umbraco-cms/backoffice/modal";
import { UmbDataTypeDetailRepository as Rt } from "@umbraco-cms/backoffice/data-type";
import { UUIBlinkKeyframes as Dt, UUIBlinkAnimationValue as Wt } from "@umbraco-cms/backoffice/external/uui";
class Bt extends Ut {
  constructor(e) {
    super(e, zt), this.#t = new it(void 0), this.alias = this.#t.asObservable(), this.#e = new it(void 0), this.label = this.#e.asObservable();
  }
  #t;
  #e;
  setAlias(e) {
    this.#t.setValue(e);
  }
  getAlias() {
    return this.#t.getValue();
  }
  setLabel(e) {
    this.#e.setValue(e);
  }
  getLabel() {
    return this.#e.getValue();
  }
  destroy() {
    super.destroy(), this.#t.destroy(), this.#e.destroy();
  }
}
var Nt = Object.defineProperty, Vt = Object.getOwnPropertyDescriptor, lt = (t) => {
  throw TypeError(t);
}, g = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? Vt(e, r) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (i = (o ? s(e, r, i) : s(i)) || i);
  return o && i && Nt(e, r, i), i;
}, j = (t, e, r) => e.has(t) || lt("Cannot " + r), O = (t, e, r) => (j(t, e, "read from private field"), r ? r.call(t) : e.get(t)), S = (t, e, r) => e.has(t) ? lt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), A = (t, e, r, o) => (j(t, e, "write to private field"), e.set(t, r), r), _ = (t, e, r) => (j(t, e, "access private method"), r), R, tt, D, V, z, l, ht, K, ct, W, yt, _t, gt, mt, vt;
let h = class extends F {
  constructor() {
    super(...arguments), S(this, l), S(this, R, new Bt(this)), S(this, tt, new Rt(this)), S(this, D), S(this, V), this.sortModeActive = !1, this._aliasLocked = !0, S(this, z, !0);
  }
  set propertyStructureHelper(t) {
    t !== this._propertyStructureHelper && (this._propertyStructureHelper = t, _(this, l, K).call(this));
  }
  get propertyStructureHelper() {
    return this._propertyStructureHelper;
  }
  get property() {
    return this._property;
  }
  set property(t) {
    const e = this._property;
    t !== e && (this._property = t, O(this, R).setAlias(t?.alias), O(this, R).setLabel(t?.name), _(this, l, ht).call(this, this._property?.id), _(this, l, K).call(this), _(this, l, _t).call(this, this._property?.dataType?.unique), this.requestUpdate("property", e));
  }
  render() {
    return this._inherited ? this.renderInheritedProperty() : this.renderEditableProperty();
  }
  renderInheritedProperty() {
    if (this.property)
      return this.sortModeActive ? this.renderSortableProperty() : n`
				<div id="header">
					<b>${this.property.name}</b>
					<i>${this.property.alias}</i>
					<p>${this.property.description}</p>
				</div>
				<div id="editor">
					${this.renderPropertyTags()}
					${this._inherited ? n`<uui-tag look="default" class="inherited">
								<uui-icon name="icon-merge"></uui-icon>
								<span
									>${this.localize.term("contentTypeEditor_inheritedFrom")}
									<a href=${this.editContentTypePath + "edit/" + this._inheritedContentTypeId}>
										${this._inheritedContentTypeName ?? "??"}
									</a>
								</span>
							</uui-tag>` : y}
				</div>
			`;
  }
  renderEditableProperty() {
    if (!(!this.property || !this.editPropertyTypePath))
      return this.sortModeActive ? this.renderSortableProperty() : n`
				<div id="header">
					<uui-input
						name="label"
						id="label-input"
						placeholder=${this.localize.term("placeholders_label")}
						label="label"
						.value=${this.property.name}
						@input=${_(this, l, vt)}></uui-input>
					${this.renderPropertyAlias()}
					<slot name="action-menu"></slot>
					<p>
						<uui-textarea
							label="description"
							name="description"
							id="description-input"
							placeholder=${this.localize.term("placeholders_enterDescription")}
							.value=${this.property.description}
							@input=${(t) => {
        t.target && _(this, l, W).call(this, "description", t.target.value);
      }}
							auto-height></uui-textarea>
					</p>
				</div>
				<uui-button
					id="editor"
					look="outline"
					label=${this.localize.term("contentTypeEditor_editorSettings")}
					href=${this.editPropertyTypePath + Ht.generateLocal({ unique: this.property.id })}>
					${this.renderPropertyTags()}
					<uui-action-bar>
						<uui-button label="${this.localize.term("actions_delete")}" @click="${_(this, l, gt)}">
							<uui-icon name="delete"></uui-icon>
						</uui-button>
					</uui-action-bar>
				</uui-button>
			`;
  }
  renderSortableProperty() {
    if (this.property)
      return n`
			<div class="sortable">
				<uui-icon name="icon-grip"></uui-icon>
				<span>${this.property.name}</span>
				<span style="color: var(--uui-color-disabled-contrast)">(${this.property.alias})</span>
			</div>
			<uui-input
				type="number"
				?disabled=${this._inherited}
				label="sort order"
				@change=${(t) => _(this, l, ct).call(this, { sortOrder: parseInt(t.target.value) ?? 0 })}
				.value=${this.property.sortOrder ?? 0}></uui-input>
		`;
  }
  renderPropertyAlias() {
    if (this.property)
      return n`
			<uui-input-lock
				name="alias"
				id="alias-input"
				label=${this.localize.term("placeholders_enterAlias")}
				placeholder=${this.localize.term("placeholders_enterAlias")}
				.value=${this.property.alias}
				?locked=${this._aliasLocked}
				@input=${_(this, l, mt)}
				@lock-change=${_(this, l, yt)}>
			</uui-input-lock>
		`;
  }
  renderPropertyTags() {
    return this.property ? n`<div class="types">
					${this.property.dataType?.unique ? n`<uui-tag look="default">${this._dataTypeName}</uui-tag>` : y}
					${this.ownerVariesByCulture ? this.property.variesByCulture ? n`<uui-tag look="default">
									<uui-icon name="icon-shuffle"></uui-icon> ${this.localize.term(
      "contentTypeEditor_cultureVariantLabel"
    )}
								</uui-tag>` : n`<uui-tag look="default">
									<uui-icon name="icon-shared-value"></uui-icon> ${this.localize.term(
      "contentTypeEditor_cultureInvariantLabel"
    )}
								</uui-tag>` : y}
					${this.property.variesBySegment ? n`<uui-tag look="default">
								<uui-icon name="icon-shuffle"></uui-icon> ${this.localize.term("contentTypeEditor_segmentVariantLabel")}
							</uui-tag>` : y}
					${this.property.appearance?.labelOnTop == !0 ? n`<uui-tag look="default">
								<span>${this.localize.term("contentTypeEditor_displaySettingsLabelOnTop")}</span>
							</uui-tag>` : y}
					${this.property.validation.mandatory === !0 ? n`<uui-tag look="default">
								<span>* ${this.localize.term("general_mandatory")}</span>
							</uui-tag>` : y}
					${this.property.visibility?.memberCanView === !0 ? n`<uui-tag look="default">
								<uui-icon name="icon-eye"></uui-icon> ${this.localize.term("contentTypeEditor_showOnMemberProfile")}
							</uui-tag>` : y}
					${this.property.visibility?.memberCanEdit === !0 ? n`<uui-tag look="default">
								<uui-icon name="icon-edit"></uui-icon> ${this.localize.term("contentTypeEditor_memberCanEdit")}
							</uui-tag>` : y}
					${this.property.isSensitive === !0 ? n`<uui-tag look="default">
								<uui-icon name="icon-lock"></uui-icon> ${this.localize.term("contentTypeEditor_isSensitiveData")}
							</uui-tag>` : y}
				</div>` : y;
  }
};
R = /* @__PURE__ */ new WeakMap();
tt = /* @__PURE__ */ new WeakMap();
D = /* @__PURE__ */ new WeakMap();
V = /* @__PURE__ */ new WeakMap();
z = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
ht = function(t) {
  t !== O(this, V) && (A(this, V, t), O(this, R).getAlias() && A(this, z, !1));
};
K = async function() {
  this._propertyStructureHelper && this._property && this.observe(
    await this._propertyStructureHelper.contentTypeOfProperty(this._property.id),
    (t) => {
      this._inherited = this._propertyStructureHelper?.getStructureManager()?.getOwnerContentTypeUnique() !== t?.unique, this._inheritedContentTypeId = t?.unique, this._inheritedContentTypeName = t?.name;
    },
    "observeIsOwnerProperty"
  );
};
ct = function(t) {
  !this._property || !this._propertyStructureHelper || this._propertyStructureHelper.partialUpdateProperty(this._property.id, t);
};
W = function(t, e) {
  if (!this._property || !this._propertyStructureHelper) return;
  const r = {};
  r[t] = e === null ? void 0 : e, this._propertyStructureHelper.partialUpdateProperty(this._property.id, r);
};
yt = function(t) {
  !this.property?.alias && t.target.locked ? A(this, z, !0) : A(this, z, !1), this._aliasLocked = !this._aliasLocked, this._aliasLocked || t.target?.focus();
};
_t = async function(t) {
  if (!t) {
    this._dataTypeName = void 0, A(this, D, void 0);
    return;
  }
  t !== O(this, D) && (A(this, D, t), O(this, tt).requestByUnique(t).then((e) => this._dataTypeName = e?.data?.name));
};
gt = async function(t) {
  t.preventDefault(), t.stopImmediatePropagation(), !(!this._property || !this._property.id) && (await dt(this, {
    headline: `${this.localize.term("actions_delete")} property`,
    content: n`<umb-localize key="contentTypeEditor_confirmDeletePropertyMessage" .args=${[this._property.name ?? this._property.id]}>Are you sure you want to delete the property <strong>${this._property.name ?? this._property.id}</strong></umb-localize></div>`,
    confirmLabel: this.localize.term("actions_delete"),
    color: "danger"
  }), this._propertyStructureHelper?.removeProperty(this._property.id));
};
mt = function(t) {
  _(this, l, W).call(this, "alias", t.target.value.toString());
};
vt = function(t) {
  const e = t.target.value.toString();
  O(this, z) && _(this, l, W).call(this, "alias", It(e ?? "")), _(this, l, W).call(this, "name", e);
};
h.styles = [
  Z,
  G`
			:host(:not([sort-mode-active])) {
				display: grid;
				grid-template-columns: 200px auto;
				column-gap: var(--uui-size-layout-2);
				border-bottom: 1px solid var(--uui-color-divider);
				padding: var(--uui-size-layout-1) 0;
				container-type: inline-size;
			}

			:host > div {
				grid-column: span 2;
			}

			@container (width > 600px) {
				:host(:not([orientation='vertical'])) > div {
					grid-column: span 1;
				}
			}

			:host(:first-of-type) {
				padding-top: 0;
			}
			:host(:last-of-type) {
				border-bottom: none;
			}

			:host([sort-mode-active]) {
				position: relative;
				display: flex;
				padding: 0;
				margin-bottom: var(--uui-size-3);
			}

			:host([sort-mode-active]:last-of-type) {
				margin-bottom: 0;
			}

			:host([sort-mode-active]:not([_inherited])) {
				cursor: grab;
			}

			:host([sort-mode-active]) .sortable {
				flex: 1;
				display: flex;
				align-items: center;
				padding: 0 var(--uui-size-3);
				gap: var(--uui-size-3);
			}
			:host([sort-mode-active][_inherited]) .sortable {
				color: var(--uui-color-disabled-contrast);
			}
			:host([sort-mode-active]:not([_inherited])) .sortable {
				background-color: var(--uui-color-divider);
			}

			:host([sort-mode-active]) uui-input {
				max-width: 75px;
			}

			/* Placeholder style, used when property is being dragged.*/
			:host(.--umb-sorter-placeholder) > * {
				visibility: hidden;
			}

			:host(.--umb-sorter-placeholder)::after {
				content: '';
				inset: 0;
				position: absolute;
				border: 1px dashed var(--uui-color-divider-emphasis);
				border-radius: var(--uui-border-radius);
			}

			p {
				margin-bottom: 0;
			}

			#header {
				position: sticky;
				top: var(--uui-size-space-4);
				height: min-content;
			}

			#editor {
				position: relative;
				--uui-button-background-color: var(--uui-color-background);
				--uui-button-background-color-hover: var(--uui-color-background);
			}
			#editor uui-action-bar {
				--uui-button-background-color: var(--uui-color-surface);
				--uui-button-background-color-hover: var(--uui-color-surface);
			}
			#alias-input,
			#label-input,
			#description-input {
				width: 100%;
			}

			#alias-input {
				border-color: transparent;
				background: var(--uui-color-surface);
			}

			#label-input {
				font-weight: bold; /* TODO: UUI Input does not support bold text yet */
				--uui-input-border-color: transparent;
			}
			#label-input input {
				font-weight: bold;
				--uui-input-border-color: transparent;
			}

			#description-input {
				--uui-textarea-border-color: transparent;
				font-weight: 0.5rem; /* TODO: Cant change font size of UUI textarea yet */
			}

			.types > div uui-icon,
			.inherited uui-icon {
				vertical-align: sub;
				margin-right: var(--uui-size-space-1);
			}

			.inherited {
				position: absolute;
				top: var(--uui-size-space-2);
				right: var(--uui-size-space-2);
			}

			.types {
				position: absolute;
				top: var(--uui-size-space-2);
				left: var(--uui-size-space-2);
				display: flex;
				flex-flow: wrap;
				gap: var(--uui-size-space-2);
			}

			#editor uui-action-bar {
				position: absolute;
				top: var(--uui-size-space-2);
				right: var(--uui-size-space-2);
				opacity: 0;
			}

			#editor:hover uui-action-bar,
			#editor:focus uui-action-bar,
			#editor:focus-within uui-action-bar {
				opacity: 1;
			}

			a {
				color: inherit;
			}

			:host([drag-placeholder]) {
				opacity: 0.5;
			}
			:host([drag-placeholder]) uui-input {
				visibility: hidden;
			}
		`
];
g([
  c({ attribute: !1 })
], h.prototype, "propertyStructureHelper", 1);
g([
  c({ type: Object })
], h.prototype, "property", 1);
g([
  c({ type: Boolean, reflect: !0, attribute: "sort-mode-active" })
], h.prototype, "sortModeActive", 2);
g([
  c({ attribute: !1 })
], h.prototype, "editContentTypePath", 2);
g([
  c({ attribute: !1 })
], h.prototype, "ownerVariesByCulture", 2);
g([
  c({ type: Boolean, reflect: !0, attribute: "_inherited" })
], h.prototype, "_inherited", 2);
g([
  u()
], h.prototype, "_inheritedContentTypeId", 2);
g([
  u()
], h.prototype, "_inheritedContentTypeName", 2);
g([
  c({ type: String, reflect: !1 })
], h.prototype, "editPropertyTypePath", 2);
g([
  u()
], h.prototype, "_dataTypeName", 2);
g([
  u()
], h.prototype, "_aliasLocked", 2);
h = g([
  L("umb-content-type-design-editor-property")
], h);
var Gt = Object.defineProperty, Lt = Object.getOwnPropertyDescriptor, ft = (t) => {
  throw TypeError(t);
}, C = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? Lt(e, r) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (i = (o ? s(e, r, i) : s(i)) || i);
  return o && i && Gt(e, r, i), i;
}, bt = (t, e, r) => e.has(t) || ft("Cannot " + r), d = (t, e, r) => (bt(t, e, "read from private field"), r ? r.call(t) : e.get(t)), B = (t, e, r) => e.has(t) ? ft("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), nt = (t, e, r, o) => (bt(t, e, "write to private field"), e.set(t, r), r), U, I, M, b;
const Ft = {
  getUniqueOfElement: (t) => t.getAttribute("data-umb-property-id"),
  getUniqueOfModel: (t) => t.id,
  identifier: "content-type-property-sorter",
  itemSelector: "umb-content-type-design-editor-property",
  //disabledItemSelector: '[inherited]',
  //TODO: Set the property list (sorter wrapper) to inherited, if its inherited
  // This is because we don't want to move local properties into an inherited group container.
  // Or maybe we do, but we still need to check if the group exists locally, if not, then it needs to be created before we move a property into it.
  // TODO: Fix bug where a local property turn into an inherited when moved to a new group container.
  containerSelector: "#property-list"
};
let m = class extends F {
  constructor() {
    super(), B(this, U, new ut(this, {
      ...Ft,
      onChange: ({ model: t }) => {
        this._properties = t;
      },
      onContainerChange: ({ item: t }) => {
        if (this._containerId === void 0)
          throw new Error("ContainerId is not set");
        d(this, b).partialUpdateProperty(t.id, {
          container: this._containerId ? { id: this._containerId } : null
        });
      },
      onEnd: ({ item: t }) => {
        if (this._containerId === void 0)
          throw new Error("ContainerId is not set.");
        const e = this._properties, r = e.findIndex((s) => s.id === t.id);
        if (r === -1) return;
        let o = -1;
        r > 0 && e.length > 0 && (o = e[r - 1].sortOrder), d(this, b).partialUpdateProperty(t.id, {
          sortOrder: ++o
        });
        let i = r + 1, a;
        for (; (a = e[i]) !== void 0 && a.sortOrder <= o; )
          d(this, b).partialUpdateProperty(a.id, {
            sortOrder: ++o
          }), i++;
      }
    })), B(this, I), B(this, M), B(this, b, new xt(this)), this._properties = [], d(this, U).disable(), this.consumeContext(st, (t) => {
      this.observe(
        t.isSorting,
        (e) => {
          this._sortModeActive = e, e ? d(this, U).enable() : d(this, U).disable();
        },
        "_observeIsSorting"
      );
    }), this.consumeContext(pt, async (t) => {
      d(this, b).setStructureManager(t.structure), this._ownerContentTypeUnique = t.structure.getOwnerContentTypeUnique(), this.createPropertyTypeWorkspaceRoutes(), this.observe(
        t.variesByCulture,
        (e) => {
          this._ownerContentTypeVariesByCulture = e;
        },
        "observeOwnerVariesByCulture"
      );
    }), this.observe(d(this, b).propertyStructure, (t) => {
      this._properties = t, d(this, U).setModel(this._properties);
    });
  }
  get containerId() {
    return this._containerId;
  }
  set containerId(t) {
    t !== this._containerId && (this._containerId = t, this.createPropertyTypeWorkspaceRoutes(), d(this, b).setContainerId(t), d(this, I)?.setUniquePathValue("container-id", t === null ? "root" : t), d(this, M)?.setUniquePathValue("container-id", t === null ? "root" : t));
  }
  createPropertyTypeWorkspaceRoutes() {
    !this._ownerContentTypeUnique || this._containerId === void 0 || (d(this, I)?.destroy(), nt(this, I, new Y(
      this,
      ot,
      "addPropertyModal"
    ).addUniquePaths(["container-id"]).addAdditionalPath("add-property/:sortOrder").onSetup(async (t) => {
      if (!this._ownerContentTypeUnique || this._containerId === void 0) return !1;
      const e = {};
      if (t.sortOrder !== void 0) {
        let r = parseInt(t.sortOrder);
        r === -1 && (r = Math.max(...this._properties.map((o) => o.sortOrder), -1) + 1), e.sortOrder = r;
      }
      return { data: { contentTypeUnique: this._ownerContentTypeUnique, preset: e } };
    }).observeRouteBuilder((t) => {
      this._newPropertyPath = t({ sortOrder: "-1" }) + qt.generateLocal({
        containerUnique: this._containerId
      });
    })), this._containerId !== void 0 && d(this, I)?.setUniquePathValue(
      "container-id",
      this._containerId === null ? "root" : this._containerId
    ), d(this, M)?.destroy(), nt(this, M, new Y(
      this,
      ot,
      "editPropertyModal"
    ).addUniquePaths(["container-id"]).addAdditionalPath("edit-property").onSetup(async () => !this._ownerContentTypeUnique || this._containerId === void 0 ? !1 : { data: { contentTypeUnique: this._ownerContentTypeUnique, preset: void 0 } }).observeRouteBuilder((t) => {
      this._editPropertyTypePath = t(null);
    })), this._containerId !== void 0 && d(this, M)?.setUniquePathValue(
      "container-id",
      this._containerId === null ? "root" : this._containerId
    ));
  }
  render() {
    return this._ownerContentTypeUnique ? n`
					<div id="property-list" ?sort-mode-active=${this._sortModeActive}>
						${Q(
      this._properties,
      (t) => t.id,
      (t) => n`
									<umb-content-type-design-editor-property
										data-umb-property-id=${t.id}
										data-mark="property-type:${t.name}"
										.editContentTypePath=${this.editContentTypePath}
										.editPropertyTypePath=${this._editPropertyTypePath}
										?sort-mode-active=${this._sortModeActive}
										.propertyStructureHelper=${d(this, b)}
										.property=${t}
										.ownerVariesByCulture=${this._ownerContentTypeVariesByCulture}>
									</umb-content-type-design-editor-property>
								`
    )}
					</div>

					${H(
      !this._sortModeActive,
      () => n`
							<uui-button
								id="btn-add"
								href=${Mt(this._newPropertyPath)}
								label=${this.localize.term("contentTypeEditor_addProperty")}
								look="placeholder"></uui-button>
						`
    )}
				` : "";
  }
};
U = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
m.styles = [
  Z,
  G`
			#btn-add {
				width: 100%;
				--uui-button-height: var(--uui-size-14);
			}

			#property-list[sort-mode-active]:not(:has(umb-content-type-design-editor-property)) {
				/* Some height so that the sorter can target the area if the group is empty*/
				min-height: var(--uui-size-layout-1);
			}
		`
];
C([
  c({ type: String, attribute: "container-id", reflect: !1 })
], m.prototype, "containerId", 1);
C([
  c({ attribute: !1 })
], m.prototype, "editContentTypePath", 2);
C([
  u()
], m.prototype, "_properties", 2);
C([
  u()
], m.prototype, "_ownerContentTypeUnique", 2);
C([
  u()
], m.prototype, "_ownerContentTypeVariesByCulture", 2);
C([
  u()
], m.prototype, "_newPropertyPath", 2);
C([
  u()
], m.prototype, "_editPropertyTypePath", 2);
C([
  u()
], m.prototype, "_sortModeActive", 2);
m = C([
  L("umb-content-type-design-editor-properties")
], m);
var Yt = Object.defineProperty, Kt = Object.getOwnPropertyDescriptor, $t = (t) => {
  throw TypeError(t);
}, T = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? Kt(e, r) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (i = (o ? s(e, r, i) : s(i)) || i);
  return o && i && Yt(e, r, i), i;
}, Xt = (t, e, r) => e.has(t) || $t("Cannot " + r), Jt = (t, e, r) => e.has(t) ? $t("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), k = (t, e, r) => (Xt(t, e, "access private method"), r), w, X, Ct, Tt, Pt, wt;
let v = class extends F {
  constructor() {
    super(...arguments), Jt(this, w), this.sortModeActive = !1;
  }
  set group(t) {
    t !== this._group && (this._group = t, this._groupId = t?.id, k(this, w, X).call(this));
  }
  get group() {
    return this._group;
  }
  set groupStructureHelper(t) {
    t !== this._groupStructureHelper && (this._groupStructureHelper = t, k(this, w, X).call(this));
  }
  get groupStructureHelper() {
    return this._groupStructureHelper;
  }
  _singleValueUpdate(t, e) {
    if (!this._groupStructureHelper || !this.group) return;
    const r = {};
    r[t] = e, this._groupStructureHelper.partialUpdateContainer(this.group.id, r);
  }
  render() {
    return this._inherited === void 0 || !this._groupId ? y : n`
			<uui-box>
				${k(this, w, wt).call(this)}
				<umb-content-type-design-editor-properties
					.editContentTypePath=${this.editContentTypePath}
					.containerId=${this._groupId}></umb-content-type-design-editor-properties>
			</uui-box>
		`;
  }
};
w = /* @__PURE__ */ new WeakSet();
X = function() {
  this.groupStructureHelper && this.group && (this.group.name ? this.observe(
    this.groupStructureHelper.containersByNameAndType(this.group.name, "Group"),
    (t) => {
      const e = t.find((i) => this.groupStructureHelper.isOwnerChildContainer(i.id)), r = !!e, o = r && t.length === 1;
      this._hasOwnerContainer = r, this._inherited = !o, this._inheritedFrom = t.filter((i) => i.id !== e?.id).map((i) => this.groupStructureHelper.getContentTypeOfContainer(i.id)).filter((i) => i !== void 0);
    },
    "observeGroupContainers"
  ) : (this._inherited = !1, this._hasOwnerContainer = !0, this.removeUmbControllerByAlias("observeGroupContainers")));
};
Ct = function(t) {
  if (!this.groupStructureHelper || !this._group) return;
  let e = t.target.value;
  const r = this.groupStructureHelper.getStructureManager().makeContainerNameUniqueForOwnerContentType(this._group.id, e, "Group", this._group.parent?.id ?? null);
  r && (e = r), this._singleValueUpdate("name", e), t.target.value = e;
};
Tt = function(t) {
  if (!this.groupStructureHelper || !this._group) return;
  if (t.target.value === "") {
    const r = this.groupStructureHelper.getStructureManager().makeEmptyContainerName(this._group.id, "Group", this._group.parent?.id ?? null);
    this._singleValueUpdate("name", r), t.target.value = r;
  }
};
Pt = async function(t) {
  t.preventDefault(), t.stopImmediatePropagation(), !(!this.groupStructureHelper || !this._group) && (await dt(this, {
    headline: `${this.localize.term("actions_delete")} group`,
    content: n`<umb-localize key="contentTypeEditor_confirmDeleteGroupMessage" .args=${[
      this._group.name ?? this._group.id
    ]}>
					Are you sure you want to delete the group <strong>${this._group.name ?? this._group.id}</strong>
				</umb-localize>
				</div>`,
    confirmLabel: this.localize.term("actions_delete"),
    color: "danger"
  }), this.groupStructureHelper.removeContainer(this._group.id));
};
wt = function() {
  return n`
			<div slot="header" class="drag-handle">
				<div>
					${H(this.sortModeActive && this._hasOwnerContainer, () => n`<uui-icon name="icon-grip"></uui-icon>`)}
					<uui-input
						id="group-name"
						label=${this.localize.term("contentTypeEditor_group")}
						placeholder=${this.localize.term("placeholders_entername")}
						.value=${this._group.name}
						?disabled=${!this._hasOwnerContainer}
						@blur=${k(this, w, Tt)}
						@change=${k(this, w, Ct)}
						${this._group.name === "" ? kt() : y}
						auto-width></uui-input>
				</div>
			</div>
			<div slot="header-actions">
				${H(
    this._hasOwnerContainer === !1 && this._inheritedFrom && this._inheritedFrom.length > 0,
    () => n`
						<uui-tag look="default" class="inherited">
							<uui-icon name="icon-merge"></uui-icon>
							<span
								>${this.localize.term("contentTypeEditor_inheritedFrom")}
								${Q(
      this._inheritedFrom,
      (t) => t.unique,
      (t) => n`
										<a href=${this.editContentTypePath + "edit/" + t.unique}>${t.name}</a>
									`
    )}
							</span>
						</uui-tag>
					`
  )}
				${H(
    !this._inherited && !this.sortModeActive,
    () => n`
						<uui-button compact label=${this.localize.term("actions_delete")} @click=${k(this, w, Pt)}>
							<uui-icon name="delete"></uui-icon>
						</uui-button>
					`
  )}
				${H(
    this.sortModeActive,
    () => n`
						<uui-input
							type="number"
							label=${this.localize.term("sort_sortOrder")}
							.value=${this.group.sortOrder.toString()}
							?disabled=${!this._hasOwnerContainer}
							@change=${(t) => this._singleValueUpdate("sortOrder", parseInt(t.target.value) ?? 0)}></uui-input>
					`
  )}
			</div>
		`;
};
v.styles = [
  Z,
  Dt,
  G`
			:host {
				position: relative;
			}

			:host([drag-placeholder]) {
				opacity: 0.5;
			}

			:host::before,
			:host::after {
				content: '';
				position: absolute;
				pointer-events: none;
				inset: 0;
				border-radius: var(--uui-border-radius);
				opacity: 0;
				transition:
					opacity 60ms linear 1ms,
					border-color,
					10ms;
			}

			:host::after {
				display: block;
				z-index: 1;
				border: 2px solid transparent;
			}

			:host([drag-placeholder])::after {
				opacity: 1;
				border-color: var(--uui-color-interactive-emphasis);
				animation: ${Wt};
			}
			:host([drag-placeholder])::before {
				background-color: var(--uui-color-interactive-emphasis);
				opacity: 0.12;
			}

			:host([drag-placeholder]) uui-box {
				--uui-box-default-padding: 0;
			}
			:host([drag-placeholder]) div[slot='header'],
			:host([drag-placeholder]) div[slot='header-actions'] {
				transition: opacity 60ms linear 1ms;
				opacity: 0;
			}
			:host([drag-placeholder]) umb-content-type-design-editor-properties {
				visibility: hidden;
				display: none;
			}

			uui-box {
				--uui-box-header-padding: 0;
			}

			div[slot='header'] {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: space-between;
				cursor: grab;
				padding: var(--uui-size-space-4) var(--uui-size-space-5);
			}

			div[slot='header'] > div {
				display: flex;
				align-items: center;
				gap: var(--uui-size-3);
				width: 100%;
			}

			#group-name {
				--uui-input-border-color: transparent;
				min-width: 200px;
			}

			uui-input[type='number'] {
				max-width: 75px;
			}

			.inherited uui-icon {
				vertical-align: sub;
			}

			div[slot='header-actions'] {
				padding: var(--uui-size-space-4) var(--uui-size-space-5);
			}
		`
];
T([
  c({ attribute: !1 })
], v.prototype, "group", 1);
T([
  c({ attribute: !1 })
], v.prototype, "groupStructureHelper", 1);
T([
  c({ type: Boolean, attribute: "sort-mode-active", reflect: !0 })
], v.prototype, "sortModeActive", 2);
T([
  c({ attribute: !1 })
], v.prototype, "editContentTypePath", 2);
T([
  u()
], v.prototype, "_groupId", 2);
T([
  u()
], v.prototype, "_hasOwnerContainer", 2);
T([
  u()
], v.prototype, "_inherited", 2);
T([
  u()
], v.prototype, "_inheritedFrom", 2);
v = T([
  L("umb-content-type-design-editor-group")
], v);
var Qt = Object.defineProperty, Zt = Object.getOwnPropertyDescriptor, Ot = (t) => {
  throw TypeError(t);
}, x = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? Zt(e, r) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (i = (o ? s(e, r, i) : s(i)) || i);
  return o && i && Qt(e, r, i), i;
}, et = (t, e, r) => e.has(t) || Ot("Cannot " + r), p = (t, e, r) => (et(t, e, "read from private field"), r ? r.call(t) : e.get(t)), E = (t, e, r) => e.has(t) ? Ot("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), at = (t, e, r, o) => (et(t, e, "write to private field"), e.set(t, r), r), jt = (t, e, r) => (et(t, e, "access private method"), r), q, N, P, f, rt, J, St;
const te = {
  getUniqueOfElement: (t) => t.group?.id,
  getUniqueOfModel: (t) => t.id,
  // TODO: Make specific to the current owner document. [NL]
  identifier: "content-type-container-sorter",
  itemSelector: "umb-content-type-design-editor-group",
  handleSelector: ".drag-handle",
  containerSelector: ".container-list"
};
let $ = class extends F {
  constructor() {
    super(), E(this, J), E(this, q, new ut(this, {
      ...te,
      onChange: ({ model: t }) => {
        this._groups = t;
      },
      onEnd: ({ item: t }) => {
        const e = this._groups, r = e.findIndex((s) => s.id === t.id);
        if (r === -1) return;
        let o = -1;
        r > 0 && e.length > 0 && (o = e[r - 1].sortOrder), p(this, f).partialUpdateContainer(t.id, {
          sortOrder: ++o
        });
        let i = r + 1, a;
        for (; (a = e[i]) !== void 0 && a.sortOrder <= o; )
          p(this, f).partialUpdateContainer(a.id, {
            sortOrder: ++o
          }), i++;
      }
    })), E(this, N), E(this, P), this._groups = [], this._hasProperties = !1, E(this, f, new Et(this)), E(this, rt, () => {
      const t = this._groups.length, e = t === 0 ? 0 : this._groups[t - 1].sortOrder + 1;
      p(this, f).addContainer(p(this, P), e);
    }), this.consumeContext(pt, (t) => {
      p(this, f).setStructureManager(t.structure);
      const e = t.getEntityType();
      p(this, N)?.destroy(), at(this, N, new Y(this, At).addAdditionalPath(e).onSetup(async () => ({ data: { entityType: e, preset: {} } })).observeRouteBuilder((r) => {
        this._editContentTypePath = r({});
      }));
    }), this.consumeContext(st, (t) => {
      this.observe(
        t.isSorting,
        (e) => {
          this._sortModeActive = e, e ? p(this, q).enable() : p(this, q).disable();
        },
        "_observeIsSorting"
      );
    }), this.observe(
      p(this, f).mergedContainers,
      (t) => {
        this._groups = t, p(this, q).setModel(this._groups);
      },
      null
    ), this.observe(
      p(this, f).hasProperties,
      (t) => {
        this._hasProperties = t, this.requestUpdate("_hasProperties");
      },
      null
    );
  }
  get containerId() {
    return p(this, P);
  }
  set containerId(t) {
    const e = p(this, P);
    t !== p(this, P) && (at(this, P, t), p(this, f).setContainerId(t), this.requestUpdate("containerId", e));
  }
  render() {
    return n`
			${p(this, P) ? n`
							<uui-box class="${this._hasProperties ? "" : "opaque"}">
								<umb-content-type-design-editor-properties
									.containerId=${this.containerId}
									.editContentTypePath=${this._editContentTypePath}></umb-content-type-design-editor-properties>
							</uui-box>
						` : y}

				<div class="container-list" ?sort-mode-active=${this._sortModeActive}>
					${Q(
      this._groups,
      (t) => t.id,
      (t) => n`
							<umb-content-type-design-editor-group
								?sort-mode-active=${this._sortModeActive}
								.editContentTypePath=${this._editContentTypePath}
								.group=${t}
								.groupStructureHelper=${p(this, f)}
								data-umb-group-id=${t.id}
								data-mark="group:${t.name}">
							</umb-content-type-design-editor-group>
						`
    )}
				</div>
				${jt(this, J, St).call(this)}
			</div>
		`;
  }
};
q = /* @__PURE__ */ new WeakMap();
N = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
rt = /* @__PURE__ */ new WeakMap();
J = /* @__PURE__ */ new WeakSet();
St = function() {
  if (!this._sortModeActive)
    return n`
			<uui-button
				id="btn-add"
				label=${this.localize.term("contentTypeEditor_addGroup")}
				look="placeholder"
				@click=${p(this, rt)}></uui-button>
		`;
};
$.styles = [
  G`
			#btn-add {
				width: 100%;
				--uui-button-height: var(--uui-size-24);
			}

			uui-box,
			umb-content-type-design-editor-group {
				margin-bottom: var(--uui-size-layout-1);
			}
			uui-box.opaque {
				background-color: transparent;
				border-color: transparent;
			}

			.container-list {
				display: grid;
				gap: 10px;
			}

			#convert-to-tab {
				margin-bottom: var(--uui-size-layout-1);
				display: flex;
			}
		`
];
x([
  c({ type: String })
], $.prototype, "containerId", 1);
x([
  u()
], $.prototype, "_groups", 2);
x([
  u()
], $.prototype, "_hasProperties", 2);
x([
  u()
], $.prototype, "_sortModeActive", 2);
x([
  u()
], $.prototype, "_editContentTypePath", 2);
$ = x([
  L("umb-content-type-design-editor-tab")
], $);
const fe = $;
export {
  $ as UmbContentTypeDesignEditorTabElement,
  fe as default
};
//# sourceMappingURL=content-type-design-editor-tab.element-CPH1yuL6.js.map
