import { UMB_CONTENT_SECTION_ALIAS as E, UMB_CONTENT_HAS_PROPERTIES_WORKSPACE_CONDITION as _e } from "@umbraco-cms/backoffice/content";
import { U as D, b as r, e as Y, n as N, l as P, a as A, f as W, i as v, j as Te, g as Ee, p as B, q as De, s as w, m as Ue, u as C } from "./paths-BF32ZUyU.js";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import { UMB_MANAGEMENT_API_DATA_SOURCE_ALIAS as V } from "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/notification";
import { UMB_WORKSPACE_CONDITION_ALIAS as t, UmbSubmitWorkspaceAction as R, UMB_WORKSPACE_ENTITY_IS_NEW_CONDITION_ALIAS as h } from "@umbraco-cms/backoffice/workspace";
import { H as n, P as F, Q as de, c as Ae, M as l, ak as H, d as e, J as x, m as K, ar as G, T as Re, ao as L, aw as Oe, V as q, ap as O, U as $, b as j, as as z, Y as X, aq as J, y as p, X as be, al as Q, ax as fe, aj as u, x as _, G as Z, Z as ee, _ as te, $ as Ie, ay as Me, w as T, a4 as Se, a3 as Ce, u as g, I as b, a5 as Pe, a6 as Be, an as f, a7 as ke, a8 as Ne, a9 as y, f as he, A as I, O as Le, ac as ie, aa as ne, ab as $e, ad as ge, at as oe, ae as we, af as Ye, N as We, ag as ve, ah as Ve, au as Fe, ai as He, am as xe, az as Ke, aA as Ge } from "./manifests-BUr6Ff2j.js";
import { UMB_COLLECTION_ALIAS_CONDITION as s } from "@umbraco-cms/backoffice/collection";
import { UMB_ENTITY_IS_NOT_TRASHED_CONDITION_ALIAS as i, UMB_ENTITY_IS_TRASHED_CONDITION_ALIAS as ae } from "@umbraco-cms/backoffice/recycle-bin";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/tree";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as se } from "@umbraco-cms/backoffice/section";
import { UMB_ENTITY_BULK_ACTION_TRASH_WITH_RELATION_KIND as qe } from "@umbraco-cms/backoffice/relations";
import { UMB_ENTITY_HAS_CHILDREN_CONDITION_ALIAS as je } from "@umbraco-cms/backoffice/entity-action";
import { r as U, o as m, n as o, b as a, z as me, G as M, U as d, w as ce, x as ze, y as Xe, p as re, t as pe, a as Je, C as Qe, D as Ze, B as le, E as et, H as tt, s as k, K as S, L as ye, F as it, M as nt, q as c } from "./constants-CrVNO8d3.js";
import { UMB_DOCUMENT_ROOT_ENTITY_TYPE as ot, UMB_CONTENT_MENU_ALIAS as at } from "@umbraco-cms/backoffice/document";
const st = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.RedirectManagement",
    name: "Redirect Management Dashboard",
    element: () => import("./dashboard-redirect-management.element-DivZcF6L.js"),
    weight: 10,
    meta: {
      label: "#dashboardTabs_contentRedirectManager",
      pathname: "redirect-management"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: E
      }
    ]
  }
], mt = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.DocumentBlueprint.Create",
    name: "Document Blueprint Options Create Entity Action",
    weight: 1200,
    api: () => import("./create.action-Dr3R8PQT.js"),
    forEntityTypes: [D, r],
    meta: {
      icon: "icon-add",
      label: "#actions_createblueprint",
      additionalOptions: !0
    }
  },
  {
    type: "modal",
    alias: "Umb.Modal.DocumentBlueprintOptionsCreate",
    name: "Document Blueprint Options Create Modal",
    element: () => import("./document-blueprint-options-create-modal.element-DWNaBKgj.js")
  }
], ct = {
  type: "repository",
  alias: Y,
  name: "Move Document Blueprint Repository",
  api: () => import("./document-blueprint-move.repository-r1fzTWj8.js")
}, rt = [ct], pt = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.DocumentBlueprint.MoveTo",
    name: "Move Document Blueprint Entity Action",
    forEntityTypes: [A],
    meta: {
      treeRepositoryAlias: P,
      moveRepositoryAlias: Y,
      treeAlias: N,
      foldersOnly: !0
    }
  },
  ...rt
], lt = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.DocumentBlueprintItem.Delete",
    name: "Delete Document Blueprint Item Entity Action",
    forEntityTypes: [A],
    meta: {
      detailRepositoryAlias: v,
      itemRepositoryAlias: W
    }
  },
  ...mt,
  ...pt
], yt = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.DocumentBlueprints",
    name: "Document Blueprints Menu Item",
    weight: 100,
    meta: {
      treeAlias: N,
      label: "#treeHeaders_contentBlueprints",
      menus: ["Umb.Menu.StructureSettings"]
    }
  }
], ut = [
  {
    type: "repository",
    alias: v,
    name: "Document Blueprint Detail Repository",
    api: () => import("./document-blueprint-detail.repository-qG7VPYvt.js")
  },
  {
    type: "store",
    alias: Te,
    name: "Document Blueprint Detail Store",
    api: () => import("./document-blueprint-detail.store-Ctc14hsK.js")
  }
], _t = [
  {
    type: "repository",
    alias: W,
    name: "Document Blueprint Item Repository",
    api: () => import("./document-blueprint-item.repository-BIRG_YSq.js")
  },
  {
    type: "itemStore",
    alias: Ee,
    name: "Document Blueprint Item Store",
    api: () => import("./document-blueprint-item.store-D44gA2EQ.js")
  }
], Tt = [...ut, ..._t], Et = [
  {
    type: "repository",
    alias: B,
    name: "Document Blueprint Folder Repository",
    api: () => import("./document-blueprint-folder.repository-o99ERsrb.js")
  },
  {
    type: "store",
    alias: De,
    name: "Document Blueprint Folder Store",
    api: () => import("./document-blueprint-folder.store-B5NoWDzi.js")
  }
], Dt = [
  {
    type: "workspace",
    kind: "routable",
    alias: w,
    name: "Document Blueprint Folder Workspace",
    api: () => import("./document-blueprint-folder-workspace.context-V97CfanW.js"),
    meta: {
      entityType: r
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DocumentBlueprint.Folder.Submit",
    name: "Submit Document Blueprint Folder Workspace Action",
    api: R,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: w
      }
    ]
  }
], Ut = [
  {
    type: "entityAction",
    kind: "folderUpdate",
    alias: "Umb.EntityAction.DocumentBlueprint.Folder.Rename",
    name: "Rename Document Blueprint Folder Entity Action",
    forEntityTypes: [r],
    meta: {
      folderRepositoryAlias: B
    }
  },
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: "Umb.EntityAction.DocumentBlueprint.Folder.Delete",
    name: "Delete Document Blueprint Folder Entity Action",
    forEntityTypes: [r],
    meta: {
      folderRepositoryAlias: B
    }
  },
  ...Et,
  ...Dt
], dt = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.DocumentBlueprint.Tree.ReloadChildrenOf",
    name: "Reload Document Blueprint Tree Item Children Entity Action",
    forEntityTypes: [D, r],
    meta: {}
  }
], At = [
  {
    type: "repository",
    alias: P,
    name: "Document Blueprint Tree Repository",
    api: () => import("./document-blueprint-tree.repository-IrGsVIox.js")
  },
  {
    type: "treeStore",
    alias: Ue,
    name: "Document Blueprint Tree Store",
    api: () => import("./document-blueprint-tree.store-6h2voZ4z.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: N,
    name: "Document Blueprints Tree",
    meta: {
      repositoryAlias: P
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.DocumentBlueprint",
    name: "Document Blueprint Tree Item",
    forEntityTypes: [
      D,
      A,
      r
    ]
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.DocumentBlueprint.Root",
    name: "Document Blueprint Root Workspace",
    meta: {
      entityType: D,
      headline: "#treeHeaders_contentBlueprints"
    }
  },
  ...dt,
  ...Ut
], Rt = [
  {
    type: "workspace",
    kind: "routable",
    alias: C,
    name: "Document Blueprint Workspace",
    api: () => import("./document-blueprint-workspace.context-GnAnL-lW.js"),
    meta: {
      entityType: A
    }
  },
  {
    type: "workspaceView",
    kind: "contentEditor",
    alias: "Umb.WorkspaceView.DocumentBlueprint.Edit",
    name: "Document Blueprint Workspace Edit View",
    weight: 200,
    meta: {
      label: "#general_content",
      pathname: "content",
      icon: "document"
    },
    conditions: [
      {
        alias: t,
        match: C
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DocumentBlueprint.Save",
    name: "Save Document Workspace Action",
    weight: 80,
    api: R,
    meta: {
      label: "Save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: C
      }
    ]
  }
], Ot = [
  ...lt,
  ...yt,
  ...Tt,
  ...At,
  ...Rt
], bt = [
  {
    type: "workspaceInfoApp",
    name: "Document History Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Document.History",
    element: () => import("./document-history-workspace-info-app.element-D1zosFX4.js"),
    weight: 80,
    conditions: [
      {
        alias: t,
        match: n
      }
    ]
  }
], ft = [...bt], It = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create Document Collection Action",
    alias: "Umb.CollectionAction.Document.Create",
    element: () => import("./create-document-collection-action.element-DUj_Dg09.js"),
    weight: 100,
    meta: {
      label: "#general_create"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Document"
      }
    ]
  }
], Mt = [
  {
    type: "repository",
    alias: F,
    name: "Document Collection Repository",
    api: () => import("./document-collection.repository-B2Lh1Uqg.js")
  }
], St = [
  {
    type: "collectionView",
    alias: de,
    name: "Document Grid Collection View",
    element: () => import("./document-grid-collection-view.element-I2769EZQ.js"),
    weight: 200,
    meta: {
      label: "Grid",
      icon: "icon-grid",
      pathName: "grid"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Document"
      }
    ]
  },
  {
    type: "collectionView",
    alias: Ae,
    name: "Document Table Collection View",
    element: () => import("./document-table-collection-view.element-CRSrokWM.js"),
    weight: 300,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Document"
      }
    ]
  }
], Ct = [
  {
    type: "collection",
    alias: l,
    name: "Document Collection",
    api: () => import("./document-collection.context-D17rvFox.js"),
    element: () => import("./document-collection.element-DnGxM0Wz.js"),
    meta: {
      repositoryAlias: F
    }
  },
  ...It,
  ...Mt,
  ...St
], Pt = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.CreateBlueprint",
    name: "Create Document Blueprint Entity Action",
    weight: 1e3,
    api: () => import("./create-blueprint.action-DtR0s0a-.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-blueprint",
      label: "#actions_createblueprint",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [H]
      },
      {
        alias: i
      }
    ]
  },
  {
    type: "modal",
    alias: "Umb.Modal.CreateBlueprint",
    name: "Create Blueprint Modal",
    element: () => import("./create-blueprint-modal.element-Cm0-6lBc.js")
  }
], Bt = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Create",
    name: "Create Document Entity Action",
    weight: 1200,
    api: () => import("./create.action-D3nhTfpE.js"),
    forEntityTypes: [K, e],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [x]
      },
      {
        alias: i
      }
    ]
  },
  {
    type: "modal",
    alias: "Umb.Modal.Document.CreateOptions",
    name: "Document Create Options Modal",
    element: () => import("./document-create-options-modal.element-DdpqvmWb.js")
  }
], kt = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.CultureAndHostnames",
    name: "Culture And Hostnames Document Entity Action",
    weight: 400,
    api: () => import("./culture-and-hostnames.action-BJr_SRfp.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-home",
      label: "#actions_assigndomain",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [G]
      },
      {
        alias: i
      }
    ]
  },
  {
    type: "modal",
    alias: "Umb.Modal.CultureAndHostnames",
    name: "Culture And Hostnames Modal",
    element: () => import("./culture-and-hostnames-modal.element-BYx6mjLk.js").then((ue) => ue.c)
  }
], Nt = [
  {
    type: "repository",
    alias: Re,
    name: "Duplicate Document Repository",
    api: () => import("./document-duplicate.repository-BuhffHDq.js")
  }
], ht = [
  {
    type: "entityAction",
    kind: "duplicateTo",
    alias: "Umb.EntityAction.Document.DuplicateTo",
    name: "Duplicate Document To Entity Action",
    forEntityTypes: [e],
    api: () => import("./duplicate-document.action-Dak9EYM5.js"),
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [L]
      },
      {
        alias: i
      }
    ]
  },
  ...Nt,
  ...Oe
], Lt = [
  {
    type: "repository",
    alias: q,
    name: "Move Document Repository",
    api: () => import("./document-move.repository-DVhnehFO.js")
  }
], $t = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.Document.MoveTo",
    name: "Move Document Entity Action",
    forEntityTypes: [e],
    meta: {
      treeRepositoryAlias: j,
      moveRepositoryAlias: q,
      treeAlias: $
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [O]
      },
      {
        alias: i
      }
    ]
  },
  ...Lt
], gt = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.PublicAccess",
    name: "Document Public Access Entity Action",
    weight: 200,
    api: () => import("./public-access.action-BVhE89rm.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-lock",
      label: "#actions_protect",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [z]
      },
      {
        alias: i
      },
      {
        alias: se,
        match: "Umb.Section.Members"
      }
    ]
  },
  {
    type: "modal",
    alias: "Umb.Modal.PublicAccess",
    name: "Public Access Modal",
    element: () => import("./public-access-modal.element-qIHal7AY.js")
  }
], wt = [
  {
    type: "repository",
    alias: X,
    name: "Sort Children Of Document Repository",
    api: () => import("./sort-children-of.repository--DUFGghY.js")
  }
], Yt = [
  ...wt,
  {
    type: "entityAction",
    kind: "sortChildrenOf",
    alias: "Umb.EntityAction.Document.SortChildrenOf",
    name: "Sort Children Of Document Entity Action",
    forEntityTypes: [K, e],
    meta: {
      itemRepositoryAlias: p,
      sortChildrenOfRepositoryAlias: X,
      treeRepositoryAlias: j,
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [J]
      },
      {
        alias: i
      }
    ]
  }
], Wt = [
  {
    type: "repository",
    alias: be,
    name: "Document Notifications Repository",
    api: () => import("./document-notifications.repository-DuorxlR9.js")
  }
], vt = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Notifications",
    name: "Notifications",
    weight: 100,
    api: () => import("./document-notifications.action-BsZsHQ3K.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-megaphone",
      label: "#actions_notify",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [Q]
      },
      {
        alias: i
      }
    ]
  }
], Vt = [...vt, ...fe, ...Wt], Ft = [
  {
    type: "entityAction",
    kind: "deleteWithRelation",
    alias: "Umb.EntityAction.Document.Delete",
    name: "Delete Document Entity Action",
    forEntityTypes: [e],
    meta: {
      itemRepositoryAlias: p,
      detailRepositoryAlias: Z,
      referenceRepositoryAlias: _
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [u]
      },
      {
        alias: ae
      }
    ]
  }
  /* TODO: Implement Permissions Entity Action
  {
  	type: 'entityAction',
  	kind: 'default',
  	alias: 'Umb.EntityAction.Document.Permissions',
  	name: 'Permissions Document Entity Action',
  	weight: 300,
  	forEntityTypes: [UMB_DOCUMENT_ENTITY_TYPE],
  	api: () => import('./permissions.action.js'),
  	meta: {
  		icon: 'icon-name-badge',
  		label: '#actions_setPermissions',
  	},
  	conditions: [
  		{
  			alias: 'Umb.Condition.UserPermission.Document',
  			allOf: [UMB_USER_PERMISSION_DOCUMENT_PERMISSIONS],
  		},
  		{
  			alias: UMB_ENTITY_IS_NOT_TRASHED_CONDITION_ALIAS,
  		},
  	],
  },
  */
], Ht = [
  ...Pt,
  ...Bt,
  ...kt,
  ...ht,
  ...$t,
  ...gt,
  ...Yt,
  ...Ft,
  ...Vt
], xt = [
  {
    type: "repository",
    alias: ee,
    name: "Bulk Duplicate Media Repository",
    api: () => import("./duplicate-to.repository-BVuLjDxm.js")
  }
], Kt = [
  {
    type: "entityBulkAction",
    kind: "duplicateTo",
    alias: "Umb.EntityBulkAction.Document.DuplicateTo",
    name: "Duplicate Document Entity Bulk Action",
    weight: 30,
    forEntityTypes: [e],
    meta: {
      bulkDuplicateRepositoryAlias: ee,
      treeAlias: $
    },
    conditions: [
      {
        alias: s,
        match: l
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [L]
      }
    ]
  },
  ...xt
], Gt = [
  {
    type: "repository",
    alias: te,
    name: "Bulk Move Document Repository",
    api: () => import("./move-to.repository-BuRPAgtK.js")
  }
], qt = [
  {
    type: "entityBulkAction",
    kind: "moveTo",
    alias: "Umb.EntityBulkAction.Document.MoveTo",
    name: "Move Document Entity Bulk Action",
    weight: 20,
    forEntityTypes: [e],
    meta: {
      bulkMoveRepositoryAlias: te,
      treeAlias: $
    },
    conditions: [
      {
        alias: s,
        match: l
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [O]
      }
    ]
  },
  ...Gt
], jt = [...Kt, ...qt], zt = [
  {
    type: "globalContext",
    alias: "Umb.GlobalContext.DocumentConfiguration",
    name: "Document Configuration Context",
    api: () => import("./document-configuration.context-O-fJ6QkZ.js")
  }
], Xt = [
  {
    type: "repository",
    alias: p,
    name: "Document Item Repository",
    api: () => import("./document-item.repository-DGfmiV4g.js")
  },
  {
    type: "itemStore",
    alias: Ie,
    name: "Document Item Store",
    api: () => import("./document-item.store-BRKBD6gU.js")
  }
], Jt = [
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.Document",
    name: "Document Entity Item Reference",
    element: () => import("./document-item-ref.element-DmUcsCdq.js"),
    forEntityTypes: [e]
  },
  ...Xt
], Qt = [Me], Zt = [
  {
    type: "pickerSearchResultItem",
    kind: "default",
    alias: "Umb.PickerSearchResultItem.Document",
    name: "Document Picker Search Result Item",
    element: () => import("./document-picker-search-result-item.element-BqIp_dR4.js"),
    forEntityTypes: [e]
  }
], ei = {
  type: "propertyEditorSchema",
  name: "Content Picker",
  alias: "Umbraco.ContentPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.DocumentPicker",
    settings: {
      properties: [
        {
          alias: "ignoreUserStartNodes",
          label: "Ignore user start nodes",
          description: "Selecting this option allows a user to choose nodes that they normally dont have access to.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ]
    }
  }
}, ti = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.DocumentPicker",
    name: "Document Picker Property Editor UI",
    element: () => import("./property-editor-ui-document-picker.element-LiiriOUZ.js"),
    meta: {
      label: "Document Picker",
      propertyEditorSchemaAlias: "Umbraco.ContentPicker",
      icon: "icon-document",
      group: "pickers",
      supportsReadOnly: !0,
      settings: {
        properties: [
          {
            alias: "startNodeId",
            label: "Start node",
            description: "",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.DocumentPicker",
            config: [
              {
                alias: "validationLimit",
                value: { min: 0, max: 1 }
              }
            ]
          }
        ]
      }
    }
  },
  ei
], ii = [...ti], ni = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Publish",
    name: "Publish Document Entity Action",
    weight: 600,
    api: () => import("./publish.action-C80Vs8GK.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-globe",
      label: "#actions_publish",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [T]
      },
      {
        alias: i
      }
    ]
  }
], oi = [
  {
    type: "entityBulkAction",
    kind: "default",
    alias: "Umb.EntityBulkAction.Document.Publish",
    name: "Publish Document Entity Bulk Action",
    weight: 50,
    api: () => import("./publish.bulk-action-CZD7AtOc.js"),
    meta: {
      icon: "icon-globe",
      label: "#actions_publish"
    },
    forEntityTypes: [e],
    conditions: [
      {
        alias: s,
        match: l
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [T]
      }
    ]
  }
], ai = [
  {
    type: "modal",
    alias: Se,
    name: "Document Publish Modal",
    element: () => import("./document-publish-modal.element-DT8TBIBh.js")
  }
], si = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Document.SaveAndPublish",
    name: "Save And Publish Document Workspace Action",
    weight: 70,
    api: () => import("./save-and-publish.action-BJeLsBCQ.js"),
    meta: {
      label: "#buttons_saveAndPublish",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: n
      },
      {
        alias: i
      }
    ]
  }
], mi = [
  ...ni,
  ...oi,
  ...ai,
  ...si
], ci = [
  {
    type: "modal",
    alias: Ce,
    name: "Document Publish With Descendants Modal",
    element: () => import("./document-publish-with-descendants-modal.element-BHe7VdlT.js")
  }
], ri = [
  {
    type: "workspaceActionMenuItem",
    kind: "default",
    alias: "Umb.Document.WorkspaceActionMenuItem.PublishWithDescendants",
    name: "Publish with descendants",
    weight: 10,
    api: () => import("./publish-with-descendants.action-Bu_9LyfK.js"),
    forWorkspaceActions: "Umb.WorkspaceAction.Document.SaveAndPublish",
    meta: {
      label: "#buttons_publishDescendants",
      icon: "icon-globe"
    },
    conditions: [
      {
        alias: b,
        allOf: [g, T]
      },
      {
        alias: i
      },
      {
        alias: h,
        match: !1
      }
    ]
  }
], pi = [...ci, ...ri], li = [
  {
    type: "repository",
    alias: Pe,
    name: "Document Publishing Repository",
    api: () => import("./document-publishing.repository-ypBwqj-c.js")
  }
], yi = [
  {
    type: "modal",
    alias: Be,
    name: "Document Schedule Modal",
    element: () => import("./document-schedule-modal.element-UDZDC29Y.js")
  }
], ui = [
  {
    type: "workspaceActionMenuItem",
    kind: "default",
    alias: "Umb.Document.WorkspaceActionMenuItem.SchedulePublishing",
    name: "Schedule publishing",
    weight: 20,
    api: () => import("./save-and-schedule.action-B_vvF8bV.js"),
    forWorkspaceActions: "Umb.WorkspaceAction.Document.SaveAndPublish",
    meta: {
      label: "#buttons_schedulePublish",
      icon: "icon-globe"
    },
    conditions: [
      {
        alias: b,
        allOf: [g, T]
      },
      {
        alias: i
      },
      {
        alias: h,
        match: !1
      }
    ]
  }
], _i = [...yi, ...ui], Ti = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Unpublish",
    name: "Unpublish Document Entity Action",
    weight: 500,
    api: () => import("./unpublish.action-DepdZ5Wz.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-globe",
      label: "#actions_unpublish",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [f]
      },
      {
        alias: i
      }
    ]
  }
], Ei = [
  {
    type: "entityBulkAction",
    kind: "default",
    alias: "Umb.EntityBulkAction.Document.Unpublish",
    name: "Unpublish Document Entity Bulk Action",
    weight: 40,
    api: () => import("./unpublish.bulk-action-BqyLVAvi.js"),
    meta: {
      icon: "icon-globe",
      label: "#actions_unpublish"
    },
    forEntityTypes: [e],
    conditions: [
      {
        alias: s,
        match: l
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [f]
      }
    ]
  }
], Di = [
  {
    type: "modal",
    alias: ke,
    name: "Document Unpublish Modal",
    element: () => import("./document-unpublish-modal.element-Bc7MJhIb.js")
  }
], Ui = [
  {
    type: "workspaceActionMenuItem",
    kind: "default",
    alias: "Umb.Document.WorkspaceActionMenuItem.Unpublish",
    name: "Unpublish",
    weight: 0,
    api: () => import("./unpublish.action-DYPUDPUY.js"),
    forWorkspaceActions: "Umb.WorkspaceAction.Document.SaveAndPublish",
    meta: {
      label: "#actions_unpublish",
      icon: "icon-globe"
    },
    conditions: [
      {
        alias: b,
        allOf: [f]
      },
      {
        alias: i
      },
      {
        alias: h,
        match: !1
      }
    ]
  }
], di = [
  ...Ti,
  ...Ei,
  ...Di,
  ...Ui
], Ai = [
  {
    type: "workspaceContext",
    name: "Document Publishing Workspace Context",
    alias: "Umb.WorkspaceContext.Document.Publishing",
    api: () => import("./document-publishing.workspace-context-BanMDqm5.js"),
    conditions: [
      {
        alias: t,
        match: n
      }
    ]
  }
], Ri = [
  ...mi,
  ...pi,
  ...li,
  ..._i,
  ...di,
  ...Ai
], Oi = [
  {
    type: "repository",
    alias: Ne,
    name: "Bulk Trash Document Repository",
    api: () => import("./trash.repository-2Xp-uM-G.js")
  }
], bi = [
  {
    type: "entityBulkAction",
    kind: qe,
    alias: "Umb.EntityBulkAction.Document.Trash",
    name: "Trash Document Entity Bulk Action",
    weight: 10,
    forEntityTypes: [e],
    meta: {
      itemRepositoryAlias: p,
      recycleBinRepositoryAlias: y,
      referenceRepositoryAlias: _
    },
    conditions: [
      {
        alias: s,
        match: l
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [u]
      }
    ]
  },
  ...Oi
], fi = [
  {
    type: "entityAction",
    kind: "trashWithRelation",
    alias: "Umb.EntityAction.Document.RecycleBin.Trash",
    name: "Trash Document Entity Action",
    forEntityTypes: [e],
    meta: {
      itemRepositoryAlias: p,
      recycleBinRepositoryAlias: y,
      referenceRepositoryAlias: _
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [u]
      },
      {
        alias: i
      }
    ]
  },
  {
    type: "entityAction",
    kind: "restoreFromRecycleBin",
    alias: "Umb.EntityAction.Document.RecycleBin.Restore",
    name: "Restore Document From Recycle Bin Entity Action",
    forEntityTypes: [e],
    meta: {
      itemRepositoryAlias: p,
      recycleBinRepositoryAlias: y,
      pickerModal: he
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [O]
      },
      {
        alias: ae
      }
    ]
  },
  {
    type: "entityAction",
    kind: "emptyRecycleBin",
    alias: "Umb.EntityAction.Document.RecycleBin.Empty",
    name: "Empty Document Recycle Bin Entity Action",
    forEntityTypes: [I],
    meta: {
      recycleBinRepositoryAlias: y
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [u]
      },
      {
        alias: je
      }
    ]
  },
  ...bi
], Ii = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Document.RecycleBin",
    name: "Document Recycle Bin Menu Item",
    weight: 100,
    meta: {
      treeAlias: ie,
      label: "Recycle Bin",
      icon: "icon-trash",
      menus: [Le]
    },
    conditions: [
      {
        alias: "Umb.Condition.CurrentUser.AllowDocumentRecycleBin"
      }
    ]
  }
], Mi = [
  {
    type: "repository",
    alias: y,
    name: "Document Recycle Bin Repository",
    api: () => import("./document-recycle-bin.repository-yWZ0VJ-Q.js")
  }
], Si = [
  {
    type: "repository",
    alias: ne,
    name: "Document Recycle Bin Tree Repository",
    api: () => import("./document-recycle-bin-tree.repository-B6iMMzLh.js")
  },
  {
    type: "treeStore",
    alias: $e,
    name: "Document Recycle Bin Tree Store",
    api: () => import("./document-recycle-bin-tree.store-NU-DTFym.js")
  }
], Ci = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.DocumentRecycleBin.Tree.ReloadChildrenOf",
    name: "Reload Document Recycle Bin Tree Item Children Entity Action",
    forEntityTypes: [I]
  }
], Pi = [
  {
    type: "treeItem",
    kind: "recycleBin",
    alias: "Umb.TreeItem.Document.RecycleBin",
    name: "Document Recycle Bin Tree Item",
    forEntityTypes: [I],
    meta: {
      supportedEntityTypes: [e]
    }
  }
], Bi = [
  {
    type: "tree",
    kind: "default",
    alias: ie,
    name: "Document Recycle Bin Tree",
    meta: {
      repositoryAlias: ne
    }
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.Document.RecycleBin.Root",
    name: "Document Recycle Bin Root Workspace",
    meta: {
      entityType: I,
      headline: "#general_recycleBin"
    }
  },
  ...Si,
  ...Ci,
  ...Pi
], ki = [
  {
    type: "condition",
    name: "Allow Document Recycle Bin Current User Condition",
    alias: "Umb.Condition.CurrentUser.AllowDocumentRecycleBin",
    api: () => import("./allow-document-recycle-bin.condition-Co2OIAq4.js")
  },
  ...fi,
  ...Ii,
  ...Mi,
  ...Bi
], Ni = [
  {
    type: "repository",
    alias: Z,
    name: "Document Detail Repository",
    api: () => import("./document-detail.repository-kH54fJDj.js")
  },
  {
    type: "store",
    alias: ge,
    name: "Document Detail Store",
    api: () => import("./document-detail.store-pppqTVV6.js")
  }
], hi = [...Ni], Li = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Rollback",
    name: "Rollback Document Entity Action",
    weight: 450,
    api: () => import("./rollback.action-nV9nkN9J.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-history",
      label: "#actions_rollback",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [oe]
      },
      {
        alias: i
      }
    ]
  }
], $i = [
  {
    type: "modal",
    alias: we,
    name: "Document Rollback Modal",
    element: () => import("./rollback-modal.element-CAtsa08G.js")
  }
], gi = [
  {
    type: "repository",
    alias: Ye,
    name: "Rollback Repository",
    api: () => import("./rollback.repository-ClykyB0k.js")
  }
], wi = [
  ...Li,
  ...$i,
  ...gi
], Yi = [
  {
    name: "Document Search Provider",
    alias: We,
    type: "searchProvider",
    api: () => import("./document.search-provider-DK5r6qQm.js"),
    weight: 800,
    meta: {
      label: "Documents"
    }
  },
  {
    name: "Document Search Result Item ",
    alias: "Umb.SearchResultItem.Document",
    type: "searchResultItem",
    element: () => import("./document-search-result-item.element-BYVoVkWK.js"),
    forEntityTypes: [e]
  }
], Wi = [
  {
    type: "workspaceInfoApp",
    kind: "entityReferences",
    name: "Document References Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Document.References",
    conditions: [
      {
        alias: t,
        match: n
      }
    ],
    meta: {
      referenceRepositoryAlias: _
    }
  }
], vi = [
  {
    type: "repository",
    alias: _,
    name: "Document Reference Repository",
    api: () => import("./document-reference.repository-BUhJlypD.js")
  },
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.DocumentReferenceResponse",
    name: "Document Reference Response Management Api Data Mapping",
    api: () => import("./document-reference-response.management-api.mapping-C-5cwLxZ.js"),
    forDataSource: V,
    forDataModel: "DocumentReferenceResponseModel"
  }
], Vi = [...Wi, ...vi], Fi = [
  {
    type: "workspaceInfoApp",
    name: "Document Links Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Document.Links",
    element: () => import("./document-links-workspace-info-app.element-Bj3OkjAC.js"),
    weight: 100,
    conditions: [
      {
        alias: t,
        match: n
      }
    ]
  }
], Hi = {
  type: "repository",
  alias: ve,
  name: "Document Url Repository",
  api: () => import("./document-url.repository-CzVCI_eW.js")
}, xi = {
  type: "itemStore",
  alias: Ve,
  name: "Document Url Store",
  api: () => import("./document-url.store-CvBwfMF2.js")
}, Ki = [Hi, xi], Gi = [...Ki, ...Fi], qi = [
  {
    type: "repository",
    alias: Fe,
    name: "Document Permission Repository",
    api: () => import("./document-permission.repository-CaW-5yFk.js")
  }
], ji = [
  {
    type: "condition",
    name: "Document User Permission Condition",
    alias: b,
    api: () => import("./document-user-permission.condition-DWZwv9EZ.js")
  }
], zi = [
  {
    type: "entityUserPermission",
    alias: He,
    name: "Read Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Read"],
      label: "#actions_browse",
      description: "#actionDescriptions_browse"
    }
  },
  {
    type: "entityUserPermission",
    alias: H,
    name: "Create Document Blueprint User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.CreateBlueprint"],
      label: "#actions_createblueprint",
      description: "#actionDescriptions_createblueprint"
    }
  },
  {
    type: "entityUserPermission",
    alias: u,
    name: "Delete Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Delete"],
      label: "#actions_delete",
      description: "#actionDescriptions_delete"
    }
  },
  {
    type: "entityUserPermission",
    alias: x,
    name: "Create Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Create"],
      label: "#actions_create",
      description: "#actionDescriptions_create"
    }
  },
  {
    type: "entityUserPermission",
    alias: Q,
    name: "Document Notifications User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Notifications"],
      label: "#actions_notify",
      description: "#actionDescriptions_notify"
    }
  },
  {
    type: "entityUserPermission",
    alias: T,
    name: "Publish Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Publish"],
      label: "#actions_publish",
      description: "#actionDescriptions_publish"
    }
  },
  {
    type: "entityUserPermission",
    alias: xe,
    name: "Document Permissions User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Permissions"],
      label: "#actions_setPermissions",
      description: "#actionDescriptions_rights"
    }
  },
  {
    type: "entityUserPermission",
    alias: f,
    name: "Unpublish Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Unpublish"],
      label: "#actions_unpublish",
      description: "#actionDescriptions_unpublish"
    }
  },
  {
    type: "entityUserPermission",
    alias: g,
    name: "Update Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Update"],
      label: "#actions_update",
      description: "#actionDescriptions_update"
    }
  },
  {
    type: "entityUserPermission",
    alias: L,
    name: "Duplicate Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Duplicate"],
      label: "#actions_copy",
      description: "#actionDescriptions_copy",
      group: "structure"
    }
  },
  {
    type: "entityUserPermission",
    alias: O,
    name: "Move Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Move"],
      label: "#actions_move",
      description: "#actionDescriptions_move",
      group: "structure"
    }
  },
  {
    type: "entityUserPermission",
    alias: J,
    name: "Sort Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Sort"],
      label: "#actions_sort",
      description: "#actionDescriptions_sort",
      group: "structure"
    }
  },
  {
    type: "entityUserPermission",
    alias: G,
    name: "Document Culture And Hostnames User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.CultureAndHostnames"],
      label: "#actions_assigndomain",
      description: "#actionDescriptions_assignDomain",
      group: "administration"
    }
  },
  {
    type: "entityUserPermission",
    alias: z,
    name: "Document Public Access User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.PublicAccess"],
      label: "#actions_protect",
      description: "#actionDescriptions_protect",
      group: "administration"
    }
  },
  {
    type: "entityUserPermission",
    alias: oe,
    name: "Document Rollback User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Rollback"],
      label: "#actions_rollback",
      description: "#actionDescriptions_rollback",
      group: "administration"
    }
  }
], Xi = [
  {
    type: "userGranularPermission",
    alias: "Umb.UserGranularPermission.Document",
    name: "Document Granular User Permission",
    element: () => import("./input-document-granular-user-permission.element-Cv-6pQU6.js"),
    meta: {
      schemaType: "DocumentPermissionPresentationModel",
      label: "#user_granularRightsLabel",
      description: "{#user_granularRightsDescription}"
    }
  }
], Ji = [
  ...qi,
  ...zi,
  ...Xi,
  ...ji
], Qi = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Document.Save",
    name: "Save Document Workspace Action",
    weight: 80,
    api: () => import("./save.action-DpJUrBSC.js"),
    meta: {
      label: "#buttons_save",
      look: "secondary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: n
      },
      {
        alias: i
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Document.SaveAndPreview",
    name: "Save And Preview Document Workspace Action",
    weight: 90,
    api: () => import("./save-and-preview.action-ckW3kve_.js"),
    meta: {
      label: "#buttons_saveAndPreview"
    },
    conditions: [
      {
        alias: t,
        match: n
      },
      {
        alias: i
      }
    ]
  }
], Zi = [
  {
    type: "workspace",
    kind: "routable",
    alias: n,
    name: "Document Workspace",
    api: () => import("./document-workspace.context-CkY5srJ6.js"),
    meta: {
      entityType: e
    }
  },
  {
    type: "workspaceView",
    kind: "contentCollection",
    alias: "Umb.WorkspaceView.Document.Collection",
    name: "Document Workspace Collection View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-grid"
    },
    conditions: [
      {
        alias: t,
        match: n
      },
      {
        alias: "Umb.Condition.WorkspaceHasCollection"
      }
    ]
  },
  {
    type: "workspaceView",
    kind: "contentEditor",
    alias: "Umb.WorkspaceView.Document.Edit",
    name: "Document Workspace Edit View",
    weight: 200,
    meta: {
      label: "#general_content",
      pathname: "content",
      icon: "document"
    },
    conditions: [
      {
        alias: t,
        match: n
      },
      {
        alias: _e
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Document.Info",
    name: "Document Workspace Info View",
    element: () => import("./document-workspace-view-info.element-oVJMyO1U.js"),
    weight: 100,
    meta: {
      label: "#general_info",
      pathname: "info",
      icon: "info"
    },
    conditions: [
      {
        alias: t,
        match: n
      }
    ]
  },
  ...Qi
], en = [
  ...ft,
  ...Ct,
  ...Ht,
  ...jt,
  ...zt,
  ...Jt,
  ...Ke,
  ...Qt,
  ...Zt,
  ...ii,
  ...Ri,
  ...ki,
  ...hi,
  ...wi,
  ...Yi,
  ...Vi,
  ...Ge,
  ...Gi,
  ...Ji,
  ...Zi
], tn = [
  {
    type: "entityCreateOptionAction",
    kind: "folder",
    alias: "Umb.EntityCreateOptionAction.DocumentType.Folder",
    name: "Document Type Folder Entity Create Option Action",
    forEntityTypes: [m, o],
    meta: {
      icon: "icon-folder",
      label: "#create_folder",
      description: "#create_folderDescription",
      folderRepositoryAlias: U
    }
  }
], nn = [
  {
    type: "entityAction",
    kind: "create",
    alias: "Umb.EntityAction.DocumentType.Create",
    name: "Create Document Type Entity Action",
    weight: 1200,
    forEntityTypes: [m, o],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0,
      headline: "#create_createUnder #treeHeaders_documentTypes"
    }
  },
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.DocumentType.Default",
    name: "Default Document Type Entity Create Option Action",
    weight: 100,
    api: () => import("./default-document-type-create-option-action-CwH7eb2s.js"),
    forEntityTypes: [
      a,
      m,
      o
    ],
    meta: {
      icon: "icon-document",
      label: "#create_documentType",
      description: "#create_documentTypeDescription"
    }
  },
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.DocumentType.DocumentWithTemplate",
    name: "Document Type with Template Document Type Entity Create Option Action",
    weight: 90,
    api: () => import("./document-type-with-template-create-option-action-C1SDFdB6.js"),
    forEntityTypes: [
      a,
      m,
      o
    ],
    meta: {
      icon: "icon-document-html",
      label: "#create_documentTypeWithTemplate",
      description: "#create_documentTypeWithTemplateDescription"
    }
  },
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.DocumentType.ElementType",
    name: "Element Type Document Type Entity Create Option Action",
    weight: 80,
    api: () => import("./element-type-create-option-action-BcAasdbN.js"),
    forEntityTypes: [
      a,
      m,
      o
    ],
    meta: {
      icon: "icon-plugin",
      label: "#create_elementType",
      description: "#create_elementTypeDescription"
    }
  },
  ...tn
], on = [
  {
    type: "repository",
    alias: me,
    name: "Move Document Type Repository",
    api: () => import("./document-type-move.repository-HAB7XUCk.js")
  }
], an = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.DocumentType.MoveTo",
    name: "Move Document Type Entity Action",
    forEntityTypes: [a],
    meta: {
      treeRepositoryAlias: d,
      moveRepositoryAlias: me,
      treeAlias: M,
      foldersOnly: !0
    }
  },
  ...on
], sn = [
  {
    type: "repository",
    alias: ce,
    name: "Duplicate Document Type Repository",
    api: () => import("./document-type-duplicate.repository-Dzp67f9M.js")
  }
], mn = [
  {
    type: "entityAction",
    kind: "duplicateTo",
    alias: "Umb.EntityAction.DocumentType.DuplicateTo",
    name: "Duplicate Document To Entity Action",
    forEntityTypes: [a],
    meta: {
      duplicateRepositoryAlias: ce,
      treeAlias: M,
      treeRepositoryAlias: d,
      foldersOnly: !0
    }
  },
  ...sn
], cn = [
  {
    type: "repository",
    alias: ze,
    name: "Export Document Type Repository",
    api: () => import("./document-type-export.repository-CeuXInYO.js")
  }
], rn = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.DocumentType.Export",
    name: "Export Document Type Entity Action",
    forEntityTypes: [a],
    api: () => import("./document-type-export.action-B4Em3Hyt.js"),
    meta: {
      icon: "icon-download-alt",
      label: "#actions_export",
      additionalOptions: !0
    }
  },
  ...cn
], pn = [
  {
    type: "repository",
    alias: Xe,
    name: "Import Document Type Repository",
    api: () => import("./document-type-import.repository-BUGR_PqL.js")
  }
], ln = [
  {
    type: "modal",
    alias: "Umb.Modal.DocumentType.Import",
    name: "Document Type Import Modal",
    element: () => import("./document-type-import-modal.element-C7xXUEva.js")
  }
], yn = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.DocumentType.Import",
    name: "Export Document Type Entity Action",
    forEntityTypes: [m],
    api: () => import("./document-type-import.action-CxjTLQ97.js"),
    meta: {
      icon: "icon-page-up",
      label: "#actions_import",
      additionalOptions: !0
    }
  },
  ...pn,
  ...ln
], un = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.DocumentType.Delete",
    name: "Delete Document-Type Entity Action",
    forEntityTypes: [a],
    meta: {
      itemRepositoryAlias: pe,
      detailRepositoryAlias: re,
      additionalOptions: !0
    }
  },
  ...nn,
  ...an,
  ...mn,
  ...rn,
  ...yn
], _n = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.DocumentTypes",
    name: "Document Types Menu Item",
    weight: 900,
    meta: {
      treeAlias: M,
      label: "Document Types",
      menus: ["Umb.Menu.StructureSettings"]
    }
  },
  {
    type: "workspaceContext",
    name: "Document Type Menu Structure Workspace Context",
    alias: "Umb.Context.DocumentType.Menu.Structure",
    api: () => import("./document-type-menu-structure.context-BJlXDRXE.js"),
    conditions: [
      {
        alias: t,
        match: "Umb.Workspace.DocumentType"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.DocumentType.Breadcrumb",
    name: "Document Type Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: t,
        match: "Umb.Workspace.DocumentType"
      }
    ]
  }
], Tn = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.DocumentTypePicker",
  name: "Document Type Picker Property Editor UI",
  element: () => import("./property-editor-ui-document-type-picker.element-CLFZqc7z.js"),
  meta: {
    label: "Document Type Picker",
    icon: "icon-document-dashed-line",
    group: "advanced",
    settings: {
      properties: [
        {
          alias: "onlyPickElementTypes",
          label: "Only Element Types",
          description: "Limit to only pick Element Types",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ]
    }
  }
}, En = [Tn], Dn = [
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.DocumentTypePropertyTypeReferenceResponse",
    name: "Document Type Property Type Reference Response Management Api Data Mapping",
    api: () => import("./document-type-property-type-reference-response.management-api.mapping-Lv_CbyhO.js"),
    forDataSource: V,
    forDataModel: "DocumentTypePropertyTypeReferenceResponseModel"
  },
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.DocumentTypePropertyType",
    name: "Document Type Property Type Entity Item Reference",
    element: () => import("./document-type-property-type-item-ref.element-rOsUd9WX.js"),
    forEntityTypes: [Je]
  }
], Un = [
  {
    type: "repository",
    alias: re,
    name: "Document Types Repository",
    api: () => import("./document-type-detail.repository-CMq7glm7.js")
  },
  {
    type: "store",
    alias: Qe,
    name: "Document Type Store",
    api: () => import("./document-type-detail.store-BesP-s1s.js")
  }
], dn = [
  {
    type: "repository",
    alias: pe,
    name: "Document Type Item Repository",
    api: () => import("./document-type-item.repository-CWwJfU44.js")
  },
  {
    type: "itemStore",
    alias: Ze,
    name: "Document Type Item Store",
    api: () => import("./document-type-item.store-D9r0b0-_.js")
  }
], An = [
  {
    type: "repository",
    alias: le,
    name: "Document Type Composition Repository",
    api: () => import("./document-type-composition.repository-CCm54jSR.js")
  }
], Rn = [...Un, ...dn, ...An], On = [
  {
    name: "Document Type Search Provider",
    alias: et,
    type: "searchProvider",
    api: () => import("./document-type.search-provider-BAl9au-0.js"),
    weight: 600,
    meta: {
      label: "Document Types"
    }
  },
  {
    name: "Document Type Search Result Item ",
    alias: "Umb.SearchResultItem.DocumentType",
    type: "searchResultItem",
    forEntityTypes: [a]
  }
], bn = [
  {
    type: "repository",
    alias: U,
    name: "Document Type Folder Repository",
    api: () => import("./document-type-folder.repository-BAuUdvh3.js")
  },
  {
    type: "store",
    alias: tt,
    name: "Document Type Folder Store",
    api: () => import("./document-type-folder.store-BG_5ay83.js")
  }
], fn = [
  {
    type: "workspace",
    kind: "routable",
    alias: k,
    name: "Document Type Folder Workspace",
    api: () => import("./document-type-folder-workspace.context-DCCpVXAK.js"),
    meta: {
      entityType: o
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DocumentType.Folder.Submit",
    name: "Submit Document Type Folder Workspace Action",
    api: R,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: k
      }
    ]
  }
], In = [
  {
    type: "entityAction",
    kind: "folderUpdate",
    alias: "Umb.EntityAction.DocumentType.Folder.Rename",
    name: "Rename Document Type Folder Entity Action",
    forEntityTypes: [o],
    meta: {
      folderRepositoryAlias: U
    }
  },
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: "Umb.EntityAction.DocumentType.Folder.Delete",
    name: "Delete Document Type Folder Entity Action",
    forEntityTypes: [o],
    meta: {
      folderRepositoryAlias: U
    }
  },
  ...bn,
  ...fn
], Mn = [
  {
    type: "collectionAction",
    kind: "create",
    name: "Document Type Tree Item Children Collection Create Action",
    alias: "Umb.CollectionAction.DocumentTypeTreeItemChildren.Create",
    conditions: [
      {
        alias: s,
        match: S
      }
    ]
  }
], Sn = [
  {
    type: "repository",
    alias: ye,
    name: "Document Type Tree Item Children Collection Repository",
    api: () => import("./document-type-tree-item-children-collection.repository-PePC-zsp.js")
  }
], Cn = [
  {
    type: "collectionView",
    alias: "Umb.CollectionView.DocumentType.TreeItem.Table",
    name: "Document Type Tree Item Table Collection View",
    element: () => import("./document-type-tree-item-table-collection-view.element-DwKrXr6h.js"),
    weight: 300,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: s,
        match: S
      }
    ]
  }
], Pn = [
  {
    type: "collection",
    kind: "default",
    alias: S,
    name: "Document Type Tree Item Children Collection",
    meta: {
      repositoryAlias: ye
    }
  },
  ...Mn,
  ...Sn,
  ...Cn
], Bn = [
  {
    type: "entityAction",
    alias: "Umb.EntityAction.DocumentType.Tree.ReloadChildrenOf",
    name: "Reload Document Type Tree Item Children Entity Action",
    kind: "reloadTreeItemChildren",
    forEntityTypes: [
      m,
      a,
      o
    ]
  }
], kn = [...Pn, ...Bn], Nn = [
  {
    type: "repository",
    alias: d,
    name: "Document Type Tree Repository",
    api: () => import("./document-type-tree.repository-CqyLUGIF.js")
  },
  {
    type: "treeStore",
    alias: it,
    name: "Document Type Tree Store",
    api: () => import("./document-type.tree.store-Ts_Ik-6B.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: M,
    name: "Document Type Tree",
    meta: {
      repositoryAlias: d
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.DocumentType",
    name: "Document Type Tree Item",
    forEntityTypes: [
      m,
      a,
      o
    ]
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.DocumentType.TreeItemChildrenCollection",
    name: "Document Type Tree Item Children Collection Workspace View",
    meta: {
      label: "#general_design",
      pathname: "design",
      icon: "icon-member-dashed-line",
      collectionAlias: S
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        oneOf: [nt, k]
      }
    ]
  },
  ...In,
  ...kn
], hn = [
  {
    type: "workspace",
    kind: "routable",
    alias: c,
    name: "Document Type Workspace",
    api: () => import("./document-type-workspace.context-BC-uvjrG.js"),
    meta: {
      entityType: "document-type"
    }
  },
  {
    type: "workspaceView",
    kind: "contentTypeDesignEditor",
    alias: "Umb.WorkspaceView.DocumentType.Design",
    name: "Document Type Workspace Design View",
    meta: {
      label: "#general_design",
      pathname: "design",
      icon: "icon-document-dashed-line",
      compositionRepositoryAlias: le
    },
    conditions: [
      {
        alias: t,
        match: c
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.DocumentType.Structure",
    name: "Document Type Workspace Structure View",
    element: () => import("./document-type-workspace-view-structure.element-CtGDtd3q.js"),
    weight: 800,
    meta: {
      label: "#contentTypeEditor_structure",
      pathname: "structure",
      icon: "icon-mindmap"
    },
    conditions: [
      {
        alias: t,
        match: c
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.DocumentType.Settings",
    name: "Document Type Workspace Settings View",
    element: () => import("./document-type-workspace-view-settings.element-CqV375wf.js"),
    weight: 600,
    meta: {
      label: "#general_settings",
      pathname: "settings",
      icon: "icon-settings"
    },
    conditions: [
      {
        alias: t,
        match: c
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.DocumentType.Templates",
    name: "Document Type Workspace Templates View",
    element: () => import("./document-type-workspace-view-templates.element-B3MUEkLn.js"),
    weight: 400,
    meta: {
      label: "#treeHeaders_templates",
      pathname: "templates",
      icon: "icon-layout"
    },
    conditions: [
      {
        alias: t,
        match: c
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DocumentType.Save",
    name: "Save Document Type Workspace Action",
    api: R,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: c
      }
    ]
  }
], Ln = [
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.DocumentType.Root",
    name: "Document Type Root Workspace",
    meta: {
      entityType: m,
      headline: "#treeHeaders_documentTypes"
    }
  }
], $n = [...hn, ...Ln], gn = [
  ...un,
  ..._n,
  ...En,
  ...Dn,
  ...Rn,
  ...On,
  ...Nn,
  ...$n
], wn = [
  {
    type: "section",
    alias: E,
    name: "Content Section",
    weight: 1e3,
    meta: {
      label: "#sections_content",
      pathname: "content"
    },
    conditions: [
      {
        alias: se,
        match: E
      }
    ]
  },
  {
    type: "sectionSidebarApp",
    kind: "menuWithEntityActions",
    alias: "Umb.SidebarMenu.Content",
    name: "Content Sidebar Menu",
    weight: 100,
    meta: {
      label: "#sections_content",
      menu: at,
      entityType: ot
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: E
      }
    ]
  }
], io = [
  ...st,
  ...Ot,
  ...en,
  ...gn,
  ...wn
];
export {
  io as manifests
};
//# sourceMappingURL=manifests.js.map
