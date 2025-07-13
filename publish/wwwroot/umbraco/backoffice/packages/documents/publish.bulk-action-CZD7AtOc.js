import { UmbDocumentPublishingRepository as w } from "./document-publishing.repository-ypBwqj-c.js";
import { d as B, v as N } from "./manifests-BUr6Ff2j.js";
import { UmbPublishDocumentEntityAction as v } from "./publish.action-C80Vs8GK.js";
import { UmbEntityBulkActionBase as O } from "@umbraco-cms/backoffice/entity-bulk-action";
import { UmbLanguageCollectionRepository as A, UMB_APP_LANGUAGE_CONTEXT as D } from "@umbraco-cms/backoffice/language";
import { UmbVariantId as o } from "@umbraco-cms/backoffice/variant";
import { UMB_MODAL_MANAGER_CONTEXT as P, UMB_CONFIRM_MODAL as q } from "@umbraco-cms/backoffice/modal";
import { UmbLocalizationController as E } from "@umbraco-cms/backoffice/localization-api";
import { UMB_ENTITY_CONTEXT as I } from "@umbraco-cms/backoffice/entity";
import { UMB_ACTION_EVENT_CONTEXT as L } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as R } from "@umbraco-cms/backoffice/entity-action";
import { UMB_NOTIFICATION_CONTEXT as S } from "@umbraco-cms/backoffice/notification";
class $ extends O {
  async execute() {
    const c = await this.getContext(I), m = c.getEntityType(), h = c.getUnique(), p = await this.getContext(S), e = new E(this);
    if (!m) throw new Error("Entity type not found");
    if (h === void 0) throw new Error("Entity unique not found");
    if (this.selection.length === 1) {
      await new v(this._host, {
        unique: this.selection[0],
        entityType: B,
        meta: {}
      }).execute();
      return;
    }
    const g = new A(this._host), { data: U } = await g.requestCollection({}), n = (U?.items ?? []).map((t) => ({
      language: t,
      variant: {
        name: t.name,
        culture: t.unique,
        state: null,
        createDate: null,
        publishDate: null,
        updateDate: null,
        segment: null,
        scheduledPublishDate: null,
        scheduledUnpublishDate: null
      },
      unique: new o(t.unique, null).toString(),
      culture: t.unique,
      segment: null
    })), d = await this.getContext(P), b = await this.getContext(L), f = new R({
      entityType: m,
      unique: h
    });
    if (n.length === 1) {
      const t = new E(this._host);
      if (await d.open(this, q, {
        data: {
          headline: t.term("content_readyToPublish"),
          content: t.term("prompt_confirmListViewPublish"),
          color: "positive",
          confirmLabel: t.term("actions_publish")
        }
      }).onSubmit().catch(() => !1) !== !1) {
        const l = new o(n[0].language.unique, null), r = new w(this._host);
        let T = 0;
        for (let u = 0; u < this.selection.length; u++) {
          const M = this.selection[u], { error: x } = await r.publish(M, [{ variantId: l }]);
          x || T++;
        }
        p.peek("positive", {
          data: {
            headline: e.term("speechBubbles_editContentPublishedHeader"),
            message: e.term("speechBubbles_editMultiContentPublishedText", T)
          }
        }), b.dispatchEvent(f);
      }
      return;
    }
    const _ = [], s = (await this.getContext(D)).getAppCulture();
    s && n.some((t) => t.unique === s) && _.push(new o(s, null).toString());
    const C = await d.open(this, N, {
      data: {
        options: n
      },
      value: { selection: _ }
    }).onSubmit().catch(() => {
    });
    if (!C?.selection.length) return;
    const a = C?.selection.map((t) => o.FromString(t)) ?? [], y = new w(this._host);
    if (a.length) {
      let t = 0;
      for (const i of this.selection) {
        const { error: l } = await y.publish(
          i,
          a.map((r) => ({ variantId: r }))
        );
        l || t++;
      }
      p.peek("positive", {
        data: {
          headline: e.term("speechBubbles_editContentPublishedHeader"),
          message: e.term(
            "speechBubbles_editMultiVariantPublishedText",
            t,
            e.list(a.map((i) => i.culture ?? ""))
          )
        }
      }), b.dispatchEvent(f);
    }
  }
}
export {
  $ as UmbDocumentPublishEntityBulkAction,
  $ as api
};
//# sourceMappingURL=publish.bulk-action-CZD7AtOc.js.map
