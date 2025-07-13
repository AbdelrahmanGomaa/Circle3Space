import { property as w, customElement as x, LitElement as Ge, ifDefined as N, html as s, css as M, queryAll as Ne, state as u, query as F } from "@umbraco-cms/backoffice/external/lit";
import { U as W } from "./logviewer-workspace.context-token-xHiG9Gw7.js";
import { debounce as Ie } from "@umbraco-cms/backoffice/utils";
import { LogLevelModel as Be, DirectionModel as ne } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
import { query as Z, path as pe, toQueryString as j } from "@umbraco-cms/backoffice/router";
import { UmbTextStyles as de } from "@umbraco-cms/backoffice/style";
import { U as Re } from "./log-viewer-search-input-modal.modal-token-BOty9lVH.js";
import { Subject as He, tap as Xe, debounceTime as Je } from "@umbraco-cms/backoffice/external/rxjs";
import { umbConfirmModal as Ke, UMB_MODAL_MANAGER_CONTEXT as Ye } from "@umbraco-cms/backoffice/modal";
import "./log-viewer-search-input-modal.element-DMBMYwuM.js";
var Ze = Object.defineProperty, je = Object.getOwnPropertyDescriptor, ve = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? je(t, i) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (r = (o ? l(t, i, r) : l(r)) || r);
  return o && r && Ze(t, i, r), r;
};
let R = class extends Ge {
  constructor() {
    super(...arguments), this.levelMap = {
      Verbose: { look: "secondary" },
      Debug: {
        look: "primary",
        style: "background-color: var(--umb-log-viewer-debug-color)"
      },
      Information: { look: "primary", color: "positive" },
      Warning: { look: "primary", color: "warning" },
      Error: { look: "primary", color: "danger" },
      Fatal: {
        look: "primary",
        style: "background-color: var(--umb-log-viewer-fatal-color)"
      }
    };
  }
  render() {
    return s`<uui-tag
			look=${N(this.level ? this.levelMap[this.level]?.look : void 0)}
			color=${N(this.level ? this.levelMap[this.level]?.color : void 0)}
			style="${N(this.level ? this.levelMap[this.level]?.style : void 0)}"
			>${this.level}<slot></slot
		></uui-tag>`;
  }
};
ve([
  w()
], R.prototype, "level", 2);
R = ve([
  x("umb-log-viewer-level-tag")
], R);
var et = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, ge = (e) => {
  throw TypeError(e);
}, ee = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? tt(t, i) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (r = (o ? l(t, i, r) : l(r)) || r);
  return o && r && et(t, i, r), r;
}, te = (e, t, i) => t.has(e) || ge("Cannot " + i), H = (e, t, i) => (te(e, t, "read from private field"), t.get(e)), ce = (e, t, i) => t.has(e) ? ge("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), it = (e, t, i, o) => (te(e, t, "write to private field"), t.set(e, i), i), y = (e, t, i) => (te(e, t, "access private method"), i), C, g, me, G, fe, _e, be;
let U = class extends E {
  constructor() {
    super(), ce(this, g), this._logLevelFilter = [], ce(this, C), this.setLogLevelDebounce = Ie(y(this, g, G), 300), this.consumeContext(W, (e) => {
      it(this, C, e), y(this, g, me).call(this);
    });
  }
  render() {
    return s`
			<umb-dropdown label="Select log levels">
				<span slot="label">
					Log Level:
					${this._logLevelFilter.length > 0 ? this._logLevelFilter.map((e) => s`<span class="log-level-button-indicator">${e}</span>`) : "All"}
				</span>
				${y(this, g, be).call(this)}
			</umb-dropdown>
		`;
  }
};
C = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakSet();
me = function() {
  H(this, C) && this.observe(H(this, C).logLevelsFilter, (e) => {
    this._logLevelFilter = e ?? [];
  });
};
G = function() {
  if (!H(this, C)) return;
  const e = Array.from(this._logLevelSelectorCheckboxes).filter((i) => i.checked).map((i) => i.value);
  let t = Z();
  e.length ? t = { ...t, loglevels: e.join(",") } : delete t.loglevels, window.history.pushState({}, "", `${pe()}?${j(t)}`);
};
fe = function() {
  this._logLevelSelectorCheckboxes.forEach((e) => e.checked = !0), y(this, g, G).call(this);
};
_e = function() {
  this._logLevelSelectorCheckboxes.forEach((e) => e.checked = !1), y(this, g, G).call(this);
};
be = function() {
  return s`
			<div id="log-level-selector" @change=${this.setLogLevelDebounce}>
				${Object.values(Be).map(
    (e) => s`<uui-checkbox
							class="log-level-menu-item"
							.checked=${this._logLevelFilter.includes(e)}
							.value=${e}
							label="${e}">
							<umb-log-viewer-level-tag .level=${e}></umb-log-viewer-level-tag>
						</uui-checkbox>`
  )}
				<uui-button
					class="log-level-menu-item"
					@click=${y(this, g, fe)}
					label=${this.localize.term("general_selectAll")}></uui-button>
				<uui-button class="log-level-menu-item" @click=${y(this, g, _e)} label="Deselect all"
					>Deselect all</uui-button
				>
			</div>
		`;
};
U.styles = [
  M`
			#log-level-selector {
				padding: var(--uui-box-default-padding, var(--uui-size-space-5, 18px));
				width: 150px;
				background-color: var(--uui-color-surface);
				box-shadow: var(--uui-shadow-depth-3);
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-3);
			}

			.log-level-button-indicator {
				font-weight: 600;
			}

			.log-level-button-indicator:not(:last-of-type)::after {
				content: ', ';
			}
		`
];
ee([
  Ne("#log-level-selector > uui-checkbox")
], U.prototype, "_logLevelSelectorCheckboxes", 2);
ee([
  u()
], U.prototype, "_logLevelFilter", 2);
U = ee([
  x("umb-log-viewer-log-level-filter-menu")
], U);
var rt = Object.defineProperty, ot = Object.getOwnPropertyDescriptor, we = (e) => {
  throw TypeError(e);
}, v = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? ot(t, i) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (r = (o ? l(t, i, r) : l(r)) || r);
  return o && r && rt(t, i, r), r;
}, st = (e, t, i) => t.has(e) || we("Cannot " + i), at = (e, t, i) => t.has(e) ? we("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), lt = (e, t, i) => (st(e, t, "access private method"), i), X, ye;
let c = class extends E {
  constructor() {
    super(...arguments), at(this, X), this.timestamp = "", this.level = "", this.messageTemplate = "", this.renderedMessage = "", this.properties = [], this.open = !1, this.exception = "", this._searchMenuData = [
      {
        label: "Search in Google",
        title: "@logViewer_searchThisMessageWithGoogle",
        href: () => `https://www.google.com/search?q=${this.renderedMessage}`,
        icon: "https://www.google.com/favicon.ico"
      },
      {
        label: "Search in Bing",
        title: "Search this message with Bing",
        href: () => `https://www.bing.com/search?q=${this.renderedMessage}`,
        icon: "https://www.bing.com/favicon.ico"
      },
      {
        label: "Search in OurUmbraco",
        title: "Search this message on Our Umbraco forums and docs",
        href: () => `https://our.umbraco.com/search?q=${this.renderedMessage}&content=wiki,forum,documentation`,
        icon: "https://our.umbraco.com/assets/images/app-icons/favicon.png"
      },
      {
        label: "Search in OurUmbraco with Google",
        title: "Search Our Umbraco forums using Google",
        href: () => `https://www.google.co.uk/?q=site:our.umbraco.com ${this.renderedMessage}&safe=off#q=site:our.umbraco.com ${this.renderedMessage} ${this.properties.find((e) => e.name === "SourceContext")?.value}&safe=off"`,
        icon: "https://www.google.com/favicon.ico"
      },
      {
        label: "Search Umbraco Source",
        title: "Search within Umbraco source code on Github",
        href: () => `https://github.com/umbraco/Umbraco-CMS/search?q=${this.properties.find((e) => e.name === "SourceContext")?.value}`,
        icon: "https://github.githubassets.com/favicon.ico"
      },
      {
        label: "Search Umbraco Issues",
        title: "Search Umbraco Issues on Github",
        href: () => `https://github.com/umbraco/Umbraco-CMS/issues?q=${this.properties.find((e) => e.name === "SourceContext")?.value}`,
        icon: "https://github.githubassets.com/favicon.ico"
      }
    ], this._propertiesWithSearchMenu = ["HttpRequestNumber", "SourceContext", "MachineName"];
  }
  willUpdate(e) {
    e.has("timestamp") && (this.date = new Date(this.timestamp));
  }
  updated(e) {
    e.has("open") && (this.open ? this.details.setAttribute("open", "true") : this.details.removeAttribute("open"));
  }
  _findLogsWithProperty({ name: e, value: t }) {
    if (!e) return "";
    let i = Z(), o = t ?? "";
    return isNaN(+(t ?? "")) && (o = "'" + t + "'"), i = {
      ...i,
      lq: encodeURIComponent(`${e}=${o}`)
    }, j(i);
  }
  render() {
    return s`
			<details @open=${lt(this, X, ye)}>
				<summary>
					<div id="timestamp">${this.date?.toLocaleString()}</div>
					<div id="level">
						<umb-log-viewer-level-tag .level=${this.level ? this.level : "Information"}></umb-log-viewer-level-tag>
					</div>
					<div id="machine">${this.properties.find((e) => e.name === "MachineName")?.value}</div>
					<div id="message"><uui-scroll-container>${this.renderedMessage}</uui-scroll-container></div>
				</summary>
				${this.exception ? s`<pre id="exception">${this.exception}</pre>` : ""}
				<ul id="properties-list">
					<li class="property">
						<div class="property-name">Timestamp</div>
						<div class="property-value">${this.date?.toLocaleString()}</div>
					</li>
					<li class="property">
						<div class="property-name">@MessageTemplate</div>
						<div class="property-value">${this.messageTemplate}</div>
					</li>
					${this.properties.map(
      (e) => s`<li class="property">
								<div class="property-name">${e.name}:</div>
								<div class="property-value">
									${e.value}
									${this._propertiesWithSearchMenu.includes(e.name ?? "") ? s`<uui-button
												compact
												look="secondary"
												label="Find logs with ${e.name}"
												title="Find logs with ${e.name}"
												href=${`section/settings/workspace/logviewer/view/search/?${this._findLogsWithProperty(
        e
      )}`}>
												<uui-icon name="icon-search"></uui-icon>
											</uui-button>` : ""}
								</div>
							</li>`
    )}
				</ul>
				<umb-dropdown look="secondary" placement="bottom-start" id="search-button" label="Search">
					<span slot="label"><uui-icon name="icon-search"></uui-icon> Search</span>
					${this._searchMenuData.map(
      (e) => s`
							<uui-menu-item
								class="search-item"
								href="${e.href()}"
								target="_blank"
								label="${e.label}"
								title="${e.title}">
								<img slot="icon" src="${e.icon}" width="16" height="16" alt="" />
							</uui-menu-item>
						`
    )}
				</umb-dropdown>
			</details>
		`;
  }
};
X = /* @__PURE__ */ new WeakSet();
ye = function(e) {
  this.open = e.target.open;
};
c.styles = [
  de,
  M`
			:host > details {
				border-top: 1px solid var(--uui-color-border);
			}

			:host(:last-child) > details {
				border-bottom: 1px solid var(--uui-color-border);
			}

			summary {
				display: flex;
			}

			details[open] {
				margin-bottom: var(--uui-size-space-3);
			}

			summary:hover {
				background-color: var(--uui-color-surface-emphasis);
				color: var(--uui-color-interactive-emphasis);
			}

			#properties-list {
				padding: 0;
				list-style: none;
			}

			.property {
				padding: 10px 20px;
				display: flex;
				border-top: 1px solid var(--uui-color-border);
			}

			.property:first-child {
				border-top: transparent;
			}

			#properties-list,
			pre {
				margin: 0 var(--uui-size-layout-1);
				border: 1px solid var(--uui-color-border);
				border-radius: var(--uui-border-radius);
				background-color: var(--uui-color-background);
				margin-bottom: var(--uui-size-space-3);
			}

			pre {
				border-left: 4px solid #d42054;
				display: block;
				font-family:
					Lato,
					Helvetica Neue,
					Helvetica,
					Arial,
					sans-serif;
				line-height: 20px;
				overflow-x: auto;
				padding: 9.5px;
				white-space: pre-wrap;
			}

			summary > div {
				box-sizing: border-box;
				padding: 10px 20px;
				display: flex;
				align-items: center;
			}

			#timestamp {
				flex: 1 0 14ch;
			}

			#level,
			#machine {
				flex: 1 0 14ch;
			}

			uui-menu-item {
				--uui-menu-item-flat-structure: 1;
			}

			#message {
				flex: 6 0 14ch;
				word-break: break-all;
			}
			#search-button {
				margin-left: var(--uui-size-layout-1);
			}

			.property-name,
			.property-value {
				display: flex;
				align-items: center;
			}

			.property-name {
				font-weight: 600;
				flex: 1 1 20ch;
			}

			.property-value {
				flex: 3 0 20ch;
			}

			.search-item {
				width: 100%;
			}
		`
];
v([
  F("details")
], c.prototype, "details", 2);
v([
  w()
], c.prototype, "timestamp", 2);
v([
  u()
], c.prototype, "date", 2);
v([
  w()
], c.prototype, "level", 2);
v([
  w()
], c.prototype, "messageTemplate", 2);
v([
  w()
], c.prototype, "renderedMessage", 2);
v([
  w({ attribute: !1 })
], c.prototype, "properties", 2);
v([
  w({ type: Boolean })
], c.prototype, "open", 2);
v([
  w()
], c.prototype, "exception", 2);
c = v([
  x("umb-log-viewer-message")
], c);
var nt = Object.defineProperty, ct = Object.getOwnPropertyDescriptor, $e = (e) => {
  throw TypeError(e);
}, P = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? ct(t, i) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (r = (o ? l(t, i, r) : l(r)) || r);
  return o && r && nt(t, i, r), r;
}, ie = (e, t, i) => t.has(e) || $e("Cannot " + i), d = (e, t, i) => (ie(e, t, "read from private field"), t.get(e)), ue = (e, t, i) => t.has(e) ? $e("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ut = (e, t, i, o) => (ie(e, t, "write to private field"), t.set(e, i), i), I = (e, t, i) => (ie(e, t, "access private method"), i), n, O, xe, Se, Le;
let _ = class extends E {
  constructor() {
    super(), ue(this, O), this._sortingDirection = ne.ASCENDING, this._logs = [], this._logsTotal = 0, this._isLoading = !0, ue(this, n), this.consumeContext(W, (e) => {
      ut(this, n, e), I(this, O, xe).call(this);
    });
  }
  _onPageChange(e) {
    const t = e.target.current;
    d(this, n)?.setCurrentPage(t), d(this, n)?.getLogs(), this._logsScrollContainer.scrollTop = 0;
  }
  _renderPagination() {
    if (!this._logsTotal) return "";
    const e = Math.ceil(this._logsTotal / 100);
    return e <= 1 ? "" : s`<div id="pagination">
			<uui-pagination .total=${e} @change="${this._onPageChange}"></uui-pagination>
		</div>`;
  }
  render() {
    return s`<uui-box>
				<div id="header" slot="header">
					<div id="timestamp">
						Timestamp
						<uui-button compact @click=${I(this, O, Se)} label="Sort logs">
							<uui-symbol-sort
								?descending=${this._sortingDirection === ne.DESCENDING}
								active></uui-symbol-sort>
						</uui-button>
					</div>
					<div id="level">Level</div>
					<div id="machine">Machine name</div>
					<div id="message">Message</div>
				</div>
				<div id="main">
					${this._isLoading ? s` <span id="empty"> <uui-loader-circle></uui-loader-circle>Loading log messages... </span> ` : s`${I(this, O, Le).call(this)}`}
				</div>
			</uui-box>
			${this._renderPagination()} `;
  }
};
n = /* @__PURE__ */ new WeakMap();
O = /* @__PURE__ */ new WeakSet();
xe = function() {
  d(this, n) && (this.observe(d(this, n).logs, (e) => {
    this._logs = e ?? [];
  }), this.observe(d(this, n).isLoadingLogs, (e) => {
    this._isLoading = e === null ? this._isLoading : e;
  }), this.observe(d(this, n).logsTotal, (e) => {
    this._logsTotal = e ?? 0;
  }), this.observe(d(this, n).sortingDirection, (e) => {
    this._sortingDirection = e;
  }));
};
Se = function() {
  d(this, n)?.toggleSortOrder(), d(this, n)?.setCurrentPage(1), d(this, n)?.getLogs();
};
Le = function() {
  return s`${this._logs.length > 0 ? s` ${this._logs.map(
    (e) => s`<umb-log-viewer-message
							.timestamp=${e.timestamp ?? ""}
							.level=${e.level ?? ""}
							.renderedMessage=${e.renderedMessage ?? ""}
							.properties=${e.properties ?? []}
							.exception=${e.exception ?? ""}
							.messageTemplate=${e.messageTemplate ?? ""}></umb-log-viewer-message>`
  )}` : s`
					<span id="empty">
						<uui-icon name="icon-search"></uui-icon>Sorry, we cannot find what you are looking for.
					</span>
				`}`;
};
_.styles = [
  M`
			uui-pagination {
				display: block;
				margin-bottom: var(--uui-size-layout-1);
			}
			uui-box {
				--uui-box-default-padding: 0;
			}

			:host {
				height: 100%;
				display: flex;
				flex-direction: column;
			}
			#header {
				display: flex;
				font-weight: 600;
				width: 100%;
			}

			#header > div {
				box-sizing: border-box;
				padding: 10px 20px;
				display: flex;
				align-items: center;
			}

			#main {
				display: flex;
				flex-direction: column;
				width: 100%;
			}

			#timestamp {
				flex: 1 0 14ch;
			}

			#level,
			#machine {
				flex: 1 0 14ch;
			}

			#message {
				flex: 6 0 14ch;
			}

			#empty {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: var(--uui-size-space-3);
				margin: var(--uui-size-space-5) 0;
			}

			#pagination {
				display: block;
				margin: var(--uui-size-space-5) 0;
			}
		`
];
P([
  F("#logs-scroll-container")
], _.prototype, "_logsScrollContainer", 2);
P([
  u()
], _.prototype, "_sortingDirection", 2);
P([
  u()
], _.prototype, "_logs", 2);
P([
  u()
], _.prototype, "_logsTotal", 2);
P([
  u()
], _.prototype, "_isLoading", 2);
_ = P([
  x("umb-log-viewer-messages-list")
], _);
var ht = Object.defineProperty, pt = Object.getOwnPropertyDescriptor, Ce = (e) => {
  throw TypeError(e);
}, re = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? pt(t, i) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (r = (o ? l(t, i, r) : l(r)) || r);
  return o && r && ht(t, i, r), r;
}, oe = (e, t, i) => t.has(e) || Ce("Cannot " + i), L = (e, t, i) => (oe(e, t, "read from private field"), i ? i.call(e) : t.get(e)), q = (e, t, i) => t.has(e) ? Ce("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), dt = (e, t, i, o) => (oe(e, t, "write to private field"), t.set(e, i), i), Q = (e, t, i) => (oe(e, t, "access private method"), i), J, $, S, Me, se, K, Ee;
let V = class extends E {
  constructor() {
    super(), q(this, S), this._poolingConfig = { enabled: !1, interval: 0 }, q(this, J, [2e3, 5e3, 1e4, 2e4, 3e4]), q(this, $), q(this, K, (e) => {
      L(this, $)?.setPollingInterval(e), Q(this, S, Ee).call(this);
    }), this.consumeContext(W, (e) => {
      dt(this, $, e), Q(this, S, Me).call(this);
    });
  }
  render() {
    return s`
			<uui-button-group>
				<uui-button label="Start pooling" @click=${Q(this, S, se)}
					>${this._poolingConfig.enabled ? s`<uui-icon name="icon-axis-rotation" id="polling-enabled-icon"></uui-icon>Polling
								${this._poolingConfig.interval / 1e3} seconds` : "Polling"}</uui-button
				>

				<umb-dropdown id="polling-rate-dropdown" compact label="Choose pooling time">
					${L(this, J).map(
      (e) => s`<uui-menu-item
								label="Every ${e / 1e3} seconds"
								@click-label=${() => L(this, K).call(this, e)}></uui-menu-item>`
    )}
				</umb-dropdown>
			</uui-button-group>
		`;
  }
};
J = /* @__PURE__ */ new WeakMap();
$ = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakSet();
Me = function() {
  L(this, $) && this.observe(L(this, $).polling, (e) => {
    this._poolingConfig = { ...e };
  });
};
se = function() {
  L(this, $)?.togglePolling();
};
K = /* @__PURE__ */ new WeakMap();
Ee = function() {
  this.dropdownElement && (this.dropdownElement.open = !1), Q(this, S, se).call(this);
};
V.styles = [
  M`
			#polling-enabled-icon {
				margin-right: var(--uui-size-space-3);
				margin-bottom: 1px;
				-webkit-animation: rotate-center 0.8s ease-in-out infinite both;
				animation: rotate-center 0.8s ease-in-out infinite both;
			}

			@-webkit-keyframes rotate-center {
				0% {
					-webkit-transform: rotate(0);
					transform: rotate(0);
				}
				100% {
					-webkit-transform: rotate(360deg);
					transform: rotate(360deg);
				}
			}
			@keyframes rotate-center {
				0% {
					-webkit-transform: rotate(0);
					transform: rotate(0);
				}
				100% {
					-webkit-transform: rotate(360deg);
					transform: rotate(360deg);
				}
			}
		`
];
re([
  F("#polling-rate-dropdown")
], V.prototype, "dropdownElement", 2);
re([
  u()
], V.prototype, "_poolingConfig", 2);
V = re([
  x("umb-log-viewer-polling-button")
], V);
var vt = Object.defineProperty, gt = Object.getOwnPropertyDescriptor, Pe = (e) => {
  throw TypeError(e);
}, k = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? gt(t, i) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (r = (o ? l(t, i, r) : l(r)) || r);
  return o && r && vt(t, i, r), r;
}, ae = (e, t, i) => t.has(e) || Pe("Cannot " + i), f = (e, t, i) => (ae(e, t, "read from private field"), t.get(e)), he = (e, t, i) => t.has(e) ? Pe("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), mt = (e, t, i, o) => (ae(e, t, "write to private field"), t.set(e, i), i), m = (e, t, i) => (ae(e, t, "access private method"), i), h, p, ke, Oe, De, Ue, Ve, Te, ze, We;
let b = class extends E {
  constructor() {
    super(), he(this, p), this._savedSearches = [], this._inputQuery = "", this._showLoader = !1, this._isQuerySaved = !1, this.inputQuery$ = new He(), he(this, h), this.consumeContext(W, (e) => {
      mt(this, h, e), m(this, p, ke).call(this), f(this, h)?.getSavedSearches();
    }), this.inputQuery$.pipe(
      Xe(() => this._showLoader = !0),
      Je(250)
    ).subscribe((e) => {
      f(this, h)?.setFilterExpression(e), m(this, p, Ue).call(this, e), this._isQuerySaved = this._savedSearches.some((t) => t.query === e), this._showLoader = !1;
    });
  }
  render() {
    return s`
			<uui-input
				id="search-input"
				label="Search logs"
				.placeholder=${"Search logs..."}
				slot="trigger"
				@input=${m(this, p, Oe)}
				.value=${this._inputQuery}>
				${this._showLoader ? s`<div id="loader-container" slot="append">
							<uui-loader-circle></uui-loader-circle>
						</div>` : ""}
				${this._inputQuery ? s`${this._isQuerySaved ? "" : s`<uui-button compact slot="append" label="Save search" @click=${m(this, p, We)}
										><uui-icon name="icon-favorite"></uui-icon
									></uui-button>`}<uui-button compact slot="append" label="Clear" @click=${m(this, p, Ve)}
								><uui-icon name="icon-delete"></uui-icon
							></uui-button>` : s``}
				<umb-dropdown id="search-dropdown" slot="append" label=${this.localize.term("logViewer_savedSearches")}>
					<span slot="label"><umb-localize key="logViewer_savedSearches">Saved searches</umb-localize></span>
					<uui-scroll-container id="saved-searches-container" role="list">
						${this._savedSearches.map(
      (e) => s`<li class="saved-search-item">
									<button
										label="Search for ${e.name}"
										class="saved-search-item-button"
										@click=${() => m(this, p, De).call(this, e.query ?? "")}>
										<span class="saved-search-item-name">${e.name}</span>
										<span class="saved-search-item-query">${e.query}</span></button
									><uui-button
										label="Remove saved search"
										color="danger"
										@click=${() => m(this, p, ze).call(this, e.name ?? "")}
										><uui-icon name="icon-trash"></uui-icon
									></uui-button>
								</li>`
    )}
					</uui-scroll-container>
				</umb-dropdown>
			</uui-input>
		`;
  }
};
h = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
ke = function() {
  f(this, h) && (this.observe(f(this, h).savedSearches, (e) => {
    this._savedSearches = e?.items ?? [], this._isQuerySaved = this._savedSearches.some((t) => t.query === this._inputQuery);
  }), this.observe(f(this, h).filterExpression, (e) => {
    this._inputQuery = e, this._isQuerySaved = this._savedSearches.some((t) => t.query === e);
  }));
};
Oe = function(e) {
  const t = e.target;
  this.inputQuery$.next(t.value);
};
De = function(e) {
  this.inputQuery$.next(e), this._searchDropdownElement.open = !1;
};
Ue = function(e) {
  let t = Z();
  t = {
    ...t,
    lq: e
  }, window.history.pushState({}, "", `${pe()}?${j(t)}`);
};
Ve = function() {
  this.inputQuery$.next(""), f(this, h)?.setFilterExpression("");
};
Te = function(e) {
  f(this, h)?.saveSearch(e);
};
ze = async function(e) {
  await Ke(this, {
    headline: this.localize.term("logViewer_deleteSavedSearch"),
    content: `${this.localize.term("defaultdialogs_confirmdelete")} ${e}?`,
    color: "danger",
    confirmLabel: "Delete"
  }), f(this, h)?.removeSearch({ name: e });
};
We = async function() {
  (await this.getContext(Ye)).open(this, Re, {
    data: { query: this._inputQuery }
  })?.onSubmit().then((i) => {
    i && (m(this, p, Te).call(this, i), this._isQuerySaved = !0);
  });
};
b.styles = [
  M`
			:host {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: var(--uui-size-space-4);
			}

			#search-input {
				width: 100%;
			}

			#saved-searches-button {
				flex-shrink: 0;
			}

			#saved-searches-popover {
				flex: 1;
			}

			#loader-container {
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 0 var(--uui-size-space-4);
			}

			.saved-search-item {
				display: flex;
				justify-content: space-between;
				align-items: stretch;
				border-bottom: 1px solid #e9e9eb;
			}

			.saved-search-item-button {
				display: flex;
				font-family: inherit;
				flex: 1;
				background: 0 0;
				padding: 0 0;
				border: 0;
				clear: both;
				cursor: pointer;
				display: flex;
				font-weight: 400;
				line-height: 20px;
				text-align: left;
				align-items: center;
				white-space: nowrap;
				color: var(--uui-color-interactive);
			}

			.saved-search-item-button:hover {
				background-color: var(--uui-color-surface-emphasis, rgb(250, 250, 250));
				color: var(--color-standalone);
			}

			.saved-search-item-name {
				font-weight: 600;
				margin: 0 var(--uui-size-space-3);
			}

			#polling-symbol-expand,
			#saved-search-expand-symbol,
			uui-symbol-sort {
				margin-left: var(--uui-size-space-3);
			}
		`
];
k([
  F("#search-dropdown")
], b.prototype, "_searchDropdownElement", 2);
k([
  u()
], b.prototype, "_savedSearches", 2);
k([
  u()
], b.prototype, "_inputQuery", 2);
k([
  u()
], b.prototype, "_showLoader", 2);
k([
  u()
], b.prototype, "_isQuerySaved", 2);
b = k([
  x("umb-log-viewer-search-input")
], b);
var ft = Object.defineProperty, _t = Object.getOwnPropertyDescriptor, qe = (e) => {
  throw TypeError(e);
}, Ae = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? _t(t, i) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (r = (o ? l(t, i, r) : l(r)) || r);
  return o && r && ft(t, i, r), r;
}, le = (e, t, i) => t.has(e) || qe("Cannot " + i), A = (e, t, i) => (le(e, t, "read from private field"), t.get(e)), B = (e, t, i) => t.has(e) ? qe("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Qe = (e, t, i, o) => (le(e, t, "write to private field"), t.set(e, i), i), bt = (e, t, i) => (le(e, t, "access private method"), i), T, D, Y, Fe;
let z = class extends E {
  constructor() {
    super(), B(this, Y), this._canShowLogs = !0, B(this, T), B(this, D), this.consumeContext(W, (t) => {
      Qe(this, T, t), bt(this, Y, Fe).call(this);
    });
  }
  render() {
    return s`
			<umb-body-layout header-transparent header-fit-height>
				<div id="header" slot="header">
					<div id="levels-container">
						<umb-log-viewer-log-level-filter-menu></umb-log-viewer-log-level-filter-menu>
						<div id="dates-polling-container">
							<umb-log-viewer-date-range-selector horizontal></umb-log-viewer-date-range-selector>
							<umb-log-viewer-polling-button> </umb-log-viewer-polling-button>
						</div>
					</div>
					<div id="input-container">
						<umb-log-viewer-search-input></umb-log-viewer-search-input>
					</div>
				</div>

				${this._canShowLogs ? s`<umb-log-viewer-messages-list></umb-log-viewer-messages-list>` : s`<umb-log-viewer-to-many-logs-warning id="to-many-logs-warning"></umb-log-viewer-to-many-logs-warning>`}
			</umb-body-layout>
		`;
  }
};
T = /* @__PURE__ */ new WeakMap();
D = /* @__PURE__ */ new WeakMap();
Y = /* @__PURE__ */ new WeakSet();
Fe = function() {
  A(this, D) && A(this, D).destroy(), A(this, T) && Qe(this, D, this.observe(A(this, T).canShowLogs, (e) => {
    this._canShowLogs = e ?? this._canShowLogs;
  }));
};
z.styles = [
  de,
  M`
			:host {
				margin-bottom: var(--uui-size-space-2);
			}

			uui-box {
				--uui-box-default-padding: 0;
			}

			#header {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-4);
				width: 100%;
			}

			#levels-container,
			#input-container {
				display: flex;
				align-items: center;
				gap: var(--uui-size-space-4);
				width: 100%;
			}

			#levels-container {
				justify-content: space-between;
			}

			#dates-polling-container {
				display: flex;
				align-items: baseline;
			}

			umb-log-viewer-search-input {
				flex: 1;
			}

			umb-log-viewer-date-range-selector {
				flex-direction: row;
			}
		`
];
Ae([
  u()
], z.prototype, "_canShowLogs", 2);
z = Ae([
  x("umb-log-viewer-search-view")
], z);
const Dt = z;
export {
  Dt as default
};
//# sourceMappingURL=index-DsSw7us4.js.map
