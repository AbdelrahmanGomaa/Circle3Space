import { UmbTemplateQueryRepository as ae } from "./template-query.repository-BUJO3F99.js";
import { UserOrderModel as x, TemplateQueryPropertyTypeModel as v, OperatorModel as o } from "@umbraco-cms/backoffice/external/backend-api";
import { css as K, property as N, state as g, customElement as U, html as s, ifDefined as O, query as oe, queryAll as se } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as ne, UMB_MODAL_MANAGER_CONTEXT as ue } from "@umbraco-cms/backoffice/modal";
import { UmbDocumentItemRepository as ce, UMB_DOCUMENT_PICKER_MODAL as pe } from "@umbraco-cms/backoffice/document";
import { UmbLitElement as me } from "@umbraco-cms/backoffice/lit-element";
function de(t, e) {
  switch (e) {
    case v.STRING:
      return _e(t);
    case v.INTEGER:
      return ye(t);
    case v.DATE_TIME:
      return fe(t);
    default:
      return t;
  }
}
function I(t) {
  if (t)
    return t.map((e) => {
      switch (e.alias) {
        case x.NAME:
          return { ...e, localizeKey: "template_name" };
        case x.ID:
          return { ...e, localizeKey: "template_id" };
        case x.CREATE_DATE:
          return { ...e, localizeKey: "template_createdDate" };
        case x.UPDATE_DATE:
          return { ...e, localizeKey: "template_lastUpdatedDate" };
        default:
          return e;
      }
    });
}
function he(t) {
  if (t?.direction)
    switch (t.direction) {
      case "ascending":
        return { ...t, localizeKey: "template_ascending" };
      case "descending":
        return { ...t, localizeKey: "template_descending" };
      default:
        return t;
    }
}
function _e(t) {
  return t.map((e) => {
    switch (e.operator) {
      case o.EQUALS:
        return { ...e, localizeKey: "template_is" };
      case o.NOT_EQUALS:
        return { ...e, localizeKey: "template_isNot" };
      case o.CONTAINS:
        return { ...e, localizeKey: "template_contains" };
      case o.NOT_CONTAINS:
        return { ...e, localizeKey: "template_doesNotContain" };
      default:
        return e;
    }
  });
}
function ye(t) {
  return t.map((e) => {
    switch (e.operator) {
      case o.EQUALS:
        return { ...e, localizeKey: "template_equals" };
      case o.NOT_EQUALS:
        return { ...e, localizeKey: "template_doesNotEqual" };
      case o.GREATER_THAN:
        return { ...e, localizeKey: "template_greaterThan" };
      case o.GREATER_THAN_EQUAL_TO:
        return { ...e, localizeKey: "template_greaterThanEqual" };
      case o.LESS_THAN:
        return { ...e, localizeKey: "template_lessThan" };
      case o.LESS_THAN_EQUAL_TO:
        return { ...e, localizeKey: "template_lessThanEqual" };
      default:
        return e;
    }
  });
}
function fe(t) {
  return t.map((e) => {
    switch (e.operator) {
      case o.GREATER_THAN:
        return { ...e, localizeKey: "template_before" };
      case o.GREATER_THAN_EQUAL_TO:
        return { ...e, localizeKey: "template_beforeIncDate" };
      case o.LESS_THAN:
        return { ...e, localizeKey: "template_after" };
      case o.LESS_THAN_EQUAL_TO:
        return { ...e, localizeKey: "template_afterIncDate" };
      default:
        return e;
    }
  });
}
var be = Object.defineProperty, ve = Object.getOwnPropertyDescriptor, L = (t) => {
  throw TypeError(t);
}, $ = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? ve(e, i) : e, m = t.length - 1, d; m >= 0; m--)
    (d = t[m]) && (a = (n ? d(e, i, a) : d(a)) || a);
  return n && a && be(e, i, a), a;
}, B = (t, e, i) => e.has(t) || L("Cannot " + i), y = (t, e, i) => (B(t, e, "read from private field"), i ? i.call(t) : e.get(t)), z = (t, e, i) => e.has(t) ? L("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), q = (t, e, i) => (B(t, e, "access private method"), i), k, f, D, b, W, F, G, H;
let _ = class extends me {
  constructor() {
    super(...arguments), z(this, b), this.filter = {}, this.unremovable = !1, this.currentPropertyType = null, z(this, k, (t) => {
      const e = t.target, i = this.currentPropertyType;
      this.filter = { ...this.filter, propertyAlias: e.value }, this.currentPropertyType = this.settings?.properties?.find((n) => n.alias === this.filter.propertyAlias)?.type ?? null, i !== this.currentPropertyType && q(this, b, W).call(this);
    }), z(this, f, (t) => {
      const e = t.target;
      this.filter = { ...this.filter, constraintValue: e.value };
    }), z(this, D, (t) => {
      const e = t.target;
      this.filter = { ...this.filter, operator: e.value };
    });
  }
  get isFilterValid() {
    return Object.keys(this.filter).length === 3 && Object.values(this.filter).every((t) => !!t);
  }
  willUpdate(t) {
    t.has("filter") && this.isFilterValid && this.dispatchEvent(new Event("update-query"));
  }
  _renderOperatorsDropdown() {
    if (!this.settings?.operators) return;
    const t = de(this.settings?.operators, this.currentPropertyType);
    return s`<umb-dropdown look="outline" id="operator-dropdown" label="Choose operator">
			<span slot="label">${this.filter?.operator ?? ""}</span>
			<uui-combobox-list @change=${y(this, D)} class="options-list">
				${t?.filter(
      (e) => this.currentPropertyType ? e.applicableTypes?.includes(this.currentPropertyType) : !0
    ).map(
      (e) => s`<uui-combobox-list-option .value=${e.operator ?? ""}>
								<umb-localize .key=${e.localizeKey}> ${e.operator} </umb-localize>
							</uui-combobox-list-option>`
    )}
			</uui-combobox-list>
		</umb-dropdown>`;
  }
  _renderConstraintValueInput() {
    switch (this.currentPropertyType) {
      case v.INTEGER:
        return s`<uui-input type="number" @change=${y(this, f)} label="constrain value"></uui-input>`;
      case v.STRING:
        return s`<uui-input type="text" @change=${y(this, f)} label="constrain value"></uui-input>`;
      case v.DATE_TIME:
        return s`<uui-input type="date" @change=${y(this, f)} label="constrain value"></uui-input>`;
      default:
        return s`<uui-input type="text" @change=${y(this, f)} label="constrain value"></uui-input>`;
    }
  }
  render() {
    const t = I(this.settings?.properties);
    return s`
			<span>${this.unremovable ? this.localize.term("template_where") : this.localize.term("template_and")}</span>
			<umb-dropdown look="outline" id="property-alias-dropdown" label="Property alias">
				<span slot="label">${this.filter?.propertyAlias ?? ""}</span>
				<uui-combobox-list @change=${y(this, k)} class="options-list">
					${t?.map(
      (e) => s`<uui-combobox-list-option tabindex="0" .value=${e.alias ?? ""}>
								<umb-localize key=${O(e.localizeKey)}> ${e.alias}</umb-localize>
							</uui-combobox-list-option>`
    )}
				</uui-combobox-list></umb-dropdown
			>
			${this.filter?.propertyAlias ? this._renderOperatorsDropdown() : ""}
			${this.filter?.operator ? this._renderConstraintValueInput() : ""}
			<uui-button-group>
				<uui-button
					title=${this.localize.term("general_add")}
					label=${this.localize.term("general_add")}
					compact
					@click=${q(this, b, H)}>
					<uui-icon name="icon-add"></uui-icon>
				</uui-button>
				<uui-button
					title=${this.localize.term("general_remove")}
					label=${this.localize.term("general_remove")}
					compact
					@click=${q(this, b, G)}>
					<uui-icon name="delete"></uui-icon>
				</uui-button>
			</uui-button-group>
		`;
  }
};
k = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
D = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakSet();
W = function() {
  this.filter = { ...this.filter, operator: void 0, constraintValue: void 0 };
};
F = function() {
  this.filter = {}, this.dispatchEvent(new Event("remove-filter"));
};
G = function() {
  this.unremovable ? q(this, b, F).call(this) : this.dispatchEvent(new Event("remove-filter"));
};
H = function() {
  this.dispatchEvent(new Event("add-filter"));
};
_.styles = [
  K`
			:host {
				display: flex;
				gap: 10px;
				border-bottom: 1px solid #f3f3f5;
				align-items: center;
				padding: 20px 0;
			}

			uui-combobox-list-option {
				padding: 8px 20px;
				margin: 0;
			}
		`
];
$([
  N({ type: Object, attribute: !1 })
], _.prototype, "filter", 2);
$([
  N({ type: Boolean })
], _.prototype, "unremovable", 2);
$([
  N({ type: Object, attribute: !1 })
], _.prototype, "settings", 2);
$([
  g()
], _.prototype, "currentPropertyType", 2);
_ = $([
  U("umb-template-query-builder-filter")
], _);
var ge = Object.defineProperty, Ee = Object.getOwnPropertyDescriptor, V = (t) => {
  throw TypeError(t);
}, p = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Ee(e, i) : e, m = t.length - 1, d; m >= 0; m--)
    (d = t[m]) && (a = (n ? d(e, i, a) : d(a)) || a);
  return n && a && ge(e, i, a), a;
}, M = (t, e, i) => e.has(t) || V("Cannot " + i), u = (t, e, i) => (M(t, e, "read from private field"), i ? i.call(t) : e.get(t)), h = (t, e, i) => e.has(t) ? V("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Q = (t, e, i, n) => (M(t, e, "write to private field"), e.set(t, i), i), l = (t, e, i) => (M(t, e, "access private method"), i), A, E, r, j, X, J, w, Y, S, Z, ee, te, ie, re, le, P, R, T, C;
let c = class extends ne {
  constructor() {
    super(), h(this, r), this._queryRequest = {}, this._selectedRootContentName = this.localize.term("template_websiteRoot"), this._defaultSortDirection = "ascending", h(this, A), h(this, E), h(this, S, async () => {
      const { data: t } = await u(this, E).executeTemplateQuery(this._queryRequest);
      t && (this._templateQuery = { ...t }, this.value = { value: this._templateQuery?.queryExpression ?? "" });
    }), h(this, R, () => {
      this._filterContainer?.appendChild(l(this, r, te).call(this));
    }), h(this, T, () => {
      const t = Array.from(this._filterElements)?.filter((e) => e.isFilterValid);
      l(this, r, w).call(this, { filters: t?.map((e) => e.filter) ?? [] });
    }), h(this, C, (t) => {
      if (this._filterElements.length > 1) {
        const e = t.target;
        this._filterContainer?.removeChild(e), this._filterElements.length === 1 && (this._filterElements[0].unremovable = !0);
      }
      u(this, T).call(this);
    }), Q(this, E, new ae(this)), Q(this, A, new ce(this)), l(this, r, j).call(this);
  }
  render() {
    const t = I(this._queryBuilderSettings?.properties), e = he(this._queryRequest.sort);
    return s`
			<umb-body-layout headline=${this.localize.term("template_queryBuilder")}>
				<div id="main">
					<uui-box>
						<div class="row">
							<umb-localize key="template_iWant">I want</umb-localize>
							<umb-dropdown look="outline" id="content-type-dropdown" label="Choose content type">
								<span slot="label">
									${this._queryRequest?.documentTypeAlias ?? this.localize.term("template_allContent")}
								</span>
								<uui-combobox-list @change=${l(this, r, ie)} class="options-list">
									<uui-combobox-list-option value="">all content</uui-combobox-list-option>
									${this._queryBuilderSettings?.documentTypeAliases?.map(
      (i) => s`<uui-combobox-list-option .value=${i}>
												<umb-localize key="template_contentOfType" .args=${[i]}>
													content of type "${i}"
												</umb-localize>
											</uui-combobox-list-option>`
    )}
								</uui-combobox-list></umb-dropdown
							>
							<umb-localize key="template_from">from</umb-localize>
							<uui-button look="outline" @click=${l(this, r, Z)} label="Choose root document">
								${this._selectedRootContentName}
							</uui-button>
						</div>
						<div id="filter-container">
							<umb-template-query-builder-filter
								unremovable
								class="row"
								.settings=${this._queryBuilderSettings}
								@add-filter=${u(this, R)}
								@update-query=${u(this, T)}
								@remove-filter=${u(this, C)}></umb-template-query-builder-filter>
						</div>
						<div class="row">
							<umb-localize key="template_orderBy">order by</umb-localize>
							<umb-dropdown look="outline" id="sort-dropdown" label="Property alias">
								<span slot="label">${this._queryRequest.sort?.propertyAlias ?? ""}</span>
								<uui-combobox-list @change=${l(this, r, re)} class="options-list">
									${t?.map(
      (i) => s`<uui-combobox-list-option .value=${i.alias ?? ""}>
												<umb-localize key=${O(i.localizeKey)}>${i.alias}</umb-localize>
											</uui-combobox-list-option>`
    )}
								</uui-combobox-list>
							</umb-dropdown>

							${e?.propertyAlias ? s`<uui-button look="outline" @click=${l(this, r, le)}>
										<umb-localize key=${O(e.localizeKey)}>
											${e.direction ?? this._defaultSortDirection}
										</umb-localize>
									</uui-button>` : ""}
						</div>
						<div class="row query-results">
							<span id="results-count">
								<umb-localize key="template_publishedItemsReturned" .args=${[this._templateQuery?.resultCount ?? 0, this._templateQuery?.executionTime ?? 0]}>items returned, in</umb-localize>
							</span>
							${this._templateQuery?.sampleResults.map(
      (i) => s`<span><umb-icon name=${i.icon}></umb-icon>${i.name}</span>`
    ) ?? ""}
						</div>
						<umb-code-block style="max-height:500px;" language="C#" copy
							>${this._templateQuery?.queryExpression ?? ""}</umb-code-block
						>
					</uui-box>
				</div>

				<div slot="actions">
					<uui-button
						@click=${l(this, r, X)}
						look="secondary"
						label=${this.localize.term("buttons_confirmActionCancel")}></uui-button>
					<uui-button
						@click=${l(this, r, J)}
						look="primary"
						color="positive"
						label=${this.localize.term("buttons_submitChanges")}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
A = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
j = function() {
  l(this, r, Y).call(this), u(this, S).call(this);
};
X = function() {
  this.modalContext?.reject();
};
J = function() {
  this.modalContext?.submit();
};
w = function(t) {
  this._queryRequest = { ...this._queryRequest, ...t }, u(this, S).call(this);
};
Y = async function() {
  const { data: t } = await u(this, E).requestTemplateQuerySettings();
  t && (this._queryBuilderSettings = t);
};
S = /* @__PURE__ */ new WeakMap();
Z = async function() {
  (await this.getContext(ue)).open(this, pe, { data: { hideTreeRoot: !0 } }).onSubmit().then((e) => {
    const i = e.selection[0];
    if (l(this, r, w).call(this, { rootDocument: i ? { unique: i } : null }), e.selection.length > 0 && e.selection[0] === null) {
      this._selectedRootContentName = "all pages";
      return;
    }
    if (e.selection.length > 0) {
      l(this, r, ee).call(this, e.selection);
      return;
    }
  });
};
ee = async function(t) {
  const { data: e } = await u(this, A).requestItems(t);
  e && (this._selectedRootContentName = e[0].variants[0].name);
};
te = function() {
  const t = document.createElement("umb-template-query-builder-filter");
  return t.settings = this._queryBuilderSettings, t.classList.add("row"), t.addEventListener("add-filter", u(this, R)), t.addEventListener("remove-filter", u(this, C)), t.addEventListener("update-query", u(this, T)), t;
};
ie = function(t) {
  const e = t.target;
  l(this, r, w).call(this, { documentTypeAlias: e.value });
};
re = function(t) {
  const e = t.target;
  l(this, r, P).call(this, e.value, this._queryRequest.sort?.direction ?? this._defaultSortDirection);
};
le = function() {
  const t = this._queryRequest.sort?.direction ? this._queryRequest.sort.direction === "ascending" ? "descending" : "ascending" : this._defaultSortDirection;
  l(this, r, P).call(this, this._queryRequest.sort?.propertyAlias ?? "", t);
};
P = function(t, e) {
  l(this, r, w).call(this, {
    sort: {
      propertyAlias: t,
      direction: e
    }
  });
};
R = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
c.styles = [
  K`
			:host {
				display: block;
				color: var(--uui-color-text);
				--umb-header-layout-height: 70px;
			}

			#main {
				box-sizing: border-box;
				height: calc(
					100dvh - var(--umb-header-layout-height) - var(--umb-footer-layout-height) - 2 * var(--uui-size-layout-1)
				);
			}

			uui-combobox-list-option {
				padding: 8px 20px;
				margin: 0;
			}

			.row {
				display: flex;
				gap: 10px;
				border-bottom: 1px solid #f3f3f5;
				align-items: center;
				padding: 20px 0;
			}

			#filter-container {
				flex-direction: column;
				justify-content: flex-start;
			}

			#results-count {
				font-weight: bold;
			}
			.query-results {
				flex-direction: column;
				align-items: flex-start;
				gap: 0;
			}
			.query-results span {
				display: flex;
				align-items: center;
				gap: var(--uui-size-1);
			}
		`
];
p([
  oe("#filter-container")
], c.prototype, "_filterContainer", 2);
p([
  se("umb-template-query-builder-filter")
], c.prototype, "_filterElements", 2);
p([
  g()
], c.prototype, "_templateQuery", 2);
p([
  g()
], c.prototype, "_queryRequest", 2);
p([
  g()
], c.prototype, "_queryBuilderSettings", 2);
p([
  g()
], c.prototype, "_selectedRootContentName", 2);
p([
  g()
], c.prototype, "_defaultSortDirection", 2);
c = p([
  U("umb-template-query-builder-modal")
], c);
export {
  c as default
};
//# sourceMappingURL=query-builder-modal.element-fHkPrCvc.js.map
