import { U as m } from "./manifests-FzOUH899.js";
import { UmbModalToken as u, UMB_MODAL_MANAGER_CONTEXT as c } from "@umbraco-cms/backoffice/modal";
import { UmbEntityActionEvent as E, UmbEntityActionBase as l, UmbRequestReloadStructureForEntityEvent as y } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as _ } from "@umbraco-cms/backoffice/action";
const p = new u(
  m,
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class t extends E {
  static {
    this.TYPE = "server-file-renamed";
  }
  constructor(n) {
    super(t.TYPE, n);
  }
  getNewUnique() {
    return this._args.newUnique;
  }
  getNewName() {
    return this._args.newName;
  }
}
class a extends l {
  async execute() {
    if (!this.args.unique) throw new Error("Unique is required to rename an entity");
    const s = (await this.getContext(c)).open(this, p, {
      data: {
        unique: this.args.unique,
        renameRepositoryAlias: this.args.meta.renameRepositoryAlias,
        itemRepositoryAlias: this.args.meta.itemRepositoryAlias
      }
    });
    try {
      const e = await s.onSubmit(), i = await this.getContext(_), r = new y({
        unique: this.args.unique,
        entityType: this.args.entityType
      });
      i.dispatchEvent(r);
      const o = new t({
        unique: this.args.unique,
        entityType: this.args.entityType,
        newName: e.name,
        newUnique: e.unique
      });
      i.dispatchEvent(o);
    } catch (e) {
      console.log(e);
    }
  }
}
const q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbRenameEntityAction: a,
  default: a
}, Symbol.toStringTag, { value: "Module" }));
export {
  t as U,
  a,
  p as b,
  q as r
};
//# sourceMappingURL=rename-server-file.action-CCHxvQKq.js.map
