import { UmbContextToken as a } from "@umbraco-cms/backoffice/context-api";
import { UMB_WORKSPACE_CONDITION_ALIAS as m, UmbSubmitWorkspaceAction as p } from "@umbraco-cms/backoffice/workspace";
import { b as e, c as o } from "./template-item.store.context-token-rCTaUJ7s.js";
const s = "Umb.Repository.Template.Detail", i = "Umb.Store.Template.Detail", S = [
  {
    type: "repository",
    alias: s,
    name: "Template Detail Repository",
    api: () => import("./template-detail.repository-DQd1J2WW.js")
  },
  {
    type: "store",
    alias: i,
    name: "Template Detail Store",
    api: () => import("./template-detail.store-CZ90bIIA.js")
  }
], r = "Umb.Repository.TemplateItem", n = "Umb.Store.TemplateItem", R = [
  {
    type: "repository",
    alias: r,
    name: "Template Item Repository",
    api: () => import("./template-item.repository-D119n8Im.js")
  },
  {
    type: "itemStore",
    alias: n,
    name: "Template Item Store",
    api: () => import("./template-item.store-CWC3jsVb.js")
  }
], l = "Umb.Repository.TemplateQuery", L = [
  {
    type: "repository",
    alias: l,
    name: "Template Query Repository",
    api: () => import("./template-query.repository-BUJO3F99.js")
  }
], M = "Umb.Condition.Template.AllowDeleteAction", O = new a(
  "UmbWorkspaceContext",
  void 0,
  (T) => T.getEntityType?.() === "template"
), E = "Umb.Workspace.Template", b = [
  {
    type: "workspace",
    kind: "routable",
    alias: "Umb.Workspace.Template",
    name: "Template Workspace",
    api: () => import("./template-workspace.context-BPgo-Tkc.js"),
    meta: {
      entityType: "template"
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Template.Save",
    name: "Save Template",
    api: p,
    weight: 70,
    meta: {
      look: "primary",
      color: "positive",
      label: "#buttons_save"
    },
    conditions: [
      {
        alias: m,
        match: E
      }
    ]
  }
], P = new a("UmbTemplateTreeStore"), _ = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.Template.Tree.ReloadChildrenOf",
    name: "Reload Template Tree Item Children Entity Action",
    forEntityTypes: [e, o]
  }
], t = "Umb.Repository.Template.Tree", A = "Umb.Store.Template.Tree", y = "Umb.Tree.Template", d = [
  {
    type: "repository",
    alias: t,
    name: "Template Tree Repository",
    api: () => import("./template-tree.repository-CvpxfFxy.js")
  },
  {
    type: "treeStore",
    alias: A,
    name: "Template Tree Store",
    api: () => import("./template-tree.store-BbI9F1Hj.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: y,
    name: "Template Tree",
    meta: {
      repositoryAlias: t
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.Template",
    name: "Template Tree Item",
    forEntityTypes: [e, o]
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.Template.Root",
    name: "Template Root Workspace",
    meta: {
      entityType: e,
      headline: "#treeHeaders_templates"
    }
  },
  ..._
];
export {
  r as U,
  M as a,
  s as b,
  i as c,
  n as d,
  O as e,
  E as f,
  l as g,
  t as h,
  A as i,
  y as j,
  P as k,
  R as l,
  S as m,
  L as n,
  d as o,
  b as p
};
//# sourceMappingURL=manifests-H0KeU9t1.js.map
