import { w as a, a as O, b as F, c as V, U as b, d as C, t as I, r as M, e as P, n as l, o as h, f as D, g as E, m as x, l as m, h as A, k as B, i as k, j as H, p as K, q as G, s as j, u as q, v as z } from "./dropzone.element-B5oraMUj.js";
import { UMB_WORKSPACE_CONDITION_ALIAS as i, UmbSubmitWorkspaceAction as S } from "@umbraco-cms/backoffice/workspace";
import { UMB_COLLECTION_ALIAS_CONDITION as s } from "@umbraco-cms/backoffice/collection";
import { n as p, r as J, o as X, p as Q } from "./input-upload-field.element-B7PCDmnx.js";
import "./media-url.repository-DUerHiJb.js";
import { a as c, U as t } from "./media-item.store.context-token-9YLCPlu1.js";
import { UMB_ENTITY_IS_NOT_TRASHED_CONDITION_ALIAS as d, UMB_ENTITY_IS_TRASHED_CONDITION_ALIAS as g } from "@umbraco-cms/backoffice/recycle-bin";
import { UMB_ENTITY_BULK_ACTION_TRASH_WITH_RELATION_KIND as Z } from "@umbraco-cms/backoffice/relations";
import { UMB_ENTITY_HAS_CHILDREN_CONDITION_ALIAS as ee } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MANAGEMENT_API_DATA_SOURCE_ALIAS as L } from "@umbraco-cms/backoffice/repository";
import { UMB_CONTENT_HAS_PROPERTIES_WORKSPACE_CONDITION as ie } from "@umbraco-cms/backoffice/content";
import "@umbraco-cms/backoffice/picker-input";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/dropzone";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as te } from "@umbraco-cms/backoffice/section";
import { n as r, m as o, f as T, b as n, x as w, F as U, U as _, u as $, v as ae, w as oe, r as Y, o as N, a as ne, C as se, D as re, B as v, G as pe, q as f, J as u, K as W, y as me, E as le, p as y } from "./constants-CHY0fXo5.js";
import { a as ce, b as de } from "./constants-C418HnkF.js";
const ye = [
  {
    type: "workspaceInfoApp",
    name: "Media History Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Media.History",
    element: () => import("./media-history-workspace-info-app.element-ZIokroLJ.js"),
    weight: 80,
    conditions: [
      {
        alias: i,
        match: a
      }
    ]
  }
], Me = [...ye], Ee = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create Media Collection Action",
    alias: "Umb.CollectionAction.Media.Create",
    element: () => import("./create-media-collection-action.element-B2bCZL5Q.js"),
    weight: 100,
    meta: {
      label: "#general_create"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Media"
      }
    ]
  }
], Ae = [
  {
    type: "repository",
    alias: O,
    name: "Media Collection Repository",
    api: () => import("./media-collection.repository-DrcADNlj.js")
  }
], Te = [
  {
    type: "collectionView",
    alias: F,
    name: "Media Grid Collection View",
    element: () => import("./media-grid-collection-view.element-CmTtbpCw.js"),
    weight: 300,
    meta: {
      label: "Grid",
      icon: "icon-grid",
      pathName: "grid"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Media"
      }
    ]
  },
  {
    type: "collectionView",
    alias: V,
    name: "Media Table Collection View",
    element: () => import("./media-table-collection-view.element-BEBPXjUu.js"),
    weight: 200,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Media"
      }
    ]
  }
], _e = [
  {
    type: "collection",
    alias: b,
    name: "Media Collection",
    api: () => import("./media-collection.context-Em62CTEM.js"),
    element: () => import("./media-collection.element-rVV8h233.js"),
    meta: {
      repositoryAlias: O
    }
  },
  ...Ee,
  ...Ae,
  ...Te
], Ie = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Media.Create",
    name: "Create Media Entity Action",
    weight: 1200,
    api: () => import("./create.action-Bqb3sBj-.js"),
    forEntityTypes: [c, t],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: d
      }
    ]
  },
  {
    type: "modal",
    alias: "Umb.Modal.Media.CreateOptions",
    name: "Media Create Options Modal",
    element: () => import("./media-create-options-modal.element-BQ0q_Hti.js")
  }
], Ue = [
  {
    type: "repository",
    alias: C,
    name: "Move Media Repository",
    api: () => import("./media-move.repository-P71GH5ea.js")
  }
], Re = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.Media.MoveTo",
    name: "Move Media Entity Action",
    forEntityTypes: [t],
    meta: {
      treeRepositoryAlias: M,
      moveRepositoryAlias: C,
      treeAlias: I
    },
    conditions: [
      {
        alias: d
      }
    ]
  },
  ...Ue
], fe = [
  {
    type: "repository",
    alias: P,
    name: "Sort Children Of Media Repository",
    api: () => import("./sort-children-of.repository-DBdP2wZz.js")
  }
], be = [
  ...fe,
  {
    type: "entityAction",
    kind: "sortChildrenOf",
    alias: "Umb.EntityAction.Media.SortChildrenOf",
    name: "Sort Children Of Media Entity Action",
    forEntityTypes: [c, t],
    meta: {
      itemRepositoryAlias: p,
      sortChildrenOfRepositoryAlias: P,
      treeRepositoryAlias: M
    },
    conditions: [
      {
        alias: d
      }
    ]
  }
], Se = [
  ...Ie,
  {
    type: "entityAction",
    alias: "Umb.EntityAction.Media.Delete",
    name: "Delete Media Entity Action",
    kind: "deleteWithRelation",
    forEntityTypes: [t],
    meta: {
      itemRepositoryAlias: p,
      detailRepositoryAlias: h,
      referenceRepositoryAlias: l
    },
    conditions: [
      {
        alias: g
      }
    ]
  },
  ...Re,
  ...be
], ue = [
  {
    type: "repository",
    alias: D,
    name: "Bulk Move Media Repository",
    api: () => import("./move-to.repository-8BDkMnDU.js")
  }
], ke = {
  type: "entityBulkAction",
  kind: "moveTo",
  alias: "Umb.EntityBulkAction.Media.MoveTo",
  name: "Move Media Entity Bulk Action",
  weight: 20,
  forEntityTypes: [t],
  meta: {
    bulkMoveRepositoryAlias: D,
    treeAlias: I
  },
  conditions: [
    {
      alias: s,
      match: b
    }
  ]
}, Oe = [ke, ...ue], Ce = [...Oe], Pe = [
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.Audio",
    name: "Audio File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-audio.element-xKLQrI8Y.js"),
    forMimeTypes: ["audio/*"]
  },
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.File",
    name: "File File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-file.element-BPVW48sc.js"),
    forMimeTypes: ["*/*"]
  },
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.Image",
    name: "Image File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-image.element-BXCKxO7R.js"),
    forMimeTypes: ["image/*"]
  },
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.Svg",
    name: "Svg File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-svg.element-CLQKnjzo.js"),
    forMimeTypes: ["image/svg+xml"]
  },
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.Video",
    name: "Video File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-video.element-COL8ynHI.js"),
    forMimeTypes: ["video/*"]
  }
], he = [
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.Media",
    name: "Media Entity Item Reference",
    element: () => import("./media-item-ref.element-DgGFeGlC.js"),
    forEntityTypes: [t]
  }
], De = [
  {
    type: "menu",
    alias: E,
    name: "Media Menu"
  },
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Media",
    name: "Media Menu Item",
    weight: 100,
    meta: {
      label: "Media",
      menus: [E],
      treeAlias: I,
      hideTreeRoot: !0
    }
  },
  {
    type: "workspaceContext",
    name: "Media Menu Structure Workspace Context",
    alias: "Umb.Context.Media.Menu.Structure",
    api: () => import("./media-menu-structure.context-4B8x1FL4.js"),
    conditions: [
      {
        alias: i,
        match: "Umb.Workspace.Media"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "variantMenuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.Media.Breadcrumb",
    name: "Media Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: i,
        match: "Umb.Workspace.Media"
      }
    ]
  }
], Be = [
  {
    type: "modal",
    alias: "Umb.Modal.ImageCropperEditor",
    name: "Image Cropper Editor Modal",
    js: () => import("./input-upload-field.element-B7PCDmnx.js").then((e) => e.y)
  }
], ge = [...Be], Le = [
  {
    type: "modal",
    alias: "Umb.Modal.MediaCaptionAltText",
    name: "Media Caption Alt Text",
    element: () => import("./input-upload-field.element-B7PCDmnx.js").then((e) => e.D)
  }
], we = [
  {
    type: "modal",
    alias: "Umb.Modal.MediaPicker",
    name: "Media Picker Modal",
    js: () => import("./input-upload-field.element-B7PCDmnx.js").then((e) => e.C)
  }
], $e = [...we], Ye = [...ge, ...Le, ...$e], Ne = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.ImageCropsConfiguration",
  name: "Image Crops Property Editor UI",
  element: () => import("./property-editor-ui-image-crops.element-BRXgzNWw.js"),
  meta: {
    label: "Image Crops Configuration",
    icon: "icon-autofill",
    group: "common"
  }
}, ve = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.MediaEntityPicker",
  name: "Media Entity Picker Property Editor UI",
  element: () => import("./property-editor-ui-media-entity-picker.element-BpMeGsrU.js"),
  meta: {
    label: "Media Entity Picker",
    icon: "icon-picture",
    group: "pickers",
    supportsReadOnly: !0
  }
}, We = {
  type: "propertyEditorSchema",
  name: "Email Address",
  alias: "Umbraco.ImageCropper",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.ImageCropper",
    settings: {
      properties: [
        {
          alias: "crops",
          label: "Define Crops",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.ImageCropsConfiguration"
        }
      ]
    }
  }
}, Fe = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.ImageCropper",
    name: "Image Cropper Property Editor UI",
    element: () => import("./property-editor-ui-image-cropper.element-CtjHbJKn.js"),
    meta: {
      label: "Image Cropper",
      icon: "icon-crop",
      group: "media",
      propertyEditorSchemaAlias: "Umbraco.ImageCropper"
    }
  },
  We
], Ve = {
  type: "propertyEditorSchema",
  name: "Media Picker",
  alias: "Umbraco.MediaPicker3",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.MediaPicker",
    settings: {
      properties: [
        {
          alias: "filter",
          label: "Accepted types",
          description: "Limit to specific types",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.MediaTypePicker"
        },
        {
          alias: "multiple",
          label: "Pick multiple items",
          description: "Outputs a IEnumerable",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "validationLimit",
          label: "Amount",
          description: "Set a required range of medias",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.NumberRange",
          config: [{ alias: "validationRange", value: { min: 0, max: 1 / 0 } }]
        },
        {
          alias: "startNodeId",
          label: "Start node",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.MediaEntityPicker",
          config: [{ alias: "validationLimit", value: { min: 0, max: 1 } }]
        },
        {
          alias: "enableLocalFocalPoint",
          label: "Enable Focal Point",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "crops",
          label: "Image Crops",
          description: "Local crops, stored on document",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.ImageCropsConfiguration"
        },
        {
          alias: "ignoreUserStartNodes",
          label: "Ignore User Start Nodes",
          description: "Selecting this option allows a user to choose nodes that they normally dont have access to.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ]
    }
  }
}, xe = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.MediaPicker",
    name: "Media Picker Property Editor UI",
    element: () => import("./property-editor-ui-media-picker.element-BX48IORS.js"),
    meta: {
      label: "Media Picker",
      propertyEditorSchemaAlias: "Umbraco.MediaPicker3",
      icon: "icon-picture",
      group: "media",
      supportsReadOnly: !0
    }
  },
  Ve
], He = {
  type: "propertyEditorSchema",
  name: "File upload",
  alias: "Umbraco.UploadField",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.UploadField",
    settings: {
      properties: [
        {
          alias: "fileExtensions",
          label: "Accepted file extensions",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.AcceptedUploadTypes"
        }
      ]
    }
  }
}, Ke = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.UploadField",
    name: "Upload Field Property Editor UI",
    element: () => import("./property-editor-ui-upload-field.element-mkLEj87e.js"),
    meta: {
      label: "Upload Field",
      propertyEditorSchemaAlias: "Umbraco.UploadField",
      icon: "icon-download-alt",
      group: "media"
    }
  },
  He
], Ge = [
  ...Fe,
  ...xe,
  ...Ke,
  Ne,
  ve
], je = [
  {
    type: "repository",
    alias: x,
    name: "Bulk Trash Media Repository",
    api: () => import("./trash.repository-dgxJZo6m.js")
  }
], qe = {
  type: "entityBulkAction",
  kind: Z,
  alias: "Umb.EntityBulkAction.Media.Trash",
  name: "Trash Media Entity Bulk Action",
  weight: 10,
  forEntityTypes: [t],
  meta: {
    itemRepositoryAlias: p,
    recycleBinRepositoryAlias: m,
    referenceRepositoryAlias: l
  },
  conditions: [
    {
      alias: s,
      match: b
    }
  ]
}, ze = [qe, ...je], Je = [
  {
    type: "entityAction",
    kind: "trashWithRelation",
    alias: "Umb.EntityAction.Media.RecycleBin.Trash",
    name: "Trash Media Entity Action",
    forEntityTypes: [t],
    meta: {
      itemRepositoryAlias: p,
      recycleBinRepositoryAlias: m,
      referenceRepositoryAlias: l
    },
    conditions: [
      {
        alias: d
      }
    ]
  },
  {
    type: "entityAction",
    kind: "restoreFromRecycleBin",
    alias: "Umb.EntityAction.Media.RecycleBin.Restore",
    name: "Restore Media From Recycle Bin Entity Action",
    forEntityTypes: [t],
    meta: {
      itemRepositoryAlias: p,
      recycleBinRepositoryAlias: m,
      pickerModal: J
    },
    conditions: [
      {
        alias: g
      }
    ]
  },
  {
    type: "entityAction",
    kind: "emptyRecycleBin",
    alias: "Umb.EntityAction.Media.RecycleBin.Empty",
    name: "Empty Media Recycle Bin Entity Action",
    forEntityTypes: [A],
    meta: {
      recycleBinRepositoryAlias: m
    },
    conditions: [
      {
        alias: ee
      }
    ]
  },
  ...ze
], Xe = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Media.RecycleBin",
    name: "Media Recycle Bin Menu Item",
    weight: 100,
    meta: {
      treeAlias: B,
      label: "Recycle Bin",
      icon: "icon-trash",
      menus: [E]
    },
    conditions: [
      {
        alias: "Umb.Condition.CurrentUser.AllowMediaRecycleBin"
      }
    ]
  }
], Qe = [
  {
    type: "repository",
    alias: m,
    name: "Media Recycle Bin Repository",
    api: () => import("./media-recycle-bin.repository-DB9dfBvR.js")
  }
], Ze = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.MediaRecycleBin.Tree.ReloadChildrenOf",
    name: "Reload Media Recycle Bin Tree Item Children Entity Action",
    forEntityTypes: [A]
  }
], ei = [
  {
    type: "repository",
    alias: k,
    name: "Media Recycle Bin Tree Repository",
    api: () => import("./media-recycle-bin-tree.repository-CfGGRI26.js")
  },
  {
    type: "treeStore",
    alias: H,
    name: "Media Recycle Bin Tree Store",
    api: () => import("./media-recycle-bin-tree.store-BfMB_FQC.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: B,
    name: "Media Recycle Bin Tree",
    meta: {
      repositoryAlias: k
    }
  },
  {
    type: "treeItem",
    kind: "recycleBin",
    alias: "Umb.TreeItem.Media.RecycleBin",
    name: "Media Recycle Bin Tree Item",
    forEntityTypes: [A],
    meta: {
      supportedEntityTypes: [t]
    }
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.Media.RecycleBin.Root",
    name: "Media Recycle Bin Root Workspace",
    meta: {
      entityType: A,
      headline: "#general_recycleBin"
    }
  },
  ...Ze
], ii = [
  {
    type: "condition",
    name: "Allow Media Recycle Bin Current User Condition",
    alias: "Umb.Condition.CurrentUser.AllowMediaRecycleBin",
    api: () => import("./allow-media-recycle-bin.condition-C80fSgKr.js")
  },
  ...Je,
  ...Xe,
  ...Qe,
  ...ei
], ti = [
  {
    type: "repository",
    alias: l,
    name: "Media Reference Repository",
    api: () => import("./media-reference.repository-D4WLAek5.js")
  },
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.MediaReferenceResponse",
    name: "Media Reference Response Management Api Data Mapping",
    api: () => import("./media-reference-response.management-api.mapping-B6qHx0Sl.js"),
    forDataSource: L,
    forDataModel: "MediaReferenceResponseModel"
  }
], ai = [
  {
    type: "workspaceInfoApp",
    kind: "entityReferences",
    name: "Media References Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Media.References",
    conditions: [
      {
        alias: i,
        match: a
      }
    ],
    meta: {
      referenceRepositoryAlias: l
    }
  }
], oi = [...ti, ...ai], ni = [
  {
    type: "repository",
    alias: h,
    name: "Media Detail Repository",
    api: () => import("./media-item.store.context-token-9YLCPlu1.js").then((e) => e.m)
  },
  {
    type: "store",
    alias: K,
    name: "Media Detail Store",
    api: () => import("./media-detail.store-hmWNM-ZQ.js")
  }
], si = [
  {
    type: "repository",
    alias: p,
    name: "Media Item Repository",
    api: () => import("./input-upload-field.element-B7PCDmnx.js").then((e) => e.z)
  },
  {
    type: "itemStore",
    alias: X,
    name: "Media Item Store",
    api: () => import("./media-item.store-Bkuk0XCm.js")
  }
], ri = [
  {
    type: "repository",
    alias: G,
    name: "Media Validation Repository",
    api: () => import("./media-validation.repository-3oFTDjyn.js")
  }
], pi = [...ni, ...si, ...ri], mi = [
  {
    name: "Media Search Provider",
    alias: Q,
    type: "searchProvider",
    api: () => import("./input-upload-field.element-B7PCDmnx.js").then((e) => e.B),
    weight: 700,
    meta: {
      label: "Media"
    }
  },
  {
    name: "Media Search Result Item ",
    alias: "Umb.SearchResultItem.Media",
    type: "searchResultItem",
    forEntityTypes: [t]
  }
], li = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.Media",
    name: "Media Dashboard",
    element: () => import("./media-dashboard.element-C0J0RVkS.js"),
    weight: 200,
    meta: {
      label: "#general_media",
      pathname: "media"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "Umb.Section.Media"
      }
    ]
  }
], ci = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.Media.Tree.ReloadChildrenOf",
    name: "Reload Media Tree Item Children Entity Action",
    forEntityTypes: [t, c]
  }
], di = [
  {
    type: "repository",
    alias: M,
    name: "Media Tree Repository",
    api: () => import("./input-upload-field.element-B7PCDmnx.js").then((e) => e.A)
  },
  {
    type: "treeStore",
    alias: j,
    name: "Media Tree Store",
    api: () => import("./media-tree.store-B_SdQbiU.js")
  },
  {
    type: "tree",
    alias: I,
    name: "Media Tree",
    element: () => import("./media-tree.element-yMs0cVKY.js"),
    api: () => import("./media-tree.context-CVrMkrme.js"),
    meta: {
      repositoryAlias: M
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.Media",
    name: "Media Tree Item",
    element: () => import("./media-tree-item.element-BQZeslKu.js"),
    api: () => import("./media-tree-item.context-Dp9t5q1N.js"),
    forEntityTypes: [t]
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.Media.Root",
    name: "Media Tree Root",
    forEntityTypes: [c]
  },
  ...ci
], yi = {
  type: "repository",
  alias: q,
  name: "Media Url Repository",
  api: () => import("./media-url.repository-DUerHiJb.js").then((e) => e.m)
}, Mi = {
  type: "itemStore",
  alias: z,
  name: "Media Url Store",
  api: () => import("./media-url.store-CFQu1HhG.js")
}, Ei = [yi, Mi], Ai = [
  {
    type: "workspaceInfoApp",
    name: "Media Links Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Media.Links",
    element: () => import("./media-links-workspace-info-app.element-DAuwZ3Sc.js"),
    weight: 100,
    conditions: [
      {
        alias: i,
        match: a
      }
    ]
  }
], Ti = [...Ei, ...Ai], _i = [
  {
    type: "workspace",
    kind: "routable",
    alias: a,
    name: "Media Workspace",
    api: () => import("./media-workspace.context-BjU7aIKr.js"),
    meta: {
      entityType: "media"
    }
  },
  {
    type: "workspaceView",
    kind: "contentCollection",
    alias: "Umb.WorkspaceView.Media.Collection",
    name: "Media Workspace Collection View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-grid"
    },
    conditions: [
      {
        alias: i,
        match: a
      },
      {
        alias: "Umb.Condition.WorkspaceHasCollection"
      }
    ]
  },
  {
    type: "workspaceView",
    kind: "contentEditor",
    alias: "Umb.WorkspaceView.Media.Edit",
    name: "Media Workspace Edit View",
    weight: 200,
    meta: {
      label: "#general_details",
      pathname: "media",
      icon: "icon-picture"
    },
    conditions: [
      {
        alias: i,
        match: a
      },
      {
        alias: ie
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Media.Info",
    name: "Media Workspace Info View",
    element: () => import("./media-workspace-view-info.element-LNgMTREq.js"),
    weight: 100,
    meta: {
      label: "#general_info",
      pathname: "info",
      icon: "info"
    },
    conditions: [
      {
        alias: i,
        match: a
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Media.Save",
    name: "Save Media Workspace Action",
    api: S,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: i,
        match: a
      },
      {
        alias: d
      }
    ]
  }
], Ii = [
  ...Me,
  ..._e,
  ...Se,
  ...Ce,
  ...Pe,
  ...he,
  ...De,
  ...Ye,
  ...Ge,
  ...ii,
  ...oi,
  ...pi,
  ...mi,
  ...li,
  ...di,
  ...Ti,
  ..._i
], R = "Umb.Section.Media", Ui = [
  {
    type: "section",
    alias: R,
    name: "Media Section",
    weight: 900,
    meta: {
      label: "#sections_media",
      pathname: "media"
    },
    conditions: [
      {
        alias: te,
        match: R
      }
    ]
  },
  {
    type: "sectionSidebarApp",
    kind: "menuWithEntityActions",
    alias: "Umb.SectionSidebarMenu.Media",
    name: "Media Section Sidebar Menu",
    weight: 100,
    meta: {
      label: "#sections_media",
      menu: E,
      entityType: c
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: R
      }
    ]
  }
], Ri = [
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.MediaType.Default",
    name: "Default Media Type Entity Create Option Action",
    weight: 1200,
    api: () => import("./default-media-type-create-option-action-4obVQqzR.js"),
    forEntityTypes: [r, o],
    meta: {
      icon: "icon-picture",
      label: "#content_mediatype"
    }
  }
], fi = [
  {
    type: "entityCreateOptionAction",
    kind: "folder",
    alias: "Umb.EntityCreateOptionAction.MediaType.Folder",
    name: "Media Type Folder Entity Create Option Action",
    forEntityTypes: [r, o],
    meta: {
      icon: "icon-folder",
      label: "#create_folder",
      description: "#create_folderDescription",
      folderRepositoryAlias: T
    }
  }
], bi = [
  {
    type: "entityAction",
    kind: "create",
    alias: "Umb.EntityAction.MediaType.Create",
    name: "Create Media Type Entity Action",
    weight: 1200,
    forEntityTypes: [n, r, o]
  },
  // TODO: Deprecated: Will be removed in 17.0.0
  {
    type: "modal",
    alias: "Umb.Modal.MediaTypeCreateOptions",
    name: "Media Type Create Options Modal",
    element: () => import("./media-type-create-options-modal.element-CjSx0Sj0.js")
  },
  ...Ri,
  ...fi
], Si = [
  {
    type: "repository",
    alias: w,
    name: "Move Media Type Repository",
    api: () => import("./media-type-move.repository-nHNwQHaQ.js")
  }
], ui = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.MediaType.MoveTo",
    name: "Move Media Type Entity Action",
    forEntityTypes: [n],
    meta: {
      treeRepositoryAlias: _,
      moveRepositoryAlias: w,
      treeAlias: U,
      foldersOnly: !0
    }
  },
  ...Si
], ki = [
  {
    type: "repository",
    alias: $,
    name: "Duplicate Media Type Repository",
    api: () => import("./media-type-duplicate.repository-B6vj3V1C.js")
  }
], Oi = [
  {
    type: "entityAction",
    kind: "duplicateTo",
    alias: "Umb.EntityAction.MediaType.DuplicateTo",
    name: "Duplicate Document To Entity Action",
    forEntityTypes: [n],
    meta: {
      duplicateRepositoryAlias: $,
      treeAlias: U,
      treeRepositoryAlias: _,
      foldersOnly: !0
    }
  },
  ...ki
], Ci = [
  {
    type: "repository",
    alias: ae,
    name: "Export Media Type Repository",
    api: () => import("./media-type-export.repository-CM32IJJV.js")
  }
], Pi = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.MediaType.Export",
    name: "Export Media Type Entity Action",
    forEntityTypes: [n],
    api: () => import("./media-type-export.action-DgXaPUln.js"),
    meta: {
      icon: "icon-download-alt",
      label: "#actions_export",
      additionalOptions: !0
    }
  },
  ...Ci
], hi = [
  {
    type: "repository",
    alias: oe,
    name: "Import Media Type Repository",
    api: () => import("./media-type-import.repository-CMsl0c45.js")
  }
], Di = [
  {
    type: "modal",
    alias: "Umb.Modal.MediaType.Import",
    name: "Media Type Import Modal",
    element: () => import("./media-type-import-modal.element-B7Sr7R8P.js")
  }
], Bi = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.MediaType.Import",
    name: "Export Media Type Entity Action",
    forEntityTypes: [r],
    api: () => import("./media-type-import.action-DihBMfQr.js"),
    meta: {
      icon: "icon-page-up",
      label: "#actions_import",
      additionalOptions: !0
    }
  },
  ...hi,
  ...Di
], gi = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.MediaType.Delete",
    name: "Delete Media Type Entity Action",
    forEntityTypes: [n],
    meta: {
      detailRepositoryAlias: N,
      itemRepositoryAlias: Y
    }
  },
  ...bi,
  ...ui,
  ...Oi,
  ...Pi,
  ...Bi
], Li = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.MediaTypes",
    name: "Media Types Menu Item",
    weight: 800,
    meta: {
      label: "Media Types",
      treeAlias: U,
      menus: ["Umb.Menu.StructureSettings"]
    }
  },
  {
    type: "workspaceContext",
    name: "Media Type Menu Structure Workspace Context",
    alias: "Umb.Context.MediaType.Menu.Structure",
    api: () => import("./media-type-menu-structure.context-CQ_nDbI_.js"),
    conditions: [
      {
        alias: i,
        match: "Umb.Workspace.MediaType"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.MediaType.Breadcrumb",
    name: "Media Type Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: i,
        match: "Umb.Workspace.MediaType"
      }
    ]
  }
], wi = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.MediaTypePicker",
  name: "Media Type Picker Property Editor UI",
  element: () => import("./property-editor-ui-media-type-picker.element-8UMBoQOq.js"),
  meta: {
    label: "Media Type Picker",
    icon: "icon-media-dashed-line",
    group: "advanced"
  }
}, $i = [wi], Yi = [
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.MediaTypePropertyTypeReferenceResponse",
    name: "Media Type Property Type Reference Response Management Api Data Mapping",
    api: () => import("./media-type-property-type-reference-response.management-api.mapping-BhJ2k30W.js"),
    forDataSource: L,
    forDataModel: "MediaTypePropertyTypeReferenceResponseModel"
  },
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.MediaTypePropertyType",
    name: "Media Type Property Type Entity Item Reference",
    element: () => import("./media-type-property-type-item-ref.element-Dar3TqKd.js"),
    forEntityTypes: [ne]
  }
], Ni = [
  {
    type: "repository",
    alias: N,
    name: "Media Types Repository",
    api: () => import("./media-type-detail.repository-3lOqmWA1.js")
  },
  {
    type: "store",
    alias: se,
    name: "Media Type Store",
    api: () => import("./media-type-detail.store-DWt7SJMg.js")
  }
], vi = [
  {
    type: "repository",
    alias: Y,
    name: "Media Type Item Repository",
    api: () => import("./media-type-item.repository-CgmkdcvQ.js")
  },
  {
    type: "itemStore",
    alias: re,
    name: "Media Type Item Store",
    api: () => import("./media-type-item.store-BUHeZIbc.js")
  }
], Wi = [
  {
    type: "repository",
    alias: v,
    name: "Media Type Composition Repository",
    api: () => import("./media-type-composition.repository-BZyDt7xr.js")
  }
], Fi = [...Ni, ...vi, ...Wi], Vi = [
  {
    name: "Media Type Search Provider",
    alias: "Umb.SearchProvider.MediaType",
    type: "searchProvider",
    api: () => import("./media-type.search-provider-Ccqwaw68.js"),
    weight: 500,
    meta: {
      label: "Media Types"
    }
  },
  {
    name: "Media Type Search Result Item ",
    alias: "Umb.SearchResultItem.MediaType",
    type: "searchResultItem",
    forEntityTypes: [n]
  }
], xi = [
  {
    type: "repository",
    alias: T,
    name: "Media Type Folder Repository",
    api: () => import("./media-type-folder.repository-DbqwPAKh.js")
  },
  {
    type: "store",
    alias: pe,
    name: "Media Type Folder Store",
    api: () => import("./media-type-folder.store-R0H7L3To.js")
  }
], Hi = [
  {
    type: "workspace",
    kind: "routable",
    alias: f,
    name: "Media Type Folder Workspace",
    api: () => import("./media-type-folder-workspace.context-C1Cp19Zi.js"),
    meta: {
      entityType: o
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.MediaType.Folder.Submit",
    name: "Submit Media Type Folder Workspace Action",
    api: S,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: i,
        match: f
      }
    ]
  }
], Ki = [
  {
    type: "entityAction",
    kind: "folderUpdate",
    alias: "Umb.EntityAction.MediaType.Folder.Update",
    name: "Rename Media Type Folder Entity Action",
    forEntityTypes: [o],
    meta: {
      folderRepositoryAlias: T
    }
  },
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: "Umb.EntityAction.MediaType.Folder.Delete",
    name: "Delete Media Type Folder Entity Action",
    forEntityTypes: [o],
    meta: {
      folderRepositoryAlias: T
    }
  },
  ...xi,
  ...Hi
], Gi = [
  {
    type: "collectionAction",
    kind: "create",
    name: "Media Type Tree Item Children Collection Create Action",
    alias: "Umb.CollectionAction.MediaTypeTreeItemChildren.Create",
    conditions: [
      {
        alias: s,
        match: u
      }
    ]
  }
], ji = [
  {
    type: "repository",
    alias: W,
    name: "Media Type Tree Item Children Collection Repository",
    api: () => import("./media-type-tree-item-children-collection.repository-ilxngzX1.js")
  }
], qi = [
  {
    type: "collectionView",
    alias: "Umb.CollectionView.MediaType.TreeItem.Table",
    name: "Media Type Tree Item Table Collection View",
    element: () => import("./media-type-tree-item-table-collection-view.element-Bxmjx5Ev.js"),
    weight: 300,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: s,
        match: u
      }
    ]
  }
], zi = [
  {
    type: "collection",
    kind: "default",
    alias: u,
    name: "Media Type Tree Item Children Collection",
    meta: {
      repositoryAlias: W
    }
  },
  ...Gi,
  ...ji,
  ...qi
], Ji = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.MediaType.Tree.ReloadChildrenOf",
    name: "Reload Media Type Tree Item Children Entity Action",
    forEntityTypes: [n, r, o]
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.MediaType.TreeItemChildrenCollection",
    name: "Media Type Tree Item Children Collection Workspace View",
    meta: {
      label: "Folder",
      pathname: "folder",
      icon: "icon-folder",
      collectionAlias: "Umb.Collection.MediaType.TreeItemChildren"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        oneOf: [me, f]
      }
    ]
  },
  ...zi
], Xi = [
  {
    type: "repository",
    alias: _,
    name: "Media Type Tree Repository",
    api: () => import("./media-type-tree.repository-BNPCC9If.js")
  },
  {
    type: "treeStore",
    alias: le,
    name: "Media Type Tree Store",
    api: () => import("./media-type-tree.store-DrT5Agn0.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: U,
    name: "Media Type Tree",
    meta: {
      repositoryAlias: _
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.MediaType",
    name: "Media Type Tree Item",
    forEntityTypes: [n, r, o]
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.MediaType.Root",
    name: "Media Type Root Workspace",
    meta: {
      entityType: r,
      headline: "#treeHeaders_mediaTypes"
    }
  },
  ...Ki,
  ...Ji
], Qi = [
  {
    type: "workspace",
    kind: "routable",
    alias: y,
    name: "Media Type Workspace",
    api: () => import("./media-type-workspace.context-1Sr6UEi_.js"),
    meta: {
      entityType: "media-type"
    }
  },
  {
    type: "workspaceView",
    kind: "contentTypeDesignEditor",
    alias: "Umb.WorkspaceView.MediaType.Design",
    name: "Media Type Workspace Design View",
    meta: {
      label: "#general_design",
      pathname: "design",
      icon: "icon-document-dashed-line",
      compositionRepositoryAlias: v
    },
    conditions: [
      {
        alias: i,
        match: y
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.MediaType.Structure",
    name: "Media Type Workspace Structure View",
    element: () => import("./media-type-workspace-view-structure.element-C89ijnho.js"),
    weight: 800,
    meta: {
      label: "#contentTypeEditor_structure",
      pathname: "structure",
      icon: "icon-mindmap"
    },
    conditions: [
      {
        alias: i,
        match: y
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.MediaType.Save",
    name: "Save Media Type Workspace Action",
    api: S,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: i,
        match: y
      }
    ]
  }
], Zi = [
  ...gi,
  ...Li,
  ...$i,
  ...Yi,
  ...Fi,
  ...Vi,
  ...Xi,
  ...Qi
], et = [
  {
    type: "repository",
    alias: ce,
    name: "Imaging Repository",
    api: () => import("./imaging.repository-C1w8u3qE.js")
  },
  {
    type: "store",
    alias: de,
    name: "Imaging Store",
    api: () => import("./imaging.store-COwLNIg-.js")
  }
], it = [
  {
    type: "modal",
    alias: "Umb.Modal.Dropzone.MediaTypePicker",
    name: "Dropzone Media Type Picker Modal",
    element: () => import("./dropzone-media-type-picker-modal.element-CcTa8a3H.js")
  }
], tt = [...it], St = [
  ...Ui,
  ...Ii,
  ...Zi,
  ...et,
  ...tt
];
export {
  St as manifests
};
//# sourceMappingURL=manifests.js.map
