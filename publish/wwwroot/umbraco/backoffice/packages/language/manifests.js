import { UMB_APP_LANGUAGE_CONTEXT as A } from "@umbraco-cms/backoffice/language";
import { UmbConditionBase as L } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_CONTENT_SECTION_ALIAS as _ } from "@umbraco-cms/backoffice/content";
import { UMB_COLLECTION_ALIAS_CONDITION as n } from "@umbraco-cms/backoffice/collection";
import { g as i, h as y, f as o, i as s, U as m, b as c, c as l, j as b, l as U, n as a, q as t } from "./language-access.workspace.context-token-ChA0uFUc.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { UMB_WORKSPACE_CONDITION_ALIAS as e, UmbSubmitWorkspaceAction as d } from "@umbraco-cms/backoffice/workspace";
class C extends L {
  constructor(p, r) {
    super(p, r), this.consumeContext(A, (g) => {
      this.observe(
        g.moreThanOneLanguage,
        (u) => {
          this.permitted = u;
        },
        "observeLanguages"
      );
    });
  }
}
const E = {
  type: "condition",
  name: "Multiple App Languages Condition",
  alias: "Umb.Condition.MultipleAppLanguages",
  api: C
}, I = [
  {
    type: "sectionSidebarApp",
    alias: "Umb.SectionSidebarItem.LanguageSelect",
    name: "App Language Select Section Sidebar Item",
    js: () => import("./app-language-select.element-7W1nDVwa.js"),
    weight: 900,
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: _
      },
      {
        alias: "Umb.Condition.MultipleAppLanguages"
      }
    ]
  }
], k = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create Language Collection Action",
    alias: "Umb.CollectionAction.Language.Create",
    weight: 200,
    meta: {
      label: "#general_create",
      href: "section/settings/workspace/language/create"
    },
    conditions: [
      {
        alias: n,
        match: "Umb.Collection.Language"
      }
    ]
  }
], S = [
  {
    type: "repository",
    alias: i,
    name: "Language Collection Repository",
    api: () => import("./language-collection.repository-didMva8o.js")
  }
], f = [
  {
    type: "collectionView",
    alias: y,
    name: "Language Table Collection View",
    js: () => import("./language-table-collection-view.element-Htl7xABy.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: n,
        match: "Umb.Collection.Language"
      }
    ]
  }
], T = [
  {
    type: "collection",
    kind: "default",
    alias: o,
    name: "Language Collection",
    meta: {
      repositoryAlias: i
    }
  },
  ...k,
  ...S,
  ...f
], O = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.Language.Delete",
    name: "Delete Language Entity Action",
    forEntityTypes: [c],
    meta: {
      itemRepositoryAlias: m,
      detailRepositoryAlias: s
    }
  },
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Language.Create",
    name: "Create Language Entity Action",
    weight: 1200,
    api: () => import("./language-create-entity-action-BW_M0vV5.js"),
    forEntityTypes: [l],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  }
], M = [
  {
    type: "globalContext",
    alias: "Umb.GlobalContext.AppLanguage",
    name: "App Language Context",
    api: () => import("./app-language.context-DP3YAEuZ.js")
  }
], N = [
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.Language",
    name: "Language Entity Item Reference",
    element: () => import("./langauge-item-ref.element-DtYadYE_.js"),
    forEntityTypes: [c]
  }
], h = [
  {
    type: "menuItem",
    alias: "Umb.MenuItem.Languages",
    name: "Languages Menu Item",
    weight: 100,
    meta: {
      label: "#treeHeaders_languages",
      icon: "icon-globe",
      entityType: "language-root",
      menus: ["Umb.Menu.StructureSettings"]
    }
  },
  {
    type: "workspaceContext",
    name: "Language Menu Structure Workspace Context",
    alias: "Umb.Context.Language.Menu.Structure",
    api: () => import("./language-menu-structure.context-BntROtzf.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Language"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.Language.Breadcrumb",
    name: "Language Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Language"
      }
    ]
  }
], G = [
  {
    type: "modal",
    alias: "Umb.Modal.LanguagePicker",
    name: "Language Picker Modal",
    js: () => import("./language-picker-modal.element-j786VTpR.js")
  }
], R = [
  {
    type: "repository",
    alias: s,
    name: "Language Detail Repository",
    api: () => import("./language-detail.repository-a4uWw_br.js")
  },
  {
    type: "store",
    alias: b,
    name: "Language Detail Store",
    api: () => import("./language-detail.store-BCXCQ2cg.js")
  }
], w = [
  {
    type: "repository",
    alias: m,
    name: "Language Item Repository",
    api: () => import("./language-item.repository-DcAKfbxg.js")
  },
  {
    type: "itemStore",
    alias: U,
    name: "Language Item Store",
    api: () => import("./language-item.store-Dj3VDBpf.js")
  }
], W = [...R, ...w], B = [
  {
    type: "workspace",
    kind: "routable",
    alias: a,
    name: "Language Workspace",
    api: () => import("./language-workspace.context-ChgP72sw.js"),
    meta: {
      entityType: "language"
    }
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Language.Details",
    name: "Language Workspace Details View",
    js: () => import("./language-details-workspace-view.element-9QgyIcEJ.js"),
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
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Language.Save",
    name: "Save Language Workspace Action",
    api: d,
    meta: {
      look: "primary",
      color: "positive",
      label: "#buttons_save"
    },
    conditions: [
      {
        alias: e,
        match: a
      }
    ]
  }
], $ = [
  {
    type: "workspace",
    kind: "default",
    alias: t,
    name: "Language Root Workspace",
    meta: {
      entityType: l,
      headline: "#treeHeaders_languages"
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.LanguageRoot.Collection",
    name: "Webhook Root Collection Workspace View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-layers",
      collectionAlias: o
    },
    conditions: [
      {
        alias: e,
        match: t
      }
    ]
  }
], D = [...B, ...$], X = [
  ...I,
  ...T,
  ...O,
  ...M,
  ...N,
  ...h,
  ...G,
  ...W,
  ...D,
  E,
  {
    type: "workspaceContext",
    name: "Document Language Access Workspace Context",
    alias: "Umb.WorkspaceContext.DocumentLanguageAccess",
    api: () => import("./language-access.workspace.context-DmoJPkKk.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Document"
      }
    ]
  }
];
export {
  X as manifests
};
//# sourceMappingURL=manifests.js.map
