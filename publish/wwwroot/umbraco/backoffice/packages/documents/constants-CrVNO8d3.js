import { UMB_SETTINGS_SECTION_PATHNAME as t } from "@umbraco-cms/backoffice/settings";
import { UmbPathPattern as E } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_PATH_PATTERN as o, UMB_WORKSPACE_MODAL as s } from "@umbraco-cms/backoffice/workspace";
import { UmbModalToken as e } from "@umbraco-cms/backoffice/modal";
import { UmbContextToken as T } from "@umbraco-cms/backoffice/context-api";
const O = "document-type", A = "document-type-root", C = "template", a = "element", U = o.generateAbsolute({
  sectionName: t,
  entityType: O
}), p = new E("create/parent/:parentEntityType/:parentUnique/:presetAlias", U), r = new E(
  "edit/:unique",
  U
), S = new e(
  "Umb.Modal.DocumentTypeCreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), N = "Umb.Repository.DocumentType.Duplicate", I = "Umb.Repository.DocumentType.Export", Y = new e("Umb.Modal.DocumentType.Import", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), y = "Umb.Repository.DocumentType.Import", i = "Umb.Repository.DocumentType.Move", L = "document-type-property-type", B = "Umb.Repository.DocumentType.Composition", u = new T(
  "UmbDocumentTypeDetailStore"
), b = "Umb.Repository.DocumentType.Detail", l = "Umb.Store.DocumentType.Detail", d = new T(
  "UmbDocumentTypeItemStore"
), W = "Umb.Repository.DocumentType.Item", K = "Umb.Store.DocumentType.Item", w = "Umb.SearchProvider.DocumentType", F = new T(
  "UmbDocumentTypeTreeStore"
), H = new T(
  "UmbDocumentTypeFolderStore"
), k = "Umb.Repository.DocumentType.Folder", f = "Umb.Store.DocumentType.Folder", n = "document-type-folder", M = o.generateAbsolute({
  sectionName: t,
  entityType: n
}), X = new E(
  "edit/:unique",
  M
), g = new T(
  "UmbWorkspaceContext",
  void 0,
  (_) => _.getEntityType?.() === n
), x = "Umb.Workspace.DocumentType.Folder", h = "Umb.Repository.DocumentType.TreeItemChildrenCollection", v = "Umb.Collection.DocumentType.TreeItemChildren", q = "Umb.Repository.DocumentType.Tree", z = "Umb.Store.DocumentType.Tree", G = "Umb.Tree.DocumentType", V = new e("Umb.Modal.Workspace", {
  modal: s.getDefaultModal(),
  data: { entityType: O, preset: {} }
  // Recast the type, so the entityType data prop is not required:
}), j = new T(
  "UmbWorkspaceContext",
  void 0,
  (_) => _.getEntityType?.() === "document-type"
), J = "Umb.Workspace.DocumentType", Q = "Umb.Workspace.DocumentType.Root";
export {
  U as A,
  B,
  l as C,
  K as D,
  w as E,
  z as F,
  G,
  f as H,
  g as I,
  M as J,
  v as K,
  h as L,
  Q as M,
  q as U,
  L as a,
  O as b,
  r as c,
  F as d,
  p as e,
  C as f,
  a as g,
  Y as h,
  u as i,
  d as j,
  j as k,
  H as l,
  X as m,
  n,
  A as o,
  b as p,
  J as q,
  k as r,
  x as s,
  W as t,
  V as u,
  S as v,
  N as w,
  I as x,
  y,
  i as z
};
//# sourceMappingURL=constants-CrVNO8d3.js.map
