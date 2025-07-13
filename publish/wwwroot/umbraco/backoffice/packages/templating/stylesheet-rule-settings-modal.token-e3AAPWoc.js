import { UmbContextToken as e } from "@umbraco-cms/backoffice/context-api";
import { UMB_TREE_PICKER_MODAL_ALIAS as S } from "@umbraco-cms/backoffice/tree";
import { UmbModalToken as t } from "@umbraco-cms/backoffice/modal";
const T = new e("UmbStylesheetItemStore"), o = "Umb.Repository.Stylesheet.Item", _ = "Umb.ItemStore.Stylesheet", l = [
  {
    type: "repository",
    alias: o,
    name: "Stylesheet Item Repository",
    api: () => import("./stylesheet-item.repository-3aujSA1V.js")
  },
  {
    type: "itemStore",
    alias: "Umb.ItemStore.Stylesheet",
    name: "Stylesheet Item Store",
    api: () => import("./stylesheet-item.store-D8laYfMz.js")
  }
], i = new e(
  "UmbStylesheetDetailStore"
), r = new t(S, {
  modal: {
    type: "sidebar",
    size: "small"
  },
  data: {
    treeAlias: "Umb.Tree.Stylesheet",
    hideTreeRoot: !0
  }
}), s = "Umb.Modal.StylesheetRuleSettings", n = [
  {
    type: "modal",
    alias: s,
    name: "Stylesheet Rule Settings Modal",
    element: () => import("./stylesheet-rule-settings-modal.element-D5mr1kCb.js")
  }
], U = new t(
  s,
  {
    modal: {
      type: "sidebar",
      size: "medium"
    },
    value: { rule: null }
  }
);
export {
  r as U,
  s as a,
  U as b,
  i as c,
  o as d,
  _ as e,
  T as f,
  n as g,
  l as m
};
//# sourceMappingURL=stylesheet-rule-settings-modal.token-e3AAPWoc.js.map
