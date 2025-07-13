import { d as E, e as S, c as _, a as p, i as T, f as A, b as R, g as k, j as P, l as c, n as y } from "./member-group-picker-modal.element-COluPxRJ.js";
import { UMB_COLLECTION_ALIAS_CONDITION as d } from "@umbraco-cms/backoffice/collection";
import { UMB_WORKSPACE_CONDITION_ALIAS as e, UmbSubmitWorkspaceAction as f } from "@umbraco-cms/backoffice/workspace";
import { g as l, p as M, q as O, m as B, f as i, y as h, v as C, z as $, A as w, t as G, w as b, a as L, B as g, C as D } from "./manifests-BeI4zfAH.js";
import { UMB_MANAGEMENT_API_DATA_SOURCE_ALIAS as u } from "@umbraco-cms/backoffice/repository";
import { b as U, o as m, k as Y, h as W, q as I, g as N, u as V, v, w as H, p as K, r as n, n as x } from "./input-member-type.element-Kmg-HeuV.js";
import { a as o, U as a } from "./member-type-tree.store.context-token-D6BHGtN0.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/picker-input";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as F } from "@umbraco-cms/backoffice/section";
import "@umbraco-cms/backoffice/content";
const j = [
  {
    type: "repository",
    alias: E,
    name: "Member Group Collection Repository",
    api: () => import("./member-group-picker-modal.element-COluPxRJ.js").then((t) => t.u)
  }
], q = [
  {
    type: "collectionView",
    alias: S,
    name: "Member Group Table Collection View",
    element: () => import("./member-group-table-collection-view.element-DlXhvYA0.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: d,
        match: "Umb.Collection.MemberGroup"
      }
    ]
  }
], z = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create Member Group Collection Action",
    alias: "Umb.CollectionAction.MemberGroup.Create",
    weight: 200,
    meta: {
      label: "#general_create",
      href: "section/member-management/workspace/member-group/create"
    },
    conditions: [
      {
        alias: d,
        match: "Umb.Collection.MemberGroup"
      }
    ]
  }
], J = [
  {
    type: "collection",
    kind: "default",
    alias: _,
    name: "Member Group Collection",
    meta: {
      repositoryAlias: E
    }
  },
  ...j,
  ...q,
  ...z
], Q = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.MemberGroup.Create",
    name: "Create Member Group Entity Action",
    weight: 1200,
    api: () => import("./create-member-group.action-CMo03MWz.js"),
    forEntityTypes: [p],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  },
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.MemberGroup.Delete",
    name: "Delete Member Group Entity Action ",
    forEntityTypes: [R],
    meta: {
      detailRepositoryAlias: A,
      itemRepositoryAlias: T
    }
  }
], X = [
  {
    type: "modal",
    alias: "Umb.Modal.MemberGroupPicker",
    name: "Member Group Picker Modal",
    element: () => import("./member-group-picker-modal.element-COluPxRJ.js").then((t) => t.v)
  }
], r = "Umb.Menu.MemberManagement", Z = [
  {
    type: "menuItem",
    alias: "Umb.MenuItem.MemberGroups",
    name: "Member Groups Menu Item",
    weight: 100,
    meta: {
      label: "#treeHeaders_memberGroups",
      icon: "icon-users",
      entityType: p,
      menus: [r]
    }
  }
], ee = {
  type: "propertyEditorSchema",
  name: "Member Group Picker",
  alias: "Umbraco.MemberGroupPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.MemberGroupPicker"
  }
}, te = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.MemberGroupPicker",
    name: "Member Group Picker Property Editor UI",
    element: () => import("./property-editor-ui-member-group-picker.element-CHDxZNqK.js"),
    meta: {
      label: "Member Group Picker",
      propertyEditorSchemaAlias: "Umbraco.MemberGroupPicker",
      icon: "icon-users-alt",
      group: "people",
      supportsReadOnly: !0
    }
  },
  ee
], ae = [...te], ie = [
  {
    type: "repository",
    alias: A,
    name: "Member Group Detail Repository",
    api: () => import("./member-group-detail.repository-DTVStRfS.js")
  },
  {
    type: "store",
    alias: k,
    name: "Member Group Detail Store",
    api: () => import("./member-group-detail.store-BRpRHyp6.js")
  }
], oe = [
  {
    type: "repository",
    alias: T,
    name: "Member Group Item Repository",
    api: () => import("./member-group-item.repository-CgauyfIF.js")
  },
  {
    type: "itemStore",
    alias: P,
    name: "Member Group Item Store",
    api: () => import("./member-group-item.store-Czmpm6OU.js")
  }
], re = [...ie, ...oe], ne = {
  type: "workspace",
  kind: "routable",
  alias: c,
  name: "MemberGroup Workspace",
  api: () => import("./member-group-workspace.context-B9r9yFRY.js"),
  meta: {
    entityType: R
  }
}, me = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.MemberGroup.Save",
    name: "Save Member Group Workspace Action",
    api: f,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: e,
        match: c
      }
    ]
  }
], se = [
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Member.Info",
    name: "Member Workspace info View",
    js: () => import("./member-type-workspace-view-info.element-att9pbSU.js"),
    weight: 300,
    meta: {
      label: "#general_info",
      pathname: "info",
      icon: "icon-document"
    },
    conditions: [
      {
        alias: e,
        match: c
      }
    ]
  }
], pe = [ne, ...me, ...se], ce = [
  {
    type: "workspace",
    kind: "default",
    alias: y,
    name: "Member Group Root Workspace View",
    meta: {
      entityType: p,
      headline: "#treeHeaders_memberGroups"
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.MemberGroupRoot.Collection",
    name: "Member Group Root Collection Workspace View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-layers",
      collectionAlias: _
    },
    conditions: [
      {
        alias: e,
        match: y
      }
    ]
  }
], le = [
  ...pe,
  ...ce
], Me = [
  ...J,
  ...Q,
  ...X,
  ...Z,
  ...ae,
  ...re,
  ...le
], ye = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Member.Create",
    name: "Create Member Entity Action",
    weight: 1200,
    api: () => import("./create.action-Cyxj7rgM.js"),
    forEntityTypes: [l],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  },
  {
    type: "modal",
    alias: "Umb.Modal.Member.CreateOptions",
    name: "Member Create Options Modal",
    element: () => import("./member-create-options-modal.element-C4uTDgKW.js")
  }
], be = [
  {
    type: "entityAction",
    alias: "Umb.EntityAction.Member.Delete",
    name: "Delete Member Entity Action",
    kind: "deleteWithRelation",
    forEntityTypes: [i],
    meta: {
      itemRepositoryAlias: B,
      detailRepositoryAlias: O,
      referenceRepositoryAlias: M
    }
  },
  ...ye
], Ee = [
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.Member",
    name: "Member Entity Item Reference",
    element: () => import("./member-item-ref.element-DqKaUbSF.js"),
    forEntityTypes: [i]
  },
  ...h
], _e = [
  {
    type: "modal",
    alias: "Umb.Modal.MemberPicker",
    name: "Member Picker Modal",
    element: () => import("./manifests-BeI4zfAH.js").then((t) => t.D)
  }
], Te = [
  {
    type: "menuItem",
    alias: "Umb.MenuItem.Members",
    name: "Members Menu Item",
    weight: 200,
    meta: {
      label: "#treeHeaders_member",
      icon: "icon-user",
      entityType: l,
      menus: [r]
    }
  }
], Ae = [
  {
    type: "pickerSearchResultItem",
    kind: "default",
    alias: "Umb.PickerSearchResultItem.Member",
    name: "Member Picker Search Result Item",
    element: () => import("./member-picker-search-result-item.element-DWQBSA4e.js"),
    forEntityTypes: [i]
  }
], Re = {
  type: "propertyEditorSchema",
  name: "Member Picker",
  alias: "Umbraco.MemberPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.MemberPicker"
  }
}, de = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.MemberPicker",
    name: "Member Picker Property Editor UI",
    element: () => import("./property-editor-ui-member-picker.element-D_6Cugez.js"),
    meta: {
      label: "Member Picker",
      propertyEditorSchemaAlias: "Umbraco.MemberPicker",
      icon: "icon-user",
      group: "people",
      supportsReadOnly: !0
    }
  },
  Re
], fe = [...de], ue = [
  {
    type: "repository",
    alias: M,
    name: "Member Reference Repository",
    api: () => import("./member-reference.repository-B_6vOkHh.js")
  },
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.MemberReferenceResponse",
    name: "Member Reference Response Management Api Data Mapping",
    api: () => import("./member-reference-response.management-api.mapping-Bc1Vc2bi.js"),
    forDataSource: u,
    forDataModel: "MemberReferenceResponseModel"
  }
], Ue = [
  {
    type: "workspaceInfoApp",
    kind: "entityReferences",
    name: "Member References Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Member.References",
    conditions: [
      {
        alias: e,
        match: C
      }
    ],
    meta: {
      referenceRepositoryAlias: M
    }
  }
], Ie = [...ue, ...Ue], Se = [...$, ...w], ke = [
  {
    name: "Member Search Provider",
    alias: G,
    type: "searchProvider",
    api: () => import("./member.search-provider-DJWfuzV9.js"),
    weight: 300,
    meta: {
      label: "Members"
    }
  },
  {
    name: "Member Search Result Item ",
    alias: "Umb.SearchResultItem.Member",
    type: "searchResultItem",
    forEntityTypes: [i]
  }
], Pe = [
  {
    type: "workspace",
    kind: "default",
    alias: b,
    name: "Member Root Workspace",
    meta: {
      entityType: l,
      headline: "#treeHeaders_member"
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.MemberRoot.Collection",
    name: "Member Root Collection Workspace View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-layers",
      collectionAlias: L
    },
    conditions: [
      {
        alias: e,
        match: b
      }
    ]
  }
], Oe = [
  ...g,
  ...Pe
], Be = [
  ...D,
  ...be,
  ...Ee,
  ..._e,
  ...Te,
  ...Ae,
  ...fe,
  ...Ie,
  ...Se,
  ...ke,
  ...Oe
], he = [
  {
    type: "repository",
    alias: U,
    name: "Duplicate Member Type Repository",
    api: () => import("./member-type-duplicate.repository-UYT7xbbV.js")
  }
], Ce = [
  {
    type: "entityAction",
    kind: "duplicate",
    alias: "Umb.EntityAction.MemberType.Duplicate",
    name: "Duplicate Member Type Entity Action",
    forEntityTypes: [o],
    meta: {
      duplicateRepositoryAlias: U,
      treeRepositoryAlias: m
    }
  },
  ...he
], $e = [
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.MemberType.Default",
    name: "Default Member Type Entity Create Option Action",
    weight: 1e3,
    api: () => import("./default-member-type-create-option-action-ChyYEPZs.js"),
    forEntityTypes: [a],
    meta: {
      icon: "icon-user",
      label: "#content_membertype"
    }
  }
], we = [
  {
    type: "entityAction",
    kind: "create",
    alias: "Umb.EntityAction.MemberType.Create",
    name: "Create Member Type Entity Action",
    forEntityTypes: [a]
  },
  ...$e
], Ge = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.MemberType.Delete",
    name: "Delete Member Type Entity Action",
    forEntityTypes: [o],
    meta: {
      detailRepositoryAlias: W,
      itemRepositoryAlias: Y
    }
  },
  ...we,
  ...Ce
], Le = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.MemberTypes",
    name: "Member Type Menu Item",
    weight: 700,
    meta: {
      label: "Member Types",
      treeAlias: I,
      menus: ["Umb.Menu.StructureSettings"]
    }
  },
  {
    type: "workspaceContext",
    name: "Member Type Menu Structure Workspace Context",
    alias: "Umb.Context.MemberType.Menu.Structure",
    api: () => import("./member-type-menu-structure.context-Dj9rP3la.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.MemberType"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.MemberType.Breadcrumb",
    name: "Member Type Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.MemberType"
      }
    ]
  }
], ge = [
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.MemberTypePropertyTypeReferenceResponse",
    name: "Member Type Property Type Reference Response Management Api Data Mapping",
    api: () => import("./member-type-property-type-reference-response.management-api.mapping-DSkJ7T_H.js"),
    forDataSource: u,
    forDataModel: "MemberTypePropertyTypeReferenceResponseModel"
  },
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.MemberTypePropertyType",
    name: "Member Type Property Type Entity Item Reference",
    element: () => import("./member-type-property-type-item-ref.element-BJQz4p3X.js"),
    forEntityTypes: [N]
  }
], De = [...V, ...v, ...H], Ye = [
  {
    name: "Member Type Search Provider",
    alias: "Umb.SearchProvider.MemberType",
    type: "searchProvider",
    api: () => import("./member-type.search-provider-rS-dYoiC.js"),
    weight: 200,
    meta: {
      label: "Member Types"
    }
  },
  {
    name: "Member Type Search Result Item ",
    alias: "Umb.SearchResultItem.MemberType",
    type: "searchResultItem",
    forEntityTypes: [o]
  }
], We = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.MemberType.Tree.ReloadChildrenOf",
    name: "Reload Member Type Tree Item Children Entity Action",
    forEntityTypes: [a]
  }
], Ne = [
  {
    type: "repository",
    alias: m,
    name: "Member Type Tree Repository",
    api: () => import("./member-type-tree.repository-BqyG8H0t.js")
  },
  {
    type: "treeStore",
    alias: K,
    name: "Member Type Tree Store",
    api: () => import("./member-type-tree.store-BtjcQzBn.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: I,
    name: "Member Type Tree",
    meta: {
      repositoryAlias: m
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.MemberType",
    name: "Member Type Tree Item",
    forEntityTypes: [a, o]
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.MemberType.Root",
    name: "Member Type Root Workspace",
    meta: {
      entityType: a,
      headline: "#treeHeaders_memberTypes"
    }
  },
  ...We
], Ve = [
  {
    type: "workspace",
    kind: "routable",
    alias: n,
    name: "Member Type Workspace",
    api: () => import("./member-type-workspace.context-Bj1faZRC.js"),
    meta: {
      entityType: "member-type"
    }
  },
  {
    type: "workspaceView",
    kind: "contentTypeDesignEditor",
    alias: "Umb.WorkspaceView.MemberType.Design",
    name: "Member Type Workspace Design View",
    meta: {
      label: "#general_design",
      pathname: "design",
      icon: "icon-member-dashed-line",
      compositionRepositoryAlias: x
    },
    conditions: [
      {
        alias: e,
        match: n
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.MemberType.Save",
    name: "Save Member Type Workspace Action",
    api: f,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: e,
        match: n
      }
    ]
  }
], ve = [
  ...Ge,
  ...Le,
  ...ge,
  ...De,
  ...Ye,
  ...Ne,
  ...Ve
], s = "Umb.Section.Members", He = [
  {
    type: "sectionSidebarApp",
    kind: "menu",
    alias: "Umb.SectionSidebarApp.Menu.MemberManagement",
    name: "Member Management Menu Sidebar App",
    weight: 100,
    meta: {
      label: "#treeHeaders_member",
      menu: r
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: s
      }
    ]
  }
], Ke = [
  {
    type: "menu",
    alias: r,
    name: "Member Management Menu"
  }
], xe = {
  type: "section",
  alias: s,
  name: "Members Section",
  weight: 500,
  meta: {
    label: "#sections_member",
    pathname: "member-management"
  },
  conditions: [
    {
      alias: F,
      match: s
    }
  ]
}, Fe = [
  xe,
  ...He,
  ...Ke
], nt = [
  ...Me,
  ...Be,
  ...ve,
  ...Fe
];
export {
  s as U,
  nt as m
};
//# sourceMappingURL=manifests-SCIBA2tK.js.map
