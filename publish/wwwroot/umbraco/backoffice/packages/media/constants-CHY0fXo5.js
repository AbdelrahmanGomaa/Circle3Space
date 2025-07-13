import { UmbModalToken as E } from "@umbraco-cms/backoffice/modal";
import { UMB_WORKSPACE_PATH_PATTERN as T } from "@umbraco-cms/backoffice/workspace";
import { UMB_SETTINGS_SECTION_PATHNAME as t } from "@umbraco-cms/backoffice/settings";
import { UmbPathPattern as o } from "@umbraco-cms/backoffice/router";
import { UmbContextToken as _ } from "@umbraco-cms/backoffice/context-api";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { UMB_TREE_PICKER_MODAL_ALIAS as s } from "@umbraco-cms/backoffice/tree";
const y = new E(
  "Umb.Modal.MediaTypeCreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), Y = "Umb.Repository.MediaType.Duplicate", d = "Umb.Repository.MediaType.Export", c = new E(
  "Umb.Modal.MediaType.Import",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), B = "Umb.Repository.MediaType.Import", L = "Umb.Repository.MediaType.Move", C = "Umb.Workspace.MediaType.Root", a = "media-type", I = "media-type-root", M = "media-type-folder", A = T.generateAbsolute({
  sectionName: t,
  entityType: a
}), b = T.generateAbsolute({
  sectionName: t,
  entityType: I
}), l = new o("create/parent/:parentEntityType/:parentUnique", A), N = new o(
  "edit/:unique",
  A
), W = "media-type-property-type", K = "Umb.Repository.MediaType.Composition", w = new _(
  "UmbMediaTypeDetailStore"
), F = "Umb.Repository.MediaType.Detail", H = "Umb.Store.MediaType.Detail", u = new _("UmbMediaTypeItemStore"), f = "Umb.Repository.MediaType.Item", k = "Umb.Store.MediaType.Item", X = new _(
  "UmbMediaTypeFolderStore"
), g = "Umb.Repository.MediaType.Folder", x = "Umb.Store.MediaType.Folder", h = new _(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === M
), P = T.generateAbsolute({
  sectionName: t,
  entityType: M
}), q = new o(
  "edit/:unique",
  P
), v = "Umb.Workspace.MediaType.Folder", z = "Umb.Repository.MediaType.TreeItemChildrenCollection", G = "Umb.Collection.MediaType.TreeItemChildren", j = new E(
  s,
  {
    modal: {
      type: "sidebar",
      size: "small"
    },
    data: {
      treeAlias: "Umb.Tree.MediaType"
    }
  }
), J = new _("UmbMediaTypeTreeStore"), V = "Umb.Repository.MediaType.Tree", Q = "Umb.Store.MediaType.Tree", Z = "Umb.Tree.MediaType", $ = new _(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === "media-type"
), __ = "Umb.Workspace.MediaType";
export {
  b as A,
  K as B,
  H as C,
  k as D,
  Q as E,
  Z as F,
  x as G,
  h as H,
  P as I,
  G as J,
  z as K,
  V as U,
  W as a,
  a as b,
  N as c,
  J as d,
  $ as e,
  g as f,
  c as g,
  w as h,
  u as i,
  l as j,
  X as k,
  q as l,
  M as m,
  I as n,
  F as o,
  __ as p,
  v as q,
  f as r,
  j as s,
  y as t,
  Y as u,
  d as v,
  B as w,
  L as x,
  C as y,
  A as z
};
//# sourceMappingURL=constants-CHY0fXo5.js.map
