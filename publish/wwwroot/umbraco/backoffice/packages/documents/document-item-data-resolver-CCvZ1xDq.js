import { DocumentVariantStateModel as a } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbControllerBase as n } from "@umbraco-cms/backoffice/class-api";
import { UMB_APP_LANGUAGE_CONTEXT as h } from "@umbraco-cms/backoffice/language";
import { UmbStringState as i, UmbBooleanState as r } from "@umbraco-cms/backoffice/observable-api";
import { UMB_PROPERTY_DATASET_CONTEXT as u } from "@umbraco-cms/backoffice/property";
class f extends n {
  constructor(s) {
    super(s), this.#e = new i(void 0), this.unique = this.#e.asObservable(), this.#i = new i(void 0), this.name = this.#i.asObservable(), this.#r = new i(void 0), this.icon = this.#r.asObservable(), this.#o = new i(void 0), this.state = this.#o.asObservable(), this.#n = new r(void 0), this.isTrashed = this.#n.asObservable(), this.#a = new r(void 0), this.isDraft = this.#a.asObservable(), this.consumeContext(u, (t) => {
      this.#m = t.getVariantId(), this.#h();
    }), this.#s = Promise.all([
      this.consumeContext(h, (t) => {
        this.observe(t.appLanguageCulture, (e) => {
          this.#c = e, this.#h();
        }), this.observe(t.appDefaultLanguage, (e) => {
          this.#l = e?.unique, this.#h();
        });
      }).asPromise()
    ]);
  }
  #l;
  #c;
  #m;
  #t;
  #s;
  #e;
  #i;
  #r;
  #o;
  #n;
  #a;
  /**
   * Get the current item
   * @returns {DataType | undefined} The current item
   * @memberof UmbDocumentItemDataResolver
   */
  getData() {
    return this.#t;
  }
  /**
   * Set the current item
   * @param {DataType | undefined} data The current item
   * @memberof UmbDocumentItemDataResolver
   */
  setData(s) {
    if (this.#t = s, !this.#t) {
      this.#e.setValue(void 0), this.#i.setValue(void 0), this.#r.setValue(void 0), this.#n.setValue(void 0), this.#a.setValue(void 0);
      return;
    }
    this.#e.setValue(this.#t.unique), this.#r.setValue(this.#t.documentType.icon), this.#n.setValue(this.#t.isTrashed), this.#h();
  }
  /**
   * Get the unique of the item
   * @returns {Promise<string | undefined>} The unique of the item
   * @memberof UmbDocumentItemDataResolver
   */
  async getUnique() {
    return await this.#s, this.#e.getValue();
  }
  /**
   * Get the name of the item
   * @returns {Promise<string>} The name of the item
   * @memberof UmbDocumentItemDataResolver
   */
  async getName() {
    return await this.#s, this.#i.getValue() || "";
  }
  /**
   * Get the icon of the item
   * @returns {Promise<string | undefined>} The icon of the item
   * @memberof UmbDocumentItemDataResolver
   */
  async getIcon() {
    return await this.#s, this.#t?.documentType.icon;
  }
  /**
   * Get the state of the item
   * @returns {Promise<string | undefined>} The state of the item
   * @memberof UmbDocumentItemDataResolver
   */
  async getState() {
    return await this.#s, this.#u()?.state;
  }
  /**
   * Get the isDraft of the item
   * @returns {Promise<boolean>} The isDraft of the item
   * @memberof UmbDocumentItemDataResolver
   */
  async getIsDraft() {
    return await this.#s, this.#a.getValue() ?? !1;
  }
  /**
   * Get the isTrashed of the item
   * @returns {Promise<boolean | undefined>} The isTrashed of the item
   * @memberof UmbDocumentItemDataResolver
   */
  async getIsTrashed() {
    return await this.#s, this.#t?.isTrashed ?? !1;
  }
  #h() {
    this.#d(), this.#f(), this.#V();
  }
  #d() {
    const s = this.#u(), t = this.#v(this.#l)?.name, e = s?.name ?? `(${t})`;
    this.#i.setValue(e);
  }
  #f() {
    const t = this.#u()?.state === a.DRAFT || !1;
    this.#a.setValue(t);
  }
  #V() {
    const t = this.#u()?.state || a.NOT_CREATED;
    this.#o.setValue(t);
  }
  #v(s) {
    return this.#t?.variants.find((t) => t.culture === s);
  }
  #u() {
    if (this.#b())
      return this.#t?.variants?.[0];
    const s = this.#m?.culture || this.#c;
    return this.#v(s);
  }
  #b() {
    return this.#t?.variants?.[0]?.culture === null;
  }
}
export {
  f as U
};
//# sourceMappingURL=document-item-data-resolver-CCvZ1xDq.js.map
