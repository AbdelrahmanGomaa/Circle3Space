import { html as u, css as I, state as _, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as $ } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as D, UMB_MODAL_MANAGER_CONTEXT as k } from "@umbraco-cms/backoffice/modal";
import { createExtensionApiByAlias as v } from "@umbraco-cms/backoffice/extension-registry";
var B = Object.defineProperty, O = Object.getOwnPropertyDescriptor, b = (t) => {
  throw TypeError(t);
}, c = (t, e, i, o) => {
  for (var s = o > 1 ? void 0 : o ? O(e, i) : e, h = t.length - 1, d; h >= 0; h--)
    (d = t[h]) && (s = (o ? d(e, i, s) : d(s)) || s);
  return o && s && B(e, i, s), s;
}, w = (t, e, i) => e.has(t) || b("Cannot " + i), m = (t, e, i) => (w(t, e, "read from private field"), i ? i.call(t) : e.get(t)), y = (t, e, i) => e.has(t) ? b("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), S = (t, e, i, o) => (w(t, e, "write to private field"), e.set(t, i), i), a = (t, e, i) => (w(t, e, "access private method"), i), l, n, R, p, q, C, f, E, A;
const T = "umb-restore-from-recycle-bin-modal";
let r = class extends D {
  constructor() {
    super(...arguments), y(this, n), this._isAutomaticRestore = !1, y(this, l);
  }
  async firstUpdated(t) {
    if (super.firstUpdated(t), !this.data?.unique) throw new Error("Cannot restore an item without a unique identifier.");
    this._restoreItem = await a(this, n, p).call(this, this.data.unique);
    const e = await a(this, n, R).call(this);
    e !== void 0 && (this.setDestination(e), this._isAutomaticRestore = !0);
  }
  async setDestination(t) {
    if (t === null && (this._destinationItem = {
      name: "ROOT"
    }, a(this, n, f).call(this, {
      unique: null,
      entityType: "unknown"
    })), t) {
      if (this._destinationItem = await a(this, n, p).call(this, t), !this._destinationItem) throw new Error("Cant find destination item.");
      a(this, n, f).call(this, {
        unique: this._destinationItem.unique,
        entityType: this._destinationItem.entityType
      });
    }
  }
  render() {
    return u`
			<umb-body-layout headline="Restore">
				<uui-box>
					${this._isAutomaticRestore ? u` Restore ${this._restoreItem?.name} to ${this._destinationItem?.name}` : a(this, n, E).call(this)}
				</uui-box>
				${a(this, n, A).call(this)}
			</umb-body-layout>
		`;
  }
};
l = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
R = async function() {
  if (!this.data?.unique) throw new Error("Cannot restore an item without a unique identifier.");
  if (!this.data?.recycleBinRepositoryAlias)
    throw new Error("Cannot restore an item without a recycle bin repository alias.");
  S(this, l, await v(
    this,
    this.data.recycleBinRepositoryAlias
  ));
  const { data: t } = await m(this, l).requestOriginalParent({
    unique: this.data.unique
  });
  if (t !== void 0)
    return t ? t.unique : null;
};
p = async function(t) {
  if (!this.data?.itemRepositoryAlias) throw new Error("Cannot restore an item without an item repository alias.");
  const e = await v(this, this.data.itemRepositoryAlias), { data: i } = await e.requestItems([t]);
  return i?.[0];
};
q = async function() {
  if (!this.data?.pickerModal) throw new Error("Cannot select a destination without a picker modal.");
  const e = (await this.getContext(k)).open(this, this.data.pickerModal, {
    data: {
      multiple: !1
    }
  }), { selection: i } = await e.onSubmit();
  if (i.length > 0) {
    const o = i[0];
    this.setDestination(o);
  }
};
C = async function() {
  if (!this.value.destination) throw new Error("Cannot restore an item without a destination.");
  if (!m(this, l)) throw new Error("Cannot restore an item without a destination.");
  if (!this.data?.unique) throw new Error("Cannot restore an item without a unique identifier.");
  const { error: t } = await m(this, l).requestRestore({
    unique: this.data.unique,
    destination: { unique: this.value.destination.unique }
  });
  t || this._submitModal();
};
f = function(t) {
  this.updateValue({ destination: t });
};
E = function() {
  return u`
			<h4>Cannot automatically restore this item.</h4>
			<p>There is no location where this item can be automatically restored. You can select a new location below.</p>
			<h5>Restore to:</h5>
			${this._destinationItem ? u`<uui-ref-node name=${this._destinationItem.name}>
						<uui-action-bar slot="actions">
							<uui-button @click=${() => this._destinationItem = void 0} label="Remove"
								>${this.localize.term("general_remove")}</uui-button
							>
						</uui-action-bar>
					</uui-ref-node>` : u` <uui-button id="placeholder" look="placeholder" @click=${a(this, n, q)}
						>Select location</uui-button
					>`}
		`;
};
A = function() {
  return u`
			<uui-button slot="actions" id="cancel" label="Cancel" @click="${this._rejectModal}"></uui-button>
			<uui-button slot="actions" color="positive" look="primary" label="Restore" @click=${a(this, n, C)}></uui-button>
		`;
};
r.styles = [
  $,
  I`
			#placeholder {
				width: 100%;
			}
		`
];
c([
  _()
], r.prototype, "_isAutomaticRestore", 2);
c([
  _()
], r.prototype, "_restoreItem", 2);
c([
  _()
], r.prototype, "_destinationItem", 2);
r = c([
  M(T)
], r);
const F = r;
export {
  r as UmbRestoreFromRecycleBinModalElement,
  F as default
};
//# sourceMappingURL=restore-from-recycle-bin-modal.element-UlsZVqnD.js.map
