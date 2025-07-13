import { g as r } from "./manifests-BUr6Ff2j.js";
import { UmbVariantId as o } from "@umbraco-cms/backoffice/variant";
import { UmbSubmitWorkspaceAction as i } from "@umbraco-cms/backoffice/workspace";
class v extends i {
  #t = [];
  #e = [];
  constructor(t, e) {
    super(t, { workspaceContextToken: r, ...e });
  }
  async hasAdditionalOptions() {
    return await this._retrieveWorkspaceContext, (await this.observe(this._workspaceContext.variantOptions).asPromise())?.length > 1;
  }
  _gotWorkspaceContext() {
    super._gotWorkspaceContext(), this.#a(), this.#r();
  }
  #a() {
    this.observe(
      this._workspaceContext?.variants,
      (t) => {
        this.#t = t ?? [], this.#s();
      },
      "saveWorkspaceActionVariantsObserver"
    );
  }
  #r() {
    this.observe(
      this._workspaceContext?.readOnlyState.states,
      (t) => {
        this.#e = t ?? [], this.#s();
      },
      "saveWorkspaceActionReadOnlyStatesObserver"
    );
  }
  #s() {
    return this.#t.every((e) => {
      const s = new o(e.culture, e.segment);
      return this.#e.some((a) => a.variantId.equal(s));
    }) ? this.disable() : this.enable();
  }
}
export {
  v as UmbDocumentSaveWorkspaceAction,
  v as api
};
//# sourceMappingURL=save.action-DpJUrBSC.js.map
