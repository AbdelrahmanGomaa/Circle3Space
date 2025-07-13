import { f as s, x as i } from "./constants-hBehNVbJ.js";
import { UmbItemServerDataSourceBase as a, UmbItemRepositoryBase as p } from "@umbraco-cms/backoffice/repository";
import { DataTypeService as m } from "@umbraco-cms/backoffice/external/backend-api";
import { umbExtensionsRegistry as n } from "@umbraco-cms/backoffice/extension-registry";
let t = [];
class T extends a {
  /**
   * Creates an instance of UmbDataTypeItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDataTypeItemServerDataSource
   */
  constructor(r) {
    super(r, {
      getItems: c,
      mapper: y
    }), n.byType("propertyEditorUi").subscribe((o) => {
      t = o;
    }).unsubscribe();
  }
}
const c = (e) => m.getItemDataType({ id: e }), y = (e) => ({
  entityType: s,
  unique: e.id,
  name: e.name,
  propertyEditorSchemaAlias: e.editorAlias,
  propertyEditorUiAlias: e.editorUiAlias || "",
  // TODO: why can this be undefined or null on the server?
  icon: t.find((r) => r.alias === e.editorUiAlias)?.meta.icon
});
class b extends p {
  constructor(r) {
    super(r, T, i);
  }
}
export {
  b as UmbDataTypeItemRepository,
  b as api
};
//# sourceMappingURL=data-type-item.repository-Bcqld52U.js.map
