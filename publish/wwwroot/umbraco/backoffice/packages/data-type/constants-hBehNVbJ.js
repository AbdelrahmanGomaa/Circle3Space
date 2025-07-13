import { UmbModalToken as _ } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL_ALIAS as s } from "@umbraco-cms/backoffice/tree";
import { UMB_WORKSPACE_PATH_PATTERN as t } from "@umbraco-cms/backoffice/workspace";
import { UMB_SETTINGS_SECTION_PATHNAME as A } from "@umbraco-cms/backoffice/settings";
import { UmbPathPattern as a } from "@umbraco-cms/backoffice/router";
import { UmbContextToken as T } from "@umbraco-cms/backoffice/context-api";
const y = "Umb.Repository.DataType.Collection", I = "Umb.Collection.DataType", S = "Umb.Workspace.DataType.Root", M = new _(
  "Umb.Modal.DataTypeCreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), c = "Umb.Repository.DataType.Duplicate", i = "Umb.Repository.DataType.Move", Y = new _("Umb.Modal.DataTypePickerFlowDataTypePicker", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), L = new _("Umb.Modal.DataTypePickerFlow", {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), C = new _(
  s,
  {
    modal: {
      type: "sidebar",
      size: "small"
    },
    data: {
      treeAlias: "Umb.Tree.DataType"
    }
  }
), D = "data-type", P = "data-type-root", E = "data-type-folder", o = t.generateAbsolute({
  sectionName: A,
  entityType: D
}), l = t.generateAbsolute({
  sectionName: A,
  entityType: P
}), B = new a("create/parent/:parentEntityType/:parentUnique", o), b = new a(
  "edit/:unique",
  o
), d = "Umb.Repository.DataType.Reference", N = new T("UmbDataTypeDetailStore"), W = "Umb.Repository.DataType.Detail", K = "Umb.Store.DataType.Detail", F = new T("UmbDataTypeItemStore"), w = "Umb.Repository.DataType.Item", k = "Umb.Store.DataType.Item", u = new T("UmbDataTypeTreeStore"), H = new T("UmbDataTypeFolderStore"), f = "Umb.Repository.DataType.Folder", g = "Umb.Store.DataType.Folder", z = new T(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === E
), n = t.generateAbsolute({
  sectionName: A,
  entityType: E
}), X = new a(
  "edit/:unique",
  n
), x = "Umb.Workspace.DataType.Folder", h = "Umb.Repository.DataType.TreeItemChildrenCollection", q = "Umb.Collection.DataType.TreeItemChildren", v = "Umb.Repository.DataType.Tree", G = "Umb.Store.DataType.Tree", j = "Umb.Tree.DataType", J = new T(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === "data-type"
), V = new _("Umb.Modal.Workspace", {
  modal: {
    type: "sidebar",
    size: "large"
  },
  data: { entityType: "data-type", preset: {} }
  // Recast the type, so the entityType data prop is not required:
}), Q = "Umb.Workspace.DataType";
export {
  j as A,
  u as B,
  f as C,
  g as D,
  H as E,
  x as F,
  z as G,
  n as H,
  X as I,
  q as J,
  h as K,
  Q as L,
  w as U,
  C as a,
  V as b,
  L as c,
  J as d,
  i as e,
  D as f,
  P as g,
  E as h,
  I as i,
  y as j,
  S as k,
  M as l,
  c as m,
  Y as n,
  o,
  l as p,
  B as q,
  b as r,
  d as s,
  W as t,
  K as u,
  N as v,
  k as w,
  F as x,
  v as y,
  G as z
};
//# sourceMappingURL=constants-hBehNVbJ.js.map
