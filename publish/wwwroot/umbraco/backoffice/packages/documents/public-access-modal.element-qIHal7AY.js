import { DocumentService as g } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as y, tryExecute as M } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as U } from "@umbraco-cms/backoffice/class-api";
import { UMB_NOTIFICATION_CONTEXT as S } from "@umbraco-cms/backoffice/notification";
import { UmbDocumentItemRepository as G } from "./document-item.repository-DGfmiV4g.js";
import "@umbraco-cms/backoffice/language";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/property";
import { css as B, state as d, customElement as q, html as m, nothing as T } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as O } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as R } from "@umbraco-cms/backoffice/style";
import { UmbMemberDetailRepository as W } from "@umbraco-cms/backoffice/member";
import { UmbMemberGroupItemRepository as H } from "@umbraco-cms/backoffice/member-group";
class L {
  #e;
  /**
   * Creates an instance of UmbDocumentPublicAccessServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentPublicAccessServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Creates the Public Access for the given Document unique
   * @param {string} unique
   * @param {PublicAccessRequestModel} data
   * @memberof UmbDocumentPublicAccessServerDataSource
   */
  async create(e, i) {
    if (!e) throw new Error("unique is missing");
    return y(
      this.#e,
      g.postDocumentByIdPublicAccess({ id: e, requestBody: i })
    );
  }
  /**
   * Fetches the Public Access for the given Document unique
   * @param {string} unique
   * @memberof UmbDocumentPublicAccessServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("unique is missing");
    return M(g.getDocumentByIdPublicAccess({ id: e }));
  }
  /**
   * Updates Public Access for the given Document unique
   * @param {string} unique
   * @param {PublicAccessRequestModel} data
   * @param requestBody
   * @memberof UmbDocumentPublicAccessServerDataSource
   */
  async update(e, i) {
    if (!e) throw new Error("unique is missing");
    return y(this.#e, g.putDocumentByIdPublicAccess({ id: e, requestBody: i }));
  }
  /**
   * Deletes Public Access for the given Document unique
   * @param {string} unique
   * @memberof UmbDocumentPublicAccessServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("unique is missing");
    return y(this.#e, g.deleteDocumentByIdPublicAccess({ id: e }));
  }
}
class F extends U {
  #e;
  #t;
  constructor(e) {
    super(e), this.#e = new L(this), this.consumeContext(S, (i) => {
      this.#t = i;
    });
  }
  async create(e, i) {
    if (!e) throw new Error("unique is missing");
    if (!i) throw new Error("Data is missing");
    const { error: s } = await this.#e.create(e, i);
    if (!s) {
      const o = { data: { message: "Public access setting created" } };
      this.#t?.peek("positive", o);
    }
    return { error: s };
  }
  async read(e) {
    if (!e) throw new Error("unique is missing");
    const { data: i, error: s } = await this.#e.read(e);
    return { data: i, error: s };
  }
  async update(e, i) {
    if (!e) throw new Error("unique is missing");
    if (!i) throw new Error("Data is missing");
    const { error: s } = await this.#e.update(e, i);
    if (!s) {
      const o = { data: { message: "Public access setting updated" } };
      this.#t?.peek("positive", o);
    }
    return { error: s };
  }
  async delete(e) {
    if (!e) throw new Error("unique is missing");
    const { error: i } = await this.#e.delete(e);
    if (!i) {
      const s = { data: { message: "Public access setting deleted" } };
      this.#t?.peek("positive", s);
    }
    return { error: i };
  }
}
var X = Object.defineProperty, J = Object.getOwnPropertyDescriptor, v = (t) => {
  throw TypeError(t);
}, h = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? J(e, i) : e, l = t.length - 1, f; l >= 0; l--)
    (f = t[l]) && (o = (s ? f(e, i, o) : f(o)) || o);
  return s && o && X(e, i, o), o;
}, w = (t, e, i) => e.has(t) || v("Cannot " + i), r = (t, e, i) => (w(t, e, "read from private field"), e.get(t)), _ = (t, e, i) => e.has(t) ? v("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), $ = (t, e, i, s) => (w(t, e, "write to private field"), e.set(t, i), i), c = (t, e, i) => (w(t, e, "access private method"), i), p, n, b, a, P, D, A, z, E, I, N, k, x, C;
let u = class extends O {
  constructor() {
    super(...arguments), _(this, a), _(this, p, new F(this)), _(this, n), _(this, b, !0), this._documentName = "", this._startPage = !0, this._selection = [];
  }
  // Init
  firstUpdated() {
    $(this, n, this.data?.unique), c(this, a, P).call(this);
  }
  // Renders
  render() {
    return m`
			<umb-body-layout headline=${this.localize.term("actions_protect")}>
				<uui-box>${this._startPage ? this.renderSelectGroup() : this.renderEditPage()}</uui-box> ${this.renderActions()}
			</umb-body-layout>
		`;
  }
  // First page when no Restricting Public Access is set.
  renderSelectGroup() {
    return m`<umb-localize key="publicAccess_paHowWould" .args=${[this._documentName]}>
				Choose how you want to restrict public access to the page '${this._documentName}'.
			</umb-localize>
			<uui-radio-group
				@change=${(t) => t.target.value === "members" ? this._specific = !0 : this._specific = !1}>
				<uui-radio label=${this.localize.term("publicAccess_paMembers")} value="members">
					<strong>${this.localize.term("publicAccess_paMembers")}</strong><br />
					${this.localize.term("publicAccess_paMembersHelp")}
				</uui-radio>
				<uui-radio label=${this.localize.term("publicAccess_paGroups")} value="groups">
					<strong>${this.localize.term("publicAccess_paGroups")}</strong><br />
					${this.localize.term("publicAccess_paGroupsHelp")}
				</uui-radio>
			</uui-radio-group>`;
  }
  // Second page when editing Restricting Public Access
  renderEditPage() {
    return m`${this.renderMemberType()}
			<p>
				<umb-localize key="publicAccess_paSelectPages">
					Select the pages that contain login form and error messages
				</umb-localize>
			</p>
			<div class="select-item">
				<strong><umb-localize key="publicAccess_paLoginPage">Login Page</umb-localize></strong>
				<small>
					<umb-localize key="publicAccess_paLoginPageHelp"> Choose the page that contains the login form </umb-localize>
				</small>
				<umb-input-document
					.value=${this._loginDocumentId}
					max="1"
					@change=${c(this, a, N)}></umb-input-document>
			</div>
			<br />
			<div class="select-item">
				<strong><umb-localize key="publicAccess_paErrorPage">Error Page</umb-localize></strong>
				<small>
					<umb-localize key="publicAccess_paErrorPageHelp">
						Used when people are logged on, but do not have access
					</umb-localize>
				</small>
				<umb-input-document
					.value=${this._errorDocumentId}
					max="1"
					@change=${c(this, a, k)}></umb-input-document>
			</div>`;
  }
  renderMemberType() {
    return this._specific ? m`<umb-localize key="publicAccess_paSelectMembers" .args=${[this._documentName]}>
						Select the members who have access to the page <strong>${this._documentName}</strong>
					</umb-localize>
					<umb-input-member .selection=${this._selection} @change=${c(this, a, C)}></umb-input-member>` : m`<umb-localize key="publicAccess_paSelectGroups" .args=${[this._documentName]}>
						Select the groups who have access to the page <strong>${this._documentName}</strong>
					</umb-localize>
					<umb-input-member-group
						.selection=${this._selection}
						@change=${c(this, a, x)}></umb-input-member-group>`;
  }
  // Action buttons
  renderActions() {
    const t = this._startPage ? m`<uui-button
					slot="actions"
					id="save"
					look="primary"
					label=${this.localize.term("general_next")}
					?disabled=${this._specific === void 0}
					@click="${c(this, a, A)}"></uui-button>` : m`<uui-button
					slot="actions"
					id="save"
					look="primary"
					color="positive"
					label=${this.localize.term("buttons_save")}
					?disabled=${!this._loginDocumentId || !this._errorDocumentId || this._selection.length === 0}
					@click="${c(this, a, z)}"></uui-button>`, e = r(this, b) ? T : m`<uui-button
					slot="actions"
					id="save"
					look="primary"
					color="warning"
					@click="${c(this, a, E)}"
					label=${this.localize.term("publicAccess_paRemoveProtection")}></uui-button>`;
    return m` <uui-button
				slot="actions"
				id="cancel"
				label=${this.localize.term("buttons_confirmActionCancel")}
				@click="${c(this, a, I)}"></uui-button
			>${e}${t}`;
  }
};
p = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
P = async function() {
  if (!r(this, n)) return;
  const { data: t } = await new G(this).requestItems([r(this, n)]);
  if (!t) return;
  const e = t[0];
  this._documentName = e.variants[0]?.name, e.isProtected && c(this, a, D).call(this);
};
D = async function() {
  if (!r(this, n)) return;
  const { data: t } = await r(this, p).read(r(this, n));
  t && ($(this, b, !1), this._startPage = !1, this._specific = t.members.length > 0, t.members.length > 0 ? this._selection = t.members.map((e) => e.id) : t.groups.length > 0 && (this._selection = t.groups.map((e) => e.id)), this._loginDocumentId = t.loginDocument.id, this._errorDocumentId = t.errorDocument.id);
};
A = function() {
  this._startPage = !1;
};
z = async function() {
  if (!this._loginDocumentId || !this._errorDocumentId || !r(this, n)) return;
  const t = {
    memberGroupNames: [],
    memberUserNames: [],
    loginDocument: { id: this._loginDocumentId },
    errorDocument: { id: this._errorDocumentId }
  };
  if (this._specific) {
    const e = new W(this), i = this._selection.map((l) => e.requestByUnique(l)), o = (await Promise.all(i)).filter((l) => l.data).map((l) => l.data?.username);
    t.memberUserNames = o;
  } else {
    const e = new H(this), { data: i } = await e.requestItems(this._selection);
    if (!i) throw new Error("No Member groups returned");
    const s = i.filter((o) => this._selection.includes(o.unique)).map((o) => o.name);
    t.memberGroupNames = s;
  }
  r(this, b) ? await r(this, p).create(r(this, n), t) : await r(this, p).update(r(this, n), t), this.modalContext?.submit();
};
E = async function() {
  r(this, n) && (await r(this, p).delete(r(this, n)), this.modalContext?.submit());
};
I = function() {
  this.modalContext?.reject();
};
N = function(t) {
  this._loginDocumentId = t.target.selection[0];
};
k = function(t) {
  this._errorDocumentId = t.target.selection[0];
};
x = function(t) {
  this._selection = t.target.selection;
};
C = function(t) {
  this._selection = t.target.selection;
};
u.styles = [
  R,
  B`
			uui-box,
			uui-radio-group {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-4);
			}
			uui-radio-group {
				margin-top: var(--uui-size-4);
			}

			p {
				margin: var(--uui-size-6) 0 var(--uui-size-2);
			}
			small {
				display: block;
			}
		`
];
h([
  d()
], u.prototype, "_documentName", 2);
h([
  d()
], u.prototype, "_specific", 2);
h([
  d()
], u.prototype, "_startPage", 2);
h([
  d()
], u.prototype, "_selection", 2);
h([
  d()
], u.prototype, "_loginDocumentId", 2);
h([
  d()
], u.prototype, "_errorDocumentId", 2);
u = h([
  q("umb-public-access-modal")
], u);
const ne = u;
export {
  u as UmbPublicAccessModalElement,
  ne as default
};
//# sourceMappingURL=public-access-modal.element-qIHal7AY.js.map
