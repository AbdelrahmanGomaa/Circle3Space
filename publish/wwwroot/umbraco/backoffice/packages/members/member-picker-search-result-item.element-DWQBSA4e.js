import { nothing as l, html as o, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbPickerSearchResultItemElementBase as a } from "@umbraco-cms/backoffice/picker";
var h = Object.getOwnPropertyDescriptor, b = (e, s, c, i) => {
  for (var t = i > 1 ? void 0 : i ? h(s, c) : s, r = e.length - 1, m; r >= 0; r--)
    (m = e[r]) && (t = m(t) || t);
  return t;
};
let n = class extends a {
  render() {
    if (!this.item) return l;
    const e = this.item;
    return o`
			<umb-ref-item
				name=${e.name}
				id=${e.unique}
				icon=${e.memberType.icon ?? "icon-user"}
				select-only
				selectable
				?selected=${this._isSelected}
				@deselected=${() => this.pickerContext?.selection.deselect(e.unique)}
				@selected=${() => this.pickerContext?.selection.select(e.unique)}>
			</umb-ref-item>
		`;
  }
};
n = b([
  u("umb-member-picker-search-result-item")
], n);
export {
  n as UmbMemberPickerSearchResultItemElement,
  n as element
};
//# sourceMappingURL=member-picker-search-result-item.element-DWQBSA4e.js.map
