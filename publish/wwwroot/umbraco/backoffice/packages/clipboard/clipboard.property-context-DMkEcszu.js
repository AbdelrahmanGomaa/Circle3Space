import { U as c } from "./clipboard.context-token-DOwOWTSv.js";
import { U as y } from "./clipboard-entry-picker-modal.token-D73PkoDF.js";
import { UmbContextBase as f } from "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/current-user";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "./manifests-B_tP43dQ.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/store";
import { U as C, a as d } from "./clipboard-paste-translator-value-resolver-COIXfV23.js";
import { U as P } from "./clipboard.property-context-token-DMlYzAUk.js";
import { UMB_MODAL_MANAGER_CONTEXT as T } from "@umbraco-cms/backoffice/modal";
import { UMB_PROPERTY_CONTEXT as E, UmbPropertyValueCloneController as V } from "@umbraco-cms/backoffice/property";
import { umbExtensionsRegistry as m } from "@umbraco-cms/backoffice/extension-registry";
class L extends f {
  #e;
  #t;
  constructor(e) {
    super(e, P), this.#e = Promise.all([
      this.consumeContext(T, (t) => {
        this.#t = t;
      }).asPromise()
    ]);
  }
  /**
   * Read a clipboard entry for a property. The entry will be translated to the property editor value
   * @param {string} unique - The unique id of the clipboard entry
   * @param {string} propertyEditorUiAlias - The alias of the property editor to match
   * @returns { Promise<unknown> } - Returns the resolved property value
   */
  async read(e, t) {
    if (!e) throw new Error("The Clipboard Entry unique is required");
    if (!t) throw new Error("Property Editor UI alias is required");
    const r = await this.#r(t);
    return this.#o(e, r);
  }
  /**
   * Read multiple clipboard entries for a property. The entries will be translated to the property editor values
   * @param {Array<string>} uniques - The unique ids of the clipboard entries
   * @param {string} propertyEditorUiAlias - The alias of the property editor to match
   * @returns { Promise<Array<unknown>> } - Returns an array of resolved property values
   */
  async readMultiple(e, t) {
    if (!e || !e.length)
      throw new Error("Clipboard entry uniques are required");
    const i = (await Promise.allSettled(e.map((a) => this.read(a, t)))).filter((a) => a.status === "fulfilled" && a.value).map((a) => a.value).filter((a) => a);
    if (!i.length)
      throw new Error("Failed to read clipboard entries");
    return i;
  }
  /**
   * Write a clipboard entry for a property. The property value will be translated to the clipboard entry values
   * @param args - Arguments for writing a clipboard entry
   * @param {string} args.name - The name of the clipboard entry
   * @param {string} args.icon - The icon of the clipboard entry
   * @param {any} args.propertyValue - The property value to write
   * @param {string} args.propertyEditorUiAlias - The alias of the property editor to match
   * @returns { Promise<void> }
   */
  async write(e) {
    const t = await this.getContext(c), s = await new C(this).resolve(e.propertyValue, e.propertyEditorUiAlias), o = {
      name: e.name,
      values: s,
      icon: e.icon
    };
    return await t.write(o);
  }
  /**
   * Pick a clipboard entry for a property. The entry will be translated to the property editor value
   * @param args - Arguments for picking a clipboard entry
   * @param {boolean} args.multiple - Allow multiple clipboard entries to be picked
   * @param {string} args.propertyEditorUiAlias - The alias of the property editor to match
   * @param {() => Promise<boolean>} args.filter - A filter function to filter clipboard entries
   * @returns { Promise<{ selection: Array<UmbEntityUnique>; propertyValues: Array<any> }> }
   */
  async pick(e) {
    await this.#e;
    const t = this.getPasteTranslatorManifests(e.propertyEditorUiAlias), r = await this.#r(e.propertyEditorUiAlias), s = (await this.getContext(E)).getConfig(), o = new d(this), n = (await this.#t?.open(this, y, {
      data: {
        asyncFilter: async (l) => {
          if (!this.hasSupportedPasteTranslator(
            t,
            l.values
          ))
            return !1;
          const u = await o.getPasteTranslator(
            l.values,
            r.alias
          );
          if (u.isCompatibleValue) {
            const h = await o.resolve(
              l.values,
              r.alias
            );
            return u.isCompatibleValue(h, s, e.filter);
          }
          return !0;
        }
      }
    })?.onSubmit())?.selection || [];
    if (!n.length)
      throw new Error("No clipboard entry selected");
    let p = [];
    if (e.multiple)
      throw new Error("Multiple clipboard entries not supported");
    {
      const l = n[0];
      if (!l)
        throw new Error("No clipboard entry selected");
      p = [await this.#o(l, r)];
    }
    return {
      selection: n,
      propertyValues: p
    };
  }
  async #r(e) {
    const t = m.getByAlias(e);
    if (!t)
      throw new Error(`Could not find property editor with alias: ${e}`);
    if (t.type !== "propertyEditorUi")
      throw new Error(`Alias ${e} is not a property editor ui`);
    return t;
  }
  async #o(e, t) {
    if (!e)
      throw new Error("Unique id is required");
    if (!t.alias)
      throw new Error("Property Editor UI alias is required");
    if (!t.meta.propertyEditorSchemaAlias)
      throw new Error("Property Editor UI Schema alias is required");
    const s = await (await this.getContext(c)).read(e);
    if (!s)
      throw new Error(`Could not find clipboard entry with unique id: ${e}`);
    const i = await new d(this).resolve(s.values, t.alias);
    return (await new V(this).clone({
      editorAlias: t.meta.propertyEditorSchemaAlias,
      alias: t.alias,
      value: i
    })).value;
  }
  /**
   * Get all clipboard paste translators for a property editor ui
   * @param {string} propertyEditorUiAlias - The alias of the property editor to match
   * @returns {Array<ManifestClipboardPastePropertyValueTranslator>} - Returns an array of clipboard paste translators
   */
  getPasteTranslatorManifests(e) {
    return m.getByTypeAndFilter(
      "clipboardPastePropertyValueTranslator",
      (t) => t.toPropertyEditorUi === e
    );
  }
  /**
   * Check if the clipboard entry values has supported paste translator
   * @param {Array<ManifestClipboardPastePropertyValueTranslator>} manifests - The paste translator manifests
   * @param {UmbClipboardEntryValuesType} clipboardEntryValues - The clipboard entry values
   * @returns {boolean} - Returns true if the clipboard entry values has supported paste translator
   */
  hasSupportedPasteTranslator(e, t) {
    const r = t.map((o) => o.type);
    return e.filter((o) => r.includes(o.fromClipboardEntryValueType)).length > 0;
  }
}
export {
  L as UmbClipboardPropertyContext,
  L as api
};
//# sourceMappingURL=clipboard.property-context-DMkEcszu.js.map
