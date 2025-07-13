import { html as c, nothing as L, repeat as P, when as k, ifDefined as v, css as z, property as w, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { extractUmbColorVariable as V } from "@umbraco-cms/backoffice/resources";
import { simpleHashCode as D } from "@umbraco-cms/backoffice/observable-api";
import { UmbLitElement as N } from "@umbraco-cms/backoffice/lit-element";
import { UmbSorterController as q } from "@umbraco-cms/backoffice/sorter";
import { UmbChangeEvent as p } from "@umbraco-cms/backoffice/event";
import { UmbTextStyles as R } from "@umbraco-cms/backoffice/style";
import { UMB_MODAL_MANAGER_CONTEXT as T } from "@umbraco-cms/backoffice/modal";
import { UMB_ICON_PICKER_MODAL as W } from "@umbraco-cms/backoffice/icon";
var B = Object.defineProperty, G = Object.getOwnPropertyDescriptor, b = (t) => {
  throw TypeError(t);
}, y = (t, e, i, r) => {
  for (var a = r > 1 ? void 0 : r ? G(e, i) : e, l = t.length - 1, m; l >= 0; l--)
    (m = t[l]) && (a = (r ? m(e, i, a) : m(a)) || a);
  return r && a && B(e, i, a), a;
}, g = (t, e, i) => e.has(t) || b("Cannot " + i), f = (t, e, i) => (g(t, e, "read from private field"), i ? i.call(t) : e.get(t)), d = (t, e, i) => e.has(t) ? b("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), H = (t, e, i, r) => (g(t, e, "write to private field"), e.set(t, i), i), n = (t, e, i) => (g(t, e, "access private method"), i), _, u, o, C, E, $, U, x, M, h, O, S, I;
let s = class extends N {
  constructor() {
    super(...arguments), d(this, o), d(this, _, new q(this, {
      getUniqueOfElement: (t) => t.id,
      getUniqueOfModel: (t) => n(this, o, h).call(this, t),
      itemSelector: ".layout-item",
      containerSelector: "#layout-wrapper",
      onChange: ({ model: t }) => {
        this.value = t, this.dispatchEvent(new p());
      }
    })), d(this, u, []);
  }
  set value(t) {
    H(this, u, t ?? []), f(this, _).setModel(f(this, u));
  }
  get value() {
    return f(this, u);
  }
  render() {
    return c`
			<div id="layout-wrapper">${n(this, o, S).call(this)}</div>
			${n(this, o, O).call(this)}
		`;
  }
};
_ = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
C = async function() {
  await this.updateComplete, (this.shadowRoot?.querySelector(".layout-item:last-of-type > uui-input")).focus();
};
E = function(t) {
  const e = t.target.value;
  if (this.value?.find((r) => e?.value === r.collectionView))
    throw new Error("Duplicate `collectionView` aliases are not allowed.");
  this.value = [
    ...this.value ?? [],
    {
      icon: e?.icon,
      name: e?.label,
      collectionView: e?.value
    }
  ], this.dispatchEvent(new p()), n(this, o, C).call(this);
};
$ = function(t, e) {
  const i = [...this.value ?? []];
  i[e] = { ...i[e], name: t.target.value }, this.value = i, this.dispatchEvent(new p());
};
U = function(t) {
  const e = [...this.value ?? []];
  e.splice(t, 1), this.value = e, this.dispatchEvent(new p());
};
x = async function(t, e) {
  const a = await (await this.getContext(T)).open(this, W, { value: t })?.onSubmit();
  if (!a) return;
  const l = [...this.value ?? []];
  l[e] = { ...l[e], icon: `${a.icon} color-${a.color}` }, this.value = l, this.dispatchEvent(new p());
};
M = function(t) {
  const [e, i] = t?.split(" ") ?? [];
  return { icon: e, color: i?.replace("color-", "") };
};
h = function(t) {
  return "x" + D("" + t.collectionView + t.name + t.icon).toString(16);
};
O = function() {
  return c`<umb-input-manifest extension-type="collectionView" @change=${n(this, o, E)}></umb-input-manifest>`;
};
S = function() {
  return this.value ? P(
    this.value,
    (t) => n(this, o, h).call(this, t),
    (t, e) => n(this, o, I).call(this, t, e)
  ) : L;
};
I = function(t, e) {
  const i = n(this, o, M).call(this, t.icon), r = i.color ? V(i.color) : void 0;
  return c`
			<div class="layout-item" id=${n(this, o, h).call(this, t)}>
				<uui-icon class="drag-handle" name="icon-grip"></uui-icon>

				<uui-button compact look="outline" label="pick icon" @click=${() => n(this, o, x).call(this, i, e)}>
					${k(
    i.color,
    () => c`<uui-icon name=${v(i.icon)} style="color:var(${r})"></uui-icon>`,
    () => c`<uui-icon name=${v(i.icon)}></uui-icon>`
  )}
				</uui-button>

				<uui-input
					label="name"
					value=${v(t.name)}
					placeholder="Enter a label..."
					@change=${(a) => n(this, o, $).call(this, a, e)}></uui-input>

				<div class="alias">
					<code>${t.collectionView}</code>
				</div>

				<div class="actions">
					<uui-button
						label=${this.localize.term("general_remove")}
						look="secondary"
						@click=${() => n(this, o, U).call(this, e)}></uui-button>
				</div>
			</div>
		`;
};
s.styles = [
  R,
  z`
			#layout-wrapper {
				display: flex;
				flex-direction: column;
				gap: 1px;
				margin-bottom: var(--uui-size-1);
			}

			.layout-item {
				background-color: var(--uui-color-surface-alt);
				display: flex;
				align-items: center;
				gap: var(--uui-size-6);
				padding: var(--uui-size-3) var(--uui-size-6);
			}

			.layout-item > uui-icon {
				flex: 0 0 var(--uui-size-6);
			}

			.layout-item > uui-button {
				flex: 0 0 var(--uui-size-10);
			}

			.layout-item > uui-input,
			.layout-item > .alias {
				flex: 1;
			}

			.layout-item > .actions {
				flex: 0 0 auto;
				display: flex;
				justify-content: flex-end;
			}

			.drag-handle {
				cursor: grab;
			}

			.drag-handle:active {
				cursor: grabbing;
			}
		`
];
y([
  w({ type: Array })
], s.prototype, "value", 1);
y([
  w({ type: Object, attribute: !1 })
], s.prototype, "config", 2);
s = y([
  A("umb-property-editor-ui-collection-layout-configuration")
], s);
const et = s;
export {
  s as UmbPropertyEditorUICollectionLayoutConfigurationElement,
  et as default
};
//# sourceMappingURL=layout-configuration.element-XtavGQHR.js.map
