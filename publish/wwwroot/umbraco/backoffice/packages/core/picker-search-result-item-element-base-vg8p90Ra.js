import { UmbContextToken as m } from "@umbraco-cms/backoffice/context-api";
import { property as p, state as u, nothing as h, html as a } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
const b = new m("UmbPickerContext");
var d = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, c = (r, e, s, i) => {
  for (var t = i > 1 ? void 0 : i ? _(e, s) : e, n = r.length - 1, o; n >= 0; n--)
    (o = r[n]) && (t = (i ? o(e, s, t) : o(t)) || t);
  return i && t && d(e, s, t), t;
};
class l extends f {
  constructor() {
    super(), this._isSelected = !1, this.consumeContext(b, (e) => {
      this.pickerContext = e, this.#t();
    });
  }
  #e;
  set item(e) {
    this.#e = e, this.#t();
  }
  get item() {
    return this.#e;
  }
  #t() {
    const e = this.pickerContext?.selection;
    if (!e) return;
    const s = this.item?.unique;
    s !== void 0 && this.observe(e.selection, () => {
      this._isSelected = e.isSelected(s);
    });
  }
  render() {
    const e = this.item;
    return e ? a`
			<umb-ref-item
				name=${e.name}
				select-only
				selectable
				?selected=${this._isSelected}
				@deselected=${() => this.pickerContext?.selection.deselect(e.unique)}
				@selected=${() => this.pickerContext?.selection.select(e.unique)}>
			</umb-ref-item>
		` : h;
  }
}
c([
  p({ type: Object })
], l.prototype, "item", 1);
c([
  u()
], l.prototype, "_isSelected", 2);
export {
  l as U,
  b as a
};
//# sourceMappingURL=picker-search-result-item-element-base-vg8p90Ra.js.map
