import { DocumentVariantStateModel as w } from "@umbraco-cms/backoffice/external/backend-api";
import { i as g } from "./utils-DhnAT8B6.js";
import { U as H } from "./document-variant-language-picker.element-azTXCKTU.js";
import { when as m, html as o, repeat as G, ref as q, css as Y, state as f, customElement as j } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as J } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as K } from "@umbraco-cms/backoffice/style";
import { UmbSelectionManager as Q } from "@umbraco-cms/backoffice/utils";
import { UmbValidationContext as X, umbBindToValidation as D } from "@umbraco-cms/backoffice/validation";
var Z = Object.defineProperty, ee = Object.getOwnPropertyDescriptor, z = (e) => {
  throw TypeError(e);
}, h = (e, t, i, l) => {
  for (var n = l > 1 ? void 0 : l ? ee(t, i) : t, p = e.length - 1, b; p >= 0; p--)
    (b = e[p]) && (n = (l ? b(t, i, n) : b(n)) || n);
  return l && n && Z(t, i, n), n;
}, V = (e, t, i) => t.has(e) || z("Cannot " + i), u = (e, t, i) => (V(e, t, "read from private field"), i ? i.call(e) : t.get(e)), v = (e, t, i) => t.has(e) ? z("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), s = (e, t, i) => (V(e, t, "access private method"), i), r, d, _, a, k, T, U, $, x, M, E, P, C, A, B, O, N, F, W, S, I, L, y;
let c = class extends J {
  constructor() {
    super(), v(this, a), v(this, r, new Q(this)), this._options = [], this._selection = [], this._isAllSelected = !1, this._internalValues = [], v(this, d, new X(this)), v(this, _, (e) => g(e) ? !0 : !e.variant || e.variant.state === w.NOT_CREATED ? !1 : this.data?.pickableFilter ? this.data.pickableFilter(e) : !0), this.observe(
      u(this, r).selection,
      (e) => {
        if (!this._options && !e) return;
        this._selection.length = 0;
        for (const i of e) {
          const l = this._internalValues.find((n) => n.unique === i);
          l && this._selection.push(l);
        }
        this._isAllSelected = s(this, a, M).call(this);
        const t = this._options.filter(g);
        this._hasNotSelectedMandatory = t.some((i) => !e.includes(i.unique)), this.requestUpdate();
      },
      "_selection"
    );
  }
  firstUpdated() {
    this._internalValues = this.data?.prevalues ? [...this.data.prevalues] : [], s(this, a, k).call(this);
  }
  render() {
    return o`<uui-dialog-layout headline=${this.localize.term("general_scheduledPublishing")}>
			<p id="subtitle">
				${m(
      this._options.length > 1,
      () => o`
						<umb-localize key="content_languagesToSchedule">Which languages would you like to schedule?</umb-localize>
					`,
      () => o`
						<umb-localize key="content_schedulePublishHelp">
							Select the date and time to publish and/or unpublish the content item.
						</umb-localize>
					`
    )}
			</p>

			${s(this, a, E).call(this)}

			<div slot="actions">
				<uui-button label=${this.localize.term("general_close")} @click=${s(this, a, U)}></uui-button>
				<uui-button
					.state=${this._submitButtonState}
					label="${this.localize.term("buttons_schedulePublish")}"
					look="primary"
					color="positive"
					?disabled=${!this._selection.length || this._hasNotSelectedMandatory}
					@click=${s(this, a, T)}></uui-button>
			</div>
		</uui-dialog-layout> `;
  }
};
r = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
k = async function() {
  u(this, r).setMultiple(!0), u(this, r).setSelectable(!0), u(this, r).setAllowLimitation((i) => {
    const l = this._options.find((n) => n.unique === i);
    return l ? u(this, _).call(this, l) : !0;
  }), this._options = this.data?.options.filter(
    (i) => i.variant && i.variant.state === null || g(i) || i.variant?.state !== w.NOT_CREATED
  ) ?? [];
  let e = this.data?.activeVariants ?? [];
  const t = this._options.filter((i) => u(this, _).call(this, i));
  e = e.filter((i) => t.some((l) => l.unique === i)), u(this, r).setSelection(e);
};
T = async function() {
  this._submitButtonState = "waiting";
  try {
    await u(this, d).validate(), this._submitButtonState = "success", this.value = {
      selection: this._selection
    }, this.modalContext?.submit();
  } catch {
    this._submitButtonState = "failed";
  } finally {
    this._submitButtonState = void 0;
  }
};
U = function() {
  this.modalContext?.reject();
};
$ = function(e) {
  return this._selection.some((t) => t.unique === e);
};
x = function(e) {
  const t = this._options.map((n) => n.unique), i = u(this, r).getAllowLimitation(), l = t.filter((n) => i(n));
  e.target.checked ? u(this, r).setSelection(l) : u(this, r).setSelection([]);
};
M = function() {
  const e = this._options.map((l) => l.unique), t = u(this, r).getAllowLimitation(), i = e.filter((l) => t(l));
  return this._selection.length !== 0 && this._selection.length === i.length;
};
E = function() {
  return o`
			${m(
    this._options.length > 1,
    () => o`
					<uui-checkbox
						@change=${s(this, a, x)}
						label=${this.localize.term("general_selectAll")}
						.checked=${this._isAllSelected}></uui-checkbox>
				`
  )}
			${G(
    this._options,
    (e) => e.unique,
    (e) => s(this, a, P).call(this, e)
  )}
		`;
};
P = function(e) {
  const t = u(this, _).call(this, e), i = s(this, a, O).call(this, e.unique), l = s(this, a, N).call(this, e.unique), n = i !== e.variant?.scheduledPublishDate || l !== e.variant?.scheduledUnpublishDate;
  return o`
			<uui-menu-item
				?selectable=${t}
				?disabled=${!t}
				label=${e.variant?.name ?? e.language.name}
				@selected=${() => u(this, r).select(e.unique)}
				@deselected=${() => u(this, r).deselect(e.unique)}
				?selected=${s(this, a, $).call(this, e.unique)}>
				<uui-icon slot="icon" name="icon-globe"></uui-icon>
				${H.renderLabel(e)}
			</uui-menu-item>
			${m(s(this, a, $).call(this, e.unique), () => s(this, a, B).call(this, e, i, l))}
			${m(
    n,
    () => o`<p>
						${this.localize.term("content_scheduledPendingChanges", this.localize.term("buttons_schedulePublish"))}
					</p>`
  )}
		`;
};
C = function(e) {
  e && e.addValidator(
    "badInput",
    () => this.localize.term("speechBubbles_scheduleErrReleaseDate1"),
    () => {
      const t = e.value.toString();
      return t ? new Date(t) < /* @__PURE__ */ new Date() : !1;
    }
  );
};
A = function(e, t) {
  e && (e.addValidator(
    "badInput",
    () => this.localize.term("speechBubbles_scheduleErrExpireDate1"),
    () => {
      const i = e.value.toString();
      return i ? new Date(i) < /* @__PURE__ */ new Date() : !1;
    }
  ), e.addValidator(
    "customError",
    () => this.localize.term("speechBubbles_scheduleErrExpireDate2"),
    () => {
      const i = e.value.toString();
      if (!i) return !1;
      const l = this._internalValues.find((R) => R.unique === t);
      if (!l) return !1;
      const n = l.schedule?.publishTime;
      if (!n) return !1;
      const p = new Date(i), b = new Date(n);
      return p < b;
    }
  ));
};
B = function(e, t, i) {
  return o`
			<div class="publish-date">
				<uui-form-layout-item>
					<uui-label slot="label"><umb-localize key="content_releaseDate">Publish at</umb-localize></uui-label>
					<div>
						<umb-input-date
							${q((l) => s(this, a, C).call(this, l))}
							${D(this)}
							type="datetime-local"
							.value=${s(this, a, S).call(this, t)}
							@change=${(l) => s(this, a, I).call(this, l, e.unique)}
							label=${this.localize.term("general_publishDate")}>
							<div slot="append">
								${m(
    t,
    () => o`
										<uui-button
											compact
											label=${this.localize.term("general_clear")}
											title=${this.localize.term("general_clear")}
											@click=${() => s(this, a, F).call(this, e.unique)}>
											<uui-icon name="remove"></uui-icon>
										</uui-button>
									`
  )}
							</div>
						</umb-input-date>
					</div>
				</uui-form-layout-item>

				<uui-form-layout-item>
					<uui-label slot="label"><umb-localize key="content_unpublishDate">Unpublish at</umb-localize></uui-label>
					<div>
						<umb-input-date
							${q((l) => s(this, a, A).call(this, l, e.unique))}
							${D(this)}
							type="datetime-local"
							.value=${s(this, a, S).call(this, i)}
							@change=${(l) => s(this, a, L).call(this, l, e.unique)}
							label=${this.localize.term("general_publishDate")}>
							<div slot="append">
								${m(
    i,
    () => o`
										<uui-button
											compact
											label=${this.localize.term("general_clear")}
											title=${this.localize.term("general_clear")}
											@click=${() => s(this, a, W).call(this, e.unique)}>
											<uui-icon name="remove"></uui-icon>
										</uui-button>
									`
  )}
							</div>
						</umb-input-date>
					</div>
				</uui-form-layout-item>
			</div>
		`;
};
O = function(e) {
  return this._internalValues.find((i) => i.unique === e)?.schedule?.publishTime ?? null;
};
N = function(e) {
  return this._internalValues.find((i) => i.unique === e)?.schedule?.unpublishTime ?? null;
};
F = function(e) {
  const t = this._internalValues.find((i) => i.unique === e);
  t && (t.schedule = {
    ...t.schedule,
    publishTime: null
  }, u(this, d).validate(), this.requestUpdate("_internalValues"));
};
W = function(e) {
  const t = this._internalValues.find((i) => i.unique === e);
  t && (t.schedule = {
    ...t.schedule,
    unpublishTime: null
  }, u(this, d).validate(), this.requestUpdate("_internalValues"));
};
S = function(e) {
  if (!e) return "";
  const t = new Date(e);
  return isNaN(t.getTime()) ? (console.warn("[Schedule]: Invalid date:", e), "") : t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0") + "T" + String(t.getHours()).padStart(2, "0") + ":" + String(t.getMinutes()).padStart(2, "0");
};
I = function(e, t) {
  const i = this._internalValues.find((l) => l.unique === t);
  i && (i.schedule = {
    ...i.schedule,
    publishTime: s(this, a, y).call(this, e)
  }, u(this, d).validate(), this.requestUpdate("_internalValues"));
};
L = function(e, t) {
  const i = this._internalValues.find((l) => l.unique === t);
  i && (i.schedule = {
    ...i.schedule,
    unpublishTime: s(this, a, y).call(this, e)
  }, u(this, d).validate(), this.requestUpdate("_internalValues"));
};
y = function(e) {
  const t = e.target.value.toString();
  return t.length ? t : null;
};
c.styles = [
  K,
  Y`
			:host {
				display: block;
				min-width: 600px;
				max-width: 90vw;
			}

			.label {
				padding: 0.5rem 0;
			}
			.label-status {
				font-size: 0.8rem;
			}

			.publish-date {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				gap: 1rem;
				border-top: 1px solid var(--uui-color-border);
				border-bottom: 1px solid var(--uui-color-border);
				margin-top: var(--uui-size-space-4);
			}

			.publish-date > uui-form-layout-item {
				flex: 1;
				margin: 0;
				padding: 0.5rem 0 1rem;
			}

			.publish-date > uui-form-layout-item:first-child {
				border-right: 1px dashed var(--uui-color-border);
			}

			uui-checkbox {
				margin-bottom: var(--uui-size-space-3);
			}

			uui-menu-item {
				--uui-menu-item-flat-structure: 1;
			}
		`
];
h([
  f()
], c.prototype, "_options", 2);
h([
  f()
], c.prototype, "_hasNotSelectedMandatory", 2);
h([
  f()
], c.prototype, "_selection", 2);
h([
  f()
], c.prototype, "_isAllSelected", 2);
h([
  f()
], c.prototype, "_internalValues", 2);
h([
  f()
], c.prototype, "_submitButtonState", 2);
c = h([
  j("umb-document-schedule-modal")
], c);
const oe = c;
export {
  c as UmbDocumentScheduleModalElement,
  oe as default
};
//# sourceMappingURL=document-schedule-modal.element-UDZDC29Y.js.map
