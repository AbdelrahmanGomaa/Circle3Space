import { U as I } from "./paths-DZopmHn1.js";
import { v as Y, c as i, d as S, g as m, h as B, i as P, b as p, j as L, k as n, m as c, a as x, n as f, l as y, e as b, q as l, o as H, p as W, t as d, r as K, s as V, u, w as X, f as k } from "./paths-DZopmHn1.js";
import { a as w, U as g } from "./constants-Dw55vzll.js";
import { U as q } from "./export-dictionary-modal.token-Cok5RBD9.js";
import { U as z } from "./import-dictionary-modal.token-CKI-F1TP.js";
import { UmbModalToken as T } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL_ALIAS as A } from "@umbraco-cms/backoffice/tree";
import { UmbDictionaryDetailRepository as G } from "./dictionary-detail.repository-CN0ZnlNz.js";
import { UmbDictionaryItemRepository as Q } from "./dictionary-item.repository-DxihQe1A.js";
import { UmbDictionaryImportRepository as $ } from "./dictionary-import.repository-C5zmqQoX.js";
import { UmbDictionaryExportRepository as I_ } from "./dictionary-export.repository-B9P6YEJT.js";
import { UmbDictionaryTreeRepository as A_ } from "./dictionary-tree.repository-CMhx3-OI.js";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { UmbPickerInputContext as R } from "@umbraco-cms/backoffice/picker-input";
const O = new T(A, {
  modal: {
    type: "sidebar",
    size: "small"
  },
  data: {
    hideTreeRoot: !0,
    treeAlias: "Umb.Tree.Dictionary"
  }
});
class e extends R {
  constructor(_) {
    super(_, I, O);
  }
}
export {
  Y as UMB_CREATE_DICTIONARY_WORKSPACE_PATH_PATTERN,
  i as UMB_DICTIONARY_COLLECTION_ALIAS,
  S as UMB_DICTIONARY_COLLECTION_REPOSITORY_ALIAS,
  m as UMB_DICTIONARY_DETAIL_REPOSITORY_ALIAS,
  B as UMB_DICTIONARY_DETAIL_STORE_ALIAS,
  P as UMB_DICTIONARY_DETAIL_STORE_CONTEXT,
  p as UMB_DICTIONARY_ENTITY_TYPE,
  L as UMB_DICTIONARY_EXPORT_REPOSITORY_ALIAS,
  n as UMB_DICTIONARY_IMPORT_REPOSITORY_ALIAS,
  I as UMB_DICTIONARY_ITEM_REPOSITORY_ALIAS,
  c as UMB_DICTIONARY_ITEM_STORE_CONTEXT,
  w as UMB_DICTIONARY_OVERVIEW_DASHBOARD_PATH,
  g as UMB_DICTIONARY_OVERVIEW_DASHBOARD_PATHNAME,
  O as UMB_DICTIONARY_PICKER_MODAL,
  x as UMB_DICTIONARY_ROOT_ENTITY_TYPE,
  f as UMB_DICTIONARY_SEARCH_PROVIDER_ALIAS,
  y as UMB_DICTIONARY_STORE_ALIAS,
  b as UMB_DICTIONARY_TABLE_COLLECTION_VIEW_ALIAS,
  l as UMB_DICTIONARY_TREE_ALIAS,
  H as UMB_DICTIONARY_TREE_REPOSITORY_ALIAS,
  W as UMB_DICTIONARY_TREE_STORE_ALIAS,
  d as UMB_DICTIONARY_TREE_STORE_CONTEXT,
  K as UMB_DICTIONARY_WORKSPACE_ALIAS,
  V as UMB_DICTIONARY_WORKSPACE_CONTEXT,
  u as UMB_DICTIONARY_WORKSPACE_PATH,
  X as UMB_EDIT_DICTIONARY_WORKSPACE_PATH_PATTERN,
  q as UMB_EXPORT_DICTIONARY_MODAL,
  z as UMB_IMPORT_DICTIONARY_MODAL,
  k as UMB_MOVE_DICTIONARY_REPOSITORY_ALIAS,
  G as UmbDictionaryDetailRepository,
  I_ as UmbDictionaryExportRepository,
  $ as UmbDictionaryImportRepository,
  Q as UmbDictionaryItemRepository,
  e as UmbDictionaryPickerContext,
  e as UmbDictionaryPickerInputContext,
  A_ as UmbDictionaryTreeRepository
};
//# sourceMappingURL=index.js.map
