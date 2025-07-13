import { html as o, nothing as S, repeat as W, css as I, state as w, customElement as B } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as L } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as N } from "@umbraco-cms/backoffice/modal";
import { UmbSorterController as V } from "@umbraco-cms/backoffice/sorter";
import { createExtensionApiByAlias as O } from "@umbraco-cms/backoffice/extension-registry";
import { UmbPaginationManager as G } from "@umbraco-cms/backoffice/utils";
import { observeMultiple as H } from "@umbraco-cms/backoffice/observable-api";
var F = Object.defineProperty, J = Object.getOwnPropertyDescriptor, D = (e) => {
  throw TypeError(e);
}, b = (e, t, i, s) => {
  for (var u = s > 1 ? void 0 : s ? J(t, i) : t, v = e.length - 1, y; v >= 0; v--)
    (y = e[v]) && (u = (s ? y(t, i, u) : y(u)) || u);
  return s && u && F(t, i, u), u;
}, q = (e, t, i) => t.has(e) || D("Cannot " + i), r = (e, t, i) => (q(e, t, "read from private field"), i ? i.call(e) : t.get(e)), h = (e, t, i) => t.has(e) ? D("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), m = (e, t, i, s) => (q(e, t, "write to private field"), t.set(e, i), i), n = (e, t, i) => (q(e, t, "access private method"), i), a, C, l, p, f, _, c, M, $, U, z, E, k, x, g, A, P, T, R;
const Q = "umb-sort-children-of-modal";
let d = class extends N {
  constructor() {
    super(), h(this, a), this._children = [], this._currentPage = 1, this._totalPages = 1, this._isSorting = !1, h(this, l, new G()), h(this, p, /* @__PURE__ */ new Set()), h(this, f), h(this, _, ""), h(this, c, ""), h(this, M, {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit"
    }), r(this, l).setPageSize(50), this.observe(
      H([r(this, l).currentPage, r(this, l).totalPages]),
      ([e, t]) => {
        this._currentPage = e, this._totalPages = t;
      },
      "umbPaginationObserver"
    );
  }
  async firstUpdated(e) {
    super.firstUpdated(e), n(this, a, $).call(this);
  }
  render() {
    return o`
			<umb-body-layout headline=${"Sort Children"}>
				<uui-box>${n(this, a, A).call(this)}</uui-box>
				<uui-button slot="actions" label="Cancel" @click="${this._rejectModal}"></uui-button>
				<uui-button slot="actions" color="positive" look="primary" label="Sort" @click=${n(this, a, E)}></uui-button>
			</umb-body-layout>
		`;
  }
};
a = /* @__PURE__ */ new WeakSet();
C = function() {
  return this._currentPage < this._totalPages;
};
l = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakMap();
$ = async function() {
  if (this.data?.unique === void 0) throw new Error("unique is required");
  if (!this.data?.treeRepositoryAlias) throw new Error("treeRepositoryAlias is required");
  const e = await O(
    this,
    this.data.treeRepositoryAlias
  ), { data: t } = await e.requestTreeItemsOf({
    parent: {
      unique: this.data.unique,
      entityType: this.data.entityType
    },
    skip: r(this, l).getSkip(),
    take: r(this, l).getPageSize()
  });
  t && (this._children = [...this._children, ...t.items], r(this, l).setTotalItems(t.total), t.total > 0 && (n(this, a, U).call(this), r(this, f)?.setModel(this._children)));
};
U = function() {
  r(this, f) || m(this, f, new V(this, {
    getUniqueOfElement: (e) => e.dataset.unique,
    getUniqueOfModel: (e) => e.unique,
    identifier: "Umb.SorterIdentifier.SortChildrenOfModal",
    itemSelector: "uui-table-row",
    containerSelector: "uui-table",
    onChange: ({ model: e }) => {
      const t = this._children;
      this._children = e, this.requestUpdate("_children", t);
    },
    onEnd: ({ item: e }) => {
      r(this, p).add(e.unique);
    }
  }));
};
z = function(e) {
  e.stopPropagation(), !(this._currentPage >= this._totalPages) && (r(this, l).setCurrentPageNumber(this._currentPage + 1), n(this, a, $).call(this));
};
E = async function(e) {
  if (e?.stopPropagation(), !this.data?.sortChildrenOfRepositoryAlias) throw new Error("sortChildrenOfRepositoryAlias is required");
  const t = await O(
    this,
    this.data.sortChildrenOfRepositoryAlias
  ), { error: i } = await t.sortChildrenOf({
    unique: this.data.unique,
    sorting: n(this, a, x).call(this)
  });
  i || this._submitModal();
};
k = function(e) {
  if (this._isSorting)
    return;
  this._isSorting = !0;
  const t = this._children;
  r(this, _) !== e ? m(this, c, "asc") : m(this, c, r(this, c) === "asc" ? "desc" : "asc"), m(this, _, e), this._children = [...this._children].sort((i, s) => {
    switch (e) {
      case "name":
        return i.name.localeCompare(s.name);
      case "createDate":
        return Date.parse(n(this, a, g).call(this, i)) - Date.parse(n(this, a, g).call(this, s));
      default:
        return 0;
    }
  }), r(this, c) === "desc" && this._children.reverse(), r(this, p).clear(), this._children.map((i) => i.unique).forEach((i) => r(this, p).add(i)), this.requestUpdate("_children", t), this._isSorting = !1;
};
x = function() {
  const e = [];
  for (const t of r(this, p)) {
    const i = this._children.findIndex((s) => s.unique === t);
    if (i !== -1) {
      const s = {
        unique: t,
        sortOrder: i
      };
      e.push(s);
    }
  }
  return e;
};
g = function(e) {
  let t = "";
  const i = e;
  if (i)
    t = i.createDate;
  else {
    const s = e;
    s && (t = s.createDate);
  }
  return t;
};
A = function() {
  return this._children.length === 0 ? o`<uui-label>There are no children</uui-label>` : o`
			<uui-table>
				<uui-table-head>
					<uui-table-head-cell></uui-table-head-cell>
					${n(this, a, P).call(this, "name", "general_name")}
					${n(this, a, P).call(this, "createDate", "content_createDate")}
				</uui-table-head>
				${this._isSorting ? o`
							<uui-table-row>
								<uui-table-cell></uui-table-cell>
								<uui-table-cell><uui-loader-circle></uui-loader-circle></uui-table-cell>
								<uui-table-cell></uui-table-cell>
							</uui-table-row>
						` : S}
				${W(
    this._children,
    (e) => e.unique,
    (e) => n(this, a, T).call(this, e)
  )}
			</uui-table>

			${n(this, a, C).call(this) ? o`
						<uui-button id="loadMoreButton" look="secondary" @click=${n(this, a, z)}
							>Load More (${this._currentPage}/${this._totalPages})</uui-button
						>
					` : S}
		`;
};
P = function(e, t) {
  return o` <uui-table-head-cell>
			${n(this, a, C).call(this) ? o` <span>${this.localize.term(t)}</span> ` : o`
						<button @click=${() => n(this, a, k).call(this, e)}>
							${this.localize.term(t)}
							<uui-symbol-sort
								?active=${r(this, _) === e}
								?descending=${r(this, c) === "desc"}></uui-symbol-sort>
						</button>
					`}
		</uui-table-head-cell>`;
};
T = function(e) {
  return o` <uui-table-row id="content-node" data-unique=${e.unique} class="${this._isSorting ? "hidden" : ""}">
			<uui-table-cell class="handle"><umb-icon name="icon-grip"></umb-icon></uui-table-cell>
			<uui-table-cell>${e.name}</uui-table-cell>
			<uui-table-cell>${n(this, a, R).call(this, e)}</uui-table-cell>
		</uui-table-row>`;
};
R = function(e) {
  const t = n(this, a, g).call(this, e);
  return t.length === 0 ? S : o`<umb-localize-date date="${t}" .options=${r(this, M)}></umb-localize-date>`;
};
d.styles = [
  L,
  I`
			#loadMoreButton {
				width: 100%;
			}

			uui-table-cell {
				padding: var(--uui-size-space-2) var(--uui-size-space-5);
			}

			uui-table-head-cell {
				padding: 0 var(--uui-size-space-5);
			}

			uui-table-head-cell button {
				background-color: transparent;
				color: inherit;
				border: none;
				cursor: pointer;
				font-weight: inherit;
				font-size: inherit;
				display: inline-flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				padding: var(--uui-size-5) var(--uui-size-1);
			}

			uui-table-row.hidden {
				visibility: hidden;
			}

			uui-table-row[id='content-node']:hover {
				cursor: grab;
			}

			uui-table-row[id='content-node']:active {
				cursor: grabbing;
			}

			uui-box {
				--uui-box-default-padding: 0;
			}
		`
];
b([
  w()
], d.prototype, "_children", 2);
b([
  w()
], d.prototype, "_currentPage", 2);
b([
  w()
], d.prototype, "_totalPages", 2);
b([
  w()
], d.prototype, "_isSorting", 2);
d = b([
  B(Q)
], d);
export {
  d as UmbSortChildrenOfModalElement,
  d as element
};
//# sourceMappingURL=sort-children-of-modal.element-OtN6X0_s.js.map
