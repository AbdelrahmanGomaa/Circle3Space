import { U as m } from "./index-jGJQ3LmE.js";
import { UmbTextStyles as f } from "@umbraco-cms/backoffice/style";
import { html as C, css as w, state as O, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as S } from "@umbraco-cms/backoffice/lit-element";
import { observeMultiple as l, createObservablePart as d, UmbClassState as p, mergeObservables as T, appendToFrozenArray as U, UmbObjectState as D, UmbStringState as P, UmbBooleanState as V } from "@umbraco-cms/backoffice/observable-api";
import { UmbElementPropertyDatasetContext as _, UmbElementWorkspaceDataManager as k } from "@umbraco-cms/backoffice/content";
import { UmbContentTypeStructureManager as B } from "@umbraco-cms/backoffice/content-type";
import { UmbControllerBase as I } from "@umbraco-cms/backoffice/class-api";
import { UmbDocumentTypeDetailRepository as A } from "@umbraco-cms/backoffice/document-type";
import { UmbVariantId as u } from "@umbraco-cms/backoffice/variant";
import { UmbValidationController as N } from "@umbraco-cms/backoffice/validation";
import { UmbReadOnlyVariantStateManager as v, decodeFilePath as M } from "@umbraco-cms/backoffice/utils";
import { UmbDataTypeItemRepositoryManager as K } from "@umbraco-cms/backoffice/data-type";
import { UmbSubmittableWorkspaceContextBase as x, UmbWorkspaceIsNewRedirectController as L, UmbWorkspaceIsNewRedirectControllerAlias as R } from "@umbraco-cms/backoffice/workspace";
import { UMB_MODAL_MANAGER_CONTEXT as q, UMB_DISCARD_CHANGES_MODAL as W, UMB_MODAL_CONTEXT as H } from "@umbraco-cms/backoffice/modal";
import { UMB_BLOCK_MANAGER_CONTEXT as z, UMB_BLOCK_ENTRIES_CONTEXT as X, UMB_BLOCK_ENTRY_CONTEXT as j } from "@umbraco-cms/backoffice/block";
var $ = Object.defineProperty, F = Object.getOwnPropertyDescriptor, b = (n, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? F(e, t) : e, r = n.length - 1, a; r >= 0; r--)
    (a = n[r]) && (s = (i ? a(e, t, s) : a(s)) || s);
  return i && s && $(e, t, s), s;
};
let h = class extends S {
  constructor() {
    super(), this._headline = "", this.consumeContext(m, (n) => {
      this.observe(
        l([
          n.isNew,
          n.content.structure.ownerContentTypeObservablePart((e) => e?.name)
        ]),
        ([e, t]) => {
          this._headline = this.localize.term(e ? "general_add" : "general_edit") + " " + this.localize.string(t);
        },
        "observeOwnerContentElementTypeName"
      );
    });
  }
  render() {
    return C`<umb-workspace-editor headline=${this._headline}> </umb-workspace-editor> `;
  }
};
h.styles = [
  f,
  w`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
b([
  O()
], h.prototype, "_headline", 2);
h = b([
  E("umb-block-workspace-editor")
], h);
class G extends _ {
  constructor(e, t, i) {
    super(e, t, i), this.name = t.name, this.getName = t.getName, this.culture = d(t.variantId, (s) => s?.culture), this.segment = d(t.variantId, (s) => s?.segment), this.consumeContext(m, (s) => {
      this.observe(
        s.readOnlyState.states,
        (r) => {
          const a = r.some((o) => o.variantId.equal(t.getVariantId()));
          this._readOnly.setValue(a);
        },
        "umbObserveReadOnlyStates"
      );
    });
  }
}
class y extends I {
  constructor(e, t) {
    super(e), this.#t = new k(this), this.data = this.#t.current, this.#o = new Promise((i) => {
      this.#i = i;
    }), this.readOnlyState = new v(this), this.#r = new p(void 0), this.variantId = this.#r.asObservable(), this.unique = this.#t.createObservablePartOfCurrent((i) => i?.key), this.contentTypeId = this.#t.createObservablePartOfCurrent((i) => i?.contentTypeKey), this.values = this.#t.createObservablePartOfCurrent((i) => i?.values), this.#s = new K(this), this.#a = /* @__PURE__ */ new Map(), this.structure = new B(
      this,
      new A(this)
    ), this.validation = new N(this), this.finishPropertyValueChange = () => {
      this.#t.finishPropertyValueChange();
    }, this.name = e.name, this.getName = e.getName, this.observe(this.contentTypeId, (i) => this.structure.loadType(i)), this.observe(this.unique, (i) => {
      i && this.validation.setDataPath("$." + t + `[?(@.key == '${i}')]`);
    }), this.observe(
      this.structure.contentTypeDataTypeUniques,
      (i) => {
        this.#s.setUniques(i);
      },
      null
    ), this.observe(
      this.#s.items,
      (i) => {
        this.#a = new Map(
          i.map((s) => [s.unique, s.propertyEditorSchemaAlias])
        );
      },
      null
    );
  }
  #t;
  #o;
  #i;
  #r;
  getValues() {
    return this.#t.getCurrent()?.values;
  }
  #s;
  #a;
  isLoaded() {
    return this.#o;
  }
  resetState() {
    this.#t.clear();
  }
  setVariantId(e) {
    this.#r.setValue(e);
  }
  getVariantId() {
    return this.#r.getValue() ?? u.CreateInvariant();
  }
  // TODO: rename to currentData:
  setData(e) {
    this.#t.setPersisted(e), this.#t.setCurrent(e), this.#i();
  }
  getData() {
    return this.#t.getCurrent();
  }
  setPersistedData(e) {
    this.#t.setPersisted(e);
  }
  /**
   * Check if there are unpersisted changes.
   * @returns { boolean } true if there are unpersisted changes.
   */
  getHasUnpersistedChanges() {
    return this.#t.getHasUnpersistedChanges();
  }
  getUnique() {
    return this.getData()?.key;
  }
  getEntityType() {
    return "element";
  }
  getContentTypeId() {
    return this.getData()?.contentTypeKey;
  }
  #c(e, t) {
    return t.toVariant(e.variesByCulture, e.variesBySegment);
  }
  // We will implement propertyAlias in the future, when implementing Varying Blocks. [NL]
  async propertyVariantId(e) {
    return T(
      [await this.structure.propertyStructureByAlias(e), this.variantId],
      ([t, i]) => t && i ? this.#c(t, i) : void 0
    );
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias - The alias of the property
   * @param {UmbVariantId} variantId - The variant
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>} - An observable for the value of the property
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(e, t) {
    return this.#t.createObservablePartOfCurrent(
      (i) => i?.values?.find((s) => s?.alias === e && (t ? t.compare(s) : !0))?.value
    );
  }
  /**
   * Get the current value of the property with the given alias and variantId.
   * @param {string} alias - The alias of the property
   * @param {UmbVariantId | undefined} variantId - The variant id of the property
   * @returns {ReturnType | undefined} The value or undefined if not set or found.
   */
  getPropertyValue(e, t) {
    const i = this.#t.getCurrent();
    if (i)
      return i.values?.find(
        (r) => r.alias === e && (t ? t.compare(r) : !0)
      )?.value;
  }
  async setPropertyValue(e, t, i) {
    this.initiatePropertyValueChange(), i ??= u.CreateInvariant();
    const s = await this.structure.getPropertyStructureByAlias(e);
    if (!s)
      throw new Error(`Property alias "${e}" not found.`);
    const r = this.#a.get(s.dataType.unique);
    if (!r)
      throw new Error(`Editor Alias of "${s.dataType.unique}" not found.`);
    const a = { editorAlias: r, ...i.toObject(), alias: e, value: t }, o = this.getData();
    if (o) {
      const g = U(
        o.values ?? [],
        a,
        (c) => c.alias === e && i.compare(c)
      );
      this.#t.updateCurrent({ values: g });
    }
    this.finishPropertyValueChange();
  }
  initiatePropertyValueChange() {
    this.#t.initiatePropertyValueChange();
  }
  createPropertyDatasetContext(e, t) {
    return new G(e, this, t);
  }
  setup(e, t) {
    this.createPropertyDatasetContext(e, t), this.validation.provideAt(e);
  }
  destroy() {
    this.structure.destroy(), super.destroy();
  }
}
class dt extends x {
  constructor(e, t) {
    super(e, t.manifest.alias), this.IS_BLOCK_WORKSPACE_CONTEXT = !0, this.#e = new D(void 0), this.layout = this.#e.asObservable(), this.unique = this.#e.asObservablePart((s) => s?.contentKey), this.contentKey = this.#e.asObservablePart((s) => s?.contentKey), this.content = new y(this, "contentData"), this.settings = new y(this, "settingsData"), this.#n = new P(void 0), this.name = this.#n.asObservable(), this.#y = new p(void 0), this.variantId = this.#y.asObservable(), this.#p = new V(void 0), this.exposed = this.#p.asObservable(), this.readOnlyState = new v(this), this.#m = !1, this.#v = async (s) => {
      const r = s.detail.url;
      if (this.#m)
        return !0;
      if (this._checkWillNavigateAway(r) && this.getHasUnpersistedChanges()) {
        s.preventDefault();
        const o = (await this.getContext(q).catch(() => {
        }))?.open(this, W);
        if (o)
          try {
            return await o.onSubmit(), this.#m = !0, history.pushState({}, "", s.detail.url), !0;
          } catch {
            return !1;
          }
        else
          console.error("No modal manager found!");
      }
      return !0;
    }, this.#C = () => {
      if (this.#h)
        if (this.getIsNew() === !0) {
          const s = this.#e.value?.contentKey;
          s && this.#i?.delete(s);
        } else
          this.#d && this.#t?.setOneLayout(this.#d, this.#s), this.#l && this.#t?.setOneContent(this.#l), this.#u && this.#t?.setOneContent(this.#u);
    };
    const i = t.manifest;
    this.#b = i.meta?.entityType, window.addEventListener("willchangestate", this.#v), this.addValidationContext(this.content.validation), this.addValidationContext(this.settings.validation), this.#c = this.consumeContext(H, (s) => {
      this.#a = s, this.#s = s?.data.originData, s.onSubmit().catch(this.#C);
    }).asPromise(), this.#o = this.consumeContext(z, (s) => {
      this.#t = s, this.#w();
    }), this.#r = this.consumeContext(X, (s) => {
      this.#i = s;
    }).asPromise(), this.consumeContext(j, (s) => {
      this.#n.setValue(s.getName());
    }), this.observe(this.variantId, (s) => {
      this.content.setVariantId(s), this.settings.setVariantId(s);
    }), this.routes.setRoutes([
      {
        path: "create/:elementTypeKey",
        component: h,
        setup: async (s, r) => {
          const a = r.match.params.elementTypeKey;
          await this.create(a), new L(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:key",
        component: h,
        setup: (s, r) => {
          const a = M(r.match.params.key);
          this.load(a);
        }
      }
    ]);
  }
  //
  #t;
  #o;
  #i;
  #r;
  #s;
  // Set the origin data for this workspace. Example used by inline editing which setups the workspace context it self.
  setOriginData(e) {
    this.#s = e;
  }
  #a;
  #c;
  #b;
  #h;
  #d;
  #l;
  #u;
  #e;
  #n;
  #y;
  #p;
  #w() {
    if (!this.#t) return;
    const e = this.#t;
    this.observe(
      e.liveEditingMode,
      (t) => {
        this.#h = t ?? !1;
      },
      "observeLiveEditingMode"
    ), this.observe(
      l([
        e.variantId,
        this.content.structure.variesByCulture,
        this.content.structure.variesBySegment
      ]),
      ([t, i, s]) => {
        !t || i === void 0 || s === void 0 || (!s && !i ? t = u.CreateInvariant() : s ? i || (t = t.toCultureInvariant()) : t = t.toSegmentInvariant(), this.#y.setValue(t));
      },
      "observeVariantIds"
    ), this.removeUmbControllerByAlias("observeHasExpose"), this.observe(
      l([this.contentKey, this.variantId]),
      ([t, i]) => {
        !t || !i || this.observe(
          e.hasExposeOf(t, i),
          (s) => {
            this.#p.setValue(s);
          },
          "observeHasExpose"
        );
      },
      "observeContentKeyAndVariantId"
    ), this.observe(
      l([e.readOnlyState.isReadOnly, this.variantId]),
      ([t, i]) => {
        const s = "UMB_BLOCK_MANAGER_CONTEXT";
        if (i !== void 0)
          if (t) {
            const r = {
              unique: s,
              variantId: i,
              message: ""
            };
            this.readOnlyState?.addState(r);
          } else
            this.readOnlyState?.removeState(s);
      },
      "observeIsReadOnly"
    ), this.observe(
      this.content.contentTypeId,
      (t) => {
        this.observe(
          t ? e.blockTypeOf(t) : void 0,
          (i) => {
            i?.editorSize && this.setEditorSize(i.editorSize);
          },
          "observeBlockType"
        );
      },
      "observeContentTypeId"
    );
  }
  #m;
  #v;
  /**
   * Check if the workspace is about to navigate away.
   * @protected
   * @param {string} newUrl The new url that the workspace is navigating to.
   * @returns { boolean} true if the workspace is navigating away.
   * @memberof UmbEntityWorkspaceContextBase
   */
  _checkWillNavigateAway(e) {
    return !e.includes(this.routes.getActiveLocalPath());
  }
  setEditorSize(e) {
    this.#a?.setModalSize(e);
  }
  resetState() {
    super.resetState(), this.#n.setValue(void 0), this.#e.setValue(void 0), this.#d = void 0, this.#l = void 0, this.#u = void 0, this.content.resetState(), this.settings.resetState(), this.#m = !1, this.removeUmbControllerByAlias(R);
  }
  async load(e) {
    if (await this.#o, await this.#r, !this.#t || !this.#i)
      throw new Error("Block manager not found");
    this.observe(
      this.#i.layoutOf(e),
      (t) => {
        this.#d ??= t, this.removeUmbControllerByAlias("observeLayoutInitially");
      },
      "observeLayoutInitially"
    ), this.#g(e), this.#h && this.establishLiveSync();
  }
  async create(e) {
    if (await this.#r, await this.#c, !this.#i)
      throw new Error("Block Entries not found");
    if (!this.#s)
      throw new Error("Origin data not defined");
    this.setIsNew(!0);
    const t = await this.#i.create(e, {}, this.#s);
    if (!t)
      throw new Error("Block Entries could not create block");
    if (this.#h) {
      if (!await this.#i.insert(
        t.layout,
        t.content,
        t.settings,
        this.#s
      ))
        throw new Error("Block Entries could not insert block");
      const s = t.layout.contentKey;
      this.#g(s), this.establishLiveSync();
    } else
      this.#e.setValue(t.layout), this.content.setData(t.content), t.settings && this.settings.setData(t.settings);
  }
  #g(e) {
    if (!this.#i)
      throw new Error("Block Entries not found");
    this.observe(
      this.#i.layoutOf(e),
      (t) => {
        this.#e.setValue(t);
        const i = t?.contentKey;
        if (!i)
          return;
        this.observe(
          this.#t.contentOf(i),
          (r) => {
            this.content.setData(r);
          },
          "observeContent"
        ), this.#l || this.observe(
          this.#t.contentOf(i),
          (r) => {
            this.#l ??= r, this.removeUmbControllerByAlias("observeContentInitially");
          },
          "observeContentInitially"
        );
        const s = t?.settingsKey;
        s && (this.observe(
          this.#t.settingsOf(s),
          (r) => {
            this.settings.setData(r);
          },
          "observeSettings"
        ), this.#u || this.observe(
          this.#t.settingsOf(s),
          (r) => {
            this.#u ??= r, this.removeUmbControllerByAlias("observeSettingsInitially");
          },
          "observeSettingsInitially"
        ));
      },
      "observeLayout"
    );
  }
  /**
   * Establishes live synchronization of the block's layout, content, and settings data.
   * This method observes local changes in the layout, content, and settings data and pushes those updates to the block manager.
   * This method is used in live editing mode to ensure that changes made to the block's data are immediately reflected
   * in the backoffice UI.
   */
  establishLiveSync() {
    let e = !0;
    this.observe(
      this.layout,
      (t) => {
        if (t) {
          if (e) {
            e = !1;
            return;
          }
          this.#t?.setOneLayout(t, this.#s);
        }
      },
      "observeThisLayout"
    ), this.observe(
      this.content.data,
      (t) => {
        t && this.#t?.setOneContent(t);
      },
      "observeThisContent"
    ), this.observe(
      this.settings.data,
      (t) => {
        t && this.#t?.setOneSettings(t);
      },
      "observeThisSettings"
    );
  }
  getData() {
    return this.#e.getValue();
  }
  getUnique() {
    return this.getData().contentKey;
  }
  getEntityType() {
    return this.#b;
  }
  getName() {
    return "block name content element type here...";
  }
  /**
   * Check if there are unpersisted changes.
   * @returns { boolean } true if there are unpersisted changes.
   */
  getHasUnpersistedChanges() {
    return this.content.getHasUnpersistedChanges() || this.settings.getHasUnpersistedChanges();
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias - The alias of the property to get the value of.
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>} - The value of the property.
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(e) {
    return this.#e.asObservablePart(
      (t) => t?.[e]
    );
  }
  getPropertyValue(e) {
    return this.#e.getValue()?.[e];
  }
  /**
   * @function setPropertyValue
   * @param {string} alias - The alias of the property to set the value of.
   * @param {unknown} value - value can be a promise resolving into the actual value or the raw value it self.
   * @returns {Promise<void>}
   * @description Set the value of this property.
   */
  async setPropertyValue(e, t) {
    const i = this.#e.value;
    i && this.#e.update({ ...i, [e]: await t });
  }
  async submit() {
    const e = this.#e.value, t = this.content.getData();
    if (!e || !this.#t || !this.#i || !t || !this.#s)
      throw new Error("Missing data");
    const i = this.settings.getData();
    if (this.content.setPersistedData(t), i && this.settings.setPersistedData(i), !this.#h)
      if (this.getIsNew() === !0) {
        if (!await this.#i.insert(e, t, i, this.#s))
          throw new Error("Block Entries could not insert block");
      } else
        this.#t.setOneLayout(e, this.#s), t && this.#t.setOneContent(t), i && this.#t.setOneSettings(i);
    this.#f(e.contentKey), this.setIsNew(!1), this.#O();
  }
  #O() {
    this.content.validation.report(), this.settings.validation.report();
  }
  expose() {
    const e = this.#e.value?.contentKey;
    if (!e) throw new Error("Failed to expose block, missing content key.");
    this.#f(e);
  }
  #f(e) {
    const t = this.#y.getValue();
    if (!t) throw new Error("Failed to expose block, missing variant id.");
    this.#t?.setOneExpose(e, t);
  }
  #C;
  destroy() {
    super.destroy(), window.removeEventListener("willchangestate", this.#v), this.#e?.destroy(), this.#n?.destroy(), this.#e = void 0, this.#n = void 0, this.#t = void 0, this.#s = void 0;
  }
}
export {
  dt as UmbBlockWorkspaceContext,
  dt as api
};
//# sourceMappingURL=block-workspace.context-BVxs7tan.js.map
