import { UmbModalToken as t } from "@umbraco-cms/backoffice/modal";
import { U as i } from "./default.action.kind-B00NCT7z.js";
const a = new t("Umb.Modal.Entity.CreateOptionActionList", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), s = "Umb.Modal.Entity.CreateOptionActionList", e = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.Delete",
  matchKind: "delete",
  matchType: "entityAction",
  manifest: {
    ...i.manifest,
    type: "entityAction",
    kind: "delete",
    api: () => import("./delete.action-DXp0Xn_o.js"),
    weight: 1100,
    forEntityTypes: [],
    meta: {
      icon: "icon-trash",
      label: "#actions_delete",
      additionalOptions: !0,
      itemRepositoryAlias: "",
      detailRepositoryAlias: ""
    }
  }
}, _ = e, T = "Umb.Condition.EntityHasChildren";
export {
  a as U,
  s as a,
  e as b,
  T as c,
  _ as m
};
//# sourceMappingURL=constants-8D5bBcdE.js.map
