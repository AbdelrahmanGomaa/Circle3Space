import { e as g, U as C, g as p, b as v, f as B, h as S, c as R, a as I, d as O, i as M } from "../unsupported-property.element-CQQAIrgw.js";
import { U as x, a as D } from "../constants-mZK85u7C.js";
import { UmbControllerBase as d } from "@umbraco-cms/backoffice/class-api";
import { createExtensionApi as u } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as c } from "@umbraco-cms/backoffice/extension-registry";
import { a as n } from "../variant-id.class-CeC8XiHF.js";
const w = {
  block: ["Umbraco.ImageCropper", "Umbraco.UploadField"]
};
class U extends d {
  /**
   * Clones the property data.
   * @param {UmbPropertyValueDataPotentiallyWithEditorAlias} property - The property data.
   * @returns {Promise<UmbPropertyValueDataPotentiallyWithEditorAlias>} - A promise that resolves to the cloned property data.
   */
  async clone(e) {
    const r = await this.#e(e);
    return this.destroy(), r ?? e;
  }
  async #e(e) {
    const r = await this.#t(e);
    return await this.#r(r);
  }
  async #t(e) {
    const r = e.editorAlias;
    if (!r)
      return console.error(`Editor alias not found for ${e.alias}`), e;
    const a = c.getByTypeAndFilter(
      "propertyValueCloner",
      (l) => l.forEditorAlias === r
    )[0];
    if (!a)
      return e;
    const t = await u(this, a);
    if (!t)
      return e;
    let s = e;
    if (t.cloneValue) {
      const l = await t.cloneValue(e.value);
      l && (s = { ...e, value: l });
    }
    return s;
  }
  async #r(e) {
    const r = e.editorAlias;
    if (!r)
      return e;
    const a = c.getByTypeAndFilter(
      "propertyValueResolver",
      // TODO: Remove depcrated filter option in v.17 [NL]
      (s) => s.forEditorAlias === r || s.meta?.editorAlias === r
    )[0];
    if (!a)
      return e;
    const t = await u(this, a);
    return t && t.processValues ? await t.processValues(e, async (s) => await Promise.all(
      s.map(async (i) => await this.#e(i) ?? i)
    )) ?? e : e;
  }
}
const m = Object.freeze({});
class A extends d {
  /**
   * Clones the property data.
   * @param {UmbPropertyValueDataPotentiallyWithEditorAlias} propertyTypes - Data about the properties to make a preset for.
   * @returns {Promise<UmbPropertyValueDataPotentiallyWithEditorAlias>} - A promise that resolves to the cloned property data.
   */
  async create(e) {
    const a = (await Promise.all(e.map(this.#e))).flatMap((t) => t);
    return this.destroy(), a;
  }
  #e = async (e) => {
    const r = e.propertyEditorSchemaAlias, a = e.propertyEditorUiAlias;
    if (!a)
      throw new Error(`propertyEditorUiAlias was not defined in ${e}`);
    let t;
    r && a ? t = (o) => o.forPropertyEditorSchemaAlias === r || o.forPropertyEditorUiAlias === a : t = (o) => o.forPropertyEditorUiAlias === a;
    const s = c.getByTypeAndFilter("propertyValuePreset", t), l = (await Promise.all(s.map((o) => u(this, o)))).filter(
      (o) => o !== void 0
    ), i = await this._generatePropertyValues(l, e);
    for (const o of l)
      o.destroy();
    return i;
  };
  async _generatePropertyValues(e, r) {
    const a = await this._generatePropertyValue(e, r, m);
    return a ? [a] : [];
  }
  async _generatePropertyValue(e, r, a) {
    let t;
    for (const s of e) {
      if (!s.processValue)
        throw new Error(`'processValue()' method is not defined in the api: ${s.constructor.name}`);
      t = await s.processValue(t, r.config, r.typeArgs, a);
    }
    if (t)
      return r.propertyEditorSchemaAlias ? {
        editorAlias: r.propertyEditorSchemaAlias,
        alias: r.alias,
        value: t
      } : {
        alias: r.alias,
        value: t
      };
  }
}
class V extends A {
  #e = [];
  // Always declare the default segment (null)
  #t = [null];
  setCultures(e) {
    this.#e = e;
  }
  setSegments(e) {
    this.#t = [null, ...e];
  }
  async _generatePropertyValues(e, r) {
    const a = [];
    if (r.typeArgs.variesBySegment && r.typeArgs.variesByCulture) {
      if (this.#e.length === 0)
        throw new Error("Cultures must be set when varying by culture.");
      for (const t of this.#e)
        for (const s of this.#t) {
          const l = await this._generatePropertyValue(e, r, {
            variantId: new n(t, s)
          });
          l && (l.culture = t, l.segment = s, a.push(l));
        }
    } else if (r.typeArgs.variesByCulture) {
      if (this.#e.length === 0)
        throw new Error("Cultures must be set when varying by culture.");
      for (const t of this.#e) {
        const s = await this._generatePropertyValue(e, r, {
          variantId: new n(t)
        });
        s && (s.culture = t, s.segment = null, a.push(s));
      }
    } else if (r.typeArgs.variesBySegment)
      for (const t of this.#t) {
        const s = await this._generatePropertyValue(e, r, {
          variantId: new n(null, t)
        });
        s && (s.culture = null, s.segment = t, a.push(s));
      }
    else {
      const t = await this._generatePropertyValue(e, r, {});
      t && (t.culture = null, t.segment = null, a.push(t));
    }
    return a;
  }
}
export {
  g as UMB_NAMEABLE_PROPERTY_DATASET_CONTEXT,
  C as UMB_PROPERTY_CONTEXT,
  p as UMB_PROPERTY_DATASET_CONTEXT,
  x as UMB_PROPERTY_HAS_VALUE_CONDITION_ALIAS,
  w as UMB_UNSUPPORTED_EDITOR_SCHEMA_ALIASES,
  D as UMB_WRITABLE_PROPERTY_CONDITION_ALIAS,
  v as UmbPropertyContext,
  B as UmbPropertyDatasetContextBase,
  S as UmbPropertyDatasetElement,
  R as UmbPropertyElement,
  I as UmbPropertyLayoutElement,
  U as UmbPropertyValueCloneController,
  A as UmbPropertyValuePresetBuilderController,
  V as UmbPropertyValuePresetVariantBuilderController,
  O as UmbUnsupportedPropertyElement,
  M as isNameablePropertyDatasetContext
};
//# sourceMappingURL=index.js.map
