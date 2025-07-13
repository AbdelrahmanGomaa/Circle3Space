import { U as _t, a as Ot } from "../block-catalogue-modal.token-CqYZWuQE.js";
import { U as Ct } from "../block-entry.context-token-DG6_TzkT.js";
import { UmbContextBase as T, UmbControllerBase as U } from "@umbraco-cms/backoffice/class-api";
import { UmbBooleanState as f, UmbClassState as _, UmbNumberState as D, UmbStringState as p, UmbObjectState as d, mergeObservables as h, observeMultiple as m, UmbArrayState as b } from "@umbraco-cms/backoffice/observable-api";
import { UmbReadOnlyVariantStateManager as E, encodeFilePath as O, UmbDeprecation as P } from "@umbraco-cms/backoffice/utils";
import { umbConfirmModal as x } from "@umbraco-cms/backoffice/modal";
import { UmbLocalizationController as A } from "@umbraco-cms/backoffice/localization-api";
import { UmbRoutePathAddendumContext as L } from "@umbraco-cms/backoffice/router";
import { UmbVariantId as V } from "@umbraco-cms/backoffice/variant";
import { UmbUfmVirtualRenderController as I } from "@umbraco-cms/backoffice/ufm";
import { a as M } from "../block-catalogue-modal.element-1MlNjslD.js";
import { U as Et, b as Pt } from "../block-catalogue-modal.element-1MlNjslD.js";
import { U as kt } from "../block-entries.context-CSSvS_hC.js";
import { UmbDocumentTypeDetailRepository as R } from "@umbraco-cms/backoffice/document-type";
import { UmbContentTypeStructureManager as N } from "@umbraco-cms/backoffice/content-type";
import { UmbId as v } from "@umbraco-cms/backoffice/id";
import { UmbPropertyValuePresetVariantBuilderController as q } from "@umbraco-cms/backoffice/property";
import { UMB_APP_LANGUAGE_CONTEXT as w } from "@umbraco-cms/backoffice/language";
import { UmbDataTypeDetailRepository as $ } from "@umbraco-cms/backoffice/data-type";
import { UmbAbstractArrayValidationPathTranslator as k, UmbDataPathPropertyValueQuery as B, umbScopeMapperForJsonPaths as C, UmbValidationPropertyPathTranslationController as F, umbQueryMapperForJsonPaths as X } from "@umbraco-cms/backoffice/validation";
import { c as Kt, b as St, U as Ut, a as Dt } from "../index-jGJQ3LmE.js";
const ut = "block";
class ct extends T {
  constructor(t, e, n) {
    super(t, "UmbBlockEntryContext"), this.#r = new f(void 0), this.unsupported = this.#r.asObservable(), this.#i = new A(this), this.#o = new L(this), this.#e = new _(void 0), this._variantId = this.#e.asObservable(), this.#l = new f(void 0), this.hasExpose = this.#l.asObservable(), this.readOnlyState = new E(this), this.#s = new D(void 0), this.index = this.#s.asObservable(), this.#n = new p(void 0), this.createBeforePath = this.#n.asObservable(), this.#a = new p(void 0), this.createAfterPath = this.#a.asObservable(), this.#h = new d(void 0), this.contentElementTypeName = this.#h.asObservablePart((s) => s?.name), this.contentElementTypeAlias = this.#h.asObservablePart((s) => s?.alias), this.contentElementTypeIcon = this.#h.asObservablePart((s) => s?.icon), this._blockType = new d(void 0), this.blockType = this._blockType.asObservable(), this.contentElementTypeKey = this._blockType.asObservablePart((s) => s?.contentElementTypeKey), this.settingsElementTypeKey = this._blockType.asObservablePart(
      (s) => s ? s.settingsElementTypeKey ?? void 0 : null
    ), this._layout = new d(void 0), this.layout = this._layout.asObservable(), this.contentKey = this._layout.asObservablePart((s) => s?.contentKey), this.settingsKey = this._layout.asObservablePart((s) => s ? s.settingsKey ?? null : void 0), this.unique = this._layout.asObservablePart((s) => s?.contentKey), this.#y = new p(""), this.label = this.#y.asObservable(), this.#m = new I(this), this.#p = (s, i) => s && i ? s + "edit/" + O(i) + "/view/content" : "", this.#v = (s, i) => s && i ? s + "edit/" + O(i) + "/view/settings" : "", this.#d = new p(void 0), this.workspacePath = this.#d.asObservable(), this.workspaceEditContentPath = h(
      [this.contentKey, this.workspacePath],
      ([s, i]) => this.#p(i, s)
    ), this.workspaceEditSettingsPath = h(
      [this.contentKey, this.workspacePath],
      ([s, i]) => this.#v(i, s)
    ), this.#b = new Promise((s) => {
      this.#f = () => {
        s(void 0), this.#f = void 0;
      };
    }), this.#_ = new f(void 0), this._contentStructureHasProperties = this.#_.asObservable(), this.#C = new Promise((s) => {
      this.#w = () => {
        s(void 0), this.#w = void 0;
      };
    }), this.#c = new d(void 0), this._contentValueArray = this.#c.asObservablePart((s) => s?.values), this.contentTypeKey = this.#c.asObservablePart((s) => s?.contentTypeKey), this.#g = new d(void 0), this._settingsValueArray = this.#g.asObservablePart((s) => s?.values), this.settingsDataContentTypeKey = this.#g.asObservablePart(
      (s) => s ? s.contentTypeKey ?? void 0 : null
    ), this.#P = ([s, i, a]) => {
      if (!(!s || !i || !a))
        return i.reduce((r, l) => {
          const u = this.#V(l, a);
          return r[l.alias] = s.find(
            (c) => c.alias === l.alias && u.compare(c)
          )?.value, r;
        }, {});
    }, this.observe(this.label, (s) => {
      this.#m.markdown = s;
    }), this.#S(), this.consumeContext(e, (s) => {
      this._manager = s, this._gotManager(), this.#D();
    }), this.consumeContext(n, (s) => {
      this._entries = s, this._gotEntries(), this.#x();
    }), this.observe(
      this.unique,
      (s) => {
        this.#o.setAddendum(s), s && this.#B();
      },
      null
    ), this.observe(
      this.contentTypeKey,
      (s) => {
        s && (this.#M(), this.#K());
      },
      null
    ), this.observe(
      this.settingsDataContentTypeKey,
      (s) => {
        s && this.#R(s);
      },
      null
    ), this.observe(
      this.blockType,
      (s) => {
        s && this.#N();
      },
      null
    ), this.observe(
      m([this.settingsElementTypeKey, this.settingsDataContentTypeKey]),
      ([s, i]) => {
        if (!(s === void 0 || i === void 0) && s !== i && s != null) {
          const a = this.#g.getValue();
          a && this._manager?.setOneSettings({ ...a, contentTypeKey: s });
        }
      },
      null
    ), this.observe(
      m([this.settingsKey, this.blockType]),
      async ([s, i]) => {
        if (!(!this.#t || s === void 0 || !i))
          if (s == null && i.settingsElementTypeKey) {
            const a = await this._manager.createBlockSettingsData(i.contentElementTypeKey);
            this._manager?.setOneSettings(a), this._layout.update({ settingsKey: a.key });
          } else s && i.settingsElementTypeKey === void 0 && (this._manager?.removeOneSettings(s), this._layout.update({ settingsKey: void 0 }));
      },
      null
    );
  }
  #t;
  #r;
  #i;
  #o;
  #e;
  #l;
  // Workspace alike methods, to enables editing of data without the need of a workspace (Custom views and block grid inline editing mode for example).
  getEntityType() {
    return "block";
  }
  getUnique() {
    return this.getContentKey();
  }
  #s;
  getIndex() {
    return this.#s.value;
  }
  setIndex(t) {
    this.#s.setValue(t);
  }
  #n;
  #a;
  #h;
  /**
   * Get the name of the content element type.
   * @returns {string | undefined} - the name of the content element type.
   */
  getContentElementTypeName() {
    return this.#h.getValue()?.name;
  }
  /**
   * Get the alias of the content element type.
   * @returns {string | undefined} - the alias of the content element type.
   */
  getContentElementTypeAlias() {
    return this.#h.getValue()?.alias;
  }
  /**
   * Get the icon of the content element type.
   * @returns {string | undefined} - the icon of the content element type.
   */
  getContentElementTypeIcon() {
    return this.#h.getValue()?.icon;
  }
  /**
   * Get the layout of the block.
   * @returns {BlockLayoutType | undefined} - the layout of the block.
   */
  getLayout() {
    return this._layout.getValue();
  }
  #y;
  getLabel() {
    return this.#y.getValue();
  }
  #m;
  #p;
  #v;
  #d;
  #u;
  #f;
  #b;
  #_;
  #O;
  #w;
  #C;
  #V(t, e) {
    return V.Create({
      culture: t.variesByCulture ? e.culture : null,
      segment: t.variesBySegment ? e.segment : null
    });
  }
  async propertyVariantId(t, e) {
    return h(
      [await t.propertyStructureByAlias(e), this._variantId],
      ([n, s]) => n && s ? this.#V(n, s) : void 0
    );
  }
  setContentPropertyValue(t, e) {
    if (!this.#t) throw new Error("No content key set.");
    this._manager?.setOneContentProperty(this.#t, t, e);
  }
  setSettingsPropertyValue(t, e) {
    const n = this._layout.getValue()?.settingsKey;
    if (!n) throw new Error("Settings key was not available.");
    this._manager?.setOneSettingsProperty(n, t, e);
  }
  async contentPropertyValueByAlias(t) {
    return await this.#b, h(
      [
        this.#c.asObservablePart((e) => e?.values?.filter((n) => n?.alias === t)),
        await this.propertyVariantId(this.#u, t)
      ],
      ([e, n]) => {
        if (!(!e || !n))
          return e.find((s) => n.compare(s))?.value;
      }
    );
  }
  async settingsPropertyValueByAlias(t) {
    return await this.#C, h(
      [
        this.#c.asObservablePart((e) => e?.values?.filter((n) => n?.alias === t)),
        await this.propertyVariantId(this.#O, t)
      ],
      ([e, n]) => {
        if (!(!e || !n))
          return e.find((s) => n.compare(s))?.value;
      }
    );
  }
  #c;
  #T;
  async contentValues() {
    return await this.#b, this.#T || (this.#T = h(
      [this._contentValueArray, this.#u.contentTypeProperties, this._variantId],
      this.#P
    )), this.#T;
  }
  /**
   * Get the content of the block.
   * @returns {UmbBlockDataModel | undefined} - the content of the block.
   */
  getContent() {
    return this.#c.getValue();
  }
  #g;
  #E;
  async settingsValues() {
    return await this.#C, this.#E || (this.#E = h(
      [this._settingsValueArray, this.#O.contentTypeProperties, this._variantId],
      this.#P
    )), this.#E;
  }
  #P;
  /**
   * Get the settings of the block.
   * @returns {UmbBlockDataModel | undefined} - the settings of the block.
   */
  getSettings() {
    return this.#g.getValue();
  }
  async #S() {
    this.observe(await this.contentValues(), (t) => {
      this.#m.value = t;
    });
  }
  getContentKey() {
    return this._layout.value?.contentKey;
  }
  /**
   * Set the contentKey of this entry.
   * @function setContentKey
   * @param {string} contentKey the entry content key.
   * @returns {void}
   */
  setContentKey(t) {
    this.#t = t, this.#k();
  }
  /**
   * Get the current value of this Blocks label.
   * @function getName
   * @returns {string} - the value of the label.
   */
  getName() {
    return this.#m.toString();
  }
  #U() {
    this._entries && this.observe(
      m([this.index, this._entries.catalogueRouteBuilder, this._entries.canCreate]),
      ([t, e, n]) => {
        t !== void 0 && (e && n ? (this.#n.setValue(this._entries.getPathForCreateBlock(t)), this.#a.setValue(this._entries.getPathForCreateBlock(t + 1))) : (this.#n.setValue(void 0), this.#a.setValue(void 0)));
      },
      "observeRouteBuilderCreate"
    );
  }
  #k() {
    !this._entries || !this.#t || (this.observe(
      this._entries.layoutOf(this.#t),
      (t) => {
        this._layout.setValue(t);
      },
      "observeParentLayout"
    ), this.observe(
      this.layout,
      (t) => {
        t && this._entries?.setOneLayout(t);
      },
      "observeThisLayout"
    ));
  }
  #D() {
    this.#L(), this.#K(), this.#B(), this.#A(), this.#I();
  }
  #x() {
    this.#U(), this.#k(), this.observe(
      this._entries?.workspacePath,
      (t) => {
        this.#d.setValue(t);
      },
      "observeWorkspacePath"
    );
  }
  #B() {
    !this._manager || !this.#t || this.observe(
      this._manager.contentOf(this.#t),
      (t) => {
        this.#r.getValue() !== !0 && this.#r.setValue(!t), this.#c.setValue(t);
      },
      "observeContent"
    );
  }
  #A() {
    this.observe(
      this._manager ? this.settingsKey : void 0,
      (t) => {
        t && this.observe(
          this._manager?.settingsOf(t),
          (e) => {
            this.#g.setValue(e);
          },
          "observeSettings"
        );
      },
      "observeSettingsKey"
    );
  }
  async #L() {
    if (this._manager) {
      if (await this.#b, !this.#u)
        throw new Error("No contentStructure found");
      this.observe(
        m([
          this._manager.variantId,
          this.#u?.ownerContentTypeObservablePart((t) => t?.variesByCulture),
          this.#u?.ownerContentTypeObservablePart((t) => t?.variesBySegment)
        ]),
        ([t, e, n]) => {
          !t || e === void 0 || n === void 0 || (this.#e.setValue(t.toVariant(e, n)), this.#q());
        },
        "observeVariantId"
      );
    }
  }
  #I() {
    this._manager && this.observe(
      m([this._manager.readOnlyState.isReadOnly, this._manager.variantId]),
      ([t, e]) => {
        const n = "UMB_BLOCK_MANAGER_CONTEXT";
        if (e !== void 0)
          if (t) {
            const s = {
              unique: n,
              variantId: e,
              message: ""
            };
            this.readOnlyState?.addState(s);
          } else
            this.readOnlyState?.removeState(n);
      },
      "observeIsReadOnly"
    );
  }
  #M() {
    if (!this._manager) return;
    const t = this.#c.getValue()?.contentTypeKey;
    t && (this.#u = this._manager.getStructure(t), this.#f?.(), this.#u || this.#r.setValue(!0), this.observe(
      this.#u?.ownerContentType,
      (e) => {
        this.#h.setValue(e), this._gotContentType(e);
      },
      "observeContentElementType"
    ), this.observe(
      this.#u?.contentTypeHasProperties,
      (e) => {
        this.#_.setValue(e);
      },
      "observeContentTypeHasProperties"
    ));
  }
  #R(t) {
    !this._manager || !t || (this.#O = this._manager.getStructure(t), this.#w?.());
  }
  #K() {
    if (!this._manager) return;
    const t = this.#c.getValue()?.contentTypeKey;
    t && this.observe(
      this._manager.blockTypeOf(t),
      (e) => {
        this._blockType.setValue(e), e || this.#r.setValue(!0);
      },
      "observeBlockType"
    );
  }
  #N() {
    if (!this._manager) return;
    const t = this._blockType.getValue();
    if (t)
      if (t.label) {
        this.removeUmbControllerByAlias("observeContentTypeName"), this.#y.setValue(t.label);
        return;
      } else
        this.observe(
          this.contentElementTypeName,
          (e) => {
            this.#y.setValue(this.#i.string(e) || "no name");
          },
          "observeContentTypeName"
        );
  }
  #q() {
    const t = this.#e.getValue();
    !t || !this.#t || this.observe(
      this._manager?.hasExposeOf(this.#t, t),
      (e) => {
        this.#l.setValue(e);
      },
      "observeExpose"
    );
  }
  // Public methods:
  //activate
  edit() {
    window.history.pushState(
      {},
      "",
      this.#p(this.#d.value, this.getContentKey())
    );
  }
  editSettings() {
    window.history.pushState(
      {},
      "",
      this.#v(this.#d.value, this.getContentKey())
    );
  }
  async requestDelete() {
    const t = this.getName();
    await x(this, {
      headline: this.#i.term("blockEditor_confirmDeleteBlockTitle", t),
      content: this.#i.term("blockEditor_confirmDeleteBlockMessage", t),
      confirmLabel: this.#i.term("general_delete"),
      color: "danger"
    }), this.delete();
  }
  delete() {
    if (!this._entries) return;
    const t = this._layout.value?.contentKey;
    t && this._entries.delete(t);
  }
  expose() {
    const t = this.#e.getValue();
    !t || !this.#t || this._manager?.setOneExpose(this.#t, t);
  }
  /**
   * Get the expose of the block.
   * @returns {UmbBlockExposeModel | undefined} - the expose of the block.
   */
  getExpose() {
    return this._manager?.getExposes()?.find((e) => e.contentKey === this.#t);
  }
}
class yt extends T {
  constructor(t) {
    super(t, M), this.#t = [], this.#r = new R(this), this.#i = new p(void 0), this.propertyAlias = this.#i.asObservable(), this.#o = new _(void 0), this.variantId = this.#o.asObservable(), this.#e = [], this.#l = new b([], (e) => e.contentElementTypeKey), this.blockTypes = this.#l.asObservable(), this._editorConfiguration = new _(void 0), this.editorConfiguration = this._editorConfiguration.asObservable(), this._liveEditingMode = new f(void 0), this.liveEditingMode = this._liveEditingMode.asObservable(), this._layouts = new b([], (e) => e.contentKey), this.layouts = this._layouts.asObservable(), this.#s = new b([], (e) => e.key), this.contents = this.#s.asObservable(), this.#n = new b([], (e) => e.key), this.settings = this.#n.asObservable(), this.readOnlyState = new E(this), this.#a = new b(
      [],
      (e) => e.contentKey + "_" + e.culture + "_" + e.segment
    ), this.exposes = this.#a.asObservable(), this.observe(
      this.blockTypes,
      (e) => {
        e.forEach((n) => {
          this.#h(n.contentElementTypeKey), n.settingsElementTypeKey && this.#h(n.settingsElementTypeKey);
        });
      },
      null
    );
  }
  get contentTypesLoaded() {
    return Promise.all(this.#t);
  }
  #t;
  #r;
  #i;
  setPropertyAlias(t) {
    this.#i.setValue(t);
  }
  #o;
  setVariantId(t) {
    this.#o.setValue(t);
  }
  getVariantId() {
    return this.#o.getValue();
  }
  #e;
  #l;
  #s;
  #n;
  #a;
  setEditorConfiguration(t) {
    this._editorConfiguration.setValue(t), this._liveEditingMode.getValue() === void 0 && this._liveEditingMode.setValue(t.getValueByAlias("useLiveEditing"));
  }
  getEditorConfiguration() {
    return this._editorConfiguration.getValue();
  }
  editorConfigurationPart(t) {
    return this._editorConfiguration.asObservablePart(t);
  }
  setBlockTypes(t) {
    this.#l.setValue(t);
  }
  getBlockTypes() {
    return this.#l.value;
  }
  /**
   * Set all layouts.
   * @param {Array<BlockLayoutType>} layouts - All layouts.
   */
  setLayouts(t) {
    this._layouts.setValue(t);
  }
  /**
   * Get all layouts.
   * @returns {Array<BlockLayoutType>} - All layouts.
   */
  getLayouts() {
    return this._layouts.getValue();
  }
  /**
   * Set all contents.
   * @param {Array<UmbBlockDataModel>} contents - All contents.
   */
  setContents(t) {
    this.#s.setValue(t);
  }
  /**
   * Get all contents.
   * @returns {Array<UmbBlockDataModel>} - All contents.
   */
  getContents() {
    return this.#s.value;
  }
  /**
   * Set all settings.
   * @param {Array<UmbBlockDataModel>} settings - All settings.
   */
  setSettings(t) {
    this.#n.setValue(t);
  }
  /**
   * Get all settings.
   * @returns {Array<UmbBlockDataModel>} - All settings.
   */
  getSettings() {
    return this.#n.value;
  }
  /**
   * Set all exposes.
   * @param {Array<UmbBlockExposeModel>} exposes - All exposes.
   */
  setExposes(t) {
    this.#a.setValue(t);
  }
  /**
   * Get all exposes.
   * @returns {Array<UmbBlockExposeModel>} - All exposes.
   */
  getExposes() {
    return this.#a.value;
  }
  async #h(t) {
    if (this.#e.find((s) => s.getOwnerContentTypeUnique() === t)) return;
    const e = new N(this, this.#r), n = e.loadType(t);
    this.#t.push(n), this.#e.push(e);
  }
  getStructure(t) {
    return this.#e.find((e) => e.getOwnerContentTypeUnique() === t);
  }
  getContentTypeKeyOfContentKey(t) {
    return this.getContentOf(t)?.contentTypeKey;
  }
  contentTypeOf(t) {
    const e = this.#e.find((n) => n.getOwnerContentTypeUnique() === t);
    if (e)
      return e.ownerContentType;
  }
  contentTypeNameOf(t) {
    const e = this.#e.find((n) => n.getOwnerContentTypeUnique() === t);
    if (e)
      return e.ownerContentTypeObservablePart((n) => n?.name);
  }
  getContentTypeNameOf(t) {
    const e = this.#e.find((n) => n.getOwnerContentTypeUnique() === t);
    if (e)
      return e.getOwnerContentType()?.name;
  }
  getContentTypeHasProperties(t) {
    const e = this.#e.find((n) => n.getOwnerContentTypeUnique() === t);
    if (e)
      return e.getHasProperties();
  }
  blockTypeOf(t) {
    return this.#l.asObservablePart(
      (e) => e.find((n) => n.contentElementTypeKey === t)
    );
  }
  layoutOf(t) {
    return this._layouts.asObservablePart((e) => e.find((n) => n.contentKey === t));
  }
  contentOf(t) {
    return this.#s.asObservablePart((e) => e.find((n) => n.key === t));
  }
  settingsOf(t) {
    return this.#n.asObservablePart((e) => e.find((n) => n.key === t));
  }
  currentExposeOf(t) {
    if (this.getVariantId())
      return h(
        [this.#a.asObservablePart((n) => n.filter((s) => s.contentKey === t)), this.variantId],
        ([n, s]) => s ? n.find((i) => s.compare(i)) : void 0
      );
  }
  hasExposeOf(t, e) {
    if (e)
      return this.#a.asObservablePart(
        (n) => n.some((s) => s.contentKey === t && e.compare(s))
      );
  }
  getBlockTypeOf(t) {
    return this.#l.value.find((e) => e.contentElementTypeKey === t);
  }
  getContentOf(t) {
    return this.#s.value.find((e) => e.key === t);
  }
  getSettingsOf(t) {
    return this.#n.value.find((e) => e.key === t);
  }
  // originData param is used by some implementations. [NL] should be here, do not remove it.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setOneLayout(t, e) {
    this._layouts.appendOne(t);
  }
  setOneContent(t) {
    this.#s.appendOne(t);
  }
  setOneSettings(t) {
    this.#n.appendOne(t);
  }
  setOneExpose(t, e) {
    e && this.#a.appendOne({ contentKey: t, ...e.toObject() });
  }
  removeOneContent(t) {
    this.#s.removeOne(t);
  }
  removeOneSettings(t) {
    this.#n.removeOne(t);
  }
  removeManyContent(t) {
    this.#s.remove(t);
  }
  removeManySettings(t) {
    this.#n.remove(t);
  }
  removeExposesOf(t) {
    this.#a.filter((e) => e.contentKey !== t);
  }
  removeCurrentExpose(t) {
    const e = this.getVariantId();
    e && this.#a.filter((n) => !(n.contentKey === t && e.compare(n)));
  }
  setOneContentProperty(t, e, n) {
    this.#s.updateOne(t, { [e]: n });
  }
  setOneSettingsProperty(t, e, n) {
    this.#n.updateOne(t, { [e]: n });
  }
  contentProperty(t, e) {
    this.#s.asObservablePart(
      (n) => n.find((s) => s.key === t)?.values?.find((s) => s.alias === e)?.value
    );
  }
  settingsProperty(t, e) {
    this.#n.asObservablePart(
      (n) => n.find((s) => s.key === t)?.values?.find((s) => s.alias === e)?.value
    );
  }
  async createBlockSettingsData(t) {
    const e = this.#l.value.find((n) => n.contentElementTypeKey === t);
    if (!e)
      throw new Error(`Cannot create block settings, missing block type for ${t}`);
    if (!e.settingsElementTypeKey)
      throw new Error(`Cannot create block settings, missing settings element type for ${t}`);
    return {
      key: v.new(),
      contentTypeKey: e.settingsElementTypeKey,
      values: []
    };
  }
  async _createBlockElementData(t, e) {
    const n = await this.getContext(w), s = this.getStructure(e);
    if (!s)
      throw new Error(`Cannot create Preset for Block, missing content structure for ${e}`);
    const i = s.variesByCulture ? await n.getCultures() : [];
    if (i.length === 0)
      throw new Error("Could not retrieve app cultures.");
    const a = s.variesBySegment ? [] : void 0, r = new $(this), l = await s.getContentTypeProperties(), u = await Promise.all(
      l.map(async (y) => {
        const g = (await r.requestByUnique(y.dataType.unique)).data;
        if (!g)
          throw new Error(`DataType of "${y.dataType.unique}" not found.`);
        if (!g.editorUiAlias)
          throw new Error(`DataType of "${y.dataType.unique}" did not have a editorUiAlias.`);
        return {
          alias: y.alias,
          propertyEditorUiAlias: g.editorUiAlias,
          propertyEditorSchemaAlias: g.editorAlias,
          config: g.values,
          typeArgs: {
            variesByCulture: y.variesByCulture,
            variesBySegment: y.variesBySegment
          }
        };
      })
    ), c = new q(this);
    c.setCultures(i), a && c.setSegments(a);
    const S = await c.create(u);
    return {
      key: t,
      contentTypeKey: e,
      values: S
    };
  }
  async _createBlockData(t, e) {
    const n = this.#l.value.find((r) => r.contentElementTypeKey === t);
    if (!n)
      throw new Error(`Cannot create block, missing block type for ${t}`);
    const s = {
      contentKey: v.new(),
      ...e
    }, i = await this._createBlockElementData(s.contentKey, t);
    let a;
    return n.settingsElementTypeKey && (s.settingsKey = v.new(), a = await this._createBlockElementData(s.settingsKey, n.settingsElementTypeKey)), {
      layout: s,
      content: i,
      settings: a
    };
  }
  insertBlockData(t, e, n, s) {
    if (t.contentKey)
      this.#s.appendOne(e);
    else
      throw new Error("Cannot create block, missing contentKey");
    n && t.settingsKey && this.#n.appendOne(n), this.#y(e);
  }
  async #y(t) {
    await this.contentTypesLoaded;
    const e = this.getStructure(t.contentTypeKey);
    if (!e)
      throw new Error(`Cannot expose block, missing content structure for ${t.contentTypeKey}`);
    const n = this.getVariantId();
    if (!n)
      throw new Error("Cannot expose block, missing variantId");
    const s = e.getVariesByCulture(), i = e.getVariesBySegment(), a = n.toVariant(s, i);
    this.setOneExpose(t.key, a), s && (await (await this.getContext(w)).getMandatoryLanguages()).forEach((u) => {
      a.culture !== u.unique && this.setOneExpose(t.key, new V(u.unique));
    });
  }
  removeBlockKey(t) {
    this.#s.removeOne(t);
  }
}
class H {
  #t;
  #r;
  #i;
  #o;
  #e;
  constructor(t, e) {
    this.#r = t, this.#t = e?.contentIdUpdatedCallback;
  }
  async cloneValue(t) {
    return t && (this.#i = t.contentData, this.#o = t.settingsData, this.#e = t.expose, {
      ...t,
      layout: {
        [this.#r]: await this._cloneLayout(
          t.layout[this.#r]
        )
      },
      contentData: this.#i,
      settingsData: this.#o,
      expose: this.#e
    });
  }
  async _cloneBlock(t) {
    const e = { ...t }, n = t.contentKey, s = t.settingsKey, i = v.new();
    if (e.contentKey = i, this.#i = this.#i?.map((a) => a.key === n ? { ...a, key: i } : a), this.#e = this.#e?.map((a) => a.contentKey === n ? { ...a, contentKey: i } : a), this.#t?.(n, i), s) {
      const a = v.new();
      e.settingsKey = a, this.#o = this.#o?.map((r) => r.key === s ? { ...r, key: a } : r);
    }
    return e;
  }
  destroy() {
  }
}
class gt extends H {
  //
  _cloneLayout(t) {
    return t ? Promise.all(t.map((e) => this._cloneBlock(e))) : void 0;
  }
}
class W {
  async _processValueBlockData(t, e) {
    const n = await Promise.all(
      t.contentData?.map(async (i) => ({
        ...i,
        values: await e(i.values) ?? []
      }))
    ), s = await Promise.all(
      t.settingsData?.map(async (i) => ({
        ...i,
        values: await e(i.values) ?? []
      }))
    );
    return { ...t, contentData: n, settingsData: s };
  }
  async _processVariantBlockData(t, e) {
    const n = await e(t.expose) ?? [];
    return { ...t, expose: n };
  }
  compareVariants(t, e) {
    return t.contentKey === e.contentKey && t.culture === e.culture && t.segment === e.segment;
  }
  destroy() {
  }
}
class dt extends W {
  async processValues(t, e) {
    return t.value ? {
      ...t,
      value: await this._processValueBlockData(t.value, e)
    } : t;
  }
  async processVariants(t, e) {
    return t.value ? {
      ...t,
      value: await this._processVariantBlockData(t.value, e)
    } : t;
  }
}
const G = Symbol();
class mt extends k {
  constructor(t) {
    super(t, "$.values[", B, G), new P({
      removeInVersion: "17",
      deprecated: "UmbBlockElementValuesDataValidationPathTranslator",
      solution: "UmbBlockElementValuesDataValidationPathTranslator is deprecated."
    }).warn();
  }
  getDataFromIndex(t) {
    return this._context ? this._context.getTranslationData().values[t] : void 0;
  }
}
function K(o) {
  return `?(@.key == '${o.key}')`;
}
class bt extends k {
  #t;
  constructor(t, e) {
    super(t, "$." + e + "[", K), this.#t = e, new P({
      removeInVersion: "17",
      deprecated: "UmbBlockElementDataValidationPathTranslator",
      solution: "UmbBlockElementDataValidationPathTranslator is deprecated."
    }).warn();
  }
  getDataFromIndex(t) {
    if (!this._context) return;
    const n = this._context.getTranslationData()[this.#t][t];
    return !n || !n.key ? (console.error("block did not have key", `${this.#t}[${t}]`, n), !1) : n;
  }
}
class pt extends U {
  async _translateBlockData(t, e, n) {
    return await C(t, n, async (s) => {
      if (e.length === 0)
        return s;
      const i = new F(this);
      return s = await X(
        s,
        e,
        (a) => K(a),
        async (a, r) => !r || r.values.length === 0 ? a : await C(a, "$.values", async (l) => await i.translateProperties(l, r.values, B))
      ), i.destroy(), s;
    });
  }
}
export {
  _t as UMB_BLOCK_CATALOGUE_MODAL,
  ut as UMB_BLOCK_CLIPBOARD_ENTRY_VALUE_TYPE,
  Kt as UMB_BLOCK_ELEMENT_PROPERTY_DATASET_CONTEXT,
  Et as UMB_BLOCK_ENTRIES_CONTEXT,
  Ct as UMB_BLOCK_ENTRY_CONTEXT,
  M as UMB_BLOCK_MANAGER_CONTEXT,
  St as UMB_BLOCK_WORKSPACE_ALIAS,
  Ut as UMB_BLOCK_WORKSPACE_CONTEXT,
  Dt as UMB_BLOCK_WORKSPACE_MODAL,
  Pt as UmbBlockCatalogueModalElement,
  pt as UmbBlockEditorValidationPropertyPathTranslatorBase,
  bt as UmbBlockElementDataValidationPathTranslator,
  mt as UmbBlockElementValuesDataValidationPathTranslator,
  kt as UmbBlockEntriesContext,
  ct as UmbBlockEntryContext,
  yt as UmbBlockManagerContext,
  Ot as UmbBlockOverlayExposeButtonElement,
  H as UmbBlockPropertyValueCloner,
  W as UmbBlockValueResolver,
  K as UmbDataPathBlockElementDataQuery,
  gt as UmbFlatLayoutBlockPropertyValueCloner,
  dt as UmbStandardBlockValueResolver
};
//# sourceMappingURL=index.js.map
