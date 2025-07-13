import { e as i } from "./language-access.workspace.context-token-ChA0uFUc.js";
import { UmbContextBase as n } from "@umbraco-cms/backoffice/class-api";
import { UMB_CURRENT_USER_CONTEXT as u } from "@umbraco-cms/backoffice/current-user";
import { UmbVariantId as c } from "@umbraco-cms/backoffice/variant";
import { UMB_CONTENT_WORKSPACE_CONTEXT as l } from "@umbraco-cms/backoffice/content";
class C extends n {
  #e;
  #r;
  #a;
  #s;
  constructor(r) {
    super(r, i), this.consumeContext(l, (t) => {
      this.#e = t, this.observe(t.variantOptions, (s) => {
        this.#s = s, this.#t();
      });
    }), this.consumeContext(u, (t) => {
      this.observe(t.languages, (s) => {
        this.#r = s, this.#t();
      }), this.observe(t.hasAccessToAllLanguages, (s) => {
        this.#a = s, this.#t();
      });
    });
  }
  async #t() {
    if (!this.#e) return;
    const t = this.#s?.filter((e) => this.#a || !e.culture ? !1 : !this.#r?.includes(e.culture))?.map((e) => new c(e.culture, e.segment)) || [], s = "UMB_LANGUAGE_PERMISSION_", a = t.map((e) => ({
      unique: s + e.culture,
      variantId: e,
      message: "You do not have permission to edit to this culture"
    })), o = this.#s?.map((e) => s + e.culture) || [];
    this.#e.readOnlyState?.removeStates(o), this.#e.readOnlyState?.addStates(a);
  }
}
export {
  C as UmbLanguageAccessWorkspaceContext,
  C as api
};
//# sourceMappingURL=language-access.workspace.context-DmoJPkKk.js.map
