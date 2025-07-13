import { css as $, property as m, customElement as p, LitElement as w, ifDefined as v, html as s, nothing as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as x } from "@umbraco-cms/backoffice/style";
import { UmbId as A } from "@umbraco-cms/backoffice/id";
import { UmbContextToken as T } from "@umbraco-cms/backoffice/context-api";
import { UmbContextBase as L, UmbControllerBase as P } from "@umbraco-cms/backoffice/class-api";
import { UmbBasicState as D } from "@umbraco-cms/backoffice/observable-api";
import { UmbLitElement as M } from "@umbraco-cms/backoffice/lit-element";
import { UMB_MODAL_MANAGER_CONTEXT as I, UMB_ERROR_VIEWER_MODAL as R } from "@umbraco-cms/backoffice/modal";
import { EventMessageTypeModel as l } from "@umbraco-cms/backoffice/external/backend-api";
var k = Object.defineProperty, S = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, _ = (e, t, i, o) => {
  for (var a = o > 1 ? void 0 : o ? S(t, i) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (a = (o ? n(t, i, a) : n(a)) || a);
  return o && a && k(t, i, a), a;
}, j = (e, t, i) => t.has(e) || y("Cannot " + i), B = (e, t, i) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), b = (e, t, i) => (j(e, t, "access private method"), i), d, E, C;
let c = class extends w {
  constructor() {
    super(...arguments), B(this, d);
  }
  render() {
    return s`
			<uui-toast-notification-layout id="layout" headline="${v(this.data.headline)}" class="uui-text">
				<div id="message">${this.data.message}</div>
				${b(this, d, E).call(this, this.data.structuredList)}
			</uui-toast-notification-layout>
		`;
  }
};
d = /* @__PURE__ */ new WeakSet();
E = function(e) {
  return this.data.structuredList ? typeof e != "object" || e === null ? u : s`${Object.entries(e).map(
    ([t, i]) => s`<div class="structured-list">
					<p>${t}:</p>
					<ul>
						${b(this, d, C).call(this, i)}
					</ul>
				</div>`
  )}` : u;
};
C = function(e) {
  return Array.isArray(e) ? e.map((t) => s`<li>${t}</li>`) : s`<li>${e}</li>`;
};
c.styles = [
  x,
  $`
			#message {
				white-space: pre-line;
			}
			.structured-list ul {
				margin: 0;
			}
			.structured-list p {
				margin: var(--uui-size-3) 0 var(--uui-size-1);
			}
		`
];
_([
  m({ attribute: !1 })
], c.prototype, "notificationHandler", 2);
_([
  m({ type: Object })
], c.prototype, "data", 2);
c = _([
  p("umb-notification-layout-default")
], c);
const W = "umb-notification-layout-default";
class F {
  /**
   * Creates an instance of UmbNotificationHandler.
   * @param {UmbNotificationOptions} options
   * @memberof UmbNotificationHandler
   */
  constructor(t) {
    this._defaultColor = "default", this._defaultDuration = 6e3, this.key = A.new(), this.color = t.color || this._defaultColor, this.duration = t.duration !== void 0 ? t.duration : this._defaultDuration, this._elementName = t.elementName || W, this._data = t.data, this._closePromise = new Promise((a) => {
      this._closeResolver = a;
    });
    const i = document.createElement("uui-toast-notification");
    i.color = this.color, i.autoClose = this.duration;
    const o = document.createElement(this._elementName);
    o.data = this._data, o.notificationHandler = this, i.appendChild(o), this.element = i;
  }
  /**
   * @param {...any} args
   * @memberof UmbNotificationHandler
   */
  close(...t) {
    this._closeResolver(...t), this.element.open = !1;
  }
  /**
   * @returns {*}
   * @memberof UmbNotificationHandler
   */
  onClose() {
    return this._closePromise;
  }
}
class rt extends L {
  constructor(t) {
    super(t, g), this._notifications = new D([]), this.notifications = this._notifications.asObservable();
  }
  /**
   * @private
   * @param {UmbNotificationOptions<UmbNotificationData>} options
   * @returns {*}  {UmbNotificationHandler}
   * @memberof UmbNotificationContext
   */
  #t(t) {
    const i = new F(t);
    return i.element?.addEventListener("closed", () => this._handleClosed(i)), this._notifications.setValue([...this._notifications.getValue(), i]), i;
  }
  /**
   * @private
   * @param {string} key
   * @memberof UmbNotificationContext
   */
  _close(t) {
    this._notifications.setValue(this._notifications.getValue().filter((i) => i.key !== t));
  }
  /**
   * @private
   * @param notificationHandler
   * @param {string} key
   * @memberof UmbNotificationContext
   */
  _handleClosed(t) {
    t.element.removeEventListener("closed", () => this._handleClosed(t)), this._close(t.key);
  }
  /**
   * Opens a notification that automatically goes away after 6 sek.
   * @param {UmbNotificationColor} color
   * @param {UmbNotificationOptions<UmbNotificationData>} options
   * @returns {*}
   * @memberof UmbNotificationContext
   */
  peek(t, i) {
    return this.#t({ color: t, ...i });
  }
  /**
   * Opens a notification that stays on the screen until dismissed by the user or custom code
   * @param {UmbNotificationColor} color
   * @param {UmbNotificationOptions<UmbNotificationData>} options
   * @returns {*}
   * @memberof UmbNotificationContext
   */
  stay(t, i) {
    return this.#t({ ...i, color: t, duration: null });
  }
}
const g = new T("UmbNotificationContext");
var V = Object.defineProperty, H = Object.getOwnPropertyDescriptor, U = (e) => {
  throw TypeError(e);
}, N = (e, t, i, o) => {
  for (var a = o > 1 ? void 0 : o ? H(t, i) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (a = (o ? n(t, i, a) : n(a)) || a);
  return o && a && V(t, i, a), a;
}, z = (e, t, i) => t.has(e) || U("Cannot " + i), G = (e, t, i) => t.has(e) ? U("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), X = (e, t, i) => (z(e, t, "access private method"), i), f, O;
let h = class extends M {
  constructor() {
    super(...arguments), G(this, f);
  }
  render() {
    return this.data ? s`<uui-toast-notification-layout headline=${v(this.data.headline)}
					>${this.data.message}${this.data.details ? s`<uui-button
								slot="actions"
								look="primary"
								color="danger"
								label=${this.localize.term("defaultdialogs_seeErrorAction")}
								@click=${X(this, f, O)}></uui-button>` : u}</uui-toast-notification-layout
				>` : u;
  }
};
f = /* @__PURE__ */ new WeakSet();
O = async function() {
  (await this.getContext(I)).open(this, R, { data: this.data?.details }), this.notificationHandler.close();
};
N([
  m({ attribute: !1 })
], h.prototype, "data", 2);
h = N([
  p("umb-peek-error-notification")
], h);
class Y extends P {
  async open(t) {
    (await this.getContext(g)).peek("danger", {
      elementName: "umb-peek-error-notification",
      data: t
    }), this.destroy();
  }
}
function nt(e, t) {
  return new Y(e).open(t);
}
function st(e) {
  switch (e) {
    case l.ERROR:
      return "danger";
    case l.WARNING:
      return "warning";
    case l.INFO:
    case l.DEFAULT:
      return "default";
    case l.SUCCESS:
      return "positive";
    default:
      return "";
  }
}
function q(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = e;
  return typeof t.category == "string" && typeof t.message == "string" && typeof t.type == "string" && Object.values(l).includes(t.type);
}
function lt(e) {
  return e.every(q);
}
const ct = "umb-notifications";
export {
  g as UMB_NOTIFICATION_CONTEXT,
  ct as UMB_NOTIFICATION_HEADER,
  rt as UmbNotificationContext,
  F as UmbNotificationHandler,
  Y as UmbPeekErrorController,
  st as extractUmbNotificationColor,
  lt as isUmbNotifications,
  nt as umbPeekError
};
//# sourceMappingURL=index.js.map
