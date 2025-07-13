import { d as r, e as l, v as A, a as i, c as I, f as s, q as n, o, b as t, g as c, U as m, h as _, l as T, k as D, j as d, n as E, p as R, r as a } from "./paths-DZopmHn1.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { UMB_COLLECTION_ALIAS_CONDITION as p } from "@umbraco-cms/backoffice/collection";
import { UMB_TRANSLATION_SECTION_ALIAS as O, UMB_TRANSLATION_MENU_ALIAS as C } from "@umbraco-cms/backoffice/translation";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/tree";
import { UMB_WORKSPACE_CONDITION_ALIAS as e, UmbSubmitWorkspaceAction as b } from "@umbraco-cms/backoffice/workspace";
const S = [
  {
    type: "repository",
    alias: r,
    name: "Dictionary Collection Repository",
    api: () => import("./dictionary-collection.repository-Bpi0wUde.js")
  }
], U = [
  {
    type: "collectionView",
    alias: l,
    name: "Dictionary Table Collection View",
    element: () => import("./dictionary-table-collection-view.element-CGXM4uRZ.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: p,
        match: "Umb.Collection.Dictionary"
      }
    ]
  }
], f = A.generateAbsolute({
  parentEntityType: i,
  parentUnique: null
}), M = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create Dictionary Collection Action",
    alias: "Umb.CollectionAction.Dictionary.Create",
    weight: 200,
    meta: {
      label: "#general_create",
      href: f
    },
    conditions: [
      {
        alias: p,
        match: "Umb.Collection.Dictionary"
      }
    ]
  }
], u = {
  type: "collection",
  kind: "default",
  alias: I,
  element: () => import("./dictionary-collection.element-BBgY0loa.js"),
  name: "Dictionary Collection",
  meta: {
    repositoryAlias: r
  }
}, N = [
  u,
  ...S,
  ...U,
  ...M
], h = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.Dictionary.Overview",
    name: "Dictionary Overview Dashboard",
    element: () => import("./dictionary-overview-dashboard.element-DJTHoiHv.js"),
    meta: {
      label: "#dictionaryItem_overviewTitle",
      pathname: "dictionary-overview"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: O
      }
    ]
  }
], k = [
  {
    type: "repository",
    alias: s,
    name: "Move Dictionary Repository",
    api: () => import("./dictionary-move.repository-B9mHlH-w.js")
  }
], L = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.Dictionary.MoveTo",
    name: "Move Dictionary Entity Action",
    forEntityTypes: [t],
    meta: {
      treeRepositoryAlias: o,
      moveRepositoryAlias: s,
      treeAlias: n
    }
  },
  ...k
], Y = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Dictionary.Create",
    name: "Create Dictionary Entity Action",
    weight: 1200,
    api: () => import("./create.action-CSZbUV0S.js"),
    forEntityTypes: [t, i],
    meta: {
      icon: "icon-add",
      label: "#general_create",
      additionalOptions: !0
    }
  },
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Dictionary.Export",
    name: "Export Dictionary Entity Action",
    weight: 400,
    api: () => import("./export.action-DDJj8MFu.js"),
    forEntityTypes: [t],
    meta: {
      icon: "icon-download-alt",
      label: "#actions_export",
      additionalOptions: !0
    }
  },
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Dictionary.Import",
    name: "Import Dictionary Entity Action",
    weight: 300,
    api: () => import("./import.action-DEenCsR4.js"),
    forEntityTypes: [t, i],
    meta: {
      icon: "icon-page-up",
      label: "#actions_import",
      additionalOptions: !0
    }
  },
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.Dictionary.Delete",
    name: "Delete Dictionary Entity Action",
    forEntityTypes: [t],
    meta: {
      itemRepositoryAlias: m,
      detailRepositoryAlias: c
    }
  },
  {
    type: "modal",
    alias: "Umb.Modal.Dictionary.Export",
    name: "Export Dictionary Modal",
    element: () => import("./export-dictionary-modal.element-Bo9uPaCh.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.Dictionary.Import",
    name: "Import Dictionary Modal",
    element: () => import("./import-dictionary-modal.element-BaSPvomz.js")
  },
  ...L
], B = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Dictionary",
    name: "Dictionary Menu Item",
    weight: 400,
    meta: {
      label: "Dictionary",
      icon: "icon-book-alt",
      entityType: t,
      menus: [C],
      treeAlias: n,
      hideTreeRoot: !0
    }
  },
  {
    type: "workspaceContext",
    name: "Dictionary Menu Structure Workspace Context",
    alias: "Umb.Context.Dictionary.Menu.Structure",
    api: () => import("./dictionary-menu-structure.context-BQl9Z_Re.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Dictionary"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.Dictionary.Breadcrumb",
    name: "Data Type Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Dictionary"
      }
    ]
  }
], w = [
  {
    type: "repository",
    alias: c,
    name: "Dictionary Detail Repository",
    api: () => import("./dictionary-detail.repository-CN0ZnlNz.js")
  },
  {
    type: "store",
    alias: _,
    name: "Dictionary Detail Store",
    api: () => import("./dictionary-detail.store-CglirpMm.js")
  }
], v = [
  {
    type: "repository",
    alias: m,
    name: "Dictionary Item Repository",
    api: () => import("./dictionary-item.repository-DxihQe1A.js")
  },
  {
    type: "itemStore",
    alias: T,
    name: "Dictionary Item Store",
    api: () => import("./dictionary-item.store-B38kENTy.js")
  }
], P = [
  {
    type: "repository",
    alias: D,
    name: "Dictionary Import Repository",
    api: () => import("./dictionary-import.repository-C5zmqQoX.js")
  }
], $ = [
  {
    type: "repository",
    alias: d,
    name: "Dictionary Export Repository",
    api: () => import("./dictionary-export.repository-B9P6YEJT.js")
  }
], g = [
  ...w,
  ...v,
  ...P,
  ...$
], W = [
  {
    name: "Dictionary Search Provider",
    alias: E,
    type: "searchProvider",
    api: () => import("./dictionary.search-provider-DRMEsT1g.js"),
    weight: 600,
    meta: {
      label: "Dictionary"
    }
  },
  {
    name: "Dictionary Search Result Item ",
    alias: "Umb.SearchResultItem.Dictionary",
    type: "searchResultItem",
    forEntityTypes: [t]
  }
], x = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.Dictionary.Tree.ReloadChildrenOf",
    name: "Reload Dictionary Tree Item Children Entity Action",
    forEntityTypes: [i, t]
  }
], V = [
  {
    type: "repository",
    alias: o,
    name: "Dictionary Tree Repository",
    api: () => import("./dictionary-tree.repository-CMhx3-OI.js")
  },
  {
    type: "treeStore",
    alias: R,
    name: "Dictionary Tree Store",
    api: () => import("./paths-DZopmHn1.js").then((y) => y.x)
  },
  {
    type: "tree",
    kind: "default",
    alias: n,
    name: "Dictionary Tree",
    meta: {
      repositoryAlias: o
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.Dictionary",
    name: "Dictionary Tree Item",
    forEntityTypes: [i, t]
  },
  ...x
], F = [
  {
    type: "workspace",
    kind: "routable",
    alias: a,
    name: "Dictionary Workspace",
    api: () => import("./dictionary-workspace.context-CoiSDWP1.js"),
    meta: {
      entityType: t
    }
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Dictionary.Edit",
    name: "Dictionary Workspace Edit View",
    element: () => import("./workspace-view-dictionary-editor.element-Bz0gMHQl.js"),
    weight: 100,
    meta: {
      label: "#general_edit",
      pathname: "edit",
      icon: "edit"
    },
    conditions: [
      {
        alias: e,
        match: a
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Dictionary.Save",
    name: "Save Dictionary Workspace Action",
    weight: 90,
    api: b,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: e,
        match: a
      }
    ]
  }
], Z = [
  ...N,
  ...h,
  ...Y,
  ...B,
  ...g,
  ...W,
  ...V,
  ...F
];
export {
  Z as manifests
};
//# sourceMappingURL=manifests.js.map
