import { f as o, g as e } from "./constants-BstfLIKC.js";
import { UMB_NOTIFICATION_CONTEXT as i } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as r } from "@umbraco-cms/backoffice/repository";
class _ extends r {
  constructor(s) {
    super(s), this.init = Promise.all([
      this.consumeContext(o, (t) => {
        this.detailStore = t;
      }).asPromise(),
      this.consumeContext(e, (t) => {
        this.itemStore = t;
      }).asPromise(),
      this.consumeContext(i, (t) => {
        this.notificationContext = t;
      }).asPromise()
    ]);
  }
}
export {
  _ as U
};
//# sourceMappingURL=user-repository-base-B115G9Ys.js.map
