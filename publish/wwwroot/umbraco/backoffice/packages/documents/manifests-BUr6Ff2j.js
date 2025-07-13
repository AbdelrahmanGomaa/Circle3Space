import { UmbContextToken as t } from "@umbraco-cms/backoffice/context-api";
import { UmbModalToken as e } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL_ALIAS as D } from "@umbraco-cms/backoffice/tree";
import { U as i } from "./paths-CRylFvqJ.js";
import { UmbPathPattern as n } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_PATH_PATTERN as S, UMB_WORKSPACE_CONDITION_ALIAS as s } from "@umbraco-cms/backoffice/workspace";
import "@umbraco-cms/backoffice/external/backend-api";
const _ = "document", m = "document-root", h = new t(
  "UmbCollectionContext"
), H = "Umb.Repository.DocumentCollection", f = "Umb.CollectionView.Document.Grid", k = "Umb.CollectionView.Document.Table", W = "Umb.Collection.Document", K = new e("Umb.Modal.Document.CreateOptions", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), g = new e(
  "Umb.Modal.CreateBlueprint",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), v = new e("Umb.Modal.CultureAndHostnames", {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), T = "Umb.Modal.Document.Duplicate", F = [
  {
    type: "modal",
    alias: T,
    name: "Duplicate Document To Modal",
    element: () => import("./duplicate-document-modal.element-CZ-CWZVh.js")
  }
], x = new e(T, {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), V = "Umb.Repository.Document.Duplicate", z = "Umb.Repository.Document.Move", c = "Umb.Modal.DocumentNotifications", C = {
  type: "modal",
  alias: c,
  name: "Document Notifications Modal",
  element: () => import("./document-notifications-modal.element-DwM0PlCx.js")
}, X = [C], q = new e(
  c,
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), G = "Umb.Repository.Document.Notifications", $ = new e(
  "Umb.Modal.PublicAccess",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
), j = "Umb.Repository.Document.SortChildrenOf", J = "Umb.Repository.Document.BulkDuplicate", Q = "Umb.Repository.Document.BulkMove", Z = new t("UmbDocumentItemStore"), ee = "Umb.Repository.DocumentItem", te = "Umb.Store.DocumentItem", M = "Umb.Modal.DocumentSave", oe = {
  type: "modal",
  alias: M,
  name: "Document Save Modal",
  element: () => import("./document-save-modal.element-CJkYjxCk.js")
}, _e = new e(
  M,
  {
    modal: {
      type: "dialog"
    }
  }
), A = "Umb.SearchProvider.Document", ne = new e(
  D,
  {
    modal: {
      type: "sidebar",
      size: "small"
    },
    data: {
      treeAlias: "Umb.Tree.Document",
      search: {
        providerAlias: A
      }
    }
  }
), a = S.generateAbsolute({
  sectionName: i,
  entityType: _
}), ae = new n(
  "create/parent/:parentEntityType/:parentUnique/:documentTypeUnique/blueprint/:blueprintUnique",
  a
), se = new n("create/parent/:parentEntityType/:parentUnique/:documentTypeUnique", a), Ue = new n(
  "edit/:unique",
  a
), I = (o) => o.getEntityType() === _, Ee = new t("UmbPropertyDatasetContext", void 0, I), R = "Umb.Modal.DocumentPublishWithDescendants", me = new e(R, {
  modal: {
    type: "dialog"
  }
}), r = "Umb.Modal.DocumentPublish", Te = new e(
  r,
  {
    modal: {
      type: "dialog"
    }
  }
), ce = "Umb.Repository.Document.Publishing", N = "Umb.Modal.DocumentSchedule", Me = new e(N, {
  modal: {
    type: "dialog"
  }
}), l = "Umb.Modal.DocumentUnpublish", Oe = new e(l, {
  modal: {
    type: "dialog"
  }
}), De = new t(
  "UmbWorkspaceContext",
  void 0,
  (o) => o.publishedPendingChanges !== void 0
), ie = "Umb.Repository.Document.BulkTrash", Se = "Umb.Repository.Document.RecycleBin", Ce = new t(
  "UmbDocumentRecycleBinTreeStore"
), Ae = "Umb.Repository.Document.RecycleBin.Tree", Ie = "Umb.Store.Document.RecycleBin.Tree", Re = "Umb.Tree.Document.RecycleBin", re = "document-recycle-bin-root", Ne = "Umb.Repository.Document.Reference", le = new t("UmbDocumentDetailStore"), ue = "Umb.Repository.Document.Detail", Be = "Umb.Store.Document.Detail", u = "Umb.Modal.Rollback", Le = new e(
  u,
  {
    modal: {
      type: "sidebar",
      size: "full"
    }
  }
), pe = "Umb.Repository.Rollback", be = new t("UmbDocumentUrlStore"), Pe = "Umb.Repository.Document.Url", de = "Umb.Store.Document.Url", ye = "Umb.Condition.UserPermission.Document", we = "Umb.Repository.Document.Permission", Ye = "Umb.Document.Create", he = "Umb.Document.Read", He = "Umb.Document.Update", fe = "Umb.Document.Delete", ke = "Umb.Document.CreateBlueprint", We = "Umb.Document.Notifications", Ke = "Umb.Document.Publish", ge = "Umb.Document.Permissions", ve = "Umb.Document.Unpublish", Fe = "Umb.Document.Duplicate", xe = "Umb.Document.Move", Ve = "Umb.Document.Sort", ze = "Umb.Document.CultureAndHostnames", Xe = "Umb.Document.PublicAccess", qe = "Umb.Document.Rollback", Ge = new t(
  "UmbWorkspaceContext",
  void 0,
  (o) => o.getEntityType?.() === _
), $e = "Umb.Workspace.Document", je = {
  culture: null,
  segment: null,
  state: null,
  name: "",
  publishDate: null,
  createDate: null,
  updateDate: null,
  scheduledPublishDate: null,
  scheduledUnpublishDate: null
}, Je = new t("UmbDocumentTreeStore"), B = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.Document.Tree.ReloadChildrenOf",
    name: "Reload Document Tree Item Children Entity Action",
    forEntityTypes: [_, m]
  }
], U = "Umb.Repository.Document.Tree", L = "Umb.Store.Document.Tree", O = "Umb.Tree.Document", Qe = [
  {
    type: "repository",
    alias: U,
    name: "Document Tree Repository",
    api: () => import("./document-tree.repository-CvewjBF0.js")
  },
  {
    type: "treeStore",
    alias: L,
    name: "Document Tree Store",
    api: () => import("./document-tree.store-CQ4J_apI.js")
  },
  {
    type: "tree",
    alias: O,
    name: "Document Tree",
    api: () => import("./document-tree.context-wBKf1jYU.js"),
    element: () => import("./document-tree.element-CE4SS2lt.js"),
    meta: {
      repositoryAlias: U
    }
  },
  {
    type: "treeItem",
    alias: "Umb.TreeItem.Document",
    name: "Document Tree Item",
    element: () => import("./document-tree-item.element-Db5mkpTt.js"),
    api: () => import("./document-tree-item.context-HmAFJ0oO.js"),
    forEntityTypes: [_]
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.Document.Root",
    name: "Document Tree Root",
    forEntityTypes: [m]
  },
  ...B
], E = "Umb.Menu.Content", Ze = [
  {
    type: "menu",
    alias: E,
    name: "Content Menu"
  },
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Document",
    name: "Document Menu Item",
    weight: 200,
    meta: {
      label: "Documents",
      menus: [E],
      treeAlias: O,
      hideTreeRoot: !0
    }
  },
  {
    type: "workspaceContext",
    name: "Document Menu Structure Workspace Context",
    alias: "Umb.Context.Document.Menu.Structure",
    api: () => import("./document-menu-structure.context-BJCFcn7P.js"),
    conditions: [
      {
        alias: s,
        match: "Umb.Workspace.Document"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "variantMenuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.Document.Breadcrumb",
    name: "Document Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: s,
        match: "Umb.Workspace.Document"
      }
    ]
  }
];
export {
  te as $,
  re as A,
  Me as B,
  me as C,
  g as D,
  _e as E,
  je as F,
  ue as G,
  $e as H,
  ye as I,
  Ye as J,
  ae as K,
  se as L,
  W as M,
  A as N,
  E as O,
  H as P,
  f as Q,
  v as R,
  T as S,
  V as T,
  O as U,
  z as V,
  c as W,
  G as X,
  j as Y,
  J as Z,
  Q as _,
  Je as a,
  M as a0,
  a as a1,
  I as a2,
  R as a3,
  r as a4,
  ce as a5,
  N as a6,
  l as a7,
  ie as a8,
  Se as a9,
  Qe as aA,
  Ae as aa,
  Ie as ab,
  Re as ac,
  Be as ad,
  u as ae,
  pe as af,
  Pe as ag,
  de as ah,
  he as ai,
  fe as aj,
  ke as ak,
  We as al,
  ge as am,
  ve as an,
  Fe as ao,
  xe as ap,
  Ve as aq,
  ze as ar,
  Xe as as,
  qe as at,
  we as au,
  L as av,
  F as aw,
  X as ax,
  oe as ay,
  Ze as az,
  U as b,
  k as c,
  _ as d,
  Ue as e,
  ne as f,
  Ge as g,
  Ee as h,
  De as i,
  h as j,
  K as k,
  x as l,
  m,
  $ as n,
  q as o,
  Z as p,
  Oe as q,
  le as r,
  Le as s,
  be as t,
  He as u,
  Te as v,
  Ke as w,
  Ne as x,
  ee as y,
  Ce as z
};
//# sourceMappingURL=manifests-BUr6Ff2j.js.map
