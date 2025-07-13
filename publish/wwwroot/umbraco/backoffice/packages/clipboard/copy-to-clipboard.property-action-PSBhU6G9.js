import { U as a } from "./clipboard.property-context-token-DMlYzAUk.js";
import { UMB_NOTIFICATION_CONTEXT as n } from "@umbraco-cms/backoffice/notification";
import { UMB_PROPERTY_DATASET_CONTEXT as p, UMB_PROPERTY_CONTEXT as c } from "@umbraco-cms/backoffice/property";
import { UmbPropertyActionBase as h } from "@umbraco-cms/backoffice/property-action";
class T extends h {
  #o;
  #t;
  #e;
  #i;
  #r;
  constructor(o, e) {
    super(o, e), this.#r = Promise.all([
      this.consumeContext(p, (t) => {
        this.#o = t;
      }).asPromise(),
      this.consumeContext(c, (t) => {
        this.#t = t;
      }).asPromise(),
      this.consumeContext(n, (t) => {
        this.#e = t;
      }).asPromise(),
      this.consumeContext(a, (t) => {
        this.#i = t;
      }).asPromise()
    ]);
  }
  async execute() {
    if (await this.#r, !this.#o) throw new Error("Property dataset context is not available");
    if (!this.#t) throw new Error("Property context is not available");
    if (!this.#e) throw new Error("Notification context is not available");
    if (!this.#i) throw new Error("Clipboard context is not available");
    const o = this.#t.getEditorManifest()?.alias;
    if (!o)
      throw new Error("Property editor alias is not available");
    const e = this.#o.getName(), t = this.#t.getLabel(), r = e ? `${e} - ${t}` : t, i = this.#t.getValue();
    if (!i) {
      this.#e.peek("danger", { data: { message: "The property does not have a value to copy" } });
      return;
    }
    const s = this.#t.getEditorManifest()?.meta.icon;
    this.#i.write({
      name: r,
      icon: s,
      propertyValue: i,
      propertyEditorUiAlias: o
    });
  }
}
export {
  T as UmbCopyToClipboardPropertyAction,
  T as api
};
//# sourceMappingURL=copy-to-clipboard.property-action-PSBhU6G9.js.map
