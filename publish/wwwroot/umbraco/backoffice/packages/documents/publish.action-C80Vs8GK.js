import { v as E } from "./manifests-BUr6Ff2j.js";
import { UmbDocumentDetailRepository as U } from "./document-detail.repository-kH54fJDj.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import { UmbDocumentPublishingRepository as b } from "./document-publishing.repository-ypBwqj-c.js";
import { UmbLanguageCollectionRepository as y, UMB_APP_LANGUAGE_CONTEXT as x } from "@umbraco-cms/backoffice/language";
import { UmbEntityActionBase as A, UmbRequestReloadStructureForEntityEvent as q } from "@umbraco-cms/backoffice/entity-action";
import { UmbVariantId as c } from "@umbraco-cms/backoffice/variant";
import { UMB_MODAL_MANAGER_CONTEXT as B } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as M } from "@umbraco-cms/backoffice/action";
import { UMB_CURRENT_USER_CONTEXT as N } from "@umbraco-cms/backoffice/current-user";
import { UMB_NOTIFICATION_CONTEXT as R } from "@umbraco-cms/backoffice/notification";
import { UmbLocalizationController as L } from "@umbraco-cms/backoffice/localization-api";
class W extends A {
  constructor(o, e) {
    super(o, e);
  }
  async execute() {
    if (!this.args.unique) throw new Error("The document unique identifier is missing");
    const o = await this.getContext(R), e = new L(this), w = new y(this._host), { data: T } = await w.requestCollection({}), _ = new U(this._host), { data: r } = await _.requestByUnique(this.args.unique);
    if (!r) throw new Error("The document was not found");
    const n = (await this.getContext(x)).getAppCulture(), g = await this.getContext(N), p = g.getLanguages(), h = g.getHasAccessToAllLanguages();
    if (p === void 0) throw new Error("The current user languages are missing");
    if (h === void 0)
      throw new Error("The current user access to all languages is missing");
    const a = r.variants.map(
      (t) => ({
        culture: t.culture,
        segment: t.segment,
        language: T?.items.find((i) => i.unique === t.culture) ?? {
          name: n,
          entityType: "language",
          fallbackIsoCode: null,
          isDefault: !0,
          isMandatory: !1,
          unique: n
        },
        variant: t,
        unique: new c(t.culture, t.segment).toString()
      })
    ), d = await this.getContext(M), f = new q({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    if (a.length === 1) {
      const t = c.Create(r.variants[0]), i = new b(this._host), { error: s } = await i.publish(this.args.unique, [{ variantId: t }]);
      s || o.peek("positive", {
        data: {
          headline: e.term("speechBubbles_editContentPublishedHeader"),
          message: e.term("speechBubbles_editContentPublishedText")
        }
      }), d.dispatchEvent(f);
      return;
    }
    const l = [];
    n && a.some((t) => t.unique === n) ? l.push(new c(n, null).toString()) : l.push(a[0].unique);
    const m = await (await this.getContext(B)).open(this, E, {
      data: {
        options: a,
        pickableFilter: (t) => t.culture ? h ? !0 : p.includes(t.culture) : !1
      },
      value: { selection: l }
    }).onSubmit().catch(() => {
    });
    if (!m?.selection.length) return;
    const C = m?.selection.map((t) => c.FromString(t)) ?? [];
    if (C.length) {
      const t = new b(this._host), { error: i } = await t.publish(
        this.args.unique,
        C.map((s) => ({ variantId: s }))
      );
      if (!i) {
        const s = r.variants.filter((u) => m.selection.includes(u.culture));
        o.peek("positive", {
          data: {
            headline: e.term("speechBubbles_editContentPublishedHeader"),
            message: e.term(
              "speechBubbles_editVariantPublishedText",
              e.list(s.map((u) => u.culture ?? u.name))
            )
          }
        });
      }
      d.dispatchEvent(f);
    }
  }
}
export {
  W as UmbPublishDocumentEntityAction,
  W as default
};
//# sourceMappingURL=publish.action-C80Vs8GK.js.map
