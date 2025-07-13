import { UMB_ACTION_EVENT_CONTEXT as n } from "@umbraco-cms/backoffice/action";
import { UmbEntityActionBase as o, UmbRequestReloadChildrenOfEntityEvent as d, UmbRequestReloadStructureForEntityEvent as l } from "@umbraco-cms/backoffice/entity-action";
import { UmbModalToken as s, UMB_MODAL_MANAGER_CONTEXT as m, umbConfirmModal as u } from "@umbraco-cms/backoffice/modal";
import { UmbExtensionApiInitializer as c } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as h } from "@umbraco-cms/backoffice/extension-registry";
const p = new s(
  "Umb.Modal.Folder.Create",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), y = new s(
  "Umb.Modal.Folder.Update",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class f extends o {
  async execute() {
    await (await this.getContext(m)).open(this, p, {
      data: {
        folderRepositoryAlias: this.args.meta.folderRepositoryAlias,
        parent: {
          unique: this.args.unique,
          entityType: this.args.entityType
        }
      }
    }).onSubmit();
    const t = await this.getContext(n), a = new d({
      entityType: this.args.entityType,
      unique: this.args.unique
    });
    t.dispatchEvent(a);
  }
}
class C extends o {
  // TODO: make base type for item and detail models
  #t;
  #e;
  constructor(e, i) {
    super(e, i), this.#e = Promise.all([
      new c(
        this._host,
        h,
        this.args.meta.folderRepositoryAlias,
        [this._host],
        (t, a) => {
          this.#t = t ? a.api : void 0;
        }
      ).asPromise()
    ]);
  }
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    await this.#e;
    const { data: e } = await this.#t.requestByUnique(this.args.unique);
    if (e) {
      await u(this._host, {
        headline: `Delete ${e.name}`,
        content: "Are you sure you want to delete this folder?",
        color: "danger",
        confirmLabel: "Delete"
      }), await this.#t?.delete(this.args.unique);
      const i = await this.getContext(n), t = new l({
        unique: this.args.unique,
        entityType: this.args.entityType
      });
      i.dispatchEvent(t);
    }
  }
}
class w extends o {
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    await (await this.getContext(m)).open(this, y, {
      data: {
        folderRepositoryAlias: this.args.meta.folderRepositoryAlias,
        unique: this.args.unique
      }
    }).onSubmit();
    const t = await this.getContext(n), a = new l({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    t.dispatchEvent(a);
  }
}
const E = {
  type: "kind",
  alias: "Umb.Kind.TreeItem.Default",
  matchKind: "default",
  matchType: "treeItem",
  manifest: {
    type: "treeItem",
    api: () => import("./tree-item-default.context-DVlaPjgc.js"),
    element: () => import("./tree-item-default.element-CBRidqkk.js")
  }
}, x = [E], _ = "Umb.Modal.DuplicateTo", D = new s(
  _,
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), U = "Umb.Modal.SortChildrenOf", q = new s(
  U,
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
export {
  D as U,
  q as a,
  _ as b,
  U as c,
  p as d,
  y as e,
  f,
  C as g,
  w as h,
  E as i,
  x as m
};
//# sourceMappingURL=sort-children-of-modal.token-YzqcKId4.js.map
