import { U as d, a as w } from "./constants-BstfLIKC.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/temporary-file";
import { UmbUserDetailRepository as S } from "./user-detail.repository-Dsq6EPIC.js";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/external/rxjs";
import { UmbTextStyles as x } from "@umbraco-cms/backoffice/style";
import { html as _, css as D, query as G, customElement as k } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as q, UMB_MODAL_MANAGER_CONTEXT as A } from "@umbraco-cms/backoffice/modal";
var F = Object.defineProperty, L = Object.getOwnPropertyDescriptor, b = (t) => {
  throw TypeError(t);
}, U = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? L(e, r) : e, u = t.length - 1, l; u >= 0; u--)
    (l = t[u]) && (i = (a ? l(e, r, i) : l(i)) || i);
  return a && i && F(e, r, i), i;
}, y = (t, e, r) => e.has(t) || b("Cannot " + r), f = (t, e, r) => (y(t, e, "read from private field"), r ? r.call(t) : e.get(t)), h = (t, e, r) => e.has(t) ? b("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), c = (t, e, r) => (y(t, e, "access private method"), r), m, s, v, C, M;
let n = class extends q {
  constructor() {
    super(...arguments), h(this, s), h(this, m, new S(this));
  }
  render() {
    return _`<uui-dialog-layout headline=${this.localize.term("user_createUserHeadline", this.data?.user.kind)}>
			<p>${this.localize.term("user_createUserDescription", this.data?.user.kind)}</p>

			${c(this, s, M).call(this)}
			<uui-button @click=${this._rejectModal} slot="actions" label="Cancel" look="secondary"></uui-button>
			<uui-button
				form="CreateUserForm"
				slot="actions"
				type="submit"
				label="Create user"
				look="primary"
				color="positive"></uui-button>
		</uui-dialog-layout>`;
  }
};
m = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
v = async function(t) {
  t.preventDefault();
  const e = t.target;
  if (!e || !e.checkValidity()) return;
  const a = new FormData(e), i = a.get("name"), u = a.get("email"), E = e.querySelector("#userGroups")?.selection.map((g) => ({ unique: g })), { data: o } = await f(this, m).createScaffold();
  if (!o) return;
  o.kind = this.data?.user.kind ?? d.DEFAULT, o.name = i, o.email = u, o.userName = u, o.userGroupUniques = E;
  const { data: p } = await f(this, m).create(o);
  p && (p.kind === d.DEFAULT ? c(this, s, C).call(this, p.unique) : this._submitModal());
};
C = async function(t) {
  (await this.getContext(A)).open(this, w, {
    data: {
      user: {
        unique: t
      }
    }
  })?.onSubmit().then(() => {
    this._submitModal();
  }).catch((a) => {
    a?.type === "createAnotherUser" ? this._form?.reset() : this._rejectModal();
  });
};
M = function() {
  return _` <uui-form>
			<form id="CreateUserForm" name="form" @submit="${c(this, s, v)}">
				<uui-form-layout-item>
					<uui-label id="nameLabel" slot="label" for="name" required>Name</uui-label>
					<uui-input id="name" label="name" type="text" name="name" required></uui-input>
				</uui-form-layout-item>
				<uui-form-layout-item>
					<uui-label id="emailLabel" slot="label" for="email" required>Email</uui-label>
					<uui-input id="email" label="email" type="email" name="email" required></uui-input>
				</uui-form-layout-item>
				<uui-form-layout-item>
					<uui-label id="userGroupsLabel" slot="label" for="userGroups" required>User group</uui-label>
					<span slot="description">Add groups to assign access and permissions</span>
					<umb-user-group-input id="userGroups" name="userGroups"></umb-user-group-input>
				</uui-form-layout-item>
			</form>
		</uui-form>`;
};
n.styles = [
  x,
  D`
			uui-input,
			uui-input-password,
			uui-combobox {
				width: 100%;
			}

			p {
				width: 580px;
			}

			uui-textarea {
				--uui-textarea-min-height: 100px;
			}
		`
];
U([
  G("#CreateUserForm")
], n.prototype, "_form", 2);
n = U([
  k("umb-create-user-modal")
], n);
const j = n;
export {
  n as UmbCreateUserModalElement,
  j as default
};
//# sourceMappingURL=create-user-modal.element-Do2r5Bvx.js.map
