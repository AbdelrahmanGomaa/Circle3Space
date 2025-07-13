import { U as c } from "./constants-CCLuR4UJ.js";
import { a as w } from "./constants-CCLuR4UJ.js";
import { property as l, state as h } from "@umbraco-cms/backoffice/external/lit";
import { observeMultiple as y } from "@umbraco-cms/backoffice/observable-api";
import { UmbBlockRteManagerContext as f, UmbBlockRteEntriesContext as _ } from "@umbraco-cms/backoffice/block-rte";
import { UmbLitElement as g } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_CONTEXT as b, UMB_PROPERTY_DATASET_CONTEXT as d } from "@umbraco-cms/backoffice/property";
import { UmbFormControlMixin as C, UmbValidationContext as k, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as E } from "@umbraco-cms/backoffice/validation";
import { UmbChangeEvent as T } from "@umbraco-cms/backoffice/event";
import { UMB_CONTENT_WORKSPACE_CONTEXT as O } from "@umbraco-cms/backoffice/content";
var x = Object.defineProperty, P = Object.getOwnPropertyDescriptor, a = (n, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? P(t, e) : t, o = n.length - 1, u; o >= 0; o--)
    (u = n[o]) && (s = (r ? u(t, e, s) : u(s)) || s);
  return r && s && x(t, e, s), s;
};
class i extends C(g) {
  constructor() {
    super(), this.readonly = !1, this._markup = "", this.#t = new f(this), this.#s = new _(this), this.#e = new k(this), this.consumeContext(O, (t) => {
      this.observe(
        y([
          this.#t.blockTypes,
          t.structure.variesByCulture,
          t.structure.variesBySegment
        ]),
        async ([e, r, s]) => {
          e.length > 0 && (r === !1 || s === !1) && (await Promise.all(
            e.map(async (p) => {
              const v = p.contentElementTypeKey;
              await this.#t.contentTypesLoaded;
              const m = await this.#t.getStructure(v);
              return r === !1 && m?.getVariesByCulture() === !0 ? !0 : s === !1 && m?.getVariesBySegment() === !0;
            })
          )).filter((p) => p === !0).length > 0 && (this.setCustomValidity("#blockEditor_blockVariantConfigurationNotSupported"), this.checkValidity());
        }
      );
    }).passContextAliasMatches(), this.consumeContext(b, (t) => {
      this.#o(t);
    }), this.consumeContext(d, (t) => {
      this.#t.setVariantId(t.getVariantId());
    }), this.observe(
      this.#s.layoutEntries,
      (t) => {
        this.#t.setLayouts(t);
      },
      null
    ), this.addValidator(
      "valueMissing",
      () => this.mandatoryMessage ?? E,
      () => !!this.mandatory && this.value === void 0
    );
  }
  set config(t) {
    if (!t) return;
    this._config = t;
    const e = t.getValueByAlias("blocks") ?? [];
    this.#t.setBlockTypes(e), this.#t.setEditorConfiguration(t);
  }
  set value(t) {
    if (!t) {
      super.value = void 0, this._markup = "", this.#t.setLayouts([]), this.#t.setContents([]), this.#t.setSettings([]), this.#t.setExposes([]);
      return;
    }
    const e = t ? { ...t } : {};
    e.markup ??= "", e.blocks ??= { layout: {}, contentData: [], settingsData: [], expose: [] }, e.blocks.layout ??= {}, e.blocks.contentData ??= [], e.blocks.settingsData ??= [], e.blocks.expose ??= [], super.value = e, this._markup !== super.value.markup && (this._markup = super.value.markup), this.#t.setLayouts(e.blocks.layout[c] ?? []), this.#t.setContents(e.blocks.contentData), this.#t.setSettings(e.blocks.settingsData), this.#t.setExposes(e.blocks.expose);
  }
  get value() {
    return super.value;
  }
  get _value() {
    return super.value;
  }
  set _value(t) {
    super.value = t;
  }
  #t;
  #s;
  #e;
  #o(t) {
    this.observe(
      t.dataPath,
      (e) => {
        e && (this.#e.setDataPath(e + ".blocks"), this.#e.autoReport());
      },
      "observeDataPath"
    ), this.observe(
      t?.alias,
      (e) => {
        this.#t.setPropertyAlias(e);
      },
      "observePropertyAlias"
    ), this.observe(
      y([
        this.#t.layouts,
        this.#t.contents,
        this.#t.settings,
        this.#t.exposes
      ]),
      ([e, r, s, o]) => {
        e.length === 0 ? super.value?.markup === void 0 ? super.value = void 0 : super.value = {
          ...super.value,
          blocks: {
            layout: {},
            contentData: [],
            settingsData: [],
            expose: []
          }
        } : super.value = {
          markup: this._markup,
          blocks: {
            layout: { [c]: e },
            contentData: r,
            settingsData: s,
            expose: o
          }
        }, super.value?.markup !== void 0 && t.setValue(super.value);
      },
      "motherObserver"
    );
  }
  _filterUnusedBlocks(t) {
    const e = this.#t.getLayouts().filter((o) => t.indexOf(o.contentKey) === -1), r = e.map((o) => o.contentKey), s = e.map((o) => o.settingsKey).filter((o) => typeof o == "string");
    this.#t.removeManyContent(r), this.#t.removeManySettings(s), this.#t.removeManyLayouts(r);
  }
  _fireChangeEvent() {
    this.dispatchEvent(new T());
  }
}
a([
  l({
    attribute: !1,
    type: Object,
    hasChanged(n, t) {
      return n?.markup !== t?.markup;
    }
  })
], i.prototype, "value", 1);
a([
  l({ type: Boolean, reflect: !0 })
], i.prototype, "readonly", 2);
a([
  l({ type: Boolean })
], i.prototype, "mandatory", 2);
a([
  l({ type: String })
], i.prototype, "mandatoryMessage", 2);
a([
  h()
], i.prototype, "_config", 2);
a([
  h()
], i.prototype, "_value", 1);
a([
  h()
], i.prototype, "_markup", 2);
export {
  w as UMB_BLOCK_RTE_DATA_CONTENT_KEY,
  c as UMB_BLOCK_RTE_PROPERTY_EDITOR_SCHEMA_ALIAS,
  i as UmbPropertyEditorUiRteElementBase
};
//# sourceMappingURL=index.js.map
