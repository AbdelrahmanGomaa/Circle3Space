import { UMB_CURRENT_USER_CONTEXT as m } from "@umbraco-cms/backoffice/current-user";
import { UMB_ENTITY_CONTEXT as c, UMB_ANCESTORS_ENTITY_CONTEXT as f } from "@umbraco-cms/backoffice/entity";
import { observeMultiple as u } from "@umbraco-cms/backoffice/observable-api";
import { UmbControllerBase as l } from "@umbraco-cms/backoffice/class-api";
function a(r) {
  return r.$type === "DocumentPermissionPresentationModel";
}
class T extends l {
  constructor(n, i) {
    super(n), this.permitted = !1, this.#s = [], this.#e = [], this.#i = [], this.config = i.config, this.#h = i.onChange, this.consumeContext(m, (s) => {
      this.observe(
        s.currentUser,
        (e) => {
          this.#s = e?.permissions?.filter(a) || [], this.#e = e?.fallbackPermissions || [], this.#n();
        },
        "umbUserPermissionConditionObserver"
      );
    }), this.consumeContext(c, (s) => {
      s && this.observe(
        u([s.entityType, s.unique]),
        ([e, t]) => {
          this.#r = e, this.#t = t, this.#n();
        },
        "umbUserPermissionEntityContextObserver"
      );
    }), this.consumeContext(f, (s) => {
      this.observe(
        s?.ancestors,
        (e) => {
          this.#i = e.map((t) => t.unique), this.#n();
        },
        "observeAncestors"
      );
    });
  }
  #r;
  #t;
  #s;
  #e;
  #h;
  #i;
  #n() {
    if (!this.#r || this.#t === void 0) return;
    const n = this.#s.length > 0;
    if (!n) {
      this.#o(this.#e);
      return;
    }
    if (n) {
      const s = [...[...this.#i, this.#t].filter((o) => o !== null)].reverse(), e = new Map(this.#s.map((o) => [o.document.id, o])), t = s.find((o) => e.has(o)), h = t ? e.get(t) : void 0;
      if (!h) {
        this.#o(this.#e);
        return;
      }
      this.#o(h.verbs);
    }
  }
  #o(n) {
    let i = !0, s = !0;
    this.config.allOf?.length && (i = this.config.allOf.every((t) => n.includes(t))), this.config.oneOf?.length && (s = this.config.oneOf.some((t) => n.includes(t))), !i && !s && (i = !1, s = !1);
    const e = i && s;
    e !== this.permitted && (this.permitted = e, this.#h(e));
  }
}
export {
  T as UmbDocumentUserPermissionCondition,
  T as api
};
//# sourceMappingURL=document-user-permission.condition-DWZwv9EZ.js.map
