import { j as y, i as f, g as i, h as t, C as o, e as T, A as r, y as n, f as s, m as c, s as l, U as A, t as D, L as a, u as I, w as R, F as p, D as k, k as U, J as m, K as _, z as O } from "./constants-hBehNVbJ.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import { UMB_WORKSPACE_CONDITION_ALIAS as e, UmbSubmitWorkspaceAction as d } from "@umbraco-cms/backoffice/workspace";
import "@umbraco-cms/backoffice/id";
import { UMB_COLLECTION_ALIAS_CONDITION as E } from "@umbraco-cms/backoffice/collection";
const b = [
  {
    type: "repository",
    alias: y,
    name: "Data Type Collection Repository",
    api: () => import("./data-type-collection.repository-CRUwr960.js")
  }
], C = [
  {
    type: "collection",
    kind: "default",
    alias: f,
    name: "Data Type Collection",
    meta: {
      repositoryAlias: y
    }
  },
  ...b
], S = [
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.DataType.Root",
    name: "Data Type Root Workspace",
    meta: {
      entityType: i,
      headline: "#treeHeaders_dataTypes"
    }
  }
], P = [
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.DataType.Default",
    name: "Default Data Type Entity Create Option Action",
    weight: 1e3,
    api: () => import("./default-data-type-create-option-action-Wx7BEgQ9.js"),
    forEntityTypes: [i, t],
    meta: {
      icon: "icon-autofill",
      label: "#create_newDataType",
      description: "#create_newDataTypeDescription"
    }
  }
], u = [
  {
    type: "entityCreateOptionAction",
    kind: "folder",
    alias: "Umb.EntityCreateOptionAction.DataType.Folder",
    name: "Data Type Folder Entity Create Option Action",
    forEntityTypes: [i, t],
    meta: {
      icon: "icon-folder",
      label: "#create_folder",
      description: "#create_folderDescription",
      folderRepositoryAlias: o
    }
  }
], M = [
  {
    type: "entityAction",
    kind: "create",
    alias: "Umb.EntityAction.DataType.Create",
    name: "Create Data Type Entity Action",
    weight: 1200,
    forEntityTypes: [i, t]
  },
  // TODO: Deprecated: Will be removed in 17.0.0
  {
    type: "modal",
    alias: "Umb.Modal.DataTypeCreateOptions",
    name: "Data Type Create Options Modal",
    element: () => import("./data-type-create-options-modal.element-4M1tR4FE.js")
  },
  ...P,
  ...u
], L = [
  {
    type: "repository",
    alias: T,
    name: "Move Data Type Repository",
    api: () => import("./data-type-move.repository-BnrvJqf1.js")
  }
], h = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.DataType.MoveTo",
    name: "Move Data Type Entity Action",
    forEntityTypes: [s],
    meta: {
      treeRepositoryAlias: n,
      moveRepositoryAlias: T,
      treeAlias: r,
      foldersOnly: !0
    }
  },
  ...L
], w = [
  {
    type: "repository",
    alias: c,
    name: "Duplicate Data Type Repository",
    api: () => import("./data-type-duplicate.repository-3siU-n8D.js")
  }
], Y = [
  {
    type: "entityAction",
    kind: "duplicateTo",
    alias: "Umb.EntityAction.DataType.DuplicateTo",
    name: "Duplicate Document To Entity Action",
    forEntityTypes: [s],
    meta: {
      duplicateRepositoryAlias: c,
      treeAlias: r,
      treeRepositoryAlias: n,
      foldersOnly: !0
    }
  },
  ...w
], $ = [
  {
    type: "entityAction",
    kind: "deleteWithRelation",
    alias: "Umb.EntityAction.DataType.Delete",
    name: "Delete Data Type Entity Action",
    forEntityTypes: [s],
    meta: {
      detailRepositoryAlias: D,
      itemRepositoryAlias: A,
      referenceRepositoryAlias: l
    }
  },
  ...M,
  ...h,
  ...Y
], W = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.DataTypes",
    name: "Data Types Menu Item",
    weight: 600,
    meta: {
      label: "Data Types",
      entityType: "data-type",
      treeAlias: "Umb.Tree.DataType",
      menus: ["Umb.Menu.StructureSettings"]
    }
  },
  {
    type: "workspaceContext",
    name: "Data Type Menu Structure Workspace Context",
    alias: "Umb.Context.DataType.Menu.Structure",
    api: () => import("./data-type-menu-structure.context-BXbNB7xb.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.DataType"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.DataType.Breadcrumb",
    name: "Data Type Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.DataType"
      }
    ]
  }
], B = [
  {
    type: "modal",
    alias: "Umb.Modal.DataTypePickerFlow",
    name: "Data Type Picker Flow Modal",
    element: () => import("./data-type-picker-flow-modal.element-BAQJaJYb.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.DataTypePickerFlowDataTypePicker",
    name: "Data Type Picker Flow UI Picker Modal",
    element: () => import("./data-type-picker-flow-data-type-picker-modal.element-BYOO_61R.js")
  }
], F = [
  {
    type: "repository",
    alias: l,
    name: "Data Type Reference Repository",
    api: () => import("./data-type-reference.repository-KSzcjL7V.js")
  }
], N = [
  {
    type: "workspaceInfoApp",
    kind: "entityReferences",
    name: "Data Type References Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.DataType.References",
    conditions: [
      {
        alias: e,
        match: a
      }
    ],
    meta: {
      referenceRepositoryAlias: l
    }
  }
], v = [...F, ...N], V = [
  {
    type: "repository",
    alias: D,
    name: "Data Type Detail Repository",
    api: () => import("./data-type-detail.repository-BTmAQ9cL.js")
  },
  {
    type: "store",
    alias: I,
    name: "Data Type Detail Store",
    api: () => import("./data-type-detail.store-D_zctyt-.js")
  }
], g = [
  {
    type: "repository",
    alias: A,
    name: "Data Type Item Repository",
    api: () => import("./data-type-item.repository-Bcqld52U.js")
  },
  {
    type: "itemStore",
    alias: R,
    name: "Data Type Item Store",
    api: () => import("./data-type-item.store-Bk7UJ6Qs.js")
  }
], K = [...V, ...g], x = [
  {
    name: "Data Type Search Provider",
    alias: "Umb.SearchProvider.DataType",
    type: "searchProvider",
    api: () => import("./data-type.search-provider-DUKDjhq3.js"),
    weight: 400,
    meta: {
      label: "Data Types"
    }
  },
  {
    name: "Data Type Search Result Item ",
    alias: "Umb.SearchResultItem.DataType",
    type: "searchResultItem",
    forEntityTypes: [s]
  }
], H = [
  {
    type: "workspace",
    kind: "routable",
    alias: p,
    name: "Data Type Folder Workspace",
    api: () => import("./data-type-folder-workspace.context-wgeE3xZn.js"),
    meta: {
      entityType: t
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DataType.Folder.Submit",
    name: "Submit Media Type Folder Workspace Action",
    api: d,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: e,
        match: p
      }
    ]
  }
], j = [
  {
    type: "repository",
    alias: o,
    name: "Data Type Folder Repository",
    api: () => import("./data-type-folder.repository-Bxunr72C.js")
  },
  {
    type: "store",
    alias: k,
    name: "Data Type Folder Store",
    api: () => import("./data-type-folder.store-BXIbsAK0.js")
  }
], q = [
  {
    type: "entityAction",
    kind: "folderUpdate",
    alias: "Umb.EntityAction.DataType.Folder.Rename",
    name: "Rename Data Type Folder Entity Action",
    forEntityTypes: [t],
    meta: {
      folderRepositoryAlias: o
    }
  },
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: "Umb.EntityAction.DataType.Folder.Delete",
    name: "Delete Data Type Folder Entity Action",
    forEntityTypes: [t],
    meta: {
      folderRepositoryAlias: o
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.DataType.TreeItemChildrenCollection",
    name: "Data Type Tree Item Children Collection Workspace View",
    meta: {
      label: "Folder",
      pathname: "folder",
      icon: "icon-folder",
      collectionAlias: "Umb.Collection.DataType.TreeItemChildren"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        oneOf: [U, p]
      }
    ]
  },
  ...j,
  ...H
], z = [
  {
    type: "collectionView",
    alias: "Umb.CollectionView.DataType.TreeItem.Table",
    name: "Data Type Tree Item Table Collection View",
    element: () => import("./data-type-tree-item-table-collection-view.element-mGzFqq8U.js"),
    weight: 300,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: E,
        match: m
      }
    ]
  }
], J = [
  {
    type: "repository",
    alias: _,
    name: "Data Type Tree Item Children Collection Repository",
    api: () => import("./data-type-tree-item-children-collection.repository-B5fybFVk.js")
  }
], G = [
  {
    type: "collectionAction",
    kind: "create",
    name: "Data Type Tree Item Children Collection Create Action",
    alias: "Umb.CollectionAction.DataTypeTreeItemChildren.Create",
    conditions: [
      {
        alias: E,
        match: m
      }
    ]
  }
], Q = [
  {
    type: "collection",
    kind: "default",
    alias: m,
    name: "Data Type Tree Item Children Collection",
    meta: {
      repositoryAlias: _
    }
  },
  ...G,
  ...z,
  ...J
], X = [
  ...Q,
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.DataType.Tree.ReloadChildrenOf",
    name: "Reload Data Type Tree Item Children Entity Action",
    forEntityTypes: [i, t]
  }
], Z = [
  {
    type: "repository",
    alias: n,
    name: "Data Type Tree Repository",
    api: () => import("./data-type-tree.repository-DQCICNDG.js")
  },
  {
    type: "treeStore",
    alias: O,
    name: "Data Type Tree Store",
    api: () => import("./data-type-tree.store-SrycxcJB.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: r,
    name: "Data Types Tree",
    meta: {
      repositoryAlias: n
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.DataType",
    name: "Data Type Tree Item",
    forEntityTypes: ["data-type-root", "data-type", "data-type-folder"]
  },
  ...q,
  ...X
], ee = [
  {
    type: "workspace",
    kind: "routable",
    alias: a,
    name: "Data Type Workspace",
    api: () => import("./data-type-workspace.context-BQeaDRq6.js"),
    meta: {
      entityType: "data-type"
    }
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.DataType.Edit",
    name: "Data Type Workspace Edit View",
    element: () => import("./data-type-details-workspace-view.element-BMtVA9Uy.js"),
    weight: 90,
    meta: {
      label: "#general_details",
      pathname: "details",
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
    type: "workspaceView",
    alias: "Umb.WorkspaceView.DataType.Info",
    name: "Data Type Workspace Info View",
    element: () => import("./workspace-view-data-type-info.element-Cq2KlJHU.js"),
    weight: 90,
    meta: {
      label: "#general_info",
      pathname: "info",
      icon: "info"
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
    alias: "Umb.WorkspaceAction.DataType.Save",
    name: "Save Data Type Workspace Action",
    api: d,
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
], le = [
  ...C,
  ...S,
  ...$,
  ...W,
  ...B,
  ...v,
  ...K,
  ...x,
  ...Z,
  ...ee
];
export {
  le as manifests
};
//# sourceMappingURL=manifests.js.map
