import { q as w } from "./manifests-BUr6Ff2j.js";
import { UmbDocumentDetailRepository as U } from "./document-detail.repository-kH54fJDj.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import { UmbDocumentPublishingRepository as C } from "./document-publishing.repository-ypBwqj-c.js";
import { UmbLanguageCollectionRepository as E, UMB_APP_LANGUAGE_CONTEXT as T } from "@umbraco-cms/backoffice/language";
import { UmbEntityActionBase as q, UmbRequestReloadStructureForEntityEvent as y } from "@umbraco-cms/backoffice/entity-action";
import { UmbVariantId as u } from "@umbraco-cms/backoffice/variant";
import { UMB_MODAL_MANAGER_CONTEXT as _ } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as A } from "@umbraco-cms/backoffice/action";
import { UMB_CURRENT_USER_CONTEXT as b } from "@umbraco-cms/backoffice/current-user";
class H extends q {
  constructor(n, o) {
    super(n, o);
  }
  async execute() {
    if (!this.args.unique) throw new Error("The document unique identifier is missing");
    const n = new E(this._host), { data: o } = await n.requestCollection({}), h = new U(this._host), { data: a } = await h.requestByUnique(this.args.unique);
    if (!a) throw new Error("The document was not found");
    const e = (await this.getContext(T)).getAppCulture(), c = await this.getContext(b), l = c.getLanguages(), g = c.getHasAccessToAllLanguages();
    if (l === void 0) throw new Error("The current user languages are missing");
    if (g === void 0)
      throw new Error("The current user access to all languages is missing");
    const s = a.variants.map(
      (t) => ({
        culture: t.culture,
        segment: t.segment,
        language: o?.items.find((r) => r.unique === t.culture) ?? {
          name: e,
          entityType: "language",
          fallbackIsoCode: null,
          isDefault: !0,
          isMandatory: !1,
          unique: e
        },
        variant: t,
        unique: new u(t.culture, t.segment).toString()
      })
    ), i = [];
    e && s.some((t) => t.unique === e) ? i.push(new u(e, null).toString()) : i.push(s[0].unique);
    const m = await (await this.getContext(_)).open(this, w, {
      data: {
        documentUnique: this.args.unique,
        options: s,
        pickableFilter: (t) => t.culture ? g ? !0 : l.includes(t.culture) : !1
      },
      value: { selection: i }
    }).onSubmit().catch(() => {
    });
    if (!m?.selection.length) return;
    const p = m?.selection.map((t) => u.FromString(t)) ?? [];
    if (p.length) {
      const t = new C(this._host), { error: r } = await t.unpublish(this.args.unique, p);
      if (!r) {
        const f = await this.getContext(A), d = new y({
          unique: this.args.unique,
          entityType: this.args.entityType
        });
        f.dispatchEvent(d);
      }
    }
  }
}
export {
  H as UmbUnpublishDocumentEntityAction,
  H as default
};
//# sourceMappingURL=unpublish.action-DepdZ5Wz.js.map
