import { U as s } from "./entity-action-base-C1FfYSbT.js";
import { U as a } from "./constants-8D5bBcdE.js";
import { UMB_MODAL_MANAGER_CONTEXT as o } from "@umbraco-cms/backoffice/modal";
import { umbExtensionsRegistry as r } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsManifestInitializer as m, createExtensionApi as h } from "@umbraco-cms/backoffice/extension-api";
class w extends s {
  #t = !0;
  #i;
  #e;
  constructor(t, i) {
    super(t, i), this.#i = new Promise((e) => {
      new m(
        this,
        r,
        "entityCreateOptionAction",
        (n) => n.forEntityTypes.includes(this.args.entityType),
        async (n) => {
          this.#t = n.length === 1, this.#t && await this.#n(n), e();
        },
        "umbEntityActionsObserver"
      );
    });
  }
  async getHref() {
    await this.#i;
    const t = await this.#e?.getHref();
    return this.#t && t ? t : void 0;
  }
  async execute() {
    if (await this.#i, this.#t) {
      await this.#e?.execute();
      return;
    }
    await (await this.getContext(o)).open(this, a, {
      data: {
        unique: this.args.unique,
        entityType: this.args.entityType
      }
    }).onSubmit();
  }
  async #n(t) {
    const i = t[0].manifest;
    if (!i) throw new Error("No first action manifest found");
    const e = await h(this, i, [
      { unique: this.args.unique, entityType: this.args.entityType, meta: i.meta }
    ]);
    if (!e) throw new Error(`Could not create api for ${i.alias}`);
    this.#e = e;
  }
}
export {
  w as UmbCreateEntityAction,
  w as api
};
//# sourceMappingURL=create.action-CY79PM0S.js.map
