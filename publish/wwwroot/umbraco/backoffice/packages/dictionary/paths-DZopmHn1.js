import { UmbContextToken as t } from "@umbraco-cms/backoffice/context-api";
import { UmbUniqueTreeStore as i } from "@umbraco-cms/backoffice/tree";
import { UmbPathPattern as T } from "@umbraco-cms/backoffice/router";
import { UMB_TRANSLATION_SECTION_PATHNAME as n } from "@umbraco-cms/backoffice/translation";
import { UMB_WORKSPACE_PATH_PATTERN as A } from "@umbraco-cms/backoffice/workspace";
const U = "Umb.Repository.Dictionary.Collection", D = "Umb.CollectionView.Dictionary.Table", S = "Umb.Collection.Dictionary", C = "Umb.Repository.Dictionary.Move", N = new t(
  "UmbDictionaryDetailStore"
), m = "Umb.Repository.Dictionary.Detail", y = "Umb.Store.Dictionary.Detail", Y = "Umb.Repository.Dictionary.Export", M = "Umb.Repository.Dictionary.Import", P = new t("UmbDictionaryItemStore"), b = "Umb.Repository.Dictionary.Item", p = "Umb.Store.Dictionary.Item", B = "Umb.SearchProvider.Dictionary", L = "Umb.Repository.Dictionary.Tree", l = "Umb.Store.Dictionary.Tree", d = "Umb.Tree.Dictionary", u = new t(
  "UmbWorkspaceContext",
  void 0,
  (o) => o.getEntityType?.() === "dictionary"
), W = "Umb.Workspace.Dictionary", f = "dictionary-root", R = "dictionary";
class _ extends i {
  /**
   * Creates an instance of UmbDictionaryTreeStore.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDictionaryTreeStore
   */
  constructor(r) {
    super(r, e.toString());
  }
}
const e = new t("UmbDictionaryTreeStore"), w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UMB_DICTIONARY_TREE_STORE_CONTEXT: e,
  UmbDictionaryTreeStore: _,
  api: _
}, Symbol.toStringTag, { value: "Module" })), I = A.generateAbsolute({
  sectionName: n,
  entityType: R
}), g = new T("create/parent/:parentEntityType/:parentUnique", I), x = new T("edit/:unique", I);
export {
  b as U,
  f as a,
  R as b,
  S as c,
  U as d,
  D as e,
  C as f,
  m as g,
  y as h,
  N as i,
  Y as j,
  M as k,
  p as l,
  P as m,
  B as n,
  L as o,
  l as p,
  d as q,
  W as r,
  u as s,
  e as t,
  I as u,
  g as v,
  x as w,
  w as x
};
//# sourceMappingURL=paths-DZopmHn1.js.map
