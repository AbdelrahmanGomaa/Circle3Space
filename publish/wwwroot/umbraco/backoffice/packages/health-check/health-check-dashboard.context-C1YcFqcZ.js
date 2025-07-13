import { UmbControllerBase as h, UmbContextBase as n } from "@umbraco-cms/backoffice/class-api";
import { HealthCheckService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as o } from "@umbraco-cms/backoffice/resources";
import { UmbBasicState as r } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextToken as l } from "@umbraco-cms/backoffice/context-api";
import { loadManifestApi as p } from "@umbraco-cms/backoffice/extension-api";
class s extends h {
  constructor() {
    super(...arguments), this.#t = new r(void 0), this.checks = this.#t.asObservable(), this.#e = new r(void 0), this.results = this.#e.asObservable();
  }
  #t;
  #e;
  async getGroupChecks(t) {
    const { data: e } = await o(this, i.getHealthCheckGroupByName({ name: t }));
    e ? this.#t.setValue(e) : this.#t.setValue(void 0);
  }
  async checkGroup(t) {
    const { data: e } = await o(this, i.postHealthCheckGroupByNameCheck({ name: t }));
    e ? this.#e.setValue(e) : this.#e.setValue(void 0);
  }
  static isInstanceLike(t) {
    return typeof t == "object" && t.results !== void 0;
  }
}
const y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbHealthCheckContext: s,
  default: s
}, Symbol.toStringTag, { value: "Module" }));
class x extends n {
  constructor(t) {
    super(t, u), this.#t = [], this.apis = /* @__PURE__ */ new Map();
  }
  #t;
  set manifests(t) {
    this.#t = t, this.#e();
  }
  get manifests() {
    return this.#t;
  }
  async checkAll() {
    for (const [t, e] of this.apis.entries())
      await e?.checkGroup?.(t);
  }
  #e() {
    this.apis.clear(), this.#t.forEach(async (t) => {
      if (!t.api) return;
      const e = await p(t.api);
      if (!e) return;
      const a = new e(this);
      e && s.isInstanceLike(a) && this.apis.set(t.meta.label, a);
    });
  }
}
const u = new l(
  "UmbHealthCheckDashboardContext"
);
export {
  u as U,
  x as a,
  y as h
};
//# sourceMappingURL=health-check-dashboard.context-C1YcFqcZ.js.map
