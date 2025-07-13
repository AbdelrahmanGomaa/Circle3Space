import { p as E } from "./language-access.workspace.context-token-ChA0uFUc.js";
import { UUIBooleanInputEvent as b } from "@umbraco-cms/backoffice/external/uui";
import { nothing as L, ifDefined as v, html as h, css as U, state as p, customElement as $ } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as _ } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as O } from "@umbraco-cms/backoffice/style";
import "@umbraco-cms/backoffice/culture";
var S = Object.defineProperty, N = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, g = (e, a, t, u) => {
  for (var i = u > 1 ? void 0 : u ? N(a, t) : a, c = e.length - 1, d; c >= 0; c--)
    (d = e[c]) && (i = (u ? d(a, t, i) : d(i)) || i);
  return u && i && S(a, t, i), i;
}, f = (e, a, t) => a.has(e) || y("Cannot " + t), l = (e, a, t) => (f(e, a, "read from private field"), t ? t.call(e) : a.get(e)), m = (e, a, t) => a.has(e) ? y("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(e) : a.set(e, t), q = (e, a, t, u) => (f(e, a, "write to private field"), a.set(e, t), t), r = (e, a, t) => (f(e, a, "access private method"), t), n, o, w, D, C, k;
let s = class extends x {
  constructor() {
    super(), m(this, o), this._isDefaultLanguage = !1, m(this, n);
    let e = !1;
    this.consumeContext(E, (a) => {
      q(this, n, a), this.observe(l(this, n).data, (t) => {
        this._language = t, e === !1 && (this._isDefaultLanguage = t?.isDefault ?? !1, e = !0);
      }), this.observe(l(this, n).isNew, (t) => {
        this._isNew = t;
      });
    });
  }
  render() {
    return h`
			<uui-box>
				<umb-property-layout label="Language">
					<div slot="editor">
						<!-- TODO: disable already created cultures in the select -->
						${this._isNew ? h` <umb-input-culture-select
									value=${v(this._language?.unique)}
									@change=${r(this, o, w)}></umb-input-culture-select>` : this._language?.name}
					</div>
				</umb-property-layout>

				<umb-property-layout label="ISO Code">
					<div slot="editor">${this._language?.unique}</div>
				</umb-property-layout>

				<umb-property-layout label="Settings">
					<div slot="editor">
						<uui-toggle
							label="Default language"
							?disabled=${this._isDefaultLanguage}
							?checked=${this._language?.isDefault || !1}
							@change=${r(this, o, D)}>
							<div>
								<b>Default language</b>
								<div>An Umbraco site can only have one default language set.</div>
							</div>
						</uui-toggle>
						<!-- 	TODO: we need a UUI component for this -->
						${this._language?.isDefault && this._language?.isDefault !== this._isDefaultLanguage ? h`<div id="default-language-warning">
									Switching default language may result in default content missing.
								</div>` : L}

						<hr />
						<uui-toggle
							label="Mandatory language"
							?checked=${this._language?.isMandatory || !1}
							@change=${r(this, o, C)}>
							<div>
								<b>Mandatory language</b>
								<div>Properties on this language have to be filled out before the node can be published.</div>
							</div>
						</uui-toggle>
					</div>
				</umb-property-layout>

				<umb-property-layout
					label="Fallback language"
					description="To allow multi-lingual content to fall back to another language if not present in the requested language, select it here.">
					<umb-input-language
						value=${v(this._language?.fallbackIsoCode === null ? void 0 : this._language?.fallbackIsoCode)}
						slot="editor"
						max="1"
						@change=${r(this, o, k)}
						.filter=${(e) => e.unique !== this._language?.unique}></umb-input-language>
				</umb-property-layout>
			</uui-box>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
w = function(e) {
  if (e instanceof _) {
    const a = e.target, t = a.value.toString(), u = a.selectedCultureName;
    if (!u)
      return;
    if (!t) {
      const i = () => a.value = this._language?.unique;
      a.addEventListener("close", i, { once: !0 }), a.addEventListener("blur", i, { once: !0 });
      return;
    }
    l(this, n)?.setCulture(t), this._isNew && u && l(this, n)?.setName(u);
  }
};
D = function(e) {
  if (e instanceof b) {
    const a = e.composedPath()[0];
    l(this, n)?.setDefault(a.checked);
  }
};
C = function(e) {
  if (e instanceof b) {
    const a = e.composedPath()[0];
    l(this, n)?.setMandatory(a.checked);
  }
};
k = function(e) {
  if (e instanceof _) {
    const t = e.target.selection?.[0];
    l(this, n)?.setFallbackCulture(t);
  }
};
s.styles = [
  O,
  U`
			:host {
				display: block;
				padding: var(--uui-size-space-6);
			}

			uui-combobox {
				width: 100%;
			}

			hr {
				border: none;
				border-bottom: 1px solid var(--uui-color-divider);
			}

			#default-language-warning {
				background-color: var(--uui-color-warning);
				color: var(--uui-color-warning-contrast);
				padding: var(--uui-size-space-4) var(--uui-size-space-5);
				border: 1px solid var(--uui-color-warning-standalone);
				margin-top: var(--uui-size-space-4);
				border-radius: var(--uui-border-radius);
			}

			.validation-message {
				color: var(--uui-color-danger);
			}
		`
];
g([
  p()
], s.prototype, "_language", 2);
g([
  p()
], s.prototype, "_isDefaultLanguage", 2);
g([
  p()
], s.prototype, "_isNew", 2);
s = g([
  $("umb-language-details-workspace-view")
], s);
const F = s;
export {
  s as UmbLanguageDetailsWorkspaceViewElement,
  F as default
};
//# sourceMappingURL=language-details-workspace-view.element-9QgyIcEJ.js.map
