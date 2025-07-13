const e = {
  type: "kind",
  alias: "Umb.Kind.EntityBulkAction.Default",
  matchKind: "default",
  matchType: "entityBulkAction",
  manifest: {
    type: "entityBulkAction",
    kind: "default",
    weight: 1e3,
    element: () => import("./entity-bulk-action.element-Df4eBq9_.js"),
    meta: {
      icon: "",
      label: "Default Entity Bulk Action"
    }
  }
}, a = e, t = "delete", i = {
  type: "kind",
  alias: "Umb.Kind.EntityBulkAction.Delete",
  matchKind: t,
  matchType: "entityBulkAction",
  manifest: {
    ...e.manifest,
    type: "entityBulkAction",
    kind: t,
    api: () => import("./bulk-delete.action-wZYSm2uv.js").then((n) => n.b),
    weight: 1100,
    meta: {
      icon: "icon-trash",
      label: "#actions_delete"
    }
  }
}, _ = i, c = "trash";
export {
  e as U,
  i as a,
  t as b,
  c,
  _ as d,
  a as m
};
//# sourceMappingURL=constants-CXkPsy0q.js.map
