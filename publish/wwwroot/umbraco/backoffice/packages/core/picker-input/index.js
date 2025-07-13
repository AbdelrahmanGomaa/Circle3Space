import { UmbContextToken as m } from "@umbraco-cms/backoffice/context-api";
import { UmbChangeEvent as s } from "@umbraco-cms/backoffice/event";
import { UmbContextBase as r } from "@umbraco-cms/backoffice/class-api";
import { UmbRepositoryItemsManager as a } from "@umbraco-cms/backoffice/repository";
import { UMB_MODAL_MANAGER_CONTEXT as h, umbConfirmModal as l } from "@umbraco-cms/backoffice/modal";
import { UmbDeprecation as c } from "@umbraco-cms/backoffice/utils";
const u = new m("UmbPickerInputContext");
class C extends r {
  /**
   * Creates an instance of UmbPickerInputContext.
   * @param {UmbControllerHost} host - The host for the controller.
   * @param {string} repositoryAlias - The alias of the repository to use.
   * @param {(string | UmbModalToken<UmbPickerModalData<PickerItemType>, PickerModalValueType>)} modalAlias - The alias of the modal to use.
   * @param {((entry: PickedItemType) => string | undefined)} [getUniqueMethod] - DEPRECATED since 15.3. Will be removed in v. 17: A method to get the unique key from the item.
   * @memberof UmbPickerInputContext
   */
  constructor(t, e, i, n) {
    super(t, u), this._max = 1 / 0, this._min = 0, this.modalAlias = i, this.#e = n ? (o) => (new c({
      deprecated: "The getUniqueMethod parameter.",
      removeInVersion: "17.0.0",
      solution: "The required unique property on the item will be used instead."
    }).warn(), n(o)) : (o) => o.unique, this.#t = new a(this, e, n), this.selection = this.#t.uniques, this.selectedItems = this.#t.items;
  }
  #e;
  #t;
  /**
   * Define a minimum amount of selected items in this input, for this input to be valid.
   */
  get max() {
    return this._max;
  }
  set max(t) {
    this._max = t === void 0 ? 1 / 0 : t;
  }
  /**
   * Define a maximum amount of selected items in this input, for this input to be valid.
   */
  get min() {
    return this._min;
  }
  set min(t) {
    this._min = t === void 0 ? 0 : t;
  }
  getSelection() {
    return this.#t.getUniques();
  }
  setSelection(t) {
    this.#t.setUniques(t.filter((e) => e !== null));
  }
  async openPicker(t) {
    await this.#t.init;
    const n = await (await this.getContext(h)).open(this, this.modalAlias, {
      data: {
        multiple: this._max !== 1,
        ...t
      },
      value: {
        selection: this.getSelection()
      }
    })?.onSubmit();
    this.setSelection(n.selection), this.getHostElement().dispatchEvent(new s());
  }
  async requestRemoveItem(t) {
    const e = this.#t.getItems().find((i) => this.#e(i) === t);
    if (!e) throw new Error("Could not find item with unique: " + t);
    await l(this, {
      color: "danger",
      headline: `Remove ${e.name}?`,
      content: "Are you sure you want to remove this item",
      confirmLabel: "#actions_remove"
    }), this.#i(t);
  }
  #i(t) {
    const e = this.getSelection().filter((i) => i !== t);
    this.setSelection(e), this.getHostElement().dispatchEvent(new s());
  }
}
export {
  u as UMB_PICKER_INPUT_CONTEXT,
  C as UmbPickerInputContext
};
//# sourceMappingURL=index.js.map
