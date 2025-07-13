import { U as m } from "./picker-search-result-item-element-base-vg8p90Ra.js";
import { nothing as u, html as o, customElement as a } from "@umbraco-cms/backoffice/external/lit";
var d = Object.getOwnPropertyDescriptor, h = (e, s, l, i) => {
  for (var t = i > 1 ? void 0 : i ? d(s, l) : s, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (t = n(t) || t);
  return t;
};
let c = class extends m {
  render() {
    const e = this.item;
    return e ? o`
			<umb-ref-item
				name=${e.name}
				id=${e.unique}
				icon=${e.icon ?? "icon-document"}
				select-only
				selectable
				?selected=${this._isSelected}
				@deselected=${() => this.pickerContext?.selection.deselect(e.unique)}
				@selected=${() => this.pickerContext?.selection.select(e.unique)}>
			</umb-ref-item>
		` : u;
  }
};
c = h([
  a("umb-default-picker-search-result-item")
], c);
export {
  c as UmbDefaultPickerSearchResultItemElement,
  c as element
};
//# sourceMappingURL=default-picker-search-result-item.element-BIXmNDo-.js.map
