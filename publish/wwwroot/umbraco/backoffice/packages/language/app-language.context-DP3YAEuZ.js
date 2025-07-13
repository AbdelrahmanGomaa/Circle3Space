import { UmbLanguageCollectionRepository as i } from "./language-collection.repository-didMva8o.js";
import { d as n } from "./language-access.workspace.context-token-ChA0uFUc.js";
import { UmbArrayState as u, UmbObjectState as r } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextBase as g } from "@umbraco-cms/backoffice/class-api";
import { UmbReadOnlyStateManager as o } from "@umbraco-cms/backoffice/utils";
import { UMB_CURRENT_USER_CONTEXT as h } from "@umbraco-cms/backoffice/current-user";
import { UMB_AUTH_CONTEXT as l } from "@umbraco-cms/backoffice/auth";
class y extends g {
  constructor(a) {
    super(a, n), this.#g = new Promise((e) => {
      this.#r = e;
    }), this.#e = new u([], (e) => e.unique), this.languages = this.#e.asObservable(), this.cultures = this.#e.asObservablePart((e) => e.map((t) => t.unique)), this.appDefaultLanguage = this.#e.asObservablePart(
      (e) => e.find((t) => t.isDefault)
    ), this.moreThanOneLanguage = this.#e.asObservablePart((e) => e.length > 1), this.#t = new r(void 0), this.appLanguage = this.#t.asObservable(), this.appLanguageCulture = this.#t.asObservablePart((e) => e?.unique), this.appLanguageReadOnlyState = new o(this), this.appMandatoryLanguages = this.#e.asObservablePart(
      (e) => e.filter((t) => t.isMandatory)
    ), this.#o = new i(this), this.#a = [], this.#s = !1, this.#i = "UMB_LANGUAGE_PERMISSION_", this.#n = "umb:appLanguage", this.consumeContext(l, (e) => {
      this.observe(e.isAuthorized, (t) => {
        t && this.#l();
      });
    }), this.consumeContext(h, (e) => {
      this.observe(e.languages, (t) => {
        this.#a = t || [], this.#u();
      }), this.observe(e.hasAccessToAllLanguages, (t) => {
        this.#s = t || !1, this.#u();
      });
    });
  }
  #r;
  #g;
  #e;
  async getCultures() {
    return (await this.observe(this.languages).asPromise()).map((a) => a.unique);
  }
  #t;
  async getMandatoryLanguages() {
    return await this.#g, this.#e.getValue().filter((a) => a.isMandatory);
  }
  #o;
  #a;
  #s;
  #i;
  #n;
  getAppCulture() {
    return this.#t.getValue()?.unique;
  }
  setLanguage(a) {
    const e = this.#t.getValue();
    e?.unique && this.appLanguageReadOnlyState.removeState(this.#i + e.unique);
    const t = this.#h(a);
    if (!t)
      throw new Error(`Language with unique ${a} not found`);
    this.#t.update(t), localStorage.setItem(this.#n, t?.unique), this.#u();
  }
  async #l() {
    const { data: a } = await this.#o.requestCollection({});
    a && (this.#e.setValue(a.items), this.#r(), this.#t.getValue() || this.#p());
  }
  #p() {
    const a = localStorage.getItem(this.#n);
    if (a) {
      const t = this.#h(a);
      if (t) {
        this.setLanguage(t.unique);
        return;
      }
    }
    const e = this.#e.getValue().find((t) => t.isDefault);
    e?.unique && this.setLanguage(e.unique);
  }
  #h(a) {
    return this.#e.getValue().find((e) => e.unique === a);
  }
  #u() {
    const a = this.#t.getValue();
    if (!a) {
      this.appLanguageReadOnlyState.clear();
      return;
    }
    const e = this.#i + a.unique;
    if (this.appLanguageReadOnlyState.removeState(e), this.#s)
      return;
    if (!this.#a.includes(a.unique)) {
      const s = {
        unique: e,
        message: "You do not have permission to edit to this culture"
      };
      this.appLanguageReadOnlyState.addState(s);
    }
  }
}
export {
  y as UmbAppLanguageContext,
  y as default
};
//# sourceMappingURL=app-language.context-DP3YAEuZ.js.map
