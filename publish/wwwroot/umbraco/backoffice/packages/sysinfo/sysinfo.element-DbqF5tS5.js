import { U as w } from "./sysinfo.repository-ZruRTk51.js";
import { when as C, html as p, css as k, state as _, customElement as T } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as I } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as $ } from "@umbraco-cms/backoffice/modal";
import { UMB_NOTIFICATION_CONTEXT as x } from "@umbraco-cms/backoffice/notification";
import { UmbCurrentUserRepository as M } from "@umbraco-cms/backoffice/current-user";
var A = Object.defineProperty, E = Object.getOwnPropertyDescriptor, g = (t) => {
  throw TypeError(t);
}, m = (t, a, e, l) => {
  for (var i = l > 1 ? void 0 : l ? E(a, e) : a, h = t.length - 1, d; h >= 0; h--)
    (d = t[h]) && (i = (l ? d(a, e, i) : d(i)) || i);
  return l && i && A(a, e, i), i;
}, y = (t, a, e) => a.has(t) || g("Cannot " + e), s = (t, a, e) => (y(t, a, "read from private field"), e ? e.call(t) : a.get(t)), u = (t, a, e) => a.has(t) ? g("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(t) : a.set(t, e), f = (t, a, e) => (y(t, a, "access private method"), e), o, c, b, r, v, S, U;
let n = class extends $ {
  constructor() {
    super(...arguments), u(this, r), this._systemInformation = "", this._loading = !1, u(this, o, []), u(this, c, new w(this)), u(this, b, new M(this));
  }
  connectedCallback() {
    super.connectedCallback(), f(this, r, v).call(this);
  }
  render() {
    return p`
			<uui-dialog>
				<uui-dialog-layout headline="System information">
					${C(
      this._loading,
      () => p`<uui-loader-bar></uui-loader-bar>`,
      () => p` <umb-code-block id="codeblock">${this._systemInformation}</umb-code-block> `
    )}

					<uui-button
						@click=${this._submitModal}
						slot="actions"
						look="secondary"
						label=${this.localize.term("general_close")}></uui-button>

					<uui-button
						@click=${f(this, r, U)}
						.state=${this._buttonState}
						slot="actions"
						look="primary"
						color="positive"
						label=${this.localize.term("clipboard_labelForCopyToClipboard")}></uui-button>
				</uui-dialog-layout>
			</uui-dialog>
		`;
  }
};
o = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
v = async function() {
  this._loading = !0, s(this, o).length = 0;
  const [t, a] = await Promise.all([
    s(this, c).requestTroubleShooting(),
    s(this, c).requestServerInformation()
  ]);
  t && s(this, o).push(...t.items), a && (s(this, o).push({ name: "Umbraco build version", data: a.version }), s(this, o).push({ name: "Server time offset", data: a.baseUtcOffset }), s(this, o).push({ name: "Runtime mode", data: a.runtimeMode })), s(this, o).push({ name: "Browser (user agent)", data: navigator.userAgent }), s(this, o).push({ name: "Browser language", data: navigator.language }), s(this, o).push({ name: "Browser location", data: location.href });
  const { data: e } = await s(this, b).requestCurrentUser();
  e && (s(this, o).push({ name: "User is admin", data: e.isAdmin ? "Yes" : "No" }), s(this, o).push({ name: "User sections", data: e.allowedSections.join(", ") }), s(this, o).push({ name: "User culture", data: e.languageIsoCode }), s(this, o).push({
    name: "User languages",
    data: e.hasAccessToAllLanguages ? "All" : e.languages.join(", ")
  }), s(this, o).push({
    name: "User document start nodes",
    data: e.documentStartNodeUniques.length ? e.documentStartNodeUniques.join(", ") : "None"
  })), this._systemInformation = f(this, r, S).call(this), this._loading = !1;
};
S = function() {
  return s(this, o).map((t) => `${t.name}: ${t.data}`).join(`
`);
};
U = async function() {
  const t = await this.getContext(x);
  try {
    this._buttonState = "waiting";
    const e = `\`\`\`
${`Umbraco system information
--------------------------------
${this._systemInformation}`}
\`\`\`
`;
    await navigator.clipboard.writeText(e), setTimeout(() => {
      t?.peek("positive", {
        data: {
          headline: "System information",
          message: this.localize.term("speechBubbles_copySuccessMessage")
        }
      }), this._buttonState = "success";
    }, 250);
  } catch {
    this._buttonState = "failed", t?.peek("danger", {
      data: {
        headline: "System information",
        message: this.localize.term("speechBubbles_cannotCopyInformation")
      }
    });
  }
};
n.styles = [
  I,
  k`
			#code-block {
				max-height: 300px;
			}
		`
];
m([
  _()
], n.prototype, "_systemInformation", 2);
m([
  _()
], n.prototype, "_loading", 2);
m([
  _()
], n.prototype, "_buttonState", 2);
n = m([
  T("umb-sysinfo")
], n);
const W = n;
export {
  n as UmbSysinfoElement,
  W as default
};
//# sourceMappingURL=sysinfo.element-DbqF5tS5.js.map
