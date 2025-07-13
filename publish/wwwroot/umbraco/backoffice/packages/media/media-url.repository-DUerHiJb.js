import { UmbContextToken as s } from "@umbraco-cms/backoffice/context-api";
import { MediaService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemServerDataSourceBase as a, UmbItemRepositoryBase as i } from "@umbraco-cms/backoffice/repository";
const l = new s("UmbMediaUrlStore");
class c extends a {
  /**
   * Creates an instance of UmbMediaUrlServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaUrlServerDataSource
   */
  constructor(e) {
    super(e, {
      getItems: m,
      mapper: u
    });
  }
}
const m = (r) => n.getMediaUrls({ id: r }), u = (r) => {
  const e = r.urlInfos.length ? r.urlInfos[0].url : void 0, t = e ? e.slice(e.lastIndexOf(".") + 1, e.length) : void 0;
  return {
    unique: r.id,
    url: e,
    extension: t
    /*info: item.urlInfos.map((urlInfo) => ({
    	...urlInfo,
    	extension: '',
    })),*/
  };
};
class o extends i {
  constructor(e) {
    super(e, c, l);
  }
}
const b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaUrlRepository: o,
  api: o,
  default: o
}, Symbol.toStringTag, { value: "Module" }));
export {
  l as U,
  o as a,
  b as m
};
//# sourceMappingURL=media-url.repository-DUerHiJb.js.map
