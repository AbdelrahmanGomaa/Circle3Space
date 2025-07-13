import { h as C, n as E, t as f, r as y, u as T } from "./paths-Cvoq37Uo.js";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/repository";
import "./webhook-events-modal.token-CoEuVSMb.js";
import "./webhook-event.store-Ckvt3DzU.js";
import { U as W } from "./paths-Bs7P7lXf.js";
import "@umbraco-cms/backoffice/collection";
import { html as w, css as g, state as l, customElement as P } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as U, umbFocus as k } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as A } from "@umbraco-cms/backoffice/style";
import { UmbEntityDetailWorkspaceContextBase as B, UmbWorkspaceIsNewRedirectController as S, UmbWorkspaceIsNewRedirectControllerAlias as R } from "@umbraco-cms/backoffice/workspace";
var H = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, v = (r) => {
  throw TypeError(r);
}, h = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? $(e, t) : e, u = r.length - 1, d; u >= 0; u--)
    (d = r[u]) && (n = (i ? d(e, t, n) : d(n)) || n);
  return i && n && H(e, t, n), n;
}, c = (r, e, t) => e.has(r) || v("Cannot " + t), o = (r, e, t) => (c(r, e, "read from private field"), t ? t.call(r) : e.get(r)), _ = (r, e, t) => e.has(r) ? v("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), D = (r, e, t, i) => (c(r, e, "write to private field"), e.set(r, t), t), m = (r, e, t) => (c(r, e, "access private method"), t), a, p, O, b;
let s = class extends U {
  constructor() {
    super(), _(this, p), _(this, a), this._url = "", this._name = "", this._description = "", this.consumeContext(C, (r) => {
      D(this, a, r), this.observe(o(this, a).url, (e) => this._url = e ?? ""), this.observe(o(this, a).name, (e) => this._name = e ?? ""), this.observe(o(this, a).description, (e) => this._description = e ?? "");
    });
  }
  render() {
    return w`
			<umb-entity-detail-workspace-editor back-path=${W}>
				<div id="header" slot="header">
					<div id="editors">
						<uui-input
							id="name"
							label=${this.localize.term("placeholders_entername")}
							placeholder=${this.localize.term("placeholders_entername")}
							.value=${this._name}
							@change=${m(this, p, O)}
							${k()}>
						</uui-input>

						<uui-input
							id="description"
							.label=${this.localize.term("placeholders_enterDescription")}
							.value=${this._description}
							.placeholder=${this.localize.term("placeholders_enterDescription")}
							@input=${m(this, p, b)}></uui-input>
					</div>
				</div>
			</umb-entity-detail-workspace-editor>
		`;
  }
};
a = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
O = function(r) {
  const e = r.target.value.toString();
  o(this, a)?.setName(e);
};
b = function(r) {
  const e = r.target.value.toString();
  o(this, a)?.setDescription(e);
};
s.styles = [
  A,
  g`
			#header {
				width: 100%;
			}

			#name {
				width: 100%;
			}

			#description {
				width: 100%;
				--uui-input-height: var(--uui-size-8);
				--uui-input-border-color: transparent;
			}

			#description:hover {
				--uui-input-border-color: var(--uui-color-border);
			}
		`
];
h([
  l()
], s.prototype, "_url", 2);
h([
  l()
], s.prototype, "_name", 2);
h([
  l()
], s.prototype, "_description", 2);
s = h([
  P("umb-webhook-workspace-editor")
], s);
class V extends B {
  constructor(e) {
    super(e, {
      workspaceAlias: y,
      entityType: f,
      detailRepositoryAlias: E
    }), this.headers = this._data.createObservablePartOfCurrent((t) => t?.headers), this.enabled = this._data.createObservablePartOfCurrent((t) => t?.enabled), this.url = this._data.createObservablePartOfCurrent((t) => t?.url), this.name = this._data.createObservablePartOfCurrent((t) => t?.name), this.description = this._data.createObservablePartOfCurrent((t) => t?.description), this.events = this._data.createObservablePartOfCurrent((t) => t?.events), this.contentTypes = this._data.createObservablePartOfCurrent((t) => t?.contentTypes), this.routes.setRoutes([
      {
        path: "create",
        component: s,
        setup: async () => {
          await this.createScaffold({ parent: { entityType: T, unique: null } }), new S(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:unique",
        component: s,
        setup: (t, i) => {
          this.removeUmbControllerByAlias(R), this.load(i.match.params.unique);
        }
      }
    ]);
  }
  /**
   * Sets the events
   * @param {Array<UmbWebhookEventModel>} events - The events
   * @memberof UmbWebhookWorkspaceContext
   */
  setEvents(e) {
    this._data.updateCurrent({ events: e });
  }
  /**
   * Gets the events
   * @returns {Array<UmbWebhookEventModel>}
   * @memberof UmbWebhookWorkspaceContext
   */
  getEvents() {
    return this._data.getCurrent()?.events;
  }
  /**
   * Sets the headers
   * @param {{ [key: string]: string }} headers - The headers
   * @memberof UmbWebhookWorkspaceContext
   */
  setHeaders(e) {
    this._data.updateCurrent({ headers: e });
  }
  /**
   * Gets the headers
   * @returns {UmbWebhookDetailModel['headers']} - The headers
   * @memberof UmbWebhookWorkspaceContext
   */
  getHeaders() {
    return this._data.getCurrent()?.headers;
  }
  /**
   * Sets the content types
   * @param {string[]} types - The content types
   * @memberof UmbWebhookWorkspaceContext
   */
  setTypes(e) {
    this._data.updateCurrent({ contentTypes: e });
  }
  /**
   * Gets the content types
   * @returns {string[]} - The content types
   * @memberof UmbWebhookWorkspaceContext
   */
  getTypes() {
    return this._data.getCurrent()?.contentTypes;
  }
  /**
   * Sets the URL
   * @param {string} url - The URL
   * @memberof UmbWebhookWorkspaceContext
   */
  setUrl(e) {
    this._data.updateCurrent({ url: e });
  }
  /**
   * Sets the name
   * @param {string} name - The name
   * @memberof UmbWebhookWorkspaceContext
   */
  setName(e) {
    this._data.updateCurrent({ name: e });
  }
  /**
   * Sets the description
   * @param {string} description - The description
   * @memberof UmbWebhookWorkspaceContext
   */
  setDescription(e) {
    this._data.updateCurrent({ description: e });
  }
  /**
   * Gets the URL
   * @returns {string} - The URL
   * @memberof UmbWebhookWorkspaceContext
   */
  getUrl() {
    return this._data.getCurrent()?.url;
  }
  /**
   * Sets the enabled state
   * @param {boolean} enabled - The enabled state
   * @memberof UmbWebhookWorkspaceContext
   */
  setEnabled(e) {
    this._data.updateCurrent({ enabled: e });
  }
  /**
   * Gets the enabled state
   * @returns {boolean} - The enabled state
   * @memberof UmbWebhookWorkspaceContext
   */
  getEnabled() {
    return this._data.getCurrent()?.enabled;
  }
}
export {
  V as UmbWebhookWorkspaceContext,
  V as api
};
//# sourceMappingURL=webhook-workspace.context-BWH4yuot.js.map
