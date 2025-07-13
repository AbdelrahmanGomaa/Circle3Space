import { UmbUnpublishDocumentEntityAction as C } from "./unpublish.action-DepdZ5Wz.js";
import { d as g, q as y } from "./manifests-BUr6Ff2j.js";
import { UmbDocumentPublishingRepository as f } from "./document-publishing.repository-ypBwqj-c.js";
import { UMB_MODAL_MANAGER_CONTEXT as T, UMB_CONFIRM_MODAL as M } from "@umbraco-cms/backoffice/modal";
import { UmbEntityBulkActionBase as q } from "@umbraco-cms/backoffice/entity-bulk-action";
import { UmbLanguageCollectionRepository as D, UMB_APP_LANGUAGE_CONTEXT as N } from "@umbraco-cms/backoffice/language";
import { UmbVariantId as e } from "@umbraco-cms/backoffice/variant";
import { UmbLocalizationController as x } from "@umbraco-cms/backoffice/localization-api";
import { UMB_ENTITY_CONTEXT as A } from "@umbraco-cms/backoffice/entity";
import { UMB_ACTION_EVENT_CONTEXT as O } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as v } from "@umbraco-cms/backoffice/entity-action";
class j extends q {
  async execute() {
    const s = await this.getContext(A), a = s.getEntityType(), u = s.getUnique();
    if (!a) throw new Error("Entity type not found");
    if (u === void 0) throw new Error("Entity unique not found");
    if (this.selection.length === 1) {
      await new C(this._host, {
        unique: this.selection[0],
        entityType: g,
        meta: {}
      }).execute();
      return;
    }
    const _ = new D(this._host), { data: w } = await _.requestCollection({}), n = (w?.items ?? []).map((t) => ({
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
      unique: new e(t.unique, null).toString(),
      culture: t.unique,
      segment: null
    })), l = await this.getContext(T), r = await this.getContext(O), c = new v({
      entityType: a,
      unique: u
    });
    if (n.length === 1) {
      const t = new x(this._host);
      if (await l.open(this, M, {
        data: {
          headline: t.term("actions_unpublish"),
          content: t.term("prompt_confirmListViewUnpublish"),
          color: "warning",
          confirmLabel: t.term("actions_unpublish")
        }
      }).onSubmit().catch(() => !1) !== !1) {
        const U = new e(n[0].language.unique, null), d = new f(this._host);
        for (let o = 0; o < this.selection.length; o++) {
          const b = this.selection[o];
          await d.unpublish(b, [U]);
        }
        r.dispatchEvent(c);
      }
      return;
    }
    const m = [], i = (await this.getContext(N)).getAppCulture();
    i && n.some((t) => t.unique === i) && m.push(new e(i, null).toString());
    const h = await l.open(this, y, {
      data: {
        options: n
      },
      value: { selection: m }
    }).onSubmit().catch(() => {
    });
    if (!h?.selection.length) return;
    const p = h?.selection.map((t) => e.FromString(t)) ?? [], E = new f(this._host);
    if (p.length)
      for (const t of this.selection)
        await E.unpublish(t, p), r.dispatchEvent(c);
  }
}
export {
  j as UmbDocumentUnpublishEntityBulkAction,
  j as api
};
//# sourceMappingURL=unpublish.bulk-action-BqyLVAvi.js.map
