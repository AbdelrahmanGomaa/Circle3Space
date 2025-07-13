import { k as t } from "./manifests-BeI4zfAH.js";
import { UmbDefaultCollectionContext as o } from "@umbraco-cms/backoffice/collection";
class i extends o {
  constructor(e) {
    super(e, t);
  }
  /**
   * Sets the member type filter for the collection and refreshes the collection.
   * @param {Array<string>} selection
   * @memberof UmbMemberCollectionContext
   */
  setMemberTypeFilter(e) {
    this.setFilter({ memberTypeId: e });
  }
}
export {
  i as UmbMemberCollectionContext,
  i as api
};
//# sourceMappingURL=member-collection.context-C6ViPVIN.js.map
