import { U as e } from "./current-user.context.token-BnYpMzWI.js";
import { UmbContextConsumerController as o } from "@umbraco-cms/backoffice/context-api";
const m = async (t) => {
  const r = new o(t, e), n = await r.asPromise();
  return r.destroy(), n.isCurrentUserAdmin();
};
export {
  m as i
};
//# sourceMappingURL=is-current-user-an-admin.function-BjNT31EQ.js.map
