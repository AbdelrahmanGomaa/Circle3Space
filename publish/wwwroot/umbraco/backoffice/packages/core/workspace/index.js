import { UmbActionBase as _, UMB_ACTION_EVENT_CONTEXT as c } from "@umbraco-cms/backoffice/action";
import { b as v, a as C } from "../workspace.element-5QKMwFUq.js";
import { r as mt, x as _t, s as Et, q as gt, t as yt, u as bt, v as vt, w as Ct, p as Ut, o as wt, n as Tt, m as ft, l as Pt, C as At, U as Ot, i as St, D as Nt, y as Rt, z as Vt, c as Wt, d as It, E as Dt, e as xt, f as kt, g as qt, A as Bt, B as Mt, h as Lt, j as Kt, k as Ht, E as Xt } from "../workspace.element-5QKMwFUq.js";
import { UmbBooleanState as p, UmbArrayState as E, UmbStringState as U, UmbObjectState as d, jsonStringComparison as w } from "@umbraco-cms/backoffice/observable-api";
import { UmbControllerBase as m, UmbContextBase as g } from "@umbraco-cms/backoffice/class-api";
import { UMB_MODAL_CONTEXT as T, UMB_MODAL_MANAGER_CONTEXT as f, UMB_DISCARD_CHANGES_MODAL as P } from "@umbraco-cms/backoffice/modal";
import { UmbEntityContext as A } from "@umbraco-cms/backoffice/entity";
import { UmbEntityUpdatedEvent as u, UmbRequestReloadChildrenOfEntityEvent as O, UmbRequestReloadStructureForEntityEvent as S } from "@umbraco-cms/backoffice/entity-action";
import { UmbExtensionApiInitializer as N } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as R } from "@umbraco-cms/backoffice/extension-registry";
import { UmbStateManager as V, UmbDeprecation as W, umbUrlPatternToString as I, ensurePathEndsWithSlash as D } from "@umbraco-cms/backoffice/utils";
import { UmbValidationContext as x } from "@umbraco-cms/backoffice/validation";
import { UmbId as k } from "@umbraco-cms/backoffice/id";
import { UmbVariantId as l } from "@umbraco-cms/backoffice/variant";
import { UMB_PROPERTY_DATASET_CONTEXT as q } from "@umbraco-cms/backoffice/property";
class at extends _ {
  /**
   * By specifying the href, the action will act as a link.
   * The `execute` method will not be called.
   * @abstract
   * @returns {string | undefined}
   */
  getHref() {
    return Promise.resolve(void 0);
  }
  /**
   * By specifying the `execute` method, the action will act as a button.
   * @abstract
   * @returns {Promise<void>}
   */
  execute() {
    return Promise.resolve();
  }
}
class B extends _ {
  constructor() {
    super(...arguments), this._isDisabled = new p(!1), this.isDisabled = this._isDisabled.asObservable();
  }
  /**
   * By specifying the href, the action will act as a link.
   * The `execute` method will not be called.
   * @abstract
   * @returns {string | undefined}
   */
  getHref() {
    return Promise.resolve(void 0);
  }
  /**
   * By specifying the `execute` method, the action will act as a button.
   * @abstract
   * @returns {Promise<void>}
   */
  execute() {
    return Promise.resolve();
  }
  /**
   * Disables the action.
   * @memberof UmbWorkspaceActionBase
   */
  disable() {
    this._isDisabled.setValue(!0);
  }
  /**
   * Enables the action.
   * @memberof UmbWorkspaceActionBase
   */
  enable() {
    this._isDisabled.setValue(!1);
  }
}
class rt extends B {
  constructor(t, s) {
    super(t, s), this._retrieveWorkspaceContext = this.consumeContext(
      s.workspaceContextToken ?? v,
      (e) => {
        this._workspaceContext = e, this.#t(), this._gotWorkspaceContext();
      }
    ).asPromise();
  }
  #t() {
    this.observe(
      this._workspaceContext?.unique,
      (t) => {
        t === void 0 ? this.disable() : this.enable();
      },
      "saveWorkspaceActionUniqueObserver"
    );
  }
  _gotWorkspaceContext() {
  }
  async execute() {
    return await this._retrieveWorkspaceContext, await this._workspaceContext.requestSubmit();
  }
}
class M extends m {
  constructor() {
    super(...arguments), this.#t = new E([], (t) => t.path), this.routes = this.#t.asObservable(), this.#e = new U("");
  }
  #t;
  #e;
  /**
   * Set the routes for the workspace.
   * @param {Array<UmbRoute>} routes The routes for the workspace.
   * @memberof UmbWorkspaceRouteManager
   */
  setRoutes(t) {
    const e = [
      ...t,
      {
        path: "**",
        component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
      }
    ].map((i) => {
      const r = i.setup;
      return i.setup = (a, o) => {
        this.#e.setValue(o.match.fragments.consumed), r && r(a, o);
      }, i;
    });
    this.#t.setValue([...e]);
  }
  /**
   * Get the routes for the workspace.
   * @returns {Array<UmbRoute>} The routes for the workspace.
   * @memberof UmbWorkspaceRouteManager
   */
  getRoutes() {
    return this.#t.getValue();
  }
  /**
   * Get the active local path.
   * @returns {*}  {string}
   * @memberof UmbWorkspaceRouteManager
   */
  getActiveLocalPath() {
    return this.#e.getValue();
  }
}
class y extends g {
  /*
  	Concept notes: [NL]
  	Considerations are, if we bring a dirty state (observable) we need to maintain it all the time.
  	This might be too heavy process, so we might want to consider just having a get dirty state method.
  */
  //#isDirty = new UmbBooleanState(undefined);
  //isDirty = this.#isNew.asObservable();
  constructor(t, s) {
    super(t, C.toString()), this.#t = [], this.#i = new p(void 0), this.isNew = this.#i.asObservable(), this.routes = new M(this), this.#a = (e) => {
      this.#e && (this.#n?.(e), this.#e = void 0, this.#s = void 0, this.#n = void 0);
    }, this.#r = () => {
      this.#s?.(), this.#e = void 0, this.#s = void 0, this.#n = void 0;
    }, this.#o = () => {
      this.#r(), this._closeModal();
    }, this.workspaceAlias = s, this.consumeContext(T, (e) => {
      this.modalContext = e;
    });
  }
  #t;
  /**
   * Appends a validation context to the workspace.
   * @param context
   */
  addValidationContext(t) {
    this.#t.push(t);
  }
  #e;
  #s;
  #n;
  #i;
  resetState() {
    this.#t.forEach((t) => t.reset()), this.#i.setValue(void 0);
  }
  getIsNew() {
    return this.#i.getValue();
  }
  setIsNew(t) {
    this.#i.setValue(t);
  }
  /**
   * If a Workspace has multiple validation contexts, then this method can be overwritten to return the correct one.
   * @returns Promise that resolves to void when the validation is complete.
   */
  async validate() {
    return await Promise.all(this.#t.map((t) => t.validate()));
  }
  async requestSubmit() {
    return this.validateAndSubmit(
      () => this.submit(),
      (t) => this.invalidSubmit(t)
    );
  }
  async validateAndSubmit(t, s) {
    return this.#e ? this.#e : (this.#e = new Promise((e, i) => {
      this.#s = e, this.#n = i;
    }), this.validate().then(
      async () => {
        t().then(this.#o, this.#a);
      },
      async (e) => {
        console.warn(
          "Validation failed because of these validation messages still begin present: ",
          this.#t.flatMap((i) => i.messages.getMessages())
        ), s(e).then(this.#r, this.#a);
      }
    ), await this.#e);
  }
  #a;
  #r;
  #o;
  _closeModal() {
    this.modalContext && (this.modalContext?.setValue(this.getData()), this.modalContext?.submit());
  }
  invalidSubmit(t) {
    return Promise.reject(t);
  }
}
class nt extends y {
}
class L extends m {
  constructor() {
    super(...arguments), this._persisted = new d(void 0), this._current = new d(void 0), this.persisted = this._persisted.asObservable(), this.current = this._current.asObservable();
  }
  _sortCurrentData(t, s) {
    return s;
  }
  /**
   * Gets persisted data
   * @returns {(ModelType | undefined)}
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  getPersisted() {
    return this._persisted.getValue();
  }
  /**
   * Sets the persisted data
   * @param {(ModelType | undefined)} data
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  setPersisted(t) {
    this._persisted.setValue(t);
  }
  /**
   * Updates the persisted data
   * @param {Partial<ModelType>} partialData
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  updatePersisted(t) {
    this._persisted.update(t);
  }
  /**
   * Creates an observable part of the persisted data
   * @template ReturnType
   * @param {(MappingFunction<ModelType | undefined, ReturnType>)} mappingFunction
   * @returns {*}
   * @memberof UmbEntityWorkspaceDataManager
   */
  createObservablePartOfPersisted(t) {
    return this._persisted.asObservablePart(t);
  }
  /**
   * Gets the current data
   * @returns {(ModelType | undefined)}
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  getCurrent() {
    return this._current.getValue();
  }
  /**
   * Sets the current data
   * @param {(ModelType | undefined)} data
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  setCurrent(t) {
    if (t) {
      const s = this._persisted.getValue();
      s && (t = this._sortCurrentData(s, t));
    }
    this._current.setValue(t);
  }
  /**
   * Updates the current data
   * @param {Partial<ModelType>} partialData
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  updateCurrent(t) {
    if (t) {
      const s = this._persisted.getValue();
      s && (t = this._sortCurrentData(s, t));
    }
    this._current.update(t);
  }
  /**
   * Creates an observable part of the current data
   * @template ReturnType
   * @param {(MappingFunction<ModelType | undefined, ReturnType>)} mappingFunction
   * @returns {*}
   * @memberof UmbEntityWorkspaceDataManager
   */
  createObservablePartOfCurrent(t) {
    return this._current.asObservablePart(t);
  }
  /**
   * Checks if there are unpersisted changes
   * @returns {*}
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  getHasUnpersistedChanges() {
    const t = this._persisted.getValue(), s = this._current.getValue(), e = w(t, s) === !1;
    return e && console.warn("Changes detected based on JSON comparison between", t, "and", s), e;
  }
  /**
   * Resets the current data to the persisted data
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  resetCurrent() {
    this._current.setValue(this._persisted.getValue());
  }
  /**
   * Clears the data
   * @memberof UmbSubmittableWorkspaceDataManager
   */
  clear() {
    this._persisted.setValue(void 0), this._current.setValue(void 0);
  }
  destroy() {
    this._persisted?.destroy(), this._current?.destroy(), this._persisted = void 0, this._current = void 0, super.destroy();
  }
}
const h = "umbLoadingEntityDetail";
class K extends y {
  constructor(t, s) {
    super(t, s.workspaceAlias), this.IS_ENTITY_DETAIL_WORKSPACE_CONTEXT = !0, this._data = new L(this), this.#t = new A(this), this.entityType = this.#t.entityType, this.unique = this.#t.unique, this.data = this._data.current, this.persistedData = this._data.persisted, this.loading = new V(this), this.#s = new d(void 0), this.parentUnique = this.#s.asObservablePart((e) => e ? e.unique : void 0), this.parentEntityType = this.#s.asObservablePart(
      (e) => e ? e.entityType : void 0
    ), this.validationContext = new x(this), this.#i = !1, this.#a = new Promise((e) => {
      this.#i ? e() : this.#n = e;
    }), this.#r = !1, this.#o = async (e) => {
      const i = e.detail.url;
      if (this.#r)
        return !0;
      if (this._checkWillNavigateAway(i) && this.getHasUnpersistedChanges()) {
        e.preventDefault();
        const a = (await this.getContext(f)).open(this, P);
        try {
          return await a.onSubmit(), this.#r = !0, history.pushState({}, "", e.detail.url), !0;
        } catch {
          return !1;
        }
      }
      return !0;
    }, this._workspaceEventUnique = k.new(), this.#u = (e) => {
      const i = e.getUnique(), r = e.getEntityType(), a = e.getEventUnique();
      r === this.getEntityType() && i === this.getUnique() && a !== this._workspaceEventUnique && this.reload();
    }, this.addValidationContext(this.validationContext), this.#t.setEntityType(s.entityType), window.addEventListener("willchangestate", this.#o), this.#l(s.detailRepositoryAlias), this.consumeContext(c, (e) => {
      this.#e = e, this.#e.removeEventListener(
        u.TYPE,
        this.#u
      ), this.#e.addEventListener(
        u.TYPE,
        this.#u
      );
    });
  }
  #t;
  #e;
  #s;
  #n;
  #i;
  #a;
  /**
   * Get the entity type
   * @returns { string } The entity type
   */
  getEntityType() {
    const t = this.#t.getEntityType();
    if (!t) throw new Error("Entity type is not set");
    return t;
  }
  /**
   * Get the current data
   * @returns { DetailModelType | undefined } The entity context
   */
  getData() {
    return this._data.getCurrent();
  }
  /**
   * Get the persisted data
   * @returns { DetailModelType | undefined } The persisted data
   */
  getPersistedData() {
    return this._data.getPersisted();
  }
  /**
   * Get the unique
   * @returns { string | undefined } The unique identifier
   */
  getUnique() {
    return this.#t.getUnique();
  }
  setUnique(t) {
    this.#t.setUnique(t);
  }
  /**
   * Get the parent
   * @returns { UmbEntityModel | undefined } The parent entity
   */
  getParent() {
    return this.#s.getValue();
  }
  setParent(t) {
    this.#s.setValue(t);
  }
  /**
   * Get the parent unique
   * @returns { string | undefined } The parent unique identifier
   */
  getParentUnique() {
    return this.#s.getValue()?.unique;
  }
  getParentEntityType() {
    return this.#s.getValue()?.entityType;
  }
  async load(t) {
    if (t === this.getUnique() && this._getDataPromise)
      return await this._getDataPromise;
    this.resetState(), this.setIsNew(!1), this.#t.setUnique(t), this.loading.addState({ unique: h, message: `Loading ${this.getEntityType()} Details` }), await this.#a, this._getDataPromise = this._detailRepository.requestByUnique(t);
    const s = await this._getDataPromise, e = s.data;
    return e && (this._data.setPersisted(e), this._data.setCurrent(e), this.observe(
      s.asObservable(),
      (i) => this.#c(i),
      "umbEntityDetailTypeStoreObserver"
    )), this.loading.removeState(h), s;
  }
  /**
   * Reload the workspace data
   * @returns { Promise<void> } The promise of the reload
   */
  async reload() {
    const t = this.getUnique();
    if (!t) throw new Error("Unique is not set");
    const { data: s } = await this._detailRepository.requestByUnique(t);
    s && (this._data.setPersisted(s), this._data.setCurrent(s));
  }
  /**
   * Method to check if the workspace data is loaded.
   * @returns { Promise<any> | undefined } true if the workspace data is loaded.
   * @memberof UmbEntityWorkspaceContextBase
   */
  isLoaded() {
    return this._getDataPromise;
  }
  /**
   * Create a data scaffold
   * @param {CreateArgsType} args The arguments to create the scaffold.
   * @param {UmbEntityModel} args.parent The parent entity.
   * @param {UmbEntityUnique} args.parent.unique The unique identifier of the parent entity.
   * @param {string} args.parent.entityType The entity type of the parent entity.
   * @param {Partial<DetailModelType>} args.preset The preset data.
   * @returns { Promise<any> | undefined } The data of the scaffold.
   */
  async createScaffold(t) {
    this.resetState(), this.loading.addState({ unique: h, message: `Creating ${this.getEntityType()} scaffold` }), await this.#a, this.setParent(t.parent);
    const s = this._detailRepository.createScaffold(t.preset);
    this._getDataPromise = s;
    let { data: e } = await s;
    return e && (e = await this._scaffoldProcessData(e), this.modalContext && (e = { ...e, ...this.modalContext.data.preset }), this.setIsNew(!0), this.#t.setUnique(e.unique), this._data.setPersisted(e), this._data.setCurrent(e)), this.loading.removeState(h), e;
  }
  async _scaffoldProcessData(t) {
    return t;
  }
  async submit() {
    await this.#a;
    const t = this.getData();
    if (!t)
      throw new Error("Data is not set");
    if (t.unique === void 0)
      throw new Error("Unique is not set");
    if (this.getIsNew()) {
      const s = this.#s.getValue();
      if (s?.unique === void 0) throw new Error("Parent unique is missing");
      if (!s.entityType) throw new Error("Parent entity type is missing");
      await this._create(t, s);
    } else
      await this._update(t);
  }
  /**
   * Deletes the entity.
   * @param unique The unique identifier of the entity to delete.
   */
  async delete(t) {
    await this.#a, await this._detailRepository.delete(t);
  }
  /**
   * Check if the workspace is about to navigate away.
   * @protected
   * @param {string} newUrl The new url that the workspace is navigating to.
   * @returns { boolean} true if the workspace is navigating away.
   * @memberof UmbEntityWorkspaceContextBase
   */
  _checkWillNavigateAway(t) {
    return !t.includes(this.routes.getActiveLocalPath());
  }
  async _create(t, s) {
    if (!this._detailRepository) throw new Error("Detail repository is not set");
    const { error: e, data: i } = await this._detailRepository.create(t, s.unique);
    if (e || !i)
      throw e?.message ?? "Repository did not return data after create.";
    this.#t.setUnique(i.unique), this._data.setPersisted(i), this._data.setCurrent(i);
    const r = await this.getContext(c), a = new O({
      entityType: s.entityType,
      unique: s.unique
    });
    r.dispatchEvent(a), this.setIsNew(!1);
  }
  async _update(t) {
    const { error: s, data: e } = await this._detailRepository.save(t);
    if (s || !e)
      throw s?.message ?? "Repository did not return data after create.";
    this._data.setPersisted(e), this._data.setCurrent(e);
    const i = this.getUnique(), r = this.getEntityType(), a = await this.getContext(c), o = new S({ unique: i, entityType: r });
    a.dispatchEvent(o);
    const b = new u({
      unique: i,
      entityType: r,
      eventUnique: this._workspaceEventUnique
    });
    a.dispatchEvent(b);
  }
  #r;
  #o;
  /**
   * Check if there are unpersisted changes.
   * @returns { boolean } true if there are unpersisted changes.
   */
  getHasUnpersistedChanges() {
    return this._data.getHasUnpersistedChanges();
  }
  // @deprecated use getHasUnpersistedChanges instead, will be removed in v17.0
  _getHasUnpersistedChanges() {
    return new W({
      removeInVersion: "17",
      deprecated: "_getHasUnpersistedChanges",
      solution: "use public getHasUnpersistedChanges instead."
    }).warn(), this.getHasUnpersistedChanges();
  }
  resetState() {
    super.resetState(), this.loading.clear(), this._data.clear(), this.#r = !1, this._getDataPromise = void 0;
  }
  #h() {
    this._detailRepository && (this.#i = !0, this.#n?.());
  }
  #l(t) {
    if (!t) throw new Error("Entity Workspace must have a repository alias.");
    new N(
      this,
      R,
      t,
      [],
      (s, e) => {
        this._detailRepository = s ? e.api : void 0, this.#h();
      }
    );
  }
  #c(t) {
    t || this._data.clear();
  }
  #u;
  destroy() {
    window.removeEventListener("willchangestate", this.#o), this.#e?.removeEventListener(
      u.TYPE,
      this.#u
    ), this._detailRepository?.destroy(), this.#t.destroy(), this._getDataPromise = void 0, super.destroy();
  }
}
class ot extends K {
  constructor() {
    super(...arguments), this.IS_ENTITY_NAMED_DETAIL_WORKSPACE_CONTEXT = !0, this.name = this._data.createObservablePartOfCurrent((t) => t?.name);
  }
  getName() {
    return this._data.getCurrent()?.name;
  }
  setName(t) {
    this._data.updateCurrent({ name: t });
  }
}
const H = Symbol("IsNewRedirectControllerAlias");
class ut extends m {
  constructor(t, s, e) {
    super(t, H), this.observe(s.isNew, (i) => {
      if (i === !1) {
        const r = s.getUnique();
        if (e && r) {
          const a = e.absoluteRouterPath;
          if (a) {
            const o = I(D(a) + "edit/:id", {
              id: r
            });
            this.destroy(), window.history.replaceState(null, "", o);
          }
        }
      }
    });
  }
}
class ht {
  constructor() {
    this.#t = new E([], (t) => t.index).sortBy(
      (t, s) => (t.index || 0) - (s.index || 0)
    ), this.activeVariantsInfo = this.#t.asObservable();
  }
  #t;
  getWorkspaceRoute() {
    return this._routeBase;
  }
  setWorkspaceRoute(t) {
    this._routeBase = t;
  }
  setActiveVariant(t, s, e) {
    this.#t.appendOneAt({ index: t, culture: s ?? null, segment: e ?? null }, t);
  }
  getActiveVariants() {
    return this.#t.getValue();
  }
  removeActiveVariant(t) {
    this.getActiveVariants().length > 1 && this.#t.removeOne(t);
  }
  activeVariantByIndex(t) {
    return this.#t.asObservablePart((s) => s.find((e) => e.index === t) || void 0);
  }
  switchVariant(t, s) {
    const e = this.getWorkspaceRoute();
    if (e) {
      const i = this.getActiveVariants();
      if (i && t < i.length) {
        const r = [...i];
        r[t] = { index: t, culture: s.culture, segment: s.segment };
        const a = r.map((o) => l.Create(o).toString()).join("_&_");
        return history.pushState(null, "", `${e}/${a}`), !0;
      }
    }
    return !1;
  }
  openSplitView(t) {
    const s = this.getActiveVariants()[0], e = this.getWorkspaceRoute();
    return s && e ? (history.pushState(null, "", `${e}/${l.Create(s)}_&_${t}`), !0) : !1;
  }
  closeSplitView(t) {
    const s = this.getWorkspaceRoute();
    if (s) {
      const e = this.getActiveVariants();
      if (e && t < e.length) {
        const r = e.filter((a) => a.index !== t).map((a) => l.Create(a)).join("_&_");
        return history.pushState(null, "", `${s}/${r}`), !0;
      }
    }
    return !1;
  }
}
function lt(n) {
  if (n)
    return Object.keys(n).map((t) => ({
      alias: t,
      value: n[t]
    }));
}
class ct extends g {
  constructor(t, s) {
    super(t, q), this.#t = new p(!1), this.readOnly = this.#t.asObservable(), this.#e = s, this.name = this.#e.name;
  }
  #t;
  #e;
  // default data:
  getVariantId() {
    return l.CreateInvariant();
  }
  getEntityType() {
    return this.#e.getEntityType();
  }
  getUnique() {
    return this.#e.getUnique();
  }
  getName() {
    return this.#e.getName();
  }
  setName(t) {
    this.#e.setName(t);
  }
  get properties() {
    return this.#e.values;
  }
  getProperties() {
    return this.#e.getValues();
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>}
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(t) {
    return await this.#e.propertyValueByAlias(t);
  }
  /**
   * @param {string} propertyAlias - The alias of the property
   * @param {unknown} value - The value to be set for this property
   * @returns {Promise<void>} - an promise which resolves once the value has been set.
   */
  async setPropertyValue(t, s) {
    return this.#e.setPropertyValue(t, s);
  }
  getReadOnly() {
    return this.#t.getValue();
  }
}
export {
  mt as UMB_ENTITY_DETAIL_WORKSPACE_CONTEXT,
  _t as UMB_ENTITY_NAMED_DETAIL_WORKSPACE_CONTEXT,
  Et as UMB_ENTITY_WORKSPACE_CONTEXT,
  gt as UMB_NAMABLE_WORKSPACE_CONTEXT,
  yt as UMB_PROPERTY_STRUCTURE_WORKSPACE_CONTEXT,
  bt as UMB_PUBLISHABLE_WORKSPACE_CONTEXT,
  vt as UMB_ROUTABLE_WORKSPACE_CONTEXT,
  v as UMB_SUBMITTABLE_WORKSPACE_CONTEXT,
  Ct as UMB_VARIANT_WORKSPACE_CONTEXT,
  Ut as UMB_WORKSPACE_CONDITION_ALIAS,
  C as UMB_WORKSPACE_CONTEXT,
  wt as UMB_WORKSPACE_ENTITY_IS_NEW_CONDITION,
  Tt as UMB_WORKSPACE_ENTITY_IS_NEW_CONDITION_ALIAS,
  ft as UMB_WORKSPACE_HAS_COLLECTION_CONDITION,
  Pt as UMB_WORKSPACE_HAS_COLLECTION_CONDITION_ALIAS,
  At as UMB_WORKSPACE_MODAL,
  Ot as UMB_WORKSPACE_PATH_PATTERN,
  St as UMB_WORKSPACE_SPLIT_VIEW_CONTEXT,
  Nt as UMB_WORKSPACE_VIEW_PATH_PATTERN,
  nt as UmbEditableWorkspaceContextBase,
  Rt as UmbEntityDetailNotFoundElement,
  K as UmbEntityDetailWorkspaceContextBase,
  Vt as UmbEntityDetailWorkspaceEditorElement,
  ot as UmbEntityNamedDetailWorkspaceContextBase,
  L as UmbEntityWorkspaceDataManager,
  ct as UmbInvariantWorkspacePropertyDatasetContext,
  rt as UmbSaveWorkspaceAction,
  rt as UmbSubmitWorkspaceAction,
  y as UmbSubmittableWorkspaceContextBase,
  B as UmbWorkspaceActionBase,
  Wt as UmbWorkspaceActionMenuElement,
  at as UmbWorkspaceActionMenuItemBase,
  It as UmbWorkspaceEditorElement,
  Dt as UmbWorkspaceElement,
  xt as UmbWorkspaceEntityActionMenuElement,
  kt as UmbWorkspaceFooterLayoutElement,
  qt as UmbWorkspaceHeaderNameEditableElement,
  Bt as UmbWorkspaceInfoAppLayoutElement,
  ut as UmbWorkspaceIsNewRedirectController,
  H as UmbWorkspaceIsNewRedirectControllerAlias,
  Mt as UmbWorkspaceModalElement,
  M as UmbWorkspaceRouteManager,
  Lt as UmbWorkspaceSplitViewContext,
  Kt as UmbWorkspaceSplitViewElement,
  ht as UmbWorkspaceSplitViewManager,
  Ht as UmbWorkspaceSplitViewVariantSelectorElement,
  Xt as element,
  lt as umbObjectToPropertyValueArray
};
//# sourceMappingURL=index.js.map
