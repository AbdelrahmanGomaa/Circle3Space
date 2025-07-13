import { i as w } from "./manifests-BeI4zfAH.js";
import { U as E } from "./index-L-35ogTa.js";
import { UmbTextStyles as g } from "@umbraco-cms/backoffice/style";
import { html as b, css as I, state as _, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as A } from "@umbraco-cms/backoffice/lit-element";
import { UmbMemberTypeItemRepository as M } from "@umbraco-cms/backoffice/member-type";
var q = Object.defineProperty, O = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, c = (e, t, i, a) => {
  for (var m = a > 1 ? void 0 : a ? O(t, i) : t, l = e.length - 1, s; l >= 0; l--)
    (s = e[l]) && (m = (a ? s(t, i, m) : s(m)) || m);
  return a && m && q(t, i, m), m;
}, h = (e, t, i) => t.has(e) || f("Cannot " + i), p = (e, t, i) => (h(e, t, "read from private field"), t.get(e)), u = (e, t, i) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), x = (e, t, i, a) => (h(e, t, "write to private field"), t.set(e, i), i), y = (e, t, i) => (h(e, t, "access private method"), i), r, v, o, d, C;
let n = class extends A {
  constructor() {
    super(), u(this, o), this._tableConfig = {
      allowSelection: !1
    }, this._tableColumns = [
      {
        name: this.localize.term("general_name"),
        alias: "memberName"
      },
      {
        name: this.localize.term("general_username"),
        alias: "memberUsername"
      },
      {
        name: this.localize.term("general_email"),
        alias: "memberEmail"
      },
      {
        name: this.localize.term("content_membertype"),
        alias: "memberType"
      },
      {
        name: this.localize.term("member_kind"),
        alias: "memberKind"
      },
      {
        name: "",
        alias: "entityActions",
        align: "right"
      }
    ], this._tableItems = [], u(this, r), u(this, v, new M(this)), this.consumeContext(w, (e) => {
      x(this, r, e), y(this, o, d).call(this);
    });
  }
  render() {
    return b`
			<umb-table .config=${this._tableConfig} .columns=${this._tableColumns} .items=${this._tableItems}></umb-table>
		`;
  }
};
r = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
d = function() {
  p(this, r) && this.observe(p(this, r).items, (e) => y(this, o, C).call(this, e), "umbCollectionItemsObserver");
};
C = async function(e) {
  const t = e.map((a) => a.memberType.unique), { data: i } = await p(this, v).requestItems(t);
  this._tableItems = e.map((a) => {
    const m = a.variants[0].name, l = a.kind === E.API ? this.localize.term("member_memberKindApi") : this.localize.term("member_memberKindDefault"), s = i?.find((T) => T.unique === a.memberType.unique);
    return {
      id: a.unique,
      icon: s?.icon,
      data: [
        {
          columnAlias: "memberName",
          value: b`<a href=${"section/member-management/workspace/member/edit/" + a.unique}>${m}</a>`
        },
        {
          columnAlias: "memberUsername",
          value: a.username
        },
        {
          columnAlias: "memberEmail",
          value: a.email
        },
        {
          columnAlias: "memberType",
          value: s?.name
        },
        {
          columnAlias: "memberKind",
          value: l
        },
        {
          columnAlias: "entityActions",
          value: b`<umb-entity-actions-table-column-view
							.value=${{
            entityType: a.entityType,
            unique: a.unique
          }}></umb-entity-actions-table-column-view>`
        }
      ]
    };
  });
};
n.styles = [
  g,
  I`
			:host {
				display: flex;
				flex-direction: column;
			}
		`
];
c([
  _()
], n.prototype, "_tableConfig", 2);
c([
  _()
], n.prototype, "_tableColumns", 2);
c([
  _()
], n.prototype, "_tableItems", 2);
n = c([
  U("umb-member-table-collection-view")
], n);
const N = n;
export {
  n as UmbMemberTableCollectionViewElement,
  N as default
};
//# sourceMappingURL=member-table-collection-view.element-BHkalDvC.js.map
