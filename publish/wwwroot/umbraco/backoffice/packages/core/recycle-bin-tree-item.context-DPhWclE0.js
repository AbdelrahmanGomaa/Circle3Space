import { UmbDefaultTreeItemContext as r } from "@umbraco-cms/backoffice/tree";
import { UMB_ACTION_EVENT_CONTEXT as n } from "@umbraco-cms/backoffice/action";
import { UmbEntityTrashedEvent as s } from "@umbraco-cms/backoffice/recycle-bin";
import { debounce as o } from "@umbraco-cms/backoffice/utils";
class h extends r {
  #t;
  constructor(e) {
    super(e), this.consumeContext(n, (t) => {
      this.#i(), this.#t = t, this.#t?.addEventListener(s.TYPE, this.#e);
    });
  }
  #s = o(() => this.loadChildren(), 100);
  #e = (e) => {
    const t = e.getEntityType();
    if (!t) throw new Error("Entity type is required");
    const i = this.getManifest()?.meta.supportedEntityTypes;
    if (!i)
      throw new Error("Entity types are missing from the manifest (manifest.meta.supportedEntityTypes).");
    i.includes(t) && this.#s();
  };
  #i = () => {
    this.#t?.removeEventListener(s.TYPE, this.#e);
  };
  destroy() {
    this.#i(), super.destroy();
  }
}
export {
  h as UmbRecycleBinTreeItemContext,
  h as api
};
//# sourceMappingURL=recycle-bin-tree-item.context-DPhWclE0.js.map
