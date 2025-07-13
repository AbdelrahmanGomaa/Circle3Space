import { UmbModalToken as e } from "@umbraco-cms/backoffice/modal";
import { UmbContextToken as A } from "@umbraco-cms/backoffice/context-api";
import { UMB_SETTINGS_SECTION_PATHNAME as _ } from "@umbraco-cms/backoffice/settings";
import { UMB_WORKSPACE_PATH_PATTERN as a } from "@umbraco-cms/backoffice/workspace";
import { UmbPathPattern as t } from "@umbraco-cms/backoffice/router";
const N = "Umb.Repository.LanguageCollection", O = "Umb.CollectionView.Language.Table", m = "Umb.Collection.Language", c = new e(
  "Umb.Modal.LanguagePicker",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), S = new A("UmbLanguageDetailStore"), r = "Umb.Repository.Language.Detail", C = "Umb.Store.Language.Detail", M = new A("UmbLanguageItemStore"), R = "Umb.Repository.LanguageItem", i = "Umb.Store.LanguageItem", I = new e("Umb.Modal.Workspace", {
  modal: {
    type: "sidebar",
    size: "large"
  },
  data: { entityType: "language", preset: {} }
  // Recast the type, so the entityType data prop is not required:
}), P = new A(
  "UmbWorkspaceContext",
  void 0,
  (E) => E.getEntityType?.() === "language"
), b = "Umb.Workspace.Language", n = "language", U = "language-root", l = a.generateAbsolute({
  sectionName: _,
  entityType: U
}), B = "Umb.Workspace.LanguageRoot", o = a.generateAbsolute({
  sectionName: _,
  entityType: n
}), p = new t("create", o), u = new t(
  "edit/:unique",
  o
), W = new A("UmbAppLanguageContext"), y = new A(
  "UmbLanguageAccessWorkspaceContext"
);
export {
  R as U,
  c as a,
  n as b,
  U as c,
  W as d,
  y as e,
  m as f,
  N as g,
  O as h,
  r as i,
  C as j,
  S as k,
  i as l,
  M as m,
  b as n,
  I as o,
  P as p,
  B as q,
  l as r,
  o as s,
  p as t,
  u
};
//# sourceMappingURL=language-access.workspace.context-token-ChA0uFUc.js.map
