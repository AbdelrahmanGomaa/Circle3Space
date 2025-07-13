import { nothing as l, html as o, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbPickerSearchResultItemElementBase as a } from "@umbraco-cms/backoffice/picker";
var d = Object.getOwnPropertyDescriptor, h = (e, r, m, c) => {
  for (var t = c > 1 ? void 0 : c ? d(r, m) : r, n = e.length - 1, i; n >= 0; n--)
    (i = e[n]) && (t = i(t) || t);
  return t;
};
let s = class extends a {
  render() {
    if (!this.item) return l;
    const e = this.item;
    return o`
			<umb-ref-item
				name=${e.name}
				id=${e.unique}
				icon=${e.documentType.icon ?? "icon-document"}
				select-only
				selectable
				?selected=${this._isSelected}
				@deselected=${() => this.pickerContext?.selection.deselect(e.unique)}
				@selected=${() => this.pickerContext?.selection.select(e.unique)}>
			</umb-ref-item>
		`;
  }
};
s = h([
  u("umb-document-picker-search-result-item")
], s);
export {
  s as UmbDocumentPickerSearchResultItemElement,
  s as element
};
//# sourceMappingURL=document-picker-search-result-item.element-BqIp_dR4.js.map
