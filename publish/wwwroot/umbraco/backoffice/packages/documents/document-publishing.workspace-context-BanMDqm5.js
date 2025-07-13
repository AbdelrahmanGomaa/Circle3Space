import { i as f, g as C, B as v, C as E, v as D } from "./manifests-BUr6Ff2j.js";
import { UmbDocumentPublishingRepository as y } from "./document-publishing.repository-ypBwqj-c.js";
import { UmbVariantId as c } from "@umbraco-cms/backoffice/variant";
import { UmbControllerBase as U, UmbContextBase as P } from "@umbraco-cms/backoffice/class-api";
import { UmbMergeContentVariantDataController as S } from "@umbraco-cms/backoffice/content";
import { UmbArrayState as T, jsonStringComparison as x, observeMultiple as O } from "@umbraco-cms/backoffice/observable-api";
import { UmbUnpublishDocumentEntityAction as _ } from "./unpublish.action-DepdZ5Wz.js";
import { UMB_MODAL_MANAGER_CONTEXT as l } from "@umbraco-cms/backoffice/modal";
import { UmbRequestReloadStructureForEntityEvent as m, UmbRequestReloadChildrenOfEntityEvent as M } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as V } from "@umbraco-cms/backoffice/action";
import { UMB_NOTIFICATION_CONTEXT as d } from "@umbraco-cms/backoffice/notification";
import { firstValueFrom as q } from "@umbraco-cms/backoffice/external/rxjs";
import { DocumentVariantStateModel as w } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbLocalizationController as N } from "@umbraco-cms/backoffice/localization-api";
class k extends U {
  constructor() {
    super(...arguments), this.#e = new T([], (t) => t.variantId.toString()), this.variantsWithChanges = this.#e.asObservable(), this.#t = (t) => {
      delete t.updateDate;
    };
  }
  #e;
  /**
   * Checks each variant if there are any pending changes to publish.
   * @param {UmbDocumentPublishedPendingChangesManagerProcessArgs} args - The arguments for the process.
   * @param {UmbDocumentDetailModel} args.persistedData - The persisted document data.
   * @param {UmbDocumentDetailModel} args.publishedData - The published document data.
   * @returns {Promise<void>}
   * @memberof UmbDocumentPublishedPendingChangesManager
   */
  async process(t) {
    if (!t.persistedData) throw new Error("Persisted data is missing");
    if (!t.publishedData) throw new Error("Published data is missing");
    if (t.persistedData.unique !== t.publishedData.unique)
      throw new Error("Persisted and published data does not have the same unique");
    const i = (t.persistedData.variants?.map((a) => c.Create(a)) ?? []).map(async (a) => {
      const h = await new S(this).process(
        t.publishedData,
        t.persistedData,
        [a],
        [a]
      ), r = structuredClone(h), o = structuredClone(t.publishedData);
      return r.variants.forEach((n) => this.#t(n)), o.variants.forEach((n) => this.#t(n)), r.template = null, o.template = null, x(r, o) === !1 ? { variantId: a } : null;
    }), s = (await Promise.all(i)).filter((a) => a !== null);
    this.#e.setValue(s);
  }
  /**
   * Gets the variants with changes.
   * @returns {Array<UmbPublishedVariantWithPendingChanges>}  {Array<UmbVariantWithChanges>}
   * @memberof UmbDocumentPublishedPendingChangesManager
   */
  getVariantsWithChanges() {
    return this.#e.getValue();
  }
  #t;
  /**
   * Clear all states/values,
   */
  clear() {
    this.#e.setValue([]);
  }
}
class J extends P {
  constructor(t) {
    super(t, f), this.publishedPendingChanges = new k(this), this.#n = new y(this), this.#i = new N(this), this.#a = (e) => (this.#t?.readOnlyState.getStates().map((s) => s.variantId.culture) ?? []).includes(e.culture) === !1, this.#e = Promise.all([
      this.consumeContext(C, async (e) => {
        this.#t = e, this.#g();
      }).asPromise(),
      this.consumeContext(V, async (e) => {
        this.#s = e;
      }).asPromise()
    ]), this.consumeContext(d, (e) => {
      this.#h = e;
    });
  }
  #e;
  #t;
  #s;
  #n;
  #o;
  #c;
  #h;
  #i;
  async publish() {
    throw new Error("Method not implemented.");
  }
  /**
   * Save and publish the document
   * @returns {Promise<void>}
   * @memberof UmbDocumentPublishingWorkspaceContext
   */
  async saveAndPublish() {
    const t = this.getHostElement().style;
    return t.removeProperty("--uui-color-invalid"), t.removeProperty("--uui-color-invalid-emphasis"), t.removeProperty("--uui-color-invalid-standalone"), t.removeProperty("--uui-color-invalid-contrast"), this.#d();
  }
  /**
   * Schedule the document for publishing
   * @returns {Promise<void>}
   * @memberof UmbDocumentPublishingWorkspaceContext
   */
  async schedule() {
    if (await this.#e, !this.#t) throw new Error("Document workspace context is missing");
    const t = this.#t.getUnique();
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.getEntityType();
    if (!e) throw new Error("Entity type is missing");
    const { options: i, selected: s } = await this.#u(), h = await (await this.getContext(l)).open(this, v, {
      data: {
        options: i,
        activeVariants: s,
        pickableFilter: this.#a,
        prevalues: i.map((n) => ({
          unique: n.unique,
          schedule: {
            publishTime: n.variant?.scheduledPublishDate,
            unpublishTime: n.variant?.scheduledUnpublishDate
          }
        }))
      }
    }).onSubmit().catch(() => {
    });
    if (!h?.selection.length) return;
    const r = h?.selection.map((n) => ({
      variantId: c.FromString(n.unique),
      schedule: {
        publishTime: this.#l(n.schedule?.publishTime),
        unpublishTime: this.#l(n.schedule?.unpublishTime)
      }
    })) ?? [];
    if (!r.length) return;
    const o = r.map((n) => n.variantId), u = await this.#t.constructSaveData(o);
    return await this.#t.runMandatoryValidationForSaveData(u), await this.#t.askServerToValidate(u, o), this.#t.validateAndSubmit(
      async () => {
        if (!this.#t)
          throw new Error("Document workspace context is missing");
        await this.#t.performCreateOrUpdate(o, u);
        const { error: n } = await this.#n.publish(t, r);
        if (n)
          return Promise.reject(n);
        const p = { data: { message: this.#i.term("speechBubbles_editContentScheduledSavedText") } };
        this.#h?.peek("positive", p), await this.#t.reload(), this.#r();
        const b = new m({ entityType: e, unique: t });
        this.#s?.dispatchEvent(b);
      },
      async (n) => ((await this.getContext(d)).peek("danger", {
        data: { message: this.#i.term("speechBubbles_editContentScheduledNotSavedText") }
      }), Promise.reject(n))
    );
  }
  /**
   * Convert a date string to a server time string in ISO format, example: 2021-01-01T12:00:00.000+00:00.
   * The input must be a valid date string, otherwise it will return null.
   * The output matches the DateTimeOffset format in C#.
   * @param dateString
   */
  #l(t) {
    if (!t || t.length === 0)
      return null;
    const e = new Date(t);
    return isNaN(e.getTime()) ? (console.warn(`[Schedule]: Invalid date: ${t}`), null) : e.toISOString();
  }
  /**
   * Publish the document with descendants
   * @returns {Promise<void>}
   * @memberof UmbDocumentPublishingWorkspaceContext
   */
  async publishWithDescendants() {
    if (await this.#e, !this.#t) throw new Error("Document workspace context is missing");
    const t = this.#t.getUnique();
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.getEntityType();
    if (!e) throw new Error("Entity type is missing");
    const { options: i, selected: s } = await this.#u(), h = await (await this.getContext(l)).open(this, E, {
      data: {
        options: i,
        pickableFilter: this.#a
      },
      value: { selection: s }
    }).onSubmit().catch(() => {
    });
    if (!h?.selection.length) return;
    const r = h?.selection.map((u) => c.FromString(u)) ?? [];
    if (!r.length) return;
    const { error: o } = await this.#n.publishWithDescendants(
      t,
      r,
      h.includeUnpublishedDescendants ?? !1
    );
    if (!o) {
      await this.#t.reload(), this.#r();
      const u = new m({ entityType: e, unique: t });
      this.#s?.dispatchEvent(u);
      const n = new M({ entityType: e, unique: t });
      this.#s?.dispatchEvent(n);
    }
  }
  /**
   * Unpublish the document
   * @returns {Promise<void>}
   * @memberof UmbDocumentPublishingWorkspaceContext
   */
  async unpublish() {
    if (await this.#e, !this.#t) throw new Error("Document workspace context is missing");
    const t = this.#t.getUnique();
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.getEntityType();
    if (!e) throw new Error("Entity type is missing");
    new _(this, { unique: t, entityType: e, meta: {} }).execute();
  }
  async #d() {
    if (await this.#e, !this.#t) throw new Error("Document workspace context is missing");
    const t = this.#t.getUnique();
    if (!t) throw new Error("Unique is missing");
    let e = [];
    const { options: i, selected: s } = await this.#u();
    if (i.length === 0)
      throw new Error("No variants are available");
    if (i.length === 1)
      e.push(c.Create(i[0]));
    else {
      const r = await (await this.getContext(l)).open(this, D, {
        data: {
          options: i,
          pickableFilter: this.#a
        },
        value: { selection: s }
      }).onSubmit().catch(() => {
      });
      if (!r?.selection.length || !t) return;
      e = r?.selection.map((o) => c.FromString(o)) ?? [];
    }
    const a = await this.#t.constructSaveData(e);
    return await this.#t.runMandatoryValidationForSaveData(a, e), await this.#t.askServerToValidate(a, e), this.#t.validateAndSubmit(
      async () => this.#p(e, a),
      async (h) => (await this.#t.performCreateOrUpdate(e, a), (await this.getContext(d)).peek("danger", {
        data: { message: this.#i.term("speechBubbles_editContentPublishedFailedByValidation") }
      }), await Promise.reject(h))
    );
  }
  async #p(t, e) {
    if (await this.#e, !this.#t) throw new Error("Document workspace context is missing");
    const i = this.#t.getUnique();
    if (!i) throw new Error("Unique is missing");
    const s = this.#t.getEntityType();
    if (!s) throw new Error("Entity type is missing");
    await this.#t.performCreateOrUpdate(t, e);
    const { error: a } = await this.#n.publish(
      i,
      t.map((h) => ({ variantId: h }))
    );
    if (!a) {
      const h = e.variants.filter((o) => t.some((u) => u.culture === o.culture));
      this.#h?.peek("positive", {
        data: {
          headline: this.#i.term("speechBubbles_editContentPublishedHeader"),
          message: this.#i.term(
            "speechBubbles_editVariantPublishedText",
            this.#i.list(h.map((o) => o.culture ?? o.name))
          )
        }
      }), await this.#t.reload(), this.#r();
      const r = new m({ unique: i, entityType: s });
      this.#s?.dispatchEvent(r);
    }
  }
  #a;
  async #u() {
    if (await this.#e, !this.#t) throw new Error("Document workspace context is missing");
    const t = await q(this.#t.variantOptions);
    let e = this.#w();
    e = e.filter((s) => t.some((a) => a.unique === s));
    const i = this.#t.readOnlyState.getStates().map((s) => s.variantId.culture);
    return e = e.filter((s) => i.includes(s) === !1), {
      options: t,
      selected: e
    };
  }
  #w() {
    if (!this.#t) throw new Error("Document workspace context is missing");
    const t = this.#t.splitView.getActiveVariants().map((s) => c.Create(s).toString()), e = this.#t.getChangedVariants().map((s) => s.toString()), i = [...t, ...e];
    return [...new Set(i)];
  }
  async #g() {
    if (!this.#t) throw new Error("Document workspace context is missing");
    this.observe(
      O([this.#t.unique, this.#t.isNew]),
      ([t, e]) => {
        t !== this.#c && this.#f(), this.#c = t, e === !1 && t && this.#r();
      },
      "uniqueObserver"
    ), this.observe(
      this.#t.persistedData,
      () => this.#m(),
      "umbPersistedDataObserver"
    );
  }
  #b() {
    return this.#t?.getVariants()?.some(
      (e) => e.state === w.PUBLISHED || e.state === w.PUBLISHED_PENDING_CHANGES
    ) ?? !1;
  }
  async #r() {
    if (!this.#t) throw new Error("Document workspace context is missing");
    if (this.#t.getIsNew()) return;
    const t = this.#t.getUnique();
    if (!t) throw new Error("Unique is missing");
    if (!this.#b()) return;
    const { data: i } = await this.#n.published(t);
    this.#o = i, this.#m();
  }
  #m() {
    if (!this.#t) throw new Error("Document workspace context is missing");
    const t = this.#t.getPersistedData(), e = this.#o;
    !t || !e || this.publishedPendingChanges.process({ persistedData: t, publishedData: e });
  }
  #f() {
    this.#o = void 0, this.publishedPendingChanges.clear();
  }
}
export {
  J as UmbDocumentPublishingWorkspaceContext,
  J as api
};
//# sourceMappingURL=document-publishing.workspace-context-BanMDqm5.js.map
