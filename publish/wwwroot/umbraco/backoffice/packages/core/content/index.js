import { a as xt, b as kt, U as Ft } from "../property-type-based-property.element-B_7ZydA1.js";
import { U as Wt } from "../content-collection-workspace.context-token-BliQa7Cu.js";
import { U as Xt } from "../content-workspace.context-token-BMs4lY7q.js";
import { UmbControllerBase as b, UmbContextBase as P } from "@umbraco-cms/backoffice/class-api";
import { createExtensionApi as S } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as U } from "@umbraco-cms/backoffice/extension-registry";
import { UmbVariantId as d, umbVariantObjectCompare as v, UMB_INVARIANT_CULTURE as I } from "@umbraco-cms/backoffice/variant";
import { UmbEntityWorkspaceDataManager as B, UmbEntityDetailWorkspaceContextBase as A, UmbWorkspaceSplitViewManager as N } from "@umbraco-cms/backoffice/workspace";
import { appendToFrozenArray as T, jsonStringComparison as C, UmbBasicState as D, UmbBooleanState as M, mergeObservables as g, createObservablePart as R, classEqualMemoization as q, UmbObjectState as x, UmbArrayState as k } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextToken as F } from "@umbraco-cms/backoffice/context-api";
import { UMB_PROPERTY_DATASET_CONTEXT as L, UmbPropertyValuePresetVariantBuilderController as W } from "@umbraco-cms/backoffice/property";
import { UmbRoutePathAddendumContext as $ } from "@umbraco-cms/backoffice/router";
import { umbScopeMapperForJsonPaths as w, UmbValidationPropertyPathTranslationController as X, UmbDataPathPropertyValueQuery as j, umbQueryMapperForJsonPaths as K, UmbDataPathVariantQuery as E, UmbServerModelValidatorContext as Y, UmbValidationController as H, UMB_VALIDATION_CONTEXT as Q, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as z } from "@umbraco-cms/backoffice/validation";
import { UmbContentTypeStructureManager as J } from "@umbraco-cms/backoffice/content-type";
import { UmbReadOnlyVariantStateManager as G, UmbDeprecation as Z } from "@umbraco-cms/backoffice/utils";
import { UmbDataTypeItemRepositoryManager as tt, UmbDataTypeDetailRepository as et } from "@umbraco-cms/backoffice/data-type";
import { UmbLanguageCollectionRepository as at } from "@umbraco-cms/backoffice/language";
import { firstValueFrom as rt } from "@umbraco-cms/backoffice/external/rxjs";
import { UMB_MODAL_MANAGER_CONTEXT as st } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as V } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as it, UmbRequestReloadStructureForEntityEvent as nt, UmbEntityUpdatedEvent as ot } from "@umbraco-cms/backoffice/entity-action";
const Bt = "Umb.Condition.Workspace.ContentHasProperties", At = "Umb.Section.Content";
function _(c, t) {
  return c.culture === t.culture && c.segment === t.segment;
}
class m extends b {
  /**
   * Merges content variant data based on selected variants and variants to store.
   * @param {UmbContentLikeDetailModel | undefined} persistedData - The persisted content variant data.
   * @param {UmbContentLikeDetailModel} currentData - The current content variant data.
   * @param {Array<UmbVariantId>} selectedVariants - The selected variants.
   * @param {Array<UmbVariantId>} variantsToStore - The variants to store, we sometimes have additional variants that we like to process. This is typically the invariant variant, which we do not want to have as part of the variants data therefore a difference.
   * @returns {Promise<UmbContentLikeDetailModel>} - A promise that resolves to the merged content variant data.
   */
  async process(t, e, s, a) {
    const r = { ...e };
    return r.values = await this.#t(
      t?.values,
      e.values,
      a
    ), e.variants && (r.variants = this.#a(
      t?.variants,
      e.variants,
      s,
      _
    )), this.destroy(), r;
  }
  /**
   * Builds and saves values based on selected variants and variants to store.
   * @param {Array<UmbPotentialContentValueModel> | undefined} persistedValues - The persisted values.
   * @param {Array<UmbPotentialContentValueModel> | undefined} draftValues - The draft values.
   * @param {Array<UmbVariantId>}variantsToStore - The variants to store.
   * @returns {Promise<Array<UmbPotentialContentValueModel>>} - A promise that resolves to the saved values.
   */
  async #t(t, e, s) {
    const a = [...t ?? [], ...e ?? []].filter(
      (r, i, n) => i === n.findIndex((o) => o.alias === r.alias && o.culture === r.culture && o.segment === r.segment)
    );
    return (await Promise.all(
      a.map((r) => {
        const i = t?.find(
          (n) => n.alias === r.alias && n.culture === r.culture && n.segment === r.segment
        );
        if (s.some((n) => n.equal(d.CreateFromPartial(r)))) {
          const n = e?.find(
            (o) => o.alias === r.alias && o.culture === r.culture && o.segment === r.segment
          );
          return this.#e(i, n, s);
        } else
          return Promise.resolve(i);
      })
    )).filter((r) => r !== void 0);
  }
  /**
   * Builds and saves a value based on selected variants and variants to store.
   * @param {UmbPotentialContentValueModel | undefined} persistedValue - The persisted value.
   * @param {UmbPotentialContentValueModel | undefined} draftValue - The draft value.
   * @param {Array<UmbVariantId>} variantsToStore - The variants to store.
   * @returns {Promise<UmbPotentialContentValueModel | undefined>} A promise that resolves to the saved value.
   */
  async #e(t, e, s) {
    const a = e?.editorAlias ?? t?.editorAlias;
    if (!a)
      return console.error(`Editor alias not found for ${a}`), e;
    if (!e)
      return;
    const r = U.getByTypeAndFilter(
      "propertyValueResolver",
      // TODO: Remove depcrated filter in v.17 [NL]
      (o) => o.forEditorAlias === a || o.meta?.editorAlias === a
    )[0];
    if (!r)
      return e;
    const i = await S(this, r);
    if (!i)
      return e;
    let n = e;
    if (i.processValues) {
      const o = [];
      t && await i.processValues(t, async (u) => {
        o.push(u);
      });
      let l = 0;
      n = await i.processValues(n, async (u) => {
        const h = o[l++];
        return await this.#t(h, u, s);
      }) ?? n;
    }
    if (i.processVariants) {
      const o = [];
      t && await i.processVariants(t, async (u) => {
        o.push(u);
      });
      let l = 0;
      n = await i.processVariants(n, async (u) => {
        const h = o[l++];
        return await this.#a(
          h,
          u,
          s,
          i.compareVariants ?? _
        );
      }) ?? n;
    }
    return n;
  }
  /**
   * Construct variants property of model.
   * @param {Array<UmbVariantDataModel> | undefined} persistedVariants - The persisted value.
   * @param {Array<UmbVariantDataModel>} draftVariants - The draft value.
   * @param {Array<UmbVariantId>} variantsToStore - The variants to be stored.
   * @param {(UmbVariantDataModel, UmbVariantDataModel) => boolean} compare - The compare method, which compares the unique properties of the variants.
   * @returns {UmbVariantDataModel[]} A new array of variants.
   */
  #a(t, e, s, a) {
    return [...t ?? [], ...e ?? []].filter(
      (i, n, o) => n === o.findIndex((l) => a(l, i))
    ).map((i) => {
      const n = t?.find((o) => a(o, i));
      return s.some((o) => o.compare(i)) ? e?.find((l) => a(l, i)) : n;
    }).filter((i) => i !== void 0);
  }
}
function O(c, t) {
  return c.alias === t.alias && v(c, t);
}
class ut extends B {
  constructor() {
    super(...arguments), this.#t = 0, this.finishPropertyValueChange = () => {
      this.#t--, this.#e();
    };
  }
  //#variesByCulture?: boolean;
  //#variesBySegment?: boolean;
  _sortCurrentData(t, e) {
    e = super._sortCurrentData(t, e);
    const s = t.values;
    return s && e.values ? {
      ...e,
      values: [...e.values].sort(function(a, r) {
        return s.findIndex((i) => O(i, a)) - s.findIndex((i) => O(i, r));
      })
    } : e;
  }
  #t;
  initiatePropertyValueChange() {
    this.#t++, this._current.mute();
  }
  #e() {
    this.#t === 0 && this._current.unmute();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setVariesByCulture(t) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setVariesBySegment(t) {
  }
  setVaries(t) {
    this._varies = t;
  }
  async constructData(t) {
    const e = d.CreateInvariant();
    let s = [e];
    this._varies === !1 ? t = [e] : s = [...t, e];
    const a = this.getCurrent();
    if (!a) throw new Error("Current data is missing");
    const r = this.getPersisted();
    return await new m(this).process(
      r,
      a,
      t,
      s
    );
  }
}
class lt extends ut {
  //
  //#repository;
  #t;
  constructor(t, e) {
    super(t), this.#t = e;
  }
  _sortCurrentData(t, e) {
    e = super._sortCurrentData(t, e);
    const s = t.variants;
    return s && e.variants ? {
      ...e,
      variants: [...e.variants].sort(function(a, r) {
        return s.findIndex((i) => v(i, a)) - s.findIndex((i) => v(i, r));
      })
    } : e;
  }
  /**
   * Sets the variant scaffold data
   * @param {ModelVariantType} variantScaffold The variant scaffold data
   * @memberof UmbContentWorkspaceDataManager
   */
  setVariantScaffold(t) {
    this.#t = t;
  }
  ensureVariantData(t) {
    this.updateVariantData(t);
  }
  updateVariantData(t, e) {
    const s = this.getCurrent();
    if (!s) throw new Error("Data is missing");
    if (!this.#t) throw new Error("Variant scaffold data is missing");
    if (this._varies === !0) {
      if (t.isInvariant()) return;
      const a = s.variants.find((i) => t.compare(i)), r = T(
        s.variants,
        {
          ...this.#t,
          ...t.toObject(),
          ...a,
          ...e
        },
        (i) => t.compare(i)
      );
      this.updateCurrent({ variants: r });
    } else if (this._varies === !1) {
      const a = d.CreateInvariant(), r = s.variants.find((n) => a.compare(n)), i = [
        {
          ...this.#t,
          ...a.toObject(),
          ...r,
          ...e
        }
      ];
      this.updateCurrent({ variants: i });
    } else
      throw new Error("Varies by culture is missing");
  }
  getChangedVariants() {
    const t = this.getPersisted(), e = this.getCurrent();
    if (!e) throw new Error("Current data is missing");
    const s = e?.variants.map((r) => {
      const i = t?.variants.find((n) => d.Create(r).compare(n));
      return {
        culture: r.culture,
        segment: r.segment,
        equal: i ? C(r, i) : !1
      };
    }), a = e?.values.map((r) => {
      const i = t?.values.find((n) => d.Create(r).compare(n));
      return {
        culture: r.culture,
        segment: r.segment,
        equal: i ? C(r, i) : !1
      };
    });
    return s?.concat(a ?? []).filter((r) => r.equal === !1).map((r) => new d(r.culture, r.segment)) ?? [];
  }
}
const ht = (c) => c.IS_CONTENT === !0, Nt = new F("UmbPropertyDatasetContext", void 0, ht);
class dt extends P {
  constructor(t, e, s) {
    super(t, L), this.#r = new D([]), this._propertyVariantIdMap = this.#r.asObservable(), this._readOnly = new M(!1), this.readOnly = this._readOnly.asObservable(), this._dataOwner = e, this.#t = s ?? d.CreateInvariant(), this.#e = new Promise((a) => {
      this.#a = a;
    }), this.observe(
      this._dataOwner.readOnlyState.states,
      (a) => {
        const r = a.some((i) => i.variantId.equal(this.#t));
        this._readOnly.setValue(r);
      },
      null
    ), this.observe(
      this._dataOwner.structure.contentTypeProperties,
      (a) => {
        const r = a.map((i) => ({ alias: i.alias, variantId: this.#n(i) }));
        this.#r.setValue(r), this.#a && (this.#a(), this.#a = void 0, this.#e = void 0);
      },
      null
    );
  }
  #t;
  getVariantId() {
    return this.#t;
  }
  #e;
  #a;
  #r;
  getEntityType() {
    return this._dataOwner.getEntityType();
  }
  getUnique() {
    return this._dataOwner.getUnique();
  }
  getReadOnly() {
    return this._readOnly.getValue();
  }
  #n(t) {
    return d.Create({
      culture: t.variesByCulture ? this.#t.culture : null,
      segment: t.variesBySegment ? this.#t.segment : null
    });
  }
  #s;
  // Should it be possible to get the properties as a list of property aliases?
  get properties() {
    return this.#s || (this.#s = g(
      [this._propertyVariantIdMap, this._dataOwner.values],
      this.#i
    )), this.#s;
  }
  #i([t, e]) {
    const s = [];
    if (e)
      for (const a of t) {
        const r = e.find((i) => a.alias === i.alias && a.variantId.compare(i));
        r && s.push(r);
      }
    return s;
  }
  async getProperties() {
    return await this.#e, this.#i([
      this.#r.getValue(),
      this._dataOwner.getValues()
    ]);
  }
  /**
   * @function propertyVariantId
   * @param {string} propertyAlias - The property alias to observe the variantId of.
   * @returns {Promise<Observable<UmbVariantId | undefined> | undefined>} - The observable for this properties variantId.
   * @description Get an Observable for the variant id of this property.
   */
  async propertyVariantId(t) {
    return R(
      this._propertyVariantIdMap,
      (e) => e.find((s) => s.alias === t)?.variantId,
      q
    );
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias  The alias of the property
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>} - An observable of the property value
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(t) {
    return await this._dataOwner.isLoaded(), await this.#e, g(
      [await this.propertyVariantId(t), this._dataOwner.values],
      ([e, s]) => e ? s?.find((a) => a?.alias === t && e.compare(a))?.value : void 0
    );
  }
  // TODO: Refactor: Not used currently, but should investigate if we can implement this, to spare some energy.
  async propertyValueByAliasAndVariantId(t, e) {
    return this._dataOwner.propertyValueByAlias(t, e);
  }
  /**
   * @function setPropertyValueByVariant
   * @param {string} propertyAlias - The alias of the property
   * @param {unknown} value - value can be a promise resolving into the actual value or the raw value it self.
   * @param {UmbVariantId} propertyVariantId - The variant id for the value to be set for.
   * @returns {Promise<unknown>} - A promise that resolves once the value has been set.
   * @description Get the value of this property.
   */
  setPropertyValueByVariant(t, e, s) {
    return this._dataOwner.setPropertyValue(t, e, s);
  }
  /**
   * @function setPropertyValue
   * @param {string} propertyAlias - The alias for the value to be set
   * @param {PromiseLike<unknown>} value - value can be a promise resolving into the actual value or the raw value it self.
   * @returns {Promise<void>}
   * @description Set the value of this property.
   */
  async setPropertyValue(t, e) {
    this._dataOwner.initiatePropertyValueChange(), await this.#e;
    const s = this.#r.getValue().find((a) => a.alias === t)?.variantId;
    s && await this._dataOwner.setPropertyValue(t, await e, s), this._dataOwner.finishPropertyValueChange();
  }
  destroy() {
    super.destroy(), this.#r?.destroy(), this.#r = void 0;
  }
}
class Dt extends dt {
  constructor(t, e, s) {
    super(t, e, s), this.#t = new $(this), this.#e = new x(void 0), this.currentVariant = this.#e.asObservable(), this.name = this.#e.asObservablePart((a) => a?.name), this.culture = this.#e.asObservablePart((a) => a?.culture), this.segment = this.#e.asObservablePart((a) => a?.segment), this.IS_CONTENT = !0, this.#t.setAddendum(s ? s.toString() : ""), this.observe(
      this._dataOwner.variantById(this.getVariantId()),
      async (a) => {
        a && this.#e.setValue(a);
      },
      null
    );
  }
  #t;
  #e;
  getName() {
    return this._dataOwner.getName(this.getVariantId());
  }
  setName(t) {
    this._dataOwner.setName(t, this.getVariantId());
  }
  /**
   * @deprecated Its not clear why we have this. We should either document the need better or get rid of it.
   * @returns {UmbEntityVariantModel | undefined} - gives information about the current variant.
   */
  getVariantInfo() {
    return this._dataOwner.getVariant(this.getVariantId());
  }
}
class ct extends b {
  async translate(t, e) {
    return t = await w(t, "$.values", async (s) => await new X(this).translateProperties(s, e.values, j)), t = await w(t, "$.variants", async (s) => await K(s, e.variants, (a) => E(a))), t;
  }
}
class Mt extends A {
  constructor(t, e) {
    super(t, e), this.IS_CONTENT_WORKSPACE_CONTEXT = !0, this.readOnlyState = new G(this), this._data = new lt(this), this.data = this._data.current, this.values = this._data.createObservablePartOfCurrent((a) => a?.values), this.variants = this._data.createObservablePartOfCurrent((a) => a?.variants ?? []), this.persistedData = this._data.persisted, this.#t = new tt(this), this.splitView = new N(), this.#n = new at(this), this.#s = new k([], (a) => a.unique), this.languages = this.#s.asObservable(), this.#i = [], this.#o = new Y(this), this.finishPropertyValueChange = () => {
      this._data.finishPropertyValueChange();
    }, this._saveableVariantsFilter = (a) => this.readOnlyState.getStates().map((i) => i.variantId.culture).includes(a.culture) === !1, this.#o.addPathTranslator(ct), this._data.setVariantScaffold(e.contentVariantScaffold), this.#h = e.saveModalToken, this.#p = e.contentTypePropertyName;
    const s = new e.contentTypeDetailRepository(this);
    this.#u = e.contentValidationRepository, this.#d = e.skipValidationOnSubmit ? !e.skipValidationOnSubmit : !0, this.#c = e.ignoreValidationResultOnSubmit ?? !1, this.structure = new J(this, s), this.variesByCulture = this.structure.ownerContentTypeObservablePart((a) => a?.variesByCulture), this.variesBySegment = this.structure.ownerContentTypeObservablePart((a) => a?.variesBySegment), this.varies = this.structure.ownerContentTypeObservablePart(
      (a) => a ? a.variesByCulture || a.variesBySegment : void 0
    ), this.variantOptions = g(
      [this.varies, this.variants, this.languages],
      ([a, r, i]) => a === !0 ? i.map((n) => ({
        variant: r.find((o) => o.culture === n.unique),
        language: n,
        // TODO: When including segments, this object should be updated to include a object for the segment. [NL]
        // TODO: When including segments, the unique should be updated to include the segment as well. [NL]
        unique: n.unique,
        // This must be a variantId string!
        culture: n.unique,
        segment: null
      })) : a === !1 ? [
        {
          variant: r.find((n) => n.culture === null),
          language: i.find((n) => n.isDefault),
          culture: null,
          segment: null,
          unique: I
          // This must be a variantId string!
        }
      ] : []
    ), this.observe(
      this.variantOptions,
      (a) => {
        a.forEach((r) => {
          if (this.#i.filter((n) => {
            const o = n.getVariantId();
            if (o)
              return o.culture === r.culture && o.segment === r.segment;
          })) {
            const n = new H(this);
            n.inheritFrom(this.validationContext, "$"), n.autoReport(), n.setVariantId(d.Create(r)), this.#i.push(n);
          }
        });
      },
      null
    ), this.observe(
      this.varies,
      (a) => {
        this._data.setVaries(a), this.#e = a;
      },
      null
    ), this.observe(
      this.variesByCulture,
      (a) => {
        this._data.setVariesByCulture(a), this.#a = a;
      },
      null
    ), this.observe(
      this.variesBySegment,
      (a) => {
        this._data.setVariesBySegment(a), this.#r = a;
      },
      null
    ), this.observe(
      this.structure.contentTypeDataTypeUniques,
      (a) => {
        this.#t.setUniques(a);
      },
      null
    ), this.loadLanguages();
  }
  #t;
  #e;
  #a;
  #r;
  #n;
  #s;
  #i;
  getVariantValidationContext(t) {
    return this.#i.find((e) => e.getVariantId()?.compare(t));
  }
  #d;
  #c;
  #o;
  #u;
  #l;
  #h;
  #p;
  async loadLanguages() {
    const { data: t } = await this.#n.requestCollection({});
    this.#s.setValue(t?.items ?? []);
  }
  async _scaffoldProcessData(t) {
    await this.structure.loadType(t[this.#p].unique);
    const e = this.#s.getValue().map((u) => u.unique);
    this.structure.variesBySegment && console.warn("Segments are not yet implemented for preset");
    const s = this.structure.variesBySegment ? [] : void 0, a = new et(this), r = await this.structure.getContentTypeProperties(), i = await Promise.all(
      r.map(async (u) => {
        const h = (await a.requestByUnique(u.dataType.unique)).data;
        if (!h)
          throw new Error(`DataType of "${u.dataType.unique}" not found.`);
        if (!h.editorUiAlias)
          throw new Error(`DataType of "${u.dataType.unique}" did not have a editorUiAlias.`);
        return {
          alias: u.alias,
          propertyEditorUiAlias: h.editorUiAlias,
          propertyEditorSchemaAlias: h.editorAlias,
          config: h.values,
          typeArgs: {
            variesByCulture: u.variesByCulture,
            variesBySegment: u.variesBySegment
          }
        };
      })
    ), n = new W(this);
    n.setCultures(e), s && n.setSegments(s);
    const o = await n.create(i), l = [...t.values];
    for (let u = 0; u < o.length; u++) {
      const h = o[u], p = d.Create(h), y = l.findIndex((f) => f.alias === h.alias && p.compare(f));
      y > -1 ? l[y] = h : l.push(h);
    }
    return t.values = l, t;
  }
  /**
   * Get the name of a variant
   * @param {UmbVariantId } [variantId] - The variant id
   * @returns { string | undefined} - The name of the variant
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getName(t) {
    const e = this._data.getCurrent()?.variants;
    if (e)
      return t ? e.find((s) => t.compare(s))?.name : e[0]?.name;
  }
  /**
   * Set the name of a variant
   * @param {string} name - The name of the variant
   * @param {UmbVariantId} [variantId] - The variant id
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  setName(t, e) {
    this._data.updateVariantData(e ?? d.CreateInvariant(), { name: t });
  }
  /**
   * Get an observable for the name of a variant
   * @param {UmbVariantId} [variantId] - The variant id
   * @returns {Observable<string>} - The name of the variant
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  name(t) {
    return this._data.createObservablePartOfCurrent(
      (e) => e?.variants?.find((s) => t?.compare(s))?.name ?? ""
    );
  }
  /* Variants */
  /**
   * Get whether the content varies by culture
   * @returns { boolean | undefined } - If the content varies by culture
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getVariesByCulture() {
    return this.#a;
  }
  /**
   * Get whether the content varies by segment
   * @returns {boolean | undefined} - If the content varies by segment
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getVariesBySegment() {
    return this.#r;
  }
  /**
   * Get whether the content varies
   * @returns { boolean | undefined } - If the content varies
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getVaries() {
    return this.#e;
  }
  /**
   * Get the variant by the given variantId
   * @param {UmbVariantId} variantId - The variant id
   * @returns { Observable<VariantModelType | undefined> } - The variant or undefined if not found
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  variantById(t) {
    return this._data.createObservablePartOfCurrent((e) => e?.variants?.find((s) => t.compare(s)));
  }
  /**
   * Get the variant by the given variantId
   * @param {UmbVariantId} variantId - The variant id
   * @returns { VariantModelType | undefined } - The variant or undefined if not found
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getVariant(t) {
    return this._data.getCurrent()?.variants?.find((e) => t.compare(e));
  }
  getVariants() {
    return this._data.getCurrent()?.variants;
  }
  /**
   * Observe the property type
   * @param {string} propertyId - The id of the property
   * @returns {Promise<Observable<UmbPropertyTypeModel | undefined>>} - An observable for the property type
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  async propertyStructureById(t) {
    return this.structure.propertyStructureById(t);
  }
  /* Values */
  /**
   * Get the values of the content
   * @returns {Array<UmbElementValueModel> | undefined} - The values of the content
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getValues() {
    return this._data.getCurrent()?.values;
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias - The alias of the property
   * @param {UmbVariantId} variantId - The variant
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>} - An observable for the value of the property
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(t, e) {
    return this._data.createObservablePartOfCurrent(
      (s) => s?.values?.find((a) => a?.alias === t && (e ? e.compare(a) : !0))?.value
    );
  }
  /**
   * Get the current value of the property with the given alias and variantId.
   * @param {string} alias - The alias of the property
   * @param {UmbVariantId | undefined} variantId - The variant id of the property
   * @returns {ReturnType | undefined} The value or undefined if not set or found.
   */
  getPropertyValue(t, e) {
    const s = this._data.getCurrent();
    if (s)
      return s.values?.find(
        (r) => r.alias === t && (e ? e.compare(r) : !0)
      )?.value;
  }
  /**
   * Set the value of the property with the given alias and variantId.
   * @template ValueType
   * @param {string} alias - The alias of the property
   * @param {ValueType} value - The value to set
   * @param {UmbVariantId} [variantId] - The variant id of the property
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  async setPropertyValue(t, e, s) {
    this.initiatePropertyValueChange(), s ??= d.CreateInvariant();
    const a = await this.structure.getPropertyStructureByAlias(t);
    if (!a)
      throw new Error(`Property alias "${t}" not found.`);
    const r = (await this.#t.getItemByUnique(a.dataType.unique)).propertyEditorSchemaAlias;
    if (!r)
      throw new Error(`Editor Alias of "${a.dataType.unique}" not found.`);
    const i = { editorAlias: r, ...s.toObject(), alias: t, value: e }, n = this.getData();
    if (n) {
      const o = T(
        n.values ?? [],
        i,
        (l) => l.alias === t && s.compare(l)
      );
      this._data.updateCurrent({ values: o }), this._data.ensureVariantData(s);
    }
    this.finishPropertyValueChange();
  }
  initiatePropertyValueChange() {
    this._data.initiatePropertyValueChange();
  }
  /**
   * Gets the changed variant ids
   * @returns {Array<UmbVariantId>} - The changed variant ids
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getChangedVariants() {
    return this._data.getChangedVariants();
  }
  async _determineVariantOptions() {
    const t = await rt(this.variantOptions), s = this.splitView.getActiveVariants().map((o) => d.Create(o)), a = this._data.getChangedVariants(), r = s.concat(a), i = this.readOnlyState.getStates().map((o) => o.variantId.culture);
    let n = r.map((o) => o.toString()).filter((o, l, u) => u.indexOf(o) === l);
    return n = n.filter((o) => i.includes(o) === !1), {
      options: t,
      selected: n
    };
  }
  /* validation */
  /**
   * Run the mandatory validation for the save data
   * @deprecated Use the public runMandatoryValidationForSaveData instead. Will be removed in v. 17.
   * @protected
   * @param {DetailModelType} saveData - The data to validate
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  async _runMandatoryValidationForSaveData(t, e = []) {
    new Z({
      removeInVersion: "17",
      deprecated: "_runMandatoryValidationForSaveData",
      solution: "Use the public runMandatoryValidationForSaveData instead."
    }).warn(), this.runMandatoryValidationForSaveData(t, e);
  }
  /**
   * Run the mandatory validation for the save data
   * @param {DetailModelType} saveData - The data to validate
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  async runMandatoryValidationForSaveData(t, e = []) {
    if (e.filter((r) => !t.variants.some((i) => r.compare(i))).length > 0)
      throw new Error("One or more selected variants have not been created");
    const a = t.variants.filter((r) => !r.name);
    if (a.length > 0) {
      const r = await this.getContext(Q);
      throw a.forEach((i) => {
        r.messages.addMessage(
          "client",
          `$.variants[${E(i)}].name`,
          z
        );
      }), new Error("All variants must have a name");
    }
  }
  /**
   * Ask the server to validate the save data
   * @param {DetailModelType} saveData - The data to validate
   * @param {Array<UmbVariantId>} variantIds - The variant ids to validate
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  async askServerToValidate(t, e) {
    if (this.#u)
      if (this.#l ??= new this.#u(this), this.getIsNew()) {
        const s = this.getParent();
        if (!s) throw new Error("Parent is not set");
        await this.#o.askServerForValidation(
          t,
          this.#l.validateCreate(t, s.unique)
        );
      } else
        await this.#o.askServerForValidation(
          t,
          this.#l.validateSave(t, e)
        );
  }
  /**
   * Request a submit of the workspace, in the case of Document Workspaces the validation does not need to be valid for this to be submitted.
   * @returns {Promise<void>} a promise which resolves once it has been completed.
   */
  requestSubmit() {
    return this._handleSubmit();
  }
  submit() {
    return this._handleSubmit();
  }
  /**
   * Get the data to save
   * @param {Array<UmbVariantId>} variantIds - The variant ids to save
   * @returns {Promise<DetailModelType>}  {Promise<DetailModelType>}
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  constructSaveData(t) {
    return this._data.constructData(t);
  }
  async _handleSubmit() {
    if (!this.getData())
      throw new Error("Data is missing");
    const { options: e, selected: s } = await this._determineVariantOptions();
    let a = [];
    if (e.length === 0)
      throw new Error("No variants are available");
    if (e.length === 1)
      a.push(d.Create(e[0]));
    else if (this.#h) {
      const n = await (await this.getContext(st)).open(this, this.#h, {
        data: {
          options: e,
          pickableFilter: this._saveableVariantsFilter
        },
        value: { selection: s }
      }).onSubmit().catch(() => {
      });
      if (!n?.selection.length) return;
      a = n?.selection.map((o) => d.FromString(o)) ?? [];
    } else
      throw new Error("No variant picker modal token is set. There are multiple variants to save. Cannot proceed.");
    const r = await this.constructSaveData(a);
    if (await this.runMandatoryValidationForSaveData(r, a), this.#d)
      return await this.askServerToValidate(r, a), this.validateAndSubmit(
        async () => this.performCreateOrUpdate(a, r),
        async (i) => this.#c ? this.performCreateOrUpdate(a, r) : this.invalidSubmit(i)
      );
    await this.performCreateOrUpdate(a, r);
  }
  /**
   * Perform the create or update of the content
   * @deprecated Use the public performCreateOrUpdate instead. Will be removed in v. 17.
   * @protected
   * @param {Array<UmbVariantId>} variantIds
   * @param {DetailModelType} saveData
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  async _performCreateOrUpdate(t, e) {
    await this.performCreateOrUpdate(t, e);
  }
  /**
   * Perform the create or update of the content
   * @param {Array<UmbVariantId>} variantIds - The variant ids to save
   * @param {DetailModelType} saveData - The data to save
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  async performCreateOrUpdate(t, e) {
    this.getIsNew() ? await this.#m(t, e) : await this.#y(t, e);
  }
  async #m(t, e) {
    if (!this._detailRepository) throw new Error("Detail repository is not set");
    const s = this.getParent();
    if (!s) throw new Error("Parent is not set");
    const { data: a, error: r } = await this._detailRepository.create(e, s.unique);
    if (!a || r)
      throw new Error("Error creating content");
    const i = [...t, d.CreateInvariant()], n = this._data.getCurrent(), o = await new m(this).process(
      n,
      a,
      t,
      i
    );
    this._data.setPersisted(o);
    const l = this._data.getCurrent(), u = await new m(this).process(
      l,
      a,
      t,
      i
    );
    this._data.setCurrent(u);
    const h = await this.getContext(V), p = new it({
      entityType: s.entityType,
      unique: s.unique
    });
    h.dispatchEvent(p), this.setIsNew(!1), this._closeModal();
  }
  async #y(t, e) {
    if (!this._detailRepository) throw new Error("Detail repository is not set");
    const { data: s, error: a } = await this._detailRepository.save(e);
    if (!s || a)
      throw new Error("Error saving content");
    const r = [...t, d.CreateInvariant()], i = this._data.getCurrent(), n = await new m(this).process(
      i,
      s,
      t,
      r
    );
    this._data.setPersisted(n);
    const o = this._data.getCurrent(), l = await new m(this).process(
      o,
      s,
      t,
      r
    );
    this._data.setCurrent(l);
    const u = this.getUnique(), h = this.getEntityType(), p = await this.getContext(V), y = new nt({ unique: u, entityType: h });
    p.dispatchEvent(y);
    const f = new ot({
      unique: u,
      entityType: h,
      eventUnique: this._workspaceEventUnique
    });
    p.dispatchEvent(f), this._closeModal();
  }
  resetState() {
    super.resetState(), this.readOnlyState.clear();
  }
  destroy() {
    this.structure.destroy(), this.#n.destroy(), super.destroy();
  }
}
export {
  ht as IsContentPropertyDatasetContext,
  Wt as UMB_CONTENT_COLLECTION_WORKSPACE_CONTEXT,
  Bt as UMB_CONTENT_HAS_PROPERTIES_WORKSPACE_CONDITION,
  xt as UMB_CONTENT_PROPERTY_CONTEXT,
  Nt as UMB_CONTENT_PROPERTY_DATASET_CONTEXT,
  At as UMB_CONTENT_SECTION_ALIAS,
  Xt as UMB_CONTENT_WORKSPACE_CONTEXT,
  Mt as UmbContentDetailWorkspaceContextBase,
  kt as UmbContentPropertyContext,
  Dt as UmbContentPropertyDatasetContext,
  lt as UmbContentWorkspaceDataManager,
  dt as UmbElementPropertyDatasetContext,
  ut as UmbElementWorkspaceDataManager,
  m as UmbMergeContentVariantDataController,
  Ft as UmbPropertyTypeBasedPropertyElement
};
//# sourceMappingURL=index.js.map
