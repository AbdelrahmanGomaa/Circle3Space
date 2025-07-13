import { DynamicRootService as q } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as P } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as $ } from "@umbraco-cms/backoffice/class-api";
import { html as d, nothing as D, repeat as R, css as I, property as b, state as a, customElement as N } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as S } from "@umbraco-cms/backoffice/event";
import { umbConfirmModal as B } from "@umbraco-cms/backoffice/modal";
import { UmbLitElement as z } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as A } from "@umbraco-cms/backoffice/validation";
import { UMB_DOCUMENT_ENTITY_TYPE as x } from "@umbraco-cms/backoffice/document";
import { UMB_MEDIA_ENTITY_TYPE as O } from "@umbraco-cms/backoffice/media";
import { UMB_MEMBER_ENTITY_TYPE as W } from "@umbraco-cms/backoffice/member";
import "./input-content.element-BQOysvjO.js";
class Y {
  #t;
  constructor(t) {
    this.#t = t;
  }
  /**
   * Get dynamic root
   * @param {DynamicRootRequestModel} args
   * @returns {*}  {(Promise<DynamicRootResponseModel | undefined>)}
   * @memberof UmbContentPickerDynamicRootServerDataSource
   */
  async getRoot(t) {
    if (!t.context) throw new Error("Dynamic Root context is missing");
    if (!t.query) throw new Error("Dynamic Root query is missing");
    const i = {
      context: t.context,
      query: t.query
    }, { data: o } = await P(this.#t, q.postDynamicRootQuery({ requestBody: i }));
    return o;
  }
}
const V = "00000000-0000-0000-0000-000000000000";
class F extends $ {
  #t;
  constructor(t) {
    super(t), this.#t = new Y(t);
  }
  /**
   * Request dynamic root
   * @param {UmbContentPickerDynamicRoot} query
   * @param {string} entityUnique
   * @param {string} [parentUnique]
   * @returns {*}
   * @memberof UmbContentPickerDynamicRootRepository
   */
  async requestRoot(t, i, o) {
    const n = {
      context: {
        id: i,
        parent: { id: o ?? V }
      },
      query: {
        origin: {
          alias: t.originAlias,
          id: t.originKey
        },
        steps: t.querySteps?.map((u) => ({
          alias: u.alias,
          documentTypeIds: u.anyOfDocTypeKeys
        })) || []
      }
    };
    return (await this.#t.getRoot(n))?.roots;
  }
}
var G = Object.defineProperty, K = Object.getOwnPropertyDescriptor, U = (e) => {
  throw TypeError(e);
}, s = (e, t, i, o) => {
  for (var n = o > 1 ? void 0 : o ? K(t, i) : t, l = e.length - 1, u; l >= 0; l--)
    (u = e[l]) && (n = (o ? u(t, i, n) : u(n)) || n);
  return o && n && G(t, i, n), n;
}, g = (e, t, i) => t.has(e) || U("Cannot " + i), p = (e, t, i) => (g(e, t, "read from private field"), i ? i.call(e) : t.get(e)), h = (e, t, i) => t.has(e) ? U("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), w = (e, t, i, o) => (g(e, t, "write to private field"), t.set(e, i), i), m = (e, t, i) => (g(e, t, "access private method"), i), y, _, E, f, c, v, T, M, C, k;
let r = class extends A(z, void 0) {
  constructor() {
    super(...arguments), h(this, c), h(this, y, []), this.readonly = !1, this._type = "content", this._min = 0, this._minMessage = "", this._max = 1 / 0, this._maxMessage = "", h(this, _), h(this, E, new F(this)), h(this, f, {
      content: x,
      media: O,
      member: W
    });
  }
  set value(e) {
    w(this, y, e);
  }
  get value() {
    return p(this, y);
  }
  set config(e) {
    if (!e) return;
    const t = e.getValueByAlias("startNode");
    t && (this._type = t.type, this._rootUnique = t.id, this._rootEntityType = p(this, f)[t.type], w(this, _, t.dynamicRoot), this._invalidData = p(this, y)?.filter((i) => i.type !== this._rootEntityType), this._invalidData?.length && (this.readonly = !0)), this._min = m(this, c, v).call(this, e.getValueByAlias("minNumber"), 0), this._max = m(this, c, v).call(this, e.getValueByAlias("maxNumber"), 1 / 0), this._allowedContentTypeUniques = e.getValueByAlias("filter"), this._minMessage = `${this.localize.term("validation_minCount")} ${this._min} ${this.localize.term("validation_items")}`, this._maxMessage = `${this.localize.term("validation_maxCount")} ${this._max} ${this.localize.term("validation_itemsSelected")}`, (this._min > 0 || this._max < 1 / 0) && this.checkValidity();
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("umb-input-content")), m(this, c, T).call(this), this._min && this._max && this._min > this._max && console.warn(
      "Property (Content Picker) has been misconfigured, 'minNumber' is greater than 'maxNumber'. Please correct your data type configuration.",
      this
    );
  }
  focus() {
    return this.shadowRoot?.querySelector("umb-input-content")?.focus();
  }
  render() {
    const e = this._rootUnique && this._rootEntityType ? { unique: this._rootUnique, entityType: this._rootEntityType } : void 0;
    return d`
			<umb-input-content
				.selection=${this.value ?? []}
				.type=${this._type}
				.min=${this._min}
				.minMessage=${this._minMessage}
				.max=${this._max}
				.maxMessage=${this._maxMessage}
				.startNode=${e}
				.allowedContentTypeIds=${this._allowedContentTypeUniques ?? ""}
				?readonly=${this.readonly}
				@change=${m(this, c, M)}>
			</umb-input-content>
			${m(this, c, k).call(this)}
		`;
  }
};
y = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
v = function(e, t) {
  const i = Number(e);
  return !isNaN(i) && i > 0 ? i : t;
};
T = async function() {
  if (this._rootUnique || !p(this, _)) return;
  const e = await this.getContext("UmbMenuStructureWorkspaceContext"), t = await this.observe(e.structure, () => {
  })?.asPromise(), [i, o] = t?.slice(-2).map((l) => l.unique) ?? [];
  if (!o) return;
  const n = await p(this, E).requestRoot(p(this, _), o, i);
  n && n.length > 0 && (this._rootUnique = n[0]);
};
M = function(e) {
  this.value = e.target.selection, this.dispatchEvent(new S());
};
C = async function() {
  await B(this, {
    color: "danger",
    headline: "#contentPicker_unsupportedRemove",
    content: "#defaultdialogs_confirmSure",
    confirmLabel: "#actions_remove"
  }), this.value = this.value?.filter((e) => e.type === this._rootEntityType), this._invalidData = void 0, this.readonly = !1;
};
k = function() {
  if (!this._invalidData?.length) return D;
  const e = Object.groupBy(this._invalidData, (o) => o.type), t = Object.keys(e).sort((o, n) => o.localeCompare(n)).map((o) => ({ key: o, items: e[o] })), i = (o) => o === x ? "content" : o;
  return d`
			<div id="messages">
				${R(
    t,
    (o) => o.key,
    (o) => d`
						<p>
							<umb-localize key="contentPicker_unsupportedHeadline" .args=${[o.key]}>
								<strong>Unsupported ${o.key} items</strong><br />
								The following content is no longer supported in this Editor.
							</umb-localize>
						</p>
						<umb-input-content readonly .selection=${o.items} .type=${i(o.key)}></umb-input-content>
						<p>
							<umb-localize key="contentPicker_unsupportedMessage">
								If you still require this content, please contact your administrator. Otherwise you can remove it.
							</umb-localize>
						</p>
						<uui-button
							color="danger"
							look="outline"
							label=${this.localize.term("contentPicker_unsupportedRemove")}
							@click=${m(this, c, C)}></uui-button>
					`
  )}
			</div>
		`;
};
r.styles = [
  I`
			#messages {
				color: var(--uui-color-danger-standalone);
			}
		`
];
s([
  b({ type: Array })
], r.prototype, "value", 1);
s([
  b({ type: Boolean, reflect: !0 })
], r.prototype, "readonly", 2);
s([
  a()
], r.prototype, "_type", 2);
s([
  a()
], r.prototype, "_min", 2);
s([
  a()
], r.prototype, "_minMessage", 2);
s([
  a()
], r.prototype, "_max", 2);
s([
  a()
], r.prototype, "_maxMessage", 2);
s([
  a()
], r.prototype, "_allowedContentTypeUniques", 2);
s([
  a()
], r.prototype, "_rootUnique", 2);
s([
  a()
], r.prototype, "_rootEntityType", 2);
s([
  a()
], r.prototype, "_invalidData", 2);
r = s([
  N("umb-property-editor-ui-content-picker")
], r);
export {
  r as UmbPropertyEditorUIContentPickerElement,
  r as element
};
//# sourceMappingURL=property-editor-ui-content-picker.element-DKHbdvlz.js.map
