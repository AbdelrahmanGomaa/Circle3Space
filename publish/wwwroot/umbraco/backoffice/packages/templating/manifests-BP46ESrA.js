import { m as l, d as m } from "./stylesheet-rule-settings-modal.token-e3AAPWoc.js";
import { UmbModalToken as T } from "@umbraco-cms/backoffice/modal";
import { U as r, b as e, a as i } from "./entity-CA4W0tlV.js";
import "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/store";
import { UmbContextToken as s } from "@umbraco-cms/backoffice/context-api";
import "@umbraco-cms/backoffice/id";
import { UMB_WORKSPACE_CONDITION_ALIAS as a, UmbSubmitWorkspaceAction as y } from "@umbraco-cms/backoffice/workspace";
const p = "Umb.Repository.Stylesheet.Detail", _ = "Umb.Store.Stylesheet.Detail", N = [
  {
    type: "repository",
    alias: p,
    name: "Stylesheet Detail Repository",
    api: () => import("./stylesheet-detail.repository-BjwjqqxD.js")
  },
  {
    type: "store",
    alias: _,
    name: "Stylesheet Detail Store",
    api: () => import("./stylesheet-detail.store-Bz4D2A-J.js")
  },
  ...l
], P = new T(
  "Umb.Modal.Stylesheet.CreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), E = "Umb.Repository.Stylesheet.Rename", c = "Umb.EntityAction.Stylesheet.Rename", u = [
  {
    type: "repository",
    alias: E,
    name: "Rename Stylesheet Repository",
    api: () => import("./rename-stylesheet.repository-BvtgAqxV.js")
  },
  {
    type: "entityAction",
    kind: "renameServerFile",
    alias: c,
    name: "Rename Stylesheet Entity Action",
    forEntityTypes: [r],
    meta: {
      renameRepositoryAlias: E,
      itemRepositoryAlias: m
    }
  }
], $ = new s(
  "UmbStylesheetFolderStore"
), S = "Umb.Repository.Stylesheet.Folder", h = "Umb.Store.Stylesheet.Folder", A = [
  {
    type: "repository",
    alias: S,
    name: "Stylesheet Folder Repository",
    api: () => import("./stylesheet-folder.repository-CMJw8wh4.js")
  },
  {
    type: "store",
    alias: h,
    name: "Stylesheet Folder Store",
    api: () => import("./stylesheet-folder.store-BorZ-jyQ.js")
  }
], v = new s(
  "UmbWorkspaceContext",
  void 0,
  (o) => o.getEntityType?.() === e
), R = "Umb.Workspace.Stylesheet.Folder", d = [
  {
    type: "workspace",
    kind: "routable",
    alias: R,
    name: "Stylesheet Folder Workspace",
    api: () => import("./stylesheet-folder-workspace.context-CKAc97LO.js"),
    meta: {
      entityType: e
    }
  }
], U = "Umb.EntityAction.Stylesheet.Folder.Delete", L = [
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: U,
    name: "Delete Stylesheet folder Entity Action",
    forEntityTypes: [e],
    meta: {
      folderRepositoryAlias: S
    }
  },
  ...A,
  ...d
], O = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.Stylesheet.Tree.ReloadChildrenOf",
    name: "Reload Stylesheet Tree Item Children Entity Action",
    forEntityTypes: [i, e]
  }
], b = "Umb.Tree.Stylesheet", n = "Umb.Repository.StylesheetTree", I = "Umb.Store.StylesheetTree", x = [
  {
    type: "repository",
    alias: n,
    name: "Stylesheet Tree Repository",
    api: () => import("./stylesheet-tree.repository-H4Pu5VJi.js")
  },
  {
    type: "treeStore",
    alias: I,
    name: "Stylesheet Tree Store",
    api: () => import("./stylesheet-tree.store-BLhgF72C.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: b,
    name: "Stylesheet Tree",
    weight: 10,
    meta: {
      repositoryAlias: n
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.Stylesheet",
    name: "Stylesheet Tree Item",
    forEntityTypes: [i, r, e]
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.Stylesheet.Root",
    name: "Stylesheet Root Workspace",
    meta: {
      entityType: i,
      headline: "#treeHeaders_stylesheets"
    }
  },
  ...L,
  ...O
], g = new s("UmbStylesheetTreeStore"), V = new s(
  "UmbWorkspaceContext",
  void 0,
  (o) => o.getEntityType?.() === r
), t = "Umb.Workspace.Stylesheet", K = [
  {
    type: "workspace",
    kind: "routable",
    alias: t,
    name: "Stylesheet Workspace",
    api: () => import("./stylesheet-workspace.context-DvTzdYjG.js"),
    meta: {
      entityType: "stylesheet"
    }
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Stylesheet.CodeEditor",
    name: "Stylesheet Workspace Code Editor View",
    element: () => import("./stylesheet-code-editor-workspace-view.element-uTHXi42I.js"),
    weight: 700,
    meta: {
      label: "#stylesheet_tabCode",
      pathname: "code",
      icon: "icon-brackets"
    },
    conditions: [
      {
        alias: a,
        match: t
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Stylesheet.RichTextEditor",
    name: "Stylesheet Workspace Rich Text Editor View",
    element: () => import("./stylesheet-rich-text-rule-workspace-view.element-BxflM73p.js"),
    weight: 800,
    meta: {
      label: "#stylesheet_tabRules",
      pathname: "rich-text-editor",
      icon: "icon-font"
    },
    conditions: [
      {
        alias: a,
        match: t
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Stylesheet.Save",
    name: "Save Stylesheet Workspace Action",
    api: y,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: a,
        match: t
      }
    ]
  }
];
export {
  P as U,
  E as a,
  c as b,
  p as c,
  _ as d,
  n as e,
  I as f,
  b as g,
  g as h,
  U as i,
  S as j,
  h as k,
  $ as l,
  R as m,
  v as n,
  V as o,
  t as p,
  u as q,
  N as r,
  x as s,
  K as t
};
//# sourceMappingURL=manifests-BP46ESrA.js.map
