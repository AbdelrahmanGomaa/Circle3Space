import { j as A, g as D } from "./constants-BCxOO27P.js";
import { UmbTextStyles as $ } from "@umbraco-cms/backoffice/style";
import { css as W, property as N, customElement as U, LitElement as z, html as S, state as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as M } from "@umbraco-cms/backoffice/lit-element";
import { UmbDocumentItemRepository as L } from "@umbraco-cms/backoffice/document";
import { UmbMediaItemRepository as x } from "@umbraco-cms/backoffice/media";
import { umbExtensionsRegistry as G } from "@umbraco-cms/backoffice/extension-registry";
var j = Object.defineProperty, B = Object.getOwnPropertyDescriptor, P = (t, e, s, o) => {
  for (var a = o > 1 ? void 0 : o ? B(e, s) : e, n = t.length - 1, i; n >= 0; n--)
    (i = t[n]) && (a = (o ? i(e, s, a) : i(a)) || a);
  return o && a && j(e, s, a), a;
};
let h = class extends z {
  render() {
    const t = A + "/edit/" + this.item.id;
    return S`<a href=${t}>${this.value.name}</a>`;
  }
};
h.styles = [
  $,
  W`
			a {
				font-weight: bold;
			}
		`
];
P([
  N({ type: Object, attribute: !1 })
], h.prototype, "item", 2);
P([
  N({ attribute: !1 })
], h.prototype, "value", 2);
h = P([
  U("umb-user-group-table-name-column-layout")
], h);
var V = Object.defineProperty, H = Object.getOwnPropertyDescriptor, w = (t, e, s, o) => {
  for (var a = o > 1 ? void 0 : o ? H(e, s) : e, n = t.length - 1, i; n >= 0; n--)
    (i = t[n]) && (a = (o ? i(e, s, a) : i(a)) || a);
  return o && a && V(e, s, a), a;
};
let _ = class extends M {
  constructor() {
    super(...arguments), this._sectionsNames = [];
  }
  updated(t) {
    t.has("value") && this.observeSectionNames();
  }
  observeSectionNames() {
    this.observe(
      G.byType("section"),
      (t) => {
        this._sectionsNames = t.filter((e) => this.value.includes(e.alias)).map((e) => e.meta.label ? this.localize.string(e.meta.label) : e.name);
      },
      "umbUserGroupTableSectionsColumnLayoutObserver"
    );
  }
  render() {
    return S`${this._sectionsNames.join(", ")}`;
  }
};
w([
  N({ type: Object, attribute: !1 })
], _.prototype, "item", 2);
w([
  N({ attribute: !1 })
], _.prototype, "value", 2);
w([
  b()
], _.prototype, "_sectionsNames", 2);
_ = w([
  U("umb-user-group-table-sections-column-layout")
], _);
var K = Object.defineProperty, X = Object.getOwnPropertyDescriptor, I = (t) => {
  throw TypeError(t);
}, d = (t, e, s, o) => {
  for (var a = o > 1 ? void 0 : o ? X(e, s) : e, n = t.length - 1, i; n >= 0; n--)
    (i = t[n]) && (a = (o ? i(e, s, a) : i(a)) || a);
  return o && a && K(e, s, a), a;
}, E = (t, e, s) => e.has(t) || I("Cannot " + s), l = (t, e, s) => (E(t, e, "read from private field"), s ? s.call(t) : e.get(t)), u = (t, e, s) => e.has(t) ? I("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), F = (t, e, s, o) => (E(t, e, "write to private field"), e.set(t, s), s), v = (t, e, s) => (E(t, e, "access private method"), s), m, C, g, f, y, p, O, q, R;
let r = class extends M {
  constructor() {
    super(), u(this, p), this._tableConfig = {
      allowSelection: !0
    }, this._tableColumns = [
      {
        name: this.localize.term("general_name"),
        alias: "userGroupName",
        elementName: "umb-user-group-table-name-column-layout"
      },
      {
        name: this.localize.term("main_sections"),
        alias: "userGroupSections",
        elementName: "umb-user-group-table-sections-column-layout"
      },
      {
        name: this.localize.term("user_startnode"),
        alias: "userGroupContentStartNode"
      },
      {
        name: this.localize.term("user_mediastartnode"),
        alias: "userGroupMediaStartNode"
      },
      {
        name: "",
        alias: "entityActions",
        align: "right"
      }
    ], this._tableItems = [], this._selection = [], u(this, m), u(this, C, new L(this)), u(this, g, new x(this)), u(this, f, /* @__PURE__ */ new Map()), u(this, y, /* @__PURE__ */ new Map()), this.consumeContext(D, (t) => {
      F(this, m, t), this.observe(
        l(this, m).selection.selection,
        (e) => this._selection = e,
        "umbCollectionSelectionObserver"
      ), this.observe(
        l(this, m).items,
        (e) => {
          this._createTableItems(e);
        },
        "umbCollectionItemsObserver"
      );
    });
  }
  async _createTableItems(t) {
    await Promise.all([
      v(this, p, O).call(this, t, "documentStartNode", l(this, C), l(this, f)),
      v(this, p, O).call(this, t, "mediaStartNode", l(this, g), l(this, y))
    ]), this._tableItems = t.map((e) => ({
      id: e.unique,
      icon: e.icon,
      data: [
        {
          columnAlias: "userGroupName",
          value: {
            name: e.name
          }
        },
        {
          columnAlias: "userGroupSections",
          value: e.sections
        },
        {
          columnAlias: "userGroupContentStartNode",
          value: e.documentStartNode ? l(this, f).get(e.documentStartNode.unique) : this.localize.term("content_contentRoot")
        },
        {
          columnAlias: "userGroupMediaStartNode",
          value: e.mediaStartNode?.unique ? l(this, y).get(e.mediaStartNode.unique) : this.localize.term("media_mediaRoot")
        },
        {
          columnAlias: "entityActions",
          value: S`<umb-entity-actions-table-column-view
							.value=${{
            entityType: e.entityType,
            unique: e.unique
          }}></umb-entity-actions-table-column-view>`
        }
      ]
    }));
  }
  render() {
    return S`
			<umb-table
				.config=${this._tableConfig}
				.columns=${this._tableColumns}
				.items=${this._tableItems}
				.selection=${this._selection}
				@selected="${v(this, p, q)}"
				@deselected="${v(this, p, R)}"></umb-table>
		`;
  }
};
m = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
O = async function(t, e, s, o) {
  const a = t.map((c) => c[e]?.unique).filter(Boolean), i = [...new Set(a)].filter((c) => !o.has(c));
  if (i.length === 0) return;
  const { data: T } = await s.requestItems(i);
  T && T.forEach((c) => {
    o.set(c.unique, c.name);
  });
};
q = function(t) {
  t.stopPropagation();
  const s = t.target.selection;
  l(this, m)?.selection.setSelection(s);
};
R = function(t) {
  t.stopPropagation();
  const s = t.target.selection;
  l(this, m)?.selection.setSelection(s);
};
r.styles = [$];
d([
  b()
], r.prototype, "_tableConfig", 2);
d([
  b()
], r.prototype, "_tableColumns", 2);
d([
  b()
], r.prototype, "_tableItems", 2);
d([
  b()
], r.prototype, "_selection", 2);
r = d([
  U("umb-user-group-collection-table-view")
], r);
const se = r;
export {
  r as UmbUserGroupCollectionTableViewElement,
  se as default
};
//# sourceMappingURL=user-group-table-collection-view.element-BenvoVKw.js.map
