import { UmbActionBase as d, UMB_ACTION_EVENT_CONTEXT as h } from "@umbraco-cms/backoffice/action";
import { createExtensionApiByAlias as c } from "@umbraco-cms/backoffice/extension-registry";
import { umbConfirmModal as f } from "@umbraco-cms/backoffice/modal";
import { UmbRequestReloadChildrenOfEntityEvent as p, UmbRequestReloadStructureForEntityEvent as y, UmbEntityDeletedEvent as g } from "@umbraco-cms/backoffice/entity-action";
import { UMB_NOTIFICATION_CONTEXT as E } from "@umbraco-cms/backoffice/notification";
import { UmbLocalizationController as w } from "@umbraco-cms/backoffice/localization-api";
import { UMB_ENTITY_CONTEXT as _ } from "@umbraco-cms/backoffice/entity";
class C extends d {
  constructor() {
    super(...arguments), this.selection = [];
  }
}
class l extends C {
  constructor() {
    super(...arguments), this.#t = new w(this), this._items = [];
  }
  #t;
  async execute() {
    if (this.selection?.length === 0)
      throw new Error("No items selected.");
    await this.#e(), await this._confirmDelete(this._items), await this.#i(this.selection);
  }
  async _confirmDelete(n) {
    await f(this._host, {
      headline: "#actions_delete",
      content: this.#t.string("#defaultdialogs_confirmBulkDelete", n.length),
      color: "danger",
      confirmLabel: "#actions_delete"
    });
  }
  async #e() {
    const n = await c(
      this,
      this.args.meta.itemRepositoryAlias
    ), { data: e } = await n.requestItems(this.selection);
    this._items = e ?? [];
  }
  async #i(n) {
    const e = await c(
      this,
      this.args.meta.detailRepositoryAlias
    ), i = await this.getContext(E), s = [];
    for (const o of n) {
      const { error: a } = await e.delete(o);
      if (a) {
        const t = { data: { message: a.message } };
        i?.peek("danger", t);
      } else
        s.push(o);
    }
    if (s.length > 0) {
      const o = {
        data: { message: `Deleted ${s.length} ${s.length === 1 ? "item" : "items"}` }
      };
      i?.peek("positive", o);
    }
    await this.#s(s);
  }
  async #s(n) {
    const e = await this.getContext(_);
    if (!e) throw new Error("Entity Context is not available");
    const i = await this.getContext(h);
    if (!i) throw new Error("Event Context is not available");
    const s = e.getEntityType(), o = e.getUnique();
    if (s && o !== void 0) {
      const t = { entityType: s, unique: o }, r = new p(t);
      i.dispatchEvent(r);
      const u = new y(t);
      i.dispatchEvent(u);
    }
    this._items.filter((t) => n.includes(t.unique)).forEach((t) => {
      const r = new g({
        unique: t.unique,
        entityType: t.entityType
      });
      i.dispatchEvent(r);
    });
  }
}
const A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbDeleteEntityBulkAction: l,
  api: l
}, Symbol.toStringTag, { value: "Module" }));
export {
  C as U,
  l as a,
  A as b
};
//# sourceMappingURL=bulk-delete.action-wZYSm2uv.js.map
