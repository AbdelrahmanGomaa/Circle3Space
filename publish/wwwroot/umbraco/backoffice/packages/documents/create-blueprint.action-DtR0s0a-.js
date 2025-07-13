import { tryExecuteAndNotify as n } from "@umbraco-cms/backoffice/resources";
import { DocumentBlueprintService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbControllerBase as s } from "@umbraco-cms/backoffice/class-api";
import { UMB_NOTIFICATION_CONTEXT as c } from "@umbraco-cms/backoffice/notification";
import { D as u } from "./manifests-BUr6Ff2j.js";
import { UmbEntityActionBase as m } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as p } from "@umbraco-cms/backoffice/modal";
class h {
  #t;
  /**
   * Creates an instance of UmbDocumentCreateBlueprintServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentCreateBlueprintServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Fetches the Culture and Hostnames for the given Document unique
   * @param {string} unique
   * @param requestBody
   * @memberof UmbDocumentCreateBlueprintServerDataSource
   */
  async create(t) {
    return n(this.#t, a.postDocumentBlueprintFromDocument({ requestBody: t }));
  }
}
class d extends s {
  #t = new h(this);
  #e;
  constructor(t) {
    super(t), this.consumeContext(c, (e) => {
      this.#e = e;
    });
  }
  async create(t) {
    const { data: e, error: r } = await this.#t.create(t);
    if (!r) {
      const o = { data: { message: "Document Blueprint created" } };
      return this.#e.peek("positive", o), { data: e };
    }
    return { error: r };
  }
}
class x extends m {
  #t = new d(this);
  constructor(t, e) {
    super(t, e);
  }
  async execute() {
    if (!this.args.unique) throw new Error("Unique is required");
    const e = (await this.getContext(p)).open(this, u, {
      data: { unique: this.args.unique }
    });
    await e.onSubmit().catch(() => {
    });
    const { name: r, parent: o } = e.getValue();
    r && await this.#t.create({ name: r, parent: o, document: { id: this.args.unique } });
  }
}
export {
  x as UmbCreateDocumentBlueprintEntityAction,
  x as default
};
//# sourceMappingURL=create-blueprint.action-DtR0s0a-.js.map
